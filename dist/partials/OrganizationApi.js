/**
* @class
* @example
* var api = new OrganizationApi(pureCloudSession);
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
  * @memberOf OrganizationApi#
  */
OrganizationApi.prototype.getMe = function getMe(){
    var requestPath = '/api/v2/organizations/me';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};


module.exports = OrganizationApi;
