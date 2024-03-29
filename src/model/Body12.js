/**
 * Sprint Service
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
 * The Body12 model module.
 * @module model/Body12
 * @version 1.6.0
 */
class Body12 {
    /**
     * Constructs a new <code>Body12</code>.
     * @alias module:model/Body12
     */
    constructor() { 
        
        Body12.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Body12</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Body12} obj Optional instance to populate.
     * @return {module:model/Body12} The populated <code>Body12</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body12();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
Body12.prototype['name'] = undefined;

/**
 * @member {String} description
 */
Body12.prototype['description'] = undefined;






export default Body12;

