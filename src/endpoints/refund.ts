import { AxiosInstance } from 'axios'
import {Filter, RefundPayload} from './../interfaces'

export default class Refund{

    axios : AxiosInstance; 
    filter: Filter;
    constructor(axios: AxiosInstance , filter: Filter) {
        this.axios = axios;
        this.filter = filter
    }
    /**
     * Return payment for a single successful payment
     *  base on the payment identification.
     * @endpoint api/v1/refunds
     * @http_method POST
     * @param {RefundPayload} payload refund payload 
     * @returns {Promise} response
     */
    public async create(payload : RefundPayload) : Promise<any>{ 
        const {data} = await this.axios.post('api/v1/refunds' , payload)

        return data
    }
    /**
     * Return back the details of a single refund transactions.
     * @endpoint api/v1/refunds/:refund_id
     * @http_method GET
     * @param {number} refund_id 
     * @returns {Promise} response
     */
    public async find(refund_id :number) : Promise<any>{ 
        const {data}  = await this.axios.get('api/v1/refunds/' + refund_id)
        return data
    }
    /**
     * Return back the details of a multiple refund transactions.
     * @endpoint api/v1/refunds
     * @http_method GET
     * @param {Filter} filter http query 
     * @returns {Promise} response
     */
    public async findAll(filter? : Filter) : Promise<any>{
        if(filter) { 
            const {data} = await this.axios.get('api/v1/refunds' , { 
                params: filter
            })
            return data
        }
        const {data} = await this.axios.get('api/v1/refunds' , { 
            params: this.filter
        })
        return data 
    }

}