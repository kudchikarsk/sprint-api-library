/**
 * Sprint API
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

/**
* The Body3 model module.
* @module model/Body3
* @version 1.6.0
*/
export default class Body3 {
    /**
    * Constructs a new <code>Body3</code>.
    * @alias module:model/Body3
    * @class
    * @param refreshToken {String} 
    */

    constructor(refreshToken) {
        
        
        this['refreshToken'] = refreshToken;
        
    }

    /**
    * Constructs a <code>Body3</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body3} obj Optional instance to populate.
    * @return {module:model/Body3} The populated <code>Body3</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body3();
                        
            
            if (data.hasOwnProperty('refreshToken')) {
                obj['refreshToken'] = ApiClient.convertToType(data['refreshToken'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} refreshToken
    */
    'refreshToken' = undefined;




}
