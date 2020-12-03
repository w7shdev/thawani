import { AxiosInstance } from 'axios'
import Customer from './endpoints/cutomer';
import Payments from './endpoints/payment'
import Endpoint from './helpers/axios'
import Session from './endpoints/session'

class ThawaniClient {

    secret_key: string;
    publishable_key: string;
    env: string;
    api: Endpoint;

    customer: Customer;
    payment: Payments;
    session: Session;
    axios: AxiosInstance;
    /**
     *
     */
    constructor(secret: string, publishable: string, env: string) {
        this.secret_key = secret;
        this.publishable_key = publishable;
        this.env = env;
        this.api = new Endpoint(this.env, this.secret_key);
        this.axios = this.api.getInstance();
        this.customer = new Customer(this.axios);
        this.payment = new Payments(this.axios);
        this.session = new Session(this.axios);
    }

    /** customer endpoints */
    public find_customer(customer_token: string): Promise<any> {
        return this.customer.find(customer_token);
    }

    public findAll_customers(params?: Object): Promise<any> {
        if (params) return this.customer.findAll(params)
        return this.customer.findAll()
    }
    public create_customer(payload: Object): Promise<any> {
        return this.customer.create(payload)
    }
    public delete_customer(payload: Object): Promise<any> {
        return this.customer.create(payload);
    }

    /**  payments end points  */
    public get_customer_payment(payload: Object): Promise<any> {
        return this.payment.get(payload);
    }

    public remote_cutomer_payment(card_token: string): Promise<any> {
        return this.payment.delete(card_token);
    }

    /** session endpoints */
    public create_session(payload: object): Promise<any> {
        return this.session.create(payload);
    }
    public find_session(session_id: string): Promise<any> {
        return this.session.find(session_id);
    }
    public findAll(payload?: object): Promise<any> {
        if (payload) return this.session.findAll(payload);

        return this.session.findAll();
    }
    public redirect(session_id: string): string {
        return this.endpoint() + this.session.redirect(session_id, this.publishable_key);
    }

    public endpoint() {
        return this.api.get_base_url();
    }
}
const app = new ThawaniClient(process.env.SECRET, process.env.PUBLISH, process.env.ENV);
app.findAll_customers().then((data) => {
    console.log(data)
}).catch(err => console.error(err))
export = ThawaniClient