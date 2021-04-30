declare interface Filter{ 
    skip: number;
    limit: number 
}

declare interface SettingConfig  { 
    secretKey: string; 
    publishableKey: string; 
    dev: boolean;
    filter? :Filter 
}

declare interface Products {
    name: string;
    unit_amount: number;
    quantity: number; 
}
declare interface SessionPayload{ 
    client_reference_id : any; 
    products: Array<Products>;
    success_url: string; 
    cancel_url: string;
    metadata?: Object;   
}

declare interface RefundPayload{ 
    payment_id: string;
    reason: string;
    metadata: object;
}

declare interface PaymentIntentPayload{ 
    client_reference_id :string;
    return_url: string;
    metadata?: object;
    payment_method_id?: string;
    amount?: number;
}

declare class Customer {
    /**
     * Create customer token in order to use it for
     * session creation 
     * @Endpoint api/v1/customers
     * @http_method POST
     * @param {string} customer_id  
     * @return {Promise} response 
     */
    create(customer_id: string): Promise<any>;
    /**
     * This endpoint is used to get the information about a single customer 
     * that has been previously registered.
     * @Endpoint api/v1/customers/
     * @http_method GET
     * @param {string} customer_key or customer token 
     * @return {Promise} response 
     */
    find(customer_key: string): Promise<any>;
    /**
     * This endpoint is used to get the information about all customers 
     * that have been previously registered.
     * @Endpoint api/v1/customers/
     * @http_method GET
     * @param {Filter} filter http query string 
     * @return {Promise} response 
     */
    findAll(filter?: Filter): Promise<any>;
    /**
     * This endpoint is used to remove a single customer 
     * that has been previously registered from the merchant customers list.
     * @Endpoint api/v1/customers/
     * @http_method DELETE
     * @param {String} customer_key
     * @return {Promise} response 
     */
    remove(customer_key: string): Promise<any>;
}

declare class Payments {
    /**
     * This endpoint will return the card token that has been stored against a specific customer 
     *  to use this end point you must use the customer token/id
     * @Endpoint  api/v1/payment_methods
     * @http_method GET
     * @param {string} customer_id 
     * @return {Promise} response 
     */
    find(customer_id :  string): Promise<any>;
    /**
     * This endpoint is used to remove specific payment method for the customer.
     * @Endpoint api/v1/payment_methods/
     * @http_method DELETE
     * @param {String} card_token 
     * @return {Promise} response 
     */
    remove(card_token: string): Promise<any>;

}

declare class Session {
    /**
     * This endpoint is the first step to create the payment link 
     * this will request api/v1/checkout/session to generate a session token
     * 
     * @Endpoint  api/v1/checkout/session
     * @http_method POST  
     * @param {SessionPayload} payload the request body 
     * 
     * @return {Promise} response 
     */
    create(payload: SessionPayload): Promise<any>;
    /**
     * This endpoint will return all information 
     * about session.
     * @Endpoint  api/v1/checkout/session/ .
     * @http_method GET
     * @param {String} session_id  
     * @return {Promise} response 
     */
    findSessionByID(session_id: string): Promise<any>;
    /**
     *  return the HTTP  query string of the checkout url 
     *  
     * @param {String} session_id 
     * @param {String} publishable_key 
     * 
     * @return {String} HTTP query string 
     */
    redirect(session_id: string, publishable_key: string): String;
    /**
     * This endpoint will return all information about sessions
     *  as per the limit. Limit is a number of records to
     *  be returned order in descended order. 
     * if the payload provided it will get the information
     * according to the parameters. otherwise it will get 
     * the default set of latest session
     * @Endpoint  api/v1/checkout/session/
     * @http_method GET
     * @param {Filter=} filter query string 
     * 
     * @return {Promise} response 
     */
    findAll(filter?: Filter): Promise<any>; 
    /**
     * This endpoint will return all information about sessions 
     * as per the passed reference number parameter.
     * @Endpoint  api/v1/checkout/reference/
     * @http_method GET
     * @param {number} sessionReference Session reference 
     * 
     * @return {Promise} response 
     */
    findSessionByReference(sessionReference:  number): Promise<any>; 
    /**
     * This endpoint will return all information about sessions 
     * as per the passed receipt number parameter.
     * @Endpoint  api/v1/checkout/receipt/
     * @http_method GET
     * @param {number} receipt_number receipt number 
     * 
     * @return {Promise} response 
     */
    findSessionByReceipt(receipt_number: number): Promise<any>; 
}
declare class PaymentTransactions{
    /**
     * Return back the details of a payment that
     *  has been initiated against a single sessions
     * @endpoint api/v1/payments/:payment_id
     * @http_method GET
     * @param {number} payment_id 
     * @returns {Promise} response
     */
    find(payment_id:number) : Promise<any>;
    /**
     * Return back the details of a payment that
     *  has been initiated against multiple sessions
     * @endpoint api/v1/payments/
     * @http_method GET
     * @param {Filter} filter http query 
     * @returns {Promise} response
     */
    findAll(filter?: Filter): Promise<any>;
}

