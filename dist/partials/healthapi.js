/**
* @class
* @example
* var api = new HealthApi(pureCloudSession);
*/
var HealthApi = function (pureCloudSession) {
	/**
     * @summary Get health.
	 * @description 
	 * @memberOf HealthApi#
	*/
	function getHealthCheck(){
		var apipath = '/health/check';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getHealthCheck = getHealthCheck;
	/**
     * @summary Health check for one or more backend services
	 * @description 
	 * @memberOf HealthApi#
	* @param {boolean} expand - 
	* @param {string} name - 
	*/
	function getHealthCheckDc5ea213b82940c8ab65b1eb2b583ff7Services(expand, name){
		var apipath = '/health/check/dc5ea213-b829-40c8-ab65-b1eb2b583ff7/services';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getHealthCheckDc5ea213b82940c8ab65b1eb2b583ff7Services = getHealthCheckDc5ea213b82940c8ab65b1eb2b583ff7Services;
	/**
     * @summary Health check for backend service
	 * @description 
	 * @memberOf HealthApi#
	* @param {string} name - 
	*/
	function getHealthCheckDc5ea213b82940c8ab65b1eb2b583ff7ServicesName(name){
		var apipath = '/health/check/dc5ea213-b829-40c8-ab65-b1eb2b583ff7/services/{name}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{name}', name);

        if(name === undefined && name !== null){
			throw 'Missing required  parameter: name';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getHealthCheckDc5ea213b82940c8ab65b1eb2b583ff7ServicesName = getHealthCheckDc5ea213b82940c8ab65b1eb2b583ff7ServicesName;

    return self;
};
