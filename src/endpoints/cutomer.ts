import { AxiosInstance } from 'axios';

export default class Customer {

    axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios
    }
    public create(payload: Object): Promise<T> {
        return this.axios.post('api/v1/customers', {
            data: payload
        })
    }

    public find(customer_key: string): Promise<T> {
        return this.axios.get('api/v1/customers/' + customer_key)
    }

    public findAll(payload?: object): Promise<T> {
        if (payload) {
            return this.axios.get('api/v1/customers/', {
                params: payload
            })
        }
        return this.axios.get('api/v1/customers/');
    }

    public remove(customer_key: string): Promise<T> {
        return this.axios.delete('api/v1/customers/' + customer_key);
    }

}