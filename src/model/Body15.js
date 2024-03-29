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
 * The Body15 model module.
 * @module model/Body15
 * @version 1.6.0
 */
class Body15 {
    /**
     * Constructs a new <code>Body15</code>.
     * @alias module:model/Body15
     * @param name {String} 
     */
    constructor(name) { 
        
        Body15.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>Body15</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Body15} obj Optional instance to populate.
     * @return {module:model/Body15} The populated <code>Body15</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body15();

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
Body15.prototype['name'] = undefined;

/**
 * @member {String} description
 */
Body15.prototype['description'] = undefined;






export default Body15;

