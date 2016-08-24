/**
* @class ConfigurationApi
* @example
* var api = new purecloud.platform.ConfigurationApi(pureCloudSession);
*/
function ConfigurationApi(session) {
    if(!(this instanceof ConfigurationApi)) {
        return new ConfigurationApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('ConfigurationApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get encryption key list
  * @memberOf ConfigurationApi
  * @instance
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @example
  * 200 Response Example:
  * {
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "entities": [],
   "selfUri": "",
   "firstUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
ConfigurationApi.prototype.getRecordingkeys = function getRecordingkeys(pageSize, pageNumber){
    var requestPath = '/api/v2/recording/recordingkeys';
    var requestQuery = {};
    var requestBody;

    requestQuery["pageSize"] = pageSize;
    requestQuery["pageNumber"] = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create encryption key
  * @memberOf ConfigurationApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "createDate": "",
   "keydataSummary": "",
   "user": {
      "id": "",
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "primaryContactInfo": [],
      "addresses": [],
      "state": "",
      "title": "",
      "username": "",
      "images": [],
      "version": 0,
      "routingStatus": {},
      "presence": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "geolocation": {},
      "station": {},
      "authorization": {},
      "profileSkills": [],
      "selfUri": ""
   },
   "selfUri": ""
}
  */
ConfigurationApi.prototype.postRecordingkeys = function postRecordingkeys(){
    var requestPath = '/api/v2/recording/recordingkeys';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get key rotation schedule
  * @memberOf ConfigurationApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "period": "",
   "selfUri": ""
}
  */
ConfigurationApi.prototype.getRecordingkeysRotationschedule = function getRecordingkeysRotationschedule(){
    var requestPath = '/api/v2/recording/recordingkeys/rotationschedule';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update key rotation schedule
  * @memberOf ConfigurationApi
  * @instance
  * @param {} body - KeyRotationSchedule
  * @example
  * Body Example:
  * {
   "name": "",
   "period": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "period": "",
   "selfUri": ""
}
  */
ConfigurationApi.prototype.putRecordingkeysRotationschedule = function putRecordingkeysRotationschedule(body){
    var requestPath = '/api/v2/recording/recordingkeys/rotationschedule';
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
  * @summary Get the setup package for a locally deployed edge device. This is needed to complete the setup process for the virtual edge.
  * @memberOf ConfigurationApi
  * @instance
  * @param {string} edgeId - Edge ID
  * @example
  * 200 Response Example:
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
   "vmPairingInfo": {
      "meta-data": {},
      "edge-id": "",
      "auth-token": "",
      "org-id": ""
   },
   "selfUri": ""
}
  */
ConfigurationApi.prototype.getProvidersEdgesEdgeIdSetuppackage = function getProvidersEdgesEdgeIdSetuppackage(edgeId){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/setuppackage';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};


module.exports = ConfigurationApi;
