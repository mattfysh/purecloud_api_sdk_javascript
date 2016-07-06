/**
* @class
* @example
* var api = new SuggestApi(pureCloudSession);
*/
function SuggestApi(session) {
    if(!(this instanceof SuggestApi)) {
        return new SuggestApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('SuggestApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Search using q64
  * @memberOf SuggestApi#
  * @param {string} q64 - 
  * @param {array} expand - 
  * @param {boolean} profile - 
  */
SuggestApi.prototype.getSearch = function getSearch(q64, expand, profile){
    var requestPath = '/api/v2/search';
    var requestQuery = {};
    var requestBody;

    if(q64 === undefined || q64 === null){
      throw new Error('Missing required  parameter: q64');
    }
    requestQuery.q64 = q64;
    requestQuery.expand = expand;
    requestQuery.profile = profile;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search
  * @memberOf SuggestApi#
  * @param {} body - Search request options
  * @param {boolean} profile - 
  * @example
  * Body Example:
  * {
   "sortOrder": "",
   "sortBy": "",
   "pageSize": 0,
   "pageNumber": 0,
   "returnFields": [],
   "expand": [],
   "types": [],
   "query": [],
   "aggregations": []
}
  */
SuggestApi.prototype.postSearch = function postSearch(body, profile){
    var requestPath = '/api/v2/search';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery.profile = profile;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Suggest using q64
  * @memberOf SuggestApi#
  * @param {string} q64 - 
  * @param {boolean} profile - 
  */
SuggestApi.prototype.getSuggest = function getSuggest(q64, profile){
    var requestPath = '/api/v2/search/suggest';
    var requestQuery = {};
    var requestBody;

    if(q64 === undefined || q64 === null){
      throw new Error('Missing required  parameter: q64');
    }
    requestQuery.q64 = q64;
    requestQuery.profile = profile;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Suggest
  * @memberOf SuggestApi#
  * @param {} body - Search request options
  * @param {boolean} profile - 
  * @example
  * Body Example:
  * {
   "types": [],
   "query": []
}
  */
SuggestApi.prototype.postSuggest = function postSuggest(body, profile){
    var requestPath = '/api/v2/search/suggest';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery.profile = profile;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};


module.exports = SuggestApi;
