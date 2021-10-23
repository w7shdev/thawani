import { AxiosInstance } from 'axios'
/**
 * This class is to handle the Payment Endpoint
 * 
 * @since 1.1.1
 */
export default class Plans { 

    axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
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

    public async findAll(){}

}
