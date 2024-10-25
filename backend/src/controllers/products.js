import ProductsDataAccess from '../dataAccess/products.js'
import {ok, serverError} from '../helpers/httpResponse.js'

export default class ProductsControllers {
    constructor() {
        this.dataAccess = new ProductsDataAccess()
    }

    async getProducts() {
        try {
            const products = await this.dataAccess.getProducts()

            return ok(products)
        } catch (error) {
            return serverError(error)
        }
    }

    async getAvailableProducts() {
        try {
            const products = await this.dataAccess.getAvailableProducts()

            return ok(products)
        } catch (error) {
            return serverError(error)
        }
    }

    async addProduct(productData) {
        try {
            const result = await this.dataAccess.addProduct(productData)

            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }

    async deleteProduct(productId) {
        try {
            const result = await this.dataAccess.deleteProduct(productId)

            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }

    async updateProduct(productId, productData) {
        try {
            const result = await this.dataAccess.updateProduct(productId, productData)

            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }
}