import { AxiosInstance } from 'axios'
import Customer from './endpoints/cutomer';
import Payments from './endpoints/payment'
import Endpoint from './helpers/axios'
import Session from './endpoints/session'
/**
 * Thawani client class  
 * @author Muhannad Al-Risi
 * @version 1.0.0
 */
class ThawaniClient {

    secret_key: string;
    publishable_key: string;
    env: string;
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
    constructor(secret: string, publishable: string, env: string) {
        this.secret_key = secret;
        this.publishable_key = publishable;
        this.env = env;
        this.api = new Endpoint(this.env, this.secret_key);
        this.axios = this.api.getInstance();
        this.customer = new Customer(this.axios);
        this.payment = new Payments(this.axios);
        this.session = new Session(this.axios);
    }

    /**
     * get the customer 
     * @param customer_token cutomer token
     * 
     * @return Promise
     */
    public find_customer(customer_token: string): Promise<any> {
        return this.customer.find(customer_token);
    }
    /**
     * get all customers 
     * @param payload params query  
     * @return  Promise
     */
    public findAll_customers(payload?: Object): Promise<any> {
        if (payload) return this.customer.findAll(payload)
        return this.customer.findAll()
    }
    /**
     * create a customer 
     * @param payload customer unique identifier 
     * @return Promise
     */
    public create_customer(payload: Object): Promise<any> {
        return this.customer.create(payload)
    }
    /**
     * remove customer 
     * @param payload customer key token
     * 
     * @return Promise 
     */
    public delete_customer(payload: Object): Promise<any> {
        return this.customer.create(payload);
    }

    /**
     * get customer payment method 
     * @param payload customer key
     * @return Promise 
     */
    public get_customer_payment(payload: Object): Promise<any> {
        return this.payment.get(payload);
    }

    public remove_customer_payment(card_token: string): Promise<any> {
        return this.payment.delete(card_token);
    }

    /** session endpoints */
    public create_session(payload: object): Promise<any> {
        return this.session.create(payload);
    }
    public find_session(session_id: string): Promise<any> {
        return this.session.find(session_id);
    }
    public findAll_sessions(payload?: object): Promise<any> {
        if (payload) return this.session.findAll(payload);

        return this.session.findAll();
    }
    public redirect(session_id: string): string {
        return this.endpoint() + this.session.redirect(session_id, this.publishable_key);
    }

    public endpoint() {
        return this.api.get_base_url();
    }
}

export = ThawaniClient