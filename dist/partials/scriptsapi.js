/**
* @class
* @example
* var api = new ScriptsApi(pureCloudSession);
*/
var ScriptsApi = function (pureCloudSession) {
	/**
     * @summary Get the list of scripts
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} expand - Expand
	* @param {string} name - Name
	* @param {string} feature - Feature
	*/
	function get(pageSize, pageNumber, expand, name, feature){
		var apipath = '/api/v1/scripts';
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


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(feature !== undefined && feature !== null){
			queryParameters.feature = feature;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.get = get;
	/**
     * @summary Create a script.
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {} body - 
	*/
	function create(body){
		var apipath = '/api/v1/scripts';
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
     * @summary Get the published scripts.
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} expand - Expand
	* @param {string} name - Name
	* @param {string} feature - Feature
	*/
	function getPublished(pageSize, pageNumber, expand, name, feature){
		var apipath = '/api/v1/scripts/published';
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


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(feature !== undefined && feature !== null){
			queryParameters.feature = feature;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPublished = getPublished;
	/**
     * @summary Publish a script.
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "scriptId": "",
   "versionId": ""
}
	*/
	function createPublished(body){
		var apipath = '/api/v1/scripts/published';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createPublished = createPublished;
	/**
     * @summary Get the published script.
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {string} scriptId - Script ID
	*/
	function getPublishedScript(scriptId){
		var apipath = '/api/v1/scripts/published/{scriptId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPublishedScript = getPublishedScript;
	/**
     * @summary Get the list of published pages
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {string} scriptId - Script ID
	*/
	function getPublishedScriptPages(scriptId){
		var apipath = '/api/v1/scripts/published/{scriptId}/pages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPublishedScriptPages = getPublishedScriptPages;
	/**
     * @summary Get the published page.
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {string} scriptId - Script ID
	* @param {string} pageId - Page ID
	*/
	function getPublishedScriptPagesByPageId(scriptId, pageId){
		var apipath = '/api/v1/scripts/published/{scriptId}/pages/{pageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }

        apipath = apipath.replace('{pageId}', pageId);

        if(pageId === undefined && pageId !== null){
			throw 'Missing required  parameter: pageId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPublishedScriptPagesByPageId = getPublishedScriptPagesByPageId;
	/**
     * @summary Get the published variables
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {string} scriptId - Script ID
	*/
	function getPublishedScriptVariables(scriptId){
		var apipath = '/api/v1/scripts/published/{scriptId}/variables';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPublishedScriptVariables = getPublishedScriptVariables;
	/**
     * @summary Create a template from a script.
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "tags": [],
   "scriptId": "",
   "userId": ""
}
	*/
	function createScriptsTemplates(body){
		var apipath = '/api/v1/scripts/templates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createScriptsTemplates = createScriptsTemplates;
	/**
     * @summary Get a script
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {string} scriptId - Script ID
	*/
	function getScript(scriptId){
		var apipath = '/api/v1/scripts/{scriptId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getScript = getScript;
	/**
     * @summary Update a script.
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {string} scriptId - Script ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "versionId": "",
   "createdDate": "",
   "modifiedDate": "",
   "publishedDate": "",
   "versionDate": "",
   "startPageId": "",
   "startPageName": "",
   "features": {},
   "variables": {},
   "customActions": {},
   "selfUri": ""
}
	*/
	function updateScript(scriptId, body){
		var apipath = '/api/v1/scripts/{scriptId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateScript = updateScript;
	/**
     * @summary Delete a script.
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {string} scriptId - Script ID
	*/
	function deleteScript(scriptId){
		var apipath = '/api/v1/scripts/{scriptId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteScript = deleteScript;
	/**
     * @summary Get the list of pages
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {string} scriptId - Script ID
	*/
	function getScriptPages(scriptId){
		var apipath = '/api/v1/scripts/{scriptId}/pages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getScriptPages = getScriptPages;
	/**
     * @summary Create a page.
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {string} scriptId - Script ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "versionId": "",
   "createdDate": "",
   "modifiedDate": "",
   "rootContainer": {},
   "properties": {},
   "selfUri": ""
}
	*/
	function createScriptPages(scriptId, body){
		var apipath = '/api/v1/scripts/{scriptId}/pages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createScriptPages = createScriptPages;
	/**
     * @summary Get a page
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {string} scriptId - Script ID
	* @param {string} pageId - Page ID
	*/
	function getScriptPagesByPageId(scriptId, pageId){
		var apipath = '/api/v1/scripts/{scriptId}/pages/{pageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }

        apipath = apipath.replace('{pageId}', pageId);

        if(pageId === undefined && pageId !== null){
			throw 'Missing required  parameter: pageId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getScriptPagesByPageId = getScriptPagesByPageId;
	/**
     * @summary Update a page.
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {string} scriptId - Script ID
	* @param {string} pageId - Page ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "versionId": "",
   "createdDate": "",
   "modifiedDate": "",
   "rootContainer": {},
   "properties": {},
   "selfUri": ""
}
	*/
	function updateScriptPagesByPageId(scriptId, pageId, body){
		var apipath = '/api/v1/scripts/{scriptId}/pages/{pageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }

        apipath = apipath.replace('{pageId}', pageId);

        if(pageId === undefined && pageId !== null){
			throw 'Missing required  parameter: pageId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateScriptPagesByPageId = updateScriptPagesByPageId;
	/**
     * @summary Delete a page.
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {string} scriptId - Script ID
	* @param {string} pageId - Page ID
	*/
	function deleteScriptPagesByPageId(scriptId, pageId){
		var apipath = '/api/v1/scripts/{scriptId}/pages/{pageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }

        apipath = apipath.replace('{pageId}', pageId);

        if(pageId === undefined && pageId !== null){
			throw 'Missing required  parameter: pageId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteScriptPagesByPageId = deleteScriptPagesByPageId;

    return self;
};
