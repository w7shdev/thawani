"use strict";Object.defineProperty(exports, "__esModule", {value: true});


 class PaymentIntent{

     
    
    constructor(axios,  filter ) {
        this.axios = axios;
        this.filter = filter
    }

    /**
     *This endpoint will be used for creating a payment 
     * intent against a payment method (tokenized card)
     * @endpoint api/v1/payment_intents/
     * @http_method POST
     * @param {PaymentIntentPayload} payload  
     * @returns {Promise} response
     */
     async create(payload)  {
        const {data} = await this.axios.post('api/v1/payment_intents' , payload)
        return data
    }

    /**
     * This endpoint will be used for to confirm the payment method
     * "Payment Method - Card" and/or the amount.
     * @endpoint api/v1/payment_intents/:paymentIntent_id/confirm
     * @http_method POST
     * @param {string} paymentIntent_id  
     * @returns {Promise} response
     */
     async confirm(paymentIntent_id)  {
        const {data} = await this.axios.post('api/v1/payment_intents/'+paymentIntent_id+'/confirm')
        return data
    }

    /**
     * This endpoint will be used to cancel any given payment intent 
     * that has been created bu passing the payment intent ID.
     * @endpoint api/v1/payment_intents/:paymentIntent_id/cancel
     * @http_method POST
     * @param {string} paymentIntent_id  
     * @returns {Promise} response
     */
     async cancel(paymentIntent_id)  {
        const {data} = await this.axios.post('api/v1/payment_intents/'+paymentIntent_id+'/cancel')
        return data
    }

    /**
     * This endpoint will allow you to trigger an enquiry about payment intent.
     * @endpoint api/v1/payment_intents/:paymentIntent_id
     * @http_method GET
     * @param {string} paymentIntent_id  
     * @returns {Promise} response
     */
     async find(paymentIntent_id ) {
        const {data} = await this.axios.get('api/v1/payment_intents/' +paymentIntent_id)
        return data
    }

    /**
     * Get details of payment intent base on passed reference.
     * @endpoint api/v1/payment_intents/:reference_id/reference
     * @http_method GET
     * @param {number} reference_id  
     * @returns {Promise} response
     */
     async findByReference(reference_id)  {
        const {data} = await this.axios.get('api/v1/payment_intents/'+reference_id+'/reference')
        return data
    }

    /**
     * Get detailed list of all payment intents.
     * @endpoint api/v1/payment_intents
     * @http_method GET
     * @param {Filter} filter http query 
     * @returns {Promise} response
     */
     async findAll(filter)  {
        if(filter) { 
            const {data} = await this.axios.get('api/v1/payment_intents', {
                params: filter
            })
            return data
        }
        const {data} = await this.axios.get('api/v1/payment_intents', {
            params: this.filter
        })
        return data
    }


} exports.default = PaymentIntent;