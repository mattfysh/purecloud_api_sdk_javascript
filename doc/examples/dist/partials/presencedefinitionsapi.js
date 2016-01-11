/**
* @class
* @example
* var api = new PresencedefinitionsApi(pureCloudSession);
*/
var PresencedefinitionsApi = function (pureCloudSession) {
	/**
     * @summary Get an Organization's list of Presences
	 * @description 
	 * @memberOf PresencedefinitionsApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	*/
	function get(pageNumber, pageSize){
		var apipath = '/api/v1/presencedefinitions';
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
	self.get = get;
	/**
     * @summary Create an OrganizationPresence
	 * @description 
	 * @memberOf PresencedefinitionsApi#
	* @param {} body - The OrganizationPresence to create
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "languageLabels": {},
   "systemPresence": "",
   "deactivated": true,
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
   "createdDate": "",
   "modifiedBy": {
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
   "modifiedDate": "",
   "selfUri": ""
}
	*/
	function create(body){
		var apipath = '/api/v1/presencedefinitions';
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
	self.create = create;
	/**
     * @summary Get an OrganizationPresence
	 * @description 
	 * @memberOf PresencedefinitionsApi#
	* @param {string} presenceId - Organization Presence ID
	*/
	function getPresence(presenceId){
		var apipath = '/api/v1/presencedefinitions/{presenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{presenceId}', presenceId);

        if(presenceId === undefined && presenceId !== null){
			throw 'Missing required  parameter: presenceId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPresence = getPresence;
	/**
     * @summary Update an OrganizationPresence
	 * @description 
	 * @memberOf PresencedefinitionsApi#
	* @param {string} presenceId - Organization Presence ID
	* @param {} body - The OrganizationPresence to update
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "languageLabels": {},
   "systemPresence": "",
   "deactivated": true,
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
   "createdDate": "",
   "modifiedBy": {
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
   "modifiedDate": "",
   "selfUri": ""
}
	*/
	function updatePresence(presenceId, body){
		var apipath = '/api/v1/presencedefinitions/{presenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{presenceId}', presenceId);

        if(presenceId === undefined && presenceId !== null){
			throw 'Missing required  parameter: presenceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updatePresence = updatePresence;
	/**
     * @summary Delete an OrganizationPresence
	 * @description 
	 * @memberOf PresencedefinitionsApi#
	* @param {string} presenceId - Organization Presence ID
	*/
	function deletePresence(presenceId){
		var apipath = '/api/v1/presencedefinitions/{presenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{presenceId}', presenceId);

        if(presenceId === undefined && presenceId !== null){
			throw 'Missing required  parameter: presenceId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deletePresence = deletePresence;

    return self;
};
