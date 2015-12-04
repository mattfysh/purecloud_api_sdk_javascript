if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.voicemail";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.voicemail = (function (PureCloud) {
	/**
	* @namespace voicemail/mailbox
	**/
	/**
	* @namespace voicemail/messages
	**/
	/**
	* @namespace voicemail/messages/media
	**/

	var self = {};
	self.mailbox = self.mailbox || {};

	/**
     * 
     * @method getMailboxInformation
	 * @memberof voicemail/mailbox
	 *
     */
     self.mailbox.getMailboxInformation = function(){
		var path = '/api/v1/voicemail/mailbox';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.messages = self.messages || {};

	/**
     * 
     * @method getVoicemailMessages
	 * @memberof voicemail/messages
	 *
     */
     self.messages.getVoicemailMessages = function(){
		var path = '/api/v1/voicemail/messages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.messages = self.messages || {};

	/**
     * 
     * @method deleteAllVoicemailMessages
	 * @memberof voicemail/messages
	 *
     */
     self.messages.deleteAllVoicemailMessages = function(){
		var path = '/api/v1/voicemail/messages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.messages = self.messages || {};

	/**
     * 
     * @method getMessage
	 * @memberof voicemail/messages

	* @param {string} messageId - Message ID
	 *
     */
     self.messages.getMessage = function(messageId){
		var path = '/api/v1/voicemail/messages/{messageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.messages = self.messages || {};

	/**
     * 
     * @method updateMessage
	 * @memberof voicemail/messages

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
      "status": {},
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
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
	 *
     */
     self.messages.updateMessage = function(messageId, body){
		var path = '/api/v1/voicemail/messages/{messageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.messages = self.messages || {};

	/**
     * 
     * @method deleteMessage
	 * @memberof voicemail/messages

	* @param {string} messageId - Message ID
	 *
     */
     self.messages.deleteMessage = function(messageId){
		var path = '/api/v1/voicemail/messages/{messageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.messages = self.messages || {};
	self.messages.media = self.messages.media || {};

	/**
     * 
     * @method getMessageMedia
	 * @memberof voicemail/messages/media

	* @param {string} messageId - Message ID

	* @param {string} formatId - The desired format (WEBM, WAV, etc.)
	WEBM,
	WAV,
	 *
     */
     self.messages.media.getMessageMedia = function(messageId, formatId){
		var path = '/api/v1/voicemail/messages/{messageId}/media';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }


		if(formatId !== undefined && formatId !== null){
			queryParameters.formatId = formatId;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
