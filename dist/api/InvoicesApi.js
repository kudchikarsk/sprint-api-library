"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Body = _interopRequireDefault(require("../model/Body10"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2002"));

var _Invoice = _interopRequireDefault(require("../model/Invoice"));

var _InvoiceEvent = _interopRequireDefault(require("../model/InvoiceEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Invoices service.
* @module api/InvoicesApi
* @version 1.6.0
*/
var InvoicesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new InvoicesApi. 
  * @alias module:api/InvoicesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function InvoicesApi(apiClient) {
    _classCallCheck(this, InvoicesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get all invoices
   * Logged in invoice can retrieve all invoices.
   * @param {String} organizationId invoice organizationId
   * @param {Object} opts Optional parameters
   * @param {String} opts.name invoice client name
   * @param {String} opts.status invoice status
   * @param {String} opts.description invoice project / description
   * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
   * @param {Number} opts.limit Maximum number of invoices
   * @param {Number} opts.page Page number (default to 1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
   */


  _createClass(InvoicesApi, [{
    key: "invoicesGetWithHttpInfo",
    value: function invoicesGetWithHttpInfo(organizationId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'organizationId' is set

      if (organizationId === undefined || organizationId === null) {
        throw new _Error["default"]("Missing the required parameter 'organizationId' when calling invoicesGet");
      }

      var pathParams = {};
      var queryParams = {
        'organizationId': organizationId,
        'name': opts['name'],
        'status': opts['status'],
        'description': opts['description'],
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
      return this.apiClient.callApi('/invoices', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get all invoices
     * Logged in invoice can retrieve all invoices.
     * @param {String} organizationId invoice organizationId
     * @param {Object} opts Optional parameters
     * @param {String} opts.name invoice client name
     * @param {String} opts.status invoice status
     * @param {String} opts.description invoice project / description
     * @param {String} opts.sortBy sort by query in the form of field:desc/asc (ex. name:asc)
     * @param {Number} opts.limit Maximum number of invoices
     * @param {Number} opts.page Page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2002}
     */

  }, {
    key: "invoicesGet",
    value: function invoicesGet(organizationId, opts) {
      return this.invoicesGetWithHttpInfo(organizationId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get all invoices
     * User can retrieve assigned invoices.
     * @param {String} invoiceId Invoice id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Invoice} and HTTP response
     */

  }, {
    key: "invoicesInvoiceIdGetWithHttpInfo",
    value: function invoicesInvoiceIdGetWithHttpInfo(invoiceId) {
      var postBody = null; // verify the required parameter 'invoiceId' is set

      if (invoiceId === undefined || invoiceId === null) {
        throw new _Error["default"]("Missing the required parameter 'invoiceId' when calling invoicesInvoiceIdGet");
      }

      var pathParams = {
        'invoiceId': invoiceId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Invoice["default"];
      return this.apiClient.callApi('/invoices/{invoiceId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get all invoices
     * User can retrieve assigned invoices.
     * @param {String} invoiceId Invoice id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Invoice}
     */

  }, {
    key: "invoicesInvoiceIdGet",
    value: function invoicesInvoiceIdGet(invoiceId) {
      return this.invoicesInvoiceIdGetWithHttpInfo(invoiceId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a invoice event
     * User can create invoice event.
     * @param {module:model/Body10} body10 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InvoiceEvent} and HTTP response
     */

  }, {
    key: "invoicesPostWithHttpInfo",
    value: function invoicesPostWithHttpInfo(body10) {
      var postBody = body10; // verify the required parameter 'body10' is set

      if (body10 === undefined || body10 === null) {
        throw new _Error["default"]("Missing the required parameter 'body10' when calling invoicesPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InvoiceEvent["default"];
      return this.apiClient.callApi('/invoices', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a invoice event
     * User can create invoice event.
     * @param {module:model/Body10} body10 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InvoiceEvent}
     */

  }, {
    key: "invoicesPost",
    value: function invoicesPost(body10) {
      return this.invoicesPostWithHttpInfo(body10).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return InvoicesApi;
}();

exports["default"] = InvoicesApi;