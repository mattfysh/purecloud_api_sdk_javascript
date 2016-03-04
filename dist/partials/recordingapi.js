//API VERSION - 
/**
* @class
* @example
* var api = new RecordingApi(pureCloudSession);
*/
var RecordingApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
	}

	var self = this;
	/**
     * @summary Get the Recording Configuration for the Organization
	 * @memberOf RecordingApi#
	* @param {boolean} createDefault - If no configuration is found, a new one is created with default values
	*/
	function getSettings(createDefault){
		var apipath = '/api/v1/recording/settings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(createDefault !== undefined && createDefault !== null){
			queryParameters.createDefault = createDefault;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSettings = getSettings;
	/**
     * @summary Update the Recording Configuration for the Organization
	 * @memberOf RecordingApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "maxSimultaneousStreams": 0
}
	*/
	function putSettings(body){
		var apipath = '/api/v1/recording/settings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putSettings = putSettings;

    return self;
};
