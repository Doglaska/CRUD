import express from 'express';
import UsersDataAccess from '../dataAccess/user.js';

const router = express.Router();
const usersDataAccess = new UsersDataAccess();

// Rota para obter todos os usuários
router.get('/users', async (req, res) => {
    try {
        const users = await usersDataAccess.getUsers();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

// Rota para obter um usuário por ID
router.get('/user/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await usersDataAccess.getUserById(id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

// Rota para atualizar um usuário
router.put('/user/:id', async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body; // Dados a serem atualizados

    try {
        const result = await usersDataAccess.updateUser(id, updatedData);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default router;
