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
 * The Body16 model module.
 * @module model/Body16
 * @version 1.6.0
 */
var Body16 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Body16</code>.
   * @alias module:model/Body16
   * @param name {String} 
   */
  function Body16(name) {
    _classCallCheck(this, Body16);

    Body16.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Body16, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>Body16</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Body16} obj Optional instance to populate.
     * @return {module:model/Body16} The populated <code>Body16</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Body16();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Body16;
}();
/**
 * @member {String} name
 */


Body16.prototype['name'] = undefined;
/**
 * @member {String} description
 */

Body16.prototype['description'] = undefined;
var _default = Body16;
exports["default"] = _default;