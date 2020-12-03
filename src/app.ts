import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config();

class ThawaniClient {

    secret_key: string;
    publishable_key: string;
    env: string;

    /**
     *
     */
    constructor(secret: string, publishable: string, env: string) {

        this.secret_key = secret;
        this.publishable_key = publishable;
        this.env = env;
    }

    public get_endpoint(): string {
        return (this.env.toLowerCase() == 'dev') ? process.env.DEV : process.env.PROD;
    }
    public getCustomers(): Promise<T> {
        return axios.get('https://uatcheckout.thawani.om/api/v1/customers', {
            headers: this.get_header()
        });
    }

    public get_header(): Object {
        return {
            'Thawani-Api-Key': this.secret_key
        };
    }
}

export = ThawaniClient