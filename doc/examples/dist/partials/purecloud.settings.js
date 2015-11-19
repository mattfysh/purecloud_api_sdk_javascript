if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.settings";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.settings = (function (PureCloud) {
	/**
	* @namespace settings
	**/

	var self = {};

	/**
     * 
     * @method getSettings
	 * @memberof settings
	 *
     */
     self.getSettings = function(){
		var path = '/api/v1/settings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	/**
     * 
     * @method updateSettings
	 * @memberof settings

	* @param {} body - 
	 *
     */
     self.updateSettings = function(body){
		var path = '/api/v1/settings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
