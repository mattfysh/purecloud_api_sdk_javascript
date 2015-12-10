![Bower version](https://img.shields.io/bower/v/purecloud-api.svg)

# Platform API Javascript Client

Docs can be found at [http://mypurecloud.github.io/purecloud_javascript_client](http://mypurecloud.github.io/purecloud_javascript_client)

* Install with [Bower](http://bower.io):
```
bower install purecloud-api
```
Source code [https://github.com/MyPureCloud/purecloud_javascript_client](https://github.com/MyPureCloud/purecloud_javascript_client)

# Using the Library
## Referencing the modules
For convenience, all modules are bundled together, but if your application only uses a small subset of features, you can reference those modules directly.

Note: JQuery > 1.5 is required

Including the full Library:
````
<script type="text/javascript" src="pure-cloud-api.js"></script>
````

Including only a subset.  It is important to note that PureCloud.core.js must be referenced first.
````
<script type="text/javascript" src="PureCloud.core.js"></script>
<script type="text/javascript" src="PureCloud.users.js"></script>
````


## Authenticating
Let the library handle the OAuth2 redirects for you.
```
PureCloud.authorize('XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX', 'http://localhost:8085/examples/').done(function(){
    //this method will be called once we have a valid authorization token
    // if we don't have one a redirect to login will be called and then after redirecting back here,
    // the done method will be called.
});
```

or if  you already have a bearer token, you can specify it using
```
PureCloud.setAuthToken("MYTOKEN");
```


## Making Requests
Requests return the JQuery deferred object https://api.jquery.com/category/deferred-object/ so handlers can be registered to that response.
```
PureCloud.users.me.getUser().done(function(userObject){
                                //successfully got the user object, do something with it here
                            }).error(function(){
                                //and error occurred getting /me
                            }).always(function(){
                                //this will be called for successes and failures
                            });
```


# Running the Examples
Live examples can be run from [here](http://mypurecloud.github.io/purecloud_javascript_client/examples/index.html)

## Running Locally
Examples can be found at https://github.com/MyPureCloud/purecloud_javascript_client/examples
```
cd examples
node install
node examplesServer.js
```

Open http://localhost:8085/index.html in your web browser
