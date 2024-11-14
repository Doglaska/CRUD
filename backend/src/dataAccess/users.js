import { Mongo } from "../database/mongo.js";
import { ObjectId } from "mongodb";
import crypto from 'crypto';
import { promisify } from 'util';

const collectionName = 'users';
const pbkdf2 = promisify(crypto.pbkdf2);

export default class UsersDataAccess {
    async getUsers() {
        const result = await Mongo.db
            .collection(collectionName)
            .find({})
            .toArray();

        return result;
    }

    async deleteUser(userId) {
        const result = await Mongo.db
            .collection(collectionName)
            .findOneAndDelete({ _id: new ObjectId(userId) });

        return result;
    }

    async updateUser(userId, userData) {
        if (userData.password) {
            try {
                const salt = crypto.randomBytes(16).toString('hex');
                const hashedPassword = await pbkdf2(userData.password, salt, 310000, 16, 'sha256');

                userData = { ...userData, password: hashedPassword.toString('hex'), salt };

                const result = await Mongo.db
                    .collection(collectionName)
                    .findOneAndUpdate(
                        { _id: new ObjectId(userId) },
                        { $set: userData },
                        { returnOriginal: false }
                    );

                return result;
            } catch (error) {
                throw new Error('Error during hashing password!');
            }
        } else {
            const result = await Mongo.db
                .collection(collectionName)
                .findOneAndUpdate(
                    { _id: new ObjectId(userId) },
                    { $set: userData },
                    { returnOriginal: false }
                );

            return result;
        }
    }
}
