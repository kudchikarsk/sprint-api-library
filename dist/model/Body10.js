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
 * The Body10 model module.
 * @module model/Body10
 * @version 1.6.0
 */
var Body10 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Body10</code>.
   * @alias module:model/Body10
   * @param name {String} 
   * @param email {String} must be unique
   * @param password {String} At least one number and one letter
   * @param role {module:model/Body10.RoleEnum} 
   */
  function Body10(name, email, password, role) {
    _classCallCheck(this, Body10);

    Body10.initialize(this, name, email, password, role);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Body10, null, [{
    key: "initialize",
    value: function initialize(obj, name, email, password, role) {
      obj['name'] = name;
      obj['email'] = email;
      obj['password'] = password;
      obj['role'] = role;
    }
    /**
     * Constructs a <code>Body10</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Body10} obj Optional instance to populate.
     * @return {module:model/Body10} The populated <code>Body10</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Body10();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('role')) {
          obj['role'] = _ApiClient["default"].convertToType(data['role'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Body10;
}();
/**
 * @member {String} name
 */


Body10.prototype['name'] = undefined;
/**
 * must be unique
 * @member {String} email
 */

Body10.prototype['email'] = undefined;
/**
 * At least one number and one letter
 * @member {String} password
 */

Body10.prototype['password'] = undefined;
/**
 * @member {module:model/Body10.RoleEnum} role
 */

Body10.prototype['role'] = undefined;
/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */

Body10['RoleEnum'] = {
  /**
   * value: "user"
   * @const
   */
  "user": "user",

  /**
   * value: "admin"
   * @const
   */
  "admin": "admin"
};
var _default = Body10;
exports["default"] = _default;