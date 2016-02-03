/**
* @class
* @example
* var api = new TelephonyProvidersEdgeApi(pureCloudSession);
*/
var TelephonyProvidersEdgeApi = function (pureCloudSession) {
	/**
     * @summary Get the list of edge groups.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} name - Name
	* @param {string} sortBy - Sort by
	*/
	function getProvidersEdgeEdgegroups(pageSize, pageNumber, name, sortBy){
		var apipath = '/api/v1/telephony/providers/edge/edgegroups';
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


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgeEdgegroups = getProvidersEdgeEdgegroups;
	/**
     * @summary Create an edge group.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {} body - EdgeGroup
	 * @example
	 * Body Example:
	 * {
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
   "managed": true,
   "edgeTrunkBaseAssignment": {
      "family": 0,
      "trunkBase": {}
   },
   "phoneTrunkBaseAssignments": []
}
	*/
	function createProvidersEdgeEdgegroups(body){
		var apipath = '/api/v1/telephony/providers/edge/edgegroups';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createProvidersEdgeEdgegroups = createProvidersEdgeEdgegroups;
	/**
     * @summary Get edge group.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} edgeGroupId - Edge group ID
	*/
	function getProvidersEdgeEdgeGroup(edgeGroupId){
		var apipath = '/api/v1/telephony/providers/edge/edgegroups/{edgeGroupId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeGroupId}', edgeGroupId);

        if(edgeGroupId === undefined && edgeGroupId !== null){
			throw 'Missing required  parameter: edgeGroupId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgeEdgeGroup = getProvidersEdgeEdgeGroup;
	/**
     * @summary Update an edge group.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} edgeGroupId - Edge group ID
	* @param {} body - EdgeGroup
	 * @example
	 * Body Example:
	 * {
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
   "managed": true,
   "edgeTrunkBaseAssignment": {
      "family": 0,
      "trunkBase": {}
   },
   "phoneTrunkBaseAssignments": []
}
	*/
	function updateProvidersEdgeEdgeGroup(edgeGroupId, body){
		var apipath = '/api/v1/telephony/providers/edge/edgegroups/{edgeGroupId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeGroupId}', edgeGroupId);

        if(edgeGroupId === undefined && edgeGroupId !== null){
			throw 'Missing required  parameter: edgeGroupId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateProvidersEdgeEdgeGroup = updateProvidersEdgeEdgeGroup;
	/**
     * @summary Delete an edge group.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} edgeGroupId - Edge group ID
	*/
	function deleteProvidersEdgeEdgeGroup(edgeGroupId){
		var apipath = '/api/v1/telephony/providers/edge/edgegroups/{edgeGroupId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeGroupId}', edgeGroupId);

        if(edgeGroupId === undefined && edgeGroupId !== null){
			throw 'Missing required  parameter: edgeGroupId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteProvidersEdgeEdgeGroup = deleteProvidersEdgeEdgeGroup;
	/**
     * @summary Get a listing of line base settings objects
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - Value by which to sort
	* @param {string} sortOrder - Sort order
	*/
	function getProvidersEdgeLinebasesettings(pageNumber, pageSize, sortBy, sortOrder){
		var apipath = '/api/v1/telephony/providers/edge/linebasesettings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgeLinebasesettings = getProvidersEdgeLinebasesettings;
	/**
     * @summary Get a line base settings object by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} lineBaseId - Line base ID
	*/
	function getProvidersEdgeLinebasesettingsLineBase(lineBaseId){
		var apipath = '/api/v1/telephony/providers/edge/linebasesettings/{lineBaseId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{lineBaseId}', lineBaseId);

        if(lineBaseId === undefined && lineBaseId !== null){
			throw 'Missing required  parameter: lineBaseId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgeLinebasesettingsLineBase = getProvidersEdgeLinebasesettingsLineBase;
	/**
     * @summary Get a list of Lines
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} name - Name
	* @param {string} sortBy - Value by which to sort
	* @param {array} expand - Fields to expand in the response, comma-separated
	*/
	function getProvidersEdgeLines(pageSize, pageNumber, name, sortBy, expand){
		var apipath = '/api/v1/telephony/providers/edge/lines';
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


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgeLines = getProvidersEdgeLines;
	/**
     * @summary Get a Line instance template based on a Line Base Settings object. This object can then be modified and saved as a new Line instance
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} lineBaseSettingsId - The id of a Line Base Settings object upon which to base this Line
	*/
	function getProvidersEdgeLinesTemplate(lineBaseSettingsId){
		var apipath = '/api/v1/telephony/providers/edge/lines/template';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(lineBaseSettingsId !== undefined && lineBaseSettingsId !== null){
			queryParameters.lineBaseSettingsId = lineBaseSettingsId;
		}

        if(lineBaseSettingsId === undefined && lineBaseSettingsId !== null){
			throw 'Missing required  parameter: lineBaseSettingsId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgeLinesTemplate = getProvidersEdgeLinesTemplate;
	/**
     * @summary Get a Line by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} lineId - Line ID
	*/
	function getProvidersEdgeLine(lineId){
		var apipath = '/api/v1/telephony/providers/edge/lines/{lineId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{lineId}', lineId);

        if(lineId === undefined && lineId !== null){
			throw 'Missing required  parameter: lineId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgeLine = getProvidersEdgeLine;
	/**
     * @summary Get outbound routes
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} name - Name
	* @param {string} siteid - Filter by site.id
	* @param {string} sortBy - Sort by
	*/
	function getProvidersEdgeOutboundroutes(pageSize, pageNumber, name, siteid, sortBy){
		var apipath = '/api/v1/telephony/providers/edge/outboundroutes';
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


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(siteid !== undefined && siteid !== null){
			queryParameters.site.id = siteid;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgeOutboundroutes = getProvidersEdgeOutboundroutes;
	/**
     * @summary Create outbound rule
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {} body - OutboundRoute
	 * @example
	 * Body Example:
	 * {
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
   "site": {
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
      "primarySites": [],
      "secondarySites": [],
      "primaryEdges": [],
      "secondaryEdges": [],
      "addresses": [],
      "edges": [],
      "edgeAutoUpdateConfig": {},
      "location": {},
      "managed": true
   },
   "classificationTypes": [],
   "enabled": true,
   "distribution": "",
   "managed": true,
   "externalTrunkBases": []
}
	*/
	function createProvidersEdgeOutboundroutes(body){
		var apipath = '/api/v1/telephony/providers/edge/outboundroutes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createProvidersEdgeOutboundroutes = createProvidersEdgeOutboundroutes;
	/**
     * @summary Get outbound route
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} outboundRouteId - Outbound route ID
	*/
	function getProvidersEdgeOutboundRoute(outboundRouteId){
		var apipath = '/api/v1/telephony/providers/edge/outboundroutes/{outboundRouteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{outboundRouteId}', outboundRouteId);

        if(outboundRouteId === undefined && outboundRouteId !== null){
			throw 'Missing required  parameter: outboundRouteId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgeOutboundRoute = getProvidersEdgeOutboundRoute;
	/**
     * @summary Update outbound route
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} outboundRouteId - Outbound route ID
	* @param {} body - OutboundRoute
	 * @example
	 * Body Example:
	 * {
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
   "site": {
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
      "primarySites": [],
      "secondarySites": [],
      "primaryEdges": [],
      "secondaryEdges": [],
      "addresses": [],
      "edges": [],
      "edgeAutoUpdateConfig": {},
      "location": {},
      "managed": true
   },
   "classificationTypes": [],
   "enabled": true,
   "distribution": "",
   "managed": true,
   "externalTrunkBases": []
}
	*/
	function updateProvidersEdgeOutboundRoute(outboundRouteId, body){
		var apipath = '/api/v1/telephony/providers/edge/outboundroutes/{outboundRouteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{outboundRouteId}', outboundRouteId);

        if(outboundRouteId === undefined && outboundRouteId !== null){
			throw 'Missing required  parameter: outboundRouteId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateProvidersEdgeOutboundRoute = updateProvidersEdgeOutboundRoute;
	/**
     * @summary Delete Outbound Route
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} outboundRouteId - Outbound route ID
	*/
	function deleteProvidersEdgeOutboundRoute(outboundRouteId){
		var apipath = '/api/v1/telephony/providers/edge/outboundroutes/{outboundRouteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{outboundRouteId}', outboundRouteId);

        if(outboundRouteId === undefined && outboundRouteId !== null){
			throw 'Missing required  parameter: outboundRouteId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteProvidersEdgeOutboundRoute = deleteProvidersEdgeOutboundRoute;
	/**
     * @summary Get a list of Phone Base Settings objects
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - Value by which to sort
	* @param {string} sortOrder - Sort order
	*/
	function getProvidersEdgePhonebasesettings(pageNumber, pageSize, sortBy, sortOrder){
		var apipath = '/api/v1/telephony/providers/edge/phonebasesettings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgePhonebasesettings = getProvidersEdgePhonebasesettings;
	/**
     * @summary Create a new Phone Base Settings object
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "phoneMetaBase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lines": [],
   "properties": {},
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true
   }
}
	*/
	function createProvidersEdgePhonebasesettings(body){
		var apipath = '/api/v1/telephony/providers/edge/phonebasesettings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createProvidersEdgePhonebasesettings = createProvidersEdgePhonebasesettings;
	/**
     * @summary Get a list of available makes and models to create a new Phone Base Settings
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getProvidersEdgePhonebasesettingsAvailablemetabases(pageSize, pageNumber){
		var apipath = '/api/v1/telephony/providers/edge/phonebasesettings/availablemetabases';
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
	self.getProvidersEdgePhonebasesettingsAvailablemetabases = getProvidersEdgePhonebasesettingsAvailablemetabases;
	/**
     * @summary Get a Phone Base Settings instance template from a given make and model. This object can then be modified and saved as a new Phone Base Settings instance
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} phoneMetabaseId - The id of a metabase object upon which to base this Phone Base Settings
	*/
	function getProvidersEdgePhonebasesettingsTemplate(phoneMetabaseId){
		var apipath = '/api/v1/telephony/providers/edge/phonebasesettings/template';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(phoneMetabaseId !== undefined && phoneMetabaseId !== null){
			queryParameters.phoneMetabaseId = phoneMetabaseId;
		}

        if(phoneMetabaseId === undefined && phoneMetabaseId !== null){
			throw 'Missing required  parameter: phoneMetabaseId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgePhonebasesettingsTemplate = getProvidersEdgePhonebasesettingsTemplate;
	/**
     * @summary Get a Phone Base Settings object by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} phoneBaseId - Phone base ID
	*/
	function getProvidersEdgePhonebasesettingsPhoneBase(phoneBaseId){
		var apipath = '/api/v1/telephony/providers/edge/phonebasesettings/{phoneBaseId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{phoneBaseId}', phoneBaseId);

        if(phoneBaseId === undefined && phoneBaseId !== null){
			throw 'Missing required  parameter: phoneBaseId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgePhonebasesettingsPhoneBase = getProvidersEdgePhonebasesettingsPhoneBase;
	/**
     * @summary Update a Phone Base Settings by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} phoneBaseId - Phone base ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "phoneMetaBase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lines": [],
   "properties": {},
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true
   }
}
	*/
	function updateProvidersEdgePhonebasesettingsPhoneBase(phoneBaseId, body){
		var apipath = '/api/v1/telephony/providers/edge/phonebasesettings/{phoneBaseId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{phoneBaseId}', phoneBaseId);

        if(phoneBaseId === undefined && phoneBaseId !== null){
			throw 'Missing required  parameter: phoneBaseId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateProvidersEdgePhonebasesettingsPhoneBase = updateProvidersEdgePhonebasesettingsPhoneBase;
	/**
     * @summary Delete a Phone Base Settings by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} phoneBaseId - Phone base ID
	*/
	function deleteProvidersEdgePhonebasesettingsPhoneBase(phoneBaseId){
		var apipath = '/api/v1/telephony/providers/edge/phonebasesettings/{phoneBaseId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{phoneBaseId}', phoneBaseId);

        if(phoneBaseId === undefined && phoneBaseId !== null){
			throw 'Missing required  parameter: phoneBaseId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteProvidersEdgePhonebasesettingsPhoneBase = deleteProvidersEdgePhonebasesettingsPhoneBase;
	/**
     * @summary Get a list of Phone Instances
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - Value by which to sort
	* @param {string} sortOrder - Sort order
	* @param {string} siteid - Filter by site.id
	* @param {string} phoneBaseSettingsid - Filter by phoneBaseSettings.id
	* @param {string} phone_hardwareId - Filter by phone_hardwareId
	* @param {array} expand - Fields to expand in the response, comma-separated
	* @param {array} fields - Fields under properties to get, comma-separated
	*/
	function getProvidersEdgePhones(pageNumber, pageSize, sortBy, sortOrder, siteid, phoneBaseSettingsid, phone_hardwareId, expand, fields){
		var apipath = '/api/v1/telephony/providers/edge/phones';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		if(siteid !== undefined && siteid !== null){
			queryParameters.site.id = siteid;
		}


		if(phoneBaseSettingsid !== undefined && phoneBaseSettingsid !== null){
			queryParameters.phoneBaseSettings.id = phoneBaseSettingsid;
		}


		if(phone_hardwareId !== undefined && phone_hardwareId !== null){
			queryParameters.phone_hardwareId = phone_hardwareId;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(fields !== undefined && fields !== null){
			queryParameters.fields = fields;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgePhones = getProvidersEdgePhones;
	/**
     * @summary Create a new Phone
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
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
   "edgeGroup": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "site": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "phoneBaseSettings": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lineBaseSettings": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "phoneMetaBase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lines": [],
   "status": {
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {}
   },
   "secondaryStatus": {
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {}
   },
   "properties": {},
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true
   }
}
	*/
	function createProvidersEdgePhones(body){
		var apipath = '/api/v1/telephony/providers/edge/phones';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createProvidersEdgePhones = createProvidersEdgePhones;
	/**
     * @summary Reboot Multiple Phones
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {} body - body
	 * @example
	 * Body Example:
	 * {
   "phoneIds": []
}
	*/
	function createProvidersEdgePhonesReboot(body){
		var apipath = '/api/v1/telephony/providers/edge/phones/reboot';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createProvidersEdgePhonesReboot = createProvidersEdgePhonesReboot;
	/**
     * @summary Get a Phone instance template based on a Phone Base Settings object. This object can then be modified and saved as a new Phone instance
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} phoneBaseSettingsId - The id of a Phone Base Settings object upon which to base this Phone
	*/
	function getProvidersEdgePhonesTemplate(phoneBaseSettingsId){
		var apipath = '/api/v1/telephony/providers/edge/phones/template';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(phoneBaseSettingsId !== undefined && phoneBaseSettingsId !== null){
			queryParameters.phoneBaseSettingsId = phoneBaseSettingsId;
		}

        if(phoneBaseSettingsId === undefined && phoneBaseSettingsId !== null){
			throw 'Missing required  parameter: phoneBaseSettingsId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgePhonesTemplate = getProvidersEdgePhonesTemplate;
	/**
     * @summary Get a Phone by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} phoneId - Phone ID
	*/
	function getProvidersEdgePhone(phoneId){
		var apipath = '/api/v1/telephony/providers/edge/phones/{phoneId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{phoneId}', phoneId);

        if(phoneId === undefined && phoneId !== null){
			throw 'Missing required  parameter: phoneId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgePhone = getProvidersEdgePhone;
	/**
     * @summary Update a Phone by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} phoneId - Phone ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
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
   "edgeGroup": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "site": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "phoneBaseSettings": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lineBaseSettings": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "phoneMetaBase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lines": [],
   "status": {
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {}
   },
   "secondaryStatus": {
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {}
   },
   "properties": {},
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true
   }
}
	*/
	function updateProvidersEdgePhone(phoneId, body){
		var apipath = '/api/v1/telephony/providers/edge/phones/{phoneId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{phoneId}', phoneId);

        if(phoneId === undefined && phoneId !== null){
			throw 'Missing required  parameter: phoneId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateProvidersEdgePhone = updateProvidersEdgePhone;
	/**
     * @summary Delete a Phone by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} phoneId - Phone ID
	*/
	function deleteProvidersEdgePhone(phoneId){
		var apipath = '/api/v1/telephony/providers/edge/phones/{phoneId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{phoneId}', phoneId);

        if(phoneId === undefined && phoneId !== null){
			throw 'Missing required  parameter: phoneId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteProvidersEdgePhone = deleteProvidersEdgePhone;
	/**
     * @summary Reboot a Phone
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} phoneId - Phone Id
	*/
	function createProvidersEdgePhoneReboot(phoneId){
		var apipath = '/api/v1/telephony/providers/edge/phones/{phoneId}/reboot';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{phoneId}', phoneId);

        if(phoneId === undefined && phoneId !== null){
			throw 'Missing required  parameter: phoneId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createProvidersEdgePhoneReboot = createProvidersEdgePhoneReboot;
	/**
     * @summary Get a list of Edge-compatible time zones
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getProvidersEdgeTimezones(pageSize, pageNumber){
		var apipath = '/api/v1/telephony/providers/edge/timezones';
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
	self.getProvidersEdgeTimezones = getProvidersEdgeTimezones;
	/**
     * @summary Get Trunk Base Settings listing
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - Value by which to sort
	* @param {string} sortOrder - Sort order
	*/
	function getProvidersEdgeTrunkbasesettings(pageNumber, pageSize, sortBy, sortOrder){
		var apipath = '/api/v1/telephony/providers/edge/trunkbasesettings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgeTrunkbasesettings = getProvidersEdgeTrunkbasesettings;
	/**
     * @summary Create a Trunk Base Settings object
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
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
   "trunkMetabase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "properties": {},
   "trunkType": "",
   "managed": true
}
	*/
	function createProvidersEdgeTrunkbasesettings(body){
		var apipath = '/api/v1/telephony/providers/edge/trunkbasesettings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createProvidersEdgeTrunkbasesettings = createProvidersEdgeTrunkbasesettings;
	/**
     * @summary Get a list of available makes and models to create a new Trunk Base Settings
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} type - 
	EXTERNAL,
	PHONE,
	EDGE,
	* @param {integer} pageSize - 
	* @param {integer} pageNumber - 
	*/
	function getProvidersEdgeTrunkbasesettingsAvailablemetabases(type, pageSize, pageNumber){
		var apipath = '/api/v1/telephony/providers/edge/trunkbasesettings/availablemetabases';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(type !== undefined && type !== null){
			queryParameters.type = type;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgeTrunkbasesettingsAvailablemetabases = getProvidersEdgeTrunkbasesettingsAvailablemetabases;
	/**
     * @summary Get a Trunk Base Settings instance template from a given make and model. This object can then be modified and saved as a new Trunk Base Settings instance
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} trunkMetabaseId - The id of a metabase object upon which to base this Trunk Base Settings
	*/
	function getProvidersEdgeTrunkbasesettingsTemplate(trunkMetabaseId){
		var apipath = '/api/v1/telephony/providers/edge/trunkbasesettings/template';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(trunkMetabaseId !== undefined && trunkMetabaseId !== null){
			queryParameters.trunkMetabaseId = trunkMetabaseId;
		}

        if(trunkMetabaseId === undefined && trunkMetabaseId !== null){
			throw 'Missing required  parameter: trunkMetabaseId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgeTrunkbasesettingsTemplate = getProvidersEdgeTrunkbasesettingsTemplate;
	/**
     * @summary Get a Trunk Base Settings object by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} trunkBaseSettingsId - Trunk Base ID
	*/
	function getProvidersEdgeTrunkbasesettingsTrunkBaseSettings(trunkBaseSettingsId){
		var apipath = '/api/v1/telephony/providers/edge/trunkbasesettings/{trunkBaseSettingsId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{trunkBaseSettingsId}', trunkBaseSettingsId);

        if(trunkBaseSettingsId === undefined && trunkBaseSettingsId !== null){
			throw 'Missing required  parameter: trunkBaseSettingsId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgeTrunkbasesettingsTrunkBaseSettings = getProvidersEdgeTrunkbasesettingsTrunkBaseSettings;
	/**
     * @summary Update a Trunk Base Settings object by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} trunkBaseSettingsId - Trunk Base ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
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
   "trunkMetabase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "properties": {},
   "trunkType": "",
   "managed": true
}
	*/
	function updateProvidersEdgeTrunkbasesettingsTrunkBaseSettings(trunkBaseSettingsId, body){
		var apipath = '/api/v1/telephony/providers/edge/trunkbasesettings/{trunkBaseSettingsId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{trunkBaseSettingsId}', trunkBaseSettingsId);

        if(trunkBaseSettingsId === undefined && trunkBaseSettingsId !== null){
			throw 'Missing required  parameter: trunkBaseSettingsId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateProvidersEdgeTrunkbasesettingsTrunkBaseSettings = updateProvidersEdgeTrunkbasesettingsTrunkBaseSettings;
	/**
     * @summary Delete a Trunk Base Settings object by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} trunkBaseSettingsId - Trunk Base ID
	*/
	function deleteProvidersEdgeTrunkbasesettingsTrunkBaseSettings(trunkBaseSettingsId){
		var apipath = '/api/v1/telephony/providers/edge/trunkbasesettings/{trunkBaseSettingsId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{trunkBaseSettingsId}', trunkBaseSettingsId);

        if(trunkBaseSettingsId === undefined && trunkBaseSettingsId !== null){
			throw 'Missing required  parameter: trunkBaseSettingsId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteProvidersEdgeTrunkbasesettingsTrunkBaseSettings = deleteProvidersEdgeTrunkbasesettingsTrunkBaseSettings;

    return self;
};
