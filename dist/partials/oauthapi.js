/**
* @class
* @example
* var api = new OAuthApi(pureCloudSession);
*/
var OAuthApi = function (pureCloudSession) {
	/**
     * @summary The list of identity providers
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
     * @summary Get Okta Identity Provider
	 * @memberOf OAuthApi#
	*/
	function getOkta(){
		var apipath = '/api/v1/identityproviders/okta';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOkta = getOkta;
	/**
     * @summary Update/Create Okta Identity Provider
	 * @memberOf OAuthApi#
	* @param {} body - Provider
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": ""
}
	*/
	function updateOkta(body){
		var apipath = '/api/v1/identityproviders/okta';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateOkta = updateOkta;
	/**
     * @summary Delete Okta Identity Provider
	 * @memberOf OAuthApi#
	*/
	function deleteOkta(){
		var apipath = '/api/v1/identityproviders/okta';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteOkta = deleteOkta;
	/**
     * @summary Get OneLogin Identity Provider
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
	 * @memberOf OAuthApi#
	* @param {} body - Provider
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": ""
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
	 * @memberOf OAuthApi#
	* @param {} body - Provider
	 * @example
	 * Body Example:
	 * {
   "name": ""
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
     * @summary Get Salesforce Identity Provider
	 * @memberOf OAuthApi#
	*/
	function getSalesforce(){
		var apipath = '/api/v1/identityproviders/salesforce';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSalesforce = getSalesforce;
	/**
     * @summary Update/Create Salesforce Identity Provider
	 * @memberOf OAuthApi#
	* @param {} body - Provider
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": ""
}
	*/
	function updateSalesforce(body){
		var apipath = '/api/v1/identityproviders/salesforce';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateSalesforce = updateSalesforce;
	/**
     * @summary Delete Salesforce Identity Provider
	 * @memberOf OAuthApi#
	*/
	function deleteSalesforce(){
		var apipath = '/api/v1/identityproviders/salesforce';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteSalesforce = deleteSalesforce;
	/**
     * @summary Get an identity provider
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
	 * @memberOf OAuthApi#
	* @param {} body - Provider
	 * @example
	 * Body Example:
	 * {
   "name": ""
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
If a client is to be used outside of the context of a user then the 'CLIENT-CREDENTIALS' grant may be used. In this case the client must be granted roles 
via the 'roleIds' field.
	 * @memberOf OAuthApi#
	* @param {} body - Client
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "accessTokenValiditySeconds": 0,
   "authorizedGrantTypes": [],
   "description": "",
   "registeredRedirectUri": [],
   "secret": "",
   "roleIds": []
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
	 * @memberOf OAuthApi#
	* @param {string} clientId - Client ID
	* @param {} body - Client
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "accessTokenValiditySeconds": 0,
   "authorizedGrantTypes": [],
   "description": "",
   "registeredRedirectUri": [],
   "secret": "",
   "roleIds": []
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
