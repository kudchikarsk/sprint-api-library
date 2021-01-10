/**
 * SprintService
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
import AuthTokens from '../model/AuthTokens';
import Body from '../model/Body';
import Body1 from '../model/Body1';
import Body2 from '../model/Body2';
import Body3 from '../model/Body3';
import Body4 from '../model/Body4';
import Body5 from '../model/Body5';
import Error from '../model/Error';
import InlineResponse201 from '../model/InlineResponse201';

/**
* Auth service.
* @module api/AuthApi
* @version 1.6.0
*/
export default class AuthApi {

    /**
    * Constructs a new AuthApi. 
    * @alias module:api/AuthApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the authForgotPasswordPost operation.
     * @callback module:api/AuthApi~authForgotPasswordPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Forgot password
     * An email will be sent to reset password.
     * @param {module:model/Body4} body4 
     * @param {module:api/AuthApi~authForgotPasswordPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    authForgotPasswordPost(body4, callback) {
      let postBody = body4;
      // verify the required parameter 'body4' is set
      if (body4 === undefined || body4 === null) {
        throw new Error("Missing the required parameter 'body4' when calling authForgotPasswordPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/auth/forgot-password', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the authLoginPost operation.
     * @callback module:api/AuthApi~authLoginPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Login
     * @param {module:model/Body1} body1 
     * @param {module:api/AuthApi~authLoginPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */
    authLoginPost(body1, callback) {
      let postBody = body1;
      // verify the required parameter 'body1' is set
      if (body1 === undefined || body1 === null) {
        throw new Error("Missing the required parameter 'body1' when calling authLoginPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse201;
      return this.apiClient.callApi(
        '/auth/login', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the authLogoutPost operation.
     * @callback module:api/AuthApi~authLogoutPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Logout
     * @param {module:model/Body2} body2 
     * @param {module:api/AuthApi~authLogoutPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    authLogoutPost(body2, callback) {
      let postBody = body2;
      // verify the required parameter 'body2' is set
      if (body2 === undefined || body2 === null) {
        throw new Error("Missing the required parameter 'body2' when calling authLogoutPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/auth/logout', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the authRefreshTokensPost operation.
     * @callback module:api/AuthApi~authRefreshTokensPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AuthTokens} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Refresh auth tokens
     * @param {module:model/Body3} body3 
     * @param {module:api/AuthApi~authRefreshTokensPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AuthTokens}
     */
    authRefreshTokensPost(body3, callback) {
      let postBody = body3;
      // verify the required parameter 'body3' is set
      if (body3 === undefined || body3 === null) {
        throw new Error("Missing the required parameter 'body3' when calling authRefreshTokensPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AuthTokens;
      return this.apiClient.callApi(
        '/auth/refresh-tokens', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the authRegisterPost operation.
     * @callback module:api/AuthApi~authRegisterPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register as user
     * @param {module:model/Body} body 
     * @param {module:api/AuthApi~authRegisterPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */
    authRegisterPost(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling authRegisterPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse201;
      return this.apiClient.callApi(
        '/auth/register', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the authResetPasswordPost operation.
     * @callback module:api/AuthApi~authResetPasswordPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset password
     * @param {String} token The reset password token
     * @param {module:model/Body5} body5 
     * @param {module:api/AuthApi~authResetPasswordPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    authResetPasswordPost(token, body5, callback) {
      let postBody = body5;
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling authResetPasswordPost");
      }
      // verify the required parameter 'body5' is set
      if (body5 === undefined || body5 === null) {
        throw new Error("Missing the required parameter 'body5' when calling authResetPasswordPost");
      }

      let pathParams = {
      };
      let queryParams = {
        'token': token
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/auth/reset-password', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
