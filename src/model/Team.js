/**
 * Sprint API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.6.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The Team model module.
* @module model/Team
* @version 1.6.0
*/
export default class Team {
    /**
    * Constructs a new <code>Team</code>.
    * @alias module:model/Team
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Team</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Team} obj Optional instance to populate.
    * @return {module:model/Team} The populated <code>Team</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Team();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} id
    */
    'id' = undefined;
    /**
    * @member {String} name
    */
    'name' = undefined;
    /**
    * @member {String} description
    */
    'description' = undefined;




}
