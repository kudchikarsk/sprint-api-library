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
* The Body model module.
* @module model/Body
* @version 1.6.0
*/
export default class Body {
    /**
    * Constructs a new <code>Body</code>.
    * @alias module:model/Body
    * @class
    * @param name {String} 
    * @param email {String} must be unique
    * @param password {String} At least one number and one letter
    */

    constructor(name, email, password) {
        
        
        this['name'] = name;
        this['email'] = email;
        this['password'] = password;
        
    }

    /**
    * Constructs a <code>Body</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body} obj Optional instance to populate.
    * @return {module:model/Body} The populated <code>Body</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body();
                        
            
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
