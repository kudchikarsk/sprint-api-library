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
 * The Body16 model module.
 * @module model/Body16
 * @version 1.6.0
 */
class Body16 {
    /**
     * Constructs a new <code>Body16</code>.
     * @alias module:model/Body16
     * @param teamId {String} 
     * @param backlogId {String} 
     * @param type {String} 
     */
    constructor(teamId, backlogId, type) { 
        
        Body16.initialize(this, teamId, backlogId, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, teamId, backlogId, type) { 
        obj['teamId'] = teamId;
        obj['backlogId'] = backlogId;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>Body16</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Body16} obj Optional instance to populate.
     * @return {module:model/Body16} The populated <code>Body16</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body16();

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
Body16.prototype['teamId'] = undefined;

/**
 * @member {String} backlogId
 */
Body16.prototype['backlogId'] = undefined;

/**
 * @member {String} type
 */
Body16.prototype['type'] = undefined;






export default Body16;
