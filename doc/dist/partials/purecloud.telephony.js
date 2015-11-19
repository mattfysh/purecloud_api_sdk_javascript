if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.telephony";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.telephony = (function (PureCloud) {
	/**
	* @namespace telephony/providers/edge/linebasesettings
	**/
	/**
	* @namespace telephony/providers/edge/lines
	**/
	/**
	* @namespace telephony/providers/edge/lines/template
	**/
	/**
	* @namespace telephony/providers/edge/phonebasesettings
	**/
	/**
	* @namespace telephony/providers/edge/phonebasesettings/availablemetabases
	**/
	/**
	* @namespace telephony/providers/edge/phonebasesettings/template
	**/
	/**
	* @namespace telephony/providers/edge/phones
	**/
	/**
	* @namespace telephony/providers/edge/phones/template
	**/
	/**
	* @namespace telephony/providers/edge/timezones
	**/

	var self = {};
	self.providers = self.providers || {};
	self.providers.edge = self.providers.edge || {};
	self.providers.edge.linebasesettings = self.providers.edge.linebasesettings || {};

	/**
     * 
     * @method getAListingOfLineBaseSettingsObjects
	 * @memberof telephony/providers/edge/linebasesettings

	* @param {integer} pageNumber - Page number

	* @param {integer} pageSize - Page size

	* @param {string} sortBy - Value by which to sort

	* @param {string} sortOrder - Sort order
	 *
     */
     self.providers.edge.linebasesettings.getAListingOfLineBaseSettingsObjects = function(pageNumber, pageSize, sortBy, sortOrder){
		var path = '/api/v1/telephony/providers/edge/linebasesettings';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.providers = self.providers || {};
	self.providers.edge = self.providers.edge || {};
	self.providers.edge.linebasesettings = self.providers.edge.linebasesettings || {};

	/**
     * 
     * @method getALineBaseSettingsObject
	 * @memberof telephony/providers/edge/linebasesettings

	* @param {string} lineBaseId - Line base ID
	 *
     */
     self.providers.edge.linebasesettings.getALineBaseSettingsObject = function(lineBaseId){
		var path = '/api/v1/telephony/providers/edge/linebasesettings/{lineBaseId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{lineBaseId}', lineBaseId);

        if(lineBaseId === undefined && lineBaseId !== null){
			throw 'Missing required  parameter: lineBaseId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.providers = self.providers || {};
	self.providers.edge = self.providers.edge || {};
	self.providers.edge.lines = self.providers.edge.lines || {};

	/**
     * 
     * @method getLines
	 * @memberof telephony/providers/edge/lines

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number

	* @param {string} name - Name

	* @param {string} sortBy - Value by which to sort

	* @param {array} expand - Fields to expand in the response, comma-separated
	 *
     */
     self.providers.edge.lines.getLines = function(pageSize, pageNumber, name, sortBy, expand){
		var path = '/api/v1/telephony/providers/edge/lines';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.providers = self.providers || {};
	self.providers.edge = self.providers.edge || {};
	self.providers.edge.lines = self.providers.edge.lines || {};
	self.providers.edge.lines.template = self.providers.edge.lines.template || {};

	/**
     * 
     * @method getNewLineInstance
	 * @memberof telephony/providers/edge/lines/template

	* @param {string} lineBaseSettingsId - The id of a Line Base Settings object upon which to base this Line
	 *
     */
     self.providers.edge.lines.template.getNewLineInstance = function(lineBaseSettingsId){
		var path = '/api/v1/telephony/providers/edge/lines/template';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.providers = self.providers || {};
	self.providers.edge = self.providers.edge || {};
	self.providers.edge.lines = self.providers.edge.lines || {};

	/**
     * 
     * @method getLine
	 * @memberof telephony/providers/edge/lines

	* @param {string} lineId - Line ID
	 *
     */
     self.providers.edge.lines.getLine = function(lineId){
		var path = '/api/v1/telephony/providers/edge/lines/{lineId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{lineId}', lineId);

        if(lineId === undefined && lineId !== null){
			throw 'Missing required  parameter: lineId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.providers = self.providers || {};
	self.providers.edge = self.providers.edge || {};
	self.providers.edge.phonebasesettings = self.providers.edge.phonebasesettings || {};

	/**
     * 
     * @method getPhoneBaseSettings
	 * @memberof telephony/providers/edge/phonebasesettings

	* @param {integer} pageNumber - Page number

	* @param {integer} pageSize - Page size

	* @param {string} sortBy - Value by which to sort

	* @param {string} sortOrder - Sort order
	 *
     */
     self.providers.edge.phonebasesettings.getPhoneBaseSettings = function(pageNumber, pageSize, sortBy, sortOrder){
		var path = '/api/v1/telephony/providers/edge/phonebasesettings';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.providers = self.providers || {};
	self.providers.edge = self.providers.edge || {};
	self.providers.edge.phonebasesettings = self.providers.edge.phonebasesettings || {};

	/**
     * 
     * @method createPhoneBaseSettings
	 * @memberof telephony/providers/edge/phonebasesettings

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
      "array": true,
      "null": true,
      "valueNode": true,
      "containerNode": true,
      "missingNode": true,
      "object": true,
      "nodeType": "",
      "pojo": true,
      "number": true,
      "integralNumber": true,
      "floatingPointNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "float": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "boolean": true,
      "binary": true
   },
   "capabilities": {
      "provisions": true,
      "registers": true,
      "hardwareIdType": ""
   },
   "selfUri": ""
}
	 *
     */
     self.providers.edge.phonebasesettings.createPhoneBaseSettings = function(body){
		var path = '/api/v1/telephony/providers/edge/phonebasesettings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.providers = self.providers || {};
	self.providers.edge = self.providers.edge || {};
	self.providers.edge.phonebasesettings = self.providers.edge.phonebasesettings || {};
	self.providers.edge.phonebasesettings.availablemetabases = self.providers.edge.phonebasesettings.availablemetabases || {};

	/**
     * 
     * @method getPhoneMakesAndModels
	 * @memberof telephony/providers/edge/phonebasesettings/availablemetabases

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number
	 *
     */
     self.providers.edge.phonebasesettings.availablemetabases.getPhoneMakesAndModels = function(pageSize, pageNumber){
		var path = '/api/v1/telephony/providers/edge/phonebasesettings/availablemetabases';
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
	self.providers = self.providers || {};
	self.providers.edge = self.providers.edge || {};
	self.providers.edge.phonebasesettings = self.providers.edge.phonebasesettings || {};
	self.providers.edge.phonebasesettings.template = self.providers.edge.phonebasesettings.template || {};

	/**
     * 
     * @method getNewPhoneBaseSettingsInstance
	 * @memberof telephony/providers/edge/phonebasesettings/template

	* @param {string} phoneMetabaseId - The id of a metabase object upon which to base this Phone Base Settings
	 *
     */
     self.providers.edge.phonebasesettings.template.getNewPhoneBaseSettingsInstance = function(phoneMetabaseId){
		var path = '/api/v1/telephony/providers/edge/phonebasesettings/template';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.providers = self.providers || {};
	self.providers.edge = self.providers.edge || {};
	self.providers.edge.phonebasesettings = self.providers.edge.phonebasesettings || {};

	/**
     * 
     * @method getPhoneBaseSettings
	 * @memberof telephony/providers/edge/phonebasesettings

	* @param {string} phoneBaseId - Phone base ID
	 *
     */
     self.providers.edge.phonebasesettings.getPhoneBaseSettings = function(phoneBaseId){
		var path = '/api/v1/telephony/providers/edge/phonebasesettings/{phoneBaseId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{phoneBaseId}', phoneBaseId);

        if(phoneBaseId === undefined && phoneBaseId !== null){
			throw 'Missing required  parameter: phoneBaseId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.providers = self.providers || {};
	self.providers.edge = self.providers.edge || {};
	self.providers.edge.phonebasesettings = self.providers.edge.phonebasesettings || {};

	/**
     * 
     * @method updatePhoneBaseSettings
	 * @memberof telephony/providers/edge/phonebasesettings

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
      "array": true,
      "null": true,
      "valueNode": true,
      "containerNode": true,
      "missingNode": true,
      "object": true,
      "nodeType": "",
      "pojo": true,
      "number": true,
      "integralNumber": true,
      "floatingPointNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "float": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "boolean": true,
      "binary": true
   },
   "capabilities": {
      "provisions": true,
      "registers": true,
      "hardwareIdType": ""
   },
   "selfUri": ""
}
	 *
     */
     self.providers.edge.phonebasesettings.updatePhoneBaseSettings = function(phoneBaseId, body){
		var path = '/api/v1/telephony/providers/edge/phonebasesettings/{phoneBaseId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{phoneBaseId}', phoneBaseId);

        if(phoneBaseId === undefined && phoneBaseId !== null){
			throw 'Missing required  parameter: phoneBaseId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.providers = self.providers || {};
	self.providers.edge = self.providers.edge || {};
	self.providers.edge.phonebasesettings = self.providers.edge.phonebasesettings || {};

	/**
     * 
     * @method deletePhoneBaseSettings
	 * @memberof telephony/providers/edge/phonebasesettings

	* @param {string} phoneBaseId - Phone base ID
	 *
     */
     self.providers.edge.phonebasesettings.deletePhoneBaseSettings = function(phoneBaseId){
		var path = '/api/v1/telephony/providers/edge/phonebasesettings/{phoneBaseId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{phoneBaseId}', phoneBaseId);

        if(phoneBaseId === undefined && phoneBaseId !== null){
			throw 'Missing required  parameter: phoneBaseId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.providers = self.providers || {};
	self.providers.edge = self.providers.edge || {};
	self.providers.edge.phones = self.providers.edge.phones || {};

	/**
     * 
     * @method getAListOfPhoneInstances
	 * @memberof telephony/providers/edge/phones

	* @param {integer} pageNumber - Page number

	* @param {integer} pageSize - Page size

	* @param {string} sortBy - Value by which to sort

	* @param {string} sortOrder - Sort order

	* @param {string} siteid - Filter by site.id

	* @param {string} phoneBaseSettingsid - Filter by phoneBaseSettings.id

	* @param {string} phone_hardwareId - Filter by phone_hardwareId

	* @param {array} expand - Fields to expand in the response, comma-separated

	* @param {array} fields - Fields under properties to get, comma-separated
	 *
     */
     self.providers.edge.phones.getAListOfPhoneInstances = function(pageNumber, pageSize, sortBy, sortOrder, siteid, phoneBaseSettingsid, phone_hardwareId, expand, fields){
		var path = '/api/v1/telephony/providers/edge/phones';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.providers = self.providers || {};
	self.providers.edge = self.providers.edge || {};
	self.providers.edge.phones = self.providers.edge.phones || {};

	/**
     * 
     * @method createPhoneInstances
	 * @memberof telephony/providers/edge/phones

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
      "array": true,
      "null": true,
      "valueNode": true,
      "containerNode": true,
      "missingNode": true,
      "object": true,
      "nodeType": "",
      "pojo": true,
      "number": true,
      "integralNumber": true,
      "floatingPointNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "float": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "boolean": true,
      "binary": true
   },
   "capabilities": {
      "provisions": true,
      "registers": true,
      "hardwareIdType": ""
   },
   "selfUri": ""
}
	 *
     */
     self.providers.edge.phones.createPhoneInstances = function(body){
		var path = '/api/v1/telephony/providers/edge/phones';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.providers = self.providers || {};
	self.providers.edge = self.providers.edge || {};
	self.providers.edge.phones = self.providers.edge.phones || {};
	self.providers.edge.phones.template = self.providers.edge.phones.template || {};

	/**
     * 
     * @method getNewPhoneInstance
	 * @memberof telephony/providers/edge/phones/template

	* @param {string} phoneBaseSettingsId - The id of a Phone Base Settings object upon which to base this Phone
	 *
     */
     self.providers.edge.phones.template.getNewPhoneInstance = function(phoneBaseSettingsId){
		var path = '/api/v1/telephony/providers/edge/phones/template';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.providers = self.providers || {};
	self.providers.edge = self.providers.edge || {};
	self.providers.edge.phones = self.providers.edge.phones || {};

	/**
     * 
     * @method getPhoneInstance
	 * @memberof telephony/providers/edge/phones

	* @param {string} phoneId - Phone ID
	 *
     */
     self.providers.edge.phones.getPhoneInstance = function(phoneId){
		var path = '/api/v1/telephony/providers/edge/phones/{phoneId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{phoneId}', phoneId);

        if(phoneId === undefined && phoneId !== null){
			throw 'Missing required  parameter: phoneId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.providers = self.providers || {};
	self.providers.edge = self.providers.edge || {};
	self.providers.edge.phones = self.providers.edge.phones || {};

	/**
     * 
     * @method updatePhoneInstance
	 * @memberof telephony/providers/edge/phones

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
      "array": true,
      "null": true,
      "valueNode": true,
      "containerNode": true,
      "missingNode": true,
      "object": true,
      "nodeType": "",
      "pojo": true,
      "number": true,
      "integralNumber": true,
      "floatingPointNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "float": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "boolean": true,
      "binary": true
   },
   "capabilities": {
      "provisions": true,
      "registers": true,
      "hardwareIdType": ""
   },
   "selfUri": ""
}
	 *
     */
     self.providers.edge.phones.updatePhoneInstance = function(phoneId, body){
		var path = '/api/v1/telephony/providers/edge/phones/{phoneId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{phoneId}', phoneId);

        if(phoneId === undefined && phoneId !== null){
			throw 'Missing required  parameter: phoneId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.providers = self.providers || {};
	self.providers.edge = self.providers.edge || {};
	self.providers.edge.phones = self.providers.edge.phones || {};

	/**
     * 
     * @method deletePhoneInstance
	 * @memberof telephony/providers/edge/phones

	* @param {string} phoneId - Phone ID
	 *
     */
     self.providers.edge.phones.deletePhoneInstance = function(phoneId){
		var path = '/api/v1/telephony/providers/edge/phones/{phoneId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{phoneId}', phoneId);

        if(phoneId === undefined && phoneId !== null){
			throw 'Missing required  parameter: phoneId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.providers = self.providers || {};
	self.providers.edge = self.providers.edge || {};
	self.providers.edge.timezones = self.providers.edge.timezones || {};

	/**
     * 
     * @method getTimeZonesList
	 * @memberof telephony/providers/edge/timezones

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number
	 *
     */
     self.providers.edge.timezones.getTimeZonesList = function(pageSize, pageNumber){
		var path = '/api/v1/telephony/providers/edge/timezones';
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

	return self;
}(PureCloud));
