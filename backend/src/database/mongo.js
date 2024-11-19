import { MongoClient } from 'mongodb';

export const Mongo = {
    async connect({ mongoConnectionString, mongoDbName }) {
        try {
            const client = new MongoClient(mongoConnectionString);

            await client.connect();
            const db = client.db(mongoDbName);

            this.client = client;
            this.db = db;

            console.log('Connected to Mongo!');
            return 'Connected to Mongo!';
        } catch (error) {
            console.error('Error during MongoDB connection', error);
            return { text: 'Error during mongo connection', error };
        }
    },

    getDb() {
        return this.db;
    },
};
