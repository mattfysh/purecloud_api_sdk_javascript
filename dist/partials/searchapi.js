/**
* @class
* @example
* var api = new SearchApi(pureCloudSession);
*/
var SearchApi = function (pureCloudSession) {
	/**
     * @summary Search chat history
	 * @memberOf SearchApi#
	* @param {} body - Search request options
	 * @example
	 * Body Example:
	 * {
   "query": "",
   "order": "",
   "targetJids": [],
   "pageSize": 0,
   "pageNumber": 0,
   "fromDate": "",
   "toDate": "",
   "expand": ""
}
	*/
	function postChats(body){
		var apipath = '/api/v1/search/chats';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postChats = postChats;

    return self;
};
