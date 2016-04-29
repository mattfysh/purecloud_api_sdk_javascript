//API VERSION - 
/**
* @class
* @example
* var api = new SuggestApi(pureCloudSession);
*/
var SuggestApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Search using q64
	 * @memberOf SuggestApi#
	* @param {string} q64 - 
	* @param {array} expand - 
	* @param {boolean} profile - 
	*/
	function getSearch(q64, expand, profile){
		var apipath = '/api/v2/search';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(q64 !== undefined && q64 !== null){
			queryParameters.q64 = q64;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(profile !== undefined && profile !== null){
			queryParameters.profile = profile;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSearch = getSearch;
	/**
     * @summary Search
	 * @memberOf SuggestApi#
	* @param {} body - Search request options
	* @param {boolean} profile - 
	 * @example
	 * Body Example:
	 * {
   "types": [],
   "sortOrder": "",
   "query": [],
   "sortBy": "",
   "pageSize": 0,
   "pageNumber": 0,
   "returnFields": [],
   "aggregations": [],
   "expand": []
}
	*/
	function postSearch(body, profile){
		var apipath = '/api/v2/search';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(profile !== undefined && profile !== null){
			queryParameters.profile = profile;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postSearch = postSearch;
	/**
     * @summary Suggest using q64
	 * @memberOf SuggestApi#
	* @param {string} q64 - 
	* @param {boolean} profile - 
	*/
	function getSuggest(q64, profile){
		var apipath = '/api/v2/search/suggest';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(q64 !== undefined && q64 !== null){
			queryParameters.q64 = q64;
		}


		if(profile !== undefined && profile !== null){
			queryParameters.profile = profile;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSuggest = getSuggest;
	/**
     * @summary Suggest
	 * @memberOf SuggestApi#
	* @param {} body - Search request options
	* @param {boolean} profile - 
	 * @example
	 * Body Example:
	 * {
   "types": [],
   "sortOrder": "",
   "query": [],
   "sortBy": "",
   "pageSize": 0,
   "pageNumber": 0,
   "returnFields": [],
   "aggregations": [],
   "expand": []
}
	*/
	function postSuggest(body, profile){
		var apipath = '/api/v2/search/suggest';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(profile !== undefined && profile !== null){
			queryParameters.profile = profile;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postSuggest = postSuggest;

    return self;
};
