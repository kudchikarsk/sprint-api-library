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
   * @param {module:model/Body4} body4 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  _createClass(AuthApi, [{
    key: "authForgotPasswordPostWithHttpInfo",
    value: function authForgotPasswordPostWithHttpInfo(body4) {
      var postBody = body4; // verify the required parameter 'body4' is set

      if (body4 === undefined || body4 === null) {
        throw new _Error["default"]("Missing the required parameter 'body4' when calling authForgotPasswordPost");
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
     * @param {module:model/Body4} body4 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "authForgotPasswordPost",
    value: function authForgotPasswordPost(body4) {
      return this.authForgotPasswordPostWithHttpInfo(body4).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Login
     * @param {module:model/Body1} body1 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse201} and HTTP response
     */

  }, {
    key: "authLoginPostWithHttpInfo",
    value: function authLoginPostWithHttpInfo(body1) {
      var postBody = body1; // verify the required parameter 'body1' is set

      if (body1 === undefined || body1 === null) {
        throw new _Error["default"]("Missing the required parameter 'body1' when calling authLoginPost");
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
     * @param {module:model/Body1} body1 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse201}
     */

  }, {
    key: "authLoginPost",
    value: function authLoginPost(body1) {
      return this.authLoginPostWithHttpInfo(body1).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Logout
     * @param {module:model/Body2} body2 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "authLogoutPostWithHttpInfo",
    value: function authLogoutPostWithHttpInfo(body2) {
      var postBody = body2; // verify the required parameter 'body2' is set

      if (body2 === undefined || body2 === null) {
        throw new _Error["default"]("Missing the required parameter 'body2' when calling authLogoutPost");
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
     * @param {module:model/Body2} body2 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "authLogoutPost",
    value: function authLogoutPost(body2) {
      return this.authLogoutPostWithHttpInfo(body2).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Refresh auth tokens
     * @param {module:model/Body3} body3 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AuthTokens} and HTTP response
     */

  }, {
    key: "authRefreshTokensPostWithHttpInfo",
    value: function authRefreshTokensPostWithHttpInfo(body3) {
      var postBody = body3; // verify the required parameter 'body3' is set

      if (body3 === undefined || body3 === null) {
        throw new _Error["default"]("Missing the required parameter 'body3' when calling authRefreshTokensPost");
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
     * @param {module:model/Body3} body3 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AuthTokens}
     */

  }, {
    key: "authRefreshTokensPost",
    value: function authRefreshTokensPost(body3) {
      return this.authRefreshTokensPostWithHttpInfo(body3).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Register as user
     * @param {module:model/Body} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse201} and HTTP response
     */

  }, {
    key: "authRegisterPostWithHttpInfo",
    value: function authRegisterPostWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling authRegisterPost");
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
     * @param {module:model/Body} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse201}
     */

  }, {
    key: "authRegisterPost",
    value: function authRegisterPost(body) {
      return this.authRegisterPostWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Reset password
     * @param {String} token The reset password token
     * @param {module:model/Body5} body5 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "authResetPasswordPostWithHttpInfo",
    value: function authResetPasswordPostWithHttpInfo(token, body5) {
      var postBody = body5; // verify the required parameter 'token' is set

      if (token === undefined || token === null) {
        throw new _Error["default"]("Missing the required parameter 'token' when calling authResetPasswordPost");
      } // verify the required parameter 'body5' is set


      if (body5 === undefined || body5 === null) {
        throw new _Error["default"]("Missing the required parameter 'body5' when calling authResetPasswordPost");
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
     * @param {module:model/Body5} body5 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "authResetPasswordPost",
    value: function authResetPasswordPost(token, body5) {
      return this.authResetPasswordPostWithHttpInfo(token, body5).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return AuthApi;
}();

exports["default"] = AuthApi;