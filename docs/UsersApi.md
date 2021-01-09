# SprintService.UsersApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersGet**](UsersApi.md#usersGet) | **GET** /users | Get all users
[**usersIdDelete**](UsersApi.md#usersIdDelete) | **DELETE** /users/{id} | Delete a user
[**usersIdGet**](UsersApi.md#usersIdGet) | **GET** /users/{id} | Get a user
[**usersIdPatch**](UsersApi.md#usersIdPatch) | **PATCH** /users/{id} | Update a user
[**usersPost**](UsersApi.md#usersPost) | **POST** /users | Create a user

<a name="usersGet"></a>
# **usersGet**
> InlineResponse2002 usersGet(opts)

Get all users

Only admins can retrieve all users.

### Example
```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;


let apiInstance = new SprintService.UsersApi();
let opts = { 
  'name': "name_example", // String | User name
  'role': "role_example", // String | User role
  'sortBy': "sortBy_example", // String | sort by query in the form of field:desc/asc (ex. name:asc)
  'limit': 56, // Number | Maximum number of users
  'page': 1 // Number | Page number
};
apiInstance.usersGet(opts, (error, data, response) => {
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
 **name** | **String**| User name | [optional] 
 **role** | **String**| User role | [optional] 
 **sortBy** | **String**| sort by query in the form of field:desc/asc (ex. name:asc) | [optional] 
 **limit** | **Number**| Maximum number of users | [optional] 
 **page** | **Number**| Page number | [optional] [default to 1]

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersIdDelete"></a>
# **usersIdDelete**
> usersIdDelete(id)

Delete a user

Logged in users can delete only themselves. Only admins can delete other users.

### Example
```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;


let apiInstance = new SprintService.UsersApi();
let id = "id_example"; // String | User id

apiInstance.usersIdDelete(id, (error, data, response) => {
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
 **id** | **String**| User id | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersIdGet"></a>
# **usersIdGet**
> User usersIdGet(id)

Get a user

Logged in users can fetch only their own user information. Only admins can fetch other users.

### Example
```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;


let apiInstance = new SprintService.UsersApi();
let id = "id_example"; // String | User id

apiInstance.usersIdGet(id, (error, data, response) => {
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
 **id** | **String**| User id | 

### Return type

[**User**](User.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersIdPatch"></a>
# **usersIdPatch**
> User usersIdPatch(bodyid)

Update a user

Logged in users can only update their own information. Only admins can update other users.

### Example
```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;


let apiInstance = new SprintService.UsersApi();
let body = new SprintService.Body11(); // Body11 | 
let id = "id_example"; // String | User id

apiInstance.usersIdPatch(bodyid, (error, data, response) => {
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
 **body** | [**Body11**](Body11.md)|  | 
 **id** | **String**| User id | 

### Return type

[**User**](User.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersPost"></a>
# **usersPost**
> User usersPost(body)

Create a user

Only admins can create other users.

### Example
```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;


let apiInstance = new SprintService.UsersApi();
let body = new SprintService.Body10(); // Body10 | 

apiInstance.usersPost(body, (error, data, response) => {
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
 **body** | [**Body10**](Body10.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

