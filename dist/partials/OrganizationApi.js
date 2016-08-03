/**
* @class OrganizationApi
* @example
* var api = new purecloud.platform.OrganizationApi(pureCloudSession);
*/
function OrganizationApi(session) {
    if(!(this instanceof OrganizationApi)) {
        return new OrganizationApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('OrganizationApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get organization.
  * @memberOf OrganizationApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "thirdPartyOrgId": "",
   "thirdPartyOrgName": "",
   "thirdPartyURI": "",
   "domain": "",
   "version": 0,
   "state": "",
   "defaultSiteId": "",
   "deletable": true,
   "selfUri": ""
}
  */
OrganizationApi.prototype.getMe = function getMe(){
    var requestPath = '/api/v2/organizations/me';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};


module.exports = OrganizationApi;
