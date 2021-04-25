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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SprintService);
  }
}(this, function(expect, SprintService) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SprintService.InvoicesApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InvoicesApi', function() {
    describe('invoicesBulkPost', function() {
      it('should call invoicesBulkPost successfully', function(done) {
        //uncomment below and update the code to test invoicesBulkPost
        //instance.invoicesBulkPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('invoicesGet', function() {
      it('should call invoicesGet successfully', function(done) {
        //uncomment below and update the code to test invoicesGet
        //instance.invoicesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('invoicesInvoiceIdGet', function() {
      it('should call invoicesInvoiceIdGet successfully', function(done) {
        //uncomment below and update the code to test invoicesInvoiceIdGet
        //instance.invoicesInvoiceIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('invoicesPost', function() {
      it('should call invoicesPost successfully', function(done) {
        //uncomment below and update the code to test invoicesPost
        //instance.invoicesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));