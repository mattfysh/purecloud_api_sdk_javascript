/**
* @class
* @example
* var api = new VoicemailApi(pureCloudSession);
*/
var VoicemailApi = function (pureCloudSession) {
	/**
     * @summary Get mailbox information
	 * @description 
	 * @memberOf VoicemailApi#
	*/
	function getMailbox(){
		var apipath = '/api/v1/voicemail/mailbox';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getMailbox = getMailbox;
	/**
     * @summary List voicemail messages
	 * @description 
	 * @memberOf VoicemailApi#
	*/
	function getMessages(){
		var apipath = '/api/v1/voicemail/messages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getMessages = getMessages;
	/**
     * @summary Delete all voicemail messages
	 * @description 
	 * @memberOf VoicemailApi#
	*/
	function deleteMessages(){
		var apipath = '/api/v1/voicemail/messages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteMessages = deleteMessages;
	/**
     * @summary Get message.
	 * @description 
	 * @memberOf VoicemailApi#
	* @param {string} messageId - Message ID
	*/
	function getMessage(messageId){
		var apipath = '/api/v1/voicemail/messages/{messageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getMessage = getMessage;
	/**
     * @summary Update a message.
	 * @description 
	 * @memberOf VoicemailApi#
	* @param {string} messageId - Message ID
	* @param {} body - VoicemailMessage
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "conversation": {
      "id": "",
      "name": "",
      "startTime": "",
      "endTime": "",
      "participants": [],
      "conversationIds": [],
      "maxParticipants": 0,
      "recordingState": "",
      "selfUri": ""
   },
   "read": true,
   "audioRecordingDurationSeconds": 0,
   "audioRecordingSizeBytes": 0,
   "createdDate": "",
   "modifiedDate": "",
   "callerAddress": "",
   "callerName": "",
   "callerUser": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "selfUri": ""
}
	*/
	function updateMessage(messageId, body){
		var apipath = '/api/v1/voicemail/messages/{messageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateMessage = updateMessage;
	/**
     * @summary Delete a message.
	 * @description 
	 * @memberOf VoicemailApi#
	* @param {string} messageId - Message ID
	*/
	function deleteMessage(messageId){
		var apipath = '/api/v1/voicemail/messages/{messageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteMessage = deleteMessage;
	/**
     * @summary Get media playback URI for this message
	 * @description 
	 * @memberOf VoicemailApi#
	* @param {string} messageId - Message ID
	* @param {string} formatId - The desired format (WEBM, WAV, etc.)
	WEBM,
	WAV,
	*/
	function getMessageMedia(messageId, formatId){
		var apipath = '/api/v1/voicemail/messages/{messageId}/media';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }


		if(formatId !== undefined && formatId !== null){
			queryParameters.formatId = formatId;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getMessageMedia = getMessageMedia;

    return self;
};
