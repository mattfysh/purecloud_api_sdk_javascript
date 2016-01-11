/**
* @class
* @example
* var api = new ScripterApi(pureCloudSession);
*/
var ScripterApi = function (pureCloudSession) {
	/**
     * @summary Get favorite templates
	 * @description 
	 * @memberOf ScripterApi#
	*/
	function getScripterFavoritetemplates(){
		var apipath = '/api/v1/scripter/favoritetemplates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getScripterFavoritetemplates = getScripterFavoritetemplates;
	/**
     * @summary Set a favorite template
	 * @description 
	 * @memberOf ScripterApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "templateId": ""
}
	*/
	function createScripterFavoritetemplates(body){
		var apipath = '/api/v1/scripter/favoritetemplates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createScripterFavoritetemplates = createScripterFavoritetemplates;
	/**
     * @summary Unset favority template
	 * @description 
	 * @memberOf ScripterApi#
	* @param {string} templateId - 
	*/
	function deleteScripterFavoritetemplatesTemplate(templateId){
		var apipath = '/api/v1/scripter/favoritetemplates/{templateId}';
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
	self.deleteScripterFavoritetemplatesTemplate = deleteScripterFavoritetemplatesTemplate;
	/**
     * @summary Get the list of templates
	 * @description 
	 * @memberOf ScripterApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} expand - Expand
	* @param {string} tags - Tags
	*/
	function getScripterTemplates(pageSize, pageNumber, expand, tags){
		var apipath = '/api/v1/scripter/templates';
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
	self.getScripterTemplates = getScripterTemplates;
	/**
     * @summary Create a template.
	 * @description 
	 * @memberOf ScripterApi#
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
	function createScripterTemplates(body){
		var apipath = '/api/v1/scripter/templates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createScripterTemplates = createScripterTemplates;
	/**
     * @summary Get a composer template
	 * @description 
	 * @memberOf ScripterApi#
	* @param {string} templateId - Template ID
	*/
	function getScripterTemplate(templateId){
		var apipath = '/api/v1/scripter/templates/{templateId}';
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
	self.getScripterTemplate = getScripterTemplate;
	/**
     * @summary Update a composer template
	 * @description 
	 * @memberOf ScripterApi#
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
	function updateScripterTemplate(templateId, body){
		var apipath = '/api/v1/scripter/templates/{templateId}';
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
	self.updateScripterTemplate = updateScripterTemplate;
	/**
     * @summary Delete a composer template
	 * @description 
	 * @memberOf ScripterApi#
	* @param {string} templateId - Template ID
	*/
	function deleteScripterTemplate(templateId){
		var apipath = '/api/v1/scripter/templates/{templateId}';
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
	self.deleteScripterTemplate = deleteScripterTemplate;

    return self;
};
