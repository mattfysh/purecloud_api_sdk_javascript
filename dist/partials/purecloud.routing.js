if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.routing";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.routing = (function (PureCloud) {
	/**
	* @namespace routing/email/domains
	**/
	/**
	* @namespace routing/email/domains/routes
	**/
	/**
	* @namespace routing/email/setup
	**/
	/**
	* @namespace routing/queues
	**/
	/**
	* @namespace routing/queues/members
	**/
	/**
	* @namespace routing/queues/users
	**/
	/**
	* @namespace routing/queues/wrapupcodes
	**/
	/**
	* @namespace routing/skills
	**/
	/**
	* @namespace routing/wrapupcodes
	**/

	var self = {};
	self.email = self.email || {};
	self.email.domains = self.email.domains || {};

	/**
     * 
     * @method getDomains
	 * @memberof routing/email/domains
	 *
     */
     self.email.domains.getDomains = function(){
		var path = '/api/v1/routing/email/domains';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.email = self.email || {};
	self.email.domains = self.email.domains || {};

	/**
     * 
     * @method createADomain
	 * @memberof routing/email/domains

	* @param {} body - Domain
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "mxRecordStatus": "",
   "selfUri": ""
}
	 *
     */
     self.email.domains.createADomain = function(body){
		var path = '/api/v1/routing/email/domains';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.email = self.email || {};
	self.email.domains = self.email.domains || {};
	self.email.domains.routes = self.email.domains.routes || {};

	/**
     * 
     * @method getRoutes
	 * @memberof routing/email/domains/routes

	* @param {string} domain - email domain
	 *
     */
     self.email.domains.routes.getRoutes = function(domain){
		var path = '/api/v1/routing/email/domains/{domain}/routes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{domain}', domain);

        if(domain === undefined && domain !== null){
			throw 'Missing required  parameter: domain';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.email = self.email || {};
	self.email.domains = self.email.domains || {};
	self.email.domains.routes = self.email.domains.routes || {};

	/**
     * 
     * @method createARoute
	 * @memberof routing/email/domains/routes

	* @param {string} domain - email domain

	* @param {} body - Route
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "fromEmail": "",
   "spamThreshold": {},
   "selfUri": ""
}
	 *
     */
     self.email.domains.routes.createARoute = function(domain, body){
		var path = '/api/v1/routing/email/domains/{domain}/routes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{domain}', domain);

        if(domain === undefined && domain !== null){
			throw 'Missing required  parameter: domain';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.email = self.email || {};
	self.email.domains = self.email.domains || {};
	self.email.domains.routes = self.email.domains.routes || {};

	/**
     * 
     * @method getARoute
	 * @memberof routing/email/domains/routes

	* @param {string} domain - email domain

	* @param {string} id - route ID
	 *
     */
     self.email.domains.routes.getARoute = function(domain, id){
		var path = '/api/v1/routing/email/domains/{domain}/routes/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{domain}', domain);

        if(domain === undefined && domain !== null){
			throw 'Missing required  parameter: domain';
        }

        path = path.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.email = self.email || {};
	self.email.domains = self.email.domains || {};
	self.email.domains.routes = self.email.domains.routes || {};

	/**
     * 
     * @method updateARoute
	 * @memberof routing/email/domains/routes

	* @param {string} domain - email domain

	* @param {string} id - route ID

	* @param {} body - Route
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "fromEmail": "",
   "spamThreshold": {},
   "selfUri": ""
}
	 *
     */
     self.email.domains.routes.updateARoute = function(domain, id, body){
		var path = '/api/v1/routing/email/domains/{domain}/routes/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{domain}', domain);

        if(domain === undefined && domain !== null){
			throw 'Missing required  parameter: domain';
        }

        path = path.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.email = self.email || {};
	self.email.domains = self.email.domains || {};
	self.email.domains.routes = self.email.domains.routes || {};

	/**
     * 
     * @method deleteARoute
	 * @memberof routing/email/domains/routes

	* @param {string} domain - email domain

	* @param {string} id - route ID
	 *
     */
     self.email.domains.routes.deleteARoute = function(domain, id){
		var path = '/api/v1/routing/email/domains/{domain}/routes/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{domain}', domain);

        if(domain === undefined && domain !== null){
			throw 'Missing required  parameter: domain';
        }

        path = path.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.email = self.email || {};
	self.email.domains = self.email.domains || {};

	/**
     * 
     * @method deleteADomain
	 * @memberof routing/email/domains

	* @param {string} id - domain ID
	 *
     */
     self.email.domains.deleteADomain = function(id){
		var path = '/api/v1/routing/email/domains/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.email = self.email || {};
	self.email.setup = self.email.setup || {};

	/**
     * 
     * @method getEmailSetup
	 * @memberof routing/email/setup
	 *
     */
     self.email.setup.getEmailSetup = function(){
		var path = '/api/v1/routing/email/setup';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.queues = self.queues || {};

	/**
     * 
     * @method getQueues
	 * @memberof routing/queues

	* @param {string} QueueId - Queue ID

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number

	* @param {string} sortBy - Sort by

	* @param {string} name - Name

	* @param {boolean} active - Active
	 *
     */
     self.queues.getQueues = function(QueueId, pageSize, pageNumber, sortBy, name, active){
		var path = '/api/v1/routing/queues';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{QueueId}', QueueId);

        if(QueueId === undefined && QueueId !== null){
			throw 'Missing required  parameter: QueueId';
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


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(active !== undefined && active !== null){
			queryParameters.active = active;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.queues = self.queues || {};

	/**
     * 
     * @method createQueue
	 * @memberof routing/queues

	* @param {string} QueueId - Queue ID

	* @param {} body - Queue
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "memberCount": 0,
   "selfUri": ""
}
	 *
     */
     self.queues.createQueue = function(QueueId, body){
		var path = '/api/v1/routing/queues';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{QueueId}', QueueId);

        if(QueueId === undefined && QueueId !== null){
			throw 'Missing required  parameter: QueueId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.queues = self.queues || {};

	/**
     * 
     * @method getQueue
	 * @memberof routing/queues

	* @param {string} queueId - Queue ID
	 *
     */
     self.queues.getQueue = function(queueId){
		var path = '/api/v1/routing/queues/{queueId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.queues = self.queues || {};

	/**
     * 
     * @method updateQueue
	 * @memberof routing/queues

	* @param {string} queueId - Queue ID

	* @param {} body - Queue
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "memberCount": 0,
   "selfUri": ""
}
	 *
     */
     self.queues.updateQueue = function(queueId, body){
		var path = '/api/v1/routing/queues/{queueId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.queues = self.queues || {};

	/**
     * 
     * @method deleteQueue
	 * @memberof routing/queues

	* @param {string} queueId - Queue ID
	 *
     */
     self.queues.deleteQueue = function(queueId){
		var path = '/api/v1/routing/queues/{queueId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.queues = self.queues || {};
	self.queues.members = self.queues.members || {};

	/**
     * Get the list of members of a queue
     * @method getMembers
	 * @memberof routing/queues/members

	* @param {string} queueId - 

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number

	* @param {string} userId - UserID

	* @param {string} statusId - Status ID

	* @param {boolean} joined - Joined

	* @param {string} expand - expand
	routingStatus,
	 *
     */
     self.queues.members.getMembers = function(queueId, pageSize, pageNumber, userId, statusId, joined, expand){
		var path = '/api/v1/routing/queues/{queueId}/members';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{queueId}', queueId);

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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.queues = self.queues || {};
	self.queues.members = self.queues.members || {};

	/**
     * 
     * @method joinunjoinQueue
	 * @memberof routing/queues/members

	* @param {string} queueId - Queue ID

	* @param {string} memberId - Member/User ID

	* @param {} body - To join queue ~ "joined":true
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "user": {
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
   "ringNumber": 0,
   "joined": true,
   "memberBy": "",
   "routingStatus": {
      "userId": "",
      "status": "",
      "startTime": ""
   },
   "selfUri": ""
}
	 *
     */
     self.queues.members.joinunjoinQueue = function(queueId, memberId, body){
		var path = '/api/v1/routing/queues/{queueId}/members/{memberId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        path = path.replace('{memberId}', memberId);

        if(memberId === undefined && memberId !== null){
			throw 'Missing required  parameter: memberId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.queues = self.queues || {};
	self.queues.users = self.queues.users || {};

	/**
     * 
     * @method getQueueMembers
	 * @memberof routing/queues/users

	* @param {string} queueId - Queue ID

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number

	* @param {string} sortBy - Sort by

	* @param {string} expand - expand

	* @param {boolean} directMembers - Only get users that are direct members of the queue
	 *
     */
     self.queues.users.getQueueMembers = function(queueId, pageSize, pageNumber, sortBy, expand, directMembers){
		var path = '/api/v1/routing/queues/{queueId}/users';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{queueId}', queueId);

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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.queues = self.queues || {};
	self.queues.users = self.queues.users || {};

	/**
     * 
     * @method addQueueMembers
	 * @memberof routing/queues/users

	* @param {string} queueId - Queue ID

	* @param {} body - Queue Members

	* @param {boolean} doDelete - True to delete queue members
	 *
     */
     self.queues.users.addQueueMembers = function(queueId, body, doDelete){
		var path = '/api/v1/routing/queues/{queueId}/users';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(doDelete !== undefined && doDelete !== null){
			queryParameters.delete = doDelete;
		}



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.queues = self.queues || {};
	self.queues.users = self.queues.users || {};

	/**
     * 
     * @method updateUsersInQueue
	 * @memberof routing/queues/users

	* @param {string} queueId - Queue ID

	* @param {} body - Queue Members
	 *
     */
     self.queues.users.updateUsersInQueue = function(queueId, body){
		var path = '/api/v1/routing/queues/{queueId}/users';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PATCH', path + '?' +$.param(queryParameters), requestBody);
     };
	self.queues = self.queues || {};
	self.queues.users = self.queues.users || {};

	/**
     * 
     * @method deleteQueueMember
	 * @memberof routing/queues/users

	* @param {string} queueId - Queue ID

	* @param {string} memberId - Member ID
	 *
     */
     self.queues.users.deleteQueueMember = function(queueId, memberId){
		var path = '/api/v1/routing/queues/{queueId}/users/{memberId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        path = path.replace('{memberId}', memberId);

        if(memberId === undefined && memberId !== null){
			throw 'Missing required  parameter: memberId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.queues = self.queues || {};
	self.queues.users = self.queues.users || {};

	/**
     * 
     * @method patchQueueMember
	 * @memberof routing/queues/users

	* @param {string} queueId - Queue ID

	* @param {string} memberId - Member ID

	* @param {} body - Queue Member
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "user": {
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
   "ringNumber": 0,
   "joined": true,
   "memberBy": "",
   "routingStatus": {
      "userId": "",
      "status": "",
      "startTime": ""
   },
   "selfUri": ""
}
	 *
     */
     self.queues.users.patchQueueMember = function(queueId, memberId, body){
		var path = '/api/v1/routing/queues/{queueId}/users/{memberId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        path = path.replace('{memberId}', memberId);

        if(memberId === undefined && memberId !== null){
			throw 'Missing required  parameter: memberId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PATCH', path + '?' +$.param(queryParameters), requestBody);
     };
	self.queues = self.queues || {};
	self.queues.wrapupcodes = self.queues.wrapupcodes || {};

	/**
     * 
     * @method getWrapupCodes
	 * @memberof routing/queues/wrapupcodes

	* @param {string} queueId - Queue ID

	* @param {string} codeId - Code ID
	 *
     */
     self.queues.wrapupcodes.getWrapupCodes = function(queueId, codeId){
		var path = '/api/v1/routing/queues/{queueId}/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        path = path.replace('{codeId}', codeId);

        if(codeId === undefined && codeId !== null){
			throw 'Missing required  parameter: codeId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.queues = self.queues || {};
	self.queues.wrapupcodes = self.queues.wrapupcodes || {};

	/**
     * 
     * @method addWrapupCodes
	 * @memberof routing/queues/wrapupcodes

	* @param {string} queueId - Queue ID

	* @param {string} codeId - Code ID

	* @param {} body - 
	 *
     */
     self.queues.wrapupcodes.addWrapupCodes = function(queueId, codeId, body){
		var path = '/api/v1/routing/queues/{queueId}/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        path = path.replace('{codeId}', codeId);

        if(codeId === undefined && codeId !== null){
			throw 'Missing required  parameter: codeId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.queues = self.queues || {};
	self.queues.wrapupcodes = self.queues.wrapupcodes || {};

	/**
     * 
     * @method deleteWrapupCode
	 * @memberof routing/queues/wrapupcodes

	* @param {string} queueId - Queue ID

	* @param {string} codeId - Code ID
	 *
     */
     self.queues.wrapupcodes.deleteWrapupCode = function(queueId, codeId){
		var path = '/api/v1/routing/queues/{queueId}/wrapupcodes/{codeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        path = path.replace('{codeId}', codeId);

        if(codeId === undefined && codeId !== null){
			throw 'Missing required  parameter: codeId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.skills = self.skills || {};

	/**
     * 
     * @method getSkills
	 * @memberof routing/skills

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number

	* @param {string} sortBy - Sort by

	* @param {string} name - Name
	 *
     */
     self.skills.getSkills = function(pageSize, pageNumber, sortBy, name){
		var path = '/api/v1/routing/skills';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.wrapupcodes = self.wrapupcodes || {};

	/**
     * 
     * @method getWrapupCodes
	 * @memberof routing/wrapupcodes

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number

	* @param {string} sortBy - Sort by
	 *
     */
     self.wrapupcodes.getWrapupCodes = function(pageSize, pageNumber, sortBy){
		var path = '/api/v1/routing/wrapupcodes';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.wrapupcodes = self.wrapupcodes || {};

	/**
     * 
     * @method createWrapupCode
	 * @memberof routing/wrapupcodes

	* @param {} body - WrapupCode
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "selfUri": ""
}
	 *
     */
     self.wrapupcodes.createWrapupCode = function(body){
		var path = '/api/v1/routing/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.wrapupcodes = self.wrapupcodes || {};

	/**
     * 
     * @method getWrapupCode
	 * @memberof routing/wrapupcodes

	* @param {string} codeId - Wrapup Code ID
	 *
     */
     self.wrapupcodes.getWrapupCode = function(codeId){
		var path = '/api/v1/routing/wrapupcodes/{codeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{codeId}', codeId);

        if(codeId === undefined && codeId !== null){
			throw 'Missing required  parameter: codeId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.wrapupcodes = self.wrapupcodes || {};

	/**
     * 
     * @method updateWrapupCode
	 * @memberof routing/wrapupcodes

	* @param {string} codeId - Wrapup Code ID

	* @param {} body - WrapupCode
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "selfUri": ""
}
	 *
     */
     self.wrapupcodes.updateWrapupCode = function(codeId, body){
		var path = '/api/v1/routing/wrapupcodes/{codeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{codeId}', codeId);

        if(codeId === undefined && codeId !== null){
			throw 'Missing required  parameter: codeId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.wrapupcodes = self.wrapupcodes || {};

	/**
     * 
     * @method deleteWrapupCode
	 * @memberof routing/wrapupcodes

	* @param {string} codeId - Wrapup Code ID
	 *
     */
     self.wrapupcodes.deleteWrapupCode = function(codeId){
		var path = '/api/v1/routing/wrapupcodes/{codeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{codeId}', codeId);

        if(codeId === undefined && codeId !== null){
			throw 'Missing required  parameter: codeId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
