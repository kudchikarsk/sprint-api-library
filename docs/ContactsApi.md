# SprintService.ContactsApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contactsGet**](ContactsApi.md#contactsGet) | **GET** /contacts | Get all contacts
[**contactsIdDelete**](ContactsApi.md#contactsIdDelete) | **DELETE** /contacts/{id} | Delete a contact
[**contactsIdGet**](ContactsApi.md#contactsIdGet) | **GET** /contacts/{id} | Get a contact
[**contactsIdPatch**](ContactsApi.md#contactsIdPatch) | **PATCH** /contacts/{id} | Update a contact
[**contactsPost**](ContactsApi.md#contactsPost) | **POST** /contacts | Create a contact



## contactsGet

> InlineResponse2001 contactsGet(organizationId, opts)

Get all contacts

Logged in contact can retrieve all contacts.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.ContactsApi();
let organizationId = "organizationId_example"; // String | organization id
let opts = {
  'name': "name_example", // String | find contacts that start with name
  'sortBy': "sortBy_example", // String | sort by query in the form of field:desc/asc (ex. name:asc)
  'limit': 56, // Number | Maximum number of contacts
  'page': 1 // Number | Page number
};
apiInstance.contactsGet(organizationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| organization id | 
 **name** | **String**| find contacts that start with name | [optional] 
 **sortBy** | **String**| sort by query in the form of field:desc/asc (ex. name:asc) | [optional] 
 **limit** | **Number**| Maximum number of contacts | [optional] 
 **page** | **Number**| Page number | [optional] [default to 1]

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contactsIdDelete

> contactsIdDelete(id)

Delete a contact

Logged in contacts can delete only themselves. Only admins can delete other contacts.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.ContactsApi();
let id = "id_example"; // String | Contact id
apiInstance.contactsIdDelete(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Contact id | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contactsIdGet

> Contact contactsIdGet(id)

Get a contact

Logged in contact can fetch any contact information.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.ContactsApi();
let id = "id_example"; // String | Contact id
apiInstance.contactsIdGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Contact id | 

### Return type

[**Contact**](Contact.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contactsIdPatch

> Contact contactsIdPatch(id, body9)

Update a contact

Logged in contacts can only update their own information. Only admins can update other contacts.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.ContactsApi();
let id = "id_example"; // String | Contact id
let body9 = new SprintService.Body9(); // Body9 | 
apiInstance.contactsIdPatch(id, body9).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Contact id | 
 **body9** | [**Body9**](Body9.md)|  | 

### Return type

[**Contact**](Contact.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## contactsPost

> Contact contactsPost(body8)

Create a contact

Only admins can create other contacts.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.ContactsApi();
let body8 = new SprintService.Body8(); // Body8 | 
apiInstance.contactsPost(body8).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body8** | [**Body8**](Body8.md)|  | 

### Return type

[**Contact**](Contact.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

