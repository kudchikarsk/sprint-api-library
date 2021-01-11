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
 * The Backlog model module.
 * @module model/Backlog
 * @version 1.6.0
 */
class Backlog {
    /**
     * Constructs a new <code>Backlog</code>.
     * @alias module:model/Backlog
     */
    constructor() { 
        
        Backlog.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Backlog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Backlog} obj Optional instance to populate.
     * @return {module:model/Backlog} The populated <code>Backlog</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Backlog();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('teamId')) {
                obj['teamId'] = ApiClient.convertToType(data['teamId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Backlog.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Backlog.prototype['name'] = undefined;

/**
 * @member {String} description
 */
Backlog.prototype['description'] = undefined;

/**
 * @member {String} teamId
 */
Backlog.prototype['teamId'] = undefined;






export default Backlog;

