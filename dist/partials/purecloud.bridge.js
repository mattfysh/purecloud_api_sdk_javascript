if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.bridge";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.bridge = (function (PureCloud) {
	/**
	* @namespace bridge/useractions/categories
	**/
	/**
	* @namespace bridge/useractions/metadata
	**/

	var self = {};
	self.useractions = self.useractions || {};
	self.useractions.categories = self.useractions.categories || {};

	/**
     * 
     * @method getUserActionsCategories
	 * @memberof bridge/useractions/categories

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number
	 *
     */
     self.useractions.categories.getUserActionsCategories = function(pageSize, pageNumber){
		var path = '/api/v1/bridge/useractions/categories';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.useractions = self.useractions || {};
	self.useractions.metadata = self.useractions.metadata || {};

	/**
     * 
     * @method getUserActionsMetadata
	 * @memberof bridge/useractions/metadata

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number

	* @param {string} sortBy - Sort by

	* @param {string} sortOrder - Sort order

	* @param {string} expand - requests.inputSchema,requests.successSchema
	 *
     */
     self.useractions.metadata.getUserActionsMetadata = function(pageSize, pageNumber, sortBy, sortOrder, expand){
		var path = '/api/v1/bridge/useractions/metadata';
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


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.useractions = self.useractions || {};
	self.useractions.metadata = self.useractions.metadata || {};

	/**
     * 
     * @method getUserActionMetadata
	 * @memberof bridge/useractions/metadata

	* @param {string} name - Name

	* @param {string} expand - requests.inputSchema,requests.successSchema
	 *
     */
     self.useractions.metadata.getUserActionMetadata = function(name, expand){
		var path = '/api/v1/bridge/useractions/metadata/{name}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{name}', name);

        if(name === undefined && name !== null){
			throw 'Missing required  parameter: name';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
