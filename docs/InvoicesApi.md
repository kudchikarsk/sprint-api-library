# SprintService.InvoicesApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**invoicesBulkPost**](InvoicesApi.md#invoicesBulkPost) | **POST** /invoices/bulk | Create a invoice events
[**invoicesGet**](InvoicesApi.md#invoicesGet) | **GET** /invoices | Get all invoices
[**invoicesInvoiceIdGet**](InvoicesApi.md#invoicesInvoiceIdGet) | **GET** /invoices/{invoiceId} | Get all invoices
[**invoicesPost**](InvoicesApi.md#invoicesPost) | **POST** /invoices | Create a invoice event



## invoicesBulkPost

> InvoiceEvent invoicesBulkPost(Body8)

Create a invoice events

User can create invoice events.

### Example

```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SprintService.InvoicesApi();
let Body8 = new SprintService.Body8(); // Body8 | 
apiInstance.invoicesBulkPost(Body8).then((data) => {
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

[**InvoiceEvent**](InvoiceEvent.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## invoicesGet

> InlineResponse2001 invoicesGet(teamId, opts)

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
let teamId = "teamId_example"; // String | invoice teamId
let opts = {
  'name': "name_example", // String | invoice client name
  'status': "status_example", // String | invoice status
  'description': "description_example", // String | invoice project / description
  'sortBy': "sortBy_example", // String | sort by query in the form of field:desc/asc (ex. name:asc)
  'limit': 56, // Number | Maximum number of invoices
  'page': 1 // Number | Page number
};
apiInstance.invoicesGet(teamId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| invoice teamId | 
 **name** | **String**| invoice client name | [optional] 
 **status** | **String**| invoice status | [optional] 
 **description** | **String**| invoice project / description | [optional] 
 **sortBy** | **String**| sort by query in the form of field:desc/asc (ex. name:asc) | [optional] 
 **limit** | **Number**| Maximum number of invoices | [optional] 
 **page** | **Number**| Page number | [optional] [default to 1]

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

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

> InvoiceEvent invoicesPost(Body9)

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
let Body9 = new SprintService.Body9(); // Body9 | 
apiInstance.invoicesPost(Body9).then((data) => {
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

[**InvoiceEvent**](InvoiceEvent.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

