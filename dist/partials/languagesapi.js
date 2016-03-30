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
	[ascending,
	descending],
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

    return self;
};
