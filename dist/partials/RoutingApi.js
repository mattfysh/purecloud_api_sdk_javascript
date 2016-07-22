/**
* @class
* @example
* var api = new RoutingApi(pureCloudSession);
*/
function RoutingApi(session) {
    if(!(this instanceof RoutingApi)) {
        return new RoutingApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('RoutingApi requires a PureCloudSession');
    }
    this.session = session;
}

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
RoutingApi.prototype.postQueuesObservationsQuery = function postQueuesObservationsQuery(body){
    var requestPath = '/api/v2/analytics/queues/observations/query';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get domains
  * @memberOf RoutingApi#
  */
RoutingApi.prototype.getEmailDomains = function getEmailDomains(){
    var requestPath = '/api/v2/routing/email/domains';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

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
RoutingApi.prototype.postEmailDomains = function postEmailDomains(body){
    var requestPath = '/api/v2/routing/email/domains';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a domain
  * @memberOf RoutingApi#
  * @param {string} domainId - domain ID
  */
RoutingApi.prototype.deleteEmailDomainsDomainId = function deleteEmailDomainsDomainId(domainId){
    var requestPath = '/api/v2/routing/email/domains/{domainId}';
    var requestQuery = {};
    var requestBody;

    if(domainId === undefined || domainId === null){
      throw new Error('Missing required  parameter: domainId');
    }
    requestPath = requestPath.replace('{domainId}', domainId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get routes
  * @memberOf RoutingApi#
  * @param {string} domainName - email domain
  */
RoutingApi.prototype.getEmailDomainsDomainnameRoutes = function getEmailDomainsDomainnameRoutes(domainName){
    var requestPath = '/api/v2/routing/email/domains/{domainName}/routes';
    var requestQuery = {};
    var requestBody;

    if(domainName === undefined || domainName === null){
      throw new Error('Missing required  parameter: domainName');
    }
    requestPath = requestPath.replace('{domainName}', domainName);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a route
  * @memberOf RoutingApi#
  * @param {string} domainName - email domain
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
RoutingApi.prototype.postEmailDomainsDomainnameRoutes = function postEmailDomainsDomainnameRoutes(domainName, body){
    var requestPath = '/api/v2/routing/email/domains/{domainName}/routes';
    var requestQuery = {};
    var requestBody;

    if(domainName === undefined || domainName === null){
      throw new Error('Missing required  parameter: domainName');
    }
    requestPath = requestPath.replace('{domainName}', domainName);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a route
  * @memberOf RoutingApi#
  * @param {string} domainName - email domain
  * @param {string} routeId - route ID
  */
RoutingApi.prototype.getEmailDomainsDomainnameRoutesRouteId = function getEmailDomainsDomainnameRoutesRouteId(domainName, routeId){
    var requestPath = '/api/v2/routing/email/domains/{domainName}/routes/{routeId}';
    var requestQuery = {};
    var requestBody;

    if(domainName === undefined || domainName === null){
      throw new Error('Missing required  parameter: domainName');
    }
    requestPath = requestPath.replace('{domainName}', domainName);
    if(routeId === undefined || routeId === null){
      throw new Error('Missing required  parameter: routeId');
    }
    requestPath = requestPath.replace('{routeId}', routeId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a route
  * @memberOf RoutingApi#
  * @param {string} domainName - email domain
  * @param {string} routeId - route ID
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
RoutingApi.prototype.putEmailDomainsDomainnameRoutesRouteId = function putEmailDomainsDomainnameRoutesRouteId(domainName, routeId, body){
    var requestPath = '/api/v2/routing/email/domains/{domainName}/routes/{routeId}';
    var requestQuery = {};
    var requestBody;

    if(domainName === undefined || domainName === null){
      throw new Error('Missing required  parameter: domainName');
    }
    requestPath = requestPath.replace('{domainName}', domainName);
    if(routeId === undefined || routeId === null){
      throw new Error('Missing required  parameter: routeId');
    }
    requestPath = requestPath.replace('{routeId}', routeId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a route
  * @memberOf RoutingApi#
  * @param {string} domainName - email domain
  * @param {string} routeId - route ID
  */
RoutingApi.prototype.deleteEmailDomainsDomainnameRoutesRouteId = function deleteEmailDomainsDomainnameRoutesRouteId(domainName, routeId){
    var requestPath = '/api/v2/routing/email/domains/{domainName}/routes/{routeId}';
    var requestQuery = {};
    var requestBody;

    if(domainName === undefined || domainName === null){
      throw new Error('Missing required  parameter: domainName');
    }
    requestPath = requestPath.replace('{domainName}', domainName);
    if(routeId === undefined || routeId === null){
      throw new Error('Missing required  parameter: routeId');
    }
    requestPath = requestPath.replace('{routeId}', routeId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get email setup
  * @memberOf RoutingApi#
  */
RoutingApi.prototype.getEmailSetup = function getEmailSetup(){
    var requestPath = '/api/v2/routing/email/setup';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get list of queues.
  * @memberOf RoutingApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortBy - Sort by
  * @param {string} name - Name
  * @param {boolean} active - Active
  */
RoutingApi.prototype.getQueues = function getQueues(pageSize, pageNumber, sortBy, name, active){
    var requestPath = '/api/v2/routing/queues';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.name = name;
    requestQuery.active = active;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

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
RoutingApi.prototype.postQueues = function postQueues(body){
    var requestPath = '/api/v2/routing/queues';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get details about this queue.
  * @memberOf RoutingApi#
  * @param {string} queueId - Queue ID
  */
RoutingApi.prototype.getQueuesQueueId = function getQueuesQueueId(queueId){
    var requestPath = '/api/v2/routing/queues/{queueId}';
    var requestQuery = {};
    var requestBody;

    if(queueId === undefined || queueId === null){
      throw new Error('Missing required  parameter: queueId');
    }
    requestPath = requestPath.replace('{queueId}', queueId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

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
RoutingApi.prototype.putQueuesQueueId = function putQueuesQueueId(queueId, body){
    var requestPath = '/api/v2/routing/queues/{queueId}';
    var requestQuery = {};
    var requestBody;

    if(queueId === undefined || queueId === null){
      throw new Error('Missing required  parameter: queueId');
    }
    requestPath = requestPath.replace('{queueId}', queueId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a queue
  * @memberOf RoutingApi#
  * @param {string} queueId - Queue ID
  * @param {boolean} forceDelete - 
  */
RoutingApi.prototype.deleteQueuesQueueId = function deleteQueuesQueueId(queueId, forceDelete){
    var requestPath = '/api/v2/routing/queues/{queueId}';
    var requestQuery = {};
    var requestBody;

    if(queueId === undefined || queueId === null){
      throw new Error('Missing required  parameter: queueId');
    }
    requestPath = requestPath.replace('{queueId}', queueId);
    requestQuery.forceDelete = forceDelete;
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get Estimated Wait Time
  * @memberOf RoutingApi#
  * @param {string} queueId - queueId
  * @param {string} conversationId - conversationId
  */
RoutingApi.prototype.getQueuesQueueIdEstimatedwaittime = function getQueuesQueueIdEstimatedwaittime(queueId, conversationId){
    var requestPath = '/api/v2/routing/queues/{queueId}/estimatedwaittime';
    var requestQuery = {};
    var requestBody;

    if(queueId === undefined || queueId === null){
      throw new Error('Missing required  parameter: queueId');
    }
    requestPath = requestPath.replace('{queueId}', queueId);
    requestQuery.conversationId = conversationId;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

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
RoutingApi.prototype.getQueuesQueueIdUsers = function getQueuesQueueIdUsers(queueId, pageSize, pageNumber, sortBy, expand, directMembers){
    var requestPath = '/api/v2/routing/queues/{queueId}/users';
    var requestQuery = {};
    var requestBody;

    if(queueId === undefined || queueId === null){
      throw new Error('Missing required  parameter: queueId');
    }
    requestPath = requestPath.replace('{queueId}', queueId);
    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.expand = expand;
    requestQuery.directMembers = directMembers;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Bulk add or delete up to 100 queue members
  * @memberOf RoutingApi#
  * @param {string} queueId - Queue ID
  * @param {} body - Queue Members
  * @param {boolean} doDelete - True to delete queue members
  * @example
  * Body Example:
  * [
 {
  "name": "",
  "user": {
   "name": "",
   "chat": {},
   "department": "",
   "email": "",
   "addresses": [],
   "title": "",
   "username": "",
   "images": [],
   "version": 0
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
]
  */
RoutingApi.prototype.postQueuesQueueIdUsers = function postQueuesQueueIdUsers(queueId, body, doDelete){
    var requestPath = '/api/v2/routing/queues/{queueId}/users';
    var requestQuery = {};
    var requestBody;

    if(queueId === undefined || queueId === null){
      throw new Error('Missing required  parameter: queueId');
    }
    requestPath = requestPath.replace('{queueId}', queueId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery.delete = doDelete;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Join or unjoin a set of users for a queue
  * @memberOf RoutingApi#
  * @param {string} queueId - Queue ID
  * @param {} body - Queue Members
  * @example
  * Body Example:
  * [
 {
  "name": "",
  "user": {
   "name": "",
   "chat": {},
   "department": "",
   "email": "",
   "addresses": [],
   "title": "",
   "username": "",
   "images": [],
   "version": 0
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
]
  */
RoutingApi.prototype.patchQueuesQueueIdUsers = function patchQueuesQueueIdUsers(queueId, body){
    var requestPath = '/api/v2/routing/queues/{queueId}/users';
    var requestQuery = {};
    var requestBody;

    if(queueId === undefined || queueId === null){
      throw new Error('Missing required  parameter: queueId');
    }
    requestPath = requestPath.replace('{queueId}', queueId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete queue member
  * @memberOf RoutingApi#
  * @param {string} queueId - Queue ID
  * @param {string} memberId - Member ID
  */
RoutingApi.prototype.deleteQueuesQueueIdUsersMemberId = function deleteQueuesQueueIdUsersMemberId(queueId, memberId){
    var requestPath = '/api/v2/routing/queues/{queueId}/users/{memberId}';
    var requestQuery = {};
    var requestBody;

    if(queueId === undefined || queueId === null){
      throw new Error('Missing required  parameter: queueId');
    }
    requestPath = requestPath.replace('{queueId}', queueId);
    if(memberId === undefined || memberId === null){
      throw new Error('Missing required  parameter: memberId');
    }
    requestPath = requestPath.replace('{memberId}', memberId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

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
      "images": [],
      "version": 0
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
RoutingApi.prototype.patchQueuesQueueIdUsersMemberId = function patchQueuesQueueIdUsersMemberId(queueId, memberId, body){
    var requestPath = '/api/v2/routing/queues/{queueId}/users/{memberId}';
    var requestQuery = {};
    var requestBody;

    if(queueId === undefined || queueId === null){
      throw new Error('Missing required  parameter: queueId');
    }
    requestPath = requestPath.replace('{queueId}', queueId);
    if(memberId === undefined || memberId === null){
      throw new Error('Missing required  parameter: memberId');
    }
    requestPath = requestPath.replace('{memberId}', memberId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the wrap-up codes for a queue
  * @memberOf RoutingApi#
  * @param {string} queueId - Queue ID
  * @param {string} codeId - Code ID
  */
RoutingApi.prototype.getQueuesQueueIdWrapupcodes = function getQueuesQueueIdWrapupcodes(queueId, codeId){
    var requestPath = '/api/v2/routing/queues/{queueId}/wrapupcodes';
    var requestQuery = {};
    var requestBody;

    if(queueId === undefined || queueId === null){
      throw new Error('Missing required  parameter: queueId');
    }
    requestPath = requestPath.replace('{queueId}', queueId);
    if(codeId === undefined || codeId === null){
      throw new Error('Missing required  parameter: codeId');
    }
    requestPath = requestPath.replace('{codeId}', codeId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Add up to 100 wrap-up codes to a queue
  * @memberOf RoutingApi#
  * @param {string} queueId - Queue ID
  * @param {string} codeId - Code ID
  * @param {} body - List of wrapup codes
  * @example
  * Body Example:
  * [
 {
  "name": "",
  "dateCreated": "",
  "dateModified": "",
  "modifiedBy": "",
  "createdBy": ""
 }
]
  */
RoutingApi.prototype.postQueuesQueueIdWrapupcodes = function postQueuesQueueIdWrapupcodes(queueId, codeId, body){
    var requestPath = '/api/v2/routing/queues/{queueId}/wrapupcodes';
    var requestQuery = {};
    var requestBody;

    if(queueId === undefined || queueId === null){
      throw new Error('Missing required  parameter: queueId');
    }
    requestPath = requestPath.replace('{queueId}', queueId);
    if(codeId === undefined || codeId === null){
      throw new Error('Missing required  parameter: codeId');
    }
    requestPath = requestPath.replace('{codeId}', codeId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a wrap-up code from a queue
  * @memberOf RoutingApi#
  * @param {string} queueId - Queue ID
  * @param {string} codeId - Code ID
  */
RoutingApi.prototype.deleteQueuesQueueIdWrapupcodesCodeId = function deleteQueuesQueueIdWrapupcodesCodeId(queueId, codeId){
    var requestPath = '/api/v2/routing/queues/{queueId}/wrapupcodes/{codeId}';
    var requestQuery = {};
    var requestBody;

    if(queueId === undefined || queueId === null){
      throw new Error('Missing required  parameter: queueId');
    }
    requestPath = requestPath.replace('{queueId}', queueId);
    if(codeId === undefined || codeId === null){
      throw new Error('Missing required  parameter: codeId');
    }
    requestPath = requestPath.replace('{codeId}', codeId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of routing skills.
  * @memberOf RoutingApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  */
RoutingApi.prototype.getSkills = function getSkills(pageSize, pageNumber){
    var requestPath = '/api/v2/routing/skills';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create Skill
  * @memberOf RoutingApi#
  * @param {} body - Skill
  * @example
  * Body Example:
  * {
   "name": ""
}
  */
RoutingApi.prototype.postSkills = function postSkills(body){
    var requestPath = '/api/v2/routing/skills';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get Routing Skill
  * @memberOf RoutingApi#
  * @param {string} skillId - Skill ID
  */
RoutingApi.prototype.getSkillsSkillId = function getSkillsSkillId(skillId){
    var requestPath = '/api/v2/routing/skills/{skillId}';
    var requestQuery = {};
    var requestBody;

    if(skillId === undefined || skillId === null){
      throw new Error('Missing required  parameter: skillId');
    }
    requestPath = requestPath.replace('{skillId}', skillId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete Routing Skill
  * @memberOf RoutingApi#
  * @param {string} skillId - Skill ID
  */
RoutingApi.prototype.deleteSkillsSkillId = function deleteSkillsSkillId(skillId){
    var requestPath = '/api/v2/routing/skills/{skillId}';
    var requestQuery = {};
    var requestBody;

    if(skillId === undefined || skillId === null){
      throw new Error('Missing required  parameter: skillId');
    }
    requestPath = requestPath.replace('{skillId}', skillId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the utilization settings.
  * @memberOf RoutingApi#
  */
RoutingApi.prototype.getUtilization = function getUtilization(){
    var requestPath = '/api/v2/routing/utilization';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

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
RoutingApi.prototype.putUtilization = function putUtilization(body){
    var requestPath = '/api/v2/routing/utilization';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete utilization settings and revert to system defaults.
  * @memberOf RoutingApi#
  */
RoutingApi.prototype.deleteUtilization = function deleteUtilization(){
    var requestPath = '/api/v2/routing/utilization';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get list of wrapup codes.
  * @memberOf RoutingApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortBy - Sort by
  */
RoutingApi.prototype.getWrapupcodes = function getWrapupcodes(pageSize, pageNumber, sortBy){
    var requestPath = '/api/v2/routing/wrapupcodes';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

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
RoutingApi.prototype.postWrapupcodes = function postWrapupcodes(body){
    var requestPath = '/api/v2/routing/wrapupcodes';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get details about this wrap-up code.
  * @memberOf RoutingApi#
  * @param {string} codeId - Wrapup Code ID
  */
RoutingApi.prototype.getWrapupcodesCodeId = function getWrapupcodesCodeId(codeId){
    var requestPath = '/api/v2/routing/wrapupcodes/{codeId}';
    var requestQuery = {};
    var requestBody;

    if(codeId === undefined || codeId === null){
      throw new Error('Missing required  parameter: codeId');
    }
    requestPath = requestPath.replace('{codeId}', codeId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

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
RoutingApi.prototype.putWrapupcodesCodeId = function putWrapupcodesCodeId(codeId, body){
    var requestPath = '/api/v2/routing/wrapupcodes/{codeId}';
    var requestQuery = {};
    var requestBody;

    if(codeId === undefined || codeId === null){
      throw new Error('Missing required  parameter: codeId');
    }
    requestPath = requestPath.replace('{codeId}', codeId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete wrap-up code
  * @memberOf RoutingApi#
  * @param {string} codeId - Wrapup Code ID
  */
RoutingApi.prototype.deleteWrapupcodesCodeId = function deleteWrapupcodesCodeId(codeId){
    var requestPath = '/api/v2/routing/wrapupcodes/{codeId}';
    var requestQuery = {};
    var requestBody;

    if(codeId === undefined || codeId === null){
      throw new Error('Missing required  parameter: codeId');
    }
    requestPath = requestPath.replace('{codeId}', codeId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary List routing skills for user
  * @memberOf RoutingApi#
  * @param {string} userId - User ID
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortOrder - Ascending or descending sort order
  ascending,
  descending,
  */
RoutingApi.prototype.getUserIdRoutingskills = function getUserIdRoutingskills(userId, pageSize, pageNumber, sortOrder){
    var requestPath = '/api/v2/users/{userId}/routingskills';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortOrder = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Add routing skill to user
  * @memberOf RoutingApi#
  * @param {string} userId - User ID
  * @param {} body - Skill
  * @example
  * Body Example:
  * {
   "name": "",
   "proficiency": {},
   "state": ""
}
  */
RoutingApi.prototype.postUserIdRoutingskills = function postUserIdRoutingskills(userId, body){
    var requestPath = '/api/v2/users/{userId}/routingskills';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update routing skill proficiency or state.
  * @memberOf RoutingApi#
  * @param {string} userId - User ID
  * @param {string} skillId - 
  * @param {} body - Skill
  * @example
  * Body Example:
  * {
   "name": "",
   "proficiency": {},
   "state": ""
}
  */
RoutingApi.prototype.putUserIdRoutingskillsSkillId = function putUserIdRoutingskillsSkillId(userId, skillId, body){
    var requestPath = '/api/v2/users/{userId}/routingskills/{skillId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(skillId === undefined || skillId === null){
      throw new Error('Missing required  parameter: skillId');
    }
    requestPath = requestPath.replace('{skillId}', skillId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Remove routing skill from user
  * @memberOf RoutingApi#
  * @param {string} userId - User ID
  * @param {string} skillId - 
  */
RoutingApi.prototype.deleteUserIdRoutingskillsSkillId = function deleteUserIdRoutingskillsSkillId(userId, skillId){
    var requestPath = '/api/v2/users/{userId}/routingskills/{skillId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(skillId === undefined || skillId === null){
      throw new Error('Missing required  parameter: skillId');
    }
    requestPath = requestPath.replace('{skillId}', skillId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};


module.exports = RoutingApi;
