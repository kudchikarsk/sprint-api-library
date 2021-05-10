"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Body = _interopRequireDefault(require("../model/Body11"));

var _Body2 = _interopRequireDefault(require("../model/Body12"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2003"));

var _Organization = _interopRequireDefault(require("../model/Organization"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Organizations service.
* @module api/OrganizationsApi
* @version 1.6.0
*/
var OrganizationsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new OrganizationsApi. 
  * @alias module:api/OrganizationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function OrganizationsApi(apiClient) {
    _classCallCheck(this, OrganizationsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get all organizations
   * Only admins can retrieve all organizations.
   * @param {Object} opts Optional parameters
   * @param {String} opts.name Organization name *
   * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
   * @param {Number} opts.limit Maximum number of organizations
   * @param {Number} opts.page Page number (default to 1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2003} and HTTP response
   */


  _createClass(OrganizationsApi, [{
    key: "organizationsGetWithHttpInfo",
    value: function organizationsGetWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
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
      return this.apiClient.callApi('/organizations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get all organizations
     * Only admins can retrieve all organizations.
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Organization name *
     * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
     * @param {Number} opts.limit Maximum number of organizations
     * @param {Number} opts.page Page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2003}
     */

  }, {
    key: "organizationsGet",
    value: function organizationsGet(opts) {
      return this.organizationsGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a organization
     * Logged in organizations can delete only themselves. Only admins can delete other organizations.
     * @param {String} id Organization id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "organizationsIdDeleteWithHttpInfo",
    value: function organizationsIdDeleteWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling organizationsIdDelete");
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
      return this.apiClient.callApi('/organizations/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a organization
     * Logged in organizations can delete only themselves. Only admins can delete other organizations.
     * @param {String} id Organization id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "organizationsIdDelete",
    value: function organizationsIdDelete(id) {
      return this.organizationsIdDeleteWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a organization
     * Logged in organizations can fetch only their own organization information.
     * @param {String} id Organization id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Organization} and HTTP response
     */

  }, {
    key: "organizationsIdGetWithHttpInfo",
    value: function organizationsIdGetWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling organizationsIdGet");
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
      var returnType = _Organization["default"];
      return this.apiClient.callApi('/organizations/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a organization
     * Logged in organizations can fetch only their own organization information.
     * @param {String} id Organization id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Organization}
     */

  }, {
    key: "organizationsIdGet",
    value: function organizationsIdGet(id) {
      return this.organizationsIdGetWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Remove a organization member
     * User can remove a organization member
     * @param {String} id Organization id
     * @param {String} userId User id to invite
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "organizationsIdInviteUserIdDeleteWithHttpInfo",
    value: function organizationsIdInviteUserIdDeleteWithHttpInfo(id, userId) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling organizationsIdInviteUserIdDelete");
      } // verify the required parameter 'userId' is set


      if (userId === undefined || userId === null) {
        throw new _Error["default"]("Missing the required parameter 'userId' when calling organizationsIdInviteUserIdDelete");
      }

      var pathParams = {
        'id': id,
        'userId': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/organizations/{id}/invite/{userId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Remove a organization member
     * User can remove a organization member
     * @param {String} id Organization id
     * @param {String} userId User id to invite
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "organizationsIdInviteUserIdDelete",
    value: function organizationsIdInviteUserIdDelete(id, userId) {
      return this.organizationsIdInviteUserIdDeleteWithHttpInfo(id, userId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Invite a organization member
     * User can invite organization members
     * @param {String} id Organization id
     * @param {String} userId User id to invite
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "organizationsIdInviteUserIdPostWithHttpInfo",
    value: function organizationsIdInviteUserIdPostWithHttpInfo(id, userId) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling organizationsIdInviteUserIdPost");
      } // verify the required parameter 'userId' is set


      if (userId === undefined || userId === null) {
        throw new _Error["default"]("Missing the required parameter 'userId' when calling organizationsIdInviteUserIdPost");
      }

      var pathParams = {
        'id': id,
        'userId': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/organizations/{id}/invite/{userId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Invite a organization member
     * User can invite organization members
     * @param {String} id Organization id
     * @param {String} userId User id to invite
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "organizationsIdInviteUserIdPost",
    value: function organizationsIdInviteUserIdPost(id, userId) {
      return this.organizationsIdInviteUserIdPostWithHttpInfo(id, userId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a organization
     * Logged in organizations can only update their own information. Only admins can update other organizations.
     * @param {String} id Organization id
     * @param {module:model/Body12} Body12 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Organization} and HTTP response
     */

  }, {
    key: "organizationsIdPatchWithHttpInfo",
    value: function organizationsIdPatchWithHttpInfo(id, Body12) {
      var postBody = Body12; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling organizationsIdPatch");
      } // verify the required parameter 'Body12' is set


      if (Body12 === undefined || Body12 === null) {
        throw new _Error["default"]("Missing the required parameter 'Body12' when calling organizationsIdPatch");
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
      var returnType = _Organization["default"];
      return this.apiClient.callApi('/organizations/{id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a organization
     * Logged in organizations can only update their own information. Only admins can update other organizations.
     * @param {String} id Organization id
     * @param {module:model/Body12} Body12 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Organization}
     */

  }, {
    key: "organizationsIdPatch",
    value: function organizationsIdPatch(id, Body12) {
      return this.organizationsIdPatchWithHttpInfo(id, Body12).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a organization
     * User can create organizations.
     * @param {module:model/Body11} Body11 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Organization} and HTTP response
     */

  }, {
    key: "organizationsPostWithHttpInfo",
    value: function organizationsPostWithHttpInfo(Body11) {
      var postBody = Body11; // verify the required parameter 'Body11' is set

      if (Body11 === undefined || Body11 === null) {
        throw new _Error["default"]("Missing the required parameter 'Body11' when calling organizationsPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Organization["default"];
      return this.apiClient.callApi('/organizations', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a organization
     * User can create organizations.
     * @param {module:model/Body11} Body11 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Organization}
     */

  }, {
    key: "organizationsPost",
    value: function organizationsPost(Body11) {
      return this.organizationsPostWithHttpInfo(Body11).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return OrganizationsApi;
}();

exports["default"] = OrganizationsApi;