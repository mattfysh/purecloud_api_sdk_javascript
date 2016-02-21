/**
* @class
* @example
* var api = new ConversationsApi(pureCloudSession);
*/
var ConversationsApi = function (pureCloudSession) {
	/**
     * @summary Get conversations
	 * @memberOf ConversationsApi#
	* @param {string} communicationType - Call or Chat communication filtering
	*/
	function getConversations(communicationType){
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
	self.getConversations = getConversations;
	/**
     * @summary Create conversation
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
	function postConversations(call, callFrom, callQueueId, callUserId, priority, languageId, skillIds, body){
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
	self.postConversations = postConversations;
	/**
     * @summary Create Fax Conversation
	 * @memberOf ConversationsApi#
	* @param {} body - Fax
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "addresses": [],
   "originalFilename": "",
   "contentType": "",
   "workspace": {
      "name": "",
      "type": "",
      "isCurrentUserWorkspace": true,
      "user": {},
      "bucket": "",
      "dateCreated": "",
      "dateModified": "",
      "summary": {},
      "acl": []
   },
   "coverSheet": {
      "notes": "",
      "locale": ""
   }
}
	*/
	function postFax(body){
		var apipath = '/api/v1/conversations/fax';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postFax = postFax;
	/**
     * @summary Get the maximum number of participants that this user can have on a conference
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
	 * @memberOf ConversationsApi#
	* @param {} body - Query parameters
	 * @example
	 * Body Example:
	 * {
   "pageSize": 0,
   "maximum": 0,
   "filters": [],
   "facets": []
}
	*/
	function postQuery(body){
		var apipath = '/api/v1/conversations/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postQuery = postQuery;
	/**
     * @summary Query historical conversations with a date/time anchor
	 * @memberOf ConversationsApi#
	* @param {string} anchor - A point in time within the interval for the query that bounds the query. In the form of YYYYMMDDHHmmssSSSZX where YYYY is the 4-digit year, MM is the 2-digit month, DD is the 2-digit day-of-month, HH is the 2-digit hour-of-day (00-23), mm is the 2-digit minute, ss is the 2-digit second, SSS is the 3-digit millisecond, Z is the UTC offset expressed as 'Z', '+nnnn', '-nnnn', '+nn:nn', '-nn:nn', and X is either 'A' (for the anchor point being at the earliest point in the query) or 'D' (for the anchor point being the latest point in the query
	* @param {} body - Query parameters
	 * @example
	 * Body Example:
	 * {
   "pageSize": 0,
   "maximum": 0,
   "filters": [],
   "facets": []
}
	*/
	function postQuery(anchor, body){
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

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postQuery = postQuery;
	/**
     * @summary Get conversation
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	*/
	function get(conversationId){
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
	self.get = get;
	/**
     * @summary Update conversation
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {} body - Conversation
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "startTime": "",
   "endTime": "",
   "address": "",
   "participants": [],
   "conversationIds": [],
   "maxParticipants": 0,
   "recordingState": ""
}
	*/
	function put(conversationId, body){
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
	self.put = put;
	/**
     * @summary Get conversation messages
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	*/
	function getMessages(conversationId){
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
	self.getMessages = getMessages;
	/**
     * @summary Send an email reply
	 * @memberOf ConversationsApi#
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
	*/
	function postMessages(conversationId, body){
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
	self.postMessages = postMessages;
	/**
     * @summary Get conversation draft reply
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	*/
	function getMessagesDraft(conversationId){
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
	self.getMessagesDraft = getMessagesDraft;
	/**
     * @summary Update conversation draft reply
	 * @memberOf ConversationsApi#
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
	*/
	function putMessagesDraft(conversationId, body){
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
	self.putMessagesDraft = putMessagesDraft;
	/**
     * @summary Delete attachment from draft
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} attachmentId - attachment ID
	*/
	function deleteMessagesDraftAttachment(conversationId, attachmentId){
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
	self.deleteMessagesDraftAttachment = deleteMessagesDraftAttachment;
	/**
     * @summary Get conversation message
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} id - message ID
	*/
	function getMessages(conversationId, id){
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
	self.getMessages = getMessages;
	/**
     * @summary Add participants to a conversation
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {} body - Conversation
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "startTime": "",
   "endTime": "",
   "address": "",
   "participants": [],
   "conversationIds": [],
   "maxParticipants": 0,
   "recordingState": ""
}
	*/
	function postParticipants(conversationId, body){
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
	self.postParticipants = postParticipants;
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
	function putParticipant(conversationId, participantId, body){
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
	self.putParticipant = putParticipant;
	/**
     * @summary Update the attributes on a conversation participant.
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
	function putParticipantAttributes(conversationId, participantId, body){
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
	self.putParticipantAttributes = putParticipantAttributes;
	/**
     * @summary Initiate and update consult transfer
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
	function postParticipantConsult(conversationId, participantId, body){
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
	self.postParticipantConsult = postParticipantConsult;
	/**
     * @summary Change who can speak
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
	function putParticipantConsult(conversationId, participantId, body){
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
	self.putParticipantConsult = putParticipantConsult;
	/**
     * @summary Cancel the transfer
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - The object of the transfer
	*/
	function deleteParticipantConsult(conversationId, participantId){
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
	self.deleteParticipantConsult = deleteParticipantConsult;
	/**
     * @summary Listen in on the conversation from the point of view of a given participant.
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	*/
	function postParticipantMonitor(conversationId, participantId){
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
	self.postParticipantMonitor = postParticipantMonitor;
	/**
     * @summary Replace this participant with the specified user and/or address
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	* @param {string} userId - The user that will replace this participant.  If address is not supplied then the user's Work address will be used.  This parameter is required when replacing a participant that has an active chat.
	* @param {string} address - The address that will be used to contact the new participant
	* @param {string} username - The username of the person that will replace this participant.  This field is only used if the userId is blank.
	* @param {string} queueId - The id of the queue that will replace this participant.
	* @param {boolean} voicemail - Indicates this participant will be replaced by the voicemail inbox of the participant.
	*/
	function postParticipantReplace(conversationId, participantId, userId, address, username, queueId, voicemail){
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
	self.postParticipantReplace = postParticipantReplace;
	/**
     * @summary Get the wrap-up for this conversation participant. 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	* @param {boolean} provisional - Indicates if the wrap-up code is provisional.
	*/
	function getParticipantWrapup(conversationId, participantId, provisional){
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
	self.getParticipantWrapup = getParticipantWrapup;
	/**
     * @summary Get list of wrapup codes for this conversation participant
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	*/
	function getParticipantWrapupcodes(conversationId, participantId){
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
	self.getParticipantWrapupcodes = getParticipantWrapupcodes;
	/**
     * @summary Get possible tags for Conversation
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	*/
	function getTags(conversationId){
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
	self.getTags = getTags;
	/**
     * @summary Get possible wrap-up codes for Conversation
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	*/
	function getWrapupcodes(conversationId){
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
	self.getWrapupcodes = getWrapupcodes;

    return self;
};
