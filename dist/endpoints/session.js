"use strict";Object.defineProperty(exports, "__esModule", {value: true});
 class Session {

    

    constructor(axios) {
        this.axios = axios;
    }

     create(payload) {
        return this.axios.post('api/v1/checkout/session', payload);
    }

     find(session_id) {
        return this.axios.get('api/v1/checkout/session/' + session_id);
    }

     redirect(session_id, publishable_key) {
        return '/pay/' + session_id + "?key=" + publishable_key;
    }

     findAll(payload) {

        if (payload) {
            this.axios.get('api/v1/checkout/session/', {
                params: payload
            })
        }
        return this.axios.get('api/v1/checkout/session/')

    }

} exports.default = Session;