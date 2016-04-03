//API VERSION - 
/**
* @class
* @example
* var api = new ResponseManagementApi(pureCloudSession);
*/
var ResponseManagementApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Gets a list of existing response libraries.
	 * @memberOf ResponseManagementApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	*/
	function getLibraries(pageNumber, pageSize){
		var apipath = '/api/v2/responsemanagement/libraries';
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
	 * @memberOf ResponseManagementApi#
	* @param {} body - Library
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "version": 0,
   "createdBy": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "dateCreated": ""
}
	*/
	function postLibraries(body){
		var apipath = '/api/v2/responsemanagement/libraries';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postLibraries = postLibraries;
	/**
     * @summary Get details about an existing response library.
	 * @memberOf ResponseManagementApi#
	* @param {string} libraryId - Library ID
	*/
	function getLibrariesLibraryId(libraryId){
		var apipath = '/api/v2/responsemanagement/libraries/{libraryId}';
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
	self.getLibrariesLibraryId = getLibrariesLibraryId;
	/**
     * @summary Update an existing response library.
	 * @description Fields that can be updated: name. The most recent version is required for updates.
	 * @memberOf ResponseManagementApi#
	* @param {string} libraryId - Library ID
	* @param {} body - Library
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "version": 0,
   "createdBy": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "dateCreated": ""
}
	*/
	function putLibrariesLibraryId(libraryId, body){
		var apipath = '/api/v2/responsemanagement/libraries/{libraryId}';
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
	self.putLibrariesLibraryId = putLibrariesLibraryId;
	/**
     * @summary Delete an existing response library.
	 * @description This will remove any responses associated with the library.
	 * @memberOf ResponseManagementApi#
	* @param {string} libraryId - Library ID
	*/
	function deleteLibrariesLibraryId(libraryId){
		var apipath = '/api/v2/responsemanagement/libraries/{libraryId}';
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
	self.deleteLibrariesLibraryId = deleteLibrariesLibraryId;
	/**
     * @summary Gets a list of existing responses.
	 * @memberOf ResponseManagementApi#
	* @param {string} libraryId - Library ID
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	*/
	function getResponses(libraryId, pageNumber, pageSize){
		var apipath = '/api/v2/responsemanagement/responses';
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
	 * @memberOf ResponseManagementApi#
	* @param {} body - Response
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "version": 0,
   "libraries": [],
   "texts": [],
   "createdBy": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "dateCreated": ""
}
	*/
	function postResponses(body){
		var apipath = '/api/v2/responsemanagement/responses';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postResponses = postResponses;
	/**
     * @summary Query responses
	 * @memberOf ResponseManagementApi#
	* @param {} body - Response
	 * @example
	 * Body Example:
	 * {
   "queryPhrase": "",
   "pageSize": 0,
   "filters": []
}
	*/
	function postResponsesQuery(body){
		var apipath = '/api/v2/responsemanagement/responses/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postResponsesQuery = postResponsesQuery;
	/**
     * @summary Get details about an existing response.
	 * @memberOf ResponseManagementApi#
	* @param {string} responseId - Response ID
	*/
	function getResponsesResponseId(responseId){
		var apipath = '/api/v2/responsemanagement/responses/{responseId}';
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
	self.getResponsesResponseId = getResponsesResponseId;
	/**
     * @summary Update an existing response.
	 * @description Fields that can be updated: name, libraries, and texts. The most recent version is required for updates.
	 * @memberOf ResponseManagementApi#
	* @param {string} responseId - Response ID
	* @param {} body - Response
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "version": 0,
   "libraries": [],
   "texts": [],
   "createdBy": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "dateCreated": ""
}
	*/
	function putResponsesResponseId(responseId, body){
		var apipath = '/api/v2/responsemanagement/responses/{responseId}';
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
	self.putResponsesResponseId = putResponsesResponseId;
	/**
     * @summary Delete an existing response.
	 * @description This will remove the response from any libraries associated with it.
	 * @memberOf ResponseManagementApi#
	* @param {string} responseId - Response ID
	*/
	function deleteResponsesResponseId(responseId){
		var apipath = '/api/v2/responsemanagement/responses/{responseId}';
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
	self.deleteResponsesResponseId = deleteResponsesResponseId;

    return self;
};
