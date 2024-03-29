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
 * The Body18 model module.
 * @module model/Body18
 * @version 1.6.0
 */
var Body18 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Body18</code>.
   * @alias module:model/Body18
   */
  function Body18() {
    _classCallCheck(this, Body18);

    Body18.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Body18, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Body18</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Body18} obj Optional instance to populate.
     * @return {module:model/Body18} The populated <code>Body18</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Body18();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('company')) {
          obj['company'] = _ApiClient["default"].convertToType(data['company'], 'String');
        }

        if (data.hasOwnProperty('education')) {
          obj['education'] = _ApiClient["default"].convertToType(data['education'], 'String');
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }

        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');
        }

        if (data.hasOwnProperty('postalCode')) {
          obj['postalCode'] = _ApiClient["default"].convertToType(data['postalCode'], 'String');
        }

        if (data.hasOwnProperty('aboutMe')) {
          obj['aboutMe'] = _ApiClient["default"].convertToType(data['aboutMe'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Body18;
}();
/**
 * @member {String} name
 */


Body18.prototype['name'] = undefined;
/**
 * must be unique
 * @member {String} email
 */

Body18.prototype['email'] = undefined;
/**
 * @member {String} company
 */

Body18.prototype['company'] = undefined;
/**
 * @member {String} education
 */

Body18.prototype['education'] = undefined;
/**
 * @member {String} address
 */

Body18.prototype['address'] = undefined;
/**
 * @member {String} city
 */

Body18.prototype['city'] = undefined;
/**
 * @member {String} country
 */

Body18.prototype['country'] = undefined;
/**
 * @member {String} postalCode
 */

Body18.prototype['postalCode'] = undefined;
/**
 * @member {String} aboutMe
 */

Body18.prototype['aboutMe'] = undefined;
var _default = Body18;
exports["default"] = _default;