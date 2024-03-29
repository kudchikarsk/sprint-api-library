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
 * The InvoiceRecipient model module.
 * @module model/InvoiceRecipient
 * @version 1.6.0
 */
class InvoiceRecipient {
    /**
     * Constructs a new <code>InvoiceRecipient</code>.
     * @alias module:model/InvoiceRecipient
     */
    constructor() { 
        
        InvoiceRecipient.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvoiceRecipient</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceRecipient} obj Optional instance to populate.
     * @return {module:model/InvoiceRecipient} The populated <code>InvoiceRecipient</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvoiceRecipient();

            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} clientId
 */
InvoiceRecipient.prototype['clientId'] = undefined;

/**
 * @member {String} name
 */
InvoiceRecipient.prototype['name'] = undefined;

/**
 * @member {String} phone
 */
InvoiceRecipient.prototype['phone'] = undefined;

/**
 * @member {String} address
 */
InvoiceRecipient.prototype['address'] = undefined;






export default InvoiceRecipient;

