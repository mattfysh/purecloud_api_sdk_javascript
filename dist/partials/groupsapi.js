//API VERSION - 
/**
* @class
* @example
* var api = new GroupsApi(pureCloudSession);
*/
var GroupsApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Get a group list
	 * @memberOf GroupsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortOrder - Ascending or descending sort order
	[ascending,
	descending],
	*/
	function getGroups(pageSize, pageNumber, sortOrder){
		var apipath = '/api/v2/groups';
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
	self.getGroups = getGroups;
	/**
     * @summary Create a group
	 * @memberOf GroupsApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "type": "",
   "images": [],
   "addresses": [],
   "rulesVisible": true,
   "visibility": ""
}
	*/
	function postGroups(body){
		var apipath = '/api/v2/groups';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postGroups = postGroups;
	/**
     * @summary Search using q64
	 * @memberOf GroupsApi#
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
	 * @memberOf GroupsApi#
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
     * @summary Get group
	 * @memberOf GroupsApi#
	* @param {string} groupId - Group ID
	*/
	function getGroupId(groupId){
		var apipath = '/api/v2/groups/{groupId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{groupId}', groupId);

        if(groupId === undefined && groupId !== null){
			throw 'Missing required  parameter: groupId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getGroupId = getGroupId;
	/**
     * @summary Get group members
	 * @memberOf GroupsApi#
	* @param {string} groupId - Group ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortOrder - Ascending or descending sort order
	[ascending,
	descending],
	*/
	function getGroupIdMembers(groupId, pageSize, pageNumber, sortOrder){
		var apipath = '/api/v2/groups/{groupId}/members';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{groupId}', groupId);

        if(groupId === undefined && groupId !== null){
			throw 'Missing required  parameter: groupId';
        }


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
	self.getGroupIdMembers = getGroupIdMembers;
	/**
     * @summary Add members
	 * @memberOf GroupsApi#
	* @param {string} groupId - Group ID
	* @param {} body - Add members
	 * @example
	 * Body Example:
	 * {
   "memberIds": [],
   "version": 0
}
	*/
	function postGroupIdMembers(groupId, body){
		var apipath = '/api/v2/groups/{groupId}/members';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{groupId}', groupId);

        if(groupId === undefined && groupId !== null){
			throw 'Missing required  parameter: groupId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postGroupIdMembers = postGroupIdMembers;
	/**
     * @summary Remove members
	 * @memberOf GroupsApi#
	* @param {string} groupId - Group ID
	* @param {string} ids - Comma separated list of userIds to remove
	*/
	function deleteGroupIdMembers(groupId, ids){
		var apipath = '/api/v2/groups/{groupId}/members';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{groupId}', groupId);

        if(groupId === undefined && groupId !== null){
			throw 'Missing required  parameter: groupId';
        }


		if(ids !== undefined && ids !== null){
			queryParameters.ids = ids;
		}

        if(ids === undefined && ids !== null){
			throw 'Missing required  parameter: ids';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteGroupIdMembers = deleteGroupIdMembers;

    return self;
};
