//API VERSION - 
/**
* @class
* @example
* var api = new FaxesApi(pureCloudSession);
*/
var FaxesApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Create Fax Conversation
	 * @memberOf FaxesApi#
	* @param {} body - Fax
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "addresses": [],
   "originalFilename": "",
   "contentType": "",
   "workspace": {
      "name": "",
      "type": "",
      "isCurrentUserWorkspace": true,
      "user": {},
      "bucket": "",
      "dateCreated": "",
      "dateModified": "",
      "summary": {},
      "acl": []
   },
   "coverSheet": {
      "notes": "",
      "locale": ""
   }
}
	*/
	function postFaxes(body){
		var apipath = '/api/v2/conversations/faxes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postFaxes = postFaxes;

    return self;
};
