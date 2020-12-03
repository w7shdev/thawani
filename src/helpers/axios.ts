import axios, { AxiosInstance, AxiosStatic } from 'axios'
import dotenv from 'dotenv'
dotenv.config()

class Endpoint {

    environment: string;
    secret_key: string;
    publishable_key: string;
    constructor(env: string, secret: string) {
        this.environment = env;
        this.secret_key = secret;
    }
    get_base_url(): string {
        return (this.environment.toLowerCase() == 'dev') ? process.env.DEV : process.env.PROD;
    }
    get_header(): Object {
        return {
            'Thawani-Api-Key': this.secret_key
        };
    }
    getInstance(): AxiosInstance {
        return axios.create({
            baseURL: this.get_base_url(),
            headers: this.get_header()
        });
    }
}

export = Endpoint;
// const _end = new Endpoint();

// export = _end.getInstance();