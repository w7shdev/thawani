

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
    products: Array<Products>;
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


export {
    SettingConfig,
    Filter,
    SessionPayload,
    RefundPayload,
    PaymentIntentPayload
}
