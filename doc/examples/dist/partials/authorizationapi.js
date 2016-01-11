/**
* @class
* @example
* var api = new AuthorizationApi(pureCloudSession);
*/
var AuthorizationApi = function (pureCloudSession) {
	/**
     * @summary Retrieve a list of all licenses defined in the system
	 * @description 
	 * @memberOf AuthorizationApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getLicenses(pageSize, pageNumber){
		var apipath = '/api/v1/authorization/licenses';
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


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getLicenses = getLicenses;
	/**
     * @summary Get all permissions.
	 * @description Retrieve a list of all permission defined in the system.
	 * @memberOf AuthorizationApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getPermissions(pageSize, pageNumber){
		var apipath = '/api/v1/authorization/permissions';
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


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPermissions = getPermissions;
	/**
     * @summary Retrieve a list of all roles defined for the organization
	 * @description 
	 * @memberOf AuthorizationApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	* @param {array} permission - 
	* @param {boolean} userCount - 
	*/
	function getRoles(pageSize, pageNumber, sortBy, expand, permission, userCount){
		var apipath = '/api/v1/authorization/roles';
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


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRoles = getRoles;
	/**
     * @summary Create an organization role.
	 * @description 
	 * @memberOf AuthorizationApi#
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
	*/
	function createRoles(body){
		var apipath = '/api/v1/authorization/roles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createRoles = createRoles;
	/**
     * @summary Restores all default roles
	 * @description This endpoint serves several purposes. 1. It provides the org with default roles. This is important for default roles that will be added after go-live (they can retroactively add the new default-role). Note: When not using a query param of force=true, it only adds the default roles not configured for the org; it does not overwrite roles. 2. Using the query param force=true, you can restore all default roles. Note: This does not have an effect on custom roles.
	 * @memberOf AuthorizationApi#
	* @param {boolean} force - Restore default roles
	*/
	function createRolesDefault(force){
		var apipath = '/api/v1/authorization/roles/default';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(force !== undefined && force !== null){
			queryParameters.force = force;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createRolesDefault = createRolesDefault;
	/**
     * @summary Restore specified default roles
	 * @description 
	 * @memberOf AuthorizationApi#
	* @param {} body - 
	*/
	function updateRolesDefault(body){
		var apipath = '/api/v1/authorization/roles/default';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateRolesDefault = updateRolesDefault;
	/**
     * @summary Get an org role to default role comparison comparison
	 * @description Compares any organization role to a default role id and show differences
	 * @memberOf AuthorizationApi#
	* @param {string} leftRoleId - Left Role ID
	* @param {string} rightRoleId - Right Role id
	*/
	function getRolesLeftRoleComparedefaultByRightRoleId(leftRoleId, rightRoleId){
		var apipath = '/api/v1/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{leftRoleId}', leftRoleId);

        if(leftRoleId === undefined && leftRoleId !== null){
			throw 'Missing required  parameter: leftRoleId';
        }

        apipath = apipath.replace('{rightRoleId}', rightRoleId);

        if(rightRoleId === undefined && rightRoleId !== null){
			throw 'Missing required  parameter: rightRoleId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRolesLeftRoleComparedefaultByRightRoleId = getRolesLeftRoleComparedefaultByRightRoleId;
	/**
     * @summary  Get an unsaved org role to default role comparison
	 * @description Allows users to compare their existing roles in an unsaved state to its default role
	 * @memberOf AuthorizationApi#
	* @param {string} leftRoleId - Left Role ID
	* @param {string} rightRoleId - Right Role id
	* @param {} body - Allows users to compare their existing roles in an unsaved state to its default role
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
	*/
	function createRolesLeftRoleComparedefaultByRightRoleId(leftRoleId, rightRoleId, body){
		var apipath = '/api/v1/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{leftRoleId}', leftRoleId);

        if(leftRoleId === undefined && leftRoleId !== null){
			throw 'Missing required  parameter: leftRoleId';
        }

        apipath = apipath.replace('{rightRoleId}', rightRoleId);

        if(rightRoleId === undefined && rightRoleId !== null){
			throw 'Missing required  parameter: rightRoleId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createRolesLeftRoleComparedefaultByRightRoleId = createRolesLeftRoleComparedefaultByRightRoleId;
	/**
     * @summary Get a single organization role.
	 * @description Get the organization role specified by its ID.
	 * @memberOf AuthorizationApi#
	* @param {string} roleId - Role ID
	*/
	function getRole(roleId){
		var apipath = '/api/v1/authorization/roles/{roleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{roleId}', roleId);

        if(roleId === undefined && roleId !== null){
			throw 'Missing required  parameter: roleId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRole = getRole;
	/**
     * @summary Update an organization role.
	 * @description Update
	 * @memberOf AuthorizationApi#
	* @param {string} roleId - Role ID
	* @param {} body - Update
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
	*/
	function updateRole(roleId, body){
		var apipath = '/api/v1/authorization/roles/{roleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{roleId}', roleId);

        if(roleId === undefined && roleId !== null){
			throw 'Missing required  parameter: roleId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateRole = updateRole;
	/**
     * @summary Delete an organization role.
	 * @description 
	 * @memberOf AuthorizationApi#
	* @param {string} roleId - Role ID
	*/
	function deleteRole(roleId){
		var apipath = '/api/v1/authorization/roles/{roleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{roleId}', roleId);

        if(roleId === undefined && roleId !== null){
			throw 'Missing required  parameter: roleId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteRole = deleteRole;
	/**
     * @summary Patch Organization Role for needsUpdate Field
	 * @description Patch Organization Role for needsUpdate Field
	 * @memberOf AuthorizationApi#
	* @param {string} roleId - Role ID
	* @param {} body - Patch Organization Role for needsUpdate Field
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
	*/
	function patchRole(roleId, body){
		var apipath = '/api/v1/authorization/roles/{roleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{roleId}', roleId);

        if(roleId === undefined && roleId !== null){
			throw 'Missing required  parameter: roleId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchRole = patchRole;
	/**
     * @summary Sets the users for the role
	 * @description 
	 * @memberOf AuthorizationApi#
	* @param {string} roleId - Role ID
	* @param {} body - 
	*/
	function updateRoleUsersAdd(roleId, body){
		var apipath = '/api/v1/authorization/roles/{roleId}/users/add';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{roleId}', roleId);

        if(roleId === undefined && roleId !== null){
			throw 'Missing required  parameter: roleId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateRoleUsersAdd = updateRoleUsersAdd;
	/**
     * @summary Removes the users from the role
	 * @description 
	 * @memberOf AuthorizationApi#
	* @param {string} roleId - Role ID
	* @param {} body - 
	*/
	function updateRoleUsersRemove(roleId, body){
		var apipath = '/api/v1/authorization/roles/{roleId}/users/remove';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{roleId}', roleId);

        if(roleId === undefined && roleId !== null){
			throw 'Missing required  parameter: roleId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateRoleUsersRemove = updateRoleUsersRemove;
	/**
     * @summary Get the list of roles for a user.
	 * @description 
	 * @memberOf AuthorizationApi#
	* @param {string} userId - User ID
	*/
	function getUserRoles(userId){
		var apipath = '/api/v1/authorization/users/{userId}/roles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserRoles = getUserRoles;
	/**
     * @summary Sets the user's roles
	 * @description 
	 * @memberOf AuthorizationApi#
	* @param {string} userId - User ID
	* @param {} body - 
	*/
	function updateUserRoles(userId, body){
		var apipath = '/api/v1/authorization/users/{userId}/roles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateUserRoles = updateUserRoles;
	/**
     * @summary Removes all the roles from the user.
	 * @description 
	 * @memberOf AuthorizationApi#
	* @param {string} userId - User ID
	*/
	function deleteUserRoles(userId){
		var apipath = '/api/v1/authorization/users/{userId}/roles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteUserRoles = deleteUserRoles;

    return self;
};
