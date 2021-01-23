"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Task = _interopRequireDefault(require("./Task"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Body8 model module.
 * @module model/Body8
 * @version 1.6.0
 */
var Body8 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Body8</code>.
   * @alias module:model/Body8
   * @param type {String} 
   * @param taskId {String} 
   * @param data {module:model/Task} 
   */
  function Body8(type, taskId, data) {
    _classCallCheck(this, Body8);

    Body8.initialize(this, type, taskId, data);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Body8, null, [{
    key: "initialize",
    value: function initialize(obj, type, taskId, data) {
      obj['type'] = type;
      obj['taskId'] = taskId;
      obj['data'] = data;
    }
    /**
     * Constructs a <code>Body8</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Body8} obj Optional instance to populate.
     * @return {module:model/Body8} The populated <code>Body8</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Body8();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('taskId')) {
          obj['taskId'] = _ApiClient["default"].convertToType(data['taskId'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _Task["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return Body8;
}();
/**
 * @member {String} type
 */


Body8.prototype['type'] = undefined;
/**
 * @member {String} taskId
 */

Body8.prototype['taskId'] = undefined;
/**
 * @member {module:model/Task} data
 */

Body8.prototype['data'] = undefined;
var _default = Body8;
exports["default"] = _default;