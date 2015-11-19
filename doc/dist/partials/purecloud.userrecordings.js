if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.userrecordings";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.userrecordings = (function (PureCloud) {
	/**
	* @namespace userrecordings
	**/
	/**
	* @namespace userrecordings/summary
	**/
	/**
	* @namespace userrecordings/media
	**/

	var self = {};

	/**
     * 
     * @method listUserRecordings
	 * @memberof userrecordings

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number

	* @param {string} expand - conversation
	 *
     */
     self.listUserRecordings = function(pageSize, pageNumber, expand){
		var path = '/api/v1/userrecordings';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.summary = self.summary || {};

	/**
     * 
     * @method getUserRecordingSummary
	 * @memberof userrecordings/summary
	 *
     */
     self.summary.getUserRecordingSummary = function(){
		var path = '/api/v1/userrecordings/summary';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	/**
     * 
     * @method getUserRecording
	 * @memberof userrecordings

	* @param {string} recordingId - User Recording ID

	* @param {string} expand - conversation
	 *
     */
     self.getUserRecording = function(recordingId, expand){
		var path = '/api/v1/userrecordings/{recordingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	/**
     * 
     * @method updateUserRecording
	 * @memberof userrecordings

	* @param {string} recordingId - User Recording ID

	* @param {} body - UserRecording

	* @param {string} expand - conversation
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "contentUri": "",
   "workspace": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "createdBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "conversation": {
      "id": "",
      "name": "",
      "startTime": "",
      "endTime": "",
      "participants": [],
      "conversationIds": [],
      "maxParticipants": 0,
      "recordingState": "",
      "selfUri": ""
   },
   "contentLength": 0,
   "durationMilliseconds": 0,
   "thumbnails": [],
   "read": true,
   "selfUri": ""
}
	 *
     */
     self.updateUserRecording = function(recordingId, body, expand){
		var path = '/api/v1/userrecordings/{recordingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };

	/**
     * 
     * @method deleteUserRecording
	 * @memberof userrecordings

	* @param {string} recordingId - User Recording ID
	 *
     */
     self.deleteUserRecording = function(recordingId){
		var path = '/api/v1/userrecordings/{recordingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.media = self.media || {};

	/**
     * 
     * @method downloadUserRecording
	 * @memberof userrecordings/media

	* @param {string} recordingId - User Recording ID

	* @param {string} formatId - The desired format (WEBM, WAV, etc.)
	WEBM,
	WAV,
	 *
     */
     self.media.downloadUserRecording = function(recordingId, formatId){
		var path = '/api/v1/userrecordings/{recordingId}/media';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }


		if(formatId !== undefined && formatId !== null){
			queryParameters.formatId = formatId;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
