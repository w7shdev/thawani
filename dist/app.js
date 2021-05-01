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