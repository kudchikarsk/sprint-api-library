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
    instance = new SprintService.AuthApi();
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

  describe('AuthApi', function() {
    describe('authForgotPasswordPost', function() {
      it('should call authForgotPasswordPost successfully', function(done) {
        //uncomment below and update the code to test authForgotPasswordPost
        //instance.authForgotPasswordPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('authLoginPost', function() {
      it('should call authLoginPost successfully', function(done) {
        //uncomment below and update the code to test authLoginPost
        //instance.authLoginPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('authLogoutPost', function() {
      it('should call authLogoutPost successfully', function(done) {
        //uncomment below and update the code to test authLogoutPost
        //instance.authLogoutPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('authRefreshTokensPost', function() {
      it('should call authRefreshTokensPost successfully', function(done) {
        //uncomment below and update the code to test authRefreshTokensPost
        //instance.authRefreshTokensPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('authRegisterPost', function() {
      it('should call authRegisterPost successfully', function(done) {
        //uncomment below and update the code to test authRegisterPost
        //instance.authRegisterPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('authResetPasswordPost', function() {
      it('should call authResetPasswordPost successfully', function(done) {
        //uncomment below and update the code to test authResetPasswordPost
        //instance.authResetPasswordPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
