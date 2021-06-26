# SprintService.AuthApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authForgotPasswordPost**](AuthApi.md#authForgotPasswordPost) | **POST** /auth/forgot-password | Forgot password
[**authLoginPost**](AuthApi.md#authLoginPost) | **POST** /auth/login | Login
[**authLogoutPost**](AuthApi.md#authLogoutPost) | **POST** /auth/logout | Logout
[**authRefreshTokensPost**](AuthApi.md#authRefreshTokensPost) | **POST** /auth/refresh-tokens | Refresh auth tokens
[**authRegisterPost**](AuthApi.md#authRegisterPost) | **POST** /auth/register | Register as user
[**authResetPasswordPost**](AuthApi.md#authResetPasswordPost) | **POST** /auth/reset-password | Reset password



## authForgotPasswordPost

> authForgotPasswordPost(body4)

Forgot password

An email will be sent to reset password.

### Example

```javascript
import SprintService from 'sprint_service';

let apiInstance = new SprintService.AuthApi();
let body4 = new SprintService.Body4(); // Body4 | 
apiInstance.authForgotPasswordPost(body4).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body4** | [**Body4**](Body4.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authLoginPost

> InlineResponse201 authLoginPost(body1)

Login

### Example

```javascript
import SprintService from 'sprint_service';

let apiInstance = new SprintService.AuthApi();
let body1 = new SprintService.Body1(); // Body1 | 
apiInstance.authLoginPost(body1).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body1** | [**Body1**](Body1.md)|  | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authLogoutPost

> authLogoutPost(body2)

Logout

### Example

```javascript
import SprintService from 'sprint_service';

let apiInstance = new SprintService.AuthApi();
let body2 = new SprintService.Body2(); // Body2 | 
apiInstance.authLogoutPost(body2).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body2** | [**Body2**](Body2.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authRefreshTokensPost

> AuthTokens authRefreshTokensPost(body3)

Refresh auth tokens

### Example

```javascript
import SprintService from 'sprint_service';

let apiInstance = new SprintService.AuthApi();
let body3 = new SprintService.Body3(); // Body3 | 
apiInstance.authRefreshTokensPost(body3).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body3** | [**Body3**](Body3.md)|  | 

### Return type

[**AuthTokens**](AuthTokens.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authRegisterPost

> InlineResponse201 authRegisterPost(body)

Register as user

### Example

```javascript
import SprintService from 'sprint_service';

let apiInstance = new SprintService.AuthApi();
let body = new SprintService.Body(); // Body | 
apiInstance.authRegisterPost(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


## authResetPasswordPost

> authResetPasswordPost(token, body5)

Reset password

### Example

```javascript
import SprintService from 'sprint_service';

let apiInstance = new SprintService.AuthApi();
let token = "token_example"; // String | The reset password token
let body5 = new SprintService.Body5(); // Body5 | 
apiInstance.authResetPasswordPost(token, body5).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The reset password token | 
 **body5** | [**Body5**](Body5.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

