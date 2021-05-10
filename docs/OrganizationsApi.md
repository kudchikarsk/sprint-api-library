# SprintService.OrganizationsApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organizationsGet**](OrganizationsApi.md#organizationsGet) | **GET** /organizations | Get all organizations
[**organizationsIdDelete**](OrganizationsApi.md#organizationsIdDelete) | **DELETE** /organizations/{id} | Delete a organization
[**organizationsIdGet**](OrganizationsApi.md#organizationsIdGet) | **GET** /organizations/{id} | Get a organization
[**organizationsIdInviteUserIdDelete**](OrganizationsApi.md#organizationsIdInviteUserIdDelete) | **DELETE** /organizations/{id}/invite/{userId} | Remove a organization member
[**organizationsIdInviteUserIdPost**](OrganizationsApi.md#organizationsIdInviteUserIdPost) | **POST** /organizations/{id}/invite/{userId} | Invite a organization member
[**organizationsIdPatch**](OrganizationsApi.md#organizationsIdPatch) | **PATCH** /organizations/{id} | Update a organization
[**organizationsPost**](OrganizationsApi.md#organizationsPost) | **POST** /organizations | Create a organization



## organizationsGet

> InlineResponse2003 organizationsGet(opts)

Get all organizations

Only admins can retrieve all organizations.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.OrganizationsApi();
let opts = {
  'name': "name_example", // String | Organization name *
  'sortBy': "sortBy_example", // String | sort by query in the form of field:desc/asc (ex. name:asc)
  'limit': 56, // Number | Maximum number of organizations
  'page': 1 // Number | Page number
};
apiInstance.organizationsGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Organization name * | [optional] 
 **sortBy** | **String**| sort by query in the form of field:desc/asc (ex. name:asc) | [optional] 
 **limit** | **Number**| Maximum number of organizations | [optional] 
 **page** | **Number**| Page number | [optional] [default to 1]

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## organizationsIdDelete

> organizationsIdDelete(id)

Delete a organization

Logged in organizations can delete only themselves. Only admins can delete other organizations.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.OrganizationsApi();
let id = "id_example"; // String | Organization id
apiInstance.organizationsIdDelete(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Organization id | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## organizationsIdGet

> Organization organizationsIdGet(id)

Get a organization

Logged in organizations can fetch only their own organization information.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.OrganizationsApi();
let id = "id_example"; // String | Organization id
apiInstance.organizationsIdGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Organization id | 

### Return type

[**Organization**](Organization.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## organizationsIdInviteUserIdDelete

> organizationsIdInviteUserIdDelete(id, userId)

Remove a organization member

User can remove a organization member

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.OrganizationsApi();
let id = "id_example"; // String | Organization id
let userId = "userId_example"; // String | User id to invite
apiInstance.organizationsIdInviteUserIdDelete(id, userId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Organization id | 
 **userId** | **String**| User id to invite | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## organizationsIdInviteUserIdPost

> organizationsIdInviteUserIdPost(id, userId)

Invite a organization member

User can invite organization members

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.OrganizationsApi();
let id = "id_example"; // String | Organization id
let userId = "userId_example"; // String | User id to invite
apiInstance.organizationsIdInviteUserIdPost(id, userId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Organization id | 
 **userId** | **String**| User id to invite | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## organizationsIdPatch

> Organization organizationsIdPatch(id, Body12)

Update a organization

Logged in organizations can only update their own information. Only admins can update other organizations.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.OrganizationsApi();
let id = "id_example"; // String | Organization id
let Body12 = new SprintService.Body12(); // Body12 | 
apiInstance.organizationsIdPatch(id, Body12).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Organization id | 
 **Body12** | [**Body12**](Body12.md)|  | 

### Return type

[**Organization**](Organization.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## organizationsPost

> Organization organizationsPost(Body11)

Create a organization

User can create organizations.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.OrganizationsApi();
let Body11 = new SprintService.Body11(); // Body11 | 
apiInstance.organizationsPost(Body11).then((data) => {
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

[**Organization**](Organization.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

