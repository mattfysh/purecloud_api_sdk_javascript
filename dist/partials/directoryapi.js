/**
* @class
* @example
* var api = new DirectoryApi(pureCloudSession);
*/
var DirectoryApi = function (pureCloudSession) {
	/**
     * @summary Autocomplete proxy
	 * @description 
	 * @memberOf DirectoryApi#
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getDirectoryApiV2Autocomplete(expand){
		var apipath = '/directory/api/v2/autocomplete';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDirectoryApiV2Autocomplete = getDirectoryApiV2Autocomplete;
	/**
     * @summary Bulk get people
	 * @description 
	 * @memberOf DirectoryApi#
	* @param {string} ids - comma separated list of user ids
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getDirectoryApiV2PeopleBulkS(ids, expand){
		var apipath = '/directory/api/v2/people/bulk/{ids}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{ids}', ids);

        if(ids === undefined && ids !== null){
			throw 'Missing required  parameter: ids';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDirectoryApiV2PeopleBulkS = getDirectoryApiV2PeopleBulkS;
	/**
     * @summary Get Person
	 * @description 
	 * @memberOf DirectoryApi#
	* @param {string} id - 
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getDirectoryApiV2PeopleId(id, expand){
		var apipath = '/directory/api/v2/people/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDirectoryApiV2PeopleId = getDirectoryApiV2PeopleId;
	/**
     * @summary Get Person Adjacents
	 * @description 
	 * @memberOf DirectoryApi#
	* @param {string} id - 
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getDirectoryApiV2PeopleIdAdjacents(id, expand){
		var apipath = '/directory/api/v2/people/{id}/adjacents';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDirectoryApiV2PeopleIdAdjacents = getDirectoryApiV2PeopleIdAdjacents;
	/**
     * @summary Get Person Direct Reports
	 * @description 
	 * @memberOf DirectoryApi#
	* @param {string} id - 
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getDirectoryApiV2PeopleIdDirectreports(id, expand){
		var apipath = '/directory/api/v2/people/{id}/directreports';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDirectoryApiV2PeopleIdDirectreports = getDirectoryApiV2PeopleIdDirectreports;
	/**
     * @summary Get Person Favorites
	 * @description 
	 * @memberOf DirectoryApi#
	* @param {string} id - 
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getDirectoryApiV2PeopleIdFavorites(id, expand){
		var apipath = '/directory/api/v2/people/{id}/favorites';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDirectoryApiV2PeopleIdFavorites = getDirectoryApiV2PeopleIdFavorites;
	/**
     * @summary Get Person Recents
	 * @description 
	 * @memberOf DirectoryApi#
	* @param {string} id - 
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getDirectoryApiV2PeopleIdRecents(id, expand){
		var apipath = '/directory/api/v2/people/{id}/recents';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDirectoryApiV2PeopleIdRecents = getDirectoryApiV2PeopleIdRecents;
	/**
     * @summary Get Superiors
	 * @description 
	 * @memberOf DirectoryApi#
	* @param {string} id - 
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getDirectoryApiV2PeopleIdSuperiors(id, expand){
		var apipath = '/directory/api/v2/people/{id}/superiors';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDirectoryApiV2PeopleIdSuperiors = getDirectoryApiV2PeopleIdSuperiors;
	/**
     * @summary Search proxy
	 * @description 
	 * @memberOf DirectoryApi#
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getDirectoryApiV2Search(expand){
		var apipath = '/directory/api/v2/search';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDirectoryApiV2Search = getDirectoryApiV2Search;
	/**
     * @summary Search proxy
	 * @description 
	 * @memberOf DirectoryApi#
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getDirectoryApiV2SearchDirectory(expand){
		var apipath = '/directory/api/v2/search/directory';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDirectoryApiV2SearchDirectory = getDirectoryApiV2SearchDirectory;
	/**
     * @summary Search proxy
	 * @description 
	 * @memberOf DirectoryApi#
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getDirectoryApiV2SearchPeople(expand){
		var apipath = '/directory/api/v2/search/people';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDirectoryApiV2SearchPeople = getDirectoryApiV2SearchPeople;
	/**
     * @summary Suggest proxy
	 * @description 
	 * @memberOf DirectoryApi#
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getDirectoryApiV2Suggest(expand){
		var apipath = '/directory/api/v2/suggest';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDirectoryApiV2Suggest = getDirectoryApiV2Suggest;

    return self;
};
