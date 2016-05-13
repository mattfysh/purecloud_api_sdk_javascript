//API VERSION - 
/**
* @class
* @example
* var api = new StationsApi(pureCloudSession);
*/
var StationsApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Get the list of available stations.
	 * @memberOf StationsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	* @param {string} name - Name
	* @param {string} lineAppearanceId - lineAppearanceId
	*/
	function getStations(pageSize, pageNumber, sortBy, name, lineAppearanceId){
		var apipath = '/api/v2/stations';
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


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(lineAppearanceId !== undefined && lineAppearanceId !== null){
			queryParameters.lineAppearanceId = lineAppearanceId;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getStations = getStations;
	/**
     * @summary Get station.
	 * @memberOf StationsApi#
	* @param {string} stationId - Station ID
	*/
	function getStationId(stationId){
		var apipath = '/api/v2/stations/{stationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{stationId}', stationId);

        if(stationId === undefined && stationId !== null){
			throw 'Missing required  parameter: stationId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getStationId = getStationId;
	/**
     * @summary Unassigns the user assigned to this station
	 * @memberOf StationsApi#
	* @param {string} stationId - Station ID
	*/
	function deleteStationIdAssociateduser(stationId){
		var apipath = '/api/v2/stations/{stationId}/associateduser';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{stationId}', stationId);

        if(stationId === undefined && stationId !== null){
			throw 'Missing required  parameter: stationId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteStationIdAssociateduser = deleteStationIdAssociateduser;

    return self;
};
