"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InvoiceRecipient model module.
 * @module model/InvoiceRecipient
 * @version 1.6.0
 */
var InvoiceRecipient = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvoiceRecipient</code>.
   * @alias module:model/InvoiceRecipient
   */
  function InvoiceRecipient() {
    _classCallCheck(this, InvoiceRecipient);

    InvoiceRecipient.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InvoiceRecipient, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InvoiceRecipient</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceRecipient} obj Optional instance to populate.
     * @return {module:model/InvoiceRecipient} The populated <code>InvoiceRecipient</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvoiceRecipient();

        if (data.hasOwnProperty('clientId')) {
          obj['clientId'] = _ApiClient["default"].convertToType(data['clientId'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('phone')) {
          obj['phone'] = _ApiClient["default"].convertToType(data['phone'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InvoiceRecipient;
}();
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
var _default = InvoiceRecipient;
exports["default"] = _default;