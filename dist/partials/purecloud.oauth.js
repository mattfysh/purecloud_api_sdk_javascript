if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.oauth";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.oauth = (function (PureCloud) {
	/**
	* @namespace oauth/clients
	**/
	/**
	* @namespace oauth/clients/secret
	**/

	var self = {};
	self.clients = self.clients || {};

	/**
     * 
     * @method getOauthClients
	 * @memberof oauth/clients
	 *
     */
     self.clients.getOauthClients = function(){
		var path = '/api/v1/oauth/clients';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.clients = self.clients || {};

	/**
     * The OAuth Grant/Client is required in order to create an authentication token and gain access to PureCloud. 
The preferred authorizedGrantTypes is 'CODE' which requires applications to send a client ID and client secret. This is typically a web server. 
If the client is unable to secure the client secret then the 'TOKEN' grant type aka IMPLICIT should be used. This is would be for browser or mobile apps.
     * @method createOauthClient
	 * @memberof oauth/clients

	* @param {} body - Client
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "accessTokenValiditySeconds": 0,
   "authorizedGrantTypes": [],
   "description": "",
   "registeredRedirectUri": [],
   "secret": "",
   "selfUri": ""
}
	 *
     */
     self.clients.createOauthClient = function(body){
		var path = '/api/v1/oauth/clients';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.clients = self.clients || {};

	/**
     * 
     * @method getOauthClient
	 * @memberof oauth/clients

	* @param {string} clientId - Client ID
	 *
     */
     self.clients.getOauthClient = function(clientId){
		var path = '/api/v1/oauth/clients/{clientId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{clientId}', clientId);

        if(clientId === undefined && clientId !== null){
			throw 'Missing required  parameter: clientId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.clients = self.clients || {};

	/**
     * 
     * @method updateOauthClient
	 * @memberof oauth/clients

	* @param {string} clientId - Client ID

	* @param {} body - Client
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "accessTokenValiditySeconds": 0,
   "authorizedGrantTypes": [],
   "description": "",
   "registeredRedirectUri": [],
   "secret": "",
   "selfUri": ""
}
	 *
     */
     self.clients.updateOauthClient = function(clientId, body){
		var path = '/api/v1/oauth/clients/{clientId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{clientId}', clientId);

        if(clientId === undefined && clientId !== null){
			throw 'Missing required  parameter: clientId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.clients = self.clients || {};

	/**
     * 
     * @method deleteOauthClient
	 * @memberof oauth/clients

	* @param {string} clientId - Client ID
	 *
     */
     self.clients.deleteOauthClient = function(clientId){
		var path = '/api/v1/oauth/clients/{clientId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{clientId}', clientId);

        if(clientId === undefined && clientId !== null){
			throw 'Missing required  parameter: clientId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.clients = self.clients || {};
	self.clients.secret = self.clients.secret || {};

	/**
     * This operation will set the client secret to a randomly generated cryptographically random value. All clients must be updated with the new secret. This operation should be used with caution.
     * @method regenSecret
	 * @memberof oauth/clients/secret

	* @param {string} clientId - Client ID
	 *
     */
     self.clients.secret.regenSecret = function(clientId){
		var path = '/api/v1/oauth/clients/{clientId}/secret';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{clientId}', clientId);

        if(clientId === undefined && clientId !== null){
			throw 'Missing required  parameter: clientId';
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
