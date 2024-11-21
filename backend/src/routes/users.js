import express from 'express';
import UsersControllers from '../controllers/usersController.js';

const usersRouter = express.Router();
const usersControllers = new UsersControllers();

// Rota para obter todos os usuários
usersRouter.get('/', async (req, res) => {
    const { success, statusCode, body } = await usersControllers.getUsers();
    res.status(statusCode).send({ success, statusCode, body });
});

// Rota para excluir um usuário
usersRouter.delete('/:id', async (req, res) => {
    const { success, statusCode, body } = await usersControllers.deleteUser(req.params.id);
    res.status(statusCode).send({ success, statusCode, body });
});

// Rota para atualizar um usuário
usersRouter.put('/:id', async (req, res) => {
    const { success, statusCode, body } = await usersControllers.updateUser(req.params.id, req.body);
    res.status(statusCode).send({ success, statusCode, body });
});

export default usersRouter;
