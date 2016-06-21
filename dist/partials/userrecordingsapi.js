/**
* @class
* @example
* var api = new UserRecordingsApi(pureCloudSession);
*/
function UserRecordingsApi(session) {
    if(!(this instanceof UserRecordingsApi)) {
        return new UserRecordingsApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('UserRecordingsApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get a list of user recordings.
  * @memberOf UserRecordingsApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} expand - conversation
  */
UserRecordingsApi.prototype.getUserrecordings = function getUserrecordings(pageSize, pageNumber, expand){
    var requestPath = '/api/v2/userrecordings';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get user recording summary
  * @memberOf UserRecordingsApi#
  */
UserRecordingsApi.prototype.getSummary = function getSummary(){
    var requestPath = '/api/v2/userrecordings/summary';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a user recording.
  * @memberOf UserRecordingsApi#
  * @param {string} recordingId - User Recording ID
  * @param {string} expand - conversation
  */
UserRecordingsApi.prototype.getRecordingId = function getRecordingId(recordingId, expand){
    var requestPath = '/api/v2/userrecordings/{recordingId}';
    var requestQuery = {};
    var requestBody;

    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a user recording.
  * @memberOf UserRecordingsApi#
  * @param {string} recordingId - User Recording ID
  * @param {} body - UserRecording
  * @param {string} expand - conversation
  * @example
  * Body Example:
  * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "contentUri": "",
   "workspace": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "createdBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "conversation": {
      "name": "",
      "startTime": "",
      "endTime": "",
      "address": "",
      "participants": [],
      "conversationIds": [],
      "maxParticipants": 0,
      "recordingState": ""
   },
   "contentLength": 0,
   "durationMilliseconds": 0,
   "thumbnails": [],
   "read": true
}
  */
UserRecordingsApi.prototype.putRecordingId = function putRecordingId(recordingId, body, expand){
    var requestPath = '/api/v2/userrecordings/{recordingId}';
    var requestQuery = {};
    var requestBody;

    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery.expand = expand;
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a user recording.
  * @memberOf UserRecordingsApi#
  * @param {string} recordingId - User Recording ID
  */
UserRecordingsApi.prototype.deleteRecordingId = function deleteRecordingId(recordingId){
    var requestPath = '/api/v2/userrecordings/{recordingId}';
    var requestQuery = {};
    var requestBody;

    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Download a user recording.
  * @memberOf UserRecordingsApi#
  * @param {string} recordingId - User Recording ID
  * @param {string} formatId - The desired media format.
  WAV,
  WEBM,
  WAV_ULAW,
  OGG_VORBIS,
  OGG_OPUS,
  NONE,
  */
UserRecordingsApi.prototype.getRecordingIdMedia = function getRecordingIdMedia(recordingId, formatId){
    var requestPath = '/api/v2/userrecordings/{recordingId}/media';
    var requestQuery = {};
    var requestBody;

    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    requestQuery.formatId = formatId;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};


