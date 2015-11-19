if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.responsemanagement";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.responsemanagement = (function (PureCloud) {
	/**
	* @namespace responsemanagement/libraries
	**/
	/**
	* @namespace responsemanagement/responses
	**/
	/**
	* @namespace responsemanagement/responses/query
	**/

	var self = {};
	self.libraries = self.libraries || {};

	/**
     * 
     * @method getLibraries
	 * @memberof responsemanagement/libraries

	* @param {integer} pageNumber - Page number

	* @param {integer} pageSize - Page size
	 *
     */
     self.libraries.getLibraries = function(pageNumber, pageSize){
		var path = '/api/v1/responsemanagement/libraries';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.libraries = self.libraries || {};

	/**
     * 
     * @method createLibrary
	 * @memberof responsemanagement/libraries

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
      "status": {},
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
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
	 *
     */
     self.libraries.createLibrary = function(body){
		var path = '/api/v1/responsemanagement/libraries';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.libraries = self.libraries || {};

	/**
     * 
     * @method getLibrary
	 * @memberof responsemanagement/libraries

	* @param {string} libraryId - Library ID
	 *
     */
     self.libraries.getLibrary = function(libraryId){
		var path = '/api/v1/responsemanagement/libraries/{libraryId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{libraryId}', libraryId);

        if(libraryId === undefined && libraryId !== null){
			throw 'Missing required  parameter: libraryId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.libraries = self.libraries || {};

	/**
     * Fields that can be updated: name. The most recent version is required for updates.
     * @method updateLibrary
	 * @memberof responsemanagement/libraries

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
      "status": {},
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
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
	 *
     */
     self.libraries.updateLibrary = function(libraryId, body){
		var path = '/api/v1/responsemanagement/libraries/{libraryId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{libraryId}', libraryId);

        if(libraryId === undefined && libraryId !== null){
			throw 'Missing required  parameter: libraryId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.libraries = self.libraries || {};

	/**
     * This will remove any responses associated with the library.
     * @method deleteLibrary
	 * @memberof responsemanagement/libraries

	* @param {string} libraryId - Library ID
	 *
     */
     self.libraries.deleteLibrary = function(libraryId){
		var path = '/api/v1/responsemanagement/libraries/{libraryId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{libraryId}', libraryId);

        if(libraryId === undefined && libraryId !== null){
			throw 'Missing required  parameter: libraryId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.responses = self.responses || {};

	/**
     * 
     * @method getResponses
	 * @memberof responsemanagement/responses

	* @param {string} libraryId - Library ID

	* @param {integer} pageNumber - Page number

	* @param {integer} pageSize - Page size
	 *
     */
     self.responses.getResponses = function(libraryId, pageNumber, pageSize){
		var path = '/api/v1/responsemanagement/responses';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.responses = self.responses || {};

	/**
     * 
     * @method createResponse
	 * @memberof responsemanagement/responses

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
      "status": {},
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
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
	 *
     */
     self.responses.createResponse = function(body){
		var path = '/api/v1/responsemanagement/responses';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.responses = self.responses || {};
	self.responses.query = self.responses.query || {};

	/**
     * 
     * @method queryResponses
	 * @memberof responsemanagement/responses/query

	* @param {} body - Response
	 * @example
	 * Body Example:
	 * {
   "queryPhrase": "",
   "pageSize": 0,
   "filters": []
}
	 *
     */
     self.responses.query.queryResponses = function(body){
		var path = '/api/v1/responsemanagement/responses/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.responses = self.responses || {};

	/**
     * 
     * @method getResponse
	 * @memberof responsemanagement/responses

	* @param {string} responseId - Response ID
	 *
     */
     self.responses.getResponse = function(responseId){
		var path = '/api/v1/responsemanagement/responses/{responseId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{responseId}', responseId);

        if(responseId === undefined && responseId !== null){
			throw 'Missing required  parameter: responseId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.responses = self.responses || {};

	/**
     * Fields that can be updated: name, libraries, and texts. The most recent version is required for updates.
     * @method updateResponse
	 * @memberof responsemanagement/responses

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
      "status": {},
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
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
	 *
     */
     self.responses.updateResponse = function(responseId, body){
		var path = '/api/v1/responsemanagement/responses/{responseId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{responseId}', responseId);

        if(responseId === undefined && responseId !== null){
			throw 'Missing required  parameter: responseId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.responses = self.responses || {};

	/**
     * This will remove the response from any libraries associated with it.
     * @method deleteResponse
	 * @memberof responsemanagement/responses

	* @param {string} responseId - Response ID
	 *
     */
     self.responses.deleteResponse = function(responseId){
		var path = '/api/v1/responsemanagement/responses/{responseId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{responseId}', responseId);

        if(responseId === undefined && responseId !== null){
			throw 'Missing required  parameter: responseId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
