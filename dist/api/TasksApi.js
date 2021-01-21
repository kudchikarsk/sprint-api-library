"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Body = _interopRequireDefault(require("../model/Body8"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _TaskEvent = _interopRequireDefault(require("../model/TaskEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Tasks service.
* @module api/TasksApi
* @version 1.6.0
*/
var TasksApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TasksApi. 
  * @alias module:api/TasksApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TasksApi(apiClient) {
    _classCallCheck(this, TasksApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create a task event
   * User can create task event.
   * @param {module:model/Body8} Body8 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TaskEvent} and HTTP response
   */


  _createClass(TasksApi, [{
    key: "tasksPostWithHttpInfo",
    value: function tasksPostWithHttpInfo(Body8) {
      var postBody = Body8; // verify the required parameter 'Body8' is set

      if (Body8 === undefined || Body8 === null) {
        throw new _Error["default"]("Missing the required parameter 'Body8' when calling tasksPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TaskEvent["default"];
      return this.apiClient.callApi('/tasks', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a task event
     * User can create task event.
     * @param {module:model/Body8} Body8 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskEvent}
     */

  }, {
    key: "tasksPost",
    value: function tasksPost(Body8) {
      return this.tasksPostWithHttpInfo(Body8).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TasksApi;
}();

exports["default"] = TasksApi;