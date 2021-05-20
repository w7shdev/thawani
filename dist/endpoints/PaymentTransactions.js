"use strict";Object.defineProperty(exports, "__esModule", {value: true});


 class PaymentTransactions{

     
    
    constructor(axios, filter ) {
        this.axios = axios;
    }
    /**
     * Return back the details of a payment that
     *  has been initiated against a single sessions
     * @endpoint api/v1/payments/:payment_id
     * @http_method GET
     * @param {number} payment_id 
     * @returns {Promise} response
     */
     async find(payment_id)  {
        const {data} = await this.axios.get('api/v1/payments/' + payment_id)
        return data; 
    }
    /**
     * Return back the details of a payment that
     *  has been initiated against multiple sessions
     * @endpoint api/v1/payments/
     * @http_method GET
     * @param {Filter} filter http query 
     * @returns {Promise} response
     */
     async findAll(filter) {
        if(filter) { 
            const {data} = await this.axios.get('api/v1/payments', {
                params :{
                    checkout_invoice: '',
                    ...filter
                }
            });
            return data;
        }

        const {data} = await this.axios.get('api/v1/payments', {
            params: this.filter
        });

        return data;
    }
} exports.default = PaymentTransactions;