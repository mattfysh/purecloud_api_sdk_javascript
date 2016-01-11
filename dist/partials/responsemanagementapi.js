/**
* @class
* @example
* var api = new ResponsemanagementApi(pureCloudSession);
*/
var ResponsemanagementApi = function (pureCloudSession) {
	/**
     * @summary Gets a list of existing response libraries.
	 * @description 
	 * @memberOf ResponsemanagementApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	*/
	function getLibraries(pageNumber, pageSize){
		var apipath = '/api/v1/responsemanagement/libraries';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getLibraries = getLibraries;
	/**
     * @summary Create a response library.
	 * @description 
	 * @memberOf ResponsemanagementApi#
	* @param {} body - Library
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "version": 0,
   "createdBy": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "dateCreated": "",
   "selfUri": ""
}
	*/
	function createLibraries(body){
		var apipath = '/api/v1/responsemanagement/libraries';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createLibraries = createLibraries;
	/**
     * @summary Get details about an existing response library.
	 * @description 
	 * @memberOf ResponsemanagementApi#
	* @param {string} libraryId - Library ID
	*/
	function getLibrariesLibrary(libraryId){
		var apipath = '/api/v1/responsemanagement/libraries/{libraryId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{libraryId}', libraryId);

        if(libraryId === undefined && libraryId !== null){
			throw 'Missing required  parameter: libraryId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getLibrariesLibrary = getLibrariesLibrary;
	/**
     * @summary Update an existing response library.
	 * @description Fields that can be updated: name. The most recent version is required for updates.
	 * @memberOf ResponsemanagementApi#
	* @param {string} libraryId - Library ID
	* @param {} body - Library
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "version": 0,
   "createdBy": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "dateCreated": "",
   "selfUri": ""
}
	*/
	function updateLibrariesLibrary(libraryId, body){
		var apipath = '/api/v1/responsemanagement/libraries/{libraryId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{libraryId}', libraryId);

        if(libraryId === undefined && libraryId !== null){
			throw 'Missing required  parameter: libraryId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateLibrariesLibrary = updateLibrariesLibrary;
	/**
     * @summary Delete an existing response library.
	 * @description This will remove any responses associated with the library.
	 * @memberOf ResponsemanagementApi#
	* @param {string} libraryId - Library ID
	*/
	function deleteLibrariesLibrary(libraryId){
		var apipath = '/api/v1/responsemanagement/libraries/{libraryId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{libraryId}', libraryId);

        if(libraryId === undefined && libraryId !== null){
			throw 'Missing required  parameter: libraryId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteLibrariesLibrary = deleteLibrariesLibrary;
	/**
     * @summary Gets a list of existing responses.
	 * @description 
	 * @memberOf ResponsemanagementApi#
	* @param {string} libraryId - Library ID
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	*/
	function getResponses(libraryId, pageNumber, pageSize){
		var apipath = '/api/v1/responsemanagement/responses';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(libraryId !== undefined && libraryId !== null){
			queryParameters.libraryId = libraryId;
		}

        if(libraryId === undefined && libraryId !== null){
			throw 'Missing required  parameter: libraryId';
        }


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getResponses = getResponses;
	/**
     * @summary Create a response.
	 * @description 
	 * @memberOf ResponsemanagementApi#
	* @param {} body - Response
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "version": 0,
   "libraries": [],
   "texts": [],
   "createdBy": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "dateCreated": "",
   "selfUri": ""
}
	*/
	function createResponses(body){
		var apipath = '/api/v1/responsemanagement/responses';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createResponses = createResponses;
	/**
     * @summary Query responses
	 * @description 
	 * @memberOf ResponsemanagementApi#
	* @param {} body - Response
	 * @example
	 * Body Example:
	 * {
   "queryPhrase": "",
   "pageSize": 0,
   "filters": []
}
	*/
	function createResponsesQuery(body){
		var apipath = '/api/v1/responsemanagement/responses/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createResponsesQuery = createResponsesQuery;
	/**
     * @summary Get details about an existing response.
	 * @description 
	 * @memberOf ResponsemanagementApi#
	* @param {string} responseId - Response ID
	*/
	function getResponse(responseId){
		var apipath = '/api/v1/responsemanagement/responses/{responseId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{responseId}', responseId);

        if(responseId === undefined && responseId !== null){
			throw 'Missing required  parameter: responseId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getResponse = getResponse;
	/**
     * @summary Update an existing response.
	 * @description Fields that can be updated: name, libraries, and texts. The most recent version is required for updates.
	 * @memberOf ResponsemanagementApi#
	* @param {string} responseId - Response ID
	* @param {} body - Response
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "version": 0,
   "libraries": [],
   "texts": [],
   "createdBy": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "dateCreated": "",
   "selfUri": ""
}
	*/
	function updateResponse(responseId, body){
		var apipath = '/api/v1/responsemanagement/responses/{responseId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{responseId}', responseId);

        if(responseId === undefined && responseId !== null){
			throw 'Missing required  parameter: responseId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateResponse = updateResponse;
	/**
     * @summary Delete an existing response.
	 * @description This will remove the response from any libraries associated with it.
	 * @memberOf ResponsemanagementApi#
	* @param {string} responseId - Response ID
	*/
	function deleteResponse(responseId){
		var apipath = '/api/v1/responsemanagement/responses/{responseId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{responseId}', responseId);

        if(responseId === undefined && responseId !== null){
			throw 'Missing required  parameter: responseId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteResponse = deleteResponse;

    return self;
};
