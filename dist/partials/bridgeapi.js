/**
* @class
* @example
* var api = new BridgeApi(pureCloudSession);
*/
var BridgeApi = function (pureCloudSession) {
	/**
     * @summary Get user actions categories
	 * @description 
	 * @memberOf BridgeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getUseractionsCategories(pageSize, pageNumber){
		var apipath = '/api/v1/bridge/useractions/categories';
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


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUseractionsCategories = getUseractionsCategories;
	/**
     * @summary Get user actions metadata
	 * @description 
	 * @memberOf BridgeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	* @param {string} expand - requests.inputSchema,requests.successSchema
	*/
	function getUseractionsMetadata(pageSize, pageNumber, sortBy, sortOrder, expand){
		var apipath = '/api/v1/bridge/useractions/metadata';
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


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUseractionsMetadata = getUseractionsMetadata;
	/**
     * @summary Get user action metadata
	 * @description 
	 * @memberOf BridgeApi#
	* @param {string} name - Name
	* @param {string} expand - requests.inputSchema,requests.successSchema
	*/
	function getUseractionsMetadataName(name, expand){
		var apipath = '/api/v1/bridge/useractions/metadata/{name}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{name}', name);

        if(name === undefined && name !== null){
			throw 'Missing required  parameter: name';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUseractionsMetadataName = getUseractionsMetadataName;

    return self;
};
