//API VERSION - 
/**
* @class
* @example
* var api = new CallsApi(pureCloudSession);
*/
var CallsApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Get conversations
	 * @memberOf CallsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	*/
	function getCalls(conversationId, participantId){
		var apipath = '/api/v2/calls';
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
	self.getCalls = getCalls;
	/**
     * @summary Create a call conversation
	 * @memberOf CallsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "phoneNumber": "",
   "callFromQueueId": "",
   "callQueueId": "",
   "callUserId": "",
   "priority": 0,
   "languageId": "",
   "routingSkillsIds": [],
   "conversationIds": [],
   "participants": []
}
	*/
	function postCalls(conversationId, participantId, body){
		var apipath = '/api/v2/calls';
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
	self.postCalls = postCalls;
	/**
     * @summary Get the maximum number of participants that this user can have on a conference
	 * @memberOf CallsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	*/
	function getMaximumconferenceparties(conversationId, participantId){
		var apipath = '/api/v2/calls/maximumconferenceparties';
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
	self.getMaximumconferenceparties = getMaximumconferenceparties;
	/**
     * @summary Update conversation participant
	 * @memberOf CallsApi#
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
	function patchParticipantsParticipantId(conversationId, participantId, body){
		var apipath = '/api/v2/calls/participants/{participantId}';
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


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchParticipantsParticipantId = patchParticipantsParticipantId;
	/**
     * @summary Update the attributes on a conversation participant.
	 * @memberOf CallsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "attributes": {}
}
	*/
	function patchParticipantsParticipantIdAttributes(conversationId, participantId, body){
		var apipath = '/api/v2/calls/participants/{participantId}/attributes';
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


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchParticipantsParticipantIdAttributes = patchParticipantsParticipantIdAttributes;
	/**
     * @summary Replace this participant with the specified user and/or address
	 * @memberOf CallsApi#
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
	function postParticipantsParticipantIdReplace(conversationId, participantId, body){
		var apipath = '/api/v2/calls/participants/{participantId}/replace';
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
	self.postParticipantsParticipantIdReplace = postParticipantsParticipantIdReplace;
	/**
     * @summary Get the wrap-up for this conversation participant. 
	 * @memberOf CallsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	* @param {boolean} provisional - Indicates if the wrap-up code is provisional.
	*/
	function getParticipantsParticipantIdWrapup(conversationId, participantId, provisional){
		var apipath = '/api/v2/calls/participants/{participantId}/wrapup';
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
	self.getParticipantsParticipantIdWrapup = getParticipantsParticipantIdWrapup;
	/**
     * @summary Get list of wrapup codes for this conversation participant
	 * @memberOf CallsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	*/
	function getParticipantsParticipantIdWrapupcodes(conversationId, participantId){
		var apipath = '/api/v2/calls/participants/{participantId}/wrapupcodes';
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
	self.getParticipantsParticipantIdWrapupcodes = getParticipantsParticipantIdWrapupcodes;
	/**
     * @summary Get call conversation
	 * @memberOf CallsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	*/
	function getConversationId(conversationId, participantId){
		var apipath = '/api/v2/calls/{conversationId}';
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
	self.getConversationId = getConversationId;
	/**
     * @summary Add a new call to a conversation
	 * @memberOf CallsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	* @param {} body - Conversation
	 * @example
	 * Body Example:
	 * {
   "callNumber": ""
}
	*/
	function postConversationId(conversationId, participantId, body){
		var apipath = '/api/v2/calls/{conversationId}';
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
	self.postConversationId = postConversationId;
	/**
     * @summary Update conversation
	 * @memberOf CallsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
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
	function patchConversationId(conversationId, participantId, body){
		var apipath = '/api/v2/calls/{conversationId}';
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


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchConversationId = patchConversationId;
	/**
     * @summary Add participants to a conversation
	 * @memberOf CallsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
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
	function postConversationIdParticipants(conversationId, participantId, body){
		var apipath = '/api/v2/calls/{conversationId}/participants';
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
	self.postConversationIdParticipants = postConversationIdParticipants;
	/**
     * @summary Initiate and update consult transfer
	 * @memberOf CallsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	* @param {} body - Destination address & initial speak to
	 * @example
	 * Body Example:
	 * {
   "speakTo": "",
   "destination": {
      "address": "",
      "name": "",
      "userId": "",
      "queueId": ""
   }
}
	*/
	function postConversationIdParticipantsParticipantIdConsult(conversationId, participantId, body){
		var apipath = '/api/v2/calls/{conversationId}/participants/{participantId}/consult';
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
	self.postConversationIdParticipantsParticipantIdConsult = postConversationIdParticipantsParticipantIdConsult;
	/**
     * @summary Cancel the transfer
	 * @memberOf CallsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	*/
	function deleteConversationIdParticipantsParticipantIdConsult(conversationId, participantId){
		var apipath = '/api/v2/calls/{conversationId}/participants/{participantId}/consult';
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
	self.deleteConversationIdParticipantsParticipantIdConsult = deleteConversationIdParticipantsParticipantIdConsult;
	/**
     * @summary Change who can speak
	 * @memberOf CallsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	* @param {} body - new speak to
	 * @example
	 * Body Example:
	 * {
   "speakTo": ""
}
	*/
	function patchConversationIdParticipantsParticipantIdConsult(conversationId, participantId, body){
		var apipath = '/api/v2/calls/{conversationId}/participants/{participantId}/consult';
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


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchConversationIdParticipantsParticipantIdConsult = patchConversationIdParticipantsParticipantIdConsult;
	/**
     * @summary Listen in on the conversation from the point of view of a given participant.
	 * @memberOf CallsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	*/
	function postConversationIdParticipantsParticipantIdMonitor(conversationId, participantId){
		var apipath = '/api/v2/calls/{conversationId}/participants/{participantId}/monitor';
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
	self.postConversationIdParticipantsParticipantIdMonitor = postConversationIdParticipantsParticipantIdMonitor;

    return self;
};
