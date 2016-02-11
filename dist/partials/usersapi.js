/**
* @class
* @example
* var api = new UsersApi(pureCloudSession);
*/
var UsersApi = function (pureCloudSession) {
	/**
     * @summary Get the list of available users.
	 * @memberOf UsersApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {array} id - id
	* @param {string} sortBy - Sort by
	* @param {string} role - Role
	* @param {string} name - Name
	* @param {string} username - Username
	* @param {array} skill - Skill
	* @param {array} expand - Which fields, if any, to expand
	*/
	function get(pageSize, pageNumber, id, sortBy, role, name, username, skill, expand){
		var apipath = '/api/v1/users';
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


		if(id !== undefined && id !== null){
			queryParameters.id = id;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(role !== undefined && role !== null){
			queryParameters.role = role;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(username !== undefined && username !== null){
			queryParameters.username = username;
		}


		if(skill !== undefined && skill !== null){
			queryParameters.skill = skill;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.get = get;
	/**
     * @summary Create a configuration service user.
	 * @memberOf UsersApi#
	* @param {} body - User
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "display": ""
}
	*/
	function create(body){
		var apipath = '/api/v1/users';
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
     * @summary Get user.
	 * @memberOf UsersApi#
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getMe(expand){
		var apipath = '/api/v1/users/me';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getMe = getMe;
	/**
     * @summary Get user.
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getUser(userId, expand){
		var apipath = '/api/v1/users/{userId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUser = getUser;
	/**
     * @summary Set user station
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {} body - stationUri
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "display": ""
}
	*/
	function updateUser(userId, body){
		var apipath = '/api/v1/users/{userId}';
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
	self.updateUser = updateUser;
	/**
     * @summary Get a user's CallForwarding
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function getUserCallforwarding(userId){
		var apipath = '/api/v1/users/{userId}/callforwarding';
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
	self.getUserCallforwarding = getUserCallforwarding;
	/**
     * @summary Update a user's CallForwarding
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "user": {
      "id": "",
      "name": "",
      "display": ""
   },
   "enabled": true,
   "phoneNumber": "",
   "modifiedDate": ""
}
	*/
	function updateUserCallforwarding(userId, body){
		var apipath = '/api/v1/users/{userId}/callforwarding';
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


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateUserCallforwarding = updateUserCallforwarding;
	/**
     * @summary Patch a user's CallForwarding
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "user": {
      "id": "",
      "name": "",
      "display": ""
   },
   "enabled": true,
   "phoneNumber": "",
   "modifiedDate": ""
}
	*/
	function patchUserCallforwarding(userId, body){
		var apipath = '/api/v1/users/{userId}/callforwarding';
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


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchUserCallforwarding = patchUserCallforwarding;
	/**
     * @summary Get a user's Geolocation
	 * @memberOf UsersApi#
	* @param {string} userId - user Id
	* @param {string} clientId - client Id
	*/
	function getUserGeolocationsByClientId(userId, clientId){
		var apipath = '/api/v1/users/{userId}/geolocations/{clientId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        apipath = apipath.replace('{clientId}', clientId);

        if(clientId === undefined && clientId !== null){
			throw 'Missing required  parameter: clientId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserGeolocationsByClientId = getUserGeolocationsByClientId;
	/**
     * @summary Patch a user's Geolocation
	 * @description The geolocation object can be patched one of three ways. Option 1: Set the 'primary' property to true. This will set the client as the user's primary geolocation source.  Option 2: Provide the 'latitude' and 'longitude' values.  This will enqueue an asynchronous update of the 'city', 'region', and 'country', generating a notification. A subsequent GET operation will include the new values for 'city', 'region' and 'country'.  Option 3:  Provide the 'city', 'region', 'country' values.  Option 1 can be combined with Option 2 or Option 3.  For example, update the client as primary and provide latitude and longitude values.
	 * @memberOf UsersApi#
	* @param {string} userId - user Id
	* @param {string} clientId - client Id
	* @param {} body - The geolocation object can be patched one of three ways. Option 1: Set the 'primary' property to true. This will set the client as the user's primary geolocation source.  Option 2: Provide the 'latitude' and 'longitude' values.  This will enqueue an asynchronous update of the 'city', 'region', and 'country', generating a notification. A subsequent GET operation will include the new values for 'city', 'region' and 'country'.  Option 3:  Provide the 'city', 'region', 'country' values.  Option 1 can be combined with Option 2 or Option 3.  For example, update the client as primary and provide latitude and longitude values.
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "type": "",
   "primary": true,
   "latitude": {},
   "longitude": {},
   "country": "",
   "region": "",
   "city": ""
}
	*/
	function patchUserGeolocationsByClientId(userId, clientId, body){
		var apipath = '/api/v1/users/{userId}/geolocations/{clientId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        apipath = apipath.replace('{clientId}', clientId);

        if(clientId === undefined && clientId !== null){
			throw 'Missing required  parameter: clientId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchUserGeolocationsByClientId = patchUserGeolocationsByClientId;
	/**
     * @summary Get a OutOfOffice
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function getUserOutofoffice(userId){
		var apipath = '/api/v1/users/{userId}/outofoffice';
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
	self.getUserOutofoffice = getUserOutofoffice;
	/**
     * @summary Update an OutOfOffice
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {} body - The updated UserPresence
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "user": {
      "id": "",
      "name": "",
      "display": ""
   },
   "startDate": "",
   "endDate": "",
   "active": true
}
	*/
	function updateUserOutofoffice(userId, body){
		var apipath = '/api/v1/users/{userId}/outofoffice';
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
	self.updateUserOutofoffice = updateUserOutofoffice;
	/**
     * @summary Get a user's PrimaryUserPresenceSource
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function getUserPrimarypresencesource(userId){
		var apipath = '/api/v1/users/{userId}/primarypresencesource';
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
	self.getUserPrimarypresencesource = getUserPrimarypresencesource;
	/**
     * @summary Update a user's PrimaryUserPresenceSource
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "user": {
      "id": "",
      "name": "",
      "display": ""
   },
   "primarySource": ""
}
	*/
	function updateUserPrimarypresencesource(userId, body){
		var apipath = '/api/v1/users/{userId}/primarypresencesource';
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


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateUserPrimarypresencesource = updateUserPrimarypresencesource;
	/**
     * @summary Get queues for user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getUserQueues(userId, pageSize, pageNumber){
		var apipath = '/api/v1/users/{userId}/queues';
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
	self.getUserQueues = getUserQueues;
	/**
     * @summary Join or unjoin a set of queues for a user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {} body - User Queues
	*/
	function patchUserQueues(userId, body){
		var apipath = '/api/v1/users/{userId}/queues';
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


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchUserQueues = patchUserQueues;
	/**
     * @summary Join or unjoin a queue for a user
	 * @memberOf UsersApi#
	* @param {string} queueId - Queue ID
	* @param {string} userId - User ID
	* @param {} body - Queue Member
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "wrapupCodes": [],
   "mediaSettings": {},
   "bullseye": {
      "rings": []
   },
   "acwSettings": {
      "wrapupPrompt": "",
      "timeoutMs": 0
   },
   "phoneNumber": "",
   "skillEvaluationMethod": "",
   "queueFlow": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "callingPartyName": "",
   "callingPartyNumber": "",
   "joined": true,
   "memberCount": 0
}
	*/
	function patchUserQueuesByQueueId(queueId, userId, body){
		var apipath = '/api/v1/users/{userId}/queues/{queueId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchUserQueuesByQueueId = patchUserQueuesByQueueId;
	/**
     * @summary List roles for user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function getUserRoles(userId){
		var apipath = '/api/v1/users/{userId}/roles';
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
	self.getUserRoles = getUserRoles;
	/**
     * @summary Fetch the routing status of a user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function getUserRoutingstatus(userId){
		var apipath = '/api/v1/users/{userId}/routingstatus';
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
	self.getUserRoutingstatus = getUserRoutingstatus;
	/**
     * @summary Update the routing status of a user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {} body - Routing Status
	 * @example
	 * Body Example:
	 * {
   "userId": "",
   "status": "",
   "startTime": ""
}
	*/
	function updateUserRoutingstatus(userId, body){
		var apipath = '/api/v1/users/{userId}/routingstatus';
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


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateUserRoutingstatus = updateUserRoutingstatus;
	/**
     * @summary List skills for user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function getUserSkills(userId){
		var apipath = '/api/v1/users/{userId}/skills';
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
	self.getUserSkills = getUserSkills;

    return self;
};
