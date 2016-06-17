//API VERSION - 
/**
* @class
* @example
* var api = new PresenceApi(pureCloudSession);
*/
var PresenceApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Get an Organization's list of Presence Definitions
	 * @memberOf PresenceApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} doDeleted - Deleted query can be true, false or all
	*/
	function getPresencedefinitions(pageNumber, pageSize, doDeleted){
		var apipath = '/api/v2/presencedefinitions';
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


		if(doDeleted !== undefined && doDeleted !== null){
			queryParameters.deleted = doDeleted;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPresencedefinitions = getPresencedefinitions;
	/**
     * @summary Create a Presence Definition
	 * @memberOf PresenceApi#
	* @param {} body - The Presence Definition to create
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "languageLabels": {},
   "systemPresence": "",
   "deactivated": true,
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
   "createdDate": "",
   "modifiedBy": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "modifiedDate": ""
}
	*/
	function postPresencedefinitions(body){
		var apipath = '/api/v2/presencedefinitions';
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
	self.postPresencedefinitions = postPresencedefinitions;
	/**
     * @summary Get a Presence Definition
	 * @memberOf PresenceApi#
	* @param {string} presenceId - Organization Presence ID
	*/
	function getPresenceId(presenceId){
		var apipath = '/api/v2/presencedefinitions/{presenceId}';
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
	self.getPresenceId = getPresenceId;
	/**
     * @summary Update a Presence Definition
	 * @memberOf PresenceApi#
	* @param {string} presenceId - Organization Presence ID
	* @param {} body - The OrganizationPresence to update
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "languageLabels": {},
   "systemPresence": "",
   "deactivated": true,
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
   "createdDate": "",
   "modifiedBy": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "modifiedDate": ""
}
	*/
	function putPresenceId(presenceId, body){
		var apipath = '/api/v2/presencedefinitions/{presenceId}';
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
	self.putPresenceId = putPresenceId;
	/**
     * @summary Delete a Presence Definition
	 * @memberOf PresenceApi#
	* @param {string} presenceId - Organization Presence ID
	*/
	function deletePresenceId(presenceId){
		var apipath = '/api/v2/presencedefinitions/{presenceId}';
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
	self.deletePresenceId = deletePresenceId;
	/**
     * @summary Get the list of SystemPresences
	 * @memberOf PresenceApi#
	*/
	function getSystempresences(){
		var apipath = '/api/v2/systempresences';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSystempresences = getSystempresences;
	/**
     * @summary Get a user's Presence
	 * @memberOf PresenceApi#
	* @param {string} userId - user Id
	* @param {string} sourceId - Source
	*/
	function getUserIdPresencesSourceId(userId, sourceId){
		var apipath = '/api/v2/users/{userId}/presences/{sourceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        apipath = apipath.replace('{sourceId}', sourceId);

        if(sourceId === undefined && sourceId !== null){
			throw 'Missing required  parameter: sourceId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserIdPresencesSourceId = getUserIdPresencesSourceId;
	/**
     * @summary Patch a user's Presence
	 * @description The presence object can be patched one of three ways. Option 1: Set the 'primary' property to true. This will set the 'source' defined in the path as the user's primary presence source. Option 2: Provide the presenceDefinition value. The 'id' is the only value required within the presenceDefinition. Option 3: Provide the message value. Option 1 can be combined with Option 2 and/or Option 3.
	 * @memberOf PresenceApi#
	* @param {string} userId - user Id
	* @param {string} sourceId - Source
	* @param {} body - The presence object can be patched one of three ways. Option 1: Set the 'primary' property to true. This will set the 'source' defined in the path as the user's primary presence source. Option 2: Provide the presenceDefinition value. The 'id' is the only value required within the presenceDefinition. Option 3: Provide the message value. Option 1 can be combined with Option 2 and/or Option 3.
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "source": "",
   "primary": true,
   "presenceDefinition": {
      "name": "",
      "languageLabels": {},
      "systemPresence": "",
      "deactivated": true,
      "createdBy": {},
      "createdDate": "",
      "modifiedBy": {},
      "modifiedDate": ""
   },
   "message": "",
   "modifiedDate": ""
}
	*/
	function patchUserIdPresencesSourceId(userId, sourceId, body){
		var apipath = '/api/v2/users/{userId}/presences/{sourceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        apipath = apipath.replace('{sourceId}', sourceId);

        if(sourceId === undefined && sourceId !== null){
			throw 'Missing required  parameter: sourceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchUserIdPresencesSourceId = patchUserIdPresencesSourceId;

    return self;
};
