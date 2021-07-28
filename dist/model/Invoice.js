"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InvoiceItems = _interopRequireDefault(require("./InvoiceItems"));

var _InvoiceRecipient = _interopRequireDefault(require("./InvoiceRecipient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Invoice model module.
 * @module model/Invoice
 * @version 1.6.0
 */
var Invoice = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Invoice</code>.
   * @alias module:model/Invoice
   */
  function Invoice() {
    _classCallCheck(this, Invoice);

    Invoice.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Invoice, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Invoice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Invoice} obj Optional instance to populate.
     * @return {module:model/Invoice} The populated <code>Invoice</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Invoice();

        if (data.hasOwnProperty('organizationId')) {
          obj['organizationId'] = _ApiClient["default"].convertToType(data['organizationId'], 'String');
        }

        if (data.hasOwnProperty('invoiceId')) {
          obj['invoiceId'] = _ApiClient["default"].convertToType(data['invoiceId'], 'String');
        }

        if (data.hasOwnProperty('recipient')) {
          obj['recipient'] = _InvoiceRecipient["default"].constructFromObject(data['recipient']);
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('issuedOn')) {
          obj['issuedOn'] = _ApiClient["default"].convertToType(data['issuedOn'], 'String');
        }

        if (data.hasOwnProperty('dueOn')) {
          obj['dueOn'] = _ApiClient["default"].convertToType(data['dueOn'], 'String');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_InvoiceItems["default"]]);
        }

        if (data.hasOwnProperty('notes')) {
          obj['notes'] = _ApiClient["default"].convertToType(data['notes'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('history')) {
          obj['history'] = _ApiClient["default"].convertToType(data['history'], Object);
        }

        if (data.hasOwnProperty('createdAt')) {
          obj['createdAt'] = _ApiClient["default"].convertToType(data['createdAt'], 'String');
        }

        if (data.hasOwnProperty('createdBy')) {
          obj['createdBy'] = _ApiClient["default"].convertToType(data['createdBy'], 'String');
        }

        if (data.hasOwnProperty('updatedAt')) {
          obj['updatedAt'] = _ApiClient["default"].convertToType(data['updatedAt'], 'String');
        }

        if (data.hasOwnProperty('updatedBy')) {
          obj['updatedBy'] = _ApiClient["default"].convertToType(data['updatedBy'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Invoice;
}();
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
var _default = Invoice;
exports["default"] = _default;