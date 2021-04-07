import { AxiosInstance } from 'axios';
import { Filter } from './../interfaces'
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
    public async create(payload: Object): Promise<T> {
        const {data}:any = this.axios.post('api/v1/customers', payload)
        return data
    }
    /**
     * This endpoint is used to get the information about a single customer 
     * that has been previously registered.
     * @Endpoint api/v1/customers/
     * @http_method GET
     * @param {string} customer_key or customer token 
     * @return {Promise} response 
     */
    public async find(customer_key: string): Promise<T> {
        const {data} : any = await this.axios.get('api/v1/customers/' + customer_key); 
        return data
    }
    /**
     * This endpoint is used to get the information about all customers 
     * that have been previously registered.
     * @Endpoint api/v1/customers/
     * @http_method GET
     * @param {Object} payload http query string 
     * @return {Promise} response 
     */
     public async findAll(filter?: Filter): Promise<T> {
        if (filter) {
            const {data}:any = await this.axios.get('api/v1/customers/', {
                params: filter
            })
            return data;
        }
        const {data}:any  = await this.axios.get('api/v1/customers/');
        return data;
    }
    /**
     * This endpoint is used to remove a single customer 
     * that has been previously registered from the merchant customers list.
     * @Endpoint api/v1/customers/
     * @http_method DELETE
     * @param {String} customer_key
     * @return {Promise} response 
     */
    public async remove(customer_key: string): Promise<T> {
        const {data} : any = await this.axios.delete('api/v1/customers/' + customer_key);
        return data;
    }

}