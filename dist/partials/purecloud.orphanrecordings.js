if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.orphanrecordings";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.orphanrecordings = (function (PureCloud) {
	/**
	* @namespace orphanrecordings
	**/

	var self = {};

	/**
     * 
     * @method getOrphanRecordings
	 * @memberof orphanrecordings

	* @param {integer} pageSize - The total page size requested

	* @param {integer} pageNumber - The page number requested

	* @param {string} sortBy - variable name requested to sort by

	* @param {array} expand - variable name requested by expand list
	 *
     */
     self.getOrphanRecordings = function(pageSize, pageNumber, sortBy, expand){
		var path = '/api/v1/orphanrecordings';
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


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	/**
     * 
     * @method getAnOrphanRecording
	 * @memberof orphanrecordings

	* @param {string} orphanId - Orphan ID

	* @param {integer} maxWaitMs - The maximum number of milliseconds to wait for completion.
	Any integer greater than or equal to 0.,

	* @param {string} formatId - The desired format (WEBM, WAV, etc.)
	WEBM,
	WAV,

	* @param {boolean} download - requesting a download format of the recording
	true,
	false,

	* @param {string} fileName - the name of the downloaded fileName
	 *
     */
     self.getAnOrphanRecording = function(orphanId, maxWaitMs, formatId, download, fileName){
		var path = '/api/v1/orphanrecordings/{orphanId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{orphanId}', orphanId);

        if(orphanId === undefined && orphanId !== null){
			throw 'Missing required  parameter: orphanId';
        }


		if(maxWaitMs !== undefined && maxWaitMs !== null){
			queryParameters.maxWaitMs = maxWaitMs;
		}


		if(formatId !== undefined && formatId !== null){
			queryParameters.formatId = formatId;
		}


		if(download !== undefined && download !== null){
			queryParameters.download = download;
		}


		if(fileName !== undefined && fileName !== null){
			queryParameters.fileName = fileName;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	/**
     * 
     * @method deleteAnOrphanRecording
	 * @memberof orphanrecordings

	* @param {string} orphanId - Orphan ID
	 *
     */
     self.deleteAnOrphanRecording = function(orphanId){
		var path = '/api/v1/orphanrecordings/{orphanId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{orphanId}', orphanId);

        if(orphanId === undefined && orphanId !== null){
			throw 'Missing required  parameter: orphanId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
