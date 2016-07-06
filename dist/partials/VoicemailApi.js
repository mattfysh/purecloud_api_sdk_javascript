/**
* @class
* @example
* var api = new VoicemailApi(pureCloudSession);
*/
function VoicemailApi(session) {
    if(!(this instanceof VoicemailApi)) {
        return new VoicemailApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('VoicemailApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get mailbox information
  * @memberOf VoicemailApi#
  */
VoicemailApi.prototype.getMailbox = function getMailbox(){
    var requestPath = '/api/v2/voicemail/mailbox';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary List voicemail messages
  * @memberOf VoicemailApi#
  */
VoicemailApi.prototype.getMessages = function getMessages(){
    var requestPath = '/api/v2/voicemail/messages';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete all voicemail messages
  * @memberOf VoicemailApi#
  */
VoicemailApi.prototype.deleteMessages = function deleteMessages(){
    var requestPath = '/api/v2/voicemail/messages';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get message.
  * @memberOf VoicemailApi#
  * @param {string} messageId - Message ID
  */
VoicemailApi.prototype.getMessagesMessageId = function getMessagesMessageId(messageId){
    var requestPath = '/api/v2/voicemail/messages/{messageId}';
    var requestQuery = {};
    var requestBody;

    if(messageId === undefined || messageId === null){
      throw new Error('Missing required  parameter: messageId');
    }
    requestPath = requestPath.replace('{messageId}', messageId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a message.
  * @memberOf VoicemailApi#
  * @param {string} messageId - Message ID
  * @param {} body - VoicemailMessage
  * @example
  * Body Example:
  * {
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
   "read": true,
   "audioRecordingDurationSeconds": 0,
   "audioRecordingSizeBytes": 0,
   "createdDate": "",
   "modifiedDate": "",
   "callerAddress": "",
   "callerName": "",
   "callerUser": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   }
}
  */
VoicemailApi.prototype.putMessagesMessageId = function putMessagesMessageId(messageId, body){
    var requestPath = '/api/v2/voicemail/messages/{messageId}';
    var requestQuery = {};
    var requestBody;

    if(messageId === undefined || messageId === null){
      throw new Error('Missing required  parameter: messageId');
    }
    requestPath = requestPath.replace('{messageId}', messageId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a message.
  * @memberOf VoicemailApi#
  * @param {string} messageId - Message ID
  */
VoicemailApi.prototype.deleteMessagesMessageId = function deleteMessagesMessageId(messageId){
    var requestPath = '/api/v2/voicemail/messages/{messageId}';
    var requestQuery = {};
    var requestBody;

    if(messageId === undefined || messageId === null){
      throw new Error('Missing required  parameter: messageId');
    }
    requestPath = requestPath.replace('{messageId}', messageId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get media playback URI for this message
  * @memberOf VoicemailApi#
  * @param {string} messageId - Message ID
  * @param {string} formatId - The desired media format.
  WAV,
  WEBM,
  WAV_ULAW,
  OGG_VORBIS,
  OGG_OPUS,
  NONE,
  */
VoicemailApi.prototype.getMessagesMessageIdMedia = function getMessagesMessageIdMedia(messageId, formatId){
    var requestPath = '/api/v2/voicemail/messages/{messageId}/media';
    var requestQuery = {};
    var requestBody;

    if(messageId === undefined || messageId === null){
      throw new Error('Missing required  parameter: messageId');
    }
    requestPath = requestPath.replace('{messageId}', messageId);
    requestQuery.formatId = formatId;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a policy
  * @memberOf VoicemailApi#
  */
VoicemailApi.prototype.getPolicy = function getPolicy(){
    var requestPath = '/api/v2/voicemail/policy';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a policy
  * @memberOf VoicemailApi#
  * @param {} body - Policy
  * @example
  * Body Example:
  * {
   "enabled": true,
   "retentionTimeDays": 0,
   "alertTimeoutSeconds": 0,
   "minimumRecordingTimeSeconds": 0,
   "maximumRecordingTimeSeconds": 0,
   "unavailableMessageUri": "",
   "namePromptMessageUri": "",
   "fullMessageUri": "",
   "compressSilence": true,
   "pinConfiguration": {
      "minimumLength": 0,
      "maximumLength": 0
   },
   "quotaSizeBytes": 0,
   "createdDate": "",
   "modifiedDate": "",
   "voicemailExtension": "",
   "pinRequired": true
}
  */
VoicemailApi.prototype.putPolicy = function putPolicy(body){
    var requestPath = '/api/v2/voicemail/policy';
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
  * @summary Get a user's voicemail policy
  * @memberOf VoicemailApi#
  * @param {string} userId - User ID
  */
VoicemailApi.prototype.getUserpoliciesUserId = function getUserpoliciesUserId(userId){
    var requestPath = '/api/v2/voicemail/userpolicies/{userId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a user's voicemail policy
  * @memberOf VoicemailApi#
  * @param {string} userId - User ID
  * @param {} body - The user's voicemail policy
  * @example
  * Body Example:
  * {
   "enabled": true,
   "alertTimeoutSeconds": 0,
   "minimumRecordingTimeSeconds": 0,
   "maximumRecordingTimeSeconds": 0,
   "unavailableMessageUri": "",
   "namePromptMessageUri": "",
   "fullMessageUri": "",
   "pin": "",
   "quotaSizeBytes": 0,
   "createdDate": "",
   "modifiedDate": ""
}
  */
VoicemailApi.prototype.patchUserpoliciesUserId = function patchUserpoliciesUserId(userId, body){
    var requestPath = '/api/v2/voicemail/userpolicies/{userId}';
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
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};


module.exports = VoicemailApi;
