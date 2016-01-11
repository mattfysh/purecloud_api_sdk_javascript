/**
* @class
* @example
* var api = new CarrierservicesApi(pureCloudSession);
*/
var CarrierservicesApi = function (pureCloudSession) {
	/**
     * @summary Get the list of carriers
	 * @description 
	 * @memberOf CarrierservicesApi#
	*/
	function getCarriers(){
		var apipath = '/api/v1/carrierservices/carriers';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCarriers = getCarriers;
	/**
     * @summary Create a carrier
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {} body - Carrier data
	*/
	function createCarriers(body){
		var apipath = '/api/v1/carrierservices/carriers';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createCarriers = createCarriers;
	/**
     * @summary Get specified carrier by its carrier id
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} carrierId - Carrier ID
	*/
	function getCarrier(carrierId){
		var apipath = '/api/v1/carrierservices/carriers/{carrierId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCarrier = getCarrier;
	/**
     * @summary Update a carrier.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} carrierId - Carrier ID
	* @param {} body - Carrier data
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "carrierAddress": {
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
   "support": {
      "phone": "",
      "email": "",
      "website": ""
   },
   "nocSupport": {
      "phone": "",
      "email": ""
   },
   "services": [],
   "selfUri": ""
}
	*/
	function updateCarrier(carrierId, body){
		var apipath = '/api/v1/carrierservices/carriers/{carrierId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateCarrier = updateCarrier;
	/**
     * @summary Retrieves all services for a given carrier (i.e. OUTBOUND, INBOUND...)
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} carrierId - Carrier ID
	* @param {array} fields - Fields
	* @param {string} filter - Filter
	*/
	function getCarrierServices(carrierId, fields, filter){
		var apipath = '/api/v1/carrierservices/carriers/{carrierId}/services';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }


		if(fields !== undefined && fields !== null){
			queryParameters.fields = fields;
		}


		if(filter !== undefined && filter !== null){
			queryParameters.filter = filter;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCarrierServices = getCarrierServices;
	/**
     * @summary Creates a carrier service of a specified type (i.e. OUTBOUND, INBOUND...)
	 * @description 
	 * @memberOf CarrierservicesApi#
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
      "id": "",
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
      "carrierAddress": {},
      "accountManager": {},
      "support": {},
      "nocSupport": {},
      "services": [],
      "selfUri": ""
   },
   "selfUri": ""
}
	*/
	function createCarrierServices(carrierId, body){
		var apipath = '/api/v1/carrierservices/carriers/{carrierId}/services';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createCarrierServices = createCarrierServices;
	/**
     * @summary Retrieves a specific service for a given carrier (i.e. OUTBOUND, INBOUND...)
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} carrierId - Carrier ID
	* @param {string} serviceId - Service ID
	* @param {array} fields - Fields
	*/
	function getCarrierServicesByServiceId(carrierId, serviceId, fields){
		var apipath = '/api/v1/carrierservices/carriers/{carrierId}/services/{serviceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }

        apipath = apipath.replace('{serviceId}', serviceId);

        if(serviceId === undefined && serviceId !== null){
			throw 'Missing required  parameter: serviceId';
        }


		if(fields !== undefined && fields !== null){
			queryParameters.fields = fields;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCarrierServicesByServiceId = getCarrierServicesByServiceId;
	/**
     * @summary Updates a specific service for a given carrier (i.e. OUTBOUND, INBOUND...)
	 * @description 
	 * @memberOf CarrierservicesApi#
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
      "id": "",
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
      "carrierAddress": {},
      "accountManager": {},
      "support": {},
      "nocSupport": {},
      "services": [],
      "selfUri": ""
   },
   "selfUri": ""
}
	*/
	function updateCarrierServicesByServiceId(carrierId, serviceId, body){
		var apipath = '/api/v1/carrierservices/carriers/{carrierId}/services/{serviceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }

        apipath = apipath.replace('{serviceId}', serviceId);

        if(serviceId === undefined && serviceId !== null){
			throw 'Missing required  parameter: serviceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateCarrierServicesByServiceId = updateCarrierServicesByServiceId;
	/**
     * @summary Deletes a specific service for a given carrier (i.e. OUTBOUND, INBOUND...)
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} carrierId - Carrier ID
	* @param {string} serviceId - Service ID
	*/
	function deleteCarrierServicesByServiceId(carrierId, serviceId){
		var apipath = '/api/v1/carrierservices/carriers/{carrierId}/services/{serviceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }

        apipath = apipath.replace('{serviceId}', serviceId);

        if(serviceId === undefined && serviceId !== null){
			throw 'Missing required  parameter: serviceId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteCarrierServicesByServiceId = deleteCarrierServicesByServiceId;
	/**
     * @summary Get all CSV schemas available.
	 * @description 
	 * @memberOf CarrierservicesApi#
	*/
	function getCsvschemas(){
		var apipath = '/api/v1/carrierservices/csvschemas';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCsvschemas = getCsvschemas;
	/**
     * @summary Get all CSV schemas for a given carrier.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} carrierId - Carrier ID
	*/
	function getCsvschemasCarrier(carrierId){
		var apipath = '/api/v1/carrierservices/csvschemas/{carrierId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCsvschemasCarrier = getCsvschemasCarrier;
	/**
     * @summary Updates or creates a CSV schema for a carrier.
	 * @description 
	 * @memberOf CarrierservicesApi#
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
	*/
	function updateCsvschemasCarrier(body, carrierId){
		var apipath = '/api/v1/carrierservices/csvschemas/{carrierId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        apipath = apipath.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateCsvschemasCarrier = updateCsvschemasCarrier;
	/**
     * @summary Get all CSV schemas for a given carrier and name.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} carrierId - Carrier ID
	* @param {string} name - Schema name
	*/
	function getCsvschemasCarrierNameByName(carrierId, name){
		var apipath = '/api/v1/carrierservices/csvschemas/{carrierId}/name/{name}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }

        apipath = apipath.replace('{name}', name);

        if(name === undefined && name !== null){
			throw 'Missing required  parameter: name';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCsvschemasCarrierNameByName = getCsvschemasCarrierNameByName;
	/**
     * @summary Deletes a CSV schema for a carrier.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} carrierId - Carrier ID
	* @param {string} name - Schema name
	*/
	function deleteCsvschemasCarrierNameByName(carrierId, name){
		var apipath = '/api/v1/carrierservices/csvschemas/{carrierId}/name/{name}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }

        apipath = apipath.replace('{name}', name);

        if(name === undefined && name !== null){
			throw 'Missing required  parameter: name';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteCsvschemasCarrierNameByName = deleteCsvschemasCarrierNameByName;
	/**
     * @summary Search for available numbers.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} npa - The allowed number ranges for local numbers are [2-9] for the first digit and [0-9] for both the second and third digits. The allowed numbers for toll-free are 800, 888, etc.
	* @param {string} state - The two-letter abbreviation of the state the RateCenter is in.
	* @param {string} city - The name of the city.
	* @param {string} zip - A five-digit (XXXXX) or nine-digit (XXXXX-XXXX) zip-code value.
	* @param {string} lata - A maximum five digit (XXXXX) numeric format.
	* @param {string} rateCenter - The abbreviation for the Rate Center
	* @param {string} vanity - Requested vanity number. Valid range is from 4 to 7 alphanumeric characters.
	* @param {string} prefix - Prefix of the number, must be 6 or 7 digits.
	* @param {integer} quantity - The desired quantity of requested numbers. Values range from 1-5000. If no quantity is specified, the default of 5000 is returned.
	* @param {string} orderBy - The field by which the returned numbers will be sorted. Only supported if at least one of the following search criteria is specified: prefix, city, zip. Allowed values are fullNumber, npaNxxx, npaNxx, and areaCode>
	* @param {boolean} enableTNDetail - If set to true, a list of details associated with the telephone number (rate center abbreviation, rate center host city, state, and LATA) will be displayed along with the telephone number. This value is set to false by default.
	* @param {string} type - The type of phone number (eg us-domestic, toll-free, etc), to determine which third-party api(s) to use for the search.
	TOLL_FREE,
	CN_DOMESTIC,
	US_DOMESTIC,
	*/
	function getNumberpurchaseAvailable(npa, state, city, zip, lata, rateCenter, vanity, prefix, quantity, orderBy, enableTNDetail, type){
		var apipath = '/api/v1/carrierservices/numberpurchase/available';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(npa !== undefined && npa !== null){
			queryParameters.npa = npa;
		}


		if(state !== undefined && state !== null){
			queryParameters.state = state;
		}


		if(city !== undefined && city !== null){
			queryParameters.city = city;
		}


		if(zip !== undefined && zip !== null){
			queryParameters.zip = zip;
		}


		if(lata !== undefined && lata !== null){
			queryParameters.lata = lata;
		}


		if(rateCenter !== undefined && rateCenter !== null){
			queryParameters.rateCenter = rateCenter;
		}


		if(vanity !== undefined && vanity !== null){
			queryParameters.vanity = vanity;
		}


		if(prefix !== undefined && prefix !== null){
			queryParameters.prefix = prefix;
		}


		if(quantity !== undefined && quantity !== null){
			queryParameters.quantity = quantity;
		}


		if(orderBy !== undefined && orderBy !== null){
			queryParameters.orderBy = orderBy;
		}


		if(enableTNDetail !== undefined && enableTNDetail !== null){
			queryParameters.enableTNDetail = enableTNDetail;
		}


		if(type !== undefined && type !== null){
			queryParameters.type = type;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getNumberpurchaseAvailable = getNumberpurchaseAvailable;
	/**
     * @summary View all number orders for the organization.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} phoneNumberType - Phone Number Type
	TOLL_FREE,
	CN_DOMESTIC,
	US_DOMESTIC,
	*/
	function getNumberpurchaseOrders(phoneNumberType){
		var apipath = '/api/v1/carrierservices/numberpurchase/orders';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(phoneNumberType !== undefined && phoneNumberType !== null){
			queryParameters.phoneNumberType = phoneNumberType;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getNumberpurchaseOrders = getNumberpurchaseOrders;
	/**
     * @summary Purchase numbers.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} phoneNumberType - Phone Number Type
	TOLL_FREE,
	CN_DOMESTIC,
	US_DOMESTIC,
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "orderTns": [],
   "reservationIds": [],
   "orderId": "",
   "effectiveDate": "",
   "phoneNumberType": ""
}
	*/
	function createNumberpurchaseOrders(phoneNumberType, body){
		var apipath = '/api/v1/carrierservices/numberpurchase/orders';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(phoneNumberType !== undefined && phoneNumberType !== null){
			queryParameters.phoneNumberType = phoneNumberType;
		}

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createNumberpurchaseOrders = createNumberpurchaseOrders;
	/**
     * @summary View all a number order record.  Some vender apis have side effects when viewing records with pending operations.  This method also manages the side effects and updates ININ-side data stores to reflect any changes.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} orderId - Phone Number Order ID
	*/
	function getNumberpurchaseOrder(orderId){
		var apipath = '/api/v1/carrierservices/numberpurchase/orders/{orderId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{orderId}', orderId);

        if(orderId === undefined && orderId !== null){
			throw 'Missing required  parameter: orderId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getNumberpurchaseOrder = getNumberpurchaseOrder;
	/**
     * @summary Disconnect the number purchased in a particlar order.  The order record remains (in the deleted state) for record keeping.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} orderId - Phone Number Order ID
	*/
	function deleteNumberpurchaseOrder(orderId){
		var apipath = '/api/v1/carrierservices/numberpurchase/orders/{orderId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{orderId}', orderId);

        if(orderId === undefined && orderId !== null){
			throw 'Missing required  parameter: orderId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteNumberpurchaseOrder = deleteNumberpurchaseOrder;
	/**
     * @summary Reserve available numbers, making them ready for purchase and preventing other users from accessing them.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {} body - 
	*/
	function createNumberpurchaseReserved(body){
		var apipath = '/api/v1/carrierservices/numberpurchase/reserved';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createNumberpurchaseReserved = createNumberpurchaseReserved;
	/**
     * @summary View a specific reservation.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} reservationId - Phone Number Reservation ID
	* @param {string} phoneNumberType - Phone Number Type
	TOLL_FREE,
	CN_DOMESTIC,
	US_DOMESTIC,
	*/
	function getNumberpurchaseReservedReservation(reservationId, phoneNumberType){
		var apipath = '/api/v1/carrierservices/numberpurchase/reserved/{reservationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{reservationId}', reservationId);

        if(reservationId === undefined && reservationId !== null){
			throw 'Missing required  parameter: reservationId';
        }


		if(phoneNumberType !== undefined && phoneNumberType !== null){
			queryParameters.phoneNumberType = phoneNumberType;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getNumberpurchaseReservedReservation = getNumberpurchaseReservedReservation;
	/**
     * @summary Cancel a specific reservation, making the number available for other users, again.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} reservationId - Phone Number Reservation ID
	* @param {string} phoneNumberType - Phone Number Type
	TOLL_FREE,
	CN_DOMESTIC,
	US_DOMESTIC,
	*/
	function deleteNumberpurchaseReservedReservation(reservationId, phoneNumberType){
		var apipath = '/api/v1/carrierservices/numberpurchase/reserved/{reservationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{reservationId}', reservationId);

        if(reservationId === undefined && reservationId !== null){
			throw 'Missing required  parameter: reservationId';
        }


		if(phoneNumberType !== undefined && phoneNumberType !== null){
			queryParameters.phoneNumberType = phoneNumberType;
		}


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteNumberpurchaseReservedReservation = deleteNumberpurchaseReservedReservation;
	/**
     * @summary Get ratesheet upload progress for a user.
	 * @description 
	 * @memberOf CarrierservicesApi#
	*/
	function getProgress(){
		var apipath = '/api/v1/carrierservices/progress';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProgress = getProgress;
	/**
     * @summary Get LCR report.
	 * @description This method queries Druid for a Phone Number Purchase Stats database report.  Some Druid terminology is required to use it.  Each query parameter besides dimensions, _pgn, and _pgs, is a Druid dimension.  From the Druid documentation: Dimensions: Aspects or categories of data, such as languages or locations. For example, with language and country as the type of dimension, values could be "English" or "Mandarin" for language, or "USA" or "China" for country. In Druid, dimensions can serve as filters for narrowing down hits (for example, language = "English" or country = "China").  When using a dimension query parameter with a value the report will return events with granularity of that dimension where the dimension value is equal to the value you specified.  If you want to receive events with dimension based granularity with no filter, opt to use the dimensions query parameters, which is a comma  separated list of values that use the other query parameters as dimension names.  Each  parameter needs to be in the screaming snake case format, or words capitalized with underscores between words (i.e. CUSTOMER_ID).
	 * @memberOf CarrierservicesApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	* @param {string} granularity - The granularity field determines how data gets bucketed across the time dimension, or how it gets aggregated by hour, day, minute, etc. all buckets everything into a single bucket. none does not bucket data (it actually uses the granularity of the index - minimum here is none which means millisecond granularity).
	* @param {string} dimensions - Dimensions are really any other parameter specified, excluding granularity.  To specify multiple dimensions use comma separated values.
	* @param {string} startDate - Start dateTime for ISO-8601 Intervals. This defines the time ranges to run the query over.  If not set will always default to now minus 15 days.
	* @param {string} endDate - End dateTime for ISO-8601 Intervals. This defines the time ranges to run the query over. If not set will always default to startDate plus 30 days.
	* @param {boolean} regexFilterEnabled - Specifies if all dimension filters should be implemented as regexps.
	* @param {string} effectiveStartDate - Effective date number service starts
	* @param {string} effectiveEndDate - Effective date number service ends
	* @param {string} did - Number purchased (Can use with regex for npa, etc.)
	* @param {string} phoneNumberType - Type of number purchased (ie. us-domestic, tollfree...)
	TOLL_FREE,
	CN_DOMESTIC,
	US_DOMESTIC,
	* @param {string} startAuthUserId - User id for the number purchase
	* @param {string} endAuthUserId - User id for the number disconnect order
	* @param {string} status - Status of the number purchase
	COMPLETE,
	FAILED,
	BACKORDERED,
	PENDING,
	ERROR,
	DISCONNECTED,
	DISCONNECT_PENDING,
	DISCONNECT_FAILED,
	* @param {string} orgId - Organization id for the number purchase
	*/
	function getReportPurchases(pageSize, pageNumber, sortBy, expand, granularity, dimensions, startDate, endDate, regexFilterEnabled, effectiveStartDate, effectiveEndDate, did, phoneNumberType, startAuthUserId, endAuthUserId, status, orgId){
		var apipath = '/api/v1/carrierservices/report/purchases';
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


		if(effectiveStartDate !== undefined && effectiveStartDate !== null){
			queryParameters.effectiveStartDate = effectiveStartDate;
		}


		if(effectiveEndDate !== undefined && effectiveEndDate !== null){
			queryParameters.effectiveEndDate = effectiveEndDate;
		}


		if(did !== undefined && did !== null){
			queryParameters.did = did;
		}


		if(phoneNumberType !== undefined && phoneNumberType !== null){
			queryParameters.phoneNumberType = phoneNumberType;
		}


		if(startAuthUserId !== undefined && startAuthUserId !== null){
			queryParameters.startAuthUserId = startAuthUserId;
		}


		if(endAuthUserId !== undefined && endAuthUserId !== null){
			queryParameters.endAuthUserId = endAuthUserId;
		}


		if(status !== undefined && status !== null){
			queryParameters.status = status;
		}


		if(orgId !== undefined && orgId !== null){
			queryParameters.orgId = orgId;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getReportPurchases = getReportPurchases;
	/**
     * @summary Get LCR report.
	 * @description This method queries Druid for a Call Stats database report.  Some Druid terminology is required to use it.  Each query parameter besides dimensions, _pgn, and _pgs, is a Druid dimension.  From the Druid documentation: Dimensions: Aspects or categories of data, such as languages or locations. For example, with language and country as the type of dimension, values could be "English" or "Mandarin" for language, or "USA" or "China" for country. In Druid, dimensions can serve as filters for narrowing down hits (for example, language = "English" or country = "China").  When using a dimension query parameter with a value the report will return events with granularity of that dimension where the dimension value is equal to the value you specified.  If you want to receive events with dimension based granularity with no filter, opt to use the dimensions query parameters, which is a comma  separated list of values that use the other query parameters as dimension names.  Each  parameter needs to be in the screaming snake case format, or words capitalized with underscores between words (i.e. CUSTOMER_ID).
	 * @memberOf CarrierservicesApi#
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
	* @param {string} lrn - This method queries Druid for a Call Stats database report.  Some Druid terminology is required to use it.  Each query parameter besides dimensions, _pgn, and _pgs, is a Druid dimension.  From the Druid documentation: Dimensions: Aspects or categories of data, such as languages or locations. For example, with language and country as the type of dimension, values could be "English" or "Mandarin" for language, or "USA" or "China" for country. In Druid, dimensions can serve as filters for narrowing down hits (for example, language = "English" or country = "China").  When using a dimension query parameter with a value the report will return events with granularity of that dimension where the dimension value is equal to the value you specified.  If you want to receive events with dimension based granularity with no filter, opt to use the dimensions query parameters, which is a comma  separated list of values that use the other query parameters as dimension names.  Each  parameter needs to be in the screaming snake case format, or words capitalized with underscores between words (i.e. CUSTOMER_ID).
	* @param {string} sipStatus - SIP status code
	* @param {string} dialogId - This method queries Druid for a Call Stats database report.  Some Druid terminology is required to use it.  Each query parameter besides dimensions, _pgn, and _pgs, is a Druid dimension.  From the Druid documentation: Dimensions: Aspects or categories of data, such as languages or locations. For example, with language and country as the type of dimension, values could be "English" or "Mandarin" for language, or "USA" or "China" for country. In Druid, dimensions can serve as filters for narrowing down hits (for example, language = "English" or country = "China").  When using a dimension query parameter with a value the report will return events with granularity of that dimension where the dimension value is equal to the value you specified.  If you want to receive events with dimension based granularity with no filter, opt to use the dimensions query parameters, which is a comma  separated list of values that use the other query parameters as dimension names.  Each  parameter needs to be in the screaming snake case format, or words capitalized with underscores between words (i.e. CUSTOMER_ID).
	* @param {string} orgId - Organization id for the placed call
	* @param {string} cnam - This method queries Druid for a Call Stats database report.  Some Druid terminology is required to use it.  Each query parameter besides dimensions, _pgn, and _pgs, is a Druid dimension.  From the Druid documentation: Dimensions: Aspects or categories of data, such as languages or locations. For example, with language and country as the type of dimension, values could be "English" or "Mandarin" for language, or "USA" or "China" for country. In Druid, dimensions can serve as filters for narrowing down hits (for example, language = "English" or country = "China").  When using a dimension query parameter with a value the report will return events with granularity of that dimension where the dimension value is equal to the value you specified.  If you want to receive events with dimension based granularity with no filter, opt to use the dimensions query parameters, which is a comma  separated list of values that use the other query parameters as dimension names.  Each  parameter needs to be in the screaming snake case format, or words capitalized with underscores between words (i.e. CUSTOMER_ID).
	* @param {string} from - From prefix of the number
	* @param {string} to - To prefix of the number
	* @param {string} gatewayId - This method queries Druid for a Call Stats database report.  Some Druid terminology is required to use it.  Each query parameter besides dimensions, _pgn, and _pgs, is a Druid dimension.  From the Druid documentation: Dimensions: Aspects or categories of data, such as languages or locations. For example, with language and country as the type of dimension, values could be "English" or "Mandarin" for language, or "USA" or "China" for country. In Druid, dimensions can serve as filters for narrowing down hits (for example, language = "English" or country = "China").  When using a dimension query parameter with a value the report will return events with granularity of that dimension where the dimension value is equal to the value you specified.  If you want to receive events with dimension based granularity with no filter, opt to use the dimensions query parameters, which is a comma  separated list of values that use the other query parameters as dimension names.  Each  parameter needs to be in the screaming snake case format, or words capitalized with underscores between words (i.e. CUSTOMER_ID).
	* @param {string} direction - Direction of the call (e.g. incoming/outgoing)
	* @param {string} serviceId - Purevoice service id
	* @param {string} sendTime - This method queries Druid for a Call Stats database report.  Some Druid terminology is required to use it.  Each query parameter besides dimensions, _pgn, and _pgs, is a Druid dimension.  From the Druid documentation: Dimensions: Aspects or categories of data, such as languages or locations. For example, with language and country as the type of dimension, values could be "English" or "Mandarin" for language, or "USA" or "China" for country. In Druid, dimensions can serve as filters for narrowing down hits (for example, language = "English" or country = "China").  When using a dimension query parameter with a value the report will return events with granularity of that dimension where the dimension value is equal to the value you specified.  If you want to receive events with dimension based granularity with no filter, opt to use the dimensions query parameters, which is a comma  separated list of values that use the other query parameters as dimension names.  Each  parameter needs to be in the screaming snake case format, or words capitalized with underscores between words (i.e. CUSTOMER_ID).
	* @param {string} answerTime - Time in which the call was connected end to end
	* @param {string} receiveTime - Time in which the call was retrieved by Purevoice
	* @param {string} failTime - This method queries Druid for a Call Stats database report.  Some Druid terminology is required to use it.  Each query parameter besides dimensions, _pgn, and _pgs, is a Druid dimension.  From the Druid documentation: Dimensions: Aspects or categories of data, such as languages or locations. For example, with language and country as the type of dimension, values could be "English" or "Mandarin" for language, or "USA" or "China" for country. In Druid, dimensions can serve as filters for narrowing down hits (for example, language = "English" or country = "China").  When using a dimension query parameter with a value the report will return events with granularity of that dimension where the dimension value is equal to the value you specified.  If you want to receive events with dimension based granularity with no filter, opt to use the dimensions query parameters, which is a comma  separated list of values that use the other query parameters as dimension names.  Each  parameter needs to be in the screaming snake case format, or words capitalized with underscores between words (i.e. CUSTOMER_ID).
	* @param {string} disconnectTime - This method queries Druid for a Call Stats database report.  Some Druid terminology is required to use it.  Each query parameter besides dimensions, _pgn, and _pgs, is a Druid dimension.  From the Druid documentation: Dimensions: Aspects or categories of data, such as languages or locations. For example, with language and country as the type of dimension, values could be "English" or "Mandarin" for language, or "USA" or "China" for country. In Druid, dimensions can serve as filters for narrowing down hits (for example, language = "English" or country = "China").  When using a dimension query parameter with a value the report will return events with granularity of that dimension where the dimension value is equal to the value you specified.  If you want to receive events with dimension based granularity with no filter, opt to use the dimensions query parameters, which is a comma  separated list of values that use the other query parameters as dimension names.  Each  parameter needs to be in the screaming snake case format, or words capitalized with underscores between words (i.e. CUSTOMER_ID).
	* @param {string} endTime - Time of success call ending
	* @param {string} cnamTime - This method queries Druid for a Call Stats database report.  Some Druid terminology is required to use it.  Each query parameter besides dimensions, _pgn, and _pgs, is a Druid dimension.  From the Druid documentation: Dimensions: Aspects or categories of data, such as languages or locations. For example, with language and country as the type of dimension, values could be "English" or "Mandarin" for language, or "USA" or "China" for country. In Druid, dimensions can serve as filters for narrowing down hits (for example, language = "English" or country = "China").  When using a dimension query parameter with a value the report will return events with granularity of that dimension where the dimension value is equal to the value you specified.  If you want to receive events with dimension based granularity with no filter, opt to use the dimensions query parameters, which is a comma  separated list of values that use the other query parameters as dimension names.  Each  parameter needs to be in the screaming snake case format, or words capitalized with underscores between words (i.e. CUSTOMER_ID).
	* @param {string} lnpTime - This method queries Druid for a Call Stats database report.  Some Druid terminology is required to use it.  Each query parameter besides dimensions, _pgn, and _pgs, is a Druid dimension.  From the Druid documentation: Dimensions: Aspects or categories of data, such as languages or locations. For example, with language and country as the type of dimension, values could be "English" or "Mandarin" for language, or "USA" or "China" for country. In Druid, dimensions can serve as filters for narrowing down hits (for example, language = "English" or country = "China").  When using a dimension query parameter with a value the report will return events with granularity of that dimension where the dimension value is equal to the value you specified.  If you want to receive events with dimension based granularity with no filter, opt to use the dimensions query parameters, which is a comma  separated list of values that use the other query parameters as dimension names.  Each  parameter needs to be in the screaming snake case format, or words capitalized with underscores between words (i.e. CUSTOMER_ID).
	* @param {string} rejectTime - This method queries Druid for a Call Stats database report.  Some Druid terminology is required to use it.  Each query parameter besides dimensions, _pgn, and _pgs, is a Druid dimension.  From the Druid documentation: Dimensions: Aspects or categories of data, such as languages or locations. For example, with language and country as the type of dimension, values could be "English" or "Mandarin" for language, or "USA" or "China" for country. In Druid, dimensions can serve as filters for narrowing down hits (for example, language = "English" or country = "China").  When using a dimension query parameter with a value the report will return events with granularity of that dimension where the dimension value is equal to the value you specified.  If you want to receive events with dimension based granularity with no filter, opt to use the dimensions query parameters, which is a comma  separated list of values that use the other query parameters as dimension names.  Each  parameter needs to be in the screaming snake case format, or words capitalized with underscores between words (i.e. CUSTOMER_ID).
	*/
	function getReportUsage(pageSize, pageNumber, sortBy, expand, granularity, dimensions, startDate, endDate, regexFilterEnabled, sipCallId, sipReason, lrn, sipStatus, dialogId, orgId, cnam, from, to, gatewayId, direction, serviceId, sendTime, answerTime, receiveTime, failTime, disconnectTime, endTime, cnamTime, lnpTime, rejectTime){
		var apipath = '/api/v1/carrierservices/report/usage';
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


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getReportUsage = getReportUsage;
	/**
     * @summary Get View Url
	 * @description Provides url of a hosted DocuSign view/document, allowing user to sign document electronically
	 * @memberOf CarrierservicesApi#
	* @param {} body - Provides url of a hosted DocuSign view/document, allowing user to sign document electronically
	 * @example
	 * Body Example:
	 * {
   "org": {
      "id": "",
      "name": "",
      "thirdPartyOrgId": "",
      "thirdPartyOrgName": "",
      "thirdPartyURI": "",
      "adminUsername": "",
      "adminPassword": "",
      "domain": "",
      "version": 0,
      "state": "",
      "defaultSiteId": "",
      "deletable": true,
      "selfUri": ""
   },
   "user": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "returnUrl": ""
}
	*/
	function createSignature(body){
		var apipath = '/api/v1/carrierservices/signature';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createSignature = createSignature;
	/**
     * @summary Get a stored transform plan for uploaded spreadsheets
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} filter - Filter
	* @param {string} pageSize - Page size
	* @param {string} lastEntry - Last entry
	*/
	function getTransformendpoints(filter, pageSize, lastEntry){
		var apipath = '/api/v1/carrierservices/transformendpoints';
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


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getTransformendpoints = getTransformendpoints;
	/**
     * @summary Add a new transform plan for uploaded spreadsheets
	 * @description 
	 * @memberOf CarrierservicesApi#
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
	*/
	function createTransformendpoints(body){
		var apipath = '/api/v1/carrierservices/transformendpoints';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createTransformendpoints = createTransformendpoints;
	/**
     * @summary Get a stored Endpoint plan for uploaded Transforms
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} id - Endpoint ID
	*/
	function getTransformendpointsId(id){
		var apipath = '/api/v1/carrierservices/transformendpoints/{id}';
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
	self.getTransformendpointsId = getTransformendpointsId;
	/**
     * @summary Update an existing Endpoint plan for uploaded Transforms
	 * @description 
	 * @memberOf CarrierservicesApi#
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
	*/
	function updateTransformendpointsId(id, body){
		var apipath = '/api/v1/carrierservices/transformendpoints/{id}';
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


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateTransformendpointsId = updateTransformendpointsId;
	/**
     * @summary Delete an existing Endpoint plan for uploaded Transforms
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} id - Endpoint ID
	*/
	function deleteTransformendpointsId(id){
		var apipath = '/api/v1/carrierservices/transformendpoints/{id}';
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
	self.deleteTransformendpointsId = deleteTransformendpointsId;
	/**
     * @summary Get The progress report for transforming uploaded documents
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} service - Service Name
	*/
	function getTransformprogressSearchService(service){
		var apipath = '/api/v1/carrierservices/transformprogress/search/{service}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{service}', service);

        if(service === undefined && service !== null){
			throw 'Missing required  parameter: service';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getTransformprogressSearchService = getTransformprogressSearchService;
	/**
     * @summary Get The progress report for transforming uploaded documents
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} service - Service Name
	* @param {string} modeltype - Model Type
	*/
	function getTransformprogressSearchServiceByModeltype(service, modeltype){
		var apipath = '/api/v1/carrierservices/transformprogress/search/{service}/{modeltype}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{service}', service);

        if(service === undefined && service !== null){
			throw 'Missing required  parameter: service';
        }

        apipath = apipath.replace('{modeltype}', modeltype);

        if(modeltype === undefined && modeltype !== null){
			throw 'Missing required  parameter: modeltype';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getTransformprogressSearchServiceByModeltype = getTransformprogressSearchServiceByModeltype;
	/**
     * @summary Get The progress report for transforming uploaded documents
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} service - Service Name
	* @param {string} modeltype - Model Type
	* @param {string} modelid - Model ID
	*/
	function getTransformprogressSearchServiceByModeltypeByModelid(service, modeltype, modelid){
		var apipath = '/api/v1/carrierservices/transformprogress/search/{service}/{modeltype}/{modelid}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{service}', service);

        if(service === undefined && service !== null){
			throw 'Missing required  parameter: service';
        }

        apipath = apipath.replace('{modeltype}', modeltype);

        if(modeltype === undefined && modeltype !== null){
			throw 'Missing required  parameter: modeltype';
        }

        apipath = apipath.replace('{modelid}', modelid);

        if(modelid === undefined && modelid !== null){
			throw 'Missing required  parameter: modelid';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getTransformprogressSearchServiceByModeltypeByModelid = getTransformprogressSearchServiceByModeltypeByModelid;
	/**
     * @summary The progress report for an upload
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} id - Upload Progress ID
	*/
	function getTransformprogressId(id){
		var apipath = '/api/v1/carrierservices/transformprogress/{id}';
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
	self.getTransformprogressId = getTransformprogressId;
	/**
     * @summary Get a stored transform plan for uploaded spreadsheets
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} filter - Filter
	* @param {string} pageSize - Page size
	* @param {string} lastEntry - Last entry
	*/
	function getUploadtransformSpreadsheets(filter, pageSize, lastEntry){
		var apipath = '/api/v1/carrierservices/uploadtransform/spreadsheets';
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


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUploadtransformSpreadsheets = getUploadtransformSpreadsheets;
	/**
     * @summary Add a new transform plan for uploaded spreadsheets
	 * @description 
	 * @memberOf CarrierservicesApi#
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
	*/
	function createUploadtransformSpreadsheets(body){
		var apipath = '/api/v1/carrierservices/uploadtransform/spreadsheets';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createUploadtransformSpreadsheets = createUploadtransformSpreadsheets;
	/**
     * @summary Get a stored transform plan for uploaded spreadsheets
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} id - Transform ID
	*/
	function getUploadtransformSpreadsheetsId(id){
		var apipath = '/api/v1/carrierservices/uploadtransform/spreadsheets/{id}';
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
	self.getUploadtransformSpreadsheetsId = getUploadtransformSpreadsheetsId;
	/**
     * @summary Update an existing transform plan for uploaded spreadsheets
	 * @description 
	 * @memberOf CarrierservicesApi#
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
	*/
	function updateUploadtransformSpreadsheetsId(id, body){
		var apipath = '/api/v1/carrierservices/uploadtransform/spreadsheets/{id}';
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


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateUploadtransformSpreadsheetsId = updateUploadtransformSpreadsheetsId;
	/**
     * @summary Delete an existing transform plan for uploaded spreadsheets
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} id - Transform ID
	*/
	function deleteUploadtransformSpreadsheetsId(id){
		var apipath = '/api/v1/carrierservices/uploadtransform/spreadsheets/{id}';
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
	self.deleteUploadtransformSpreadsheetsId = deleteUploadtransformSpreadsheetsId;
	/**
     * @summary Get a stored transform plan for uploaded delimited text tables
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} filter - Filter
	*/
	function getUploadtransformTexttables(filter){
		var apipath = '/api/v1/carrierservices/uploadtransform/texttables';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(filter !== undefined && filter !== null){
			queryParameters.filter = filter;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUploadtransformTexttables = getUploadtransformTexttables;
	/**
     * @summary Add a new transform plan for uploaded delimited text tables
	 * @description 
	 * @memberOf CarrierservicesApi#
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
	*/
	function createUploadtransformTexttables(body){
		var apipath = '/api/v1/carrierservices/uploadtransform/texttables';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createUploadtransformTexttables = createUploadtransformTexttables;
	/**
     * @summary Get a stored transform plan for uploaded delimited text tables
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} id - Transform ID
	*/
	function getUploadtransformTexttablesId(id){
		var apipath = '/api/v1/carrierservices/uploadtransform/texttables/{id}';
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
	self.getUploadtransformTexttablesId = getUploadtransformTexttablesId;
	/**
     * @summary Update an existing transform plan for uploaded delimited text tables
	 * @description 
	 * @memberOf CarrierservicesApi#
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
	*/
	function updateUploadtransformTexttablesId(id, body){
		var apipath = '/api/v1/carrierservices/uploadtransform/texttables/{id}';
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


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateUploadtransformTexttablesId = updateUploadtransformTexttablesId;
	/**
     * @summary Delete an existing transform plan for uploaded delimited text tables
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} id - Transform ID
	*/
	function deleteUploadtransformTexttablesId(id){
		var apipath = '/api/v1/carrierservices/uploadtransform/texttables/{id}';
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
	self.deleteUploadtransformTexttablesId = deleteUploadtransformTexttablesId;
	/**
     * @summary Get all available XLSX schemas.
	 * @description 
	 * @memberOf CarrierservicesApi#
	*/
	function getXlsxschemas(){
		var apipath = '/api/v1/carrierservices/xlsxschemas';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getXlsxschemas = getXlsxschemas;
	/**
     * @summary Get all XLSX schemas for a given carrier.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} carrierId - Carrier ID
	*/
	function getXlsxschemasCarrier(carrierId){
		var apipath = '/api/v1/carrierservices/xlsxschemas/{carrierId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getXlsxschemasCarrier = getXlsxschemasCarrier;
	/**
     * @summary Updates or creates a XLSX schema for a carrier.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {} body - Schema data
	* @param {string} carrierId - Carrier ID
	 * @example
	 * Body Example:
	 * {
   "SheetSchemas": [],
   "Name": "",
   "CarrierId": ""
}
	*/
	function updateXlsxschemasCarrier(body, carrierId){
		var apipath = '/api/v1/carrierservices/xlsxschemas/{carrierId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        apipath = apipath.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateXlsxschemasCarrier = updateXlsxschemasCarrier;
	/**
     * @summary Get all XLSX schemas for a given carrier and name.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} carrierId - Carrier ID
	* @param {string} name - Schema name
	*/
	function getXlsxschemasCarrierNameByName(carrierId, name){
		var apipath = '/api/v1/carrierservices/xlsxschemas/{carrierId}/name/{name}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }

        apipath = apipath.replace('{name}', name);

        if(name === undefined && name !== null){
			throw 'Missing required  parameter: name';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getXlsxschemasCarrierNameByName = getXlsxschemasCarrierNameByName;
	/**
     * @summary Deletes a XLSX schema for a carrier.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} carrierId - Carrier ID
	* @param {string} name - Schema name
	*/
	function deleteXlsxschemasCarrierNameByName(carrierId, name){
		var apipath = '/api/v1/carrierservices/xlsxschemas/{carrierId}/name/{name}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }

        apipath = apipath.replace('{name}', name);

        if(name === undefined && name !== null){
			throw 'Missing required  parameter: name';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteXlsxschemasCarrierNameByName = deleteXlsxschemasCarrierNameByName;

    return self;
};
