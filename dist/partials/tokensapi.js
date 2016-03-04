//API VERSION - 
/**
* @class
* @example
* var api = new TokensApi(pureCloudSession);
*/
var TokensApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
	}

	var self = this;
	/**
     * @summary Delete  auth token used to make the request.
	 * @memberOf TokensApi#
	*/
	function deleteMe(){
		var apipath = '/api/v1/tokens/me';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteMe = deleteMe;

    return self;
};
