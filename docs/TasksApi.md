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

> InlineResponse2003 tasksBacklogBacklogIdGet(backlogId, opts)

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

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tasksBulkPost

> TaskEvent tasksBulkPost(Body10)

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
let Body10 = new SprintService.Body10(); // Body10 | 
apiInstance.tasksBulkPost(Body10).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Body10** | [**Body10**](Body10.md)|  | 

### Return type

[**TaskEvent**](TaskEvent.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## tasksDoingGet

> InlineResponse2002 tasksDoingGet(teamId, opts)

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

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tasksDoneGet

> InlineResponse2002 tasksDoneGet(teamId, opts)

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

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tasksPost

> TaskEvent tasksPost(Body11)

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
let Body11 = new SprintService.Body11(); // Body11 | 
apiInstance.tasksPost(Body11).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Body11** | [**Body11**](Body11.md)|  | 

### Return type

[**TaskEvent**](TaskEvent.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## tasksTodoGet

> InlineResponse2002 tasksTodoGet(teamId, opts)

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

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

