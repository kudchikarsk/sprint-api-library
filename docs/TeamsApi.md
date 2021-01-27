# SprintService.TeamsApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamsGet**](TeamsApi.md#teamsGet) | **GET** /teams | Get all teams
[**teamsIdAcceptInviteePost**](TeamsApi.md#teamsIdAcceptInviteePost) | **POST** /teams/{id}/accept/invitee | Accept a team invitee
[**teamsIdDelete**](TeamsApi.md#teamsIdDelete) | **DELETE** /teams/{id} | Delete a team
[**teamsIdGet**](TeamsApi.md#teamsIdGet) | **GET** /teams/{id} | Get a team
[**teamsIdInviteMemberIdDelete**](TeamsApi.md#teamsIdInviteMemberIdDelete) | **DELETE** /teams/{id}/invite/{memberId} | Remove a team member
[**teamsIdInviteMemberIdPost**](TeamsApi.md#teamsIdInviteMemberIdPost) | **POST** /teams/{id}/invite/{memberId} | Invite a team member
[**teamsIdPatch**](TeamsApi.md#teamsIdPatch) | **PATCH** /teams/{id} | Update a team
[**teamsPost**](TeamsApi.md#teamsPost) | **POST** /teams | Create a team



## teamsGet

> InlineResponse2002 teamsGet(opts)

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

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## teamsIdAcceptInviteePost

> teamsIdAcceptInviteePost(id, memberId)

Accept a team invitee

User can accept team invitee

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.TeamsApi();
let id = "id_example"; // String | Team id
let memberId = "memberId_example"; // String | User id to invite
apiInstance.teamsIdAcceptInviteePost(id, memberId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Team id | 
 **memberId** | **String**| User id to invite | 

### Return type

null (empty response body)

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


## teamsIdInviteMemberIdDelete

> teamsIdInviteMemberIdDelete(id, memberId)

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
let memberId = "memberId_example"; // String | User id to invite
apiInstance.teamsIdInviteMemberIdDelete(id, memberId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Team id | 
 **memberId** | **String**| User id to invite | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## teamsIdInviteMemberIdPost

> teamsIdInviteMemberIdPost(id, memberId)

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
let memberId = "memberId_example"; // String | User id to invite
apiInstance.teamsIdInviteMemberIdPost(id, memberId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Team id | 
 **memberId** | **String**| User id to invite | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## teamsIdPatch

> Team teamsIdPatch(id, Body10)

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
let Body10 = new SprintService.Body10(); // Body10 | 
apiInstance.teamsIdPatch(id, Body10).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Team id | 
 **Body10** | [**Body10**](Body10.md)|  | 

### Return type

[**Team**](Team.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## teamsPost

> Team teamsPost(Body9)

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
let Body9 = new SprintService.Body9(); // Body9 | 
apiInstance.teamsPost(Body9).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Body9** | [**Body9**](Body9.md)|  | 

### Return type

[**Team**](Team.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

