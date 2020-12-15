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
     * @param {Object} payload 
     * @return {Promise} response 
     */
     get(payload) {
        return this.axios.get('api/v1/payment_methods', {
            params: payload
        });
    }
    /**
     * This endpoint is used to remove specific payment method for the customer.
     * @Endpoint api/v1/payment_methods/
     * @http_method DELETE
     * @param {String} card_token 
     * @return {Promise} response 
     */
     delete(card_token) {
        this.axios.delete('api/v1/payment_methods/' + card_token);
    }

} exports.default = Payments;