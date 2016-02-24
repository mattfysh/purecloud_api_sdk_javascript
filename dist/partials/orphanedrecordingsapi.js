/**
* @class
* @example
* var api = new OrphanedRecordingsApi(pureCloudSession);
*/
var OrphanedRecordingsApi = function (pureCloudSession) {
	/**
     * @summary Gets all orphan recordings
	 * @memberOf OrphanedRecordingsApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	*/
	function getOrphanrecordings(pageSize, pageNumber, sortBy, expand){
		var apipath = '/api/v1/orphanrecordings';
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


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOrphanrecordings = getOrphanrecordings;
	/**
     * @summary Gets a single orphan recording
	 * @memberOf OrphanedRecordingsApi#
	* @param {string} orphanId - Orphan ID
	*/
	function getOrphanrecording(orphanId){
		var apipath = '/api/v1/orphanrecordings/{orphanId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{orphanId}', orphanId);

        if(orphanId === undefined && orphanId !== null){
			throw 'Missing required  parameter: orphanId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOrphanrecording = getOrphanrecording;
	/**
     * @summary  deletes a single orphan recording
	 * @memberOf OrphanedRecordingsApi#
	* @param {string} orphanId - Orphan ID
	*/
	function deleteOrphanrecording(orphanId){
		var apipath = '/api/v1/orphanrecordings/{orphanId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{orphanId}', orphanId);

        if(orphanId === undefined && orphanId !== null){
			throw 'Missing required  parameter: orphanId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteOrphanrecording = deleteOrphanrecording;

    return self;
};
