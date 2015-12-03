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

	var self = {};

	/**
     * Multiple IDs can be specified, in which case all matching flows will be returned, and no other parameters will be evaluated.
     * @method getFlows
	 * @memberof flows

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

	return self;
}(PureCloud));
