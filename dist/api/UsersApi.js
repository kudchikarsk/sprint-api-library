"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Body = _interopRequireDefault(require("../model/Body18"));

var _Body2 = _interopRequireDefault(require("../model/Body19"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2007"));

var _User = _interopRequireDefault(require("../model/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Users service.
* @module api/UsersApi
* @version 1.6.0
*/
var UsersApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UsersApi. 
  * @alias module:api/UsersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UsersApi(apiClient) {
    _classCallCheck(this, UsersApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get all users
   * Logged in user can retrieve all users.
   * @param {Object} opts Optional parameters
   * @param {String} opts.name User name
   * @param {String} opts.email User email
   * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
   * @param {Number} opts.limit Maximum number of users
   * @param {Number} opts.page Page number (default to 1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2007} and HTTP response
   */


  _createClass(UsersApi, [{
    key: "usersGetWithHttpInfo",
    value: function usersGetWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'name': opts['name'],
        'email': opts['email'],
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
      return this.apiClient.callApi('/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get all users
     * Logged in user can retrieve all users.
     * @param {Object} opts Optional parameters
     * @param {String} opts.name User name
     * @param {String} opts.email User email
     * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
     * @param {Number} opts.limit Maximum number of users
     * @param {Number} opts.page Page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2007}
     */

  }, {
    key: "usersGet",
    value: function usersGet(opts) {
      return this.usersGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a user
     * Logged in users can delete only themselves. Only admins can delete other users.
     * @param {String} id User id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "usersIdDeleteWithHttpInfo",
    value: function usersIdDeleteWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling usersIdDelete");
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
      return this.apiClient.callApi('/users/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a user
     * Logged in users can delete only themselves. Only admins can delete other users.
     * @param {String} id User id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "usersIdDelete",
    value: function usersIdDelete(id) {
      return this.usersIdDeleteWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a user
     * Logged in user can fetch any user information.
     * @param {String} id User id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
     */

  }, {
    key: "usersIdGetWithHttpInfo",
    value: function usersIdGetWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling usersIdGet");
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
      var returnType = _User["default"];
      return this.apiClient.callApi('/users/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a user
     * Logged in user can fetch any user information.
     * @param {String} id User id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */

  }, {
    key: "usersIdGet",
    value: function usersIdGet(id) {
      return this.usersIdGetWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a user
     * Logged in users can only update their own information. Only admins can update other users.
     * @param {String} id User id
     * @param {module:model/Body19} Body19 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
     */

  }, {
    key: "usersIdPatchWithHttpInfo",
    value: function usersIdPatchWithHttpInfo(id, Body19) {
      var postBody = Body19; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling usersIdPatch");
      } // verify the required parameter 'Body19' is set


      if (Body19 === undefined || Body19 === null) {
        throw new _Error["default"]("Missing the required parameter 'Body19' when calling usersIdPatch");
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
      var returnType = _User["default"];
      return this.apiClient.callApi('/users/{id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a user
     * Logged in users can only update their own information. Only admins can update other users.
     * @param {String} id User id
     * @param {module:model/Body19} Body19 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */

  }, {
    key: "usersIdPatch",
    value: function usersIdPatch(id, Body19) {
      return this.usersIdPatchWithHttpInfo(id, Body19).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a user
     * Only admins can create other users.
     * @param {module:model/Body18} Body18 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
     */

  }, {
    key: "usersPostWithHttpInfo",
    value: function usersPostWithHttpInfo(Body18) {
      var postBody = Body18; // verify the required parameter 'Body18' is set

      if (Body18 === undefined || Body18 === null) {
        throw new _Error["default"]("Missing the required parameter 'Body18' when calling usersPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/users', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a user
     * Only admins can create other users.
     * @param {module:model/Body18} Body18 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */

  }, {
    key: "usersPost",
    value: function usersPost(Body18) {
      return this.usersPostWithHttpInfo(Body18).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return UsersApi;
}();

exports["default"] = UsersApi;