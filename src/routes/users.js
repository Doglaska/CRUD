import express from 'express'
import UsersControllers from '../controllers/users.js'

const usersRouter = express.Router()

const usersControllers = new UsersControllers()

usersRouter.get('/', async (req, res) => {
    const { success, statusCode, body } = await UsersControllers.getUsers()

    res.status(statusCode).send({success, statusCode, body})
})

usersRouter.delete('/:id', async (req, res) => {
    const { success, statusCode, body } = await UsersControllers.deleteUser(req.params.id)

    res.status(statusCode).send({success, statusCode, body})
})

usersRouter.put('/:id', async (req, res) => {
    const { success, statusCode, body } = await UsersControllers.updateUser(req.params.id, req.body)

    res.status(statusCode).send({success, statusCode, body})
})

export default usersRouter