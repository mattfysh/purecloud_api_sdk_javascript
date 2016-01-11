/**
* @class
* @example
* var api = new SettingsApi(pureCloudSession);
*/
var SettingsApi = function (pureCloudSession) {
	/**
     * @summary Get settings for the current user
	 * @description 
	 * @memberOf SettingsApi#
	*/
	function getSettings(){
		var apipath = '/api/v1/settings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSettings = getSettings;
	/**
     * @summary Update settings for the current user
	 * @description 
	 * @memberOf SettingsApi#
	* @param {} body - 
	*/
	function update(body){
		var apipath = '/api/v1/settings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.update = update;

    return self;
};
