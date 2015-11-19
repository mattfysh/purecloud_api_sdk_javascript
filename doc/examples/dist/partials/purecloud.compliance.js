if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.compliance";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.compliance = (function (PureCloud) {
	/**
	* @namespace compliance/hipaa
	**/

	var self = {};
	self.hipaa = self.hipaa || {};

	/**
     * 
     * @method getHipaaComplianceInfo
	 * @memberof compliance/hipaa
	 *
     */
     self.hipaa.getHipaaComplianceInfo = function(){
		var path = '/api/v1/compliance/hipaa';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.hipaa = self.hipaa || {};

	/**
     * 
     * @method updateHipaaComplianceInfo
	 * @memberof compliance/hipaa

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "enableIdleTokenTimeout": true,
   "selfUri": ""
}
	 *
     */
     self.hipaa.updateHipaaComplianceInfo = function(body){
		var path = '/api/v1/compliance/hipaa';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
