/**
* @class
* @example
* var api = new WorkforcemanagementApi(pureCloudSession);
*/
var WorkforcemanagementApi = function (pureCloudSession) {
	/**
     * @summary Get management units
	 * @description 
	 * @memberOf WorkforcemanagementApi#
	* @param {string} selector - insert reference to nice selector description here
	* @param {integer} pageSize - 
	* @param {integer} pageNumber - 
	*/
	function getManagementunits(selector, pageSize, pageNumber){
		var apipath = '/api/v1/workforcemanagement/managementunits';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(selector !== undefined && selector !== null){
			queryParameters.selector = selector;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getManagementunits = getManagementunits;
	/**
     * @summary Add a management unit
	 * @description 
	 * @memberOf WorkforcemanagementApi#
	* @param {string} selector - insert reference to nice selector description here
	* @param {} body - body
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "startDayOfWeek": "",
   "timezone": ""
}
	*/
	function createManagementunits(selector, body){
		var apipath = '/api/v1/workforcemanagement/managementunits';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(selector !== undefined && selector !== null){
			queryParameters.selector = selector;
		}

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createManagementunits = createManagementunits;
	/**
     * @summary Get management unit
	 * @description 
	 * @memberOf WorkforcemanagementApi#
	* @param {string} id - The id of the management unit.
	* @param {string} selector - insert reference to nice selector description here
	*/
	function getManagementunitsId(id, selector){
		var apipath = '/api/v1/workforcemanagement/managementunits/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(selector !== undefined && selector !== null){
			queryParameters.selector = selector;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getManagementunitsId = getManagementunitsId;
	/**
     * @summary Delete management unit
	 * @description 
	 * @memberOf WorkforcemanagementApi#
	* @param {string} id - The id of the management unit.
	*/
	function deleteManagementunitsId(id){
		var apipath = '/api/v1/workforcemanagement/managementunits/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteManagementunitsId = deleteManagementunitsId;
	/**
     * @summary Execute the managment unit batch command
	 * @description 
	 * @memberOf WorkforcemanagementApi#
	* @param {string} id - The id of the management unit.
	* @param {} body - body
	 * @example
	 * Body Example:
	 * {
   "items": [],
   "commandId": ""
}
	*/
	function createManagementunitsIdBatch(id, body){
		var apipath = '/api/v1/workforcemanagement/managementunits/{id}/batch';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createManagementunitsIdBatch = createManagementunitsIdBatch;
	/**
     * @summary Set timezone for the management unit
	 * @description 
	 * @memberOf WorkforcemanagementApi#
	* @param {string} id - The id of the management unit.
	* @param {} body - body
	 * @example
	 * Body Example:
	 * {
   "timezone": ""
}
	*/
	function createManagementunitsIdTimezone(id, body){
		var apipath = '/api/v1/workforcemanagement/managementunits/{id}/timezone';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createManagementunitsIdTimezone = createManagementunitsIdTimezone;

    return self;
};
