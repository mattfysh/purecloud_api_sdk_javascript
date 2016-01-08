/**
* @class
* @example
* var api = new DateApi(pureCloudSession);
*/
var DateApi = function (pureCloudSession) {
	/**
     * Get the current system date/time
	 * @memberOf DateApi#
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

    return self;
};
