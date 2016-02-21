/**
* @class
* @example
* var api = new GreetingsApi(pureCloudSession);
*/
var GreetingsApi = function (pureCloudSession) {
	/**
     * @summary Gets an Organization's Greetings
	 * @memberOf GreetingsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getGreetings(pageSize, pageNumber){
		var apipath = '/api/v1/greetings';
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
	self.getGreetings = getGreetings;
	/**
     * @summary Create a Greeting for an Organization
	 * @memberOf GreetingsApi#
	* @param {} body - The Greeting to create
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "type": "",
   "ownerType": "",
   "owner": {
      "name": ""
   },
   "audioFile": {
      "durationMilliseconds": 0,
      "sizeBytes": 0,
      "selfUri": ""
   },
   "audioTTS": "",
   "createdDate": "",
   "createdBy": "",
   "modifiedDate": "",
   "modifiedBy": ""
}
	*/
	function postGreetings(body){
		var apipath = '/api/v1/greetings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postGreetings = postGreetings;
	/**
     * @summary Get an Organization's DefaultGreetingList
	 * @memberOf GreetingsApi#
	*/
	function getDefaults(){
		var apipath = '/api/v1/greetings/defaults';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDefaults = getDefaults;
	/**
     * @summary Update an Organization's DefaultGreetingList
	 * @memberOf GreetingsApi#
	* @param {} body - The updated defaultGreetingList
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "owner": {
      "name": ""
   },
   "ownerType": "",
   "greetings": {},
   "createdDate": "",
   "createdBy": "",
   "modifiedDate": "",
   "modifiedBy": ""
}
	*/
	function putDefaults(body){
		var apipath = '/api/v1/greetings/defaults';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putDefaults = putDefaults;
	/**
     * @summary Get a Greeting with the given GreetingId
	 * @memberOf GreetingsApi#
	* @param {string} greetingId - Greeting ID
	*/
	function get(greetingId){
		var apipath = '/api/v1/greetings/{greetingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{greetingId}', greetingId);

        if(greetingId === undefined && greetingId !== null){
			throw 'Missing required  parameter: greetingId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.get = get;
	/**
     * @summary Updates the Greeting with the given GreetingId
	 * @memberOf GreetingsApi#
	* @param {string} greetingId - Greeting ID
	* @param {} body - The updated Greeting
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "type": "",
   "ownerType": "",
   "owner": {
      "name": ""
   },
   "audioFile": {
      "durationMilliseconds": 0,
      "sizeBytes": 0,
      "selfUri": ""
   },
   "audioTTS": "",
   "createdDate": "",
   "createdBy": "",
   "modifiedDate": "",
   "modifiedBy": ""
}
	*/
	function put(greetingId, body){
		var apipath = '/api/v1/greetings/{greetingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{greetingId}', greetingId);

        if(greetingId === undefined && greetingId !== null){
			throw 'Missing required  parameter: greetingId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.put = put;
	/**
     * @summary Deletes a Greeting with the given GreetingId
	 * @memberOf GreetingsApi#
	* @param {string} greetingId - Greeting ID
	*/
	function performDelete(greetingId){
		var apipath = '/api/v1/greetings/{greetingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{greetingId}', greetingId);

        if(greetingId === undefined && greetingId !== null){
			throw 'Missing required  parameter: greetingId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.performDelete = performDelete;
	/**
     * @summary Get media playback URI for this greeting
	 * @memberOf GreetingsApi#
	* @param {string} greetingId - Greeting ID
	* @param {string} formatId - The desired format (WAV, etc.)
	WAV,
	*/
	function getMedia(greetingId, formatId){
		var apipath = '/api/v1/greetings/{greetingId}/media';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{greetingId}', greetingId);

        if(greetingId === undefined && greetingId !== null){
			throw 'Missing required  parameter: greetingId';
        }


		if(formatId !== undefined && formatId !== null){
			queryParameters.formatId = formatId;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getMedia = getMedia;
	/**
     * @summary Get a list of the User's Greetings
	 * @memberOf GreetingsApi#
	* @param {string} userId - User ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getUserGreetings(userId, pageSize, pageNumber){
		var apipath = '/api/v1/users/{userId}/greetings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserGreetings = getUserGreetings;
	/**
     * @summary Creates a Greeting for a User
	 * @memberOf GreetingsApi#
	* @param {string} userId - User ID
	* @param {} body - The Greeting to create
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "type": "",
   "ownerType": "",
   "owner": {
      "name": ""
   },
   "audioFile": {
      "durationMilliseconds": 0,
      "sizeBytes": 0,
      "selfUri": ""
   },
   "audioTTS": "",
   "createdDate": "",
   "createdBy": "",
   "modifiedDate": "",
   "modifiedBy": ""
}
	*/
	function postUserGreetings(userId, body){
		var apipath = '/api/v1/users/{userId}/greetings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postUserGreetings = postUserGreetings;
	/**
     * @summary Grabs the list of Default Greetings given a User's ID
	 * @memberOf GreetingsApi#
	* @param {string} userId - User ID
	*/
	function getUserGreetingsDefaults(userId){
		var apipath = '/api/v1/users/{userId}/greetings/defaults';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserGreetingsDefaults = getUserGreetingsDefaults;
	/**
     * @summary Updates the DefaultGreetingList of the specified User
	 * @memberOf GreetingsApi#
	* @param {string} userId - User ID
	* @param {} body - The updated defaultGreetingList
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "owner": {
      "name": ""
   },
   "ownerType": "",
   "greetings": {},
   "createdDate": "",
   "createdBy": "",
   "modifiedDate": "",
   "modifiedBy": ""
}
	*/
	function putUserGreetingsDefaults(userId, body){
		var apipath = '/api/v1/users/{userId}/greetings/defaults';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putUserGreetingsDefaults = putUserGreetingsDefaults;

    return self;
};
