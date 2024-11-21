// backend/src/dataAccess/user.js

import { Mongo } from "../database/mongo.js";
import { ObjectId } from "mongodb";
import crypto from 'crypto';

const collectionName = 'users';

export default class UsersDataAccess {
    // Método para registrar um novo usuário
    async registerUser(req, res) {
        const { fullname, email, password, role } = req.body;

        try {
            // Verifique se todos os campos necessários estão presentes
            if (!fullname || !email || !password) {
                return res.status(400).json({ error: 'Missing required fields: fullname, email, or password.' });
            }

            // Lógica de hash da senha
            const salt = crypto.randomBytes(16); // Gera um salt
            crypto.pbkdf2(password, salt, 310000, 16, 'sha256', async (err, hashedPassword) => {
                if (err) {
                    return res.status(500).json({ error: 'Error during password hashing.' });
                }

                // Prepara os dados do usuário
                const userData = {
                    fullname, // Nome completo
                    email,    // Email do usuário
                    password: hashedPassword, // Senha criptografada
                    salt,     // Salt da senha
                    role: role || 'usuario', // Define 'usuario' como o role padrão se não especificado
                };

                // Insere o novo usuário no banco de dados
                const result = await Mongo.db.collection(collectionName).insertOne(userData);
                
                // Verifique se o usuário foi inserido corretamente
                if (result.insertedCount === 1) {
                    return res.status(201).json({ message: 'User registered successfully!' });
                } else {
                    return res.status(500).json({ error: 'Failed to insert user into the database.' });
                }
            });
        } catch (error) {
            return res.status(500).json({ error: error.message }); // Retorna erro de exceção
        }
    }

    // Método para obter todos os usuários
    async getUsers() {
        const result = await Mongo.db
            .collection(collectionName)
            .find({}) // Obtém todos os usuários
            .toArray(); // Converte o resultado em um array

        return result;
    }

    // Método para obter um usuário por ID
    async getUserById(userId) {
        try {
            // Converte o ID para um ObjectId válido do MongoDB
            const userObjectId = new ObjectId(userId);

            const user = await Mongo.db
                .collection(collectionName)
                .findOne({ _id: userObjectId }); // Busca o usuário com o ID fornecido

            if (!user) {
                throw new Error('User not found');
            }

            return user;
        } catch (error) {
            throw new Error('Error fetching user by ID: ' + error.message);
        }
    }

    // Método para atualizar um usuário
    async updateUser(userId, updatedData) {
        try {
            // Converte o ID para um ObjectId válido do MongoDB
            const userObjectId = new ObjectId(userId);

            // Verifica se há dados a serem atualizados
            const updateResult = await Mongo.db
                .collection(collectionName)
                .updateOne({ _id: userObjectId }, { $set: updatedData });

            if (updateResult.modifiedCount === 1) {
                return { message: 'User updated successfully!' };
            } else {
                throw new Error('No changes made or user not found');
            }
        } catch (error) {
            throw new Error('Error updating user: ' + error.message);
        }
    }
}
