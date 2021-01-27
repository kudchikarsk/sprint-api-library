"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _Team = _interopRequireDefault(require("../model/Team"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Invitees service.
* @module api/InviteesApi
* @version 1.6.0
*/
var InviteesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new InviteesApi. 
  * @alias module:api/InviteesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function InviteesApi(apiClient) {
    _classCallCheck(this, InviteesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get all team invitees
   * User can get team invitees
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Team>} and HTTP response
   */


  _createClass(InviteesApi, [{
    key: "inviteesGetWithHttpInfo",
    value: function inviteesGetWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Team["default"]];
      return this.apiClient.callApi('/invitees', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get all team invitees
     * User can get team invitees
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Team>}
     */

  }, {
    key: "inviteesGet",
    value: function inviteesGet() {
      return this.inviteesGetWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Accept a team invitee
     * User can accept team invitee
     * @param {String} id Team id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "inviteesIdAcceptPostWithHttpInfo",
    value: function inviteesIdAcceptPostWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling inviteesIdAcceptPost");
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
      return this.apiClient.callApi('/invitees/{id}/accept', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Accept a team invitee
     * User can accept team invitee
     * @param {String} id Team id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "inviteesIdAcceptPost",
    value: function inviteesIdAcceptPost(id) {
      return this.inviteesIdAcceptPostWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return InviteesApi;
}();

exports["default"] = InviteesApi;