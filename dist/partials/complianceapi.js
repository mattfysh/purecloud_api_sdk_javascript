/**
* @class
* @example
* var api = new ComplianceApi(pureCloudSession);
*/
var ComplianceApi = function (pureCloudSession) {
	/**
     * Get information about HIPAA compliance
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
     * Update HIPAA compliance options
	 * @memberOf ComplianceApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "enableIdleTokenTimeout": true,
   "selfUri": ""
}
	*/
	function updateHipaa(body){
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
	self.updateHipaa = updateHipaa;

    return self;
};
