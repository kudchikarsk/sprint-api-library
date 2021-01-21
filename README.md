# sprint_service

SprintService - JavaScript client for sprint_service
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.6.0
- Package version: 1.6.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install sprint_service --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your sprint_service from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SprintService = require('sprint_service');


var api = new SprintService.AuthApi()
var Body4 = new SprintService.Body4(); // {Body4} 
api.authForgotPasswordPost(Body4).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:3000/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SprintService.AuthApi* | [**authForgotPasswordPost**](docs/AuthApi.md#authForgotPasswordPost) | **POST** /auth/forgot-password | Forgot password
*SprintService.AuthApi* | [**authLoginPost**](docs/AuthApi.md#authLoginPost) | **POST** /auth/login | Login
*SprintService.AuthApi* | [**authLogoutPost**](docs/AuthApi.md#authLogoutPost) | **POST** /auth/logout | Logout
*SprintService.AuthApi* | [**authRefreshTokensPost**](docs/AuthApi.md#authRefreshTokensPost) | **POST** /auth/refresh-tokens | Refresh auth tokens
*SprintService.AuthApi* | [**authRegisterPost**](docs/AuthApi.md#authRegisterPost) | **POST** /auth/register | Register as user
*SprintService.AuthApi* | [**authResetPasswordPost**](docs/AuthApi.md#authResetPasswordPost) | **POST** /auth/reset-password | Reset password
*SprintService.BacklogsApi* | [**backlogsGet**](docs/BacklogsApi.md#backlogsGet) | **GET** /backlogs | Get all backlogs
*SprintService.BacklogsApi* | [**backlogsIdDelete**](docs/BacklogsApi.md#backlogsIdDelete) | **DELETE** /backlogs/{id} | Delete a backlog
*SprintService.BacklogsApi* | [**backlogsIdGet**](docs/BacklogsApi.md#backlogsIdGet) | **GET** /backlogs/{id} | Get a backlog
*SprintService.BacklogsApi* | [**backlogsIdPatch**](docs/BacklogsApi.md#backlogsIdPatch) | **PATCH** /backlogs/{id} | Update a backlog
*SprintService.BacklogsApi* | [**backlogsPost**](docs/BacklogsApi.md#backlogsPost) | **POST** /backlogs | Create a backlog
*SprintService.TasksApi* | [**tasksPost**](docs/TasksApi.md#tasksPost) | **POST** /tasks | Create a task event
*SprintService.TeamsApi* | [**teamsGet**](docs/TeamsApi.md#teamsGet) | **GET** /teams | Get all teams
*SprintService.TeamsApi* | [**teamsIdDelete**](docs/TeamsApi.md#teamsIdDelete) | **DELETE** /teams/{id} | Delete a team
*SprintService.TeamsApi* | [**teamsIdGet**](docs/TeamsApi.md#teamsIdGet) | **GET** /teams/{id} | Get a team
*SprintService.TeamsApi* | [**teamsIdPatch**](docs/TeamsApi.md#teamsIdPatch) | **PATCH** /teams/{id} | Update a team
*SprintService.TeamsApi* | [**teamsPost**](docs/TeamsApi.md#teamsPost) | **POST** /teams | Create a team
*SprintService.UsersApi* | [**usersGet**](docs/UsersApi.md#usersGet) | **GET** /users | Get all users
*SprintService.UsersApi* | [**usersIdDelete**](docs/UsersApi.md#usersIdDelete) | **DELETE** /users/{id} | Delete a user
*SprintService.UsersApi* | [**usersIdGet**](docs/UsersApi.md#usersIdGet) | **GET** /users/{id} | Get a user
*SprintService.UsersApi* | [**usersIdPatch**](docs/UsersApi.md#usersIdPatch) | **PATCH** /users/{id} | Update a user
*SprintService.UsersApi* | [**usersPost**](docs/UsersApi.md#usersPost) | **POST** /users | Create a user


## Documentation for Models

 - [SprintService.AuthTokens](docs/AuthTokens.md)
 - [SprintService.Backlog](docs/Backlog.md)
 - [SprintService.Body](docs/Body.md)
 - [SprintService.Body1](docs/Body1.md)
 - [SprintService.Body10](docs/Body10.md)
 - [SprintService.Body11](docs/Body11.md)
 - [SprintService.Body12](docs/Body12.md)
 - [SprintService.Body2](docs/Body2.md)
 - [SprintService.Body3](docs/Body3.md)
 - [SprintService.Body4](docs/Body4.md)
 - [SprintService.Body5](docs/Body5.md)
 - [SprintService.Body6](docs/Body6.md)
 - [SprintService.Body7](docs/Body7.md)
 - [SprintService.Body8](docs/Body8.md)
 - [SprintService.Body9](docs/Body9.md)
 - [SprintService.Error](docs/Error.md)
 - [SprintService.InlineResponse200](docs/InlineResponse200.md)
 - [SprintService.InlineResponse2001](docs/InlineResponse2001.md)
 - [SprintService.InlineResponse2002](docs/InlineResponse2002.md)
 - [SprintService.InlineResponse201](docs/InlineResponse201.md)
 - [SprintService.Task](docs/Task.md)
 - [SprintService.TaskEvent](docs/TaskEvent.md)
 - [SprintService.Team](docs/Team.md)
 - [SprintService.Token](docs/Token.md)
 - [SprintService.User](docs/User.md)


## Documentation for Authorization



### bearerAuth

- **Type**: Bearer authentication (JWT)

