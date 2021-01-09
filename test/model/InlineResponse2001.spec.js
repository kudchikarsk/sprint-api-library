/**
 * node-express-boilerplate API documentation
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.6.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NodeExpressBoilerplateApiDocumentation);
  }
}(this, function(expect, NodeExpressBoilerplateApiDocumentation) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NodeExpressBoilerplateApiDocumentation.InlineResponse2001();
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

  describe('InlineResponse2001', function() {
    it('should create an instance of InlineResponse2001', function() {
      // uncomment below and update the code to test InlineResponse2001
      //var instane = new NodeExpressBoilerplateApiDocumentation.InlineResponse2001();
      //expect(instance).to.be.a(NodeExpressBoilerplateApiDocumentation.InlineResponse2001);
    });

    it('should have the property results (base name: "results")', function() {
      // uncomment below and update the code to test the property results
      //var instane = new NodeExpressBoilerplateApiDocumentation.InlineResponse2001();
      //expect(instance).to.be();
    });

    it('should have the property page (base name: "page")', function() {
      // uncomment below and update the code to test the property page
      //var instane = new NodeExpressBoilerplateApiDocumentation.InlineResponse2001();
      //expect(instance).to.be();
    });

    it('should have the property limit (base name: "limit")', function() {
      // uncomment below and update the code to test the property limit
      //var instane = new NodeExpressBoilerplateApiDocumentation.InlineResponse2001();
      //expect(instance).to.be();
    });

    it('should have the property totalPages (base name: "totalPages")', function() {
      // uncomment below and update the code to test the property totalPages
      //var instane = new NodeExpressBoilerplateApiDocumentation.InlineResponse2001();
      //expect(instance).to.be();
    });

    it('should have the property totalResults (base name: "totalResults")', function() {
      // uncomment below and update the code to test the property totalResults
      //var instane = new NodeExpressBoilerplateApiDocumentation.InlineResponse2001();
      //expect(instance).to.be();
    });

  });

}));
