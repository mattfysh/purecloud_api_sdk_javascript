/**
* @class
* @example
* var api = new UtilitiesApi(pureCloudSession);
*/
var UtilitiesApi = function (pureCloudSession) {
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
	function postCertificateDetails(body){
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
	self.postCertificateDetails = postCertificateDetails;
	/**
     * @summary Validates a street address
	 * @memberOf UtilitiesApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "address": {
      "country": "",
      "A1": "",
      "A3": "",
      "RD": "",
      "HNO": "",
      "LOC": "",
      "NAM": "",
      "PC": ""
   }
}
	*/
	function postConfigurationAddressvalidation(body){
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
	self.postConfigurationAddressvalidation = postConfigurationAddressvalidation;
	/**
     * @summary Get the current system date/time
	 * @memberOf UtilitiesApi#
	*/
	function getDate(){
		var apipath = '/api/v1/date';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDate = getDate;
	/**
     * @summary Get time zones list
	 * @memberOf UtilitiesApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getTimezones(pageSize, pageNumber){
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
	self.getTimezones = getTimezones;

    return self;
};
