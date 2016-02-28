/**
* @class
* @example
* var api = new ArchitectApi(pureCloudSession);
*/
var ArchitectApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Gets architect-data-service audit entries.
	 * @memberOf ArchitectApi#
	* @param {} body - AuditSearchRequest
	 * @example
	 * Body Example:
	 * {
   "pageNumber": 0,
   "pageSize": 0,
   "sortBy": [],
   "queryPhrase": "",
   "queryFields": [],
   "facets": [],
   "filters": []
}
	*/
	function postAudits(body){
		var apipath = '/api/v1/architect/audits';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postAudits = postAudits;
	/**
     * @summary Get IVR configs.
	 * @memberOf ArchitectApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	*/
	function getIvrs(pageNumber, pageSize, sortBy, sortOrder){
		var apipath = '/api/v1/architect/ivrs';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getIvrs = getIvrs;
	/**
     * @summary Create IVR config.
	 * @memberOf ArchitectApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "ivrUri": "",
   "dnis": [],
   "flowId": "",
   "scheduleId": "",
   "openHoursFlow": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "closedHoursFlow": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "scheduleGroup": {
      "id": "",
      "name": "",
      "selfUri": ""
   }
}
	*/
	function postIvrs(body){
		var apipath = '/api/v1/architect/ivrs';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postIvrs = postIvrs;
	/**
     * @summary Publish an IVR config.
	 * @memberOf ArchitectApi#
	* @param {string} id - 
	*/
	function postIvrsActionsPublish(id){
		var apipath = '/api/v1/architect/ivrs/actions/publish';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(id !== undefined && id !== null){
			queryParameters.id = id;
		}

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postIvrsActionsPublish = postIvrsActionsPublish;
	/**
     * @summary Get an IVR config.
	 * @memberOf ArchitectApi#
	* @param {string} ivrId - IVR id
	*/
	function getIvr(ivrId){
		var apipath = '/api/v1/architect/ivrs/{ivrId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{ivrId}', ivrId);

        if(ivrId === undefined && ivrId !== null){
			throw 'Missing required  parameter: ivrId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getIvr = getIvr;
	/**
     * @summary Update an IVR Config.
	 * @memberOf ArchitectApi#
	* @param {string} ivrId - IVR id
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "ivrUri": "",
   "dnis": [],
   "flowId": "",
   "scheduleId": "",
   "openHoursFlow": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "closedHoursFlow": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "scheduleGroup": {
      "id": "",
      "name": "",
      "selfUri": ""
   }
}
	*/
	function putIvr(ivrId, body){
		var apipath = '/api/v1/architect/ivrs/{ivrId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{ivrId}', ivrId);

        if(ivrId === undefined && ivrId !== null){
			throw 'Missing required  parameter: ivrId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putIvr = putIvr;
	/**
     * @summary Delete an IVR Config.
	 * @memberOf ArchitectApi#
	* @param {string} ivrId - IVR id
	*/
	function deleteIvr(ivrId){
		var apipath = '/api/v1/architect/ivrs/{ivrId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{ivrId}', ivrId);

        if(ivrId === undefined && ivrId !== null){
			throw 'Missing required  parameter: ivrId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteIvr = deleteIvr;
	/**
     * @summary Get a pageable list of user prompts
	 * @description The returned list is pageable, and query parameters can be used for filtering.  Multiple names can be specified, in which case all matching prompts will be returned, and no other filters will be evaluated.
	 * @memberOf ArchitectApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} name - Name
	* @param {string} description - Description
	* @param {string} nameOrDescription - Name or description
	*/
	function getPrompts(pageNumber, pageSize, name, description, nameOrDescription){
		var apipath = '/api/v1/architect/prompts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(description !== undefined && description !== null){
			queryParameters.description = description;
		}


		if(nameOrDescription !== undefined && nameOrDescription !== null){
			queryParameters.nameOrDescription = nameOrDescription;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPrompts = getPrompts;
	/**
     * @summary Create a new user prompt
	 * @memberOf ArchitectApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "resources": []
}
	*/
	function postPrompts(body){
		var apipath = '/api/v1/architect/prompts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postPrompts = postPrompts;
	/**
     * @summary Batch-delete a list of prompts
	 * @description Multiple IDs can be specified, in which case all specified prompts will be deleted.
	 * @memberOf ArchitectApi#
	* @param {array} id - List of Prompt IDs
	* @param {boolean} ignoreDependencies - Ignore Dependencies
	*/
	function deletePrompts(id, ignoreDependencies){
		var apipath = '/api/v1/architect/prompts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(id !== undefined && id !== null){
			queryParameters.id = id;
		}

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(ignoreDependencies !== undefined && ignoreDependencies !== null){
			queryParameters.ignoreDependencies = ignoreDependencies;
		}


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deletePrompts = deletePrompts;
	/**
     * @summary Get specified user prompt
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	*/
	function getPrompt(promptId){
		var apipath = '/api/v1/architect/prompts/{promptId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPrompt = getPrompt;
	/**
     * @summary Update specified user prompt
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "resources": []
}
	*/
	function putPrompt(promptId, body){
		var apipath = '/api/v1/architect/prompts/{promptId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putPrompt = putPrompt;
	/**
     * @summary Delete specified user prompt
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	*/
	function deletePrompt(promptId){
		var apipath = '/api/v1/architect/prompts/{promptId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deletePrompt = deletePrompt;
	/**
     * @summary Get a pageable list of user prompt resources
	 * @description The returned list is pageable, and query paramaters can be used for filtering.
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	*/
	function getPromptResources(promptId, pageNumber, pageSize){
		var apipath = '/api/v1/architect/prompts/{promptId}/resources';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPromptResources = getPromptResources;
	/**
     * @summary Create a new user prompt resource.
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "promptId": "",
   "language": "",
   "mediaUri": "",
   "ttsString": "",
   "uploadStatus": "",
   "uploadUri": "",
   "durationSeconds": {}
}
	*/
	function postPromptResources(promptId, body){
		var apipath = '/api/v1/architect/prompts/{promptId}/resources';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postPromptResources = postPromptResources;
	/**
     * @summary Get specified user prompt resource
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {string} language - Language
	*/
	function getPromptResources(promptId, language){
		var apipath = '/api/v1/architect/prompts/{promptId}/resources/{language}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }

        apipath = apipath.replace('{language}', language);

        if(language === undefined && language !== null){
			throw 'Missing required  parameter: language';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPromptResources = getPromptResources;
	/**
     * @summary Update specified user prompt resource
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {string} language - Language
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "promptId": "",
   "language": "",
   "mediaUri": "",
   "ttsString": "",
   "uploadStatus": "",
   "uploadUri": "",
   "durationSeconds": {}
}
	*/
	function putPromptResources(promptId, language, body){
		var apipath = '/api/v1/architect/prompts/{promptId}/resources/{language}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }

        apipath = apipath.replace('{language}', language);

        if(language === undefined && language !== null){
			throw 'Missing required  parameter: language';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putPromptResources = putPromptResources;
	/**
     * @summary Delete specified user prompt resource
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {string} language - Language
	*/
	function deletePromptResources(promptId, language){
		var apipath = '/api/v1/architect/prompts/{promptId}/resources/{language}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }

        apipath = apipath.replace('{language}', language);

        if(language === undefined && language !== null){
			throw 'Missing required  parameter: language';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deletePromptResources = deletePromptResources;
	/**
     * @summary Get a list of schedule groups.
	 * @memberOf ArchitectApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	*/
	function getSchedulegroups(pageNumber, pageSize, sortBy, sortOrder){
		var apipath = '/api/v1/architect/schedulegroups';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchedulegroups = getSchedulegroups;
	/**
     * @summary Creates a new schedule group
	 * @memberOf ArchitectApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "timeZone": "",
   "openSchedules": [],
   "closedSchedules": []
}
	*/
	function postSchedulegroups(body){
		var apipath = '/api/v1/architect/schedulegroups';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postSchedulegroups = postSchedulegroups;
	/**
     * @summary Gets a schedule group by ID
	 * @memberOf ArchitectApi#
	* @param {string} scheduleGroupId - Schedule group ID
	*/
	function getSchedulegroup(scheduleGroupId){
		var apipath = '/api/v1/architect/schedulegroups/{scheduleGroupId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scheduleGroupId}', scheduleGroupId);

        if(scheduleGroupId === undefined && scheduleGroupId !== null){
			throw 'Missing required  parameter: scheduleGroupId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchedulegroup = getSchedulegroup;
	/**
     * @summary Updates a schedule group by ID
	 * @memberOf ArchitectApi#
	* @param {string} scheduleGroupId - Schedule group ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "timeZone": "",
   "openSchedules": [],
   "closedSchedules": []
}
	*/
	function putSchedulegroup(scheduleGroupId, body){
		var apipath = '/api/v1/architect/schedulegroups/{scheduleGroupId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scheduleGroupId}', scheduleGroupId);

        if(scheduleGroupId === undefined && scheduleGroupId !== null){
			throw 'Missing required  parameter: scheduleGroupId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putSchedulegroup = putSchedulegroup;
	/**
     * @summary Deletes a schedule group by ID
	 * @memberOf ArchitectApi#
	* @param {string} scheduleGroupId - Schedule group ID
	*/
	function deleteSchedulegroup(scheduleGroupId){
		var apipath = '/api/v1/architect/schedulegroups/{scheduleGroupId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scheduleGroupId}', scheduleGroupId);

        if(scheduleGroupId === undefined && scheduleGroupId !== null){
			throw 'Missing required  parameter: scheduleGroupId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteSchedulegroup = deleteSchedulegroup;
	/**
     * @summary Get a list of schedules.
	 * @memberOf ArchitectApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	*/
	function getSchedules(pageNumber, pageSize, sortBy, sortOrder){
		var apipath = '/api/v1/architect/schedules';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchedules = getSchedules;
	/**
     * @summary Create a new schedule.
	 * @memberOf ArchitectApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "start": "",
   "end": "",
   "rrule": "",
   "keywords": []
}
	*/
	function postSchedules(body){
		var apipath = '/api/v1/architect/schedules';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postSchedules = postSchedules;
	/**
     * @summary Get a schedule by ID
	 * @memberOf ArchitectApi#
	* @param {string} scheduleId - Schedule ID
	*/
	function getSchedule(scheduleId){
		var apipath = '/api/v1/architect/schedules/{scheduleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scheduleId}', scheduleId);

        if(scheduleId === undefined && scheduleId !== null){
			throw 'Missing required  parameter: scheduleId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchedule = getSchedule;
	/**
     * @summary Update schedule by ID
	 * @memberOf ArchitectApi#
	* @param {string} scheduleId - Schedule ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "start": "",
   "end": "",
   "rrule": "",
   "keywords": []
}
	*/
	function putSchedule(scheduleId, body){
		var apipath = '/api/v1/architect/schedules/{scheduleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scheduleId}', scheduleId);

        if(scheduleId === undefined && scheduleId !== null){
			throw 'Missing required  parameter: scheduleId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putSchedule = putSchedule;
	/**
     * @summary Delete a schedule by id
	 * @memberOf ArchitectApi#
	* @param {string} scheduleId - Schedule ID
	*/
	function deleteSchedule(scheduleId){
		var apipath = '/api/v1/architect/schedules/{scheduleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scheduleId}', scheduleId);

        if(scheduleId === undefined && scheduleId !== null){
			throw 'Missing required  parameter: scheduleId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteSchedule = deleteSchedule;
	/**
     * @summary Get System Prompts.
	 * @memberOf ArchitectApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	* @param {string} name - Name
	* @param {string} description - Description
	* @param {string} nameOrDescription - Name or description
	*/
	function getSystemprompts(pageNumber, pageSize, sortBy, sortOrder, name, description, nameOrDescription){
		var apipath = '/api/v1/architect/systemprompts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(description !== undefined && description !== null){
			queryParameters.description = description;
		}


		if(nameOrDescription !== undefined && nameOrDescription !== null){
			queryParameters.nameOrDescription = nameOrDescription;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSystemprompts = getSystemprompts;
	/**
     * @summary Get IVR system prompt.
	 * @memberOf ArchitectApi#
	* @param {string} promptId - 
	*/
	function getSystemprompt(promptId){
		var apipath = '/api/v1/architect/systemprompts/{promptId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSystemprompt = getSystemprompt;
	/**
     * @summary Get IVR System Prompt resources.
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	*/
	function getSystempromptResources(promptId, pageNumber, pageSize, sortBy, sortOrder){
		var apipath = '/api/v1/architect/systemprompts/{promptId}/resources';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSystempromptResources = getSystempromptResources;
	/**
     * @summary Create system prompt resource override.
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "promptId": "",
   "language": "",
   "durationSeconds": {},
   "mediaUri": "",
   "ttsString": "",
   "uploadUri": "",
   "uploadStatus": "",
   "hasDefault": true
}
	*/
	function postSystempromptResources(promptId, body){
		var apipath = '/api/v1/architect/systemprompts/{promptId}/resources';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postSystempromptResources = postSystempromptResources;
	/**
     * @summary Get a system prompt resource.
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {string} language - Language
	*/
	function getSystempromptResources(promptId, language){
		var apipath = '/api/v1/architect/systemprompts/{promptId}/resources/{language}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }

        apipath = apipath.replace('{language}', language);

        if(language === undefined && language !== null){
			throw 'Missing required  parameter: language';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSystempromptResources = getSystempromptResources;
	/**
     * @summary Delete a system prompt resource override.
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {string} language - Language
	*/
	function deleteSystempromptResources(promptId, language){
		var apipath = '/api/v1/architect/systemprompts/{promptId}/resources/{language}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }

        apipath = apipath.replace('{language}', language);

        if(language === undefined && language !== null){
			throw 'Missing required  parameter: language';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteSystempromptResources = deleteSystempromptResources;
	/**
     * @summary Get a pageable list of flows, filtered by query parameters
	 * @description Multiple IDs can be specified, in which case all matching flows will be returned, and no other parameters will be evaluated.
	 * @memberOf ArchitectApi#
	* @param {string} type - Type
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	* @param {array} id - ID
	* @param {string} name - Name
	* @param {string} description - Description
	* @param {string} nameOrDescription - Name or description
	* @param {string} publishVersionId - Publish version ID
	* @param {string} editableBy - Editable by
	* @param {string} lockedBy - Locked by
	* @param {boolean} doDeleted - Include deleted
	*/
	function getFlows(type, pageNumber, pageSize, sortBy, sortOrder, id, name, description, nameOrDescription, publishVersionId, editableBy, lockedBy, doDeleted){
		var apipath = '/api/v1/flows';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(type !== undefined && type !== null){
			queryParameters.type = type;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		if(id !== undefined && id !== null){
			queryParameters.id = id;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(description !== undefined && description !== null){
			queryParameters.description = description;
		}


		if(nameOrDescription !== undefined && nameOrDescription !== null){
			queryParameters.nameOrDescription = nameOrDescription;
		}


		if(publishVersionId !== undefined && publishVersionId !== null){
			queryParameters.publishVersionId = publishVersionId;
		}


		if(editableBy !== undefined && editableBy !== null){
			queryParameters.editableBy = editableBy;
		}


		if(lockedBy !== undefined && lockedBy !== null){
			queryParameters.lockedBy = lockedBy;
		}


		if(doDeleted !== undefined && doDeleted !== null){
			queryParameters.deleted = doDeleted;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFlows = getFlows;
	/**
     * @summary Create flow
	 * @memberOf ArchitectApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "type": "",
   "lockedUser": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "active": true,
   "deleted": true,
   "publishedVersion": {
      "name": "",
      "commitVersion": "",
      "configurationVersion": "",
      "type": "",
      "createdBy": {},
      "configurationUri": "",
      "dateCreated": 0,
      "generationId": "",
      "publishResultUri": ""
   },
   "checkedInVersion": {
      "name": "",
      "commitVersion": "",
      "configurationVersion": "",
      "type": "",
      "createdBy": {},
      "configurationUri": "",
      "dateCreated": 0,
      "generationId": "",
      "publishResultUri": ""
   },
   "savedVersion": {
      "name": "",
      "commitVersion": "",
      "configurationVersion": "",
      "type": "",
      "createdBy": {},
      "configurationUri": "",
      "dateCreated": 0,
      "generationId": "",
      "publishResultUri": ""
   },
   "system": true
}
	*/
	function postFlows(body){
		var apipath = '/api/v1/flows';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postFlows = postFlows;
	/**
     * @summary Batch-delete a list of flows
	 * @description Multiple IDs can be specified, in which case all specified flows will be deleted.
	 * @memberOf ArchitectApi#
	* @param {array} id - List of Flow IDs
	* @param {boolean} ignoreDependencies - Ignore Dependencies
	*/
	function deleteFlows(id, ignoreDependencies){
		var apipath = '/api/v1/flows';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(id !== undefined && id !== null){
			queryParameters.id = id;
		}

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(ignoreDependencies !== undefined && ignoreDependencies !== null){
			queryParameters.ignoreDependencies = ignoreDependencies;
		}


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteFlows = deleteFlows;
	/**
     * @summary Check-in flow
	 * @memberOf ArchitectApi#
	* @param {string} flow - Flow
	*/
	function postFlowsActionsCheckin(flow){
		var apipath = '/api/v1/flows/actions/checkin';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(flow !== undefined && flow !== null){
			queryParameters.flow = flow;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postFlowsActionsCheckin = postFlowsActionsCheckin;
	/**
     * @summary Check-out flow
	 * @memberOf ArchitectApi#
	* @param {string} flow - Flow
	*/
	function postFlowsActionsCheckout(flow){
		var apipath = '/api/v1/flows/actions/checkout';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(flow !== undefined && flow !== null){
			queryParameters.flow = flow;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postFlowsActionsCheckout = postFlowsActionsCheckout;
	/**
     * @summary Deactivate flow
	 * @memberOf ArchitectApi#
	* @param {string} flow - Flow
	*/
	function postFlowsActionsDeactivate(flow){
		var apipath = '/api/v1/flows/actions/deactivate';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(flow !== undefined && flow !== null){
			queryParameters.flow = flow;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postFlowsActionsDeactivate = postFlowsActionsDeactivate;
	/**
     * @summary Debug flow
	 * @memberOf ArchitectApi#
	* @param {string} flow - Flow
	* @param {string} version - 
	*/
	function postFlowsActionsDebug(flow, version){
		var apipath = '/api/v1/flows/actions/debug';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(flow !== undefined && flow !== null){
			queryParameters.flow = flow;
		}


		if(version !== undefined && version !== null){
			queryParameters.version = version;
		}

        if(version === undefined && version !== null){
			throw 'Missing required  parameter: version';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postFlowsActionsDebug = postFlowsActionsDebug;
	/**
     * @summary Revert flow
	 * @memberOf ArchitectApi#
	* @param {string} flow - Flow
	*/
	function postFlowsActionsRevert(flow){
		var apipath = '/api/v1/flows/actions/revert';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(flow !== undefined && flow !== null){
			queryParameters.flow = flow;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postFlowsActionsRevert = postFlowsActionsRevert;
	/**
     * @summary Get flow.
	 * @memberOf ArchitectApi#
	* @param {string} flowId - Flow ID
	* @param {string} doDeleted - Deleted
	*/
	function getFlow(flowId, doDeleted){
		var apipath = '/api/v1/flows/{flowId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{flowId}', flowId);

        if(flowId === undefined && flowId !== null){
			throw 'Missing required  parameter: flowId';
        }


		if(doDeleted !== undefined && doDeleted !== null){
			queryParameters.deleted = doDeleted;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFlow = getFlow;
	/**
     * @summary Update flow.
	 * @memberOf ArchitectApi#
	* @param {string} flowId - Flow ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "type": "",
   "lockedUser": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "active": true,
   "deleted": true,
   "publishedVersion": {
      "name": "",
      "commitVersion": "",
      "configurationVersion": "",
      "type": "",
      "createdBy": {},
      "configurationUri": "",
      "dateCreated": 0,
      "generationId": "",
      "publishResultUri": ""
   },
   "checkedInVersion": {
      "name": "",
      "commitVersion": "",
      "configurationVersion": "",
      "type": "",
      "createdBy": {},
      "configurationUri": "",
      "dateCreated": 0,
      "generationId": "",
      "publishResultUri": ""
   },
   "savedVersion": {
      "name": "",
      "commitVersion": "",
      "configurationVersion": "",
      "type": "",
      "createdBy": {},
      "configurationUri": "",
      "dateCreated": 0,
      "generationId": "",
      "publishResultUri": ""
   },
   "system": true
}
	*/
	function putFlow(flowId, body){
		var apipath = '/api/v1/flows/{flowId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{flowId}', flowId);

        if(flowId === undefined && flowId !== null){
			throw 'Missing required  parameter: flowId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putFlow = putFlow;
	/**
     * @summary Delete flow.
	 * @memberOf ArchitectApi#
	* @param {string} flowId - Flow ID
	*/
	function deleteFlow(flowId){
		var apipath = '/api/v1/flows/{flowId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{flowId}', flowId);

        if(flowId === undefined && flowId !== null){
			throw 'Missing required  parameter: flowId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteFlow = deleteFlow;
	/**
     * @summary Get the latest configuration for flow.
	 * @memberOf ArchitectApi#
	* @param {string} flowId - Flow ID
	* @param {string} doDeleted - Deleted
	*/
	function getFlowLatestconfiguration(flowId, doDeleted){
		var apipath = '/api/v1/flows/{flowId}/latestconfiguration';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{flowId}', flowId);

        if(flowId === undefined && flowId !== null){
			throw 'Missing required  parameter: flowId';
        }


		if(doDeleted !== undefined && doDeleted !== null){
			queryParameters.deleted = doDeleted;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFlowLatestconfiguration = getFlowLatestconfiguration;
	/**
     * @summary Get generation result.
	 * @memberOf ArchitectApi#
	* @param {string} flowId - Flow ID
	* @param {string} id - Publish Result ID
	*/
	function getFlowPublishedresults(flowId, id){
		var apipath = '/api/v1/flows/{flowId}/publishedresults/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{flowId}', flowId);

        if(flowId === undefined && flowId !== null){
			throw 'Missing required  parameter: flowId';
        }

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFlowPublishedresults = getFlowPublishedresults;
	/**
     * @summary Get flow version list
	 * @memberOf ArchitectApi#
	* @param {string} flowId - Flow ID
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} doDeleted - Deleted
	*/
	function getFlowVersions(flowId, pageNumber, pageSize, doDeleted){
		var apipath = '/api/v1/flows/{flowId}/versions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{flowId}', flowId);

        if(flowId === undefined && flowId !== null){
			throw 'Missing required  parameter: flowId';
        }


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(doDeleted !== undefined && doDeleted !== null){
			queryParameters.deleted = doDeleted;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFlowVersions = getFlowVersions;
	/**
     * @summary Create flow version
	 * @memberOf ArchitectApi#
	* @param {string} flowId - Flow ID
	* @param {} body - 
	*/
	function postFlowVersions(flowId, body){
		var apipath = '/api/v1/flows/{flowId}/versions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{flowId}', flowId);

        if(flowId === undefined && flowId !== null){
			throw 'Missing required  parameter: flowId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postFlowVersions = postFlowVersions;
	/**
     * @summary Get flow version
	 * @memberOf ArchitectApi#
	* @param {string} flowId - Flow ID
	* @param {string} versionId - Version ID
	* @param {string} doDeleted - Deleted
	*/
	function getFlowVersion(flowId, versionId, doDeleted){
		var apipath = '/api/v1/flows/{flowId}/versions/{versionId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{flowId}', flowId);

        if(flowId === undefined && flowId !== null){
			throw 'Missing required  parameter: flowId';
        }

        apipath = apipath.replace('{versionId}', versionId);

        if(versionId === undefined && versionId !== null){
			throw 'Missing required  parameter: versionId';
        }


		if(doDeleted !== undefined && doDeleted !== null){
			queryParameters.deleted = doDeleted;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFlowVersion = getFlowVersion;
	/**
     * @summary Create flow version configuration
	 * @memberOf ArchitectApi#
	* @param {string} flowId - Flow ID
	* @param {string} versionId - Version ID
	* @param {string} doDeleted - Deleted
	*/
	function getFlowVersionConfiguration(flowId, versionId, doDeleted){
		var apipath = '/api/v1/flows/{flowId}/versions/{versionId}/configuration';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{flowId}', flowId);

        if(flowId === undefined && flowId !== null){
			throw 'Missing required  parameter: flowId';
        }

        apipath = apipath.replace('{versionId}', versionId);

        if(versionId === undefined && versionId !== null){
			throw 'Missing required  parameter: versionId';
        }


		if(doDeleted !== undefined && doDeleted !== null){
			queryParameters.deleted = doDeleted;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFlowVersionConfiguration = getFlowVersionConfiguration;

    return self;
};
