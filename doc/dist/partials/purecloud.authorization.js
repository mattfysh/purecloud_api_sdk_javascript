if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.authorization";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.authorization = (function (PureCloud) {
	/**
	* @namespace authorization/licenses
	**/
	/**
	* @namespace authorization/permissions
	**/
	/**
	* @namespace authorization/roles
	**/
	/**
	* @namespace authorization/roles/default
	**/
	/**
	* @namespace authorization/roles/comparedefault
	**/
	/**
	* @namespace authorization/roles/users/add
	**/
	/**
	* @namespace authorization/roles/users/remove
	**/
	/**
	* @namespace authorization/users/roles
	**/

	var self = {};
	self.licenses = self.licenses || {};

	/**
     * 
     * @method getLicenses
	 * @memberof authorization/licenses

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number
	 *
     */
     self.licenses.getLicenses = function(pageSize, pageNumber){
		var path = '/api/v1/authorization/licenses';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.permissions = self.permissions || {};

	/**
     * Retrieve a list of all permission defined in the system.
     * @method getPermissions
	 * @memberof authorization/permissions

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number
	 *
     */
     self.permissions.getPermissions = function(pageSize, pageNumber){
		var path = '/api/v1/authorization/permissions';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.roles = self.roles || {};

	/**
     * 
     * @method getRoles
	 * @memberof authorization/roles

	* @param {integer} pageSize - The total page size requested

	* @param {integer} pageNumber - The page number requested

	* @param {string} sortBy - variable name requested to sort by

	* @param {array} expand - variable name requested by expand list

	* @param {array} permission - 

	* @param {boolean} userCount - 
	 *
     */
     self.roles.getRoles = function(pageSize, pageNumber, sortBy, expand, permission, userCount){
		var path = '/api/v1/authorization/roles';
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


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(permission !== undefined && permission !== null){
			queryParameters.permission = permission;
		}


		if(userCount !== undefined && userCount !== null){
			queryParameters.userCount = userCount;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.roles = self.roles || {};

	/**
     * 
     * @method createOrganizationRole
	 * @memberof authorization/roles

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "description": "",
   "defaultRoleId": "",
   "permissions": [],
   "licenses": [],
   "permissionPolicies": [],
   "code": "",
   "userCount": 0,
   "roleNeedsUpdate": true,
   "default": true,
   "selfUri": ""
}
	 *
     */
     self.roles.createOrganizationRole = function(body){
		var path = '/api/v1/authorization/roles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.roles = self.roles || {};
	self.roles.default = self.roles.default || {};

	/**
     * This endpoint serves several purposes. 1. It provides the org with default roles. This is important for default roles that will be added after go-live (they can retroactively add the new default-role). Note: When not using a query param of force=true, it only adds the default roles not configured for the org; it does not overwrite roles. 2. Using the query param force=true, you can restore all default roles. Note: This does not have an effect on custom roles.
     * @method restoreAllDefaultRoles
	 * @memberof authorization/roles/default

	* @param {boolean} force - 
	 *
     */
     self.roles.default.restoreAllDefaultRoles = function(force){
		var path = '/api/v1/authorization/roles/default';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(force !== undefined && force !== null){
			queryParameters.force = force;
		}



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.roles = self.roles || {};
	self.roles.default = self.roles.default || {};

	/**
     * 
     * @method restoreDefaultRoles
	 * @memberof authorization/roles/default

	* @param {} body - 
	 *
     */
     self.roles.default.restoreDefaultRoles = function(body){
		var path = '/api/v1/authorization/roles/default';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.roles = self.roles || {};
	self.roles.comparedefault = self.roles.comparedefault || {};

	/**
     * Compares any organization role to a default role id and show differences
     * @method getOrganizationRoleToDefaultRoleComparison
	 * @memberof authorization/roles/comparedefault

	* @param {string} leftRoleId - Left Role ID

	* @param {string} rightRoleId - Right Role id
	 *
     */
     self.roles.comparedefault.getOrganizationRoleToDefaultRoleComparison = function(leftRoleId, rightRoleId){
		var path = '/api/v1/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{leftRoleId}', leftRoleId);

        if(leftRoleId === undefined && leftRoleId !== null){
			throw 'Missing required  parameter: leftRoleId';
        }

        path = path.replace('{rightRoleId}', rightRoleId);

        if(rightRoleId === undefined && rightRoleId !== null){
			throw 'Missing required  parameter: rightRoleId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.roles = self.roles || {};
	self.roles.comparedefault = self.roles.comparedefault || {};

	/**
     * Allows users to compare their existing roles in an unsaved state to its default role
     * @method getAnExistingUnsavedRoleToDefaultRoleComparison
	 * @memberof authorization/roles/comparedefault

	* @param {string} leftRoleId - Left Role ID

	* @param {string} rightRoleId - Right Role id

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "description": "",
   "defaultRoleId": "",
   "permissions": [],
   "licenses": [],
   "permissionPolicies": [],
   "code": "",
   "userCount": 0,
   "roleNeedsUpdate": true,
   "default": true,
   "selfUri": ""
}
	 *
     */
     self.roles.comparedefault.getAnExistingUnsavedRoleToDefaultRoleComparison = function(leftRoleId, rightRoleId, body){
		var path = '/api/v1/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{leftRoleId}', leftRoleId);

        if(leftRoleId === undefined && leftRoleId !== null){
			throw 'Missing required  parameter: leftRoleId';
        }

        path = path.replace('{rightRoleId}', rightRoleId);

        if(rightRoleId === undefined && rightRoleId !== null){
			throw 'Missing required  parameter: rightRoleId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.roles = self.roles || {};

	/**
     * Get the organization role specified by its ID.
     * @method getOrganizationRole
	 * @memberof authorization/roles

	* @param {string} roleId - Role ID
	 *
     */
     self.roles.getOrganizationRole = function(roleId){
		var path = '/api/v1/authorization/roles/{roleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{roleId}', roleId);

        if(roleId === undefined && roleId !== null){
			throw 'Missing required  parameter: roleId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.roles = self.roles || {};

	/**
     * Update
     * @method updateOrganizationRole
	 * @memberof authorization/roles

	* @param {string} roleId - Role ID

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "description": "",
   "defaultRoleId": "",
   "permissions": [],
   "licenses": [],
   "permissionPolicies": [],
   "code": "",
   "userCount": 0,
   "roleNeedsUpdate": true,
   "default": true,
   "selfUri": ""
}
	 *
     */
     self.roles.updateOrganizationRole = function(roleId, body){
		var path = '/api/v1/authorization/roles/{roleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{roleId}', roleId);

        if(roleId === undefined && roleId !== null){
			throw 'Missing required  parameter: roleId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.roles = self.roles || {};

	/**
     * 
     * @method deleteOrganizationRole
	 * @memberof authorization/roles

	* @param {string} roleId - Role ID
	 *
     */
     self.roles.deleteOrganizationRole = function(roleId){
		var path = '/api/v1/authorization/roles/{roleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{roleId}', roleId);

        if(roleId === undefined && roleId !== null){
			throw 'Missing required  parameter: roleId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.roles = self.roles || {};

	/**
     * Patch Organization Role for needsUpdate Field
     * @method patchOrganizationRole
	 * @memberof authorization/roles

	* @param {string} roleId - Role ID

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "description": "",
   "defaultRoleId": "",
   "permissions": [],
   "licenses": [],
   "permissionPolicies": [],
   "code": "",
   "userCount": 0,
   "roleNeedsUpdate": true,
   "default": true,
   "selfUri": ""
}
	 *
     */
     self.roles.patchOrganizationRole = function(roleId, body){
		var path = '/api/v1/authorization/roles/{roleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{roleId}', roleId);

        if(roleId === undefined && roleId !== null){
			throw 'Missing required  parameter: roleId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PATCH', path + '?' +$.param(queryParameters), requestBody);
     };
	self.roles = self.roles || {};
	self.roles.users = self.roles.users || {};
	self.roles.users.add = self.roles.users.add || {};

	/**
     * 
     * @method setsTheUsersForTheRole
	 * @memberof authorization/roles/users/add

	* @param {string} roleId - Role ID

	* @param {} body - 
	 *
     */
     self.roles.users.add.setsTheUsersForTheRole = function(roleId, body){
		var path = '/api/v1/authorization/roles/{roleId}/users/add';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{roleId}', roleId);

        if(roleId === undefined && roleId !== null){
			throw 'Missing required  parameter: roleId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.roles = self.roles || {};
	self.roles.users = self.roles.users || {};
	self.roles.users.remove = self.roles.users.remove || {};

	/**
     * 
     * @method removesTheUsersFromTheRole
	 * @memberof authorization/roles/users/remove

	* @param {string} roleId - Role ID

	* @param {} body - 
	 *
     */
     self.roles.users.remove.removesTheUsersFromTheRole = function(roleId, body){
		var path = '/api/v1/authorization/roles/{roleId}/users/remove';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{roleId}', roleId);

        if(roleId === undefined && roleId !== null){
			throw 'Missing required  parameter: roleId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.users = self.users || {};
	self.users.roles = self.users.roles || {};

	/**
     * 
     * @method getUserAuthorizationInformation
	 * @memberof authorization/users/roles

	* @param {string} userId - User ID
	 *
     */
     self.users.roles.getUserAuthorizationInformation = function(userId){
		var path = '/api/v1/authorization/users/{userId}/roles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.users = self.users || {};
	self.users.roles = self.users.roles || {};

	/**
     * 
     * @method setUserRoles
	 * @memberof authorization/users/roles

	* @param {string} userId - User ID

	* @param {} body - 
	 *
     */
     self.users.roles.setUserRoles = function(userId, body){
		var path = '/api/v1/authorization/users/{userId}/roles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.users = self.users || {};
	self.users.roles = self.users.roles || {};

	/**
     * 
     * @method removeAllRoles
	 * @memberof authorization/users/roles

	* @param {string} userId - User ID
	 *
     */
     self.users.roles.removeAllRoles = function(userId){
		var path = '/api/v1/authorization/users/{userId}/roles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
