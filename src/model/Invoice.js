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
import InvoiceItems from './InvoiceItems';
import InvoiceRecipient from './InvoiceRecipient';

/**
 * The Invoice model module.
 * @module model/Invoice
 * @version 1.6.0
 */
class Invoice {
    /**
     * Constructs a new <code>Invoice</code>.
     * @alias module:model/Invoice
     */
    constructor() { 
        
        Invoice.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Invoice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Invoice} obj Optional instance to populate.
     * @return {module:model/Invoice} The populated <code>Invoice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Invoice();

            if (data.hasOwnProperty('organizationId')) {
                obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
            }
            if (data.hasOwnProperty('invoiceId')) {
                obj['invoiceId'] = ApiClient.convertToType(data['invoiceId'], 'String');
            }
            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = InvoiceRecipient.constructFromObject(data['recipient']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('issuedOn')) {
                obj['issuedOn'] = ApiClient.convertToType(data['issuedOn'], 'String');
            }
            if (data.hasOwnProperty('dueOn')) {
                obj['dueOn'] = ApiClient.convertToType(data['dueOn'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [InvoiceItems]);
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('history')) {
                obj['history'] = ApiClient.convertToType(data['history'], Object);
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
            }
            if (data.hasOwnProperty('updatedBy')) {
                obj['updatedBy'] = ApiClient.convertToType(data['updatedBy'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} organizationId
 */
Invoice.prototype['organizationId'] = undefined;

/**
 * @member {String} invoiceId
 */
Invoice.prototype['invoiceId'] = undefined;

/**
 * @member {module:model/InvoiceRecipient} recipient
 */
Invoice.prototype['recipient'] = undefined;

/**
 * @member {String} description
 */
Invoice.prototype['description'] = undefined;

/**
 * @member {String} issuedOn
 */
Invoice.prototype['issuedOn'] = undefined;

/**
 * @member {String} dueOn
 */
Invoice.prototype['dueOn'] = undefined;

/**
 * @member {String} currency
 */
Invoice.prototype['currency'] = undefined;

/**
 * @member {Array.<module:model/InvoiceItems>} items
 */
Invoice.prototype['items'] = undefined;

/**
 * @member {String} notes
 */
Invoice.prototype['notes'] = undefined;

/**
 * @member {String} status
 */
Invoice.prototype['status'] = undefined;

/**
 * @member {Object} history
 */
Invoice.prototype['history'] = undefined;

/**
 * @member {String} createdAt
 */
Invoice.prototype['createdAt'] = undefined;

/**
 * @member {String} createdBy
 */
Invoice.prototype['createdBy'] = undefined;

/**
 * @member {String} updatedAt
 */
Invoice.prototype['updatedAt'] = undefined;

/**
 * @member {String} updatedBy
 */
Invoice.prototype['updatedBy'] = undefined;






export default Invoice;