declare class Refund{
    /**
     * Return payment for a single successful payment
     *  base on the payment identification.
     * @endpoint api/v1/refunds
     * @http_method POST
     * @param {RefundPayload} payload refund payload 
     * @returns {Promise} response
     */
    create(payload : RefundPayload) : Promise<any>;
    /**
     * Return back the details of a single refund transactions.
     * @endpoint api/v1/refunds/:refund_id
     * @http_method GET
     * @param {number} refund_id 
     * @returns {Promise} response
     */
    find(refund_id :number) : Promise<any>;
    /**
     * Return back the details of a multiple refund transactions.
     * @endpoint api/v1/refunds
     * @http_method GET
     * @param {Filter} filter http query 
     * @returns {Promise} response
     */
    findAll(filter? : Filter) : Promise<any>;
}
declare class PaymentIntent{
    /**
     *This endpoint will be used for creating a payment 
     * intent against a payment method (tokenized card)
     * @endpoint api/v1/payment_intents/
     * @http_method POST
     * @param {PaymentIntentPayload} payload  
     * @returns {Promise} response
     */
    create(payload: PaymentIntentPayload) : Promise<any>;
    /**
     * This endpoint will be used for to confirm the payment method
     * "Payment Method - Card" and/or the amount.
     * @endpoint api/v1/payment_intents/:paymentIntent_id/confirm
     * @http_method POST
     * @param {string} paymentIntent_id  
     * @returns {Promise} response
     */
    confirm(paymentIntent_id: string) : Promise<any>;

    /**
     * This endpoint will be used to cancel any given payment intent 
     * that has been created bu passing the payment intent ID.
     * @endpoint api/v1/payment_intents/:paymentIntent_id/cancel
     * @http_method POST
     * @param {string} paymentIntent_id  
     * @returns {Promise} response
     */
    cancel(paymentIntent_id: string) : Promise<any>;
    /**
     * This endpoint will allow you to trigger an enquiry about payment intent.
     * @endpoint api/v1/payment_intents/:paymentIntent_id
     * @http_method GET
     * @param {string} paymentIntent_id  
     * @returns {Promise} response
     */
    find(paymentIntent_id : string):Promise<any>;

    /**
     * Get details of payment intent base on passed reference.
     * @endpoint api/v1/payment_intents/:reference_id/reference
     * @http_method GET
     * @param {number} reference_id  
     * @returns {Promise} response
     */
    findByReference(reference_id: number) : Promise<any>;

    /**
     * Get detailed list of all payment intents.
     * @endpoint api/v1/payment_intents
     * @http_method GET
     * @param {Filter} filter http query 
     * @returns {Promise} response
     */
    findAll(filter: Filter) : Promise<any>;


}
/**
 * Thawani client class  
 * @author Muhannad Al-Risi
 * @since 1.0.0
 */
declare class ThawaniClient {
   

    customer: Customer;
    payment: Payments;
    session: Session;
    paymentTransaction: PaymentTransactions;
    refund: Refund;
    paymentIntent: PaymentIntent;

    /**
    * @param {string} secret api secret_key
    * @param {string} publishable publishable_key 
    * @param {string} env API environment  
    */
    constructor(config: SettingConfig);
    getInstance();
    /**
     * This function is used to get the information about a single customer 
     * that has been previously registered.
     * @Endpoint api/v1/customers/
     * @http_method GET
     * @param {string} customer_key or customer token 
     * @return {Promise} response 
     */
    find_customer(customer_token: string): Promise<any>;
    /**
     * This function is used to get the information about all customers 
     * that have been previously registered.
     * @Endpoint api/v1/customers/
     * @http_method GET
     * @param {Object} payload http query string 
     * @return {Promise} response 
     */
    findAll_customers(payload?: Object): Promise<any>;
    /**
     * Create customer token in order to use it for
     * session creation 
     * @Endpoint api/v1/customers
     * @http_method POST
     * @param {Object} payload 
     * @return {Promise} response 
     */
    create_customer(payload: Object): Promise<any>;
    /**
    * This function is used to remove a single customer 
    * that has been previously registered from the merchant customers list.
    * @Endpoint api/v1/customers/
    * @http_method DELETE
    * @param {String} customer_key
    * @return {Promise} response 
    */
    delete_customer(payload: Object): Promise<any>;
    /**
     * This function will return the card token that has been stored against a specific customer 
     *  to use this end point you must use the customer token/id
     * @Endpoint  api/v1/payment_methods
     * @http_method GET
     * @param {Object} payload 
     * @return {Promise} response 
     */
    get_customer_payment(payload: Object): Promise<any>;
    /**
     * This function is used to remove specific payment method for the customer.
     * @Endpoint api/v1/payment_methods/
     * @http_method DELETE
     * @param {String} card_token 
     * @return {Promise} response 
     */
    remove_customer_payment(card_token: string): Promise<any>;
    /**
     * This function is  to create the payment link 
     * this will request api/v1/checkout/session to generate a session token
     * 
     * @Endpoint  api/v1/checkout/session
     * @http_method POST  
     * @param {Object} payload the request body 
     * 
     * @return {Promise} response 
     */
    create_session(payload: object): Promise<any>;
    /**
     * This function will return all information 
     * about sessions .
     * @Endpoint  api/v1/checkout/session/ .
     * @http_method GET
     * @param {String} session_id  
     * @return {Promise} response 
     */
    find_session(session_id: string): Promise<any>;
    /**
     * This function will return all information about sessions
     *  as per the limit. Limit is a number of records to
     *  be returned order in descended order. 
     * if the payload provided it will get the information
     * according to the parameters. otherwise it will get 
     * the default set of latest session
     * @Endpoint  api/v1/checkout/session/
     * @http_method GET
     * @param {Object=} payload query string 
     * 
     * @return {Promise} response 
     */
    findAll_sessions(payload?: object): Promise<any>;
    /**
     * Get the full redirect link to Thawani checkout page
     * @param {String} session_id 
     * @return {String} full uri 
     */
    redirect(session_id: string): string;
    /**
     * Get the endpoint base url
     * @return {String} base url 
     */
    endpoint(): string;
}

export = ThawaniClient; 