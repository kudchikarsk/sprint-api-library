# SprintService.WidgetsApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**widgetsGet**](WidgetsApi.md#widgetsGet) | **GET** /widgets | Get all widgets
[**widgetsIdDelete**](WidgetsApi.md#widgetsIdDelete) | **DELETE** /widgets/{id} | Delete a widget
[**widgetsIdGet**](WidgetsApi.md#widgetsIdGet) | **GET** /widgets/{id} | Get a widget
[**widgetsIdPatch**](WidgetsApi.md#widgetsIdPatch) | **PATCH** /widgets/{id} | Update a widget
[**widgetsPost**](WidgetsApi.md#widgetsPost) | **POST** /widgets | Create a widget



## widgetsGet

> InlineResponse2008 widgetsGet(opts)

Get all widgets

Logged in widget can retrieve all widgets.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.WidgetsApi();
let opts = {
  'sortBy': "sortBy_example", // String | sort by query in the form of field:desc/asc (ex. name:asc)
  'limit': 56, // Number | Maximum number of widgets
  'page': 1 // Number | Page number
};
apiInstance.widgetsGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sortBy** | **String**| sort by query in the form of field:desc/asc (ex. name:asc) | [optional] 
 **limit** | **Number**| Maximum number of widgets | [optional] 
 **page** | **Number**| Page number | [optional] [default to 1]

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## widgetsIdDelete

> widgetsIdDelete(id)

Delete a widget

Logged in widgets can delete only themselves. Only admins can delete other widgets.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.WidgetsApi();
let id = "id_example"; // String | Widget id
apiInstance.widgetsIdDelete(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Widget id | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## widgetsIdGet

> Widget widgetsIdGet(id)

Get a widget

Logged in widget can fetch any widget information.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.WidgetsApi();
let id = "id_example"; // String | Widget id
apiInstance.widgetsIdGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Widget id | 

### Return type

[**Widget**](Widget.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## widgetsIdPatch

> Widget widgetsIdPatch(id, Body21)

Update a widget

Logged in widgets can only update their own information. Only admins can update other widgets.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.WidgetsApi();
let id = "id_example"; // String | Widget id
let Body21 = new SprintService.Body21(); // Body21 | 
apiInstance.widgetsIdPatch(id, Body21).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Widget id | 
 **Body21** | [**Body21**](Body21.md)|  | 

### Return type

[**Widget**](Widget.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## widgetsPost

> Widget widgetsPost(Body20)

Create a widget

Only admins can create other widgets.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.WidgetsApi();
let Body20 = new SprintService.Body20(); // Body20 | 
apiInstance.widgetsPost(Body20).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Body20** | [**Body20**](Body20.md)|  | 

### Return type

[**Widget**](Widget.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

