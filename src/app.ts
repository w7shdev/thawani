import { AxiosInstance } from 'axios'
import Customer from './endpoints/customer';
import Payments from './endpoints/payment'
import Endpoint from './helpers/axios'
import Session from './endpoints/session'
import {SettingConfig} from './interfaces'

/**
 * Thawani client class  
 * @author Muhannad Al-Risi
 * @since 1.0.0
 */
class ThawaniClient {

    secret_key: string;
    publishable_key: string;
    isProduction: boolean;
    api: Endpoint;

    customer: Customer;
    payment: Payments;
    session: Session;
    axios: AxiosInstance;
    /**
     * @param {string} secret api secret_key
     * @param {string} publishable publishable_key 
     * @param {string} env API environment  
     */
    constructor(config: SettingConfig) {
        this.secret_key = config.secretKey;
        this.publishable_key = config.publishableKey;
        this.isProduction = !config.dev; // if dev set to true then the production is false
        this.api = new Endpoint(this.isProduction, this.secret_key);
        this.axios = this.api.getInstance();
        this.customer = new Customer(this.axios);
        this.payment = new Payments(this.axios);
        this.session = new Session(this.axios);
    }

    public getInstance():AxiosInstance { 
        return this.axios; 
    }
    /**
     * This function is used to get the information about a single customer 
     * that has been previously registered.
     * @Endpoint api/v1/customers/
     * @http_method GET
     * @param {string} customer_key or customer token 
     * @return {Promise} response 
     */
    public find_customer(customer_token: string): Promise<any> {
        return this.customer.find(customer_token);
    }
    /**
     * This function is used to get the information about all customers 
     * that have been previously registered.
     * @Endpoint api/v1/customers/
     * @http_method GET
     * @param {Object} payload http query string 
     * @return {Promise} response 
     */
    public findAll_customers(payload?: Object): Promise<any> {
        if (payload) return this.customer.findAll(payload)
        return this.customer.findAll()
    }
    /**
     * Create customer token in order to use it for
     * session creation 
     * @Endpoint api/v1/customers
     * @http_method POST
     * @param {Object} payload 
     * @return {Promise} response 
     */
    public create_customer(payload: Object): Promise<any> {
        return this.customer.create(payload)
    }
    /**
     * This function is used to remove a single customer 
     * that has been previously registered from the merchant customers list.
     * @Endpoint api/v1/customers/
     * @http_method DELETE
     * @param {String} customer_key
     * @return {Promise} response 
     */
    public delete_customer(payload: Object): Promise<any> {
        return this.customer.create(payload);
    }

    /**
     * This function will return the card token that has been stored against a specific customer 
     *  to use this end point you must use the customer token/id
     * @Endpoint  api/v1/payment_methods
     * @http_method GET
     * @param {Object} payload 
     * @return {Promise} response 
     */
    public get_customer_payment(payload: string): Promise<any> {
        return this.payment.find(payload);
    }
    /**
     * This function is used to remove specific payment method for the customer.
     * @Endpoint api/v1/payment_methods/
     * @http_method DELETE
     * @param {String} card_token 
     * @return {Promise} response 
     */
    public remove_customer_payment(card_token: string): Promise<any> {
        return this.payment.remove(card_token);
    }

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
    public create_session(payload: object): Promise<any> {
        return this.session.create(payload);
    }
    /**
     * This function will return all information 
     * about sessions .
     * @Endpoint  api/v1/checkout/session/ .
     * @http_method GET
     * @param {String} session_id  
     * @return {Promise} response 
     */
    public find_session(session_id: string): Promise<any> {
        return this.session.find(session_id);
    }
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
    public findAll_sessions(payload?: object): Promise<any> {
        if (payload) return this.session.findAll(payload);

        return this.session.findAll();
    }
    /**
     * Get the full redirect link to Thawani checkout page
     * @param {String} session_id 
     * @return {String} full uri 
     */
    public redirect(session_id: string): string {
        return this.endpoint() + this.session.redirect(session_id, this.publishable_key);
    }
    /**
     * Get the endpoint base url
     * @return {String} base url 
     */
    public endpoint() {
        return this.api.get_base_url();
    }
}

const client  = new ThawaniClient({
    secretKey : 'rRQ26GcsZzoEhbrP2HZvLYDbn9C9et',
    publishableKey: 'HGvTMLDssJghr9tlN9gr4DVYt0qyBy',
    dev : true
}); 

console.log(client.axios.defaults.baseURL)
// const customers  = async () => await client.customer.findAll(); 
// customers().then( data => console.log(data)).catch(err => console.log(err))

export = ThawaniClient