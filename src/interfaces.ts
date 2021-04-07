

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
export {
    SettingConfig,
    Filter,
    SessionPayload
}