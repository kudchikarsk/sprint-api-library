# NodeExpressBoilerplateApiDocumentation.AuthApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authForgotPasswordPost**](AuthApi.md#authForgotPasswordPost) | **POST** /auth/forgot-password | Forgot password
[**authLoginPost**](AuthApi.md#authLoginPost) | **POST** /auth/login | Login
[**authLogoutPost**](AuthApi.md#authLogoutPost) | **POST** /auth/logout | Logout
[**authRefreshTokensPost**](AuthApi.md#authRefreshTokensPost) | **POST** /auth/refresh-tokens | Refresh auth tokens
[**authRegisterPost**](AuthApi.md#authRegisterPost) | **POST** /auth/register | Register as user
[**authResetPasswordPost**](AuthApi.md#authResetPasswordPost) | **POST** /auth/reset-password | Reset password

<a name="authForgotPasswordPost"></a>
# **authForgotPasswordPost**
> authForgotPasswordPost(body)

Forgot password

An email will be sent to reset password.

### Example
```javascript
import NodeExpressBoilerplateApiDocumentation from 'node_express_boilerplate_api_documentation';

let apiInstance = new NodeExpressBoilerplateApiDocumentation.AuthApi();
let body = new NodeExpressBoilerplateApiDocumentation.Body4(); // Body4 | 

apiInstance.authForgotPasswordPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body4**](Body4.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authLoginPost"></a>
# **authLoginPost**
> InlineResponse201 authLoginPost(body)

Login

### Example
```javascript
import NodeExpressBoilerplateApiDocumentation from 'node_express_boilerplate_api_documentation';

let apiInstance = new NodeExpressBoilerplateApiDocumentation.AuthApi();
let body = new NodeExpressBoilerplateApiDocumentation.Body1(); // Body1 | 

apiInstance.authLoginPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body1**](Body1.md)|  | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authLogoutPost"></a>
# **authLogoutPost**
> authLogoutPost(body)

Logout

### Example
```javascript
import NodeExpressBoilerplateApiDocumentation from 'node_express_boilerplate_api_documentation';

let apiInstance = new NodeExpressBoilerplateApiDocumentation.AuthApi();
let body = new NodeExpressBoilerplateApiDocumentation.Body2(); // Body2 | 

apiInstance.authLogoutPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body2**](Body2.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authRefreshTokensPost"></a>
# **authRefreshTokensPost**
> AuthTokens authRefreshTokensPost(body)

Refresh auth tokens

### Example
```javascript
import NodeExpressBoilerplateApiDocumentation from 'node_express_boilerplate_api_documentation';

let apiInstance = new NodeExpressBoilerplateApiDocumentation.AuthApi();
let body = new NodeExpressBoilerplateApiDocumentation.Body3(); // Body3 | 

apiInstance.authRefreshTokensPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body3**](Body3.md)|  | 

### Return type

[**AuthTokens**](AuthTokens.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authRegisterPost"></a>
# **authRegisterPost**
> InlineResponse201 authRegisterPost(body)

Register as user

### Example
```javascript
import NodeExpressBoilerplateApiDocumentation from 'node_express_boilerplate_api_documentation';

let apiInstance = new NodeExpressBoilerplateApiDocumentation.AuthApi();
let body = new NodeExpressBoilerplateApiDocumentation.Body(); // Body | 

apiInstance.authRegisterPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body**](Body.md)|  | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authResetPasswordPost"></a>
# **authResetPasswordPost**
> authResetPasswordPost(bodytoken)

Reset password

### Example
```javascript
import NodeExpressBoilerplateApiDocumentation from 'node_express_boilerplate_api_documentation';

let apiInstance = new NodeExpressBoilerplateApiDocumentation.AuthApi();
let body = new NodeExpressBoilerplateApiDocumentation.Body5(); // Body5 | 
let token = "token_example"; // String | The reset password token

apiInstance.authResetPasswordPost(bodytoken, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body5**](Body5.md)|  | 
 **token** | **String**| The reset password token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

