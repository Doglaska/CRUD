import express from 'express';
import cors from 'cors';
import { Mongo } from './database/mongo.js';
import { config } from 'dotenv';
import authRouter from './auth/auth.js';
import usersRouter from './routes/users.js';
import productsRouter from './routes/products.js';
import ordersRouter from './routes/orders.js';

config();

async function main() {
    const hostname = 'localhost';
    const port = 3000;

    const app = express();

    try {
        // Conectar ao MongoDB
        const mongoConnection = await Mongo.connect({
            mongoConnectionString: process.env.MONGO_CS,
            mongoDbName: process.env.MONGO_DB_NAME
        });
        console.log(mongoConnection);  // Espera o log 'Connected to Mongo!'

        // Configurar middlewares
        app.use(express.json());
        app.use(cors());

        // Rota de boas-vindas
        app.get('/', (req, res) => {
            res.send({
                success: true,
                statusCode: 200,
                body: 'Welcome to Bizumic Barber!'
            });
        });

        // Definir as rotas
        app.use('/auth', authRouter);
        app.use('/users', usersRouter);
        app.use('/products', productsRouter);
        app.use('/orders', ordersRouter);

        // Iniciar o servidor
        app.listen(port, () => {
            console.log(`Server running on: http://${hostname}:${port}`);
        });

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

main();
