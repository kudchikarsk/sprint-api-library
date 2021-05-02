# SprintService.TasksApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tasksBacklogBacklogIdGet**](TasksApi.md#tasksBacklogBacklogIdGet) | **GET** /tasks/backlog/{backlogId} | Get all tasks
[**tasksBulkPost**](TasksApi.md#tasksBulkPost) | **POST** /tasks/bulk | Create a task events
[**tasksDoingGet**](TasksApi.md#tasksDoingGet) | **GET** /tasks/doing | Get all tasks
[**tasksDoneGet**](TasksApi.md#tasksDoneGet) | **GET** /tasks/done | Get all tasks
[**tasksPost**](TasksApi.md#tasksPost) | **POST** /tasks | Create a task event
[**tasksTodoGet**](TasksApi.md#tasksTodoGet) | **GET** /tasks/todo | Get all tasks



## tasksBacklogBacklogIdGet

> InlineResponse2005 tasksBacklogBacklogIdGet(backlogId, opts)

Get all tasks

User can retrieve assigned tasks.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.TasksApi();
let backlogId = "backlogId_example"; // String | task backlogId
let opts = {
  'title': "title_example", // String | task title
  'description': "description_example", // String | task description
  'state': "state_example", // String | task state
  'status': "status_example", // String | task status
  'sortBy': "sortBy_example", // String | sort by query in the form of field:desc/asc (ex. name:asc)
  'limit': 56, // Number | Maximum number of tasks
  'page': 1 // Number | Page number
};
apiInstance.tasksBacklogBacklogIdGet(backlogId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backlogId** | **String**| task backlogId | 
 **title** | **String**| task title | [optional] 
 **description** | **String**| task description | [optional] 
 **state** | **String**| task state | [optional] 
 **status** | **String**| task status | [optional] 
 **sortBy** | **String**| sort by query in the form of field:desc/asc (ex. name:asc) | [optional] 
 **limit** | **Number**| Maximum number of tasks | [optional] 
 **page** | **Number**| Page number | [optional] [default to 1]

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tasksBulkPost

> TaskEvent tasksBulkPost(Body14)

Create a task events

User can create task events.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.TasksApi();
let Body14 = new SprintService.Body14(); // Body14 | 
apiInstance.tasksBulkPost(Body14).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Body14** | [**Body14**](Body14.md)|  | 

### Return type

[**TaskEvent**](TaskEvent.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## tasksDoingGet

> InlineResponse2004 tasksDoingGet(teamId, opts)

Get all tasks

User can retrieve assigned tasks.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.TasksApi();
let teamId = "teamId_example"; // String | task teamId
let opts = {
  'title': "title_example", // String | task title
  'description': "description_example", // String | task description
  'state': "state_example", // String | task state
  'sortBy': "sortBy_example", // String | sort by query in the form of field:desc/asc (ex. name:asc)
  'limit': 56, // Number | Maximum number of tasks
  'page': 1 // Number | Page number
};
apiInstance.tasksDoingGet(teamId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| task teamId | 
 **title** | **String**| task title | [optional] 
 **description** | **String**| task description | [optional] 
 **state** | **String**| task state | [optional] 
 **sortBy** | **String**| sort by query in the form of field:desc/asc (ex. name:asc) | [optional] 
 **limit** | **Number**| Maximum number of tasks | [optional] 
 **page** | **Number**| Page number | [optional] [default to 1]

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tasksDoneGet

> InlineResponse2004 tasksDoneGet(teamId, opts)

Get all tasks

User can retrieve assigned tasks.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.TasksApi();
let teamId = "teamId_example"; // String | task teamId
let opts = {
  'title': "title_example", // String | task title
  'description': "description_example", // String | task description
  'state': "state_example", // String | task state
  'sortBy': "sortBy_example", // String | sort by query in the form of field:desc/asc (ex. name:asc)
  'limit': 56, // Number | Maximum number of tasks
  'page': 1 // Number | Page number
};
apiInstance.tasksDoneGet(teamId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| task teamId | 
 **title** | **String**| task title | [optional] 
 **description** | **String**| task description | [optional] 
 **state** | **String**| task state | [optional] 
 **sortBy** | **String**| sort by query in the form of field:desc/asc (ex. name:asc) | [optional] 
 **limit** | **Number**| Maximum number of tasks | [optional] 
 **page** | **Number**| Page number | [optional] [default to 1]

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tasksPost

> TaskEvent tasksPost(Body15)

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
let Body15 = new SprintService.Body15(); // Body15 | 
apiInstance.tasksPost(Body15).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Body15** | [**Body15**](Body15.md)|  | 

### Return type

[**TaskEvent**](TaskEvent.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## tasksTodoGet

> InlineResponse2004 tasksTodoGet(teamId, opts)

Get all tasks

User can retrieve assigned tasks.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.TasksApi();
let teamId = "teamId_example"; // String | task teamId
let opts = {
  'title': "title_example", // String | task title
  'description': "description_example", // String | task description
  'state': "state_example", // String | task state
  'sortBy': "sortBy_example", // String | sort by query in the form of field:desc/asc (ex. name:asc)
  'limit': 56, // Number | Maximum number of tasks
  'page': 1 // Number | Page number
};
apiInstance.tasksTodoGet(teamId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| task teamId | 
 **title** | **String**| task title | [optional] 
 **description** | **String**| task description | [optional] 
 **state** | **String**| task state | [optional] 
 **sortBy** | **String**| sort by query in the form of field:desc/asc (ex. name:asc) | [optional] 
 **limit** | **Number**| Maximum number of tasks | [optional] 
 **page** | **Number**| Page number | [optional] [default to 1]

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

