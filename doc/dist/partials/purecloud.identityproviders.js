if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.identityproviders";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.identityproviders = (function (PureCloud) {
	/**
	* @namespace identityproviders
	**/
	/**
	* @namespace identityproviders/onelogin
	**/
	/**
	* @namespace identityproviders/purecloud
	**/

	var self = {};

	/**
     * 
     * @method getIdentityProviders
	 * @memberof identityproviders
	 *
     */
     self.getIdentityProviders = function(){
		var path = '/api/v1/identityproviders';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.onelogin = self.onelogin || {};

	/**
     * 
     * @method getOneloginIdentityProvider
	 * @memberof identityproviders/onelogin
	 *
     */
     self.onelogin.getOneloginIdentityProvider = function(){
		var path = '/api/v1/identityproviders/onelogin';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.onelogin = self.onelogin || {};

	/**
     * 
     * @method updatecreateOneloginIdentityProvider
	 * @memberof identityproviders/onelogin

	* @param {} body - Provider
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": "",
   "selfUri": ""
}
	 *
     */
     self.onelogin.updatecreateOneloginIdentityProvider = function(body){
		var path = '/api/v1/identityproviders/onelogin';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.onelogin = self.onelogin || {};

	/**
     * 
     * @method deleteOneloginIdentityProvider
	 * @memberof identityproviders/onelogin
	 *
     */
     self.onelogin.deleteOneloginIdentityProvider = function(){
		var path = '/api/v1/identityproviders/onelogin';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.purecloud = self.purecloud || {};

	/**
     * 
     * @method getPurecloudIdentityProvider
	 * @memberof identityproviders/purecloud
	 *
     */
     self.purecloud.getPurecloudIdentityProvider = function(){
		var path = '/api/v1/identityproviders/purecloud';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.purecloud = self.purecloud || {};

	/**
     * 
     * @method updatecreatePurecloudIdentityProvider
	 * @memberof identityproviders/purecloud

	* @param {} body - Provider
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "selfUri": ""
}
	 *
     */
     self.purecloud.updatecreatePurecloudIdentityProvider = function(body){
		var path = '/api/v1/identityproviders/purecloud';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.purecloud = self.purecloud || {};

	/**
     * 
     * @method deletePurecloudIdentityProvider
	 * @memberof identityproviders/purecloud
	 *
     */
     self.purecloud.deletePurecloudIdentityProvider = function(){
		var path = '/api/v1/identityproviders/purecloud';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
