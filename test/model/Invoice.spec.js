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
    instance = new SprintService.Invoice();
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

  describe('Invoice', function() {
    it('should create an instance of Invoice', function() {
      // uncomment below and update the code to test Invoice
      //var instane = new SprintService.Invoice();
      //expect(instance).to.be.a(SprintService.Invoice);
    });

    it('should have the property teamId (base name: "teamId")', function() {
      // uncomment below and update the code to test the property teamId
      //var instance = new SprintService.Invoice();
      //expect(instance).to.be();
    });

    it('should have the property invoiceId (base name: "invoiceId")', function() {
      // uncomment below and update the code to test the property invoiceId
      //var instance = new SprintService.Invoice();
      //expect(instance).to.be();
    });

    it('should have the property recipient (base name: "recipient")', function() {
      // uncomment below and update the code to test the property recipient
      //var instance = new SprintService.Invoice();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new SprintService.Invoice();
      //expect(instance).to.be();
    });

    it('should have the property issuedOn (base name: "issuedOn")', function() {
      // uncomment below and update the code to test the property issuedOn
      //var instance = new SprintService.Invoice();
      //expect(instance).to.be();
    });

    it('should have the property dueOn (base name: "dueOn")', function() {
      // uncomment below and update the code to test the property dueOn
      //var instance = new SprintService.Invoice();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instance = new SprintService.Invoice();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instance = new SprintService.Invoice();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new SprintService.Invoice();
      //expect(instance).to.be();
    });

    it('should have the property history (base name: "history")', function() {
      // uncomment below and update the code to test the property history
      //var instance = new SprintService.Invoice();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new SprintService.Invoice();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "createdBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instance = new SprintService.Invoice();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updatedAt")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new SprintService.Invoice();
      //expect(instance).to.be();
    });

    it('should have the property updatedBy (base name: "updatedBy")', function() {
      // uncomment below and update the code to test the property updatedBy
      //var instance = new SprintService.Invoice();
      //expect(instance).to.be();
    });

  });

}));
