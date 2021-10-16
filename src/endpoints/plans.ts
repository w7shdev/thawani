import { AxiosInstance } from 'axios'
/**
 * This class is to handle the Payment Endpoint
 * 
 * @since 1.1.1
 */
export default class Plans { 

    axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    public async create(){}

    public async find(){}

    public async findAll(){}

}
