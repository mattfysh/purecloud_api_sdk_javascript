/**
* @class
* @example
* var api = new RoutingApi(pureCloudSession);
*/
var RoutingApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Get domains
	 * @memberOf RoutingApi#
	*/
	function getEmailDomains(){
		var apipath = '/api/v1/routing/email/domains';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEmailDomains = getEmailDomains;
	/**
     * @summary Create a domain
	 * @memberOf RoutingApi#
	* @param {} body - Domain
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "mxRecordStatus": "",
   "subDomain": true
}
	*/
	function postEmailDomains(body){
		var apipath = '/api/v1/routing/email/domains';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postEmailDomains = postEmailDomains;
	/**
     * @summary Get routes
	 * @memberOf RoutingApi#
	* @param {string} domain - email domain
	*/
	function getEmailDomainsRoutes(domain){
		var apipath = '/api/v1/routing/email/domains/{domain}/routes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{domain}', domain);

        if(domain === undefined && domain !== null){
			throw 'Missing required  parameter: domain';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEmailDomainsRoutes = getEmailDomainsRoutes;
	/**
     * @summary Create a route
	 * @memberOf RoutingApi#
	* @param {string} domain - email domain
	* @param {} body - Route
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "pattern": "",
   "queue": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "priority": 0,
   "skills": [],
   "language": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "fromName": "",
   "fromEmail": ""
}
	*/
	function postEmailDomainsRoutes(domain, body){
		var apipath = '/api/v1/routing/email/domains/{domain}/routes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{domain}', domain);

        if(domain === undefined && domain !== null){
			throw 'Missing required  parameter: domain';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postEmailDomainsRoutes = postEmailDomainsRoutes;
	/**
     * @summary Get a route
	 * @memberOf RoutingApi#
	* @param {string} domain - email domain
	* @param {string} id - route ID
	*/
	function getEmailDomainsRoutes(domain, id){
		var apipath = '/api/v1/routing/email/domains/{domain}/routes/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{domain}', domain);

        if(domain === undefined && domain !== null){
			throw 'Missing required  parameter: domain';
        }

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEmailDomainsRoutes = getEmailDomainsRoutes;
	/**
     * @summary Update a route
	 * @memberOf RoutingApi#
	* @param {string} domain - email domain
	* @param {string} id - route ID
	* @param {} body - Route
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "pattern": "",
   "queue": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "priority": 0,
   "skills": [],
   "language": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "fromName": "",
   "fromEmail": ""
}
	*/
	function putEmailDomainsRoutes(domain, id, body){
		var apipath = '/api/v1/routing/email/domains/{domain}/routes/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{domain}', domain);

        if(domain === undefined && domain !== null){
			throw 'Missing required  parameter: domain';
        }

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putEmailDomainsRoutes = putEmailDomainsRoutes;
	/**
     * @summary Delete a route
	 * @memberOf RoutingApi#
	* @param {string} domain - email domain
	* @param {string} id - route ID
	*/
	function deleteEmailDomainsRoutes(domain, id){
		var apipath = '/api/v1/routing/email/domains/{domain}/routes/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{domain}', domain);

        if(domain === undefined && domain !== null){
			throw 'Missing required  parameter: domain';
        }

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteEmailDomainsRoutes = deleteEmailDomainsRoutes;
	/**
     * @summary Delete a domain
	 * @memberOf RoutingApi#
	* @param {string} id - domain ID
	*/
	function deleteEmailDomains(id){
		var apipath = '/api/v1/routing/email/domains/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteEmailDomains = deleteEmailDomains;
	/**
     * @summary Get email setup
	 * @memberOf RoutingApi#
	*/
	function getEmailSetup(){
		var apipath = '/api/v1/routing/email/setup';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEmailSetup = getEmailSetup;
	/**
     * @summary Get list of queues.
	 * @memberOf RoutingApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	* @param {string} name - Name
	* @param {boolean} active - Active
	*/
	function getQueues(pageSize, pageNumber, sortBy, name, active){
		var apipath = '/api/v1/routing/queues';
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


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(active !== undefined && active !== null){
			queryParameters.active = active;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQueues = getQueues;
	/**
     * @summary Create queue
	 * @memberOf RoutingApi#
	* @param {} body - Queue
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
   "memberCount": 0
}
	*/
	function postQueues(body){
		var apipath = '/api/v1/routing/queues';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postQueues = postQueues;
	/**
     * @summary Get details about this queue.
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	*/
	function getQueue(queueId){
		var apipath = '/api/v1/routing/queues/{queueId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQueue = getQueue;
	/**
     * @summary Update a queue
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {} body - Queue
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
   "memberCount": 0
}
	*/
	function putQueue(queueId, body){
		var apipath = '/api/v1/routing/queues/{queueId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putQueue = putQueue;
	/**
     * @summary Delete a queue
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {boolean} forceDelete - 
	*/
	function deleteQueue(queueId, forceDelete){
		var apipath = '/api/v1/routing/queues/{queueId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }


		if(forceDelete !== undefined && forceDelete !== null){
			queryParameters.forceDelete = forceDelete;
		}


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteQueue = deleteQueue;
	/**
     * @summary Get members in a queue
	 * @description Get the list of members of a queue
	 * @memberOf RoutingApi#
	* @param {string} queueId - Get the list of members of a queue
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} userId - UserID
	* @param {string} statusId - Status ID
	* @param {boolean} joined - Joined
	* @param {string} expand - expand
	routingStatus,
	*/
	function getQueueMembers(queueId, pageSize, pageNumber, userId, statusId, joined, expand){
		var apipath = '/api/v1/routing/queues/{queueId}/members';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(userId !== undefined && userId !== null){
			queryParameters.userId = userId;
		}


		if(statusId !== undefined && statusId !== null){
			queryParameters.statusId = statusId;
		}


		if(joined !== undefined && joined !== null){
			queryParameters.joined = joined;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQueueMembers = getQueueMembers;
	/**
     * @summary Join or unjoin a user to the queue.
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {string} memberId - Member/User ID
	* @param {} body - To join queue ~ "joined":true
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "user": {
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
   },
   "ringNumber": 0,
   "joined": true,
   "memberBy": "",
   "routingStatus": {
      "userId": "",
      "status": "",
      "startTime": ""
   }
}
	*/
	function putQueueMember(queueId, memberId, body){
		var apipath = '/api/v1/routing/queues/{queueId}/members/{memberId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        apipath = apipath.replace('{memberId}', memberId);

        if(memberId === undefined && memberId !== null){
			throw 'Missing required  parameter: memberId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putQueueMember = putQueueMember;
	/**
     * @summary Get the members of this queue
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	* @param {string} expand - expand
	* @param {boolean} directMembers - Only get users that are direct members of the queue
	*/
	function getQueueUsers(queueId, pageSize, pageNumber, sortBy, expand, directMembers){
		var apipath = '/api/v1/routing/queues/{queueId}/users';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(directMembers !== undefined && directMembers !== null){
			queryParameters.directMembers = directMembers;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQueueUsers = getQueueUsers;
	/**
     * @summary Bulk add or delete up to 100 queue members
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {} body - Queue Members
	* @param {boolean} doDelete - True to delete queue members
	*/
	function postQueueUsers(queueId, body, doDelete){
		var apipath = '/api/v1/routing/queues/{queueId}/users';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(doDelete !== undefined && doDelete !== null){
			queryParameters.delete = doDelete;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postQueueUsers = postQueueUsers;
	/**
     * @summary Join or unjoin a set of users for a queue
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {} body - Queue Members
	*/
	function patchQueueUsers(queueId, body){
		var apipath = '/api/v1/routing/queues/{queueId}/users';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchQueueUsers = patchQueueUsers;
	/**
     * @summary Delete queue member
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {string} memberId - Member ID
	*/
	function deleteQueueUser(queueId, memberId){
		var apipath = '/api/v1/routing/queues/{queueId}/users/{memberId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        apipath = apipath.replace('{memberId}', memberId);

        if(memberId === undefined && memberId !== null){
			throw 'Missing required  parameter: memberId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteQueueUser = deleteQueueUser;
	/**
     * @summary Update the ring number of joined status for a User in a Queue
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {string} memberId - Member ID
	* @param {} body - Queue Member
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "user": {
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
   },
   "ringNumber": 0,
   "joined": true,
   "memberBy": "",
   "routingStatus": {
      "userId": "",
      "status": "",
      "startTime": ""
   }
}
	*/
	function patchQueueUser(queueId, memberId, body){
		var apipath = '/api/v1/routing/queues/{queueId}/users/{memberId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        apipath = apipath.replace('{memberId}', memberId);

        if(memberId === undefined && memberId !== null){
			throw 'Missing required  parameter: memberId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchQueueUser = patchQueueUser;
	/**
     * @summary Get the wrap-up codes for a queue
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {string} codeId - Code ID
	*/
	function getQueueWrapupcodes(queueId, codeId){
		var apipath = '/api/v1/routing/queues/{queueId}/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        apipath = apipath.replace('{codeId}', codeId);

        if(codeId === undefined && codeId !== null){
			throw 'Missing required  parameter: codeId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQueueWrapupcodes = getQueueWrapupcodes;
	/**
     * @summary Add up to 100 wrap-up codes to a queue
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {string} codeId - Code ID
	* @param {} body - 
	*/
	function postQueueWrapupcodes(queueId, codeId, body){
		var apipath = '/api/v1/routing/queues/{queueId}/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        apipath = apipath.replace('{codeId}', codeId);

        if(codeId === undefined && codeId !== null){
			throw 'Missing required  parameter: codeId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postQueueWrapupcodes = postQueueWrapupcodes;
	/**
     * @summary Delete a wrap-up code from a queue
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {string} codeId - Code ID
	*/
	function deleteQueueWrapupcode(queueId, codeId){
		var apipath = '/api/v1/routing/queues/{queueId}/wrapupcodes/{codeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        apipath = apipath.replace('{codeId}', codeId);

        if(codeId === undefined && codeId !== null){
			throw 'Missing required  parameter: codeId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteQueueWrapupcode = deleteQueueWrapupcode;
	/**
     * @summary Get the list of skills.
	 * @memberOf RoutingApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	* @param {string} name - Name
	*/
	function getSkills(pageSize, pageNumber, sortBy, name){
		var apipath = '/api/v1/routing/skills';
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


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSkills = getSkills;
	/**
     * @summary Get the utilization settings.
	 * @memberOf RoutingApi#
	*/
	function getUtilization(){
		var apipath = '/api/v1/routing/utilization';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUtilization = getUtilization;
	/**
     * @summary Update the utilization settings.
	 * @memberOf RoutingApi#
	* @param {} body - utilization
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "utilization": {}
}
	*/
	function putUtilization(body){
		var apipath = '/api/v1/routing/utilization';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putUtilization = putUtilization;
	/**
     * @summary Delete utilization settings and revert to system defaults.
	 * @memberOf RoutingApi#
	*/
	function deleteUtilization(){
		var apipath = '/api/v1/routing/utilization';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteUtilization = deleteUtilization;
	/**
     * @summary Get list of wrapup codes.
	 * @memberOf RoutingApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	*/
	function getWrapupcodes(pageSize, pageNumber, sortBy){
		var apipath = '/api/v1/routing/wrapupcodes';
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


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWrapupcodes = getWrapupcodes;
	/**
     * @summary Create a wrap-up code
	 * @memberOf RoutingApi#
	* @param {} body - WrapupCode
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": ""
}
	*/
	function postWrapupcodes(body){
		var apipath = '/api/v1/routing/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postWrapupcodes = postWrapupcodes;
	/**
     * @summary Get details about this wrap-up code.
	 * @memberOf RoutingApi#
	* @param {string} codeId - Wrapup Code ID
	*/
	function getWrapupcode(codeId){
		var apipath = '/api/v1/routing/wrapupcodes/{codeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{codeId}', codeId);

        if(codeId === undefined && codeId !== null){
			throw 'Missing required  parameter: codeId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWrapupcode = getWrapupcode;
	/**
     * @summary Update wrap-up code
	 * @memberOf RoutingApi#
	* @param {string} codeId - Wrapup Code ID
	* @param {} body - WrapupCode
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": ""
}
	*/
	function putWrapupcode(codeId, body){
		var apipath = '/api/v1/routing/wrapupcodes/{codeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{codeId}', codeId);

        if(codeId === undefined && codeId !== null){
			throw 'Missing required  parameter: codeId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putWrapupcode = putWrapupcode;
	/**
     * @summary Delete wrap-up code
	 * @memberOf RoutingApi#
	* @param {string} codeId - Wrapup Code ID
	*/
	function deleteWrapupcode(codeId){
		var apipath = '/api/v1/routing/wrapupcodes/{codeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{codeId}', codeId);

        if(codeId === undefined && codeId !== null){
			throw 'Missing required  parameter: codeId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteWrapupcode = deleteWrapupcode;

    return self;
};
