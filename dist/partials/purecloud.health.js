if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.health";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.health = (function (PureCloud) {
	/**
	* @namespace health/check
	**/

	var self = {};
	self.check = self.check || {};

	/**
     * 
     * @method getHealth
	 * @memberof health/check
	 *
     */
     self.check.getHealth = function(){
		var path = '/health/check';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
