"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Backlog = _interopRequireDefault(require("./Backlog"));

var _Team = _interopRequireDefault(require("./Team"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Widget model module.
 * @module model/Widget
 * @version 1.6.0
 */
var Widget = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Widget</code>.
   * @alias module:model/Widget
   */
  function Widget() {
    _classCallCheck(this, Widget);

    Widget.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Widget, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Widget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Widget} obj Optional instance to populate.
     * @return {module:model/Widget} The populated <code>Widget</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Widget();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('userId')) {
          obj['userId'] = _ApiClient["default"].convertToType(data['userId'], 'String');
        }

        if (data.hasOwnProperty('teamId')) {
          obj['teamId'] = _ApiClient["default"].convertToType(data['teamId'], 'String');
        }

        if (data.hasOwnProperty('team')) {
          obj['team'] = _Team["default"].constructFromObject(data['team']);
        }

        if (data.hasOwnProperty('backlogId')) {
          obj['backlogId'] = _ApiClient["default"].convertToType(data['backlogId'], 'String');
        }

        if (data.hasOwnProperty('backlog')) {
          obj['backlog'] = _Backlog["default"].constructFromObject(data['backlog']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Widget;
}();
/**
 * @member {String} id
 */


Widget.prototype['id'] = undefined;
/**
 * @member {String} userId
 */

Widget.prototype['userId'] = undefined;
/**
 * @member {String} teamId
 */

Widget.prototype['teamId'] = undefined;
/**
 * @member {module:model/Team} team
 */

Widget.prototype['team'] = undefined;
/**
 * @member {String} backlogId
 */

Widget.prototype['backlogId'] = undefined;
/**
 * @member {module:model/Backlog} backlog
 */

Widget.prototype['backlog'] = undefined;
/**
 * @member {String} type
 */

Widget.prototype['type'] = undefined;
var _default = Widget;
exports["default"] = _default;