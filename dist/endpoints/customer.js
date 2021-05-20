"use strict";Object.defineProperty(exports, "__esModule", {value: true});

/**
 * This class is to handle the Customer Endpoint
 * 
 * @since 1.0.0
 */
 class Customer {

    
    

    constructor(axios, filter) {
        this.axios = axios
        this.filter = filter
    }

    /**
     * Create customer token in order to use it for
     * session creation 
     * @Endpoint api/v1/customers
     * @http_method POST
     * @param {string} customer_id 
     * @return {Promise} response 
     */
     async create(customer_id) {
        const {data} = await this.axios.post('api/v1/customers',{ 
            'client_customer_id' : customer_id
        });
        return data
    }
    /**
     * This endpoint is used to get the information about a single customer 
     * that has been previously registered.
     * @Endpoint api/v1/customers/
     * @http_method GET
     * @param {string} customer_key or customer token 
     * @return {Promise} response 
     */
     async find(customer_key) {
        const {data}  = await this.axios.get('api/v1/customers/' + customer_key); 
        return data
    }
    /**
     * This endpoint is used to get the information about all customers 
     * that have been previously registered.
     * @Endpoint api/v1/customers/
     * @http_method GET
     * @param {Object} payload http query string 
     * @return {Promise} response 
     */
      async findAll(filter) {
        if (filter) {
            const {data} = await this.axios.get('api/v1/customers/', {
                params: filter
            })
            return data;
        }
        const {data}  = await this.axios.get('api/v1/customers/', {
            params: this.filter
        });
        return data;
    }
    /**
     * This endpoint is used to remove a single customer 
     * that has been previously registered from the merchant customers list.
     * @Endpoint api/v1/customers/
     * @http_method DELETE
     * @param {String} customer_key
     * @return {Promise} response 
     */
     async remove(customer_key) {
        const {data}  = await this.axios.delete('api/v1/customers/' + customer_key);
        return data;
    }

} exports.default = Customer;