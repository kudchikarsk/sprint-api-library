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
 * The Body14 model module.
 * @module model/Body14
 * @version 1.6.0
 */
var Body14 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Body14</code>.
   * @alias module:model/Body14
   * @param teamId {String} 
   * @param backlogId {String} 
   * @param type {String} 
   */
  function Body14(teamId, backlogId, type) {
    _classCallCheck(this, Body14);

    Body14.initialize(this, teamId, backlogId, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Body14, null, [{
    key: "initialize",
    value: function initialize(obj, teamId, backlogId, type) {
      obj['teamId'] = teamId;
      obj['backlogId'] = backlogId;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>Body14</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Body14} obj Optional instance to populate.
     * @return {module:model/Body14} The populated <code>Body14</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Body14();

        if (data.hasOwnProperty('teamId')) {
          obj['teamId'] = _ApiClient["default"].convertToType(data['teamId'], 'String');
        }

        if (data.hasOwnProperty('backlogId')) {
          obj['backlogId'] = _ApiClient["default"].convertToType(data['backlogId'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Body14;
}();
/**
 * @member {String} teamId
 */


Body14.prototype['teamId'] = undefined;
/**
 * @member {String} backlogId
 */

Body14.prototype['backlogId'] = undefined;
/**
 * @member {String} type
 */

Body14.prototype['type'] = undefined;
var _default = Body14;
exports["default"] = _default;