if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.date";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.date = (function (PureCloud) {
	/**
	* @namespace date
	**/

	var self = {};

	/**
     * 
     * @method getCurrentSystemDatetime
	 * @memberof date
	 *
     */
     self.getCurrentSystemDatetime = function(){
		var path = '/api/v1/date';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
