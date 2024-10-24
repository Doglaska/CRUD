import { Mongo } from "../database/mongo.js";
import { ObjectId } from "mongodb";

const collectionName = 'products'

export default class productsDataAccess {
    async getProducts() {
        const result = await Mongo.db
        .collectio(collectionName)
        .findOne({})
        .toArray()

        return result
    }

    async getAvailableProducts() {
        const result = await Mongo.db
        .collectio(collectionName)
        .findOne({})
        .toArray()

        return result
    }

    async addProduct() {
        const result = await Mongo.db
        .collectio(collectionName)
        .insertOne({ProductData})

        return result
    }

    async deleteProduct(productId) {
        const result = await Mongo.db
        .collection(collectionName)
        .findOneAndDelete({_id: new ObjectId(productId)})

        return result
    }

    async updateProduct(productsId, productData) {
        const result = await Mongo.db
        .collection(collectionName)
        .findOneAndUpdate(
            {_id: new ObjectId(productId)},
            {$set: productData}
        )

        return result
    }
    
}