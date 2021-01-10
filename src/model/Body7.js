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
 * The Body7 model module.
 * @module model/Body7
 * @version 1.6.0
 */
class Body7 {
    /**
     * Constructs a new <code>Body7</code>.
     * @alias module:model/Body7
     */
    constructor() { 
        
        Body7.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Body7</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Body7} obj Optional instance to populate.
     * @return {module:model/Body7} The populated <code>Body7</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body7();

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
Body7.prototype['name'] = undefined;

/**
 * @member {String} description
 */
Body7.prototype['description'] = undefined;






export default Body7;

