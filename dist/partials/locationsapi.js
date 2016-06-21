/**
* @class
* @example
* var api = new LocationsApi(pureCloudSession);
*/
function LocationsApi(session) {
    if(!(this instanceof LocationsApi)) {
        return new LocationsApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('LocationsApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get a list of all locations.
  * @memberOf LocationsApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortOrder - Sort order
  asc,
  desc,
  */
LocationsApi.prototype.getLocations = function getLocations(pageSize, pageNumber, sortOrder){
    var requestPath = '/api/v2/locations';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortOrder = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search using q64
  * @memberOf LocationsApi#
  * @param {string} q64 - 
  * @param {array} expand - 
  */
LocationsApi.prototype.getSearch = function getSearch(q64, expand){
    var requestPath = '/api/v2/locations/search';
    var requestQuery = {};
    var requestBody;

    requestQuery.q64 = q64;
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search
  * @memberOf LocationsApi#
  * @param {} body - Search request options
  * @example
  * Body Example:
  * {
   "sortOrder": "",
   "sortBy": "",
   "pageSize": 0,
   "pageNumber": 0,
   "returnFields": [],
   "expand": [],
   "query": []
}
  */
LocationsApi.prototype.postSearch = function postSearch(body){
    var requestPath = '/api/v2/locations/search';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get Location by ID.
  * @memberOf LocationsApi#
  * @param {string} locationId - Location ID
  */
LocationsApi.prototype.getLocationId = function getLocationId(locationId){
    var requestPath = '/api/v2/locations/{locationId}';
    var requestQuery = {};
    var requestBody;

    if(locationId === undefined || locationId === null){
      throw new Error('Missing required  parameter: locationId');
    }
    requestPath = requestPath.replace('{locationId}', locationId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};


