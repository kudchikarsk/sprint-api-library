# SprintService.TasksApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tasksPost**](TasksApi.md#tasksPost) | **POST** /tasks | Create a task event



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

