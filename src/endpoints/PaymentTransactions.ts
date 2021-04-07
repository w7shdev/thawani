import { AxiosInstance } from 'axios'
import {Filter} from './../interfaces'

export default class PaymentTransactions{

    axios : AxiosInstance; 
    filter: Filter;
    constructor(axios: AxiosInstance, filter : Filter) {
        this.axios = axios;
    }

    public async find(payment_id:number) : Promise<any> {
        const {data} = await this.axios.get('api/v1/payments/' + payment_id)
        return data; 
    }

    public async findAll(filter?: Filter): Promise<any> {
        if(filter) { 
            const {data} = await this.axios.get('api/v1/payments', {
                params :{
                    checkout_invoice: '',
                    ...filter
                }
            });
            return data;
        }

        const {data} = await this.axios.get('api/v1/payments', {
            params: this.filter
        });

        return data;
    }
}