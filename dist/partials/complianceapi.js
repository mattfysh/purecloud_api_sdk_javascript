//API VERSION - 
/**
* @class
* @example
* var api = new ComplianceApi(pureCloudSession);
*/
var ComplianceApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
	}

	var self = this;
	/**
     * @summary Get information about HIPAA compliance
	 * @memberOf ComplianceApi#
	*/
	function getHipaa(){
		var apipath = '/api/v1/compliance/hipaa';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getHipaa = getHipaa;
	/**
     * @summary Update HIPAA compliance options
	 * @memberOf ComplianceApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "enableIdleTokenTimeout": true
}
	*/
	function putHipaa(body){
		var apipath = '/api/v1/compliance/hipaa';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putHipaa = putHipaa;

    return self;
};
