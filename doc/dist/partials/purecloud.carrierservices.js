if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.carrierservices";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.carrierservices = (function (PureCloud) {
	/**
	* @namespace carrierservices/carriers
	**/
	/**
	* @namespace carrierservices/carriers/services
	**/
	/**
	* @namespace carrierservices/csvschemas
	**/
	/**
	* @namespace carrierservices/csvschemas/name
	**/
	/**
	* @namespace carrierservices/progress
	**/
	/**
	* @namespace carrierservices/report
	**/
	/**
	* @namespace carrierservices/transformendpoints
	**/
	/**
	* @namespace carrierservices/transformprogress/search
	**/
	/**
	* @namespace carrierservices/transformprogress
	**/
	/**
	* @namespace carrierservices/uploadtransform/spreadsheets
	**/
	/**
	* @namespace carrierservices/uploadtransform/texttables
	**/
	/**
	* @namespace carrierservices/xlsxschemas
	**/
	/**
	* @namespace carrierservices/xlsxschemas/name
	**/

	var self = {};
	self.carriers = self.carriers || {};

	/**
     * 
     * @method getCarriers
	 * @memberof carrierservices/carriers
	 *
     */
     self.carriers.getCarriers = function(){
		var path = '/api/v1/carrierservices/carriers';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.carriers = self.carriers || {};

	/**
     * 
     * @method createCarrier
	 * @memberof carrierservices/carriers

	* @param {} body - Carrier data
	 *
     */
     self.carriers.createCarrier = function(body){
		var path = '/api/v1/carrierservices/carriers';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.carriers = self.carriers || {};

	/**
     * 
     * @method getCarrier
	 * @memberof carrierservices/carriers

	* @param {string} carrierId - Carrier ID
	 *
     */
     self.carriers.getCarrier = function(carrierId){
		var path = '/api/v1/carrierservices/carriers/{carrierId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.carriers = self.carriers || {};

	/**
     * 
     * @method updateCarrierById
	 * @memberof carrierservices/carriers

	* @param {string} carrierId - Carrier ID

	* @param {} body - Carrier data
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "address": {
      "streetAddress1": "",
      "streetAddress2": "",
      "city": "",
      "state": "",
      "zipcode": ""
   },
   "accountManager": {
      "firstName": "",
      "lastName": "",
      "phone": "",
      "email": ""
   },
   "supportPhone": "",
   "services": [],
   "selfUri": ""
}
	 *
     */
     self.carriers.updateCarrierById = function(carrierId, body){
		var path = '/api/v1/carrierservices/carriers/{carrierId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.carriers = self.carriers || {};
	self.carriers.services = self.carriers.services || {};

	/**
     * 
     * @method getsAllCarrierServices
	 * @memberof carrierservices/carriers/services

	* @param {string} carrierId - Carrier ID

	* @param {array} fields - Fields

	* @param {string} filter - Filter
	 *
     */
     self.carriers.services.getsAllCarrierServices = function(carrierId, fields, filter){
		var path = '/api/v1/carrierservices/carriers/{carrierId}/services';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }


		if(fields !== undefined && fields !== null){
			queryParameters.fields = fields;
		}


		if(filter !== undefined && filter !== null){
			queryParameters.filter = filter;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.carriers = self.carriers || {};
	self.carriers.services = self.carriers.services || {};

	/**
     * 
     * @method createCarrierService
	 * @memberof carrierservices/carriers/services

	* @param {string} carrierId - Carrier ID

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "status": "",
   "serviceTypes": [],
   "gateways": [],
   "dns": {
      "ip": "",
      "port": 0
   },
   "vpn": {
      "type": "",
      "ip": "",
      "psk": ""
   },
   "carrier": {
      "id": "",
      "name": "",
      "address": {},
      "accountManager": {},
      "supportPhone": "",
      "services": [],
      "selfUri": ""
   },
   "selfUri": ""
}
	 *
     */
     self.carriers.services.createCarrierService = function(carrierId, body){
		var path = '/api/v1/carrierservices/carriers/{carrierId}/services';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.carriers = self.carriers || {};
	self.carriers.services = self.carriers.services || {};

	/**
     * 
     * @method getsService
	 * @memberof carrierservices/carriers/services

	* @param {string} carrierId - Carrier ID

	* @param {string} serviceId - Service ID

	* @param {array} fields - Fields
	 *
     */
     self.carriers.services.getsService = function(carrierId, serviceId, fields){
		var path = '/api/v1/carrierservices/carriers/{carrierId}/services/{serviceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }

        path = path.replace('{serviceId}', serviceId);

        if(serviceId === undefined && serviceId !== null){
			throw 'Missing required  parameter: serviceId';
        }


		if(fields !== undefined && fields !== null){
			queryParameters.fields = fields;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.carriers = self.carriers || {};
	self.carriers.services = self.carriers.services || {};

	/**
     * 
     * @method getsAllCarrierServices
	 * @memberof carrierservices/carriers/services

	* @param {string} carrierId - Carrier ID

	* @param {string} serviceId - Service ID

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "status": "",
   "serviceTypes": [],
   "gateways": [],
   "dns": {
      "ip": "",
      "port": 0
   },
   "vpn": {
      "type": "",
      "ip": "",
      "psk": ""
   },
   "carrier": {
      "id": "",
      "name": "",
      "address": {},
      "accountManager": {},
      "supportPhone": "",
      "services": [],
      "selfUri": ""
   },
   "selfUri": ""
}
	 *
     */
     self.carriers.services.getsAllCarrierServices = function(carrierId, serviceId, body){
		var path = '/api/v1/carrierservices/carriers/{carrierId}/services/{serviceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }

        path = path.replace('{serviceId}', serviceId);

        if(serviceId === undefined && serviceId !== null){
			throw 'Missing required  parameter: serviceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.carriers = self.carriers || {};
	self.carriers.services = self.carriers.services || {};

	/**
     * 
     * @method getsAllCarrierServices
	 * @memberof carrierservices/carriers/services

	* @param {string} carrierId - Carrier ID

	* @param {string} serviceId - Service ID
	 *
     */
     self.carriers.services.getsAllCarrierServices = function(carrierId, serviceId){
		var path = '/api/v1/carrierservices/carriers/{carrierId}/services/{serviceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }

        path = path.replace('{serviceId}', serviceId);

        if(serviceId === undefined && serviceId !== null){
			throw 'Missing required  parameter: serviceId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.csvschemas = self.csvschemas || {};

	/**
     * 
     * @method getAllCsvSchemas
	 * @memberof carrierservices/csvschemas
	 *
     */
     self.csvschemas.getAllCsvSchemas = function(){
		var path = '/api/v1/carrierservices/csvschemas';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.csvschemas = self.csvschemas || {};

	/**
     * 
     * @method getCsvSchemasForACarrier
	 * @memberof carrierservices/csvschemas

	* @param {string} carrierId - Carrier ID
	 *
     */
     self.csvschemas.getCsvSchemasForACarrier = function(carrierId){
		var path = '/api/v1/carrierservices/csvschemas/{carrierId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.csvschemas = self.csvschemas || {};

	/**
     * 
     * @method updateCsvSchema
	 * @memberof carrierservices/csvschemas

	* @param {} body - Schema data

	* @param {string} carrierId - Carrier ID
	 * @example
	 * Body Example:
	 * {
   "CarrierId": "",
   "HeaderRow": 0,
   "DataRow": 0,
   "HeaderMappings": {},
   "RateType": "",
   "Name": "",
   "DateFormat": ""
}
	 *
     */
     self.csvschemas.updateCsvSchema = function(body, carrierId){
		var path = '/api/v1/carrierservices/csvschemas/{carrierId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        path = path.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.csvschemas = self.csvschemas || {};
	self.csvschemas.name = self.csvschemas.name || {};

	/**
     * 
     * @method getCsvSchemas
	 * @memberof carrierservices/csvschemas/name

	* @param {string} carrierId - Carrier ID

	* @param {string} name - Schema name
	 *
     */
     self.csvschemas.name.getCsvSchemas = function(carrierId, name){
		var path = '/api/v1/carrierservices/csvschemas/{carrierId}/name/{name}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }

        path = path.replace('{name}', name);

        if(name === undefined && name !== null){
			throw 'Missing required  parameter: name';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.csvschemas = self.csvschemas || {};
	self.csvschemas.name = self.csvschemas.name || {};

	/**
     * 
     * @method deleteCsvSchema
	 * @memberof carrierservices/csvschemas/name

	* @param {string} carrierId - Carrier ID

	* @param {string} name - Schema name
	 *
     */
     self.csvschemas.name.deleteCsvSchema = function(carrierId, name){
		var path = '/api/v1/carrierservices/csvschemas/{carrierId}/name/{name}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }

        path = path.replace('{name}', name);

        if(name === undefined && name !== null){
			throw 'Missing required  parameter: name';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.progress = self.progress || {};

	/**
     * 
     * @method getRatesheetUploadProgress
	 * @memberof carrierservices/progress
	 *
     */
     self.progress.getRatesheetUploadProgress = function(){
		var path = '/api/v1/carrierservices/progress';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.report = self.report || {};

	/**
     * This method queries Druid for a Call Stats database report.  Some Druid terminology is required to use it.  Each query parameter besides dimensions, _pgn, and _pgs, is a Druid dimension.  From the Druid documentation: Dimensions: Aspects or categories of data, such as languages or locations. For example, with language and country as the type of dimension, values could be "English" or "Mandarin" for language, or "USA" or "China" for country. In Druid, dimensions can serve as filters for narrowing down hits (for example, language = "English" or country = "China").  When using a dimension query parameter with a value the report will return events with granularity of that dimension where the dimension value is equal to the value you specified.  If you want to receive events with dimension based granularity with no filter, opt to use the dimensions query parameters, which is a comma  separated list of values that use the other query parameters as dimension names.  Each  parameter needs to be in the screaming snake case format, or words capitalized with underscores between words (i.e. CUSTOMER_ID).
     * @method getLcrReport
	 * @memberof carrierservices/report

	* @param {integer} pageSize - The total page size requested

	* @param {integer} pageNumber - The page number requested

	* @param {string} sortBy - variable name requested to sort by

	* @param {array} expand - variable name requested by expand list

	* @param {string} granularity - The granularity field determines how data gets bucketed across the time dimension, or how it gets aggregated by hour, day, minute, etc. all buckets everything into a single bucket. none does not bucket data (it actually uses the granularity of the index - minimum here is none which means millisecond granularity).

	* @param {string} dimensions - Dimensions are really any other parameter specified, excluding granularity.  To specify multiple dimensions use comma separated values.

	* @param {string} startDate - Start dateTime for ISO-8601 Intervals. This defines the time ranges to run the query over.  If not set will always default to now minus 15 days.

	* @param {string} endDate - End dateTime for ISO-8601 Intervals. This defines the time ranges to run the query over. If not set will always default to startDate plus 30 days.

	* @param {boolean} regexFilterEnabled - Specifies if all dimension filters should be implemented as regexps.

	* @param {string} sipCallId - SIP call id

	* @param {string} sipReason - SIP human readable status reason

	* @param {string} lrn - 

	* @param {string} sipStatus - SIP status code

	* @param {string} dialogId - 

	* @param {string} orgId - Organization id for the placed call

	* @param {string} cnam - 

	* @param {string} from - From prefix of the number

	* @param {string} to - To prefix of the number

	* @param {string} gatewayId - 

	* @param {string} direction - Direction of the call (e.g. incoming/outgoing)

	* @param {string} serviceId - Purevoice service id

	* @param {string} sendTime - 

	* @param {string} answerTime - Time in which the call was connected end to end

	* @param {string} receiveTime - Time in which the call was retrieved by Purevoice

	* @param {string} failTime - 

	* @param {string} disconnectTime - 

	* @param {string} endTime - Time of success call ending

	* @param {string} cnamTime - 

	* @param {string} lnpTime - 

	* @param {string} rejectTime - 
	 *
     */
     self.report.getLcrReport = function(pageSize, pageNumber, sortBy, expand, granularity, dimensions, startDate, endDate, regexFilterEnabled, sipCallId, sipReason, lrn, sipStatus, dialogId, orgId, cnam, from, to, gatewayId, direction, serviceId, sendTime, answerTime, receiveTime, failTime, disconnectTime, endTime, cnamTime, lnpTime, rejectTime){
		var path = '/api/v1/carrierservices/report';
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


		if(granularity !== undefined && granularity !== null){
			queryParameters.granularity = granularity;
		}


		if(dimensions !== undefined && dimensions !== null){
			queryParameters.dimensions = dimensions;
		}


		if(startDate !== undefined && startDate !== null){
			queryParameters.startDate = startDate;
		}


		if(endDate !== undefined && endDate !== null){
			queryParameters.endDate = endDate;
		}


		if(regexFilterEnabled !== undefined && regexFilterEnabled !== null){
			queryParameters.regexFilterEnabled = regexFilterEnabled;
		}


		if(sipCallId !== undefined && sipCallId !== null){
			queryParameters.sipCallId = sipCallId;
		}


		if(sipReason !== undefined && sipReason !== null){
			queryParameters.sipReason = sipReason;
		}


		if(lrn !== undefined && lrn !== null){
			queryParameters.lrn = lrn;
		}


		if(sipStatus !== undefined && sipStatus !== null){
			queryParameters.sipStatus = sipStatus;
		}


		if(dialogId !== undefined && dialogId !== null){
			queryParameters.dialogId = dialogId;
		}


		if(orgId !== undefined && orgId !== null){
			queryParameters.orgId = orgId;
		}


		if(cnam !== undefined && cnam !== null){
			queryParameters.cnam = cnam;
		}


		if(from !== undefined && from !== null){
			queryParameters.from = from;
		}


		if(to !== undefined && to !== null){
			queryParameters.to = to;
		}


		if(gatewayId !== undefined && gatewayId !== null){
			queryParameters.gatewayId = gatewayId;
		}


		if(direction !== undefined && direction !== null){
			queryParameters.direction = direction;
		}


		if(serviceId !== undefined && serviceId !== null){
			queryParameters.serviceId = serviceId;
		}


		if(sendTime !== undefined && sendTime !== null){
			queryParameters.sendTime = sendTime;
		}


		if(answerTime !== undefined && answerTime !== null){
			queryParameters.answerTime = answerTime;
		}


		if(receiveTime !== undefined && receiveTime !== null){
			queryParameters.receiveTime = receiveTime;
		}


		if(failTime !== undefined && failTime !== null){
			queryParameters.failTime = failTime;
		}


		if(disconnectTime !== undefined && disconnectTime !== null){
			queryParameters.disconnectTime = disconnectTime;
		}


		if(endTime !== undefined && endTime !== null){
			queryParameters.endTime = endTime;
		}


		if(cnamTime !== undefined && cnamTime !== null){
			queryParameters.cnamTime = cnamTime;
		}


		if(lnpTime !== undefined && lnpTime !== null){
			queryParameters.lnpTime = lnpTime;
		}


		if(rejectTime !== undefined && rejectTime !== null){
			queryParameters.rejectTime = rejectTime;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.transformendpoints = self.transformendpoints || {};

	/**
     * 
     * @method getMultipleTransformEndpoints
	 * @memberof carrierservices/transformendpoints

	* @param {string} filter - Filter

	* @param {string} pageSize - Page size

	* @param {string} lastEntry - Last entry
	 *
     */
     self.transformendpoints.getMultipleTransformEndpoints = function(filter, pageSize, lastEntry){
		var path = '/api/v1/carrierservices/transformendpoints';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(filter !== undefined && filter !== null){
			queryParameters.filter = filter;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(lastEntry !== undefined && lastEntry !== null){
			queryParameters.lastEntry = lastEntry;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.transformendpoints = self.transformendpoints || {};

	/**
     * 
     * @method addTransformEndpoint
	 * @memberof carrierservices/transformendpoints

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "swaggerUrl": "",
   "route": "",
   "entity": "",
   "apiFunction": "",
   "ready": true,
   "active": true,
   "batchSize": 0,
   "parallelism": 0,
   "updateProgressEvery": 0,
   "selfUri": ""
}
	 *
     */
     self.transformendpoints.addTransformEndpoint = function(body){
		var path = '/api/v1/carrierservices/transformendpoints';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.transformendpoints = self.transformendpoints || {};

	/**
     * 
     * @method getTransformEndpointById
	 * @memberof carrierservices/transformendpoints

	* @param {string} id - Endpoint ID
	 *
     */
     self.transformendpoints.getTransformEndpointById = function(id){
		var path = '/api/v1/carrierservices/transformendpoints/{id}';
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
	self.transformendpoints = self.transformendpoints || {};

	/**
     * 
     * @method updateTransformEndpoint
	 * @memberof carrierservices/transformendpoints

	* @param {string} id - Endpoint ID

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "swaggerUrl": "",
   "route": "",
   "entity": "",
   "apiFunction": "",
   "ready": true,
   "active": true,
   "batchSize": 0,
   "parallelism": 0,
   "updateProgressEvery": 0,
   "selfUri": ""
}
	 *
     */
     self.transformendpoints.updateTransformEndpoint = function(id, body){
		var path = '/api/v1/carrierservices/transformendpoints/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.transformendpoints = self.transformendpoints || {};

	/**
     * 
     * @method deleteTransformEndpoint
	 * @memberof carrierservices/transformendpoints

	* @param {string} id - Endpoint ID
	 *
     */
     self.transformendpoints.deleteTransformEndpoint = function(id){
		var path = '/api/v1/carrierservices/transformendpoints/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.transformprogress = self.transformprogress || {};
	self.transformprogress.search = self.transformprogress.search || {};

	/**
     * 
     * @method getMultipleProgressReports
	 * @memberof carrierservices/transformprogress/search

	* @param {string} service - Service Name
	 *
     */
     self.transformprogress.search.getMultipleProgressReports = function(service){
		var path = '/api/v1/carrierservices/transformprogress/search/{service}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{service}', service);

        if(service === undefined && service !== null){
			throw 'Missing required  parameter: service';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.transformprogress = self.transformprogress || {};
	self.transformprogress.search = self.transformprogress.search || {};

	/**
     * 
     * @method getMultipleProgressReports
	 * @memberof carrierservices/transformprogress/search

	* @param {string} service - Service Name

	* @param {string} modeltype - Model Type
	 *
     */
     self.transformprogress.search.getMultipleProgressReports = function(service, modeltype){
		var path = '/api/v1/carrierservices/transformprogress/search/{service}/{modeltype}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{service}', service);

        if(service === undefined && service !== null){
			throw 'Missing required  parameter: service';
        }

        path = path.replace('{modeltype}', modeltype);

        if(modeltype === undefined && modeltype !== null){
			throw 'Missing required  parameter: modeltype';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.transformprogress = self.transformprogress || {};
	self.transformprogress.search = self.transformprogress.search || {};

	/**
     * 
     * @method getMultipleProgressReports
	 * @memberof carrierservices/transformprogress/search

	* @param {string} service - Service Name

	* @param {string} modeltype - Model Type

	* @param {string} modelid - Model ID
	 *
     */
     self.transformprogress.search.getMultipleProgressReports = function(service, modeltype, modelid){
		var path = '/api/v1/carrierservices/transformprogress/search/{service}/{modeltype}/{modelid}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{service}', service);

        if(service === undefined && service !== null){
			throw 'Missing required  parameter: service';
        }

        path = path.replace('{modeltype}', modeltype);

        if(modeltype === undefined && modeltype !== null){
			throw 'Missing required  parameter: modeltype';
        }

        path = path.replace('{modelid}', modelid);

        if(modelid === undefined && modelid !== null){
			throw 'Missing required  parameter: modelid';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.transformprogress = self.transformprogress || {};

	/**
     * 
     * @method getProgressReportById
	 * @memberof carrierservices/transformprogress

	* @param {string} id - Upload Progress ID
	 *
     */
     self.transformprogress.getProgressReportById = function(id){
		var path = '/api/v1/carrierservices/transformprogress/{id}';
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
	self.uploadtransform = self.uploadtransform || {};
	self.uploadtransform.spreadsheets = self.uploadtransform.spreadsheets || {};

	/**
     * 
     * @method getMultipleSpreadsheetTransforms
	 * @memberof carrierservices/uploadtransform/spreadsheets

	* @param {string} filter - Filter

	* @param {string} pageSize - Page size

	* @param {string} lastEntry - Last entry
	 *
     */
     self.uploadtransform.spreadsheets.getMultipleSpreadsheetTransforms = function(filter, pageSize, lastEntry){
		var path = '/api/v1/carrierservices/uploadtransform/spreadsheets';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(filter !== undefined && filter !== null){
			queryParameters.filter = filter;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(lastEntry !== undefined && lastEntry !== null){
			queryParameters.lastEntry = lastEntry;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.uploadtransform = self.uploadtransform || {};
	self.uploadtransform.spreadsheets = self.uploadtransform.spreadsheets || {};

	/**
     * 
     * @method addANewSpreadsheetTransforms
	 * @memberof carrierservices/uploadtransform/spreadsheets

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "restEndpoint": {
      "id": "",
      "name": "",
      "swaggerUrl": "",
      "route": "",
      "entity": "",
      "apiFunction": "",
      "ready": true,
      "active": true,
      "batchSize": 0,
      "parallelism": 0,
      "updateProgressEvery": 0,
      "selfUri": ""
   },
   "filenameTransforms": [],
   "tags": [],
   "sheetNameTransforms": [],
   "sheets": [],
   "clientTransformModel": {
      "id": "",
      "endpointId": "",
      "filenameReplaces": [],
      "tags": [],
      "name": "",
      "sheetNameReplaces": [],
      "sheets": []
   },
   "selfUri": ""
}
	 *
     */
     self.uploadtransform.spreadsheets.addANewSpreadsheetTransforms = function(body){
		var path = '/api/v1/carrierservices/uploadtransform/spreadsheets';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.uploadtransform = self.uploadtransform || {};
	self.uploadtransform.spreadsheets = self.uploadtransform.spreadsheets || {};

	/**
     * 
     * @method getSpreadsheetTransformById
	 * @memberof carrierservices/uploadtransform/spreadsheets

	* @param {string} id - Transform ID
	 *
     */
     self.uploadtransform.spreadsheets.getSpreadsheetTransformById = function(id){
		var path = '/api/v1/carrierservices/uploadtransform/spreadsheets/{id}';
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
	self.uploadtransform = self.uploadtransform || {};
	self.uploadtransform.spreadsheets = self.uploadtransform.spreadsheets || {};

	/**
     * 
     * @method updateAnExistingSpreadsheetTransform
	 * @memberof carrierservices/uploadtransform/spreadsheets

	* @param {string} id - Transform ID

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "restEndpoint": {
      "id": "",
      "name": "",
      "swaggerUrl": "",
      "route": "",
      "entity": "",
      "apiFunction": "",
      "ready": true,
      "active": true,
      "batchSize": 0,
      "parallelism": 0,
      "updateProgressEvery": 0,
      "selfUri": ""
   },
   "filenameTransforms": [],
   "tags": [],
   "sheetNameTransforms": [],
   "sheets": [],
   "clientTransformModel": {
      "id": "",
      "endpointId": "",
      "filenameReplaces": [],
      "tags": [],
      "name": "",
      "sheetNameReplaces": [],
      "sheets": []
   },
   "selfUri": ""
}
	 *
     */
     self.uploadtransform.spreadsheets.updateAnExistingSpreadsheetTransform = function(id, body){
		var path = '/api/v1/carrierservices/uploadtransform/spreadsheets/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.uploadtransform = self.uploadtransform || {};
	self.uploadtransform.spreadsheets = self.uploadtransform.spreadsheets || {};

	/**
     * 
     * @method deleteAnExistingSpreadsheetTransform
	 * @memberof carrierservices/uploadtransform/spreadsheets

	* @param {string} id - Transform ID
	 *
     */
     self.uploadtransform.spreadsheets.deleteAnExistingSpreadsheetTransform = function(id){
		var path = '/api/v1/carrierservices/uploadtransform/spreadsheets/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.uploadtransform = self.uploadtransform || {};
	self.uploadtransform.texttables = self.uploadtransform.texttables || {};

	/**
     * 
     * @method getMultipleTextTableTransforms
	 * @memberof carrierservices/uploadtransform/texttables

	* @param {string} filter - Filter
	 *
     */
     self.uploadtransform.texttables.getMultipleTextTableTransforms = function(filter){
		var path = '/api/v1/carrierservices/uploadtransform/texttables';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(filter !== undefined && filter !== null){
			queryParameters.filter = filter;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.uploadtransform = self.uploadtransform || {};
	self.uploadtransform.texttables = self.uploadtransform.texttables || {};

	/**
     * 
     * @method addTextTableTransform
	 * @memberof carrierservices/uploadtransform/texttables

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "restEndpoint": {
      "id": "",
      "name": "",
      "swaggerUrl": "",
      "route": "",
      "entity": "",
      "apiFunction": "",
      "ready": true,
      "active": true,
      "batchSize": 0,
      "parallelism": 0,
      "updateProgressEvery": 0,
      "selfUri": ""
   },
   "filenameTransforms": [],
   "tags": [],
   "commentSymbol": "",
   "delimiter": "",
   "table": {
      "headerRow": 0,
      "firstData": 0,
      "headerReplaces": [],
      "columns": [],
      "unpivots": [],
      "collapses": []
   },
   "selfUri": ""
}
	 *
     */
     self.uploadtransform.texttables.addTextTableTransform = function(body){
		var path = '/api/v1/carrierservices/uploadtransform/texttables';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.uploadtransform = self.uploadtransform || {};
	self.uploadtransform.texttables = self.uploadtransform.texttables || {};

	/**
     * 
     * @method getTextTableTransformById
	 * @memberof carrierservices/uploadtransform/texttables

	* @param {string} id - Transform ID
	 *
     */
     self.uploadtransform.texttables.getTextTableTransformById = function(id){
		var path = '/api/v1/carrierservices/uploadtransform/texttables/{id}';
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
	self.uploadtransform = self.uploadtransform || {};
	self.uploadtransform.texttables = self.uploadtransform.texttables || {};

	/**
     * 
     * @method updateAnExistingTextTableTransform
	 * @memberof carrierservices/uploadtransform/texttables

	* @param {string} id - Transform ID

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "restEndpoint": {
      "id": "",
      "name": "",
      "swaggerUrl": "",
      "route": "",
      "entity": "",
      "apiFunction": "",
      "ready": true,
      "active": true,
      "batchSize": 0,
      "parallelism": 0,
      "updateProgressEvery": 0,
      "selfUri": ""
   },
   "filenameTransforms": [],
   "tags": [],
   "commentSymbol": "",
   "delimiter": "",
   "table": {
      "headerRow": 0,
      "firstData": 0,
      "headerReplaces": [],
      "columns": [],
      "unpivots": [],
      "collapses": []
   },
   "selfUri": ""
}
	 *
     */
     self.uploadtransform.texttables.updateAnExistingTextTableTransform = function(id, body){
		var path = '/api/v1/carrierservices/uploadtransform/texttables/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.uploadtransform = self.uploadtransform || {};
	self.uploadtransform.texttables = self.uploadtransform.texttables || {};

	/**
     * 
     * @method deleteAnExistingTextTableTransform
	 * @memberof carrierservices/uploadtransform/texttables

	* @param {string} id - Transform ID
	 *
     */
     self.uploadtransform.texttables.deleteAnExistingTextTableTransform = function(id){
		var path = '/api/v1/carrierservices/uploadtransform/texttables/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.xlsxschemas = self.xlsxschemas || {};

	/**
     * 
     * @method getAllXlsxSchemas
	 * @memberof carrierservices/xlsxschemas
	 *
     */
     self.xlsxschemas.getAllXlsxSchemas = function(){
		var path = '/api/v1/carrierservices/xlsxschemas';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.xlsxschemas = self.xlsxschemas || {};

	/**
     * 
     * @method getXlsxSchemasForACarrier
	 * @memberof carrierservices/xlsxschemas

	* @param {string} carrierId - Carrier ID
	 *
     */
     self.xlsxschemas.getXlsxSchemasForACarrier = function(carrierId){
		var path = '/api/v1/carrierservices/xlsxschemas/{carrierId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.xlsxschemas = self.xlsxschemas || {};

	/**
     * 
     * @method updateXlsxSchema
	 * @memberof carrierservices/xlsxschemas

	* @param {} body - Schema data

	* @param {string} carrierId - Carrier ID
	 * @example
	 * Body Example:
	 * {
   "SheetSchemas": [],
   "Name": "",
   "CarrierId": ""
}
	 *
     */
     self.xlsxschemas.updateXlsxSchema = function(body, carrierId){
		var path = '/api/v1/carrierservices/xlsxschemas/{carrierId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        path = path.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.xlsxschemas = self.xlsxschemas || {};
	self.xlsxschemas.name = self.xlsxschemas.name || {};

	/**
     * 
     * @method getXlsxSchemas
	 * @memberof carrierservices/xlsxschemas/name

	* @param {string} carrierId - Carrier ID

	* @param {string} name - Schema name
	 *
     */
     self.xlsxschemas.name.getXlsxSchemas = function(carrierId, name){
		var path = '/api/v1/carrierservices/xlsxschemas/{carrierId}/name/{name}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }

        path = path.replace('{name}', name);

        if(name === undefined && name !== null){
			throw 'Missing required  parameter: name';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.xlsxschemas = self.xlsxschemas || {};
	self.xlsxschemas.name = self.xlsxschemas.name || {};

	/**
     * 
     * @method deleteXlsxSchema
	 * @memberof carrierservices/xlsxschemas/name

	* @param {string} carrierId - Carrier ID

	* @param {string} name - Schema name
	 *
     */
     self.xlsxschemas.name.deleteXlsxSchema = function(carrierId, name){
		var path = '/api/v1/carrierservices/xlsxschemas/{carrierId}/name/{name}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }

        path = path.replace('{name}', name);

        if(name === undefined && name !== null){
			throw 'Missing required  parameter: name';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
