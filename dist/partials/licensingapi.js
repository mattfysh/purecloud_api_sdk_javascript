/**
* @class
* @example
* var api = new LicensingApi(pureCloudSession);
*/
var LicensingApi = function (pureCloudSession) {
	/**
     * Get Licenses required for a set of permissions.
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
     * Get org license assignments.
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
     * Get org license assignment.
	 * @memberOf LicensingApi#
	* @param {string} id - ID
	*/
	function getOrgassignmentsId(id){
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
	self.getOrgassignmentsId = getOrgassignmentsId;
	/**
     * Get Licenses required per permission.
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
     * Get user license assignments.
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
     * Get user license assignment.
	 * @memberOf LicensingApi#
	* @param {string} id - ID
	*/
	function getUserassignmentsId(id){
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
	self.getUserassignmentsId = getUserassignmentsId;

    return self;
};
