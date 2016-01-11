/**
* @class
* @example
* var api = new ArchitectApi(pureCloudSession);
*/
var ArchitectApi = function (pureCloudSession) {
	/**
     * @summary Get Dependency Tracking objects that have a given display name
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} name - Object name to search for
	* @param {array} objectType - Object type(s) to search for
	* @param {boolean} consumedResources - Include resources each result item consumes
	* @param {boolean} consumingResources - Include resources that consume each result item
	* @param {array} consumedResourceType - Types of consumed resources to return, if consumed resources are requested
	* @param {array} consumingResourceType - Types of consuming resources to return, if consuming resources are requested
	*/
	function getDependencytracking(pageNumber, pageSize, name, objectType, consumedResources, consumingResources, consumedResourceType, consumingResourceType){
		var apipath = '/api/v1/architect/dependencytracking';
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


		if(objectType !== undefined && objectType !== null){
			queryParameters.objectType = objectType;
		}


		if(consumedResources !== undefined && consumedResources !== null){
			queryParameters.consumedResources = consumedResources;
		}


		if(consumingResources !== undefined && consumingResources !== null){
			queryParameters.consumingResources = consumingResources;
		}


		if(consumedResourceType !== undefined && consumedResourceType !== null){
			queryParameters.consumedResourceType = consumedResourceType;
		}


		if(consumingResourceType !== undefined && consumingResourceType !== null){
			queryParameters.consumingResourceType = consumingResourceType;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDependencytracking = getDependencytracking;
	/**
     * @summary Get Dependency Tracking build status for an organization
	 * @description 
	 * @memberOf ArchitectApi#
	*/
	function getDependencytrackingBuild(){
		var apipath = '/api/v1/architect/dependencytracking/build';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDependencytrackingBuild = getDependencytrackingBuild;
	/**
     * @summary Rebuild Dependency Tracking data for an organization
	 * @description 
	 * @memberOf ArchitectApi#
	*/
	function createDependencytrackingBuild(){
		var apipath = '/api/v1/architect/dependencytracking/build';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createDependencytrackingBuild = createDependencytrackingBuild;
	/**
     * @summary Get resources that are consumed by a given Dependency Tracking object
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} id - Consuming object ID
	* @param {string} version - Consuming object version
	* @param {string} objectType - Consuming object type
	ACDLANGUAGE,
	ACDSKILL,
	ACDWRAPUPCODE,
	BRIDGEACTION,
	COMPOSERSCRIPT,
	CONTACTLIST,
	INBOUNDCALLFLOW,
	INQUEUECALLFLOW,
	IVRCONFIGURATION,
	LANGUAGE,
	OUTBOUNDCALLFLOW,
	QUEUE,
	SYSTEMPROMPT,
	USER,
	USERPROMPT,
	VOICEXML,
	* @param {array} resourceType - Types of consumed resources to show
	*/
	function getDependencytrackingConsumedresources(id, version, objectType, resourceType){
		var apipath = '/api/v1/architect/dependencytracking/consumedresources';
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


		if(version !== undefined && version !== null){
			queryParameters.version = version;
		}

        if(version === undefined && version !== null){
			throw 'Missing required  parameter: version';
        }


		if(objectType !== undefined && objectType !== null){
			queryParameters.objectType = objectType;
		}

        if(objectType === undefined && objectType !== null){
			throw 'Missing required  parameter: objectType';
        }


		if(resourceType !== undefined && resourceType !== null){
			queryParameters.resourceType = resourceType;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDependencytrackingConsumedresources = getDependencytrackingConsumedresources;
	/**
     * @summary Get resources that consume a given Dependency Tracking object
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} id - Consumed object ID
	* @param {string} objectType - Consumed object type
	ACDLANGUAGE,
	ACDSKILL,
	ACDWRAPUPCODE,
	BRIDGEACTION,
	COMPOSERSCRIPT,
	CONTACTLIST,
	INBOUNDCALLFLOW,
	INQUEUECALLFLOW,
	IVRCONFIGURATION,
	LANGUAGE,
	OUTBOUNDCALLFLOW,
	QUEUE,
	SYSTEMPROMPT,
	USER,
	USERPROMPT,
	VOICEXML,
	* @param {array} resourceType - Types of consuming resources to show
	*/
	function getDependencytrackingConsumingresources(id, objectType, resourceType){
		var apipath = '/api/v1/architect/dependencytracking/consumingresources';
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


		if(objectType !== undefined && objectType !== null){
			queryParameters.objectType = objectType;
		}

        if(objectType === undefined && objectType !== null){
			throw 'Missing required  parameter: objectType';
        }


		if(resourceType !== undefined && resourceType !== null){
			queryParameters.resourceType = resourceType;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDependencytrackingConsumingresources = getDependencytrackingConsumingresources;
	/**
     * @summary Get Dependency Tracking objects that consume deleted resources
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} name - Name to search for
	* @param {array} objectType - Object type(s) to search for
	* @param {string} flowFilter - Show only checkedIn or published flows
	* @param {boolean} consumedResources - Return consumed resources?
	* @param {array} consumedResourceType - Resource type(s) to return
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	*/
	function getDependencytrackingDeletedresourceconsumers(name, objectType, flowFilter, consumedResources, consumedResourceType, pageNumber, pageSize){
		var apipath = '/api/v1/architect/dependencytracking/deletedresourceconsumers';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(objectType !== undefined && objectType !== null){
			queryParameters.objectType = objectType;
		}


		if(flowFilter !== undefined && flowFilter !== null){
			queryParameters.flowFilter = flowFilter;
		}


		if(consumedResources !== undefined && consumedResources !== null){
			queryParameters.consumedResources = consumedResources;
		}


		if(consumedResourceType !== undefined && consumedResourceType !== null){
			queryParameters.consumedResourceType = consumedResourceType;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDependencytrackingDeletedresourceconsumers = getDependencytrackingDeletedresourceconsumers;
	/**
     * @summary Get a Dependency Tracking object
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} id - Object ID
	* @param {string} version - Object version
	* @param {string} objectType - Object type
	ACDLANGUAGE,
	ACDSKILL,
	ACDWRAPUPCODE,
	BRIDGEACTION,
	COMPOSERSCRIPT,
	CONTACTLIST,
	INBOUNDCALLFLOW,
	INQUEUECALLFLOW,
	IVRCONFIGURATION,
	LANGUAGE,
	OUTBOUNDCALLFLOW,
	QUEUE,
	SYSTEMPROMPT,
	USER,
	USERPROMPT,
	VOICEXML,
	* @param {boolean} consumedResources - Include resources this item consumes
	* @param {boolean} consumingResources - Include resources that consume this item
	* @param {array} consumedResourceType - Types of consumed resources to return, if consumed resources are requested
	* @param {array} consumingResourceType - Types of consuming resources to return, if consuming resources are requested
	*/
	function getDependencytrackingObject(id, version, objectType, consumedResources, consumingResources, consumedResourceType, consumingResourceType){
		var apipath = '/api/v1/architect/dependencytracking/object';
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


		if(version !== undefined && version !== null){
			queryParameters.version = version;
		}


		if(objectType !== undefined && objectType !== null){
			queryParameters.objectType = objectType;
		}


		if(consumedResources !== undefined && consumedResources !== null){
			queryParameters.consumedResources = consumedResources;
		}


		if(consumingResources !== undefined && consumingResources !== null){
			queryParameters.consumingResources = consumingResources;
		}


		if(consumedResourceType !== undefined && consumedResourceType !== null){
			queryParameters.consumedResourceType = consumedResourceType;
		}


		if(consumingResourceType !== undefined && consumingResourceType !== null){
			queryParameters.consumingResourceType = consumingResourceType;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDependencytrackingObject = getDependencytrackingObject;
	/**
     * @summary Get Dependency Tracking types.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	*/
	function getDependencytrackingTypes(pageNumber, pageSize){
		var apipath = '/api/v1/architect/dependencytracking/types';
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


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDependencytrackingTypes = getDependencytrackingTypes;
	/**
     * @summary Get a Dependency Tracking type.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} typeId - Type ID
	*/
	function getDependencytrackingType(typeId){
		var apipath = '/api/v1/architect/dependencytracking/types/{typeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{typeId}', typeId);

        if(typeId === undefined && typeId !== null){
			throw 'Missing required  parameter: typeId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDependencytrackingType = getDependencytrackingType;
	/**
     * @summary Get IVR configs.
	 * @description 
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
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   },
   "selfUri": ""
}
	*/
	function createIvrs(body){
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
	self.createIvrs = createIvrs;
	/**
     * @summary Publish an IVR config.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} id - 
	*/
	function createIvrsActionsPublish(id){
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
	self.createIvrsActionsPublish = createIvrsActionsPublish;
	/**
     * @summary Get an IVR config.
	 * @description 
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
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} ivrId - IVR id
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   },
   "selfUri": ""
}
	*/
	function updateIvr(ivrId, body){
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
	self.updateIvr = updateIvr;
	/**
     * @summary Delete an IVR Config.
	 * @description 
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
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "description": "",
   "resources": [],
   "selfUri": ""
}
	*/
	function createPrompts(body){
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
	self.createPrompts = createPrompts;
	/**
     * @summary Get specified user prompt
	 * @description 
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
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "description": "",
   "resources": [],
   "selfUri": ""
}
	*/
	function updatePrompt(promptId, body){
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
	self.updatePrompt = updatePrompt;
	/**
     * @summary Delete specified user prompt
	 * @description 
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
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "promptId": "",
   "language": "",
   "mediaUri": "",
   "ttsString": "",
   "uploadStatus": "",
   "uploadUri": "",
   "durationSeconds": {},
   "selfUri": ""
}
	*/
	function createPromptResources(promptId, body){
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
	self.createPromptResources = createPromptResources;
	/**
     * @summary Get specified user prompt resource
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {string} language - Language
	*/
	function getPromptResourcesByLanguage(promptId, language){
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
	self.getPromptResourcesByLanguage = getPromptResourcesByLanguage;
	/**
     * @summary Update specified user prompt resource
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {string} language - Language
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "promptId": "",
   "language": "",
   "mediaUri": "",
   "ttsString": "",
   "uploadStatus": "",
   "uploadUri": "",
   "durationSeconds": {},
   "selfUri": ""
}
	*/
	function updatePromptResourcesByLanguage(promptId, language, body){
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
	self.updatePromptResourcesByLanguage = updatePromptResourcesByLanguage;
	/**
     * @summary Delete specified user prompt resource
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {string} language - Language
	*/
	function deletePromptResourcesByLanguage(promptId, language){
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
	self.deletePromptResourcesByLanguage = deletePromptResourcesByLanguage;
	/**
     * @summary Get a list of schedule groups.
	 * @description 
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
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "closedSchedules": [],
   "selfUri": ""
}
	*/
	function createSchedulegroups(body){
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
	self.createSchedulegroups = createSchedulegroups;
	/**
     * @summary Gets a schedule group by ID
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} scheduleGroupId - Schedule group ID
	*/
	function getScheduleGroup(scheduleGroupId){
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
	self.getScheduleGroup = getScheduleGroup;
	/**
     * @summary Updates a schedule group by ID
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} scheduleGroupId - Schedule group ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "closedSchedules": [],
   "selfUri": ""
}
	*/
	function updateScheduleGroup(scheduleGroupId, body){
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
	self.updateScheduleGroup = updateScheduleGroup;
	/**
     * @summary Deletes a schedule group by ID
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} scheduleGroupId - Schedule group ID
	*/
	function deleteScheduleGroup(scheduleGroupId){
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
	self.deleteScheduleGroup = deleteScheduleGroup;
	/**
     * @summary Get a list of schedules.
	 * @description 
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
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "start": {
      "year": 0,
      "dayOfMonth": 0,
      "dayOfWeek": 0,
      "era": 0,
      "dayOfYear": 0,
      "weekyear": 0,
      "chronology": {},
      "monthOfYear": 0,
      "millisOfDay": 0,
      "weekOfWeekyear": 0,
      "hourOfDay": 0,
      "minuteOfHour": 0,
      "secondOfMinute": 0,
      "millisOfSecond": 0,
      "yearOfEra": 0,
      "yearOfCentury": 0,
      "centuryOfEra": 0,
      "fieldTypes": [],
      "values": [],
      "fields": []
   },
   "end": {
      "year": 0,
      "dayOfMonth": 0,
      "dayOfWeek": 0,
      "era": 0,
      "dayOfYear": 0,
      "weekyear": 0,
      "chronology": {},
      "monthOfYear": 0,
      "millisOfDay": 0,
      "weekOfWeekyear": 0,
      "hourOfDay": 0,
      "minuteOfHour": 0,
      "secondOfMinute": 0,
      "millisOfSecond": 0,
      "yearOfEra": 0,
      "yearOfCentury": 0,
      "centuryOfEra": 0,
      "fieldTypes": [],
      "values": [],
      "fields": []
   },
   "rrule": "",
   "keywords": [],
   "selfUri": ""
}
	*/
	function createSchedules(body){
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
	self.createSchedules = createSchedules;
	/**
     * @summary Get a schedule by ID
	 * @description 
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
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} scheduleId - Schedule ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "start": {
      "year": 0,
      "dayOfMonth": 0,
      "dayOfWeek": 0,
      "era": 0,
      "dayOfYear": 0,
      "weekyear": 0,
      "chronology": {},
      "monthOfYear": 0,
      "millisOfDay": 0,
      "weekOfWeekyear": 0,
      "hourOfDay": 0,
      "minuteOfHour": 0,
      "secondOfMinute": 0,
      "millisOfSecond": 0,
      "yearOfEra": 0,
      "yearOfCentury": 0,
      "centuryOfEra": 0,
      "fieldTypes": [],
      "values": [],
      "fields": []
   },
   "end": {
      "year": 0,
      "dayOfMonth": 0,
      "dayOfWeek": 0,
      "era": 0,
      "dayOfYear": 0,
      "weekyear": 0,
      "chronology": {},
      "monthOfYear": 0,
      "millisOfDay": 0,
      "weekOfWeekyear": 0,
      "hourOfDay": 0,
      "minuteOfHour": 0,
      "secondOfMinute": 0,
      "millisOfSecond": 0,
      "yearOfEra": 0,
      "yearOfCentury": 0,
      "centuryOfEra": 0,
      "fieldTypes": [],
      "values": [],
      "fields": []
   },
   "rrule": "",
   "keywords": [],
   "selfUri": ""
}
	*/
	function updateSchedule(scheduleId, body){
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
	self.updateSchedule = updateSchedule;
	/**
     * @summary Delete a schedule by id
	 * @description 
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
	 * @description 
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
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} promptId - 
	*/
	function getSystempromptsPrompt(promptId){
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
	self.getSystempromptsPrompt = getSystempromptsPrompt;
	/**
     * @summary Get IVR System Prompt resources.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	*/
	function getSystempromptsPromptResources(promptId, pageNumber, pageSize, sortBy, sortOrder){
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
	self.getSystempromptsPromptResources = getSystempromptsPromptResources;
	/**
     * @summary Create system prompt resource override.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "promptId": "",
   "language": "",
   "durationSeconds": {},
   "mediaUri": "",
   "ttsString": "",
   "uploadUri": "",
   "uploadStatus": "",
   "hasDefault": true,
   "selfUri": ""
}
	*/
	function createSystempromptsPromptResources(promptId, body){
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
	self.createSystempromptsPromptResources = createSystempromptsPromptResources;
	/**
     * @summary Get a system prompt resource.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {string} language - Language
	*/
	function getSystempromptsPromptResourcesByLanguage(promptId, language){
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
	self.getSystempromptsPromptResourcesByLanguage = getSystempromptsPromptResourcesByLanguage;
	/**
     * @summary Delete a system prompt resource override.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {string} language - Language
	*/
	function deleteSystempromptsPromptResourcesByLanguage(promptId, language){
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
	self.deleteSystempromptsPromptResourcesByLanguage = deleteSystempromptsPromptResourcesByLanguage;
	/**
     * @summary Get IVR voice XML operations.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} name - Name
	* @param {string} description - Description
	* @param {string} nameOrDescription - Name or description
	* @param {string} method - Method
	* @param {string} type - Type
	*/
	function getVoicexmloperations(pageNumber, pageSize, name, description, nameOrDescription, method, type){
		var apipath = '/api/v1/architect/voicexmloperations';
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


		if(method !== undefined && method !== null){
			queryParameters.method = method;
		}


		if(type !== undefined && type !== null){
			queryParameters.type = type;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getVoicexmloperations = getVoicexmloperations;
	/**
     * @summary Create IVR voice XML operations.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "type": "",
   "method": "",
   "encoding": "",
   "description": "",
   "uri": "",
   "inputs": "",
   "outputs": "",
   "fetchAudio": "",
   "timeoutMS": 0,
   "selfUri": ""
}
	*/
	function createVoicexmloperations(body){
		var apipath = '/api/v1/architect/voicexmloperations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createVoicexmloperations = createVoicexmloperations;
	/**
     * @summary Get IVR voice XML operation.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} voiceXmlOperationId - Voice XML operation ID
	*/
	function getVoiceXmlOperation(voiceXmlOperationId){
		var apipath = '/api/v1/architect/voicexmloperations/{voiceXmlOperationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{voiceXmlOperationId}', voiceXmlOperationId);

        if(voiceXmlOperationId === undefined && voiceXmlOperationId !== null){
			throw 'Missing required  parameter: voiceXmlOperationId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getVoiceXmlOperation = getVoiceXmlOperation;
	/**
     * @summary Update IVR voice XML operation.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} voiceXmlOperationId - Voice XML operation ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "type": "",
   "method": "",
   "encoding": "",
   "description": "",
   "uri": "",
   "inputs": "",
   "outputs": "",
   "fetchAudio": "",
   "timeoutMS": 0,
   "selfUri": ""
}
	*/
	function updateVoiceXmlOperation(voiceXmlOperationId, body){
		var apipath = '/api/v1/architect/voicexmloperations/{voiceXmlOperationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{voiceXmlOperationId}', voiceXmlOperationId);

        if(voiceXmlOperationId === undefined && voiceXmlOperationId !== null){
			throw 'Missing required  parameter: voiceXmlOperationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateVoiceXmlOperation = updateVoiceXmlOperation;
	/**
     * @summary Delete IVR voice XML operation.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} voiceXmlOperationId - Voice XML operation ID
	*/
	function deleteVoiceXmlOperation(voiceXmlOperationId){
		var apipath = '/api/v1/architect/voicexmloperations/{voiceXmlOperationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{voiceXmlOperationId}', voiceXmlOperationId);

        if(voiceXmlOperationId === undefined && voiceXmlOperationId !== null){
			throw 'Missing required  parameter: voiceXmlOperationId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteVoiceXmlOperation = deleteVoiceXmlOperation;

    return self;
};
