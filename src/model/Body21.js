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
 * The Body21 model module.
 * @module model/Body21
 * @version 1.6.0
 */
class Body21 {
    /**
     * Constructs a new <code>Body21</code>.
     * @alias module:model/Body21
     */
    constructor() { 
        
        Body21.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Body21</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Body21} obj Optional instance to populate.
     * @return {module:model/Body21} The populated <code>Body21</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body21();

            if (data.hasOwnProperty('teamId')) {
                obj['teamId'] = ApiClient.convertToType(data['teamId'], 'String');
            }
            if (data.hasOwnProperty('backlogId')) {
                obj['backlogId'] = ApiClient.convertToType(data['backlogId'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} teamId
 */
Body21.prototype['teamId'] = undefined;

/**
 * @member {String} backlogId
 */
Body21.prototype['backlogId'] = undefined;

/**
 * @member {String} type
 */
Body21.prototype['type'] = undefined;






export default Body21;
