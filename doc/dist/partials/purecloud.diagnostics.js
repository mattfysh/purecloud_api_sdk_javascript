if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.diagnostics";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.diagnostics = (function (PureCloud) {
	/**
	* @namespace diagnostics
	**/
	/**
	* @namespace diagnostics/support
	**/
	/**
	* @namespace diagnostics/trace
	**/

	var self = {};

	/**
     * 
     * @method sendDiagnosticEmail
	 * @memberof diagnostics

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
	 *
     */
     self.sendDiagnosticEmail = function(body){
		var path = '/api/v1/diagnostics';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.support = self.support || {};

	/**
     * 
     * @method contactSupport
	 * @memberof diagnostics/support

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
	 *
     */
     self.support.contactSupport = function(body){
		var path = '/api/v1/diagnostics/support';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.trace = self.trace || {};

	/**
     * 
     * @method traceMessages
	 * @memberof diagnostics/trace

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
	 *
     */
     self.trace.traceMessages = function(body){
		var path = '/api/v1/diagnostics/trace';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
