if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.greetings";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.greetings = (function (PureCloud) {
	/**
	* @namespace greetings
	**/
	/**
	* @namespace greetings/defaults
	**/
	/**
	* @namespace greetings/media
	**/

	var self = {};

	/**
     * 
     * @method getOrganizationGreetings
	 * @memberof greetings

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number
	 *
     */
     self.getOrganizationGreetings = function(pageSize, pageNumber){
		var path = '/api/v1/greetings';
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

	/**
     * 
     * @method createOrganizationGreeting
	 * @memberof greetings

	* @param {} body - The Greeting to create
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "type": "",
   "ownerType": "",
   "owner": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "audioFile": {
      "durationMilliseconds": 0,
      "sizeBytes": 0,
      "selfUri": ""
   },
   "audioTTS": "",
   "createdDate": "",
   "createdBy": "",
   "modifiedDate": "",
   "modifiedBy": "",
   "selfUri": ""
}
	 *
     */
     self.createOrganizationGreeting = function(body){
		var path = '/api/v1/greetings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.defaults = self.defaults || {};

	/**
     * 
     * @method getOrganizationDefaultgreetingslist
	 * @memberof greetings/defaults
	 *
     */
     self.defaults.getOrganizationDefaultgreetingslist = function(){
		var path = '/api/v1/greetings/defaults';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.defaults = self.defaults || {};

	/**
     * 
     * @method updateOrganizationDefaultgreetingslist
	 * @memberof greetings/defaults

	* @param {} body - The updated defaultGreetingList
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "owner": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "ownerType": "",
   "greetings": {},
   "createdDate": "",
   "createdBy": "",
   "modifiedDate": "",
   "modifiedBy": "",
   "selfUri": ""
}
	 *
     */
     self.defaults.updateOrganizationDefaultgreetingslist = function(body){
		var path = '/api/v1/greetings/defaults';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };

	/**
     * 
     * @method getGreeting
	 * @memberof greetings

	* @param {string} greetingId - Greeting ID
	 *
     */
     self.getGreeting = function(greetingId){
		var path = '/api/v1/greetings/{greetingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{greetingId}', greetingId);

        if(greetingId === undefined && greetingId !== null){
			throw 'Missing required  parameter: greetingId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	/**
     * 
     * @method updateGreeting
	 * @memberof greetings

	* @param {string} greetingId - Greeting ID

	* @param {} body - The updated Greeting
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "type": "",
   "ownerType": "",
   "owner": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "audioFile": {
      "durationMilliseconds": 0,
      "sizeBytes": 0,
      "selfUri": ""
   },
   "audioTTS": "",
   "createdDate": "",
   "createdBy": "",
   "modifiedDate": "",
   "modifiedBy": "",
   "selfUri": ""
}
	 *
     */
     self.updateGreeting = function(greetingId, body){
		var path = '/api/v1/greetings/{greetingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{greetingId}', greetingId);

        if(greetingId === undefined && greetingId !== null){
			throw 'Missing required  parameter: greetingId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };

	/**
     * 
     * @method deleteGreeting
	 * @memberof greetings

	* @param {string} greetingId - Greeting ID
	 *
     */
     self.deleteGreeting = function(greetingId){
		var path = '/api/v1/greetings/{greetingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{greetingId}', greetingId);

        if(greetingId === undefined && greetingId !== null){
			throw 'Missing required  parameter: greetingId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.media = self.media || {};

	/**
     * 
     * @method getMedia
	 * @memberof greetings/media

	* @param {string} greetingId - Greeting ID

	* @param {string} formatId - The desired format (WAV, etc.)
	WAV,
	 *
     */
     self.media.getMedia = function(greetingId, formatId){
		var path = '/api/v1/greetings/{greetingId}/media';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{greetingId}', greetingId);

        if(greetingId === undefined && greetingId !== null){
			throw 'Missing required  parameter: greetingId';
        }


		if(formatId !== undefined && formatId !== null){
			queryParameters.formatId = formatId;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
