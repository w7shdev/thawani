import { AxiosInstance } from 'axios'
export default class Session {

    axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    public create(payload: Object): Promise<T> {
        return this.axios.post('api/v1/checkout/session', payload);
    }

    public find(session_id: string): Promise<T> {
        return this.axios.get('api/v1/checkout/session/' + session_id);
    }

    public redirect(session_id: string, publishable_key: string): String {
        return '/pay/' + session_id + "?key=" + publishable_key;
    }

    public findAll(payload?: object): Promise<T> {

        if (payload) {
            this.axios.get('api/v1/checkout/session/', {
                params: payload
            })
        }
        return this.axios.get('api/v1/checkout/session/')

    }

}