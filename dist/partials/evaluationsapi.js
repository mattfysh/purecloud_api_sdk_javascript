/**
* @class
* @example
* var api = new EvaluationsApi(pureCloudSession);
*/
var EvaluationsApi = function (pureCloudSession) {
	/**
     * @summary Get favorite templates
	 * @description 
	 * @memberOf EvaluationsApi#
	*/
	function getFavoritetemplates(){
		var apipath = '/api/v1/evaluations/favoritetemplates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFavoritetemplates = getFavoritetemplates;
	/**
     * @summary Set a favorite template
	 * @description 
	 * @memberOf EvaluationsApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "templateId": ""
}
	*/
	function createFavoritetemplates(body){
		var apipath = '/api/v1/evaluations/favoritetemplates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createFavoritetemplates = createFavoritetemplates;
	/**
     * @summary Unset favority template
	 * @description 
	 * @memberOf EvaluationsApi#
	* @param {string} templateId - 
	*/
	function deleteFavoritetemplatesTemplate(templateId){
		var apipath = '/api/v1/evaluations/favoritetemplates/{templateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{templateId}', templateId);

        if(templateId === undefined && templateId !== null){
			throw 'Missing required  parameter: templateId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteFavoritetemplatesTemplate = deleteFavoritetemplatesTemplate;
	/**
     * @summary Get the list of templates
	 * @description 
	 * @memberOf EvaluationsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} expand - Expand
	* @param {string} tags - Tags
	*/
	function getTemplates(pageSize, pageNumber, expand, tags){
		var apipath = '/api/v1/evaluations/templates';
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


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(tags !== undefined && tags !== null){
			queryParameters.tags = tags;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getTemplates = getTemplates;
	/**
     * @summary Create a template.
	 * @description 
	 * @memberOf EvaluationsApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "description": "",
   "createdDate": "",
   "modifiedDate": "",
   "version": 0,
   "level": "",
   "tags": [],
   "data": {},
   "selfUri": ""
}
	*/
	function createTemplates(body){
		var apipath = '/api/v1/evaluations/templates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createTemplates = createTemplates;
	/**
     * @summary Get a composer template
	 * @description 
	 * @memberOf EvaluationsApi#
	* @param {string} templateId - Template ID
	*/
	function getTemplate(templateId){
		var apipath = '/api/v1/evaluations/templates/{templateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{templateId}', templateId);

        if(templateId === undefined && templateId !== null){
			throw 'Missing required  parameter: templateId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getTemplate = getTemplate;
	/**
     * @summary Update a composer template
	 * @description 
	 * @memberOf EvaluationsApi#
	* @param {string} templateId - Template ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "description": "",
   "createdDate": "",
   "modifiedDate": "",
   "version": 0,
   "level": "",
   "tags": [],
   "data": {},
   "selfUri": ""
}
	*/
	function updateTemplate(templateId, body){
		var apipath = '/api/v1/evaluations/templates/{templateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{templateId}', templateId);

        if(templateId === undefined && templateId !== null){
			throw 'Missing required  parameter: templateId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateTemplate = updateTemplate;
	/**
     * @summary Delete a composer template
	 * @description 
	 * @memberOf EvaluationsApi#
	* @param {string} templateId - Template ID
	*/
	function deleteTemplate(templateId){
		var apipath = '/api/v1/evaluations/templates/{templateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{templateId}', templateId);

        if(templateId === undefined && templateId !== null){
			throw 'Missing required  parameter: templateId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteTemplate = deleteTemplate;

    return self;
};
