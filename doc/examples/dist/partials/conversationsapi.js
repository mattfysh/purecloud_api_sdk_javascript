/**
* @class
* @example
* var api = new ConversationsApi(pureCloudSession);
*/
var ConversationsApi = function (pureCloudSession) {
	/**
     * @summary Get conversations
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} communicationType - Call or Chat communication filtering
	*/
	function get(communicationType){
		var apipath = '/api/v1/conversations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(communicationType !== undefined && communicationType !== null){
			queryParameters.communicationType = communicationType;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.get = get;
	/**
     * @summary Create conversation
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} call - Phone number to call
	* @param {string} callFrom - Queue id to place the call from
	* @param {string} callQueueId - Queue id to call
	* @param {string} callUserId - User id to call (this will call the default number)
	* @param {integer} priority - Priority level to use for routing when calling a queue
	* @param {string} languageId - Language id to use for routing when calling a queue
	* @param {array} skillIds - Skill ids to use for routing when calling a queue
	* @param {} body - 
	*/
	function create(call, callFrom, callQueueId, callUserId, priority, languageId, skillIds, body){
		var apipath = '/api/v1/conversations';
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


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.create = create;
	/**
     * @summary Get the maximum number of participants that this user can have on a conference
	 * @description 
	 * @memberOf ConversationsApi#
	*/
	function getMaximumconferenceparties(){
		var apipath = '/api/v1/conversations/maximumconferenceparties';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getMaximumconferenceparties = getMaximumconferenceparties;
	/**
     * @summary Query historical conversations
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "pageSize": 0,
   "maximum": 0,
   "filters": [],
   "facets": []
}
	*/
	function createQuery(body){
		var apipath = '/api/v1/conversations/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createQuery = createQuery;
	/**
     * @summary Query historical conversations with a date/time anchor
	 * @description 
	 * @memberOf ConversationsApi#
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
	*/
	function createQueryAnchor(anchor, body){
		var apipath = '/api/v1/conversations/query/{anchor}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{anchor}', anchor);

        if(anchor === undefined && anchor !== null){
			throw 'Missing required  parameter: anchor';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createQueryAnchor = createQueryAnchor;
	/**
     * @summary Get conversation
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	*/
	function getConversation(conversationId){
		var apipath = '/api/v1/conversations/{conversationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversation = getConversation;
	/**
     * @summary Update conversation
	 * @description 
	 * @memberOf ConversationsApi#
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
	*/
	function updateConversation(conversationId, body){
		var apipath = '/api/v1/conversations/{conversationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateConversation = updateConversation;
	/**
     * @summary Get conversation messages
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	*/
	function getConversationMessages(conversationId){
		var apipath = '/api/v1/conversations/{conversationId}/messages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationMessages = getConversationMessages;
	/**
     * @summary Send an email reply
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {} body - Reply
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "to": [],
   "cc": [],
   "bcc": [],
   "from": {
      "email": "",
      "name": ""
   },
   "subject": "",
   "attachments": [],
   "textBody": "",
   "htmlBody": "",
   "time": "",
   "selfUri": ""
}
	*/
	function createConversationMessages(conversationId, body){
		var apipath = '/api/v1/conversations/{conversationId}/messages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createConversationMessages = createConversationMessages;
	/**
     * @summary Get conversation draft reply
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	*/
	function getConversationMessagesDraft(conversationId){
		var apipath = '/api/v1/conversations/{conversationId}/messages/draft';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationMessagesDraft = getConversationMessagesDraft;
	/**
     * @summary Update conversation draft reply
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {} body - Draft
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "to": [],
   "cc": [],
   "bcc": [],
   "from": {
      "email": "",
      "name": ""
   },
   "subject": "",
   "attachments": [],
   "textBody": "",
   "htmlBody": "",
   "time": "",
   "selfUri": ""
}
	*/
	function updateConversationMessagesDraft(conversationId, body){
		var apipath = '/api/v1/conversations/{conversationId}/messages/draft';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateConversationMessagesDraft = updateConversationMessagesDraft;
	/**
     * @summary Delete attachment from draft
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} attachmentId - attachment ID
	*/
	function deleteConversationMessagesDraftAttachmentsByAttachmentId(conversationId, attachmentId){
		var apipath = '/api/v1/conversations/{conversationId}/messages/draft/attachments/{attachmentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{attachmentId}', attachmentId);

        if(attachmentId === undefined && attachmentId !== null){
			throw 'Missing required  parameter: attachmentId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteConversationMessagesDraftAttachmentsByAttachmentId = deleteConversationMessagesDraftAttachmentsByAttachmentId;
	/**
     * @summary Get conversation message
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} id - message ID
	*/
	function getConversationMessagesById(conversationId, id){
		var apipath = '/api/v1/conversations/{conversationId}/messages/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationMessagesById = getConversationMessagesById;
	/**
     * @summary Add participants to a conversation
	 * @description 
	 * @memberOf ConversationsApi#
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
	*/
	function createConversationParticipants(conversationId, body){
		var apipath = '/api/v1/conversations/{conversationId}/participants';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createConversationParticipants = createConversationParticipants;
	/**
     * @summary Update a participant.
	 * @description Specify the state as CONNECTED, DISCONNECTED. You can specify a wrap-up code.
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	* @param {} body - Specify the state as CONNECTED, DISCONNECTED. You can specify a wrap-up code.
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
	*/
	function updateConversationParticipantsByParticipantId(conversationId, participantId, body){
		var apipath = '/api/v1/conversations/{conversationId}/participants/{participantId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateConversationParticipantsByParticipantId = updateConversationParticipantsByParticipantId;
	/**
     * @summary Update the attributes on a conversation participant.
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "attributes": {}
}
	*/
	function updateConversationParticipantsByParticipantIdAttributes(conversationId, participantId, body){
		var apipath = '/api/v1/conversations/{conversationId}/participants/{participantId}/attributes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateConversationParticipantsByParticipantIdAttributes = updateConversationParticipantsByParticipantIdAttributes;
	/**
     * @summary Initiate and update consult transfer
	 * @description 
	 * @memberOf ConversationsApi#
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
	*/
	function createConversationParticipantsByParticipantIdConsult(conversationId, participantId, body){
		var apipath = '/api/v1/conversations/{conversationId}/participants/{participantId}/consult';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createConversationParticipantsByParticipantIdConsult = createConversationParticipantsByParticipantIdConsult;
	/**
     * @summary Change who can speak
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - The object of the transfer
	* @param {} body - new speak to
	 * @example
	 * Body Example:
	 * {
   "speakTo": ""
}
	*/
	function updateConversationParticipantsByParticipantIdConsult(conversationId, participantId, body){
		var apipath = '/api/v1/conversations/{conversationId}/participants/{participantId}/consult';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateConversationParticipantsByParticipantIdConsult = updateConversationParticipantsByParticipantIdConsult;
	/**
     * @summary Cancel the transfer
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - The object of the transfer
	*/
	function deleteConversationParticipantsByParticipantIdConsult(conversationId, participantId){
		var apipath = '/api/v1/conversations/{conversationId}/participants/{participantId}/consult';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteConversationParticipantsByParticipantIdConsult = deleteConversationParticipantsByParticipantIdConsult;
	/**
     * @summary Listen in on the conversation from the point of view of a given participant.
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	*/
	function createConversationParticipantsByParticipantIdMonitor(conversationId, participantId){
		var apipath = '/api/v1/conversations/{conversationId}/participants/{participantId}/monitor';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createConversationParticipantsByParticipantIdMonitor = createConversationParticipantsByParticipantIdMonitor;
	/**
     * @summary Replace this participant with the specified user and/or address
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	* @param {string} userId - The user that will replace this participant.  If address is not supplied then the user's Work address will be used.  This parameter is required when replacing a participant that has an active chat.
	* @param {string} address - The address that will be used to contact the new participant
	* @param {string} username - The username of the person that will replace this participant.  This field is only used if the userId is blank.
	* @param {string} queueId - The id of the queue that will replace this participant.
	* @param {boolean} voicemail - Indicates this participant will be replaced by the voicemail inbox of the participant.
	*/
	function createConversationParticipantsByParticipantIdReplace(conversationId, participantId, userId, address, username, queueId, voicemail){
		var apipath = '/api/v1/conversations/{conversationId}/participants/{participantId}/replace';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{participantId}', participantId);

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


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createConversationParticipantsByParticipantIdReplace = createConversationParticipantsByParticipantIdReplace;
	/**
     * @summary Get the wrap-up for this conversation participant. 
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	* @param {boolean} provisional - Indicates if the wrap-up code is provisional.
	*/
	function getConversationParticipantsByParticipantIdWrapup(conversationId, participantId, provisional){
		var apipath = '/api/v1/conversations/{conversationId}/participants/{participantId}/wrapup';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		if(provisional !== undefined && provisional !== null){
			queryParameters.provisional = provisional;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationParticipantsByParticipantIdWrapup = getConversationParticipantsByParticipantIdWrapup;
	/**
     * @summary Get list of wrapup codes for this conversation participant
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	*/
	function getConversationParticipantsByParticipantIdWrapupcodes(conversationId, participantId){
		var apipath = '/api/v1/conversations/{conversationId}/participants/{participantId}/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationParticipantsByParticipantIdWrapupcodes = getConversationParticipantsByParticipantIdWrapupcodes;
	/**
     * @summary Get all of a Conversation's Recordings.
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - Conversation ID
	* @param {integer} maxWaitMs - The maximum number of milliseconds to wait for the recording to be ready.
	Any integer greater than or equal to 0.,
	* @param {string} formatId - The desired format (WEBM, WAV, etc.)
	WEBM,
	WAV,
	*/
	function getConversationRecordings(conversationId, maxWaitMs, formatId){
		var apipath = '/api/v1/conversations/{conversationId}/recordings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }


		if(maxWaitMs !== undefined && maxWaitMs !== null){
			queryParameters.maxWaitMs = maxWaitMs;
		}


		if(formatId !== undefined && formatId !== null){
			queryParameters.formatId = formatId;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationRecordings = getConversationRecordings;
	/**
     * @summary Gets a specific recording.
	 * @description 
	 * @memberOf ConversationsApi#
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
	*/
	function getConversationRecordingsByRecordingId(conversationId, recordingId, maxWaitMs, formatId, download, fileName){
		var apipath = '/api/v1/conversations/{conversationId}/recordings/{recordingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{recordingId}', recordingId);

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


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationRecordingsByRecordingId = getConversationRecordingsByRecordingId;
	/**
     * @summary Sets the restore state on a recording.
	 * @description It is not currently possible to force something into long term storage, so this can only be used to request a restoration. In addition, a restoration takes some time, and so it is not guaranteed to be completed for several hours.
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - Conversation ID
	* @param {string} recordingId - Recording ID
	* @param {} body - recording
	* @param {integer} restoreDays - The number of days the recording will be available before it is re-archived.
	Any integer greater than or equal to 1.,
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
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
   "recordingId": "",
   "selfUri": ""
}
	*/
	function updateConversationRecordingsByRecordingId(conversationId, recordingId, body, restoreDays){
		var apipath = '/api/v1/conversations/{conversationId}/recordings/{recordingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{recordingId}', recordingId);

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


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateConversationRecordingsByRecordingId = updateConversationRecordingsByRecordingId;
	/**
     * @summary Updates the recording retention durations
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - Conversation ID
	* @param {string} recordingId - Recording ID
	* @param {} body - recording
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
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
   "recordingId": "",
   "selfUri": ""
}
	*/
	function patchConversationRecordingsByRecordingId(conversationId, recordingId, body){
		var apipath = '/api/v1/conversations/{conversationId}/recordings/{recordingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchConversationRecordingsByRecordingId = patchConversationRecordingsByRecordingId;
	/**
     * @summary Get annotations for recording
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - Conversation ID
	* @param {string} recordingId - Recording ID
	*/
	function getConversationRecordingsByRecordingIdAnnotations(conversationId, recordingId){
		var apipath = '/api/v1/conversations/{conversationId}/recordings/{recordingId}/annotations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationRecordingsByRecordingIdAnnotations = getConversationRecordingsByRecordingIdAnnotations;
	/**
     * @summary Create annotation
	 * @description 
	 * @memberOf ConversationsApi#
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
   "description": "",
   "selfUri": ""
}
	*/
	function createConversationRecordingsByRecordingIdAnnotations(conversationId, recordingId, body){
		var apipath = '/api/v1/conversations/{conversationId}/recordings/{recordingId}/annotations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createConversationRecordingsByRecordingIdAnnotations = createConversationRecordingsByRecordingIdAnnotations;
	/**
     * @summary Get annotation
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - Conversation ID
	* @param {string} recordingId - Recording ID
	* @param {string} annotationId - Annotation ID
	*/
	function getConversationRecordingsByRecordingIdAnnotationsByAnnotationId(conversationId, recordingId, annotationId){
		var apipath = '/api/v1/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }

        apipath = apipath.replace('{annotationId}', annotationId);

        if(annotationId === undefined && annotationId !== null){
			throw 'Missing required  parameter: annotationId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationRecordingsByRecordingIdAnnotationsByAnnotationId = getConversationRecordingsByRecordingIdAnnotationsByAnnotationId;
	/**
     * @summary Update annotation
	 * @description 
	 * @memberOf ConversationsApi#
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
   "description": "",
   "selfUri": ""
}
	*/
	function updateConversationRecordingsByRecordingIdAnnotationsByAnnotationId(conversationId, recordingId, annotationId, body){
		var apipath = '/api/v1/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }

        apipath = apipath.replace('{annotationId}', annotationId);

        if(annotationId === undefined && annotationId !== null){
			throw 'Missing required  parameter: annotationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateConversationRecordingsByRecordingIdAnnotationsByAnnotationId = updateConversationRecordingsByRecordingIdAnnotationsByAnnotationId;
	/**
     * @summary Delete annotation
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - Conversation ID
	* @param {string} recordingId - Recording ID
	* @param {string} annotationId - Annotation ID
	*/
	function deleteConversationRecordingsByRecordingIdAnnotationsByAnnotationId(conversationId, recordingId, annotationId){
		var apipath = '/api/v1/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }

        apipath = apipath.replace('{annotationId}', annotationId);

        if(annotationId === undefined && annotationId !== null){
			throw 'Missing required  parameter: annotationId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteConversationRecordingsByRecordingIdAnnotationsByAnnotationId = deleteConversationRecordingsByRecordingIdAnnotationsByAnnotationId;
	/**
     * @summary Get possible tags for Conversation
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	*/
	function getConversationTags(conversationId){
		var apipath = '/api/v1/conversations/{conversationId}/tags';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationTags = getConversationTags;
	/**
     * @summary Get possible wrap-up codes for Conversation
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	*/
	function getConversationWrapupcodes(conversationId){
		var apipath = '/api/v1/conversations/{conversationId}/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationWrapupcodes = getConversationWrapupcodes;

    return self;
};
