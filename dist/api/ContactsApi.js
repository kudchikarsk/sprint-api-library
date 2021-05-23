"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Body = _interopRequireDefault(require("../model/Body8"));

var _Body2 = _interopRequireDefault(require("../model/Body9"));

var _Contact = _interopRequireDefault(require("../model/Contact"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2001"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Contacts service.
* @module api/ContactsApi
* @version 1.6.0
*/
var ContactsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ContactsApi. 
  * @alias module:api/ContactsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ContactsApi(apiClient) {
    _classCallCheck(this, ContactsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
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


  _createClass(ContactsApi, [{
    key: "contactsGetWithHttpInfo",
    value: function contactsGetWithHttpInfo(organizationId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'organizationId' is set

      if (organizationId === undefined || organizationId === null) {
        throw new _Error["default"]("Missing the required parameter 'organizationId' when calling contactsGet");
      }

      var pathParams = {};
      var queryParams = {
        'organizationId': organizationId,
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
      return this.apiClient.callApi('/contacts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
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

  }, {
    key: "contactsGet",
    value: function contactsGet(organizationId, opts) {
      return this.contactsGetWithHttpInfo(organizationId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a contact
     * Logged in contacts can delete only themselves. Only admins can delete other contacts.
     * @param {String} id Contact id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "contactsIdDeleteWithHttpInfo",
    value: function contactsIdDeleteWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling contactsIdDelete");
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
      return this.apiClient.callApi('/contacts/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a contact
     * Logged in contacts can delete only themselves. Only admins can delete other contacts.
     * @param {String} id Contact id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "contactsIdDelete",
    value: function contactsIdDelete(id) {
      return this.contactsIdDeleteWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a contact
     * Logged in contact can fetch any contact information.
     * @param {String} id Contact id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Contact} and HTTP response
     */

  }, {
    key: "contactsIdGetWithHttpInfo",
    value: function contactsIdGetWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling contactsIdGet");
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
      var returnType = _Contact["default"];
      return this.apiClient.callApi('/contacts/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a contact
     * Logged in contact can fetch any contact information.
     * @param {String} id Contact id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Contact}
     */

  }, {
    key: "contactsIdGet",
    value: function contactsIdGet(id) {
      return this.contactsIdGetWithHttpInfo(id).then(function (response_and_data) {
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

  }, {
    key: "contactsIdPatchWithHttpInfo",
    value: function contactsIdPatchWithHttpInfo(id, Body9) {
      var postBody = Body9; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling contactsIdPatch");
      } // verify the required parameter 'Body9' is set


      if (Body9 === undefined || Body9 === null) {
        throw new _Error["default"]("Missing the required parameter 'Body9' when calling contactsIdPatch");
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
      var returnType = _Contact["default"];
      return this.apiClient.callApi('/contacts/{id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a contact
     * Logged in contacts can only update their own information. Only admins can update other contacts.
     * @param {String} id Contact id
     * @param {module:model/Body9} Body9 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Contact}
     */

  }, {
    key: "contactsIdPatch",
    value: function contactsIdPatch(id, Body9) {
      return this.contactsIdPatchWithHttpInfo(id, Body9).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a contact
     * Only admins can create other contacts.
     * @param {module:model/Body8} Body8 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Contact} and HTTP response
     */

  }, {
    key: "contactsPostWithHttpInfo",
    value: function contactsPostWithHttpInfo(Body8) {
      var postBody = Body8; // verify the required parameter 'Body8' is set

      if (Body8 === undefined || Body8 === null) {
        throw new _Error["default"]("Missing the required parameter 'Body8' when calling contactsPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Contact["default"];
      return this.apiClient.callApi('/contacts', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a contact
     * Only admins can create other contacts.
     * @param {module:model/Body8} Body8 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Contact}
     */

  }, {
    key: "contactsPost",
    value: function contactsPost(Body8) {
      return this.contactsPostWithHttpInfo(Body8).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ContactsApi;
}();

exports["default"] = ContactsApi;