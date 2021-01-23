# SprintService.TasksApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tasksGet**](TasksApi.md#tasksGet) | **GET** /tasks | Get all tasks
[**tasksPost**](TasksApi.md#tasksPost) | **POST** /tasks | Create a task event



## tasksGet

> InlineResponse2001 tasksGet(backlogId, opts)

Get all tasks

User can retrieve all tasks for a backlog.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.TasksApi();
let backlogId = "backlogId_example"; // String | Backlog id
let opts = {
  'name': "name_example", // String | Backlog name
  'sortBy': "sortBy_example", // String | sort by query in the form of field:desc/asc (ex. name:asc)
  'limit': 56, // Number | Maximum number of tasks
  'page': 1 // Number | Page number
};
apiInstance.tasksGet(backlogId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backlogId** | **String**| Backlog id | 
 **name** | **String**| Backlog name | [optional] 
 **sortBy** | **String**| sort by query in the form of field:desc/asc (ex. name:asc) | [optional] 
 **limit** | **Number**| Maximum number of tasks | [optional] 
 **page** | **Number**| Page number | [optional] [default to 1]

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tasksPost

> TaskEvent tasksPost(Body8)

Create a task event

User can create task event.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.TasksApi();
let Body8 = new SprintService.Body8(); // Body8 | 
apiInstance.tasksPost(Body8).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Body8** | [**Body8**](Body8.md)|  | 

### Return type

[**TaskEvent**](TaskEvent.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

