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
import Invoice from './Invoice';

/**
 * The InvoicesbulkInvoices model module.
 * @module model/InvoicesbulkInvoices
 * @version 1.6.0
 */
class InvoicesbulkInvoices {
    /**
     * Constructs a new <code>InvoicesbulkInvoices</code>.
     * @alias module:model/InvoicesbulkInvoices
     */
    constructor() { 
        
        InvoicesbulkInvoices.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvoicesbulkInvoices</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoicesbulkInvoices} obj Optional instance to populate.
     * @return {module:model/InvoicesbulkInvoices} The populated <code>InvoicesbulkInvoices</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvoicesbulkInvoices();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('invoiceId')) {
                obj['invoiceId'] = ApiClient.convertToType(data['invoiceId'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = Invoice.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 */
InvoicesbulkInvoices.prototype['type'] = undefined;

/**
 * @member {String} invoiceId
 */
InvoicesbulkInvoices.prototype['invoiceId'] = undefined;

/**
 * @member {module:model/Invoice} data
 */
InvoicesbulkInvoices.prototype['data'] = undefined;






export default InvoicesbulkInvoices;

