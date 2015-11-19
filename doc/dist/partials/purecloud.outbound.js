if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.outbound";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.outbound = (function (PureCloud) {
	/**
	* @namespace outbound/audits
	**/
	/**
	* @namespace outbound/callabletimesets
	**/
	/**
	* @namespace outbound/callanalysisresponsesets
	**/
	/**
	* @namespace outbound/campaigns
	**/
	/**
	* @namespace outbound/campaigns/agents
	**/
	/**
	* @namespace outbound/campaigns/callback/schedule
	**/
	/**
	* @namespace outbound/campaigns/diagnostics
	**/
	/**
	* @namespace outbound/campaigns/stats
	**/
	/**
	* @namespace outbound/contactlists
	**/
	/**
	* @namespace outbound/contactlists/penetrationrates
	**/
	/**
	* @namespace outbound/contactlists/contacts
	**/
	/**
	* @namespace outbound/contactlists/export
	**/
	/**
	* @namespace outbound/contactlists/importstatus
	**/
	/**
	* @namespace outbound/contactlists/penetrationrate
	**/
	/**
	* @namespace outbound/conversations/dnc
	**/
	/**
	* @namespace outbound/dnclists
	**/
	/**
	* @namespace outbound/dnclists/export
	**/
	/**
	* @namespace outbound/dnclists/importstatus
	**/
	/**
	* @namespace outbound/dnclists/phonenumbers
	**/
	/**
	* @namespace outbound/previews
	**/
	/**
	* @namespace outbound/previews/dispositioncall
	**/
	/**
	* @namespace outbound/previews/placecall
	**/
	/**
	* @namespace outbound/rulesets
	**/
	/**
	* @namespace outbound/schedules/campaigns
	**/
	/**
	* @namespace outbound/schedules/sequences
	**/
	/**
	* @namespace outbound/sequences
	**/
	/**
	* @namespace outbound/wrapupcodemappings
	**/

	var self = {};
	self.audits = self.audits || {};

	/**
     * 
     * @method searchDialerAudits
	 * @memberof outbound/audits

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
	 *
     */
     self.audits.searchDialerAudits = function(body, pageSize, pageNumber, sortBy, sortOrder, facetsOnly){
		var path = '/api/v1/outbound/audits';
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



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.callabletimesets = self.callabletimesets || {};

	/**
     * 
     * @method queryCallableTimeSets
	 * @memberof outbound/callabletimesets

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
	 *
     */
     self.callabletimesets.queryCallableTimeSets = function(pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var path = '/api/v1/outbound/callabletimesets';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.callabletimesets = self.callabletimesets || {};

	/**
     * 
     * @method createCallableTimeSet
	 * @memberof outbound/callabletimesets

	* @param {} body - DialerCallableTimeSet
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "callableTimes": [],
   "selfUri": ""
}
	 *
     */
     self.callabletimesets.createCallableTimeSet = function(body){
		var path = '/api/v1/outbound/callabletimesets';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.callabletimesets = self.callabletimesets || {};

	/**
     * 
     * @method getCallableTimeSet
	 * @memberof outbound/callabletimesets

	* @param {string} callableTimeSetId - Callable Time Set ID
	 *
     */
     self.callabletimesets.getCallableTimeSet = function(callableTimeSetId){
		var path = '/api/v1/outbound/callabletimesets/{callableTimeSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{callableTimeSetId}', callableTimeSetId);

        if(callableTimeSetId === undefined && callableTimeSetId !== null){
			throw 'Missing required  parameter: callableTimeSetId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.callabletimesets = self.callabletimesets || {};

	/**
     * 
     * @method updateCallableTimeSet
	 * @memberof outbound/callabletimesets

	* @param {string} callableTimeSetId - Callable Time Set ID

	* @param {} body - DialerCallableTimeSet
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "callableTimes": [],
   "selfUri": ""
}
	 *
     */
     self.callabletimesets.updateCallableTimeSet = function(callableTimeSetId, body){
		var path = '/api/v1/outbound/callabletimesets/{callableTimeSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{callableTimeSetId}', callableTimeSetId);

        if(callableTimeSetId === undefined && callableTimeSetId !== null){
			throw 'Missing required  parameter: callableTimeSetId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.callabletimesets = self.callabletimesets || {};

	/**
     * 
     * @method deleteCallableTimeSet
	 * @memberof outbound/callabletimesets

	* @param {string} callableTimeSetId - Callable Time Set ID
	 *
     */
     self.callabletimesets.deleteCallableTimeSet = function(callableTimeSetId){
		var path = '/api/v1/outbound/callabletimesets/{callableTimeSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{callableTimeSetId}', callableTimeSetId);

        if(callableTimeSetId === undefined && callableTimeSetId !== null){
			throw 'Missing required  parameter: callableTimeSetId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.callanalysisresponsesets = self.callanalysisresponsesets || {};

	/**
     * 
     * @method queryDialerResponseset
	 * @memberof outbound/callanalysisresponsesets

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
	 *
     */
     self.callanalysisresponsesets.queryDialerResponseset = function(pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var path = '/api/v1/outbound/callanalysisresponsesets';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.callanalysisresponsesets = self.callanalysisresponsesets || {};

	/**
     * 
     * @method createDialerResponseset
	 * @memberof outbound/callanalysisresponsesets

	* @param {} body - ResponseSet
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "responses": {},
   "selfUri": ""
}
	 *
     */
     self.callanalysisresponsesets.createDialerResponseset = function(body){
		var path = '/api/v1/outbound/callanalysisresponsesets';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.callanalysisresponsesets = self.callanalysisresponsesets || {};

	/**
     * 
     * @method getADialerResponseset
	 * @memberof outbound/callanalysisresponsesets

	* @param {string} callAnalysisSetId - Call Analysis Response Set ID
	 *
     */
     self.callanalysisresponsesets.getADialerResponseset = function(callAnalysisSetId){
		var path = '/api/v1/outbound/callanalysisresponsesets/{callAnalysisSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{callAnalysisSetId}', callAnalysisSetId);

        if(callAnalysisSetId === undefined && callAnalysisSetId !== null){
			throw 'Missing required  parameter: callAnalysisSetId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.callanalysisresponsesets = self.callanalysisresponsesets || {};

	/**
     * 
     * @method updateDialerResponseset
	 * @memberof outbound/callanalysisresponsesets

	* @param {string} callAnalysisSetId - Call Analysis Response Set ID

	* @param {} body - ResponseSet
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "responses": {},
   "selfUri": ""
}
	 *
     */
     self.callanalysisresponsesets.updateDialerResponseset = function(callAnalysisSetId, body){
		var path = '/api/v1/outbound/callanalysisresponsesets/{callAnalysisSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{callAnalysisSetId}', callAnalysisSetId);

        if(callAnalysisSetId === undefined && callAnalysisSetId !== null){
			throw 'Missing required  parameter: callAnalysisSetId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.callanalysisresponsesets = self.callanalysisresponsesets || {};

	/**
     * 
     * @method deleteDialerResponseset
	 * @memberof outbound/callanalysisresponsesets

	* @param {string} callAnalysisSetId - Call Analysis Response Set ID
	 *
     */
     self.callanalysisresponsesets.deleteDialerResponseset = function(callAnalysisSetId){
		var path = '/api/v1/outbound/callanalysisresponsesets/{callAnalysisSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{callAnalysisSetId}', callAnalysisSetId);

        if(callAnalysisSetId === undefined && callAnalysisSetId !== null){
			throw 'Missing required  parameter: callAnalysisSetId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.campaigns = self.campaigns || {};

	/**
     * 
     * @method queryDialerCampaigns
	 * @memberof outbound/campaigns

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
	 *
     */
     self.campaigns.queryDialerCampaigns = function(pageSize, pageNumber, filterType, name, contactListId, dncListId, distributionQueueId, edgeGroupId, callAnalysisResponseSetId, sortBy, sortOrder){
		var path = '/api/v1/outbound/campaigns';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.campaigns = self.campaigns || {};

	/**
     * 
     * @method createDialerCampaign
	 * @memberof outbound/campaigns

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
	 *
     */
     self.campaigns.createDialerCampaign = function(body){
		var path = '/api/v1/outbound/campaigns';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.campaigns = self.campaigns || {};

	/**
     * 
     * @method getDialerCampaign
	 * @memberof outbound/campaigns

	* @param {string} campaignId - Campaign ID
	 *
     */
     self.campaigns.getDialerCampaign = function(campaignId){
		var path = '/api/v1/outbound/campaigns/{campaignId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.campaigns = self.campaigns || {};

	/**
     * 
     * @method updateDialerCampaign
	 * @memberof outbound/campaigns

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
	 *
     */
     self.campaigns.updateDialerCampaign = function(campaignId, body){
		var path = '/api/v1/outbound/campaigns/{campaignId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.campaigns = self.campaigns || {};

	/**
     * 
     * @method deleteDialerCampaign
	 * @memberof outbound/campaigns

	* @param {string} campaignId - Campaign ID
	 *
     */
     self.campaigns.deleteDialerCampaign = function(campaignId){
		var path = '/api/v1/outbound/campaigns/{campaignId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.campaigns = self.campaigns || {};
	self.campaigns.agents = self.campaigns.agents || {};

	/**
     * New agent state.
     * @method updateAgent
	 * @memberof outbound/campaigns/agents

	* @param {string} campaignId - Campaign ID

	* @param {string} userId - Agent's user ID

	* @param {} body - agent
	 * @example
	 * Body Example:
	 * {
   "stage": ""
}
	 *
     */
     self.campaigns.agents.updateAgent = function(campaignId, userId, body){
		var path = '/api/v1/outbound/campaigns/{campaignId}/agents/{userId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }

        path = path.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.campaigns = self.campaigns || {};
	self.campaigns.callback = self.campaigns.callback || {};
	self.campaigns.callback.schedule = self.campaigns.callback.schedule || {};

	/**
     * 
     * @method scheduleCallback
	 * @memberof outbound/campaigns/callback/schedule

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
	 *
     */
     self.campaigns.callback.schedule.scheduleCallback = function(campaignId, body){
		var path = '/api/v1/outbound/campaigns/{campaignId}/callback/schedule';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.campaigns = self.campaigns || {};
	self.campaigns.diagnostics = self.campaigns.diagnostics || {};

	/**
     * 
     * @method requestCampaignDiagnostics
	 * @memberof outbound/campaigns/diagnostics

	* @param {string} campaignId - Campaign ID
	 *
     */
     self.campaigns.diagnostics.requestCampaignDiagnostics = function(campaignId){
		var path = '/api/v1/outbound/campaigns/{campaignId}/diagnostics';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.campaigns = self.campaigns || {};
	self.campaigns.stats = self.campaigns.stats || {};

	/**
     * 
     * @method getDialerCampaignStats
	 * @memberof outbound/campaigns/stats

	* @param {string} campaignId - Campaign ID
	 *
     */
     self.campaigns.stats.getDialerCampaignStats = function(campaignId){
		var path = '/api/v1/outbound/campaigns/{campaignId}/stats';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.contactlists = self.contactlists || {};

	/**
     * 
     * @method queryDialerContactlists
	 * @memberof outbound/contactlists

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
	 *
     */
     self.contactlists.queryDialerContactlists = function(importStatus, includeSize, pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var path = '/api/v1/outbound/contactlists';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.contactlists = self.contactlists || {};

	/**
     * 
     * @method createDialerContactlist
	 * @memberof outbound/contactlists

	* @param {} body - ContactList
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "selfUri": ""
}
	 *
     */
     self.contactlists.createDialerContactlist = function(body){
		var path = '/api/v1/outbound/contactlists';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.contactlists = self.contactlists || {};
	self.contactlists.penetrationrates = self.contactlists.penetrationrates || {};

	/**
     * 
     * @method getPenetrationRates
	 * @memberof outbound/contactlists/penetrationrates

	* @param {} body - PenetrationRateIdentifierList
	 *
     */
     self.contactlists.penetrationrates.getPenetrationRates = function(body){
		var path = '/api/v1/outbound/contactlists/penetrationrates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.contactlists = self.contactlists || {};

	/**
     * 
     * @method getDialerContactlist
	 * @memberof outbound/contactlists

	* @param {string} contactListId - ContactList ID

	* @param {boolean} importStatus - Import status

	* @param {boolean} includeSize - Include size
	 *
     */
     self.contactlists.getDialerContactlist = function(contactListId, importStatus, includeSize){
		var path = '/api/v1/outbound/contactlists/{contactListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }


		if(importStatus !== undefined && importStatus !== null){
			queryParameters.importStatus = importStatus;
		}


		if(includeSize !== undefined && includeSize !== null){
			queryParameters.includeSize = includeSize;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.contactlists = self.contactlists || {};

	/**
     * 
     * @method updateDialerContactlist
	 * @memberof outbound/contactlists

	* @param {string} contactListId - ContactList ID

	* @param {} body - ContactList
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "selfUri": ""
}
	 *
     */
     self.contactlists.updateDialerContactlist = function(contactListId, body){
		var path = '/api/v1/outbound/contactlists/{contactListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.contactlists = self.contactlists || {};

	/**
     * 
     * @method deleteDialerContactList
	 * @memberof outbound/contactlists

	* @param {string} contactListId - ContactList ID
	 *
     */
     self.contactlists.deleteDialerContactList = function(contactListId){
		var path = '/api/v1/outbound/contactlists/{contactListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.contactlists = self.contactlists || {};
	self.contactlists.contacts = self.contactlists.contacts || {};

	/**
     * 
     * @method createDialerContacts
	 * @memberof outbound/contactlists/contacts

	* @param {string} contactListId - Contact List ID

	* @param {} body - Contact

	* @param {boolean} priority - 
	 *
     */
     self.contactlists.contacts.createDialerContacts = function(contactListId, body, priority){
		var path = '/api/v1/outbound/contactlists/{contactListId}/contacts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(priority !== undefined && priority !== null){
			queryParameters.priority = priority;
		}



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.contactlists = self.contactlists || {};
	self.contactlists.contacts = self.contactlists.contacts || {};

	/**
     * 
     * @method getDialerContact
	 * @memberof outbound/contactlists/contacts

	* @param {string} contactListId - Contact List ID

	* @param {string} contactId - Contact ID
	 *
     */
     self.contactlists.contacts.getDialerContact = function(contactListId, contactId){
		var path = '/api/v1/outbound/contactlists/{contactListId}/contacts/{contactId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }

        path = path.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.contactlists = self.contactlists || {};
	self.contactlists.contacts = self.contactlists.contacts || {};

	/**
     * 
     * @method updateDialerContact
	 * @memberof outbound/contactlists/contacts

	* @param {string} contactListId - Contact List ID

	* @param {string} contactId - Contact ID

	* @param {} body - Contact
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "contactListId": "",
   "data": {
      "array": true,
      "null": true,
      "valueNode": true,
      "containerNode": true,
      "missingNode": true,
      "object": true,
      "nodeType": "",
      "pojo": true,
      "number": true,
      "integralNumber": true,
      "floatingPointNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "float": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "boolean": true,
      "binary": true
   },
   "callRecords": {},
   "callable": true,
   "phoneNumberStatus": {},
   "selfUri": ""
}
	 *
     */
     self.contactlists.contacts.updateDialerContact = function(contactListId, contactId, body){
		var path = '/api/v1/outbound/contactlists/{contactListId}/contacts/{contactId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }

        path = path.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.contactlists = self.contactlists || {};
	self.contactlists.contacts = self.contactlists.contacts || {};

	/**
     * 
     * @method deleteDialerContact
	 * @memberof outbound/contactlists/contacts

	* @param {string} contactListId - Contact List ID

	* @param {string} contactId - Contact ID
	 *
     */
     self.contactlists.contacts.deleteDialerContact = function(contactListId, contactId){
		var path = '/api/v1/outbound/contactlists/{contactListId}/contacts/{contactId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }

        path = path.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.contactlists = self.contactlists || {};
	self.contactlists.export = self.contactlists.export || {};

	/**
     * Returns 200 if received OK.
     * @method exportContactList
	 * @memberof outbound/contactlists/export

	* @param {string} contactListId - ContactList ID
	 *
     */
     self.contactlists.export.exportContactList = function(contactListId){
		var path = '/api/v1/outbound/contactlists/{contactListId}/export';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.contactlists = self.contactlists || {};
	self.contactlists.importstatus = self.contactlists.importstatus || {};

	/**
     * 
     * @method getDialerContactlistImportStatus
	 * @memberof outbound/contactlists/importstatus

	* @param {string} contactListId - ContactList ID
	 *
     */
     self.contactlists.importstatus.getDialerContactlistImportStatus = function(contactListId){
		var path = '/api/v1/outbound/contactlists/{contactListId}/importstatus';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.contactlists = self.contactlists || {};
	self.contactlists.penetrationrate = self.contactlists.penetrationrate || {};

	/**
     * Get dialer campaign's penetration rate.
     * @method getDialerCampaignsPenetrationRate
	 * @memberof outbound/contactlists/penetrationrate

	* @param {string} contactListId - ContactList ID

	* @param {string} campaignId - Campaign ID
	 *
     */
     self.contactlists.penetrationrate.getDialerCampaignsPenetrationRate = function(contactListId, campaignId){
		var path = '/api/v1/outbound/contactlists/{contactListId}/{campaignId}/penetrationrate';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }

        path = path.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.conversations = self.conversations || {};
	self.conversations.dnc = self.conversations.dnc || {};

	/**
     * 
     * @method addCurrentPhoneNumberToDncList
	 * @memberof outbound/conversations/dnc

	* @param {string} conversationId - Conversation ID
	 *
     */
     self.conversations.dnc.addCurrentPhoneNumberToDncList = function(conversationId){
		var path = '/api/v1/outbound/conversations/{conversationId}/dnc';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.dnclists = self.dnclists || {};

	/**
     * 
     * @method queryDialerDncLists
	 * @memberof outbound/dnclists

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
	 *
     */
     self.dnclists.queryDialerDncLists = function(importStatus, includeSize, pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var path = '/api/v1/outbound/dnclists';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.dnclists = self.dnclists || {};

	/**
     * 
     * @method createDialerDncList
	 * @memberof outbound/dnclists

	* @param {} body - DncList
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "size": 0,
   "selfUri": ""
}
	 *
     */
     self.dnclists.createDialerDncList = function(body){
		var path = '/api/v1/outbound/dnclists';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.dnclists = self.dnclists || {};

	/**
     * 
     * @method getDialerDncList
	 * @memberof outbound/dnclists

	* @param {string} dncListId - DncList ID

	* @param {boolean} importStatus - Import status

	* @param {boolean} includeSize - Include size
	 *
     */
     self.dnclists.getDialerDncList = function(dncListId, importStatus, includeSize){
		var path = '/api/v1/outbound/dnclists/{dncListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }


		if(importStatus !== undefined && importStatus !== null){
			queryParameters.importStatus = importStatus;
		}


		if(includeSize !== undefined && includeSize !== null){
			queryParameters.includeSize = includeSize;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.dnclists = self.dnclists || {};

	/**
     * 
     * @method updateDialerDncList
	 * @memberof outbound/dnclists

	* @param {string} dncListId - DncList ID

	* @param {} body - DncList
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "size": 0,
   "selfUri": ""
}
	 *
     */
     self.dnclists.updateDialerDncList = function(dncListId, body){
		var path = '/api/v1/outbound/dnclists/{dncListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.dnclists = self.dnclists || {};

	/**
     * 
     * @method deleteDialerDncList
	 * @memberof outbound/dnclists

	* @param {string} dncListId - DncList ID
	 *
     */
     self.dnclists.deleteDialerDncList = function(dncListId){
		var path = '/api/v1/outbound/dnclists/{dncListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.dnclists = self.dnclists || {};
	self.dnclists.export = self.dnclists.export || {};

	/**
     * Returns 200 if received OK.
     * @method exportDncList
	 * @memberof outbound/dnclists/export

	* @param {string} dncListId - DncList ID
	 *
     */
     self.dnclists.export.exportDncList = function(dncListId){
		var path = '/api/v1/outbound/dnclists/{dncListId}/export';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.dnclists = self.dnclists || {};
	self.dnclists.importstatus = self.dnclists.importstatus || {};

	/**
     * 
     * @method getDialerDnclistImportStatus
	 * @memberof outbound/dnclists/importstatus

	* @param {string} dncListId - DncList ID
	 *
     */
     self.dnclists.importstatus.getDialerDnclistImportStatus = function(dncListId){
		var path = '/api/v1/outbound/dnclists/{dncListId}/importstatus';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.dnclists = self.dnclists || {};
	self.dnclists.phonenumbers = self.dnclists.phonenumbers || {};

	/**
     * 
     * @method addDialerDncListPhoneNumber
	 * @memberof outbound/dnclists/phonenumbers

	* @param {string} dncListId - DncList ID

	* @param {} body - DNC Phone Numbers
	 *
     */
     self.dnclists.phonenumbers.addDialerDncListPhoneNumber = function(dncListId, body){
		var path = '/api/v1/outbound/dnclists/{dncListId}/phonenumbers';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.previews = self.previews || {};

	/**
     * 
     * @method getUserDialerPreview
	 * @memberof outbound/previews
	 *
     */
     self.previews.getUserDialerPreview = function(){
		var path = '/api/v1/outbound/previews';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.previews = self.previews || {};

	/**
     * 
     * @method getDialerPreview
	 * @memberof outbound/previews

	* @param {string} previewId - preview ID
	 *
     */
     self.previews.getDialerPreview = function(previewId){
		var path = '/api/v1/outbound/previews/{previewId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{previewId}', previewId);

        if(previewId === undefined && previewId !== null){
			throw 'Missing required  parameter: previewId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.previews = self.previews || {};
	self.previews.dispositioncall = self.previews.dispositioncall || {};

	/**
     * 
     * @method dispositionPreviewCall
	 * @memberof outbound/previews/dispositioncall

	* @param {string} previewId - preview ID

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "callId": "",
   "wrapupCodeId": "",
   "contact": {
      "id": "",
      "name": "",
      "contactListId": "",
      "data": {},
      "callRecords": {},
      "callable": true,
      "phoneNumberStatus": {},
      "selfUri": ""
   }
}
	 *
     */
     self.previews.dispositioncall.dispositionPreviewCall = function(previewId, body){
		var path = '/api/v1/outbound/previews/{previewId}/dispositioncall';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{previewId}', previewId);

        if(previewId === undefined && previewId !== null){
			throw 'Missing required  parameter: previewId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.previews = self.previews || {};
	self.previews.placecall = self.previews.placecall || {};

	/**
     * 
     * @method placePreviewCall
	 * @memberof outbound/previews/placecall

	* @param {string} previewId - preview ID

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "callId": "",
   "phoneNumber": ""
}
	 *
     */
     self.previews.placecall.placePreviewCall = function(previewId, body){
		var path = '/api/v1/outbound/previews/{previewId}/placecall';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{previewId}', previewId);

        if(previewId === undefined && previewId !== null){
			throw 'Missing required  parameter: previewId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.rulesets = self.rulesets || {};

	/**
     * 
     * @method queryRuleSets
	 * @memberof outbound/rulesets

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
	 *
     */
     self.rulesets.queryRuleSets = function(pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var path = '/api/v1/outbound/rulesets';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.rulesets = self.rulesets || {};

	/**
     * 
     * @method createDialerRuleset
	 * @memberof outbound/rulesets

	* @param {} body - RuleSet
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "rules": [],
   "selfUri": ""
}
	 *
     */
     self.rulesets.createDialerRuleset = function(body){
		var path = '/api/v1/outbound/rulesets';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.rulesets = self.rulesets || {};

	/**
     * 
     * @method getARuleSetById
	 * @memberof outbound/rulesets

	* @param {string} ruleSetId - Rule Set ID
	 *
     */
     self.rulesets.getARuleSetById = function(ruleSetId){
		var path = '/api/v1/outbound/rulesets/{ruleSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{ruleSetId}', ruleSetId);

        if(ruleSetId === undefined && ruleSetId !== null){
			throw 'Missing required  parameter: ruleSetId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.rulesets = self.rulesets || {};

	/**
     * 
     * @method updateARuleset
	 * @memberof outbound/rulesets

	* @param {string} ruleSetId - Rule Set ID

	* @param {} body - RuleSet
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "rules": [],
   "selfUri": ""
}
	 *
     */
     self.rulesets.updateARuleset = function(ruleSetId, body){
		var path = '/api/v1/outbound/rulesets/{ruleSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{ruleSetId}', ruleSetId);

        if(ruleSetId === undefined && ruleSetId !== null){
			throw 'Missing required  parameter: ruleSetId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.rulesets = self.rulesets || {};

	/**
     * 
     * @method deleteARuleSet
	 * @memberof outbound/rulesets

	* @param {string} ruleSetId - Rule Set ID
	 *
     */
     self.rulesets.deleteARuleSet = function(ruleSetId){
		var path = '/api/v1/outbound/rulesets/{ruleSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{ruleSetId}', ruleSetId);

        if(ruleSetId === undefined && ruleSetId !== null){
			throw 'Missing required  parameter: ruleSetId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.schedules = self.schedules || {};
	self.schedules.campaigns = self.schedules.campaigns || {};

	/**
     * 
     * @method queryDialerCampaignSchedules
	 * @memberof outbound/schedules/campaigns
	 *
     */
     self.schedules.campaigns.queryDialerCampaignSchedules = function(){
		var path = '/api/v1/outbound/schedules/campaigns';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.schedules = self.schedules || {};
	self.schedules.campaigns = self.schedules.campaigns || {};

	/**
     * 
     * @method getDialerCampaignSchedule
	 * @memberof outbound/schedules/campaigns

	* @param {string} campaignId - Campaign ID
	 *
     */
     self.schedules.campaigns.getDialerCampaignSchedule = function(campaignId){
		var path = '/api/v1/outbound/schedules/campaigns/{campaignId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.schedules = self.schedules || {};
	self.schedules.campaigns = self.schedules.campaigns || {};

	/**
     * 
     * @method updateDialerCampaignSchedule
	 * @memberof outbound/schedules/campaigns

	* @param {string} campaignId - Campaign ID

	* @param {} body - CampaignSchedule
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   },
   "selfUri": ""
}
	 *
     */
     self.schedules.campaigns.updateDialerCampaignSchedule = function(campaignId, body){
		var path = '/api/v1/outbound/schedules/campaigns/{campaignId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.schedules = self.schedules || {};
	self.schedules.campaigns = self.schedules.campaigns || {};

	/**
     * 
     * @method deleteDialerCampaignSchedule
	 * @memberof outbound/schedules/campaigns

	* @param {string} campaignId - Campaign ID
	 *
     */
     self.schedules.campaigns.deleteDialerCampaignSchedule = function(campaignId){
		var path = '/api/v1/outbound/schedules/campaigns/{campaignId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.schedules = self.schedules || {};
	self.schedules.sequences = self.schedules.sequences || {};

	/**
     * 
     * @method queryDialerSequenceSchedules
	 * @memberof outbound/schedules/sequences
	 *
     */
     self.schedules.sequences.queryDialerSequenceSchedules = function(){
		var path = '/api/v1/outbound/schedules/sequences';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.schedules = self.schedules || {};
	self.schedules.sequences = self.schedules.sequences || {};

	/**
     * 
     * @method getDialerSequenceSchedule
	 * @memberof outbound/schedules/sequences

	* @param {string} sequenceId - Sequence ID
	 *
     */
     self.schedules.sequences.getDialerSequenceSchedule = function(sequenceId){
		var path = '/api/v1/outbound/schedules/sequences/{sequenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{sequenceId}', sequenceId);

        if(sequenceId === undefined && sequenceId !== null){
			throw 'Missing required  parameter: sequenceId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.schedules = self.schedules || {};
	self.schedules.sequences = self.schedules.sequences || {};

	/**
     * 
     * @method updateDialerSequenceSchedule
	 * @memberof outbound/schedules/sequences

	* @param {string} sequenceId - Sequence ID

	* @param {} body - SequenceSchedule
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   },
   "selfUri": ""
}
	 *
     */
     self.schedules.sequences.updateDialerSequenceSchedule = function(sequenceId, body){
		var path = '/api/v1/outbound/schedules/sequences/{sequenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{sequenceId}', sequenceId);

        if(sequenceId === undefined && sequenceId !== null){
			throw 'Missing required  parameter: sequenceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.schedules = self.schedules || {};
	self.schedules.sequences = self.schedules.sequences || {};

	/**
     * 
     * @method deleteDialerSequenceSchedule
	 * @memberof outbound/schedules/sequences

	* @param {string} sequenceId - Sequence ID
	 *
     */
     self.schedules.sequences.deleteDialerSequenceSchedule = function(sequenceId){
		var path = '/api/v1/outbound/schedules/sequences/{sequenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{sequenceId}', sequenceId);

        if(sequenceId === undefined && sequenceId !== null){
			throw 'Missing required  parameter: sequenceId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.sequences = self.sequences || {};

	/**
     * 
     * @method queryDialerCampaignSequences
	 * @memberof outbound/sequences

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
	 *
     */
     self.sequences.queryDialerCampaignSequences = function(pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var path = '/api/v1/outbound/sequences';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.sequences = self.sequences || {};

	/**
     * 
     * @method createDialerCampaignSequence
	 * @memberof outbound/sequences

	* @param {} body - Organization
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "campaigns": [],
   "currentCampaign": 0,
   "status": "",
   "stopMessage": "",
   "selfUri": ""
}
	 *
     */
     self.sequences.createDialerCampaignSequence = function(body){
		var path = '/api/v1/outbound/sequences';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.sequences = self.sequences || {};

	/**
     * 
     * @method getDialerCampaignSequence
	 * @memberof outbound/sequences

	* @param {string} sequenceId - Campaign Sequence ID
	 *
     */
     self.sequences.getDialerCampaignSequence = function(sequenceId){
		var path = '/api/v1/outbound/sequences/{sequenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{sequenceId}', sequenceId);

        if(sequenceId === undefined && sequenceId !== null){
			throw 'Missing required  parameter: sequenceId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.sequences = self.sequences || {};

	/**
     * 
     * @method updateDialerCampaignSequence
	 * @memberof outbound/sequences

	* @param {string} sequenceId - Campaign Sequence ID

	* @param {} body - Organization
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "campaigns": [],
   "currentCampaign": 0,
   "status": "",
   "stopMessage": "",
   "selfUri": ""
}
	 *
     */
     self.sequences.updateDialerCampaignSequence = function(sequenceId, body){
		var path = '/api/v1/outbound/sequences/{sequenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{sequenceId}', sequenceId);

        if(sequenceId === undefined && sequenceId !== null){
			throw 'Missing required  parameter: sequenceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.sequences = self.sequences || {};

	/**
     * 
     * @method deleteDialerCampaignSequence
	 * @memberof outbound/sequences

	* @param {string} sequenceId - Campaign Sequence ID
	 *
     */
     self.sequences.deleteDialerCampaignSequence = function(sequenceId){
		var path = '/api/v1/outbound/sequences/{sequenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{sequenceId}', sequenceId);

        if(sequenceId === undefined && sequenceId !== null){
			throw 'Missing required  parameter: sequenceId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.wrapupcodemappings = self.wrapupcodemappings || {};

	/**
     * 
     * @method getDialerWrapupCodeMapping
	 * @memberof outbound/wrapupcodemappings
	 *
     */
     self.wrapupcodemappings.getDialerWrapupCodeMapping = function(){
		var path = '/api/v1/outbound/wrapupcodemappings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.wrapupcodemappings = self.wrapupcodemappings || {};

	/**
     * 
     * @method updateDialerWrapupCodeMapping
	 * @memberof outbound/wrapupcodemappings

	* @param {} body - wrapUpCodeMapping
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "defaultSet": [],
   "mapping": {},
   "selfUri": ""
}
	 *
     */
     self.wrapupcodemappings.updateDialerWrapupCodeMapping = function(body){
		var path = '/api/v1/outbound/wrapupcodemappings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
