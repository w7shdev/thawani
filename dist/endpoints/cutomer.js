"use strict";Object.defineProperty(exports, "__esModule", {value: true});

 class Customer {

    

    constructor(axios) {
        this.axios = axios
    }
     create(payload) {
        return this.axios.post('api/v1/customers', payload)
    }

     find(customer_key) {
        return this.axios.get('api/v1/customers/' + customer_key)
    }

     findAll(payload) {
        if (payload) {
            return this.axios.get('api/v1/customers/', {
                params: payload
            })
        }
        return this.axios.get('api/v1/customers/');
    }

     remove(customer_key) {
        return this.axios.delete('api/v1/customers/' + customer_key);
    }

} exports.default = Customer;