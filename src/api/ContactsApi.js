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
import Body8 from '../model/Body8';
import Body9 from '../model/Body9';
import Contact from '../model/Contact';
import Error from '../model/Error';
import InlineResponse2001 from '../model/InlineResponse2001';

/**
* Contacts service.
* @module api/ContactsApi
* @version 1.6.0
*/
export default class ContactsApi {

    /**
    * Constructs a new ContactsApi. 
    * @alias module:api/ContactsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get all contacts
     * Logged in contact can retrieve all contacts.
     * @param {String} organizationId organization id
     * @param {Object} opts Optional parameters
     * @param {String} opts.name find contacts that start with name
     * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
     * @param {Number} opts.limit Maximum number of contacts
     * @param {Number} opts.page Page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */
    contactsGetWithHttpInfo(organizationId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling contactsGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'organizationId': organizationId,
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
      let returnType = InlineResponse2001;
      return this.apiClient.callApi(
        '/contacts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all contacts
     * Logged in contact can retrieve all contacts.
     * @param {String} organizationId organization id
     * @param {Object} opts Optional parameters
     * @param {String} opts.name find contacts that start with name
     * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
     * @param {Number} opts.limit Maximum number of contacts
     * @param {Number} opts.page Page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */
    contactsGet(organizationId, opts) {
      return this.contactsGetWithHttpInfo(organizationId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a contact
     * Logged in contacts can delete only themselves. Only admins can delete other contacts.
     * @param {String} id Contact id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    contactsIdDeleteWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling contactsIdDelete");
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
        '/contacts/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a contact
     * Logged in contacts can delete only themselves. Only admins can delete other contacts.
     * @param {String} id Contact id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    contactsIdDelete(id) {
      return this.contactsIdDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a contact
     * Logged in contact can fetch any contact information.
     * @param {String} id Contact id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Contact} and HTTP response
     */
    contactsIdGetWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling contactsIdGet");
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
      let returnType = Contact;
      return this.apiClient.callApi(
        '/contacts/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a contact
     * Logged in contact can fetch any contact information.
     * @param {String} id Contact id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Contact}
     */
    contactsIdGet(id) {
      return this.contactsIdGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a contact
     * Logged in contacts can only update their own information. Only admins can update other contacts.
     * @param {String} id Contact id
     * @param {module:model/Body9} Body9 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Contact} and HTTP response
     */
    contactsIdPatchWithHttpInfo(id, Body9) {
      let postBody = Body9;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling contactsIdPatch");
      }
      // verify the required parameter 'Body9' is set
      if (Body9 === undefined || Body9 === null) {
        throw new Error("Missing the required parameter 'Body9' when calling contactsIdPatch");
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
      let returnType = Contact;
      return this.apiClient.callApi(
        '/contacts/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a contact
     * Logged in contacts can only update their own information. Only admins can update other contacts.
     * @param {String} id Contact id
     * @param {module:model/Body9} Body9 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Contact}
     */
    contactsIdPatch(id, Body9) {
      return this.contactsIdPatchWithHttpInfo(id, Body9)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a contact
     * Only admins can create other contacts.
     * @param {module:model/Body8} Body8 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Contact} and HTTP response
     */
    contactsPostWithHttpInfo(Body8) {
      let postBody = Body8;
      // verify the required parameter 'Body8' is set
      if (Body8 === undefined || Body8 === null) {
        throw new Error("Missing the required parameter 'Body8' when calling contactsPost");
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
      let returnType = Contact;
      return this.apiClient.callApi(
        '/contacts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a contact
     * Only admins can create other contacts.
     * @param {module:model/Body8} Body8 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Contact}
     */
    contactsPost(Body8) {
      return this.contactsPostWithHttpInfo(Body8)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
