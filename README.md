![Bower version](https://img.shields.io/bower/v/purecloud-api.svg)

# Platform API Javascript Client

Docs can be found at [http://developer.mypurecloud.com/api/rest/client-libraries/javascript/latest/](http://developer.mypurecloud.com/api/rest/client-libraries/javascript/latest/)

* Install with [Bower](http://bower.io):
```
bower install purecloud-api
```
Source code [https://github.com/MyPureCloud/purecloud_api_sdk_javascript](https://github.com/MyPureCloud/purecloud_api_sdk_javascript)

# Using the Library
## Referencing the modules
For convenience, all modules are bundled together, but if your application only uses a small subset of features, you can reference those modules directly.

**_Note: JQuery > 1.5 is required_**

Including the full Library:
````
<script type="text/javascript" src="purecloud-api.js"></script>
````

Including only a subset.  It is important to note that PureCloud.core.js must be referenced first.
````
<script type="text/javascript" src="purecloudsession.js"></script>
<script type="text/javascript" src="usersapi.js"></script>
````


## Authenticating
Let the library handle the OAuth2 redirects for you.
```
var pureCloudSession = new PureCloudSession();
pureCloudSession.authorize('XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX','http://localhost:8085/examples/')
                .done(function(){
    //this method will be called once we have a valid authorization token
    // if we don't have one a redirect to login will be called and then after redirecting back here,
    // the done method will be called.
});
```

or if  you already have a bearer token, you can specify it using
```
var pureCloudSession = new PureCloudSession();
pureCloudSession.setAuthToken("MYTOKEN");
```


## Making Requests
Requests return the JQuery deferred object https://api.jquery.com/category/deferred-object/ so handlers can be registered to that response.
```
var usersapi = new UsersApi(pureCloudSession);
usersapi.getMe().done(function(userObject){
                                //successfully got the user object, do something with it here
                            }).error(function(){
                                //and error occurred getting /me
                            }).always(function(){
                                //this will be called for successes and failures
                            });
```
