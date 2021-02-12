"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Body = _interopRequireDefault(require("../model/Body10"));

var _Body2 = _interopRequireDefault(require("../model/Body11"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2003"));

var _Team = _interopRequireDefault(require("../model/Team"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Teams service.
* @module api/TeamsApi
* @version 1.6.0
*/
var TeamsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TeamsApi. 
  * @alias module:api/TeamsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TeamsApi(apiClient) {
    _classCallCheck(this, TeamsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get all teams
   * Only admins can retrieve all teams.
   * @param {Object} opts Optional parameters
   * @param {String} opts.name Team name *
   * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
   * @param {Number} opts.limit Maximum number of teams
   * @param {Number} opts.page Page number (default to 1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2003} and HTTP response
   */


  _createClass(TeamsApi, [{
    key: "teamsGetWithHttpInfo",
    value: function teamsGetWithHttpInfo(opts) {
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
      return this.apiClient.callApi('/teams', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get all teams
     * Only admins can retrieve all teams.
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Team name *
     * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
     * @param {Number} opts.limit Maximum number of teams
     * @param {Number} opts.page Page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2003}
     */

  }, {
    key: "teamsGet",
    value: function teamsGet(opts) {
      return this.teamsGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a team
     * Logged in teams can delete only themselves. Only admins can delete other teams.
     * @param {String} id Team id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "teamsIdDeleteWithHttpInfo",
    value: function teamsIdDeleteWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling teamsIdDelete");
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
      return this.apiClient.callApi('/teams/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a team
     * Logged in teams can delete only themselves. Only admins can delete other teams.
     * @param {String} id Team id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "teamsIdDelete",
    value: function teamsIdDelete(id) {
      return this.teamsIdDeleteWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a team
     * Logged in teams can fetch only their own team information.
     * @param {String} id Team id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Team} and HTTP response
     */

  }, {
    key: "teamsIdGetWithHttpInfo",
    value: function teamsIdGetWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling teamsIdGet");
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
      var returnType = _Team["default"];
      return this.apiClient.callApi('/teams/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a team
     * Logged in teams can fetch only their own team information.
     * @param {String} id Team id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Team}
     */

  }, {
    key: "teamsIdGet",
    value: function teamsIdGet(id) {
      return this.teamsIdGetWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Remove a team member
     * User can remove a team member
     * @param {String} id Team id
     * @param {String} userId User id to invite
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "teamsIdInviteUserIdDeleteWithHttpInfo",
    value: function teamsIdInviteUserIdDeleteWithHttpInfo(id, userId) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling teamsIdInviteUserIdDelete");
      } // verify the required parameter 'userId' is set


      if (userId === undefined || userId === null) {
        throw new _Error["default"]("Missing the required parameter 'userId' when calling teamsIdInviteUserIdDelete");
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
      return this.apiClient.callApi('/teams/{id}/invite/{userId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Remove a team member
     * User can remove a team member
     * @param {String} id Team id
     * @param {String} userId User id to invite
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "teamsIdInviteUserIdDelete",
    value: function teamsIdInviteUserIdDelete(id, userId) {
      return this.teamsIdInviteUserIdDeleteWithHttpInfo(id, userId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Invite a team member
     * User can invite team members
     * @param {String} id Team id
     * @param {String} userId User id to invite
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "teamsIdInviteUserIdPostWithHttpInfo",
    value: function teamsIdInviteUserIdPostWithHttpInfo(id, userId) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling teamsIdInviteUserIdPost");
      } // verify the required parameter 'userId' is set


      if (userId === undefined || userId === null) {
        throw new _Error["default"]("Missing the required parameter 'userId' when calling teamsIdInviteUserIdPost");
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
      return this.apiClient.callApi('/teams/{id}/invite/{userId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Invite a team member
     * User can invite team members
     * @param {String} id Team id
     * @param {String} userId User id to invite
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "teamsIdInviteUserIdPost",
    value: function teamsIdInviteUserIdPost(id, userId) {
      return this.teamsIdInviteUserIdPostWithHttpInfo(id, userId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a team
     * Logged in teams can only update their own information. Only admins can update other teams.
     * @param {String} id Team id
     * @param {module:model/Body11} Body11 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Team} and HTTP response
     */

  }, {
    key: "teamsIdPatchWithHttpInfo",
    value: function teamsIdPatchWithHttpInfo(id, Body11) {
      var postBody = Body11; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling teamsIdPatch");
      } // verify the required parameter 'Body11' is set


      if (Body11 === undefined || Body11 === null) {
        throw new _Error["default"]("Missing the required parameter 'Body11' when calling teamsIdPatch");
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
      var returnType = _Team["default"];
      return this.apiClient.callApi('/teams/{id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a team
     * Logged in teams can only update their own information. Only admins can update other teams.
     * @param {String} id Team id
     * @param {module:model/Body11} Body11 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Team}
     */

  }, {
    key: "teamsIdPatch",
    value: function teamsIdPatch(id, Body11) {
      return this.teamsIdPatchWithHttpInfo(id, Body11).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a team
     * User can create teams.
     * @param {module:model/Body10} Body10 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Team} and HTTP response
     */

  }, {
    key: "teamsPostWithHttpInfo",
    value: function teamsPostWithHttpInfo(Body10) {
      var postBody = Body10; // verify the required parameter 'Body10' is set

      if (Body10 === undefined || Body10 === null) {
        throw new _Error["default"]("Missing the required parameter 'Body10' when calling teamsPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Team["default"];
      return this.apiClient.callApi('/teams', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a team
     * User can create teams.
     * @param {module:model/Body10} Body10 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Team}
     */

  }, {
    key: "teamsPost",
    value: function teamsPost(Body10) {
      return this.teamsPostWithHttpInfo(Body10).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TeamsApi;
}();

exports["default"] = TeamsApi;