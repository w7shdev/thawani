import { AxiosInstance } from 'axios'
/**
 * This class is to handle the session Endpoint
 * 
 * @since 1.0.0
 */
export default class Session {

    axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
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
    public create(payload: Object): Promise<T> {
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
    public find(session_id: string): Promise<T> {
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
    public redirect(session_id: string, publishable_key: string): String {
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
    public findAll(payload?: object): Promise<T> {

        if (payload) {
            this.axios.get('api/v1/checkout/session/', {
                params: payload
            })
        }
        return this.axios.get('api/v1/checkout/session/')

    }

}