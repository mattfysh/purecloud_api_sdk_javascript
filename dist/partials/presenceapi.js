/**
* @class
* @example
* var api = new PresenceApi(pureCloudSession);
*/
function PresenceApi(session) {
    if(!(this instanceof PresenceApi)) {
        return new PresenceApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('PresenceApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get an Organization's list of Presence Definitions
  * @memberOf PresenceApi#
  * @param {integer} pageNumber - Page number
  * @param {integer} pageSize - Page size
  * @param {string} doDeleted - Deleted query can be true, false or all
  */
PresenceApi.prototype.getPresencedefinitions = function getPresencedefinitions(pageNumber, pageSize, doDeleted){
    var requestPath = '/api/v2/presencedefinitions';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageNumber = pageNumber;
    requestQuery.pageSize = pageSize;
    requestQuery.deleted = doDeleted;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

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
PresenceApi.prototype.postPresencedefinitions = function postPresencedefinitions(body){
    var requestPath = '/api/v2/presencedefinitions';
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
  * @summary Get a Presence Definition
  * @memberOf PresenceApi#
  * @param {string} presenceId - Organization Presence ID
  */
PresenceApi.prototype.getPresenceId = function getPresenceId(presenceId){
    var requestPath = '/api/v2/presencedefinitions/{presenceId}';
    var requestQuery = {};
    var requestBody;

    if(presenceId === undefined || presenceId === null){
      throw new Error('Missing required  parameter: presenceId');
    }
    requestPath = requestPath.replace('{presenceId}', presenceId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

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
PresenceApi.prototype.putPresenceId = function putPresenceId(presenceId, body){
    var requestPath = '/api/v2/presencedefinitions/{presenceId}';
    var requestQuery = {};
    var requestBody;

    if(presenceId === undefined || presenceId === null){
      throw new Error('Missing required  parameter: presenceId');
    }
    requestPath = requestPath.replace('{presenceId}', presenceId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a Presence Definition
  * @memberOf PresenceApi#
  * @param {string} presenceId - Organization Presence ID
  */
PresenceApi.prototype.deletePresenceId = function deletePresenceId(presenceId){
    var requestPath = '/api/v2/presencedefinitions/{presenceId}';
    var requestQuery = {};
    var requestBody;

    if(presenceId === undefined || presenceId === null){
      throw new Error('Missing required  parameter: presenceId');
    }
    requestPath = requestPath.replace('{presenceId}', presenceId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of SystemPresences
  * @memberOf PresenceApi#
  */
PresenceApi.prototype.getSystempresences = function getSystempresences(){
    var requestPath = '/api/v2/systempresences';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a user's Presence
  * @memberOf PresenceApi#
  * @param {string} userId - user Id
  * @param {string} sourceId - Source
  */
PresenceApi.prototype.getUserIdPresencesSourceId = function getUserIdPresencesSourceId(userId, sourceId){
    var requestPath = '/api/v2/users/{userId}/presences/{sourceId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(sourceId === undefined || sourceId === null){
      throw new Error('Missing required  parameter: sourceId');
    }
    requestPath = requestPath.replace('{sourceId}', sourceId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

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
PresenceApi.prototype.patchUserIdPresencesSourceId = function patchUserIdPresencesSourceId(userId, sourceId, body){
    var requestPath = '/api/v2/users/{userId}/presences/{sourceId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(sourceId === undefined || sourceId === null){
      throw new Error('Missing required  parameter: sourceId');
    }
    requestPath = requestPath.replace('{sourceId}', sourceId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};


