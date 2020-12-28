/**
 * Thawani client class  
 * @author Muhannad Al-Risi
 * @since 1.0.0
 */
declare class ThawaniClient {
    /**
    * @param {string} secret api secret_key
    * @param {string} publishable publishable_key 
    * @param {string} env API environment  
    */
    constructor(secret_key: string, publishable_key: string, environment: string);
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