"use strict";Object.defineProperty(exports, "__esModule", {value: true});
/**
 * This class is to handle the session Endpoint
 * 
 * @since 1.0.0
 */
 class Session {

    

    constructor(axios) {
        this.axios = axios;
    }
    /**
     * This endpoint is the first step to create the payment link 
     * this will request api/v1/checkout/session to generate a session token
     * 
     * @Endpoint  api/v1/checkout/session
     * @http_method POST  
     * @param {Object} payload the request body 
     * 
     * @return {Promise} response 
     */
     create(payload) {
        return this.axios.post('api/v1/checkout/session', payload);
    }
    /**
     * This endpoint will return all information 
     * about session.
     * @Endpoint  api/v1/checkout/session/ .
     * @http_method GET
     * @param {String} session_id  
     * @return {Promise} response 
     */
     find(session_id) {
        return this.axios.get('api/v1/checkout/session/' + session_id);
    }
    /**
     *  return the HTTP  query string of the checkout url 
     *  
     * @param {String} session_id 
     * @param {String} publishable_key 
     * 
     * @return {String} HTTP query string 
     */
     redirect(session_id, publishable_key) {
        return '/pay/' + session_id + "?key=" + publishable_key;
    }
    /**
     * This endpoint will return all information about sessions
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
     findAll(payload) {

        if (payload) {
            this.axios.get('api/v1/checkout/session/', {
                params: payload
            })
        }
        return this.axios.get('api/v1/checkout/session/')

    }

} exports.default = Session;