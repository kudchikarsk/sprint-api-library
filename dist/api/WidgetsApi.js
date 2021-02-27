"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Body = _interopRequireDefault(require("../model/Body14"));

var _Body2 = _interopRequireDefault(require("../model/Body15"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2005"));

var _Widget = _interopRequireDefault(require("../model/Widget"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Widgets service.
* @module api/WidgetsApi
* @version 1.6.0
*/
var WidgetsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WidgetsApi. 
  * @alias module:api/WidgetsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WidgetsApi(apiClient) {
    _classCallCheck(this, WidgetsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get all widgets
   * Logged in widget can retrieve all widgets.
   * @param {Object} opts Optional parameters
   * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
   * @param {Number} opts.limit Maximum number of widgets
   * @param {Number} opts.page Page number (default to 1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2005} and HTTP response
   */


  _createClass(WidgetsApi, [{
    key: "widgetsGetWithHttpInfo",
    value: function widgetsGetWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
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
      return this.apiClient.callApi('/widgets', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get all widgets
     * Logged in widget can retrieve all widgets.
     * @param {Object} opts Optional parameters
     * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
     * @param {Number} opts.limit Maximum number of widgets
     * @param {Number} opts.page Page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2005}
     */

  }, {
    key: "widgetsGet",
    value: function widgetsGet(opts) {
      return this.widgetsGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a widget
     * Logged in widgets can delete only themselves. Only admins can delete other widgets.
     * @param {String} id Widget id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "widgetsIdDeleteWithHttpInfo",
    value: function widgetsIdDeleteWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling widgetsIdDelete");
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
      return this.apiClient.callApi('/widgets/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a widget
     * Logged in widgets can delete only themselves. Only admins can delete other widgets.
     * @param {String} id Widget id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "widgetsIdDelete",
    value: function widgetsIdDelete(id) {
      return this.widgetsIdDeleteWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a widget
     * Logged in widget can fetch any widget information.
     * @param {String} id Widget id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Widget} and HTTP response
     */

  }, {
    key: "widgetsIdGetWithHttpInfo",
    value: function widgetsIdGetWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling widgetsIdGet");
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
      var returnType = _Widget["default"];
      return this.apiClient.callApi('/widgets/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a widget
     * Logged in widget can fetch any widget information.
     * @param {String} id Widget id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Widget}
     */

  }, {
    key: "widgetsIdGet",
    value: function widgetsIdGet(id) {
      return this.widgetsIdGetWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a widget
     * Logged in widgets can only update their own information. Only admins can update other widgets.
     * @param {String} id Widget id
     * @param {module:model/Body15} Body15 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Widget} and HTTP response
     */

  }, {
    key: "widgetsIdPatchWithHttpInfo",
    value: function widgetsIdPatchWithHttpInfo(id, Body15) {
      var postBody = Body15; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling widgetsIdPatch");
      } // verify the required parameter 'Body15' is set


      if (Body15 === undefined || Body15 === null) {
        throw new _Error["default"]("Missing the required parameter 'Body15' when calling widgetsIdPatch");
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
      var returnType = _Widget["default"];
      return this.apiClient.callApi('/widgets/{id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a widget
     * Logged in widgets can only update their own information. Only admins can update other widgets.
     * @param {String} id Widget id
     * @param {module:model/Body15} Body15 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Widget}
     */

  }, {
    key: "widgetsIdPatch",
    value: function widgetsIdPatch(id, Body15) {
      return this.widgetsIdPatchWithHttpInfo(id, Body15).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a widget
     * Only admins can create other widgets.
     * @param {module:model/Body14} Body14 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Widget} and HTTP response
     */

  }, {
    key: "widgetsPostWithHttpInfo",
    value: function widgetsPostWithHttpInfo(Body14) {
      var postBody = Body14; // verify the required parameter 'Body14' is set

      if (Body14 === undefined || Body14 === null) {
        throw new _Error["default"]("Missing the required parameter 'Body14' when calling widgetsPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Widget["default"];
      return this.apiClient.callApi('/widgets', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a widget
     * Only admins can create other widgets.
     * @param {module:model/Body14} Body14 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Widget}
     */

  }, {
    key: "widgetsPost",
    value: function widgetsPost(Body14) {
      return this.widgetsPostWithHttpInfo(Body14).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return WidgetsApi;
}();

exports["default"] = WidgetsApi;