"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Body = _interopRequireDefault(require("../model/Body13"));

var _Body2 = _interopRequireDefault(require("../model/Body14"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2004"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse2005"));

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
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2005} and HTTP response
   */


  _createClass(TasksApi, [{
    key: "tasksBacklogBacklogIdGetWithHttpInfo",
    value: function tasksBacklogBacklogIdGetWithHttpInfo(backlogId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'backlogId' is set

      if (backlogId === undefined || backlogId === null) {
        throw new _Error["default"]("Missing the required parameter 'backlogId' when calling tasksBacklogBacklogIdGet");
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
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/tasks/backlog/{backlogId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2005}
     */

  }, {
    key: "tasksBacklogBacklogIdGet",
    value: function tasksBacklogBacklogIdGet(backlogId, opts) {
      return this.tasksBacklogBacklogIdGetWithHttpInfo(backlogId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a task events
     * User can create task events.
     * @param {module:model/Body13} body13 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TaskEvent} and HTTP response
     */

  }, {
    key: "tasksBulkPostWithHttpInfo",
    value: function tasksBulkPostWithHttpInfo(body13) {
      var postBody = body13; // verify the required parameter 'body13' is set

      if (body13 === undefined || body13 === null) {
        throw new _Error["default"]("Missing the required parameter 'body13' when calling tasksBulkPost");
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
     * @param {module:model/Body13} body13 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskEvent}
     */

  }, {
    key: "tasksBulkPost",
    value: function tasksBulkPost(body13) {
      return this.tasksBulkPostWithHttpInfo(body13).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get all tasks
     * User can retrieve assigned tasks.
     * @param {String} teamId task teamId
     * @param {Object} opts Optional parameters
     * @param {String} opts.title task title
     * @param {String} opts.description task description
     * @param {String} opts.state task state
     * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
     * @param {Number} opts.limit Maximum number of tasks
     * @param {Number} opts.page Page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2004} and HTTP response
     */

  }, {
    key: "tasksDoingGetWithHttpInfo",
    value: function tasksDoingGetWithHttpInfo(teamId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new _Error["default"]("Missing the required parameter 'teamId' when calling tasksDoingGet");
      }

      var pathParams = {};
      var queryParams = {
        'teamId': teamId,
        'title': opts['title'],
        'description': opts['description'],
        'state': opts['state'],
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
      return this.apiClient.callApi('/tasks/doing', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get all tasks
     * User can retrieve assigned tasks.
     * @param {String} teamId task teamId
     * @param {Object} opts Optional parameters
     * @param {String} opts.title task title
     * @param {String} opts.description task description
     * @param {String} opts.state task state
     * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
     * @param {Number} opts.limit Maximum number of tasks
     * @param {Number} opts.page Page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2004}
     */

  }, {
    key: "tasksDoingGet",
    value: function tasksDoingGet(teamId, opts) {
      return this.tasksDoingGetWithHttpInfo(teamId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get all tasks
     * User can retrieve assigned tasks.
     * @param {String} teamId task teamId
     * @param {Object} opts Optional parameters
     * @param {String} opts.title task title
     * @param {String} opts.description task description
     * @param {String} opts.state task state
     * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
     * @param {Number} opts.limit Maximum number of tasks
     * @param {Number} opts.page Page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2004} and HTTP response
     */

  }, {
    key: "tasksDoneGetWithHttpInfo",
    value: function tasksDoneGetWithHttpInfo(teamId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new _Error["default"]("Missing the required parameter 'teamId' when calling tasksDoneGet");
      }

      var pathParams = {};
      var queryParams = {
        'teamId': teamId,
        'title': opts['title'],
        'description': opts['description'],
        'state': opts['state'],
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
      return this.apiClient.callApi('/tasks/done', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get all tasks
     * User can retrieve assigned tasks.
     * @param {String} teamId task teamId
     * @param {Object} opts Optional parameters
     * @param {String} opts.title task title
     * @param {String} opts.description task description
     * @param {String} opts.state task state
     * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
     * @param {Number} opts.limit Maximum number of tasks
     * @param {Number} opts.page Page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2004}
     */

  }, {
    key: "tasksDoneGet",
    value: function tasksDoneGet(teamId, opts) {
      return this.tasksDoneGetWithHttpInfo(teamId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a task event
     * User can create task event.
     * @param {module:model/Body14} body14 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TaskEvent} and HTTP response
     */

  }, {
    key: "tasksPostWithHttpInfo",
    value: function tasksPostWithHttpInfo(body14) {
      var postBody = body14; // verify the required parameter 'body14' is set

      if (body14 === undefined || body14 === null) {
        throw new _Error["default"]("Missing the required parameter 'body14' when calling tasksPost");
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
     * @param {module:model/Body14} body14 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskEvent}
     */

  }, {
    key: "tasksPost",
    value: function tasksPost(body14) {
      return this.tasksPostWithHttpInfo(body14).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get all tasks
     * User can retrieve assigned tasks.
     * @param {String} teamId task teamId
     * @param {Object} opts Optional parameters
     * @param {String} opts.title task title
     * @param {String} opts.description task description
     * @param {String} opts.state task state
     * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
     * @param {Number} opts.limit Maximum number of tasks
     * @param {Number} opts.page Page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2004} and HTTP response
     */

  }, {
    key: "tasksTodoGetWithHttpInfo",
    value: function tasksTodoGetWithHttpInfo(teamId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new _Error["default"]("Missing the required parameter 'teamId' when calling tasksTodoGet");
      }

      var pathParams = {};
      var queryParams = {
        'teamId': teamId,
        'title': opts['title'],
        'description': opts['description'],
        'state': opts['state'],
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
      return this.apiClient.callApi('/tasks/todo', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get all tasks
     * User can retrieve assigned tasks.
     * @param {String} teamId task teamId
     * @param {Object} opts Optional parameters
     * @param {String} opts.title task title
     * @param {String} opts.description task description
     * @param {String} opts.state task state
     * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
     * @param {Number} opts.limit Maximum number of tasks
     * @param {Number} opts.page Page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2004}
     */

  }, {
    key: "tasksTodoGet",
    value: function tasksTodoGet(teamId, opts) {
      return this.tasksTodoGetWithHttpInfo(teamId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TasksApi;
}();

exports["default"] = TasksApi;