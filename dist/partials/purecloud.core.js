/**
* @description PureCloud API
* @namespace PureCloud
**/
var PureCloud =  (function () {
    var _host = 'api.mypurecloud.com';
    var _auth_url = '';
    var _environment = "mypurecloud.com";

    var _token = null;
    var _state = null;
    var self = {};

    if(window.location.hash) {
        //Parse out the hash values of the URL to get the token
        var hash_array = location.hash.substring(1).split('&');
        var hash_key_val = new Array(hash_array.length);
        for (var i = 0; i < hash_array.length; i++) {
            hash_key_val[i] = hash_array[i].split('=');
        }

        hash_key_val.forEach(function (pair) {
            if (pair[0] == "access_token") {

                // Store token
                _token = pair[1];

                // Clear hash from URL
                location.hash = '';
            }

            if (pair[0] == "state") {
                // Store token
                _state = pair[1];
            }
        });
    }

    /**
	 * Gets the value of State that was passed into the .authorize method
     * @memberof PureCloud
     */
    self.getState = function(){
        return _state;
    };

    /**
	 * Initiates a redirect to authorize the client using oauth
     * @memberof PureCloud
     * @param  {string} clientId    The application's Client ID
	 * @param  {string} redirectUrl The redirect URL to return to after authentication. This must be an authorized URL for the client.
	 * @param  {string} state (Optional) State variable that is returned to the application after authentication.  This can be grabbed from the .getState() method.
     * @param  {string} environment (Optional) The environment that this is run in.  If set should be mypurecloud.com, mypurecloud.ie, mypurecloud.au, etc.
     * @example PureCloud.authorize('XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX', 'http://localhost:8085/examples/').done(function(){
         //this method will be called once we have a valid authorization token
         // if we don't have one a redirect to login will be called and then after redirecting back here,
         // the done method will be called.
     });
     *
     * @example PureCloud.authorize('XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX', 'http://localhost:8085/examples/', "State Value", "mypurecloud.ie");
     */
    self.authorize = function(clientId, redirectUrl, state, environment){
        var _doneCallback = function(){console.error("callback not set");};

        var defer = {
            done: function(callback){
                _doneCallback = callback;
            }
        };

        var existingToken = null;

        if(window && window.localStorage){
            existingToken = window.localStorage.authtoken;
        }

        if(_token){
            existingToken = _token;
        }

        function authRedirect(){
            environment = environment || _environment;
            _host = 'api.'+ environment;
            _auth_url = 'https://login.'+environment;

            var url = _auth_url + '/authorize' +
                '?response_type=token' +
                '&client_id=' + encodeURI(clientId) +
                '&redirect_uri=' + encodeURI(redirectUrl);

            if(state !== undefined && state !== null){
                url = url + '&state=' + state;
            }

            //console.debug(url);

            // Redirect to oauth url
            //console.debug('Initiating oauth process');
            window.location.replace(url);
        }

        if(existingToken && existingToken !== ''){
            _token = existingToken;
            sendRestRequest("GET", "https://" + _host + "/api/v1/users/me").done(function(){
                //has good auth token
                _token = existingToken;

                if(window && window.localStorage){
                    window.localStorage.authtoken = _token;
                }

                _doneCallback();

            }).error(function(){
                //don't have an auth token yet
                authRedirect();
            });
        }else{
            authRedirect();
        }

        return defer;
    };

    /**
     * Sets the authorization token, this is only needed if not using .authorize(...)
     * @memberof PureCloud
     * @param  {string} token Authorization token
     */
    self.setAuthToken = function(token){
        _token = token;
    };

    /**
     * Gets the authorization token
     * @memberof PureCloud
     */
    self.getAuthToken = function(){
        return _token;
    };

    /**
     * Returns if the authorization token is set
     * @memberof PureCloud
     */
    self.hasAuthorizationToken = function(){
        return _token !== null;
    };

    /**
     * Clears authorization token and logs out.
     * @memberof PureCloud
     */
    self.logout = function(){
        _token = null;

        if(window && window.localStorage){
            delete window.localStorage.authtoken;
        }

		window.location.replace(this._auth_url + "/logout");
    };

    /**
    * The environment that this is run in.  If set should be mypurecloud.com, mypurecloud.ie, mypurecloud.au, etc.
    * @memberof PureCloud
    * @param  {string} environment PureCloud environment (mypurecloud.com, mypurecloud.ie, mypurecloud.au, etc)
    **/
    self.setEnvironment = function(environment){
        _environment = environment;
        _host = 'api.'+ environment;
        _auth_url = 'https://login.'+environment;

    };

    function sendRestRequest(method, url, body){
        var requestParams = {
             method: method,
             url: url,
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
             },
             beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'bearer ' + _token);},
             timeout: 2000
         };

         if(body){
             requestParams.data = JSON.stringify(body);
         }

         var request = $.ajax(requestParams);

         return request;
    }

    /**
     * Executes an authenticated GET to PureCloud.  Can be used with paging URIs to get a page that has a defined full url.
     * @memberof PureCloud
     * @param  {string} url The full or relative path URL to get
     * @example PureCloud.get("https://api.mypurecloud.com/api/v1/users/me");
     * @example PureCloud.get("/api/v1/users/me");
     */
    self.get = function(url){

        if(url[0] === '/'){
            url = 'https://'+ _host + url;
        }

        return sendRestRequest("GET", url);
    };

    /**
     * Executes an authenticated request to PureCloud
     * @memberof PureCloud
     * @param  {string} method The HTTP method (GET, POST, PUT, DELETE)
     * @param  {uri} path The relative uri path
     * @param  {JSON} body The body to send
     * @example PureCloud.makeRequest("GET", "/api/v1/users/me");
     */
    self.makeRequest = function(method,path,body){
        return sendRestRequest(method, 'https://'+ _host + path, body);
    };

	return self;
}());
