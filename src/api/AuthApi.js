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
     * Forgot password
     * An email will be sent to reset password.
     * @param {module:model/Body4} Body4 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    authForgotPasswordPostWithHttpInfo(Body4) {
      let postBody = Body4;
      // verify the required parameter 'Body4' is set
      if (Body4 === undefined || Body4 === null) {
        throw new Error("Missing the required parameter 'Body4' when calling authForgotPasswordPost");
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Forgot password
     * An email will be sent to reset password.
     * @param {module:model/Body4} Body4 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    authForgotPasswordPost(Body4) {
      return this.authForgotPasswordPostWithHttpInfo(Body4)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Login
     * @param {module:model/Body1} Body1 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse201} and HTTP response
     */
    authLoginPostWithHttpInfo(Body1) {
      let postBody = Body1;
      // verify the required parameter 'Body1' is set
      if (Body1 === undefined || Body1 === null) {
        throw new Error("Missing the required parameter 'Body1' when calling authLoginPost");
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Login
     * @param {module:model/Body1} Body1 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse201}
     */
    authLoginPost(Body1) {
      return this.authLoginPostWithHttpInfo(Body1)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Logout
     * @param {module:model/Body2} Body2 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    authLogoutPostWithHttpInfo(Body2) {
      let postBody = Body2;
      // verify the required parameter 'Body2' is set
      if (Body2 === undefined || Body2 === null) {
        throw new Error("Missing the required parameter 'Body2' when calling authLogoutPost");
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Logout
     * @param {module:model/Body2} Body2 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    authLogoutPost(Body2) {
      return this.authLogoutPostWithHttpInfo(Body2)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Refresh auth tokens
     * @param {module:model/Body3} Body3 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AuthTokens} and HTTP response
     */
    authRefreshTokensPostWithHttpInfo(Body3) {
      let postBody = Body3;
      // verify the required parameter 'Body3' is set
      if (Body3 === undefined || Body3 === null) {
        throw new Error("Missing the required parameter 'Body3' when calling authRefreshTokensPost");
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Refresh auth tokens
     * @param {module:model/Body3} Body3 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AuthTokens}
     */
    authRefreshTokensPost(Body3) {
      return this.authRefreshTokensPostWithHttpInfo(Body3)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Register as user
     * @param {module:model/Body} Body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse201} and HTTP response
     */
    authRegisterPostWithHttpInfo(Body) {
      let postBody = Body;
      // verify the required parameter 'Body' is set
      if (Body === undefined || Body === null) {
        throw new Error("Missing the required parameter 'Body' when calling authRegisterPost");
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Register as user
     * @param {module:model/Body} Body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse201}
     */
    authRegisterPost(Body) {
      return this.authRegisterPostWithHttpInfo(Body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Reset password
     * @param {String} token The reset password token
     * @param {module:model/Body5} Body5 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    authResetPasswordPostWithHttpInfo(token, Body5) {
      let postBody = Body5;
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling authResetPasswordPost");
      }
      // verify the required parameter 'Body5' is set
      if (Body5 === undefined || Body5 === null) {
        throw new Error("Missing the required parameter 'Body5' when calling authResetPasswordPost");
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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Reset password
     * @param {String} token The reset password token
     * @param {module:model/Body5} Body5 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    authResetPasswordPost(token, Body5) {
      return this.authResetPasswordPostWithHttpInfo(token, Body5)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
