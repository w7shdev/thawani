import { AxiosInstance } from 'axios'
export default class Payments {

    axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    public get(payload: object): Promise<any> {
        return this.axios.get('api/v1/payment_methods', {
            params: payload
        });
    }

    public delete(card_token: string): Promise<any> {
        this.axios.delete('api/v1/payment_methods/' + card_token);
    }

}