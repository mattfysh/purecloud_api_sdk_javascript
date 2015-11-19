if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.licensing";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.licensing = (function (PureCloud) {
	/**
	* @namespace licensing/licenses
	**/
	/**
	* @namespace licensing/orgassignments
	**/
	/**
	* @namespace licensing/permissions
	**/
	/**
	* @namespace licensing/userassignments
	**/

	var self = {};
	self.licenses = self.licenses || {};

	/**
     * 
     * @method getPermissionLicenses
	 * @memberof licensing/licenses

	* @param {array} permission - Permission
	 *
     */
     self.licenses.getPermissionLicenses = function(permission){
		var path = '/api/v1/licensing/licenses';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(permission !== undefined && permission !== null){
			queryParameters.permission = permission;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.orgassignments = self.orgassignments || {};

	/**
     * 
     * @method getOrgLicenseAssignments
	 * @memberof licensing/orgassignments
	 *
     */
     self.orgassignments.getOrgLicenseAssignments = function(){
		var path = '/api/v1/licensing/orgassignments';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.orgassignments = self.orgassignments || {};

	/**
     * 
     * @method getOrgLicenseAssignment
	 * @memberof licensing/orgassignments

	* @param {string} id - ID
	 *
     */
     self.orgassignments.getOrgLicenseAssignment = function(id){
		var path = '/api/v1/licensing/orgassignments/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.permissions = self.permissions || {};

	/**
     * 
     * @method getPermissionLicenses
	 * @memberof licensing/permissions

	* @param {array} id - ID
	 *
     */
     self.permissions.getPermissionLicenses = function(id){
		var path = '/api/v1/licensing/permissions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(id !== undefined && id !== null){
			queryParameters.id = id;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.userassignments = self.userassignments || {};

	/**
     * 
     * @method getUserLicenseAssignments
	 * @memberof licensing/userassignments
	 *
     */
     self.userassignments.getUserLicenseAssignments = function(){
		var path = '/api/v1/licensing/userassignments';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.userassignments = self.userassignments || {};

	/**
     * 
     * @method getUserLicenseAssignment
	 * @memberof licensing/userassignments

	* @param {string} id - ID
	 *
     */
     self.userassignments.getUserLicenseAssignment = function(id){
		var path = '/api/v1/licensing/userassignments/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
