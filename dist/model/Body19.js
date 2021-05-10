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
 * The Body19 model module.
 * @module model/Body19
 * @version 1.6.0
 */
var Body19 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Body19</code>.
   * @alias module:model/Body19
   * @param teamId {String} 
   * @param backlogId {String} 
   * @param type {String} 
   */
  function Body19(teamId, backlogId, type) {
    _classCallCheck(this, Body19);

    Body19.initialize(this, teamId, backlogId, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Body19, null, [{
    key: "initialize",
    value: function initialize(obj, teamId, backlogId, type) {
      obj['teamId'] = teamId;
      obj['backlogId'] = backlogId;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>Body19</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Body19} obj Optional instance to populate.
     * @return {module:model/Body19} The populated <code>Body19</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Body19();

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

  return Body19;
}();
/**
 * @member {String} teamId
 */


Body19.prototype['teamId'] = undefined;
/**
 * @member {String} backlogId
 */

Body19.prototype['backlogId'] = undefined;
/**
 * @member {String} type
 */

Body19.prototype['type'] = undefined;
var _default = Body19;
exports["default"] = _default;