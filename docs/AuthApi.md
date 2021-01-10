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

> authForgotPasswordPost(Body4)

Forgot password

An email will be sent to reset password.

### Example

```javascript
import SprintService from 'sprint_service';

let apiInstance = new SprintService.AuthApi();
let Body4 = new SprintService.Body4(); // Body4 | 
apiInstance.authForgotPasswordPost(Body4).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Body4** | [**Body4**](Body4.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authLoginPost

> InlineResponse201 authLoginPost(Body1)

Login

### Example

```javascript
import SprintService from 'sprint_service';

let apiInstance = new SprintService.AuthApi();
let Body1 = new SprintService.Body1(); // Body1 | 
apiInstance.authLoginPost(Body1).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Body1** | [**Body1**](Body1.md)|  | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authLogoutPost

> authLogoutPost(Body2)

Logout

### Example

```javascript
import SprintService from 'sprint_service';

let apiInstance = new SprintService.AuthApi();
let Body2 = new SprintService.Body2(); // Body2 | 
apiInstance.authLogoutPost(Body2).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Body2** | [**Body2**](Body2.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authRefreshTokensPost

> AuthTokens authRefreshTokensPost(Body3)

Refresh auth tokens

### Example

```javascript
import SprintService from 'sprint_service';

let apiInstance = new SprintService.AuthApi();
let Body3 = new SprintService.Body3(); // Body3 | 
apiInstance.authRefreshTokensPost(Body3).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Body3** | [**Body3**](Body3.md)|  | 

### Return type

[**AuthTokens**](AuthTokens.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authRegisterPost

> InlineResponse201 authRegisterPost(Body)

Register as user

### Example

```javascript
import SprintService from 'sprint_service';

let apiInstance = new SprintService.AuthApi();
let Body = new SprintService.Body(); // Body | 
apiInstance.authRegisterPost(Body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Body** | [**Body**](Body.md)|  | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authResetPasswordPost

> authResetPasswordPost(token, Body5)

Reset password

### Example

```javascript
import SprintService from 'sprint_service';

let apiInstance = new SprintService.AuthApi();
let token = "token_example"; // String | The reset password token
let Body5 = new SprintService.Body5(); // Body5 | 
apiInstance.authResetPasswordPost(token, Body5).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The reset password token | 
 **Body5** | [**Body5**](Body5.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

