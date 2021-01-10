/**
 * SprintService
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.6.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Body5 model module.
 * @module model/Body5
 * @version 1.6.0
 */
class Body5 {
    /**
     * Constructs a new <code>Body5</code>.
     * @alias module:model/Body5
     * @param password {String} At least one number and one letter
     */
    constructor(password) { 
        
        Body5.initialize(this, password);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, password) { 
        obj['password'] = password;
    }

    /**
     * Constructs a <code>Body5</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Body5} obj Optional instance to populate.
     * @return {module:model/Body5} The populated <code>Body5</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body5();

            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }


}

/**
 * At least one number and one letter
 * @member {String} password
 */
Body5.prototype['password'] = undefined;






export default Body5;

