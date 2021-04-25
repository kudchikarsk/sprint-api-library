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
import Task from './Task';

/**
 * The InlineResponse2002 model module.
 * @module model/InlineResponse2002
 * @version 1.6.0
 */
class InlineResponse2002 {
    /**
     * Constructs a new <code>InlineResponse2002</code>.
     * @alias module:model/InlineResponse2002
     */
    constructor() { 
        
        InlineResponse2002.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2002</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2002} obj Optional instance to populate.
     * @return {module:model/InlineResponse2002} The populated <code>InlineResponse2002</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2002();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [Task]);
            }
            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'Number');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('totalPages')) {
                obj['totalPages'] = ApiClient.convertToType(data['totalPages'], 'Number');
            }
            if (data.hasOwnProperty('totalResults')) {
                obj['totalResults'] = ApiClient.convertToType(data['totalResults'], 'Number');
            }
            if (data.hasOwnProperty('cache')) {
                obj['cache'] = ApiClient.convertToType(data['cache'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Task>} results
 */
InlineResponse2002.prototype['results'] = undefined;

/**
 * @member {Number} page
 */
InlineResponse2002.prototype['page'] = undefined;

/**
 * @member {Number} limit
 */
InlineResponse2002.prototype['limit'] = undefined;

/**
 * @member {Number} totalPages
 */
InlineResponse2002.prototype['totalPages'] = undefined;

/**
 * @member {Number} totalResults
 */
InlineResponse2002.prototype['totalResults'] = undefined;

/**
 * @member {Object} cache
 */
InlineResponse2002.prototype['cache'] = undefined;






export default InlineResponse2002;

