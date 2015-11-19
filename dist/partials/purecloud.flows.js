if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.flows";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.flows = (function (PureCloud) {
	/**
	* @namespace flows
	**/
	/**
	* @namespace flows/actions/checkin
	**/
	/**
	* @namespace flows/actions/checkout
	**/
	/**
	* @namespace flows/actions/deactivate
	**/
	/**
	* @namespace flows/actions/debug
	**/
	/**
	* @namespace flows/actions/publish
	**/
	/**
	* @namespace flows/actions/revert
	**/
	/**
	* @namespace flows/latestconfiguration
	**/
	/**
	* @namespace flows/publishedresults
	**/
	/**
	* @namespace flows/versions
	**/
	/**
	* @namespace flows/versions/configuration
	**/

	var self = {};

	/**
     * Multiple IDs can be specified, in which case all matching flows will be returned, and no other parameters will be evaluated.
     * @method getFlows
	 * @memberof flows

	* @param {string} type - 

	* @param {integer} pageNumber - Page number

	* @param {integer} pageSize - Page size

	* @param {string} sortBy - Sort by

	* @param {string} sortOrder - Sort order

	* @param {array} id - ID

	* @param {string} name - Name

	* @param {string} description - Description

	* @param {string} nameOrDescription - Name or description

	* @param {string} publishVersionId - Publish version ID

	* @param {string} lockedBy - Locked by
	 *
     */
     self.getFlows = function(type, pageNumber, pageSize, sortBy, sortOrder, id, name, description, nameOrDescription, publishVersionId, lockedBy){
		var path = '/api/v1/flows';
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


		if(lockedBy !== undefined && lockedBy !== null){
			queryParameters.lockedBy = lockedBy;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	/**
     * 
     * @method createFlow
	 * @memberof flows

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
      "id": "",
      "name": "",
      "commitVersion": "",
      "configurationVersion": "",
      "type": "",
      "createdBy": {},
      "configurationUri": "",
      "dateCreated": 0,
      "generationId": "",
      "publishResultUri": "",
      "selfUri": ""
   },
   "checkedInVersion": {
      "id": "",
      "name": "",
      "commitVersion": "",
      "configurationVersion": "",
      "type": "",
      "createdBy": {},
      "configurationUri": "",
      "dateCreated": 0,
      "generationId": "",
      "publishResultUri": "",
      "selfUri": ""
   },
   "savedVersion": {
      "id": "",
      "name": "",
      "commitVersion": "",
      "configurationVersion": "",
      "type": "",
      "createdBy": {},
      "configurationUri": "",
      "dateCreated": 0,
      "generationId": "",
      "publishResultUri": "",
      "selfUri": ""
   },
   "system": true,
   "selfUri": ""
}
	 *
     */
     self.createFlow = function(body){
		var path = '/api/v1/flows';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.actions = self.actions || {};
	self.actions.checkin = self.actions.checkin || {};

	/**
     * 
     * @method checkinFlow
	 * @memberof flows/actions/checkin

	* @param {string} flow - 
	 *
     */
     self.actions.checkin.checkinFlow = function(flow){
		var path = '/api/v1/flows/actions/checkin';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(flow !== undefined && flow !== null){
			queryParameters.flow = flow;
		}



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.actions = self.actions || {};
	self.actions.checkout = self.actions.checkout || {};

	/**
     * 
     * @method checkoutFlow
	 * @memberof flows/actions/checkout

	* @param {string} flow - 
	 *
     */
     self.actions.checkout.checkoutFlow = function(flow){
		var path = '/api/v1/flows/actions/checkout';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(flow !== undefined && flow !== null){
			queryParameters.flow = flow;
		}



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.actions = self.actions || {};
	self.actions.deactivate = self.actions.deactivate || {};

	/**
     * 
     * @method deactivateFlow
	 * @memberof flows/actions/deactivate

	* @param {string} flow - 
	 *
     */
     self.actions.deactivate.deactivateFlow = function(flow){
		var path = '/api/v1/flows/actions/deactivate';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(flow !== undefined && flow !== null){
			queryParameters.flow = flow;
		}



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.actions = self.actions || {};
	self.actions.debug = self.actions.debug || {};

	/**
     * 
     * @method debugFlow
	 * @memberof flows/actions/debug

	* @param {string} flow - 

	* @param {string} version - 
	 *
     */
     self.actions.debug.debugFlow = function(flow, version){
		var path = '/api/v1/flows/actions/debug';
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



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.actions = self.actions || {};
	self.actions.publish = self.actions.publish || {};

	/**
     * 
     * @method publishFlow
	 * @memberof flows/actions/publish

	* @param {string} flow - 

	* @param {string} version - 
	 *
     */
     self.actions.publish.publishFlow = function(flow, version){
		var path = '/api/v1/flows/actions/publish';
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



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.actions = self.actions || {};
	self.actions.revert = self.actions.revert || {};

	/**
     * 
     * @method revertFlow
	 * @memberof flows/actions/revert

	* @param {string} flow - 
	 *
     */
     self.actions.revert.revertFlow = function(flow){
		var path = '/api/v1/flows/actions/revert';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(flow !== undefined && flow !== null){
			queryParameters.flow = flow;
		}



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };

	/**
     * 
     * @method getFlow
	 * @memberof flows

	* @param {string} flowId - Flow ID

	* @param {string} doDeleted - Deleted
	 *
     */
     self.getFlow = function(flowId, doDeleted){
		var path = '/api/v1/flows/{flowId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{flowId}', flowId);

        if(flowId === undefined && flowId !== null){
			throw 'Missing required  parameter: flowId';
        }


		if(doDeleted !== undefined && doDeleted !== null){
			queryParameters.deleted = doDeleted;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	/**
     * 
     * @method updateFlow
	 * @memberof flows

	* @param {string} flowId - Flow ID

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
      "id": "",
      "name": "",
      "commitVersion": "",
      "configurationVersion": "",
      "type": "",
      "createdBy": {},
      "configurationUri": "",
      "dateCreated": 0,
      "generationId": "",
      "publishResultUri": "",
      "selfUri": ""
   },
   "checkedInVersion": {
      "id": "",
      "name": "",
      "commitVersion": "",
      "configurationVersion": "",
      "type": "",
      "createdBy": {},
      "configurationUri": "",
      "dateCreated": 0,
      "generationId": "",
      "publishResultUri": "",
      "selfUri": ""
   },
   "savedVersion": {
      "id": "",
      "name": "",
      "commitVersion": "",
      "configurationVersion": "",
      "type": "",
      "createdBy": {},
      "configurationUri": "",
      "dateCreated": 0,
      "generationId": "",
      "publishResultUri": "",
      "selfUri": ""
   },
   "system": true,
   "selfUri": ""
}
	 *
     */
     self.updateFlow = function(flowId, body){
		var path = '/api/v1/flows/{flowId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{flowId}', flowId);

        if(flowId === undefined && flowId !== null){
			throw 'Missing required  parameter: flowId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };

	/**
     * 
     * @method deleteFlow
	 * @memberof flows

	* @param {string} flowId - Flow ID
	 *
     */
     self.deleteFlow = function(flowId){
		var path = '/api/v1/flows/{flowId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{flowId}', flowId);

        if(flowId === undefined && flowId !== null){
			throw 'Missing required  parameter: flowId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.latestconfiguration = self.latestconfiguration || {};

	/**
     * 
     * @method getLatestConfigurationFlow
	 * @memberof flows/latestconfiguration

	* @param {string} flowId - Flow ID

	* @param {string} doDeleted - Deleted
	 *
     */
     self.latestconfiguration.getLatestConfigurationFlow = function(flowId, doDeleted){
		var path = '/api/v1/flows/{flowId}/latestconfiguration';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{flowId}', flowId);

        if(flowId === undefined && flowId !== null){
			throw 'Missing required  parameter: flowId';
        }


		if(doDeleted !== undefined && doDeleted !== null){
			queryParameters.deleted = doDeleted;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.publishedresults = self.publishedresults || {};

	/**
     * 
     * @method getGenerationResult
	 * @memberof flows/publishedresults

	* @param {string} flowId - Flow ID

	* @param {string} id - Publish Result ID
	 *
     */
     self.publishedresults.getGenerationResult = function(flowId, id){
		var path = '/api/v1/flows/{flowId}/publishedresults/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{flowId}', flowId);

        if(flowId === undefined && flowId !== null){
			throw 'Missing required  parameter: flowId';
        }

        path = path.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.versions = self.versions || {};

	/**
     * 
     * @method getFlowVersions
	 * @memberof flows/versions

	* @param {string} flowId - Flow ID

	* @param {integer} pageNumber - Page number

	* @param {integer} pageSize - Page size

	* @param {string} doDeleted - Deleted
	 *
     */
     self.versions.getFlowVersions = function(flowId, pageNumber, pageSize, doDeleted){
		var path = '/api/v1/flows/{flowId}/versions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{flowId}', flowId);

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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.versions = self.versions || {};

	/**
     * 
     * @method createFlowVersion
	 * @memberof flows/versions

	* @param {string} flowId - Flow ID

	* @param {} body - 
	 *
     */
     self.versions.createFlowVersion = function(flowId, body){
		var path = '/api/v1/flows/{flowId}/versions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{flowId}', flowId);

        if(flowId === undefined && flowId !== null){
			throw 'Missing required  parameter: flowId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.versions = self.versions || {};

	/**
     * 
     * @method getFlowVersion
	 * @memberof flows/versions

	* @param {string} flowId - Flow ID

	* @param {string} versionId - Version ID

	* @param {string} doDeleted - Deleted
	 *
     */
     self.versions.getFlowVersion = function(flowId, versionId, doDeleted){
		var path = '/api/v1/flows/{flowId}/versions/{versionId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{flowId}', flowId);

        if(flowId === undefined && flowId !== null){
			throw 'Missing required  parameter: flowId';
        }

        path = path.replace('{versionId}', versionId);

        if(versionId === undefined && versionId !== null){
			throw 'Missing required  parameter: versionId';
        }


		if(doDeleted !== undefined && doDeleted !== null){
			queryParameters.deleted = doDeleted;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.versions = self.versions || {};
	self.versions.configuration = self.versions.configuration || {};

	/**
     * 
     * @method createFlowVersionConfiguration
	 * @memberof flows/versions/configuration

	* @param {string} flowId - Flow ID

	* @param {string} versionId - Version ID

	* @param {string} doDeleted - Deleted
	 *
     */
     self.versions.configuration.createFlowVersionConfiguration = function(flowId, versionId, doDeleted){
		var path = '/api/v1/flows/{flowId}/versions/{versionId}/configuration';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{flowId}', flowId);

        if(flowId === undefined && flowId !== null){
			throw 'Missing required  parameter: flowId';
        }

        path = path.replace('{versionId}', versionId);

        if(versionId === undefined && versionId !== null){
			throw 'Missing required  parameter: versionId';
        }


		if(doDeleted !== undefined && doDeleted !== null){
			queryParameters.deleted = doDeleted;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
