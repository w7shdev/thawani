import { AxiosInstance } from 'axios'
/**
 * This class is to handle the Payment Endpoint
 * 
 * @since 1.0.0
 */
export default class Payments {

    axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }
    /**
     * This endpoint will return the card token that has been stored against a specific customer 
     *  to use this end point you must use the customer token/id
     * @Endpoint  api/v1/payment_methods
     * @http_method GET
     * @param {Object} payload 
     * @return {Promise} response 
     */
    public async find(customer_id :  string): Promise<any> {
        const {data}:any =  await this.axios.get('api/v1/payment_methods', {
            params: {
                customerId: customer_id
            }
        });

        return data; 
    }
    /**
     * This endpoint is used to remove specific payment method for the customer.
     * @Endpoint api/v1/payment_methods/
     * @http_method DELETE
     * @param {String} card_token 
     * @return {Promise} response 
     */
    public async remove(card_token: string): Promise<any> {
        const  {data}:any = await this.axios.delete('api/v1/payment_methods/' + card_token);
        return data; 
    }

}