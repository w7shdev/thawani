
declare class ThawaniClient {

    constructor(secret_key: string, publishable_key: string, environment: string);

    find_customer(customer_token: string): Promise<any>;
    findAll_customers(payload?: Object): Promise<any>;
    create_customer(payload: Object): Promise<any>;
    delete_customer(payload: Object): Promise<any>;
    get_customer_payment(payload: Object): Promise<any>;
    remove_customer_payment(card_token: string): Promise<any>;
    create_session(payload: object): Promise<any>;
    find_session(session_id: string): Promise<any>;
    findAll_sessions(payload?: object): Promise<any>;
    redirect(session_id: string): string;
    endpoint(): string;
}

export = ThawaniClient; 