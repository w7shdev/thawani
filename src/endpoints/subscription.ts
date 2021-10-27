import { AxiosInstance } from 'axios'
import { Filter } from './../interfaces'
/**
 * This class is to handle the Subscription Endpoint
 * 
 * @since 1.1.1
 */
export default class Subscription { 

    axios: AxiosInstance;
    filter: Filter;

    constructor(axios: AxiosInstance, filter: Filter) {
        this.axios = axios
        this.filter = filter
    }
    /**
     * Cancel Subscription, by providing subscription_id.
     * @Endpoint api/v1/subscriptions/{subscription_id}/cancel
     * @http_method POST
     * @param {string} subscription_id
     * @return {Promise} response 
     */
    public async remove(subscription_id: string) : Promise<any>{
        const {data}: any = this.axios.post(`api/v1/subscriptions/${subscription_id}/cancel`)
        return data
    }
    /**
     * This endpoint is used to get the information about a single subscription
     * that has been previously created.
     * @Endpoint api/v1/subscription/
     * @http_method GET
     * @param {string} subscription_id  subscription ID
     * @return {Promise} response 
     */
    public async find(subscription_id : string) : Promise<any>{
        const {data} = await this.axios.get('api/v1/subscriptions/' + subscription_id )
        return data
    }
    /**
     * This endpoint is used to get the information about all subscriptions 
     * that have been previously registered.
     * @Endpoint api/v1/subscriptions/
     * @http_method GET
     * @param {Object} filter http query string 
     * @return {Promise} response 
     */
    public async findAll(filter? : Filter) : Promise<any>{

        if (filter) { 
            const {data} : any = this.axios.get('api/v1/subscriptions', {
                params: filter
            });
            return  data
        }

        const {data}:any = await this.axios.get('api/v1/subscriptions' , {
            params: this.filter
        });
        return data
    }

}
