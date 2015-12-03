if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.downloads";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.downloads = (function (PureCloud) {
	/**
	* @namespace downloads/callback
	**/
	/**
	* @namespace downloads
	**/

	var self = {};
	self.callback = self.callback || {};

	/**
     * 
     * @method oauthCallback
	 * @memberof downloads/callback

	* @param {string} code - 

	* @param {string} state - 
	 *
     */
     self.callback.oauthCallback = function(code, state){
		var path = '/api/v1/downloads/callback';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(code !== undefined && code !== null){
			queryParameters.code = code;
		}


		if(state !== undefined && state !== null){
			queryParameters.state = state;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	/**
     * this method will issue a redirect to the url to the content
     * @method getSecureDownload
	 * @memberof downloads

	* @param {string} downloadId - Download ID

	* @param {string} contentDisposition - 
	 *
     */
     self.getSecureDownload = function(downloadId, contentDisposition){
		var path = '/api/v1/downloads/{downloadId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{downloadId}', downloadId);

        if(downloadId === undefined && downloadId !== null){
			throw 'Missing required  parameter: downloadId';
        }


		if(contentDisposition !== undefined && contentDisposition !== null){
			queryParameters.contentDisposition = contentDisposition;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
