/**
* @class
* @example
* var api = new DiagnosticsApi(pureCloudSession);
*/
var DiagnosticsApi = function (pureCloudSession) {
	/**
     * @summary Send an email with diagnostic information.
	 * @description 
	 * @memberOf DiagnosticsApi#
	* @param {} body - Diagnostic
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "topic": "",
   "description": "",
   "priority": "",
   "type": "",
   "data": {}
}
	*/
	function create(body){
		var apipath = '/api/v1/diagnostics';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.create = create;
	/**
     * @summary Contact support with diagnostic information.
	 * @description 
	 * @memberOf DiagnosticsApi#
	* @param {} body - Diagnostic
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "topic": "",
   "description": "",
   "priority": "",
   "type": "",
   "data": {}
}
	*/
	function createSupport(body){
		var apipath = '/api/v1/diagnostics/support';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createSupport = createSupport;
	/**
     * @summary Trace messages
	 * @description 
	 * @memberOf DiagnosticsApi#
	* @param {} body - Trace List
	 * @example
	 * Body Example:
	 * {
   "app": {
      "appId": "",
      "appVersion": ""
   },
   "traces": []
}
	*/
	function createTrace(body){
		var apipath = '/api/v1/diagnostics/trace';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createTrace = createTrace;

    return self;
};
