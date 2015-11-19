if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.conversations";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.conversations = (function (PureCloud) {
	/**
	* @namespace conversations
	**/
	/**
	* @namespace conversations/maximumconferenceparties
	**/
	/**
	* @namespace conversations/query
	**/
	/**
	* @namespace conversations/messages
	**/
	/**
	* @namespace conversations/messages/draft
	**/
	/**
	* @namespace conversations/participants
	**/
	/**
	* @namespace conversations/participants/attributes
	**/
	/**
	* @namespace conversations/participants/consult
	**/
	/**
	* @namespace conversations/participants/monitor
	**/
	/**
	* @namespace conversations/participants/replace
	**/
	/**
	* @namespace conversations/participants/wrapup
	**/
	/**
	* @namespace conversations/participants/wrapupcodes
	**/
	/**
	* @namespace conversations/recordings
	**/
	/**
	* @namespace conversations/recordings/annotations
	**/
	/**
	* @namespace conversations/tags
	**/
	/**
	* @namespace conversations/wrapupcodes
	**/

	var self = {};

	/**
     * 
     * @method getConversations
	 * @memberof conversations

	* @param {string} communicationType - Call or Chat communication filtering
	 *
     */
     self.getConversations = function(communicationType){
		var path = '/api/v1/conversations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(communicationType !== undefined && communicationType !== null){
			queryParameters.communicationType = communicationType;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	/**
     * 
     * @method createConversation
	 * @memberof conversations

	* @param {string} call - Phone number to call

	* @param {string} callFrom - Queue id to place the call from

	* @param {string} callQueueId - Queue id to call

	* @param {string} callUserId - User id to call (this will call the default number)

	* @param {integer} priority - Priority level to use for routing when calling a queue

	* @param {string} languageId - Language id to use for routing when calling a queue

	* @param {array} skillIds - Skill ids to use for routing when calling a queue

	* @param {} body - 
	 *
     */
     self.createConversation = function(call, callFrom, callQueueId, callUserId, priority, languageId, skillIds, body){
		var path = '/api/v1/conversations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(call !== undefined && call !== null){
			queryParameters.call = call;
		}


		if(callFrom !== undefined && callFrom !== null){
			queryParameters.callFrom = callFrom;
		}


		if(callQueueId !== undefined && callQueueId !== null){
			queryParameters.callQueueId = callQueueId;
		}


		if(callUserId !== undefined && callUserId !== null){
			queryParameters.callUserId = callUserId;
		}


		if(priority !== undefined && priority !== null){
			queryParameters.priority = priority;
		}


		if(languageId !== undefined && languageId !== null){
			queryParameters.languageId = languageId;
		}


		if(skillIds !== undefined && skillIds !== null){
			queryParameters.skillIds = skillIds;
		}

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.maximumconferenceparties = self.maximumconferenceparties || {};

	/**
     * 
     * @method getMaximumParticipants
	 * @memberof conversations/maximumconferenceparties
	 *
     */
     self.maximumconferenceparties.getMaximumParticipants = function(){
		var path = '/api/v1/conversations/maximumconferenceparties';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.query = self.query || {};

	/**
     * 
     * @method queryHistoricalConversations
	 * @memberof conversations/query

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "pageSize": 0,
   "maximum": 0,
   "filters": [],
   "facets": []
}
	 *
     */
     self.query.queryHistoricalConversations = function(body){
		var path = '/api/v1/conversations/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.query = self.query || {};

	/**
     * 
     * @method queryHistoricalConversations
	 * @memberof conversations/query

	* @param {string} anchor - Anchor

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "pageSize": 0,
   "maximum": 0,
   "filters": [],
   "facets": []
}
	 *
     */
     self.query.queryHistoricalConversations = function(anchor, body){
		var path = '/api/v1/conversations/query/{anchor}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{anchor}', anchor);

        if(anchor === undefined && anchor !== null){
			throw 'Missing required  parameter: anchor';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };

	/**
     * 
     * @method getConversation
	 * @memberof conversations

	* @param {string} conversationId - conversation ID
	 *
     */
     self.getConversation = function(conversationId){
		var path = '/api/v1/conversations/{conversationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	/**
     * 
     * @method updateConversation
	 * @memberof conversations

	* @param {string} conversationId - conversation ID

	* @param {} body - Conversation
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "startTime": "",
   "endTime": "",
   "participants": [],
   "conversationIds": [],
   "maxParticipants": 0,
   "recordingState": "",
   "selfUri": ""
}
	 *
     */
     self.updateConversation = function(conversationId, body){
		var path = '/api/v1/conversations/{conversationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.messages = self.messages || {};

	/**
     * 
     * @method getConversationMessages
	 * @memberof conversations/messages

	* @param {string} conversationId - conversation ID
	 *
     */
     self.messages.getConversationMessages = function(conversationId){
		var path = '/api/v1/conversations/{conversationId}/messages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.messages = self.messages || {};

	/**
     * 
     * @method sendAnEmailReply
	 * @memberof conversations/messages

	* @param {string} conversationId - conversation ID

	* @param {} body - Reply
	 * @example
	 * Body Example:
	 * {
   "htmlBody": "",
   "textBody": "",
   "id": "",
   "to": [],
   "cc": [],
   "bcc": [],
   "from": {
      "email": "",
      "name": ""
   },
   "subject": "",
   "attachments": [],
   "time": ""
}
	 *
     */
     self.messages.sendAnEmailReply = function(conversationId, body){
		var path = '/api/v1/conversations/{conversationId}/messages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.messages = self.messages || {};
	self.messages.draft = self.messages.draft || {};

	/**
     * 
     * @method getConversationDraftReply
	 * @memberof conversations/messages/draft

	* @param {string} conversationId - conversation ID
	 *
     */
     self.messages.draft.getConversationDraftReply = function(conversationId){
		var path = '/api/v1/conversations/{conversationId}/messages/draft';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.messages = self.messages || {};
	self.messages.draft = self.messages.draft || {};

	/**
     * 
     * @method updateConversationDraftReply
	 * @memberof conversations/messages/draft

	* @param {string} conversationId - conversation ID

	* @param {} body - Draft
	 * @example
	 * Body Example:
	 * {
   "htmlBody": "",
   "textBody": "",
   "id": "",
   "to": [],
   "cc": [],
   "bcc": [],
   "from": {
      "email": "",
      "name": ""
   },
   "subject": "",
   "attachments": [],
   "time": ""
}
	 *
     */
     self.messages.draft.updateConversationDraftReply = function(conversationId, body){
		var path = '/api/v1/conversations/{conversationId}/messages/draft';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.messages = self.messages || {};

	/**
     * 
     * @method getConversationMessage
	 * @memberof conversations/messages

	* @param {string} conversationId - conversation ID

	* @param {string} id - message ID
	 *
     */
     self.messages.getConversationMessage = function(conversationId, id){
		var path = '/api/v1/conversations/{conversationId}/messages/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        path = path.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.participants = self.participants || {};

	/**
     * 
     * @method addParticipants
	 * @memberof conversations/participants

	* @param {string} conversationId - conversation ID

	* @param {} body - Conversation
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "startTime": "",
   "endTime": "",
   "participants": [],
   "conversationIds": [],
   "maxParticipants": 0,
   "recordingState": "",
   "selfUri": ""
}
	 *
     */
     self.participants.addParticipants = function(conversationId, body){
		var path = '/api/v1/conversations/{conversationId}/participants';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.participants = self.participants || {};

	/**
     * Specify the state as CONNECTED, DISCONNECTED. You can specify a wrap-up code.
     * @method updateParticipant
	 * @memberof conversations/participants

	* @param {string} conversationId - conversation ID

	* @param {string} participantId - participant ID

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "wrapup": {
      "code": "",
      "name": "",
      "notes": "",
      "tags": [],
      "durationSeconds": 0,
      "endTime": "",
      "provisional": true
   },
   "state": "",
   "recording": true,
   "muted": true,
   "confined": true,
   "held": true,
   "wrapupSkipped": true
}
	 *
     */
     self.participants.updateParticipant = function(conversationId, participantId, body){
		var path = '/api/v1/conversations/{conversationId}/participants/{participantId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        path = path.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.participants = self.participants || {};
	self.participants.attributes = self.participants.attributes || {};

	/**
     * 
     * @method updateAttributes
	 * @memberof conversations/participants/attributes

	* @param {string} conversationId - conversation ID

	* @param {string} participantId - participant ID

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "attributes": {}
}
	 *
     */
     self.participants.attributes.updateAttributes = function(conversationId, participantId, body){
		var path = '/api/v1/conversations/{conversationId}/participants/{participantId}/attributes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        path = path.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.participants = self.participants || {};
	self.participants.consult = self.participants.consult || {};

	/**
     * 
     * @method initiateConsultTransfer
	 * @memberof conversations/participants/consult

	* @param {string} conversationId - conversation ID

	* @param {string} participantId - The object of the transfer

	* @param {} body - Destination address & initial speak to
	 * @example
	 * Body Example:
	 * {
   "speakTo": "",
   "destination": {
      "accountCodeDigits": "",
      "postConnectDigits": "",
      "address": "",
      "name": "",
      "userId": "",
      "queueId": ""
   }
}
	 *
     */
     self.participants.consult.initiateConsultTransfer = function(conversationId, participantId, body){
		var path = '/api/v1/conversations/{conversationId}/participants/{participantId}/consult';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        path = path.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.participants = self.participants || {};
	self.participants.consult = self.participants.consult || {};

	/**
     * 
     * @method updateConsultTransfer
	 * @memberof conversations/participants/consult

	* @param {string} conversationId - conversation ID

	* @param {string} participantId - The object of the transfer

	* @param {} body - new speak to
	 * @example
	 * Body Example:
	 * {
   "speakTo": ""
}
	 *
     */
     self.participants.consult.updateConsultTransfer = function(conversationId, participantId, body){
		var path = '/api/v1/conversations/{conversationId}/participants/{participantId}/consult';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        path = path.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.participants = self.participants || {};
	self.participants.consult = self.participants.consult || {};

	/**
     * 
     * @method cancelConsultTransfer
	 * @memberof conversations/participants/consult

	* @param {string} conversationId - conversation ID

	* @param {string} participantId - The object of the transfer
	 *
     */
     self.participants.consult.cancelConsultTransfer = function(conversationId, participantId){
		var path = '/api/v1/conversations/{conversationId}/participants/{participantId}/consult';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        path = path.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.participants = self.participants || {};
	self.participants.monitor = self.participants.monitor || {};

	/**
     * 
     * @method monitorsParticipant
	 * @memberof conversations/participants/monitor

	* @param {string} conversationId - conversation ID

	* @param {string} participantId - participant ID
	 *
     */
     self.participants.monitor.monitorsParticipant = function(conversationId, participantId){
		var path = '/api/v1/conversations/{conversationId}/participants/{participantId}/monitor';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        path = path.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.participants = self.participants || {};
	self.participants.replace = self.participants.replace || {};

	/**
     * 
     * @method replaceParticipant
	 * @memberof conversations/participants/replace

	* @param {string} conversationId - conversation ID

	* @param {string} participantId - participant ID

	* @param {string} userId - The user that will replace this participant.  If address is not supplied then the user's Work address will be used.  This parameter is required when replacing a participant that has an active chat.

	* @param {string} address - The address that will be used to contact the new participant

	* @param {string} username - The username of the person that will replace this participant.  This field is only used if the userId is blank.

	* @param {string} queueId - The id of the queue that will replace this participant.

	* @param {boolean} voicemail - Indicates this participant will be replaced by the voicemail inbox of the participant.
	 *
     */
     self.participants.replace.replaceParticipant = function(conversationId, participantId, userId, address, username, queueId, voicemail){
		var path = '/api/v1/conversations/{conversationId}/participants/{participantId}/replace';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        path = path.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		if(userId !== undefined && userId !== null){
			queryParameters.userId = userId;
		}


		if(address !== undefined && address !== null){
			queryParameters.address = address;
		}


		if(username !== undefined && username !== null){
			queryParameters.username = username;
		}


		if(queueId !== undefined && queueId !== null){
			queryParameters.queueId = queueId;
		}


		if(voicemail !== undefined && voicemail !== null){
			queryParameters.voicemail = voicemail;
		}



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.participants = self.participants || {};
	self.participants.wrapup = self.participants.wrapup || {};

	/**
     * 
     * @method getParticipantWrapup
	 * @memberof conversations/participants/wrapup

	* @param {string} conversationId - conversation ID

	* @param {string} participantId - participant ID

	* @param {boolean} provisional - Indicates if the wrap-up code is provisional.
	 *
     */
     self.participants.wrapup.getParticipantWrapup = function(conversationId, participantId, provisional){
		var path = '/api/v1/conversations/{conversationId}/participants/{participantId}/wrapup';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        path = path.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		if(provisional !== undefined && provisional !== null){
			queryParameters.provisional = provisional;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.participants = self.participants || {};
	self.participants.wrapupcodes = self.participants.wrapupcodes || {};

	/**
     * 
     * @method getWrapupCodes
	 * @memberof conversations/participants/wrapupcodes

	* @param {string} conversationId - conversation ID

	* @param {string} participantId - participant ID
	 *
     */
     self.participants.wrapupcodes.getWrapupCodes = function(conversationId, participantId){
		var path = '/api/v1/conversations/{conversationId}/participants/{participantId}/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        path = path.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.recordings = self.recordings || {};

	/**
     * 
     * @method getConversationRecordings
	 * @memberof conversations/recordings

	* @param {string} conversationId - Conversation ID

	* @param {integer} maxWaitMs - The maximum number of milliseconds to wait for completion.
	Any integer greater than or equal to 0.,

	* @param {string} formatId - The desired format (WEBM, WAV, etc.)
	WEBM,
	WAV,
	 *
     */
     self.recordings.getConversationRecordings = function(conversationId, maxWaitMs, formatId){
		var path = '/api/v1/conversations/{conversationId}/recordings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }


		if(maxWaitMs !== undefined && maxWaitMs !== null){
			queryParameters.maxWaitMs = maxWaitMs;
		}


		if(formatId !== undefined && formatId !== null){
			queryParameters.formatId = formatId;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.recordings = self.recordings || {};

	/**
     * 
     * @method getConversationRecording
	 * @memberof conversations/recordings

	* @param {string} conversationId - Conversation ID

	* @param {string} recordingId - Recording ID

	* @param {integer} maxWaitMs - The maximum number of milliseconds to wait for completion.
	Any integer greater than or equal to 0.,

	* @param {string} formatId - The desired format (WEBM, WAV, etc.)
	WEBM,
	WAV,

	* @param {boolean} download - requesting a download format of the recording
	true,
	false,

	* @param {string} fileName - the name of the downloaded fileName
	 *
     */
     self.recordings.getConversationRecording = function(conversationId, recordingId, maxWaitMs, formatId, download, fileName){
		var path = '/api/v1/conversations/{conversationId}/recordings/{recordingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        path = path.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }


		if(maxWaitMs !== undefined && maxWaitMs !== null){
			queryParameters.maxWaitMs = maxWaitMs;
		}


		if(formatId !== undefined && formatId !== null){
			queryParameters.formatId = formatId;
		}


		if(download !== undefined && download !== null){
			queryParameters.download = download;
		}


		if(fileName !== undefined && fileName !== null){
			queryParameters.fileName = fileName;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.recordings = self.recordings || {};

	/**
     * It is not currently possible to force something into long term storage, so this can only be used to request a restoration. In addition, a restoration takes some time, and so it is not guaranteed to be completed for several hours.
     * @method updateConversationRecording
	 * @memberof conversations/recordings

	* @param {string} conversationId - Conversation ID

	* @param {string} recordingId - Recording ID

	* @param {} body - recording

	* @param {integer} restoreDays - The number of days the recording will be available before it is re-archived.
	Any integer greater than or equal to 1.,
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "conversationId": "",
   "path": "",
   "startTime": "",
   "endTime": "",
   "media": "",
   "mediaUri": "",
   "waveUri": "",
   "annotations": [],
   "transcript": [],
   "emailTranscript": [],
   "fileState": "",
   "restoreExpirationTime": "",
   "mediaUris": {},
   "estimatedTranscodeTimeMs": 0,
   "actualTranscodeTimeMs": 0,
   "archiveDate": "",
   "archiveMedium": "",
   "deleteDate": "",
   "maxAllowedRestorationsForOrg": 0,
   "remainingRestorationsAllowedForOrg": 0,
   "recordingId": ""
}
	 *
     */
     self.recordings.updateConversationRecording = function(conversationId, recordingId, body, restoreDays){
		var path = '/api/v1/conversations/{conversationId}/recordings/{recordingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        path = path.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		if(restoreDays !== undefined && restoreDays !== null){
			queryParameters.restoreDays = restoreDays;
		}



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.recordings = self.recordings || {};

	/**
     * 
     * @method updateRecordingRetentionDurationData
	 * @memberof conversations/recordings

	* @param {string} conversationId - Conversation ID

	* @param {string} recordingId - Recording ID

	* @param {} body - recording
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "conversationId": "",
   "path": "",
   "startTime": "",
   "endTime": "",
   "media": "",
   "mediaUri": "",
   "waveUri": "",
   "annotations": [],
   "transcript": [],
   "emailTranscript": [],
   "fileState": "",
   "restoreExpirationTime": "",
   "mediaUris": {},
   "estimatedTranscodeTimeMs": 0,
   "actualTranscodeTimeMs": 0,
   "archiveDate": "",
   "archiveMedium": "",
   "deleteDate": "",
   "maxAllowedRestorationsForOrg": 0,
   "remainingRestorationsAllowedForOrg": 0,
   "recordingId": ""
}
	 *
     */
     self.recordings.updateRecordingRetentionDurationData = function(conversationId, recordingId, body){
		var path = '/api/v1/conversations/{conversationId}/recordings/{recordingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        path = path.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PATCH', path + '?' +$.param(queryParameters), requestBody);
     };
	self.recordings = self.recordings || {};
	self.recordings.annotations = self.recordings.annotations || {};

	/**
     * 
     * @method getAnnotations
	 * @memberof conversations/recordings/annotations

	* @param {string} conversationId - Conversation ID

	* @param {string} recordingId - Recording ID
	 *
     */
     self.recordings.annotations.getAnnotations = function(conversationId, recordingId){
		var path = '/api/v1/conversations/{conversationId}/recordings/{recordingId}/annotations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        path = path.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.recordings = self.recordings || {};
	self.recordings.annotations = self.recordings.annotations || {};

	/**
     * 
     * @method createAnnotation
	 * @memberof conversations/recordings/annotations

	* @param {string} conversationId - Conversation ID

	* @param {string} recordingId - Recording ID

	* @param {} body - annotation
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "type": "",
   "location": 0,
   "durationMs": 0,
   "user": {
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
   "description": "",
   "selfUri": ""
}
	 *
     */
     self.recordings.annotations.createAnnotation = function(conversationId, recordingId, body){
		var path = '/api/v1/conversations/{conversationId}/recordings/{recordingId}/annotations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        path = path.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.recordings = self.recordings || {};
	self.recordings.annotations = self.recordings.annotations || {};

	/**
     * 
     * @method getAnnotation
	 * @memberof conversations/recordings/annotations

	* @param {string} conversationId - Conversation ID

	* @param {string} recordingId - Recording ID

	* @param {string} annotationId - Annotation ID
	 *
     */
     self.recordings.annotations.getAnnotation = function(conversationId, recordingId, annotationId){
		var path = '/api/v1/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        path = path.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }

        path = path.replace('{annotationId}', annotationId);

        if(annotationId === undefined && annotationId !== null){
			throw 'Missing required  parameter: annotationId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.recordings = self.recordings || {};
	self.recordings.annotations = self.recordings.annotations || {};

	/**
     * 
     * @method updateAnnotation
	 * @memberof conversations/recordings/annotations

	* @param {string} conversationId - Conversation ID

	* @param {string} recordingId - Recording ID

	* @param {string} annotationId - Annotation ID

	* @param {} body - annotation
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "type": "",
   "location": 0,
   "durationMs": 0,
   "user": {
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
   "description": "",
   "selfUri": ""
}
	 *
     */
     self.recordings.annotations.updateAnnotation = function(conversationId, recordingId, annotationId, body){
		var path = '/api/v1/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        path = path.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }

        path = path.replace('{annotationId}', annotationId);

        if(annotationId === undefined && annotationId !== null){
			throw 'Missing required  parameter: annotationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.recordings = self.recordings || {};
	self.recordings.annotations = self.recordings.annotations || {};

	/**
     * 
     * @method deleteAnnotation
	 * @memberof conversations/recordings/annotations

	* @param {string} conversationId - Conversation ID

	* @param {string} recordingId - Recording ID

	* @param {string} annotationId - Annotation ID
	 *
     */
     self.recordings.annotations.deleteAnnotation = function(conversationId, recordingId, annotationId){
		var path = '/api/v1/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        path = path.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }

        path = path.replace('{annotationId}', annotationId);

        if(annotationId === undefined && annotationId !== null){
			throw 'Missing required  parameter: annotationId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.tags = self.tags || {};

	/**
     * 
     * @method getTags
	 * @memberof conversations/tags

	* @param {string} conversationId - conversation ID
	 *
     */
     self.tags.getTags = function(conversationId){
		var path = '/api/v1/conversations/{conversationId}/tags';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.wrapupcodes = self.wrapupcodes || {};

	/**
     * 
     * @method getWrapupCode
	 * @memberof conversations/wrapupcodes

	* @param {string} conversationId - conversation ID
	 *
     */
     self.wrapupcodes.getWrapupCode = function(conversationId){
		var path = '/api/v1/conversations/{conversationId}/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
