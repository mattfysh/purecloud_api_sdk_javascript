//API VERSION - 
/**
* @class
* @example
* var api = new SearchApi(pureCloudSession);
*/
var SearchApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Search using q64
	 * @memberOf SearchApi#
	* @param {string} q64 - 
	* @param {array} expand - 
	*/
	function getSearch(q64, expand){
		var apipath = '/api/v2/groups/search';
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


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSearch = getSearch;
	/**
     * @summary Search
	 * @memberOf SearchApi#
	* @param {} body - Search request options
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
	function postSearch(body){
		var apipath = '/api/v2/groups/search';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postSearch = postSearch;
	/**
     * @summary Search using q64
	 * @memberOf SearchApi#
	* @param {string} q64 - 
	* @param {array} expand - 
	*/
	function getSearch(q64, expand){
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


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSearch = getSearch;
	/**
     * @summary Search
	 * @memberOf SearchApi#
	* @param {} body - Search request options
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
	function postSearch(body){
		var apipath = '/api/v2/search';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postSearch = postSearch;
	/**
     * @summary Search using q64
	 * @memberOf SearchApi#
	* @param {string} q64 - 
	* @param {array} expand - 
	*/
	function getSearch(q64, expand){
		var apipath = '/api/v2/users/search';
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


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSearch = getSearch;
	/**
     * @summary Search
	 * @memberOf SearchApi#
	* @param {} body - Search request options
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
	function postSearch(body){
		var apipath = '/api/v2/users/search';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postSearch = postSearch;

    return self;
};
