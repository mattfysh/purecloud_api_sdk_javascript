/**
* @class
* @example
* var api = new OutboundApi(pureCloudSession);
*/
var OutboundApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Retrieves audits for dialer.
	 * @memberOf OutboundApi#
	* @param {} body - AuditSearch
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	* @param {boolean} facetsOnly - Facets only
	 * @example
	 * Body Example:
	 * {
   "queryPhrase": "",
   "queryFields": [],
   "facets": [],
   "filters": []
}
	*/
	function postAudits(body, pageSize, pageNumber, sortBy, sortOrder, facetsOnly){
		var apipath = '/api/v1/outbound/audits';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		if(facetsOnly !== undefined && facetsOnly !== null){
			queryParameters.facetsOnly = facetsOnly;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postAudits = postAudits;
	/**
     * @summary Query callable time set list
	 * @memberOf OutboundApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} filterType - Filter type
	EQUALS,
	REGEX,
	CONTAINS,
	PREFIX,
	LESSTHAN,
	LESSTHANEQUALTO,
	GREATERTHAN,
	GREATERTHANEQUALTO,
	BEGINSWITH,
	ENDSWITH,
	* @param {string} name - Name
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	ascending,
	descending,
	*/
	function getCallabletimesets(pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var apipath = '/api/v1/outbound/callabletimesets';
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


		if(filterType !== undefined && filterType !== null){
			queryParameters.filterType = filterType;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallabletimesets = getCallabletimesets;
	/**
     * @summary Create callable time set
	 * @memberOf OutboundApi#
	* @param {} body - DialerCallableTimeSet
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "callableTimes": []
}
	*/
	function postCallabletimesets(body){
		var apipath = '/api/v1/outbound/callabletimesets';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postCallabletimesets = postCallabletimesets;
	/**
     * @summary Get callable time set
	 * @memberOf OutboundApi#
	* @param {string} callableTimeSetId - Callable Time Set ID
	*/
	function getCallabletimeset(callableTimeSetId){
		var apipath = '/api/v1/outbound/callabletimesets/{callableTimeSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callableTimeSetId}', callableTimeSetId);

        if(callableTimeSetId === undefined && callableTimeSetId !== null){
			throw 'Missing required  parameter: callableTimeSetId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallabletimeset = getCallabletimeset;
	/**
     * @summary Update callable time set
	 * @memberOf OutboundApi#
	* @param {string} callableTimeSetId - Callable Time Set ID
	* @param {} body - DialerCallableTimeSet
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "callableTimes": []
}
	*/
	function putCallabletimeset(callableTimeSetId, body){
		var apipath = '/api/v1/outbound/callabletimesets/{callableTimeSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callableTimeSetId}', callableTimeSetId);

        if(callableTimeSetId === undefined && callableTimeSetId !== null){
			throw 'Missing required  parameter: callableTimeSetId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putCallabletimeset = putCallabletimeset;
	/**
     * @summary Delete callable time set
	 * @memberOf OutboundApi#
	* @param {string} callableTimeSetId - Callable Time Set ID
	*/
	function deleteCallabletimeset(callableTimeSetId){
		var apipath = '/api/v1/outbound/callabletimesets/{callableTimeSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callableTimeSetId}', callableTimeSetId);

        if(callableTimeSetId === undefined && callableTimeSetId !== null){
			throw 'Missing required  parameter: callableTimeSetId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteCallabletimeset = deleteCallabletimeset;
	/**
     * @summary Query a list of dialer call analysis response sets.
	 * @memberOf OutboundApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} filterType - Filter type
	EQUALS,
	REGEX,
	CONTAINS,
	PREFIX,
	LESSTHAN,
	LESSTHANEQUALTO,
	GREATERTHAN,
	GREATERTHANEQUALTO,
	BEGINSWITH,
	ENDSWITH,
	* @param {string} name - Name
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	ascending,
	descending,
	*/
	function getCallanalysisresponsesets(pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var apipath = '/api/v1/outbound/callanalysisresponsesets';
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


		if(filterType !== undefined && filterType !== null){
			queryParameters.filterType = filterType;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallanalysisresponsesets = getCallanalysisresponsesets;
	/**
     * @summary Create a dialer call analysis response set.
	 * @memberOf OutboundApi#
	* @param {} body - ResponseSet
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "responses": {}
}
	*/
	function postCallanalysisresponsesets(body){
		var apipath = '/api/v1/outbound/callanalysisresponsesets';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postCallanalysisresponsesets = postCallanalysisresponsesets;
	/**
     * @summary Get a dialer call analysis response set.
	 * @memberOf OutboundApi#
	* @param {string} callAnalysisSetId - Call Analysis Response Set ID
	*/
	function getCallanalysisresponseset(callAnalysisSetId){
		var apipath = '/api/v1/outbound/callanalysisresponsesets/{callAnalysisSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callAnalysisSetId}', callAnalysisSetId);

        if(callAnalysisSetId === undefined && callAnalysisSetId !== null){
			throw 'Missing required  parameter: callAnalysisSetId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallanalysisresponseset = getCallanalysisresponseset;
	/**
     * @summary Update a dialer call analysis response set.
	 * @memberOf OutboundApi#
	* @param {string} callAnalysisSetId - Call Analysis Response Set ID
	* @param {} body - ResponseSet
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "responses": {}
}
	*/
	function putCallanalysisresponseset(callAnalysisSetId, body){
		var apipath = '/api/v1/outbound/callanalysisresponsesets/{callAnalysisSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callAnalysisSetId}', callAnalysisSetId);

        if(callAnalysisSetId === undefined && callAnalysisSetId !== null){
			throw 'Missing required  parameter: callAnalysisSetId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putCallanalysisresponseset = putCallanalysisresponseset;
	/**
     * @summary Delete a dialer call analysis response set.
	 * @memberOf OutboundApi#
	* @param {string} callAnalysisSetId - Call Analysis Response Set ID
	*/
	function deleteCallanalysisresponseset(callAnalysisSetId){
		var apipath = '/api/v1/outbound/callanalysisresponsesets/{callAnalysisSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callAnalysisSetId}', callAnalysisSetId);

        if(callAnalysisSetId === undefined && callAnalysisSetId !== null){
			throw 'Missing required  parameter: callAnalysisSetId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteCallanalysisresponseset = deleteCallanalysisresponseset;
	/**
     * @summary Query a list of dialer campaigns.
	 * @memberOf OutboundApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} filterType - Filter type
	EQUALS,
	REGEX,
	CONTAINS,
	PREFIX,
	LESSTHAN,
	LESSTHANEQUALTO,
	GREATERTHAN,
	GREATERTHANEQUALTO,
	BEGINSWITH,
	ENDSWITH,
	* @param {string} name - Name
	* @param {string} contactListId - Contact List ID
	* @param {string} dncListId - DNC list ID
	* @param {string} distributionQueueId - Distribution queue ID
	* @param {string} edgeGroupId - Edge group ID
	* @param {string} callAnalysisResponseSetId - Call analysis response set ID
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	ascending,
	descending,
	*/
	function getCampaigns(pageSize, pageNumber, filterType, name, contactListId, dncListId, distributionQueueId, edgeGroupId, callAnalysisResponseSetId, sortBy, sortOrder){
		var apipath = '/api/v1/outbound/campaigns';
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


		if(filterType !== undefined && filterType !== null){
			queryParameters.filterType = filterType;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(contactListId !== undefined && contactListId !== null){
			queryParameters.contactListId = contactListId;
		}


		if(dncListId !== undefined && dncListId !== null){
			queryParameters.dncListId = dncListId;
		}


		if(distributionQueueId !== undefined && distributionQueueId !== null){
			queryParameters.distributionQueueId = distributionQueueId;
		}


		if(edgeGroupId !== undefined && edgeGroupId !== null){
			queryParameters.edgeGroupId = edgeGroupId;
		}


		if(callAnalysisResponseSetId !== undefined && callAnalysisResponseSetId !== null){
			queryParameters.callAnalysisResponseSetId = callAnalysisResponseSetId;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCampaigns = getCampaigns;
	/**
     * @summary Create a campaign.
	 * @memberOf OutboundApi#
	* @param {} body - Campaign
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "contactList": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "queue": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dialingMode": "",
   "script": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "edgeGroup": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "campaignStatus": "",
   "phoneColumns": [],
   "abandonRate": {},
   "dncLists": [],
   "callableTimeSet": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "callAnalysisResponseSet": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "errors": [],
   "callerName": "",
   "callerAddress": "",
   "outboundLineCount": 0,
   "ruleSets": [],
   "skipPreviewDisabled": true,
   "previewTimeOutSeconds": 0,
   "singleNumberPreview": true
}
	*/
	function postCampaigns(body){
		var apipath = '/api/v1/outbound/campaigns';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postCampaigns = postCampaigns;
	/**
     * @summary Get dialer campaign.
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function getCampaign(campaignId){
		var apipath = '/api/v1/outbound/campaigns/{campaignId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCampaign = getCampaign;
	/**
     * @summary Update a campaign.
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	* @param {} body - Campaign
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "contactList": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "queue": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dialingMode": "",
   "script": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "edgeGroup": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "campaignStatus": "",
   "phoneColumns": [],
   "abandonRate": {},
   "dncLists": [],
   "callableTimeSet": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "callAnalysisResponseSet": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "errors": [],
   "callerName": "",
   "callerAddress": "",
   "outboundLineCount": 0,
   "ruleSets": [],
   "skipPreviewDisabled": true,
   "previewTimeOutSeconds": 0,
   "singleNumberPreview": true
}
	*/
	function putCampaign(campaignId, body){
		var apipath = '/api/v1/outbound/campaigns/{campaignId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putCampaign = putCampaign;
	/**
     * @summary Delete a campaign.
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function deleteCampaign(campaignId){
		var apipath = '/api/v1/outbound/campaigns/{campaignId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteCampaign = deleteCampaign;
	/**
     * @summary Send notification that an agent's state changed 
	 * @description New agent state.
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	* @param {string} userId - Agent's user ID
	* @param {} body - agent
	 * @example
	 * Body Example:
	 * {
   "stage": ""
}
	*/
	function putCampaignAgent(campaignId, userId, body){
		var apipath = '/api/v1/outbound/campaigns/{campaignId}/agents/{userId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putCampaignAgent = putCampaignAgent;
	/**
     * @summary Schedule a Callback for a Dialer Campaign
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	* @param {} body - ContactCallbackRequest
	 * @example
	 * Body Example:
	 * {
   "campaignId": "",
   "contactListId": "",
   "contactId": "",
   "phoneColumn": "",
   "schedule": ""
}
	*/
	function postCampaignCallbackSchedule(campaignId, body){
		var apipath = '/api/v1/outbound/campaigns/{campaignId}/callback/schedule';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postCampaignCallbackSchedule = postCampaignCallbackSchedule;
	/**
     * @summary Get campaign diagnostics
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function getCampaignDiagnostics(campaignId){
		var apipath = '/api/v1/outbound/campaigns/{campaignId}/diagnostics';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCampaignDiagnostics = getCampaignDiagnostics;
	/**
     * @summary Get statistics about a Dialer Campaign
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function getCampaignStats(campaignId){
		var apipath = '/api/v1/outbound/campaigns/{campaignId}/stats';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCampaignStats = getCampaignStats;
	/**
     * @summary Query a list of contact lists.
	 * @memberOf OutboundApi#
	* @param {boolean} includeImportStatus - Include import status
	* @param {boolean} importStatus - Import status
	* @param {boolean} includeSize - Include size
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} filterType - Filter type
	EQUALS,
	REGEX,
	CONTAINS,
	PREFIX,
	LESSTHAN,
	LESSTHANEQUALTO,
	GREATERTHAN,
	GREATERTHANEQUALTO,
	BEGINSWITH,
	ENDSWITH,
	* @param {string} name - Name
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	ascending,
	descending,
	*/
	function getContactlists(includeImportStatus, importStatus, includeSize, pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var apipath = '/api/v1/outbound/contactlists';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(includeImportStatus !== undefined && includeImportStatus !== null){
			queryParameters.includeImportStatus = includeImportStatus;
		}


		if(importStatus !== undefined && importStatus !== null){
			queryParameters.importStatus = importStatus;
		}


		if(includeSize !== undefined && includeSize !== null){
			queryParameters.includeSize = includeSize;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(filterType !== undefined && filterType !== null){
			queryParameters.filterType = filterType;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContactlists = getContactlists;
	/**
     * @summary Create a contact List.
	 * @memberOf OutboundApi#
	* @param {} body - ContactList
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "columnNames": [],
   "phoneColumns": [],
   "importStatus": {
      "state": "",
      "totalRecords": 0,
      "completedRecords": 0,
      "percentComplete": 0,
      "failureReason": ""
   },
   "previewModeColumnName": "",
   "previewModeAcceptedValues": [],
   "size": 0
}
	*/
	function postContactlists(body){
		var apipath = '/api/v1/outbound/contactlists';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postContactlists = postContactlists;
	/**
     * @summary Get penetration rates for a list of penetration rate identifiers (contact list id and qualifier id)
	 * @memberOf OutboundApi#
	* @param {} body - PenetrationRateIdentifierList
	*/
	function postContactlistsPenetrationrates(body){
		var apipath = '/api/v1/outbound/contactlists/penetrationrates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postContactlistsPenetrationrates = postContactlistsPenetrationrates;
	/**
     * @summary Get dialer contactList.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	* @param {boolean} includeImportStatus - Import status
	* @param {boolean} importStatus - Import status
	* @param {boolean} includeSize - Include size
	*/
	function getContactlist(contactListId, includeImportStatus, importStatus, includeSize){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }


		if(includeImportStatus !== undefined && includeImportStatus !== null){
			queryParameters.includeImportStatus = includeImportStatus;
		}


		if(importStatus !== undefined && importStatus !== null){
			queryParameters.importStatus = importStatus;
		}


		if(includeSize !== undefined && includeSize !== null){
			queryParameters.includeSize = includeSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContactlist = getContactlist;
	/**
     * @summary Update a contact list.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	* @param {} body - ContactList
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "columnNames": [],
   "phoneColumns": [],
   "importStatus": {
      "state": "",
      "totalRecords": 0,
      "completedRecords": 0,
      "percentComplete": 0,
      "failureReason": ""
   },
   "previewModeColumnName": "",
   "previewModeAcceptedValues": [],
   "size": 0
}
	*/
	function putContactlist(contactListId, body){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putContactlist = putContactlist;
	/**
     * @summary Delete a contact list.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	*/
	function deleteContactlist(contactListId){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteContactlist = deleteContactlist;
	/**
     * @summary Add contacts to a contact list.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - Contact List ID
	* @param {} body - Contact
	* @param {boolean} priority - 
	*/
	function postContactlistContacts(contactListId, body, priority){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}/contacts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(priority !== undefined && priority !== null){
			queryParameters.priority = priority;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postContactlistContacts = postContactlistContacts;
	/**
     * @summary Get dialer contactList.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - Contact List ID
	* @param {string} contactId - Contact ID
	*/
	function getContactlistContact(contactListId, contactId){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}/contacts/{contactId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContactlistContact = getContactlistContact;
	/**
     * @summary Update a contact.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - Contact List ID
	* @param {string} contactId - Contact ID
	* @param {} body - Contact
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "contactListId": "",
   "data": {},
   "callRecords": {},
   "callable": true,
   "phoneNumberStatus": {}
}
	*/
	function putContactlistContact(contactListId, contactId, body){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}/contacts/{contactId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putContactlistContact = putContactlistContact;
	/**
     * @summary Delete a contact.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - Contact List ID
	* @param {string} contactId - Contact ID
	*/
	function deleteContactlistContact(contactListId, contactId){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}/contacts/{contactId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteContactlistContact = deleteContactlistContact;
	/**
     * @summary Initiate the export of a contact list.
	 * @description Returns 200 if received OK.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	*/
	function postContactlistExport(contactListId){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}/export';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postContactlistExport = postContactlistExport;
	/**
     * @summary Get dialer contactList import status.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	*/
	function getContactlistImportstatus(contactListId){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}/importstatus';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContactlistImportstatus = getContactlistImportstatus;
	/**
     * @summary Get Dialer campaign's penetration rate
	 * @description Get dialer campaign's penetration rate.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	* @param {string} campaignId - Campaign ID
	*/
	function getContactlistPenetrationrate(contactListId, campaignId){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}/{campaignId}/penetrationrate';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContactlistPenetrationrate = getContactlistPenetrationrate;
	/**
     * @summary Add phone numbers to a Dialer DNC list.
	 * @memberOf OutboundApi#
	* @param {string} conversationId - Conversation ID
	*/
	function postConversationDnc(conversationId){
		var apipath = '/api/v1/outbound/conversations/{conversationId}/dnc';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postConversationDnc = postConversationDnc;
	/**
     * @summary Query dialer DNC lists
	 * @memberOf OutboundApi#
	* @param {boolean} includeImportStatus - Import status
	* @param {boolean} importStatus - Import status
	* @param {boolean} includeSize - Include size
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} filterType - Filter type
	EQUALS,
	REGEX,
	CONTAINS,
	PREFIX,
	LESSTHAN,
	LESSTHANEQUALTO,
	GREATERTHAN,
	GREATERTHANEQUALTO,
	BEGINSWITH,
	ENDSWITH,
	* @param {string} name - Name
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	ascending,
	descending,
	*/
	function getDnclists(includeImportStatus, importStatus, includeSize, pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var apipath = '/api/v1/outbound/dnclists';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(includeImportStatus !== undefined && includeImportStatus !== null){
			queryParameters.includeImportStatus = includeImportStatus;
		}


		if(importStatus !== undefined && importStatus !== null){
			queryParameters.importStatus = importStatus;
		}


		if(includeSize !== undefined && includeSize !== null){
			queryParameters.includeSize = includeSize;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(filterType !== undefined && filterType !== null){
			queryParameters.filterType = filterType;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDnclists = getDnclists;
	/**
     * @summary Create dialer DNC list
	 * @memberOf OutboundApi#
	* @param {} body - DncList
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "phoneNumberColumns": [],
   "importStatus": {
      "state": "",
      "totalRecords": 0,
      "completedRecords": 0,
      "percentComplete": 0,
      "failureReason": ""
   },
   "fileKey": "",
   "size": 0
}
	*/
	function postDnclists(body){
		var apipath = '/api/v1/outbound/dnclists';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postDnclists = postDnclists;
	/**
     * @summary Get dialer DNC list
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	* @param {boolean} includeImportStatus - Import status
	* @param {boolean} importStatus - Import status
	* @param {boolean} includeSize - Include size
	*/
	function getDnclist(dncListId, includeImportStatus, importStatus, includeSize){
		var apipath = '/api/v1/outbound/dnclists/{dncListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }


		if(includeImportStatus !== undefined && includeImportStatus !== null){
			queryParameters.includeImportStatus = includeImportStatus;
		}


		if(importStatus !== undefined && importStatus !== null){
			queryParameters.importStatus = importStatus;
		}


		if(includeSize !== undefined && includeSize !== null){
			queryParameters.includeSize = includeSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDnclist = getDnclist;
	/**
     * @summary Update dialer DNC list
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	* @param {} body - DncList
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "phoneNumberColumns": [],
   "importStatus": {
      "state": "",
      "totalRecords": 0,
      "completedRecords": 0,
      "percentComplete": 0,
      "failureReason": ""
   },
   "fileKey": "",
   "size": 0
}
	*/
	function putDnclist(dncListId, body){
		var apipath = '/api/v1/outbound/dnclists/{dncListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putDnclist = putDnclist;
	/**
     * @summary Delete dialer DNC list
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	*/
	function deleteDnclist(dncListId){
		var apipath = '/api/v1/outbound/dnclists/{dncListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteDnclist = deleteDnclist;
	/**
     * @summary Initiate the export of a dnc list.
	 * @description Returns 200 if received OK.
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	*/
	function postDnclistExport(dncListId){
		var apipath = '/api/v1/outbound/dnclists/{dncListId}/export';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postDnclistExport = postDnclistExport;
	/**
     * @summary Get dialer dncList import status.
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	*/
	function getDnclistImportstatus(dncListId){
		var apipath = '/api/v1/outbound/dnclists/{dncListId}/importstatus';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDnclistImportstatus = getDnclistImportstatus;
	/**
     * @summary Add phone numbers to a Dialer DNC list.
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	* @param {} body - DNC Phone Numbers
	*/
	function postDnclistPhonenumbers(dncListId, body){
		var apipath = '/api/v1/outbound/dnclists/{dncListId}/phonenumbers';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postDnclistPhonenumbers = postDnclistPhonenumbers;
	/**
     * @summary Get dialer preview for user
	 * @memberOf OutboundApi#
	*/
	function getPreviews(){
		var apipath = '/api/v1/outbound/previews';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPreviews = getPreviews;
	/**
     * @summary Get dialer preview
	 * @memberOf OutboundApi#
	* @param {string} previewId - preview ID
	*/
	function getPreview(previewId){
		var apipath = '/api/v1/outbound/previews/{previewId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{previewId}', previewId);

        if(previewId === undefined && previewId !== null){
			throw 'Missing required  parameter: previewId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPreview = getPreview;
	/**
     * @summary Disposition preview call
	 * @memberOf OutboundApi#
	* @param {string} previewId - preview ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "callId": "",
   "wrapupCodeId": "",
   "contact": {
      "name": "",
      "contactListId": "",
      "data": {},
      "callRecords": {},
      "callable": true,
      "phoneNumberStatus": {}
   }
}
	*/
	function postPreviewDispositioncall(previewId, body){
		var apipath = '/api/v1/outbound/previews/{previewId}/dispositioncall';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{previewId}', previewId);

        if(previewId === undefined && previewId !== null){
			throw 'Missing required  parameter: previewId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postPreviewDispositioncall = postPreviewDispositioncall;
	/**
     * @summary place preview call
	 * @memberOf OutboundApi#
	* @param {string} previewId - preview ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "callId": "",
   "phoneNumber": ""
}
	*/
	function postPreviewPlacecall(previewId, body){
		var apipath = '/api/v1/outbound/previews/{previewId}/placecall';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{previewId}', previewId);

        if(previewId === undefined && previewId !== null){
			throw 'Missing required  parameter: previewId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postPreviewPlacecall = postPreviewPlacecall;
	/**
     * @summary Query a list of Rule Sets.
	 * @memberOf OutboundApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} filterType - Filter type
	EQUALS,
	REGEX,
	CONTAINS,
	PREFIX,
	LESSTHAN,
	LESSTHANEQUALTO,
	GREATERTHAN,
	GREATERTHANEQUALTO,
	BEGINSWITH,
	ENDSWITH,
	* @param {string} name - Name
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	ascending,
	descending,
	*/
	function getRulesets(pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var apipath = '/api/v1/outbound/rulesets';
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


		if(filterType !== undefined && filterType !== null){
			queryParameters.filterType = filterType;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRulesets = getRulesets;
	/**
     * @summary Create a Dialer Call Analysis Response Set.
	 * @memberOf OutboundApi#
	* @param {} body - RuleSet
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "contactList": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "queue": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "rules": []
}
	*/
	function postRulesets(body){
		var apipath = '/api/v1/outbound/rulesets';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postRulesets = postRulesets;
	/**
     * @summary Get a Rule Set by ID.
	 * @memberOf OutboundApi#
	* @param {string} ruleSetId - Rule Set ID
	*/
	function getRuleset(ruleSetId){
		var apipath = '/api/v1/outbound/rulesets/{ruleSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{ruleSetId}', ruleSetId);

        if(ruleSetId === undefined && ruleSetId !== null){
			throw 'Missing required  parameter: ruleSetId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRuleset = getRuleset;
	/**
     * @summary Update a RuleSet.
	 * @memberOf OutboundApi#
	* @param {string} ruleSetId - Rule Set ID
	* @param {} body - RuleSet
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "contactList": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "queue": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "rules": []
}
	*/
	function putRuleset(ruleSetId, body){
		var apipath = '/api/v1/outbound/rulesets/{ruleSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{ruleSetId}', ruleSetId);

        if(ruleSetId === undefined && ruleSetId !== null){
			throw 'Missing required  parameter: ruleSetId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putRuleset = putRuleset;
	/**
     * @summary Delete a Rule set.
	 * @memberOf OutboundApi#
	* @param {string} ruleSetId - Rule Set ID
	*/
	function deleteRuleset(ruleSetId){
		var apipath = '/api/v1/outbound/rulesets/{ruleSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{ruleSetId}', ruleSetId);

        if(ruleSetId === undefined && ruleSetId !== null){
			throw 'Missing required  parameter: ruleSetId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteRuleset = deleteRuleset;
	/**
     * @summary Query for a list of dialer campaign schedules.
	 * @memberOf OutboundApi#
	*/
	function getSchedulesCampaigns(){
		var apipath = '/api/v1/outbound/schedules/campaigns';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchedulesCampaigns = getSchedulesCampaigns;
	/**
     * @summary Get a dialer campaign schedule.
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function getSchedulesCampaign(campaignId){
		var apipath = '/api/v1/outbound/schedules/campaigns/{campaignId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchedulesCampaign = getSchedulesCampaign;
	/**
     * @summary Update a new campaign schedule.
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	* @param {} body - CampaignSchedule
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "intervals": [],
   "timeZone": "",
   "campaign": {
      "id": "",
      "name": "",
      "selfUri": ""
   }
}
	*/
	function putSchedulesCampaign(campaignId, body){
		var apipath = '/api/v1/outbound/schedules/campaigns/{campaignId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putSchedulesCampaign = putSchedulesCampaign;
	/**
     * @summary Delete a dialer campaign schedule.
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function deleteSchedulesCampaign(campaignId){
		var apipath = '/api/v1/outbound/schedules/campaigns/{campaignId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteSchedulesCampaign = deleteSchedulesCampaign;
	/**
     * @summary Query for a list of dialer sequence schedules.
	 * @memberOf OutboundApi#
	*/
	function getSchedulesSequences(){
		var apipath = '/api/v1/outbound/schedules/sequences';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchedulesSequences = getSchedulesSequences;
	/**
     * @summary Get a dialer sequence schedule.
	 * @memberOf OutboundApi#
	* @param {string} sequenceId - Sequence ID
	*/
	function getSchedulesSequence(sequenceId){
		var apipath = '/api/v1/outbound/schedules/sequences/{sequenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sequenceId}', sequenceId);

        if(sequenceId === undefined && sequenceId !== null){
			throw 'Missing required  parameter: sequenceId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchedulesSequence = getSchedulesSequence;
	/**
     * @summary Update a new sequence schedule.
	 * @memberOf OutboundApi#
	* @param {string} sequenceId - Sequence ID
	* @param {} body - SequenceSchedule
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "intervals": [],
   "timeZone": "",
   "sequence": {
      "id": "",
      "name": "",
      "selfUri": ""
   }
}
	*/
	function putSchedulesSequence(sequenceId, body){
		var apipath = '/api/v1/outbound/schedules/sequences/{sequenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sequenceId}', sequenceId);

        if(sequenceId === undefined && sequenceId !== null){
			throw 'Missing required  parameter: sequenceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putSchedulesSequence = putSchedulesSequence;
	/**
     * @summary Delete a dialer sequence schedule.
	 * @memberOf OutboundApi#
	* @param {string} sequenceId - Sequence ID
	*/
	function deleteSchedulesSequence(sequenceId){
		var apipath = '/api/v1/outbound/schedules/sequences/{sequenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sequenceId}', sequenceId);

        if(sequenceId === undefined && sequenceId !== null){
			throw 'Missing required  parameter: sequenceId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteSchedulesSequence = deleteSchedulesSequence;
	/**
     * @summary Query a list of dialer campaign sequences.
	 * @memberOf OutboundApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} filterType - Filter type
	EQUALS,
	REGEX,
	CONTAINS,
	PREFIX,
	LESSTHAN,
	LESSTHANEQUALTO,
	GREATERTHAN,
	GREATERTHANEQUALTO,
	BEGINSWITH,
	ENDSWITH,
	* @param {string} name - Name
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	ascending,
	descending,
	*/
	function getSequences(pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var apipath = '/api/v1/outbound/sequences';
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


		if(filterType !== undefined && filterType !== null){
			queryParameters.filterType = filterType;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSequences = getSequences;
	/**
     * @summary Create a new campaign sequence.
	 * @memberOf OutboundApi#
	* @param {} body - Organization
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "campaigns": [],
   "currentCampaign": 0,
   "status": "",
   "stopMessage": "",
   "repeat": true
}
	*/
	function postSequences(body){
		var apipath = '/api/v1/outbound/sequences';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postSequences = postSequences;
	/**
     * @summary Get a dialer campaign sequence.
	 * @memberOf OutboundApi#
	* @param {string} sequenceId - Campaign Sequence ID
	*/
	function getSequence(sequenceId){
		var apipath = '/api/v1/outbound/sequences/{sequenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sequenceId}', sequenceId);

        if(sequenceId === undefined && sequenceId !== null){
			throw 'Missing required  parameter: sequenceId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSequence = getSequence;
	/**
     * @summary Update a new campaign sequence.
	 * @memberOf OutboundApi#
	* @param {string} sequenceId - Campaign Sequence ID
	* @param {} body - Organization
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "campaigns": [],
   "currentCampaign": 0,
   "status": "",
   "stopMessage": "",
   "repeat": true
}
	*/
	function putSequence(sequenceId, body){
		var apipath = '/api/v1/outbound/sequences/{sequenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sequenceId}', sequenceId);

        if(sequenceId === undefined && sequenceId !== null){
			throw 'Missing required  parameter: sequenceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putSequence = putSequence;
	/**
     * @summary Delete a dialer campaign sequence.
	 * @memberOf OutboundApi#
	* @param {string} sequenceId - Campaign Sequence ID
	*/
	function deleteSequence(sequenceId){
		var apipath = '/api/v1/outbound/sequences/{sequenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sequenceId}', sequenceId);

        if(sequenceId === undefined && sequenceId !== null){
			throw 'Missing required  parameter: sequenceId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteSequence = deleteSequence;
	/**
     * @summary Get the Dialer wrap up code mapping.
	 * @memberOf OutboundApi#
	*/
	function getWrapupcodemappings(){
		var apipath = '/api/v1/outbound/wrapupcodemappings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWrapupcodemappings = getWrapupcodemappings;
	/**
     * @summary Update the Dialer wrap up code mapping.
	 * @memberOf OutboundApi#
	* @param {} body - wrapUpCodeMapping
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "defaultSet": [],
   "mapping": {}
}
	*/
	function putWrapupcodemappings(body){
		var apipath = '/api/v1/outbound/wrapupcodemappings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putWrapupcodemappings = putWrapupcodemappings;

    return self;
};
