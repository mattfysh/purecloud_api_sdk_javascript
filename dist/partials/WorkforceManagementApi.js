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
   "managementUnitId": ""
}
  * @example
  * 200 Response Example:
  * {
   "forecastId": "",
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
  * @summary Search forecasts
  * @memberOf WorkforceManagementApi
  * @instance
  * @param {} body - 
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
   "query": []
}
  * @example
  * 200 Response Example:
  * {
   "entities": [],
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "selfUri": "",
   "firstUri": "",
   "lastUri": "",
   "previousUri": "",
   "nextUri": "",
   "pageCount": 0
}
  */
WorkforceManagementApi.prototype.postLongtermforecastsSearch = function postLongtermforecastsSearch(body){
    var requestPath = '/api/v2/workforcemanagement/longtermforecasts/search';
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
  * @summary Get forecast
  * @memberOf WorkforceManagementApi
  * @instance
  * @param {string} forecastId - The forecast id
  * @example
  * 200 Response Example:
  * {
   "metadata": {
      "id": "",
      "name": "",
      "numberOfPeriods": 0,
      "periodFrequency": "",
      "description": "",
      "metrics": [],
      "lastModifiedDate": "",
      "lastModifiedBy": {},
      "status": "",
      "selfUri": ""
   },
   "startDate": "",
   "forecastEntries": [],
   "errorMessage": ""
}
  */
WorkforceManagementApi.prototype.getLongtermforecastsForecastId = function getLongtermforecastsForecastId(forecastId){
    var requestPath = '/api/v2/workforcemanagement/longtermforecasts/{forecastId}';
    var requestQuery = {};
    var requestBody;

    if(forecastId === undefined || forecastId === null){
      throw new Error('Missing required  parameter: forecastId');
    }
    requestPath = requestPath.replace('{forecastId}', forecastId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a forecast
  * @memberOf WorkforceManagementApi
  * @instance
  * @param {string} forecastId - The forecast id
  */
WorkforceManagementApi.prototype.deleteLongtermforecastsForecastId = function deleteLongtermforecastsForecastId(forecastId){
    var requestPath = '/api/v2/workforcemanagement/longtermforecasts/{forecastId}';
    var requestQuery = {};
    var requestBody;

    if(forecastId === undefined || forecastId === null){
      throw new Error('Missing required  parameter: forecastId');
    }
    requestPath = requestPath.replace('{forecastId}', forecastId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get forecast Modifications
  * @memberOf WorkforceManagementApi
  * @instance
  * @param {string} forecastId - The forecast id
  * @example
  * 200 Response Example:
  * [
 {
  "id": "",
  "name": "",
  "forecastId": "",
  "priority": 0,
  "metric": "",
  "modificationType": "",
  "modificationValue": {},
  "startDate": "",
  "endDate": "",
  "attributes": {
   "languages": [],
   "queueIds": [],
   "mediaTypes": []
  },
  "enabled": true,
  "lastModifiedDate": "",
  "lastModifiedBy": {
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
  "notes": "",
  "selfUri": ""
 }
]
  */
WorkforceManagementApi.prototype.getLongtermforecastsForecastIdModifications = function getLongtermforecastsForecastIdModifications(forecastId){
    var requestPath = '/api/v2/workforcemanagement/longtermforecasts/{forecastId}/modifications';
    var requestQuery = {};
    var requestBody;

    if(forecastId === undefined || forecastId === null){
      throw new Error('Missing required  parameter: forecastId');
    }
    requestPath = requestPath.replace('{forecastId}', forecastId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a forecast modification
  * @memberOf WorkforceManagementApi
  * @instance
  * @param {string} forecastId - The forecast id
  * @param {} body - The request body
  * @example
  * Body Example:
  * {
   "name": "",
   "forecastId": "",
   "priority": 0,
   "metric": "",
   "modificationType": "",
   "modificationValue": {},
   "startDate": "",
   "endDate": "",
   "attributes": {
      "languages": [],
      "queueIds": [],
      "mediaTypes": []
   },
   "enabled": true,
   "notes": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "forecastId": "",
   "priority": 0,
   "metric": "",
   "modificationType": "",
   "modificationValue": {},
   "startDate": "",
   "endDate": "",
   "attributes": {
      "languages": [],
      "queueIds": [],
      "mediaTypes": []
   },
   "enabled": true,
   "notes": "",
   "selfUri": ""
}
  */
WorkforceManagementApi.prototype.postLongtermforecastsForecastIdModifications = function postLongtermforecastsForecastIdModifications(forecastId, body){
    var requestPath = '/api/v2/workforcemanagement/longtermforecasts/{forecastId}/modifications';
    var requestQuery = {};
    var requestBody;

    if(forecastId === undefined || forecastId === null){
      throw new Error('Missing required  parameter: forecastId');
    }
    requestPath = requestPath.replace('{forecastId}', forecastId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a forecast modification
  * @memberOf WorkforceManagementApi
  * @instance
  * @param {string} forecastId - The forecast id
  * @param {} body - The request body
  * @example
  * Body Example:
  * {
   "name": "",
   "forecastId": "",
   "priority": 0,
   "metric": "",
   "modificationType": "",
   "modificationValue": {},
   "startDate": "",
   "endDate": "",
   "attributes": {
      "languages": [],
      "queueIds": [],
      "mediaTypes": []
   },
   "enabled": true,
   "lastModifiedDate": "",
   "lastModifiedBy": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": [],
      "version": 0
   },
   "notes": ""
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "forecastId": "",
   "priority": 0,
   "metric": "",
   "modificationType": "",
   "modificationValue": {},
   "startDate": "",
   "endDate": "",
   "attributes": {
      "languages": [],
      "queueIds": [],
      "mediaTypes": []
   },
   "enabled": true,
   "lastModifiedDate": "",
   "lastModifiedBy": {
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
   "notes": "",
   "selfUri": ""
}
  */
WorkforceManagementApi.prototype.putLongtermforecastsForecastIdModifications = function putLongtermforecastsForecastIdModifications(forecastId, body){
    var requestPath = '/api/v2/workforcemanagement/longtermforecasts/{forecastId}/modifications';
    var requestQuery = {};
    var requestBody;

    if(forecastId === undefined || forecastId === null){
      throw new Error('Missing required  parameter: forecastId');
    }
    requestPath = requestPath.replace('{forecastId}', forecastId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a forecast modification
  * @memberOf WorkforceManagementApi
  * @instance
  * @param {string} forecastId - The forecast id
  * @param {string} forecastModificationId - The forecast Modification id
  */
WorkforceManagementApi.prototype.deleteLongtermforecastsForecastIdModificationsForecastmodificationId = function deleteLongtermforecastsForecastIdModificationsForecastmodificationId(forecastId, forecastModificationId){
    var requestPath = '/api/v2/workforcemanagement/longtermforecasts/{forecastId}/modifications/{forecastModificationId}';
    var requestQuery = {};
    var requestBody;

    if(forecastId === undefined || forecastId === null){
      throw new Error('Missing required  parameter: forecastId');
    }
    requestPath = requestPath.replace('{forecastId}', forecastId);
    if(forecastModificationId === undefined || forecastModificationId === null){
      throw new Error('Missing required  parameter: forecastModificationId');
    }
    requestPath = requestPath.replace('{forecastModificationId}', forecastModificationId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};


module.exports = WorkforceManagementApi;
