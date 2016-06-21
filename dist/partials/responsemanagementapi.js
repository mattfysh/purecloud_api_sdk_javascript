/**
* @class
* @example
* var api = new ResponseManagementApi(pureCloudSession);
*/
function ResponseManagementApi(session) {
    if(!(this instanceof ResponseManagementApi)) {
        return new ResponseManagementApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('ResponseManagementApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Gets a list of existing response libraries.
  * @memberOf ResponseManagementApi#
  * @param {integer} pageNumber - Page number
  * @param {integer} pageSize - Page size
  */
ResponseManagementApi.prototype.getLibraries = function getLibraries(pageNumber, pageSize){
    var requestPath = '/api/v2/responsemanagement/libraries';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageNumber = pageNumber;
    requestQuery.pageSize = pageSize;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a response library.
  * @memberOf ResponseManagementApi#
  * @param {} body - Library
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
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
   "dateCreated": ""
}
  */
ResponseManagementApi.prototype.postLibraries = function postLibraries(body){
    var requestPath = '/api/v2/responsemanagement/libraries';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get details about an existing response library.
  * @memberOf ResponseManagementApi#
  * @param {string} libraryId - Library ID
  */
ResponseManagementApi.prototype.getLibrariesLibraryId = function getLibrariesLibraryId(libraryId){
    var requestPath = '/api/v2/responsemanagement/libraries/{libraryId}';
    var requestQuery = {};
    var requestBody;

    if(libraryId === undefined || libraryId === null){
      throw new Error('Missing required  parameter: libraryId');
    }
    requestPath = requestPath.replace('{libraryId}', libraryId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an existing response library.
  * @description Fields that can be updated: name. The most recent version is required for updates.
  * @memberOf ResponseManagementApi#
  * @param {string} libraryId - Library ID
  * @param {} body - Library
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
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
   "dateCreated": ""
}
  */
ResponseManagementApi.prototype.putLibrariesLibraryId = function putLibrariesLibraryId(libraryId, body){
    var requestPath = '/api/v2/responsemanagement/libraries/{libraryId}';
    var requestQuery = {};
    var requestBody;

    if(libraryId === undefined || libraryId === null){
      throw new Error('Missing required  parameter: libraryId');
    }
    requestPath = requestPath.replace('{libraryId}', libraryId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete an existing response library.
  * @description This will remove any responses associated with the library.
  * @memberOf ResponseManagementApi#
  * @param {string} libraryId - Library ID
  */
ResponseManagementApi.prototype.deleteLibrariesLibraryId = function deleteLibrariesLibraryId(libraryId){
    var requestPath = '/api/v2/responsemanagement/libraries/{libraryId}';
    var requestQuery = {};
    var requestBody;

    if(libraryId === undefined || libraryId === null){
      throw new Error('Missing required  parameter: libraryId');
    }
    requestPath = requestPath.replace('{libraryId}', libraryId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Gets a list of existing responses.
  * @memberOf ResponseManagementApi#
  * @param {string} libraryId - Library ID
  * @param {integer} pageNumber - Page number
  * @param {integer} pageSize - Page size
  */
ResponseManagementApi.prototype.getResponses = function getResponses(libraryId, pageNumber, pageSize){
    var requestPath = '/api/v2/responsemanagement/responses';
    var requestQuery = {};
    var requestBody;

    if(libraryId === undefined || libraryId === null){
      throw new Error('Missing required  parameter: libraryId');
    }
    requestQuery.libraryId = libraryId;
    requestQuery.pageNumber = pageNumber;
    requestQuery.pageSize = pageSize;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a response.
  * @memberOf ResponseManagementApi#
  * @param {} body - Response
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "libraries": [],
   "texts": [],
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
   "dateCreated": "",
   "interactionType": ""
}
  */
ResponseManagementApi.prototype.postResponses = function postResponses(body){
    var requestPath = '/api/v2/responsemanagement/responses';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query responses
  * @memberOf ResponseManagementApi#
  * @param {} body - Response
  * @example
  * Body Example:
  * {
   "queryPhrase": "",
   "pageSize": 0,
   "filters": []
}
  */
ResponseManagementApi.prototype.postResponsesQuery = function postResponsesQuery(body){
    var requestPath = '/api/v2/responsemanagement/responses/query';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get details about an existing response.
  * @memberOf ResponseManagementApi#
  * @param {string} responseId - Response ID
  */
ResponseManagementApi.prototype.getResponsesResponseId = function getResponsesResponseId(responseId){
    var requestPath = '/api/v2/responsemanagement/responses/{responseId}';
    var requestQuery = {};
    var requestBody;

    if(responseId === undefined || responseId === null){
      throw new Error('Missing required  parameter: responseId');
    }
    requestPath = requestPath.replace('{responseId}', responseId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an existing response.
  * @description Fields that can be updated: name, libraries, and texts. The most recent version is required for updates.
  * @memberOf ResponseManagementApi#
  * @param {string} responseId - Response ID
  * @param {} body - Response
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "libraries": [],
   "texts": [],
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
   "dateCreated": "",
   "interactionType": ""
}
  */
ResponseManagementApi.prototype.putResponsesResponseId = function putResponsesResponseId(responseId, body){
    var requestPath = '/api/v2/responsemanagement/responses/{responseId}';
    var requestQuery = {};
    var requestBody;

    if(responseId === undefined || responseId === null){
      throw new Error('Missing required  parameter: responseId');
    }
    requestPath = requestPath.replace('{responseId}', responseId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete an existing response.
  * @description This will remove the response from any libraries associated with it.
  * @memberOf ResponseManagementApi#
  * @param {string} responseId - Response ID
  */
ResponseManagementApi.prototype.deleteResponsesResponseId = function deleteResponsesResponseId(responseId){
    var requestPath = '/api/v2/responsemanagement/responses/{responseId}';
    var requestQuery = {};
    var requestBody;

    if(responseId === undefined || responseId === null){
      throw new Error('Missing required  parameter: responseId');
    }
    requestPath = requestPath.replace('{responseId}', responseId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};


