# SprintService.TeamsApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamsGet**](TeamsApi.md#teamsGet) | **GET** /teams | Get all teams
[**teamsIdDelete**](TeamsApi.md#teamsIdDelete) | **DELETE** /teams/{id} | Delete a team
[**teamsIdGet**](TeamsApi.md#teamsIdGet) | **GET** /teams/{id} | Get a team
[**teamsIdPatch**](TeamsApi.md#teamsIdPatch) | **PATCH** /teams/{id} | Update a team
[**teamsPost**](TeamsApi.md#teamsPost) | **POST** /teams | Create a team

<a name="teamsGet"></a>
# **teamsGet**
> InlineResponse2001 teamsGet(opts)

Get all teams

Only admins can retrieve all teams.

### Example
```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;


let apiInstance = new SprintService.TeamsApi();
let opts = { 
  'name': "name_example", // String | Team name *
  'sortBy': "sortBy_example", // String | sort by query in the form of field:desc/asc (ex. name:asc)
  'limit': 56, // Number | Maximum number of teams
  'page': 1 // Number | Page number
};
apiInstance.teamsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="teamsIdDelete"></a>
# **teamsIdDelete**
> teamsIdDelete(id)

Delete a team

Logged in teams can delete only themselves. Only admins can delete other teams.

### Example
```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;


let apiInstance = new SprintService.TeamsApi();
let id = "id_example"; // String | Team id

apiInstance.teamsIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
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

<a name="teamsIdGet"></a>
# **teamsIdGet**
> Team teamsIdGet(id)

Get a team

Logged in teams can fetch only their own team information.

### Example
```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;


let apiInstance = new SprintService.TeamsApi();
let id = "id_example"; // String | Team id

apiInstance.teamsIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

<a name="teamsIdPatch"></a>
# **teamsIdPatch**
> Team teamsIdPatch(bodyid)

Update a team

Logged in teams can only update their own information. Only admins can update other teams.

### Example
```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;


let apiInstance = new SprintService.TeamsApi();
let body = new SprintService.Body9(); // Body9 | 
let id = "id_example"; // String | Team id

apiInstance.teamsIdPatch(bodyid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body9**](Body9.md)|  | 
 **id** | **String**| Team id | 

### Return type

[**Team**](Team.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamsPost"></a>
# **teamsPost**
> Team teamsPost(body)

Create a team

User can create teams.

### Example
```javascript
import SprintService from 'sprint_service';
let defaultClient = SprintService.ApiClient.instance;


let apiInstance = new SprintService.TeamsApi();
let body = new SprintService.Body8(); // Body8 | 

apiInstance.teamsPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body8**](Body8.md)|  | 

### Return type

[**Team**](Team.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

