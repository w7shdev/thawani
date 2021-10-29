"use strict";Object.defineProperty(exports, "__esModule", {value: true});

/**
 * This class is to handle the Plans Endpoint
 * 
 * @since 1.1.1
 */
 class Plans { 

    
    

    constructor(axios, filter) {
        this.axios = axios
        this.filter = filter
    }
    /**
     * Create plan that can be used for billing cycle
     * @Endpoint api/v1/plans
     * @http_method POST
     * @param {PlansPayload} payload 
     * @return {Promise} response 
     */
     async create(payload) {
        const {data} = this.axios.post('api/v1/plans/' , payload)
        return data
    }
    /**
     * This endpoint is used to get the information about a single plan
     * that has been previously created.
     * @Endpoint api/v1/plans/
     * @http_method GET
     * @param {string} plan_id  plans ID
     * @return {Promise} response 
     */
     async find(plan_id ) {
        const {data} = await this.axios.get('api/v1/plans/' + plan_id )
        return data
    }
    /**
     * This endpoint is used to get the information about all plans 
     * that have been previously registered.
     * @Endpoint api/v1/plans/
     * @http_method GET
     * @param {Object} filter http query string 
     * @return {Promise} response 
     */
     async findAll(filter) {

        if (filter) { 
            const {data}  = this.axios.get('api/v1/plans', {
                params: filter
            });
            return  data
        }

        const {data} = await this.axios.get('api/v1/plans' , {
            params: this.filter
        });
        return data
    }

} exports.default = Plans;
