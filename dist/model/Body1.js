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
 * The Body1 model module.
 * @module model/Body1
 * @version 1.6.0
 */
var Body1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Body1</code>.
   * @alias module:model/Body1
   * @param email {String} 
   * @param password {String} 
   */
  function Body1(email, password) {
    _classCallCheck(this, Body1);

    Body1.initialize(this, email, password);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Body1, null, [{
    key: "initialize",
    value: function initialize(obj, email, password) {
      obj['email'] = email;
      obj['password'] = password;
    }
    /**
     * Constructs a <code>Body1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Body1} obj Optional instance to populate.
     * @return {module:model/Body1} The populated <code>Body1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Body1();

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Body1;
}();
/**
 * @member {String} email
 */


Body1.prototype['email'] = undefined;
/**
 * @member {String} password
 */

Body1.prototype['password'] = undefined;
var _default = Body1;
exports["default"] = _default;