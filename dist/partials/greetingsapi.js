/**
* @class
* @example
* var api = new GreetingsApi(pureCloudSession);
*/
function GreetingsApi(session) {
    if(!(this instanceof GreetingsApi)) {
        return new GreetingsApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('GreetingsApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Gets an Organization's Greetings
  * @memberOf GreetingsApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  */
GreetingsApi.prototype.getGreetings = function getGreetings(pageSize, pageNumber){
    var requestPath = '/api/v2/greetings';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a Greeting for an Organization
  * @memberOf GreetingsApi#
  * @param {} body - The Greeting to create
  * @example
  * Body Example:
  * {
   "name": "",
   "type": "",
   "ownerType": "",
   "owner": {
      "name": ""
   },
   "audioFile": {
      "durationMilliseconds": 0,
      "sizeBytes": 0,
      "selfUri": ""
   },
   "audioTTS": "",
   "createdDate": "",
   "createdBy": "",
   "modifiedDate": "",
   "modifiedBy": ""
}
  */
GreetingsApi.prototype.postGreetings = function postGreetings(body){
    var requestPath = '/api/v2/greetings';
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
  * @summary Get an Organization's DefaultGreetingList
  * @memberOf GreetingsApi#
  */
GreetingsApi.prototype.getDefaults = function getDefaults(){
    var requestPath = '/api/v2/greetings/defaults';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an Organization's DefaultGreetingList
  * @memberOf GreetingsApi#
  * @param {} body - The updated defaultGreetingList
  * @example
  * Body Example:
  * {
   "name": "",
   "owner": {
      "name": ""
   },
   "ownerType": "",
   "greetings": {},
   "createdDate": "",
   "createdBy": "",
   "modifiedDate": "",
   "modifiedBy": ""
}
  */
GreetingsApi.prototype.putDefaults = function putDefaults(body){
    var requestPath = '/api/v2/greetings/defaults';
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
  * @summary Get a Greeting with the given GreetingId
  * @memberOf GreetingsApi#
  * @param {string} greetingId - Greeting ID
  */
GreetingsApi.prototype.getGreetingId = function getGreetingId(greetingId){
    var requestPath = '/api/v2/greetings/{greetingId}';
    var requestQuery = {};
    var requestBody;

    if(greetingId === undefined || greetingId === null){
      throw new Error('Missing required  parameter: greetingId');
    }
    requestPath = requestPath.replace('{greetingId}', greetingId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Updates the Greeting with the given GreetingId
  * @memberOf GreetingsApi#
  * @param {string} greetingId - Greeting ID
  * @param {} body - The updated Greeting
  * @example
  * Body Example:
  * {
   "name": "",
   "type": "",
   "ownerType": "",
   "owner": {
      "name": ""
   },
   "audioFile": {
      "durationMilliseconds": 0,
      "sizeBytes": 0,
      "selfUri": ""
   },
   "audioTTS": "",
   "createdDate": "",
   "createdBy": "",
   "modifiedDate": "",
   "modifiedBy": ""
}
  */
GreetingsApi.prototype.putGreetingId = function putGreetingId(greetingId, body){
    var requestPath = '/api/v2/greetings/{greetingId}';
    var requestQuery = {};
    var requestBody;

    if(greetingId === undefined || greetingId === null){
      throw new Error('Missing required  parameter: greetingId');
    }
    requestPath = requestPath.replace('{greetingId}', greetingId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Deletes a Greeting with the given GreetingId
  * @memberOf GreetingsApi#
  * @param {string} greetingId - Greeting ID
  */
GreetingsApi.prototype.deleteGreetingId = function deleteGreetingId(greetingId){
    var requestPath = '/api/v2/greetings/{greetingId}';
    var requestQuery = {};
    var requestBody;

    if(greetingId === undefined || greetingId === null){
      throw new Error('Missing required  parameter: greetingId');
    }
    requestPath = requestPath.replace('{greetingId}', greetingId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get media playback URI for this greeting
  * @memberOf GreetingsApi#
  * @param {string} greetingId - Greeting ID
  * @param {string} formatId - The desired media format.
  WAV,
  WEBM,
  WAV_ULAW,
  OGG_VORBIS,
  OGG_OPUS,
  NONE,
  */
GreetingsApi.prototype.getGreetingIdMedia = function getGreetingIdMedia(greetingId, formatId){
    var requestPath = '/api/v2/greetings/{greetingId}/media';
    var requestQuery = {};
    var requestBody;

    if(greetingId === undefined || greetingId === null){
      throw new Error('Missing required  parameter: greetingId');
    }
    requestPath = requestPath.replace('{greetingId}', greetingId);
    requestQuery.formatId = formatId;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list of the User's Greetings
  * @memberOf GreetingsApi#
  * @param {string} userId - User ID
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  */
GreetingsApi.prototype.getUserIdGreetings = function getUserIdGreetings(userId, pageSize, pageNumber){
    var requestPath = '/api/v2/users/{userId}/greetings';
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
  * @summary Creates a Greeting for a User
  * @memberOf GreetingsApi#
  * @param {string} userId - User ID
  * @param {} body - The Greeting to create
  * @example
  * Body Example:
  * {
   "name": "",
   "type": "",
   "ownerType": "",
   "owner": {
      "name": ""
   },
   "audioFile": {
      "durationMilliseconds": 0,
      "sizeBytes": 0,
      "selfUri": ""
   },
   "audioTTS": "",
   "createdDate": "",
   "createdBy": "",
   "modifiedDate": "",
   "modifiedBy": ""
}
  */
GreetingsApi.prototype.postUserIdGreetings = function postUserIdGreetings(userId, body){
    var requestPath = '/api/v2/users/{userId}/greetings';
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
  * @summary Grabs the list of Default Greetings given a User's ID
  * @memberOf GreetingsApi#
  * @param {string} userId - User ID
  */
GreetingsApi.prototype.getUserIdGreetingsDefaults = function getUserIdGreetingsDefaults(userId){
    var requestPath = '/api/v2/users/{userId}/greetings/defaults';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Updates the DefaultGreetingList of the specified User
  * @memberOf GreetingsApi#
  * @param {string} userId - User ID
  * @param {} body - The updated defaultGreetingList
  * @example
  * Body Example:
  * {
   "name": "",
   "owner": {
      "name": ""
   },
   "ownerType": "",
   "greetings": {},
   "createdDate": "",
   "createdBy": "",
   "modifiedDate": "",
   "modifiedBy": ""
}
  */
GreetingsApi.prototype.putUserIdGreetingsDefaults = function putUserIdGreetingsDefaults(userId, body){
    var requestPath = '/api/v2/users/{userId}/greetings/defaults';
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


