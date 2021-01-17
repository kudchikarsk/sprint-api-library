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
 * The User model module.
 * @module model/User
 * @version 1.6.0
 */
var User = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   */
  function User() {
    _classCallCheck(this, User);

    User.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(User, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/User} obj Optional instance to populate.
     * @return {module:model/User} The populated <code>User</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new User();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('role')) {
          obj['role'] = _ApiClient["default"].convertToType(data['role'], 'String');
        }

        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient["default"].convertToType(data['image'], 'String');
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

  return User;
}();
/**
 * @member {String} id
 */


User.prototype['id'] = undefined;
/**
 * @member {String} email
 */

User.prototype['email'] = undefined;
/**
 * @member {String} name
 */

User.prototype['name'] = undefined;
/**
 * @member {module:model/User.RoleEnum} role
 */

User.prototype['role'] = undefined;
/**
 * @member {String} image
 */

User.prototype['image'] = undefined;
/**
 * @member {String} company
 */

User.prototype['company'] = undefined;
/**
 * @member {String} education
 */

User.prototype['education'] = undefined;
/**
 * @member {String} address
 */

User.prototype['address'] = undefined;
/**
 * @member {String} city
 */

User.prototype['city'] = undefined;
/**
 * @member {String} country
 */

User.prototype['country'] = undefined;
/**
 * @member {String} postalCode
 */

User.prototype['postalCode'] = undefined;
/**
 * @member {String} aboutMe
 */

User.prototype['aboutMe'] = undefined;
/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */

User['RoleEnum'] = {
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
var _default = User;
exports["default"] = _default;