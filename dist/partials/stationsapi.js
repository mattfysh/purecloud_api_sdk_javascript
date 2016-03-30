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
	*/
	function getStations(pageSize, pageNumber, sortBy, name){
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


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getStations = getStations;
	/**
     * @summary Get station.
	 * @memberOf StationsApi#
	* @param {string} id - Station ID
	*/
	function getId(id){
		var apipath = '/api/v2/stations/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getId = getId;
	/**
     * @summary Unassigns the user assigned to this station
	 * @memberOf StationsApi#
	* @param {string} id - Station ID
	*/
	function deleteIdAssociateduser(id){
		var apipath = '/api/v2/stations/{id}/associateduser';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteIdAssociateduser = deleteIdAssociateduser;

    return self;
};
