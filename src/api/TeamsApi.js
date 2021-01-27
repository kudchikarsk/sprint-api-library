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
import Body10 from '../model/Body10';
import Body9 from '../model/Body9';
import Error from '../model/Error';
import InlineResponse2002 from '../model/InlineResponse2002';
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
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
      let returnType = InlineResponse2002;
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2002}
     */
    teamsGet(opts) {
      return this.teamsGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Accept a team invitee
     * User can accept team invitee
     * @param {String} id Team id
     * @param {String} memberId User id to invite
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    teamsIdAcceptInviteePostWithHttpInfo(id, memberId) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling teamsIdAcceptInviteePost");
      }
      // verify the required parameter 'memberId' is set
      if (memberId === undefined || memberId === null) {
        throw new Error("Missing the required parameter 'memberId' when calling teamsIdAcceptInviteePost");
      }

      let pathParams = {
        'id': id,
        'memberId': memberId
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
        '/teams/{id}/accept/invitee', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Accept a team invitee
     * User can accept team invitee
     * @param {String} id Team id
     * @param {String} memberId User id to invite
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    teamsIdAcceptInviteePost(id, memberId) {
      return this.teamsIdAcceptInviteePostWithHttpInfo(id, memberId)
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
     * @param {String} memberId User id to invite
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    teamsIdInviteMemberIdDeleteWithHttpInfo(id, memberId) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling teamsIdInviteMemberIdDelete");
      }
      // verify the required parameter 'memberId' is set
      if (memberId === undefined || memberId === null) {
        throw new Error("Missing the required parameter 'memberId' when calling teamsIdInviteMemberIdDelete");
      }

      let pathParams = {
        'id': id,
        'memberId': memberId
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
        '/teams/{id}/invite/{memberId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remove a team member
     * User can remove a team member
     * @param {String} id Team id
     * @param {String} memberId User id to invite
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    teamsIdInviteMemberIdDelete(id, memberId) {
      return this.teamsIdInviteMemberIdDeleteWithHttpInfo(id, memberId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Invite a team member
     * User can invite team members
     * @param {String} id Team id
     * @param {String} memberId User id to invite
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    teamsIdInviteMemberIdPostWithHttpInfo(id, memberId) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling teamsIdInviteMemberIdPost");
      }
      // verify the required parameter 'memberId' is set
      if (memberId === undefined || memberId === null) {
        throw new Error("Missing the required parameter 'memberId' when calling teamsIdInviteMemberIdPost");
      }

      let pathParams = {
        'id': id,
        'memberId': memberId
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
        '/teams/{id}/invite/{memberId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Invite a team member
     * User can invite team members
     * @param {String} id Team id
     * @param {String} memberId User id to invite
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    teamsIdInviteMemberIdPost(id, memberId) {
      return this.teamsIdInviteMemberIdPostWithHttpInfo(id, memberId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a team
     * Logged in teams can only update their own information. Only admins can update other teams.
     * @param {String} id Team id
     * @param {module:model/Body10} Body10 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Team} and HTTP response
     */
    teamsIdPatchWithHttpInfo(id, Body10) {
      let postBody = Body10;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling teamsIdPatch");
      }
      // verify the required parameter 'Body10' is set
      if (Body10 === undefined || Body10 === null) {
        throw new Error("Missing the required parameter 'Body10' when calling teamsIdPatch");
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
     * @param {module:model/Body10} Body10 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Team}
     */
    teamsIdPatch(id, Body10) {
      return this.teamsIdPatchWithHttpInfo(id, Body10)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a team
     * User can create teams.
     * @param {module:model/Body9} Body9 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Team} and HTTP response
     */
    teamsPostWithHttpInfo(Body9) {
      let postBody = Body9;
      // verify the required parameter 'Body9' is set
      if (Body9 === undefined || Body9 === null) {
        throw new Error("Missing the required parameter 'Body9' when calling teamsPost");
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
     * @param {module:model/Body9} Body9 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Team}
     */
    teamsPost(Body9) {
      return this.teamsPostWithHttpInfo(Body9)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
