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
      "manager": {},
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

/**
  * @summary Create a forecast
  * @memberOf WorkforceManagementApi
  * @instance
  * @param {} body - The request body
  * @example
  * Body Example:
  * {
   "numberOfPeriods": 0,
   "periodFrequency": "",
   "description": "",
   "metrics": [],
   "managementUnitId": "",
   "copiedForecastId": ""
}
  * @example
  * 200 Response Example:
  * {
   "notificationId": "",
   "id": "",
   "status": ""
}
  */
WorkforceManagementApi.prototype.postLongtermforecasts = function postLongtermforecasts(body){
    var requestPath = '/api/v2/workforcemanagement/longtermforecasts';
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


module.exports = WorkforceManagementApi;
