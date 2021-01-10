"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Token = _interopRequireDefault(require("./Token"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AuthTokens model module.
 * @module model/AuthTokens
 * @version 1.6.0
 */
var AuthTokens = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AuthTokens</code>.
   * @alias module:model/AuthTokens
   */
  function AuthTokens() {
    _classCallCheck(this, AuthTokens);

    AuthTokens.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AuthTokens, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AuthTokens</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthTokens} obj Optional instance to populate.
     * @return {module:model/AuthTokens} The populated <code>AuthTokens</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthTokens();

        if (data.hasOwnProperty('access')) {
          obj['access'] = _Token["default"].constructFromObject(data['access']);
        }

        if (data.hasOwnProperty('refresh')) {
          obj['refresh'] = _Token["default"].constructFromObject(data['refresh']);
        }
      }

      return obj;
    }
  }]);

  return AuthTokens;
}();
/**
 * @member {module:model/Token} access
 */


AuthTokens.prototype['access'] = undefined;
/**
 * @member {module:model/Token} refresh
 */

AuthTokens.prototype['refresh'] = undefined;
var _default = AuthTokens;
exports["default"] = _default;