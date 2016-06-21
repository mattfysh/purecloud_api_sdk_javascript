/**
* @class
* @example
* var api = new UsersApi(pureCloudSession);
*/
function UsersApi(session) {
    if(!(this instanceof UsersApi)) {
        return new UsersApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('UsersApi requires a PureCloudSession');
    }
    this.session = session;
}

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
UsersApi.prototype.postUsersAggregatesQuery = function postUsersAggregatesQuery(body){
    var requestPath = '/api/v2/analytics/users/aggregates/query';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

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
UsersApi.prototype.postUsersObservationsQuery = function postUsersObservationsQuery(body){
    var requestPath = '/api/v2/analytics/users/observations/query';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of available users.
  * @memberOf UsersApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {array} id - The list of user ids to get. Paging is ignored if ids are specified
  * @param {string} sortOrder - Ascending or descending sort order
  ascending,
  descending,
  * @param {array} expand - Which fields, if any, to expand
  */
UsersApi.prototype.getUsers = function getUsers(pageSize, pageNumber, id, sortOrder, expand){
    var requestPath = '/api/v2/users';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.id = id;
    requestQuery.sortOrder = sortOrder;
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

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
   "password": ""
}
  */
UsersApi.prototype.postUsers = function postUsers(body){
    var requestPath = '/api/v2/users';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get user.
  * @memberOf UsersApi#
  * @param {array} expand - Which fields, if any, to expand
  */
UsersApi.prototype.getMe = function getMe(expand){
    var requestPath = '/api/v2/users/me';
    var requestQuery = {};
    var requestBody;

    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search using q64
  * @memberOf UsersApi#
  * @param {string} q64 - 
  * @param {array} expand - 
  */
UsersApi.prototype.getSearch = function getSearch(q64, expand){
    var requestPath = '/api/v2/users/search';
    var requestQuery = {};
    var requestBody;

    requestQuery.q64 = q64;
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search
  * @memberOf UsersApi#
  * @param {} body - Search request options
  * @example
  * Body Example:
  * {
   "sortOrder": "",
   "sortBy": "",
   "pageSize": 0,
   "pageNumber": 0,
   "returnFields": [],
   "expand": [],
   "query": []
}
  */
UsersApi.prototype.postSearch = function postSearch(body){
    var requestPath = '/api/v2/users/search';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get user
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  * @param {array} expand - Which fields, if any, to expand
  */
UsersApi.prototype.getUserId = function getUserId(userId, expand){
    var requestPath = '/api/v2/users/{userId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete user
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  */
UsersApi.prototype.deleteUserId = function deleteUserId(userId){
    var requestPath = '/api/v2/users/{userId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

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
UsersApi.prototype.patchUserId = function patchUserId(userId, body){
    var requestPath = '/api/v2/users/{userId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a user's CallForwarding
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  */
UsersApi.prototype.getUserIdCallforwarding = function getUserIdCallforwarding(userId){
    var requestPath = '/api/v2/users/{userId}/callforwarding';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

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
UsersApi.prototype.putUserIdCallforwarding = function putUserIdCallforwarding(userId, body){
    var requestPath = '/api/v2/users/{userId}/callforwarding';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

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
UsersApi.prototype.patchUserIdCallforwarding = function patchUserIdCallforwarding(userId, body){
    var requestPath = '/api/v2/users/{userId}/callforwarding';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a user's Geolocation
  * @memberOf UsersApi#
  * @param {string} userId - user Id
  * @param {string} clientId - client Id
  */
UsersApi.prototype.getUserIdGeolocationsClientId = function getUserIdGeolocationsClientId(userId, clientId){
    var requestPath = '/api/v2/users/{userId}/geolocations/{clientId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(clientId === undefined || clientId === null){
      throw new Error('Missing required  parameter: clientId');
    }
    requestPath = requestPath.replace('{clientId}', clientId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

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
UsersApi.prototype.patchUserIdGeolocationsClientId = function patchUserIdGeolocationsClientId(userId, clientId, body){
    var requestPath = '/api/v2/users/{userId}/geolocations/{clientId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(clientId === undefined || clientId === null){
      throw new Error('Missing required  parameter: clientId');
    }
    requestPath = requestPath.replace('{clientId}', clientId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a OutOfOffice
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  */
UsersApi.prototype.getUserIdOutofoffice = function getUserIdOutofoffice(userId){
    var requestPath = '/api/v2/users/{userId}/outofoffice';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

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
UsersApi.prototype.putUserIdOutofoffice = function putUserIdOutofoffice(userId, body){
    var requestPath = '/api/v2/users/{userId}/outofoffice';
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
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get queues for user
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  */
UsersApi.prototype.getUserIdQueues = function getUserIdQueues(userId, pageSize, pageNumber){
    var requestPath = '/api/v2/users/{userId}/queues';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Join or unjoin a set of queues for a user
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  * @param {} body - User Queues
  * @example
  * Body Example:
  * [
 {
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
]
  */
UsersApi.prototype.patchUserIdQueues = function patchUserIdQueues(userId, body){
    var requestPath = '/api/v2/users/{userId}/queues';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

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
UsersApi.prototype.patchUserIdQueuesQueueId = function patchUserIdQueuesQueueId(queueId, userId, body){
    var requestPath = '/api/v2/users/{userId}/queues/{queueId}';
    var requestQuery = {};
    var requestBody;

    if(queueId === undefined || queueId === null){
      throw new Error('Missing required  parameter: queueId');
    }
    requestPath = requestPath.replace('{queueId}', queueId);
    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Returns a listing of roles and permissions for a user.
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  */
UsersApi.prototype.getUserIdRoles = function getUserIdRoles(userId){
    var requestPath = '/api/v2/users/{userId}/roles';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Sets the user's roles
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  * @param {} body - 
  */
UsersApi.prototype.putUserIdRoles = function putUserIdRoles(userId, body){
    var requestPath = '/api/v2/users/{userId}/roles';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Removes all the roles from the user.
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  */
UsersApi.prototype.deleteUserIdRoles = function deleteUserIdRoles(userId){
    var requestPath = '/api/v2/users/{userId}/roles';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary List routing skills for user
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortOrder - Ascending or descending sort order
  ascending,
  descending,
  */
UsersApi.prototype.getUserIdRoutingskills = function getUserIdRoutingskills(userId, pageSize, pageNumber, sortOrder){
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
  * @memberOf UsersApi#
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
UsersApi.prototype.postUserIdRoutingskills = function postUserIdRoutingskills(userId, body){
    var requestPath = '/api/v2/users/{userId}/routingskills';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update routing skill proficiency or state.
  * @memberOf UsersApi#
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
UsersApi.prototype.putUserIdRoutingskillsSkillId = function putUserIdRoutingskillsSkillId(userId, skillId, body){
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
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Remove routing skill from user
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  * @param {string} skillId - 
  */
UsersApi.prototype.deleteUserIdRoutingskillsSkillId = function deleteUserIdRoutingskillsSkillId(userId, skillId){
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

/**
  * @summary Fetch the routing status of a user
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  */
UsersApi.prototype.getUserIdRoutingstatus = function getUserIdRoutingstatus(userId){
    var requestPath = '/api/v2/users/{userId}/routingstatus';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

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
UsersApi.prototype.putUserIdRoutingstatus = function putUserIdRoutingstatus(userId, body){
    var requestPath = '/api/v2/users/{userId}/routingstatus';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get station information for user
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  */
UsersApi.prototype.getUserIdStation = function getUserIdStation(userId){
    var requestPath = '/api/v2/users/{userId}/station';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Clear associated station
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  */
UsersApi.prototype.deleteUserIdStationAssociatedstation = function deleteUserIdStationAssociatedstation(userId){
    var requestPath = '/api/v2/users/{userId}/station/associatedstation';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Set associated station
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  * @param {string} stationId - 
  */
UsersApi.prototype.putUserIdStationAssociatedstationStationId = function putUserIdStationAssociatedstationStationId(userId, stationId){
    var requestPath = '/api/v2/users/{userId}/station/associatedstation/{stationId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(stationId === undefined || stationId === null){
      throw new Error('Missing required  parameter: stationId');
    }
    requestPath = requestPath.replace('{stationId}', stationId);
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Clear default station
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  */
UsersApi.prototype.deleteUserIdStationDefaultstation = function deleteUserIdStationDefaultstation(userId){
    var requestPath = '/api/v2/users/{userId}/station/defaultstation';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Set default station
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  * @param {string} stationId - 
  */
UsersApi.prototype.putUserIdStationDefaultstationStationId = function putUserIdStationDefaultstationStationId(userId, stationId){
    var requestPath = '/api/v2/users/{userId}/station/defaultstation/{stationId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(stationId === undefined || stationId === null){
      throw new Error('Missing required  parameter: stationId');
    }
    requestPath = requestPath.replace('{stationId}', stationId);
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};


