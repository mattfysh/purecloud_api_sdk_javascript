if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.statuses";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.statuses = (function (PureCloud) {
	/**
	* @namespace statuses
	**/

	var self = {};

	/**
     * 
     * @method getStatuses
	 * @memberof statuses
	 *
     */
     self.getStatuses = function(){
		var path = '/api/v1/statuses';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
