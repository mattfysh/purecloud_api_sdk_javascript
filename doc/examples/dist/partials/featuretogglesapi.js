/**
* @class
* @example
* var api = new FeaturetogglesApi(pureCloudSession);
*/
var FeaturetogglesApi = function (pureCloudSession) {
	/**
     * @summary Get the features that are enabled or disabled for this user
	 * @description 
	 * @memberOf FeaturetogglesApi#
	* @param {array} feature - The features to query.
	*/
	function getFeaturetoggles(feature){
		var apipath = '/api/v1/featuretoggles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(feature !== undefined && feature !== null){
			queryParameters.feature = feature;
		}

        if(feature === undefined && feature !== null){
			throw 'Missing required  parameter: feature';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFeaturetoggles = getFeaturetoggles;

    return self;
};
