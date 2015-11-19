if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.architect";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.architect = (function (PureCloud) {
	/**
	* @namespace architect/dependencytracking
	**/
	/**
	* @namespace architect/dependencytracking/build
	**/
	/**
	* @namespace architect/dependencytracking/consumedresources
	**/
	/**
	* @namespace architect/dependencytracking/consumingresources
	**/
	/**
	* @namespace architect/dependencytracking/deletedresourceconsumers
	**/
	/**
	* @namespace architect/dependencytracking/object
	**/
	/**
	* @namespace architect/dependencytracking/types
	**/
	/**
	* @namespace architect/ivrs
	**/
	/**
	* @namespace architect/ivrs/actions/publish
	**/
	/**
	* @namespace architect/prompts
	**/
	/**
	* @namespace architect/prompts/resources
	**/
	/**
	* @namespace architect/schedulegroups
	**/
	/**
	* @namespace architect/schedules
	**/
	/**
	* @namespace architect/systemprompts
	**/
	/**
	* @namespace architect/systemprompts/resources
	**/
	/**
	* @namespace architect/voicexmloperations
	**/

	var self = {};
	self.dependencytracking = self.dependencytracking || {};

	/**
     * 
     * @method getDependencyTrackingObjectsThatHaveAGivenDisplayName
	 * @memberof architect/dependencytracking

	* @param {integer} pageNumber - Page number

	* @param {integer} pageSize - Page size

	* @param {string} name - Object name to search for

	* @param {array} objectType - Object type(s) to search for

	* @param {boolean} consumedResources - Include resources each result item consumes

	* @param {boolean} consumingResources - Include resources that consume each result item

	* @param {array} consumedResourceType - Types of consumed resources to return, if consumed resources are requested

	* @param {array} consumingResourceType - Types of consuming resources to return, if consuming resources are requested
	 *
     */
     self.dependencytracking.getDependencyTrackingObjectsThatHaveAGivenDisplayName = function(pageNumber, pageSize, name, objectType, consumedResources, consumingResources, consumedResourceType, consumingResourceType){
		var path = '/api/v1/architect/dependencytracking';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.dependencytracking = self.dependencytracking || {};
	self.dependencytracking.build = self.dependencytracking.build || {};

	/**
     * 
     * @method getDependencyTrackingBuildStatusForAnOrganization
	 * @memberof architect/dependencytracking/build
	 *
     */
     self.dependencytracking.build.getDependencyTrackingBuildStatusForAnOrganization = function(){
		var path = '/api/v1/architect/dependencytracking/build';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.dependencytracking = self.dependencytracking || {};
	self.dependencytracking.build = self.dependencytracking.build || {};

	/**
     * 
     * @method rebuildDependencyTrackingDataForAnOrganization
	 * @memberof architect/dependencytracking/build
	 *
     */
     self.dependencytracking.build.rebuildDependencyTrackingDataForAnOrganization = function(){
		var path = '/api/v1/architect/dependencytracking/build';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.dependencytracking = self.dependencytracking || {};
	self.dependencytracking.consumedresources = self.dependencytracking.consumedresources || {};

	/**
     * 
     * @method getResourcesThatAreConsumedByAGivenDependencyTrackingObject
	 * @memberof architect/dependencytracking/consumedresources

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
	LANGUAGE,
	OUTBOUNDCALLFLOW,
	QUEUE,
	SYSTEMPROMPT,
	USER,
	USERPROMPT,
	VOICEXML,

	* @param {array} resourceType - Types of consumed resources to show
	 *
     */
     self.dependencytracking.consumedresources.getResourcesThatAreConsumedByAGivenDependencyTrackingObject = function(id, version, objectType, resourceType){
		var path = '/api/v1/architect/dependencytracking/consumedresources';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.dependencytracking = self.dependencytracking || {};
	self.dependencytracking.consumingresources = self.dependencytracking.consumingresources || {};

	/**
     * 
     * @method getResourcesThatConsumeAGivenDependencyTrackingObject
	 * @memberof architect/dependencytracking/consumingresources

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
	LANGUAGE,
	OUTBOUNDCALLFLOW,
	QUEUE,
	SYSTEMPROMPT,
	USER,
	USERPROMPT,
	VOICEXML,

	* @param {array} resourceType - Types of consuming resources to show
	 *
     */
     self.dependencytracking.consumingresources.getResourcesThatConsumeAGivenDependencyTrackingObject = function(id, objectType, resourceType){
		var path = '/api/v1/architect/dependencytracking/consumingresources';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.dependencytracking = self.dependencytracking || {};
	self.dependencytracking.deletedresourceconsumers = self.dependencytracking.deletedresourceconsumers || {};

	/**
     * 
     * @method getDependencyTrackingObjectsThatConsumeDeletedResources
	 * @memberof architect/dependencytracking/deletedresourceconsumers

	* @param {string} name - Name to search for

	* @param {array} objectType - Object type(s) to search for

	* @param {string} flowFilter - Show only checkedIn or published flows

	* @param {boolean} consumedResources - Return consumed resources?

	* @param {array} consumedResourceType - Resource type(s) to return

	* @param {integer} pageNumber - Page number

	* @param {integer} pageSize - Page size
	 *
     */
     self.dependencytracking.deletedresourceconsumers.getDependencyTrackingObjectsThatConsumeDeletedResources = function(name, objectType, flowFilter, consumedResources, consumedResourceType, pageNumber, pageSize){
		var path = '/api/v1/architect/dependencytracking/deletedresourceconsumers';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.dependencytracking = self.dependencytracking || {};
	self.dependencytracking.object = self.dependencytracking.object || {};

	/**
     * 
     * @method getADependencyTrackingObject
	 * @memberof architect/dependencytracking/object

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
	 *
     */
     self.dependencytracking.object.getADependencyTrackingObject = function(id, version, objectType, consumedResources, consumingResources, consumedResourceType, consumingResourceType){
		var path = '/api/v1/architect/dependencytracking/object';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.dependencytracking = self.dependencytracking || {};
	self.dependencytracking.types = self.dependencytracking.types || {};

	/**
     * 
     * @method getDependencyTrackingTypes
	 * @memberof architect/dependencytracking/types

	* @param {integer} pageNumber - Page number

	* @param {integer} pageSize - Page size
	 *
     */
     self.dependencytracking.types.getDependencyTrackingTypes = function(pageNumber, pageSize){
		var path = '/api/v1/architect/dependencytracking/types';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.dependencytracking = self.dependencytracking || {};
	self.dependencytracking.types = self.dependencytracking.types || {};

	/**
     * 
     * @method getADependencyTrackingType
	 * @memberof architect/dependencytracking/types

	* @param {string} typeId - Type ID
	 *
     */
     self.dependencytracking.types.getADependencyTrackingType = function(typeId){
		var path = '/api/v1/architect/dependencytracking/types/{typeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{typeId}', typeId);

        if(typeId === undefined && typeId !== null){
			throw 'Missing required  parameter: typeId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.ivrs = self.ivrs || {};

	/**
     * 
     * @method getIvrConfigs
	 * @memberof architect/ivrs

	* @param {integer} pageNumber - Page number

	* @param {integer} pageSize - Page size

	* @param {string} sortBy - Sort by

	* @param {string} sortOrder - Sort order
	 *
     */
     self.ivrs.getIvrConfigs = function(pageNumber, pageSize, sortBy, sortOrder){
		var path = '/api/v1/architect/ivrs';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.ivrs = self.ivrs || {};

	/**
     * 
     * @method createIvrConfig
	 * @memberof architect/ivrs

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
	 *
     */
     self.ivrs.createIvrConfig = function(body){
		var path = '/api/v1/architect/ivrs';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.ivrs = self.ivrs || {};
	self.ivrs.actions = self.ivrs.actions || {};
	self.ivrs.actions.publish = self.ivrs.actions.publish || {};

	/**
     * 
     * @method publishIvrConfigAction
	 * @memberof architect/ivrs/actions/publish

	* @param {string} id - 
	 *
     */
     self.ivrs.actions.publish.publishIvrConfigAction = function(id){
		var path = '/api/v1/architect/ivrs/actions/publish';
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



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.ivrs = self.ivrs || {};

	/**
     * 
     * @method getIvrConfig
	 * @memberof architect/ivrs

	* @param {string} ivrId - IVR id
	 *
     */
     self.ivrs.getIvrConfig = function(ivrId){
		var path = '/api/v1/architect/ivrs/{ivrId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{ivrId}', ivrId);

        if(ivrId === undefined && ivrId !== null){
			throw 'Missing required  parameter: ivrId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.ivrs = self.ivrs || {};

	/**
     * 
     * @method updateIvrConfig
	 * @memberof architect/ivrs

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
	 *
     */
     self.ivrs.updateIvrConfig = function(ivrId, body){
		var path = '/api/v1/architect/ivrs/{ivrId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{ivrId}', ivrId);

        if(ivrId === undefined && ivrId !== null){
			throw 'Missing required  parameter: ivrId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.ivrs = self.ivrs || {};

	/**
     * 
     * @method deleteIvrConfig
	 * @memberof architect/ivrs

	* @param {string} ivrId - IVR id
	 *
     */
     self.ivrs.deleteIvrConfig = function(ivrId){
		var path = '/api/v1/architect/ivrs/{ivrId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{ivrId}', ivrId);

        if(ivrId === undefined && ivrId !== null){
			throw 'Missing required  parameter: ivrId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.prompts = self.prompts || {};

	/**
     * The returned list is pageable, and query parameters can be used for filtering.  Multiple names can be specified, in which case all matching prompts will be returned, and no other filters will be evaluated.
     * @method getUserPrompts
	 * @memberof architect/prompts

	* @param {integer} pageNumber - Page number

	* @param {integer} pageSize - Page size

	* @param {string} name - Name

	* @param {string} description - Description

	* @param {string} nameOrDescription - Name or description
	 *
     */
     self.prompts.getUserPrompts = function(pageNumber, pageSize, name, description, nameOrDescription){
		var path = '/api/v1/architect/prompts';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.prompts = self.prompts || {};

	/**
     * 
     * @method createUserPrompt
	 * @memberof architect/prompts

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
	 *
     */
     self.prompts.createUserPrompt = function(body){
		var path = '/api/v1/architect/prompts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.prompts = self.prompts || {};

	/**
     * 
     * @method getUserPrompt
	 * @memberof architect/prompts

	* @param {string} promptId - Prompt ID
	 *
     */
     self.prompts.getUserPrompt = function(promptId){
		var path = '/api/v1/architect/prompts/{promptId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.prompts = self.prompts || {};

	/**
     * 
     * @method updateUserPrompt
	 * @memberof architect/prompts

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
	 *
     */
     self.prompts.updateUserPrompt = function(promptId, body){
		var path = '/api/v1/architect/prompts/{promptId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.prompts = self.prompts || {};

	/**
     * 
     * @method deleteUserPrompt
	 * @memberof architect/prompts

	* @param {string} promptId - Prompt ID
	 *
     */
     self.prompts.deleteUserPrompt = function(promptId){
		var path = '/api/v1/architect/prompts/{promptId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.prompts = self.prompts || {};
	self.prompts.resources = self.prompts.resources || {};

	/**
     * The returned list is pageable, and query paramaters can be used for filtering.
     * @method getUserPromptResources
	 * @memberof architect/prompts/resources

	* @param {string} promptId - Prompt ID

	* @param {integer} pageNumber - Page number

	* @param {integer} pageSize - Page size
	 *
     */
     self.prompts.resources.getUserPromptResources = function(promptId, pageNumber, pageSize){
		var path = '/api/v1/architect/prompts/{promptId}/resources';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.prompts = self.prompts || {};
	self.prompts.resources = self.prompts.resources || {};

	/**
     * 
     * @method createUserPromptResource
	 * @memberof architect/prompts/resources

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
	 *
     */
     self.prompts.resources.createUserPromptResource = function(promptId, body){
		var path = '/api/v1/architect/prompts/{promptId}/resources';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.prompts = self.prompts || {};
	self.prompts.resources = self.prompts.resources || {};

	/**
     * 
     * @method getUserPromptResource
	 * @memberof architect/prompts/resources

	* @param {string} promptId - Prompt ID

	* @param {string} language - Language
	 *
     */
     self.prompts.resources.getUserPromptResource = function(promptId, language){
		var path = '/api/v1/architect/prompts/{promptId}/resources/{language}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }

        path = path.replace('{language}', language);

        if(language === undefined && language !== null){
			throw 'Missing required  parameter: language';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.prompts = self.prompts || {};
	self.prompts.resources = self.prompts.resources || {};

	/**
     * 
     * @method updateUserPromptResource
	 * @memberof architect/prompts/resources

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
	 *
     */
     self.prompts.resources.updateUserPromptResource = function(promptId, language, body){
		var path = '/api/v1/architect/prompts/{promptId}/resources/{language}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }

        path = path.replace('{language}', language);

        if(language === undefined && language !== null){
			throw 'Missing required  parameter: language';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.prompts = self.prompts || {};
	self.prompts.resources = self.prompts.resources || {};

	/**
     * 
     * @method deleteUserPromptResource
	 * @memberof architect/prompts/resources

	* @param {string} promptId - Prompt ID

	* @param {string} language - Language
	 *
     */
     self.prompts.resources.deleteUserPromptResource = function(promptId, language){
		var path = '/api/v1/architect/prompts/{promptId}/resources/{language}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }

        path = path.replace('{language}', language);

        if(language === undefined && language !== null){
			throw 'Missing required  parameter: language';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.schedulegroups = self.schedulegroups || {};

	/**
     * 
     * @method getAListOfScheduleGroups
	 * @memberof architect/schedulegroups

	* @param {integer} pageNumber - Page number

	* @param {integer} pageSize - Page size

	* @param {string} sortBy - Sort by

	* @param {string} sortOrder - Sort order
	 *
     */
     self.schedulegroups.getAListOfScheduleGroups = function(pageNumber, pageSize, sortBy, sortOrder){
		var path = '/api/v1/architect/schedulegroups';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.schedulegroups = self.schedulegroups || {};

	/**
     * 
     * @method createANewScheduleGroup
	 * @memberof architect/schedulegroups

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
	 *
     */
     self.schedulegroups.createANewScheduleGroup = function(body){
		var path = '/api/v1/architect/schedulegroups';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.schedulegroups = self.schedulegroups || {};

	/**
     * 
     * @method getScheduleGroup
	 * @memberof architect/schedulegroups

	* @param {string} scheduleGroupId - Schedule group ID
	 *
     */
     self.schedulegroups.getScheduleGroup = function(scheduleGroupId){
		var path = '/api/v1/architect/schedulegroups/{scheduleGroupId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{scheduleGroupId}', scheduleGroupId);

        if(scheduleGroupId === undefined && scheduleGroupId !== null){
			throw 'Missing required  parameter: scheduleGroupId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.schedulegroups = self.schedulegroups || {};

	/**
     * 
     * @method updateScheduleGroup
	 * @memberof architect/schedulegroups

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
	 *
     */
     self.schedulegroups.updateScheduleGroup = function(scheduleGroupId, body){
		var path = '/api/v1/architect/schedulegroups/{scheduleGroupId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{scheduleGroupId}', scheduleGroupId);

        if(scheduleGroupId === undefined && scheduleGroupId !== null){
			throw 'Missing required  parameter: scheduleGroupId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.schedulegroups = self.schedulegroups || {};

	/**
     * 
     * @method deleteScheduleGroup
	 * @memberof architect/schedulegroups

	* @param {string} scheduleGroupId - Schedule group ID
	 *
     */
     self.schedulegroups.deleteScheduleGroup = function(scheduleGroupId){
		var path = '/api/v1/architect/schedulegroups/{scheduleGroupId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{scheduleGroupId}', scheduleGroupId);

        if(scheduleGroupId === undefined && scheduleGroupId !== null){
			throw 'Missing required  parameter: scheduleGroupId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.schedules = self.schedules || {};

	/**
     * 
     * @method getSchedules
	 * @memberof architect/schedules

	* @param {integer} pageNumber - Page number

	* @param {integer} pageSize - Page size

	* @param {string} sortBy - Sort by

	* @param {string} sortOrder - Sort order
	 *
     */
     self.schedules.getSchedules = function(pageNumber, pageSize, sortBy, sortOrder){
		var path = '/api/v1/architect/schedules';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.schedules = self.schedules || {};

	/**
     * 
     * @method createANewSchedule
	 * @memberof architect/schedules

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
      "weekOfWeekyear": 0,
      "weekyear": 0,
      "chronology": {},
      "monthOfYear": 0,
      "hourOfDay": 0,
      "minuteOfHour": 0,
      "secondOfMinute": 0,
      "millisOfSecond": 0,
      "yearOfEra": 0,
      "yearOfCentury": 0,
      "centuryOfEra": 0,
      "millisOfDay": 0,
      "fields": [],
      "values": [],
      "fieldTypes": []
   },
   "end": {
      "year": 0,
      "dayOfMonth": 0,
      "dayOfWeek": 0,
      "era": 0,
      "dayOfYear": 0,
      "weekOfWeekyear": 0,
      "weekyear": 0,
      "chronology": {},
      "monthOfYear": 0,
      "hourOfDay": 0,
      "minuteOfHour": 0,
      "secondOfMinute": 0,
      "millisOfSecond": 0,
      "yearOfEra": 0,
      "yearOfCentury": 0,
      "centuryOfEra": 0,
      "millisOfDay": 0,
      "fields": [],
      "values": [],
      "fieldTypes": []
   },
   "rrule": "",
   "keywords": [],
   "selfUri": ""
}
	 *
     */
     self.schedules.createANewSchedule = function(body){
		var path = '/api/v1/architect/schedules';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.schedules = self.schedules || {};

	/**
     * 
     * @method getASchedule
	 * @memberof architect/schedules

	* @param {string} scheduleId - Schedule ID
	 *
     */
     self.schedules.getASchedule = function(scheduleId){
		var path = '/api/v1/architect/schedules/{scheduleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{scheduleId}', scheduleId);

        if(scheduleId === undefined && scheduleId !== null){
			throw 'Missing required  parameter: scheduleId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.schedules = self.schedules || {};

	/**
     * 
     * @method updateSchedule
	 * @memberof architect/schedules

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
      "weekOfWeekyear": 0,
      "weekyear": 0,
      "chronology": {},
      "monthOfYear": 0,
      "hourOfDay": 0,
      "minuteOfHour": 0,
      "secondOfMinute": 0,
      "millisOfSecond": 0,
      "yearOfEra": 0,
      "yearOfCentury": 0,
      "centuryOfEra": 0,
      "millisOfDay": 0,
      "fields": [],
      "values": [],
      "fieldTypes": []
   },
   "end": {
      "year": 0,
      "dayOfMonth": 0,
      "dayOfWeek": 0,
      "era": 0,
      "dayOfYear": 0,
      "weekOfWeekyear": 0,
      "weekyear": 0,
      "chronology": {},
      "monthOfYear": 0,
      "hourOfDay": 0,
      "minuteOfHour": 0,
      "secondOfMinute": 0,
      "millisOfSecond": 0,
      "yearOfEra": 0,
      "yearOfCentury": 0,
      "centuryOfEra": 0,
      "millisOfDay": 0,
      "fields": [],
      "values": [],
      "fieldTypes": []
   },
   "rrule": "",
   "keywords": [],
   "selfUri": ""
}
	 *
     */
     self.schedules.updateSchedule = function(scheduleId, body){
		var path = '/api/v1/architect/schedules/{scheduleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{scheduleId}', scheduleId);

        if(scheduleId === undefined && scheduleId !== null){
			throw 'Missing required  parameter: scheduleId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.schedules = self.schedules || {};

	/**
     * 
     * @method deleteSchedule
	 * @memberof architect/schedules

	* @param {string} scheduleId - Schedule ID
	 *
     */
     self.schedules.deleteSchedule = function(scheduleId){
		var path = '/api/v1/architect/schedules/{scheduleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{scheduleId}', scheduleId);

        if(scheduleId === undefined && scheduleId !== null){
			throw 'Missing required  parameter: scheduleId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.systemprompts = self.systemprompts || {};

	/**
     * 
     * @method getSystemPrompts
	 * @memberof architect/systemprompts

	* @param {integer} pageNumber - Page number

	* @param {integer} pageSize - Page size

	* @param {string} sortBy - Sort by

	* @param {string} sortOrder - Sort order

	* @param {string} name - Name

	* @param {string} description - Description

	* @param {string} nameOrDescription - Name or description
	 *
     */
     self.systemprompts.getSystemPrompts = function(pageNumber, pageSize, sortBy, sortOrder, name, description, nameOrDescription){
		var path = '/api/v1/architect/systemprompts';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.systemprompts = self.systemprompts || {};

	/**
     * 
     * @method getSystemPrompt
	 * @memberof architect/systemprompts

	* @param {string} promptId - 
	 *
     */
     self.systemprompts.getSystemPrompt = function(promptId){
		var path = '/api/v1/architect/systemprompts/{promptId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.systemprompts = self.systemprompts || {};
	self.systemprompts.resources = self.systemprompts.resources || {};

	/**
     * 
     * @method getSystemPromptResources
	 * @memberof architect/systemprompts/resources

	* @param {string} promptId - Prompt ID

	* @param {integer} pageNumber - Page number

	* @param {integer} pageSize - Page size

	* @param {string} sortBy - Sort by

	* @param {string} sortOrder - Sort order
	 *
     */
     self.systemprompts.resources.getSystemPromptResources = function(promptId, pageNumber, pageSize, sortBy, sortOrder){
		var path = '/api/v1/architect/systemprompts/{promptId}/resources';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{promptId}', promptId);

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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.systemprompts = self.systemprompts || {};
	self.systemprompts.resources = self.systemprompts.resources || {};

	/**
     * 
     * @method createSystemPromptResourceOverride
	 * @memberof architect/systemprompts/resources

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
	 *
     */
     self.systemprompts.resources.createSystemPromptResourceOverride = function(promptId, body){
		var path = '/api/v1/architect/systemprompts/{promptId}/resources';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.systemprompts = self.systemprompts || {};
	self.systemprompts.resources = self.systemprompts.resources || {};

	/**
     * 
     * @method getSystemPromptResource
	 * @memberof architect/systemprompts/resources

	* @param {string} promptId - Prompt ID

	* @param {string} language - Language
	 *
     */
     self.systemprompts.resources.getSystemPromptResource = function(promptId, language){
		var path = '/api/v1/architect/systemprompts/{promptId}/resources/{language}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }

        path = path.replace('{language}', language);

        if(language === undefined && language !== null){
			throw 'Missing required  parameter: language';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.systemprompts = self.systemprompts || {};
	self.systemprompts.resources = self.systemprompts.resources || {};

	/**
     * 
     * @method deleteSystemPromptResourceOverride
	 * @memberof architect/systemprompts/resources

	* @param {string} promptId - Prompt ID

	* @param {string} language - Language
	 *
     */
     self.systemprompts.resources.deleteSystemPromptResourceOverride = function(promptId, language){
		var path = '/api/v1/architect/systemprompts/{promptId}/resources/{language}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }

        path = path.replace('{language}', language);

        if(language === undefined && language !== null){
			throw 'Missing required  parameter: language';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.voicexmloperations = self.voicexmloperations || {};

	/**
     * 
     * @method getVoicexmlOperations
	 * @memberof architect/voicexmloperations

	* @param {integer} pageNumber - Page number

	* @param {integer} pageSize - Page size

	* @param {string} name - Name

	* @param {string} description - Description

	* @param {string} nameOrDescription - Name or description

	* @param {string} method - Method

	* @param {string} type - Type
	 *
     */
     self.voicexmloperations.getVoicexmlOperations = function(pageNumber, pageSize, name, description, nameOrDescription, method, type){
		var path = '/api/v1/architect/voicexmloperations';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.voicexmloperations = self.voicexmloperations || {};

	/**
     * 
     * @method createVoicexmlOperation
	 * @memberof architect/voicexmloperations

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
	 *
     */
     self.voicexmloperations.createVoicexmlOperation = function(body){
		var path = '/api/v1/architect/voicexmloperations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.voicexmloperations = self.voicexmloperations || {};

	/**
     * 
     * @method getVoicexmlOperation
	 * @memberof architect/voicexmloperations

	* @param {string} voiceXmlOperationId - Voice XML operation ID
	 *
     */
     self.voicexmloperations.getVoicexmlOperation = function(voiceXmlOperationId){
		var path = '/api/v1/architect/voicexmloperations/{voiceXmlOperationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{voiceXmlOperationId}', voiceXmlOperationId);

        if(voiceXmlOperationId === undefined && voiceXmlOperationId !== null){
			throw 'Missing required  parameter: voiceXmlOperationId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.voicexmloperations = self.voicexmloperations || {};

	/**
     * 
     * @method updateVoicexmlOperation
	 * @memberof architect/voicexmloperations

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
	 *
     */
     self.voicexmloperations.updateVoicexmlOperation = function(voiceXmlOperationId, body){
		var path = '/api/v1/architect/voicexmloperations/{voiceXmlOperationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{voiceXmlOperationId}', voiceXmlOperationId);

        if(voiceXmlOperationId === undefined && voiceXmlOperationId !== null){
			throw 'Missing required  parameter: voiceXmlOperationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.voicexmloperations = self.voicexmloperations || {};

	/**
     * 
     * @method deleteVoicexmlOperation
	 * @memberof architect/voicexmloperations

	* @param {string} voiceXmlOperationId - Voice XML operation ID
	 *
     */
     self.voicexmloperations.deleteVoicexmlOperation = function(voiceXmlOperationId){
		var path = '/api/v1/architect/voicexmloperations/{voiceXmlOperationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{voiceXmlOperationId}', voiceXmlOperationId);

        if(voiceXmlOperationId === undefined && voiceXmlOperationId !== null){
			throw 'Missing required  parameter: voiceXmlOperationId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
