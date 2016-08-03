/**
* @class AlertingApi
* @example
* var api = new purecloud.platform.AlertingApi(pureCloudSession);
*/
function AlertingApi(session) {
    if(!(this instanceof AlertingApi)) {
        return new AlertingApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('AlertingApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get interaction stats alert list.
  * @memberOf AlertingApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "entities": [],
   "selfUri": "",
   "firstUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
AlertingApi.prototype.getInteractionstatsAlerts = function getInteractionstatsAlerts(){
    var requestPath = '/api/v2/alerting/interactionstats/alerts';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Gets user unread count of interaction stats alerts.
  * @memberOf AlertingApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "count": 0
}
  */
AlertingApi.prototype.getInteractionstatsAlertsUnread = function getInteractionstatsAlertsUnread(){
    var requestPath = '/api/v2/alerting/interactionstats/alerts/unread';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get an interaction stats alert
  * @memberOf AlertingApi
  * @instance
  * @param {string} alertId - Alert ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dimension": "",
   "dimensionValue": "",
   "metric": "",
   "mediaType": "",
   "numericRange": "",
   "statistic": "",
   "value": {},
   "ruleId": "",
   "unread": true,
   "startDate": "",
   "endDate": "",
   "notificationUsers": [],
   "alertTypes": [],
   "ruleUri": "",
   "selfUri": ""
}
  */
AlertingApi.prototype.getInteractionstatsAlertsAlertId = function getInteractionstatsAlertsAlertId(alertId){
    var requestPath = '/api/v2/alerting/interactionstats/alerts/{alertId}';
    var requestQuery = {};
    var requestBody;

    if(alertId === undefined || alertId === null){
      throw new Error('Missing required  parameter: alertId');
    }
    requestPath = requestPath.replace('{alertId}', alertId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an interaction stats alert read status
  * @memberOf AlertingApi
  * @instance
  * @param {string} alertId - Alert ID
  * @param {} body - InteractionStatsAlert
  * @example
  * Body Example:
  * {
   "unread": true
}
  * @example
  * 200 Response Example:
  * {
   "unread": true
}
  */
AlertingApi.prototype.putInteractionstatsAlertsAlertId = function putInteractionstatsAlertsAlertId(alertId, body){
    var requestPath = '/api/v2/alerting/interactionstats/alerts/{alertId}';
    var requestQuery = {};
    var requestBody;

    if(alertId === undefined || alertId === null){
      throw new Error('Missing required  parameter: alertId');
    }
    requestPath = requestPath.replace('{alertId}', alertId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete an interaction stats alert
  * @memberOf AlertingApi
  * @instance
  * @param {string} alertId - Alert ID
  */
AlertingApi.prototype.deleteInteractionstatsAlertsAlertId = function deleteInteractionstatsAlertsAlertId(alertId){
    var requestPath = '/api/v2/alerting/interactionstats/alerts/{alertId}';
    var requestQuery = {};
    var requestBody;

    if(alertId === undefined || alertId === null){
      throw new Error('Missing required  parameter: alertId');
    }
    requestPath = requestPath.replace('{alertId}', alertId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get an interaction stats rule list.
  * @memberOf AlertingApi
  * @instance
  * @example
  * 200 Response Example:
  * {
   "pageSize": 0,
   "pageNumber": 0,
   "total": 0,
   "entities": [],
   "selfUri": "",
   "firstUri": "",
   "previousUri": "",
   "nextUri": "",
   "lastUri": "",
   "pageCount": 0
}
  */
AlertingApi.prototype.getInteractionstatsRules = function getInteractionstatsRules(){
    var requestPath = '/api/v2/alerting/interactionstats/rules';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create an interaction stats rule.
  * @memberOf AlertingApi
  * @instance
  * @param {} body - AlertingRule
  * @example
  * Body Example:
  * {
   "name": "",
   "dimension": "",
   "dimensionValue": "",
   "metric": "",
   "mediaType": "",
   "numericRange": "",
   "statistic": "",
   "value": {},
   "enabled": true,
   "notificationUsers": [],
   "alertTypes": []
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dimension": "",
   "dimensionValue": "",
   "metric": "",
   "mediaType": "",
   "numericRange": "",
   "statistic": "",
   "value": {},
   "enabled": true,
   "inAlarm": true,
   "notificationUsers": [],
   "alertTypes": [],
   "selfUri": ""
}
  */
AlertingApi.prototype.postInteractionstatsRules = function postInteractionstatsRules(body){
    var requestPath = '/api/v2/alerting/interactionstats/rules';
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
  * @summary Get an interaction stats rule.
  * @memberOf AlertingApi
  * @instance
  * @param {string} ruleId - Rule ID
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dimension": "",
   "dimensionValue": "",
   "metric": "",
   "mediaType": "",
   "numericRange": "",
   "statistic": "",
   "value": {},
   "enabled": true,
   "inAlarm": true,
   "notificationUsers": [],
   "alertTypes": [],
   "selfUri": ""
}
  */
AlertingApi.prototype.getInteractionstatsRulesRuleId = function getInteractionstatsRulesRuleId(ruleId){
    var requestPath = '/api/v2/alerting/interactionstats/rules/{ruleId}';
    var requestQuery = {};
    var requestBody;

    if(ruleId === undefined || ruleId === null){
      throw new Error('Missing required  parameter: ruleId');
    }
    requestPath = requestPath.replace('{ruleId}', ruleId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an interaction stats rule
  * @memberOf AlertingApi
  * @instance
  * @param {string} ruleId - Rule ID
  * @param {} body - AlertingRule
  * @example
  * Body Example:
  * {
   "name": "",
   "dimension": "",
   "dimensionValue": "",
   "metric": "",
   "mediaType": "",
   "numericRange": "",
   "statistic": "",
   "value": {},
   "enabled": true,
   "notificationUsers": [],
   "alertTypes": []
}
  * @example
  * 200 Response Example:
  * {
   "id": "",
   "name": "",
   "dimension": "",
   "dimensionValue": "",
   "metric": "",
   "mediaType": "",
   "numericRange": "",
   "statistic": "",
   "value": {},
   "enabled": true,
   "inAlarm": true,
   "notificationUsers": [],
   "alertTypes": [],
   "selfUri": ""
}
  */
AlertingApi.prototype.putInteractionstatsRulesRuleId = function putInteractionstatsRulesRuleId(ruleId, body){
    var requestPath = '/api/v2/alerting/interactionstats/rules/{ruleId}';
    var requestQuery = {};
    var requestBody;

    if(ruleId === undefined || ruleId === null){
      throw new Error('Missing required  parameter: ruleId');
    }
    requestPath = requestPath.replace('{ruleId}', ruleId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete an interaction stats rule.
  * @memberOf AlertingApi
  * @instance
  * @param {string} ruleId - Rule ID
  */
AlertingApi.prototype.deleteInteractionstatsRulesRuleId = function deleteInteractionstatsRulesRuleId(ruleId){
    var requestPath = '/api/v2/alerting/interactionstats/rules/{ruleId}';
    var requestQuery = {};
    var requestBody;

    if(ruleId === undefined || ruleId === null){
      throw new Error('Missing required  parameter: ruleId');
    }
    requestPath = requestPath.replace('{ruleId}', ruleId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};


module.exports = AlertingApi;
