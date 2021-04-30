"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _customer = require('./endpoints/customer'); var _customer2 = _interopRequireDefault(_customer);
var _payment = require('./endpoints/payment'); var _payment2 = _interopRequireDefault(_payment);
var _axios4 = require('./helpers/axios'); var _axios5 = _interopRequireDefault(_axios4);
var _session = require('./endpoints/session'); var _session2 = _interopRequireDefault(_session);
var _PaymentTransactions = require('./endpoints/PaymentTransactions'); var _PaymentTransactions2 = _interopRequireDefault(_PaymentTransactions);
var _refund = require('./endpoints/refund'); var _refund2 = _interopRequireDefault(_refund);
var _PaymentIntent = require('./endpoints/PaymentIntent'); var _PaymentIntent2 = _interopRequireDefault(_PaymentIntent);


/**
 * Thawani client class  
 * @author Muhannad Al-Risi
 * @since 1.0.0
 */
class ThawaniClient {

    
    
    
    
    
    
    
    
    
    
    
    
    /**
     * @param {string} secret api secret_key
     * @param {string} publishable publishable_key 
     * @param {string} env API environment  
     */
    constructor(config) {
        this.secret_key = config.secretKey;
        this.publishable_key = config.publishableKey;
        this.isProduction = !config.dev; // if dev set to true then the production is false
        this.api = new (0, _axios5.default)(this.isProduction, this.secret_key);
        this._axios = this.api.getInstance();

        if(!config.filter)
        {
            config.filter = {
                limit: 10,
                skip:1
            }
        }

        this.customer = new (0, _customer2.default)(this._axios ,config.filter);
        this.payment = new (0, _payment2.default)(this._axios);
        this.session = new (0, _session2.default)(this._axios, config.filter);
        this.paymentTransaction = new (0, _PaymentTransactions2.default)(this._axios , config.filter);
        this.refund = new (0, _refund2.default)(this._axios , config.filter); 
        this.paymentIntent = new (0, _PaymentIntent2.default)(this._axios , config.filter);
    }

     getInstance() { 
        return this._axios; 
    }
    /**
     * This function is used to get the information about a single customer 
     * that has been previously registered.
     * @Endpoint api/v1/customers/
     * @http_method GET
     * @param {string} customer_key or customer token 
     * @return {Promise} response 
     */
     find_customer(customer_token) {
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
     findAll_customers(payload) {
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
     create_customer(payload) {
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
     delete_customer(payload) {
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
     get_customer_payment(payload) {
        return this.payment.find(payload);
    }
    /**
     * This function is used to remove specific payment method for the customer.
     * @Endpoint api/v1/payment_methods/
     * @http_method DELETE
     * @param {String} card_token 
     * @return {Promise} response 
     */
     remove_customer_payment(card_token) {
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
     create_session(payload) {
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
     find_session(session_id) {
        return this.session.findSessionByID(session_id);
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
     findAll_sessions(payload) {
        if (payload) return this.session.findAll(payload);

        return this.session.findAll();
    }
    /**
     * Get the full redirect link to Thawani checkout page
     * @param {String} session_id 
     * @return {String} full uri 
     */
     redirect(session_id) {
        return this.endpoint() + this.session.redirect(session_id, this.publishable_key);
    }
    /**
     * Get the endpoint base url
     * @return {String} base url 
     */
     endpoint() {
        return this.api.get_base_url();
    }
}

module.exports = ThawaniClient