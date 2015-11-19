if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.sessions";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.sessions = (function (PureCloud) {
	/**
	* @namespace sessions
	**/

	var self = {};

	/**
     * 
     * @method getSessions
	 * @memberof sessions

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number
	 *
     */
     self.getSessions = function(pageSize, pageNumber){
		var path = '/api/v1/sessions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	/**
     * 
     * @method createSession
	 * @memberof sessions

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "minutesToLive": 0
}
	 *
     */
     self.createSession = function(body){
		var path = '/api/v1/sessions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };

	/**
     * 
     * @method retrieveClientSession
	 * @memberof sessions

	* @param {string} sessionId - Session ID
	 *
     */
     self.retrieveClientSession = function(sessionId){
		var path = '/api/v1/sessions/{sessionId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{sessionId}', sessionId);

        if(sessionId === undefined && sessionId !== null){
			throw 'Missing required  parameter: sessionId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	/**
     * 
     * @method removeClientSession
	 * @memberof sessions

	* @param {string} sessionId - Session ID
	 *
     */
     self.removeClientSession = function(sessionId){
		var path = '/api/v1/sessions/{sessionId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{sessionId}', sessionId);

        if(sessionId === undefined && sessionId !== null){
			throw 'Missing required  parameter: sessionId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
