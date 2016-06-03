//API VERSION - 
/**
* @class
* @example
* var api = new IdentityProviderApi(pureCloudSession);
*/
var IdentityProviderApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary The list of identity providers
	 * @memberOf IdentityProviderApi#
	*/
	function getIdentityproviders(){
		var apipath = '/api/v2/identityproviders';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getIdentityproviders = getIdentityproviders;
	/**
     * @summary Get ADFS Identity Provider
	 * @memberOf IdentityProviderApi#
	*/
	function getAdfs(){
		var apipath = '/api/v2/identityproviders/adfs';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getAdfs = getAdfs;
	/**
     * @summary Update/Create ADFS Identity Provider
	 * @memberOf IdentityProviderApi#
	* @param {} body - Provider
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "relyingPartyIdentifier": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": "",
   "disabled": true
}
	*/
	function putAdfs(body){
		var apipath = '/api/v2/identityproviders/adfs';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putAdfs = putAdfs;
	/**
     * @summary Delete ADFS Identity Provider
	 * @memberOf IdentityProviderApi#
	*/
	function deleteAdfs(){
		var apipath = '/api/v2/identityproviders/adfs';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteAdfs = deleteAdfs;
	/**
     * @summary Get Customer Interaction Center (CIC) Identity Provider
	 * @memberOf IdentityProviderApi#
	*/
	function getCic(){
		var apipath = '/api/v2/identityproviders/cic';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCic = getCic;
	/**
     * @summary Update/Create Customer Interaction Center (CIC) Identity Provider
	 * @memberOf IdentityProviderApi#
	* @param {} body - Provider
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": "",
   "disabled": true
}
	*/
	function putCic(body){
		var apipath = '/api/v2/identityproviders/cic';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putCic = putCic;
	/**
     * @summary Delete Customer Interaction Center (CIC) Identity Provider
	 * @memberOf IdentityProviderApi#
	*/
	function deleteCic(){
		var apipath = '/api/v2/identityproviders/cic';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteCic = deleteCic;
	/**
     * @summary Get Okta Identity Provider
	 * @memberOf IdentityProviderApi#
	*/
	function getOkta(){
		var apipath = '/api/v2/identityproviders/okta';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOkta = getOkta;
	/**
     * @summary Update/Create Okta Identity Provider
	 * @memberOf IdentityProviderApi#
	* @param {} body - Provider
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": "",
   "disabled": true
}
	*/
	function putOkta(body){
		var apipath = '/api/v2/identityproviders/okta';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putOkta = putOkta;
	/**
     * @summary Delete Okta Identity Provider
	 * @memberOf IdentityProviderApi#
	*/
	function deleteOkta(){
		var apipath = '/api/v2/identityproviders/okta';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteOkta = deleteOkta;
	/**
     * @summary Get OneLogin Identity Provider
	 * @memberOf IdentityProviderApi#
	*/
	function getOnelogin(){
		var apipath = '/api/v2/identityproviders/onelogin';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOnelogin = getOnelogin;
	/**
     * @summary Update/Create OneLogin Identity Provider
	 * @memberOf IdentityProviderApi#
	* @param {} body - Provider
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": "",
   "disabled": true
}
	*/
	function putOnelogin(body){
		var apipath = '/api/v2/identityproviders/onelogin';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putOnelogin = putOnelogin;
	/**
     * @summary Delete OneLogin Identity Provider
	 * @memberOf IdentityProviderApi#
	*/
	function deleteOnelogin(){
		var apipath = '/api/v2/identityproviders/onelogin';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteOnelogin = deleteOnelogin;
	/**
     * @summary Get PureCloud Identity Provider
	 * @memberOf IdentityProviderApi#
	*/
	function getPurecloud(){
		var apipath = '/api/v2/identityproviders/purecloud';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPurecloud = getPurecloud;
	/**
     * @summary Update/Create PureCloud Identity Provider
	 * @memberOf IdentityProviderApi#
	* @param {} body - Provider
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "disabled": true
}
	*/
	function putPurecloud(body){
		var apipath = '/api/v2/identityproviders/purecloud';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putPurecloud = putPurecloud;
	/**
     * @summary Delete PureCloud Identity Provider
	 * @memberOf IdentityProviderApi#
	*/
	function deletePurecloud(){
		var apipath = '/api/v2/identityproviders/purecloud';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deletePurecloud = deletePurecloud;
	/**
     * @summary Get Salesforce Identity Provider
	 * @memberOf IdentityProviderApi#
	*/
	function getSalesforce(){
		var apipath = '/api/v2/identityproviders/salesforce';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSalesforce = getSalesforce;
	/**
     * @summary Update/Create Salesforce Identity Provider
	 * @memberOf IdentityProviderApi#
	* @param {} body - Provider
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": "",
   "disabled": true
}
	*/
	function putSalesforce(body){
		var apipath = '/api/v2/identityproviders/salesforce';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putSalesforce = putSalesforce;
	/**
     * @summary Delete Salesforce Identity Provider
	 * @memberOf IdentityProviderApi#
	*/
	function deleteSalesforce(){
		var apipath = '/api/v2/identityproviders/salesforce';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteSalesforce = deleteSalesforce;
	/**
     * @summary Get an identity provider
	 * @memberOf IdentityProviderApi#
	*/
	function getProviderId(){
		var apipath = '/api/v2/identityproviders/{providerId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProviderId = getProviderId;
	/**
     * @summary Update an identity provider
	 * @memberOf IdentityProviderApi#
	* @param {} body - Provider
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "disabled": true
}
	*/
	function putProviderId(body){
		var apipath = '/api/v2/identityproviders/{providerId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putProviderId = putProviderId;
	/**
     * @summary Delete an identity provider
	 * @memberOf IdentityProviderApi#
	*/
	function deleteProviderId(){
		var apipath = '/api/v2/identityproviders/{providerId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteProviderId = deleteProviderId;

    return self;
};
