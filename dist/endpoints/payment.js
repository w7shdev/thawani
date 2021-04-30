"use strict";Object.defineProperty(exports, "__esModule", {value: true});
/**
 * This class is to handle the Payment Endpoint
 * 
 * @since 1.0.0
 */
 class Payments {

    

    constructor(axios) {
        this.axios = axios;
    }
    /**
     * This endpoint will return the card token that has been stored against a specific customer 
     *  to use this end point you must use the customer token/id
     * @Endpoint  api/v1/payment_methods
     * @http_method GET
     * @param {string} customer_id 
     * @return {Promise} response 
     */
     async find(customer_id ) {
        const {data} =  await this.axios.get('api/v1/payment_methods', {
            params: {
                customerId: customer_id
            }
        });

        return data; 
    }
    /**
     * This endpoint is used to remove specific payment method for the customer.
     * @Endpoint api/v1/payment_methods/
     * @http_method DELETE
     * @param {String} card_token 
     * @return {Promise} response 
     */
     async remove(card_token) {
        const  {data} = await this.axios.delete('api/v1/payment_methods/' + card_token);
        return data; 
    }

} exports.default = Payments;