"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AuthTokens = _interopRequireDefault(require("../model/AuthTokens"));

var _Body = _interopRequireDefault(require("../model/Body"));

var _Body2 = _interopRequireDefault(require("../model/Body1"));

var _Body3 = _interopRequireDefault(require("../model/Body2"));

var _Body4 = _interopRequireDefault(require("../model/Body3"));

var _Body5 = _interopRequireDefault(require("../model/Body4"));

var _Body6 = _interopRequireDefault(require("../model/Body5"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse201"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Auth service.
* @module api/AuthApi
* @version 1.6.0
*/
var AuthApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AuthApi. 
  * @alias module:api/AuthApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AuthApi(apiClient) {
    _classCallCheck(this, AuthApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Forgot password
   * An email will be sent to reset password.
   * @param {module:model/Body4} Body4 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  _createClass(AuthApi, [{
    key: "authForgotPasswordPostWithHttpInfo",
    value: function authForgotPasswordPostWithHttpInfo(Body4) {
      var postBody = Body4; // verify the required parameter 'Body4' is set

      if (Body4 === undefined || Body4 === null) {
        throw new _Error["default"]("Missing the required parameter 'Body4' when calling authForgotPasswordPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/auth/forgot-password', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Forgot password
     * An email will be sent to reset password.
     * @param {module:model/Body4} Body4 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "authForgotPasswordPost",
    value: function authForgotPasswordPost(Body4) {
      return this.authForgotPasswordPostWithHttpInfo(Body4).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Login
     * @param {module:model/Body1} Body1 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse201} and HTTP response
     */

  }, {
    key: "authLoginPostWithHttpInfo",
    value: function authLoginPostWithHttpInfo(Body1) {
      var postBody = Body1; // verify the required parameter 'Body1' is set

      if (Body1 === undefined || Body1 === null) {
        throw new _Error["default"]("Missing the required parameter 'Body1' when calling authLoginPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/auth/login', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Login
     * @param {module:model/Body1} Body1 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse201}
     */

  }, {
    key: "authLoginPost",
    value: function authLoginPost(Body1) {
      return this.authLoginPostWithHttpInfo(Body1).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Logout
     * @param {module:model/Body2} Body2 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "authLogoutPostWithHttpInfo",
    value: function authLogoutPostWithHttpInfo(Body2) {
      var postBody = Body2; // verify the required parameter 'Body2' is set

      if (Body2 === undefined || Body2 === null) {
        throw new _Error["default"]("Missing the required parameter 'Body2' when calling authLogoutPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/auth/logout', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Logout
     * @param {module:model/Body2} Body2 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "authLogoutPost",
    value: function authLogoutPost(Body2) {
      return this.authLogoutPostWithHttpInfo(Body2).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Refresh auth tokens
     * @param {module:model/Body3} Body3 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AuthTokens} and HTTP response
     */

  }, {
    key: "authRefreshTokensPostWithHttpInfo",
    value: function authRefreshTokensPostWithHttpInfo(Body3) {
      var postBody = Body3; // verify the required parameter 'Body3' is set

      if (Body3 === undefined || Body3 === null) {
        throw new _Error["default"]("Missing the required parameter 'Body3' when calling authRefreshTokensPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AuthTokens["default"];
      return this.apiClient.callApi('/auth/refresh-tokens', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Refresh auth tokens
     * @param {module:model/Body3} Body3 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AuthTokens}
     */

  }, {
    key: "authRefreshTokensPost",
    value: function authRefreshTokensPost(Body3) {
      return this.authRefreshTokensPostWithHttpInfo(Body3).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Register as user
     * @param {module:model/Body} Body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse201} and HTTP response
     */

  }, {
    key: "authRegisterPostWithHttpInfo",
    value: function authRegisterPostWithHttpInfo(Body) {
      var postBody = Body; // verify the required parameter 'Body' is set

      if (Body === undefined || Body === null) {
        throw new _Error["default"]("Missing the required parameter 'Body' when calling authRegisterPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/auth/register', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Register as user
     * @param {module:model/Body} Body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse201}
     */

  }, {
    key: "authRegisterPost",
    value: function authRegisterPost(Body) {
      return this.authRegisterPostWithHttpInfo(Body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Reset password
     * @param {String} token The reset password token
     * @param {module:model/Body5} Body5 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "authResetPasswordPostWithHttpInfo",
    value: function authResetPasswordPostWithHttpInfo(token, Body5) {
      var postBody = Body5; // verify the required parameter 'token' is set

      if (token === undefined || token === null) {
        throw new _Error["default"]("Missing the required parameter 'token' when calling authResetPasswordPost");
      } // verify the required parameter 'Body5' is set


      if (Body5 === undefined || Body5 === null) {
        throw new _Error["default"]("Missing the required parameter 'Body5' when calling authResetPasswordPost");
      }

      var pathParams = {};
      var queryParams = {
        'token': token
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/auth/reset-password', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Reset password
     * @param {String} token The reset password token
     * @param {module:model/Body5} Body5 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "authResetPasswordPost",
    value: function authResetPasswordPost(token, Body5) {
      return this.authResetPasswordPostWithHttpInfo(token, Body5).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return AuthApi;
}();

exports["default"] = AuthApi;