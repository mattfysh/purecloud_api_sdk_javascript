if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.stations";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.stations = (function (PureCloud) {
	/**
	* @namespace stations
	**/
	/**
	* @namespace stations/associateduser
	**/

	var self = {};

	/**
     * 
     * @method getStations
	 * @memberof stations

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number

	* @param {string} sortBy - Sort by

	* @param {string} name - Name
	 *
     */
     self.getStations = function(pageSize, pageNumber, sortBy, name){
		var path = '/api/v1/stations';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	/**
     * 
     * @method getStation
	 * @memberof stations

	* @param {string} id - Station ID
	 *
     */
     self.getStation = function(id){
		var path = '/api/v1/stations/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.associateduser = self.associateduser || {};

	/**
     * 
     * @method unassignUserFromStation
	 * @memberof stations/associateduser

	* @param {string} id - Station ID
	 *
     */
     self.associateduser.unassignUserFromStation = function(id){
		var path = '/api/v1/stations/{id}/associateduser';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
