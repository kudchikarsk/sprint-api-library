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
import Body12 from '../model/Body12';
import Body13 from '../model/Body13';
import Error from '../model/Error';
import InlineResponse2004 from '../model/InlineResponse2004';
import Team from '../model/Team';

/**
* Teams service.
* @module api/TeamsApi
* @version 1.6.0
*/
export default class TeamsApi {

    /**
    * Constructs a new TeamsApi. 
    * @alias module:api/TeamsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get all teams
     * Only admins can retrieve all teams.
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Team name *
     * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
     * @param {Number} opts.limit Maximum number of teams
     * @param {Number} opts.page Page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2004} and HTTP response
     */
    teamsGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'name': opts['name'],
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
      let returnType = InlineResponse2004;
      return this.apiClient.callApi(
        '/teams', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all teams
     * Only admins can retrieve all teams.
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Team name *
     * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
     * @param {Number} opts.limit Maximum number of teams
     * @param {Number} opts.page Page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2004}
     */
    teamsGet(opts) {
      return this.teamsGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a team
     * Logged in teams can delete only themselves. Only admins can delete other teams.
     * @param {String} id Team id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    teamsIdDeleteWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling teamsIdDelete");
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
        '/teams/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a team
     * Logged in teams can delete only themselves. Only admins can delete other teams.
     * @param {String} id Team id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    teamsIdDelete(id) {
      return this.teamsIdDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a team
     * Logged in teams can fetch only their own team information.
     * @param {String} id Team id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Team} and HTTP response
     */
    teamsIdGetWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling teamsIdGet");
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
      let returnType = Team;
      return this.apiClient.callApi(
        '/teams/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a team
     * Logged in teams can fetch only their own team information.
     * @param {String} id Team id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Team}
     */
    teamsIdGet(id) {
      return this.teamsIdGetWithHttpInfo(id)
        .then(function(response_and_data) {
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
    teamsIdInviteUserIdDeleteWithHttpInfo(id, userId) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling teamsIdInviteUserIdDelete");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling teamsIdInviteUserIdDelete");
      }

      let pathParams = {
        'id': id,
        'userId': userId
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
        '/teams/{id}/invite/{userId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remove a team member
     * User can remove a team member
     * @param {String} id Team id
     * @param {String} userId User id to invite
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    teamsIdInviteUserIdDelete(id, userId) {
      return this.teamsIdInviteUserIdDeleteWithHttpInfo(id, userId)
        .then(function(response_and_data) {
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
    teamsIdInviteUserIdPostWithHttpInfo(id, userId) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling teamsIdInviteUserIdPost");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling teamsIdInviteUserIdPost");
      }

      let pathParams = {
        'id': id,
        'userId': userId
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
        '/teams/{id}/invite/{userId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Invite a team member
     * User can invite team members
     * @param {String} id Team id
     * @param {String} userId User id to invite
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    teamsIdInviteUserIdPost(id, userId) {
      return this.teamsIdInviteUserIdPostWithHttpInfo(id, userId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a team
     * Logged in teams can only update their own information. Only admins can update other teams.
     * @param {String} id Team id
     * @param {module:model/Body13} Body13 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Team} and HTTP response
     */
    teamsIdPatchWithHttpInfo(id, Body13) {
      let postBody = Body13;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling teamsIdPatch");
      }
      // verify the required parameter 'Body13' is set
      if (Body13 === undefined || Body13 === null) {
        throw new Error("Missing the required parameter 'Body13' when calling teamsIdPatch");
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
      let returnType = Team;
      return this.apiClient.callApi(
        '/teams/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a team
     * Logged in teams can only update their own information. Only admins can update other teams.
     * @param {String} id Team id
     * @param {module:model/Body13} Body13 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Team}
     */
    teamsIdPatch(id, Body13) {
      return this.teamsIdPatchWithHttpInfo(id, Body13)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a team
     * User can create teams.
     * @param {module:model/Body12} Body12 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Team} and HTTP response
     */
    teamsPostWithHttpInfo(Body12) {
      let postBody = Body12;
      // verify the required parameter 'Body12' is set
      if (Body12 === undefined || Body12 === null) {
        throw new Error("Missing the required parameter 'Body12' when calling teamsPost");
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
      let returnType = Team;
      return this.apiClient.callApi(
        '/teams', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a team
     * User can create teams.
     * @param {module:model/Body12} Body12 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Team}
     */
    teamsPost(Body12) {
      return this.teamsPostWithHttpInfo(Body12)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
