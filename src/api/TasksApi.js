/**
 * Sprint Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.6.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Body8 from '../model/Body8';
import Body9 from '../model/Body9';
import Error from '../model/Error';
import InlineResponse2001 from '../model/InlineResponse2001';
import TaskEvent from '../model/TaskEvent';

/**
* Tasks service.
* @module api/TasksApi
* @version 1.6.0
*/
export default class TasksApi {

    /**
    * Constructs a new TasksApi. 
    * @alias module:api/TasksApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    tasksBacklogBacklogIdGetWithHttpInfo(backlogId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'backlogId' is set
      if (backlogId === undefined || backlogId === null) {
        throw new Error("Missing the required parameter 'backlogId' when calling tasksBacklogBacklogIdGet");
      }

      let pathParams = {
        'backlogId': backlogId
      };
      let queryParams = {
        'title': opts['title'],
        'description': opts['description'],
        'state': opts['state'],
        'status': opts['status'],
        'sortBy': opts['sortBy'],
        'limit': opts['limit'],
        'page': opts['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2001;
      return this.apiClient.callApi(
        '/tasks/backlog/{backlogId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    tasksBacklogBacklogIdGet(backlogId, opts) {
      return this.tasksBacklogBacklogIdGetWithHttpInfo(backlogId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a task events
     * User can create task events.
     * @param {module:model/Body8} Body8 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TaskEvent} and HTTP response
     */
    tasksBulkPostWithHttpInfo(Body8) {
      let postBody = Body8;
      // verify the required parameter 'Body8' is set
      if (Body8 === undefined || Body8 === null) {
        throw new Error("Missing the required parameter 'Body8' when calling tasksBulkPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TaskEvent;
      return this.apiClient.callApi(
        '/tasks/bulk', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a task events
     * User can create task events.
     * @param {module:model/Body8} Body8 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskEvent}
     */
    tasksBulkPost(Body8) {
      return this.tasksBulkPostWithHttpInfo(Body8)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a task event
     * User can create task event.
     * @param {module:model/Body9} Body9 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TaskEvent} and HTTP response
     */
    tasksPostWithHttpInfo(Body9) {
      let postBody = Body9;
      // verify the required parameter 'Body9' is set
      if (Body9 === undefined || Body9 === null) {
        throw new Error("Missing the required parameter 'Body9' when calling tasksPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TaskEvent;
      return this.apiClient.callApi(
        '/tasks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a task event
     * User can create task event.
     * @param {module:model/Body9} Body9 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskEvent}
     */
    tasksPost(Body9) {
      return this.tasksPostWithHttpInfo(Body9)
        .then(function(response_and_data) {
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
     * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
     * @param {Number} opts.limit Maximum number of tasks
     * @param {Number} opts.page Page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */
    tasksTodoGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'title': opts['title'],
        'description': opts['description'],
        'state': opts['state'],
        'sortBy': opts['sortBy'],
        'limit': opts['limit'],
        'page': opts['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2001;
      return this.apiClient.callApi(
        '/tasks/todo', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all tasks
     * User can retrieve assigned tasks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.title task title
     * @param {String} opts.description task description
     * @param {String} opts.state task state
     * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
     * @param {Number} opts.limit Maximum number of tasks
     * @param {Number} opts.page Page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */
    tasksTodoGet(opts) {
      return this.tasksTodoGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
