"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);
/**
 * Setup Axios js configuration 
 * @author Muhannad Al-Risi
 * @version 1.0.0
 */
class Endpoint {

    
    
    
    constructor(env, secret) {
        this.isProduction = env;
        this.secret_key = secret;
    }
    /**
     * Get the HTTP uri depending on the environment 
     * @returns {string} HTTP uri
     */
    get_base_url() {
        return (this.isProduction) ? 'https://checkout.thawani.om' : 'https://uatcheckout.thawani.om' ;
    }
    /**
     * set up the Request header 
     * 
     * @return {object} Header request 
     */
    get_header() {
        return {
            'Thawani-Api-Key': this.secret_key
        };
    }
    /**
     * Get axios reference object 
     * 
     * @return {AxiosInstance} axios js object 
     */
    getInstance() {
        return _axios2.default.create({
            baseURL: this.get_base_url(),
            headers: this.get_header()
        });
    }
}

module.exports = Endpoint;