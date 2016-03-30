//API VERSION - 
/**
* @class
* @example
* var api = new EmailsApi(pureCloudSession);
*/
var EmailsApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Get conversations
	 * @memberOf EmailsApi#
	* @param {string} attachmentId - attachment ID
	* @param {string} messageId - message ID
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	*/
	function getEmails(attachmentId, messageId, conversationId, participantId){
		var apipath = '/api/v2/emails';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{attachmentId}', attachmentId);

        if(attachmentId === undefined && attachmentId !== null){
			throw 'Missing required  parameter: attachmentId';
        }

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }

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
	self.getEmails = getEmails;
	/**
     * @summary Update conversation participant
	 * @memberOf EmailsApi#
	* @param {string} attachmentId - attachment ID
	* @param {string} messageId - message ID
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
	*/
	function patchParticipantsParticipantId(attachmentId, messageId, conversationId, participantId, body){
		var apipath = '/api/v2/emails/participants/{participantId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{attachmentId}', attachmentId);

        if(attachmentId === undefined && attachmentId !== null){
			throw 'Missing required  parameter: attachmentId';
        }

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }

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


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchParticipantsParticipantId = patchParticipantsParticipantId;
	/**
     * @summary Update the attributes on a conversation participant.
	 * @memberOf EmailsApi#
	* @param {string} attachmentId - attachment ID
	* @param {string} messageId - message ID
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "attributes": {}
}
	*/
	function patchParticipantsParticipantIdAttributes(attachmentId, messageId, conversationId, participantId, body){
		var apipath = '/api/v2/emails/participants/{participantId}/attributes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{attachmentId}', attachmentId);

        if(attachmentId === undefined && attachmentId !== null){
			throw 'Missing required  parameter: attachmentId';
        }

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }

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


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchParticipantsParticipantIdAttributes = patchParticipantsParticipantIdAttributes;
	/**
     * @summary Replace this participant with the specified user and/or address
	 * @memberOf EmailsApi#
	* @param {string} attachmentId - attachment ID
	* @param {string} messageId - message ID
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "userId": "",
   "address": "",
   "userName": "",
   "queueId": "",
   "voicemail": true
}
	*/
	function postParticipantsParticipantIdReplace(attachmentId, messageId, conversationId, participantId, body){
		var apipath = '/api/v2/emails/participants/{participantId}/replace';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{attachmentId}', attachmentId);

        if(attachmentId === undefined && attachmentId !== null){
			throw 'Missing required  parameter: attachmentId';
        }

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }

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
	self.postParticipantsParticipantIdReplace = postParticipantsParticipantIdReplace;
	/**
     * @summary Get the wrap-up for this conversation participant. 
	 * @memberOf EmailsApi#
	* @param {string} attachmentId - attachment ID
	* @param {string} messageId - message ID
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	* @param {boolean} provisional - Indicates if the wrap-up code is provisional.
	*/
	function getParticipantsParticipantIdWrapup(attachmentId, messageId, conversationId, participantId, provisional){
		var apipath = '/api/v2/emails/participants/{participantId}/wrapup';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{attachmentId}', attachmentId);

        if(attachmentId === undefined && attachmentId !== null){
			throw 'Missing required  parameter: attachmentId';
        }

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }

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
	self.getParticipantsParticipantIdWrapup = getParticipantsParticipantIdWrapup;
	/**
     * @summary Get list of wrapup codes for this conversation participant
	 * @memberOf EmailsApi#
	* @param {string} attachmentId - attachment ID
	* @param {string} messageId - message ID
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	*/
	function getParticipantsParticipantIdWrapupcodes(attachmentId, messageId, conversationId, participantId){
		var apipath = '/api/v2/emails/participants/{participantId}/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{attachmentId}', attachmentId);

        if(attachmentId === undefined && attachmentId !== null){
			throw 'Missing required  parameter: attachmentId';
        }

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }

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
	self.getParticipantsParticipantIdWrapupcodes = getParticipantsParticipantIdWrapupcodes;
	/**
     * @summary Get email conversation
	 * @memberOf EmailsApi#
	* @param {string} attachmentId - attachment ID
	* @param {string} messageId - message ID
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	*/
	function getConversationId(attachmentId, messageId, conversationId, participantId){
		var apipath = '/api/v2/emails/{conversationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{attachmentId}', attachmentId);

        if(attachmentId === undefined && attachmentId !== null){
			throw 'Missing required  parameter: attachmentId';
        }

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }

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
	self.getConversationId = getConversationId;
	/**
     * @summary Get conversation messages
	 * @memberOf EmailsApi#
	* @param {string} attachmentId - attachment ID
	* @param {string} messageId - message ID
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	*/
	function getConversationIdMessages(attachmentId, messageId, conversationId, participantId){
		var apipath = '/api/v2/emails/{conversationId}/messages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{attachmentId}', attachmentId);

        if(attachmentId === undefined && attachmentId !== null){
			throw 'Missing required  parameter: attachmentId';
        }

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }

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
	self.getConversationIdMessages = getConversationIdMessages;
	/**
     * @summary Send an email reply
	 * @memberOf EmailsApi#
	* @param {string} attachmentId - attachment ID
	* @param {string} messageId - message ID
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
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
	function postConversationIdMessages(attachmentId, messageId, conversationId, participantId, body){
		var apipath = '/api/v2/emails/{conversationId}/messages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{attachmentId}', attachmentId);

        if(attachmentId === undefined && attachmentId !== null){
			throw 'Missing required  parameter: attachmentId';
        }

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }

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
	self.postConversationIdMessages = postConversationIdMessages;
	/**
     * @summary Get conversation draft reply
	 * @memberOf EmailsApi#
	* @param {string} attachmentId - attachment ID
	* @param {string} messageId - message ID
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	*/
	function getConversationIdMessagesDraft(attachmentId, messageId, conversationId, participantId){
		var apipath = '/api/v2/emails/{conversationId}/messages/draft';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{attachmentId}', attachmentId);

        if(attachmentId === undefined && attachmentId !== null){
			throw 'Missing required  parameter: attachmentId';
        }

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }

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
	self.getConversationIdMessagesDraft = getConversationIdMessagesDraft;
	/**
     * @summary Update conversation draft reply
	 * @memberOf EmailsApi#
	* @param {string} attachmentId - attachment ID
	* @param {string} messageId - message ID
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
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
	function putConversationIdMessagesDraft(attachmentId, messageId, conversationId, participantId, body){
		var apipath = '/api/v2/emails/{conversationId}/messages/draft';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{attachmentId}', attachmentId);

        if(attachmentId === undefined && attachmentId !== null){
			throw 'Missing required  parameter: attachmentId';
        }

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }

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
	self.putConversationIdMessagesDraft = putConversationIdMessagesDraft;
	/**
     * @summary Delete attachment from draft
	 * @memberOf EmailsApi#
	* @param {string} attachmentId - attachment ID
	* @param {string} messageId - message ID
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	*/
	function deleteConversationIdMessagesDraftAttachmentsAttachmentId(attachmentId, messageId, conversationId, participantId){
		var apipath = '/api/v2/emails/{conversationId}/messages/draft/attachments/{attachmentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{attachmentId}', attachmentId);

        if(attachmentId === undefined && attachmentId !== null){
			throw 'Missing required  parameter: attachmentId';
        }

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }

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
	self.deleteConversationIdMessagesDraftAttachmentsAttachmentId = deleteConversationIdMessagesDraftAttachmentsAttachmentId;
	/**
     * @summary Get conversation message
	 * @memberOf EmailsApi#
	* @param {string} attachmentId - attachment ID
	* @param {string} messageId - message ID
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	*/
	function getConversationIdMessagesMessageId(attachmentId, messageId, conversationId, participantId){
		var apipath = '/api/v2/emails/{conversationId}/messages/{messageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{attachmentId}', attachmentId);

        if(attachmentId === undefined && attachmentId !== null){
			throw 'Missing required  parameter: attachmentId';
        }

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }

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
	self.getConversationIdMessagesMessageId = getConversationIdMessagesMessageId;

    return self;
};
