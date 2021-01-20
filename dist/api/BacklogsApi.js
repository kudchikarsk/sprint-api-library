"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Backlog = _interopRequireDefault(require("../model/Backlog"));

var _Body = _interopRequireDefault(require("../model/Body6"));

var _Body2 = _interopRequireDefault(require("../model/Body7"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse200"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Backlogs service.
* @module api/BacklogsApi
* @version 1.6.0
*/
var BacklogsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new BacklogsApi. 
  * @alias module:api/BacklogsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function BacklogsApi(apiClient) {
    _classCallCheck(this, BacklogsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get all backlogs
   * Only admins can retrieve all backlogs.
   * @param {String} teamId Team id
   * @param {Object} opts Optional parameters
   * @param {String} opts.name Backlog name
   * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
   * @param {Number} opts.limit Maximum number of backlogs
   * @param {Number} opts.page Page number (default to 1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
   */


  _createClass(BacklogsApi, [{
    key: "backlogsGetWithHttpInfo",
    value: function backlogsGetWithHttpInfo(teamId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new _Error["default"]("Missing the required parameter 'teamId' when calling backlogsGet");
      }

      var pathParams = {};
      var queryParams = {
        'teamId': teamId,
        'name': opts['name'],
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
      return this.apiClient.callApi('/backlogs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get all backlogs
     * Only admins can retrieve all backlogs.
     * @param {String} teamId Team id
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Backlog name
     * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
     * @param {Number} opts.limit Maximum number of backlogs
     * @param {Number} opts.page Page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "backlogsGet",
    value: function backlogsGet(teamId, opts) {
      return this.backlogsGetWithHttpInfo(teamId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a backlog
     * Logged in backlogs can delete only themselves. Only admins can delete other backlogs.
     * @param {String} id Backlog id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "backlogsIdDeleteWithHttpInfo",
    value: function backlogsIdDeleteWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling backlogsIdDelete");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/backlogs/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a backlog
     * Logged in backlogs can delete only themselves. Only admins can delete other backlogs.
     * @param {String} id Backlog id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "backlogsIdDelete",
    value: function backlogsIdDelete(id) {
      return this.backlogsIdDeleteWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a backlog
     * Logged in backlogs can fetch only their own backlog information.
     * @param {String} id Backlog id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Backlog} and HTTP response
     */

  }, {
    key: "backlogsIdGetWithHttpInfo",
    value: function backlogsIdGetWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling backlogsIdGet");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Backlog["default"];
      return this.apiClient.callApi('/backlogs/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a backlog
     * Logged in backlogs can fetch only their own backlog information.
     * @param {String} id Backlog id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Backlog}
     */

  }, {
    key: "backlogsIdGet",
    value: function backlogsIdGet(id) {
      return this.backlogsIdGetWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a backlog
     * Logged in backlogs can only update their own information. Only admins can update other backlogs.
     * @param {String} id Backlog id
     * @param {module:model/Body7} Body7 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Backlog} and HTTP response
     */

  }, {
    key: "backlogsIdPatchWithHttpInfo",
    value: function backlogsIdPatchWithHttpInfo(id, Body7) {
      var postBody = Body7; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling backlogsIdPatch");
      } // verify the required parameter 'Body7' is set


      if (Body7 === undefined || Body7 === null) {
        throw new _Error["default"]("Missing the required parameter 'Body7' when calling backlogsIdPatch");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Backlog["default"];
      return this.apiClient.callApi('/backlogs/{id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a backlog
     * Logged in backlogs can only update their own information. Only admins can update other backlogs.
     * @param {String} id Backlog id
     * @param {module:model/Body7} Body7 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Backlog}
     */

  }, {
    key: "backlogsIdPatch",
    value: function backlogsIdPatch(id, Body7) {
      return this.backlogsIdPatchWithHttpInfo(id, Body7).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a backlog
     * User can create backlogs.
     * @param {module:model/Body6} Body6 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Backlog} and HTTP response
     */

  }, {
    key: "backlogsPostWithHttpInfo",
    value: function backlogsPostWithHttpInfo(Body6) {
      var postBody = Body6; // verify the required parameter 'Body6' is set

      if (Body6 === undefined || Body6 === null) {
        throw new _Error["default"]("Missing the required parameter 'Body6' when calling backlogsPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Backlog["default"];
      return this.apiClient.callApi('/backlogs', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a backlog
     * User can create backlogs.
     * @param {module:model/Body6} Body6 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Backlog}
     */

  }, {
    key: "backlogsPost",
    value: function backlogsPost(Body6) {
      return this.backlogsPostWithHttpInfo(Body6).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return BacklogsApi;
}();

exports["default"] = BacklogsApi;