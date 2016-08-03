/**
* @class SearchApi
* @example
* var api = new purecloud.platform.SearchApi(pureCloudSession);
*/
function SearchApi(session) {
    if(!(this instanceof SearchApi)) {
        return new SearchApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('SearchApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Search using q64
  * @memberOf SearchApi
  * @instance
  * @param {string} q64 - 
  * @param {array} expand - 
  * @example
  * 200 Response Example:
  * {
   "total": 0,
   "pageCount": 0,
   "pageSize": 0,
   "pageNumber": 0,
   "previousPage": "",
   "currentPage": "",
   "nextPage": "",
   "types": [],
   "results": [],
   "aggregations": []
}
  */
SearchApi.prototype.getSearch = function getSearch(q64, expand){
    var requestPath = '/api/v2/groups/search';
    var requestQuery = {};
    var requestBody;

    if(q64 === undefined || q64 === null){
      throw new Error('Missing required  parameter: q64');
    }
    requestQuery["q64"] = q64;
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search
  * @memberOf SearchApi
  * @instance
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
  * @example
  * 200 Response Example:
  * {
   "total": 0,
   "pageCount": 0,
   "pageSize": 0,
   "pageNumber": 0,
   "previousPage": "",
   "currentPage": "",
   "nextPage": "",
   "types": [],
   "results": [],
   "aggregations": []
}
  */
SearchApi.prototype.postSearch = function postSearch(body){
    var requestPath = '/api/v2/groups/search';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search using q64
  * @memberOf SearchApi
  * @instance
  * @param {string} q64 - 
  * @param {array} expand - 
  * @example
  * 200 Response Example:
  * {
   "total": 0,
   "pageCount": 0,
   "pageSize": 0,
   "pageNumber": 0,
   "previousPage": "",
   "currentPage": "",
   "nextPage": "",
   "types": [],
   "results": [],
   "aggregations": []
}
  */
SearchApi.prototype.getSearch = function getSearch(q64, expand){
    var requestPath = '/api/v2/locations/search';
    var requestQuery = {};
    var requestBody;

    if(q64 === undefined || q64 === null){
      throw new Error('Missing required  parameter: q64');
    }
    requestQuery["q64"] = q64;
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search
  * @memberOf SearchApi
  * @instance
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
  * @example
  * 200 Response Example:
  * {
   "total": 0,
   "pageCount": 0,
   "pageSize": 0,
   "pageNumber": 0,
   "previousPage": "",
   "currentPage": "",
   "nextPage": "",
   "types": [],
   "results": [],
   "aggregations": []
}
  */
SearchApi.prototype.postSearch = function postSearch(body){
    var requestPath = '/api/v2/locations/search';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search using q64
  * @memberOf SearchApi
  * @instance
  * @param {string} q64 - 
  * @param {array} expand - 
  * @param {boolean} profile - 
  * @example
  * 200 Response Example:
  * {
   "total": 0,
   "pageCount": 0,
   "pageSize": 0,
   "pageNumber": 0,
   "previousPage": "",
   "currentPage": "",
   "nextPage": "",
   "types": [],
   "results": {
      "nodeType": "",
      "float": true,
      "boolean": true,
      "number": true,
      "object": true,
      "missingNode": true,
      "valueNode": true,
      "containerNode": true,
      "pojo": true,
      "integralNumber": true,
      "floatingPointNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "binary": true,
      "array": true,
      "null": true
   },
   "aggregations": {
      "nodeType": "",
      "float": true,
      "boolean": true,
      "number": true,
      "object": true,
      "missingNode": true,
      "valueNode": true,
      "containerNode": true,
      "pojo": true,
      "integralNumber": true,
      "floatingPointNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "binary": true,
      "array": true,
      "null": true
   }
}
  */
SearchApi.prototype.getSearch = function getSearch(q64, expand, profile){
    var requestPath = '/api/v2/search';
    var requestQuery = {};
    var requestBody;

    if(q64 === undefined || q64 === null){
      throw new Error('Missing required  parameter: q64');
    }
    requestQuery["q64"] = q64;
    requestQuery["expand"] = expand;
    requestQuery["profile"] = profile;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search
  * @memberOf SearchApi
  * @instance
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
  * @example
  * 200 Response Example:
  * {
   "total": 0,
   "pageCount": 0,
   "pageSize": 0,
   "pageNumber": 0,
   "previousPage": "",
   "currentPage": "",
   "nextPage": "",
   "types": [],
   "results": {
      "nodeType": "",
      "float": true,
      "boolean": true,
      "number": true,
      "object": true,
      "missingNode": true,
      "valueNode": true,
      "containerNode": true,
      "pojo": true,
      "integralNumber": true,
      "floatingPointNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "binary": true,
      "array": true,
      "null": true
   },
   "aggregations": {
      "nodeType": "",
      "float": true,
      "boolean": true,
      "number": true,
      "object": true,
      "missingNode": true,
      "valueNode": true,
      "containerNode": true,
      "pojo": true,
      "integralNumber": true,
      "floatingPointNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "binary": true,
      "array": true,
      "null": true
   }
}
  */
SearchApi.prototype.postSearch = function postSearch(body, profile){
    var requestPath = '/api/v2/search';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery["profile"] = profile;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Suggest using q64
  * @memberOf SearchApi
  * @instance
  * @param {string} q64 - 
  * @param {boolean} profile - 
  * @example
  * 200 Response Example:
  * {
   "total": 0,
   "pageCount": 0,
   "pageSize": 0,
   "pageNumber": 0,
   "previousPage": "",
   "currentPage": "",
   "nextPage": "",
   "types": [],
   "results": {
      "nodeType": "",
      "float": true,
      "boolean": true,
      "number": true,
      "object": true,
      "missingNode": true,
      "valueNode": true,
      "containerNode": true,
      "pojo": true,
      "integralNumber": true,
      "floatingPointNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "binary": true,
      "array": true,
      "null": true
   },
   "aggregations": {
      "nodeType": "",
      "float": true,
      "boolean": true,
      "number": true,
      "object": true,
      "missingNode": true,
      "valueNode": true,
      "containerNode": true,
      "pojo": true,
      "integralNumber": true,
      "floatingPointNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "binary": true,
      "array": true,
      "null": true
   }
}
  */
SearchApi.prototype.getSuggest = function getSuggest(q64, profile){
    var requestPath = '/api/v2/search/suggest';
    var requestQuery = {};
    var requestBody;

    if(q64 === undefined || q64 === null){
      throw new Error('Missing required  parameter: q64');
    }
    requestQuery["q64"] = q64;
    requestQuery["profile"] = profile;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Suggest
  * @memberOf SearchApi
  * @instance
  * @param {} body - Search request options
  * @param {boolean} profile - 
  * @example
  * Body Example:
  * {
   "types": [],
   "query": []
}
  * @example
  * 200 Response Example:
  * {
   "total": 0,
   "pageCount": 0,
   "pageSize": 0,
   "pageNumber": 0,
   "previousPage": "",
   "currentPage": "",
   "nextPage": "",
   "types": [],
   "results": {
      "nodeType": "",
      "float": true,
      "boolean": true,
      "number": true,
      "object": true,
      "missingNode": true,
      "valueNode": true,
      "containerNode": true,
      "pojo": true,
      "integralNumber": true,
      "floatingPointNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "binary": true,
      "array": true,
      "null": true
   },
   "aggregations": {
      "nodeType": "",
      "float": true,
      "boolean": true,
      "number": true,
      "object": true,
      "missingNode": true,
      "valueNode": true,
      "containerNode": true,
      "pojo": true,
      "integralNumber": true,
      "floatingPointNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "binary": true,
      "array": true,
      "null": true
   }
}
  */
SearchApi.prototype.postSuggest = function postSuggest(body, profile){
    var requestPath = '/api/v2/search/suggest';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery["profile"] = profile;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search using q64
  * @memberOf SearchApi
  * @instance
  * @param {string} q64 - 
  * @param {array} expand - 
  * @example
  * 200 Response Example:
  * {
   "total": 0,
   "pageCount": 0,
   "pageSize": 0,
   "pageNumber": 0,
   "previousPage": "",
   "currentPage": "",
   "nextPage": "",
   "types": [],
   "results": [],
   "aggregations": []
}
  */
SearchApi.prototype.getSearch = function getSearch(q64, expand){
    var requestPath = '/api/v2/users/search';
    var requestQuery = {};
    var requestBody;

    if(q64 === undefined || q64 === null){
      throw new Error('Missing required  parameter: q64');
    }
    requestQuery["q64"] = q64;
    requestQuery["expand"] = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search
  * @memberOf SearchApi
  * @instance
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
  * @example
  * 200 Response Example:
  * {
   "total": 0,
   "pageCount": 0,
   "pageSize": 0,
   "pageNumber": 0,
   "previousPage": "",
   "currentPage": "",
   "nextPage": "",
   "types": [],
   "results": [],
   "aggregations": []
}
  */
SearchApi.prototype.postSearch = function postSearch(body){
    var requestPath = '/api/v2/users/search';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};


module.exports = SearchApi;
