/**
 * SprintService
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
* The Body11 model module.
* @module model/Body11
* @version 1.6.0
*/
export default class Body11 {
    /**
    * Constructs a new <code>Body11</code>.
    * @alias module:model/Body11
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Body11</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body11} obj Optional instance to populate.
    * @return {module:model/Body11} The populated <code>Body11</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body11();
                        
            
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} name
    */
    'name' = undefined;
    /**
    * must be unique
    * @member {String} email
    */
    'email' = undefined;
    /**
    * At least one number and one letter
    * @member {String} password
    */
    'password' = undefined;




}
