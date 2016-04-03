//API VERSION - 
/**
* @class
* @example
* var api = new RoutingApi(pureCloudSession);
*/
var RoutingApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Query for queue observations
	 * @memberOf RoutingApi#
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
	function postQueuesObservationsQuery(body){
		var apipath = '/api/v2/analytics/queues/observations/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postQueuesObservationsQuery = postQueuesObservationsQuery;
	/**
     * @summary Get domains
	 * @memberOf RoutingApi#
	*/
	function getEmailDomains(){
		var apipath = '/api/v2/routing/email/domains';
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
		var apipath = '/api/v2/routing/email/domains';
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
	function getEmailDomainsDomainRoutes(domain){
		var apipath = '/api/v2/routing/email/domains/{domain}/routes';
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
	self.getEmailDomainsDomainRoutes = getEmailDomainsDomainRoutes;
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
	function postEmailDomainsDomainRoutes(domain, body){
		var apipath = '/api/v2/routing/email/domains/{domain}/routes';
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
	self.postEmailDomainsDomainRoutes = postEmailDomainsDomainRoutes;
	/**
     * @summary Get a route
	 * @memberOf RoutingApi#
	* @param {string} domain - email domain
	* @param {string} id - route ID
	*/
	function getEmailDomainsDomainRoutesId(domain, id){
		var apipath = '/api/v2/routing/email/domains/{domain}/routes/{id}';
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
	self.getEmailDomainsDomainRoutesId = getEmailDomainsDomainRoutesId;
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
	function putEmailDomainsDomainRoutesId(domain, id, body){
		var apipath = '/api/v2/routing/email/domains/{domain}/routes/{id}';
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
	self.putEmailDomainsDomainRoutesId = putEmailDomainsDomainRoutesId;
	/**
     * @summary Delete a route
	 * @memberOf RoutingApi#
	* @param {string} domain - email domain
	* @param {string} id - route ID
	*/
	function deleteEmailDomainsDomainRoutesId(domain, id){
		var apipath = '/api/v2/routing/email/domains/{domain}/routes/{id}';
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
	self.deleteEmailDomainsDomainRoutesId = deleteEmailDomainsDomainRoutesId;
	/**
     * @summary Delete a domain
	 * @memberOf RoutingApi#
	* @param {string} id - domain ID
	*/
	function deleteEmailDomainsId(id){
		var apipath = '/api/v2/routing/email/domains/{id}';
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
	self.deleteEmailDomainsId = deleteEmailDomainsId;
	/**
     * @summary Get email setup
	 * @memberOf RoutingApi#
	*/
	function getEmailSetup(){
		var apipath = '/api/v2/routing/email/setup';
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
		var apipath = '/api/v2/routing/queues';
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
   "memberCount": 0
}
	*/
	function postQueues(body){
		var apipath = '/api/v2/routing/queues';
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
	function getQueuesQueueId(queueId){
		var apipath = '/api/v2/routing/queues/{queueId}';
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
	self.getQueuesQueueId = getQueuesQueueId;
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
   "memberCount": 0
}
	*/
	function putQueuesQueueId(queueId, body){
		var apipath = '/api/v2/routing/queues/{queueId}';
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
	self.putQueuesQueueId = putQueuesQueueId;
	/**
     * @summary Delete a queue
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {boolean} forceDelete - 
	*/
	function deleteQueuesQueueId(queueId, forceDelete){
		var apipath = '/api/v2/routing/queues/{queueId}';
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
	self.deleteQueuesQueueId = deleteQueuesQueueId;
	/**
     * @summary Get Estimated Wait Time
	 * @memberOf RoutingApi#
	* @param {string} queueId - queueId
	* @param {string} conversationId - conversationId
	*/
	function getQueuesQueueIdEstimatedwaittime(queueId, conversationId){
		var apipath = '/api/v2/routing/queues/{queueId}/estimatedwaittime';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }


		if(conversationId !== undefined && conversationId !== null){
			queryParameters.conversationId = conversationId;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQueuesQueueIdEstimatedwaittime = getQueuesQueueIdEstimatedwaittime;
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
	function getQueuesQueueIdUsers(queueId, pageSize, pageNumber, sortBy, expand, directMembers){
		var apipath = '/api/v2/routing/queues/{queueId}/users';
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
	self.getQueuesQueueIdUsers = getQueuesQueueIdUsers;
	/**
     * @summary Bulk add or delete up to 100 queue members
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {} body - Queue Members
	* @param {boolean} doDelete - True to delete queue members
	*/
	function postQueuesQueueIdUsers(queueId, body, doDelete){
		var apipath = '/api/v2/routing/queues/{queueId}/users';
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
	self.postQueuesQueueIdUsers = postQueuesQueueIdUsers;
	/**
     * @summary Join or unjoin a set of users for a queue
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {} body - Queue Members
	*/
	function patchQueuesQueueIdUsers(queueId, body){
		var apipath = '/api/v2/routing/queues/{queueId}/users';
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
	self.patchQueuesQueueIdUsers = patchQueuesQueueIdUsers;
	/**
     * @summary Delete queue member
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {string} memberId - Member ID
	*/
	function deleteQueuesQueueIdUsersMemberId(queueId, memberId){
		var apipath = '/api/v2/routing/queues/{queueId}/users/{memberId}';
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
	self.deleteQueuesQueueIdUsersMemberId = deleteQueuesQueueIdUsersMemberId;
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
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
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
	function patchQueuesQueueIdUsersMemberId(queueId, memberId, body){
		var apipath = '/api/v2/routing/queues/{queueId}/users/{memberId}';
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
	self.patchQueuesQueueIdUsersMemberId = patchQueuesQueueIdUsersMemberId;
	/**
     * @summary Get the wrap-up codes for a queue
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {string} codeId - Code ID
	*/
	function getQueuesQueueIdWrapupcodes(queueId, codeId){
		var apipath = '/api/v2/routing/queues/{queueId}/wrapupcodes';
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
	self.getQueuesQueueIdWrapupcodes = getQueuesQueueIdWrapupcodes;
	/**
     * @summary Add up to 100 wrap-up codes to a queue
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {string} codeId - Code ID
	* @param {} body - 
	*/
	function postQueuesQueueIdWrapupcodes(queueId, codeId, body){
		var apipath = '/api/v2/routing/queues/{queueId}/wrapupcodes';
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
	self.postQueuesQueueIdWrapupcodes = postQueuesQueueIdWrapupcodes;
	/**
     * @summary Delete a wrap-up code from a queue
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {string} codeId - Code ID
	*/
	function deleteQueuesQueueIdWrapupcodesCodeId(queueId, codeId){
		var apipath = '/api/v2/routing/queues/{queueId}/wrapupcodes/{codeId}';
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
	self.deleteQueuesQueueIdWrapupcodesCodeId = deleteQueuesQueueIdWrapupcodesCodeId;
	/**
     * @summary Get the list of routing skills.
	 * @memberOf RoutingApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getSkills(pageSize, pageNumber){
		var apipath = '/api/v2/routing/skills';
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
	self.getSkills = getSkills;
	/**
     * @summary Create Skill
	 * @memberOf RoutingApi#
	* @param {} body - Skill
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateModified": "",
   "proficiency": ""
}
	*/
	function postSkills(body){
		var apipath = '/api/v2/routing/skills';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postSkills = postSkills;
	/**
     * @summary Get Routing Skill
	 * @memberOf RoutingApi#
	* @param {string} skillId - Skill ID
	*/
	function getSkillsSkillId(skillId){
		var apipath = '/api/v2/routing/skills/{skillId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{skillId}', skillId);

        if(skillId === undefined && skillId !== null){
			throw 'Missing required  parameter: skillId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSkillsSkillId = getSkillsSkillId;
	/**
     * @summary Update Routing Skill
	 * @memberOf RoutingApi#
	* @param {string} skillId - Skill ID
	* @param {} body - Skill
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateModified": "",
   "proficiency": ""
}
	*/
	function putSkillsSkillId(skillId, body){
		var apipath = '/api/v2/routing/skills/{skillId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{skillId}', skillId);

        if(skillId === undefined && skillId !== null){
			throw 'Missing required  parameter: skillId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putSkillsSkillId = putSkillsSkillId;
	/**
     * @summary Delete Routing Skill
	 * @memberOf RoutingApi#
	* @param {string} skillId - Skill ID
	*/
	function deleteSkillsSkillId(skillId){
		var apipath = '/api/v2/routing/skills/{skillId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{skillId}', skillId);

        if(skillId === undefined && skillId !== null){
			throw 'Missing required  parameter: skillId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteSkillsSkillId = deleteSkillsSkillId;
	/**
     * @summary Get the utilization settings.
	 * @memberOf RoutingApi#
	*/
	function getUtilization(){
		var apipath = '/api/v2/routing/utilization';
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
   "utilization": {}
}
	*/
	function putUtilization(body){
		var apipath = '/api/v2/routing/utilization';
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
		var apipath = '/api/v2/routing/utilization';
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
		var apipath = '/api/v2/routing/wrapupcodes';
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
		var apipath = '/api/v2/routing/wrapupcodes';
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
	function getWrapupcodesCodeId(codeId){
		var apipath = '/api/v2/routing/wrapupcodes/{codeId}';
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
	self.getWrapupcodesCodeId = getWrapupcodesCodeId;
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
	function putWrapupcodesCodeId(codeId, body){
		var apipath = '/api/v2/routing/wrapupcodes/{codeId}';
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
	self.putWrapupcodesCodeId = putWrapupcodesCodeId;
	/**
     * @summary Delete wrap-up code
	 * @memberOf RoutingApi#
	* @param {string} codeId - Wrapup Code ID
	*/
	function deleteWrapupcodesCodeId(codeId){
		var apipath = '/api/v2/routing/wrapupcodes/{codeId}';
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
	self.deleteWrapupcodesCodeId = deleteWrapupcodesCodeId;
	/**
     * @summary List routing skills for user
	 * @memberOf RoutingApi#
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
	 * @memberOf RoutingApi#
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
	 * @memberOf RoutingApi#
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

    return self;
};
