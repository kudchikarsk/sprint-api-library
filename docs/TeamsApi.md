# SprintService.TeamsApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamsGet**](TeamsApi.md#teamsGet) | **GET** /teams | Get all teams
[**teamsIdDelete**](TeamsApi.md#teamsIdDelete) | **DELETE** /teams/{id} | Delete a team
[**teamsIdGet**](TeamsApi.md#teamsIdGet) | **GET** /teams/{id} | Get a team
[**teamsIdInviteUserIdDelete**](TeamsApi.md#teamsIdInviteUserIdDelete) | **DELETE** /teams/{id}/invite/{userId} | Remove a team member
[**teamsIdInviteUserIdPost**](TeamsApi.md#teamsIdInviteUserIdPost) | **POST** /teams/{id}/invite/{userId} | Invite a team member
[**teamsIdPatch**](TeamsApi.md#teamsIdPatch) | **PATCH** /teams/{id} | Update a team
[**teamsPost**](TeamsApi.md#teamsPost) | **POST** /teams | Create a team



## teamsGet

> InlineResponse2003 teamsGet(opts)

Get all teams

Only admins can retrieve all teams.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.TeamsApi();
let opts = {
  'name': "name_example", // String | Team name *
  'sortBy': "sortBy_example", // String | sort by query in the form of field:desc/asc (ex. name:asc)
  'limit': 56, // Number | Maximum number of teams
  'page': 1 // Number | Page number
};
apiInstance.teamsGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Team name * | [optional] 
 **sortBy** | **String**| sort by query in the form of field:desc/asc (ex. name:asc) | [optional] 
 **limit** | **Number**| Maximum number of teams | [optional] 
 **page** | **Number**| Page number | [optional] [default to 1]

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## teamsIdDelete

> teamsIdDelete(id)

Delete a team

Logged in teams can delete only themselves. Only admins can delete other teams.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.TeamsApi();
let id = "id_example"; // String | Team id
apiInstance.teamsIdDelete(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Team id | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## teamsIdGet

> Team teamsIdGet(id)

Get a team

Logged in teams can fetch only their own team information.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.TeamsApi();
let id = "id_example"; // String | Team id
apiInstance.teamsIdGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Team id | 

### Return type

[**Team**](Team.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## teamsIdInviteUserIdDelete

> teamsIdInviteUserIdDelete(id, userId)

Remove a team member

User can remove a team member

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.TeamsApi();
let id = "id_example"; // String | Team id
let userId = "userId_example"; // String | User id to invite
apiInstance.teamsIdInviteUserIdDelete(id, userId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Team id | 
 **userId** | **String**| User id to invite | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## teamsIdInviteUserIdPost

> teamsIdInviteUserIdPost(id, userId)

Invite a team member

User can invite team members

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.TeamsApi();
let id = "id_example"; // String | Team id
let userId = "userId_example"; // String | User id to invite
apiInstance.teamsIdInviteUserIdPost(id, userId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Team id | 
 **userId** | **String**| User id to invite | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## teamsIdPatch

> Team teamsIdPatch(id, Body11)

Update a team

Logged in teams can only update their own information. Only admins can update other teams.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.TeamsApi();
let id = "id_example"; // String | Team id
let Body11 = new SprintService.Body11(); // Body11 | 
apiInstance.teamsIdPatch(id, Body11).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Team id | 
 **Body11** | [**Body11**](Body11.md)|  | 

### Return type

[**Team**](Team.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## teamsPost

> Team teamsPost(Body10)

Create a team

User can create teams.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.TeamsApi();
let Body10 = new SprintService.Body10(); // Body10 | 
apiInstance.teamsPost(Body10).then((data) => {
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

[**Team**](Team.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

