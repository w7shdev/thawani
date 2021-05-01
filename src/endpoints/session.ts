import { AxiosInstance } from 'axios'
import { Filter , SessionPayload} from '../interfaces'
/**
 * This class is to handle the session Endpoint
 * 
 * @since 1.0.0
 */
export default class Session {

    axios: AxiosInstance;
    filter: Filter;

    constructor(axios: AxiosInstance , filter: Filter) {
        this.axios = axios;
        this.filter = filter
    }
    /**
     * This endpoint is the first step to create the payment link 
     * this will request api/v1/checkout/session to generate a session token
     * 
     * @Endpoint  api/v1/checkout/session
     * @http_method POST  
     * @param {SessionPayload} payload the request body 
     * 
     * @return {Promise} response 
     */
    public async create(payload: SessionPayload): Promise<T> {
        const {data} = await this.axios.post('api/v1/checkout/session', payload)
        return data;
    }
    /**
     * This endpoint will return all information 
     * about session.
     * @Endpoint  api/v1/checkout/session/ .
     * @http_method GET
     * @param {String} session_id  
     * @return {Promise} response 
     */
    public async findSessionByID(session_id: string): Promise<T> {
        const {data} = await this.axios.get('api/v1/checkout/session/' + session_id);
        return data
    }
    /**
     *  return the HTTP  query string of the checkout url 
     *  
     * @param {String} session_id 
     * @param {String} publishable_key 
     * 
     * @return {String} HTTP query string 
     */
    public redirect(session_id: string, publishable_key: string): string {
        return this.axios.defaults.baseURL+'/pay/' + session_id + "?key=" + publishable_key;
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
     * @param {Filter=} filter query string 
     * 
     * @return {Promise} response 
     */
    public async findAll(filter?: Filter): Promise<T> {

        if (filter) {
            const {data} = await this.axios.get('api/v1/checkout/session/', {
                params: filter
            })

            return data
        }
        const {data} = await this.axios.get('api/v1/checkout/session/', {
            params: this.filter
        })
        return data;
    }
    /**
     * This endpoint will return all information about sessions 
     * as per the passed reference number parameter.
     * @Endpoint  api/v1/checkout/reference/
     * @http_method GET
     * @param {number} sessionReference Session reference 
     * 
     * @return {Promise} response 
     */
    public async findSessionByReference(sessionReference:  number): Promise<any> { 
            const {data} = await this.axios.get('api/v1/checkout/reference/' + sessionReference)
            return data; 
    }
    /**
     * This endpoint will return all information about sessions 
     * as per the passed receipt number parameter.
     * @Endpoint  api/v1/checkout/receipt/
     * @http_method GET
     * @param {number} receipt_number receipt number 
     * 
     * @return {Promise} response 
     */
    public async findSessionByReceipt(receipt_number: number): Promise<any> { 
        const { data } = await this.axios.get('api/v1/checkout/receipt/' + receipt_number)
        return data
    }
}