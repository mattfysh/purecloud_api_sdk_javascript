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
   "entities": [],
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "selfUri": "",
   "firstUri": "",
   "lastUri": "",
   "previousUri": "",
   "nextUri": "",
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


module.exports = ConfigurationApi;
