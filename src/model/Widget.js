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
 * The Widget model module.
 * @module model/Widget
 * @version 1.6.0
 */
class Widget {
    /**
     * Constructs a new <code>Widget</code>.
     * @alias module:model/Widget
     */
    constructor() { 
        
        Widget.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Widget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Widget} obj Optional instance to populate.
     * @return {module:model/Widget} The populated <code>Widget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Widget();

            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
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
 * @member {String} userId
 */
Widget.prototype['userId'] = undefined;

/**
 * @member {String} teamId
 */
Widget.prototype['teamId'] = undefined;

/**
 * @member {String} backlogId
 */
Widget.prototype['backlogId'] = undefined;

/**
 * @member {String} type
 */
Widget.prototype['type'] = undefined;






export default Widget;
