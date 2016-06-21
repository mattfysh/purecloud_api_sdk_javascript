var superagent = require('superagent');

/**
* @class
* @example
* var api = new AlertingApi(pureCloudSession);
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
  * @memberOf AlertingApi#
  */
AlertingApi.prototype.getInteractionstatsAlerts = function getInteractionstatsAlerts(){
    var requestPath = '/api/v2/alerting/interactionstats/alerts';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Gets user unread count of interaction stats alerts.
  * @memberOf AlertingApi#
  */
AlertingApi.prototype.getInteractionstatsAlertsUnread = function getInteractionstatsAlertsUnread(){
    var requestPath = '/api/v2/alerting/interactionstats/alerts/unread';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get an interaction stats alert
  * @memberOf AlertingApi#
  * @param {string} alertId - Alert ID
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
  * @memberOf AlertingApi#
  * @param {string} alertId - Alert ID
  * @param {} body - InteractionStatsAlert
  * @example
  * Body Example:
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
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete an interaction stats alert
  * @memberOf AlertingApi#
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
  * @memberOf AlertingApi#
  */
AlertingApi.prototype.getInteractionstatsRules = function getInteractionstatsRules(){
    var requestPath = '/api/v2/alerting/interactionstats/rules';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create an interaction stats rule.
  * @memberOf AlertingApi#
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
  */
AlertingApi.prototype.postInteractionstatsRules = function postInteractionstatsRules(body){
    var requestPath = '/api/v2/alerting/interactionstats/rules';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get an interaction stats rule.
  * @memberOf AlertingApi#
  * @param {string} ruleId - Rule ID
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
  * @memberOf AlertingApi#
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
  */
AlertingApi.prototype.putInteractionstatsRulesRuleId = function putInteractionstatsRulesRuleId(ruleId, body){
    var requestPath = '/api/v2/alerting/interactionstats/rules/{ruleId}';
    var requestQuery = {};
    var requestBody;

    if(ruleId === undefined || ruleId === null){
      throw new Error('Missing required  parameter: ruleId');
    }
    requestPath = requestPath.replace('{ruleId}', ruleId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete an interaction stats rule.
  * @memberOf AlertingApi#
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



/**
* @class
* @example
* var api = new AnalyticsApi(pureCloudSession);
*/
function AnalyticsApi(session) {
    if(!(this instanceof AnalyticsApi)) {
        return new AnalyticsApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('AnalyticsApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Query for conversation aggregates
  * @memberOf AnalyticsApi#
  * @param {} body - query
  * @example
  * Body Example:
  * {
   "interval": "",
   "granularity": "",
   "groupBy": [],
   "filter": {
      "type": "",
      "clauses": [],
      "predicates": []
   },
   "metrics": [],
   "flattenMultivaluedDimensions": true
}
  */
AnalyticsApi.prototype.postConversationsAggregatesQuery = function postConversationsAggregatesQuery(body){
    var requestPath = '/api/v2/analytics/conversations/aggregates/query';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query for conversation details
  * @memberOf AnalyticsApi#
  * @param {} body - query
  * @example
  * Body Example:
  * {
   "interval": "",
   "conversationFilters": [],
   "evaluationFilters": [],
   "segmentFilters": [],
   "aggregations": [],
   "paging": {
      "pageSize": 0,
      "pageNumber": 0
   },
   "order": "",
   "orderBy": ""
}
  */
AnalyticsApi.prototype.postConversationsDetailsQuery = function postConversationsDetailsQuery(body){
    var requestPath = '/api/v2/analytics/conversations/details/query';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a conversation by id
  * @memberOf AnalyticsApi#
  * @param {string} conversationId - conversationId
  */
AnalyticsApi.prototype.getConversationsConversationIdDetails = function getConversationsConversationIdDetails(conversationId){
    var requestPath = '/api/v2/analytics/conversations/{conversationId}/details';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Index conversation properties
  * @memberOf AnalyticsApi#
  * @param {string} conversationId - conversationId
  * @param {} body - request
  * @example
  * Body Example:
  * {
   "sessionId": "",
   "timestamp": 0,
   "properties": []
}
  */
AnalyticsApi.prototype.postConversationsConversationIdDetailsProperties = function postConversationsConversationIdDetailsProperties(conversationId, body){
    var requestPath = '/api/v2/analytics/conversations/{conversationId}/details/properties';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query for evaluation aggregates
  * @memberOf AnalyticsApi#
  * @param {} body - query
  * @example
  * Body Example:
  * {
   "interval": "",
   "granularity": "",
   "groupBy": [],
   "filter": {
      "type": "",
      "clauses": [],
      "predicates": []
   },
   "metrics": [],
   "flattenMultivaluedDimensions": true
}
  */
AnalyticsApi.prototype.postEvaluationsAggregatesQuery = function postEvaluationsAggregatesQuery(body){
    var requestPath = '/api/v2/analytics/evaluations/aggregates/query';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query for queue observations
  * @memberOf AnalyticsApi#
  * @param {} body - query
  * @example
  * Body Example:
  * {
   "filter": {
      "type": "",
      "clauses": [],
      "predicates": []
   },
   "metrics": []
}
  */
AnalyticsApi.prototype.postQueuesObservationsQuery = function postQueuesObservationsQuery(body){
    var requestPath = '/api/v2/analytics/queues/observations/query';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get list of reporting metadata.
  * @memberOf AnalyticsApi#
  * @param {integer} pageNumber - Page number
  * @param {integer} pageSize - Page size
  * @param {string} locale - Locale
  */
AnalyticsApi.prototype.getReportingMetadata = function getReportingMetadata(pageNumber, pageSize, locale){
    var requestPath = '/api/v2/analytics/reporting/metadata';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageNumber = pageNumber;
    requestQuery.pageSize = pageSize;
    requestQuery.locale = locale;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list of report formats
  * @description Get a list of report formats.
  * @memberOf AnalyticsApi#
  */
AnalyticsApi.prototype.getReportingReportformats = function getReportingReportformats(){
    var requestPath = '/api/v2/analytics/reporting/reportformats';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list of scheduled report jobs
  * @description Get a list of scheduled report jobs.
  * @memberOf AnalyticsApi#
  * @param {integer} pageNumber - Page number
  * @param {integer} pageSize - Page size
  */
AnalyticsApi.prototype.getReportingSchedules = function getReportingSchedules(pageNumber, pageSize){
    var requestPath = '/api/v2/analytics/reporting/schedules';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageNumber = pageNumber;
    requestQuery.pageSize = pageSize;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a scheduled report job
  * @description Create a scheduled report job.
  * @memberOf AnalyticsApi#
  * @param {} body - ReportSchedule
  * @example
  * Body Example:
  * {
   "name": "",
   "quartzCronExpression": "",
   "nextFireTime": "",
   "dateCreated": "",
   "dateModified": "",
   "description": "",
   "timeZone": "",
   "timePeriod": "",
   "interval": "",
   "reportFormat": "",
   "locale": "",
   "enabled": true,
   "reportId": "",
   "parameters": {},
   "lastRun": {
      "name": "",
      "reportId": "",
      "runTime": "",
      "runStatus": "",
      "errorMessage": "",
      "runDurationMsec": 0,
      "reportUrl": "",
      "reportFormat": "",
      "scheduleUri": ""
   }
}
  */
AnalyticsApi.prototype.postReportingSchedules = function postReportingSchedules(body){
    var requestPath = '/api/v2/analytics/reporting/schedules';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a scheduled report job.
  * @memberOf AnalyticsApi#
  * @param {string} scheduleId - Schedule ID
  */
AnalyticsApi.prototype.getReportingSchedulesScheduleId = function getReportingSchedulesScheduleId(scheduleId){
    var requestPath = '/api/v2/analytics/reporting/schedules/{scheduleId}';
    var requestQuery = {};
    var requestBody;

    if(scheduleId === undefined || scheduleId === null){
      throw new Error('Missing required  parameter: scheduleId');
    }
    requestPath = requestPath.replace('{scheduleId}', scheduleId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a scheduled report job.
  * @memberOf AnalyticsApi#
  * @param {string} scheduleId - Schedule ID
  * @param {} body - ReportSchedule
  * @example
  * Body Example:
  * {
   "name": "",
   "quartzCronExpression": "",
   "nextFireTime": "",
   "dateCreated": "",
   "dateModified": "",
   "description": "",
   "timeZone": "",
   "timePeriod": "",
   "interval": "",
   "reportFormat": "",
   "locale": "",
   "enabled": true,
   "reportId": "",
   "parameters": {},
   "lastRun": {
      "name": "",
      "reportId": "",
      "runTime": "",
      "runStatus": "",
      "errorMessage": "",
      "runDurationMsec": 0,
      "reportUrl": "",
      "reportFormat": "",
      "scheduleUri": ""
   }
}
  */
AnalyticsApi.prototype.putReportingSchedulesScheduleId = function putReportingSchedulesScheduleId(scheduleId, body){
    var requestPath = '/api/v2/analytics/reporting/schedules/{scheduleId}';
    var requestQuery = {};
    var requestBody;

    if(scheduleId === undefined || scheduleId === null){
      throw new Error('Missing required  parameter: scheduleId');
    }
    requestPath = requestPath.replace('{scheduleId}', scheduleId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a scheduled report job.
  * @memberOf AnalyticsApi#
  * @param {string} scheduleId - Schedule ID
  */
AnalyticsApi.prototype.deleteReportingSchedulesScheduleId = function deleteReportingSchedulesScheduleId(scheduleId){
    var requestPath = '/api/v2/analytics/reporting/schedules/{scheduleId}';
    var requestQuery = {};
    var requestBody;

    if(scheduleId === undefined || scheduleId === null){
      throw new Error('Missing required  parameter: scheduleId');
    }
    requestPath = requestPath.replace('{scheduleId}', scheduleId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get list of completed scheduled report jobs.
  * @memberOf AnalyticsApi#
  * @param {string} scheduleId - Schedule ID
  * @param {integer} pageNumber - 
  * @param {integer} pageSize - 
  */
AnalyticsApi.prototype.getReportingSchedulesScheduleIdHistory = function getReportingSchedulesScheduleIdHistory(scheduleId, pageNumber, pageSize){
    var requestPath = '/api/v2/analytics/reporting/schedules/{scheduleId}/history';
    var requestQuery = {};
    var requestBody;

    if(scheduleId === undefined || scheduleId === null){
      throw new Error('Missing required  parameter: scheduleId');
    }
    requestPath = requestPath.replace('{scheduleId}', scheduleId);
    requestQuery.pageNumber = pageNumber;
    requestQuery.pageSize = pageSize;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get most recently completed scheduled report job.
  * @memberOf AnalyticsApi#
  * @param {string} scheduleId - Schedule ID
  */
AnalyticsApi.prototype.getReportingSchedulesScheduleIdHistoryLatest = function getReportingSchedulesScheduleIdHistoryLatest(scheduleId){
    var requestPath = '/api/v2/analytics/reporting/schedules/{scheduleId}/history/latest';
    var requestQuery = {};
    var requestBody;

    if(scheduleId === undefined || scheduleId === null){
      throw new Error('Missing required  parameter: scheduleId');
    }
    requestPath = requestPath.replace('{scheduleId}', scheduleId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary A completed scheduled report job
  * @description A completed scheduled report job.
  * @memberOf AnalyticsApi#
  * @param {string} runId - Run ID
  * @param {string} scheduleId - Schedule ID
  */
AnalyticsApi.prototype.getReportingSchedulesScheduleIdHistoryRunId = function getReportingSchedulesScheduleIdHistoryRunId(runId, scheduleId){
    var requestPath = '/api/v2/analytics/reporting/schedules/{scheduleId}/history/{runId}';
    var requestQuery = {};
    var requestBody;

    if(runId === undefined || runId === null){
      throw new Error('Missing required  parameter: runId');
    }
    requestPath = requestPath.replace('{runId}', runId);
    if(scheduleId === undefined || scheduleId === null){
      throw new Error('Missing required  parameter: scheduleId');
    }
    requestPath = requestPath.replace('{scheduleId}', scheduleId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Place a scheduled report immediately into the reporting queue
  * @memberOf AnalyticsApi#
  * @param {string} scheduleId - Schedule ID
  */
AnalyticsApi.prototype.postReportingSchedulesScheduleIdRunreport = function postReportingSchedulesScheduleIdRunreport(scheduleId){
    var requestPath = '/api/v2/analytics/reporting/schedules/{scheduleId}/runreport';
    var requestQuery = {};
    var requestBody;

    if(scheduleId === undefined || scheduleId === null){
      throw new Error('Missing required  parameter: scheduleId');
    }
    requestPath = requestPath.replace('{scheduleId}', scheduleId);
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list of report time periods.
  * @memberOf AnalyticsApi#
  */
AnalyticsApi.prototype.getReportingTimeperiods = function getReportingTimeperiods(){
    var requestPath = '/api/v2/analytics/reporting/timeperiods';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a reporting metadata.
  * @memberOf AnalyticsApi#
  * @param {string} reportId - Report ID
  * @param {string} locale - Locale
  */
AnalyticsApi.prototype.getReportingReportIdMetadata = function getReportingReportIdMetadata(reportId, locale){
    var requestPath = '/api/v2/analytics/reporting/{reportId}/metadata';
    var requestQuery = {};
    var requestBody;

    if(reportId === undefined || reportId === null){
      throw new Error('Missing required  parameter: reportId');
    }
    requestPath = requestPath.replace('{reportId}', reportId);
    requestQuery.locale = locale;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query for user aggregates
  * @memberOf AnalyticsApi#
  * @param {} body - query
  * @example
  * Body Example:
  * {
   "interval": "",
   "granularity": "",
   "groupBy": [],
   "filter": {
      "type": "",
      "clauses": [],
      "predicates": []
   },
   "metrics": [],
   "flattenMultivaluedDimensions": true
}
  */
AnalyticsApi.prototype.postUsersAggregatesQuery = function postUsersAggregatesQuery(body){
    var requestPath = '/api/v2/analytics/users/aggregates/query';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query for user observations
  * @memberOf AnalyticsApi#
  * @param {} body - query
  * @example
  * Body Example:
  * {
   "filter": {
      "type": "",
      "clauses": [],
      "predicates": []
   },
   "metrics": []
}
  */
AnalyticsApi.prototype.postUsersObservationsQuery = function postUsersObservationsQuery(body){
    var requestPath = '/api/v2/analytics/users/observations/query';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};



/**
* @class
* @example
* var api = new AttributesApi(pureCloudSession);
*/
function AttributesApi(session) {
    if(!(this instanceof AttributesApi)) {
        return new AttributesApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('AttributesApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Gets a list of existing attributes.
  * @memberOf AttributesApi#
  * @param {integer} pageNumber - Page number
  * @param {integer} pageSize - Page size
  */
AttributesApi.prototype.getAttributes = function getAttributes(pageNumber, pageSize){
    var requestPath = '/api/v2/attributes';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageNumber = pageNumber;
    requestQuery.pageSize = pageSize;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create an attribute.
  * @memberOf AttributesApi#
  * @param {} body - Attribute
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "description": "",
   "createdBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dateCreated": "",
   "modifiedBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dateModified": ""
}
  */
AttributesApi.prototype.postAttributes = function postAttributes(body){
    var requestPath = '/api/v2/attributes';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query attributes
  * @memberOf AttributesApi#
  * @param {} body - query
  * @example
  * Body Example:
  * {
   "query": "",
   "pageSize": 0,
   "pageNumber": 0
}
  */
AttributesApi.prototype.postQuery = function postQuery(body){
    var requestPath = '/api/v2/attributes/query';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get details about an existing attribute.
  * @memberOf AttributesApi#
  * @param {string} attributeId - Attribute ID
  */
AttributesApi.prototype.getAttributeId = function getAttributeId(attributeId){
    var requestPath = '/api/v2/attributes/{attributeId}';
    var requestQuery = {};
    var requestBody;

    if(attributeId === undefined || attributeId === null){
      throw new Error('Missing required  parameter: attributeId');
    }
    requestPath = requestPath.replace('{attributeId}', attributeId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an existing attribute.
  * @description Fields that can be updated: name, description. The most recent version is required for updates.
  * @memberOf AttributesApi#
  * @param {string} attributeId - Attribute ID
  * @param {} body - Attribute
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "description": "",
   "createdBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dateCreated": "",
   "modifiedBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dateModified": ""
}
  */
AttributesApi.prototype.putAttributeId = function putAttributeId(attributeId, body){
    var requestPath = '/api/v2/attributes/{attributeId}';
    var requestQuery = {};
    var requestBody;

    if(attributeId === undefined || attributeId === null){
      throw new Error('Missing required  parameter: attributeId');
    }
    requestPath = requestPath.replace('{attributeId}', attributeId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete an existing Attribute.
  * @description This will remove attribute.
  * @memberOf AttributesApi#
  * @param {string} attributeId - Attribute ID
  */
AttributesApi.prototype.deleteAttributeId = function deleteAttributeId(attributeId){
    var requestPath = '/api/v2/attributes/{attributeId}';
    var requestQuery = {};
    var requestBody;

    if(attributeId === undefined || attributeId === null){
      throw new Error('Missing required  parameter: attributeId');
    }
    requestPath = requestPath.replace('{attributeId}', attributeId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};



/**
* @class
* @example
* var api = new AuthorizationApi(pureCloudSession);
*/
function AuthorizationApi(session) {
    if(!(this instanceof AuthorizationApi)) {
        return new AuthorizationApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('AuthorizationApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get all permissions.
  * @description Retrieve a list of all permission defined in the system.
  * @memberOf AuthorizationApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  */
AuthorizationApi.prototype.getPermissions = function getPermissions(pageSize, pageNumber){
    var requestPath = '/api/v2/authorization/permissions';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of enabled products
  * @description Gets the list of enabled products. Some example product names are: collaborateFree, collaboratePro, communicate, and engage.
  * @memberOf AuthorizationApi#
  */
AuthorizationApi.prototype.getProducts = function getProducts(){
    var requestPath = '/api/v2/authorization/products';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Retrieve a list of all roles defined for the organization
  * @memberOf AuthorizationApi#
  * @param {integer} pageSize - The total page size requested
  * @param {integer} pageNumber - The page number requested
  * @param {string} sortBy - variable name requested to sort by
  * @param {array} expand - variable name requested by expand list
  * @param {string} nextPage - next page token
  * @param {string} previousPage - Previous page token
  * @param {array} permission - 
  * @param {boolean} userCount - 
  */
AuthorizationApi.prototype.getRoles = function getRoles(pageSize, pageNumber, sortBy, expand, nextPage, previousPage, permission, userCount){
    var requestPath = '/api/v2/authorization/roles';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.expand = expand;
    requestQuery.nextPage = nextPage;
    requestQuery.previousPage = previousPage;
    requestQuery.permission = permission;
    requestQuery.userCount = userCount;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create an organization role.
  * @memberOf AuthorizationApi#
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "defaultRoleId": "",
   "permissions": [],
   "permissionPolicies": [],
   "userCount": 0,
   "roleNeedsUpdate": true,
   "default": true
}
  */
AuthorizationApi.prototype.postRoles = function postRoles(body){
    var requestPath = '/api/v2/authorization/roles';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Restores all default roles
  * @description This endpoint serves several purposes. 1. It provides the org with default roles. This is important for default roles that will be added after go-live (they can retroactively add the new default-role). Note: When not using a query param of force=true, it only adds the default roles not configured for the org; it does not overwrite roles. 2. Using the query param force=true, you can restore all default roles. Note: This does not have an effect on custom roles.
  * @memberOf AuthorizationApi#
  * @param {boolean} force - Restore default roles
  */
AuthorizationApi.prototype.postRolesDefault = function postRolesDefault(force){
    var requestPath = '/api/v2/authorization/roles/default';
    var requestQuery = {};
    var requestBody;

    requestQuery.force = force;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Restore specified default roles
  * @memberOf AuthorizationApi#
  * @param {} body - 
  * @example
  * Body Example:
  * [
 {
  "name": "",
  "description": "",
  "defaultRoleId": "",
  "permissions": [],
  "permissionPolicies": [],
  "userCount": 0,
  "roleNeedsUpdate": true,
  "default": true
 }
]
  */
AuthorizationApi.prototype.putRolesDefault = function putRolesDefault(body){
    var requestPath = '/api/v2/authorization/roles/default';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get an org role to default role comparison comparison
  * @description Compares any organization role to a default role id and show differences
  * @memberOf AuthorizationApi#
  * @param {string} leftRoleId - Left Role ID
  * @param {string} rightRoleId - Right Role id
  */
AuthorizationApi.prototype.getRolesLeftroleIdComparedefaultRightroleId = function getRolesLeftroleIdComparedefaultRightroleId(leftRoleId, rightRoleId){
    var requestPath = '/api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}';
    var requestQuery = {};
    var requestBody;

    if(leftRoleId === undefined || leftRoleId === null){
      throw new Error('Missing required  parameter: leftRoleId');
    }
    requestPath = requestPath.replace('{leftRoleId}', leftRoleId);
    if(rightRoleId === undefined || rightRoleId === null){
      throw new Error('Missing required  parameter: rightRoleId');
    }
    requestPath = requestPath.replace('{rightRoleId}', rightRoleId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary  Get an unsaved org role to default role comparison
  * @description Allows users to compare their existing roles in an unsaved state to its default role
  * @memberOf AuthorizationApi#
  * @param {string} leftRoleId - Left Role ID
  * @param {string} rightRoleId - Right Role id
  * @param {} body - Allows users to compare their existing roles in an unsaved state to its default role
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "defaultRoleId": "",
   "permissions": [],
   "permissionPolicies": [],
   "userCount": 0,
   "roleNeedsUpdate": true,
   "default": true
}
  */
AuthorizationApi.prototype.postRolesLeftroleIdComparedefaultRightroleId = function postRolesLeftroleIdComparedefaultRightroleId(leftRoleId, rightRoleId, body){
    var requestPath = '/api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}';
    var requestQuery = {};
    var requestBody;

    if(leftRoleId === undefined || leftRoleId === null){
      throw new Error('Missing required  parameter: leftRoleId');
    }
    requestPath = requestPath.replace('{leftRoleId}', leftRoleId);
    if(rightRoleId === undefined || rightRoleId === null){
      throw new Error('Missing required  parameter: rightRoleId');
    }
    requestPath = requestPath.replace('{rightRoleId}', rightRoleId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a single organization role.
  * @description Get the organization role specified by its ID.
  * @memberOf AuthorizationApi#
  * @param {string} roleId - Role ID
  */
AuthorizationApi.prototype.getRolesRoleId = function getRolesRoleId(roleId){
    var requestPath = '/api/v2/authorization/roles/{roleId}';
    var requestQuery = {};
    var requestBody;

    if(roleId === undefined || roleId === null){
      throw new Error('Missing required  parameter: roleId');
    }
    requestPath = requestPath.replace('{roleId}', roleId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an organization role.
  * @description Update
  * @memberOf AuthorizationApi#
  * @param {string} roleId - Role ID
  * @param {} body - Update
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "defaultRoleId": "",
   "permissions": [],
   "permissionPolicies": [],
   "userCount": 0,
   "roleNeedsUpdate": true,
   "default": true
}
  */
AuthorizationApi.prototype.putRolesRoleId = function putRolesRoleId(roleId, body){
    var requestPath = '/api/v2/authorization/roles/{roleId}';
    var requestQuery = {};
    var requestBody;

    if(roleId === undefined || roleId === null){
      throw new Error('Missing required  parameter: roleId');
    }
    requestPath = requestPath.replace('{roleId}', roleId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete an organization role.
  * @memberOf AuthorizationApi#
  * @param {string} roleId - Role ID
  */
AuthorizationApi.prototype.deleteRolesRoleId = function deleteRolesRoleId(roleId){
    var requestPath = '/api/v2/authorization/roles/{roleId}';
    var requestQuery = {};
    var requestBody;

    if(roleId === undefined || roleId === null){
      throw new Error('Missing required  parameter: roleId');
    }
    requestPath = requestPath.replace('{roleId}', roleId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Patch Organization Role for needsUpdate Field
  * @description Patch Organization Role for needsUpdate Field
  * @memberOf AuthorizationApi#
  * @param {string} roleId - Role ID
  * @param {} body - Patch Organization Role for needsUpdate Field
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "defaultRoleId": "",
   "permissions": [],
   "permissionPolicies": [],
   "userCount": 0,
   "roleNeedsUpdate": true,
   "default": true
}
  */
AuthorizationApi.prototype.patchRolesRoleId = function patchRolesRoleId(roleId, body){
    var requestPath = '/api/v2/authorization/roles/{roleId}';
    var requestQuery = {};
    var requestBody;

    if(roleId === undefined || roleId === null){
      throw new Error('Missing required  parameter: roleId');
    }
    requestPath = requestPath.replace('{roleId}', roleId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Sets the users for the role
  * @memberOf AuthorizationApi#
  * @param {string} roleId - Role ID
  * @param {} body - 
  */
AuthorizationApi.prototype.putRolesRoleIdUsersAdd = function putRolesRoleIdUsersAdd(roleId, body){
    var requestPath = '/api/v2/authorization/roles/{roleId}/users/add';
    var requestQuery = {};
    var requestBody;

    if(roleId === undefined || roleId === null){
      throw new Error('Missing required  parameter: roleId');
    }
    requestPath = requestPath.replace('{roleId}', roleId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Removes the users from the role
  * @memberOf AuthorizationApi#
  * @param {string} roleId - Role ID
  * @param {} body - 
  */
AuthorizationApi.prototype.putRolesRoleIdUsersRemove = function putRolesRoleIdUsersRemove(roleId, body){
    var requestPath = '/api/v2/authorization/roles/{roleId}/users/remove';
    var requestQuery = {};
    var requestBody;

    if(roleId === undefined || roleId === null){
      throw new Error('Missing required  parameter: roleId');
    }
    requestPath = requestPath.replace('{roleId}', roleId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Returns a listing of roles and permissions for a user.
  * @memberOf AuthorizationApi#
  * @param {string} userId - User ID
  */
AuthorizationApi.prototype.getUserIdRoles = function getUserIdRoles(userId){
    var requestPath = '/api/v2/users/{userId}/roles';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Sets the user's roles
  * @memberOf AuthorizationApi#
  * @param {string} userId - User ID
  * @param {} body - 
  */
AuthorizationApi.prototype.putUserIdRoles = function putUserIdRoles(userId, body){
    var requestPath = '/api/v2/users/{userId}/roles';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Removes all the roles from the user.
  * @memberOf AuthorizationApi#
  * @param {string} userId - User ID
  */
AuthorizationApi.prototype.deleteUserIdRoles = function deleteUserIdRoles(userId){
    var requestPath = '/api/v2/users/{userId}/roles';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};



/**
* @class
* @example
* var api = new ConfigurationApi(pureCloudSession);
*/
function ConfigurationApi(session) {
    if(!(this instanceof ConfigurationApi)) {
        return new ConfigurationApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('ConfigurationApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get encryption key list
  * @memberOf ConfigurationApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  */
ConfigurationApi.prototype.getRecordingkeys = function getRecordingkeys(pageSize, pageNumber){
    var requestPath = '/api/v2/recording/recordingkeys';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create encryption key
  * @memberOf ConfigurationApi#
  */
ConfigurationApi.prototype.postRecordingkeys = function postRecordingkeys(){
    var requestPath = '/api/v2/recording/recordingkeys';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get key rotation schedule
  * @memberOf ConfigurationApi#
  */
ConfigurationApi.prototype.getRecordingkeysRotationschedule = function getRecordingkeysRotationschedule(){
    var requestPath = '/api/v2/recording/recordingkeys/rotationschedule';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update key rotation schedule
  * @memberOf ConfigurationApi#
  * @param {} body - KeyRotationSchedule
  * @example
  * Body Example:
  * {
   "name": "",
   "period": ""
}
  */
ConfigurationApi.prototype.putRecordingkeysRotationschedule = function putRecordingkeysRotationschedule(body){
    var requestPath = '/api/v2/recording/recordingkeys/rotationschedule';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};



/**
* @class
* @example
* var api = new ContentManagementApi(pureCloudSession);
*/
function ContentManagementApi(session) {
    if(!(this instanceof ContentManagementApi)) {
        return new ContentManagementApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('ContentManagementApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Query audits
  * @memberOf ContentManagementApi#
  * @param {} body - Allows for a filtered query returning facet information
  * @example
  * Body Example:
  * {
   "queryPhrase": "",
   "pageNumber": 0,
   "pageSize": 0,
   "facetNameRequests": [],
   "sort": [],
   "filters": [],
   "attributeFilters": [],
   "includeShares": true
}
  */
ContentManagementApi.prototype.postAuditquery = function postAuditquery(body){
    var requestPath = '/api/v2/contentmanagement/auditquery';
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
  * @summary Get a list of documents.
  * @memberOf ContentManagementApi#
  * @param {string} workspaceId - Workspace ID
  * @param {string} name - Name
  * @param {string} expand - Expand some document fields
  acl,
  workspace,
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortBy - name or dateCreated
  * @param {string} sortOrder - ascending or descending
  */
ContentManagementApi.prototype.getDocuments = function getDocuments(workspaceId, name, expand, pageSize, pageNumber, sortBy, sortOrder){
    var requestPath = '/api/v2/contentmanagement/documents';
    var requestQuery = {};
    var requestBody;

    if(workspaceId === undefined || workspaceId === null){
      throw new Error('Missing required  parameter: workspaceId');
    }
    requestQuery.workspaceId = workspaceId;
    requestQuery.name = name;
    requestQuery.expand = expand;
    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.sortOrder = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Add a document.
  * @memberOf ContentManagementApi#
  * @param {} body - Document
  * @param {string} copySource - Copy a document within a workspace or to a new workspace. Provide a document ID as the copy source.
  * @param {string} moveSource - Move a document to a new workspace. Provide a document ID as the move source.
  * @param {boolean} override - Override any lock on the source document
  * @example
  * Body Example:
  * {
   "name": "",
   "workspace": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "tags": [],
   "tagIds": []
}
  */
ContentManagementApi.prototype.postDocuments = function postDocuments(body, copySource, moveSource, override){
    var requestPath = '/api/v2/contentmanagement/documents';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery.copySource = copySource;
    requestQuery.moveSource = moveSource;
    requestQuery.override = override;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a document.
  * @memberOf ContentManagementApi#
  * @param {string} documentId - Document ID
  * @param {string} expand - Expand some document fields
  lockInfo,
  acl,
  workspace,
  */
ContentManagementApi.prototype.getDocumentsDocumentId = function getDocumentsDocumentId(documentId, expand){
    var requestPath = '/api/v2/contentmanagement/documents/{documentId}';
    var requestQuery = {};
    var requestBody;

    if(documentId === undefined || documentId === null){
      throw new Error('Missing required  parameter: documentId');
    }
    requestPath = requestPath.replace('{documentId}', documentId);
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a document.
  * @memberOf ContentManagementApi#
  * @param {string} documentId - Document ID
  * @param {} body - Document
  * @param {string} expand - Expand some document fields
  acl,
  * @param {boolean} override - Override any lock on the document
  * @example
  * Body Example:
  * {
   "changeNumber": 0,
   "name": "",
   "read": true,
   "addTags": [],
   "removeTags": [],
   "addTagIds": [],
   "removeTagIds": [],
   "updateAttributes": [],
   "removeAttributes": []
}
  */
ContentManagementApi.prototype.postDocumentsDocumentId = function postDocumentsDocumentId(documentId, body, expand, override){
    var requestPath = '/api/v2/contentmanagement/documents/{documentId}';
    var requestQuery = {};
    var requestBody;

    if(documentId === undefined || documentId === null){
      throw new Error('Missing required  parameter: documentId');
    }
    requestPath = requestPath.replace('{documentId}', documentId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery.expand = expand;
    requestQuery.override = override;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a document.
  * @memberOf ContentManagementApi#
  * @param {string} documentId - Document ID
  * @param {boolean} override - Override any lock on the document
  */
ContentManagementApi.prototype.deleteDocumentsDocumentId = function deleteDocumentsDocumentId(documentId, override){
    var requestPath = '/api/v2/contentmanagement/documents/{documentId}';
    var requestQuery = {};
    var requestBody;

    if(documentId === undefined || documentId === null){
      throw new Error('Missing required  parameter: documentId');
    }
    requestPath = requestPath.replace('{documentId}', documentId);
    requestQuery.override = override;
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list of audits for a document.
  * @memberOf ContentManagementApi#
  * @param {string} documentId - Document ID
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} transactionFilter - Transaction filter
  * @param {string} level - level
  * @param {string} sortBy - Sort by
  * @param {string} sortOrder - Sort order
  */
ContentManagementApi.prototype.getDocumentsDocumentIdAudits = function getDocumentsDocumentIdAudits(documentId, pageSize, pageNumber, transactionFilter, level, sortBy, sortOrder){
    var requestPath = '/api/v2/contentmanagement/documents/{documentId}/audits';
    var requestQuery = {};
    var requestBody;

    if(documentId === undefined || documentId === null){
      throw new Error('Missing required  parameter: documentId');
    }
    requestPath = requestPath.replace('{documentId}', documentId);
    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.transactionFilter = transactionFilter;
    requestQuery.level = level;
    requestQuery.sortBy = sortBy;
    requestQuery.sortOrder = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Download a document.
  * @memberOf ContentManagementApi#
  * @param {string} documentId - Document ID
  * @param {string} disposition - Request how the content will be downloaded: attached as a file or inline. Default is attachment.
  attachment,
  inline,
  * @param {string} contentType - The requested format for the specified document. If supported, the document will be returned in that format. Example contentType=audio/wav
  */
ContentManagementApi.prototype.getDocumentsDocumentIdContent = function getDocumentsDocumentIdContent(documentId, disposition, contentType){
    var requestPath = '/api/v2/contentmanagement/documents/{documentId}/content';
    var requestQuery = {};
    var requestBody;

    if(documentId === undefined || documentId === null){
      throw new Error('Missing required  parameter: documentId');
    }
    requestPath = requestPath.replace('{documentId}', documentId);
    requestQuery.disposition = disposition;
    requestQuery.contentType = contentType;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Replace the contents of a document.
  * @memberOf ContentManagementApi#
  * @param {string} documentId - Document ID
  * @param {} body - Replace Request
  * @param {boolean} override - Override any lock on the document
  * @example
  * Body Example:
  * {
   "changeNumber": 0,
   "name": "",
   "authToken": ""
}
  */
ContentManagementApi.prototype.postDocumentsDocumentIdContent = function postDocumentsDocumentIdContent(documentId, body, override){
    var requestPath = '/api/v2/contentmanagement/documents/{documentId}/content';
    var requestQuery = {};
    var requestBody;

    if(documentId === undefined || documentId === null){
      throw new Error('Missing required  parameter: documentId');
    }
    requestPath = requestPath.replace('{documentId}', documentId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery.override = override;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query content
  * @memberOf ContentManagementApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortBy - name or dateCreated
  * @param {string} sortOrder - ascending or descending
  * @param {string} queryPhrase - Phrase tokens are ANDed together over all searchable fields
  * @param {string} expand - Expand some document fields
  acl,
  workspace,
  */
ContentManagementApi.prototype.getQuery = function getQuery(pageSize, pageNumber, sortBy, sortOrder, queryPhrase, expand){
    var requestPath = '/api/v2/contentmanagement/query';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.sortOrder = sortOrder;
    if(queryPhrase === undefined || queryPhrase === null){
      throw new Error('Missing required  parameter: queryPhrase');
    }
    requestQuery.queryPhrase = queryPhrase;
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query content
  * @memberOf ContentManagementApi#
  * @param {} body - Allows for a filtered query returning facet information
  * @param {string} expand - Expand some document fields
  acl,
  workspace,
  * @example
  * Body Example:
  * {
   "queryPhrase": "",
   "pageNumber": 0,
   "pageSize": 0,
   "facetNameRequests": [],
   "sort": [],
   "filters": [],
   "attributeFilters": [],
   "includeShares": true
}
  */
ContentManagementApi.prototype.postQuery = function postQuery(body, expand){
    var requestPath = '/api/v2/contentmanagement/query';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery.expand = expand;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a List of Security Profiles
  * @memberOf ContentManagementApi#
  */
ContentManagementApi.prototype.getSecurityprofiles = function getSecurityprofiles(){
    var requestPath = '/api/v2/contentmanagement/securityprofiles';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a Security Profile
  * @memberOf ContentManagementApi#
  * @param {string} securityProfileId - Security Profile Id
  */
ContentManagementApi.prototype.getSecurityprofilesSecurityprofileId = function getSecurityprofilesSecurityprofileId(securityProfileId){
    var requestPath = '/api/v2/contentmanagement/securityprofiles/{securityProfileId}';
    var requestQuery = {};
    var requestBody;

    if(securityProfileId === undefined || securityProfileId === null){
      throw new Error('Missing required  parameter: securityProfileId');
    }
    requestPath = requestPath.replace('{securityProfileId}', securityProfileId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get shared documents. Securely download a shared document.
  * @description This method requires the download sharing URI obtained in the get document response (downloadSharingUri). Documents may be shared between users in the same workspace. Documents may also be shared between any user by creating a content management share.
  * @memberOf ContentManagementApi#
  * @param {string} sharedId - Shared ID
  * @param {boolean} redirect - Turn on or off redirect
  * @param {string} disposition - Request how the share content will be downloaded: attached as a file or inline. Default is attachment.
  attachment,
  inline,
  none,
  * @param {string} contentType - The requested format for the specified document. If supported, the document will be returned in that format. Example contentType=audio/wav
  * @param {string} expand - Expand some document fields
  document.acl,
  */
ContentManagementApi.prototype.getSharedSharedId = function getSharedSharedId(sharedId, redirect, disposition, contentType, expand){
    var requestPath = '/api/v2/contentmanagement/shared/{sharedId}';
    var requestQuery = {};
    var requestBody;

    if(sharedId === undefined || sharedId === null){
      throw new Error('Missing required  parameter: sharedId');
    }
    requestPath = requestPath.replace('{sharedId}', sharedId);
    requestQuery.redirect = redirect;
    requestQuery.disposition = disposition;
    requestQuery.contentType = contentType;
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Gets a list of shares.  You must specify at least one filter (e.g. entityId).
  * @description Failing to specify a filter will return 400.
  * @memberOf ContentManagementApi#
  * @param {string} entityId - Filters the shares returned to only the entity specified by the value of this parameter.
  * @param {string} expand - Expand share fields
  member,
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  */
ContentManagementApi.prototype.getShares = function getShares(entityId, expand, pageSize, pageNumber){
    var requestPath = '/api/v2/contentmanagement/shares';
    var requestQuery = {};
    var requestBody;

    requestQuery.entityId = entityId;
    requestQuery.expand = expand;
    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Creates a new share or updates an existing share if the entity has already been shared
  * @memberOf ContentManagementApi#
  * @param {} body - CreateShareRequest - entity id and type and a single member or list of members are required
  * @example
  * Body Example:
  * {
   "sharedEntityType": "",
   "sharedEntity": {
      "id": ""
   },
   "memberType": "",
   "member": {
      "id": ""
   },
   "members": []
}
  */
ContentManagementApi.prototype.postShares = function postShares(body){
    var requestPath = '/api/v2/contentmanagement/shares';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Retrieve details about an existing share.
  * @memberOf ContentManagementApi#
  * @param {string} shareId - Share ID
  * @param {string} expand - Expand share fields
  member,
  */
ContentManagementApi.prototype.getSharesShareId = function getSharesShareId(shareId, expand){
    var requestPath = '/api/v2/contentmanagement/shares/{shareId}';
    var requestQuery = {};
    var requestBody;

    if(shareId === undefined || shareId === null){
      throw new Error('Missing required  parameter: shareId');
    }
    requestPath = requestPath.replace('{shareId}', shareId);
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Deletes an existing share.
  * @description This revokes sharing rights specified in the share record
  * @memberOf ContentManagementApi#
  * @param {string} shareId - Share ID
  */
ContentManagementApi.prototype.deleteSharesShareId = function deleteSharesShareId(shareId){
    var requestPath = '/api/v2/contentmanagement/shares/{shareId}';
    var requestQuery = {};
    var requestBody;

    if(shareId === undefined || shareId === null){
      throw new Error('Missing required  parameter: shareId');
    }
    requestPath = requestPath.replace('{shareId}', shareId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list of statuses for pending operations
  * @memberOf ContentManagementApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  */
ContentManagementApi.prototype.getStatus = function getStatus(pageSize, pageNumber){
    var requestPath = '/api/v2/contentmanagement/status';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a status.
  * @memberOf ContentManagementApi#
  * @param {string} statusId - Status ID
  */
ContentManagementApi.prototype.getStatusStatusId = function getStatusStatusId(statusId){
    var requestPath = '/api/v2/contentmanagement/status/{statusId}';
    var requestQuery = {};
    var requestBody;

    if(statusId === undefined || statusId === null){
      throw new Error('Missing required  parameter: statusId');
    }
    requestPath = requestPath.replace('{statusId}', statusId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Cancel the command for this status
  * @memberOf ContentManagementApi#
  * @param {string} statusId - Status ID
  */
ContentManagementApi.prototype.deleteStatusStatusId = function deleteStatusStatusId(statusId){
    var requestPath = '/api/v2/contentmanagement/status/{statusId}';
    var requestQuery = {};
    var requestBody;

    if(statusId === undefined || statusId === null){
      throw new Error('Missing required  parameter: statusId');
    }
    requestPath = requestPath.replace('{statusId}', statusId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get usage details.
  * @memberOf ContentManagementApi#
  */
ContentManagementApi.prototype.getUsage = function getUsage(){
    var requestPath = '/api/v2/contentmanagement/usage';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list of workspaces.
  * @description Specifying 'content' access will return all workspaces the user has document access to, while 'admin' access will return all group workspaces the user has administrative rights to.
  * @memberOf ContentManagementApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} access - Requested access level
  content,
  admin,
  document:create,
  document:viewContent,
  document:viewMetadata,
  document:download,
  document:delete,
  document:update,
  document:share,
  document:shareView,
  document:email,
  document:print,
  document:auditView,
  document:replace,
  document:tag,
  tag:create,
  tag:view,
  tag:update,
  tag:apply,
  tag:remove,
  tag:delete,
  * @param {string} expand - Expand some workspace fields
  summary,
  acl,
  */
ContentManagementApi.prototype.getWorkspaces = function getWorkspaces(pageSize, pageNumber, access, expand){
    var requestPath = '/api/v2/contentmanagement/workspaces';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.access = access;
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a group workspace
  * @memberOf ContentManagementApi#
  * @param {} body - Workspace
  * @example
  * Body Example:
  * {
   "name": "",
   "bucket": "",
   "description": ""
}
  */
ContentManagementApi.prototype.postWorkspaces = function postWorkspaces(body){
    var requestPath = '/api/v2/contentmanagement/workspaces';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a workspace.
  * @memberOf ContentManagementApi#
  * @param {string} workspaceId - Workspace ID
  * @param {string} expand - Expand some workspace fields
  summary,
  acl,
  */
ContentManagementApi.prototype.getWorkspacesWorkspaceId = function getWorkspacesWorkspaceId(workspaceId, expand){
    var requestPath = '/api/v2/contentmanagement/workspaces/{workspaceId}';
    var requestQuery = {};
    var requestBody;

    if(workspaceId === undefined || workspaceId === null){
      throw new Error('Missing required  parameter: workspaceId');
    }
    requestPath = requestPath.replace('{workspaceId}', workspaceId);
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a workspace
  * @memberOf ContentManagementApi#
  * @param {string} workspaceId - Workspace ID
  * @param {} body - Workspace
  * @example
  * Body Example:
  * {
   "name": "",
   "type": "",
   "isCurrentUserWorkspace": true,
   "user": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "bucket": "",
   "dateCreated": "",
   "dateModified": "",
   "summary": {
      "totalDocumentCount": 0,
      "totalDocumentByteCount": 0
   },
   "acl": [],
   "description": ""
}
  */
ContentManagementApi.prototype.putWorkspacesWorkspaceId = function putWorkspacesWorkspaceId(workspaceId, body){
    var requestPath = '/api/v2/contentmanagement/workspaces/{workspaceId}';
    var requestQuery = {};
    var requestBody;

    if(workspaceId === undefined || workspaceId === null){
      throw new Error('Missing required  parameter: workspaceId');
    }
    requestPath = requestPath.replace('{workspaceId}', workspaceId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a workspace
  * @memberOf ContentManagementApi#
  * @param {string} workspaceId - Workspace ID
  * @param {string} moveChildrenToWorkspaceId - New location for objects in deleted workspace.
  */
ContentManagementApi.prototype.deleteWorkspacesWorkspaceId = function deleteWorkspacesWorkspaceId(workspaceId, moveChildrenToWorkspaceId){
    var requestPath = '/api/v2/contentmanagement/workspaces/{workspaceId}';
    var requestQuery = {};
    var requestBody;

    if(workspaceId === undefined || workspaceId === null){
      throw new Error('Missing required  parameter: workspaceId');
    }
    requestPath = requestPath.replace('{workspaceId}', workspaceId);
    requestQuery.moveChildrenToWorkspaceId = moveChildrenToWorkspaceId;
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list workspace members
  * @memberOf ContentManagementApi#
  * @param {string} workspaceId - Workspace ID
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} expand - Expand workspace member fields
  member,
  */
ContentManagementApi.prototype.getWorkspacesWorkspaceIdMembers = function getWorkspacesWorkspaceIdMembers(workspaceId, pageSize, pageNumber, expand){
    var requestPath = '/api/v2/contentmanagement/workspaces/{workspaceId}/members';
    var requestQuery = {};
    var requestBody;

    if(workspaceId === undefined || workspaceId === null){
      throw new Error('Missing required  parameter: workspaceId');
    }
    requestPath = requestPath.replace('{workspaceId}', workspaceId);
    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a workspace member
  * @memberOf ContentManagementApi#
  * @param {string} workspaceId - Workspace ID
  * @param {string} memberId - Member ID
  * @param {string} expand - Expand workspace member fields
  member,
  */
ContentManagementApi.prototype.getWorkspacesWorkspaceIdMembersMemberId = function getWorkspacesWorkspaceIdMembersMemberId(workspaceId, memberId, expand){
    var requestPath = '/api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}';
    var requestQuery = {};
    var requestBody;

    if(workspaceId === undefined || workspaceId === null){
      throw new Error('Missing required  parameter: workspaceId');
    }
    requestPath = requestPath.replace('{workspaceId}', workspaceId);
    if(memberId === undefined || memberId === null){
      throw new Error('Missing required  parameter: memberId');
    }
    requestPath = requestPath.replace('{memberId}', memberId);
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Add a member to a workspace
  * @memberOf ContentManagementApi#
  * @param {string} workspaceId - Workspace ID
  * @param {string} memberId - Member ID
  * @param {} body - Workspace
  * @example
  * Body Example:
  * {
   "name": "",
   "workspace": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "memberType": "",
   "member": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "user": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "group": {
      "name": "",
      "description": "",
      "type": "",
      "images": [],
      "addresses": [],
      "rulesVisible": true,
      "visibility": ""
   },
   "securityProfile": {
      "name": "",
      "permissions": []
   }
}
  */
ContentManagementApi.prototype.putWorkspacesWorkspaceIdMembersMemberId = function putWorkspacesWorkspaceIdMembersMemberId(workspaceId, memberId, body){
    var requestPath = '/api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}';
    var requestQuery = {};
    var requestBody;

    if(workspaceId === undefined || workspaceId === null){
      throw new Error('Missing required  parameter: workspaceId');
    }
    requestPath = requestPath.replace('{workspaceId}', workspaceId);
    if(memberId === undefined || memberId === null){
      throw new Error('Missing required  parameter: memberId');
    }
    requestPath = requestPath.replace('{memberId}', memberId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a member from a workspace
  * @memberOf ContentManagementApi#
  * @param {string} workspaceId - Workspace ID
  * @param {string} memberId - Member ID
  */
ContentManagementApi.prototype.deleteWorkspacesWorkspaceIdMembersMemberId = function deleteWorkspacesWorkspaceIdMembersMemberId(workspaceId, memberId){
    var requestPath = '/api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}';
    var requestQuery = {};
    var requestBody;

    if(workspaceId === undefined || workspaceId === null){
      throw new Error('Missing required  parameter: workspaceId');
    }
    requestPath = requestPath.replace('{workspaceId}', workspaceId);
    if(memberId === undefined || memberId === null){
      throw new Error('Missing required  parameter: memberId');
    }
    requestPath = requestPath.replace('{memberId}', memberId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list of workspace tags
  * @memberOf ContentManagementApi#
  * @param {string} workspaceId - Workspace ID
  * @param {string} value - filter the list of tags returned
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} expand - Expand some document fields
  acl,
  */
ContentManagementApi.prototype.getWorkspacesWorkspaceIdTagvalues = function getWorkspacesWorkspaceIdTagvalues(workspaceId, value, pageSize, pageNumber, expand){
    var requestPath = '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues';
    var requestQuery = {};
    var requestBody;

    if(workspaceId === undefined || workspaceId === null){
      throw new Error('Missing required  parameter: workspaceId');
    }
    requestPath = requestPath.replace('{workspaceId}', workspaceId);
    requestQuery.value = value;
    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a workspace tag
  * @memberOf ContentManagementApi#
  * @param {string} workspaceId - Workspace ID
  * @param {} body - tag
  * @example
  * Body Example:
  * {
   "name": "",
   "inUse": true,
   "acl": []
}
  */
ContentManagementApi.prototype.postWorkspacesWorkspaceIdTagvalues = function postWorkspacesWorkspaceIdTagvalues(workspaceId, body){
    var requestPath = '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues';
    var requestQuery = {};
    var requestBody;

    if(workspaceId === undefined || workspaceId === null){
      throw new Error('Missing required  parameter: workspaceId');
    }
    requestPath = requestPath.replace('{workspaceId}', workspaceId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Perform a prefix query on tags in the workspace
  * @memberOf ContentManagementApi#
  * @param {string} workspaceId - Workspace ID
  * @param {} body - query
  * @param {string} expand - Expand some document fields
  acl,
  * @example
  * Body Example:
  * {
   "query": "",
   "pageNumber": 0,
   "pageSize": 0
}
  */
ContentManagementApi.prototype.postWorkspacesWorkspaceIdTagvaluesQuery = function postWorkspacesWorkspaceIdTagvaluesQuery(workspaceId, body, expand){
    var requestPath = '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/query';
    var requestQuery = {};
    var requestBody;

    if(workspaceId === undefined || workspaceId === null){
      throw new Error('Missing required  parameter: workspaceId');
    }
    requestPath = requestPath.replace('{workspaceId}', workspaceId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery.expand = expand;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a workspace tag
  * @memberOf ContentManagementApi#
  * @param {string} workspaceId - Workspace ID
  * @param {string} tagId - Tag ID
  * @param {string} expand - Expand some document fields
  acl,
  */
ContentManagementApi.prototype.getWorkspacesWorkspaceIdTagvaluesTagId = function getWorkspacesWorkspaceIdTagvaluesTagId(workspaceId, tagId, expand){
    var requestPath = '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}';
    var requestQuery = {};
    var requestBody;

    if(workspaceId === undefined || workspaceId === null){
      throw new Error('Missing required  parameter: workspaceId');
    }
    requestPath = requestPath.replace('{workspaceId}', workspaceId);
    if(tagId === undefined || tagId === null){
      throw new Error('Missing required  parameter: tagId');
    }
    requestPath = requestPath.replace('{tagId}', tagId);
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a workspace tag. Will update all documents with the new tag value.
  * @memberOf ContentManagementApi#
  * @param {string} workspaceId - Workspace ID
  * @param {string} tagId - Tag ID
  * @param {} body - Workspace
  * @example
  * Body Example:
  * {
   "name": "",
   "inUse": true,
   "acl": []
}
  */
ContentManagementApi.prototype.putWorkspacesWorkspaceIdTagvaluesTagId = function putWorkspacesWorkspaceIdTagvaluesTagId(workspaceId, tagId, body){
    var requestPath = '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}';
    var requestQuery = {};
    var requestBody;

    if(workspaceId === undefined || workspaceId === null){
      throw new Error('Missing required  parameter: workspaceId');
    }
    requestPath = requestPath.replace('{workspaceId}', workspaceId);
    if(tagId === undefined || tagId === null){
      throw new Error('Missing required  parameter: tagId');
    }
    requestPath = requestPath.replace('{tagId}', tagId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete workspace tag
  * @description Delete a tag from a workspace. Will remove this tag from all documents.
  * @memberOf ContentManagementApi#
  * @param {string} workspaceId - Workspace ID
  * @param {string} tagId - Tag ID
  */
ContentManagementApi.prototype.deleteWorkspacesWorkspaceIdTagvaluesTagId = function deleteWorkspacesWorkspaceIdTagvaluesTagId(workspaceId, tagId){
    var requestPath = '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}';
    var requestQuery = {};
    var requestBody;

    if(workspaceId === undefined || workspaceId === null){
      throw new Error('Missing required  parameter: workspaceId');
    }
    requestPath = requestPath.replace('{workspaceId}', workspaceId);
    if(tagId === undefined || tagId === null){
      throw new Error('Missing required  parameter: tagId');
    }
    requestPath = requestPath.replace('{tagId}', tagId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};



/**
* @class
* @example
* var api = new ConversationsApi(pureCloudSession);
*/
function ConversationsApi(session) {
    if(!(this instanceof ConversationsApi)) {
        return new ConversationsApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('ConversationsApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Query for conversation aggregates
  * @memberOf ConversationsApi#
  * @param {} body - query
  * @example
  * Body Example:
  * {
   "interval": "",
   "granularity": "",
   "groupBy": [],
   "filter": {
      "type": "",
      "clauses": [],
      "predicates": []
   },
   "metrics": [],
   "flattenMultivaluedDimensions": true
}
  */
ConversationsApi.prototype.postConversationsAggregatesQuery = function postConversationsAggregatesQuery(body){
    var requestPath = '/api/v2/analytics/conversations/aggregates/query';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query for conversation details
  * @memberOf ConversationsApi#
  * @param {} body - query
  * @example
  * Body Example:
  * {
   "interval": "",
   "conversationFilters": [],
   "evaluationFilters": [],
   "segmentFilters": [],
   "aggregations": [],
   "paging": {
      "pageSize": 0,
      "pageNumber": 0
   },
   "order": "",
   "orderBy": ""
}
  */
ConversationsApi.prototype.postConversationsDetailsQuery = function postConversationsDetailsQuery(body){
    var requestPath = '/api/v2/analytics/conversations/details/query';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a conversation by id
  * @memberOf ConversationsApi#
  * @param {string} conversationId - conversationId
  */
ConversationsApi.prototype.getConversationsConversationIdDetails = function getConversationsConversationIdDetails(conversationId){
    var requestPath = '/api/v2/analytics/conversations/{conversationId}/details';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Index conversation properties
  * @memberOf ConversationsApi#
  * @param {string} conversationId - conversationId
  * @param {} body - request
  * @example
  * Body Example:
  * {
   "sessionId": "",
   "timestamp": 0,
   "properties": []
}
  */
ConversationsApi.prototype.postConversationsConversationIdDetailsProperties = function postConversationsConversationIdDetailsProperties(conversationId, body){
    var requestPath = '/api/v2/analytics/conversations/{conversationId}/details/properties';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get conversations
  * @memberOf ConversationsApi#
  * @param {string} communicationType - Call or Chat communication filtering
  */
ConversationsApi.prototype.getConversations = function getConversations(communicationType){
    var requestPath = '/api/v2/conversations';
    var requestQuery = {};
    var requestBody;

    requestQuery.communicationType = communicationType;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get callback conversations
  * @memberOf ConversationsApi#
  */
ConversationsApi.prototype.getCallbacks = function getCallbacks(){
    var requestPath = '/api/v2/conversations/callbacks';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a Callback
  * @memberOf ConversationsApi#
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "scriptId": "",
   "queueId": "",
   "routingData": {
      "queueId": "",
      "languageId": "",
      "priority": 0,
      "skillIds": [],
      "preferredAgentIds": []
   },
   "callbackUserName": "",
   "callbackNumbers": [],
   "callbackScheduledTime": "",
   "countryCode": "",
   "skipEnabled": true,
   "data": {}
}
  */
ConversationsApi.prototype.postCallbacks = function postCallbacks(body){
    var requestPath = '/api/v2/conversations/callbacks';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get callback conversation
  * @memberOf ConversationsApi#
  * @param {string} callbackId - 
  */
ConversationsApi.prototype.getCallbacksCallbackId = function getCallbacksCallbackId(callbackId){
    var requestPath = '/api/v2/conversations/callbacks/{callbackId}';
    var requestQuery = {};
    var requestBody;

    if(callbackId === undefined || callbackId === null){
      throw new Error('Missing required  parameter: callbackId');
    }
    requestPath = requestPath.replace('{callbackId}', callbackId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update conversation participant
  * @memberOf ConversationsApi#
  * @param {string} callbackId - 
  * @param {string} participantId - 
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "wrapup": {
      "code": "",
      "name": "",
      "notes": "",
      "tags": [],
      "durationSeconds": 0,
      "endTime": "",
      "provisional": true
   },
   "state": "",
   "recording": true,
   "muted": true,
   "confined": true,
   "held": true,
   "wrapupSkipped": true
}
  */
ConversationsApi.prototype.patchCallbacksCallbackIdParticipantsParticipantId = function patchCallbacksCallbackIdParticipantsParticipantId(callbackId, participantId, body){
    var requestPath = '/api/v2/conversations/callbacks/{callbackId}/participants/{participantId}';
    var requestQuery = {};
    var requestBody;

    if(callbackId === undefined || callbackId === null){
      throw new Error('Missing required  parameter: callbackId');
    }
    requestPath = requestPath.replace('{callbackId}', callbackId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update the attributes on a conversation participant.
  * @memberOf ConversationsApi#
  * @param {string} callbackId - 
  * @param {string} participantId - 
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "attributes": {}
}
  */
ConversationsApi.prototype.patchCallbacksCallbackIdParticipantsParticipantIdAttributes = function patchCallbacksCallbackIdParticipantsParticipantIdAttributes(callbackId, participantId, body){
    var requestPath = '/api/v2/conversations/callbacks/{callbackId}/participants/{participantId}/attributes';
    var requestQuery = {};
    var requestBody;

    if(callbackId === undefined || callbackId === null){
      throw new Error('Missing required  parameter: callbackId');
    }
    requestPath = requestPath.replace('{callbackId}', callbackId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Replace this participant with the specified user and/or address
  * @memberOf ConversationsApi#
  * @param {string} callbackId - 
  * @param {string} participantId - 
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "userId": "",
   "address": "",
   "userName": "",
   "queueId": "",
   "voicemail": true
}
  */
ConversationsApi.prototype.postCallbacksCallbackIdParticipantsParticipantIdReplace = function postCallbacksCallbackIdParticipantsParticipantIdReplace(callbackId, participantId, body){
    var requestPath = '/api/v2/conversations/callbacks/{callbackId}/participants/{participantId}/replace';
    var requestQuery = {};
    var requestBody;

    if(callbackId === undefined || callbackId === null){
      throw new Error('Missing required  parameter: callbackId');
    }
    requestPath = requestPath.replace('{callbackId}', callbackId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the wrap-up for this conversation participant. 
  * @memberOf ConversationsApi#
  * @param {string} callbackId - 
  * @param {string} participantId - 
  * @param {boolean} provisional - Indicates if the wrap-up code is provisional.
  */
ConversationsApi.prototype.getCallbacksCallbackIdParticipantsParticipantIdWrapup = function getCallbacksCallbackIdParticipantsParticipantIdWrapup(callbackId, participantId, provisional){
    var requestPath = '/api/v2/conversations/callbacks/{callbackId}/participants/{participantId}/wrapup';
    var requestQuery = {};
    var requestBody;

    if(callbackId === undefined || callbackId === null){
      throw new Error('Missing required  parameter: callbackId');
    }
    requestPath = requestPath.replace('{callbackId}', callbackId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    requestQuery.provisional = provisional;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get list of wrapup codes for this conversation participant
  * @memberOf ConversationsApi#
  * @param {string} callbackId - 
  * @param {string} participantId - 
  */
ConversationsApi.prototype.getCallbacksCallbackIdParticipantsParticipantIdWrapupcodes = function getCallbacksCallbackIdParticipantsParticipantIdWrapupcodes(callbackId, participantId){
    var requestPath = '/api/v2/conversations/callbacks/{callbackId}/participants/{participantId}/wrapupcodes';
    var requestQuery = {};
    var requestBody;

    if(callbackId === undefined || callbackId === null){
      throw new Error('Missing required  parameter: callbackId');
    }
    requestPath = requestPath.replace('{callbackId}', callbackId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get recent conversations
  * @memberOf ConversationsApi#
  */
ConversationsApi.prototype.getCalls = function getCalls(){
    var requestPath = '/api/v2/conversations/calls';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a call conversation
  * @memberOf ConversationsApi#
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "phoneNumber": "",
   "callFromQueueId": "",
   "callQueueId": "",
   "callUserId": "",
   "priority": 0,
   "languageId": "",
   "routingSkillsIds": [],
   "conversationIds": [],
   "participants": []
}
  */
ConversationsApi.prototype.postCalls = function postCalls(body){
    var requestPath = '/api/v2/conversations/calls';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get call history
  * @memberOf ConversationsApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} interval - Interval string; format is ISO-8601. Separate start and end times with forward slash '/'
  */
ConversationsApi.prototype.getCallsHistory = function getCallsHistory(pageSize, pageNumber, interval){
    var requestPath = '/api/v2/conversations/calls/history';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.interval = interval;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the maximum number of participants that this user can have on a conference
  * @memberOf ConversationsApi#
  */
ConversationsApi.prototype.getCallsMaximumconferenceparties = function getCallsMaximumconferenceparties(){
    var requestPath = '/api/v2/conversations/calls/maximumconferenceparties';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get call conversation
  * @memberOf ConversationsApi#
  * @param {string} callId - 
  */
ConversationsApi.prototype.getCallsCallId = function getCallsCallId(callId){
    var requestPath = '/api/v2/conversations/calls/{callId}';
    var requestQuery = {};
    var requestBody;

    if(callId === undefined || callId === null){
      throw new Error('Missing required  parameter: callId');
    }
    requestPath = requestPath.replace('{callId}', callId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Add a new call to a conversation
  * @memberOf ConversationsApi#
  * @param {string} callId - 
  * @param {} body - Conversation
  * @example
  * Body Example:
  * {
   "callNumber": ""
}
  */
ConversationsApi.prototype.postCallsCallId = function postCallsCallId(callId, body){
    var requestPath = '/api/v2/conversations/calls/{callId}';
    var requestQuery = {};
    var requestBody;

    if(callId === undefined || callId === null){
      throw new Error('Missing required  parameter: callId');
    }
    requestPath = requestPath.replace('{callId}', callId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update conversation
  * @memberOf ConversationsApi#
  * @param {string} callId - 
  * @param {} body - Conversation
  * @example
  * Body Example:
  * {
   "name": "",
   "startTime": "",
   "endTime": "",
   "address": "",
   "participants": [],
   "conversationIds": [],
   "maxParticipants": 0,
   "recordingState": ""
}
  */
ConversationsApi.prototype.patchCallsCallId = function patchCallsCallId(callId, body){
    var requestPath = '/api/v2/conversations/calls/{callId}';
    var requestQuery = {};
    var requestBody;

    if(callId === undefined || callId === null){
      throw new Error('Missing required  parameter: callId');
    }
    requestPath = requestPath.replace('{callId}', callId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Add participants to a conversation
  * @memberOf ConversationsApi#
  * @param {string} callId - 
  * @param {} body - Conversation
  * @example
  * Body Example:
  * {
   "name": "",
   "startTime": "",
   "endTime": "",
   "address": "",
   "participants": [],
   "conversationIds": [],
   "maxParticipants": 0,
   "recordingState": ""
}
  */
ConversationsApi.prototype.postCallsCallIdParticipants = function postCallsCallIdParticipants(callId, body){
    var requestPath = '/api/v2/conversations/calls/{callId}/participants';
    var requestQuery = {};
    var requestBody;

    if(callId === undefined || callId === null){
      throw new Error('Missing required  parameter: callId');
    }
    requestPath = requestPath.replace('{callId}', callId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update conversation participant
  * @memberOf ConversationsApi#
  * @param {string} callId - 
  * @param {string} participantId - 
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "wrapup": {
      "code": "",
      "name": "",
      "notes": "",
      "tags": [],
      "durationSeconds": 0,
      "endTime": "",
      "provisional": true
   },
   "state": "",
   "recording": true,
   "muted": true,
   "confined": true,
   "held": true,
   "wrapupSkipped": true
}
  */
ConversationsApi.prototype.patchCallsCallIdParticipantsParticipantId = function patchCallsCallIdParticipantsParticipantId(callId, participantId, body){
    var requestPath = '/api/v2/conversations/calls/{callId}/participants/{participantId}';
    var requestQuery = {};
    var requestBody;

    if(callId === undefined || callId === null){
      throw new Error('Missing required  parameter: callId');
    }
    requestPath = requestPath.replace('{callId}', callId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update the attributes on a conversation participant.
  * @memberOf ConversationsApi#
  * @param {string} callId - 
  * @param {string} participantId - 
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "attributes": {}
}
  */
ConversationsApi.prototype.patchCallsCallIdParticipantsParticipantIdAttributes = function patchCallsCallIdParticipantsParticipantIdAttributes(callId, participantId, body){
    var requestPath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/attributes';
    var requestQuery = {};
    var requestBody;

    if(callId === undefined || callId === null){
      throw new Error('Missing required  parameter: callId');
    }
    requestPath = requestPath.replace('{callId}', callId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Initiate and update consult transfer
  * @memberOf ConversationsApi#
  * @param {string} callId - 
  * @param {string} participantId - 
  * @param {} body - Destination address & initial speak to
  * @example
  * Body Example:
  * {
   "speakTo": "",
   "destination": {
      "address": "",
      "name": "",
      "userId": "",
      "queueId": ""
   }
}
  */
ConversationsApi.prototype.postCallsCallIdParticipantsParticipantIdConsult = function postCallsCallIdParticipantsParticipantIdConsult(callId, participantId, body){
    var requestPath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/consult';
    var requestQuery = {};
    var requestBody;

    if(callId === undefined || callId === null){
      throw new Error('Missing required  parameter: callId');
    }
    requestPath = requestPath.replace('{callId}', callId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Cancel the transfer
  * @memberOf ConversationsApi#
  * @param {string} callId - 
  * @param {string} participantId - 
  */
ConversationsApi.prototype.deleteCallsCallIdParticipantsParticipantIdConsult = function deleteCallsCallIdParticipantsParticipantIdConsult(callId, participantId){
    var requestPath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/consult';
    var requestQuery = {};
    var requestBody;

    if(callId === undefined || callId === null){
      throw new Error('Missing required  parameter: callId');
    }
    requestPath = requestPath.replace('{callId}', callId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Change who can speak
  * @memberOf ConversationsApi#
  * @param {string} callId - 
  * @param {string} participantId - 
  * @param {} body - new speak to
  * @example
  * Body Example:
  * {
   "speakTo": ""
}
  */
ConversationsApi.prototype.patchCallsCallIdParticipantsParticipantIdConsult = function patchCallsCallIdParticipantsParticipantIdConsult(callId, participantId, body){
    var requestPath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/consult';
    var requestQuery = {};
    var requestBody;

    if(callId === undefined || callId === null){
      throw new Error('Missing required  parameter: callId');
    }
    requestPath = requestPath.replace('{callId}', callId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Listen in on the conversation from the point of view of a given participant.
  * @memberOf ConversationsApi#
  * @param {string} callId - 
  * @param {string} participantId - 
  */
ConversationsApi.prototype.postCallsCallIdParticipantsParticipantIdMonitor = function postCallsCallIdParticipantsParticipantIdMonitor(callId, participantId){
    var requestPath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/monitor';
    var requestQuery = {};
    var requestBody;

    if(callId === undefined || callId === null){
      throw new Error('Missing required  parameter: callId');
    }
    requestPath = requestPath.replace('{callId}', callId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Replace this participant with the specified user and/or address
  * @memberOf ConversationsApi#
  * @param {string} callId - 
  * @param {string} participantId - 
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "userId": "",
   "address": "",
   "userName": "",
   "queueId": "",
   "voicemail": true
}
  */
ConversationsApi.prototype.postCallsCallIdParticipantsParticipantIdReplace = function postCallsCallIdParticipantsParticipantIdReplace(callId, participantId, body){
    var requestPath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/replace';
    var requestQuery = {};
    var requestBody;

    if(callId === undefined || callId === null){
      throw new Error('Missing required  parameter: callId');
    }
    requestPath = requestPath.replace('{callId}', callId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the wrap-up for this conversation participant. 
  * @memberOf ConversationsApi#
  * @param {string} callId - 
  * @param {string} participantId - 
  * @param {boolean} provisional - Indicates if the wrap-up code is provisional.
  */
ConversationsApi.prototype.getCallsCallIdParticipantsParticipantIdWrapup = function getCallsCallIdParticipantsParticipantIdWrapup(callId, participantId, provisional){
    var requestPath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/wrapup';
    var requestQuery = {};
    var requestBody;

    if(callId === undefined || callId === null){
      throw new Error('Missing required  parameter: callId');
    }
    requestPath = requestPath.replace('{callId}', callId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    requestQuery.provisional = provisional;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get list of wrapup codes for this conversation participant
  * @memberOf ConversationsApi#
  * @param {string} callId - 
  * @param {string} participantId - 
  */
ConversationsApi.prototype.getCallsCallIdParticipantsParticipantIdWrapupcodes = function getCallsCallIdParticipantsParticipantIdWrapupcodes(callId, participantId){
    var requestPath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/wrapupcodes';
    var requestQuery = {};
    var requestBody;

    if(callId === undefined || callId === null){
      throw new Error('Missing required  parameter: callId');
    }
    requestPath = requestPath.replace('{callId}', callId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get recent chat conversations
  * @memberOf ConversationsApi#
  */
ConversationsApi.prototype.getChats = function getChats(){
    var requestPath = '/api/v2/conversations/chats';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get chat conversation
  * @memberOf ConversationsApi#
  * @param {string} chatId - 
  */
ConversationsApi.prototype.getChatsChatId = function getChatsChatId(chatId){
    var requestPath = '/api/v2/conversations/chats/{chatId}';
    var requestQuery = {};
    var requestBody;

    if(chatId === undefined || chatId === null){
      throw new Error('Missing required  parameter: chatId');
    }
    requestPath = requestPath.replace('{chatId}', chatId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update conversation participant
  * @memberOf ConversationsApi#
  * @param {string} chatId - 
  * @param {string} participantId - 
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "wrapup": {
      "code": "",
      "name": "",
      "notes": "",
      "tags": [],
      "durationSeconds": 0,
      "endTime": "",
      "provisional": true
   },
   "state": "",
   "recording": true,
   "muted": true,
   "confined": true,
   "held": true,
   "wrapupSkipped": true
}
  */
ConversationsApi.prototype.patchChatsChatIdParticipantsParticipantId = function patchChatsChatIdParticipantsParticipantId(chatId, participantId, body){
    var requestPath = '/api/v2/conversations/chats/{chatId}/participants/{participantId}';
    var requestQuery = {};
    var requestBody;

    if(chatId === undefined || chatId === null){
      throw new Error('Missing required  parameter: chatId');
    }
    requestPath = requestPath.replace('{chatId}', chatId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update the attributes on a conversation participant.
  * @memberOf ConversationsApi#
  * @param {string} chatId - 
  * @param {string} participantId - 
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "attributes": {}
}
  */
ConversationsApi.prototype.patchChatsChatIdParticipantsParticipantIdAttributes = function patchChatsChatIdParticipantsParticipantIdAttributes(chatId, participantId, body){
    var requestPath = '/api/v2/conversations/chats/{chatId}/participants/{participantId}/attributes';
    var requestQuery = {};
    var requestBody;

    if(chatId === undefined || chatId === null){
      throw new Error('Missing required  parameter: chatId');
    }
    requestPath = requestPath.replace('{chatId}', chatId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Replace this participant with the specified user and/or address
  * @memberOf ConversationsApi#
  * @param {string} chatId - 
  * @param {string} participantId - 
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "userId": "",
   "address": "",
   "userName": "",
   "queueId": "",
   "voicemail": true
}
  */
ConversationsApi.prototype.postChatsChatIdParticipantsParticipantIdReplace = function postChatsChatIdParticipantsParticipantIdReplace(chatId, participantId, body){
    var requestPath = '/api/v2/conversations/chats/{chatId}/participants/{participantId}/replace';
    var requestQuery = {};
    var requestBody;

    if(chatId === undefined || chatId === null){
      throw new Error('Missing required  parameter: chatId');
    }
    requestPath = requestPath.replace('{chatId}', chatId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the wrap-up for this conversation participant. 
  * @memberOf ConversationsApi#
  * @param {string} chatId - 
  * @param {string} participantId - 
  * @param {boolean} provisional - Indicates if the wrap-up code is provisional.
  */
ConversationsApi.prototype.getChatsChatIdParticipantsParticipantIdWrapup = function getChatsChatIdParticipantsParticipantIdWrapup(chatId, participantId, provisional){
    var requestPath = '/api/v2/conversations/chats/{chatId}/participants/{participantId}/wrapup';
    var requestQuery = {};
    var requestBody;

    if(chatId === undefined || chatId === null){
      throw new Error('Missing required  parameter: chatId');
    }
    requestPath = requestPath.replace('{chatId}', chatId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    requestQuery.provisional = provisional;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get list of wrapup codes for this conversation participant
  * @memberOf ConversationsApi#
  * @param {string} chatId - 
  * @param {string} participantId - 
  */
ConversationsApi.prototype.getChatsChatIdParticipantsParticipantIdWrapupcodes = function getChatsChatIdParticipantsParticipantIdWrapupcodes(chatId, participantId){
    var requestPath = '/api/v2/conversations/chats/{chatId}/participants/{participantId}/wrapupcodes';
    var requestQuery = {};
    var requestBody;

    if(chatId === undefined || chatId === null){
      throw new Error('Missing required  parameter: chatId');
    }
    requestPath = requestPath.replace('{chatId}', chatId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get recent email conversations
  * @memberOf ConversationsApi#
  */
ConversationsApi.prototype.getEmails = function getEmails(){
    var requestPath = '/api/v2/conversations/emails';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get email conversation
  * @memberOf ConversationsApi#
  * @param {string} emailId - 
  */
ConversationsApi.prototype.getEmailsEmailId = function getEmailsEmailId(emailId){
    var requestPath = '/api/v2/conversations/emails/{emailId}';
    var requestQuery = {};
    var requestBody;

    if(emailId === undefined || emailId === null){
      throw new Error('Missing required  parameter: emailId');
    }
    requestPath = requestPath.replace('{emailId}', emailId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get conversation messages
  * @memberOf ConversationsApi#
  * @param {string} emailId - 
  */
ConversationsApi.prototype.getEmailsEmailIdMessages = function getEmailsEmailIdMessages(emailId){
    var requestPath = '/api/v2/conversations/emails/{emailId}/messages';
    var requestQuery = {};
    var requestBody;

    if(emailId === undefined || emailId === null){
      throw new Error('Missing required  parameter: emailId');
    }
    requestPath = requestPath.replace('{emailId}', emailId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Send an email reply
  * @memberOf ConversationsApi#
  * @param {string} emailId - 
  * @param {} body - Reply
  * @example
  * Body Example:
  * {
   "name": "",
   "to": [],
   "cc": [],
   "bcc": [],
   "from": {
      "email": "",
      "name": ""
   },
   "subject": "",
   "attachments": [],
   "textBody": "",
   "htmlBody": "",
   "time": ""
}
  */
ConversationsApi.prototype.postEmailsEmailIdMessages = function postEmailsEmailIdMessages(emailId, body){
    var requestPath = '/api/v2/conversations/emails/{emailId}/messages';
    var requestQuery = {};
    var requestBody;

    if(emailId === undefined || emailId === null){
      throw new Error('Missing required  parameter: emailId');
    }
    requestPath = requestPath.replace('{emailId}', emailId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get conversation draft reply
  * @memberOf ConversationsApi#
  * @param {string} emailId - 
  */
ConversationsApi.prototype.getEmailsEmailIdMessagesDraft = function getEmailsEmailIdMessagesDraft(emailId){
    var requestPath = '/api/v2/conversations/emails/{emailId}/messages/draft';
    var requestQuery = {};
    var requestBody;

    if(emailId === undefined || emailId === null){
      throw new Error('Missing required  parameter: emailId');
    }
    requestPath = requestPath.replace('{emailId}', emailId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update conversation draft reply
  * @memberOf ConversationsApi#
  * @param {string} emailId - 
  * @param {} body - Draft
  * @example
  * Body Example:
  * {
   "name": "",
   "to": [],
   "cc": [],
   "bcc": [],
   "from": {
      "email": "",
      "name": ""
   },
   "subject": "",
   "attachments": [],
   "textBody": "",
   "htmlBody": "",
   "time": ""
}
  */
ConversationsApi.prototype.putEmailsEmailIdMessagesDraft = function putEmailsEmailIdMessagesDraft(emailId, body){
    var requestPath = '/api/v2/conversations/emails/{emailId}/messages/draft';
    var requestQuery = {};
    var requestBody;

    if(emailId === undefined || emailId === null){
      throw new Error('Missing required  parameter: emailId');
    }
    requestPath = requestPath.replace('{emailId}', emailId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete attachment from draft
  * @memberOf ConversationsApi#
  * @param {string} emailId - 
  * @param {string} attachmentId - 
  */
ConversationsApi.prototype.deleteEmailsEmailIdMessagesDraftAttachmentsAttachmentId = function deleteEmailsEmailIdMessagesDraftAttachmentsAttachmentId(emailId, attachmentId){
    var requestPath = '/api/v2/conversations/emails/{emailId}/messages/draft/attachments/{attachmentId}';
    var requestQuery = {};
    var requestBody;

    if(emailId === undefined || emailId === null){
      throw new Error('Missing required  parameter: emailId');
    }
    requestPath = requestPath.replace('{emailId}', emailId);
    if(attachmentId === undefined || attachmentId === null){
      throw new Error('Missing required  parameter: attachmentId');
    }
    requestPath = requestPath.replace('{attachmentId}', attachmentId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get conversation message
  * @memberOf ConversationsApi#
  * @param {string} emailId - 
  * @param {string} messageId - 
  */
ConversationsApi.prototype.getEmailsEmailIdMessagesMessageId = function getEmailsEmailIdMessagesMessageId(emailId, messageId){
    var requestPath = '/api/v2/conversations/emails/{emailId}/messages/{messageId}';
    var requestQuery = {};
    var requestBody;

    if(emailId === undefined || emailId === null){
      throw new Error('Missing required  parameter: emailId');
    }
    requestPath = requestPath.replace('{emailId}', emailId);
    if(messageId === undefined || messageId === null){
      throw new Error('Missing required  parameter: messageId');
    }
    requestPath = requestPath.replace('{messageId}', messageId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update conversation participant
  * @memberOf ConversationsApi#
  * @param {string} emailId - 
  * @param {string} participantId - 
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "wrapup": {
      "code": "",
      "name": "",
      "notes": "",
      "tags": [],
      "durationSeconds": 0,
      "endTime": "",
      "provisional": true
   },
   "state": "",
   "recording": true,
   "muted": true,
   "confined": true,
   "held": true,
   "wrapupSkipped": true
}
  */
ConversationsApi.prototype.patchEmailsEmailIdParticipantsParticipantId = function patchEmailsEmailIdParticipantsParticipantId(emailId, participantId, body){
    var requestPath = '/api/v2/conversations/emails/{emailId}/participants/{participantId}';
    var requestQuery = {};
    var requestBody;

    if(emailId === undefined || emailId === null){
      throw new Error('Missing required  parameter: emailId');
    }
    requestPath = requestPath.replace('{emailId}', emailId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update the attributes on a conversation participant.
  * @memberOf ConversationsApi#
  * @param {string} emailId - 
  * @param {string} participantId - 
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "attributes": {}
}
  */
ConversationsApi.prototype.patchEmailsEmailIdParticipantsParticipantIdAttributes = function patchEmailsEmailIdParticipantsParticipantIdAttributes(emailId, participantId, body){
    var requestPath = '/api/v2/conversations/emails/{emailId}/participants/{participantId}/attributes';
    var requestQuery = {};
    var requestBody;

    if(emailId === undefined || emailId === null){
      throw new Error('Missing required  parameter: emailId');
    }
    requestPath = requestPath.replace('{emailId}', emailId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Replace this participant with the specified user and/or address
  * @memberOf ConversationsApi#
  * @param {string} emailId - 
  * @param {string} participantId - 
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "userId": "",
   "address": "",
   "userName": "",
   "queueId": "",
   "voicemail": true
}
  */
ConversationsApi.prototype.postEmailsEmailIdParticipantsParticipantIdReplace = function postEmailsEmailIdParticipantsParticipantIdReplace(emailId, participantId, body){
    var requestPath = '/api/v2/conversations/emails/{emailId}/participants/{participantId}/replace';
    var requestQuery = {};
    var requestBody;

    if(emailId === undefined || emailId === null){
      throw new Error('Missing required  parameter: emailId');
    }
    requestPath = requestPath.replace('{emailId}', emailId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the wrap-up for this conversation participant. 
  * @memberOf ConversationsApi#
  * @param {string} emailId - 
  * @param {string} participantId - 
  * @param {boolean} provisional - Indicates if the wrap-up code is provisional.
  */
ConversationsApi.prototype.getEmailsEmailIdParticipantsParticipantIdWrapup = function getEmailsEmailIdParticipantsParticipantIdWrapup(emailId, participantId, provisional){
    var requestPath = '/api/v2/conversations/emails/{emailId}/participants/{participantId}/wrapup';
    var requestQuery = {};
    var requestBody;

    if(emailId === undefined || emailId === null){
      throw new Error('Missing required  parameter: emailId');
    }
    requestPath = requestPath.replace('{emailId}', emailId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    requestQuery.provisional = provisional;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get list of wrapup codes for this conversation participant
  * @memberOf ConversationsApi#
  * @param {string} emailId - 
  * @param {string} participantId - 
  */
ConversationsApi.prototype.getEmailsEmailIdParticipantsParticipantIdWrapupcodes = function getEmailsEmailIdParticipantsParticipantIdWrapupcodes(emailId, participantId){
    var requestPath = '/api/v2/conversations/emails/{emailId}/participants/{participantId}/wrapupcodes';
    var requestQuery = {};
    var requestBody;

    if(emailId === undefined || emailId === null){
      throw new Error('Missing required  parameter: emailId');
    }
    requestPath = requestPath.replace('{emailId}', emailId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create Fax Conversation
  * @memberOf ConversationsApi#
  * @param {} body - Fax
  * @example
  * Body Example:
  * {
   "name": "",
   "addresses": [],
   "documentId": "",
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
      "acl": [],
      "description": ""
   },
   "coverSheet": {
      "notes": "",
      "locale": ""
   }
}
  */
ConversationsApi.prototype.postFaxes = function postFaxes(body){
    var requestPath = '/api/v2/conversations/faxes';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get conversation
  * @memberOf ConversationsApi#
  * @param {string} conversationId - conversation ID
  */
ConversationsApi.prototype.getConversationId = function getConversationId(conversationId){
    var requestPath = '/api/v2/conversations/{conversationId}';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a participant.
  * @description Update conversation participant.
  * @memberOf ConversationsApi#
  * @param {string} conversationId - conversation ID
  * @param {string} participantId - participant ID
  * @param {} body - Update conversation participant.
  * @example
  * Body Example:
  * {
   "wrapup": {
      "code": "",
      "name": "",
      "notes": "",
      "tags": [],
      "durationSeconds": 0,
      "endTime": "",
      "provisional": true
   },
   "state": "",
   "recording": true,
   "muted": true,
   "confined": true,
   "held": true,
   "wrapupSkipped": true
}
  */
ConversationsApi.prototype.patchConversationIdParticipantsParticipantId = function patchConversationIdParticipantsParticipantId(conversationId, participantId, body){
    var requestPath = '/api/v2/conversations/{conversationId}/participants/{participantId}';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update the attributes on a conversation participant.
  * @memberOf ConversationsApi#
  * @param {string} conversationId - conversation ID
  * @param {string} participantId - participant ID
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "attributes": {}
}
  */
ConversationsApi.prototype.patchConversationIdParticipantsParticipantIdAttributes = function patchConversationIdParticipantsParticipantIdAttributes(conversationId, participantId, body){
    var requestPath = '/api/v2/conversations/{conversationId}/participants/{participantId}/attributes';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a new callback for the specified participant on the conversation.
  * @memberOf ConversationsApi#
  * @param {string} conversationId - conversation ID
  * @param {string} participantId - participant ID
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "scriptId": "",
   "queueId": "",
   "routingData": {
      "queueId": "",
      "languageId": "",
      "priority": 0,
      "skillIds": [],
      "preferredAgentIds": []
   },
   "callbackUserName": "",
   "callbackNumbers": [],
   "callbackScheduledTime": "",
   "countryCode": "",
   "skipEnabled": true,
   "data": {}
}
  */
ConversationsApi.prototype.postConversationIdParticipantsParticipantIdCallbacks = function postConversationIdParticipantsParticipantIdCallbacks(conversationId, participantId, body){
    var requestPath = '/api/v2/conversations/{conversationId}/participants/{participantId}/callbacks';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a code used to add a communication to this participant
  * @memberOf ConversationsApi#
  * @param {string} conversationId - conversation ID
  * @param {string} participantId - participant ID
  * @param {string} addCommunicationCode - addCommunicationCode
  */
ConversationsApi.prototype.deleteConversationIdParticipantsParticipantIdCodesAddcommunicationcode = function deleteConversationIdParticipantsParticipantIdCodesAddcommunicationcode(conversationId, participantId, addCommunicationCode){
    var requestPath = '/api/v2/conversations/{conversationId}/participants/{participantId}/codes/{addCommunicationCode}';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(addCommunicationCode === undefined || addCommunicationCode === null){
      throw new Error('Missing required  parameter: addCommunicationCode');
    }
    requestPath = requestPath.replace('{addCommunicationCode}', addCommunicationCode);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Replace this participant with the specified user and/or address
  * @memberOf ConversationsApi#
  * @param {string} conversationId - conversation ID
  * @param {string} participantId - participant ID
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "userId": "",
   "address": "",
   "userName": "",
   "queueId": "",
   "voicemail": true
}
  */
ConversationsApi.prototype.postConversationIdParticipantsParticipantIdReplace = function postConversationIdParticipantsParticipantIdReplace(conversationId, participantId, body){
    var requestPath = '/api/v2/conversations/{conversationId}/participants/{participantId}/replace';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the wrap-up for this conversation participant. 
  * @memberOf ConversationsApi#
  * @param {string} conversationId - conversation ID
  * @param {string} participantId - participant ID
  * @param {boolean} provisional - Indicates if the wrap-up code is provisional.
  */
ConversationsApi.prototype.getConversationIdParticipantsParticipantIdWrapup = function getConversationIdParticipantsParticipantIdWrapup(conversationId, participantId, provisional){
    var requestPath = '/api/v2/conversations/{conversationId}/participants/{participantId}/wrapup';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    requestQuery.provisional = provisional;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get list of wrapup codes for this conversation participant
  * @memberOf ConversationsApi#
  * @param {string} conversationId - conversation ID
  * @param {string} participantId - participant ID
  */
ConversationsApi.prototype.getConversationIdParticipantsParticipantIdWrapupcodes = function getConversationIdParticipantsParticipantIdWrapupcodes(conversationId, participantId){
    var requestPath = '/api/v2/conversations/{conversationId}/participants/{participantId}/wrapupcodes';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(participantId === undefined || participantId === null){
      throw new Error('Missing required  parameter: participantId');
    }
    requestPath = requestPath.replace('{participantId}', participantId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};



/**
* @class
* @example
* var api = new FaxApi(pureCloudSession);
*/
function FaxApi(session) {
    if(!(this instanceof FaxApi)) {
        return new FaxApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('FaxApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get a list of fax documents.
  * @memberOf FaxApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  */
FaxApi.prototype.getDocuments = function getDocuments(pageSize, pageNumber){
    var requestPath = '/api/v2/fax/documents';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a document.
  * @memberOf FaxApi#
  * @param {string} documentId - Document ID
  */
FaxApi.prototype.getDocumentsDocumentId = function getDocumentsDocumentId(documentId){
    var requestPath = '/api/v2/fax/documents/{documentId}';
    var requestQuery = {};
    var requestBody;

    if(documentId === undefined || documentId === null){
      throw new Error('Missing required  parameter: documentId');
    }
    requestPath = requestPath.replace('{documentId}', documentId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a fax document.
  * @memberOf FaxApi#
  * @param {string} documentId - Document ID
  * @param {} body - Document
  * @example
  * Body Example:
  * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "contentUri": "",
   "workspace": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "createdBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "contentType": "",
   "contentLength": 0,
   "filename": "",
   "read": true,
   "pageCount": 0,
   "callerAddress": "",
   "receiverAddress": "",
   "thumbnails": [],
   "sharingUri": "",
   "downloadSharingUri": ""
}
  */
FaxApi.prototype.putDocumentsDocumentId = function putDocumentsDocumentId(documentId, body){
    var requestPath = '/api/v2/fax/documents/{documentId}';
    var requestQuery = {};
    var requestBody;

    if(documentId === undefined || documentId === null){
      throw new Error('Missing required  parameter: documentId');
    }
    requestPath = requestPath.replace('{documentId}', documentId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a fax document.
  * @memberOf FaxApi#
  * @param {string} documentId - Document ID
  */
FaxApi.prototype.deleteDocumentsDocumentId = function deleteDocumentsDocumentId(documentId){
    var requestPath = '/api/v2/fax/documents/{documentId}';
    var requestQuery = {};
    var requestBody;

    if(documentId === undefined || documentId === null){
      throw new Error('Missing required  parameter: documentId');
    }
    requestPath = requestPath.replace('{documentId}', documentId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Download a fax document.
  * @memberOf FaxApi#
  * @param {string} documentId - Document ID
  */
FaxApi.prototype.getDocumentsDocumentIdContent = function getDocumentsDocumentIdContent(documentId){
    var requestPath = '/api/v2/fax/documents/{documentId}/content';
    var requestQuery = {};
    var requestBody;

    if(documentId === undefined || documentId === null){
      throw new Error('Missing required  parameter: documentId');
    }
    requestPath = requestPath.replace('{documentId}', documentId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get fax summary
  * @memberOf FaxApi#
  */
FaxApi.prototype.getSummary = function getSummary(){
    var requestPath = '/api/v2/fax/summary';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};



/**
* @class
* @example
* var api = new GeolocationApi(pureCloudSession);
*/
function GeolocationApi(session) {
    if(!(this instanceof GeolocationApi)) {
        return new GeolocationApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('GeolocationApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get a organization's GeolocationSettings
  * @memberOf GeolocationApi#
  */
GeolocationApi.prototype.getSettings = function getSettings(){
    var requestPath = '/api/v2/geolocations/settings';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Patch a organization's GeolocationSettings
  * @memberOf GeolocationApi#
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "name": "",
   "enabled": true
}
  */
GeolocationApi.prototype.patchSettings = function patchSettings(body){
    var requestPath = '/api/v2/geolocations/settings';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a user's Geolocation
  * @memberOf GeolocationApi#
  * @param {string} userId - user Id
  * @param {string} clientId - client Id
  */
GeolocationApi.prototype.getUserIdGeolocationsClientId = function getUserIdGeolocationsClientId(userId, clientId){
    var requestPath = '/api/v2/users/{userId}/geolocations/{clientId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(clientId === undefined || clientId === null){
      throw new Error('Missing required  parameter: clientId');
    }
    requestPath = requestPath.replace('{clientId}', clientId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Patch a user's Geolocation
  * @description The geolocation object can be patched one of three ways. Option 1: Set the 'primary' property to true. This will set the client as the user's primary geolocation source.  Option 2: Provide the 'latitude' and 'longitude' values.  This will enqueue an asynchronous update of the 'city', 'region', and 'country', generating a notification. A subsequent GET operation will include the new values for 'city', 'region' and 'country'.  Option 3:  Provide the 'city', 'region', 'country' values.  Option 1 can be combined with Option 2 or Option 3.  For example, update the client as primary and provide latitude and longitude values.
  * @memberOf GeolocationApi#
  * @param {string} userId - user Id
  * @param {string} clientId - client Id
  * @param {} body - The geolocation object can be patched one of three ways. Option 1: Set the 'primary' property to true. This will set the client as the user's primary geolocation source.  Option 2: Provide the 'latitude' and 'longitude' values.  This will enqueue an asynchronous update of the 'city', 'region', and 'country', generating a notification. A subsequent GET operation will include the new values for 'city', 'region' and 'country'.  Option 3:  Provide the 'city', 'region', 'country' values.  Option 1 can be combined with Option 2 or Option 3.  For example, update the client as primary and provide latitude and longitude values.
  * @example
  * Body Example:
  * {
   "name": "",
   "type": "",
   "primary": true,
   "latitude": {},
   "longitude": {},
   "country": "",
   "region": "",
   "city": ""
}
  */
GeolocationApi.prototype.patchUserIdGeolocationsClientId = function patchUserIdGeolocationsClientId(userId, clientId, body){
    var requestPath = '/api/v2/users/{userId}/geolocations/{clientId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(clientId === undefined || clientId === null){
      throw new Error('Missing required  parameter: clientId');
    }
    requestPath = requestPath.replace('{clientId}', clientId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};



/**
* @class
* @example
* var api = new GreetingsApi(pureCloudSession);
*/
function GreetingsApi(session) {
    if(!(this instanceof GreetingsApi)) {
        return new GreetingsApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('GreetingsApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Gets an Organization's Greetings
  * @memberOf GreetingsApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  */
GreetingsApi.prototype.getGreetings = function getGreetings(pageSize, pageNumber){
    var requestPath = '/api/v2/greetings';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a Greeting for an Organization
  * @memberOf GreetingsApi#
  * @param {} body - The Greeting to create
  * @example
  * Body Example:
  * {
   "name": "",
   "type": "",
   "ownerType": "",
   "owner": {
      "name": ""
   },
   "audioFile": {
      "durationMilliseconds": 0,
      "sizeBytes": 0,
      "selfUri": ""
   },
   "audioTTS": "",
   "createdDate": "",
   "createdBy": "",
   "modifiedDate": "",
   "modifiedBy": ""
}
  */
GreetingsApi.prototype.postGreetings = function postGreetings(body){
    var requestPath = '/api/v2/greetings';
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
  * @summary Get an Organization's DefaultGreetingList
  * @memberOf GreetingsApi#
  */
GreetingsApi.prototype.getDefaults = function getDefaults(){
    var requestPath = '/api/v2/greetings/defaults';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an Organization's DefaultGreetingList
  * @memberOf GreetingsApi#
  * @param {} body - The updated defaultGreetingList
  * @example
  * Body Example:
  * {
   "name": "",
   "owner": {
      "name": ""
   },
   "ownerType": "",
   "greetings": {},
   "createdDate": "",
   "createdBy": "",
   "modifiedDate": "",
   "modifiedBy": ""
}
  */
GreetingsApi.prototype.putDefaults = function putDefaults(body){
    var requestPath = '/api/v2/greetings/defaults';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a Greeting with the given GreetingId
  * @memberOf GreetingsApi#
  * @param {string} greetingId - Greeting ID
  */
GreetingsApi.prototype.getGreetingId = function getGreetingId(greetingId){
    var requestPath = '/api/v2/greetings/{greetingId}';
    var requestQuery = {};
    var requestBody;

    if(greetingId === undefined || greetingId === null){
      throw new Error('Missing required  parameter: greetingId');
    }
    requestPath = requestPath.replace('{greetingId}', greetingId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Updates the Greeting with the given GreetingId
  * @memberOf GreetingsApi#
  * @param {string} greetingId - Greeting ID
  * @param {} body - The updated Greeting
  * @example
  * Body Example:
  * {
   "name": "",
   "type": "",
   "ownerType": "",
   "owner": {
      "name": ""
   },
   "audioFile": {
      "durationMilliseconds": 0,
      "sizeBytes": 0,
      "selfUri": ""
   },
   "audioTTS": "",
   "createdDate": "",
   "createdBy": "",
   "modifiedDate": "",
   "modifiedBy": ""
}
  */
GreetingsApi.prototype.putGreetingId = function putGreetingId(greetingId, body){
    var requestPath = '/api/v2/greetings/{greetingId}';
    var requestQuery = {};
    var requestBody;

    if(greetingId === undefined || greetingId === null){
      throw new Error('Missing required  parameter: greetingId');
    }
    requestPath = requestPath.replace('{greetingId}', greetingId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Deletes a Greeting with the given GreetingId
  * @memberOf GreetingsApi#
  * @param {string} greetingId - Greeting ID
  */
GreetingsApi.prototype.deleteGreetingId = function deleteGreetingId(greetingId){
    var requestPath = '/api/v2/greetings/{greetingId}';
    var requestQuery = {};
    var requestBody;

    if(greetingId === undefined || greetingId === null){
      throw new Error('Missing required  parameter: greetingId');
    }
    requestPath = requestPath.replace('{greetingId}', greetingId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get media playback URI for this greeting
  * @memberOf GreetingsApi#
  * @param {string} greetingId - Greeting ID
  * @param {string} formatId - The desired media format.
  WAV,
  WEBM,
  WAV_ULAW,
  OGG_VORBIS,
  OGG_OPUS,
  NONE,
  */
GreetingsApi.prototype.getGreetingIdMedia = function getGreetingIdMedia(greetingId, formatId){
    var requestPath = '/api/v2/greetings/{greetingId}/media';
    var requestQuery = {};
    var requestBody;

    if(greetingId === undefined || greetingId === null){
      throw new Error('Missing required  parameter: greetingId');
    }
    requestPath = requestPath.replace('{greetingId}', greetingId);
    requestQuery.formatId = formatId;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list of the User's Greetings
  * @memberOf GreetingsApi#
  * @param {string} userId - User ID
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  */
GreetingsApi.prototype.getUserIdGreetings = function getUserIdGreetings(userId, pageSize, pageNumber){
    var requestPath = '/api/v2/users/{userId}/greetings';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Creates a Greeting for a User
  * @memberOf GreetingsApi#
  * @param {string} userId - User ID
  * @param {} body - The Greeting to create
  * @example
  * Body Example:
  * {
   "name": "",
   "type": "",
   "ownerType": "",
   "owner": {
      "name": ""
   },
   "audioFile": {
      "durationMilliseconds": 0,
      "sizeBytes": 0,
      "selfUri": ""
   },
   "audioTTS": "",
   "createdDate": "",
   "createdBy": "",
   "modifiedDate": "",
   "modifiedBy": ""
}
  */
GreetingsApi.prototype.postUserIdGreetings = function postUserIdGreetings(userId, body){
    var requestPath = '/api/v2/users/{userId}/greetings';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Grabs the list of Default Greetings given a User's ID
  * @memberOf GreetingsApi#
  * @param {string} userId - User ID
  */
GreetingsApi.prototype.getUserIdGreetingsDefaults = function getUserIdGreetingsDefaults(userId){
    var requestPath = '/api/v2/users/{userId}/greetings/defaults';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Updates the DefaultGreetingList of the specified User
  * @memberOf GreetingsApi#
  * @param {string} userId - User ID
  * @param {} body - The updated defaultGreetingList
  * @example
  * Body Example:
  * {
   "name": "",
   "owner": {
      "name": ""
   },
   "ownerType": "",
   "greetings": {},
   "createdDate": "",
   "createdBy": "",
   "modifiedDate": "",
   "modifiedBy": ""
}
  */
GreetingsApi.prototype.putUserIdGreetingsDefaults = function putUserIdGreetingsDefaults(userId, body){
    var requestPath = '/api/v2/users/{userId}/greetings/defaults';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};



/**
* @class
* @example
* var api = new GroupsApi(pureCloudSession);
*/
function GroupsApi(session) {
    if(!(this instanceof GroupsApi)) {
        return new GroupsApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('GroupsApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get a group list
  * @memberOf GroupsApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortOrder - Ascending or descending sort order
  ascending,
  descending,
  */
GroupsApi.prototype.getGroups = function getGroups(pageSize, pageNumber, sortOrder){
    var requestPath = '/api/v2/groups';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortOrder = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a group
  * @memberOf GroupsApi#
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "type": "",
   "images": [],
   "addresses": [],
   "rulesVisible": true,
   "visibility": ""
}
  */
GroupsApi.prototype.postGroups = function postGroups(body){
    var requestPath = '/api/v2/groups';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search using q64
  * @memberOf GroupsApi#
  * @param {string} q64 - 
  * @param {array} expand - 
  */
GroupsApi.prototype.getSearch = function getSearch(q64, expand){
    var requestPath = '/api/v2/groups/search';
    var requestQuery = {};
    var requestBody;

    requestQuery.q64 = q64;
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search
  * @memberOf GroupsApi#
  * @param {} body - Search request options
  * @example
  * Body Example:
  * {
   "sortOrder": "",
   "sortBy": "",
   "pageSize": 0,
   "pageNumber": 0,
   "returnFields": [],
   "expand": [],
   "query": []
}
  */
GroupsApi.prototype.postSearch = function postSearch(body){
    var requestPath = '/api/v2/groups/search';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get group
  * @memberOf GroupsApi#
  * @param {string} groupId - Group ID
  */
GroupsApi.prototype.getGroupId = function getGroupId(groupId){
    var requestPath = '/api/v2/groups/{groupId}';
    var requestQuery = {};
    var requestBody;

    if(groupId === undefined || groupId === null){
      throw new Error('Missing required  parameter: groupId');
    }
    requestPath = requestPath.replace('{groupId}', groupId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get group members
  * @memberOf GroupsApi#
  * @param {string} groupId - Group ID
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortOrder - Ascending or descending sort order
  ascending,
  descending,
  */
GroupsApi.prototype.getGroupIdMembers = function getGroupIdMembers(groupId, pageSize, pageNumber, sortOrder){
    var requestPath = '/api/v2/groups/{groupId}/members';
    var requestQuery = {};
    var requestBody;

    if(groupId === undefined || groupId === null){
      throw new Error('Missing required  parameter: groupId');
    }
    requestPath = requestPath.replace('{groupId}', groupId);
    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortOrder = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Add members
  * @memberOf GroupsApi#
  * @param {string} groupId - Group ID
  * @param {} body - Add members
  * @example
  * Body Example:
  * {
   "memberIds": [],
   "version": 0
}
  */
GroupsApi.prototype.postGroupIdMembers = function postGroupIdMembers(groupId, body){
    var requestPath = '/api/v2/groups/{groupId}/members';
    var requestQuery = {};
    var requestBody;

    if(groupId === undefined || groupId === null){
      throw new Error('Missing required  parameter: groupId');
    }
    requestPath = requestPath.replace('{groupId}', groupId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Remove members
  * @memberOf GroupsApi#
  * @param {string} groupId - Group ID
  * @param {string} ids - Comma separated list of userIds to remove
  */
GroupsApi.prototype.deleteGroupIdMembers = function deleteGroupIdMembers(groupId, ids){
    var requestPath = '/api/v2/groups/{groupId}/members';
    var requestQuery = {};
    var requestBody;

    if(groupId === undefined || groupId === null){
      throw new Error('Missing required  parameter: groupId');
    }
    requestPath = requestPath.replace('{groupId}', groupId);
    if(ids === undefined || ids === null){
      throw new Error('Missing required  parameter: ids');
    }
    requestQuery.ids = ids;
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};



/**
* @class
* @example
* var api = new IdentityProviderApi(pureCloudSession);
*/
function IdentityProviderApi(session) {
    if(!(this instanceof IdentityProviderApi)) {
        return new IdentityProviderApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('IdentityProviderApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary The list of identity providers
  * @memberOf IdentityProviderApi#
  */
IdentityProviderApi.prototype.getIdentityproviders = function getIdentityproviders(){
    var requestPath = '/api/v2/identityproviders';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get ADFS Identity Provider
  * @memberOf IdentityProviderApi#
  */
IdentityProviderApi.prototype.getAdfs = function getAdfs(){
    var requestPath = '/api/v2/identityproviders/adfs';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update/Create ADFS Identity Provider
  * @memberOf IdentityProviderApi#
  * @param {} body - Provider
  * @example
  * Body Example:
  * {
   "name": "",
   "relyingPartyIdentifier": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": "",
   "disabled": true
}
  */
IdentityProviderApi.prototype.putAdfs = function putAdfs(body){
    var requestPath = '/api/v2/identityproviders/adfs';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete ADFS Identity Provider
  * @memberOf IdentityProviderApi#
  */
IdentityProviderApi.prototype.deleteAdfs = function deleteAdfs(){
    var requestPath = '/api/v2/identityproviders/adfs';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get Customer Interaction Center (CIC) Identity Provider
  * @memberOf IdentityProviderApi#
  */
IdentityProviderApi.prototype.getCic = function getCic(){
    var requestPath = '/api/v2/identityproviders/cic';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update/Create Customer Interaction Center (CIC) Identity Provider
  * @memberOf IdentityProviderApi#
  * @param {} body - Provider
  * @example
  * Body Example:
  * {
   "name": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": "",
   "disabled": true
}
  */
IdentityProviderApi.prototype.putCic = function putCic(body){
    var requestPath = '/api/v2/identityproviders/cic';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete Customer Interaction Center (CIC) Identity Provider
  * @memberOf IdentityProviderApi#
  */
IdentityProviderApi.prototype.deleteCic = function deleteCic(){
    var requestPath = '/api/v2/identityproviders/cic';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get Okta Identity Provider
  * @memberOf IdentityProviderApi#
  */
IdentityProviderApi.prototype.getOkta = function getOkta(){
    var requestPath = '/api/v2/identityproviders/okta';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update/Create Okta Identity Provider
  * @memberOf IdentityProviderApi#
  * @param {} body - Provider
  * @example
  * Body Example:
  * {
   "name": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": "",
   "disabled": true
}
  */
IdentityProviderApi.prototype.putOkta = function putOkta(body){
    var requestPath = '/api/v2/identityproviders/okta';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete Okta Identity Provider
  * @memberOf IdentityProviderApi#
  */
IdentityProviderApi.prototype.deleteOkta = function deleteOkta(){
    var requestPath = '/api/v2/identityproviders/okta';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get OneLogin Identity Provider
  * @memberOf IdentityProviderApi#
  */
IdentityProviderApi.prototype.getOnelogin = function getOnelogin(){
    var requestPath = '/api/v2/identityproviders/onelogin';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update/Create OneLogin Identity Provider
  * @memberOf IdentityProviderApi#
  * @param {} body - Provider
  * @example
  * Body Example:
  * {
   "name": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": "",
   "disabled": true
}
  */
IdentityProviderApi.prototype.putOnelogin = function putOnelogin(body){
    var requestPath = '/api/v2/identityproviders/onelogin';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete OneLogin Identity Provider
  * @memberOf IdentityProviderApi#
  */
IdentityProviderApi.prototype.deleteOnelogin = function deleteOnelogin(){
    var requestPath = '/api/v2/identityproviders/onelogin';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get PureCloud Identity Provider
  * @memberOf IdentityProviderApi#
  */
IdentityProviderApi.prototype.getPurecloud = function getPurecloud(){
    var requestPath = '/api/v2/identityproviders/purecloud';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update/Create PureCloud Identity Provider
  * @memberOf IdentityProviderApi#
  * @param {} body - Provider
  * @example
  * Body Example:
  * {
   "name": "",
   "disabled": true
}
  */
IdentityProviderApi.prototype.putPurecloud = function putPurecloud(body){
    var requestPath = '/api/v2/identityproviders/purecloud';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete PureCloud Identity Provider
  * @memberOf IdentityProviderApi#
  */
IdentityProviderApi.prototype.deletePurecloud = function deletePurecloud(){
    var requestPath = '/api/v2/identityproviders/purecloud';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get Salesforce Identity Provider
  * @memberOf IdentityProviderApi#
  */
IdentityProviderApi.prototype.getSalesforce = function getSalesforce(){
    var requestPath = '/api/v2/identityproviders/salesforce';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update/Create Salesforce Identity Provider
  * @memberOf IdentityProviderApi#
  * @param {} body - Provider
  * @example
  * Body Example:
  * {
   "name": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": "",
   "disabled": true
}
  */
IdentityProviderApi.prototype.putSalesforce = function putSalesforce(body){
    var requestPath = '/api/v2/identityproviders/salesforce';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete Salesforce Identity Provider
  * @memberOf IdentityProviderApi#
  */
IdentityProviderApi.prototype.deleteSalesforce = function deleteSalesforce(){
    var requestPath = '/api/v2/identityproviders/salesforce';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get an identity provider
  * @memberOf IdentityProviderApi#
  */
IdentityProviderApi.prototype.getProviderId = function getProviderId(){
    var requestPath = '/api/v2/identityproviders/{providerId}';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an identity provider
  * @memberOf IdentityProviderApi#
  * @param {} body - Provider
  * @example
  * Body Example:
  * {
   "name": "",
   "disabled": true
}
  */
IdentityProviderApi.prototype.putProviderId = function putProviderId(body){
    var requestPath = '/api/v2/identityproviders/{providerId}';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete an identity provider
  * @memberOf IdentityProviderApi#
  */
IdentityProviderApi.prototype.deleteProviderId = function deleteProviderId(){
    var requestPath = '/api/v2/identityproviders/{providerId}';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};



/**
* @class
* @example
* var api = new LanguagesApi(pureCloudSession);
*/
function LanguagesApi(session) {
    if(!(this instanceof LanguagesApi)) {
        return new LanguagesApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('LanguagesApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get the list of supported languages.
  * @memberOf LanguagesApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortOrder - Ascending or descending sort order
  ascending,
  descending,
  */
LanguagesApi.prototype.getLanguages = function getLanguages(pageSize, pageNumber, sortOrder){
    var requestPath = '/api/v2/languages';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortOrder = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create Language
  * @memberOf LanguagesApi#
  * @param {} body - Language
  * @example
  * Body Example:
  * {
   "name": "",
   "dateModified": "",
   "state": "",
   "version": ""
}
  */
LanguagesApi.prototype.postLanguages = function postLanguages(body){
    var requestPath = '/api/v2/languages';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get language
  * @memberOf LanguagesApi#
  * @param {string} languageId - Language ID
  */
LanguagesApi.prototype.getLanguageId = function getLanguageId(languageId){
    var requestPath = '/api/v2/languages/{languageId}';
    var requestQuery = {};
    var requestBody;

    if(languageId === undefined || languageId === null){
      throw new Error('Missing required  parameter: languageId');
    }
    requestPath = requestPath.replace('{languageId}', languageId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update Language
  * @memberOf LanguagesApi#
  * @param {string} languageId - Language ID
  * @param {} body - Language
  * @example
  * Body Example:
  * {
   "name": "",
   "dateModified": "",
   "state": "",
   "version": ""
}
  */
LanguagesApi.prototype.putLanguageId = function putLanguageId(languageId, body){
    var requestPath = '/api/v2/languages/{languageId}';
    var requestQuery = {};
    var requestBody;

    if(languageId === undefined || languageId === null){
      throw new Error('Missing required  parameter: languageId');
    }
    requestPath = requestPath.replace('{languageId}', languageId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete Language
  * @memberOf LanguagesApi#
  * @param {string} languageId - Language ID
  */
LanguagesApi.prototype.deleteLanguageId = function deleteLanguageId(languageId){
    var requestPath = '/api/v2/languages/{languageId}';
    var requestQuery = {};
    var requestBody;

    if(languageId === undefined || languageId === null){
      throw new Error('Missing required  parameter: languageId');
    }
    requestPath = requestPath.replace('{languageId}', languageId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};



/**
* @class
* @example
* var api = new LocationsApi(pureCloudSession);
*/
function LocationsApi(session) {
    if(!(this instanceof LocationsApi)) {
        return new LocationsApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('LocationsApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get a list of all locations.
  * @memberOf LocationsApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortOrder - Sort order
  asc,
  desc,
  */
LocationsApi.prototype.getLocations = function getLocations(pageSize, pageNumber, sortOrder){
    var requestPath = '/api/v2/locations';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortOrder = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search using q64
  * @memberOf LocationsApi#
  * @param {string} q64 - 
  * @param {array} expand - 
  */
LocationsApi.prototype.getSearch = function getSearch(q64, expand){
    var requestPath = '/api/v2/locations/search';
    var requestQuery = {};
    var requestBody;

    requestQuery.q64 = q64;
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search
  * @memberOf LocationsApi#
  * @param {} body - Search request options
  * @example
  * Body Example:
  * {
   "sortOrder": "",
   "sortBy": "",
   "pageSize": 0,
   "pageNumber": 0,
   "returnFields": [],
   "expand": [],
   "query": []
}
  */
LocationsApi.prototype.postSearch = function postSearch(body){
    var requestPath = '/api/v2/locations/search';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get Location by ID.
  * @memberOf LocationsApi#
  * @param {string} locationId - Location ID
  */
LocationsApi.prototype.getLocationId = function getLocationId(locationId){
    var requestPath = '/api/v2/locations/{locationId}';
    var requestQuery = {};
    var requestBody;

    if(locationId === undefined || locationId === null){
      throw new Error('Missing required  parameter: locationId');
    }
    requestPath = requestPath.replace('{locationId}', locationId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};



/**
* @class
* @example
* var api = new NotificationsApi(pureCloudSession);
*/
function NotificationsApi(session) {
    if(!(this instanceof NotificationsApi)) {
        return new NotificationsApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('NotificationsApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get available notification topics.
  * @memberOf NotificationsApi#
  * @param {array} expand - Which fields, if any, to expand
  */
NotificationsApi.prototype.getAvailabletopics = function getAvailabletopics(expand){
    var requestPath = '/api/v2/notifications/availabletopics';
    var requestQuery = {};
    var requestBody;

    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary The list of existing channels
  * @memberOf NotificationsApi#
  */
NotificationsApi.prototype.getChannels = function getChannels(){
    var requestPath = '/api/v2/notifications/channels';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a new channel
  * @description There is a limit of 10 channels. Creating an 11th channel will remove the channel with oldest last used date.
  * @memberOf NotificationsApi#
  */
NotificationsApi.prototype.postChannels = function postChannels(){
    var requestPath = '/api/v2/notifications/channels';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary The list of all subscriptions for this channel
  * @memberOf NotificationsApi#
  * @param {string} channelId - Channel ID
  */
NotificationsApi.prototype.getChannelsChannelIdSubscriptions = function getChannelsChannelIdSubscriptions(channelId){
    var requestPath = '/api/v2/notifications/channels/{channelId}/subscriptions';
    var requestQuery = {};
    var requestBody;

    if(channelId === undefined || channelId === null){
      throw new Error('Missing required  parameter: channelId');
    }
    requestPath = requestPath.replace('{channelId}', channelId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Add a list of subscriptions to the existing list of subscriptions
  * @memberOf NotificationsApi#
  * @param {string} channelId - Channel ID
  * @param {} body - Topic
  * @example
  * Body Example:
  * [
 {
  "id": ""
 }
]
  */
NotificationsApi.prototype.postChannelsChannelIdSubscriptions = function postChannelsChannelIdSubscriptions(channelId, body){
    var requestPath = '/api/v2/notifications/channels/{channelId}/subscriptions';
    var requestQuery = {};
    var requestBody;

    if(channelId === undefined || channelId === null){
      throw new Error('Missing required  parameter: channelId');
    }
    requestPath = requestPath.replace('{channelId}', channelId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Replace the current list of subscriptions with a new list.
  * @memberOf NotificationsApi#
  * @param {string} channelId - Channel ID
  * @param {} body - Topic
  * @example
  * Body Example:
  * [
 {
  "id": ""
 }
]
  */
NotificationsApi.prototype.putChannelsChannelIdSubscriptions = function putChannelsChannelIdSubscriptions(channelId, body){
    var requestPath = '/api/v2/notifications/channels/{channelId}/subscriptions';
    var requestQuery = {};
    var requestBody;

    if(channelId === undefined || channelId === null){
      throw new Error('Missing required  parameter: channelId');
    }
    requestPath = requestPath.replace('{channelId}', channelId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Remove all subscriptions
  * @memberOf NotificationsApi#
  * @param {string} channelId - Channel ID
  */
NotificationsApi.prototype.deleteChannelsChannelIdSubscriptions = function deleteChannelsChannelIdSubscriptions(channelId){
    var requestPath = '/api/v2/notifications/channels/{channelId}/subscriptions';
    var requestQuery = {};
    var requestBody;

    if(channelId === undefined || channelId === null){
      throw new Error('Missing required  parameter: channelId');
    }
    requestPath = requestPath.replace('{channelId}', channelId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};



/**
* @class
* @example
* var api = new OAuthApi(pureCloudSession);
*/
function OAuthApi(session) {
    if(!(this instanceof OAuthApi)) {
        return new OAuthApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('OAuthApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary The list of OAuth clients
  * @memberOf OAuthApi#
  */
OAuthApi.prototype.getClients = function getClients(){
    var requestPath = '/api/v2/oauth/clients';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create OAuth client
  * @description The OAuth Grant/Client is required in order to create an authentication token and gain access to PureCloud. 
The preferred authorizedGrantTypes is 'CODE' which requires applications to send a client ID and client secret. This is typically a web server. 
If the client is unable to secure the client secret then the 'TOKEN' grant type aka IMPLICIT should be used. This is would be for browser or mobile apps. 
If a client is to be used outside of the context of a user then the 'CLIENT-CREDENTIALS' grant may be used. In this case the client must be granted roles 
via the 'roleIds' field.
  * @memberOf OAuthApi#
  * @param {} body - Client
  * @example
  * Body Example:
  * {
   "name": "",
   "accessTokenValiditySeconds": 0,
   "description": "",
   "registeredRedirectUri": [],
   "secret": "",
   "roleIds": [],
   "authorizedGrantType": ""
}
  */
OAuthApi.prototype.postClients = function postClients(body){
    var requestPath = '/api/v2/oauth/clients';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get OAuth Client
  * @memberOf OAuthApi#
  * @param {string} clientId - Client ID
  */
OAuthApi.prototype.getClientsClientId = function getClientsClientId(clientId){
    var requestPath = '/api/v2/oauth/clients/{clientId}';
    var requestQuery = {};
    var requestBody;

    if(clientId === undefined || clientId === null){
      throw new Error('Missing required  parameter: clientId');
    }
    requestPath = requestPath.replace('{clientId}', clientId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update OAuth Client
  * @memberOf OAuthApi#
  * @param {string} clientId - Client ID
  * @param {} body - Client
  * @example
  * Body Example:
  * {
   "name": "",
   "accessTokenValiditySeconds": 0,
   "description": "",
   "registeredRedirectUri": [],
   "secret": "",
   "roleIds": [],
   "authorizedGrantType": ""
}
  */
OAuthApi.prototype.putClientsClientId = function putClientsClientId(clientId, body){
    var requestPath = '/api/v2/oauth/clients/{clientId}';
    var requestQuery = {};
    var requestBody;

    if(clientId === undefined || clientId === null){
      throw new Error('Missing required  parameter: clientId');
    }
    requestPath = requestPath.replace('{clientId}', clientId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete OAuth Client
  * @memberOf OAuthApi#
  * @param {string} clientId - Client ID
  */
OAuthApi.prototype.deleteClientsClientId = function deleteClientsClientId(clientId){
    var requestPath = '/api/v2/oauth/clients/{clientId}';
    var requestQuery = {};
    var requestBody;

    if(clientId === undefined || clientId === null){
      throw new Error('Missing required  parameter: clientId');
    }
    requestPath = requestPath.replace('{clientId}', clientId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Regenerate Client Secret
  * @description This operation will set the client secret to a randomly generated cryptographically random value. All clients must be updated with the new secret. This operation should be used with caution.
  * @memberOf OAuthApi#
  * @param {string} clientId - Client ID
  */
OAuthApi.prototype.postClientsClientIdSecret = function postClientsClientIdSecret(clientId){
    var requestPath = '/api/v2/oauth/clients/{clientId}/secret';
    var requestQuery = {};
    var requestBody;

    if(clientId === undefined || clientId === null){
      throw new Error('Missing required  parameter: clientId');
    }
    requestPath = requestPath.replace('{clientId}', clientId);
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};



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



/**
* @class
* @example
* var api = new OutboundApi(pureCloudSession);
*/
function OutboundApi(session) {
    if(!(this instanceof OutboundApi)) {
        return new OutboundApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('OutboundApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Retrieves audits for dialer.
  * @memberOf OutboundApi#
  * @param {} body - AuditSearch
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortBy - Sort by
  * @param {string} sortOrder - Sort order
  * @param {boolean} facetsOnly - Facets only
  * @example
  * Body Example:
  * {
   "queryPhrase": "",
   "queryFields": [],
   "facets": [],
   "filters": []
}
  */
OutboundApi.prototype.postAudits = function postAudits(body, pageSize, pageNumber, sortBy, sortOrder, facetsOnly){
    var requestPath = '/api/v2/outbound/audits';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.sortOrder = sortOrder;
    requestQuery.facetsOnly = facetsOnly;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query callable time set list
  * @memberOf OutboundApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} filterType - Filter type
  EQUALS,
  REGEX,
  CONTAINS,
  PREFIX,
  LESSTHAN,
  LESSTHANEQUALTO,
  GREATERTHAN,
  GREATERTHANEQUALTO,
  BEGINSWITH,
  ENDSWITH,
  * @param {string} name - Name
  * @param {string} sortBy - Sort by
  * @param {string} sortOrder - Sort order
  ascending,
  descending,
  */
OutboundApi.prototype.getCallabletimesets = function getCallabletimesets(pageSize, pageNumber, filterType, name, sortBy, sortOrder){
    var requestPath = '/api/v2/outbound/callabletimesets';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.filterType = filterType;
    requestQuery.name = name;
    requestQuery.sortBy = sortBy;
    requestQuery.sortOrder = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create callable time set
  * @memberOf OutboundApi#
  * @param {} body - DialerCallableTimeSet
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "callableTimes": []
}
  */
OutboundApi.prototype.postCallabletimesets = function postCallabletimesets(body){
    var requestPath = '/api/v2/outbound/callabletimesets';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get callable time set
  * @memberOf OutboundApi#
  * @param {string} callableTimeSetId - Callable Time Set ID
  */
OutboundApi.prototype.getCallabletimesetsCallabletimesetId = function getCallabletimesetsCallabletimesetId(callableTimeSetId){
    var requestPath = '/api/v2/outbound/callabletimesets/{callableTimeSetId}';
    var requestQuery = {};
    var requestBody;

    if(callableTimeSetId === undefined || callableTimeSetId === null){
      throw new Error('Missing required  parameter: callableTimeSetId');
    }
    requestPath = requestPath.replace('{callableTimeSetId}', callableTimeSetId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update callable time set
  * @memberOf OutboundApi#
  * @param {string} callableTimeSetId - Callable Time Set ID
  * @param {} body - DialerCallableTimeSet
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "callableTimes": []
}
  */
OutboundApi.prototype.putCallabletimesetsCallabletimesetId = function putCallabletimesetsCallabletimesetId(callableTimeSetId, body){
    var requestPath = '/api/v2/outbound/callabletimesets/{callableTimeSetId}';
    var requestQuery = {};
    var requestBody;

    if(callableTimeSetId === undefined || callableTimeSetId === null){
      throw new Error('Missing required  parameter: callableTimeSetId');
    }
    requestPath = requestPath.replace('{callableTimeSetId}', callableTimeSetId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete callable time set
  * @memberOf OutboundApi#
  * @param {string} callableTimeSetId - Callable Time Set ID
  */
OutboundApi.prototype.deleteCallabletimesetsCallabletimesetId = function deleteCallabletimesetsCallabletimesetId(callableTimeSetId){
    var requestPath = '/api/v2/outbound/callabletimesets/{callableTimeSetId}';
    var requestQuery = {};
    var requestBody;

    if(callableTimeSetId === undefined || callableTimeSetId === null){
      throw new Error('Missing required  parameter: callableTimeSetId');
    }
    requestPath = requestPath.replace('{callableTimeSetId}', callableTimeSetId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query a list of dialer call analysis response sets.
  * @memberOf OutboundApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} filterType - Filter type
  EQUALS,
  REGEX,
  CONTAINS,
  PREFIX,
  LESSTHAN,
  LESSTHANEQUALTO,
  GREATERTHAN,
  GREATERTHANEQUALTO,
  BEGINSWITH,
  ENDSWITH,
  * @param {string} name - Name
  * @param {string} sortBy - Sort by
  * @param {string} sortOrder - Sort order
  ascending,
  descending,
  */
OutboundApi.prototype.getCallanalysisresponsesets = function getCallanalysisresponsesets(pageSize, pageNumber, filterType, name, sortBy, sortOrder){
    var requestPath = '/api/v2/outbound/callanalysisresponsesets';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.filterType = filterType;
    requestQuery.name = name;
    requestQuery.sortBy = sortBy;
    requestQuery.sortOrder = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a dialer call analysis response set.
  * @memberOf OutboundApi#
  * @param {} body - ResponseSet
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "responses": {}
}
  */
OutboundApi.prototype.postCallanalysisresponsesets = function postCallanalysisresponsesets(body){
    var requestPath = '/api/v2/outbound/callanalysisresponsesets';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a dialer call analysis response set.
  * @memberOf OutboundApi#
  * @param {string} callAnalysisSetId - Call Analysis Response Set ID
  */
OutboundApi.prototype.getCallanalysisresponsesetsCallanalysissetId = function getCallanalysisresponsesetsCallanalysissetId(callAnalysisSetId){
    var requestPath = '/api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}';
    var requestQuery = {};
    var requestBody;

    if(callAnalysisSetId === undefined || callAnalysisSetId === null){
      throw new Error('Missing required  parameter: callAnalysisSetId');
    }
    requestPath = requestPath.replace('{callAnalysisSetId}', callAnalysisSetId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a dialer call analysis response set.
  * @memberOf OutboundApi#
  * @param {string} callAnalysisSetId - Call Analysis Response Set ID
  * @param {} body - ResponseSet
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "responses": {}
}
  */
OutboundApi.prototype.putCallanalysisresponsesetsCallanalysissetId = function putCallanalysisresponsesetsCallanalysissetId(callAnalysisSetId, body){
    var requestPath = '/api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}';
    var requestQuery = {};
    var requestBody;

    if(callAnalysisSetId === undefined || callAnalysisSetId === null){
      throw new Error('Missing required  parameter: callAnalysisSetId');
    }
    requestPath = requestPath.replace('{callAnalysisSetId}', callAnalysisSetId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a dialer call analysis response set.
  * @memberOf OutboundApi#
  * @param {string} callAnalysisSetId - Call Analysis Response Set ID
  */
OutboundApi.prototype.deleteCallanalysisresponsesetsCallanalysissetId = function deleteCallanalysisresponsesetsCallanalysissetId(callAnalysisSetId){
    var requestPath = '/api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}';
    var requestQuery = {};
    var requestBody;

    if(callAnalysisSetId === undefined || callAnalysisSetId === null){
      throw new Error('Missing required  parameter: callAnalysisSetId');
    }
    requestPath = requestPath.replace('{callAnalysisSetId}', callAnalysisSetId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query a list of dialer campaigns.
  * @memberOf OutboundApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} filterType - Filter type
  EQUALS,
  REGEX,
  CONTAINS,
  PREFIX,
  LESSTHAN,
  LESSTHANEQUALTO,
  GREATERTHAN,
  GREATERTHANEQUALTO,
  BEGINSWITH,
  ENDSWITH,
  * @param {string} name - Name
  * @param {string} contactListId - Contact List ID
  * @param {string} dncListId - DNC list ID
  * @param {string} distributionQueueId - Distribution queue ID
  * @param {string} edgeGroupId - Edge group ID
  * @param {string} callAnalysisResponseSetId - Call analysis response set ID
  * @param {string} sortBy - Sort by
  * @param {string} sortOrder - Sort order
  ascending,
  descending,
  */
OutboundApi.prototype.getCampaigns = function getCampaigns(pageSize, pageNumber, filterType, name, contactListId, dncListId, distributionQueueId, edgeGroupId, callAnalysisResponseSetId, sortBy, sortOrder){
    var requestPath = '/api/v2/outbound/campaigns';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.filterType = filterType;
    requestQuery.name = name;
    requestQuery.contactListId = contactListId;
    requestQuery.dncListId = dncListId;
    requestQuery.distributionQueueId = distributionQueueId;
    requestQuery.edgeGroupId = edgeGroupId;
    requestQuery.callAnalysisResponseSetId = callAnalysisResponseSetId;
    requestQuery.sortBy = sortBy;
    requestQuery.sortOrder = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a campaign.
  * @memberOf OutboundApi#
  * @param {} body - Campaign
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "contactList": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "queue": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dialingMode": "",
   "script": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "edgeGroup": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "campaignStatus": "",
   "phoneColumns": [],
   "abandonRate": {},
   "dncLists": [],
   "callableTimeSet": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "callAnalysisResponseSet": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "callerName": "",
   "callerAddress": "",
   "outboundLineCount": 0,
   "ruleSets": [],
   "skipPreviewDisabled": true,
   "previewTimeOutSeconds": 0,
   "contactSort": {
      "fieldName": "",
      "direction": "",
      "numeric": true
   }
}
  */
OutboundApi.prototype.postCampaigns = function postCampaigns(body){
    var requestPath = '/api/v2/outbound/campaigns';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get progress for a list of campaigns
  * @memberOf OutboundApi#
  * @param {} body - Campaign IDs
  */
OutboundApi.prototype.postCampaignsProgress = function postCampaignsProgress(body){
    var requestPath = '/api/v2/outbound/campaigns/progress';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get dialer campaign.
  * @memberOf OutboundApi#
  * @param {string} campaignId - Campaign ID
  */
OutboundApi.prototype.getCampaignsCampaignId = function getCampaignsCampaignId(campaignId){
    var requestPath = '/api/v2/outbound/campaigns/{campaignId}';
    var requestQuery = {};
    var requestBody;

    if(campaignId === undefined || campaignId === null){
      throw new Error('Missing required  parameter: campaignId');
    }
    requestPath = requestPath.replace('{campaignId}', campaignId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a campaign.
  * @memberOf OutboundApi#
  * @param {string} campaignId - Campaign ID
  * @param {} body - Campaign
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "contactList": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "queue": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dialingMode": "",
   "script": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "edgeGroup": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "campaignStatus": "",
   "phoneColumns": [],
   "abandonRate": {},
   "dncLists": [],
   "callableTimeSet": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "callAnalysisResponseSet": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "callerName": "",
   "callerAddress": "",
   "outboundLineCount": 0,
   "ruleSets": [],
   "skipPreviewDisabled": true,
   "previewTimeOutSeconds": 0,
   "contactSort": {
      "fieldName": "",
      "direction": "",
      "numeric": true
   }
}
  */
OutboundApi.prototype.putCampaignsCampaignId = function putCampaignsCampaignId(campaignId, body){
    var requestPath = '/api/v2/outbound/campaigns/{campaignId}';
    var requestQuery = {};
    var requestBody;

    if(campaignId === undefined || campaignId === null){
      throw new Error('Missing required  parameter: campaignId');
    }
    requestPath = requestPath.replace('{campaignId}', campaignId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a campaign.
  * @memberOf OutboundApi#
  * @param {string} campaignId - Campaign ID
  */
OutboundApi.prototype.deleteCampaignsCampaignId = function deleteCampaignsCampaignId(campaignId){
    var requestPath = '/api/v2/outbound/campaigns/{campaignId}';
    var requestQuery = {};
    var requestBody;

    if(campaignId === undefined || campaignId === null){
      throw new Error('Missing required  parameter: campaignId');
    }
    requestPath = requestPath.replace('{campaignId}', campaignId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Send notification that an agent's state changed 
  * @description New agent state.
  * @memberOf OutboundApi#
  * @param {string} campaignId - Campaign ID
  * @param {string} userId - Agent's user ID
  * @param {} body - agent
  * @example
  * Body Example:
  * {
   "stage": ""
}
  */
OutboundApi.prototype.putCampaignsCampaignIdAgentsUserId = function putCampaignsCampaignIdAgentsUserId(campaignId, userId, body){
    var requestPath = '/api/v2/outbound/campaigns/{campaignId}/agents/{userId}';
    var requestQuery = {};
    var requestBody;

    if(campaignId === undefined || campaignId === null){
      throw new Error('Missing required  parameter: campaignId');
    }
    requestPath = requestPath.replace('{campaignId}', campaignId);
    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Schedule a Callback for a Dialer Campaign
  * @memberOf OutboundApi#
  * @param {string} campaignId - Campaign ID
  * @param {} body - ContactCallbackRequest
  * @example
  * Body Example:
  * {
   "campaignId": "",
   "contactListId": "",
   "contactId": "",
   "phoneColumn": "",
   "schedule": ""
}
  */
OutboundApi.prototype.postCampaignsCampaignIdCallbackSchedule = function postCampaignsCampaignIdCallbackSchedule(campaignId, body){
    var requestPath = '/api/v2/outbound/campaigns/{campaignId}/callback/schedule';
    var requestQuery = {};
    var requestBody;

    if(campaignId === undefined || campaignId === null){
      throw new Error('Missing required  parameter: campaignId');
    }
    requestPath = requestPath.replace('{campaignId}', campaignId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get campaign diagnostics
  * @memberOf OutboundApi#
  * @param {string} campaignId - Campaign ID
  */
OutboundApi.prototype.getCampaignsCampaignIdDiagnostics = function getCampaignsCampaignIdDiagnostics(campaignId){
    var requestPath = '/api/v2/outbound/campaigns/{campaignId}/diagnostics';
    var requestQuery = {};
    var requestBody;

    if(campaignId === undefined || campaignId === null){
      throw new Error('Missing required  parameter: campaignId');
    }
    requestPath = requestPath.replace('{campaignId}', campaignId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get campaign progress
  * @memberOf OutboundApi#
  * @param {string} campaignId - Campaign ID
  */
OutboundApi.prototype.getCampaignsCampaignIdProgress = function getCampaignsCampaignIdProgress(campaignId){
    var requestPath = '/api/v2/outbound/campaigns/{campaignId}/progress';
    var requestQuery = {};
    var requestBody;

    if(campaignId === undefined || campaignId === null){
      throw new Error('Missing required  parameter: campaignId');
    }
    requestPath = requestPath.replace('{campaignId}', campaignId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Reset campaign progress and recycle the campaign
  * @memberOf OutboundApi#
  * @param {string} campaignId - Campaign ID
  */
OutboundApi.prototype.deleteCampaignsCampaignIdProgress = function deleteCampaignsCampaignIdProgress(campaignId){
    var requestPath = '/api/v2/outbound/campaigns/{campaignId}/progress';
    var requestQuery = {};
    var requestBody;

    if(campaignId === undefined || campaignId === null){
      throw new Error('Missing required  parameter: campaignId');
    }
    requestPath = requestPath.replace('{campaignId}', campaignId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get statistics about a Dialer Campaign
  * @memberOf OutboundApi#
  * @param {string} campaignId - Campaign ID
  */
OutboundApi.prototype.getCampaignsCampaignIdStats = function getCampaignsCampaignIdStats(campaignId){
    var requestPath = '/api/v2/outbound/campaigns/{campaignId}/stats';
    var requestQuery = {};
    var requestBody;

    if(campaignId === undefined || campaignId === null){
      throw new Error('Missing required  parameter: campaignId');
    }
    requestPath = requestPath.replace('{campaignId}', campaignId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query a list of contact lists.
  * @memberOf OutboundApi#
  * @param {boolean} includeImportStatus - Include import status
  * @param {boolean} includeSize - Include size
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} filterType - Filter type
  EQUALS,
  REGEX,
  CONTAINS,
  PREFIX,
  LESSTHAN,
  LESSTHANEQUALTO,
  GREATERTHAN,
  GREATERTHANEQUALTO,
  BEGINSWITH,
  ENDSWITH,
  * @param {string} name - Name
  * @param {string} sortBy - Sort by
  * @param {string} sortOrder - Sort order
  ascending,
  descending,
  */
OutboundApi.prototype.getContactlists = function getContactlists(includeImportStatus, includeSize, pageSize, pageNumber, filterType, name, sortBy, sortOrder){
    var requestPath = '/api/v2/outbound/contactlists';
    var requestQuery = {};
    var requestBody;

    requestQuery.includeImportStatus = includeImportStatus;
    requestQuery.includeSize = includeSize;
    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.filterType = filterType;
    requestQuery.name = name;
    requestQuery.sortBy = sortBy;
    requestQuery.sortOrder = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a contact List.
  * @memberOf OutboundApi#
  * @param {} body - ContactList
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "columnNames": [],
   "phoneColumns": [],
   "previewModeColumnName": "",
   "previewModeAcceptedValues": []
}
  */
OutboundApi.prototype.postContactlists = function postContactlists(body){
    var requestPath = '/api/v2/outbound/contactlists';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a dialer contact list.
  * @memberOf OutboundApi#
  * @param {string} contactListId - ContactList ID
  * @param {boolean} includeImportStatus - Import status
  * @param {boolean} includeSize - Include size
  */
OutboundApi.prototype.getContactlistsContactlistId = function getContactlistsContactlistId(contactListId, includeImportStatus, includeSize){
    var requestPath = '/api/v2/outbound/contactlists/{contactListId}';
    var requestQuery = {};
    var requestBody;

    if(contactListId === undefined || contactListId === null){
      throw new Error('Missing required  parameter: contactListId');
    }
    requestPath = requestPath.replace('{contactListId}', contactListId);
    requestQuery.includeImportStatus = includeImportStatus;
    requestQuery.includeSize = includeSize;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a contact list.
  * @memberOf OutboundApi#
  * @param {string} contactListId - ContactList ID
  * @param {} body - ContactList
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "columnNames": [],
   "phoneColumns": [],
   "previewModeColumnName": "",
   "previewModeAcceptedValues": []
}
  */
OutboundApi.prototype.putContactlistsContactlistId = function putContactlistsContactlistId(contactListId, body){
    var requestPath = '/api/v2/outbound/contactlists/{contactListId}';
    var requestQuery = {};
    var requestBody;

    if(contactListId === undefined || contactListId === null){
      throw new Error('Missing required  parameter: contactListId');
    }
    requestPath = requestPath.replace('{contactListId}', contactListId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a contact list.
  * @memberOf OutboundApi#
  * @param {string} contactListId - ContactList ID
  */
OutboundApi.prototype.deleteContactlistsContactlistId = function deleteContactlistsContactlistId(contactListId){
    var requestPath = '/api/v2/outbound/contactlists/{contactListId}';
    var requestQuery = {};
    var requestBody;

    if(contactListId === undefined || contactListId === null){
      throw new Error('Missing required  parameter: contactListId');
    }
    requestPath = requestPath.replace('{contactListId}', contactListId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Add contacts to a contact list.
  * @memberOf OutboundApi#
  * @param {string} contactListId - Contact List ID
  * @param {} body - Contact
  * @param {boolean} priority - 
  * @example
  * Body Example:
  * [
 {
  "name": "",
  "contactListId": "",
  "data": {},
  "callable": true,
  "phoneNumberStatus": {}
 }
]
  */
OutboundApi.prototype.postContactlistsContactlistIdContacts = function postContactlistsContactlistIdContacts(contactListId, body, priority){
    var requestPath = '/api/v2/outbound/contactlists/{contactListId}/contacts';
    var requestQuery = {};
    var requestBody;

    if(contactListId === undefined || contactListId === null){
      throw new Error('Missing required  parameter: contactListId');
    }
    requestPath = requestPath.replace('{contactListId}', contactListId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery.priority = priority;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get dialer contactList.
  * @memberOf OutboundApi#
  * @param {string} contactListId - Contact List ID
  * @param {string} contactId - Contact ID
  */
OutboundApi.prototype.getContactlistsContactlistIdContactsContactId = function getContactlistsContactlistIdContactsContactId(contactListId, contactId){
    var requestPath = '/api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}';
    var requestQuery = {};
    var requestBody;

    if(contactListId === undefined || contactListId === null){
      throw new Error('Missing required  parameter: contactListId');
    }
    requestPath = requestPath.replace('{contactListId}', contactListId);
    if(contactId === undefined || contactId === null){
      throw new Error('Missing required  parameter: contactId');
    }
    requestPath = requestPath.replace('{contactId}', contactId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a contact.
  * @memberOf OutboundApi#
  * @param {string} contactListId - Contact List ID
  * @param {string} contactId - Contact ID
  * @param {} body - Contact
  * @example
  * Body Example:
  * {
   "name": "",
   "contactListId": "",
   "data": {},
   "callable": true,
   "phoneNumberStatus": {}
}
  */
OutboundApi.prototype.putContactlistsContactlistIdContactsContactId = function putContactlistsContactlistIdContactsContactId(contactListId, contactId, body){
    var requestPath = '/api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}';
    var requestQuery = {};
    var requestBody;

    if(contactListId === undefined || contactListId === null){
      throw new Error('Missing required  parameter: contactListId');
    }
    requestPath = requestPath.replace('{contactListId}', contactListId);
    if(contactId === undefined || contactId === null){
      throw new Error('Missing required  parameter: contactId');
    }
    requestPath = requestPath.replace('{contactId}', contactId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a contact.
  * @memberOf OutboundApi#
  * @param {string} contactListId - Contact List ID
  * @param {string} contactId - Contact ID
  */
OutboundApi.prototype.deleteContactlistsContactlistIdContactsContactId = function deleteContactlistsContactlistIdContactsContactId(contactListId, contactId){
    var requestPath = '/api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}';
    var requestQuery = {};
    var requestBody;

    if(contactListId === undefined || contactListId === null){
      throw new Error('Missing required  parameter: contactListId');
    }
    requestPath = requestPath.replace('{contactListId}', contactListId);
    if(contactId === undefined || contactId === null){
      throw new Error('Missing required  parameter: contactId');
    }
    requestPath = requestPath.replace('{contactId}', contactId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the URI of a contact list export.
  * @memberOf OutboundApi#
  * @param {string} contactListId - ContactList ID
  * @param {string} download - Redirect to download uri
  */
OutboundApi.prototype.getContactlistsContactlistIdExport = function getContactlistsContactlistIdExport(contactListId, download){
    var requestPath = '/api/v2/outbound/contactlists/{contactListId}/export';
    var requestQuery = {};
    var requestBody;

    if(contactListId === undefined || contactListId === null){
      throw new Error('Missing required  parameter: contactListId');
    }
    requestPath = requestPath.replace('{contactListId}', contactListId);
    requestQuery.download = download;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Initiate the export of a contact list.
  * @description Returns 200 if received OK.
  * @memberOf OutboundApi#
  * @param {string} contactListId - ContactList ID
  */
OutboundApi.prototype.postContactlistsContactlistIdExport = function postContactlistsContactlistIdExport(contactListId){
    var requestPath = '/api/v2/outbound/contactlists/{contactListId}/export';
    var requestQuery = {};
    var requestBody;

    if(contactListId === undefined || contactListId === null){
      throw new Error('Missing required  parameter: contactListId');
    }
    requestPath = requestPath.replace('{contactListId}', contactListId);
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get dialer contactList import status.
  * @memberOf OutboundApi#
  * @param {string} contactListId - ContactList ID
  */
OutboundApi.prototype.getContactlistsContactlistIdImportstatus = function getContactlistsContactlistIdImportstatus(contactListId){
    var requestPath = '/api/v2/outbound/contactlists/{contactListId}/importstatus';
    var requestQuery = {};
    var requestBody;

    if(contactListId === undefined || contactListId === null){
      throw new Error('Missing required  parameter: contactListId');
    }
    requestPath = requestPath.replace('{contactListId}', contactListId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Add phone numbers to a Dialer DNC list.
  * @memberOf OutboundApi#
  * @param {string} conversationId - Conversation ID
  */
OutboundApi.prototype.postConversationsConversationIdDnc = function postConversationsConversationIdDnc(conversationId){
    var requestPath = '/api/v2/outbound/conversations/{conversationId}/dnc';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query dialer DNC lists
  * @memberOf OutboundApi#
  * @param {boolean} includeImportStatus - Import status
  * @param {boolean} includeSize - Include size
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} filterType - Filter type
  EQUALS,
  REGEX,
  CONTAINS,
  PREFIX,
  LESSTHAN,
  LESSTHANEQUALTO,
  GREATERTHAN,
  GREATERTHANEQUALTO,
  BEGINSWITH,
  ENDSWITH,
  * @param {string} name - Name
  * @param {string} sortBy - Sort by
  * @param {string} sortOrder - Sort order
  ascending,
  descending,
  */
OutboundApi.prototype.getDnclists = function getDnclists(includeImportStatus, includeSize, pageSize, pageNumber, filterType, name, sortBy, sortOrder){
    var requestPath = '/api/v2/outbound/dnclists';
    var requestQuery = {};
    var requestBody;

    requestQuery.includeImportStatus = includeImportStatus;
    requestQuery.includeSize = includeSize;
    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.filterType = filterType;
    requestQuery.name = name;
    requestQuery.sortBy = sortBy;
    requestQuery.sortOrder = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create dialer DNC list
  * @memberOf OutboundApi#
  * @param {} body - DncList
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "phoneNumberColumns": []
}
  */
OutboundApi.prototype.postDnclists = function postDnclists(body){
    var requestPath = '/api/v2/outbound/dnclists';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get dialer DNC list
  * @memberOf OutboundApi#
  * @param {string} dncListId - DncList ID
  * @param {boolean} includeImportStatus - Import status
  * @param {boolean} includeSize - Include size
  */
OutboundApi.prototype.getDnclistsDnclistId = function getDnclistsDnclistId(dncListId, includeImportStatus, includeSize){
    var requestPath = '/api/v2/outbound/dnclists/{dncListId}';
    var requestQuery = {};
    var requestBody;

    if(dncListId === undefined || dncListId === null){
      throw new Error('Missing required  parameter: dncListId');
    }
    requestPath = requestPath.replace('{dncListId}', dncListId);
    requestQuery.includeImportStatus = includeImportStatus;
    requestQuery.includeSize = includeSize;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update dialer DNC list
  * @memberOf OutboundApi#
  * @param {string} dncListId - DncList ID
  * @param {} body - DncList
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "phoneNumberColumns": []
}
  */
OutboundApi.prototype.putDnclistsDnclistId = function putDnclistsDnclistId(dncListId, body){
    var requestPath = '/api/v2/outbound/dnclists/{dncListId}';
    var requestQuery = {};
    var requestBody;

    if(dncListId === undefined || dncListId === null){
      throw new Error('Missing required  parameter: dncListId');
    }
    requestPath = requestPath.replace('{dncListId}', dncListId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete dialer DNC list
  * @memberOf OutboundApi#
  * @param {string} dncListId - DncList ID
  */
OutboundApi.prototype.deleteDnclistsDnclistId = function deleteDnclistsDnclistId(dncListId){
    var requestPath = '/api/v2/outbound/dnclists/{dncListId}';
    var requestQuery = {};
    var requestBody;

    if(dncListId === undefined || dncListId === null){
      throw new Error('Missing required  parameter: dncListId');
    }
    requestPath = requestPath.replace('{dncListId}', dncListId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the URI of a DNC list export.
  * @memberOf OutboundApi#
  * @param {string} dncListId - DncList ID
  * @param {string} download - Redirect to download uri
  */
OutboundApi.prototype.getDnclistsDnclistIdExport = function getDnclistsDnclistIdExport(dncListId, download){
    var requestPath = '/api/v2/outbound/dnclists/{dncListId}/export';
    var requestQuery = {};
    var requestBody;

    if(dncListId === undefined || dncListId === null){
      throw new Error('Missing required  parameter: dncListId');
    }
    requestPath = requestPath.replace('{dncListId}', dncListId);
    requestQuery.download = download;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Initiate the export of a dnc list.
  * @description Returns 200 if received OK.
  * @memberOf OutboundApi#
  * @param {string} dncListId - DncList ID
  */
OutboundApi.prototype.postDnclistsDnclistIdExport = function postDnclistsDnclistIdExport(dncListId){
    var requestPath = '/api/v2/outbound/dnclists/{dncListId}/export';
    var requestQuery = {};
    var requestBody;

    if(dncListId === undefined || dncListId === null){
      throw new Error('Missing required  parameter: dncListId');
    }
    requestPath = requestPath.replace('{dncListId}', dncListId);
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get dialer dncList import status.
  * @memberOf OutboundApi#
  * @param {string} dncListId - DncList ID
  */
OutboundApi.prototype.getDnclistsDnclistIdImportstatus = function getDnclistsDnclistIdImportstatus(dncListId){
    var requestPath = '/api/v2/outbound/dnclists/{dncListId}/importstatus';
    var requestQuery = {};
    var requestBody;

    if(dncListId === undefined || dncListId === null){
      throw new Error('Missing required  parameter: dncListId');
    }
    requestPath = requestPath.replace('{dncListId}', dncListId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Add phone numbers to a Dialer DNC list.
  * @memberOf OutboundApi#
  * @param {string} dncListId - DncList ID
  * @param {} body - DNC Phone Numbers
  */
OutboundApi.prototype.postDnclistsDnclistIdPhonenumbers = function postDnclistsDnclistIdPhonenumbers(dncListId, body){
    var requestPath = '/api/v2/outbound/dnclists/{dncListId}/phonenumbers';
    var requestQuery = {};
    var requestBody;

    if(dncListId === undefined || dncListId === null){
      throw new Error('Missing required  parameter: dncListId');
    }
    requestPath = requestPath.replace('{dncListId}', dncListId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query a list of Rule Sets.
  * @memberOf OutboundApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} filterType - Filter type
  EQUALS,
  REGEX,
  CONTAINS,
  PREFIX,
  LESSTHAN,
  LESSTHANEQUALTO,
  GREATERTHAN,
  GREATERTHANEQUALTO,
  BEGINSWITH,
  ENDSWITH,
  * @param {string} name - Name
  * @param {string} sortBy - Sort by
  * @param {string} sortOrder - Sort order
  ascending,
  descending,
  */
OutboundApi.prototype.getRulesets = function getRulesets(pageSize, pageNumber, filterType, name, sortBy, sortOrder){
    var requestPath = '/api/v2/outbound/rulesets';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.filterType = filterType;
    requestQuery.name = name;
    requestQuery.sortBy = sortBy;
    requestQuery.sortOrder = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a Dialer Call Analysis Response Set.
  * @memberOf OutboundApi#
  * @param {} body - RuleSet
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "contactList": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "queue": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "rules": []
}
  */
OutboundApi.prototype.postRulesets = function postRulesets(body){
    var requestPath = '/api/v2/outbound/rulesets';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a Rule Set by ID.
  * @memberOf OutboundApi#
  * @param {string} ruleSetId - Rule Set ID
  */
OutboundApi.prototype.getRulesetsRulesetId = function getRulesetsRulesetId(ruleSetId){
    var requestPath = '/api/v2/outbound/rulesets/{ruleSetId}';
    var requestQuery = {};
    var requestBody;

    if(ruleSetId === undefined || ruleSetId === null){
      throw new Error('Missing required  parameter: ruleSetId');
    }
    requestPath = requestPath.replace('{ruleSetId}', ruleSetId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a RuleSet.
  * @memberOf OutboundApi#
  * @param {string} ruleSetId - Rule Set ID
  * @param {} body - RuleSet
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "contactList": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "queue": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "rules": []
}
  */
OutboundApi.prototype.putRulesetsRulesetId = function putRulesetsRulesetId(ruleSetId, body){
    var requestPath = '/api/v2/outbound/rulesets/{ruleSetId}';
    var requestQuery = {};
    var requestBody;

    if(ruleSetId === undefined || ruleSetId === null){
      throw new Error('Missing required  parameter: ruleSetId');
    }
    requestPath = requestPath.replace('{ruleSetId}', ruleSetId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a Rule set.
  * @memberOf OutboundApi#
  * @param {string} ruleSetId - Rule Set ID
  */
OutboundApi.prototype.deleteRulesetsRulesetId = function deleteRulesetsRulesetId(ruleSetId){
    var requestPath = '/api/v2/outbound/rulesets/{ruleSetId}';
    var requestQuery = {};
    var requestBody;

    if(ruleSetId === undefined || ruleSetId === null){
      throw new Error('Missing required  parameter: ruleSetId');
    }
    requestPath = requestPath.replace('{ruleSetId}', ruleSetId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query for a list of dialer campaign schedules.
  * @memberOf OutboundApi#
  */
OutboundApi.prototype.getSchedulesCampaigns = function getSchedulesCampaigns(){
    var requestPath = '/api/v2/outbound/schedules/campaigns';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a dialer campaign schedule.
  * @memberOf OutboundApi#
  * @param {string} campaignId - Campaign ID
  */
OutboundApi.prototype.getSchedulesCampaignsCampaignId = function getSchedulesCampaignsCampaignId(campaignId){
    var requestPath = '/api/v2/outbound/schedules/campaigns/{campaignId}';
    var requestQuery = {};
    var requestBody;

    if(campaignId === undefined || campaignId === null){
      throw new Error('Missing required  parameter: campaignId');
    }
    requestPath = requestPath.replace('{campaignId}', campaignId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a new campaign schedule.
  * @memberOf OutboundApi#
  * @param {string} campaignId - Campaign ID
  * @param {} body - CampaignSchedule
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "intervals": [],
   "timeZone": "",
   "campaign": {
      "id": "",
      "name": "",
      "selfUri": ""
   }
}
  */
OutboundApi.prototype.putSchedulesCampaignsCampaignId = function putSchedulesCampaignsCampaignId(campaignId, body){
    var requestPath = '/api/v2/outbound/schedules/campaigns/{campaignId}';
    var requestQuery = {};
    var requestBody;

    if(campaignId === undefined || campaignId === null){
      throw new Error('Missing required  parameter: campaignId');
    }
    requestPath = requestPath.replace('{campaignId}', campaignId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a dialer campaign schedule.
  * @memberOf OutboundApi#
  * @param {string} campaignId - Campaign ID
  */
OutboundApi.prototype.deleteSchedulesCampaignsCampaignId = function deleteSchedulesCampaignsCampaignId(campaignId){
    var requestPath = '/api/v2/outbound/schedules/campaigns/{campaignId}';
    var requestQuery = {};
    var requestBody;

    if(campaignId === undefined || campaignId === null){
      throw new Error('Missing required  parameter: campaignId');
    }
    requestPath = requestPath.replace('{campaignId}', campaignId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query for a list of dialer sequence schedules.
  * @memberOf OutboundApi#
  */
OutboundApi.prototype.getSchedulesSequences = function getSchedulesSequences(){
    var requestPath = '/api/v2/outbound/schedules/sequences';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a dialer sequence schedule.
  * @memberOf OutboundApi#
  * @param {string} sequenceId - Sequence ID
  */
OutboundApi.prototype.getSchedulesSequencesSequenceId = function getSchedulesSequencesSequenceId(sequenceId){
    var requestPath = '/api/v2/outbound/schedules/sequences/{sequenceId}';
    var requestQuery = {};
    var requestBody;

    if(sequenceId === undefined || sequenceId === null){
      throw new Error('Missing required  parameter: sequenceId');
    }
    requestPath = requestPath.replace('{sequenceId}', sequenceId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a new sequence schedule.
  * @memberOf OutboundApi#
  * @param {string} sequenceId - Sequence ID
  * @param {} body - SequenceSchedule
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "intervals": [],
   "timeZone": "",
   "sequence": {
      "id": "",
      "name": "",
      "selfUri": ""
   }
}
  */
OutboundApi.prototype.putSchedulesSequencesSequenceId = function putSchedulesSequencesSequenceId(sequenceId, body){
    var requestPath = '/api/v2/outbound/schedules/sequences/{sequenceId}';
    var requestQuery = {};
    var requestBody;

    if(sequenceId === undefined || sequenceId === null){
      throw new Error('Missing required  parameter: sequenceId');
    }
    requestPath = requestPath.replace('{sequenceId}', sequenceId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a dialer sequence schedule.
  * @memberOf OutboundApi#
  * @param {string} sequenceId - Sequence ID
  */
OutboundApi.prototype.deleteSchedulesSequencesSequenceId = function deleteSchedulesSequencesSequenceId(sequenceId){
    var requestPath = '/api/v2/outbound/schedules/sequences/{sequenceId}';
    var requestQuery = {};
    var requestBody;

    if(sequenceId === undefined || sequenceId === null){
      throw new Error('Missing required  parameter: sequenceId');
    }
    requestPath = requestPath.replace('{sequenceId}', sequenceId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query a list of dialer campaign sequences.
  * @memberOf OutboundApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} filterType - Filter type
  EQUALS,
  REGEX,
  CONTAINS,
  PREFIX,
  LESSTHAN,
  LESSTHANEQUALTO,
  GREATERTHAN,
  GREATERTHANEQUALTO,
  BEGINSWITH,
  ENDSWITH,
  * @param {string} name - Name
  * @param {string} sortBy - Sort by
  * @param {string} sortOrder - Sort order
  ascending,
  descending,
  */
OutboundApi.prototype.getSequences = function getSequences(pageSize, pageNumber, filterType, name, sortBy, sortOrder){
    var requestPath = '/api/v2/outbound/sequences';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.filterType = filterType;
    requestQuery.name = name;
    requestQuery.sortBy = sortBy;
    requestQuery.sortOrder = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a new campaign sequence.
  * @memberOf OutboundApi#
  * @param {} body - Organization
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "campaigns": [],
   "status": "",
   "repeat": true
}
  */
OutboundApi.prototype.postSequences = function postSequences(body){
    var requestPath = '/api/v2/outbound/sequences';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a dialer campaign sequence.
  * @memberOf OutboundApi#
  * @param {string} sequenceId - Campaign Sequence ID
  */
OutboundApi.prototype.getSequencesSequenceId = function getSequencesSequenceId(sequenceId){
    var requestPath = '/api/v2/outbound/sequences/{sequenceId}';
    var requestQuery = {};
    var requestBody;

    if(sequenceId === undefined || sequenceId === null){
      throw new Error('Missing required  parameter: sequenceId');
    }
    requestPath = requestPath.replace('{sequenceId}', sequenceId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a new campaign sequence.
  * @memberOf OutboundApi#
  * @param {string} sequenceId - Campaign Sequence ID
  * @param {} body - Organization
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "campaigns": [],
   "status": "",
   "repeat": true
}
  */
OutboundApi.prototype.putSequencesSequenceId = function putSequencesSequenceId(sequenceId, body){
    var requestPath = '/api/v2/outbound/sequences/{sequenceId}';
    var requestQuery = {};
    var requestBody;

    if(sequenceId === undefined || sequenceId === null){
      throw new Error('Missing required  parameter: sequenceId');
    }
    requestPath = requestPath.replace('{sequenceId}', sequenceId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a dialer campaign sequence.
  * @memberOf OutboundApi#
  * @param {string} sequenceId - Campaign Sequence ID
  */
OutboundApi.prototype.deleteSequencesSequenceId = function deleteSequencesSequenceId(sequenceId){
    var requestPath = '/api/v2/outbound/sequences/{sequenceId}';
    var requestQuery = {};
    var requestBody;

    if(sequenceId === undefined || sequenceId === null){
      throw new Error('Missing required  parameter: sequenceId');
    }
    requestPath = requestPath.replace('{sequenceId}', sequenceId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the Dialer wrap up code mapping.
  * @memberOf OutboundApi#
  */
OutboundApi.prototype.getWrapupcodemappings = function getWrapupcodemappings(){
    var requestPath = '/api/v2/outbound/wrapupcodemappings';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update the Dialer wrap up code mapping.
  * @memberOf OutboundApi#
  * @param {} body - wrapUpCodeMapping
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "defaultSet": [],
   "mapping": {}
}
  */
OutboundApi.prototype.putWrapupcodemappings = function putWrapupcodemappings(body){
    var requestPath = '/api/v2/outbound/wrapupcodemappings';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};



/**
* @class
* @example
* var api = new PresenceApi(pureCloudSession);
*/
function PresenceApi(session) {
    if(!(this instanceof PresenceApi)) {
        return new PresenceApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('PresenceApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get an Organization's list of Presence Definitions
  * @memberOf PresenceApi#
  * @param {integer} pageNumber - Page number
  * @param {integer} pageSize - Page size
  * @param {string} doDeleted - Deleted query can be true, false or all
  */
PresenceApi.prototype.getPresencedefinitions = function getPresencedefinitions(pageNumber, pageSize, doDeleted){
    var requestPath = '/api/v2/presencedefinitions';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageNumber = pageNumber;
    requestQuery.pageSize = pageSize;
    requestQuery.deleted = doDeleted;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a Presence Definition
  * @memberOf PresenceApi#
  * @param {} body - The Presence Definition to create
  * @example
  * Body Example:
  * {
   "name": "",
   "languageLabels": {},
   "systemPresence": "",
   "deactivated": true,
   "createdBy": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "createdDate": "",
   "modifiedBy": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "modifiedDate": ""
}
  */
PresenceApi.prototype.postPresencedefinitions = function postPresencedefinitions(body){
    var requestPath = '/api/v2/presencedefinitions';
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
  * @summary Get a Presence Definition
  * @memberOf PresenceApi#
  * @param {string} presenceId - Organization Presence ID
  */
PresenceApi.prototype.getPresenceId = function getPresenceId(presenceId){
    var requestPath = '/api/v2/presencedefinitions/{presenceId}';
    var requestQuery = {};
    var requestBody;

    if(presenceId === undefined || presenceId === null){
      throw new Error('Missing required  parameter: presenceId');
    }
    requestPath = requestPath.replace('{presenceId}', presenceId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a Presence Definition
  * @memberOf PresenceApi#
  * @param {string} presenceId - Organization Presence ID
  * @param {} body - The OrganizationPresence to update
  * @example
  * Body Example:
  * {
   "name": "",
   "languageLabels": {},
   "systemPresence": "",
   "deactivated": true,
   "createdBy": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "createdDate": "",
   "modifiedBy": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "modifiedDate": ""
}
  */
PresenceApi.prototype.putPresenceId = function putPresenceId(presenceId, body){
    var requestPath = '/api/v2/presencedefinitions/{presenceId}';
    var requestQuery = {};
    var requestBody;

    if(presenceId === undefined || presenceId === null){
      throw new Error('Missing required  parameter: presenceId');
    }
    requestPath = requestPath.replace('{presenceId}', presenceId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a Presence Definition
  * @memberOf PresenceApi#
  * @param {string} presenceId - Organization Presence ID
  */
PresenceApi.prototype.deletePresenceId = function deletePresenceId(presenceId){
    var requestPath = '/api/v2/presencedefinitions/{presenceId}';
    var requestQuery = {};
    var requestBody;

    if(presenceId === undefined || presenceId === null){
      throw new Error('Missing required  parameter: presenceId');
    }
    requestPath = requestPath.replace('{presenceId}', presenceId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of SystemPresences
  * @memberOf PresenceApi#
  */
PresenceApi.prototype.getSystempresences = function getSystempresences(){
    var requestPath = '/api/v2/systempresences';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a user's Presence
  * @memberOf PresenceApi#
  * @param {string} userId - user Id
  * @param {string} sourceId - Source
  */
PresenceApi.prototype.getUserIdPresencesSourceId = function getUserIdPresencesSourceId(userId, sourceId){
    var requestPath = '/api/v2/users/{userId}/presences/{sourceId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(sourceId === undefined || sourceId === null){
      throw new Error('Missing required  parameter: sourceId');
    }
    requestPath = requestPath.replace('{sourceId}', sourceId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Patch a user's Presence
  * @description The presence object can be patched one of three ways. Option 1: Set the 'primary' property to true. This will set the 'source' defined in the path as the user's primary presence source. Option 2: Provide the presenceDefinition value. The 'id' is the only value required within the presenceDefinition. Option 3: Provide the message value. Option 1 can be combined with Option 2 and/or Option 3.
  * @memberOf PresenceApi#
  * @param {string} userId - user Id
  * @param {string} sourceId - Source
  * @param {} body - The presence object can be patched one of three ways. Option 1: Set the 'primary' property to true. This will set the 'source' defined in the path as the user's primary presence source. Option 2: Provide the presenceDefinition value. The 'id' is the only value required within the presenceDefinition. Option 3: Provide the message value. Option 1 can be combined with Option 2 and/or Option 3.
  * @example
  * Body Example:
  * {
   "name": "",
   "source": "",
   "primary": true,
   "presenceDefinition": {
      "name": "",
      "languageLabels": {},
      "systemPresence": "",
      "deactivated": true,
      "createdBy": {},
      "createdDate": "",
      "modifiedBy": {},
      "modifiedDate": ""
   },
   "message": "",
   "modifiedDate": ""
}
  */
PresenceApi.prototype.patchUserIdPresencesSourceId = function patchUserIdPresencesSourceId(userId, sourceId, body){
    var requestPath = '/api/v2/users/{userId}/presences/{sourceId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(sourceId === undefined || sourceId === null){
      throw new Error('Missing required  parameter: sourceId');
    }
    requestPath = requestPath.replace('{sourceId}', sourceId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};



/**
* @class
* @example
* var api = new QualityApi(pureCloudSession);
*/
function QualityApi(session) {
    if(!(this instanceof QualityApi)) {
        return new QualityApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('QualityApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Query for evaluation aggregates
  * @memberOf QualityApi#
  * @param {} body - query
  * @example
  * Body Example:
  * {
   "interval": "",
   "granularity": "",
   "groupBy": [],
   "filter": {
      "type": "",
      "clauses": [],
      "predicates": []
   },
   "metrics": [],
   "flattenMultivaluedDimensions": true
}
  */
QualityApi.prototype.postEvaluationsAggregatesQuery = function postEvaluationsAggregatesQuery(body){
    var requestPath = '/api/v2/analytics/evaluations/aggregates/query';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Gets a list of Agent Activities
  * @description Including the number of evaluations and average evaluation score
  * @memberOf QualityApi#
  * @param {integer} pageSize - The total page size requested
  * @param {integer} pageNumber - The page number requested
  * @param {string} sortBy - variable name requested to sort by
  * @param {array} expand - variable name requested by expand list
  * @param {string} nextPage - next page token
  * @param {string} previousPage - Previous page token
  * @param {string} startTime - Start time of agent activity. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
  * @param {string} endTime - End time of agent activity. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
  * @param {array} agentUserId - user id of agent requested
  * @param {string} evaluatorUserId - user id of the evaluator
  * @param {string} name - name
  * @param {string} group - group id
  */
QualityApi.prototype.getAgentsActivity = function getAgentsActivity(pageSize, pageNumber, sortBy, expand, nextPage, previousPage, startTime, endTime, agentUserId, evaluatorUserId, name, group){
    var requestPath = '/api/v2/quality/agents/activity';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.expand = expand;
    requestQuery.nextPage = nextPage;
    requestQuery.previousPage = previousPage;
    requestQuery.startTime = startTime;
    requestQuery.endTime = endTime;
    requestQuery.agentUserId = agentUserId;
    requestQuery.evaluatorUserId = evaluatorUserId;
    requestQuery.name = name;
    requestQuery.group = group;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of calibrations
  * @memberOf QualityApi#
  * @param {integer} pageSize - The total page size requested
  * @param {integer} pageNumber - The page number requested
  * @param {string} sortBy - variable name requested to sort by
  * @param {array} expand - variable name requested by expand list
  * @param {string} nextPage - next page token
  * @param {string} previousPage - Previous page token
  * @param {string} conversationId - conversation id
  * @param {string} startTime - Beginning of the calibration query. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
  * @param {string} endTime - end of the calibration query. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
  * @param {string} calibratorId - user id of calibrator
  */
QualityApi.prototype.getCalibrations = function getCalibrations(pageSize, pageNumber, sortBy, expand, nextPage, previousPage, conversationId, startTime, endTime, calibratorId){
    var requestPath = '/api/v2/quality/calibrations';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.expand = expand;
    requestQuery.nextPage = nextPage;
    requestQuery.previousPage = previousPage;
    requestQuery.conversationId = conversationId;
    requestQuery.startTime = startTime;
    requestQuery.endTime = endTime;
    if(calibratorId === undefined || calibratorId === null){
      throw new Error('Missing required  parameter: calibratorId');
    }
    requestQuery.calibratorId = calibratorId;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a calibration
  * @memberOf QualityApi#
  * @param {} body - calibration
  * @param {string} expand - calibratorId
  * @example
  * Body Example:
  * {
   "name": "",
   "calibrator": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "agent": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "conversation": {
      "name": "",
      "startTime": "",
      "endTime": "",
      "address": "",
      "participants": [],
      "conversationIds": [],
      "maxParticipants": 0,
      "recordingState": ""
   },
   "evaluationForm": {
      "name": "",
      "type": "",
      "modifiedDate": "",
      "published": true,
      "contextId": "",
      "questionGroups": [],
      "publishedVersions": {}
   },
   "contextId": "",
   "averageScore": 0,
   "highScore": 0,
   "lowScore": 0,
   "createdDate": "",
   "evaluations": [],
   "evaluators": [],
   "scoringIndex": {
      "name": "",
      "conversation": {},
      "evaluationForm": {},
      "evaluator": {},
      "agent": {},
      "calibration": {},
      "status": "",
      "answers": {},
      "agentHasRead": true,
      "releaseDate": "",
      "assignedDate": "",
      "changedDate": "",
      "queue": {},
      "neverRelease": true,
      "resourceId": "",
      "resourceType": "",
      "redacted": true,
      "isScoringIndex": true
   },
   "expertEvaluator": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   }
}
  */
QualityApi.prototype.postCalibrations = function postCalibrations(body, expand){
    var requestPath = '/api/v2/quality/calibrations';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery.expand = expand;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a calibration by id.
  * @memberOf QualityApi#
  * @param {string} calibrationId - Calibration ID
  * @param {string} calibratorId - calibratorId
  */
QualityApi.prototype.getCalibrationsCalibrationId = function getCalibrationsCalibrationId(calibrationId, calibratorId){
    var requestPath = '/api/v2/quality/calibrations/{calibrationId}';
    var requestQuery = {};
    var requestBody;

    if(calibrationId === undefined || calibrationId === null){
      throw new Error('Missing required  parameter: calibrationId');
    }
    requestPath = requestPath.replace('{calibrationId}', calibrationId);
    if(calibratorId === undefined || calibratorId === null){
      throw new Error('Missing required  parameter: calibratorId');
    }
    requestQuery.calibratorId = calibratorId;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a calibration to the specified calibration via PUT.  Editable fields include: evaluators, expertEvaluator, and scoringIndex
  * @memberOf QualityApi#
  * @param {string} calibrationId - Calibration ID
  * @param {} body - Calibration
  * @example
  * Body Example:
  * {
   "name": "",
   "calibrator": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "agent": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "conversation": {
      "name": "",
      "startTime": "",
      "endTime": "",
      "address": "",
      "participants": [],
      "conversationIds": [],
      "maxParticipants": 0,
      "recordingState": ""
   },
   "evaluationForm": {
      "name": "",
      "type": "",
      "modifiedDate": "",
      "published": true,
      "contextId": "",
      "questionGroups": [],
      "publishedVersions": {}
   },
   "contextId": "",
   "averageScore": 0,
   "highScore": 0,
   "lowScore": 0,
   "createdDate": "",
   "evaluations": [],
   "evaluators": [],
   "scoringIndex": {
      "name": "",
      "conversation": {},
      "evaluationForm": {},
      "evaluator": {},
      "agent": {},
      "calibration": {},
      "status": "",
      "answers": {},
      "agentHasRead": true,
      "releaseDate": "",
      "assignedDate": "",
      "changedDate": "",
      "queue": {},
      "neverRelease": true,
      "resourceId": "",
      "resourceType": "",
      "redacted": true,
      "isScoringIndex": true
   },
   "expertEvaluator": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   }
}
  */
QualityApi.prototype.putCalibrationsCalibrationId = function putCalibrationsCalibrationId(calibrationId, body){
    var requestPath = '/api/v2/quality/calibrations/{calibrationId}';
    var requestQuery = {};
    var requestBody;

    if(calibrationId === undefined || calibrationId === null){
      throw new Error('Missing required  parameter: calibrationId');
    }
    requestPath = requestPath.replace('{calibrationId}', calibrationId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a calibration by id.
  * @memberOf QualityApi#
  * @param {string} calibrationId - Calibration ID
  * @param {string} calibratorId - calibratorId
  */
QualityApi.prototype.deleteCalibrationsCalibrationId = function deleteCalibrationsCalibrationId(calibrationId, calibratorId){
    var requestPath = '/api/v2/quality/calibrations/{calibrationId}';
    var requestQuery = {};
    var requestBody;

    if(calibrationId === undefined || calibrationId === null){
      throw new Error('Missing required  parameter: calibrationId');
    }
    requestPath = requestPath.replace('{calibrationId}', calibrationId);
    if(calibratorId === undefined || calibratorId === null){
      throw new Error('Missing required  parameter: calibratorId');
    }
    requestQuery.calibratorId = calibratorId;
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get audits for conversation or recording
  * @memberOf QualityApi#
  * @param {string} conversationId - Conversation ID
  * @param {integer} pageSize - The total page size requested
  * @param {integer} pageNumber - The page number requested
  * @param {string} sortBy - variable name requested to sort by
  * @param {array} expand - variable name requested by expand list
  * @param {string} nextPage - next page token
  * @param {string} previousPage - Previous page token
  * @param {string} recordingId - id of the recording
  * @param {string} entityType - entity type options: Recording, Calibration, Evaluation, Annotation
  */
QualityApi.prototype.getConversationsConversationIdAudits = function getConversationsConversationIdAudits(conversationId, pageSize, pageNumber, sortBy, expand, nextPage, previousPage, recordingId, entityType){
    var requestPath = '/api/v2/quality/conversations/{conversationId}/audits';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.expand = expand;
    requestQuery.nextPage = nextPage;
    requestQuery.previousPage = previousPage;
    requestQuery.recordingId = recordingId;
    requestQuery.entityType = entityType;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create an evaluation
  * @memberOf QualityApi#
  * @param {string} conversationId - 
  * @param {} body - evaluation
  * @param {string} expand - evaluatorId
  * @example
  * Body Example:
  * {
   "name": "",
   "conversation": {
      "name": "",
      "startTime": "",
      "endTime": "",
      "address": "",
      "participants": [],
      "conversationIds": [],
      "maxParticipants": 0,
      "recordingState": ""
   },
   "evaluationForm": {
      "name": "",
      "type": "",
      "modifiedDate": "",
      "published": true,
      "contextId": "",
      "questionGroups": [],
      "publishedVersions": {}
   },
   "evaluator": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "agent": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "calibration": {
      "name": "",
      "calibrator": {},
      "agent": {},
      "conversation": {},
      "evaluationForm": {},
      "contextId": "",
      "averageScore": 0,
      "highScore": 0,
      "lowScore": 0,
      "createdDate": "",
      "evaluations": [],
      "evaluators": [],
      "scoringIndex": {},
      "expertEvaluator": {}
   },
   "status": "",
   "answers": {
      "totalScore": {},
      "totalCriticalScore": {},
      "questionGroupScores": [],
      "anyFailedKillQuestions": true,
      "comments": "",
      "agentComments": ""
   },
   "agentHasRead": true,
   "releaseDate": "",
   "assignedDate": "",
   "changedDate": "",
   "queue": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "mediaSettings": {},
      "bullseye": {},
      "acwSettings": {},
      "skillEvaluationMethod": "",
      "queueFlow": {},
      "callingPartyName": "",
      "callingPartyNumber": "",
      "memberCount": 0
   },
   "neverRelease": true,
   "resourceId": "",
   "resourceType": "",
   "redacted": true,
   "isScoringIndex": true
}
  */
QualityApi.prototype.postConversationsConversationIdEvaluations = function postConversationsConversationIdEvaluations(conversationId, body, expand){
    var requestPath = '/api/v2/quality/conversations/{conversationId}/evaluations';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery.expand = expand;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get an evaluation
  * @memberOf QualityApi#
  * @param {string} conversationId - 
  * @param {string} evaluationId - 
  * @param {string} expand - agent, evaluator, evaluationForm
  */
QualityApi.prototype.getConversationsConversationIdEvaluationsEvaluationId = function getConversationsConversationIdEvaluationsEvaluationId(conversationId, evaluationId, expand){
    var requestPath = '/api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(evaluationId === undefined || evaluationId === null){
      throw new Error('Missing required  parameter: evaluationId');
    }
    requestPath = requestPath.replace('{evaluationId}', evaluationId);
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an evaluation
  * @memberOf QualityApi#
  * @param {string} conversationId - 
  * @param {string} evaluationId - 
  * @param {} body - evaluation
  * @param {string} expand - evaluatorId
  * @example
  * Body Example:
  * {
   "name": "",
   "conversation": {
      "name": "",
      "startTime": "",
      "endTime": "",
      "address": "",
      "participants": [],
      "conversationIds": [],
      "maxParticipants": 0,
      "recordingState": ""
   },
   "evaluationForm": {
      "name": "",
      "type": "",
      "modifiedDate": "",
      "published": true,
      "contextId": "",
      "questionGroups": [],
      "publishedVersions": {}
   },
   "evaluator": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "agent": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "calibration": {
      "name": "",
      "calibrator": {},
      "agent": {},
      "conversation": {},
      "evaluationForm": {},
      "contextId": "",
      "averageScore": 0,
      "highScore": 0,
      "lowScore": 0,
      "createdDate": "",
      "evaluations": [],
      "evaluators": [],
      "scoringIndex": {},
      "expertEvaluator": {}
   },
   "status": "",
   "answers": {
      "totalScore": {},
      "totalCriticalScore": {},
      "questionGroupScores": [],
      "anyFailedKillQuestions": true,
      "comments": "",
      "agentComments": ""
   },
   "agentHasRead": true,
   "releaseDate": "",
   "assignedDate": "",
   "changedDate": "",
   "queue": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "mediaSettings": {},
      "bullseye": {},
      "acwSettings": {},
      "skillEvaluationMethod": "",
      "queueFlow": {},
      "callingPartyName": "",
      "callingPartyNumber": "",
      "memberCount": 0
   },
   "neverRelease": true,
   "resourceId": "",
   "resourceType": "",
   "redacted": true,
   "isScoringIndex": true
}
  */
QualityApi.prototype.putConversationsConversationIdEvaluationsEvaluationId = function putConversationsConversationIdEvaluationsEvaluationId(conversationId, evaluationId, body, expand){
    var requestPath = '/api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(evaluationId === undefined || evaluationId === null){
      throw new Error('Missing required  parameter: evaluationId');
    }
    requestPath = requestPath.replace('{evaluationId}', evaluationId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery.expand = expand;
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete an evaluation
  * @memberOf QualityApi#
  * @param {string} conversationId - 
  * @param {string} evaluationId - 
  * @param {string} expand - evaluatorId
  */
QualityApi.prototype.deleteConversationsConversationIdEvaluationsEvaluationId = function deleteConversationsConversationIdEvaluationsEvaluationId(conversationId, evaluationId, expand){
    var requestPath = '/api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(evaluationId === undefined || evaluationId === null){
      throw new Error('Missing required  parameter: evaluationId');
    }
    requestPath = requestPath.replace('{evaluationId}', evaluationId);
    requestQuery.expand = expand;
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Queries Evaluations and returns a paged list
  * @description Query params must include one of conversationId, evaluatorUserId, or agentUserId
  * @memberOf QualityApi#
  * @param {integer} pageSize - The total page size requested
  * @param {integer} pageNumber - The page number requested
  * @param {string} sortBy - variable name requested to sort by
  * @param {array} expand - variable name requested by expand list
  * @param {string} nextPage - next page token
  * @param {string} previousPage - Previous page token
  * @param {string} conversationId - conversationId specified
  * @param {string} agentUserId - user id of the agent
  * @param {string} evaluatorUserId - evaluator user id
  * @param {string} queueId - queue id
  * @param {string} startTime - start time of the evaluation query
  * @param {string} endTime - end time of the evaluation query
  * @param {array} evaluationState - evaluation state options: Pending, InProgress, Finished
  * @param {boolean} isReleased - the evaluation has been released
  * @param {boolean} agentHasRead - agent has the evaluation
  * @param {boolean} expandAnswerTotalScores - get the total scores for evaluations
  * @param {integer} maximum - maximum
  */
QualityApi.prototype.getEvaluationsQuery = function getEvaluationsQuery(pageSize, pageNumber, sortBy, expand, nextPage, previousPage, conversationId, agentUserId, evaluatorUserId, queueId, startTime, endTime, evaluationState, isReleased, agentHasRead, expandAnswerTotalScores, maximum){
    var requestPath = '/api/v2/quality/evaluations/query';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.expand = expand;
    requestQuery.nextPage = nextPage;
    requestQuery.previousPage = previousPage;
    requestQuery.conversationId = conversationId;
    requestQuery.agentUserId = agentUserId;
    requestQuery.evaluatorUserId = evaluatorUserId;
    requestQuery.queueId = queueId;
    requestQuery.startTime = startTime;
    requestQuery.endTime = endTime;
    requestQuery.evaluationState = evaluationState;
    requestQuery.isReleased = isReleased;
    requestQuery.agentHasRead = agentHasRead;
    requestQuery.expandAnswerTotalScores = expandAnswerTotalScores;
    requestQuery.maximum = maximum;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Score evaluation
  * @memberOf QualityApi#
  * @param {} body - evaluationAndScoringSet
  * @example
  * Body Example:
  * {
   "evaluationForm": {
      "name": "",
      "type": "",
      "modifiedDate": "",
      "published": true,
      "contextId": "",
      "questionGroups": [],
      "publishedVersions": {}
   },
   "answers": {
      "totalScore": {},
      "totalCriticalScore": {},
      "questionGroupScores": [],
      "anyFailedKillQuestions": true,
      "comments": "",
      "agentComments": ""
   }
}
  */
QualityApi.prototype.postEvaluationsScoring = function postEvaluationsScoring(body){
    var requestPath = '/api/v2/quality/evaluations/scoring';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get an evaluator activity
  * @memberOf QualityApi#
  * @param {integer} pageSize - The total page size requested
  * @param {integer} pageNumber - The page number requested
  * @param {string} sortBy - variable name requested to sort by
  * @param {array} expand - variable name requested by expand list
  * @param {string} nextPage - next page token
  * @param {string} previousPage - Previous page token
  * @param {string} startTime - The start time specified. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
  * @param {string} endTime - The end time specified. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
  * @param {string} name - Evaluator name
  * @param {array} permission - permission strings
  * @param {string} group - group id
  */
QualityApi.prototype.getEvaluatorsActivity = function getEvaluatorsActivity(pageSize, pageNumber, sortBy, expand, nextPage, previousPage, startTime, endTime, name, permission, group){
    var requestPath = '/api/v2/quality/evaluators/activity';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.expand = expand;
    requestQuery.nextPage = nextPage;
    requestQuery.previousPage = previousPage;
    requestQuery.startTime = startTime;
    requestQuery.endTime = endTime;
    requestQuery.name = name;
    requestQuery.permission = permission;
    requestQuery.group = group;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of evaluation forms
  * @memberOf QualityApi#
  * @param {integer} pageSize - The total page size requested
  * @param {integer} pageNumber - The page number requested
  * @param {string} sortBy - variable name requested to sort by
  * @param {string} nextPage - next page token
  * @param {string} previousPage - Previous page token
  * @param {string} expand - Expand
  * @param {string} name - Name
  */
QualityApi.prototype.getForms = function getForms(pageSize, pageNumber, sortBy, nextPage, previousPage, expand, name){
    var requestPath = '/api/v2/quality/forms';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.nextPage = nextPage;
    requestQuery.previousPage = previousPage;
    requestQuery.expand = expand;
    requestQuery.name = name;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create an evaluation form.
  * @memberOf QualityApi#
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "name": "",
   "type": "",
   "modifiedDate": "",
   "published": true,
   "contextId": "",
   "questionGroups": [],
   "publishedVersions": {
      "pageSize": 0,
      "pageNumber": 0,
      "total": 0,
      "entities": [],
      "selfUri": "",
      "firstUri": "",
      "lastUri": "",
      "nextUri": "",
      "previousUri": "",
      "pageCount": 0
   }
}
  */
QualityApi.prototype.postForms = function postForms(body){
    var requestPath = '/api/v2/quality/forms';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get an evaluation form
  * @memberOf QualityApi#
  * @param {string} formId - Form ID
  */
QualityApi.prototype.getFormsFormId = function getFormsFormId(formId){
    var requestPath = '/api/v2/quality/forms/{formId}';
    var requestQuery = {};
    var requestBody;

    if(formId === undefined || formId === null){
      throw new Error('Missing required  parameter: formId');
    }
    requestPath = requestPath.replace('{formId}', formId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an evaluation form.
  * @memberOf QualityApi#
  * @param {string} formId - Form ID
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "name": "",
   "type": "",
   "modifiedDate": "",
   "published": true,
   "contextId": "",
   "questionGroups": [],
   "publishedVersions": {
      "pageSize": 0,
      "pageNumber": 0,
      "total": 0,
      "entities": [],
      "selfUri": "",
      "firstUri": "",
      "lastUri": "",
      "nextUri": "",
      "previousUri": "",
      "pageCount": 0
   }
}
  */
QualityApi.prototype.putFormsFormId = function putFormsFormId(formId, body){
    var requestPath = '/api/v2/quality/forms/{formId}';
    var requestQuery = {};
    var requestBody;

    if(formId === undefined || formId === null){
      throw new Error('Missing required  parameter: formId');
    }
    requestPath = requestPath.replace('{formId}', formId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete an evaluation form.
  * @memberOf QualityApi#
  * @param {string} formId - Form ID
  */
QualityApi.prototype.deleteFormsFormId = function deleteFormsFormId(formId){
    var requestPath = '/api/v2/quality/forms/{formId}';
    var requestQuery = {};
    var requestBody;

    if(formId === undefined || formId === null){
      throw new Error('Missing required  parameter: formId');
    }
    requestPath = requestPath.replace('{formId}', formId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Gets all the revisions for a specific evaluation.
  * @memberOf QualityApi#
  * @param {string} formId - Form ID
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  */
QualityApi.prototype.getFormsFormIdVersions = function getFormsFormIdVersions(formId, pageSize, pageNumber){
    var requestPath = '/api/v2/quality/forms/{formId}/versions';
    var requestQuery = {};
    var requestBody;

    if(formId === undefined || formId === null){
      throw new Error('Missing required  parameter: formId');
    }
    requestPath = requestPath.replace('{formId}', formId);
    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of keyword sets
  * @memberOf QualityApi#
  * @param {integer} pageSize - The total page size requested
  * @param {integer} pageNumber - The page number requested
  * @param {string} sortBy - variable name requested to sort by
  * @param {array} expand - variable name requested by expand list
  * @param {string} nextPage - next page token
  * @param {string} previousPage - Previous page token
  * @param {string} name - the keyword set name - used for filtering results in searches.
  */
QualityApi.prototype.getKeywordsets = function getKeywordsets(pageSize, pageNumber, sortBy, expand, nextPage, previousPage, name){
    var requestPath = '/api/v2/quality/keywordsets';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.expand = expand;
    requestQuery.nextPage = nextPage;
    requestQuery.previousPage = previousPage;
    requestQuery.name = name;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a Keyword Set
  * @memberOf QualityApi#
  * @param {} body - keywordSet
  * @param {string} expand - queueId
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "queue": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "mediaSettings": {},
      "bullseye": {},
      "acwSettings": {},
      "skillEvaluationMethod": "",
      "queueFlow": {},
      "callingPartyName": "",
      "callingPartyNumber": "",
      "memberCount": 0
   },
   "language": "",
   "agents": [],
   "keywords": [],
   "participantPurposes": []
}
  */
QualityApi.prototype.postKeywordsets = function postKeywordsets(body, expand){
    var requestPath = '/api/v2/quality/keywordsets';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery.expand = expand;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete keyword sets
  * @description Bulk delete of keyword sets; this will only delete the keyword sets that match the ids specified in the query param.
  * @memberOf QualityApi#
  * @param {string} ids - A comma-delimited list of valid KeywordSet ids
  */
QualityApi.prototype.deleteKeywordsets = function deleteKeywordsets(ids){
    var requestPath = '/api/v2/quality/keywordsets';
    var requestQuery = {};
    var requestBody;

    if(ids === undefined || ids === null){
      throw new Error('Missing required  parameter: ids');
    }
    requestQuery.ids = ids;
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a keywordSet by id.
  * @memberOf QualityApi#
  * @param {string} keywordSetId - KeywordSet ID
  */
QualityApi.prototype.getKeywordsetsKeywordsetId = function getKeywordsetsKeywordsetId(keywordSetId){
    var requestPath = '/api/v2/quality/keywordsets/{keywordSetId}';
    var requestQuery = {};
    var requestBody;

    if(keywordSetId === undefined || keywordSetId === null){
      throw new Error('Missing required  parameter: keywordSetId');
    }
    requestPath = requestPath.replace('{keywordSetId}', keywordSetId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a keywordSet to the specified keywordSet via PUT.
  * @memberOf QualityApi#
  * @param {string} keywordSetId - KeywordSet ID
  * @param {} body - keywordSet
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "queue": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "mediaSettings": {},
      "bullseye": {},
      "acwSettings": {},
      "skillEvaluationMethod": "",
      "queueFlow": {},
      "callingPartyName": "",
      "callingPartyNumber": "",
      "memberCount": 0
   },
   "language": "",
   "agents": [],
   "keywords": [],
   "participantPurposes": []
}
  */
QualityApi.prototype.putKeywordsetsKeywordsetId = function putKeywordsetsKeywordsetId(keywordSetId, body){
    var requestPath = '/api/v2/quality/keywordsets/{keywordSetId}';
    var requestQuery = {};
    var requestBody;

    if(keywordSetId === undefined || keywordSetId === null){
      throw new Error('Missing required  parameter: keywordSetId');
    }
    requestPath = requestPath.replace('{keywordSetId}', keywordSetId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a keywordSet by id.
  * @memberOf QualityApi#
  * @param {string} keywordSetId - KeywordSet ID
  */
QualityApi.prototype.deleteKeywordsetsKeywordsetId = function deleteKeywordsetsKeywordsetId(keywordSetId){
    var requestPath = '/api/v2/quality/keywordsets/{keywordSetId}';
    var requestQuery = {};
    var requestBody;

    if(keywordSetId === undefined || keywordSetId === null){
      throw new Error('Missing required  parameter: keywordSetId');
    }
    requestPath = requestPath.replace('{keywordSetId}', keywordSetId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the published evaluation forms.
  * @memberOf QualityApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} name - Name
  */
QualityApi.prototype.getPublishedforms = function getPublishedforms(pageSize, pageNumber, name){
    var requestPath = '/api/v2/quality/publishedforms';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.name = name;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Publish an evaluation form.
  * @memberOf QualityApi#
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "name": "",
   "type": "",
   "modifiedDate": "",
   "published": true,
   "contextId": "",
   "questionGroups": [],
   "publishedVersions": {
      "pageSize": 0,
      "pageNumber": 0,
      "total": 0,
      "entities": [],
      "selfUri": "",
      "firstUri": "",
      "lastUri": "",
      "nextUri": "",
      "previousUri": "",
      "pageCount": 0
   }
}
  */
QualityApi.prototype.postPublishedforms = function postPublishedforms(body){
    var requestPath = '/api/v2/quality/publishedforms';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the published evaluation forms.
  * @memberOf QualityApi#
  * @param {string} formId - Form ID
  */
QualityApi.prototype.getPublishedformsFormId = function getPublishedformsFormId(formId){
    var requestPath = '/api/v2/quality/publishedforms/{formId}';
    var requestQuery = {};
    var requestBody;

    if(formId === undefined || formId === null){
      throw new Error('Missing required  parameter: formId');
    }
    requestPath = requestPath.replace('{formId}', formId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};



/**
* @class
* @example
* var api = new RecordingApi(pureCloudSession);
*/
function RecordingApi(session) {
    if(!(this instanceof RecordingApi)) {
        return new RecordingApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('RecordingApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get all of a Conversation's Recordings.
  * @memberOf RecordingApi#
  * @param {string} conversationId - Conversation ID
  * @param {integer} maxWaitMs - The maximum number of milliseconds to wait for the recording to be ready.
  Any integer greater than or equal to 0.,
  * @param {string} formatId - The desired media format
  WAV,
  WEBM,
  WAV_ULAW,
  OGG_VORBIS,
  OGG_OPUS,
  NONE,
  */
RecordingApi.prototype.getConversationIdRecordings = function getConversationIdRecordings(conversationId, maxWaitMs, formatId){
    var requestPath = '/api/v2/conversations/{conversationId}/recordings';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    requestQuery.maxWaitMs = maxWaitMs;
    requestQuery.formatId = formatId;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Gets a specific recording.
  * @memberOf RecordingApi#
  * @param {string} conversationId - Conversation ID
  * @param {string} recordingId - Recording ID
  * @param {string} formatId - The desired media format.
  WAV,
  WEBM,
  WAV_ULAW,
  OGG_VORBIS,
  OGG_OPUS,
  NONE,
  * @param {boolean} download - requesting a download format of the recording
  true,
  false,
  * @param {string} fileName - the name of the downloaded fileName
  */
RecordingApi.prototype.getConversationIdRecordingsRecordingId = function getConversationIdRecordingsRecordingId(conversationId, recordingId, formatId, download, fileName){
    var requestPath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    requestQuery.formatId = formatId;
    requestQuery.download = download;
    requestQuery.fileName = fileName;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Updates the retention records on a recording.
  * @description Currently supports updating and removing both archive and delete dates for eligible recordings. A request to change the archival date of an archived recording will result in a restoration of the recording until the new date set. Use of the query parameter 'restoreDays' is deprecated and will be removed in the next major version release. If 'restoreDays' is provided, no attempt at updating other retention data will be made. To migrate to the new usage, issuing a request with restoreDays=10 would instead set the archiveDate's time stamp in the PUT body to 10 days in the future.
  * @memberOf RecordingApi#
  * @param {string} conversationId - Conversation ID
  * @param {string} recordingId - Recording ID
  * @param {} body - recording
  * @example
  * Body Example:
  * {
   "name": "",
   "conversationId": "",
   "path": "",
   "startTime": "",
   "endTime": "",
   "media": "",
   "annotations": [],
   "transcript": [],
   "emailTranscript": [],
   "fileState": "",
   "restoreExpirationTime": "",
   "mediaUris": {},
   "estimatedTranscodeTimeMs": 0,
   "actualTranscodeTimeMs": 0,
   "archiveDate": "",
   "archiveMedium": "",
   "deleteDate": "",
   "maxAllowedRestorationsForOrg": 0,
   "remainingRestorationsAllowedForOrg": 0,
   "sessionId": ""
}
  */
RecordingApi.prototype.putConversationIdRecordingsRecordingId = function putConversationIdRecordingsRecordingId(conversationId, recordingId, body){
    var requestPath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get annotations for recording
  * @memberOf RecordingApi#
  * @param {string} conversationId - Conversation ID
  * @param {string} recordingId - Recording ID
  */
RecordingApi.prototype.getConversationIdRecordingsRecordingIdAnnotations = function getConversationIdRecordingsRecordingIdAnnotations(conversationId, recordingId){
    var requestPath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create annotation
  * @memberOf RecordingApi#
  * @param {string} conversationId - Conversation ID
  * @param {string} recordingId - Recording ID
  * @param {} body - annotation
  * @example
  * Body Example:
  * {
   "name": "",
   "type": "",
   "location": 0,
   "durationMs": 0,
   "user": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "description": ""
}
  */
RecordingApi.prototype.postConversationIdRecordingsRecordingIdAnnotations = function postConversationIdRecordingsRecordingIdAnnotations(conversationId, recordingId, body){
    var requestPath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get annotation
  * @memberOf RecordingApi#
  * @param {string} conversationId - Conversation ID
  * @param {string} recordingId - Recording ID
  * @param {string} annotationId - Annotation ID
  */
RecordingApi.prototype.getConversationIdRecordingsRecordingIdAnnotationsAnnotationId = function getConversationIdRecordingsRecordingIdAnnotationsAnnotationId(conversationId, recordingId, annotationId){
    var requestPath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    if(annotationId === undefined || annotationId === null){
      throw new Error('Missing required  parameter: annotationId');
    }
    requestPath = requestPath.replace('{annotationId}', annotationId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update annotation
  * @memberOf RecordingApi#
  * @param {string} conversationId - Conversation ID
  * @param {string} recordingId - Recording ID
  * @param {string} annotationId - Annotation ID
  * @param {} body - annotation
  * @example
  * Body Example:
  * {
   "name": "",
   "type": "",
   "location": 0,
   "durationMs": 0,
   "user": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "description": ""
}
  */
RecordingApi.prototype.putConversationIdRecordingsRecordingIdAnnotationsAnnotationId = function putConversationIdRecordingsRecordingIdAnnotationsAnnotationId(conversationId, recordingId, annotationId, body){
    var requestPath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    if(annotationId === undefined || annotationId === null){
      throw new Error('Missing required  parameter: annotationId');
    }
    requestPath = requestPath.replace('{annotationId}', annotationId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete annotation
  * @memberOf RecordingApi#
  * @param {string} conversationId - Conversation ID
  * @param {string} recordingId - Recording ID
  * @param {string} annotationId - Annotation ID
  */
RecordingApi.prototype.deleteConversationIdRecordingsRecordingIdAnnotationsAnnotationId = function deleteConversationIdRecordingsRecordingIdAnnotationsAnnotationId(conversationId, recordingId, annotationId){
    var requestPath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    if(annotationId === undefined || annotationId === null){
      throw new Error('Missing required  parameter: annotationId');
    }
    requestPath = requestPath.replace('{annotationId}', annotationId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Gets all orphan recordings
  * @memberOf RecordingApi#
  * @param {integer} pageSize - The total page size requested
  * @param {integer} pageNumber - The page number requested
  * @param {string} sortBy - variable name requested to sort by
  * @param {array} expand - variable name requested by expand list
  * @param {string} nextPage - next page token
  * @param {string} previousPage - Previous page token
  */
RecordingApi.prototype.getOrphanrecordings = function getOrphanrecordings(pageSize, pageNumber, sortBy, expand, nextPage, previousPage){
    var requestPath = '/api/v2/orphanrecordings';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.expand = expand;
    requestQuery.nextPage = nextPage;
    requestQuery.previousPage = previousPage;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Gets a single orphan recording
  * @memberOf RecordingApi#
  * @param {string} orphanId - Orphan ID
  */
RecordingApi.prototype.getOrphanId = function getOrphanId(orphanId){
    var requestPath = '/api/v2/orphanrecordings/{orphanId}';
    var requestQuery = {};
    var requestBody;

    if(orphanId === undefined || orphanId === null){
      throw new Error('Missing required  parameter: orphanId');
    }
    requestPath = requestPath.replace('{orphanId}', orphanId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary  deletes a single orphan recording
  * @memberOf RecordingApi#
  * @param {string} orphanId - Orphan ID
  */
RecordingApi.prototype.deleteOrphanId = function deleteOrphanId(orphanId){
    var requestPath = '/api/v2/orphanrecordings/{orphanId}';
    var requestQuery = {};
    var requestBody;

    if(orphanId === undefined || orphanId === null){
      throw new Error('Missing required  parameter: orphanId');
    }
    requestPath = requestPath.replace('{orphanId}', orphanId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Gets media retention policy list with query options to filter on name and enabled.
  * @description for a less verbose response, add summary=true to this endpoint
  * @memberOf RecordingApi#
  * @param {integer} pageSize - The total page size requested
  * @param {integer} pageNumber - The page number requested
  * @param {string} sortBy - variable name requested to sort by
  * @param {array} expand - variable name requested by expand list
  * @param {string} nextPage - next page token
  * @param {string} previousPage - Previous page token
  * @param {string} name - the policy name - used for filtering results in searches.
  * @param {boolean} enabled - checks to see if policy is enabled - use enabled = true or enabled = false
  * @param {boolean} summary - provides a less verbose response of policy lists.
  * @param {boolean} hasErrors - provides a way to fetch all policies with errors or policies that do not have errors
  */
RecordingApi.prototype.getMediaretentionpolicies = function getMediaretentionpolicies(pageSize, pageNumber, sortBy, expand, nextPage, previousPage, name, enabled, summary, hasErrors){
    var requestPath = '/api/v2/recording/mediaretentionpolicies';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.expand = expand;
    requestQuery.nextPage = nextPage;
    requestQuery.previousPage = previousPage;
    requestQuery.name = name;
    requestQuery.enabled = enabled;
    requestQuery.summary = summary;
    requestQuery.hasErrors = hasErrors;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create media retention policy
  * @memberOf RecordingApi#
  * @param {} body - Policy
  * @example
  * Body Example:
  * {
   "name": "",
   "modifiedDate": "",
   "createdDate": "",
   "order": 0,
   "description": "",
   "enabled": true,
   "mediaPolicies": {
      "callPolicy": {},
      "chatPolicy": {},
      "emailPolicy": {}
   },
   "conditions": {
      "forUsers": [],
      "directions": [],
      "dateRanges": [],
      "mediaTypes": [],
      "forQueues": [],
      "duration": {},
      "wrapupCodes": [],
      "timeAllowed": {}
   },
   "actions": {
      "retainRecording": true,
      "deleteRecording": true,
      "alwaysDelete": true,
      "assignEvaluations": [],
      "assignMeteredEvaluations": [],
      "assignCalibrations": [],
      "retentionDuration": {},
      "initiateScreenRecording": {}
   },
   "policyErrors": {
      "policyErrorMessages": []
   }
}
  */
RecordingApi.prototype.postMediaretentionpolicies = function postMediaretentionpolicies(body){
    var requestPath = '/api/v2/recording/mediaretentionpolicies';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete media retention policies
  * @description Bulk delete of media retention policies, this will only delete the polices that match the ids specified in the query param.
  * @memberOf RecordingApi#
  * @param {string} ids - Bulk delete of media retention policies, this will only delete the polices that match the ids specified in the query param.
  */
RecordingApi.prototype.deleteMediaretentionpolicies = function deleteMediaretentionpolicies(ids){
    var requestPath = '/api/v2/recording/mediaretentionpolicies';
    var requestQuery = {};
    var requestBody;

    if(ids === undefined || ids === null){
      throw new Error('Missing required  parameter: ids');
    }
    requestQuery.ids = ids;
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a media retention policy
  * @memberOf RecordingApi#
  * @param {string} policyId - Policy ID
  */
RecordingApi.prototype.getMediaretentionpoliciesPolicyId = function getMediaretentionpoliciesPolicyId(policyId){
    var requestPath = '/api/v2/recording/mediaretentionpolicies/{policyId}';
    var requestQuery = {};
    var requestBody;

    if(policyId === undefined || policyId === null){
      throw new Error('Missing required  parameter: policyId');
    }
    requestPath = requestPath.replace('{policyId}', policyId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a media retention policy
  * @memberOf RecordingApi#
  * @param {string} policyId - Policy ID
  * @param {} body - Policy
  * @example
  * Body Example:
  * {
   "name": "",
   "modifiedDate": "",
   "createdDate": "",
   "order": 0,
   "description": "",
   "enabled": true,
   "mediaPolicies": {
      "callPolicy": {},
      "chatPolicy": {},
      "emailPolicy": {}
   },
   "conditions": {
      "forUsers": [],
      "directions": [],
      "dateRanges": [],
      "mediaTypes": [],
      "forQueues": [],
      "duration": {},
      "wrapupCodes": [],
      "timeAllowed": {}
   },
   "actions": {
      "retainRecording": true,
      "deleteRecording": true,
      "alwaysDelete": true,
      "assignEvaluations": [],
      "assignMeteredEvaluations": [],
      "assignCalibrations": [],
      "retentionDuration": {},
      "initiateScreenRecording": {}
   },
   "policyErrors": {
      "policyErrorMessages": []
   }
}
  */
RecordingApi.prototype.putMediaretentionpoliciesPolicyId = function putMediaretentionpoliciesPolicyId(policyId, body){
    var requestPath = '/api/v2/recording/mediaretentionpolicies/{policyId}';
    var requestQuery = {};
    var requestBody;

    if(policyId === undefined || policyId === null){
      throw new Error('Missing required  parameter: policyId');
    }
    requestPath = requestPath.replace('{policyId}', policyId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a media retention policy
  * @memberOf RecordingApi#
  * @param {string} policyId - Policy ID
  */
RecordingApi.prototype.deleteMediaretentionpoliciesPolicyId = function deleteMediaretentionpoliciesPolicyId(policyId){
    var requestPath = '/api/v2/recording/mediaretentionpolicies/{policyId}';
    var requestQuery = {};
    var requestBody;

    if(policyId === undefined || policyId === null){
      throw new Error('Missing required  parameter: policyId');
    }
    requestPath = requestPath.replace('{policyId}', policyId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Patch a media retention policy
  * @memberOf RecordingApi#
  * @param {string} policyId - Policy ID
  * @param {} body - Policy
  * @example
  * Body Example:
  * {
   "name": "",
   "modifiedDate": "",
   "createdDate": "",
   "order": 0,
   "description": "",
   "enabled": true,
   "mediaPolicies": {
      "callPolicy": {},
      "chatPolicy": {},
      "emailPolicy": {}
   },
   "conditions": {
      "forUsers": [],
      "directions": [],
      "dateRanges": [],
      "mediaTypes": [],
      "forQueues": [],
      "duration": {},
      "wrapupCodes": [],
      "timeAllowed": {}
   },
   "actions": {
      "retainRecording": true,
      "deleteRecording": true,
      "alwaysDelete": true,
      "assignEvaluations": [],
      "assignMeteredEvaluations": [],
      "assignCalibrations": [],
      "retentionDuration": {},
      "initiateScreenRecording": {}
   },
   "policyErrors": {
      "policyErrorMessages": []
   }
}
  */
RecordingApi.prototype.patchMediaretentionpoliciesPolicyId = function patchMediaretentionpoliciesPolicyId(policyId, body){
    var requestPath = '/api/v2/recording/mediaretentionpolicies/{policyId}';
    var requestQuery = {};
    var requestBody;

    if(policyId === undefined || policyId === null){
      throw new Error('Missing required  parameter: policyId');
    }
    requestPath = requestPath.replace('{policyId}', policyId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the Recording Settings for the Organization
  * @memberOf RecordingApi#
  * @param {boolean} createDefault - If no settings are found, a new one is created with default values
  */
RecordingApi.prototype.getSettings = function getSettings(createDefault){
    var requestPath = '/api/v2/recording/settings';
    var requestQuery = {};
    var requestBody;

    requestQuery.createDefault = createDefault;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update the Recording Settings for the Organization
  * @memberOf RecordingApi#
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "maxSimultaneousStreams": 0
}
  */
RecordingApi.prototype.putSettings = function putSettings(body){
    var requestPath = '/api/v2/recording/settings';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};



/**
* @class
* @example
* var api = new ResponseManagementApi(pureCloudSession);
*/
function ResponseManagementApi(session) {
    if(!(this instanceof ResponseManagementApi)) {
        return new ResponseManagementApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('ResponseManagementApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Gets a list of existing response libraries.
  * @memberOf ResponseManagementApi#
  * @param {integer} pageNumber - Page number
  * @param {integer} pageSize - Page size
  */
ResponseManagementApi.prototype.getLibraries = function getLibraries(pageNumber, pageSize){
    var requestPath = '/api/v2/responsemanagement/libraries';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageNumber = pageNumber;
    requestQuery.pageSize = pageSize;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a response library.
  * @memberOf ResponseManagementApi#
  * @param {} body - Library
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "createdBy": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "dateCreated": ""
}
  */
ResponseManagementApi.prototype.postLibraries = function postLibraries(body){
    var requestPath = '/api/v2/responsemanagement/libraries';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get details about an existing response library.
  * @memberOf ResponseManagementApi#
  * @param {string} libraryId - Library ID
  */
ResponseManagementApi.prototype.getLibrariesLibraryId = function getLibrariesLibraryId(libraryId){
    var requestPath = '/api/v2/responsemanagement/libraries/{libraryId}';
    var requestQuery = {};
    var requestBody;

    if(libraryId === undefined || libraryId === null){
      throw new Error('Missing required  parameter: libraryId');
    }
    requestPath = requestPath.replace('{libraryId}', libraryId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an existing response library.
  * @description Fields that can be updated: name. The most recent version is required for updates.
  * @memberOf ResponseManagementApi#
  * @param {string} libraryId - Library ID
  * @param {} body - Library
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "createdBy": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "dateCreated": ""
}
  */
ResponseManagementApi.prototype.putLibrariesLibraryId = function putLibrariesLibraryId(libraryId, body){
    var requestPath = '/api/v2/responsemanagement/libraries/{libraryId}';
    var requestQuery = {};
    var requestBody;

    if(libraryId === undefined || libraryId === null){
      throw new Error('Missing required  parameter: libraryId');
    }
    requestPath = requestPath.replace('{libraryId}', libraryId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete an existing response library.
  * @description This will remove any responses associated with the library.
  * @memberOf ResponseManagementApi#
  * @param {string} libraryId - Library ID
  */
ResponseManagementApi.prototype.deleteLibrariesLibraryId = function deleteLibrariesLibraryId(libraryId){
    var requestPath = '/api/v2/responsemanagement/libraries/{libraryId}';
    var requestQuery = {};
    var requestBody;

    if(libraryId === undefined || libraryId === null){
      throw new Error('Missing required  parameter: libraryId');
    }
    requestPath = requestPath.replace('{libraryId}', libraryId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Gets a list of existing responses.
  * @memberOf ResponseManagementApi#
  * @param {string} libraryId - Library ID
  * @param {integer} pageNumber - Page number
  * @param {integer} pageSize - Page size
  */
ResponseManagementApi.prototype.getResponses = function getResponses(libraryId, pageNumber, pageSize){
    var requestPath = '/api/v2/responsemanagement/responses';
    var requestQuery = {};
    var requestBody;

    if(libraryId === undefined || libraryId === null){
      throw new Error('Missing required  parameter: libraryId');
    }
    requestQuery.libraryId = libraryId;
    requestQuery.pageNumber = pageNumber;
    requestQuery.pageSize = pageSize;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a response.
  * @memberOf ResponseManagementApi#
  * @param {} body - Response
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "libraries": [],
   "texts": [],
   "createdBy": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "dateCreated": "",
   "interactionType": ""
}
  */
ResponseManagementApi.prototype.postResponses = function postResponses(body){
    var requestPath = '/api/v2/responsemanagement/responses';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query responses
  * @memberOf ResponseManagementApi#
  * @param {} body - Response
  * @example
  * Body Example:
  * {
   "queryPhrase": "",
   "pageSize": 0,
   "filters": []
}
  */
ResponseManagementApi.prototype.postResponsesQuery = function postResponsesQuery(body){
    var requestPath = '/api/v2/responsemanagement/responses/query';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get details about an existing response.
  * @memberOf ResponseManagementApi#
  * @param {string} responseId - Response ID
  */
ResponseManagementApi.prototype.getResponsesResponseId = function getResponsesResponseId(responseId){
    var requestPath = '/api/v2/responsemanagement/responses/{responseId}';
    var requestQuery = {};
    var requestBody;

    if(responseId === undefined || responseId === null){
      throw new Error('Missing required  parameter: responseId');
    }
    requestPath = requestPath.replace('{responseId}', responseId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an existing response.
  * @description Fields that can be updated: name, libraries, and texts. The most recent version is required for updates.
  * @memberOf ResponseManagementApi#
  * @param {string} responseId - Response ID
  * @param {} body - Response
  * @example
  * Body Example:
  * {
   "name": "",
   "version": 0,
   "libraries": [],
   "texts": [],
   "createdBy": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "dateCreated": "",
   "interactionType": ""
}
  */
ResponseManagementApi.prototype.putResponsesResponseId = function putResponsesResponseId(responseId, body){
    var requestPath = '/api/v2/responsemanagement/responses/{responseId}';
    var requestQuery = {};
    var requestBody;

    if(responseId === undefined || responseId === null){
      throw new Error('Missing required  parameter: responseId');
    }
    requestPath = requestPath.replace('{responseId}', responseId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete an existing response.
  * @description This will remove the response from any libraries associated with it.
  * @memberOf ResponseManagementApi#
  * @param {string} responseId - Response ID
  */
ResponseManagementApi.prototype.deleteResponsesResponseId = function deleteResponsesResponseId(responseId){
    var requestPath = '/api/v2/responsemanagement/responses/{responseId}';
    var requestQuery = {};
    var requestBody;

    if(responseId === undefined || responseId === null){
      throw new Error('Missing required  parameter: responseId');
    }
    requestPath = requestPath.replace('{responseId}', responseId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};



/**
* @class
* @example
* var api = new RoutingApi(pureCloudSession);
*/
function RoutingApi(session) {
    if(!(this instanceof RoutingApi)) {
        return new RoutingApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('RoutingApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Query for queue observations
  * @memberOf RoutingApi#
  * @param {} body - query
  * @example
  * Body Example:
  * {
   "filter": {
      "type": "",
      "clauses": [],
      "predicates": []
   },
   "metrics": []
}
  */
RoutingApi.prototype.postQueuesObservationsQuery = function postQueuesObservationsQuery(body){
    var requestPath = '/api/v2/analytics/queues/observations/query';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get domains
  * @memberOf RoutingApi#
  */
RoutingApi.prototype.getEmailDomains = function getEmailDomains(){
    var requestPath = '/api/v2/routing/email/domains';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a domain
  * @memberOf RoutingApi#
  * @param {} body - Domain
  * @example
  * Body Example:
  * {
   "name": "",
   "mxRecordStatus": "",
   "subDomain": true
}
  */
RoutingApi.prototype.postEmailDomains = function postEmailDomains(body){
    var requestPath = '/api/v2/routing/email/domains';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a domain
  * @memberOf RoutingApi#
  * @param {string} domainId - domain ID
  */
RoutingApi.prototype.deleteEmailDomainsDomainId = function deleteEmailDomainsDomainId(domainId){
    var requestPath = '/api/v2/routing/email/domains/{domainId}';
    var requestQuery = {};
    var requestBody;

    if(domainId === undefined || domainId === null){
      throw new Error('Missing required  parameter: domainId');
    }
    requestPath = requestPath.replace('{domainId}', domainId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get routes
  * @memberOf RoutingApi#
  * @param {string} domainName - email domain
  */
RoutingApi.prototype.getEmailDomainsDomainnameRoutes = function getEmailDomainsDomainnameRoutes(domainName){
    var requestPath = '/api/v2/routing/email/domains/{domainName}/routes';
    var requestQuery = {};
    var requestBody;

    if(domainName === undefined || domainName === null){
      throw new Error('Missing required  parameter: domainName');
    }
    requestPath = requestPath.replace('{domainName}', domainName);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a route
  * @memberOf RoutingApi#
  * @param {string} domainName - email domain
  * @param {} body - Route
  * @example
  * Body Example:
  * {
   "name": "",
   "pattern": "",
   "queue": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "priority": 0,
   "skills": [],
   "language": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "fromName": "",
   "fromEmail": ""
}
  */
RoutingApi.prototype.postEmailDomainsDomainnameRoutes = function postEmailDomainsDomainnameRoutes(domainName, body){
    var requestPath = '/api/v2/routing/email/domains/{domainName}/routes';
    var requestQuery = {};
    var requestBody;

    if(domainName === undefined || domainName === null){
      throw new Error('Missing required  parameter: domainName');
    }
    requestPath = requestPath.replace('{domainName}', domainName);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a route
  * @memberOf RoutingApi#
  * @param {string} domainName - email domain
  * @param {string} routeId - route ID
  */
RoutingApi.prototype.getEmailDomainsDomainnameRoutesRouteId = function getEmailDomainsDomainnameRoutesRouteId(domainName, routeId){
    var requestPath = '/api/v2/routing/email/domains/{domainName}/routes/{routeId}';
    var requestQuery = {};
    var requestBody;

    if(domainName === undefined || domainName === null){
      throw new Error('Missing required  parameter: domainName');
    }
    requestPath = requestPath.replace('{domainName}', domainName);
    if(routeId === undefined || routeId === null){
      throw new Error('Missing required  parameter: routeId');
    }
    requestPath = requestPath.replace('{routeId}', routeId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a route
  * @memberOf RoutingApi#
  * @param {string} domainName - email domain
  * @param {string} routeId - route ID
  * @param {} body - Route
  * @example
  * Body Example:
  * {
   "name": "",
   "pattern": "",
   "queue": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "priority": 0,
   "skills": [],
   "language": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "fromName": "",
   "fromEmail": ""
}
  */
RoutingApi.prototype.putEmailDomainsDomainnameRoutesRouteId = function putEmailDomainsDomainnameRoutesRouteId(domainName, routeId, body){
    var requestPath = '/api/v2/routing/email/domains/{domainName}/routes/{routeId}';
    var requestQuery = {};
    var requestBody;

    if(domainName === undefined || domainName === null){
      throw new Error('Missing required  parameter: domainName');
    }
    requestPath = requestPath.replace('{domainName}', domainName);
    if(routeId === undefined || routeId === null){
      throw new Error('Missing required  parameter: routeId');
    }
    requestPath = requestPath.replace('{routeId}', routeId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a route
  * @memberOf RoutingApi#
  * @param {string} domainName - email domain
  * @param {string} routeId - route ID
  */
RoutingApi.prototype.deleteEmailDomainsDomainnameRoutesRouteId = function deleteEmailDomainsDomainnameRoutesRouteId(domainName, routeId){
    var requestPath = '/api/v2/routing/email/domains/{domainName}/routes/{routeId}';
    var requestQuery = {};
    var requestBody;

    if(domainName === undefined || domainName === null){
      throw new Error('Missing required  parameter: domainName');
    }
    requestPath = requestPath.replace('{domainName}', domainName);
    if(routeId === undefined || routeId === null){
      throw new Error('Missing required  parameter: routeId');
    }
    requestPath = requestPath.replace('{routeId}', routeId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get email setup
  * @memberOf RoutingApi#
  */
RoutingApi.prototype.getEmailSetup = function getEmailSetup(){
    var requestPath = '/api/v2/routing/email/setup';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get list of queues.
  * @memberOf RoutingApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortBy - Sort by
  * @param {string} name - Name
  * @param {boolean} active - Active
  */
RoutingApi.prototype.getQueues = function getQueues(pageSize, pageNumber, sortBy, name, active){
    var requestPath = '/api/v2/routing/queues';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.name = name;
    requestQuery.active = active;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create queue
  * @memberOf RoutingApi#
  * @param {} body - Queue
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "mediaSettings": {},
   "bullseye": {
      "rings": []
   },
   "acwSettings": {
      "wrapupPrompt": "",
      "timeoutMs": 0
   },
   "skillEvaluationMethod": "",
   "queueFlow": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "callingPartyName": "",
   "callingPartyNumber": "",
   "memberCount": 0
}
  */
RoutingApi.prototype.postQueues = function postQueues(body){
    var requestPath = '/api/v2/routing/queues';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get details about this queue.
  * @memberOf RoutingApi#
  * @param {string} queueId - Queue ID
  */
RoutingApi.prototype.getQueuesQueueId = function getQueuesQueueId(queueId){
    var requestPath = '/api/v2/routing/queues/{queueId}';
    var requestQuery = {};
    var requestBody;

    if(queueId === undefined || queueId === null){
      throw new Error('Missing required  parameter: queueId');
    }
    requestPath = requestPath.replace('{queueId}', queueId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a queue
  * @memberOf RoutingApi#
  * @param {string} queueId - Queue ID
  * @param {} body - Queue
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "mediaSettings": {},
   "bullseye": {
      "rings": []
   },
   "acwSettings": {
      "wrapupPrompt": "",
      "timeoutMs": 0
   },
   "skillEvaluationMethod": "",
   "queueFlow": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "callingPartyName": "",
   "callingPartyNumber": "",
   "memberCount": 0
}
  */
RoutingApi.prototype.putQueuesQueueId = function putQueuesQueueId(queueId, body){
    var requestPath = '/api/v2/routing/queues/{queueId}';
    var requestQuery = {};
    var requestBody;

    if(queueId === undefined || queueId === null){
      throw new Error('Missing required  parameter: queueId');
    }
    requestPath = requestPath.replace('{queueId}', queueId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a queue
  * @memberOf RoutingApi#
  * @param {string} queueId - Queue ID
  * @param {boolean} forceDelete - 
  */
RoutingApi.prototype.deleteQueuesQueueId = function deleteQueuesQueueId(queueId, forceDelete){
    var requestPath = '/api/v2/routing/queues/{queueId}';
    var requestQuery = {};
    var requestBody;

    if(queueId === undefined || queueId === null){
      throw new Error('Missing required  parameter: queueId');
    }
    requestPath = requestPath.replace('{queueId}', queueId);
    requestQuery.forceDelete = forceDelete;
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get Estimated Wait Time
  * @memberOf RoutingApi#
  * @param {string} queueId - queueId
  * @param {string} conversationId - conversationId
  */
RoutingApi.prototype.getQueuesQueueIdEstimatedwaittime = function getQueuesQueueIdEstimatedwaittime(queueId, conversationId){
    var requestPath = '/api/v2/routing/queues/{queueId}/estimatedwaittime';
    var requestQuery = {};
    var requestBody;

    if(queueId === undefined || queueId === null){
      throw new Error('Missing required  parameter: queueId');
    }
    requestPath = requestPath.replace('{queueId}', queueId);
    requestQuery.conversationId = conversationId;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the members of this queue
  * @memberOf RoutingApi#
  * @param {string} queueId - Queue ID
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortBy - Sort by
  * @param {string} expand - expand
  * @param {boolean} directMembers - Only get users that are direct members of the queue
  */
RoutingApi.prototype.getQueuesQueueIdUsers = function getQueuesQueueIdUsers(queueId, pageSize, pageNumber, sortBy, expand, directMembers){
    var requestPath = '/api/v2/routing/queues/{queueId}/users';
    var requestQuery = {};
    var requestBody;

    if(queueId === undefined || queueId === null){
      throw new Error('Missing required  parameter: queueId');
    }
    requestPath = requestPath.replace('{queueId}', queueId);
    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.expand = expand;
    requestQuery.directMembers = directMembers;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Bulk add or delete up to 100 queue members
  * @memberOf RoutingApi#
  * @param {string} queueId - Queue ID
  * @param {} body - Queue Members
  * @param {boolean} doDelete - True to delete queue members
  * @example
  * Body Example:
  * [
 {
  "name": "",
  "user": {
   "name": "",
   "chat": {},
   "department": "",
   "email": "",
   "addresses": [],
   "title": "",
   "username": "",
   "images": []
  },
  "ringNumber": 0,
  "joined": true,
  "memberBy": "",
  "routingStatus": {
   "userId": "",
   "status": "",
   "startTime": ""
  }
 }
]
  */
RoutingApi.prototype.postQueuesQueueIdUsers = function postQueuesQueueIdUsers(queueId, body, doDelete){
    var requestPath = '/api/v2/routing/queues/{queueId}/users';
    var requestQuery = {};
    var requestBody;

    if(queueId === undefined || queueId === null){
      throw new Error('Missing required  parameter: queueId');
    }
    requestPath = requestPath.replace('{queueId}', queueId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery.delete = doDelete;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Join or unjoin a set of users for a queue
  * @memberOf RoutingApi#
  * @param {string} queueId - Queue ID
  * @param {} body - Queue Members
  * @example
  * Body Example:
  * [
 {
  "name": "",
  "user": {
   "name": "",
   "chat": {},
   "department": "",
   "email": "",
   "addresses": [],
   "title": "",
   "username": "",
   "images": []
  },
  "ringNumber": 0,
  "joined": true,
  "memberBy": "",
  "routingStatus": {
   "userId": "",
   "status": "",
   "startTime": ""
  }
 }
]
  */
RoutingApi.prototype.patchQueuesQueueIdUsers = function patchQueuesQueueIdUsers(queueId, body){
    var requestPath = '/api/v2/routing/queues/{queueId}/users';
    var requestQuery = {};
    var requestBody;

    if(queueId === undefined || queueId === null){
      throw new Error('Missing required  parameter: queueId');
    }
    requestPath = requestPath.replace('{queueId}', queueId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete queue member
  * @memberOf RoutingApi#
  * @param {string} queueId - Queue ID
  * @param {string} memberId - Member ID
  */
RoutingApi.prototype.deleteQueuesQueueIdUsersMemberId = function deleteQueuesQueueIdUsersMemberId(queueId, memberId){
    var requestPath = '/api/v2/routing/queues/{queueId}/users/{memberId}';
    var requestQuery = {};
    var requestBody;

    if(queueId === undefined || queueId === null){
      throw new Error('Missing required  parameter: queueId');
    }
    requestPath = requestPath.replace('{queueId}', queueId);
    if(memberId === undefined || memberId === null){
      throw new Error('Missing required  parameter: memberId');
    }
    requestPath = requestPath.replace('{memberId}', memberId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update the ring number of joined status for a User in a Queue
  * @memberOf RoutingApi#
  * @param {string} queueId - Queue ID
  * @param {string} memberId - Member ID
  * @param {} body - Queue Member
  * @example
  * Body Example:
  * {
   "name": "",
   "user": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "ringNumber": 0,
   "joined": true,
   "memberBy": "",
   "routingStatus": {
      "userId": "",
      "status": "",
      "startTime": ""
   }
}
  */
RoutingApi.prototype.patchQueuesQueueIdUsersMemberId = function patchQueuesQueueIdUsersMemberId(queueId, memberId, body){
    var requestPath = '/api/v2/routing/queues/{queueId}/users/{memberId}';
    var requestQuery = {};
    var requestBody;

    if(queueId === undefined || queueId === null){
      throw new Error('Missing required  parameter: queueId');
    }
    requestPath = requestPath.replace('{queueId}', queueId);
    if(memberId === undefined || memberId === null){
      throw new Error('Missing required  parameter: memberId');
    }
    requestPath = requestPath.replace('{memberId}', memberId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the wrap-up codes for a queue
  * @memberOf RoutingApi#
  * @param {string} queueId - Queue ID
  * @param {string} codeId - Code ID
  */
RoutingApi.prototype.getQueuesQueueIdWrapupcodes = function getQueuesQueueIdWrapupcodes(queueId, codeId){
    var requestPath = '/api/v2/routing/queues/{queueId}/wrapupcodes';
    var requestQuery = {};
    var requestBody;

    if(queueId === undefined || queueId === null){
      throw new Error('Missing required  parameter: queueId');
    }
    requestPath = requestPath.replace('{queueId}', queueId);
    if(codeId === undefined || codeId === null){
      throw new Error('Missing required  parameter: codeId');
    }
    requestPath = requestPath.replace('{codeId}', codeId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Add up to 100 wrap-up codes to a queue
  * @memberOf RoutingApi#
  * @param {string} queueId - Queue ID
  * @param {string} codeId - Code ID
  * @param {} body - 
  * @example
  * Body Example:
  * [
 {
  "name": "",
  "dateCreated": "",
  "dateModified": "",
  "modifiedBy": "",
  "createdBy": ""
 }
]
  */
RoutingApi.prototype.postQueuesQueueIdWrapupcodes = function postQueuesQueueIdWrapupcodes(queueId, codeId, body){
    var requestPath = '/api/v2/routing/queues/{queueId}/wrapupcodes';
    var requestQuery = {};
    var requestBody;

    if(queueId === undefined || queueId === null){
      throw new Error('Missing required  parameter: queueId');
    }
    requestPath = requestPath.replace('{queueId}', queueId);
    if(codeId === undefined || codeId === null){
      throw new Error('Missing required  parameter: codeId');
    }
    requestPath = requestPath.replace('{codeId}', codeId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a wrap-up code from a queue
  * @memberOf RoutingApi#
  * @param {string} queueId - Queue ID
  * @param {string} codeId - Code ID
  */
RoutingApi.prototype.deleteQueuesQueueIdWrapupcodesCodeId = function deleteQueuesQueueIdWrapupcodesCodeId(queueId, codeId){
    var requestPath = '/api/v2/routing/queues/{queueId}/wrapupcodes/{codeId}';
    var requestQuery = {};
    var requestBody;

    if(queueId === undefined || queueId === null){
      throw new Error('Missing required  parameter: queueId');
    }
    requestPath = requestPath.replace('{queueId}', queueId);
    if(codeId === undefined || codeId === null){
      throw new Error('Missing required  parameter: codeId');
    }
    requestPath = requestPath.replace('{codeId}', codeId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of routing skills.
  * @memberOf RoutingApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  */
RoutingApi.prototype.getSkills = function getSkills(pageSize, pageNumber){
    var requestPath = '/api/v2/routing/skills';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create Skill
  * @memberOf RoutingApi#
  * @param {} body - Skill
  * @example
  * Body Example:
  * {
   "name": ""
}
  */
RoutingApi.prototype.postSkills = function postSkills(body){
    var requestPath = '/api/v2/routing/skills';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get Routing Skill
  * @memberOf RoutingApi#
  * @param {string} skillId - Skill ID
  */
RoutingApi.prototype.getSkillsSkillId = function getSkillsSkillId(skillId){
    var requestPath = '/api/v2/routing/skills/{skillId}';
    var requestQuery = {};
    var requestBody;

    if(skillId === undefined || skillId === null){
      throw new Error('Missing required  parameter: skillId');
    }
    requestPath = requestPath.replace('{skillId}', skillId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete Routing Skill
  * @memberOf RoutingApi#
  * @param {string} skillId - Skill ID
  */
RoutingApi.prototype.deleteSkillsSkillId = function deleteSkillsSkillId(skillId){
    var requestPath = '/api/v2/routing/skills/{skillId}';
    var requestQuery = {};
    var requestBody;

    if(skillId === undefined || skillId === null){
      throw new Error('Missing required  parameter: skillId');
    }
    requestPath = requestPath.replace('{skillId}', skillId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the utilization settings.
  * @memberOf RoutingApi#
  */
RoutingApi.prototype.getUtilization = function getUtilization(){
    var requestPath = '/api/v2/routing/utilization';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update the utilization settings.
  * @memberOf RoutingApi#
  * @param {} body - utilization
  * @example
  * Body Example:
  * {
   "utilization": {}
}
  */
RoutingApi.prototype.putUtilization = function putUtilization(body){
    var requestPath = '/api/v2/routing/utilization';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete utilization settings and revert to system defaults.
  * @memberOf RoutingApi#
  */
RoutingApi.prototype.deleteUtilization = function deleteUtilization(){
    var requestPath = '/api/v2/routing/utilization';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get list of wrapup codes.
  * @memberOf RoutingApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortBy - Sort by
  */
RoutingApi.prototype.getWrapupcodes = function getWrapupcodes(pageSize, pageNumber, sortBy){
    var requestPath = '/api/v2/routing/wrapupcodes';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a wrap-up code
  * @memberOf RoutingApi#
  * @param {} body - WrapupCode
  * @example
  * Body Example:
  * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": ""
}
  */
RoutingApi.prototype.postWrapupcodes = function postWrapupcodes(body){
    var requestPath = '/api/v2/routing/wrapupcodes';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get details about this wrap-up code.
  * @memberOf RoutingApi#
  * @param {string} codeId - Wrapup Code ID
  */
RoutingApi.prototype.getWrapupcodesCodeId = function getWrapupcodesCodeId(codeId){
    var requestPath = '/api/v2/routing/wrapupcodes/{codeId}';
    var requestQuery = {};
    var requestBody;

    if(codeId === undefined || codeId === null){
      throw new Error('Missing required  parameter: codeId');
    }
    requestPath = requestPath.replace('{codeId}', codeId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update wrap-up code
  * @memberOf RoutingApi#
  * @param {string} codeId - Wrapup Code ID
  * @param {} body - WrapupCode
  * @example
  * Body Example:
  * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": ""
}
  */
RoutingApi.prototype.putWrapupcodesCodeId = function putWrapupcodesCodeId(codeId, body){
    var requestPath = '/api/v2/routing/wrapupcodes/{codeId}';
    var requestQuery = {};
    var requestBody;

    if(codeId === undefined || codeId === null){
      throw new Error('Missing required  parameter: codeId');
    }
    requestPath = requestPath.replace('{codeId}', codeId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete wrap-up code
  * @memberOf RoutingApi#
  * @param {string} codeId - Wrapup Code ID
  */
RoutingApi.prototype.deleteWrapupcodesCodeId = function deleteWrapupcodesCodeId(codeId){
    var requestPath = '/api/v2/routing/wrapupcodes/{codeId}';
    var requestQuery = {};
    var requestBody;

    if(codeId === undefined || codeId === null){
      throw new Error('Missing required  parameter: codeId');
    }
    requestPath = requestPath.replace('{codeId}', codeId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary List routing skills for user
  * @memberOf RoutingApi#
  * @param {string} userId - User ID
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortOrder - Ascending or descending sort order
  ascending,
  descending,
  */
RoutingApi.prototype.getUserIdRoutingskills = function getUserIdRoutingskills(userId, pageSize, pageNumber, sortOrder){
    var requestPath = '/api/v2/users/{userId}/routingskills';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortOrder = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Add routing skill to user
  * @memberOf RoutingApi#
  * @param {string} userId - User ID
  * @param {} body - Skill
  * @example
  * Body Example:
  * {
   "name": "",
   "proficiency": {},
   "state": ""
}
  */
RoutingApi.prototype.postUserIdRoutingskills = function postUserIdRoutingskills(userId, body){
    var requestPath = '/api/v2/users/{userId}/routingskills';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update routing skill proficiency or state.
  * @memberOf RoutingApi#
  * @param {string} userId - User ID
  * @param {string} skillId - 
  * @param {} body - Skill
  * @example
  * Body Example:
  * {
   "name": "",
   "proficiency": {},
   "state": ""
}
  */
RoutingApi.prototype.putUserIdRoutingskillsSkillId = function putUserIdRoutingskillsSkillId(userId, skillId, body){
    var requestPath = '/api/v2/users/{userId}/routingskills/{skillId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(skillId === undefined || skillId === null){
      throw new Error('Missing required  parameter: skillId');
    }
    requestPath = requestPath.replace('{skillId}', skillId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Remove routing skill from user
  * @memberOf RoutingApi#
  * @param {string} userId - User ID
  * @param {string} skillId - 
  */
RoutingApi.prototype.deleteUserIdRoutingskillsSkillId = function deleteUserIdRoutingskillsSkillId(userId, skillId){
    var requestPath = '/api/v2/users/{userId}/routingskills/{skillId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(skillId === undefined || skillId === null){
      throw new Error('Missing required  parameter: skillId');
    }
    requestPath = requestPath.replace('{skillId}', skillId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};



/**
* @class
* @example
* var api = new SearchApi(pureCloudSession);
*/
function SearchApi(session) {
    if(!(this instanceof SearchApi)) {
        return new SearchApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('SearchApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Search using q64
  * @memberOf SearchApi#
  * @param {string} q64 - 
  * @param {array} expand - 
  */
SearchApi.prototype.getSearch = function getSearch(q64, expand){
    var requestPath = '/api/v2/groups/search';
    var requestQuery = {};
    var requestBody;

    requestQuery.q64 = q64;
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search
  * @memberOf SearchApi#
  * @param {} body - Search request options
  * @example
  * Body Example:
  * {
   "sortOrder": "",
   "sortBy": "",
   "pageSize": 0,
   "pageNumber": 0,
   "returnFields": [],
   "expand": [],
   "query": []
}
  */
SearchApi.prototype.postSearch = function postSearch(body){
    var requestPath = '/api/v2/groups/search';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search using q64
  * @memberOf SearchApi#
  * @param {string} q64 - 
  * @param {array} expand - 
  */
SearchApi.prototype.getSearch = function getSearch(q64, expand){
    var requestPath = '/api/v2/locations/search';
    var requestQuery = {};
    var requestBody;

    requestQuery.q64 = q64;
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search
  * @memberOf SearchApi#
  * @param {} body - Search request options
  * @example
  * Body Example:
  * {
   "sortOrder": "",
   "sortBy": "",
   "pageSize": 0,
   "pageNumber": 0,
   "returnFields": [],
   "expand": [],
   "query": []
}
  */
SearchApi.prototype.postSearch = function postSearch(body){
    var requestPath = '/api/v2/locations/search';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search using q64
  * @memberOf SearchApi#
  * @param {string} q64 - 
  * @param {array} expand - 
  * @param {boolean} profile - 
  */
SearchApi.prototype.getSearch = function getSearch(q64, expand, profile){
    var requestPath = '/api/v2/search';
    var requestQuery = {};
    var requestBody;

    requestQuery.q64 = q64;
    requestQuery.expand = expand;
    requestQuery.profile = profile;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search
  * @memberOf SearchApi#
  * @param {} body - Search request options
  * @param {boolean} profile - 
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
   "query": [],
   "aggregations": []
}
  */
SearchApi.prototype.postSearch = function postSearch(body, profile){
    var requestPath = '/api/v2/search';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery.profile = profile;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Suggest using q64
  * @memberOf SearchApi#
  * @param {string} q64 - 
  * @param {boolean} profile - 
  */
SearchApi.prototype.getSuggest = function getSuggest(q64, profile){
    var requestPath = '/api/v2/search/suggest';
    var requestQuery = {};
    var requestBody;

    requestQuery.q64 = q64;
    requestQuery.profile = profile;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Suggest
  * @memberOf SearchApi#
  * @param {} body - Search request options
  * @param {boolean} profile - 
  * @example
  * Body Example:
  * {
   "types": [],
   "query": []
}
  */
SearchApi.prototype.postSuggest = function postSuggest(body, profile){
    var requestPath = '/api/v2/search/suggest';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery.profile = profile;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search using q64
  * @memberOf SearchApi#
  * @param {string} q64 - 
  * @param {array} expand - 
  */
SearchApi.prototype.getSearch = function getSearch(q64, expand){
    var requestPath = '/api/v2/users/search';
    var requestQuery = {};
    var requestBody;

    requestQuery.q64 = q64;
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search
  * @memberOf SearchApi#
  * @param {} body - Search request options
  * @example
  * Body Example:
  * {
   "sortOrder": "",
   "sortBy": "",
   "pageSize": 0,
   "pageNumber": 0,
   "returnFields": [],
   "expand": [],
   "query": []
}
  */
SearchApi.prototype.postSearch = function postSearch(body){
    var requestPath = '/api/v2/users/search';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};



/**
* @class
* @example
* var api = new StationsApi(pureCloudSession);
*/
function StationsApi(session) {
    if(!(this instanceof StationsApi)) {
        return new StationsApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('StationsApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get the list of available stations.
  * @memberOf StationsApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortBy - Sort by
  * @param {string} name - Name
  * @param {string} lineAppearanceId - lineAppearanceId
  */
StationsApi.prototype.getStations = function getStations(pageSize, pageNumber, sortBy, name, lineAppearanceId){
    var requestPath = '/api/v2/stations';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.name = name;
    requestQuery.lineAppearanceId = lineAppearanceId;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get station.
  * @memberOf StationsApi#
  * @param {string} stationId - Station ID
  */
StationsApi.prototype.getStationId = function getStationId(stationId){
    var requestPath = '/api/v2/stations/{stationId}';
    var requestQuery = {};
    var requestBody;

    if(stationId === undefined || stationId === null){
      throw new Error('Missing required  parameter: stationId');
    }
    requestPath = requestPath.replace('{stationId}', stationId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Unassigns the user assigned to this station
  * @memberOf StationsApi#
  * @param {string} stationId - Station ID
  */
StationsApi.prototype.deleteStationIdAssociateduser = function deleteStationIdAssociateduser(stationId){
    var requestPath = '/api/v2/stations/{stationId}/associateduser';
    var requestQuery = {};
    var requestBody;

    if(stationId === undefined || stationId === null){
      throw new Error('Missing required  parameter: stationId');
    }
    requestPath = requestPath.replace('{stationId}', stationId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};



/**
* @class
* @example
* var api = new SuggestApi(pureCloudSession);
*/
function SuggestApi(session) {
    if(!(this instanceof SuggestApi)) {
        return new SuggestApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('SuggestApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Search using q64
  * @memberOf SuggestApi#
  * @param {string} q64 - 
  * @param {array} expand - 
  * @param {boolean} profile - 
  */
SuggestApi.prototype.getSearch = function getSearch(q64, expand, profile){
    var requestPath = '/api/v2/search';
    var requestQuery = {};
    var requestBody;

    requestQuery.q64 = q64;
    requestQuery.expand = expand;
    requestQuery.profile = profile;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search
  * @memberOf SuggestApi#
  * @param {} body - Search request options
  * @param {boolean} profile - 
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
   "query": [],
   "aggregations": []
}
  */
SuggestApi.prototype.postSearch = function postSearch(body, profile){
    var requestPath = '/api/v2/search';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery.profile = profile;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Suggest using q64
  * @memberOf SuggestApi#
  * @param {string} q64 - 
  * @param {boolean} profile - 
  */
SuggestApi.prototype.getSuggest = function getSuggest(q64, profile){
    var requestPath = '/api/v2/search/suggest';
    var requestQuery = {};
    var requestBody;

    requestQuery.q64 = q64;
    requestQuery.profile = profile;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Suggest
  * @memberOf SuggestApi#
  * @param {} body - Search request options
  * @param {boolean} profile - 
  * @example
  * Body Example:
  * {
   "types": [],
   "query": []
}
  */
SuggestApi.prototype.postSuggest = function postSuggest(body, profile){
    var requestPath = '/api/v2/search/suggest';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery.profile = profile;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};



/**
* @class
* @example
* var api = new TelephonyProvidersEdgeApi(pureCloudSession);
*/
function TelephonyProvidersEdgeApi(session) {
    if(!(this instanceof TelephonyProvidersEdgeApi)) {
        return new TelephonyProvidersEdgeApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('TelephonyProvidersEdgeApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Lists available schema categories
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  */
TelephonyProvidersEdgeApi.prototype.getSchemasEdgesVnext = function getSchemasEdgesVnext(pageSize, pageNumber){
    var requestPath = '/api/v2/configuration/schemas/edges/vnext';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary List schemas of a specific category
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} schemaCategory - Schema category
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  */
TelephonyProvidersEdgeApi.prototype.getSchemasEdgesVnextSchemacategory = function getSchemasEdgesVnextSchemacategory(schemaCategory, pageSize, pageNumber){
    var requestPath = '/api/v2/configuration/schemas/edges/vnext/{schemaCategory}';
    var requestQuery = {};
    var requestBody;

    if(schemaCategory === undefined || schemaCategory === null){
      throw new Error('Missing required  parameter: schemaCategory');
    }
    requestPath = requestPath.replace('{schemaCategory}', schemaCategory);
    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary List schemas of a specific category
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} schemaCategory - Schema category
  * @param {string} schemaType - Schema type
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  */
TelephonyProvidersEdgeApi.prototype.getSchemasEdgesVnextSchemacategorySchematype = function getSchemasEdgesVnextSchemacategorySchematype(schemaCategory, schemaType, pageSize, pageNumber){
    var requestPath = '/api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}';
    var requestQuery = {};
    var requestBody;

    if(schemaCategory === undefined || schemaCategory === null){
      throw new Error('Missing required  parameter: schemaCategory');
    }
    requestPath = requestPath.replace('{schemaCategory}', schemaCategory);
    if(schemaType === undefined || schemaType === null){
      throw new Error('Missing required  parameter: schemaType');
    }
    requestPath = requestPath.replace('{schemaType}', schemaType);
    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a json schema
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} schemaCategory - Schema category
  * @param {string} schemaType - Schema type
  * @param {string} schemaId - Schema ID
  */
TelephonyProvidersEdgeApi.prototype.getSchemasEdgesVnextSchemacategorySchematypeSchemaId = function getSchemasEdgesVnextSchemacategorySchematypeSchemaId(schemaCategory, schemaType, schemaId){
    var requestPath = '/api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}/{schemaId}';
    var requestQuery = {};
    var requestBody;

    if(schemaCategory === undefined || schemaCategory === null){
      throw new Error('Missing required  parameter: schemaCategory');
    }
    requestPath = requestPath.replace('{schemaCategory}', schemaCategory);
    if(schemaType === undefined || schemaType === null){
      throw new Error('Missing required  parameter: schemaType');
    }
    requestPath = requestPath.replace('{schemaType}', schemaType);
    if(schemaId === undefined || schemaId === null){
      throw new Error('Missing required  parameter: schemaId');
    }
    requestPath = requestPath.replace('{schemaId}', schemaId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get metadata for a schema
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} schemaCategory - Schema category
  * @param {string} schemaType - Schema type
  * @param {string} schemaId - Schema ID
  * @param {string} extensionType - extension
  * @param {string} metadataId - Metadata ID
  * @param {string} type - Type
  */
TelephonyProvidersEdgeApi.prototype.getSchemasEdgesVnextSchemacategorySchematypeSchemaIdExtensiontypeMetadataId = function getSchemasEdgesVnextSchemacategorySchematypeSchemaIdExtensiontypeMetadataId(schemaCategory, schemaType, schemaId, extensionType, metadataId, type){
    var requestPath = '/api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}/{schemaId}/{extensionType}/{metadataId}';
    var requestQuery = {};
    var requestBody;

    if(schemaCategory === undefined || schemaCategory === null){
      throw new Error('Missing required  parameter: schemaCategory');
    }
    requestPath = requestPath.replace('{schemaCategory}', schemaCategory);
    if(schemaType === undefined || schemaType === null){
      throw new Error('Missing required  parameter: schemaType');
    }
    requestPath = requestPath.replace('{schemaType}', schemaType);
    if(schemaId === undefined || schemaId === null){
      throw new Error('Missing required  parameter: schemaId');
    }
    requestPath = requestPath.replace('{schemaId}', schemaId);
    if(extensionType === undefined || extensionType === null){
      throw new Error('Missing required  parameter: extensionType');
    }
    requestPath = requestPath.replace('{extensionType}', extensionType);
    if(metadataId === undefined || metadataId === null){
      throw new Error('Missing required  parameter: metadataId');
    }
    requestPath = requestPath.replace('{metadataId}', metadataId);
    requestQuery.type = type;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of edges.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} name - Name
  * @param {string} siteid - Filter by site.id
  * @param {string} edgeGroupid - Filter by edgeGroup.id
  * @param {string} sortBy - Sort by
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdges = function getProvidersEdges(pageSize, pageNumber, name, siteid, edgeGroupid, sortBy){
    var requestPath = '/api/v2/telephony/providers/edges';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.name = name;
    requestQuery.site.id = siteid;
    requestQuery.edgeGroup.id = edgeGroupid;
    requestQuery.sortBy = sortBy;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a edge.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {} body - Edge
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "interfaces": [],
   "make": "",
   "model": "",
   "apiVersion": "",
   "softwareVersion": "",
   "softwareVersionTimestamp": "",
   "softwareVersionPlatform": "",
   "softwareVersionConfiguration": "",
   "fullSoftwareVersion": "",
   "pairingId": "",
   "fingerprint": "",
   "fingerprintHint": "",
   "currentVersion": "",
   "stagedVersion": "",
   "patch": "",
   "statusCode": "",
   "edgeGroup": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "managed": true,
      "edgeTrunkBaseAssignment": {},
      "phoneTrunkBaseAssignments": [],
      "phoneTrunkBases": []
   },
   "site": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "softwareStatus": {
      "version": {},
      "maxDownloadRate": 0,
      "downloadStartTime": "",
      "executeStartTime": "",
      "executeStopTime": "",
      "executeOnIdle": true,
      "status": "",
      "edgeUri": "",
      "current": true
   },
   "onlineStatus": "",
   "serialNumber": "",
   "physicalEdge": true,
   "managed": true
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdges = function postProvidersEdges(body){
    var requestPath = '/api/v2/telephony/providers/edges';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Validates a street address
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "address": {
      "country": "",
      "A1": "",
      "A3": "",
      "RD": "",
      "HNO": "",
      "LOC": "",
      "NAM": "",
      "PC": ""
   }
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesAddressvalidation = function postProvidersEdgesAddressvalidation(body){
    var requestPath = '/api/v2/telephony/providers/edges/addressvalidation';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of available languages.
  * @memberOf TelephonyProvidersEdgeApi#
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesAvailablelanguages = function getProvidersEdgesAvailablelanguages(){
    var requestPath = '/api/v2/telephony/providers/edges/availablelanguages';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of certificate authorities.
  * @memberOf TelephonyProvidersEdgeApi#
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesCertificateauthorities = function getProvidersEdgesCertificateauthorities(){
    var requestPath = '/api/v2/telephony/providers/edges/certificateauthorities';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a certificate authority.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {} body - CertificateAuthority
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "certificate": "",
   "type": "",
   "services": [],
   "certificateDetails": []
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesCertificateauthorities = function postProvidersEdgesCertificateauthorities(body){
    var requestPath = '/api/v2/telephony/providers/edges/certificateauthorities';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a certificate authority.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} certificateId - Certificate ID
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesCertificateauthoritiesCertificateId = function getProvidersEdgesCertificateauthoritiesCertificateId(certificateId){
    var requestPath = '/api/v2/telephony/providers/edges/certificateauthorities/{certificateId}';
    var requestQuery = {};
    var requestBody;

    if(certificateId === undefined || certificateId === null){
      throw new Error('Missing required  parameter: certificateId');
    }
    requestPath = requestPath.replace('{certificateId}', certificateId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a certificate authority.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} certificateId - Certificate ID
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "certificate": "",
   "type": "",
   "services": [],
   "certificateDetails": []
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesCertificateauthoritiesCertificateId = function putProvidersEdgesCertificateauthoritiesCertificateId(certificateId, body){
    var requestPath = '/api/v2/telephony/providers/edges/certificateauthorities/{certificateId}';
    var requestQuery = {};
    var requestBody;

    if(certificateId === undefined || certificateId === null){
      throw new Error('Missing required  parameter: certificateId');
    }
    requestPath = requestPath.replace('{certificateId}', certificateId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a certificate authority.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} certificateId - Certificate ID
  */
TelephonyProvidersEdgeApi.prototype.deleteProvidersEdgesCertificateauthoritiesCertificateId = function deleteProvidersEdgesCertificateauthoritiesCertificateId(certificateId){
    var requestPath = '/api/v2/telephony/providers/edges/certificateauthorities/{certificateId}';
    var requestQuery = {};
    var requestBody;

    if(certificateId === undefined || certificateId === null){
      throw new Error('Missing required  parameter: certificateId');
    }
    requestPath = requestPath.replace('{certificateId}', certificateId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a listing of DID Pools
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortBy - Sort by
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesDidpools = function getProvidersEdgesDidpools(pageSize, pageNumber, sortBy){
    var requestPath = '/api/v2/telephony/providers/edges/didpools';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a new DID pool
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "startPhoneNumber": "",
   "endPhoneNumber": "",
   "comments": "",
   "provider": ""
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesDidpools = function postProvidersEdgesDidpools(body){
    var requestPath = '/api/v2/telephony/providers/edges/didpools';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a DID Pool by ID.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} didPoolId - DID pool ID
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesDidpoolsDidpoolId = function getProvidersEdgesDidpoolsDidpoolId(didPoolId){
    var requestPath = '/api/v2/telephony/providers/edges/didpools/{didPoolId}';
    var requestQuery = {};
    var requestBody;

    if(didPoolId === undefined || didPoolId === null){
      throw new Error('Missing required  parameter: didPoolId');
    }
    requestPath = requestPath.replace('{didPoolId}', didPoolId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a DID Pool by ID.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} didPoolId - DID pool ID
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "startPhoneNumber": "",
   "endPhoneNumber": "",
   "comments": "",
   "provider": ""
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesDidpoolsDidpoolId = function putProvidersEdgesDidpoolsDidpoolId(didPoolId, body){
    var requestPath = '/api/v2/telephony/providers/edges/didpools/{didPoolId}';
    var requestQuery = {};
    var requestBody;

    if(didPoolId === undefined || didPoolId === null){
      throw new Error('Missing required  parameter: didPoolId');
    }
    requestPath = requestPath.replace('{didPoolId}', didPoolId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a DID Pool by ID.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} didPoolId - DID pool ID
  */
TelephonyProvidersEdgeApi.prototype.deleteProvidersEdgesDidpoolsDidpoolId = function deleteProvidersEdgesDidpoolsDidpoolId(didPoolId){
    var requestPath = '/api/v2/telephony/providers/edges/didpools/{didPoolId}';
    var requestQuery = {};
    var requestBody;

    if(didPoolId === undefined || didPoolId === null){
      throw new Error('Missing required  parameter: didPoolId');
    }
    requestPath = requestPath.replace('{didPoolId}', didPoolId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a listing of DIDs
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortBy - Sort by
  * @param {string} sortOrder - Sort order
  * @param {string} phoneNumber - Filter by phoneNumber
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesDids = function getProvidersEdgesDids(pageSize, pageNumber, sortBy, sortOrder, phoneNumber){
    var requestPath = '/api/v2/telephony/providers/edges/dids';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.sortOrder = sortOrder;
    requestQuery.phoneNumber = phoneNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a DID by ID.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} didId - DID ID
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesDidsDidId = function getProvidersEdgesDidsDidId(didId){
    var requestPath = '/api/v2/telephony/providers/edges/dids/{didId}';
    var requestQuery = {};
    var requestBody;

    if(didId === undefined || didId === null){
      throw new Error('Missing required  parameter: didId');
    }
    requestPath = requestPath.replace('{didId}', didId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a DID by ID.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} didId - DID ID
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "phoneNumber": "",
   "didPool": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "owner": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "ownerType": ""
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesDidsDidId = function putProvidersEdgesDidsDidId(didId, body){
    var requestPath = '/api/v2/telephony/providers/edges/dids/{didId}';
    var requestQuery = {};
    var requestBody;

    if(didId === undefined || didId === null){
      throw new Error('Missing required  parameter: didId');
    }
    requestPath = requestPath.replace('{didId}', didId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of edge groups.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} name - Name
  * @param {string} sortBy - Sort by
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEdgegroups = function getProvidersEdgesEdgegroups(pageSize, pageNumber, name, sortBy){
    var requestPath = '/api/v2/telephony/providers/edges/edgegroups';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.name = name;
    requestQuery.sortBy = sortBy;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create an edge group.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {} body - EdgeGroup
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "managed": true,
   "edgeTrunkBaseAssignment": {
      "family": 0,
      "trunkBase": {}
   },
   "phoneTrunkBaseAssignments": [],
   "phoneTrunkBases": []
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesEdgegroups = function postProvidersEdgesEdgegroups(body){
    var requestPath = '/api/v2/telephony/providers/edges/edgegroups';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get edge group.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} edgeGroupId - Edge group ID
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEdgegroupsEdgegroupId = function getProvidersEdgesEdgegroupsEdgegroupId(edgeGroupId){
    var requestPath = '/api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}';
    var requestQuery = {};
    var requestBody;

    if(edgeGroupId === undefined || edgeGroupId === null){
      throw new Error('Missing required  parameter: edgeGroupId');
    }
    requestPath = requestPath.replace('{edgeGroupId}', edgeGroupId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an edge group.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} edgeGroupId - Edge group ID
  * @param {} body - EdgeGroup
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "managed": true,
   "edgeTrunkBaseAssignment": {
      "family": 0,
      "trunkBase": {}
   },
   "phoneTrunkBaseAssignments": [],
   "phoneTrunkBases": []
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesEdgegroupsEdgegroupId = function putProvidersEdgesEdgegroupsEdgegroupId(edgeGroupId, body){
    var requestPath = '/api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}';
    var requestQuery = {};
    var requestBody;

    if(edgeGroupId === undefined || edgeGroupId === null){
      throw new Error('Missing required  parameter: edgeGroupId');
    }
    requestPath = requestPath.replace('{edgeGroupId}', edgeGroupId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete an edge group.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} edgeGroupId - Edge group ID
  */
TelephonyProvidersEdgeApi.prototype.deleteProvidersEdgesEdgegroupsEdgegroupId = function deleteProvidersEdgesEdgegroupsEdgegroupId(edgeGroupId){
    var requestPath = '/api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}';
    var requestQuery = {};
    var requestBody;

    if(edgeGroupId === undefined || edgeGroupId === null){
      throw new Error('Missing required  parameter: edgeGroupId');
    }
    requestPath = requestPath.replace('{edgeGroupId}', edgeGroupId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the edge version report.
  * @description The report will not have consistent data about the edge version(s) until all edges have been reset.
  * @memberOf TelephonyProvidersEdgeApi#
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEdgeversionreport = function getProvidersEdgesEdgeversionreport(){
    var requestPath = '/api/v2/telephony/providers/edges/edgeversionreport';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get endpoints
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} name - Name
  * @param {string} sortBy - Sort by
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEndpoints = function getProvidersEdgesEndpoints(pageSize, pageNumber, name, sortBy){
    var requestPath = '/api/v2/telephony/providers/edges/endpoints';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.name = name;
    requestQuery.sortBy = sortBy;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create endpoint
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {} body - EndpointTemplate
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "count": 0,
   "properties": {},
   "schema": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "enabled": true,
   "site": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dids": []
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesEndpoints = function postProvidersEdgesEndpoints(body){
    var requestPath = '/api/v2/telephony/providers/edges/endpoints';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get endpoint
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} endpointId - Endpoint ID
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEndpointsEndpointId = function getProvidersEdgesEndpointsEndpointId(endpointId){
    var requestPath = '/api/v2/telephony/providers/edges/endpoints/{endpointId}';
    var requestQuery = {};
    var requestBody;

    if(endpointId === undefined || endpointId === null){
      throw new Error('Missing required  parameter: endpointId');
    }
    requestPath = requestPath.replace('{endpointId}', endpointId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update endpoint
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} endpointId - Endpoint ID
  * @param {} body - EndpointTemplate
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "count": 0,
   "properties": {},
   "schema": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "enabled": true,
   "site": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dids": []
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesEndpointsEndpointId = function putProvidersEdgesEndpointsEndpointId(endpointId, body){
    var requestPath = '/api/v2/telephony/providers/edges/endpoints/{endpointId}';
    var requestQuery = {};
    var requestBody;

    if(endpointId === undefined || endpointId === null){
      throw new Error('Missing required  parameter: endpointId');
    }
    requestPath = requestPath.replace('{endpointId}', endpointId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete endpoint
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} endpointId - Endpoint ID
  */
TelephonyProvidersEdgeApi.prototype.deleteProvidersEdgesEndpointsEndpointId = function deleteProvidersEdgesEndpointsEndpointId(endpointId){
    var requestPath = '/api/v2/telephony/providers/edges/endpoints/{endpointId}';
    var requestQuery = {};
    var requestBody;

    if(endpointId === undefined || endpointId === null){
      throw new Error('Missing required  parameter: endpointId');
    }
    requestPath = requestPath.replace('{endpointId}', endpointId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a listing of extension pools
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortBy - Sort by
  * @param {string} number - Number
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesExtensionpools = function getProvidersEdgesExtensionpools(pageSize, pageNumber, sortBy, number){
    var requestPath = '/api/v2/telephony/providers/edges/extensionpools';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.number = number;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a new extension pool
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {} body - ExtensionPool
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "startNumber": "",
   "endNumber": ""
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesExtensionpools = function postProvidersEdgesExtensionpools(body){
    var requestPath = '/api/v2/telephony/providers/edges/extensionpools';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get an extension pool by ID
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} extensionPoolId - Extension pool ID
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesExtensionpoolsExtensionpoolId = function getProvidersEdgesExtensionpoolsExtensionpoolId(extensionPoolId){
    var requestPath = '/api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}';
    var requestQuery = {};
    var requestBody;

    if(extensionPoolId === undefined || extensionPoolId === null){
      throw new Error('Missing required  parameter: extensionPoolId');
    }
    requestPath = requestPath.replace('{extensionPoolId}', extensionPoolId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an extension pool by ID
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} extensionPoolId - Extension pool ID
  * @param {} body - ExtensionPool
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "startNumber": "",
   "endNumber": ""
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesExtensionpoolsExtensionpoolId = function putProvidersEdgesExtensionpoolsExtensionpoolId(extensionPoolId, body){
    var requestPath = '/api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}';
    var requestQuery = {};
    var requestBody;

    if(extensionPoolId === undefined || extensionPoolId === null){
      throw new Error('Missing required  parameter: extensionPoolId');
    }
    requestPath = requestPath.replace('{extensionPoolId}', extensionPoolId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete an extension pool by ID
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} extensionPoolId - Extension pool ID
  */
TelephonyProvidersEdgeApi.prototype.deleteProvidersEdgesExtensionpoolsExtensionpoolId = function deleteProvidersEdgesExtensionpoolsExtensionpoolId(extensionPoolId){
    var requestPath = '/api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}';
    var requestQuery = {};
    var requestBody;

    if(extensionPoolId === undefined || extensionPoolId === null){
      throw new Error('Missing required  parameter: extensionPoolId');
    }
    requestPath = requestPath.replace('{extensionPoolId}', extensionPoolId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a listing of extensions
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortBy - Sort by
  * @param {string} sortOrder - Sort order
  * @param {string} number - Filter by number
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesExtensions = function getProvidersEdgesExtensions(pageSize, pageNumber, sortBy, sortOrder, number){
    var requestPath = '/api/v2/telephony/providers/edges/extensions';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.sortOrder = sortOrder;
    requestQuery.number = number;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get an extension by ID.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} extensionId - Extension ID
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesExtensionsExtensionId = function getProvidersEdgesExtensionsExtensionId(extensionId){
    var requestPath = '/api/v2/telephony/providers/edges/extensions/{extensionId}';
    var requestQuery = {};
    var requestBody;

    if(extensionId === undefined || extensionId === null){
      throw new Error('Missing required  parameter: extensionId');
    }
    requestPath = requestPath.replace('{extensionId}', extensionId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an extension by ID.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} extensionId - Extension ID
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "number": "",
   "owner": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "extensionPool": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "ownerType": ""
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesExtensionsExtensionId = function putProvidersEdgesExtensionsExtensionId(extensionId, body){
    var requestPath = '/api/v2/telephony/providers/edges/extensions/{extensionId}';
    var requestQuery = {};
    var requestBody;

    if(extensionId === undefined || extensionId === null){
      throw new Error('Missing required  parameter: extensionId');
    }
    requestPath = requestPath.replace('{extensionId}', extensionId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a listing of line base settings objects
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {integer} pageNumber - Page number
  * @param {integer} pageSize - Page size
  * @param {string} sortBy - Value by which to sort
  * @param {string} sortOrder - Sort order
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesLinebasesettings = function getProvidersEdgesLinebasesettings(pageNumber, pageSize, sortBy, sortOrder){
    var requestPath = '/api/v2/telephony/providers/edges/linebasesettings';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageNumber = pageNumber;
    requestQuery.pageSize = pageSize;
    requestQuery.sortBy = sortBy;
    requestQuery.sortOrder = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a line base settings object by ID
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} lineBaseId - Line base ID
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesLinebasesettingsLinebaseId = function getProvidersEdgesLinebasesettingsLinebaseId(lineBaseId){
    var requestPath = '/api/v2/telephony/providers/edges/linebasesettings/{lineBaseId}';
    var requestQuery = {};
    var requestBody;

    if(lineBaseId === undefined || lineBaseId === null){
      throw new Error('Missing required  parameter: lineBaseId');
    }
    requestPath = requestPath.replace('{lineBaseId}', lineBaseId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list of Lines
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} name - Name
  * @param {string} sortBy - Value by which to sort
  * @param {array} expand - Fields to expand in the response, comma-separated
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesLines = function getProvidersEdgesLines(pageSize, pageNumber, name, sortBy, expand){
    var requestPath = '/api/v2/telephony/providers/edges/lines';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.name = name;
    requestQuery.sortBy = sortBy;
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a Line instance template based on a Line Base Settings object. This object can then be modified and saved as a new Line instance
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} lineBaseSettingsId - The id of a Line Base Settings object upon which to base this Line
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesLinesTemplate = function getProvidersEdgesLinesTemplate(lineBaseSettingsId){
    var requestPath = '/api/v2/telephony/providers/edges/lines/template';
    var requestQuery = {};
    var requestBody;

    if(lineBaseSettingsId === undefined || lineBaseSettingsId === null){
      throw new Error('Missing required  parameter: lineBaseSettingsId');
    }
    requestQuery.lineBaseSettingsId = lineBaseSettingsId;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a Line by ID
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} lineId - Line ID
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesLinesLineId = function getProvidersEdgesLinesLineId(lineId){
    var requestPath = '/api/v2/telephony/providers/edges/lines/{lineId}';
    var requestQuery = {};
    var requestBody;

    if(lineId === undefined || lineId === null){
      throw new Error('Missing required  parameter: lineId');
    }
    requestPath = requestPath.replace('{lineId}', lineId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get outbound routes
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} name - Name
  * @param {string} siteid - Filter by site.id
  * @param {string} sortBy - Sort by
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesOutboundroutes = function getProvidersEdgesOutboundroutes(pageSize, pageNumber, name, siteid, sortBy){
    var requestPath = '/api/v2/telephony/providers/edges/outboundroutes';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.name = name;
    requestQuery.site.id = siteid;
    requestQuery.sortBy = sortBy;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create outbound rule
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {} body - OutboundRoute
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "site": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "primarySites": [],
      "secondarySites": [],
      "primaryEdges": [],
      "secondaryEdges": [],
      "addresses": [],
      "edges": [],
      "edgeAutoUpdateConfig": {},
      "location": {},
      "managed": true
   },
   "classificationTypes": [],
   "enabled": true,
   "distribution": "",
   "managed": true,
   "externalTrunkBases": []
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesOutboundroutes = function postProvidersEdgesOutboundroutes(body){
    var requestPath = '/api/v2/telephony/providers/edges/outboundroutes';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get outbound route
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} outboundRouteId - Outbound route ID
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesOutboundroutesOutboundrouteId = function getProvidersEdgesOutboundroutesOutboundrouteId(outboundRouteId){
    var requestPath = '/api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}';
    var requestQuery = {};
    var requestBody;

    if(outboundRouteId === undefined || outboundRouteId === null){
      throw new Error('Missing required  parameter: outboundRouteId');
    }
    requestPath = requestPath.replace('{outboundRouteId}', outboundRouteId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update outbound route
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} outboundRouteId - Outbound route ID
  * @param {} body - OutboundRoute
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "site": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "primarySites": [],
      "secondarySites": [],
      "primaryEdges": [],
      "secondaryEdges": [],
      "addresses": [],
      "edges": [],
      "edgeAutoUpdateConfig": {},
      "location": {},
      "managed": true
   },
   "classificationTypes": [],
   "enabled": true,
   "distribution": "",
   "managed": true,
   "externalTrunkBases": []
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesOutboundroutesOutboundrouteId = function putProvidersEdgesOutboundroutesOutboundrouteId(outboundRouteId, body){
    var requestPath = '/api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}';
    var requestQuery = {};
    var requestBody;

    if(outboundRouteId === undefined || outboundRouteId === null){
      throw new Error('Missing required  parameter: outboundRouteId');
    }
    requestPath = requestPath.replace('{outboundRouteId}', outboundRouteId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete Outbound Route
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} outboundRouteId - Outbound route ID
  */
TelephonyProvidersEdgeApi.prototype.deleteProvidersEdgesOutboundroutesOutboundrouteId = function deleteProvidersEdgesOutboundroutesOutboundrouteId(outboundRouteId){
    var requestPath = '/api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}';
    var requestQuery = {};
    var requestBody;

    if(outboundRouteId === undefined || outboundRouteId === null){
      throw new Error('Missing required  parameter: outboundRouteId');
    }
    requestPath = requestPath.replace('{outboundRouteId}', outboundRouteId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list of Phone Base Settings objects
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {integer} pageNumber - Page number
  * @param {integer} pageSize - Page size
  * @param {string} sortBy - Value by which to sort
  * @param {string} sortOrder - Sort order
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesPhonebasesettings = function getProvidersEdgesPhonebasesettings(pageNumber, pageSize, sortBy, sortOrder){
    var requestPath = '/api/v2/telephony/providers/edges/phonebasesettings';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageNumber = pageNumber;
    requestQuery.pageSize = pageSize;
    requestQuery.sortBy = sortBy;
    requestQuery.sortOrder = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a new Phone Base Settings object
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "name": "",
   "phoneMetaBase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lines": [],
   "properties": {},
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true,
      "noRebalance": true
   }
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesPhonebasesettings = function postProvidersEdgesPhonebasesettings(body){
    var requestPath = '/api/v2/telephony/providers/edges/phonebasesettings';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list of available makes and models to create a new Phone Base Settings
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesPhonebasesettingsAvailablemetabases = function getProvidersEdgesPhonebasesettingsAvailablemetabases(pageSize, pageNumber){
    var requestPath = '/api/v2/telephony/providers/edges/phonebasesettings/availablemetabases';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a Phone Base Settings instance template from a given make and model. This object can then be modified and saved as a new Phone Base Settings instance
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} phoneMetabaseId - The id of a metabase object upon which to base this Phone Base Settings
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesPhonebasesettingsTemplate = function getProvidersEdgesPhonebasesettingsTemplate(phoneMetabaseId){
    var requestPath = '/api/v2/telephony/providers/edges/phonebasesettings/template';
    var requestQuery = {};
    var requestBody;

    if(phoneMetabaseId === undefined || phoneMetabaseId === null){
      throw new Error('Missing required  parameter: phoneMetabaseId');
    }
    requestQuery.phoneMetabaseId = phoneMetabaseId;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a Phone Base Settings object by ID
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} phoneBaseId - Phone base ID
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesPhonebasesettingsPhonebaseId = function getProvidersEdgesPhonebasesettingsPhonebaseId(phoneBaseId){
    var requestPath = '/api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}';
    var requestQuery = {};
    var requestBody;

    if(phoneBaseId === undefined || phoneBaseId === null){
      throw new Error('Missing required  parameter: phoneBaseId');
    }
    requestPath = requestPath.replace('{phoneBaseId}', phoneBaseId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a Phone Base Settings by ID
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} phoneBaseId - Phone base ID
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "name": "",
   "phoneMetaBase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lines": [],
   "properties": {},
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true,
      "noRebalance": true
   }
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesPhonebasesettingsPhonebaseId = function putProvidersEdgesPhonebasesettingsPhonebaseId(phoneBaseId, body){
    var requestPath = '/api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}';
    var requestQuery = {};
    var requestBody;

    if(phoneBaseId === undefined || phoneBaseId === null){
      throw new Error('Missing required  parameter: phoneBaseId');
    }
    requestPath = requestPath.replace('{phoneBaseId}', phoneBaseId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a Phone Base Settings by ID
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} phoneBaseId - Phone base ID
  */
TelephonyProvidersEdgeApi.prototype.deleteProvidersEdgesPhonebasesettingsPhonebaseId = function deleteProvidersEdgesPhonebasesettingsPhonebaseId(phoneBaseId){
    var requestPath = '/api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}';
    var requestQuery = {};
    var requestBody;

    if(phoneBaseId === undefined || phoneBaseId === null){
      throw new Error('Missing required  parameter: phoneBaseId');
    }
    requestPath = requestPath.replace('{phoneBaseId}', phoneBaseId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list of Phone Instances
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {integer} pageNumber - Page number
  * @param {integer} pageSize - Page size
  * @param {string} sortBy - Value by which to sort
  * @param {string} sortOrder - Sort order
  * @param {string} siteid - Filter by site.id
  * @param {string} webRtcUserid - Filter by webRtcUser.id
  * @param {string} phoneBaseSettingsid - Filter by phoneBaseSettings.id
  * @param {string} linesloggedInUserid - Filter by lines.loggedInUser.id
  * @param {string} phone_hardwareId - Filter by phone_hardwareId
  * @param {array} expand - Fields to expand in the response, comma-separated
  * @param {array} fields - Fields and properties to get, comma-separated
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesPhones = function getProvidersEdgesPhones(pageNumber, pageSize, sortBy, sortOrder, siteid, webRtcUserid, phoneBaseSettingsid, linesloggedInUserid, phone_hardwareId, expand, fields){
    var requestPath = '/api/v2/telephony/providers/edges/phones';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageNumber = pageNumber;
    requestQuery.pageSize = pageSize;
    requestQuery.sortBy = sortBy;
    requestQuery.sortOrder = sortOrder;
    requestQuery.site.id = siteid;
    requestQuery.webRtcUser.id = webRtcUserid;
    requestQuery.phoneBaseSettings.id = phoneBaseSettingsid;
    requestQuery.lines.loggedInUser.id = linesloggedInUserid;
    requestQuery.phone_hardwareId = phone_hardwareId;
    requestQuery.expand = expand;
    requestQuery.fields = fields;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a new Phone
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "edgeGroup": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "site": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "phoneBaseSettings": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lineBaseSettings": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "phoneMetaBase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lines": [],
   "status": {
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {}
   },
   "secondaryStatus": {
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {}
   },
   "properties": {},
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true,
      "noRebalance": true
   },
   "webRtcUser": {
      "id": "",
      "name": "",
      "selfUri": ""
   }
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesPhones = function postProvidersEdgesPhones(body){
    var requestPath = '/api/v2/telephony/providers/edges/phones';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Reboot Multiple Phones
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {} body - body
  * @example
  * Body Example:
  * {
   "phoneIds": [],
   "siteId": ""
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesPhonesReboot = function postProvidersEdgesPhonesReboot(body){
    var requestPath = '/api/v2/telephony/providers/edges/phones/reboot';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a Phone instance template based on a Phone Base Settings object. This object can then be modified and saved as a new Phone instance
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} phoneBaseSettingsId - The id of a Phone Base Settings object upon which to base this Phone
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesPhonesTemplate = function getProvidersEdgesPhonesTemplate(phoneBaseSettingsId){
    var requestPath = '/api/v2/telephony/providers/edges/phones/template';
    var requestQuery = {};
    var requestBody;

    if(phoneBaseSettingsId === undefined || phoneBaseSettingsId === null){
      throw new Error('Missing required  parameter: phoneBaseSettingsId');
    }
    requestQuery.phoneBaseSettingsId = phoneBaseSettingsId;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a Phone by ID
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} phoneId - Phone ID
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesPhonesPhoneId = function getProvidersEdgesPhonesPhoneId(phoneId){
    var requestPath = '/api/v2/telephony/providers/edges/phones/{phoneId}';
    var requestQuery = {};
    var requestBody;

    if(phoneId === undefined || phoneId === null){
      throw new Error('Missing required  parameter: phoneId');
    }
    requestPath = requestPath.replace('{phoneId}', phoneId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a Phone by ID
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} phoneId - Phone ID
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "edgeGroup": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "site": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "phoneBaseSettings": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lineBaseSettings": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "phoneMetaBase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lines": [],
   "status": {
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {}
   },
   "secondaryStatus": {
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {}
   },
   "properties": {},
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true,
      "noRebalance": true
   },
   "webRtcUser": {
      "id": "",
      "name": "",
      "selfUri": ""
   }
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesPhonesPhoneId = function putProvidersEdgesPhonesPhoneId(phoneId, body){
    var requestPath = '/api/v2/telephony/providers/edges/phones/{phoneId}';
    var requestQuery = {};
    var requestBody;

    if(phoneId === undefined || phoneId === null){
      throw new Error('Missing required  parameter: phoneId');
    }
    requestPath = requestPath.replace('{phoneId}', phoneId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a Phone by ID
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} phoneId - Phone ID
  */
TelephonyProvidersEdgeApi.prototype.deleteProvidersEdgesPhonesPhoneId = function deleteProvidersEdgesPhonesPhoneId(phoneId){
    var requestPath = '/api/v2/telephony/providers/edges/phones/{phoneId}';
    var requestQuery = {};
    var requestBody;

    if(phoneId === undefined || phoneId === null){
      throw new Error('Missing required  parameter: phoneId');
    }
    requestPath = requestPath.replace('{phoneId}', phoneId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Reboot a Phone
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} phoneId - Phone Id
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesPhonesPhoneIdReboot = function postProvidersEdgesPhonesPhoneIdReboot(phoneId){
    var requestPath = '/api/v2/telephony/providers/edges/phones/{phoneId}/reboot';
    var requestQuery = {};
    var requestBody;

    if(phoneId === undefined || phoneId === null){
      throw new Error('Missing required  parameter: phoneId');
    }
    requestPath = requestPath.replace('{phoneId}', phoneId);
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of Sites.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortBy - Sort by
  * @param {string} sortOrder - Sort order
  * @param {string} name - Name
  * @param {string} locationid - Location Id
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesSites = function getProvidersEdgesSites(pageSize, pageNumber, sortBy, sortOrder, name, locationid){
    var requestPath = '/api/v2/telephony/providers/edges/sites';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.sortOrder = sortOrder;
    requestQuery.name = name;
    requestQuery.location.id = locationid;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a Site.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {} body - Site
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "primarySites": [],
   "secondarySites": [],
   "primaryEdges": [],
   "secondaryEdges": [],
   "addresses": [],
   "edges": [],
   "edgeAutoUpdateConfig": {
      "timeZone": "",
      "rrule": "",
      "start": "",
      "end": ""
   },
   "location": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "managed": true
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesSites = function postProvidersEdgesSites(body){
    var requestPath = '/api/v2/telephony/providers/edges/sites';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a Site by ID.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} siteId - Site ID
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesSitesSiteId = function getProvidersEdgesSitesSiteId(siteId){
    var requestPath = '/api/v2/telephony/providers/edges/sites/{siteId}';
    var requestQuery = {};
    var requestBody;

    if(siteId === undefined || siteId === null){
      throw new Error('Missing required  parameter: siteId');
    }
    requestPath = requestPath.replace('{siteId}', siteId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a Site by ID.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} siteId - Site ID
  * @param {} body - Site
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "primarySites": [],
   "secondarySites": [],
   "primaryEdges": [],
   "secondaryEdges": [],
   "addresses": [],
   "edges": [],
   "edgeAutoUpdateConfig": {
      "timeZone": "",
      "rrule": "",
      "start": "",
      "end": ""
   },
   "location": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "managed": true
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesSitesSiteId = function putProvidersEdgesSitesSiteId(siteId, body){
    var requestPath = '/api/v2/telephony/providers/edges/sites/{siteId}';
    var requestQuery = {};
    var requestBody;

    if(siteId === undefined || siteId === null){
      throw new Error('Missing required  parameter: siteId');
    }
    requestPath = requestPath.replace('{siteId}', siteId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a Site by ID
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} siteId - Site ID
  */
TelephonyProvidersEdgeApi.prototype.deleteProvidersEdgesSitesSiteId = function deleteProvidersEdgesSitesSiteId(siteId){
    var requestPath = '/api/v2/telephony/providers/edges/sites/{siteId}';
    var requestQuery = {};
    var requestBody;

    if(siteId === undefined || siteId === null){
      throw new Error('Missing required  parameter: siteId');
    }
    requestPath = requestPath.replace('{siteId}', siteId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of Number Plans for this Site.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} siteId - Site ID
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesSitesSiteIdNumberplans = function getProvidersEdgesSitesSiteIdNumberplans(siteId){
    var requestPath = '/api/v2/telephony/providers/edges/sites/{siteId}/numberplans';
    var requestQuery = {};
    var requestBody;

    if(siteId === undefined || siteId === null){
      throw new Error('Missing required  parameter: siteId');
    }
    requestPath = requestPath.replace('{siteId}', siteId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update the list of Number Plans.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} siteId - Site ID
  * @param {} body - 
  * @example
  * Body Example:
  * [
 {
  "name": "",
  "description": "",
  "version": 0,
  "dateCreated": "",
  "dateModified": "",
  "modifiedBy": "",
  "createdBy": "",
  "state": "",
  "modifiedByApp": "",
  "createdByApp": "",
  "match": "",
  "normalizedFormat": "",
  "priority": 0,
  "numbers": [],
  "digitLength": {
   "start": "",
   "end": ""
  },
  "classification": "",
  "matchType": ""
 }
]
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesSitesSiteIdNumberplans = function putProvidersEdgesSitesSiteIdNumberplans(siteId, body){
    var requestPath = '/api/v2/telephony/providers/edges/sites/{siteId}/numberplans';
    var requestQuery = {};
    var requestBody;

    if(siteId === undefined || siteId === null){
      throw new Error('Missing required  parameter: siteId');
    }
    requestPath = requestPath.replace('{siteId}', siteId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list of Classifications for this Site
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} siteId - Site ID
  * @param {string} classification - Classification
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesSitesSiteIdNumberplansClassifications = function getProvidersEdgesSitesSiteIdNumberplansClassifications(siteId, classification){
    var requestPath = '/api/v2/telephony/providers/edges/sites/{siteId}/numberplans/classifications';
    var requestQuery = {};
    var requestBody;

    if(siteId === undefined || siteId === null){
      throw new Error('Missing required  parameter: siteId');
    }
    requestPath = requestPath.replace('{siteId}', siteId);
    requestQuery.classification = classification;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a Number Plan by ID.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} siteId - Site ID
  * @param {string} numberPlanId - Number Plan ID
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesSitesSiteIdNumberplansNumberplanId = function getProvidersEdgesSitesSiteIdNumberplansNumberplanId(siteId, numberPlanId){
    var requestPath = '/api/v2/telephony/providers/edges/sites/{siteId}/numberplans/{numberPlanId}';
    var requestQuery = {};
    var requestBody;

    if(siteId === undefined || siteId === null){
      throw new Error('Missing required  parameter: siteId');
    }
    requestPath = requestPath.replace('{siteId}', siteId);
    if(numberPlanId === undefined || numberPlanId === null){
      throw new Error('Missing required  parameter: numberPlanId');
    }
    requestPath = requestPath.replace('{numberPlanId}', numberPlanId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Triggers the rebalance operation.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} siteId - Site ID
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesSitesSiteIdRebalance = function postProvidersEdgesSitesSiteIdRebalance(siteId){
    var requestPath = '/api/v2/telephony/providers/edges/sites/{siteId}/rebalance';
    var requestQuery = {};
    var requestBody;

    if(siteId === undefined || siteId === null){
      throw new Error('Missing required  parameter: siteId');
    }
    requestPath = requestPath.replace('{siteId}', siteId);
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list of Edge-compatible time zones
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesTimezones = function getProvidersEdgesTimezones(pageSize, pageNumber){
    var requestPath = '/api/v2/telephony/providers/edges/timezones';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get Trunk Base Settings listing
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {integer} pageNumber - Page number
  * @param {integer} pageSize - Page size
  * @param {string} sortBy - Value by which to sort
  * @param {string} sortOrder - Sort order
  * @param {boolean} recordingEnabled - Filter trunks by recording enabled
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesTrunkbasesettings = function getProvidersEdgesTrunkbasesettings(pageNumber, pageSize, sortBy, sortOrder, recordingEnabled){
    var requestPath = '/api/v2/telephony/providers/edges/trunkbasesettings';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageNumber = pageNumber;
    requestQuery.pageSize = pageSize;
    requestQuery.sortBy = sortBy;
    requestQuery.sortOrder = sortOrder;
    requestQuery.recordingEnabled = recordingEnabled;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a Trunk Base Settings object
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "trunkMetabase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "properties": {},
   "trunkType": "",
   "managed": true
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesTrunkbasesettings = function postProvidersEdgesTrunkbasesettings(body){
    var requestPath = '/api/v2/telephony/providers/edges/trunkbasesettings';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a list of available makes and models to create a new Trunk Base Settings
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} type - 
  EXTERNAL,
  PHONE,
  EDGE,
  * @param {integer} pageSize - 
  * @param {integer} pageNumber - 
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesTrunkbasesettingsAvailablemetabases = function getProvidersEdgesTrunkbasesettingsAvailablemetabases(type, pageSize, pageNumber){
    var requestPath = '/api/v2/telephony/providers/edges/trunkbasesettings/availablemetabases';
    var requestQuery = {};
    var requestBody;

    requestQuery.type = type;
    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a Trunk Base Settings instance template from a given make and model. This object can then be modified and saved as a new Trunk Base Settings instance
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} trunkMetabaseId - The id of a metabase object upon which to base this Trunk Base Settings
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesTrunkbasesettingsTemplate = function getProvidersEdgesTrunkbasesettingsTemplate(trunkMetabaseId){
    var requestPath = '/api/v2/telephony/providers/edges/trunkbasesettings/template';
    var requestQuery = {};
    var requestBody;

    if(trunkMetabaseId === undefined || trunkMetabaseId === null){
      throw new Error('Missing required  parameter: trunkMetabaseId');
    }
    requestQuery.trunkMetabaseId = trunkMetabaseId;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a Trunk Base Settings object by ID
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} trunkBaseSettingsId - Trunk Base ID
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesTrunkbasesettingsTrunkbasesettingsId = function getProvidersEdgesTrunkbasesettingsTrunkbasesettingsId(trunkBaseSettingsId){
    var requestPath = '/api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}';
    var requestQuery = {};
    var requestBody;

    if(trunkBaseSettingsId === undefined || trunkBaseSettingsId === null){
      throw new Error('Missing required  parameter: trunkBaseSettingsId');
    }
    requestPath = requestPath.replace('{trunkBaseSettingsId}', trunkBaseSettingsId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a Trunk Base Settings object by ID
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} trunkBaseSettingsId - Trunk Base ID
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "trunkMetabase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "properties": {},
   "trunkType": "",
   "managed": true
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesTrunkbasesettingsTrunkbasesettingsId = function putProvidersEdgesTrunkbasesettingsTrunkbasesettingsId(trunkBaseSettingsId, body){
    var requestPath = '/api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}';
    var requestQuery = {};
    var requestBody;

    if(trunkBaseSettingsId === undefined || trunkBaseSettingsId === null){
      throw new Error('Missing required  parameter: trunkBaseSettingsId');
    }
    requestPath = requestPath.replace('{trunkBaseSettingsId}', trunkBaseSettingsId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a Trunk Base Settings object by ID
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} trunkBaseSettingsId - Trunk Base ID
  */
TelephonyProvidersEdgeApi.prototype.deleteProvidersEdgesTrunkbasesettingsTrunkbasesettingsId = function deleteProvidersEdgesTrunkbasesettingsTrunkbasesettingsId(trunkBaseSettingsId){
    var requestPath = '/api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}';
    var requestQuery = {};
    var requestBody;

    if(trunkBaseSettingsId === undefined || trunkBaseSettingsId === null){
      throw new Error('Missing required  parameter: trunkBaseSettingsId');
    }
    requestPath = requestPath.replace('{trunkBaseSettingsId}', trunkBaseSettingsId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of available trunks.
  * @description Trunks are created by assigning trunk base settings to an Edge or Edge Group.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {integer} pageNumber - Page number
  * @param {integer} pageSize - Page size
  * @param {string} sortBy - Value by which to sort
  * @param {string} sortOrder - Sort order
  * @param {string} edgeid - Filter by Edge Ids
  * @param {string} trunkBaseid - Filter by Trunk Base Ids
  * @param {string} trunkType - Filter by a Trunk type
  EXTERNAL,
  PHONE,
  EDGE,
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesTrunks = function getProvidersEdgesTrunks(pageNumber, pageSize, sortBy, sortOrder, edgeid, trunkBaseid, trunkType){
    var requestPath = '/api/v2/telephony/providers/edges/trunks';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageNumber = pageNumber;
    requestQuery.pageSize = pageSize;
    requestQuery.sortBy = sortBy;
    requestQuery.sortOrder = sortOrder;
    requestQuery.edge.id = edgeid;
    requestQuery.trunkBase.id = trunkBaseid;
    requestQuery.trunkType = trunkType;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a Trunk by ID
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} trunkId - Trunk ID
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesTrunksTrunkId = function getProvidersEdgesTrunksTrunkId(trunkId){
    var requestPath = '/api/v2/telephony/providers/edges/trunks/{trunkId}';
    var requestQuery = {};
    var requestBody;

    if(trunkId === undefined || trunkId === null){
      throw new Error('Missing required  parameter: trunkId');
    }
    requestPath = requestPath.replace('{trunkId}', trunkId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get Counts of trunks that have recording disabled or enabled
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} trunkType - The type of this trunk base.
  EXTERNAL,
  PHONE,
  EDGE,
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesTrunkswithrecording = function getProvidersEdgesTrunkswithrecording(trunkType){
    var requestPath = '/api/v2/telephony/providers/edges/trunkswithrecording';
    var requestQuery = {};
    var requestBody;

    requestQuery.trunkType = trunkType;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get edge.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} edgeId - Edge ID
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEdgeId = function getProvidersEdgesEdgeId(edgeId){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a edge.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} edgeId - Edge ID
  * @param {} body - Edge
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "interfaces": [],
   "make": "",
   "model": "",
   "apiVersion": "",
   "softwareVersion": "",
   "softwareVersionTimestamp": "",
   "softwareVersionPlatform": "",
   "softwareVersionConfiguration": "",
   "fullSoftwareVersion": "",
   "pairingId": "",
   "fingerprint": "",
   "fingerprintHint": "",
   "currentVersion": "",
   "stagedVersion": "",
   "patch": "",
   "statusCode": "",
   "edgeGroup": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "managed": true,
      "edgeTrunkBaseAssignment": {},
      "phoneTrunkBaseAssignments": [],
      "phoneTrunkBases": []
   },
   "site": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "softwareStatus": {
      "version": {},
      "maxDownloadRate": 0,
      "downloadStartTime": "",
      "executeStartTime": "",
      "executeStopTime": "",
      "executeOnIdle": true,
      "status": "",
      "edgeUri": "",
      "current": true
   },
   "onlineStatus": "",
   "serialNumber": "",
   "physicalEdge": true,
   "managed": true
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesEdgeId = function putProvidersEdgesEdgeId(edgeId, body){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a edge.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} edgeId - Edge ID
  */
TelephonyProvidersEdgeApi.prototype.deleteProvidersEdgesEdgeId = function deleteProvidersEdgesEdgeId(edgeId){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of lines.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} edgeId - Edge ID
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEdgeIdLines = function getProvidersEdgesEdgeIdLines(edgeId, pageSize, pageNumber){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/lines';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get line
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} edgeId - Edge ID
  * @param {string} lineId - Line ID
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEdgeIdLinesLineId = function getProvidersEdgesEdgeIdLinesLineId(edgeId, lineId){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/lines/{lineId}';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    if(lineId === undefined || lineId === null){
      throw new Error('Missing required  parameter: lineId');
    }
    requestPath = requestPath.replace('{lineId}', lineId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a line.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} edgeId - Edge ID
  * @param {string} lineId - Line ID
  * @param {} body - Line
  * @example
  * Body Example:
  * {
   "name": "",
   "schema": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "properties": {},
   "edge": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "interfaces": [],
      "make": "",
      "model": "",
      "apiVersion": "",
      "softwareVersion": "",
      "softwareVersionTimestamp": "",
      "softwareVersionPlatform": "",
      "softwareVersionConfiguration": "",
      "fullSoftwareVersion": "",
      "pairingId": "",
      "fingerprint": "",
      "fingerprintHint": "",
      "currentVersion": "",
      "stagedVersion": "",
      "patch": "",
      "statusCode": "",
      "edgeGroup": {},
      "site": {},
      "softwareStatus": {},
      "onlineStatus": "",
      "serialNumber": "",
      "physicalEdge": true,
      "managed": true
   },
   "edgeGroup": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "managed": true,
      "edgeTrunkBaseAssignment": {},
      "phoneTrunkBaseAssignments": [],
      "phoneTrunkBases": []
   },
   "lineType": "",
   "endpoint": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "count": 0,
      "properties": {},
      "schema": {},
      "enabled": true,
      "site": {},
      "dids": []
   },
   "ipAddress": "",
   "logicalInterfaceId": ""
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesEdgeIdLinesLineId = function putProvidersEdgesEdgeIdLinesLineId(edgeId, lineId, body){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/lines/{lineId}';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    if(lineId === undefined || lineId === null){
      throw new Error('Missing required  parameter: lineId');
    }
    requestPath = requestPath.replace('{lineId}', lineId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get edge logical interfaces.
  * @description Retrieve a list of all configured logical interfaces from a specific edge.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} edgeId - Edge ID
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEdgeIdLogicalinterfaces = function getProvidersEdgesEdgeIdLogicalinterfaces(edgeId){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create an edge logical interface.
  * @description Create
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} edgeId - Edge ID
  * @param {} body - Create
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "edgeUri": "",
   "edgeAssignedId": "",
   "friendlyName": "",
   "vlanTagId": 0,
   "hardwareAddress": "",
   "physicalAdapterId": "",
   "ipAddress": "",
   "gateway": "",
   "primaryDns": "",
   "secondaryDns": "",
   "ifStatus": "",
   "routes": [],
   "addresses": [],
   "ipv4Capabilities": {
      "enabled": true,
      "dhcp": true,
      "metric": 0
   },
   "ipv6Capabilities": {
      "enabled": true,
      "dhcp": true,
      "metric": 0
   },
   "currentState": "",
   "lastModifiedUserId": "",
   "lastModifiedCorrelationId": "",
   "commandResponses": [],
   "inheritPhoneTrunkBases": true,
   "inheritPhoneTrunkBasesIPv4": true,
   "inheritPhoneTrunkBasesIPv6": true,
   "useForInternalEdgeCommunication": true,
   "externalTrunkBaseAssignments": [],
   "phoneTrunkBaseAssignments": []
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesEdgeIdLogicalinterfaces = function postProvidersEdgesEdgeIdLogicalinterfaces(edgeId, body){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get an edge logical interface
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} edgeId - Edge ID
  * @param {string} interfaceId - Interface ID
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEdgeIdLogicalinterfacesInterfaceId = function getProvidersEdgesEdgeIdLogicalinterfacesInterfaceId(edgeId, interfaceId){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    if(interfaceId === undefined || interfaceId === null){
      throw new Error('Missing required  parameter: interfaceId');
    }
    requestPath = requestPath.replace('{interfaceId}', interfaceId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an edge logical interface.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} edgeId - Edge ID
  * @param {string} interfaceId - Interface ID
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "edgeUri": "",
   "edgeAssignedId": "",
   "friendlyName": "",
   "vlanTagId": 0,
   "hardwareAddress": "",
   "physicalAdapterId": "",
   "ipAddress": "",
   "gateway": "",
   "primaryDns": "",
   "secondaryDns": "",
   "ifStatus": "",
   "routes": [],
   "addresses": [],
   "ipv4Capabilities": {
      "enabled": true,
      "dhcp": true,
      "metric": 0
   },
   "ipv6Capabilities": {
      "enabled": true,
      "dhcp": true,
      "metric": 0
   },
   "currentState": "",
   "lastModifiedUserId": "",
   "lastModifiedCorrelationId": "",
   "commandResponses": [],
   "inheritPhoneTrunkBases": true,
   "inheritPhoneTrunkBasesIPv4": true,
   "inheritPhoneTrunkBasesIPv6": true,
   "useForInternalEdgeCommunication": true,
   "externalTrunkBaseAssignments": [],
   "phoneTrunkBaseAssignments": []
}
  */
TelephonyProvidersEdgeApi.prototype.putProvidersEdgesEdgeIdLogicalinterfacesInterfaceId = function putProvidersEdgesEdgeIdLogicalinterfacesInterfaceId(edgeId, interfaceId, body){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    if(interfaceId === undefined || interfaceId === null){
      throw new Error('Missing required  parameter: interfaceId');
    }
    requestPath = requestPath.replace('{interfaceId}', interfaceId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete an edge logical interface
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} edgeId - Edge ID
  * @param {string} interfaceId - Interface ID
  */
TelephonyProvidersEdgeApi.prototype.deleteProvidersEdgesEdgeIdLogicalinterfacesInterfaceId = function deleteProvidersEdgesEdgeIdLogicalinterfacesInterfaceId(edgeId, interfaceId){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    if(interfaceId === undefined || interfaceId === null){
      throw new Error('Missing required  parameter: interfaceId');
    }
    requestPath = requestPath.replace('{interfaceId}', interfaceId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a job to upload a list of Edge logs.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} edgeId - Edge ID
  * @param {} body - EdgeLogsJobRequest
  * @example
  * Body Example:
  * {
   "path": "",
   "query": "",
   "recurse": true
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesEdgeIdLogsJobs = function postProvidersEdgesEdgeIdLogsJobs(edgeId, body){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/logs/jobs';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get an Edge logs job.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} edgeId - Edge ID
  * @param {string} jobId - Job ID
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEdgeIdLogsJobsJobId = function getProvidersEdgesEdgeIdLogsJobsJobId(edgeId, jobId){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/logs/jobs/{jobId}';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    if(jobId === undefined || jobId === null){
      throw new Error('Missing required  parameter: jobId');
    }
    requestPath = requestPath.replace('{jobId}', jobId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Request that the specified fileIds be uploaded from the Edge.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} edgeId - Edge ID
  * @param {string} jobId - Job ID
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "fileIds": []
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesEdgeIdLogsJobsJobIdUpload = function postProvidersEdgesEdgeIdLogsJobsJobIdUpload(edgeId, jobId, body){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/logs/jobs/{jobId}/upload';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    if(jobId === undefined || jobId === null){
      throw new Error('Missing required  parameter: jobId');
    }
    requestPath = requestPath.replace('{jobId}', jobId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Retrieve a list of all configured physical interfaces from a specific edge.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} edgeId - Edge ID
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEdgeIdPhysicalinterfaces = function getProvidersEdgesEdgeIdPhysicalinterfaces(edgeId){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/physicalinterfaces';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get edge physical interface.
  * @description Retrieve a physical interface from a specific edge.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} edgeId - Edge ID
  * @param {string} interfaceId - Interface ID
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEdgeIdPhysicalinterfacesInterfaceId = function getProvidersEdgesEdgeIdPhysicalinterfacesInterfaceId(edgeId, interfaceId){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/physicalinterfaces/{interfaceId}';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    if(interfaceId === undefined || interfaceId === null){
      throw new Error('Missing required  parameter: interfaceId');
    }
    requestPath = requestPath.replace('{interfaceId}', interfaceId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Reboot an Edge
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} edgeId - Edge ID
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesEdgeIdReboot = function postProvidersEdgesEdgeIdReboot(edgeId){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/reboot';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Gets software update status information about any edge.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} edgeId - Edge ID
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEdgeIdSoftwareupdate = function getProvidersEdgesEdgeIdSoftwareupdate(edgeId){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/softwareupdate';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Starts a software update for this edge.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} edgeId - Edge ID
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "version": {
      "name": "",
      "edgeVersion": "",
      "publishDate": "",
      "edgeUri": "",
      "current": true,
      "latestRelease": true
   },
   "maxDownloadRate": 0,
   "downloadStartTime": "",
   "executeStartTime": "",
   "executeStopTime": "",
   "executeOnIdle": true,
   "status": "",
   "edgeUri": "",
   "current": true
}
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesEdgeIdSoftwareupdate = function postProvidersEdgesEdgeIdSoftwareupdate(edgeId, body){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/softwareupdate';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Cancels any in-progress update for this edge.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} edgeId - Edge ID
  */
TelephonyProvidersEdgeApi.prototype.deleteProvidersEdgesEdgeIdSoftwareupdate = function deleteProvidersEdgesEdgeIdSoftwareupdate(edgeId){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/softwareupdate';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Gets all the available software versions for this edge.
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} edgeId - Edge ID
  */
TelephonyProvidersEdgeApi.prototype.getProvidersEdgesEdgeIdSoftwareversions = function getProvidersEdgesEdgeIdSoftwareversions(edgeId){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/softwareversions';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Unpair an Edge
  * @memberOf TelephonyProvidersEdgeApi#
  * @param {string} edgeId - Edge Id
  */
TelephonyProvidersEdgeApi.prototype.postProvidersEdgesEdgeIdUnpair = function postProvidersEdgesEdgeIdUnpair(edgeId){
    var requestPath = '/api/v2/telephony/providers/edges/{edgeId}/unpair';
    var requestQuery = {};
    var requestBody;

    if(edgeId === undefined || edgeId === null){
      throw new Error('Missing required  parameter: edgeId');
    }
    requestPath = requestPath.replace('{edgeId}', edgeId);
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};



/**
* @class
* @example
* var api = new TokensApi(pureCloudSession);
*/
function TokensApi(session) {
    if(!(this instanceof TokensApi)) {
        return new TokensApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('TokensApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Delete  auth token used to make the request.
  * @memberOf TokensApi#
  */
TokensApi.prototype.deleteMe = function deleteMe(){
    var requestPath = '/api/v2/tokens/me';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};



/**
* @class
* @example
* var api = new UserRecordingsApi(pureCloudSession);
*/
function UserRecordingsApi(session) {
    if(!(this instanceof UserRecordingsApi)) {
        return new UserRecordingsApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('UserRecordingsApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get a list of user recordings.
  * @memberOf UserRecordingsApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} expand - conversation
  */
UserRecordingsApi.prototype.getUserrecordings = function getUserrecordings(pageSize, pageNumber, expand){
    var requestPath = '/api/v2/userrecordings';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get user recording summary
  * @memberOf UserRecordingsApi#
  */
UserRecordingsApi.prototype.getSummary = function getSummary(){
    var requestPath = '/api/v2/userrecordings/summary';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a user recording.
  * @memberOf UserRecordingsApi#
  * @param {string} recordingId - User Recording ID
  * @param {string} expand - conversation
  */
UserRecordingsApi.prototype.getRecordingId = function getRecordingId(recordingId, expand){
    var requestPath = '/api/v2/userrecordings/{recordingId}';
    var requestQuery = {};
    var requestBody;

    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a user recording.
  * @memberOf UserRecordingsApi#
  * @param {string} recordingId - User Recording ID
  * @param {} body - UserRecording
  * @param {string} expand - conversation
  * @example
  * Body Example:
  * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "contentUri": "",
   "workspace": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "createdBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "conversation": {
      "name": "",
      "startTime": "",
      "endTime": "",
      "address": "",
      "participants": [],
      "conversationIds": [],
      "maxParticipants": 0,
      "recordingState": ""
   },
   "contentLength": 0,
   "durationMilliseconds": 0,
   "thumbnails": [],
   "read": true
}
  */
UserRecordingsApi.prototype.putRecordingId = function putRecordingId(recordingId, body, expand){
    var requestPath = '/api/v2/userrecordings/{recordingId}';
    var requestQuery = {};
    var requestBody;

    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery.expand = expand;
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a user recording.
  * @memberOf UserRecordingsApi#
  * @param {string} recordingId - User Recording ID
  */
UserRecordingsApi.prototype.deleteRecordingId = function deleteRecordingId(recordingId){
    var requestPath = '/api/v2/userrecordings/{recordingId}';
    var requestQuery = {};
    var requestBody;

    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Download a user recording.
  * @memberOf UserRecordingsApi#
  * @param {string} recordingId - User Recording ID
  * @param {string} formatId - The desired media format.
  WAV,
  WEBM,
  WAV_ULAW,
  OGG_VORBIS,
  OGG_OPUS,
  NONE,
  */
UserRecordingsApi.prototype.getRecordingIdMedia = function getRecordingIdMedia(recordingId, formatId){
    var requestPath = '/api/v2/userrecordings/{recordingId}/media';
    var requestQuery = {};
    var requestBody;

    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    requestQuery.formatId = formatId;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};



/**
* @class
* @example
* var api = new UsersApi(pureCloudSession);
*/
function UsersApi(session) {
    if(!(this instanceof UsersApi)) {
        return new UsersApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('UsersApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Query for user aggregates
  * @memberOf UsersApi#
  * @param {} body - query
  * @example
  * Body Example:
  * {
   "interval": "",
   "granularity": "",
   "groupBy": [],
   "filter": {
      "type": "",
      "clauses": [],
      "predicates": []
   },
   "metrics": [],
   "flattenMultivaluedDimensions": true
}
  */
UsersApi.prototype.postUsersAggregatesQuery = function postUsersAggregatesQuery(body){
    var requestPath = '/api/v2/analytics/users/aggregates/query';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Query for user observations
  * @memberOf UsersApi#
  * @param {} body - query
  * @example
  * Body Example:
  * {
   "filter": {
      "type": "",
      "clauses": [],
      "predicates": []
   },
   "metrics": []
}
  */
UsersApi.prototype.postUsersObservationsQuery = function postUsersObservationsQuery(body){
    var requestPath = '/api/v2/analytics/users/observations/query';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of available users.
  * @memberOf UsersApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {array} id - The list of user ids to get. Paging is ignored if ids are specified
  * @param {string} sortOrder - Ascending or descending sort order
  ascending,
  descending,
  * @param {array} expand - Which fields, if any, to expand
  */
UsersApi.prototype.getUsers = function getUsers(pageSize, pageNumber, id, sortOrder, expand){
    var requestPath = '/api/v2/users';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.id = id;
    requestQuery.sortOrder = sortOrder;
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create user
  * @memberOf UsersApi#
  * @param {} body - User
  * @example
  * Body Example:
  * {
   "name": "",
   "department": "",
   "email": "",
   "addresses": [],
   "title": "",
   "password": ""
}
  */
UsersApi.prototype.postUsers = function postUsers(body){
    var requestPath = '/api/v2/users';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get user.
  * @memberOf UsersApi#
  * @param {array} expand - Which fields, if any, to expand
  */
UsersApi.prototype.getMe = function getMe(expand){
    var requestPath = '/api/v2/users/me';
    var requestQuery = {};
    var requestBody;

    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search using q64
  * @memberOf UsersApi#
  * @param {string} q64 - 
  * @param {array} expand - 
  */
UsersApi.prototype.getSearch = function getSearch(q64, expand){
    var requestPath = '/api/v2/users/search';
    var requestQuery = {};
    var requestBody;

    requestQuery.q64 = q64;
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Search
  * @memberOf UsersApi#
  * @param {} body - Search request options
  * @example
  * Body Example:
  * {
   "sortOrder": "",
   "sortBy": "",
   "pageSize": 0,
   "pageNumber": 0,
   "returnFields": [],
   "expand": [],
   "query": []
}
  */
UsersApi.prototype.postSearch = function postSearch(body){
    var requestPath = '/api/v2/users/search';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get user
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  * @param {array} expand - Which fields, if any, to expand
  */
UsersApi.prototype.getUserId = function getUserId(userId, expand){
    var requestPath = '/api/v2/users/{userId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete user
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  */
UsersApi.prototype.deleteUserId = function deleteUserId(userId){
    var requestPath = '/api/v2/users/{userId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update user
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "name": "",
   "chat": {
      "jabberId": ""
   },
   "department": "",
   "email": "",
   "addresses": [],
   "title": "",
   "username": "",
   "images": []
}
  */
UsersApi.prototype.patchUserId = function patchUserId(userId, body){
    var requestPath = '/api/v2/users/{userId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a user's CallForwarding
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  */
UsersApi.prototype.getUserIdCallforwarding = function getUserIdCallforwarding(userId){
    var requestPath = '/api/v2/users/{userId}/callforwarding';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a user's CallForwarding
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "name": "",
   "user": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "enabled": true,
   "phoneNumber": "",
   "modifiedDate": ""
}
  */
UsersApi.prototype.putUserIdCallforwarding = function putUserIdCallforwarding(userId, body){
    var requestPath = '/api/v2/users/{userId}/callforwarding';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Patch a user's CallForwarding
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "name": "",
   "user": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "enabled": true,
   "phoneNumber": "",
   "modifiedDate": ""
}
  */
UsersApi.prototype.patchUserIdCallforwarding = function patchUserIdCallforwarding(userId, body){
    var requestPath = '/api/v2/users/{userId}/callforwarding';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a user's Geolocation
  * @memberOf UsersApi#
  * @param {string} userId - user Id
  * @param {string} clientId - client Id
  */
UsersApi.prototype.getUserIdGeolocationsClientId = function getUserIdGeolocationsClientId(userId, clientId){
    var requestPath = '/api/v2/users/{userId}/geolocations/{clientId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(clientId === undefined || clientId === null){
      throw new Error('Missing required  parameter: clientId');
    }
    requestPath = requestPath.replace('{clientId}', clientId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Patch a user's Geolocation
  * @description The geolocation object can be patched one of three ways. Option 1: Set the 'primary' property to true. This will set the client as the user's primary geolocation source.  Option 2: Provide the 'latitude' and 'longitude' values.  This will enqueue an asynchronous update of the 'city', 'region', and 'country', generating a notification. A subsequent GET operation will include the new values for 'city', 'region' and 'country'.  Option 3:  Provide the 'city', 'region', 'country' values.  Option 1 can be combined with Option 2 or Option 3.  For example, update the client as primary and provide latitude and longitude values.
  * @memberOf UsersApi#
  * @param {string} userId - user Id
  * @param {string} clientId - client Id
  * @param {} body - The geolocation object can be patched one of three ways. Option 1: Set the 'primary' property to true. This will set the client as the user's primary geolocation source.  Option 2: Provide the 'latitude' and 'longitude' values.  This will enqueue an asynchronous update of the 'city', 'region', and 'country', generating a notification. A subsequent GET operation will include the new values for 'city', 'region' and 'country'.  Option 3:  Provide the 'city', 'region', 'country' values.  Option 1 can be combined with Option 2 or Option 3.  For example, update the client as primary and provide latitude and longitude values.
  * @example
  * Body Example:
  * {
   "name": "",
   "type": "",
   "primary": true,
   "latitude": {},
   "longitude": {},
   "country": "",
   "region": "",
   "city": ""
}
  */
UsersApi.prototype.patchUserIdGeolocationsClientId = function patchUserIdGeolocationsClientId(userId, clientId, body){
    var requestPath = '/api/v2/users/{userId}/geolocations/{clientId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(clientId === undefined || clientId === null){
      throw new Error('Missing required  parameter: clientId');
    }
    requestPath = requestPath.replace('{clientId}', clientId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a OutOfOffice
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  */
UsersApi.prototype.getUserIdOutofoffice = function getUserIdOutofoffice(userId){
    var requestPath = '/api/v2/users/{userId}/outofoffice';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an OutOfOffice
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  * @param {} body - The updated UserPresence
  * @example
  * Body Example:
  * {
   "name": "",
   "user": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "startDate": "",
   "endDate": "",
   "active": true
}
  */
UsersApi.prototype.putUserIdOutofoffice = function putUserIdOutofoffice(userId, body){
    var requestPath = '/api/v2/users/{userId}/outofoffice';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get queues for user
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  */
UsersApi.prototype.getUserIdQueues = function getUserIdQueues(userId, pageSize, pageNumber){
    var requestPath = '/api/v2/users/{userId}/queues';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Join or unjoin a set of queues for a user
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  * @param {} body - User Queues
  * @example
  * Body Example:
  * [
 {
  "name": "",
  "description": "",
  "version": 0,
  "dateCreated": "",
  "dateModified": "",
  "modifiedBy": "",
  "createdBy": "",
  "state": "",
  "modifiedByApp": "",
  "createdByApp": "",
  "mediaSettings": {},
  "bullseye": {
   "rings": []
  },
  "acwSettings": {
   "wrapupPrompt": "",
   "timeoutMs": 0
  },
  "skillEvaluationMethod": "",
  "queueFlow": {
   "id": "",
   "name": "",
   "selfUri": ""
  },
  "callingPartyName": "",
  "callingPartyNumber": "",
  "joined": true,
  "memberCount": 0
 }
]
  */
UsersApi.prototype.patchUserIdQueues = function patchUserIdQueues(userId, body){
    var requestPath = '/api/v2/users/{userId}/queues';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Join or unjoin a queue for a user
  * @memberOf UsersApi#
  * @param {string} queueId - Queue ID
  * @param {string} userId - User ID
  * @param {} body - Queue Member
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "mediaSettings": {},
   "bullseye": {
      "rings": []
   },
   "acwSettings": {
      "wrapupPrompt": "",
      "timeoutMs": 0
   },
   "skillEvaluationMethod": "",
   "queueFlow": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "callingPartyName": "",
   "callingPartyNumber": "",
   "joined": true,
   "memberCount": 0
}
  */
UsersApi.prototype.patchUserIdQueuesQueueId = function patchUserIdQueuesQueueId(queueId, userId, body){
    var requestPath = '/api/v2/users/{userId}/queues/{queueId}';
    var requestQuery = {};
    var requestBody;

    if(queueId === undefined || queueId === null){
      throw new Error('Missing required  parameter: queueId');
    }
    requestPath = requestPath.replace('{queueId}', queueId);
    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Returns a listing of roles and permissions for a user.
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  */
UsersApi.prototype.getUserIdRoles = function getUserIdRoles(userId){
    var requestPath = '/api/v2/users/{userId}/roles';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Sets the user's roles
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  * @param {} body - 
  */
UsersApi.prototype.putUserIdRoles = function putUserIdRoles(userId, body){
    var requestPath = '/api/v2/users/{userId}/roles';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Removes all the roles from the user.
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  */
UsersApi.prototype.deleteUserIdRoles = function deleteUserIdRoles(userId){
    var requestPath = '/api/v2/users/{userId}/roles';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary List routing skills for user
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} sortOrder - Ascending or descending sort order
  ascending,
  descending,
  */
UsersApi.prototype.getUserIdRoutingskills = function getUserIdRoutingskills(userId, pageSize, pageNumber, sortOrder){
    var requestPath = '/api/v2/users/{userId}/routingskills';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortOrder = sortOrder;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Add routing skill to user
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  * @param {} body - Skill
  * @example
  * Body Example:
  * {
   "name": "",
   "proficiency": {},
   "state": ""
}
  */
UsersApi.prototype.postUserIdRoutingskills = function postUserIdRoutingskills(userId, body){
    var requestPath = '/api/v2/users/{userId}/routingskills';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update routing skill proficiency or state.
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  * @param {string} skillId - 
  * @param {} body - Skill
  * @example
  * Body Example:
  * {
   "name": "",
   "proficiency": {},
   "state": ""
}
  */
UsersApi.prototype.putUserIdRoutingskillsSkillId = function putUserIdRoutingskillsSkillId(userId, skillId, body){
    var requestPath = '/api/v2/users/{userId}/routingskills/{skillId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(skillId === undefined || skillId === null){
      throw new Error('Missing required  parameter: skillId');
    }
    requestPath = requestPath.replace('{skillId}', skillId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Remove routing skill from user
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  * @param {string} skillId - 
  */
UsersApi.prototype.deleteUserIdRoutingskillsSkillId = function deleteUserIdRoutingskillsSkillId(userId, skillId){
    var requestPath = '/api/v2/users/{userId}/routingskills/{skillId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(skillId === undefined || skillId === null){
      throw new Error('Missing required  parameter: skillId');
    }
    requestPath = requestPath.replace('{skillId}', skillId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Fetch the routing status of a user
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  */
UsersApi.prototype.getUserIdRoutingstatus = function getUserIdRoutingstatus(userId){
    var requestPath = '/api/v2/users/{userId}/routingstatus';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update the routing status of a user
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  * @param {} body - Routing Status
  * @example
  * Body Example:
  * {
   "userId": "",
   "status": "",
   "startTime": ""
}
  */
UsersApi.prototype.putUserIdRoutingstatus = function putUserIdRoutingstatus(userId, body){
    var requestPath = '/api/v2/users/{userId}/routingstatus';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get station information for user
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  */
UsersApi.prototype.getUserIdStation = function getUserIdStation(userId){
    var requestPath = '/api/v2/users/{userId}/station';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Clear associated station
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  */
UsersApi.prototype.deleteUserIdStationAssociatedstation = function deleteUserIdStationAssociatedstation(userId){
    var requestPath = '/api/v2/users/{userId}/station/associatedstation';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Set associated station
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  * @param {string} stationId - 
  */
UsersApi.prototype.putUserIdStationAssociatedstationStationId = function putUserIdStationAssociatedstationStationId(userId, stationId){
    var requestPath = '/api/v2/users/{userId}/station/associatedstation/{stationId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(stationId === undefined || stationId === null){
      throw new Error('Missing required  parameter: stationId');
    }
    requestPath = requestPath.replace('{stationId}', stationId);
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Clear default station
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  */
UsersApi.prototype.deleteUserIdStationDefaultstation = function deleteUserIdStationDefaultstation(userId){
    var requestPath = '/api/v2/users/{userId}/station/defaultstation';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Set default station
  * @memberOf UsersApi#
  * @param {string} userId - User ID
  * @param {string} stationId - 
  */
UsersApi.prototype.putUserIdStationDefaultstationStationId = function putUserIdStationDefaultstationStationId(userId, stationId){
    var requestPath = '/api/v2/users/{userId}/station/defaultstation/{stationId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(stationId === undefined || stationId === null){
      throw new Error('Missing required  parameter: stationId');
    }
    requestPath = requestPath.replace('{stationId}', stationId);
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};



/**
* @class
* @example
* var api = new UtilitiesApi(pureCloudSession);
*/
function UtilitiesApi(session) {
    if(!(this instanceof UtilitiesApi)) {
        return new UtilitiesApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('UtilitiesApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Returns the information about an X509 PEM encoded certificate or certificate chain.
  * @memberOf UtilitiesApi#
  * @param {} body - 
  * @example
  * Body Example:
  * {
   "certificate": ""
}
  */
UtilitiesApi.prototype.postDetails = function postDetails(body){
    var requestPath = '/api/v2/certificate/details';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the current system date/time
  * @memberOf UtilitiesApi#
  */
UtilitiesApi.prototype.getDate = function getDate(){
    var requestPath = '/api/v2/date';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get time zones list
  * @memberOf UtilitiesApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  */
UtilitiesApi.prototype.getTimezones = function getTimezones(pageSize, pageNumber){
    var requestPath = '/api/v2/timezones';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};



/**
* @class
* @example
* var api = new VoicemailApi(pureCloudSession);
*/
function VoicemailApi(session) {
    if(!(this instanceof VoicemailApi)) {
        return new VoicemailApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('VoicemailApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Get mailbox information
  * @memberOf VoicemailApi#
  */
VoicemailApi.prototype.getMailbox = function getMailbox(){
    var requestPath = '/api/v2/voicemail/mailbox';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary List voicemail messages
  * @memberOf VoicemailApi#
  */
VoicemailApi.prototype.getMessages = function getMessages(){
    var requestPath = '/api/v2/voicemail/messages';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete all voicemail messages
  * @memberOf VoicemailApi#
  */
VoicemailApi.prototype.deleteMessages = function deleteMessages(){
    var requestPath = '/api/v2/voicemail/messages';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get message.
  * @memberOf VoicemailApi#
  * @param {string} messageId - Message ID
  */
VoicemailApi.prototype.getMessagesMessageId = function getMessagesMessageId(messageId){
    var requestPath = '/api/v2/voicemail/messages/{messageId}';
    var requestQuery = {};
    var requestBody;

    if(messageId === undefined || messageId === null){
      throw new Error('Missing required  parameter: messageId');
    }
    requestPath = requestPath.replace('{messageId}', messageId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a message.
  * @memberOf VoicemailApi#
  * @param {string} messageId - Message ID
  * @param {} body - VoicemailMessage
  * @example
  * Body Example:
  * {
   "conversation": {
      "name": "",
      "startTime": "",
      "endTime": "",
      "address": "",
      "participants": [],
      "conversationIds": [],
      "maxParticipants": 0,
      "recordingState": ""
   },
   "read": true,
   "audioRecordingDurationSeconds": 0,
   "audioRecordingSizeBytes": 0,
   "createdDate": "",
   "modifiedDate": "",
   "callerAddress": "",
   "callerName": "",
   "callerUser": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   }
}
  */
VoicemailApi.prototype.putMessagesMessageId = function putMessagesMessageId(messageId, body){
    var requestPath = '/api/v2/voicemail/messages/{messageId}';
    var requestQuery = {};
    var requestBody;

    if(messageId === undefined || messageId === null){
      throw new Error('Missing required  parameter: messageId');
    }
    requestPath = requestPath.replace('{messageId}', messageId);
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a message.
  * @memberOf VoicemailApi#
  * @param {string} messageId - Message ID
  */
VoicemailApi.prototype.deleteMessagesMessageId = function deleteMessagesMessageId(messageId){
    var requestPath = '/api/v2/voicemail/messages/{messageId}';
    var requestQuery = {};
    var requestBody;

    if(messageId === undefined || messageId === null){
      throw new Error('Missing required  parameter: messageId');
    }
    requestPath = requestPath.replace('{messageId}', messageId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get media playback URI for this message
  * @memberOf VoicemailApi#
  * @param {string} messageId - Message ID
  * @param {string} formatId - The desired media format.
  WAV,
  WEBM,
  WAV_ULAW,
  OGG_VORBIS,
  OGG_OPUS,
  NONE,
  */
VoicemailApi.prototype.getMessagesMessageIdMedia = function getMessagesMessageIdMedia(messageId, formatId){
    var requestPath = '/api/v2/voicemail/messages/{messageId}/media';
    var requestQuery = {};
    var requestBody;

    if(messageId === undefined || messageId === null){
      throw new Error('Missing required  parameter: messageId');
    }
    requestPath = requestPath.replace('{messageId}', messageId);
    requestQuery.formatId = formatId;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a policy
  * @memberOf VoicemailApi#
  */
VoicemailApi.prototype.getPolicy = function getPolicy(){
    var requestPath = '/api/v2/voicemail/policy';
    var requestQuery = {};
    var requestBody;

    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a policy
  * @memberOf VoicemailApi#
  * @param {} body - Policy
  * @example
  * Body Example:
  * {
   "enabled": true,
   "retentionTimeDays": 0,
   "alertTimeoutSeconds": 0,
   "minimumRecordingTimeSeconds": 0,
   "maximumRecordingTimeSeconds": 0,
   "unavailableMessageUri": "",
   "namePromptMessageUri": "",
   "fullMessageUri": "",
   "compressSilence": true,
   "pinConfiguration": {
      "minimumLength": 0,
      "maximumLength": 0
   },
   "quotaSizeBytes": 0,
   "createdDate": "",
   "modifiedDate": "",
   "voicemailExtension": "",
   "pinRequired": true
}
  */
VoicemailApi.prototype.putPolicy = function putPolicy(body){
    var requestPath = '/api/v2/voicemail/policy';
    var requestQuery = {};
    var requestBody;

    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a user's voicemail policy
  * @memberOf VoicemailApi#
  * @param {string} userId - User ID
  */
VoicemailApi.prototype.getUserpoliciesUserId = function getUserpoliciesUserId(userId){
    var requestPath = '/api/v2/voicemail/userpolicies/{userId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a user's voicemail policy
  * @memberOf VoicemailApi#
  * @param {string} userId - User ID
  * @param {} body - The user's voicemail policy
  * @example
  * Body Example:
  * {
   "enabled": true,
   "alertTimeoutSeconds": 0,
   "minimumRecordingTimeSeconds": 0,
   "maximumRecordingTimeSeconds": 0,
   "unavailableMessageUri": "",
   "namePromptMessageUri": "",
   "fullMessageUri": "",
   "pin": "",
   "quotaSizeBytes": 0,
   "createdDate": "",
   "modifiedDate": ""
}
  */
VoicemailApi.prototype.patchUserpoliciesUserId = function patchUserpoliciesUserId(userId, body){
    var requestPath = '/api/v2/voicemail/userpolicies/{userId}';
    var requestQuery = {};
    var requestBody;

    if(userId === undefined || userId === null){
      throw new Error('Missing required  parameter: userId');
    }
    requestPath = requestPath.replace('{userId}', userId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};



//API VERSION - 0.49.1
/**
  * @description With the PureCloud Platform API, you can control all aspects of your PureCloud environment. With the APIs you can access the system configuration, manage conversations and more.
  * @class
  * @param  {string} environment (Optional) The environment that this is run in.  If set should be mypurecloud.com, mypurecloud.ie, mypurecloud.com.au, etc.
  **/
function PureCloudSession(options) {
    if(!(this instanceof PureCloudSession)) {
        return new PureCloudSession(options);
    }

    this.options = options || {};
    this.setEnvironment(this.options.environment);
}

PureCloudSession.prototype.setEnvironment = function setEnvironment(env) {
    this.options.environment = env || 'mypurecloud.com';
    this.apiUrl = 'https://api.' + this.options.environment;
    this.authUrl = 'https://login.' + this.options.environment;
}

PureCloudSession.prototype.login = function login() {
  if(this.options.token) return Promise.resolve();
  var strategy = this.options.strategy;
  switch(strategy) {
    case 'oauth':
      var clientId = this.options.clientId;
      var redirectUrl = this.options.redirectUrl;
      var state = this.options.state;
      return this.loginWithOauth(clientId, redirectUrl, state);
    case 'basic':
      var username = options.username;
      var password = options.password;
      return this.loginWithBasicAuth(username, password);
    default:
      throw new Error('Authentication strategy "'+strategy+'" is not supported.');  
  }
}

PureCloudSession.prototype.loginWithOauth = function(clientId, redirectUrl, state) {
    var self = this;
    var checkUrl = this.apiUrl + "/api/v2/users/me?expand=organization";
    this._setHashValues();
    return makeRequest('get', checkUrl).catch(function(error) {
        var query = {
            response_type: 'token',
            client_id: encodeURIComponent(clientId),
            redirect_uri: encodeURI(redirectUrl),
            state: state
        };

        function qs(url, key) {
            var val = query[key];
            if(!val) return url;
            return url + '&' + key + '=' + val;
        }

        var url = Object.keys(query).reduce(qs, this.authUrl + '/authorize?');
        window.location.replace(url);
    });
}

PureCloudSession.prototype._setHashValues = function setHashValues() {
    if(!(typeof window !== 'undefined' && window.location.hash)) return;
    var hash = window.location.hash
        .slice(1).split('&')
        .reduce(function(obj, pair) {
            keyValue = pair.split('=');              
            obj[keyValue[0]] = keyValue[1];
            return obj;
        }, {});

    if(hash.access_token) this.options.token = hash.access_token;
    if(hash.state) this.options.state = hash.state;
}

PureCloudSession.prototype.loginWithBasicAuth = function(username, password) {
    var self = this;
    var url = this.authUrl + '/token';
    var data = {grant_type: 'client_credentials'};
    var timeout = 1000;

    return new Promise(function(resolve, reject) {
        superagent
            .post(url)
            .auth(username, password)
            .send(data)
            .timeout(timeout)
            .end(function(error, res) {
                if(error) return reject(error);
                if(!res.ok) return reject(res);
                self.options.token = res.body.access_token;
                resolve();
            });
    });
}

PureCloudSession.prototype.logout = function logout() {
		window.location.replace(this.authUrl + "/logout");
}

PureCloudSession.prototype.makeRequest = function makeRequest(method, url, query, data) {
    var self = this;
    return this.login().then(function() {
        method = method.toLowerCase();
        if(url.charAt(0) === '/') url = self.apiUrl + url;
        
        var bearer = 'bearer ' + self.options.token;
        var userAgent = 'PureCloud SDK/Javascript 0.49.1';
        var timeout = 2000;

        return new Promise(function(resolve, reject) {
            superagent[method](url)
                .type('json')
                .accept('json')
                .set('Authorization', bearer)
                .set('User-Agent', userAgent)
                .timeout(timeout)
                .query(query)
                .send(data)
                .end(function(error, res) {
                    if(error) return reject(error);
                    if(!res.ok) return reject(res);
                    resolve(res.body);
                });
        });
    });
}

module.exports = {
    AlertingApi: AlertingApi,
    ConversationsApi: ConversationsApi,
    AnalyticsApi: AnalyticsApi,
    QualityApi: QualityApi,
    RoutingApi: RoutingApi,
    UsersApi: UsersApi,
    AttributesApi: AttributesApi,
    AuthorizationApi: AuthorizationApi,
    UtilitiesApi: UtilitiesApi,
    TelephonyProvidersEdgeApi: TelephonyProvidersEdgeApi,
    ContentManagementApi: ContentManagementApi,
    RecordingApi: RecordingApi,
    FaxApi: FaxApi,
    GeolocationApi: GeolocationApi,
    GreetingsApi: GreetingsApi,
    GroupsApi: GroupsApi,
    SearchApi: SearchApi,
    IdentityProviderApi: IdentityProviderApi,
    LanguagesApi: LanguagesApi,
    LocationsApi: LocationsApi,
    NotificationsApi: NotificationsApi,
    OAuthApi: OAuthApi,
    OrganizationApi: OrganizationApi,
    OutboundApi: OutboundApi,
    PresenceApi: PresenceApi,
    ConfigurationApi: ConfigurationApi,
    ResponseManagementApi: ResponseManagementApi,
    SuggestApi: SuggestApi,
    StationsApi: StationsApi,
    TokensApi: TokensApi,
    UserRecordingsApi: UserRecordingsApi,
    VoicemailApi: VoicemailApi,
    PureCloudSession: PureCloudSession
};
