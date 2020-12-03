"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
_dotenv2.default.config();

class ThawaniClient {

    
    
    

    /**
     *
     */
    constructor(secret, publishable, env) {

        this.secret_key = secret;
        this.publishable_key = publishable;
        this.env = env;
    }

     get_endpoint() {
        return (this.env.toLowerCase() == 'dev') ? process.env.DEV : process.env.PROD;
    }
     getCustomers() {
        return _axios2.default.get('https://uatcheckout.thawani.om/api/v1/customers', {
            headers: this.get_header()
        });
    }

     get_header() {
        return {
            'Thawani-Api-Key': this.secret_key
        };
    }
}

module.exports = ThawaniClient