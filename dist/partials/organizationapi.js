//API VERSION - 
/**
* @class
* @example
* var api = new OrganizationApi(pureCloudSession);
*/
var OrganizationApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Get organization.
	 * @memberOf OrganizationApi#
	*/
	function getMe(){
		var apipath = '/api/v2/organizations/me';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getMe = getMe;
	/**
     * @summary Update organization.
	 * @memberOf OrganizationApi#
	* @param {} body - Organization
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "thirdPartyOrgId": "",
   "thirdPartyOrgName": "",
   "thirdPartyURI": "",
   "domain": "",
   "version": 0,
   "state": "",
   "defaultSiteId": "",
   "deletable": true
}
	*/
	function putMe(body){
		var apipath = '/api/v2/organizations/me';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putMe = putMe;
	/**
     * @summary Delete the organization.
	 * @memberOf OrganizationApi#
	*/
	function deleteMe(){
		var apipath = '/api/v2/organizations/me';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteMe = deleteMe;

    return self;
};
