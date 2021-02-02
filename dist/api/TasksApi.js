"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Body = _interopRequireDefault(require("../model/Body8"));

var _Body2 = _interopRequireDefault(require("../model/Body9"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2001"));

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
   * Get all tasks
   * User can retrieve assigned tasks.
   * @param {String} backlogId task backlogId
   * @param {Object} opts Optional parameters
   * @param {String} opts.title task title
   * @param {String} opts.description task description
   * @param {String} opts.state task state
   * @param {String} opts.status task status
   * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
   * @param {Number} opts.limit Maximum number of tasks
   * @param {Number} opts.page Page number (default to 1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
   */


  _createClass(TasksApi, [{
    key: "tasksBacklogIdGetWithHttpInfo",
    value: function tasksBacklogIdGetWithHttpInfo(backlogId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'backlogId' is set

      if (backlogId === undefined || backlogId === null) {
        throw new _Error["default"]("Missing the required parameter 'backlogId' when calling tasksBacklogIdGet");
      }

      var pathParams = {
        'backlogId': backlogId
      };
      var queryParams = {
        'title': opts['title'],
        'description': opts['description'],
        'state': opts['state'],
        'status': opts['status'],
        'sortBy': opts['sortBy'],
        'limit': opts['limit'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/tasks/{backlogId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get all tasks
     * User can retrieve assigned tasks.
     * @param {String} backlogId task backlogId
     * @param {Object} opts Optional parameters
     * @param {String} opts.title task title
     * @param {String} opts.description task description
     * @param {String} opts.state task state
     * @param {String} opts.status task status
     * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
     * @param {Number} opts.limit Maximum number of tasks
     * @param {Number} opts.page Page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */

  }, {
    key: "tasksBacklogIdGet",
    value: function tasksBacklogIdGet(backlogId, opts) {
      return this.tasksBacklogIdGetWithHttpInfo(backlogId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a task events
     * User can create task events.
     * @param {module:model/Body8} Body8 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TaskEvent} and HTTP response
     */

  }, {
    key: "tasksBulkPostWithHttpInfo",
    value: function tasksBulkPostWithHttpInfo(Body8) {
      var postBody = Body8; // verify the required parameter 'Body8' is set

      if (Body8 === undefined || Body8 === null) {
        throw new _Error["default"]("Missing the required parameter 'Body8' when calling tasksBulkPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TaskEvent["default"];
      return this.apiClient.callApi('/tasks/bulk', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a task events
     * User can create task events.
     * @param {module:model/Body8} Body8 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskEvent}
     */

  }, {
    key: "tasksBulkPost",
    value: function tasksBulkPost(Body8) {
      return this.tasksBulkPostWithHttpInfo(Body8).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get all tasks
     * User can retrieve assigned tasks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.title task title
     * @param {String} opts.description task description
     * @param {String} opts.state task state
     * @param {String} opts.status task status
     * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
     * @param {Number} opts.limit Maximum number of tasks
     * @param {Number} opts.page Page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */

  }, {
    key: "tasksGetWithHttpInfo",
    value: function tasksGetWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'title': opts['title'],
        'description': opts['description'],
        'state': opts['state'],
        'status': opts['status'],
        'sortBy': opts['sortBy'],
        'limit': opts['limit'],
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/tasks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get all tasks
     * User can retrieve assigned tasks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.title task title
     * @param {String} opts.description task description
     * @param {String} opts.state task state
     * @param {String} opts.status task status
     * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
     * @param {Number} opts.limit Maximum number of tasks
     * @param {Number} opts.page Page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */

  }, {
    key: "tasksGet",
    value: function tasksGet(opts) {
      return this.tasksGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a task event
     * User can create task event.
     * @param {module:model/Body9} Body9 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TaskEvent} and HTTP response
     */

  }, {
    key: "tasksPostWithHttpInfo",
    value: function tasksPostWithHttpInfo(Body9) {
      var postBody = Body9; // verify the required parameter 'Body9' is set

      if (Body9 === undefined || Body9 === null) {
        throw new _Error["default"]("Missing the required parameter 'Body9' when calling tasksPost");
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
     * @param {module:model/Body9} Body9 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskEvent}
     */

  }, {
    key: "tasksPost",
    value: function tasksPost(Body9) {
      return this.tasksPostWithHttpInfo(Body9).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TasksApi;
}();

exports["default"] = TasksApi;