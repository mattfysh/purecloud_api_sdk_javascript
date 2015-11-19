if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.scripts";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.scripts = (function (PureCloud) {
	/**
	* @namespace scripts
	**/
	/**
	* @namespace scripts/published
	**/
	/**
	* @namespace scripts/published/pages
	**/
	/**
	* @namespace scripts/published/variables
	**/
	/**
	* @namespace scripts/templates
	**/
	/**
	* @namespace scripts/pages
	**/

	var self = {};

	/**
     * 
     * @method getScripts
	 * @memberof scripts

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number

	* @param {string} expand - Expand

	* @param {string} name - Name

	* @param {string} feature - Feature
	 *
     */
     self.getScripts = function(pageSize, pageNumber, expand, name, feature){
		var path = '/api/v1/scripts';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	/**
     * 
     * @method createScript
	 * @memberof scripts

	* @param {} body - 
	 *
     */
     self.createScript = function(body){
		var path = '/api/v1/scripts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.published = self.published || {};

	/**
     * 
     * @method getPublishedScripts
	 * @memberof scripts/published

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number

	* @param {string} expand - Expand

	* @param {string} name - Name

	* @param {string} feature - Feature
	 *
     */
     self.published.getPublishedScripts = function(pageSize, pageNumber, expand, name, feature){
		var path = '/api/v1/scripts/published';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.published = self.published || {};

	/**
     * 
     * @method publishScript
	 * @memberof scripts/published

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "scriptId": "",
   "versionId": ""
}
	 *
     */
     self.published.publishScript = function(body){
		var path = '/api/v1/scripts/published';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.published = self.published || {};

	/**
     * 
     * @method getPublishedScript
	 * @memberof scripts/published

	* @param {string} scriptId - Script ID
	 *
     */
     self.published.getPublishedScript = function(scriptId){
		var path = '/api/v1/scripts/published/{scriptId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.published = self.published || {};
	self.published.pages = self.published.pages || {};

	/**
     * 
     * @method getPublishedPages
	 * @memberof scripts/published/pages

	* @param {string} scriptId - Script ID
	 *
     */
     self.published.pages.getPublishedPages = function(scriptId){
		var path = '/api/v1/scripts/published/{scriptId}/pages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.published = self.published || {};
	self.published.pages = self.published.pages || {};

	/**
     * 
     * @method getPublishedPage
	 * @memberof scripts/published/pages

	* @param {string} scriptId - Script ID

	* @param {string} pageId - Page ID
	 *
     */
     self.published.pages.getPublishedPage = function(scriptId, pageId){
		var path = '/api/v1/scripts/published/{scriptId}/pages/{pageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }

        path = path.replace('{pageId}', pageId);

        if(pageId === undefined && pageId !== null){
			throw 'Missing required  parameter: pageId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.published = self.published || {};
	self.published.variables = self.published.variables || {};

	/**
     * 
     * @method getPublishedVariables
	 * @memberof scripts/published/variables

	* @param {string} scriptId - Script ID
	 *
     */
     self.published.variables.getPublishedVariables = function(scriptId){
		var path = '/api/v1/scripts/published/{scriptId}/variables';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.templates = self.templates || {};

	/**
     * 
     * @method createScriptTemplate
	 * @memberof scripts/templates

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
	 *
     */
     self.templates.createScriptTemplate = function(body){
		var path = '/api/v1/scripts/templates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };

	/**
     * 
     * @method getScript
	 * @memberof scripts

	* @param {string} scriptId - Script ID
	 *
     */
     self.getScript = function(scriptId){
		var path = '/api/v1/scripts/{scriptId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	/**
     * 
     * @method updateScript
	 * @memberof scripts

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
	 *
     */
     self.updateScript = function(scriptId, body){
		var path = '/api/v1/scripts/{scriptId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };

	/**
     * 
     * @method deleteScript
	 * @memberof scripts

	* @param {string} scriptId - Script ID
	 *
     */
     self.deleteScript = function(scriptId){
		var path = '/api/v1/scripts/{scriptId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.pages = self.pages || {};

	/**
     * 
     * @method getPages
	 * @memberof scripts/pages

	* @param {string} scriptId - Script ID
	 *
     */
     self.pages.getPages = function(scriptId){
		var path = '/api/v1/scripts/{scriptId}/pages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.pages = self.pages || {};

	/**
     * 
     * @method createPage
	 * @memberof scripts/pages

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
	 *
     */
     self.pages.createPage = function(scriptId, body){
		var path = '/api/v1/scripts/{scriptId}/pages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.pages = self.pages || {};

	/**
     * 
     * @method getPage
	 * @memberof scripts/pages

	* @param {string} scriptId - Script ID

	* @param {string} pageId - Page ID
	 *
     */
     self.pages.getPage = function(scriptId, pageId){
		var path = '/api/v1/scripts/{scriptId}/pages/{pageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }

        path = path.replace('{pageId}', pageId);

        if(pageId === undefined && pageId !== null){
			throw 'Missing required  parameter: pageId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.pages = self.pages || {};

	/**
     * 
     * @method updatePage
	 * @memberof scripts/pages

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
	 *
     */
     self.pages.updatePage = function(scriptId, pageId, body){
		var path = '/api/v1/scripts/{scriptId}/pages/{pageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }

        path = path.replace('{pageId}', pageId);

        if(pageId === undefined && pageId !== null){
			throw 'Missing required  parameter: pageId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.pages = self.pages || {};

	/**
     * 
     * @method deletePage
	 * @memberof scripts/pages

	* @param {string} scriptId - Script ID

	* @param {string} pageId - Page ID
	 *
     */
     self.pages.deletePage = function(scriptId, pageId){
		var path = '/api/v1/scripts/{scriptId}/pages/{pageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }

        path = path.replace('{pageId}', pageId);

        if(pageId === undefined && pageId !== null){
			throw 'Missing required  parameter: pageId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
