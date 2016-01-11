/**
* @class
* @example
* var api = new TelephonyApi(pureCloudSession);
*/
var TelephonyApi = function (pureCloudSession) {
	/**
     * @summary Redirect GET requests to proper edge
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} id - Phone's physical address AKA MAC address
	*/
	function getBootstrapPhonesId(id){
		var apipath = '/api/v1/telephony/bootstrap/phones/{id}';
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
	self.getBootstrapPhonesId = getBootstrapPhonesId;
	/**
     * @summary Redirect PUT requests to proper edge
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} id - Phone's physical address AKA MAC address
	*/
	function updateBootstrapPhonesId(id){
		var apipath = '/api/v1/telephony/bootstrap/phones/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateBootstrapPhonesId = updateBootstrapPhonesId;
	/**
     * @summary Redirect GET requests to proper edge
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} id - Phone's physical address AKA MAC address
	* @param {string} file - Requested file
	*/
	function getBootstrapPhonesIdByFile(id, file){
		var apipath = '/api/v1/telephony/bootstrap/phones/{id}/{file}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        apipath = apipath.replace('{file}', file);

        if(file === undefined && file !== null){
			throw 'Missing required  parameter: file';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getBootstrapPhonesIdByFile = getBootstrapPhonesIdByFile;
	/**
     * @summary Redirect PUT requests to proper edge
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} id - Phone's physical address AKA MAC address
	* @param {string} file - Requested file
	*/
	function updateBootstrapPhonesIdByFile(id, file){
		var apipath = '/api/v1/telephony/bootstrap/phones/{id}/{file}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        apipath = apipath.replace('{file}', file);

        if(file === undefined && file !== null){
			throw 'Missing required  parameter: file';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateBootstrapPhonesIdByFile = updateBootstrapPhonesIdByFile;
	/**
     * @summary Redirect GET requests to proper edge
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} id - Phone's physical address AKA MAC address
	* @param {string} path - Requested path
	* @param {string} file - Requested file
	*/
	function getBootstrapPhonesIdByPathByFile(id, path, file){
		var apipath = '/api/v1/telephony/bootstrap/phones/{id}/{path}/{file}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        apipath = apipath.replace('{path}', path);

        if(path === undefined && path !== null){
			throw 'Missing required  parameter: path';
        }

        apipath = apipath.replace('{file}', file);

        if(file === undefined && file !== null){
			throw 'Missing required  parameter: file';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getBootstrapPhonesIdByPathByFile = getBootstrapPhonesIdByPathByFile;
	/**
     * @summary Redirect PUT requests to proper edge
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} id - Phone's physical address AKA MAC address
	* @param {string} path - Requested path
	* @param {string} file - Requested file
	*/
	function updateBootstrapPhonesIdByPathByFile(id, path, file){
		var apipath = '/api/v1/telephony/bootstrap/phones/{id}/{path}/{file}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        apipath = apipath.replace('{path}', path);

        if(path === undefined && path !== null){
			throw 'Missing required  parameter: path';
        }

        apipath = apipath.replace('{file}', file);

        if(file === undefined && file !== null){
			throw 'Missing required  parameter: file';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateBootstrapPhonesIdByPathByFile = updateBootstrapPhonesIdByPathByFile;
	/**
     * @summary Get a listing of line base settings objects
	 * @description 
	 * @memberOf TelephonyApi#
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
	 * @description 
	 * @memberOf TelephonyApi#
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
	 * @description 
	 * @memberOf TelephonyApi#
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
	 * @description 
	 * @memberOf TelephonyApi#
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
	 * @description 
	 * @memberOf TelephonyApi#
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
     * @summary Get a list of Phone Base Settings objects
	 * @description 
	 * @memberOf TelephonyApi#
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
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "phoneMetaBase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lines": [],
   "properties": {
      "nodeType": "",
      "missingNode": true,
      "object": true,
      "pojo": true,
      "number": true,
      "integralNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "float": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "boolean": true,
      "binary": true,
      "floatingPointNumber": true,
      "valueNode": true,
      "containerNode": true,
      "array": true,
      "null": true
   },
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true
   },
   "selfUri": ""
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
	 * @description 
	 * @memberOf TelephonyApi#
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
	 * @description 
	 * @memberOf TelephonyApi#
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
	 * @description 
	 * @memberOf TelephonyApi#
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
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} phoneBaseId - Phone base ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "phoneMetaBase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lines": [],
   "properties": {
      "nodeType": "",
      "missingNode": true,
      "object": true,
      "pojo": true,
      "number": true,
      "integralNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "float": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "boolean": true,
      "binary": true,
      "floatingPointNumber": true,
      "valueNode": true,
      "containerNode": true,
      "array": true,
      "null": true
   },
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true
   },
   "selfUri": ""
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
	 * @description 
	 * @memberOf TelephonyApi#
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
	 * @description 
	 * @memberOf TelephonyApi#
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
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {} body - 
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
      "id": "",
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {},
      "selfUri": ""
   },
   "secondaryStatus": {
      "id": "",
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {},
      "selfUri": ""
   },
   "properties": {
      "nodeType": "",
      "missingNode": true,
      "object": true,
      "pojo": true,
      "number": true,
      "integralNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "float": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "boolean": true,
      "binary": true,
      "floatingPointNumber": true,
      "valueNode": true,
      "containerNode": true,
      "array": true,
      "null": true
   },
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true
   },
   "selfUri": ""
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
	 * @description 
	 * @memberOf TelephonyApi#
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
	 * @description 
	 * @memberOf TelephonyApi#
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
	 * @description 
	 * @memberOf TelephonyApi#
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
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} phoneId - Phone ID
	* @param {} body - 
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
      "id": "",
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {},
      "selfUri": ""
   },
   "secondaryStatus": {
      "id": "",
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {},
      "selfUri": ""
   },
   "properties": {
      "nodeType": "",
      "missingNode": true,
      "object": true,
      "pojo": true,
      "number": true,
      "integralNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "float": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "boolean": true,
      "binary": true,
      "floatingPointNumber": true,
      "valueNode": true,
      "containerNode": true,
      "array": true,
      "null": true
   },
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true
   },
   "selfUri": ""
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
	 * @description 
	 * @memberOf TelephonyApi#
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
	 * @description 
	 * @memberOf TelephonyApi#
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
	 * @description 
	 * @memberOf TelephonyApi#
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
	 * @description 
	 * @memberOf TelephonyApi#
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
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "trunkMetabase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "properties": {
      "nodeType": "",
      "missingNode": true,
      "object": true,
      "pojo": true,
      "number": true,
      "integralNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "float": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "boolean": true,
      "binary": true,
      "floatingPointNumber": true,
      "valueNode": true,
      "containerNode": true,
      "array": true,
      "null": true
   },
   "selfUri": ""
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
	 * @description 
	 * @memberOf TelephonyApi#
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
	 * @description 
	 * @memberOf TelephonyApi#
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
	 * @description 
	 * @memberOf TelephonyApi#
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
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} trunkBaseSettingsId - Trunk Base ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "trunkMetabase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "properties": {
      "nodeType": "",
      "missingNode": true,
      "object": true,
      "pojo": true,
      "number": true,
      "integralNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "float": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "boolean": true,
      "binary": true,
      "floatingPointNumber": true,
      "valueNode": true,
      "containerNode": true,
      "array": true,
      "null": true
   },
   "selfUri": ""
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
	 * @description 
	 * @memberOf TelephonyApi#
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
