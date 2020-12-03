"use strict";Object.defineProperty(exports, "__esModule", {value: true});
 class Payments {

    

    constructor(axios) {
        this.axios = axios;
    }

     get(payload) {
        return this.axios.get('api/v1/payment_methods', {
            params: payload
        });
    }

     delete(card_token) {
        this.axios.delete('api/v1/payment_methods/' + card_token);
    }

} exports.default = Payments;