import axios, { AxiosInstance } from 'axios'
/**
 * Setup Axios js configuration 
 * @author Muhannad Al-Risi
 * @version 1.0.0
 */
class Endpoint {

    isProduction: boolean;
    secret_key: string;
    publishable_key: string;
    constructor(env: boolean, secret: string) {
        this.isProduction = env;
        this.secret_key = secret;
    }
    /**
     * Get the HTTP uri depending on the environment 
     * @returns {string} HTTP uri
     */
    get_base_url(): string {
        return (this.isProduction) ? 'https://checkout.thawani.om' : 'https://uatcheckout.thawani.om' ;
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