/*jshint -W069 */
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
      "locations": [],
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

/**
  * @summary Get a list of time off requests for any user
  * @memberOf WorkforceManagementApi
  * @instance
  * @param {string} muId - The muId of the management unit.
  * @param {string} userId - The userId to whom the Time Off Request applies.
  * @param {boolean} recentlyReviewed - Limit results to requests that have been reviewed within the preceding 30 days
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "timeOffRequests": [],
   "selfUri": ""
}
  */
WorkforceManagementApi.prototype.getManagementunitsMuIdUsersUserIdTimeoffrequests = function getManagementunitsMuIdUsersUserIdTimeoffrequests(muId, userId, recentlyReviewed){
    var requestPath = '/api/v2/workforcemanagement/managementunits/{muId}/users/{userId}/timeoffrequests';
    var requestQuery = {};
    var requestBody;

    if(muId === undefined || muId === null){
      throw new Error('Missing required  parameter: muId');
    }
    requestPath = requestPath.replace('{muId}', muId);
    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    requestQuery["recentlyReviewed"] = recentlyReviewed;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a time off request by id
  * @memberOf WorkforceManagementApi
  * @instance
  * @param {string} muId - The muId of the management unit.
  * @param {string} userId - The userId to whom the Time Off Request applies.
  * @param {string} timeOffRequestId - Time Off Request Id
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
      "locations": [],
      "selfUri": ""
   },
   "isFullDayRequest": true,
   "markedAsRead": true,
   "activityCodeId": "",
   "status": "",
   "partialDayStartDateTimes": [],
   "dailyDurationMinutes": 0,
   "notes": "",
   "submittedBy": {
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
      "locations": [],
      "selfUri": ""
   },
   "submittedDate": "",
   "reviewedBy": {
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
      "locations": [],
      "selfUri": ""
   },
   "reviewedDate": "",
   "modifiedBy": {
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
      "locations": [],
      "selfUri": ""
   },
   "modifiedDate": "",
   "selfUri": "",
   "fullDayManagementUnitDates": []
}
  */
WorkforceManagementApi.prototype.getManagementunitsMuIdUsersUserIdTimeoffrequestsTimeoffrequestId = function getManagementunitsMuIdUsersUserIdTimeoffrequestsTimeoffrequestId(muId, userId, timeOffRequestId){
    var requestPath = '/api/v2/workforcemanagement/managementunits/{muId}/users/{userId}/timeoffrequests/{timeOffRequestId}';
    var requestQuery = {};
    var requestBody;

    if(muId === undefined || muId === null){
      throw new Error('Missing required  parameter: muId');
    }
    requestPath = requestPath.replace('{muId}', muId);
    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(timeOffRequestId === undefined || timeOffRequestId === null){
      throw new Error('Missing required  parameter: timeOffRequestId');
    }
    requestPath = requestPath.replace('{timeOffRequestId}', timeOffRequestId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list of time off requests for the current user
  * @memberOf WorkforceManagementApi
  * @instance
  * @param {boolean} recentlyReviewed - Limit results to requests that have been reviewed within the preceding 30 days
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "timeOffRequests": [],
   "selfUri": ""
}
  */
WorkforceManagementApi.prototype.getTimeoffrequests = function getTimeoffrequests(recentlyReviewed){
    var requestPath = '/api/v2/workforcemanagement/timeoffrequests';
    var requestQuery = {};
    var requestBody;

    requestQuery["recentlyReviewed"] = recentlyReviewed;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a time off request for the current user by id
  * @memberOf WorkforceManagementApi
  * @instance
  * @param {string} timeOffRequestId - Time Off Request Id
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
      "locations": [],
      "selfUri": ""
   },
   "isFullDayRequest": true,
   "markedAsRead": true,
   "activityCodeId": "",
   "status": "",
   "partialDayStartDateTimes": [],
   "dailyDurationMinutes": 0,
   "notes": "",
   "submittedBy": {
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
      "locations": [],
      "selfUri": ""
   },
   "submittedDate": "",
   "reviewedBy": {
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
      "locations": [],
      "selfUri": ""
   },
   "reviewedDate": "",
   "modifiedBy": {
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
      "locations": [],
      "selfUri": ""
   },
   "modifiedDate": "",
   "selfUri": "",
   "fullDayManagementUnitDates": []
}
  */
WorkforceManagementApi.prototype.getTimeoffrequestsTimeoffrequestId = function getTimeoffrequestsTimeoffrequestId(timeOffRequestId){
    var requestPath = '/api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId}';
    var requestQuery = {};
    var requestBody;

    if(timeOffRequestId === undefined || timeOffRequestId === null){
      throw new Error('Missing required  parameter: timeOffRequestId');
    }
    requestPath = requestPath.replace('{timeOffRequestId}', timeOffRequestId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Mark a time off request for the current user as read or unread
  * @memberOf WorkforceManagementApi
  * @instance
  * @param {string} timeOffRequestId - Time Off Request Id
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "markedAsRead": true
}
  */
WorkforceManagementApi.prototype.patchTimeoffrequestsTimeoffrequestId = function patchTimeoffrequestsTimeoffrequestId(timeOffRequestId, body){
    var requestPath = '/api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId}';
    var requestQuery = {};
    var requestBody;

    if(timeOffRequestId === undefined || timeOffRequestId === null){
      throw new Error('Missing required  parameter: timeOffRequestId');
    }
    requestPath = requestPath.replace('{timeOffRequestId}', timeOffRequestId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};


module.exports = WorkforceManagementApi;
