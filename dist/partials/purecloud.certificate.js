if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.certificate";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.certificate = (function (PureCloud) {
	/**
	* @namespace certificate/details
	**/

	var self = {};
	self.details = self.details || {};

	/**
     * 
     * @method getCertificateDetails
	 * @memberof certificate/details

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "certificate": ""
}
	 *
     */
     self.details.getCertificateDetails = function(body){
		var path = '/api/v1/certificate/details';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
