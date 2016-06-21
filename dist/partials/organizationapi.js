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

    return self;
};
