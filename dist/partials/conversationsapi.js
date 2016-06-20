//API VERSION - 
/**
* @class
* @example
* var api = new ConversationsApi(pureCloudSession);
*/
var ConversationsApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Query for conversation aggregates
	 * @memberOf ConversationsApi#
	* @param {} body - query
	 * @example
	 * Body Example:
	 * {
   "interval": "",
   "granularity": "",
   "groupBy": [],
   "filter": {
      "type": "",
      "clauses": [],
      "predicates": []
   },
   "metrics": [],
   "flattenMultivaluedDimensions": true
}
	*/
	function postConversationsAggregatesQuery(body){
		var apipath = '/api/v2/analytics/conversations/aggregates/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postConversationsAggregatesQuery = postConversationsAggregatesQuery;
	/**
     * @summary Query for conversation details
	 * @memberOf ConversationsApi#
	* @param {} body - query
	 * @example
	 * Body Example:
	 * {
   "interval": "",
   "conversationFilters": [],
   "evaluationFilters": [],
   "segmentFilters": [],
   "aggregations": [],
   "paging": {
      "pageSize": 0,
      "pageNumber": 0
   },
   "order": "",
   "orderBy": ""
}
	*/
	function postConversationsDetailsQuery(body){
		var apipath = '/api/v2/analytics/conversations/details/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postConversationsDetailsQuery = postConversationsDetailsQuery;
	/**
     * @summary Get a conversation by id
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversationId
	*/
	function getConversationsConversationIdDetails(conversationId){
		var apipath = '/api/v2/analytics/conversations/{conversationId}/details';
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
	self.getConversationsConversationIdDetails = getConversationsConversationIdDetails;
	/**
     * @summary Index conversation properties
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversationId
	* @param {} body - request
	 * @example
	 * Body Example:
	 * {
   "sessionId": "",
   "timestamp": 0,
   "properties": []
}
	*/
	function postConversationsConversationIdDetailsProperties(conversationId, body){
		var apipath = '/api/v2/analytics/conversations/{conversationId}/details/properties';
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
	self.postConversationsConversationIdDetailsProperties = postConversationsConversationIdDetailsProperties;
	/**
     * @summary Get conversations
	 * @memberOf ConversationsApi#
	* @param {string} communicationType - Call or Chat communication filtering
	*/
	function getConversations(communicationType){
		var apipath = '/api/v2/conversations';
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
     * @summary Get callback conversations
	 * @memberOf ConversationsApi#
	*/
	function getCallbacks(){
		var apipath = '/api/v2/conversations/callbacks';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallbacks = getCallbacks;
	/**
     * @summary Create a Callback
	 * @memberOf ConversationsApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "scriptId": "",
   "queueId": "",
   "routingData": {
      "queueId": "",
      "languageId": "",
      "priority": 0,
      "skillIds": [],
      "preferredAgentIds": []
   },
   "callbackUserName": "",
   "callbackNumbers": [],
   "callbackScheduledTime": "",
   "countryCode": "",
   "skipEnabled": true,
   "additionalInfo": {}
}
	*/
	function postCallbacks(body){
		var apipath = '/api/v2/conversations/callbacks';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postCallbacks = postCallbacks;
	/**
     * @summary Get callback conversation
	 * @memberOf ConversationsApi#
	* @param {string} callbackId - 
	*/
	function getCallbacksCallbackId(callbackId){
		var apipath = '/api/v2/conversations/callbacks/{callbackId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callbackId}', callbackId);

        if(callbackId === undefined && callbackId !== null){
			throw 'Missing required  parameter: callbackId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallbacksCallbackId = getCallbacksCallbackId;
	/**
     * @summary Update conversation participant
	 * @memberOf ConversationsApi#
	* @param {string} callbackId - 
	* @param {string} participantId - 
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
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
	function patchCallbacksCallbackIdParticipantsParticipantId(callbackId, participantId, body){
		var apipath = '/api/v2/conversations/callbacks/{callbackId}/participants/{participantId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callbackId}', callbackId);

        if(callbackId === undefined && callbackId !== null){
			throw 'Missing required  parameter: callbackId';
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
	self.patchCallbacksCallbackIdParticipantsParticipantId = patchCallbacksCallbackIdParticipantsParticipantId;
	/**
     * @summary Update the attributes on a conversation participant.
	 * @memberOf ConversationsApi#
	* @param {string} callbackId - 
	* @param {string} participantId - 
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "attributes": {}
}
	*/
	function patchCallbacksCallbackIdParticipantsParticipantIdAttributes(callbackId, participantId, body){
		var apipath = '/api/v2/conversations/callbacks/{callbackId}/participants/{participantId}/attributes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callbackId}', callbackId);

        if(callbackId === undefined && callbackId !== null){
			throw 'Missing required  parameter: callbackId';
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
	self.patchCallbacksCallbackIdParticipantsParticipantIdAttributes = patchCallbacksCallbackIdParticipantsParticipantIdAttributes;
	/**
     * @summary Replace this participant with the specified user and/or address
	 * @memberOf ConversationsApi#
	* @param {string} callbackId - 
	* @param {string} participantId - 
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
	function postCallbacksCallbackIdParticipantsParticipantIdReplace(callbackId, participantId, body){
		var apipath = '/api/v2/conversations/callbacks/{callbackId}/participants/{participantId}/replace';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callbackId}', callbackId);

        if(callbackId === undefined && callbackId !== null){
			throw 'Missing required  parameter: callbackId';
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
	self.postCallbacksCallbackIdParticipantsParticipantIdReplace = postCallbacksCallbackIdParticipantsParticipantIdReplace;
	/**
     * @summary Get the wrap-up for this conversation participant. 
	 * @memberOf ConversationsApi#
	* @param {string} callbackId - 
	* @param {string} participantId - 
	* @param {boolean} provisional - Indicates if the wrap-up code is provisional.
	*/
	function getCallbacksCallbackIdParticipantsParticipantIdWrapup(callbackId, participantId, provisional){
		var apipath = '/api/v2/conversations/callbacks/{callbackId}/participants/{participantId}/wrapup';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callbackId}', callbackId);

        if(callbackId === undefined && callbackId !== null){
			throw 'Missing required  parameter: callbackId';
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
	self.getCallbacksCallbackIdParticipantsParticipantIdWrapup = getCallbacksCallbackIdParticipantsParticipantIdWrapup;
	/**
     * @summary Get list of wrapup codes for this conversation participant
	 * @memberOf ConversationsApi#
	* @param {string} callbackId - 
	* @param {string} participantId - 
	*/
	function getCallbacksCallbackIdParticipantsParticipantIdWrapupcodes(callbackId, participantId){
		var apipath = '/api/v2/conversations/callbacks/{callbackId}/participants/{participantId}/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callbackId}', callbackId);

        if(callbackId === undefined && callbackId !== null){
			throw 'Missing required  parameter: callbackId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallbacksCallbackIdParticipantsParticipantIdWrapupcodes = getCallbacksCallbackIdParticipantsParticipantIdWrapupcodes;
	/**
     * @summary Get recent conversations
	 * @memberOf ConversationsApi#
	*/
	function getCalls(){
		var apipath = '/api/v2/conversations/calls';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCalls = getCalls;
	/**
     * @summary Create a call conversation
	 * @memberOf ConversationsApi#
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
	function postCalls(body){
		var apipath = '/api/v2/conversations/calls';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postCalls = postCalls;
	/**
     * @summary Get call history
	 * @memberOf ConversationsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} interval - Interval string; format is ISO-8601. Separate start and end times with forward slash '/'
	*/
	function getCallsHistory(pageSize, pageNumber, interval){
		var apipath = '/api/v2/conversations/calls/history';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(interval !== undefined && interval !== null){
			queryParameters.interval = interval;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallsHistory = getCallsHistory;
	/**
     * @summary Get the maximum number of participants that this user can have on a conference
	 * @memberOf ConversationsApi#
	*/
	function getCallsMaximumconferenceparties(){
		var apipath = '/api/v2/conversations/calls/maximumconferenceparties';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallsMaximumconferenceparties = getCallsMaximumconferenceparties;
	/**
     * @summary Get call conversation
	 * @memberOf ConversationsApi#
	* @param {string} callId - 
	*/
	function getCallsCallId(callId){
		var apipath = '/api/v2/conversations/calls/{callId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callId}', callId);

        if(callId === undefined && callId !== null){
			throw 'Missing required  parameter: callId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallsCallId = getCallsCallId;
	/**
     * @summary Add a new call to a conversation
	 * @memberOf ConversationsApi#
	* @param {string} callId - 
	* @param {} body - Conversation
	 * @example
	 * Body Example:
	 * {
   "callNumber": ""
}
	*/
	function postCallsCallId(callId, body){
		var apipath = '/api/v2/conversations/calls/{callId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callId}', callId);

        if(callId === undefined && callId !== null){
			throw 'Missing required  parameter: callId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postCallsCallId = postCallsCallId;
	/**
     * @summary Update conversation
	 * @memberOf ConversationsApi#
	* @param {string} callId - 
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
	function patchCallsCallId(callId, body){
		var apipath = '/api/v2/conversations/calls/{callId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callId}', callId);

        if(callId === undefined && callId !== null){
			throw 'Missing required  parameter: callId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchCallsCallId = patchCallsCallId;
	/**
     * @summary Add participants to a conversation
	 * @memberOf ConversationsApi#
	* @param {string} callId - 
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
	function postCallsCallIdParticipants(callId, body){
		var apipath = '/api/v2/conversations/calls/{callId}/participants';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callId}', callId);

        if(callId === undefined && callId !== null){
			throw 'Missing required  parameter: callId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postCallsCallIdParticipants = postCallsCallIdParticipants;
	/**
     * @summary Update conversation participant
	 * @memberOf ConversationsApi#
	* @param {string} callId - 
	* @param {string} participantId - 
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
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
	function patchCallsCallIdParticipantsParticipantId(callId, participantId, body){
		var apipath = '/api/v2/conversations/calls/{callId}/participants/{participantId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callId}', callId);

        if(callId === undefined && callId !== null){
			throw 'Missing required  parameter: callId';
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
	self.patchCallsCallIdParticipantsParticipantId = patchCallsCallIdParticipantsParticipantId;
	/**
     * @summary Update the attributes on a conversation participant.
	 * @memberOf ConversationsApi#
	* @param {string} callId - 
	* @param {string} participantId - 
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "attributes": {}
}
	*/
	function patchCallsCallIdParticipantsParticipantIdAttributes(callId, participantId, body){
		var apipath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/attributes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callId}', callId);

        if(callId === undefined && callId !== null){
			throw 'Missing required  parameter: callId';
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
	self.patchCallsCallIdParticipantsParticipantIdAttributes = patchCallsCallIdParticipantsParticipantIdAttributes;
	/**
     * @summary Initiate and update consult transfer
	 * @memberOf ConversationsApi#
	* @param {string} callId - 
	* @param {string} participantId - 
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
	function postCallsCallIdParticipantsParticipantIdConsult(callId, participantId, body){
		var apipath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/consult';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callId}', callId);

        if(callId === undefined && callId !== null){
			throw 'Missing required  parameter: callId';
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
	self.postCallsCallIdParticipantsParticipantIdConsult = postCallsCallIdParticipantsParticipantIdConsult;
	/**
     * @summary Cancel the transfer
	 * @memberOf ConversationsApi#
	* @param {string} callId - 
	* @param {string} participantId - 
	*/
	function deleteCallsCallIdParticipantsParticipantIdConsult(callId, participantId){
		var apipath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/consult';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callId}', callId);

        if(callId === undefined && callId !== null){
			throw 'Missing required  parameter: callId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteCallsCallIdParticipantsParticipantIdConsult = deleteCallsCallIdParticipantsParticipantIdConsult;
	/**
     * @summary Change who can speak
	 * @memberOf ConversationsApi#
	* @param {string} callId - 
	* @param {string} participantId - 
	* @param {} body - new speak to
	 * @example
	 * Body Example:
	 * {
   "speakTo": ""
}
	*/
	function patchCallsCallIdParticipantsParticipantIdConsult(callId, participantId, body){
		var apipath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/consult';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callId}', callId);

        if(callId === undefined && callId !== null){
			throw 'Missing required  parameter: callId';
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
	self.patchCallsCallIdParticipantsParticipantIdConsult = patchCallsCallIdParticipantsParticipantIdConsult;
	/**
     * @summary Listen in on the conversation from the point of view of a given participant.
	 * @memberOf ConversationsApi#
	* @param {string} callId - 
	* @param {string} participantId - 
	*/
	function postCallsCallIdParticipantsParticipantIdMonitor(callId, participantId){
		var apipath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/monitor';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callId}', callId);

        if(callId === undefined && callId !== null){
			throw 'Missing required  parameter: callId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postCallsCallIdParticipantsParticipantIdMonitor = postCallsCallIdParticipantsParticipantIdMonitor;
	/**
     * @summary Replace this participant with the specified user and/or address
	 * @memberOf ConversationsApi#
	* @param {string} callId - 
	* @param {string} participantId - 
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
	function postCallsCallIdParticipantsParticipantIdReplace(callId, participantId, body){
		var apipath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/replace';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callId}', callId);

        if(callId === undefined && callId !== null){
			throw 'Missing required  parameter: callId';
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
	self.postCallsCallIdParticipantsParticipantIdReplace = postCallsCallIdParticipantsParticipantIdReplace;
	/**
     * @summary Get the wrap-up for this conversation participant. 
	 * @memberOf ConversationsApi#
	* @param {string} callId - 
	* @param {string} participantId - 
	* @param {boolean} provisional - Indicates if the wrap-up code is provisional.
	*/
	function getCallsCallIdParticipantsParticipantIdWrapup(callId, participantId, provisional){
		var apipath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/wrapup';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callId}', callId);

        if(callId === undefined && callId !== null){
			throw 'Missing required  parameter: callId';
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
	self.getCallsCallIdParticipantsParticipantIdWrapup = getCallsCallIdParticipantsParticipantIdWrapup;
	/**
     * @summary Get list of wrapup codes for this conversation participant
	 * @memberOf ConversationsApi#
	* @param {string} callId - 
	* @param {string} participantId - 
	*/
	function getCallsCallIdParticipantsParticipantIdWrapupcodes(callId, participantId){
		var apipath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callId}', callId);

        if(callId === undefined && callId !== null){
			throw 'Missing required  parameter: callId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallsCallIdParticipantsParticipantIdWrapupcodes = getCallsCallIdParticipantsParticipantIdWrapupcodes;
	/**
     * @summary Get recent chat conversations
	 * @memberOf ConversationsApi#
	*/
	function getChats(){
		var apipath = '/api/v2/conversations/chats';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getChats = getChats;
	/**
     * @summary Get chat conversation
	 * @memberOf ConversationsApi#
	* @param {string} chatId - 
	*/
	function getChatsChatId(chatId){
		var apipath = '/api/v2/conversations/chats/{chatId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{chatId}', chatId);

        if(chatId === undefined && chatId !== null){
			throw 'Missing required  parameter: chatId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getChatsChatId = getChatsChatId;
	/**
     * @summary Update conversation participant
	 * @memberOf ConversationsApi#
	* @param {string} chatId - 
	* @param {string} participantId - 
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
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
	function patchChatsChatIdParticipantsParticipantId(chatId, participantId, body){
		var apipath = '/api/v2/conversations/chats/{chatId}/participants/{participantId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{chatId}', chatId);

        if(chatId === undefined && chatId !== null){
			throw 'Missing required  parameter: chatId';
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
	self.patchChatsChatIdParticipantsParticipantId = patchChatsChatIdParticipantsParticipantId;
	/**
     * @summary Update the attributes on a conversation participant.
	 * @memberOf ConversationsApi#
	* @param {string} chatId - 
	* @param {string} participantId - 
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "attributes": {}
}
	*/
	function patchChatsChatIdParticipantsParticipantIdAttributes(chatId, participantId, body){
		var apipath = '/api/v2/conversations/chats/{chatId}/participants/{participantId}/attributes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{chatId}', chatId);

        if(chatId === undefined && chatId !== null){
			throw 'Missing required  parameter: chatId';
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
	self.patchChatsChatIdParticipantsParticipantIdAttributes = patchChatsChatIdParticipantsParticipantIdAttributes;
	/**
     * @summary Replace this participant with the specified user and/or address
	 * @memberOf ConversationsApi#
	* @param {string} chatId - 
	* @param {string} participantId - 
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
	function postChatsChatIdParticipantsParticipantIdReplace(chatId, participantId, body){
		var apipath = '/api/v2/conversations/chats/{chatId}/participants/{participantId}/replace';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{chatId}', chatId);

        if(chatId === undefined && chatId !== null){
			throw 'Missing required  parameter: chatId';
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
	self.postChatsChatIdParticipantsParticipantIdReplace = postChatsChatIdParticipantsParticipantIdReplace;
	/**
     * @summary Get the wrap-up for this conversation participant. 
	 * @memberOf ConversationsApi#
	* @param {string} chatId - 
	* @param {string} participantId - 
	* @param {boolean} provisional - Indicates if the wrap-up code is provisional.
	*/
	function getChatsChatIdParticipantsParticipantIdWrapup(chatId, participantId, provisional){
		var apipath = '/api/v2/conversations/chats/{chatId}/participants/{participantId}/wrapup';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{chatId}', chatId);

        if(chatId === undefined && chatId !== null){
			throw 'Missing required  parameter: chatId';
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
	self.getChatsChatIdParticipantsParticipantIdWrapup = getChatsChatIdParticipantsParticipantIdWrapup;
	/**
     * @summary Get list of wrapup codes for this conversation participant
	 * @memberOf ConversationsApi#
	* @param {string} chatId - 
	* @param {string} participantId - 
	*/
	function getChatsChatIdParticipantsParticipantIdWrapupcodes(chatId, participantId){
		var apipath = '/api/v2/conversations/chats/{chatId}/participants/{participantId}/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{chatId}', chatId);

        if(chatId === undefined && chatId !== null){
			throw 'Missing required  parameter: chatId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getChatsChatIdParticipantsParticipantIdWrapupcodes = getChatsChatIdParticipantsParticipantIdWrapupcodes;
	/**
     * @summary Get recent email conversations
	 * @memberOf ConversationsApi#
	*/
	function getEmails(){
		var apipath = '/api/v2/conversations/emails';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEmails = getEmails;
	/**
     * @summary Get email conversation
	 * @memberOf ConversationsApi#
	* @param {string} emailId - 
	*/
	function getEmailsEmailId(emailId){
		var apipath = '/api/v2/conversations/emails/{emailId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{emailId}', emailId);

        if(emailId === undefined && emailId !== null){
			throw 'Missing required  parameter: emailId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEmailsEmailId = getEmailsEmailId;
	/**
     * @summary Get conversation messages
	 * @memberOf ConversationsApi#
	* @param {string} emailId - 
	*/
	function getEmailsEmailIdMessages(emailId){
		var apipath = '/api/v2/conversations/emails/{emailId}/messages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{emailId}', emailId);

        if(emailId === undefined && emailId !== null){
			throw 'Missing required  parameter: emailId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEmailsEmailIdMessages = getEmailsEmailIdMessages;
	/**
     * @summary Send an email reply
	 * @memberOf ConversationsApi#
	* @param {string} emailId - 
	* @param {} body - Reply
	 * @example
	 * Body Example:
	 * {
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
   "time": ""
}
	*/
	function postEmailsEmailIdMessages(emailId, body){
		var apipath = '/api/v2/conversations/emails/{emailId}/messages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{emailId}', emailId);

        if(emailId === undefined && emailId !== null){
			throw 'Missing required  parameter: emailId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postEmailsEmailIdMessages = postEmailsEmailIdMessages;
	/**
     * @summary Get conversation draft reply
	 * @memberOf ConversationsApi#
	* @param {string} emailId - 
	*/
	function getEmailsEmailIdMessagesDraft(emailId){
		var apipath = '/api/v2/conversations/emails/{emailId}/messages/draft';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{emailId}', emailId);

        if(emailId === undefined && emailId !== null){
			throw 'Missing required  parameter: emailId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEmailsEmailIdMessagesDraft = getEmailsEmailIdMessagesDraft;
	/**
     * @summary Update conversation draft reply
	 * @memberOf ConversationsApi#
	* @param {string} emailId - 
	* @param {} body - Draft
	 * @example
	 * Body Example:
	 * {
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
   "time": ""
}
	*/
	function putEmailsEmailIdMessagesDraft(emailId, body){
		var apipath = '/api/v2/conversations/emails/{emailId}/messages/draft';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{emailId}', emailId);

        if(emailId === undefined && emailId !== null){
			throw 'Missing required  parameter: emailId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putEmailsEmailIdMessagesDraft = putEmailsEmailIdMessagesDraft;
	/**
     * @summary Delete attachment from draft
	 * @memberOf ConversationsApi#
	* @param {string} emailId - 
	* @param {string} attachmentId - 
	*/
	function deleteEmailsEmailIdMessagesDraftAttachmentsAttachmentId(emailId, attachmentId){
		var apipath = '/api/v2/conversations/emails/{emailId}/messages/draft/attachments/{attachmentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{emailId}', emailId);

        if(emailId === undefined && emailId !== null){
			throw 'Missing required  parameter: emailId';
        }

        apipath = apipath.replace('{attachmentId}', attachmentId);

        if(attachmentId === undefined && attachmentId !== null){
			throw 'Missing required  parameter: attachmentId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteEmailsEmailIdMessagesDraftAttachmentsAttachmentId = deleteEmailsEmailIdMessagesDraftAttachmentsAttachmentId;
	/**
     * @summary Get conversation message
	 * @memberOf ConversationsApi#
	* @param {string} emailId - 
	* @param {string} messageId - 
	*/
	function getEmailsEmailIdMessagesMessageId(emailId, messageId){
		var apipath = '/api/v2/conversations/emails/{emailId}/messages/{messageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{emailId}', emailId);

        if(emailId === undefined && emailId !== null){
			throw 'Missing required  parameter: emailId';
        }

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEmailsEmailIdMessagesMessageId = getEmailsEmailIdMessagesMessageId;
	/**
     * @summary Update conversation participant
	 * @memberOf ConversationsApi#
	* @param {string} emailId - 
	* @param {string} participantId - 
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
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
	function patchEmailsEmailIdParticipantsParticipantId(emailId, participantId, body){
		var apipath = '/api/v2/conversations/emails/{emailId}/participants/{participantId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{emailId}', emailId);

        if(emailId === undefined && emailId !== null){
			throw 'Missing required  parameter: emailId';
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
	self.patchEmailsEmailIdParticipantsParticipantId = patchEmailsEmailIdParticipantsParticipantId;
	/**
     * @summary Update the attributes on a conversation participant.
	 * @memberOf ConversationsApi#
	* @param {string} emailId - 
	* @param {string} participantId - 
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "attributes": {}
}
	*/
	function patchEmailsEmailIdParticipantsParticipantIdAttributes(emailId, participantId, body){
		var apipath = '/api/v2/conversations/emails/{emailId}/participants/{participantId}/attributes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{emailId}', emailId);

        if(emailId === undefined && emailId !== null){
			throw 'Missing required  parameter: emailId';
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
	self.patchEmailsEmailIdParticipantsParticipantIdAttributes = patchEmailsEmailIdParticipantsParticipantIdAttributes;
	/**
     * @summary Replace this participant with the specified user and/or address
	 * @memberOf ConversationsApi#
	* @param {string} emailId - 
	* @param {string} participantId - 
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
	function postEmailsEmailIdParticipantsParticipantIdReplace(emailId, participantId, body){
		var apipath = '/api/v2/conversations/emails/{emailId}/participants/{participantId}/replace';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{emailId}', emailId);

        if(emailId === undefined && emailId !== null){
			throw 'Missing required  parameter: emailId';
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
	self.postEmailsEmailIdParticipantsParticipantIdReplace = postEmailsEmailIdParticipantsParticipantIdReplace;
	/**
     * @summary Get the wrap-up for this conversation participant. 
	 * @memberOf ConversationsApi#
	* @param {string} emailId - 
	* @param {string} participantId - 
	* @param {boolean} provisional - Indicates if the wrap-up code is provisional.
	*/
	function getEmailsEmailIdParticipantsParticipantIdWrapup(emailId, participantId, provisional){
		var apipath = '/api/v2/conversations/emails/{emailId}/participants/{participantId}/wrapup';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{emailId}', emailId);

        if(emailId === undefined && emailId !== null){
			throw 'Missing required  parameter: emailId';
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
	self.getEmailsEmailIdParticipantsParticipantIdWrapup = getEmailsEmailIdParticipantsParticipantIdWrapup;
	/**
     * @summary Get list of wrapup codes for this conversation participant
	 * @memberOf ConversationsApi#
	* @param {string} emailId - 
	* @param {string} participantId - 
	*/
	function getEmailsEmailIdParticipantsParticipantIdWrapupcodes(emailId, participantId){
		var apipath = '/api/v2/conversations/emails/{emailId}/participants/{participantId}/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{emailId}', emailId);

        if(emailId === undefined && emailId !== null){
			throw 'Missing required  parameter: emailId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEmailsEmailIdParticipantsParticipantIdWrapupcodes = getEmailsEmailIdParticipantsParticipantIdWrapupcodes;
	/**
     * @summary Create Fax Conversation
	 * @memberOf ConversationsApi#
	* @param {} body - Fax
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "addresses": [],
   "documentId": "",
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
      "acl": [],
      "description": ""
   },
   "coverSheet": {
      "notes": "",
      "locale": ""
   }
}
	*/
	function postFaxes(body){
		var apipath = '/api/v2/conversations/faxes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postFaxes = postFaxes;
	/**
     * @summary Get conversation
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	*/
	function getConversationId(conversationId){
		var apipath = '/api/v2/conversations/{conversationId}';
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
	self.getConversationId = getConversationId;
	/**
     * @summary Update a participant.
	 * @description Update conversation participant.
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	* @param {} body - Update conversation participant.
	 * @example
	 * Body Example:
	 * {
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
	function patchConversationIdParticipantsParticipantId(conversationId, participantId, body){
		var apipath = '/api/v2/conversations/{conversationId}/participants/{participantId}';
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
	self.patchConversationIdParticipantsParticipantId = patchConversationIdParticipantsParticipantId;
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
	function patchConversationIdParticipantsParticipantIdAttributes(conversationId, participantId, body){
		var apipath = '/api/v2/conversations/{conversationId}/participants/{participantId}/attributes';
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
	self.patchConversationIdParticipantsParticipantIdAttributes = patchConversationIdParticipantsParticipantIdAttributes;
	/**
     * @summary Create a new callback for the specified participant on the conversation.
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "scriptId": "",
   "queueId": "",
   "routingData": {
      "queueId": "",
      "languageId": "",
      "priority": 0,
      "skillIds": [],
      "preferredAgentIds": []
   },
   "callbackUserName": "",
   "callbackNumbers": [],
   "callbackScheduledTime": "",
   "countryCode": "",
   "skipEnabled": true,
   "additionalInfo": {}
}
	*/
	function postConversationIdParticipantsParticipantIdCallbacks(conversationId, participantId, body){
		var apipath = '/api/v2/conversations/{conversationId}/participants/{participantId}/callbacks';
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
	self.postConversationIdParticipantsParticipantIdCallbacks = postConversationIdParticipantsParticipantIdCallbacks;
	/**
     * @summary Delete a code used to add a communication to this participant
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	* @param {string} addCommunicationCode - addCommunicationCode
	*/
	function deleteConversationIdParticipantsParticipantIdCodesAddcommunicationcode(conversationId, participantId, addCommunicationCode){
		var apipath = '/api/v2/conversations/{conversationId}/participants/{participantId}/codes/{addCommunicationCode}';
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

        apipath = apipath.replace('{addCommunicationCode}', addCommunicationCode);

        if(addCommunicationCode === undefined && addCommunicationCode !== null){
			throw 'Missing required  parameter: addCommunicationCode';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteConversationIdParticipantsParticipantIdCodesAddcommunicationcode = deleteConversationIdParticipantsParticipantIdCodesAddcommunicationcode;
	/**
     * @summary Replace this participant with the specified user and/or address
	 * @memberOf ConversationsApi#
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
	function postConversationIdParticipantsParticipantIdReplace(conversationId, participantId, body){
		var apipath = '/api/v2/conversations/{conversationId}/participants/{participantId}/replace';
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
	self.postConversationIdParticipantsParticipantIdReplace = postConversationIdParticipantsParticipantIdReplace;
	/**
     * @summary Get the wrap-up for this conversation participant. 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	* @param {boolean} provisional - Indicates if the wrap-up code is provisional.
	*/
	function getConversationIdParticipantsParticipantIdWrapup(conversationId, participantId, provisional){
		var apipath = '/api/v2/conversations/{conversationId}/participants/{participantId}/wrapup';
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
	self.getConversationIdParticipantsParticipantIdWrapup = getConversationIdParticipantsParticipantIdWrapup;
	/**
     * @summary Get list of wrapup codes for this conversation participant
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	*/
	function getConversationIdParticipantsParticipantIdWrapupcodes(conversationId, participantId){
		var apipath = '/api/v2/conversations/{conversationId}/participants/{participantId}/wrapupcodes';
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
	self.getConversationIdParticipantsParticipantIdWrapupcodes = getConversationIdParticipantsParticipantIdWrapupcodes;

    return self;
};
