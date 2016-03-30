//API VERSION - 
/**
* @class
* @example
* var api = new IntegrationsApi(pureCloudSession);
*/
var IntegrationsApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary List integration types
	 * @memberOf IntegrationsApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	*/
	function getTypes(pageSize, pageNumber, sortBy, expand){
		var apipath = '/api/v2/integrations/types';
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
	self.getTypes = getTypes;
	/**
     * @summary Get integration type.
	 * @memberOf IntegrationsApi#
	* @param {string} id - Integration Type Id
	*/
	function getTypesId(id){
		var apipath = '/api/v2/integrations/types/{id}';
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
	self.getTypesId = getTypesId;

    return self;
};
