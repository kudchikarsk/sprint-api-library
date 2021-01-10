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
 * The Backlog model module.
 * @module model/Backlog
 * @version 1.6.0
 */
var Backlog = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Backlog</code>.
   * @alias module:model/Backlog
   */
  function Backlog() {
    _classCallCheck(this, Backlog);

    Backlog.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Backlog, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Backlog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Backlog} obj Optional instance to populate.
     * @return {module:model/Backlog} The populated <code>Backlog</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Backlog();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('teamId')) {
          obj['teamId'] = _ApiClient["default"].convertToType(data['teamId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Backlog;
}();
/**
 * @member {String} id
 */


Backlog.prototype['id'] = undefined;
/**
 * @member {String} name
 */

Backlog.prototype['name'] = undefined;
/**
 * @member {String} description
 */

Backlog.prototype['description'] = undefined;
/**
 * @member {String} teamId
 */

Backlog.prototype['teamId'] = undefined;
var _default = Backlog;
exports["default"] = _default;