/**
* @class
* @example
* var api = new OAuthApi(pureCloudSession);
*/
var OAuthApi = function (pureCloudSession) {
	/**
     * @summary The list of identity providers
	 * @description 
	 * @memberOf OAuthApi#
	*/
	function get(){
		var apipath = '/api/v1/identityproviders';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.get = get;
	/**
     * @summary Get OneLogin Identity Provider
	 * @description 
	 * @memberOf OAuthApi#
	*/
	function getOnelogin(){
		var apipath = '/api/v1/identityproviders/onelogin';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOnelogin = getOnelogin;
	/**
     * @summary Update/Create OneLogin Identity Provider
	 * @description 
	 * @memberOf OAuthApi#
	* @param {} body - Provider
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": "",
   "selfUri": ""
}
	*/
	function updateOnelogin(body){
		var apipath = '/api/v1/identityproviders/onelogin';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateOnelogin = updateOnelogin;
	/**
     * @summary Delete OneLogin Identity Provider
	 * @description 
	 * @memberOf OAuthApi#
	*/
	function deleteOnelogin(){
		var apipath = '/api/v1/identityproviders/onelogin';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteOnelogin = deleteOnelogin;
	/**
     * @summary Get PureCloud Identity Provider
	 * @description 
	 * @memberOf OAuthApi#
	*/
	function getPurecloud(){
		var apipath = '/api/v1/identityproviders/purecloud';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPurecloud = getPurecloud;
	/**
     * @summary Update/Create PureCloud Identity Provider
	 * @description 
	 * @memberOf OAuthApi#
	* @param {} body - Provider
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "selfUri": ""
}
	*/
	function updatePurecloud(body){
		var apipath = '/api/v1/identityproviders/purecloud';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updatePurecloud = updatePurecloud;
	/**
     * @summary Delete PureCloud Identity Provider
	 * @description 
	 * @memberOf OAuthApi#
	*/
	function deletePurecloud(){
		var apipath = '/api/v1/identityproviders/purecloud';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deletePurecloud = deletePurecloud;
	/**
     * @summary Get an identity provider
	 * @description 
	 * @memberOf OAuthApi#
	*/
	function getProverId(){
		var apipath = '/api/v1/identityproviders/{providerId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProverId = getProverId;
	/**
     * @summary Update an identity provider
	 * @description 
	 * @memberOf OAuthApi#
	* @param {} body - Provider
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "selfUri": ""
}
	*/
	function updateProverId(body){
		var apipath = '/api/v1/identityproviders/{providerId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateProverId = updateProverId;
	/**
     * @summary Delete an identity provider
	 * @description 
	 * @memberOf OAuthApi#
	*/
	function deleteProverId(){
		var apipath = '/api/v1/identityproviders/{providerId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteProverId = deleteProverId;
	/**
     * @summary The list of OAuth clients
	 * @description 
	 * @memberOf OAuthApi#
	*/
	function getClients(){
		var apipath = '/api/v1/oauth/clients';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getClients = getClients;
	/**
     * @summary Create OAuth client
	 * @description The OAuth Grant/Client is required in order to create an authentication token and gain access to PureCloud. 
The preferred authorizedGrantTypes is 'CODE' which requires applications to send a client ID and client secret. This is typically a web server. 
If the client is unable to secure the client secret then the 'TOKEN' grant type aka IMPLICIT should be used. This is would be for browser or mobile apps.
	 * @memberOf OAuthApi#
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
	*/
	function createClients(body){
		var apipath = '/api/v1/oauth/clients';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createClients = createClients;
	/**
     * @summary Get OAuth Client
	 * @description 
	 * @memberOf OAuthApi#
	* @param {string} clientId - Client ID
	*/
	function getClient(clientId){
		var apipath = '/api/v1/oauth/clients/{clientId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{clientId}', clientId);

        if(clientId === undefined && clientId !== null){
			throw 'Missing required  parameter: clientId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getClient = getClient;
	/**
     * @summary Update OAuth Client
	 * @description 
	 * @memberOf OAuthApi#
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
	*/
	function updateClient(clientId, body){
		var apipath = '/api/v1/oauth/clients/{clientId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{clientId}', clientId);

        if(clientId === undefined && clientId !== null){
			throw 'Missing required  parameter: clientId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateClient = updateClient;
	/**
     * @summary Delete OAuth Client
	 * @description 
	 * @memberOf OAuthApi#
	* @param {string} clientId - Client ID
	*/
	function deleteClient(clientId){
		var apipath = '/api/v1/oauth/clients/{clientId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{clientId}', clientId);

        if(clientId === undefined && clientId !== null){
			throw 'Missing required  parameter: clientId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteClient = deleteClient;
	/**
     * @summary Regenerate Client Secret
	 * @description This operation will set the client secret to a randomly generated cryptographically random value. All clients must be updated with the new secret. This operation should be used with caution.
	 * @memberOf OAuthApi#
	* @param {string} clientId - Client ID
	*/
	function createClientSecret(clientId){
		var apipath = '/api/v1/oauth/clients/{clientId}/secret';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{clientId}', clientId);

        if(clientId === undefined && clientId !== null){
			throw 'Missing required  parameter: clientId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createClientSecret = createClientSecret;

    return self;
};
