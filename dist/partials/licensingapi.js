/**
* @class
* @example
* var api = new LicensingApi(pureCloudSession);
*/
var LicensingApi = function (pureCloudSession) {
	/**
     * @summary Get Licenses required for a set of permissions.
	 * @memberOf LicensingApi#
	* @param {array} permission - Permission
	*/
	function getLicenses(permission){
		var apipath = '/api/v1/licensing/licenses';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(permission !== undefined && permission !== null){
			queryParameters.permission = permission;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getLicenses = getLicenses;
	/**
     * @summary Get org license assignments.
	 * @memberOf LicensingApi#
	*/
	function getOrgassignments(){
		var apipath = '/api/v1/licensing/orgassignments';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOrgassignments = getOrgassignments;
	/**
     * @summary Get org license assignment.
	 * @memberOf LicensingApi#
	* @param {string} id - ID
	*/
	function getOrgassignments(id){
		var apipath = '/api/v1/licensing/orgassignments/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOrgassignments = getOrgassignments;
	/**
     * @summary Get Licenses required per permission.
	 * @memberOf LicensingApi#
	* @param {array} id - ID
	*/
	function getPermissions(id){
		var apipath = '/api/v1/licensing/permissions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(id !== undefined && id !== null){
			queryParameters.id = id;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPermissions = getPermissions;
	/**
     * @summary Get Licenses required per permission.
	 * @memberOf LicensingApi#
	* @param {array} id - ID
	* @param {} body - The permissions details
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "ids": []
}
	*/
	function postPermissions(id, body){
		var apipath = '/api/v1/licensing/permissions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(id !== undefined && id !== null){
			queryParameters.id = id;
		}

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postPermissions = postPermissions;
	/**
     * @summary Get user license assignments.
	 * @memberOf LicensingApi#
	*/
	function getUserassignments(){
		var apipath = '/api/v1/licensing/userassignments';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserassignments = getUserassignments;
	/**
     * @summary Get user license assignment.
	 * @memberOf LicensingApi#
	* @param {string} id - ID
	*/
	function getUserassignments(id){
		var apipath = '/api/v1/licensing/userassignments/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserassignments = getUserassignments;

    return self;
};
