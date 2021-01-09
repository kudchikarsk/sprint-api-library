/**
 * node-express-boilerplate API documentation
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.6.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AuthTokens from './AuthTokens';
import User from './User';

/**
* The InlineResponse201 model module.
* @module model/InlineResponse201
* @version 1.6.0
*/
export default class InlineResponse201 {
    /**
    * Constructs a new <code>InlineResponse201</code>.
    * @alias module:model/InlineResponse201
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>InlineResponse201</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse201} obj Optional instance to populate.
    * @return {module:model/InlineResponse201} The populated <code>InlineResponse201</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse201();
                        
            
            if (data.hasOwnProperty('user')) {
                obj['user'] = User.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('tokens')) {
                obj['tokens'] = AuthTokens.constructFromObject(data['tokens']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/User} user
    */
    'user' = undefined;
    /**
    * @member {module:model/AuthTokens} tokens
    */
    'tokens' = undefined;




}
