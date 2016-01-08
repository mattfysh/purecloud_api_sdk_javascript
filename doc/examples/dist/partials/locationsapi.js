/**
* @class
* @example
* var api = new LocationsApi(pureCloudSession);
*/
var LocationsApi = function (pureCloudSession) {
	/**
     * Get the list of locations.
	 * @memberOf LocationsApi#
	* @param {string} state - Location state
	ACTIVE,
	DELETED,
	* @param {string} name - Location name
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function get(state, name, pageSize, pageNumber){
		var apipath = '/api/v1/locations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(state !== undefined && state !== null){
			queryParameters.state = state;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.get = get;
	/**
     * Get Location by ID.
	 * @memberOf LocationsApi#
	* @param {string} locationId - Location ID
	*/
	function getLocation(locationId){
		var apipath = '/api/v1/locations/{locationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{locationId}', locationId);

        if(locationId === undefined && locationId !== null){
			throw 'Missing required  parameter: locationId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getLocation = getLocation;

    return self;
};
