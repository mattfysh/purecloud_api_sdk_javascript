//API VERSION - 
/**
* @class
* @example
* var api = new AttributesApi(pureCloudSession);
*/
var AttributesApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
	}

	var self = this;
	/**
     * @summary Gets a list of existing attributes.
	 * @memberOf AttributesApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	*/
	function getAttributes(pageNumber, pageSize){
		var apipath = '/api/v1/attributes';
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
	self.getAttributes = getAttributes;
	/**
     * @summary Create an attribute.
	 * @memberOf AttributesApi#
	* @param {} body - Attribute
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "version": 0,
   "description": "",
   "createdBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dateCreated": "",
   "modifiedBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dateModified": ""
}
	*/
	function postAttributes(body){
		var apipath = '/api/v1/attributes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postAttributes = postAttributes;
	/**
     * @summary Query attributes
	 * @memberOf AttributesApi#
	* @param {} body - query
	 * @example
	 * Body Example:
	 * {
   "query": "",
   "pageSize": 0,
   "pageNumber": 0
}
	*/
	function postQuery(body){
		var apipath = '/api/v1/attributes/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postQuery = postQuery;
	/**
     * @summary Get details about an existing attribute.
	 * @memberOf AttributesApi#
	* @param {string} attributeId - Attribute ID
	*/
	function getAttributeId(attributeId){
		var apipath = '/api/v1/attributes/{attributeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{attributeId}', attributeId);

        if(attributeId === undefined && attributeId !== null){
			throw 'Missing required  parameter: attributeId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getAttributeId = getAttributeId;
	/**
     * @summary Update an existing attribute.
	 * @description Fields that can be updated: name, description. The most recent version is required for updates.
	 * @memberOf AttributesApi#
	* @param {string} attributeId - Attribute ID
	* @param {} body - Attribute
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "version": 0,
   "description": "",
   "createdBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dateCreated": "",
   "modifiedBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dateModified": ""
}
	*/
	function putAttributeId(attributeId, body){
		var apipath = '/api/v1/attributes/{attributeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{attributeId}', attributeId);

        if(attributeId === undefined && attributeId !== null){
			throw 'Missing required  parameter: attributeId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putAttributeId = putAttributeId;
	/**
     * @summary Delete an existing Attribute.
	 * @description This will remove attribute.
	 * @memberOf AttributesApi#
	* @param {string} attributeId - Attribute ID
	*/
	function deleteAttributeId(attributeId){
		var apipath = '/api/v1/attributes/{attributeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{attributeId}', attributeId);

        if(attributeId === undefined && attributeId !== null){
			throw 'Missing required  parameter: attributeId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteAttributeId = deleteAttributeId;

    return self;
};
