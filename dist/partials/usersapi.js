//API VERSION - 
/**
* @class
* @example
* var api = new UsersApi(pureCloudSession);
*/
var UsersApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Query for user aggregates
	 * @memberOf UsersApi#
	* @param {} body - query
	 * @example
	 * Body Example:
	 * {
   "interval": "",
   "granularity": "",
   "groupBy": [],
   "filter": {
      "type": "",
      "clauses": [],
      "predicates": []
   },
   "metrics": [],
   "flattenMultivaluedDimensions": true
}
	*/
	function postUsersAggregatesQuery(body){
		var apipath = '/api/v2/analytics/users/aggregates/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postUsersAggregatesQuery = postUsersAggregatesQuery;
	/**
     * @summary Query for user observations
	 * @memberOf UsersApi#
	* @param {} body - query
	 * @example
	 * Body Example:
	 * {
   "filter": {
      "type": "",
      "clauses": [],
      "predicates": []
   },
   "metrics": []
}
	*/
	function postUsersObservationsQuery(body){
		var apipath = '/api/v2/analytics/users/observations/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postUsersObservationsQuery = postUsersObservationsQuery;
	/**
     * @summary Get the list of available users.
	 * @memberOf UsersApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {array} id - The list of user ids to get. Paging is ignored if ids are specified
	* @param {string} sortOrder - Ascending or descending sort order
	[ascending,
	descending],
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getUsers(pageSize, pageNumber, id, sortOrder, expand){
		var apipath = '/api/v2/users';
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


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUsers = getUsers;
	/**
     * @summary Create user
	 * @memberOf UsersApi#
	* @param {} body - User
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "department": "",
   "email": "",
   "addresses": [],
   "title": "",
   "password": "",
   "version": ""
}
	*/
	function postUsers(body){
		var apipath = '/api/v2/users';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postUsers = postUsers;
	/**
     * @summary Get user.
	 * @memberOf UsersApi#
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getMe(expand){
		var apipath = '/api/v2/users/me';
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
     * @summary Search using q64
	 * @memberOf UsersApi#
	* @param {string} q64 - 
	* @param {array} expand - 
	*/
	function getSearch(q64, expand){
		var apipath = '/api/v2/users/search';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(q64 !== undefined && q64 !== null){
			queryParameters.q64 = q64;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSearch = getSearch;
	/**
     * @summary Search
	 * @memberOf UsersApi#
	* @param {} body - Search request options
	 * @example
	 * Body Example:
	 * {
   "types": [],
   "sortOrder": "",
   "query": [],
   "sortBy": "",
   "pageSize": 0,
   "pageNumber": 0,
   "returnFields": [],
   "aggregations": [],
   "expand": []
}
	*/
	function postSearch(body){
		var apipath = '/api/v2/users/search';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postSearch = postSearch;
	/**
     * @summary Get user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getUserId(userId, expand){
		var apipath = '/api/v2/users/{userId}';
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
	self.getUserId = getUserId;
	/**
     * @summary Delete user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function deleteUserId(userId){
		var apipath = '/api/v2/users/{userId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteUserId = deleteUserId;
	/**
     * @summary Update user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "chat": {
      "jabberId": ""
   },
   "department": "",
   "email": "",
   "addresses": [],
   "title": "",
   "username": "",
   "images": []
}
	*/
	function patchUserId(userId, body){
		var apipath = '/api/v2/users/{userId}';
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
	self.patchUserId = patchUserId;
	/**
     * @summary Get a user's CallForwarding
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function getUserIdCallforwarding(userId){
		var apipath = '/api/v2/users/{userId}/callforwarding';
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
	self.getUserIdCallforwarding = getUserIdCallforwarding;
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
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "enabled": true,
   "phoneNumber": "",
   "modifiedDate": ""
}
	*/
	function putUserIdCallforwarding(userId, body){
		var apipath = '/api/v2/users/{userId}/callforwarding';
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
	self.putUserIdCallforwarding = putUserIdCallforwarding;
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
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "enabled": true,
   "phoneNumber": "",
   "modifiedDate": ""
}
	*/
	function patchUserIdCallforwarding(userId, body){
		var apipath = '/api/v2/users/{userId}/callforwarding';
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
	self.patchUserIdCallforwarding = patchUserIdCallforwarding;
	/**
     * @summary Get a user's Geolocation
	 * @memberOf UsersApi#
	* @param {string} userId - user Id
	* @param {string} clientId - client Id
	*/
	function getUserIdGeolocationsClientId(userId, clientId){
		var apipath = '/api/v2/users/{userId}/geolocations/{clientId}';
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
	self.getUserIdGeolocationsClientId = getUserIdGeolocationsClientId;
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
	function patchUserIdGeolocationsClientId(userId, clientId, body){
		var apipath = '/api/v2/users/{userId}/geolocations/{clientId}';
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
	self.patchUserIdGeolocationsClientId = patchUserIdGeolocationsClientId;
	/**
     * @summary Get a OutOfOffice
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function getUserIdOutofoffice(userId){
		var apipath = '/api/v2/users/{userId}/outofoffice';
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
	self.getUserIdOutofoffice = getUserIdOutofoffice;
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
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "startDate": "",
   "endDate": "",
   "active": true
}
	*/
	function putUserIdOutofoffice(userId, body){
		var apipath = '/api/v2/users/{userId}/outofoffice';
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
	self.putUserIdOutofoffice = putUserIdOutofoffice;
	/**
     * @summary Get a user's Presence
	 * @memberOf UsersApi#
	* @param {string} userId - user Id
	* @param {string} source - source
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
     * @summary Patch a user's Presence
	 * @description The presence object can be patched one of three ways. Option 1: Set the 'primary' property to true. This will set the 'source' defined in the path as the user's primary presence source. Option 2: Provide the presenceDefinition value. Option 3: Provide the message value.  Option 1 can be combined with Option2 and/or Option 3.
	 * @memberOf UsersApi#
	* @param {string} userId - user Id
	* @param {string} source - source
	* @param {} body - The presence object can be patched one of three ways. Option 1: Set the 'primary' property to true. This will set the 'source' defined in the path as the user's primary presence source. Option 2: Provide the presenceDefinition value. Option 3: Provide the message value.  Option 1 can be combined with Option2 and/or Option 3.
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
   "message": ""
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


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchUserIdPresencesSource = patchUserIdPresencesSource;
	/**
     * @summary Get queues for user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getUserIdQueues(userId, pageSize, pageNumber){
		var apipath = '/api/v2/users/{userId}/queues';
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
	self.getUserIdQueues = getUserIdQueues;
	/**
     * @summary Join or unjoin a set of queues for a user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {} body - User Queues
	*/
	function patchUserIdQueues(userId, body){
		var apipath = '/api/v2/users/{userId}/queues';
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
	self.patchUserIdQueues = patchUserIdQueues;
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
   "mediaSettings": {},
   "bullseye": {
      "rings": []
   },
   "acwSettings": {
      "wrapupPrompt": "",
      "timeoutMs": 0
   },
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
	function patchUserIdQueuesQueueId(queueId, userId, body){
		var apipath = '/api/v2/users/{userId}/queues/{queueId}';
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
	self.patchUserIdQueuesQueueId = patchUserIdQueuesQueueId;
	/**
     * @summary Returns a listing of roles and permissions for a user.
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function getUserIdRoles(userId){
		var apipath = '/api/v2/users/{userId}/roles';
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
	self.getUserIdRoles = getUserIdRoles;
	/**
     * @summary Sets the user's roles
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {} body - 
	*/
	function putUserIdRoles(userId, body){
		var apipath = '/api/v2/users/{userId}/roles';
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
	self.putUserIdRoles = putUserIdRoles;
	/**
     * @summary Removes all the roles from the user.
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function deleteUserIdRoles(userId){
		var apipath = '/api/v2/users/{userId}/roles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteUserIdRoles = deleteUserIdRoles;
	/**
     * @summary List routing skills for user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortOrder - Ascending or descending sort order
	[ascending,
	descending],
	*/
	function getUserIdRoutingskills(userId, pageSize, pageNumber, sortOrder){
		var apipath = '/api/v2/users/{userId}/routingskills';
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


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserIdRoutingskills = getUserIdRoutingskills;
	/**
     * @summary Add routing skill to user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {} body - Skill
	 * @example
	 * Body Example:
	 * {
   "name": ""
}
	*/
	function postUserIdRoutingskills(userId, body){
		var apipath = '/api/v2/users/{userId}/routingskills';
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


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postUserIdRoutingskills = postUserIdRoutingskills;
	/**
     * @summary Remove routing skill from user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {string} skillId - 
	*/
	function deleteUserIdRoutingskillsSkillId(userId, skillId){
		var apipath = '/api/v2/users/{userId}/routingskills/{skillId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        apipath = apipath.replace('{skillId}', skillId);

        if(skillId === undefined && skillId !== null){
			throw 'Missing required  parameter: skillId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteUserIdRoutingskillsSkillId = deleteUserIdRoutingskillsSkillId;
	/**
     * @summary Fetch the routing status of a user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function getUserIdRoutingstatus(userId){
		var apipath = '/api/v2/users/{userId}/routingstatus';
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
	self.getUserIdRoutingstatus = getUserIdRoutingstatus;
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
	function putUserIdRoutingstatus(userId, body){
		var apipath = '/api/v2/users/{userId}/routingstatus';
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
	self.putUserIdRoutingstatus = putUserIdRoutingstatus;
	/**
     * @summary Get station information for user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function getUserIdStation(userId){
		var apipath = '/api/v2/users/{userId}/station';
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
	self.getUserIdStation = getUserIdStation;
	/**
     * @summary Clear associated station
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function deleteUserIdStationAssociatedstation(userId){
		var apipath = '/api/v2/users/{userId}/station/associatedstation';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteUserIdStationAssociatedstation = deleteUserIdStationAssociatedstation;
	/**
     * @summary Set associated station
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {string} stationId - 
	*/
	function putUserIdStationAssociatedstationStationId(userId, stationId){
		var apipath = '/api/v2/users/{userId}/station/associatedstation/{stationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        apipath = apipath.replace('{stationId}', stationId);

        if(stationId === undefined && stationId !== null){
			throw 'Missing required  parameter: stationId';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putUserIdStationAssociatedstationStationId = putUserIdStationAssociatedstationStationId;
	/**
     * @summary Clear default station
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function deleteUserIdStationDefaultstation(userId){
		var apipath = '/api/v2/users/{userId}/station/defaultstation';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteUserIdStationDefaultstation = deleteUserIdStationDefaultstation;
	/**
     * @summary Set default station
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {string} stationId - 
	*/
	function putUserIdStationDefaultstationStationId(userId, stationId){
		var apipath = '/api/v2/users/{userId}/station/defaultstation/{stationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        apipath = apipath.replace('{stationId}', stationId);

        if(stationId === undefined && stationId !== null){
			throw 'Missing required  parameter: stationId';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putUserIdStationDefaultstationStationId = putUserIdStationDefaultstationStationId;

    return self;
};
