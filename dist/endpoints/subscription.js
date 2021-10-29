"use strict";Object.defineProperty(exports, "__esModule", {value: true});

/**
 * This class is to handle the Subscription Endpoint
 * 
 * @since 1.1.1
 */
 class Subscription { 

    
    

    constructor(axios, filter) {
        this.axios = axios
        this.filter = filter
    }
    /**
     * Cancel Subscription, by providing subscription_id.
     * @Endpoint api/v1/subscriptions/{subscription_id}/cancel
     * @http_method POST
     * @param {string} subscription_id
     * @return {Promise} response 
     */
     async remove(subscription_id) {
        const {data} = this.axios.post(`api/v1/subscriptions/${subscription_id}/cancel`)
        return data
    }
    /**
     * This endpoint is used to get the information about a single subscription
     * that has been previously created.
     * @Endpoint api/v1/subscription/
     * @http_method GET
     * @param {string} subscription_id  subscription ID
     * @return {Promise} response 
     */
     async find(subscription_id ) {
        const {data} = await this.axios.get('api/v1/subscriptions/' + subscription_id )
        return data
    }
    /**
     * This endpoint is used to get the information about all subscriptions 
     * that have been previously registered.
     * @Endpoint api/v1/subscriptions/
     * @http_method GET
     * @param {Object} filter http query string 
     * @return {Promise} response 
     */
     async findAll(filter) {

        if (filter) { 
            const {data}  = this.axios.get('api/v1/subscriptions', {
                params: filter
            });
            return  data
        }

        const {data} = await this.axios.get('api/v1/subscriptions' , {
            params: this.filter
        });
        return data
    }

} exports.default = Subscription;
