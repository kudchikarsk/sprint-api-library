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
 * The Body5 model module.
 * @module model/Body5
 * @version 1.6.0
 */
var Body5 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Body5</code>.
   * @alias module:model/Body5
   * @param password {String} At least one number and one letter
   */
  function Body5(password) {
    _classCallCheck(this, Body5);

    Body5.initialize(this, password);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Body5, null, [{
    key: "initialize",
    value: function initialize(obj, password) {
      obj['password'] = password;
    }
    /**
     * Constructs a <code>Body5</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Body5} obj Optional instance to populate.
     * @return {module:model/Body5} The populated <code>Body5</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Body5();

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Body5;
}();
/**
 * At least one number and one letter
 * @member {String} password
 */


Body5.prototype['password'] = undefined;
var _default = Body5;
exports["default"] = _default;