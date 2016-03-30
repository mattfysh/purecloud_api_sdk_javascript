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
     * @summary Get an Organization's list of Presences
	 * @memberOf PresenceApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	*/
	function getPresencedefinitions(pageNumber, pageSize){
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


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPresencedefinitions = getPresencedefinitions;
	/**
     * @summary Create an OrganizationPresence
	 * @memberOf PresenceApi#
	* @param {} body - The OrganizationPresence to create
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
     * @summary Get an OrganizationPresence
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
     * @summary Update an OrganizationPresence
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
     * @summary Delete an OrganizationPresence
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
     * @summary Get an User's list of Presences
	 * @memberOf PresenceApi#
	* @param {string} userId - User ID
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	*/
	function getUserIdPresences(userId, pageNumber, pageSize){
		var apipath = '/api/v2/users/{userId}/presences';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserIdPresences = getUserIdPresences;
	/**
     * @summary Get a UserPresence
	 * @memberOf PresenceApi#
	* @param {string} userId - User ID
	* @param {string} source - Source
	*/
	function getUserIdPresencesSource(userId, source){
		var apipath = '/api/v2/users/{userId}/presences/{source}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        apipath = apipath.replace('{source}', source);

        if(source === undefined && source !== null){
			throw 'Missing required  parameter: source';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserIdPresencesSource = getUserIdPresencesSource;
	/**
     * @summary Update a UserPresence
	 * @memberOf PresenceApi#
	* @param {string} userId - User ID
	* @param {string} source - Source
	* @param {} body - The updated UserPresence
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "user": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "source": "",
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
	function putUserIdPresencesSource(userId, source, body){
		var apipath = '/api/v2/users/{userId}/presences/{source}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        apipath = apipath.replace('{source}', source);

        if(source === undefined && source !== null){
			throw 'Missing required  parameter: source';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putUserIdPresencesSource = putUserIdPresencesSource;
	/**
     * @summary Patch a UserPresence
	 * @memberOf PresenceApi#
	* @param {string} userId - User ID
	* @param {string} source - Source
	* @param {} body - The patched UserPresence
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "user": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "source": "",
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
	function patchUserIdPresencesSource(userId, source, body){
		var apipath = '/api/v2/users/{userId}/presences/{source}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        apipath = apipath.replace('{source}', source);

        if(source === undefined && source !== null){
			throw 'Missing required  parameter: source';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchUserIdPresencesSource = patchUserIdPresencesSource;
	/**
     * @summary Get a user's Primary UserPresence
	 * @memberOf PresenceApi#
	* @param {string} userId - User ID
	*/
	function getUserIdPrimarypresence(userId){
		var apipath = '/api/v2/users/{userId}/primarypresence';
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
	self.getUserIdPrimarypresence = getUserIdPrimarypresence;

    return self;
};
