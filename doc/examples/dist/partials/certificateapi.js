/**
* @class
* @example
* var api = new CertificateApi(pureCloudSession);
*/
var CertificateApi = function (pureCloudSession) {
	/**
     * @summary Returns the information about an X509 PEM encoded certificate or certificate chain.
	 * @description 
	 * @memberOf CertificateApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "certificate": ""
}
	*/
	function createDetails(body){
		var apipath = '/api/v1/certificate/details';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createDetails = createDetails;

    return self;
};
