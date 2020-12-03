import axios, { AxiosInstance, AxiosStatic } from 'axios'
import dotenv from 'dotenv'
dotenv.config()
/**
 * Setup Axios js configuration 
 * @author Muhannad Al-Risi
 * @version 1.0.0
 */

const development_uri = process.env.Thawani_NODE_API_DEV_URI ?? 'https://uatcheckout.thawani.om';
const production_uri = process.env.Thawani_NODE_API_DEV_PROD ?? 'https://checkout.thawani.om';
class Endpoint {

    environment: string;
    secret_key: string;
    publishable_key: string;
    constructor(env: string, secret: string) {
        this.environment = env;
        this.secret_key = secret;
    }
    /**
     * Get the HTTP uri depending on the environment 
     * @returns {string} HTTP uri
     */
    get_base_url(): string {
        return (this.environment.toLowerCase() == 'dev') ? development_uri : production_uri;
    }
    /**
     * set up the Request header 
     * 
     * @return {object} Header request 
     */
    get_header(): Object {
        return {
            'Thawani-Api-Key': this.secret_key
        };
    }
    /**
     * Get axios reference object 
     * 
     * @return {AxiosInstance} axios js object 
     */
    getInstance(): AxiosInstance {
        return axios.create({
            baseURL: this.get_base_url(),
            headers: this.get_header()
        });
    }
}

export = Endpoint;