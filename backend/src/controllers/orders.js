import OrdersDataAccess from '../dataAccess/orders.js'
import {ok, serverError} from '../helpers/httpResponse.js'

export default class OrdersControllers {
    constructor() {
        this.dataAccess = new OrdersDataAccess
    }

    async getOrders() {
        try {
            const products = await this.dataAccess.getOrders()

            return ok(products)
        } catch (error) {
            return serverError(error)
        }
    }

    async getOrdersByUserId(userId) {
        try {
            const products = await this.dataAccess.getOrdersByUserId(userId)

            return ok(products)
        } catch (error) {
            return serverError(error)
        }
    }

    async addOrder(productData) {
        try {
            const result = await this.dataAccess.addOrder(productData)

            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }

    async deleteOrder(productId) {
        try {
            const result = await this.dataAccess.deleteOrder(productId)

            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }

    async updateOrder(productId, productData) {
        try {
            const result = await this.dataAccess.updateOrder(productId, productData)

            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }
}