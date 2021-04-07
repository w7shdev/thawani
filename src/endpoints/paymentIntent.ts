import { AxiosInstance } from 'axios'
import {Filter, PaymentIntentPayload} from './../interfaces'

export default class PaymentIntent{

    axios : AxiosInstance; 
    filter: Filter;
    constructor(axios: AxiosInstance,  filter : Filter) {
        this.axios = axios;
        this.filter = filter
    }

    /**
     * create
     */
    public async create(payload: PaymentIntentPayload) : Promise<any> {
        const {data} = await this.axios.post('api/v1/payment_intents' , payload)
        return data
    }

    /**
     * confirm
     */
    public async confirm(paymentIntent_id: string) : Promise<any> {
        const {data} = await this.axios.post('api/v1/payment_intents/'+paymentIntent_id+'/confirm')
        return data
    }

    /**
     * cancel
     */
    public async cancel(paymentIntent_id: string) : Promise<any> {
        const {data} = await this.axios.post('api/v1/payment_intents/'+paymentIntent_id+'/cancel')
        return data
    }

    /**
     * findByID
     */
    public async find(paymentIntent_id : string):Promise<any> {
        const {data} = await this.axios.get('api/v1/payment_intents/' +paymentIntent_id)
        return data
    }

    /**
     * findByReference
     */
    public async findByReference(reference_id: number) : Promise<any> {
        const {data} = await this.axios.get('api/v1/payment_intents/'+reference_id+'/reference')
        return data
    }

    /**
     * findAll
     */
    public async findAll(filter: Filter) : Promise<any> {
        if(filter) { 
            const {data} = await this.axios.get('api/v1/payment_intents', {
                params: filter
            })
            return data
        }
        const {data} = await this.axios.get('api/v1/payment_intents', {
            params: this.filter
        })
        return data
    }


}