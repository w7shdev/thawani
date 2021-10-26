import { AxiosInstance } from 'axios'
import Customer from './endpoints/customer';
import Payments from './endpoints/payment'
import Endpoint from './helpers/axios'
import Session from './endpoints/session'
import PaymentTransactions  from './endpoints/PaymentTransactions'
import Refund from './endpoints/refund'
import PaymentIntent  from './endpoints/PaymentIntent'
import Plans from "./endpoints/plans"
import {SettingConfig , SessionPayload , Filter} from './interfaces'

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
    
    _axios: AxiosInstance;
    customer: Customer;
    payment: Payments;
    session: Session;
    paymentTransaction: PaymentTransactions;
    refund: Refund;
    paymentIntent: PaymentIntent;
    plans : Plans;
    /**
     * @param {SettingConfig} config
     */
    constructor(config: SettingConfig) {
        this.secret_key = config.secretKey;
        this.publishable_key = config.publishableKey;
        this.isProduction = !config.dev; // if dev set to true then the production is false
        this.api = new Endpoint(this.isProduction, this.secret_key);
        this._axios = this.api.getInstance();

        if(!config.filter)
        {
            config.filter = {
                limit: 10,
                skip:1
            }
        }

        this.customer = new Customer(this._axios ,config.filter);
        this.payment = new Payments(this._axios);
        this.session = new Session(this._axios, config.filter);
        this.paymentTransaction = new PaymentTransactions(this._axios , config.filter);
        this.refund = new Refund(this._axios , config.filter); 
        this.paymentIntent = new PaymentIntent(this._axios , config.filter);
        this.plans = new Plans(this._axios ,config.filter);
    }

    public getInstance():AxiosInstance { 
        return this._axios; 
    }
    /**
     * Get the full redirect link to Thawani checkout page
     * @param {String} session_id 
     * @return {String} full uri 
     */
    public redirect(session_id: string): string {
        return this.session.redirect(session_id, this.publishable_key);
    }
    /**
     * Get the endpoint base url
     * @return {String} base url 
     */
    public endpoint() {
        return this.api.get_base_url();
    }
}

export = ThawaniClient