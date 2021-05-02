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
 * The InvoiceItems model module.
 * @module model/InvoiceItems
 * @version 1.6.0
 */
var InvoiceItems = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvoiceItems</code>.
   * @alias module:model/InvoiceItems
   */
  function InvoiceItems() {
    _classCallCheck(this, InvoiceItems);

    InvoiceItems.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InvoiceItems, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InvoiceItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceItems} obj Optional instance to populate.
     * @return {module:model/InvoiceItems} The populated <code>InvoiceItems</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvoiceItems();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('quantity')) {
          obj['quantity'] = _ApiClient["default"].convertToType(data['quantity'], 'Number');
        }

        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient["default"].convertToType(data['price'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InvoiceItems;
}();
/**
 * @member {String} name
 */


InvoiceItems.prototype['name'] = undefined;
/**
 * @member {Number} quantity
 */

InvoiceItems.prototype['quantity'] = undefined;
/**
 * @member {Number} price
 */

InvoiceItems.prototype['price'] = undefined;
var _default = InvoiceItems;
exports["default"] = _default;