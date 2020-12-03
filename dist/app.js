"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _cutomer = require('./endpoints/cutomer'); var _cutomer2 = _interopRequireDefault(_cutomer);
var _payment = require('./endpoints/payment'); var _payment2 = _interopRequireDefault(_payment);
var _axios3 = require('./helpers/axios'); var _axios4 = _interopRequireDefault(_axios3);
var _session = require('./endpoints/session'); var _session2 = _interopRequireDefault(_session);
/**
 * Thawani client class  
 * @author Muhannad Al-Risi
 * @version 1.0.0
 */
class ThawaniClient {

    
    
    
    

    
    
    
    
    /**
     * @param {string} secret api secret_key
     * @param {string} publishable publishable_key 
     * @param {string} env API environment  
     */
    constructor(secret, publishable, env) {
        this.secret_key = secret;
        this.publishable_key = publishable;
        this.env = env;
        this.api = new (0, _axios4.default)(this.env, this.secret_key);
        this.axios = this.api.getInstance();
        this.customer = new (0, _cutomer2.default)(this.axios);
        this.payment = new (0, _payment2.default)(this.axios);
        this.session = new (0, _session2.default)(this.axios);
    }

    /**
     * get the customer 
     * @param customer_token cutomer token
     * 
     * @return Promise
     */
     find_customer(customer_token) {
        return this.customer.find(customer_token);
    }
    /**
     * get all customers 
     * @param payload params query  
     * @return  Promise
     */
     findAll_customers(payload) {
        if (payload) return this.customer.findAll(payload)
        return this.customer.findAll()
    }
    /**
     * create a customer 
     * @param payload customer unique identifier 
     * @return Promise
     */
     create_customer(payload) {
        return this.customer.create(payload)
    }
    /**
     * remove customer 
     * @param payload customer key token
     * 
     * @return Promise 
     */
     delete_customer(payload) {
        return this.customer.create(payload);
    }

    /**
     * get customer payment method 
     * @param payload customer key
     * @return Promise 
     */
     get_customer_payment(payload) {
        return this.payment.get(payload);
    }

     remove_customer_payment(card_token) {
        return this.payment.delete(card_token);
    }

    /** session endpoints */
     create_session(payload) {
        return this.session.create(payload);
    }
     find_session(session_id) {
        return this.session.find(session_id);
    }
     findAll_sessions(payload) {
        if (payload) return this.session.findAll(payload);

        return this.session.findAll();
    }
     redirect(session_id) {
        return this.endpoint() + this.session.redirect(session_id, this.publishable_key);
    }

     endpoint() {
        return this.api.get_base_url();
    }
}

module.exports = ThawaniClient