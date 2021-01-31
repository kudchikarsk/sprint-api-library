"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Task model module.
 * @module model/Task
 * @version 1.6.0
 */
var Task = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Task</code>.
   * @alias module:model/Task
   */
  function Task() {
    _classCallCheck(this, Task);

    Task.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Task, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Task</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Task} obj Optional instance to populate.
     * @return {module:model/Task} The populated <code>Task</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Task();

        if (data.hasOwnProperty('taskId')) {
          obj['taskId'] = _ApiClient["default"].convertToType(data['taskId'], 'String');
        }

        if (data.hasOwnProperty('backlogId')) {
          obj['backlogId'] = _ApiClient["default"].convertToType(data['backlogId'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('owners')) {
          obj['owners'] = _ApiClient["default"].convertToType(data['owners'], [_User["default"]]);
        }

        if (data.hasOwnProperty('history')) {
          obj['history'] = _ApiClient["default"].convertToType(data['history'], Object);
        }

        if (data.hasOwnProperty('createdAt')) {
          obj['createdAt'] = _ApiClient["default"].convertToType(data['createdAt'], 'String');
        }

        if (data.hasOwnProperty('createdBy')) {
          obj['createdBy'] = _ApiClient["default"].convertToType(data['createdBy'], 'String');
        }

        if (data.hasOwnProperty('updatedAt')) {
          obj['updatedAt'] = _ApiClient["default"].convertToType(data['updatedAt'], 'String');
        }

        if (data.hasOwnProperty('updatedBy')) {
          obj['updatedBy'] = _ApiClient["default"].convertToType(data['updatedBy'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Task;
}();
/**
 * @member {String} taskId
 */


Task.prototype['taskId'] = undefined;
/**
 * @member {String} backlogId
 */

Task.prototype['backlogId'] = undefined;
/**
 * @member {String} title
 */

Task.prototype['title'] = undefined;
/**
 * @member {String} description
 */

Task.prototype['description'] = undefined;
/**
 * @member {String} status
 */

Task.prototype['status'] = undefined;
/**
 * @member {String} state
 */

Task.prototype['state'] = undefined;
/**
 * @member {Array.<module:model/User>} owners
 */

Task.prototype['owners'] = undefined;
/**
 * @member {Object} history
 */

Task.prototype['history'] = undefined;
/**
 * @member {String} createdAt
 */

Task.prototype['createdAt'] = undefined;
/**
 * @member {String} createdBy
 */

Task.prototype['createdBy'] = undefined;
/**
 * @member {String} updatedAt
 */

Task.prototype['updatedAt'] = undefined;
/**
 * @member {String} updatedBy
 */

Task.prototype['updatedBy'] = undefined;
var _default = Task;
exports["default"] = _default;