"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Invoice = _interopRequireDefault(require("./Invoice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InvoicesbulkInvoices model module.
 * @module model/InvoicesbulkInvoices
 * @version 1.6.0
 */
var InvoicesbulkInvoices = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvoicesbulkInvoices</code>.
   * @alias module:model/InvoicesbulkInvoices
   */
  function InvoicesbulkInvoices() {
    _classCallCheck(this, InvoicesbulkInvoices);

    InvoicesbulkInvoices.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InvoicesbulkInvoices, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InvoicesbulkInvoices</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoicesbulkInvoices} obj Optional instance to populate.
     * @return {module:model/InvoicesbulkInvoices} The populated <code>InvoicesbulkInvoices</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvoicesbulkInvoices();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('invoiceId')) {
          obj['invoiceId'] = _ApiClient["default"].convertToType(data['invoiceId'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _Invoice["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return InvoicesbulkInvoices;
}();
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
var _default = InvoicesbulkInvoices;
exports["default"] = _default;