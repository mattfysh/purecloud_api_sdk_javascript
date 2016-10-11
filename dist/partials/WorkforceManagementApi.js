/**
* @class WorkforceManagementApi
* @example
* var api = new purecloud.platform.WorkforceManagementApi(pureCloudSession);
*/
function WorkforceManagementApi(session) {
    if(!(this instanceof WorkforceManagementApi)) {
        return new WorkforceManagementApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('WorkforceManagementApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get a list of UserScheduleAdherence records for the requested users
  * @memberOf WorkforceManagementApi
  * @instance
  * @param {array} userId - User Id(s) for which to fetch current schedule adherence information.  Max of 100 userIds per request
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "user": {
      "id": "",
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "primaryContactInfo": [],
      "addresses": [],
      "state": "",
      "title": "",
      "username": "",
      "images": [],
      "version": 0,
      "routingStatus": {},
      "presence": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "geolocation": {},
      "station": {},
      "authorization": {},
      "profileSkills": [],
      "selfUri": ""
   },
   "managementUnit": {
      "id": "",
      "name": "",
      "startDayOfWeek": "",
      "timezone": "",
      "version": 0,
      "selfUri": ""
   },
   "scheduledActivityCategory": "",
   "systemPresence": "",
   "organizationSecondaryPresenceId": "",
   "routingStatus": "",
   "actualActivityCategory": "",
   "isOutOfOffice": true,
   "adherenceState": "",
   "impact": "",
   "timeOfAdherenceChange": "",
   "selfUri": ""
}
  */
WorkforceManagementApi.prototype.getAdherence = function getAdherence(userId){
    var requestPath = '/api/v2/workforcemanagement/adherence';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestQuery["userId"] = userId;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};


module.exports = WorkforceManagementApi;
