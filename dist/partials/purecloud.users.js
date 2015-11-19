if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.users";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.users = (function (PureCloud) {
	/**
	* @namespace users
	**/
	/**
	* @namespace users/me
	**/
	/**
	* @namespace users/callforwarding
	**/
	/**
	* @namespace users/greetings
	**/
	/**
	* @namespace users/greetings/defaults
	**/
	/**
	* @namespace users/outofoffice
	**/
	/**
	* @namespace users/presences
	**/
	/**
	* @namespace users/primarypresence
	**/
	/**
	* @namespace users/queues
	**/
	/**
	* @namespace users/roles
	**/
	/**
	* @namespace users/routingstatus
	**/
	/**
	* @namespace users/settablestatuses
	**/
	/**
	* @namespace users/skills
	**/

	var self = {};

	/**
     * 
     * @method getUsers
	 * @memberof users

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number

	* @param {array} id - id

	* @param {string} sortBy - Sort by

	* @param {string} role - Role

	* @param {string} name - Name

	* @param {string} username - Username

	* @param {array} skill - Skill

	* @param {array} expand - Which fields, if any, to expand
	 *
     */
     self.getUsers = function(pageSize, pageNumber, id, sortBy, role, name, username, skill, expand){
		var path = '/api/v1/users';
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


		if(id !== undefined && id !== null){
			queryParameters.id = id;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(role !== undefined && role !== null){
			queryParameters.role = role;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(username !== undefined && username !== null){
			queryParameters.username = username;
		}


		if(skill !== undefined && skill !== null){
			queryParameters.skill = skill;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	/**
     * 
     * @method createUser
	 * @memberof users

	* @param {} body - User
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "username": "",
   "email": "",
   "displayName": "",
   "phoneNumber": "",
   "userImages": [],
   "status": {
      "id": "",
      "name": "",
      "alertable": true,
      "dateModified": "",
      "type": "",
      "selfUri": ""
   },
   "chat": {
      "jabberId": ""
   },
   "roles": [],
   "voicemailEnabled": true,
   "department": "",
   "title": "",
   "routingStatus": {
      "userId": "",
      "status": "",
      "startTime": ""
   },
   "password": "",
   "primaryPresence": {
      "id": "",
      "name": "",
      "user": {},
      "source": "",
      "presenceDefinition": {},
      "message": "",
      "modifiedBy": {},
      "modifiedDate": "",
      "selfUri": ""
   },
   "conversations": {
      "userId": "",
      "call": {},
      "email": {},
      "chat": {}
   },
   "outOfOffice": {
      "id": "",
      "name": "",
      "user": {},
      "startDate": "",
      "endDate": "",
      "active": true,
      "selfUri": ""
   },
   "permissions": [],
   "selfUri": "",
   "requestedStatus": {
      "id": "",
      "name": "",
      "alertable": true,
      "dateModified": "",
      "type": "",
      "selfUri": ""
   },
   "defaultStationUri": "",
   "stationUri": "",
   "lastStationUri": ""
}
	 *
     */
     self.createUser = function(body){
		var path = '/api/v1/users';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.me = self.me || {};

	/**
     * 
     * @method getUser
	 * @memberof users/me

	* @param {array} expand - Which fields, if any, to expand
	 *
     */
     self.me.getUser = function(expand){
		var path = '/api/v1/users/me';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	/**
     * 
     * @method getUser
	 * @memberof users

	* @param {string} userId - User ID

	* @param {array} expand - Which fields, if any, to expand
	 *
     */
     self.getUser = function(userId, expand){
		var path = '/api/v1/users/{userId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	/**
     * 
     * @method setUserstation
	 * @memberof users

	* @param {string} userId - User ID

	* @param {} body - stationUri
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "username": "",
   "email": "",
   "displayName": "",
   "phoneNumber": "",
   "userImages": [],
   "status": {
      "id": "",
      "name": "",
      "alertable": true,
      "dateModified": "",
      "type": "",
      "selfUri": ""
   },
   "chat": {
      "jabberId": ""
   },
   "roles": [],
   "voicemailEnabled": true,
   "department": "",
   "title": "",
   "routingStatus": {
      "userId": "",
      "status": "",
      "startTime": ""
   },
   "password": "",
   "primaryPresence": {
      "id": "",
      "name": "",
      "user": {},
      "source": "",
      "presenceDefinition": {},
      "message": "",
      "modifiedBy": {},
      "modifiedDate": "",
      "selfUri": ""
   },
   "conversations": {
      "userId": "",
      "call": {},
      "email": {},
      "chat": {}
   },
   "outOfOffice": {
      "id": "",
      "name": "",
      "user": {},
      "startDate": "",
      "endDate": "",
      "active": true,
      "selfUri": ""
   },
   "permissions": [],
   "selfUri": "",
   "requestedStatus": {
      "id": "",
      "name": "",
      "alertable": true,
      "dateModified": "",
      "type": "",
      "selfUri": ""
   },
   "defaultStationUri": "",
   "stationUri": "",
   "lastStationUri": ""
}
	 *
     */
     self.setUserstation = function(userId, body){
		var path = '/api/v1/users/{userId}';
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

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.callforwarding = self.callforwarding || {};

	/**
     * 
     * @method getCallforwarding
	 * @memberof users/callforwarding

	* @param {string} userId - 
	 *
     */
     self.callforwarding.getCallforwarding = function(userId){
		var path = '/api/v1/users/{userId}/callforwarding';
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
	self.callforwarding = self.callforwarding || {};

	/**
     * 
     * @method updateCallforwarding
	 * @memberof users/callforwarding

	* @param {string} userId - 

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "user": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "status": {},
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "enabled": true,
   "phoneNumber": "",
   "modifiedDate": "",
   "selfUri": ""
}
	 *
     */
     self.callforwarding.updateCallforwarding = function(userId, body){
		var path = '/api/v1/users/{userId}/callforwarding';
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
	self.callforwarding = self.callforwarding || {};

	/**
     * 
     * @method patchCallforwarding
	 * @memberof users/callforwarding

	* @param {string} userId - 

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "user": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "status": {},
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "enabled": true,
   "phoneNumber": "",
   "modifiedDate": "",
   "selfUri": ""
}
	 *
     */
     self.callforwarding.patchCallforwarding = function(userId, body){
		var path = '/api/v1/users/{userId}/callforwarding';
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



		return PureCloud.makeRequest('PATCH', path + '?' +$.param(queryParameters), requestBody);
     };
	self.greetings = self.greetings || {};

	/**
     * 
     * @method getUserGreetings
	 * @memberof users/greetings

	* @param {string} userId - User ID

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number
	 *
     */
     self.greetings.getUserGreetings = function(userId, pageSize, pageNumber){
		var path = '/api/v1/users/{userId}/greetings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.greetings = self.greetings || {};

	/**
     * 
     * @method createUserGreeting
	 * @memberof users/greetings

	* @param {string} userId - User ID

	* @param {} body - The Greeting to create
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "type": "",
   "ownerType": "",
   "owner": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "audioFile": {
      "durationMilliseconds": 0,
      "sizeBytes": 0,
      "selfUri": ""
   },
   "audioTTS": "",
   "createdDate": "",
   "createdBy": "",
   "modifiedDate": "",
   "modifiedBy": "",
   "selfUri": ""
}
	 *
     */
     self.greetings.createUserGreeting = function(userId, body){
		var path = '/api/v1/users/{userId}/greetings';
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

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.greetings = self.greetings || {};
	self.greetings.defaults = self.greetings.defaults || {};

	/**
     * 
     * @method getUserDefaultgreetingslist
	 * @memberof users/greetings/defaults

	* @param {string} userId - User ID
	 *
     */
     self.greetings.defaults.getUserDefaultgreetingslist = function(userId){
		var path = '/api/v1/users/{userId}/greetings/defaults';
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
	self.greetings = self.greetings || {};
	self.greetings.defaults = self.greetings.defaults || {};

	/**
     * 
     * @method updateUserDefaultgreetingslist
	 * @memberof users/greetings/defaults

	* @param {string} userId - User ID

	* @param {} body - The updated defaultGreetingList
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "owner": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "ownerType": "",
   "greetings": {},
   "createdDate": "",
   "createdBy": "",
   "modifiedDate": "",
   "modifiedBy": "",
   "selfUri": ""
}
	 *
     */
     self.greetings.defaults.updateUserDefaultgreetingslist = function(userId, body){
		var path = '/api/v1/users/{userId}/greetings/defaults';
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

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.outofoffice = self.outofoffice || {};

	/**
     * 
     * @method getOutofoffice
	 * @memberof users/outofoffice

	* @param {string} userId - User ID
	 *
     */
     self.outofoffice.getOutofoffice = function(userId){
		var path = '/api/v1/users/{userId}/outofoffice';
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
	self.outofoffice = self.outofoffice || {};

	/**
     * 
     * @method updateOutofoffice
	 * @memberof users/outofoffice

	* @param {string} userId - User ID

	* @param {} body - The updated UserPresence
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "user": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "status": {},
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "startDate": "",
   "endDate": "",
   "active": true,
   "selfUri": ""
}
	 *
     */
     self.outofoffice.updateOutofoffice = function(userId, body){
		var path = '/api/v1/users/{userId}/outofoffice';
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

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.presences = self.presences || {};

	/**
     * 
     * @method getUserpresences
	 * @memberof users/presences

	* @param {string} userId - User ID

	* @param {integer} pageNumber - Page number

	* @param {integer} pageSize - Page size
	 *
     */
     self.presences.getUserpresences = function(userId, pageNumber, pageSize){
		var path = '/api/v1/users/{userId}/presences';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.presences = self.presences || {};

	/**
     * 
     * @method getUserpresence
	 * @memberof users/presences

	* @param {string} userId - User ID

	* @param {string} source - Source
	 *
     */
     self.presences.getUserpresence = function(userId, source){
		var path = '/api/v1/users/{userId}/presences/{source}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        path = path.replace('{source}', source);

        if(source === undefined && source !== null){
			throw 'Missing required  parameter: source';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.presences = self.presences || {};

	/**
     * 
     * @method updateUserpresence
	 * @memberof users/presences

	* @param {string} userId - User ID

	* @param {string} source - Source

	* @param {} body - The updated UserPresence
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "user": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "status": {},
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "source": "",
   "presenceDefinition": {
      "id": "",
      "name": "",
      "languageLabels": {},
      "systemPresence": "",
      "deactivated": true,
      "createdBy": {},
      "createdDate": "",
      "modifiedBy": {},
      "modifiedDate": "",
      "selfUri": ""
   },
   "message": "",
   "modifiedBy": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "status": {},
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "modifiedDate": "",
   "selfUri": ""
}
	 *
     */
     self.presences.updateUserpresence = function(userId, source, body){
		var path = '/api/v1/users/{userId}/presences/{source}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        path = path.replace('{source}', source);

        if(source === undefined && source !== null){
			throw 'Missing required  parameter: source';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.presences = self.presences || {};

	/**
     * 
     * @method patchUserpresence
	 * @memberof users/presences

	* @param {string} userId - User ID

	* @param {string} source - Source

	* @param {} body - The patched UserPresence
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "user": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "status": {},
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "source": "",
   "presenceDefinition": {
      "id": "",
      "name": "",
      "languageLabels": {},
      "systemPresence": "",
      "deactivated": true,
      "createdBy": {},
      "createdDate": "",
      "modifiedBy": {},
      "modifiedDate": "",
      "selfUri": ""
   },
   "message": "",
   "modifiedBy": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "status": {},
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "modifiedDate": "",
   "selfUri": ""
}
	 *
     */
     self.presences.patchUserpresence = function(userId, source, body){
		var path = '/api/v1/users/{userId}/presences/{source}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        path = path.replace('{source}', source);

        if(source === undefined && source !== null){
			throw 'Missing required  parameter: source';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }



		return PureCloud.makeRequest('PATCH', path + '?' +$.param(queryParameters), requestBody);
     };
	self.primarypresence = self.primarypresence || {};

	/**
     * 
     * @method getPrimaryuserpresence
	 * @memberof users/primarypresence

	* @param {string} userId - User ID
	 *
     */
     self.primarypresence.getPrimaryuserpresence = function(userId){
		var path = '/api/v1/users/{userId}/primarypresence';
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
	self.queues = self.queues || {};

	/**
     * 
     * @method getUserQueues
	 * @memberof users/queues

	* @param {string} userId - User ID

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number
	 *
     */
     self.queues.getUserQueues = function(userId, pageSize, pageNumber){
		var path = '/api/v1/users/{userId}/queues';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.queues = self.queues || {};

	/**
     * 
     * @method joinunjoinUserQueues
	 * @memberof users/queues

	* @param {string} userId - User ID

	* @param {} body - User Queues
	 *
     */
     self.queues.joinunjoinUserQueues = function(userId, body){
		var path = '/api/v1/users/{userId}/queues';
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



		return PureCloud.makeRequest('PATCH', path + '?' +$.param(queryParameters), requestBody);
     };
	self.queues = self.queues || {};

	/**
     * 
     * @method joinunjoinUserqueue
	 * @memberof users/queues

	* @param {string} queueId - Queue ID

	* @param {string} userId - User ID

	* @param {} body - Queue Member
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "wrapupCodes": [],
   "mediaSettings": {},
   "bullseye": {
      "rings": []
   },
   "acwSettings": {
      "wrapupPrompt": "",
      "timeoutMs": 0
   },
   "phoneNumber": "",
   "skillEvaluationMethod": "",
   "queueFlow": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "callingPartyName": "",
   "callingPartyNumber": "",
   "joined": true,
   "memberCount": 0,
   "selfUri": ""
}
	 *
     */
     self.queues.joinunjoinUserqueue = function(queueId, userId, body){
		var path = '/api/v1/users/{userId}/queues/{queueId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        path = path.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PATCH', path + '?' +$.param(queryParameters), requestBody);
     };
	self.roles = self.roles || {};

	/**
     * 
     * @method listRolesForUser
	 * @memberof users/roles

	* @param {string} userId - User ID
	 *
     */
     self.roles.listRolesForUser = function(userId){
		var path = '/api/v1/users/{userId}/roles';
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
	self.routingstatus = self.routingstatus || {};

	/**
     * 
     * @method getRoutingStatus
	 * @memberof users/routingstatus

	* @param {string} userId - User ID
	 *
     */
     self.routingstatus.getRoutingStatus = function(userId){
		var path = '/api/v1/users/{userId}/routingstatus';
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
	self.routingstatus = self.routingstatus || {};

	/**
     * 
     * @method updateRoutingStatus
	 * @memberof users/routingstatus

	* @param {string} userId - User ID

	* @param {} body - Routing Status
	 * @example
	 * Body Example:
	 * {
   "userId": "",
   "status": "",
   "startTime": ""
}
	 *
     */
     self.routingstatus.updateRoutingStatus = function(userId, body){
		var path = '/api/v1/users/{userId}/routingstatus';
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
	self.settablestatuses = self.settablestatuses || {};

	/**
     * 
     * @method getSettableStatuses
	 * @memberof users/settablestatuses

	* @param {string} userId - User ID
	 *
     */
     self.settablestatuses.getSettableStatuses = function(userId){
		var path = '/api/v1/users/{userId}/settablestatuses';
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
	self.skills = self.skills || {};

	/**
     * 
     * @method getUserSkills
	 * @memberof users/skills

	* @param {string} userId - User ID
	 *
     */
     self.skills.getUserSkills = function(userId){
		var path = '/api/v1/users/{userId}/skills';
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

	return self;
}(PureCloud));
