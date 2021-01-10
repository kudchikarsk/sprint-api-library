# SprintService.BacklogsApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backlogsGet**](BacklogsApi.md#backlogsGet) | **GET** /backlogs | Get all backlogs
[**backlogsIdDelete**](BacklogsApi.md#backlogsIdDelete) | **DELETE** /backlogs/{id} | Delete a backlog
[**backlogsIdGet**](BacklogsApi.md#backlogsIdGet) | **GET** /backlogs/{id} | Get a backlog
[**backlogsIdPatch**](BacklogsApi.md#backlogsIdPatch) | **PATCH** /backlogs/{id} | Update a backlog
[**backlogsPost**](BacklogsApi.md#backlogsPost) | **POST** /backlogs | Create a backlog



## backlogsGet

> InlineResponse200 backlogsGet(opts)

Get all backlogs

Only admins can retrieve all backlogs.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.BacklogsApi();
let opts = {
  'name': "name_example", // String | Backlog name *
  'sortBy': "sortBy_example", // String | sort by query in the form of field:desc/asc (ex. name:asc)
  'limit': 56, // Number | Maximum number of backlogs
  'page': 1 // Number | Page number
};
apiInstance.backlogsGet(opts, (error, data, response) => {
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
 **name** | **String**| Backlog name * | [optional] 
 **sortBy** | **String**| sort by query in the form of field:desc/asc (ex. name:asc) | [optional] 
 **limit** | **Number**| Maximum number of backlogs | [optional] 
 **page** | **Number**| Page number | [optional] [default to 1]

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## backlogsIdDelete

> backlogsIdDelete(id)

Delete a backlog

Logged in backlogs can delete only themselves. Only admins can delete other backlogs.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.BacklogsApi();
let id = "id_example"; // String | Backlog id
apiInstance.backlogsIdDelete(id, (error, data, response) => {
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
 **id** | **String**| Backlog id | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## backlogsIdGet

> Backlog backlogsIdGet(id)

Get a backlog

Logged in backlogs can fetch only their own backlog information.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.BacklogsApi();
let id = "id_example"; // String | Backlog id
apiInstance.backlogsIdGet(id, (error, data, response) => {
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
 **id** | **String**| Backlog id | 

### Return type

[**Backlog**](Backlog.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## backlogsIdPatch

> Backlog backlogsIdPatch(id, body7)

Update a backlog

Logged in backlogs can only update their own information. Only admins can update other backlogs.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.BacklogsApi();
let id = "id_example"; // String | Backlog id
let body7 = new SprintService.Body7(); // Body7 | 
apiInstance.backlogsIdPatch(id, body7, (error, data, response) => {
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
 **id** | **String**| Backlog id | 
 **body7** | [**Body7**](Body7.md)|  | 

### Return type

[**Backlog**](Backlog.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## backlogsPost

> Backlog backlogsPost(body6)

Create a backlog

User can create backlogs.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.BacklogsApi();
let body6 = new SprintService.Body6(); // Body6 | 
apiInstance.backlogsPost(body6, (error, data, response) => {
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
 **body6** | [**Body6**](Body6.md)|  | 

### Return type

[**Backlog**](Backlog.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

