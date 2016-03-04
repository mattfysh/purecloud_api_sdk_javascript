//API VERSION - 
/**
* @class
* @example
* var api = new UtilitiesApi(pureCloudSession);
*/
var UtilitiesApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
	}

	var self = this;
	/**
     * @summary Returns the information about an X509 PEM encoded certificate or certificate chain.
	 * @memberOf UtilitiesApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "certificate": ""
}
	*/
	function postDetails(body){
		var apipath = '/api/v1/certificate/details';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postDetails = postDetails;
	/**
     * @summary Validates a street address
	 * @memberOf UtilitiesApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "address": {
      "name": "",
      "street": "",
      "city": "",
      "countryName": "",
      "stateName": "",
      "postalCode": ""
   }
}
	*/
	function postAddressvalidation(body){
		var apipath = '/api/v1/configuration/addressvalidation';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postAddressvalidation = postAddressvalidation;
	/**
     * @summary Get the current system date/time
	 * @memberOf UtilitiesApi#
	*/
	function get(){
		var apipath = '/api/v1/date';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.get = get;
	/**
     * @summary Get health.
	 * @memberOf UtilitiesApi#
	*/
	function getCheck(){
		var apipath = '/api/v1/health/check';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCheck = getCheck;
	/**
     * @summary Get time zones list
	 * @memberOf UtilitiesApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function get(pageSize, pageNumber){
		var apipath = '/api/v1/timezones';
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
	self.get = get;

    return self;
};
