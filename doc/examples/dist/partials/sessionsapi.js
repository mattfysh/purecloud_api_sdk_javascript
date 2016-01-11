/**
* @class
* @example
* var api = new SessionsApi(pureCloudSession);
*/
var SessionsApi = function (pureCloudSession) {
	/**
     * @summary Get all the sessions for your auth token.
	 * @description 
	 * @memberOf SessionsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function get(pageSize, pageNumber){
		var apipath = '/api/v1/sessions';
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


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.get = get;
	/**
     * @summary Create a new session.
	 * @description 
	 * @memberOf SessionsApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "minutesToLive": 0
}
	*/
	function create(body){
		var apipath = '/api/v1/sessions';
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
     * @summary Retrieve a client session.
	 * @description 
	 * @memberOf SessionsApi#
	* @param {string} sessionId - Session ID
	*/
	function getSession(sessionId){
		var apipath = '/api/v1/sessions/{sessionId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sessionId}', sessionId);

        if(sessionId === undefined && sessionId !== null){
			throw 'Missing required  parameter: sessionId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSession = getSession;
	/**
     * @summary Remove a session.
	 * @description 
	 * @memberOf SessionsApi#
	* @param {string} sessionId - Session ID
	*/
	function deleteSession(sessionId){
		var apipath = '/api/v1/sessions/{sessionId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sessionId}', sessionId);

        if(sessionId === undefined && sessionId !== null){
			throw 'Missing required  parameter: sessionId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteSession = deleteSession;

    return self;
};
