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
import Body14 from '../model/Body14';
import Body15 from '../model/Body15';
import Error from '../model/Error';
import InlineResponse2005 from '../model/InlineResponse2005';
import Widget from '../model/Widget';

/**
* Widgets service.
* @module api/WidgetsApi
* @version 1.6.0
*/
export default class WidgetsApi {

    /**
    * Constructs a new WidgetsApi. 
    * @alias module:api/WidgetsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get all widgets
     * Logged in widget can retrieve all widgets.
     * @param {Object} opts Optional parameters
     * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
     * @param {Number} opts.limit Maximum number of widgets
     * @param {Number} opts.page Page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2005} and HTTP response
     */
    widgetsGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
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
        '/widgets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all widgets
     * Logged in widget can retrieve all widgets.
     * @param {Object} opts Optional parameters
     * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
     * @param {Number} opts.limit Maximum number of widgets
     * @param {Number} opts.page Page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2005}
     */
    widgetsGet(opts) {
      return this.widgetsGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a widget
     * Logged in widgets can delete only themselves. Only admins can delete other widgets.
     * @param {String} id Widget id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    widgetsIdDeleteWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling widgetsIdDelete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/widgets/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a widget
     * Logged in widgets can delete only themselves. Only admins can delete other widgets.
     * @param {String} id Widget id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    widgetsIdDelete(id) {
      return this.widgetsIdDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a widget
     * Logged in widget can fetch any widget information.
     * @param {String} id Widget id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Widget} and HTTP response
     */
    widgetsIdGetWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling widgetsIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Widget;
      return this.apiClient.callApi(
        '/widgets/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a widget
     * Logged in widget can fetch any widget information.
     * @param {String} id Widget id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Widget}
     */
    widgetsIdGet(id) {
      return this.widgetsIdGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a widget
     * Logged in widgets can only update their own information. Only admins can update other widgets.
     * @param {String} id Widget id
     * @param {module:model/Body15} Body15 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Widget} and HTTP response
     */
    widgetsIdPatchWithHttpInfo(id, Body15) {
      let postBody = Body15;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling widgetsIdPatch");
      }
      // verify the required parameter 'Body15' is set
      if (Body15 === undefined || Body15 === null) {
        throw new Error("Missing the required parameter 'Body15' when calling widgetsIdPatch");
      }

      let pathParams = {
        'id': id
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
      let returnType = Widget;
      return this.apiClient.callApi(
        '/widgets/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a widget
     * Logged in widgets can only update their own information. Only admins can update other widgets.
     * @param {String} id Widget id
     * @param {module:model/Body15} Body15 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Widget}
     */
    widgetsIdPatch(id, Body15) {
      return this.widgetsIdPatchWithHttpInfo(id, Body15)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a widget
     * Only admins can create other widgets.
     * @param {module:model/Body14} Body14 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Widget} and HTTP response
     */
    widgetsPostWithHttpInfo(Body14) {
      let postBody = Body14;
      // verify the required parameter 'Body14' is set
      if (Body14 === undefined || Body14 === null) {
        throw new Error("Missing the required parameter 'Body14' when calling widgetsPost");
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
      let returnType = Widget;
      return this.apiClient.callApi(
        '/widgets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a widget
     * Only admins can create other widgets.
     * @param {module:model/Body14} Body14 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Widget}
     */
    widgetsPost(Body14) {
      return this.widgetsPostWithHttpInfo(Body14)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
