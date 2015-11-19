if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.featuretoggles";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.featuretoggles = (function (PureCloud) {
	/**
	* @namespace featuretoggles
	**/

	var self = {};

	/**
     * 
     * @method getEnabledFeatures
	 * @memberof featuretoggles

	* @param {array} feature - The features to query.
	 *
     */
     self.getEnabledFeatures = function(feature){
		var path = '/api/v1/featuretoggles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(feature !== undefined && feature !== null){
			queryParameters.feature = feature;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
