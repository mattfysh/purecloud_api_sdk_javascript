if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.timezones";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.timezones = (function (PureCloud) {
	/**
	* @namespace timezones
	**/

	var self = {};

	/**
     * 
     * @method getTimezones
	 * @memberof timezones

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number
	 *
     */
     self.getTimezones = function(pageSize, pageNumber){
		var path = '/api/v1/timezones';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
