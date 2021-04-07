import { AxiosInstance } from 'axios'
import {Filter, RefundPayload} from './../interfaces'

export default class Refund{

    axios : AxiosInstance; 
    filter: Filter;
    constructor(axios: AxiosInstance , filter: Filter) {
        this.axios = axios;
        this.filter = filter
    }

    public async create(payload : RefundPayload) : Promise<any>{ 
        const {data} = await this.axios.post('api/v1/refunds' , payload)

        return data
    }

    public async find(refund_id :number) : Promise<any>{ 
        const {data}  = await this.axios.get('api/v1/refunds/' + refund_id)
        return data
    }

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