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
 * The TasksbulkTasks model module.
 * @module model/TasksbulkTasks
 * @version 1.6.0
 */
var TasksbulkTasks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TasksbulkTasks</code>.
   * @alias module:model/TasksbulkTasks
   */
  function TasksbulkTasks() {
    _classCallCheck(this, TasksbulkTasks);

    TasksbulkTasks.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TasksbulkTasks, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TasksbulkTasks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TasksbulkTasks} obj Optional instance to populate.
     * @return {module:model/TasksbulkTasks} The populated <code>TasksbulkTasks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TasksbulkTasks();

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

  return TasksbulkTasks;
}();
/**
 * @member {String} type
 */


TasksbulkTasks.prototype['type'] = undefined;
/**
 * @member {String} taskId
 */

TasksbulkTasks.prototype['taskId'] = undefined;
/**
 * @member {module:model/Task} data
 */

TasksbulkTasks.prototype['data'] = undefined;
var _default = TasksbulkTasks;
exports["default"] = _default;