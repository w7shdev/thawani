import { AxiosInstance } from 'axios'
import { Filter } from './../interfaces'
/**
 * This class is to handle the Payment Endpoint
 * 
 * @since 1.1.1
 */
export default class Plans { 

    axios: AxiosInstance;
    filter: Filter;

    constructor(axios: AxiosInstance, filter: Filter) {
        this.axios = axios
        this.filter = filter
    }

    public async create(){}
    /**
     * This endpoint is used to get the information about a single plan
     * that has been previously created.
     * @Endpoint api/v1/plans/
     * @http_method GET
     * @param {string} plan_id  plans ID
     * @return {Promise} response 
     */
    public async find(plan_id : string) : Promise<any>{
        const {data} = await this.axios.get('api/v1/plans/' + plan_id )
        return data
    }
    /**
     * This endpoint is used to get the information about all plans 
     * that have been previously registered.
     * @Endpoint api/v1/plans/
     * @http_method GET
     * @param {Object} filter http query string 
     * @return {Promise} response 
     */
    public async findAll(filter? : Filter){

        if (filter) { 
            const {data} : any = this.axios.get('api/v1/plans', {
                params: filter
            });
            return  data
        }

        const {data}:any = await this.axios.get('api/v1/plans' , {
            params: this.filter
        });
        return data
    }

}
