interface Filter{ 
    skip: number;
    limit: number 
}

interface SettingConfig  { 
    secretKey: string; 
    publishableKey: string; 
    dev: boolean;
    filter? :Filter 
}

interface Products {
    name: string;
    unit_amount: number;
    quantity: number; 
}

interface SessionPayload{ 
    client_reference_id : any;
    mode: string;
    products: Array<Products>;
    customer_id?: string;
    save_card_on_success?: boolean;
    plan_id?: string;
    success_url: string; 
    cancel_url: string;
    metadata?: Object;   
}

interface RefundPayload{ 
    payment_id: string;
    reason: string;
    metadata: object;
}

interface PaymentIntentPayload{ 
    client_reference_id :string;
    return_url: string;
    metadata?: object;
    payment_method_id?: string;
    amount?: number;
}

interface PlansPayload {
    name: string;
    amount: number;
    interval:  string;
    description: string;
    matadata?: Object;
}


export {
    SettingConfig,
    Filter,
    SessionPayload,
    RefundPayload,
    PaymentIntentPayload,
    PlansPayload
}
