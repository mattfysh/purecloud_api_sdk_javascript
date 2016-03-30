//API VERSION - 
/**
* @class
* @example
* var api = new OutboundApi(pureCloudSession);
*/
var OutboundApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

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
		var apipath = '/api/v2/outbound/audits';
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
		var apipath = '/api/v2/outbound/callabletimesets';
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
		var apipath = '/api/v2/outbound/callabletimesets';
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
	function getCallabletimesetsCallabletimesetId(callableTimeSetId){
		var apipath = '/api/v2/outbound/callabletimesets/{callableTimeSetId}';
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
	self.getCallabletimesetsCallabletimesetId = getCallabletimesetsCallabletimesetId;
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
	function putCallabletimesetsCallabletimesetId(callableTimeSetId, body){
		var apipath = '/api/v2/outbound/callabletimesets/{callableTimeSetId}';
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
	self.putCallabletimesetsCallabletimesetId = putCallabletimesetsCallabletimesetId;
	/**
     * @summary Delete callable time set
	 * @memberOf OutboundApi#
	* @param {string} callableTimeSetId - Callable Time Set ID
	*/
	function deleteCallabletimesetsCallabletimesetId(callableTimeSetId){
		var apipath = '/api/v2/outbound/callabletimesets/{callableTimeSetId}';
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
	self.deleteCallabletimesetsCallabletimesetId = deleteCallabletimesetsCallabletimesetId;
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
		var apipath = '/api/v2/outbound/callanalysisresponsesets';
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
		var apipath = '/api/v2/outbound/callanalysisresponsesets';
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
	function getCallanalysisresponsesetsCallanalysissetId(callAnalysisSetId){
		var apipath = '/api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}';
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
	self.getCallanalysisresponsesetsCallanalysissetId = getCallanalysisresponsesetsCallanalysissetId;
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
	function putCallanalysisresponsesetsCallanalysissetId(callAnalysisSetId, body){
		var apipath = '/api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}';
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
	self.putCallanalysisresponsesetsCallanalysissetId = putCallanalysisresponsesetsCallanalysissetId;
	/**
     * @summary Delete a dialer call analysis response set.
	 * @memberOf OutboundApi#
	* @param {string} callAnalysisSetId - Call Analysis Response Set ID
	*/
	function deleteCallanalysisresponsesetsCallanalysissetId(callAnalysisSetId){
		var apipath = '/api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}';
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
	self.deleteCallanalysisresponsesetsCallanalysissetId = deleteCallanalysisresponsesetsCallanalysissetId;
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
		var apipath = '/api/v2/outbound/campaigns';
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
   "id": "",
   "name": "",
   "selfUri": "",
   "phoneNumberColumns": [],
   "skipPreviewDisabled": true,
   "previewTimeOutSeconds": 0
}
	*/
	function postCampaigns(body){
		var apipath = '/api/v2/outbound/campaigns';
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
     * @summary Get progress for a list of campaigns
	 * @memberOf OutboundApi#
	* @param {} body - Campaign IDs
	*/
	function postCampaignsProgress(body){
		var apipath = '/api/v2/outbound/campaigns/progress';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postCampaignsProgress = postCampaignsProgress;
	/**
     * @summary Get dialer campaign.
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function getCampaignsCampaignId(campaignId){
		var apipath = '/api/v2/outbound/campaigns/{campaignId}';
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
	self.getCampaignsCampaignId = getCampaignsCampaignId;
	/**
     * @summary Update a campaign.
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	* @param {} body - Campaign
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "selfUri": "",
   "phoneNumberColumns": [],
   "skipPreviewDisabled": true,
   "previewTimeOutSeconds": 0
}
	*/
	function putCampaignsCampaignId(campaignId, body){
		var apipath = '/api/v2/outbound/campaigns/{campaignId}';
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
	self.putCampaignsCampaignId = putCampaignsCampaignId;
	/**
     * @summary Delete a campaign.
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function deleteCampaignsCampaignId(campaignId){
		var apipath = '/api/v2/outbound/campaigns/{campaignId}';
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
	self.deleteCampaignsCampaignId = deleteCampaignsCampaignId;
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
	function putCampaignsCampaignIdAgentsUserId(campaignId, userId, body){
		var apipath = '/api/v2/outbound/campaigns/{campaignId}/agents/{userId}';
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
	self.putCampaignsCampaignIdAgentsUserId = putCampaignsCampaignIdAgentsUserId;
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
	function postCampaignsCampaignIdCallbackSchedule(campaignId, body){
		var apipath = '/api/v2/outbound/campaigns/{campaignId}/callback/schedule';
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
	self.postCampaignsCampaignIdCallbackSchedule = postCampaignsCampaignIdCallbackSchedule;
	/**
     * @summary Get campaign diagnostics
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function getCampaignsCampaignIdDiagnostics(campaignId){
		var apipath = '/api/v2/outbound/campaigns/{campaignId}/diagnostics';
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
	self.getCampaignsCampaignIdDiagnostics = getCampaignsCampaignIdDiagnostics;
	/**
     * @summary Get campaign progress
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function getCampaignsCampaignIdProgress(campaignId){
		var apipath = '/api/v2/outbound/campaigns/{campaignId}/progress';
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
	self.getCampaignsCampaignIdProgress = getCampaignsCampaignIdProgress;
	/**
     * @summary Reset campaign progress and recycle the campaign
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function deleteCampaignsCampaignIdProgress(campaignId){
		var apipath = '/api/v2/outbound/campaigns/{campaignId}/progress';
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
	self.deleteCampaignsCampaignIdProgress = deleteCampaignsCampaignIdProgress;
	/**
     * @summary Get statistics about a Dialer Campaign
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function getCampaignsCampaignIdStats(campaignId){
		var apipath = '/api/v2/outbound/campaigns/{campaignId}/stats';
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
	self.getCampaignsCampaignIdStats = getCampaignsCampaignIdStats;
	/**
     * @summary Query a list of contact lists.
	 * @memberOf OutboundApi#
	* @param {boolean} includeImportStatus - Include import status
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
	function getContactlists(includeImportStatus, includeSize, pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var apipath = '/api/v2/outbound/contactlists';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(includeImportStatus !== undefined && includeImportStatus !== null){
			queryParameters.includeImportStatus = includeImportStatus;
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
   "id": "",
   "selfUri": ""
}
	*/
	function postContactlists(body){
		var apipath = '/api/v2/outbound/contactlists';
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
		var apipath = '/api/v2/outbound/contactlists/penetrationrates';
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
	* @param {boolean} includeSize - Include size
	*/
	function getContactlistsContactlistId(contactListId, includeImportStatus, includeSize){
		var apipath = '/api/v2/outbound/contactlists/{contactListId}';
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


		if(includeSize !== undefined && includeSize !== null){
			queryParameters.includeSize = includeSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContactlistsContactlistId = getContactlistsContactlistId;
	/**
     * @summary Update a contact list.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	* @param {} body - ContactList
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "selfUri": ""
}
	*/
	function putContactlistsContactlistId(contactListId, body){
		var apipath = '/api/v2/outbound/contactlists/{contactListId}';
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
	self.putContactlistsContactlistId = putContactlistsContactlistId;
	/**
     * @summary Delete a contact list.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	*/
	function deleteContactlistsContactlistId(contactListId){
		var apipath = '/api/v2/outbound/contactlists/{contactListId}';
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
	self.deleteContactlistsContactlistId = deleteContactlistsContactlistId;
	/**
     * @summary Add contacts to a contact list.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - Contact List ID
	* @param {} body - Contact
	* @param {boolean} priority - 
	*/
	function postContactlistsContactlistIdContacts(contactListId, body, priority){
		var apipath = '/api/v2/outbound/contactlists/{contactListId}/contacts';
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
	self.postContactlistsContactlistIdContacts = postContactlistsContactlistIdContacts;
	/**
     * @summary Get dialer contactList.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - Contact List ID
	* @param {string} contactId - Contact ID
	*/
	function getContactlistsContactlistIdContactsContactId(contactListId, contactId){
		var apipath = '/api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}';
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
	self.getContactlistsContactlistIdContactsContactId = getContactlistsContactlistIdContactsContactId;
	/**
     * @summary Update a contact.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - Contact List ID
	* @param {string} contactId - Contact ID
	* @param {} body - Contact
	 * @example
	 * Body Example:
	 * {
   "address": "",
   "display": "",
   "mediaType": "",
   "type": ""
}
	*/
	function putContactlistsContactlistIdContactsContactId(contactListId, contactId, body){
		var apipath = '/api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}';
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
	self.putContactlistsContactlistIdContactsContactId = putContactlistsContactlistIdContactsContactId;
	/**
     * @summary Delete a contact.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - Contact List ID
	* @param {string} contactId - Contact ID
	*/
	function deleteContactlistsContactlistIdContactsContactId(contactListId, contactId){
		var apipath = '/api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}';
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
	self.deleteContactlistsContactlistIdContactsContactId = deleteContactlistsContactlistIdContactsContactId;
	/**
     * @summary Initiate the export of a contact list.
	 * @description Returns 200 if received OK.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	*/
	function postContactlistsContactlistIdExport(contactListId){
		var apipath = '/api/v2/outbound/contactlists/{contactListId}/export';
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
	self.postContactlistsContactlistIdExport = postContactlistsContactlistIdExport;
	/**
     * @summary Get dialer contactList import status.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	*/
	function getContactlistsContactlistIdImportstatus(contactListId){
		var apipath = '/api/v2/outbound/contactlists/{contactListId}/importstatus';
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
	self.getContactlistsContactlistIdImportstatus = getContactlistsContactlistIdImportstatus;
	/**
     * @summary Get Dialer campaign's penetration rate
	 * @description Get dialer campaign's penetration rate.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	* @param {string} campaignId - Campaign ID
	*/
	function getContactlistsContactlistIdCampaignIdPenetrationrate(contactListId, campaignId){
		var apipath = '/api/v2/outbound/contactlists/{contactListId}/{campaignId}/penetrationrate';
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
	self.getContactlistsContactlistIdCampaignIdPenetrationrate = getContactlistsContactlistIdCampaignIdPenetrationrate;
	/**
     * @summary Add phone numbers to a Dialer DNC list.
	 * @memberOf OutboundApi#
	* @param {string} conversationId - Conversation ID
	*/
	function postConversationsConversationIdDnc(conversationId){
		var apipath = '/api/v2/outbound/conversations/{conversationId}/dnc';
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
	self.postConversationsConversationIdDnc = postConversationsConversationIdDnc;
	/**
     * @summary Query dialer DNC lists
	 * @memberOf OutboundApi#
	* @param {boolean} includeImportStatus - Import status
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
	function getDnclists(includeImportStatus, includeSize, pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var apipath = '/api/v2/outbound/dnclists';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(includeImportStatus !== undefined && includeImportStatus !== null){
			queryParameters.includeImportStatus = includeImportStatus;
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
		var apipath = '/api/v2/outbound/dnclists';
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
	* @param {boolean} includeSize - Include size
	*/
	function getDnclistsDnclistId(dncListId, includeImportStatus, includeSize){
		var apipath = '/api/v2/outbound/dnclists/{dncListId}';
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


		if(includeSize !== undefined && includeSize !== null){
			queryParameters.includeSize = includeSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDnclistsDnclistId = getDnclistsDnclistId;
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
	function putDnclistsDnclistId(dncListId, body){
		var apipath = '/api/v2/outbound/dnclists/{dncListId}';
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
	self.putDnclistsDnclistId = putDnclistsDnclistId;
	/**
     * @summary Delete dialer DNC list
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	*/
	function deleteDnclistsDnclistId(dncListId){
		var apipath = '/api/v2/outbound/dnclists/{dncListId}';
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
	self.deleteDnclistsDnclistId = deleteDnclistsDnclistId;
	/**
     * @summary Initiate the export of a dnc list.
	 * @description Returns 200 if received OK.
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	*/
	function postDnclistsDnclistIdExport(dncListId){
		var apipath = '/api/v2/outbound/dnclists/{dncListId}/export';
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
	self.postDnclistsDnclistIdExport = postDnclistsDnclistIdExport;
	/**
     * @summary Get dialer dncList import status.
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	*/
	function getDnclistsDnclistIdImportstatus(dncListId){
		var apipath = '/api/v2/outbound/dnclists/{dncListId}/importstatus';
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
	self.getDnclistsDnclistIdImportstatus = getDnclistsDnclistIdImportstatus;
	/**
     * @summary Add phone numbers to a Dialer DNC list.
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	* @param {} body - DNC Phone Numbers
	*/
	function postDnclistsDnclistIdPhonenumbers(dncListId, body){
		var apipath = '/api/v2/outbound/dnclists/{dncListId}/phonenumbers';
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
	self.postDnclistsDnclistIdPhonenumbers = postDnclistsDnclistIdPhonenumbers;
	/**
     * @summary Get dialer preview for user
	 * @memberOf OutboundApi#
	*/
	function getPreviews(){
		var apipath = '/api/v2/outbound/previews';
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
	function getPreviewsPreviewId(previewId){
		var apipath = '/api/v2/outbound/previews/{previewId}';
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
	self.getPreviewsPreviewId = getPreviewsPreviewId;
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
      "address": "",
      "display": "",
      "mediaType": "",
      "type": ""
   }
}
	*/
	function postPreviewsPreviewIdDispositioncall(previewId, body){
		var apipath = '/api/v2/outbound/previews/{previewId}/dispositioncall';
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
	self.postPreviewsPreviewIdDispositioncall = postPreviewsPreviewIdDispositioncall;
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
	function postPreviewsPreviewIdPlacecall(previewId, body){
		var apipath = '/api/v2/outbound/previews/{previewId}/placecall';
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
	self.postPreviewsPreviewIdPlacecall = postPreviewsPreviewIdPlacecall;
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
		var apipath = '/api/v2/outbound/rulesets';
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
		var apipath = '/api/v2/outbound/rulesets';
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
	function getRulesetsRulesetId(ruleSetId){
		var apipath = '/api/v2/outbound/rulesets/{ruleSetId}';
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
	self.getRulesetsRulesetId = getRulesetsRulesetId;
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
	function putRulesetsRulesetId(ruleSetId, body){
		var apipath = '/api/v2/outbound/rulesets/{ruleSetId}';
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
	self.putRulesetsRulesetId = putRulesetsRulesetId;
	/**
     * @summary Delete a Rule set.
	 * @memberOf OutboundApi#
	* @param {string} ruleSetId - Rule Set ID
	*/
	function deleteRulesetsRulesetId(ruleSetId){
		var apipath = '/api/v2/outbound/rulesets/{ruleSetId}';
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
	self.deleteRulesetsRulesetId = deleteRulesetsRulesetId;
	/**
     * @summary Query for a list of dialer campaign schedules.
	 * @memberOf OutboundApi#
	*/
	function getSchedulesCampaigns(){
		var apipath = '/api/v2/outbound/schedules/campaigns';
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
	function getSchedulesCampaignsCampaignId(campaignId){
		var apipath = '/api/v2/outbound/schedules/campaigns/{campaignId}';
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
	self.getSchedulesCampaignsCampaignId = getSchedulesCampaignsCampaignId;
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
	function putSchedulesCampaignsCampaignId(campaignId, body){
		var apipath = '/api/v2/outbound/schedules/campaigns/{campaignId}';
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
	self.putSchedulesCampaignsCampaignId = putSchedulesCampaignsCampaignId;
	/**
     * @summary Delete a dialer campaign schedule.
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function deleteSchedulesCampaignsCampaignId(campaignId){
		var apipath = '/api/v2/outbound/schedules/campaigns/{campaignId}';
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
	self.deleteSchedulesCampaignsCampaignId = deleteSchedulesCampaignsCampaignId;
	/**
     * @summary Query for a list of dialer sequence schedules.
	 * @memberOf OutboundApi#
	*/
	function getSchedulesSequences(){
		var apipath = '/api/v2/outbound/schedules/sequences';
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
	function getSchedulesSequencesSequenceId(sequenceId){
		var apipath = '/api/v2/outbound/schedules/sequences/{sequenceId}';
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
	self.getSchedulesSequencesSequenceId = getSchedulesSequencesSequenceId;
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
	function putSchedulesSequencesSequenceId(sequenceId, body){
		var apipath = '/api/v2/outbound/schedules/sequences/{sequenceId}';
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
	self.putSchedulesSequencesSequenceId = putSchedulesSequencesSequenceId;
	/**
     * @summary Delete a dialer sequence schedule.
	 * @memberOf OutboundApi#
	* @param {string} sequenceId - Sequence ID
	*/
	function deleteSchedulesSequencesSequenceId(sequenceId){
		var apipath = '/api/v2/outbound/schedules/sequences/{sequenceId}';
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
	self.deleteSchedulesSequencesSequenceId = deleteSchedulesSequencesSequenceId;
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
		var apipath = '/api/v2/outbound/sequences';
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
		var apipath = '/api/v2/outbound/sequences';
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
	function getSequencesSequenceId(sequenceId){
		var apipath = '/api/v2/outbound/sequences/{sequenceId}';
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
	self.getSequencesSequenceId = getSequencesSequenceId;
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
	function putSequencesSequenceId(sequenceId, body){
		var apipath = '/api/v2/outbound/sequences/{sequenceId}';
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
	self.putSequencesSequenceId = putSequencesSequenceId;
	/**
     * @summary Delete a dialer campaign sequence.
	 * @memberOf OutboundApi#
	* @param {string} sequenceId - Campaign Sequence ID
	*/
	function deleteSequencesSequenceId(sequenceId){
		var apipath = '/api/v2/outbound/sequences/{sequenceId}';
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
	self.deleteSequencesSequenceId = deleteSequencesSequenceId;
	/**
     * @summary Get the Dialer wrap up code mapping.
	 * @memberOf OutboundApi#
	*/
	function getWrapupcodemappings(){
		var apipath = '/api/v2/outbound/wrapupcodemappings';
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
		var apipath = '/api/v2/outbound/wrapupcodemappings';
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
