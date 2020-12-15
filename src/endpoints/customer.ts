import { AxiosInstance } from 'axios';
/**
 * This class is to handle the Customer Endpoint
 * 
 * @since 1.0.0
 */
export default class Customer {

    axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios
    }
    /**
     * Create customer token in order to use it for
     * session creation 
     * @Endpoint api/v1/customers
     * @http_method POST
     * @param {Object} payload 
     * @return {Promise} response 
     */
    public create(payload: Object): Promise<T> {
        return this.axios.post('api/v1/customers', payload)
    }
    /**
     * This endpoint is used to get the information about a single customer 
     * that has been previously registered.
     * @Endpoint api/v1/customers/
     * @http_method GET
     * @param {string} customer_key or customer token 
     * @return {Promise} response 
     */
    public find(customer_key: string): Promise<T> {
        return this.axios.get('api/v1/customers/' + customer_key)
    }
    /**
     * This endpoint is used to get the information about all customers 
     * that have been previously registered.
     * @Endpoint api/v1/customers/
     * @http_method GET
     * @param {Object} payload http query string 
     * @return {Promise} response 
     */
    public findAll(payload?: object): Promise<T> {
        if (payload) {
            return this.axios.get('api/v1/customers/', {
                params: payload
            })
        }
        return this.axios.get('api/v1/customers/');
    }
    /**
     * This endpoint is used to remove a single customer 
     * that has been previously registered from the merchant customers list.
     * @Endpoint api/v1/customers/
     * @http_method DELETE
     * @param {String} customer_key
     * @return {Promise} response 
     */
    public remove(customer_key: string): Promise<T> {
        return this.axios.delete('api/v1/customers/' + customer_key);
    }

}