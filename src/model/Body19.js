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
 * The Body19 model module.
 * @module model/Body19
 * @version 1.6.0
 */
class Body19 {
    /**
     * Constructs a new <code>Body19</code>.
     * @alias module:model/Body19
     * @param teamId {String} 
     * @param backlogId {String} 
     * @param type {String} 
     */
    constructor(teamId, backlogId, type) { 
        
        Body19.initialize(this, teamId, backlogId, type);
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
     * Constructs a <code>Body19</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Body19} obj Optional instance to populate.
     * @return {module:model/Body19} The populated <code>Body19</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body19();

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
Body19.prototype['teamId'] = undefined;

/**
 * @member {String} backlogId
 */
Body19.prototype['backlogId'] = undefined;

/**
 * @member {String} type
 */
Body19.prototype['type'] = undefined;






export default Body19;
