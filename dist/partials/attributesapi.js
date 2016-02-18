/**
* @class
* @example
* var api = new AttributesApi(pureCloudSession);
*/
var AttributesApi = function (pureCloudSession) {
	/**
     * @summary Gets a list of existing attributes.
	 * @memberOf AttributesApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	*/
	function get(pageNumber, pageSize){
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
	self.get = get;
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
	function create(body){
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
	self.create = create;
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
	function createQuery(body){
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
	self.createQuery = createQuery;
	/**
     * @summary Get details about an existing attribute.
	 * @memberOf AttributesApi#
	* @param {string} attributeId - Attribute ID
	*/
	function getAttribute(attributeId){
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
	self.getAttribute = getAttribute;
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
	function updateAttribute(attributeId, body){
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
	self.updateAttribute = updateAttribute;
	/**
     * @summary Delete an existing Attribute.
	 * @description This will remove attribute.
	 * @memberOf AttributesApi#
	* @param {string} attributeId - Attribute ID
	*/
	function deleteAttribute(attributeId){
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
	self.deleteAttribute = deleteAttribute;

    return self;
};
