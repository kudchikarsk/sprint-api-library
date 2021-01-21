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
 * The Body10 model module.
 * @module model/Body10
 * @version 1.6.0
 */
class Body10 {
    /**
     * Constructs a new <code>Body10</code>.
     * @alias module:model/Body10
     */
    constructor() { 
        
        Body10.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Body10</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Body10} obj Optional instance to populate.
     * @return {module:model/Body10} The populated <code>Body10</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body10();

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
Body10.prototype['name'] = undefined;

/**
 * @member {String} description
 */
Body10.prototype['description'] = undefined;






export default Body10;

