//API VERSION - 
/**
* @class
* @example
* var api = new LanguagesApi(pureCloudSession);
*/
var LanguagesApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Get the list of supported languages.
	 * @memberOf LanguagesApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortOrder - Ascending or descending sort order
	ascending,
	descending,
	*/
	function getLanguages(pageSize, pageNumber, sortOrder){
		var apipath = '/api/v2/languages';
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


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getLanguages = getLanguages;
	/**
     * @summary Create Language
	 * @memberOf LanguagesApi#
	* @param {} body - Language
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateModified": "",
   "state": "",
   "version": ""
}
	*/
	function postLanguages(body){
		var apipath = '/api/v2/languages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postLanguages = postLanguages;
	/**
     * @summary Get language
	 * @memberOf LanguagesApi#
	* @param {string} languageId - Language ID
	*/
	function getLanguageId(languageId){
		var apipath = '/api/v2/languages/{languageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{languageId}', languageId);

        if(languageId === undefined && languageId !== null){
			throw 'Missing required  parameter: languageId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getLanguageId = getLanguageId;
	/**
     * @summary Update Language
	 * @memberOf LanguagesApi#
	* @param {string} languageId - Language ID
	* @param {} body - Language
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateModified": "",
   "state": "",
   "version": ""
}
	*/
	function putLanguageId(languageId, body){
		var apipath = '/api/v2/languages/{languageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{languageId}', languageId);

        if(languageId === undefined && languageId !== null){
			throw 'Missing required  parameter: languageId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putLanguageId = putLanguageId;
	/**
     * @summary Delete Language
	 * @memberOf LanguagesApi#
	* @param {string} languageId - Language ID
	*/
	function deleteLanguageId(languageId){
		var apipath = '/api/v2/languages/{languageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{languageId}', languageId);

        if(languageId === undefined && languageId !== null){
			throw 'Missing required  parameter: languageId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteLanguageId = deleteLanguageId;

    return self;
};
