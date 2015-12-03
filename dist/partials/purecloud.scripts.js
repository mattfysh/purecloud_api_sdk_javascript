if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.scripts";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.scripts = (function (PureCloud) {
	/**
	* @namespace scripts
	**/

	var self = {};

	/**
     * 
     * @method getScripts
	 * @memberof scripts

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number

	* @param {string} expand - Expand

	* @param {string} name - Name

	* @param {string} feature - Feature
	 *
     */
     self.getScripts = function(pageSize, pageNumber, expand, name, feature){
		var path = '/api/v1/scripts';
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


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(feature !== undefined && feature !== null){
			queryParameters.feature = feature;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	/**
     * 
     * @method createScript
	 * @memberof scripts

	* @param {} body - 
	 *
     */
     self.createScript = function(body){
		var path = '/api/v1/scripts';
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
