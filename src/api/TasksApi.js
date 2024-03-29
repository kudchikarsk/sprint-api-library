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
import Body13 from '../model/Body13';
import Body14 from '../model/Body14';
import Error from '../model/Error';
import InlineResponse2004 from '../model/InlineResponse2004';
import InlineResponse2005 from '../model/InlineResponse2005';
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2005} and HTTP response
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
      let returnType = InlineResponse2005;
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2005}
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
     * @param {module:model/Body13} body13 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TaskEvent} and HTTP response
     */
    tasksBulkPostWithHttpInfo(body13) {
      let postBody = body13;
      // verify the required parameter 'body13' is set
      if (body13 === undefined || body13 === null) {
        throw new Error("Missing the required parameter 'body13' when calling tasksBulkPost");
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
     * @param {module:model/Body13} body13 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskEvent}
     */
    tasksBulkPost(body13) {
      return this.tasksBulkPostWithHttpInfo(body13)
        .then(function(response_and_data) {
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
    tasksDoingGetWithHttpInfo(teamId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'teamId' is set
      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling tasksDoingGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'teamId': teamId,
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
      let returnType = InlineResponse2004;
      return this.apiClient.callApi(
        '/tasks/doing', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    tasksDoingGet(teamId, opts) {
      return this.tasksDoingGetWithHttpInfo(teamId, opts)
        .then(function(response_and_data) {
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
    tasksDoneGetWithHttpInfo(teamId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'teamId' is set
      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling tasksDoneGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'teamId': teamId,
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
      let returnType = InlineResponse2004;
      return this.apiClient.callApi(
        '/tasks/done', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    tasksDoneGet(teamId, opts) {
      return this.tasksDoneGetWithHttpInfo(teamId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a task event
     * User can create task event.
     * @param {module:model/Body14} body14 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TaskEvent} and HTTP response
     */
    tasksPostWithHttpInfo(body14) {
      let postBody = body14;
      // verify the required parameter 'body14' is set
      if (body14 === undefined || body14 === null) {
        throw new Error("Missing the required parameter 'body14' when calling tasksPost");
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
     * @param {module:model/Body14} body14 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskEvent}
     */
    tasksPost(body14) {
      return this.tasksPostWithHttpInfo(body14)
        .then(function(response_and_data) {
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
    tasksTodoGetWithHttpInfo(teamId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'teamId' is set
      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling tasksTodoGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'teamId': teamId,
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
      let returnType = InlineResponse2004;
      return this.apiClient.callApi(
        '/tasks/todo', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    tasksTodoGet(teamId, opts) {
      return this.tasksTodoGetWithHttpInfo(teamId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
