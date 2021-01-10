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
 * The Body3 model module.
 * @module model/Body3
 * @version 1.6.0
 */
var Body3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Body3</code>.
   * @alias module:model/Body3
   * @param refreshToken {String} 
   */
  function Body3(refreshToken) {
    _classCallCheck(this, Body3);

    Body3.initialize(this, refreshToken);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Body3, null, [{
    key: "initialize",
    value: function initialize(obj, refreshToken) {
      obj['refreshToken'] = refreshToken;
    }
    /**
     * Constructs a <code>Body3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Body3} obj Optional instance to populate.
     * @return {module:model/Body3} The populated <code>Body3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Body3();

        if (data.hasOwnProperty('refreshToken')) {
          obj['refreshToken'] = _ApiClient["default"].convertToType(data['refreshToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Body3;
}();
/**
 * @member {String} refreshToken
 */


Body3.prototype['refreshToken'] = undefined;
var _default = Body3;
exports["default"] = _default;