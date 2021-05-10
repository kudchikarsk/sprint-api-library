# SprintService.InvoicesApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**invoicesGet**](InvoicesApi.md#invoicesGet) | **GET** /invoices | Get all invoices
[**invoicesInvoiceIdGet**](InvoicesApi.md#invoicesInvoiceIdGet) | **GET** /invoices/{invoiceId} | Get all invoices
[**invoicesPost**](InvoicesApi.md#invoicesPost) | **POST** /invoices | Create a invoice event



## invoicesGet

> InlineResponse2002 invoicesGet(organizationId, opts)

Get all invoices

Logged in invoice can retrieve all invoices.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.InvoicesApi();
let organizationId = "organizationId_example"; // String | invoice organizationId
let opts = {
  'name': "name_example", // String | invoice client name
  'status': "status_example", // String | invoice status
  'description': "description_example", // String | invoice project / description
  'sortBy': "sortBy_example", // String | sort by query in the form of field:desc/asc (ex. name:asc)
  'limit': 56, // Number | Maximum number of invoices
  'page': 1 // Number | Page number
};
apiInstance.invoicesGet(organizationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| invoice organizationId | 
 **name** | **String**| invoice client name | [optional] 
 **status** | **String**| invoice status | [optional] 
 **description** | **String**| invoice project / description | [optional] 
 **sortBy** | **String**| sort by query in the form of field:desc/asc (ex. name:asc) | [optional] 
 **limit** | **Number**| Maximum number of invoices | [optional] 
 **page** | **Number**| Page number | [optional] [default to 1]

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## invoicesInvoiceIdGet

> Invoice invoicesInvoiceIdGet(invoiceId)

Get all invoices

User can retrieve assigned invoices.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.InvoicesApi();
let invoiceId = "invoiceId_example"; // String | Invoice id
apiInstance.invoicesInvoiceIdGet(invoiceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceId** | **String**| Invoice id | 

### Return type

[**Invoice**](Invoice.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## invoicesPost

> InvoiceEvent invoicesPost(Body10)

Create a invoice event

User can create invoice event.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.InvoicesApi();
let Body10 = new SprintService.Body10(); // Body10 | 
apiInstance.invoicesPost(Body10).then((data) => {
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

[**InvoiceEvent**](InvoiceEvent.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

