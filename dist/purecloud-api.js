/**
* @class
* @example
* var api = new AnalyticsApi(pureCloudSession);
*/
var AnalyticsApi = function (pureCloudSession) {
	/**
     * @summary Get a list of alerts.
	 * @description 
	 * @memberOf AnalyticsApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - title, startTime, endTime, description or unread
	* @param {string} sortOrder - ascending or descending
	*/
	function getAlertingAlerts(pageNumber, pageSize, sortBy, sortOrder){
		var apipath = '/api/v1/analytics/alerting/alerts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getAlertingAlerts = getAlertingAlerts;
	/**
     * @summary A count of unread alerts.
	 * @description 
	 * @memberOf AnalyticsApi#
	*/
	function getAlertingAlertsUnread(){
		var apipath = '/api/v1/analytics/alerting/alerts/unread';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getAlertingAlertsUnread = getAlertingAlertsUnread;
	/**
     * @summary Get an alert.
	 * @description 
	 * @memberOf AnalyticsApi#
	* @param {string} alertId - Alert ID
	*/
	function getAlertingAlert(alertId){
		var apipath = '/api/v1/analytics/alerting/alerts/{alertId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{alertId}', alertId);

        if(alertId === undefined && alertId !== null){
			throw 'Missing required  parameter: alertId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getAlertingAlert = getAlertingAlert;
	/**
     * @summary Update an alerts unread status.
	 * @description 
	 * @memberOf AnalyticsApi#
	* @param {string} alertId - Alert ID
	* @param {} body - Alert
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "title": "",
   "description": "",
   "unread": true,
   "entity": {
      "kind": "",
      "id": "",
      "name": ""
   },
   "metric": "",
   "metricThresholds": [],
   "metricValue": {},
   "startTime": "",
   "endTime": "",
   "mediaType": "",
   "statistic": "",
   "ruleUri": "",
   "selfUri": ""
}
	*/
	function updateAlertingAlert(alertId, body){
		var apipath = '/api/v1/analytics/alerting/alerts/{alertId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{alertId}', alertId);

        if(alertId === undefined && alertId !== null){
			throw 'Missing required  parameter: alertId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateAlertingAlert = updateAlertingAlert;
	/**
     * @summary Delete an alert.
	 * @description 
	 * @memberOf AnalyticsApi#
	* @param {string} alertId - Alert ID
	*/
	function deleteAlertingAlert(alertId){
		var apipath = '/api/v1/analytics/alerting/alerts/{alertId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{alertId}', alertId);

        if(alertId === undefined && alertId !== null){
			throw 'Missing required  parameter: alertId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteAlertingAlert = deleteAlertingAlert;
	/**
     * @summary Get a list of rules.
	 * @description 
	 * @memberOf AnalyticsApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - title, description, inAlarm or enabled
	* @param {string} sortOrder - ascending or descending
	*/
	function getAlertingRules(pageNumber, pageSize, sortBy, sortOrder){
		var apipath = '/api/v1/analytics/alerting/rules';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getAlertingRules = getAlertingRules;
	/**
     * @summary Create an alerting rule.
	 * @description 
	 * @memberOf AnalyticsApi#
	* @param {} body - Rule
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "title": "",
   "description": "",
   "enabled": true,
   "metric": "",
   "entity": {
      "kind": "",
      "id": "",
      "name": ""
   },
   "metricThresholds": [],
   "inAlarm": true,
   "occurrence": {
      "limit": 0,
      "type": ""
   },
   "mediaType": "",
   "statistic": "",
   "selfUri": ""
}
	*/
	function createAlertingRules(body){
		var apipath = '/api/v1/analytics/alerting/rules';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createAlertingRules = createAlertingRules;
	/**
     * @summary Get an alerting rule.
	 * @description 
	 * @memberOf AnalyticsApi#
	* @param {string} ruleId - Rule ID
	*/
	function getAlertingRule(ruleId){
		var apipath = '/api/v1/analytics/alerting/rules/{ruleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{ruleId}', ruleId);

        if(ruleId === undefined && ruleId !== null){
			throw 'Missing required  parameter: ruleId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getAlertingRule = getAlertingRule;
	/**
     * @summary Update an alerting rule.
	 * @description 
	 * @memberOf AnalyticsApi#
	* @param {string} ruleId - Rule ID
	* @param {} body - Rule
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "title": "",
   "description": "",
   "enabled": true,
   "metric": "",
   "entity": {
      "kind": "",
      "id": "",
      "name": ""
   },
   "metricThresholds": [],
   "inAlarm": true,
   "occurrence": {
      "limit": 0,
      "type": ""
   },
   "mediaType": "",
   "statistic": "",
   "selfUri": ""
}
	*/
	function updateAlertingRule(ruleId, body){
		var apipath = '/api/v1/analytics/alerting/rules/{ruleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{ruleId}', ruleId);

        if(ruleId === undefined && ruleId !== null){
			throw 'Missing required  parameter: ruleId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateAlertingRule = updateAlertingRule;
	/**
     * @summary Delete an alerting rule.
	 * @description 
	 * @memberOf AnalyticsApi#
	* @param {string} ruleId - Rule ID
	*/
	function deleteAlertingRule(ruleId){
		var apipath = '/api/v1/analytics/alerting/rules/{ruleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{ruleId}', ruleId);

        if(ruleId === undefined && ruleId !== null){
			throw 'Missing required  parameter: ruleId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteAlertingRule = deleteAlertingRule;
	/**
     * @summary Executes a metrics query against the analytics service
	 * @description 
	 * @memberOf AnalyticsApi#
	* @param {} body - queryObject
	*/
	function createMetricsQuery(body){
		var apipath = '/api/v1/analytics/metrics/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createMetricsQuery = createMetricsQuery;
	/**
     * @summary Executes a query against the analytics service
	 * @description 
	 * @memberOf AnalyticsApi#
	* @param {} body - queryObject
	* @param {string} version - Version number
	*/
	function createQuery(body, version){
		var apipath = '/api/v1/analytics/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(version !== undefined && version !== null){
			queryParameters.version = version;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createQuery = createQuery;
	/**
     * @summary Get list of reporting metadata.
	 * @description 
	 * @memberOf AnalyticsApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} acceptLanguage - Accepted language
	* @param {string} locale - Locale
	*/
	function getReportingMetadata(pageNumber, pageSize, acceptLanguage, locale){
		var apipath = '/api/v1/analytics/reporting/metadata';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(locale !== undefined && locale !== null){
			queryParameters.locale = locale;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getReportingMetadata = getReportingMetadata;
	/**
     * @summary Get a list of report formats
	 * @description Get a list of report formats.
	 * @memberOf AnalyticsApi#
	*/
	function getReportingReportformats(){
		var apipath = '/api/v1/analytics/reporting/reportformats';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getReportingReportformats = getReportingReportformats;
	/**
     * @summary Get a list of scheduled report jobs
	 * @description Get a list of scheduled report jobs.
	 * @memberOf AnalyticsApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	*/
	function getReportingSchedules(pageNumber, pageSize){
		var apipath = '/api/v1/analytics/reporting/schedules';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getReportingSchedules = getReportingSchedules;
	/**
     * @summary Create a scheduled report job
	 * @description Create a scheduled report job.
	 * @memberOf AnalyticsApi#
	* @param {} body - ReportSchedule
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "quartzCronExpression": "",
   "nextFireTime": "",
   "dateCreated": "",
   "dateModified": "",
   "description": "",
   "timeZone": "",
   "timePeriod": "",
   "interval": {
      "end": "",
      "start": "",
      "chronology": {},
      "endMillis": 0,
      "startMillis": 0,
      "beforeNow": true,
      "afterNow": true
   },
   "reportFormat": "",
   "locale": "",
   "enabled": true,
   "reportId": "",
   "parameters": {},
   "lastRun": {
      "id": "",
      "name": "",
      "reportId": "",
      "runTime": "",
      "runStatus": "",
      "errorMessage": "",
      "runDurationMsec": 0,
      "reportUrl": "",
      "reportFormat": "",
      "scheduleUri": "",
      "selfUri": ""
   },
   "selfUri": ""
}
	*/
	function createReportingSchedules(body){
		var apipath = '/api/v1/analytics/reporting/schedules';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createReportingSchedules = createReportingSchedules;
	/**
     * @summary Get a scheduled report job.
	 * @description 
	 * @memberOf AnalyticsApi#
	* @param {string} scheduleId - Schedule ID
	*/
	function getReportingSchedule(scheduleId){
		var apipath = '/api/v1/analytics/reporting/schedules/{scheduleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scheduleId}', scheduleId);

        if(scheduleId === undefined && scheduleId !== null){
			throw 'Missing required  parameter: scheduleId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getReportingSchedule = getReportingSchedule;
	/**
     * @summary Update a scheduled report job.
	 * @description 
	 * @memberOf AnalyticsApi#
	* @param {string} scheduleId - Schedule ID
	* @param {} body - ReportSchedule
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "quartzCronExpression": "",
   "nextFireTime": "",
   "dateCreated": "",
   "dateModified": "",
   "description": "",
   "timeZone": "",
   "timePeriod": "",
   "interval": {
      "end": "",
      "start": "",
      "chronology": {},
      "endMillis": 0,
      "startMillis": 0,
      "beforeNow": true,
      "afterNow": true
   },
   "reportFormat": "",
   "locale": "",
   "enabled": true,
   "reportId": "",
   "parameters": {},
   "lastRun": {
      "id": "",
      "name": "",
      "reportId": "",
      "runTime": "",
      "runStatus": "",
      "errorMessage": "",
      "runDurationMsec": 0,
      "reportUrl": "",
      "reportFormat": "",
      "scheduleUri": "",
      "selfUri": ""
   },
   "selfUri": ""
}
	*/
	function updateReportingSchedule(scheduleId, body){
		var apipath = '/api/v1/analytics/reporting/schedules/{scheduleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scheduleId}', scheduleId);

        if(scheduleId === undefined && scheduleId !== null){
			throw 'Missing required  parameter: scheduleId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateReportingSchedule = updateReportingSchedule;
	/**
     * @summary Delete a scheduled report job.
	 * @description 
	 * @memberOf AnalyticsApi#
	* @param {string} scheduleId - Schedule ID
	*/
	function deleteReportingSchedule(scheduleId){
		var apipath = '/api/v1/analytics/reporting/schedules/{scheduleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scheduleId}', scheduleId);

        if(scheduleId === undefined && scheduleId !== null){
			throw 'Missing required  parameter: scheduleId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteReportingSchedule = deleteReportingSchedule;
	/**
     * @summary Get list of completed scheduled report jobs.
	 * @description 
	 * @memberOf AnalyticsApi#
	* @param {string} scheduleId - Schedule ID
	* @param {integer} pageNumber - 
	* @param {integer} pageSize - 
	*/
	function getReportingScheduleHistory(scheduleId, pageNumber, pageSize){
		var apipath = '/api/v1/analytics/reporting/schedules/{scheduleId}/history';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scheduleId}', scheduleId);

        if(scheduleId === undefined && scheduleId !== null){
			throw 'Missing required  parameter: scheduleId';
        }


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getReportingScheduleHistory = getReportingScheduleHistory;
	/**
     * @summary Get most recently completed scheduled report job.
	 * @description 
	 * @memberOf AnalyticsApi#
	* @param {string} scheduleId - Schedule ID
	*/
	function getReportingScheduleHistoryLatest(scheduleId){
		var apipath = '/api/v1/analytics/reporting/schedules/{scheduleId}/history/latest';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scheduleId}', scheduleId);

        if(scheduleId === undefined && scheduleId !== null){
			throw 'Missing required  parameter: scheduleId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getReportingScheduleHistoryLatest = getReportingScheduleHistoryLatest;
	/**
     * @summary A completed scheduled report job
	 * @description A completed scheduled report job.
	 * @memberOf AnalyticsApi#
	* @param {string} runId - Run ID
	* @param {string} scheduleId - Schedule ID
	*/
	function getReportingScheduleHistoryByRunId(runId, scheduleId){
		var apipath = '/api/v1/analytics/reporting/schedules/{scheduleId}/history/{runId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{runId}', runId);

        if(runId === undefined && runId !== null){
			throw 'Missing required  parameter: runId';
        }

        apipath = apipath.replace('{scheduleId}', scheduleId);

        if(scheduleId === undefined && scheduleId !== null){
			throw 'Missing required  parameter: scheduleId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getReportingScheduleHistoryByRunId = getReportingScheduleHistoryByRunId;
	/**
     * @summary Place a scheduled report immediately into the reporting queue
	 * @description 
	 * @memberOf AnalyticsApi#
	* @param {string} scheduleId - Schedule ID
	*/
	function createReportingScheduleRunreport(scheduleId){
		var apipath = '/api/v1/analytics/reporting/schedules/{scheduleId}/runreport';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scheduleId}', scheduleId);

        if(scheduleId === undefined && scheduleId !== null){
			throw 'Missing required  parameter: scheduleId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createReportingScheduleRunreport = createReportingScheduleRunreport;
	/**
     * @summary Get a list of report time periods.
	 * @description 
	 * @memberOf AnalyticsApi#
	*/
	function getReportingTimeperiods(){
		var apipath = '/api/v1/analytics/reporting/timeperiods';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getReportingTimeperiods = getReportingTimeperiods;
	/**
     * @summary Get a reporting metadata.
	 * @description 
	 * @memberOf AnalyticsApi#
	* @param {string} reportId - Report ID
	* @param {string} acceptLanguage - Accepted language
	* @param {string} locale - Locale
	*/
	function getReportingReportMetadata(reportId, acceptLanguage, locale){
		var apipath = '/api/v1/analytics/reporting/{reportId}/metadata';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{reportId}', reportId);

        if(reportId === undefined && reportId !== null){
			throw 'Missing required  parameter: reportId';
        }


		if(locale !== undefined && locale !== null){
			queryParameters.locale = locale;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getReportingReportMetadata = getReportingReportMetadata;
	/**
     * @summary Executes a segments query against the analytics service
	 * @description 
	 * @memberOf AnalyticsApi#
	* @param {} body - queryObject
	*/
	function createSegmentsQuery(body){
		var apipath = '/api/v1/analytics/segments/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createSegmentsQuery = createSegmentsQuery;

    return self;
};

/**
* @class
* @example
* var api = new ArchitectApi(pureCloudSession);
*/
var ArchitectApi = function (pureCloudSession) {
	/**
     * @summary Get Dependency Tracking objects that have a given display name
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} name - Object name to search for
	* @param {array} objectType - Object type(s) to search for
	* @param {boolean} consumedResources - Include resources each result item consumes
	* @param {boolean} consumingResources - Include resources that consume each result item
	* @param {array} consumedResourceType - Types of consumed resources to return, if consumed resources are requested
	* @param {array} consumingResourceType - Types of consuming resources to return, if consuming resources are requested
	*/
	function getDependencytracking(pageNumber, pageSize, name, objectType, consumedResources, consumingResources, consumedResourceType, consumingResourceType){
		var apipath = '/api/v1/architect/dependencytracking';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(objectType !== undefined && objectType !== null){
			queryParameters.objectType = objectType;
		}


		if(consumedResources !== undefined && consumedResources !== null){
			queryParameters.consumedResources = consumedResources;
		}


		if(consumingResources !== undefined && consumingResources !== null){
			queryParameters.consumingResources = consumingResources;
		}


		if(consumedResourceType !== undefined && consumedResourceType !== null){
			queryParameters.consumedResourceType = consumedResourceType;
		}


		if(consumingResourceType !== undefined && consumingResourceType !== null){
			queryParameters.consumingResourceType = consumingResourceType;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDependencytracking = getDependencytracking;
	/**
     * @summary Get Dependency Tracking build status for an organization
	 * @description 
	 * @memberOf ArchitectApi#
	*/
	function getDependencytrackingBuild(){
		var apipath = '/api/v1/architect/dependencytracking/build';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDependencytrackingBuild = getDependencytrackingBuild;
	/**
     * @summary Rebuild Dependency Tracking data for an organization
	 * @description 
	 * @memberOf ArchitectApi#
	*/
	function createDependencytrackingBuild(){
		var apipath = '/api/v1/architect/dependencytracking/build';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createDependencytrackingBuild = createDependencytrackingBuild;
	/**
     * @summary Get resources that are consumed by a given Dependency Tracking object
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} id - Consuming object ID
	* @param {string} version - Consuming object version
	* @param {string} objectType - Consuming object type
	ACDLANGUAGE,
	ACDSKILL,
	ACDWRAPUPCODE,
	BRIDGEACTION,
	COMPOSERSCRIPT,
	CONTACTLIST,
	INBOUNDCALLFLOW,
	INQUEUECALLFLOW,
	IVRCONFIGURATION,
	LANGUAGE,
	OUTBOUNDCALLFLOW,
	QUEUE,
	SYSTEMPROMPT,
	USER,
	USERPROMPT,
	VOICEXML,
	* @param {array} resourceType - Types of consumed resources to show
	*/
	function getDependencytrackingConsumedresources(id, version, objectType, resourceType){
		var apipath = '/api/v1/architect/dependencytracking/consumedresources';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(id !== undefined && id !== null){
			queryParameters.id = id;
		}

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(version !== undefined && version !== null){
			queryParameters.version = version;
		}

        if(version === undefined && version !== null){
			throw 'Missing required  parameter: version';
        }


		if(objectType !== undefined && objectType !== null){
			queryParameters.objectType = objectType;
		}

        if(objectType === undefined && objectType !== null){
			throw 'Missing required  parameter: objectType';
        }


		if(resourceType !== undefined && resourceType !== null){
			queryParameters.resourceType = resourceType;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDependencytrackingConsumedresources = getDependencytrackingConsumedresources;
	/**
     * @summary Get resources that consume a given Dependency Tracking object
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} id - Consumed object ID
	* @param {string} objectType - Consumed object type
	ACDLANGUAGE,
	ACDSKILL,
	ACDWRAPUPCODE,
	BRIDGEACTION,
	COMPOSERSCRIPT,
	CONTACTLIST,
	INBOUNDCALLFLOW,
	INQUEUECALLFLOW,
	IVRCONFIGURATION,
	LANGUAGE,
	OUTBOUNDCALLFLOW,
	QUEUE,
	SYSTEMPROMPT,
	USER,
	USERPROMPT,
	VOICEXML,
	* @param {array} resourceType - Types of consuming resources to show
	*/
	function getDependencytrackingConsumingresources(id, objectType, resourceType){
		var apipath = '/api/v1/architect/dependencytracking/consumingresources';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(id !== undefined && id !== null){
			queryParameters.id = id;
		}

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(objectType !== undefined && objectType !== null){
			queryParameters.objectType = objectType;
		}

        if(objectType === undefined && objectType !== null){
			throw 'Missing required  parameter: objectType';
        }


		if(resourceType !== undefined && resourceType !== null){
			queryParameters.resourceType = resourceType;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDependencytrackingConsumingresources = getDependencytrackingConsumingresources;
	/**
     * @summary Get Dependency Tracking objects that consume deleted resources
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} name - Name to search for
	* @param {array} objectType - Object type(s) to search for
	* @param {string} flowFilter - Show only checkedIn or published flows
	* @param {boolean} consumedResources - Return consumed resources?
	* @param {array} consumedResourceType - Resource type(s) to return
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	*/
	function getDependencytrackingDeletedresourceconsumers(name, objectType, flowFilter, consumedResources, consumedResourceType, pageNumber, pageSize){
		var apipath = '/api/v1/architect/dependencytracking/deletedresourceconsumers';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(objectType !== undefined && objectType !== null){
			queryParameters.objectType = objectType;
		}


		if(flowFilter !== undefined && flowFilter !== null){
			queryParameters.flowFilter = flowFilter;
		}


		if(consumedResources !== undefined && consumedResources !== null){
			queryParameters.consumedResources = consumedResources;
		}


		if(consumedResourceType !== undefined && consumedResourceType !== null){
			queryParameters.consumedResourceType = consumedResourceType;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDependencytrackingDeletedresourceconsumers = getDependencytrackingDeletedresourceconsumers;
	/**
     * @summary Get a Dependency Tracking object
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} id - Object ID
	* @param {string} version - Object version
	* @param {string} objectType - Object type
	ACDLANGUAGE,
	ACDSKILL,
	ACDWRAPUPCODE,
	BRIDGEACTION,
	COMPOSERSCRIPT,
	CONTACTLIST,
	INBOUNDCALLFLOW,
	INQUEUECALLFLOW,
	IVRCONFIGURATION,
	LANGUAGE,
	OUTBOUNDCALLFLOW,
	QUEUE,
	SYSTEMPROMPT,
	USER,
	USERPROMPT,
	VOICEXML,
	* @param {boolean} consumedResources - Include resources this item consumes
	* @param {boolean} consumingResources - Include resources that consume this item
	* @param {array} consumedResourceType - Types of consumed resources to return, if consumed resources are requested
	* @param {array} consumingResourceType - Types of consuming resources to return, if consuming resources are requested
	*/
	function getDependencytrackingObject(id, version, objectType, consumedResources, consumingResources, consumedResourceType, consumingResourceType){
		var apipath = '/api/v1/architect/dependencytracking/object';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(id !== undefined && id !== null){
			queryParameters.id = id;
		}

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(version !== undefined && version !== null){
			queryParameters.version = version;
		}


		if(objectType !== undefined && objectType !== null){
			queryParameters.objectType = objectType;
		}


		if(consumedResources !== undefined && consumedResources !== null){
			queryParameters.consumedResources = consumedResources;
		}


		if(consumingResources !== undefined && consumingResources !== null){
			queryParameters.consumingResources = consumingResources;
		}


		if(consumedResourceType !== undefined && consumedResourceType !== null){
			queryParameters.consumedResourceType = consumedResourceType;
		}


		if(consumingResourceType !== undefined && consumingResourceType !== null){
			queryParameters.consumingResourceType = consumingResourceType;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDependencytrackingObject = getDependencytrackingObject;
	/**
     * @summary Get Dependency Tracking types.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	*/
	function getDependencytrackingTypes(pageNumber, pageSize){
		var apipath = '/api/v1/architect/dependencytracking/types';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDependencytrackingTypes = getDependencytrackingTypes;
	/**
     * @summary Get a Dependency Tracking type.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} typeId - Type ID
	*/
	function getDependencytrackingType(typeId){
		var apipath = '/api/v1/architect/dependencytracking/types/{typeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{typeId}', typeId);

        if(typeId === undefined && typeId !== null){
			throw 'Missing required  parameter: typeId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDependencytrackingType = getDependencytrackingType;
	/**
     * @summary Get IVR configs.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	*/
	function getIvrs(pageNumber, pageSize, sortBy, sortOrder){
		var apipath = '/api/v1/architect/ivrs';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getIvrs = getIvrs;
	/**
     * @summary Create IVR config.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "ivrUri": "",
   "dnis": [],
   "flowId": "",
   "scheduleId": "",
   "openHoursFlow": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "closedHoursFlow": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "scheduleGroup": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "selfUri": ""
}
	*/
	function createIvrs(body){
		var apipath = '/api/v1/architect/ivrs';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createIvrs = createIvrs;
	/**
     * @summary Publish an IVR config.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} id - 
	*/
	function createIvrsActionsPublish(id){
		var apipath = '/api/v1/architect/ivrs/actions/publish';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(id !== undefined && id !== null){
			queryParameters.id = id;
		}

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createIvrsActionsPublish = createIvrsActionsPublish;
	/**
     * @summary Get an IVR config.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} ivrId - IVR id
	*/
	function getIvr(ivrId){
		var apipath = '/api/v1/architect/ivrs/{ivrId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{ivrId}', ivrId);

        if(ivrId === undefined && ivrId !== null){
			throw 'Missing required  parameter: ivrId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getIvr = getIvr;
	/**
     * @summary Update an IVR Config.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} ivrId - IVR id
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "ivrUri": "",
   "dnis": [],
   "flowId": "",
   "scheduleId": "",
   "openHoursFlow": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "closedHoursFlow": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "scheduleGroup": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "selfUri": ""
}
	*/
	function updateIvr(ivrId, body){
		var apipath = '/api/v1/architect/ivrs/{ivrId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{ivrId}', ivrId);

        if(ivrId === undefined && ivrId !== null){
			throw 'Missing required  parameter: ivrId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateIvr = updateIvr;
	/**
     * @summary Delete an IVR Config.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} ivrId - IVR id
	*/
	function deleteIvr(ivrId){
		var apipath = '/api/v1/architect/ivrs/{ivrId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{ivrId}', ivrId);

        if(ivrId === undefined && ivrId !== null){
			throw 'Missing required  parameter: ivrId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteIvr = deleteIvr;
	/**
     * @summary Get a pageable list of user prompts
	 * @description The returned list is pageable, and query parameters can be used for filtering.  Multiple names can be specified, in which case all matching prompts will be returned, and no other filters will be evaluated.
	 * @memberOf ArchitectApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} name - Name
	* @param {string} description - Description
	* @param {string} nameOrDescription - Name or description
	*/
	function getPrompts(pageNumber, pageSize, name, description, nameOrDescription){
		var apipath = '/api/v1/architect/prompts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(description !== undefined && description !== null){
			queryParameters.description = description;
		}


		if(nameOrDescription !== undefined && nameOrDescription !== null){
			queryParameters.nameOrDescription = nameOrDescription;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPrompts = getPrompts;
	/**
     * @summary Create a new user prompt
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "description": "",
   "resources": [],
   "selfUri": ""
}
	*/
	function createPrompts(body){
		var apipath = '/api/v1/architect/prompts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createPrompts = createPrompts;
	/**
     * @summary Get specified user prompt
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	*/
	function getPrompt(promptId){
		var apipath = '/api/v1/architect/prompts/{promptId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPrompt = getPrompt;
	/**
     * @summary Update specified user prompt
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "description": "",
   "resources": [],
   "selfUri": ""
}
	*/
	function updatePrompt(promptId, body){
		var apipath = '/api/v1/architect/prompts/{promptId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updatePrompt = updatePrompt;
	/**
     * @summary Delete specified user prompt
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	*/
	function deletePrompt(promptId){
		var apipath = '/api/v1/architect/prompts/{promptId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deletePrompt = deletePrompt;
	/**
     * @summary Get a pageable list of user prompt resources
	 * @description The returned list is pageable, and query paramaters can be used for filtering.
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	*/
	function getPromptResources(promptId, pageNumber, pageSize){
		var apipath = '/api/v1/architect/prompts/{promptId}/resources';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPromptResources = getPromptResources;
	/**
     * @summary Create a new user prompt resource.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "promptId": "",
   "language": "",
   "mediaUri": "",
   "ttsString": "",
   "uploadStatus": "",
   "uploadUri": "",
   "durationSeconds": {},
   "selfUri": ""
}
	*/
	function createPromptResources(promptId, body){
		var apipath = '/api/v1/architect/prompts/{promptId}/resources';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createPromptResources = createPromptResources;
	/**
     * @summary Get specified user prompt resource
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {string} language - Language
	*/
	function getPromptResourcesByLanguage(promptId, language){
		var apipath = '/api/v1/architect/prompts/{promptId}/resources/{language}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }

        apipath = apipath.replace('{language}', language);

        if(language === undefined && language !== null){
			throw 'Missing required  parameter: language';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPromptResourcesByLanguage = getPromptResourcesByLanguage;
	/**
     * @summary Update specified user prompt resource
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {string} language - Language
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "promptId": "",
   "language": "",
   "mediaUri": "",
   "ttsString": "",
   "uploadStatus": "",
   "uploadUri": "",
   "durationSeconds": {},
   "selfUri": ""
}
	*/
	function updatePromptResourcesByLanguage(promptId, language, body){
		var apipath = '/api/v1/architect/prompts/{promptId}/resources/{language}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }

        apipath = apipath.replace('{language}', language);

        if(language === undefined && language !== null){
			throw 'Missing required  parameter: language';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updatePromptResourcesByLanguage = updatePromptResourcesByLanguage;
	/**
     * @summary Delete specified user prompt resource
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {string} language - Language
	*/
	function deletePromptResourcesByLanguage(promptId, language){
		var apipath = '/api/v1/architect/prompts/{promptId}/resources/{language}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }

        apipath = apipath.replace('{language}', language);

        if(language === undefined && language !== null){
			throw 'Missing required  parameter: language';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deletePromptResourcesByLanguage = deletePromptResourcesByLanguage;
	/**
     * @summary Get a list of schedule groups.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	*/
	function getSchedulegroups(pageNumber, pageSize, sortBy, sortOrder){
		var apipath = '/api/v1/architect/schedulegroups';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchedulegroups = getSchedulegroups;
	/**
     * @summary Creates a new schedule group
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "timeZone": "",
   "openSchedules": [],
   "closedSchedules": [],
   "selfUri": ""
}
	*/
	function createSchedulegroups(body){
		var apipath = '/api/v1/architect/schedulegroups';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createSchedulegroups = createSchedulegroups;
	/**
     * @summary Gets a schedule group by ID
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} scheduleGroupId - Schedule group ID
	*/
	function getScheduleGroup(scheduleGroupId){
		var apipath = '/api/v1/architect/schedulegroups/{scheduleGroupId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scheduleGroupId}', scheduleGroupId);

        if(scheduleGroupId === undefined && scheduleGroupId !== null){
			throw 'Missing required  parameter: scheduleGroupId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getScheduleGroup = getScheduleGroup;
	/**
     * @summary Updates a schedule group by ID
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} scheduleGroupId - Schedule group ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "timeZone": "",
   "openSchedules": [],
   "closedSchedules": [],
   "selfUri": ""
}
	*/
	function updateScheduleGroup(scheduleGroupId, body){
		var apipath = '/api/v1/architect/schedulegroups/{scheduleGroupId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scheduleGroupId}', scheduleGroupId);

        if(scheduleGroupId === undefined && scheduleGroupId !== null){
			throw 'Missing required  parameter: scheduleGroupId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateScheduleGroup = updateScheduleGroup;
	/**
     * @summary Deletes a schedule group by ID
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} scheduleGroupId - Schedule group ID
	*/
	function deleteScheduleGroup(scheduleGroupId){
		var apipath = '/api/v1/architect/schedulegroups/{scheduleGroupId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scheduleGroupId}', scheduleGroupId);

        if(scheduleGroupId === undefined && scheduleGroupId !== null){
			throw 'Missing required  parameter: scheduleGroupId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteScheduleGroup = deleteScheduleGroup;
	/**
     * @summary Get a list of schedules.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	*/
	function getSchedules(pageNumber, pageSize, sortBy, sortOrder){
		var apipath = '/api/v1/architect/schedules';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchedules = getSchedules;
	/**
     * @summary Create a new schedule.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "start": {
      "year": 0,
      "dayOfMonth": 0,
      "dayOfWeek": 0,
      "era": 0,
      "dayOfYear": 0,
      "weekyear": 0,
      "chronology": {},
      "monthOfYear": 0,
      "millisOfDay": 0,
      "weekOfWeekyear": 0,
      "hourOfDay": 0,
      "minuteOfHour": 0,
      "secondOfMinute": 0,
      "millisOfSecond": 0,
      "yearOfEra": 0,
      "yearOfCentury": 0,
      "centuryOfEra": 0,
      "fieldTypes": [],
      "values": [],
      "fields": []
   },
   "end": {
      "year": 0,
      "dayOfMonth": 0,
      "dayOfWeek": 0,
      "era": 0,
      "dayOfYear": 0,
      "weekyear": 0,
      "chronology": {},
      "monthOfYear": 0,
      "millisOfDay": 0,
      "weekOfWeekyear": 0,
      "hourOfDay": 0,
      "minuteOfHour": 0,
      "secondOfMinute": 0,
      "millisOfSecond": 0,
      "yearOfEra": 0,
      "yearOfCentury": 0,
      "centuryOfEra": 0,
      "fieldTypes": [],
      "values": [],
      "fields": []
   },
   "rrule": "",
   "keywords": [],
   "selfUri": ""
}
	*/
	function createSchedules(body){
		var apipath = '/api/v1/architect/schedules';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createSchedules = createSchedules;
	/**
     * @summary Get a schedule by ID
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} scheduleId - Schedule ID
	*/
	function getSchedule(scheduleId){
		var apipath = '/api/v1/architect/schedules/{scheduleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scheduleId}', scheduleId);

        if(scheduleId === undefined && scheduleId !== null){
			throw 'Missing required  parameter: scheduleId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchedule = getSchedule;
	/**
     * @summary Update schedule by ID
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} scheduleId - Schedule ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "start": {
      "year": 0,
      "dayOfMonth": 0,
      "dayOfWeek": 0,
      "era": 0,
      "dayOfYear": 0,
      "weekyear": 0,
      "chronology": {},
      "monthOfYear": 0,
      "millisOfDay": 0,
      "weekOfWeekyear": 0,
      "hourOfDay": 0,
      "minuteOfHour": 0,
      "secondOfMinute": 0,
      "millisOfSecond": 0,
      "yearOfEra": 0,
      "yearOfCentury": 0,
      "centuryOfEra": 0,
      "fieldTypes": [],
      "values": [],
      "fields": []
   },
   "end": {
      "year": 0,
      "dayOfMonth": 0,
      "dayOfWeek": 0,
      "era": 0,
      "dayOfYear": 0,
      "weekyear": 0,
      "chronology": {},
      "monthOfYear": 0,
      "millisOfDay": 0,
      "weekOfWeekyear": 0,
      "hourOfDay": 0,
      "minuteOfHour": 0,
      "secondOfMinute": 0,
      "millisOfSecond": 0,
      "yearOfEra": 0,
      "yearOfCentury": 0,
      "centuryOfEra": 0,
      "fieldTypes": [],
      "values": [],
      "fields": []
   },
   "rrule": "",
   "keywords": [],
   "selfUri": ""
}
	*/
	function updateSchedule(scheduleId, body){
		var apipath = '/api/v1/architect/schedules/{scheduleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scheduleId}', scheduleId);

        if(scheduleId === undefined && scheduleId !== null){
			throw 'Missing required  parameter: scheduleId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateSchedule = updateSchedule;
	/**
     * @summary Delete a schedule by id
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} scheduleId - Schedule ID
	*/
	function deleteSchedule(scheduleId){
		var apipath = '/api/v1/architect/schedules/{scheduleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scheduleId}', scheduleId);

        if(scheduleId === undefined && scheduleId !== null){
			throw 'Missing required  parameter: scheduleId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteSchedule = deleteSchedule;
	/**
     * @summary Get System Prompts.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	* @param {string} name - Name
	* @param {string} description - Description
	* @param {string} nameOrDescription - Name or description
	*/
	function getSystemprompts(pageNumber, pageSize, sortBy, sortOrder, name, description, nameOrDescription){
		var apipath = '/api/v1/architect/systemprompts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(description !== undefined && description !== null){
			queryParameters.description = description;
		}


		if(nameOrDescription !== undefined && nameOrDescription !== null){
			queryParameters.nameOrDescription = nameOrDescription;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSystemprompts = getSystemprompts;
	/**
     * @summary Get IVR system prompt.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} promptId - 
	*/
	function getSystempromptsPrompt(promptId){
		var apipath = '/api/v1/architect/systemprompts/{promptId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSystempromptsPrompt = getSystempromptsPrompt;
	/**
     * @summary Get IVR System Prompt resources.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	*/
	function getSystempromptsPromptResources(promptId, pageNumber, pageSize, sortBy, sortOrder){
		var apipath = '/api/v1/architect/systemprompts/{promptId}/resources';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSystempromptsPromptResources = getSystempromptsPromptResources;
	/**
     * @summary Create system prompt resource override.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "promptId": "",
   "language": "",
   "durationSeconds": {},
   "mediaUri": "",
   "ttsString": "",
   "uploadUri": "",
   "uploadStatus": "",
   "hasDefault": true,
   "selfUri": ""
}
	*/
	function createSystempromptsPromptResources(promptId, body){
		var apipath = '/api/v1/architect/systemprompts/{promptId}/resources';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createSystempromptsPromptResources = createSystempromptsPromptResources;
	/**
     * @summary Get a system prompt resource.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {string} language - Language
	*/
	function getSystempromptsPromptResourcesByLanguage(promptId, language){
		var apipath = '/api/v1/architect/systemprompts/{promptId}/resources/{language}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }

        apipath = apipath.replace('{language}', language);

        if(language === undefined && language !== null){
			throw 'Missing required  parameter: language';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSystempromptsPromptResourcesByLanguage = getSystempromptsPromptResourcesByLanguage;
	/**
     * @summary Delete a system prompt resource override.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {string} language - Language
	*/
	function deleteSystempromptsPromptResourcesByLanguage(promptId, language){
		var apipath = '/api/v1/architect/systemprompts/{promptId}/resources/{language}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{promptId}', promptId);

        if(promptId === undefined && promptId !== null){
			throw 'Missing required  parameter: promptId';
        }

        apipath = apipath.replace('{language}', language);

        if(language === undefined && language !== null){
			throw 'Missing required  parameter: language';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteSystempromptsPromptResourcesByLanguage = deleteSystempromptsPromptResourcesByLanguage;
	/**
     * @summary Get IVR voice XML operations.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} name - Name
	* @param {string} description - Description
	* @param {string} nameOrDescription - Name or description
	* @param {string} method - Method
	* @param {string} type - Type
	*/
	function getVoicexmloperations(pageNumber, pageSize, name, description, nameOrDescription, method, type){
		var apipath = '/api/v1/architect/voicexmloperations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(description !== undefined && description !== null){
			queryParameters.description = description;
		}


		if(nameOrDescription !== undefined && nameOrDescription !== null){
			queryParameters.nameOrDescription = nameOrDescription;
		}


		if(method !== undefined && method !== null){
			queryParameters.method = method;
		}


		if(type !== undefined && type !== null){
			queryParameters.type = type;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getVoicexmloperations = getVoicexmloperations;
	/**
     * @summary Create IVR voice XML operations.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "type": "",
   "method": "",
   "encoding": "",
   "description": "",
   "uri": "",
   "inputs": "",
   "outputs": "",
   "fetchAudio": "",
   "timeoutMS": 0,
   "selfUri": ""
}
	*/
	function createVoicexmloperations(body){
		var apipath = '/api/v1/architect/voicexmloperations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createVoicexmloperations = createVoicexmloperations;
	/**
     * @summary Get IVR voice XML operation.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} voiceXmlOperationId - Voice XML operation ID
	*/
	function getVoiceXmlOperation(voiceXmlOperationId){
		var apipath = '/api/v1/architect/voicexmloperations/{voiceXmlOperationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{voiceXmlOperationId}', voiceXmlOperationId);

        if(voiceXmlOperationId === undefined && voiceXmlOperationId !== null){
			throw 'Missing required  parameter: voiceXmlOperationId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getVoiceXmlOperation = getVoiceXmlOperation;
	/**
     * @summary Update IVR voice XML operation.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} voiceXmlOperationId - Voice XML operation ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "type": "",
   "method": "",
   "encoding": "",
   "description": "",
   "uri": "",
   "inputs": "",
   "outputs": "",
   "fetchAudio": "",
   "timeoutMS": 0,
   "selfUri": ""
}
	*/
	function updateVoiceXmlOperation(voiceXmlOperationId, body){
		var apipath = '/api/v1/architect/voicexmloperations/{voiceXmlOperationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{voiceXmlOperationId}', voiceXmlOperationId);

        if(voiceXmlOperationId === undefined && voiceXmlOperationId !== null){
			throw 'Missing required  parameter: voiceXmlOperationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateVoiceXmlOperation = updateVoiceXmlOperation;
	/**
     * @summary Delete IVR voice XML operation.
	 * @description 
	 * @memberOf ArchitectApi#
	* @param {string} voiceXmlOperationId - Voice XML operation ID
	*/
	function deleteVoiceXmlOperation(voiceXmlOperationId){
		var apipath = '/api/v1/architect/voicexmloperations/{voiceXmlOperationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{voiceXmlOperationId}', voiceXmlOperationId);

        if(voiceXmlOperationId === undefined && voiceXmlOperationId !== null){
			throw 'Missing required  parameter: voiceXmlOperationId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteVoiceXmlOperation = deleteVoiceXmlOperation;

    return self;
};

/**
* @class
* @example
* var api = new AuthorizationApi(pureCloudSession);
*/
var AuthorizationApi = function (pureCloudSession) {
	/**
     * @summary Retrieve a list of all licenses defined in the system
	 * @description 
	 * @memberOf AuthorizationApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getLicenses(pageSize, pageNumber){
		var apipath = '/api/v1/authorization/licenses';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getLicenses = getLicenses;
	/**
     * @summary Get all permissions.
	 * @description Retrieve a list of all permission defined in the system.
	 * @memberOf AuthorizationApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getPermissions(pageSize, pageNumber){
		var apipath = '/api/v1/authorization/permissions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPermissions = getPermissions;
	/**
     * @summary Retrieve a list of all roles defined for the organization
	 * @description 
	 * @memberOf AuthorizationApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	* @param {array} permission - 
	* @param {boolean} userCount - 
	*/
	function getRoles(pageSize, pageNumber, sortBy, expand, permission, userCount){
		var apipath = '/api/v1/authorization/roles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(permission !== undefined && permission !== null){
			queryParameters.permission = permission;
		}


		if(userCount !== undefined && userCount !== null){
			queryParameters.userCount = userCount;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRoles = getRoles;
	/**
     * @summary Create an organization role.
	 * @description 
	 * @memberOf AuthorizationApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "description": "",
   "defaultRoleId": "",
   "permissions": [],
   "licenses": [],
   "permissionPolicies": [],
   "code": "",
   "userCount": 0,
   "roleNeedsUpdate": true,
   "default": true,
   "selfUri": ""
}
	*/
	function createRoles(body){
		var apipath = '/api/v1/authorization/roles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createRoles = createRoles;
	/**
     * @summary Restores all default roles
	 * @description This endpoint serves several purposes. 1. It provides the org with default roles. This is important for default roles that will be added after go-live (they can retroactively add the new default-role). Note: When not using a query param of force=true, it only adds the default roles not configured for the org; it does not overwrite roles. 2. Using the query param force=true, you can restore all default roles. Note: This does not have an effect on custom roles.
	 * @memberOf AuthorizationApi#
	* @param {boolean} force - Restore default roles
	*/
	function createRolesDefault(force){
		var apipath = '/api/v1/authorization/roles/default';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(force !== undefined && force !== null){
			queryParameters.force = force;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createRolesDefault = createRolesDefault;
	/**
     * @summary Restore specified default roles
	 * @description 
	 * @memberOf AuthorizationApi#
	* @param {} body - 
	*/
	function updateRolesDefault(body){
		var apipath = '/api/v1/authorization/roles/default';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateRolesDefault = updateRolesDefault;
	/**
     * @summary Get an org role to default role comparison comparison
	 * @description Compares any organization role to a default role id and show differences
	 * @memberOf AuthorizationApi#
	* @param {string} leftRoleId - Left Role ID
	* @param {string} rightRoleId - Right Role id
	*/
	function getRolesLeftRoleComparedefaultByRightRoleId(leftRoleId, rightRoleId){
		var apipath = '/api/v1/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{leftRoleId}', leftRoleId);

        if(leftRoleId === undefined && leftRoleId !== null){
			throw 'Missing required  parameter: leftRoleId';
        }

        apipath = apipath.replace('{rightRoleId}', rightRoleId);

        if(rightRoleId === undefined && rightRoleId !== null){
			throw 'Missing required  parameter: rightRoleId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRolesLeftRoleComparedefaultByRightRoleId = getRolesLeftRoleComparedefaultByRightRoleId;
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
   "id": "",
   "name": "",
   "description": "",
   "defaultRoleId": "",
   "permissions": [],
   "licenses": [],
   "permissionPolicies": [],
   "code": "",
   "userCount": 0,
   "roleNeedsUpdate": true,
   "default": true,
   "selfUri": ""
}
	*/
	function createRolesLeftRoleComparedefaultByRightRoleId(leftRoleId, rightRoleId, body){
		var apipath = '/api/v1/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{leftRoleId}', leftRoleId);

        if(leftRoleId === undefined && leftRoleId !== null){
			throw 'Missing required  parameter: leftRoleId';
        }

        apipath = apipath.replace('{rightRoleId}', rightRoleId);

        if(rightRoleId === undefined && rightRoleId !== null){
			throw 'Missing required  parameter: rightRoleId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createRolesLeftRoleComparedefaultByRightRoleId = createRolesLeftRoleComparedefaultByRightRoleId;
	/**
     * @summary Get a single organization role.
	 * @description Get the organization role specified by its ID.
	 * @memberOf AuthorizationApi#
	* @param {string} roleId - Role ID
	*/
	function getRole(roleId){
		var apipath = '/api/v1/authorization/roles/{roleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{roleId}', roleId);

        if(roleId === undefined && roleId !== null){
			throw 'Missing required  parameter: roleId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRole = getRole;
	/**
     * @summary Update an organization role.
	 * @description Update
	 * @memberOf AuthorizationApi#
	* @param {string} roleId - Role ID
	* @param {} body - Update
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "description": "",
   "defaultRoleId": "",
   "permissions": [],
   "licenses": [],
   "permissionPolicies": [],
   "code": "",
   "userCount": 0,
   "roleNeedsUpdate": true,
   "default": true,
   "selfUri": ""
}
	*/
	function updateRole(roleId, body){
		var apipath = '/api/v1/authorization/roles/{roleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{roleId}', roleId);

        if(roleId === undefined && roleId !== null){
			throw 'Missing required  parameter: roleId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateRole = updateRole;
	/**
     * @summary Delete an organization role.
	 * @description 
	 * @memberOf AuthorizationApi#
	* @param {string} roleId - Role ID
	*/
	function deleteRole(roleId){
		var apipath = '/api/v1/authorization/roles/{roleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{roleId}', roleId);

        if(roleId === undefined && roleId !== null){
			throw 'Missing required  parameter: roleId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteRole = deleteRole;
	/**
     * @summary Patch Organization Role for needsUpdate Field
	 * @description Patch Organization Role for needsUpdate Field
	 * @memberOf AuthorizationApi#
	* @param {string} roleId - Role ID
	* @param {} body - Patch Organization Role for needsUpdate Field
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "description": "",
   "defaultRoleId": "",
   "permissions": [],
   "licenses": [],
   "permissionPolicies": [],
   "code": "",
   "userCount": 0,
   "roleNeedsUpdate": true,
   "default": true,
   "selfUri": ""
}
	*/
	function patchRole(roleId, body){
		var apipath = '/api/v1/authorization/roles/{roleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{roleId}', roleId);

        if(roleId === undefined && roleId !== null){
			throw 'Missing required  parameter: roleId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchRole = patchRole;
	/**
     * @summary Sets the users for the role
	 * @description 
	 * @memberOf AuthorizationApi#
	* @param {string} roleId - Role ID
	* @param {} body - 
	*/
	function updateRoleUsersAdd(roleId, body){
		var apipath = '/api/v1/authorization/roles/{roleId}/users/add';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{roleId}', roleId);

        if(roleId === undefined && roleId !== null){
			throw 'Missing required  parameter: roleId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateRoleUsersAdd = updateRoleUsersAdd;
	/**
     * @summary Removes the users from the role
	 * @description 
	 * @memberOf AuthorizationApi#
	* @param {string} roleId - Role ID
	* @param {} body - 
	*/
	function updateRoleUsersRemove(roleId, body){
		var apipath = '/api/v1/authorization/roles/{roleId}/users/remove';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{roleId}', roleId);

        if(roleId === undefined && roleId !== null){
			throw 'Missing required  parameter: roleId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateRoleUsersRemove = updateRoleUsersRemove;
	/**
     * @summary Get the list of roles for a user.
	 * @description 
	 * @memberOf AuthorizationApi#
	* @param {string} userId - User ID
	*/
	function getUserRoles(userId){
		var apipath = '/api/v1/authorization/users/{userId}/roles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserRoles = getUserRoles;
	/**
     * @summary Sets the user's roles
	 * @description 
	 * @memberOf AuthorizationApi#
	* @param {string} userId - User ID
	* @param {} body - 
	*/
	function updateUserRoles(userId, body){
		var apipath = '/api/v1/authorization/users/{userId}/roles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateUserRoles = updateUserRoles;
	/**
     * @summary Removes all the roles from the user.
	 * @description 
	 * @memberOf AuthorizationApi#
	* @param {string} userId - User ID
	*/
	function deleteUserRoles(userId){
		var apipath = '/api/v1/authorization/users/{userId}/roles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteUserRoles = deleteUserRoles;

    return self;
};

/**
* @class
* @example
* var api = new BillingApi(pureCloudSession);
*/
var BillingApi = function (pureCloudSession) {
	/**
     * @summary Get constumer account.
	 * @description 
	 * @memberOf BillingApi#
	*/
	function getAccount(){
		var apipath = '/api/v1/billing/account';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getAccount = getAccount;
	/**
     * @summary Update customer account.
	 * @description 
	 * @memberOf BillingApi#
	* @param {} body - The account to be updated
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "isFrozen": true,
   "orgLegalName": "",
   "orgPhone": "",
   "isTaxExempt": true,
   "billingAddress": {
      "id": "",
      "name": "",
      "street": "",
      "city": "",
      "countryName": "",
      "stateName": "",
      "postalCode": "",
      "selfUri": ""
   },
   "currency": "",
   "selfUri": ""
}
	*/
	function updateAccount(body){
		var apipath = '/api/v1/billing/account';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateAccount = updateAccount;
	/**
     * @summary Create billing account.
	 * @description 
	 * @memberOf BillingApi#
	* @param {} body - The account to be created
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "orgLegalName": "",
   "billingAddressLine1": "",
   "billingAddressLine2": "",
   "billingAddressCity": "",
   "billingAddressState": "",
   "billingAddressZipCode": "",
   "billingAddressCountry": "",
   "legalAddressLine1": "",
   "legalAddressLine2": "",
   "legalAddressCity": "",
   "legalAddressState": "",
   "legalAddressZipCode": "",
   "legalAddressCountry": "",
   "billingContactFirstName": "",
   "billingContactLastName": "",
   "billingContactEmail": "",
   "billingContactPhone": "",
   "purchaseOrderNumber": "",
   "isTaxExempt": true,
   "currency": "",
   "paymentTerm": "",
   "contractTerm": 0,
   "autoRenew": true,
   "enabled": true,
   "minCommitQuantities": {},
   "estimatedQuantities": {},
   "oneTimeCharges": [],
   "selfUri": ""
}
	*/
	function createAccounts(body){
		var apipath = '/api/v1/billing/accounts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createAccounts = createAccounts;
	/**
     * @summary Get billing account.
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} accountId - Identifies the account to be retrieved
	* @param {string} fields - Fields needed
	*/
	function getBillingAccount(accountId, fields){
		var apipath = '/api/v1/billing/accounts/{accountId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{accountId}', accountId);

        if(accountId === undefined && accountId !== null){
			throw 'Missing required  parameter: accountId';
        }


		if(fields !== undefined && fields !== null){
			queryParameters.fields = fields;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getBillingAccount = getBillingAccount;
	/**
     * @summary Updates the billing account.
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} accountId - Identifies the account to be updated
	* @param {} body - The account to be updated
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "orgLegalName": "",
   "billingAddressLine1": "",
   "billingAddressLine2": "",
   "billingAddressCity": "",
   "billingAddressState": "",
   "billingAddressZipCode": "",
   "billingAddressCountry": "",
   "legalAddressLine1": "",
   "legalAddressLine2": "",
   "legalAddressCity": "",
   "legalAddressState": "",
   "legalAddressZipCode": "",
   "legalAddressCountry": "",
   "billingContactFirstName": "",
   "billingContactLastName": "",
   "billingContactEmail": "",
   "billingContactPhone": "",
   "purchaseOrderNumber": "",
   "isTaxExempt": true,
   "currency": "",
   "paymentTerm": "",
   "contractTerm": 0,
   "autoRenew": true,
   "enabled": true,
   "minCommitQuantities": {},
   "estimatedQuantities": {},
   "oneTimeCharges": [],
   "selfUri": ""
}
	*/
	function updateBillingAccount(accountId, body){
		var apipath = '/api/v1/billing/accounts/{accountId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{accountId}', accountId);

        if(accountId === undefined && accountId !== null){
			throw 'Missing required  parameter: accountId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateBillingAccount = updateBillingAccount;
	/**
     * @summary Terminates the billing account of the org.
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} accountId - Identifies the account to be terminated
	*/
	function deleteAccount(accountId){
		var apipath = '/api/v1/billing/accounts/{accountId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{accountId}', accountId);

        if(accountId === undefined && accountId !== null){
			throw 'Missing required  parameter: accountId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteAccount = deleteAccount;
	/**
     * @summary Get billing account overview.
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} accountId - Identifies the account whose status should be retrieved
	*/
	function getAccountOverview(accountId){
		var apipath = '/api/v1/billing/accounts/{accountId}/overview';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{accountId}', accountId);

        if(accountId === undefined && accountId !== null){
			throw 'Missing required  parameter: accountId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getAccountOverview = getAccountOverview;
	/**
     * @summary Get billing account status.
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} accountId - Identifies the account whose status should be retrieved
	*/
	function getAccountStatus(accountId){
		var apipath = '/api/v1/billing/accounts/{accountId}/status';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{accountId}', accountId);

        if(accountId === undefined && accountId !== null){
			throw 'Missing required  parameter: accountId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getAccountStatus = getAccountStatus;
	/**
     * @summary Updates the billing account status.
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} accountId - Identifies the account whose status should be updated
	* @param {} body - The account status to be updated
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "orgName": "",
   "configured": true,
   "adminUIURL": "",
   "thirdPartyAccountId": "",
   "thirdPartySubscriptionId": "",
   "thirdPartySubscriptionNonAcbId": "",
   "selfUri": ""
}
	*/
	function updateAccountStatus(accountId, body){
		var apipath = '/api/v1/billing/accounts/{accountId}/status';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{accountId}', accountId);

        if(accountId === undefined && accountId !== null){
			throw 'Missing required  parameter: accountId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateAccountStatus = updateAccountStatus;
	/**
     * @summary Get available additional services.
	 * @description 
	 * @memberOf BillingApi#
	*/
	function getAdditionalservices(){
		var apipath = '/api/v1/billing/additionalservices';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getAdditionalservices = getAdditionalservices;
	/**
     * @summary Get billing addresses.
	 * @description 
	 * @memberOf BillingApi#
	*/
	function getAddresses(){
		var apipath = '/api/v1/billing/addresses';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getAddresses = getAddresses;
	/**
     * @summary Create billing address.
	 * @description 
	 * @memberOf BillingApi#
	* @param {} body - The address to be created
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "street": "",
   "city": "",
   "countryName": "",
   "stateName": "",
   "postalCode": "",
   "selfUri": ""
}
	*/
	function createAddresses(body){
		var apipath = '/api/v1/billing/addresses';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createAddresses = createAddresses;
	/**
     * @summary Get a billing address
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} addressId - The ID of the address
	*/
	function getAddressesAddress(addressId){
		var apipath = '/api/v1/billing/addresses/{addressId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{addressId}', addressId);

        if(addressId === undefined && addressId !== null){
			throw 'Missing required  parameter: addressId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getAddressesAddress = getAddressesAddress;
	/**
     * @summary Update billing address
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} addressId - The ID of the address
	* @param {} body - The address to be updated
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "street": "",
   "city": "",
   "countryName": "",
   "stateName": "",
   "postalCode": "",
   "selfUri": ""
}
	*/
	function updateAddressesAddress(addressId, body){
		var apipath = '/api/v1/billing/addresses/{addressId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{addressId}', addressId);

        if(addressId === undefined && addressId !== null){
			throw 'Missing required  parameter: addressId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateAddressesAddress = updateAddressesAddress;
	/**
     * @summary Delete billing address
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} addressId - The ID of the address
	*/
	function deleteAddressesAddress(addressId){
		var apipath = '/api/v1/billing/addresses/{addressId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{addressId}', addressId);

        if(addressId === undefined && addressId !== null){
			throw 'Missing required  parameter: addressId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteAddressesAddress = deleteAddressesAddress;
	/**
     * @summary Get basic products.
	 * @description 
	 * @memberOf BillingApi#
	*/
	function getBasicproducts(){
		var apipath = '/api/v1/billing/basicproducts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getBasicproducts = getBasicproducts;
	/**
     * @summary Get carrier services usage data.
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} from - startDateTime
	* @param {string} to - endDateTime
	* @param {integer} limit - Limit the number of results
	*/
	function getCarrierservicesUsageCalls(from, to, limit){
		var apipath = '/api/v1/billing/carrierservices/usage/calls';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(from !== undefined && from !== null){
			queryParameters.from = from;
		}


		if(to !== undefined && to !== null){
			queryParameters.to = to;
		}


		if(limit !== undefined && limit !== null){
			queryParameters.limit = limit;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCarrierservicesUsageCalls = getCarrierservicesUsageCalls;
	/**
     * @summary Get carrier services usage data CSV.
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} from - startDateTime
	* @param {string} to - endDateTime
	* @param {integer} limit - Limit the number of results
	*/
	function getCarrierservicesUsageCallsCsv(from, to, limit){
		var apipath = '/api/v1/billing/carrierservices/usage/calls/csv';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(from !== undefined && from !== null){
			queryParameters.from = from;
		}


		if(to !== undefined && to !== null){
			queryParameters.to = to;
		}


		if(limit !== undefined && limit !== null){
			queryParameters.limit = limit;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCarrierservicesUsageCallsCsv = getCarrierservicesUsageCallsCsv;
	/**
     * @summary Contact Sales.
	 * @description 
	 * @memberOf BillingApi#
	* @param {} body - The contact sales details
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "email": "",
   "firstName": "",
   "lastName": "",
   "contactPhone": "",
   "country": "",
   "title": "",
   "message": "",
   "language": "",
   "productName": "",
   "industry": "",
   "estimatedUsers": "",
   "selfUri": ""
}
	*/
	function createContactsales(body){
		var apipath = '/api/v1/billing/contactsales';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createContactsales = createContactsales;
	/**
     * @summary Create contract and signer view URL.
	 * @description 
	 * @memberOf BillingApi#
	* @param {} body - The contract to be created
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "quote": {
      "id": "",
      "name": "",
      "purchaseOrder": "",
      "status": "",
      "isSubmitted": true,
      "isPending": true,
      "isFrozen": true,
      "currency": "",
      "createdDate": "",
      "lastUpdatedDate": "",
      "billingContactEmail": "",
      "billingContactFirstName": "",
      "billingContactLastName": "",
      "billingContactPhone": "",
      "includeVoiceCharges": true,
      "charges": [],
      "edgeControlModel": "",
      "referralCodes": [],
      "discountCodes": [],
      "salesPartnerCode": "",
      "selfUri": ""
   },
   "signerUrl": "",
   "job": {
      "id": "",
      "name": "",
      "contract": {},
      "status": "",
      "selfUri": ""
   },
   "selfUri": ""
}
	*/
	function createContracts(body){
		var apipath = '/api/v1/billing/contracts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createContracts = createContracts;
	/**
     * @summary Gets a job that was started to generate a contract for a quote
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} jobId - The ID of the job
	*/
	function getContractsJob(jobId){
		var apipath = '/api/v1/billing/contracts/jobs/{jobId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{jobId}', jobId);

        if(jobId === undefined && jobId !== null){
			throw 'Missing required  parameter: jobId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContractsJob = getContractsJob;
	/**
     * @summary Get a contract that was generated for a quote
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} contractId - The ID of the contract
	*/
	function getContract(contractId){
		var apipath = '/api/v1/billing/contracts/{contractId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contractId}', contractId);

        if(contractId === undefined && contractId !== null){
			throw 'Missing required  parameter: contractId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContract = getContract;
	/**
     * @summary Get available currencies.
	 * @description 
	 * @memberOf BillingApi#
	*/
	function getCurrencies(){
		var apipath = '/api/v1/billing/currencies';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCurrencies = getCurrencies;
	/**
     * @summary Get rates for available hardware.
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} productSubCategory - Filter rates by product subcategory. Examples are 'Phones' or 'PowerCords'.
	*/
	function getHardwarerates(productSubCategory){
		var apipath = '/api/v1/billing/hardwarerates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(productSubCategory !== undefined && productSubCategory !== null){
			queryParameters.productSubCategory = productSubCategory;
		}

        if(productSubCategory === undefined && productSubCategory !== null){
			throw 'Missing required  parameter: productSubCategory';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getHardwarerates = getHardwarerates;
	/**
     * @summary Get historical extended billing voice rates
	 * @description Retrieve a list of historical extended billing voice rates stored in the system.
	 * @memberOf BillingApi#
	* @param {string} currency - Filter voice rates by currency.
	* @param {string} effectiveDateStart - Filter voice rates by effective start date.
	* @param {string} effectiveDateEnd - Filter voice rates by effective end date.
	* @param {string} groupName - Filter voice rates by group.
	* @param {string} areaCode - Filter voice rates by areaCode.
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getHistoricalvoiceratesExtended(currency, effectiveDateStart, effectiveDateEnd, groupName, areaCode, pageSize, pageNumber){
		var apipath = '/api/v1/billing/historicalvoicerates/extended';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(currency !== undefined && currency !== null){
			queryParameters.currency = currency;
		}

        if(currency === undefined && currency !== null){
			throw 'Missing required  parameter: currency';
        }


		if(effectiveDateStart !== undefined && effectiveDateStart !== null){
			queryParameters.effectiveDateStart = effectiveDateStart;
		}


		if(effectiveDateEnd !== undefined && effectiveDateEnd !== null){
			queryParameters.effectiveDateEnd = effectiveDateEnd;
		}


		if(groupName !== undefined && groupName !== null){
			queryParameters.groupName = groupName;
		}


		if(areaCode !== undefined && areaCode !== null){
			queryParameters.areaCode = areaCode;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getHistoricalvoiceratesExtended = getHistoricalvoiceratesExtended;
	/**
     * @summary Get historical inbound billing voice rates
	 * @description Retrieve a list of historical inbound billing voice rates stored in the system.
	 * @memberOf BillingApi#
	* @param {string} currency - Filter voice rates by currency.
	* @param {string} effectiveDateStart - Filter voice rates by effective start date.
	* @param {string} effectiveDateEnd - Filter voice rates by effective end date.
	* @param {string} type - Filter voice rates by 'inboundTolled', 'inboundTollFree', 'outboundInterState', 'outboundIntraState', or 'outboundLocal'.
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getHistoricalvoiceratesInbound(currency, effectiveDateStart, effectiveDateEnd, type, pageSize, pageNumber){
		var apipath = '/api/v1/billing/historicalvoicerates/inbound';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(currency !== undefined && currency !== null){
			queryParameters.currency = currency;
		}

        if(currency === undefined && currency !== null){
			throw 'Missing required  parameter: currency';
        }


		if(effectiveDateStart !== undefined && effectiveDateStart !== null){
			queryParameters.effectiveDateStart = effectiveDateStart;
		}


		if(effectiveDateEnd !== undefined && effectiveDateEnd !== null){
			queryParameters.effectiveDateEnd = effectiveDateEnd;
		}


		if(type !== undefined && type !== null){
			queryParameters.type = type;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getHistoricalvoiceratesInbound = getHistoricalvoiceratesInbound;
	/**
     * @summary Get historical outbound domestic billing voice rates
	 * @description Retrieve a list of historical outbound domestic billing voice rates stored in the system.
	 * @memberOf BillingApi#
	* @param {string} currency - Filter voice rates by currency.
	* @param {string} effectiveDateStart - Filter voice rates by effective start date.
	* @param {string} effectiveDateEnd - Filter voice rates by effective end date.
	* @param {string} type - Filter voice rates by 'inboundTolled', 'inboundTollFree', 'outboundInterState', 'outboundIntraState', or 'outboundLocal'.
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getHistoricalvoiceratesOutboundDomestic(currency, effectiveDateStart, effectiveDateEnd, type, pageSize, pageNumber){
		var apipath = '/api/v1/billing/historicalvoicerates/outbound/domestic';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(currency !== undefined && currency !== null){
			queryParameters.currency = currency;
		}

        if(currency === undefined && currency !== null){
			throw 'Missing required  parameter: currency';
        }


		if(effectiveDateStart !== undefined && effectiveDateStart !== null){
			queryParameters.effectiveDateStart = effectiveDateStart;
		}


		if(effectiveDateEnd !== undefined && effectiveDateEnd !== null){
			queryParameters.effectiveDateEnd = effectiveDateEnd;
		}


		if(type !== undefined && type !== null){
			queryParameters.type = type;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getHistoricalvoiceratesOutboundDomestic = getHistoricalvoiceratesOutboundDomestic;
	/**
     * @summary Get historical outbound international billing voice rates
	 * @description Retrieve a list of historical outbound international billing voice rates stored in the system.
	 * @memberOf BillingApi#
	* @param {string} currency - Filter voice rates by currency.
	* @param {string} effectiveDateStart - Filter voice rates by effective start date.
	* @param {string} effectiveDateEnd - Filter voice rates by effective end date.
	* @param {string} origin - Filter voice rates by origin.
	* @param {string} destination - Filter voice rates by destination.
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getHistoricalvoiceratesOutboundInternational(currency, effectiveDateStart, effectiveDateEnd, origin, destination, pageSize, pageNumber){
		var apipath = '/api/v1/billing/historicalvoicerates/outbound/international';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(currency !== undefined && currency !== null){
			queryParameters.currency = currency;
		}

        if(currency === undefined && currency !== null){
			throw 'Missing required  parameter: currency';
        }


		if(effectiveDateStart !== undefined && effectiveDateStart !== null){
			queryParameters.effectiveDateStart = effectiveDateStart;
		}


		if(effectiveDateEnd !== undefined && effectiveDateEnd !== null){
			queryParameters.effectiveDateEnd = effectiveDateEnd;
		}


		if(origin !== undefined && origin !== null){
			queryParameters.origin = origin;
		}


		if(destination !== undefined && destination !== null){
			queryParameters.destination = destination;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getHistoricalvoiceratesOutboundInternational = getHistoricalvoiceratesOutboundInternational;
	/**
     * @summary Get invoices
	 * @description Retrieve a list of invoices stored in the system.
	 * @memberOf BillingApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getInvoices(pageSize, pageNumber){
		var apipath = '/api/v1/billing/invoices';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getInvoices = getInvoices;
	/**
     * @summary Get invoice.
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} invoiceId - Identifies the invoice to be retrieved
	*/
	function getInvoice(invoiceId){
		var apipath = '/api/v1/billing/invoices/{invoiceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{invoiceId}', invoiceId);

        if(invoiceId === undefined && invoiceId !== null){
			throw 'Missing required  parameter: invoiceId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getInvoice = getInvoice;
	/**
     * @summary Get invoice PDF.
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} invoiceId - Identifies the invoice PDF to be retrieved
	*/
	function getInvoicePdf(invoiceId){
		var apipath = '/api/v1/billing/invoices/{invoiceId}/pdf';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{invoiceId}', invoiceId);

        if(invoiceId === undefined && invoiceId !== null){
			throw 'Missing required  parameter: invoiceId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getInvoicePdf = getInvoicePdf;
	/**
     * @summary Create billing order.
	 * @description 
	 * @memberOf BillingApi#
	* @param {} body - The order to be created
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "quote": {
      "id": "",
      "name": "",
      "purchaseOrder": "",
      "status": "",
      "isSubmitted": true,
      "isPending": true,
      "isFrozen": true,
      "currency": "",
      "createdDate": "",
      "lastUpdatedDate": "",
      "billingContactEmail": "",
      "billingContactFirstName": "",
      "billingContactLastName": "",
      "billingContactPhone": "",
      "includeVoiceCharges": true,
      "charges": [],
      "edgeControlModel": "",
      "referralCodes": [],
      "discountCodes": [],
      "salesPartnerCode": "",
      "selfUri": ""
   },
   "envelopeId": "",
   "selfUri": ""
}
	*/
	function createOrders(body){
		var apipath = '/api/v1/billing/orders';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createOrders = createOrders;
	/**
     * @summary Get billing periods
	 * @description Retrieve a list of billing periods stored in the system.
	 * @memberOf BillingApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getPeriods(pageSize, pageNumber){
		var apipath = '/api/v1/billing/periods';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPeriods = getPeriods;
	/**
     * @summary Get products.
	 * @description 
	 * @memberOf BillingApi#
	*/
	function getProducts(){
		var apipath = '/api/v1/billing/products';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProducts = getProducts;
	/**
     * @summary Update products.
	 * @description 
	 * @memberOf BillingApi#
	* @param {} body - The products to activate
	*/
	function updateProducts(body){
		var apipath = '/api/v1/billing/products';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateProducts = updateProducts;
	/**
     * @summary Get billing quotes.
	 * @description 
	 * @memberOf BillingApi#
	*/
	function getQuotes(){
		var apipath = '/api/v1/billing/quotes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQuotes = getQuotes;
	/**
     * @summary Create billing quote.
	 * @description 
	 * @memberOf BillingApi#
	* @param {} body - The quote to be created
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "purchaseOrder": "",
   "status": "",
   "isSubmitted": true,
   "isPending": true,
   "isFrozen": true,
   "currency": "",
   "createdDate": "",
   "lastUpdatedDate": "",
   "billingContactEmail": "",
   "billingContactFirstName": "",
   "billingContactLastName": "",
   "billingContactPhone": "",
   "includeVoiceCharges": true,
   "charges": [],
   "edgeControlModel": "",
   "referralCodes": [],
   "discountCodes": [],
   "salesPartnerCode": "",
   "selfUri": ""
}
	*/
	function createQuotes(body){
		var apipath = '/api/v1/billing/quotes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createQuotes = createQuotes;
	/**
     * @summary Get a billing quote
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} quoteId - The ID of the quote
	*/
	function getQuote(quoteId){
		var apipath = '/api/v1/billing/quotes/{quoteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{quoteId}', quoteId);

        if(quoteId === undefined && quoteId !== null){
			throw 'Missing required  parameter: quoteId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQuote = getQuote;
	/**
     * @summary Update billing quote
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} quoteId - The ID of the quote
	* @param {} body - The quote to be updated
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "purchaseOrder": "",
   "status": "",
   "isSubmitted": true,
   "isPending": true,
   "isFrozen": true,
   "currency": "",
   "createdDate": "",
   "lastUpdatedDate": "",
   "billingContactEmail": "",
   "billingContactFirstName": "",
   "billingContactLastName": "",
   "billingContactPhone": "",
   "includeVoiceCharges": true,
   "charges": [],
   "edgeControlModel": "",
   "referralCodes": [],
   "discountCodes": [],
   "salesPartnerCode": "",
   "selfUri": ""
}
	*/
	function updateQuote(quoteId, body){
		var apipath = '/api/v1/billing/quotes/{quoteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{quoteId}', quoteId);

        if(quoteId === undefined && quoteId !== null){
			throw 'Missing required  parameter: quoteId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateQuote = updateQuote;
	/**
     * @summary Delete billing quote
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} quoteId - The ID of the quote
	*/
	function deleteQuote(quoteId){
		var apipath = '/api/v1/billing/quotes/{quoteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{quoteId}', quoteId);

        if(quoteId === undefined && quoteId !== null){
			throw 'Missing required  parameter: quoteId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteQuote = deleteQuote;
	/**
     * @summary Get billing rates
	 * @description Retrieve a list of billing rates stored in the system.
	 * @memberOf BillingApi#
	* @param {string} chargeType - Filter rates by charge type. Examples are Usage, Recurring, or OneTime.
	*/
	function getRates(chargeType){
		var apipath = '/api/v1/billing/rates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(chargeType !== undefined && chargeType !== null){
			queryParameters.chargeType = chargeType;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRates = getRates;
	/**
     * @summary Get rate.
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} rateId - Identifies the rate to be retrieved
	*/
	function getRate(rateId){
		var apipath = '/api/v1/billing/rates/{rateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{rateId}', rateId);

        if(rateId === undefined && rateId !== null){
			throw 'Missing required  parameter: rateId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRate = getRate;
	/**
     * @summary Get billable usage data report CSV.
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} reportId - Identifies the report CSV to be retrieved
	*/
	function getReportsBillableusagedataReportCsv(reportId){
		var apipath = '/api/v1/billing/reports/billableusagedata/{reportId}/csv';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{reportId}', reportId);

        if(reportId === undefined && reportId !== null){
			throw 'Missing required  parameter: reportId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getReportsBillableusagedataReportCsv = getReportsBillableusagedataReportCsv;
	/**
     * @summary Creates a billing snapshot
	 * @description Creates a billing snapshot which is used to determine usage counts for a billing period.
	 * @memberOf BillingApi#
	*/
	function createSnapshots(){
		var apipath = '/api/v1/billing/snapshots';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createSnapshots = createSnapshots;
	/**
     * @summary Get third party accounts
	 * @description Retrieve a list of third party accounts stored in the back-end system.
	 * @memberOf BillingApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} search - Search for accounts with this text
	*/
	function getThirdpartyaccounts(pageSize, pageNumber, search){
		var apipath = '/api/v1/billing/thirdpartyaccounts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(search !== undefined && search !== null){
			queryParameters.search = search;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getThirdpartyaccounts = getThirdpartyaccounts;
	/**
     * @summary Get third party billing account.
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} accountId - Identifies the third party account to be retrieved
	*/
	function getThirdpartyaccountsAccount(accountId){
		var apipath = '/api/v1/billing/thirdpartyaccounts/{accountId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{accountId}', accountId);

        if(accountId === undefined && accountId !== null){
			throw 'Missing required  parameter: accountId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getThirdpartyaccountsAccount = getThirdpartyaccountsAccount;
	/**
     * @summary Get third party subscriptions
	 * @description Retrieve a list of third party subscriptions stored in the back-end system.
	 * @memberOf BillingApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} accountId - Identifies the third party account to be retrieved
	*/
	function getThirdpartyaccountsAccountSubscriptions(pageSize, pageNumber, accountId){
		var apipath = '/api/v1/billing/thirdpartyaccounts/{accountId}/subscriptions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}

        apipath = apipath.replace('{accountId}', accountId);

        if(accountId === undefined && accountId !== null){
			throw 'Missing required  parameter: accountId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getThirdpartyaccountsAccountSubscriptions = getThirdpartyaccountsAccountSubscriptions;
	/**
     * @summary Get third party billing subscription.
	 * @description 
	 * @memberOf BillingApi#
	* @param {string} accountId - Identifies the third party account to be retrieved
	* @param {string} subscriptionId - Identifies the third party subscription to be retrieved
	*/
	function getThirdpartyaccountsAccountSubscriptionsBySubscriptionId(accountId, subscriptionId){
		var apipath = '/api/v1/billing/thirdpartyaccounts/{accountId}/subscriptions/{subscriptionId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{accountId}', accountId);

        if(accountId === undefined && accountId !== null){
			throw 'Missing required  parameter: accountId';
        }

        apipath = apipath.replace('{subscriptionId}', subscriptionId);

        if(subscriptionId === undefined && subscriptionId !== null){
			throw 'Missing required  parameter: subscriptionId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getThirdpartyaccountsAccountSubscriptionsBySubscriptionId = getThirdpartyaccountsAccountSubscriptionsBySubscriptionId;
	/**
     * @summary Update billing voice rate
	 * @description Update a billing voice rate currently stored in the system.
	 * @memberOf BillingApi#
	* @param {} body - The voice rate to be created
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "currency": "",
   "inboundTollFree": {
      "id": "",
      "name": "",
      "currency": "",
      "amendmentId": "",
      "type": "",
      "effectiveDate": "",
      "rate": {},
      "durationMinimumSeconds": 0,
      "durationIncrementSeconds": 0,
      "selfUri": ""
   },
   "extended": [],
   "inboundTolled": {
      "id": "",
      "name": "",
      "currency": "",
      "amendmentId": "",
      "type": "",
      "effectiveDate": "",
      "rate": {},
      "durationMinimumSeconds": 0,
      "durationIncrementSeconds": 0,
      "selfUri": ""
   },
   "outboundLocal": {
      "id": "",
      "name": "",
      "currency": "",
      "amendmentId": "",
      "type": "",
      "effectiveDate": "",
      "rate": {},
      "durationMinimumSeconds": 0,
      "durationIncrementSeconds": 0,
      "selfUri": ""
   },
   "outboundIntraState": {
      "id": "",
      "name": "",
      "currency": "",
      "amendmentId": "",
      "type": "",
      "effectiveDate": "",
      "rate": {},
      "durationMinimumSeconds": 0,
      "durationIncrementSeconds": 0,
      "selfUri": ""
   },
   "outboundInterState": {
      "id": "",
      "name": "",
      "currency": "",
      "amendmentId": "",
      "type": "",
      "effectiveDate": "",
      "rate": {},
      "durationMinimumSeconds": 0,
      "durationIncrementSeconds": 0,
      "selfUri": ""
   },
   "outboundInternational": [],
   "amendmentDate": "",
   "effectiveDate": "",
   "selfUri": ""
}
	*/
	function updateVoicerate(body){
		var apipath = '/api/v1/billing/voicerate';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateVoicerate = updateVoicerate;
	/**
     * @summary Delete billing voice rate
	 * @description Delete a pending billing voice rate currently stored in the system.
	 * @memberOf BillingApi#
	* @param {string} currency - The currency of the voice rate
	* @param {string} amendmentId - The amendment Id of the voice rate
	*/
	function deleteVoicerateCurrencyByAmendmentId(currency, amendmentId){
		var apipath = '/api/v1/billing/voicerate/{currency}/{amendmentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{currency}', currency);

        if(currency === undefined && currency !== null){
			throw 'Missing required  parameter: currency';
        }

        apipath = apipath.replace('{amendmentId}', amendmentId);

        if(amendmentId === undefined && amendmentId !== null){
			throw 'Missing required  parameter: amendmentId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteVoicerateCurrencyByAmendmentId = deleteVoicerateCurrencyByAmendmentId;
	/**
     * @summary Get current extended billing voice rates
	 * @description Retrieve a list of current extended billing voice rates stored in the system.
	 * @memberOf BillingApi#
	* @param {string} currency - Filter voice rates by currency.
	* @param {string} areaCode - Filter voice rates by area code.
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getVoiceratesExtended(currency, areaCode, pageSize, pageNumber){
		var apipath = '/api/v1/billing/voicerates/extended';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(currency !== undefined && currency !== null){
			queryParameters.currency = currency;
		}

        if(currency === undefined && currency !== null){
			throw 'Missing required  parameter: currency';
        }


		if(areaCode !== undefined && areaCode !== null){
			queryParameters.areaCode = areaCode;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getVoiceratesExtended = getVoiceratesExtended;
	/**
     * @summary Get current inbound billing voice rates
	 * @description Retrieve a list of current inbound billing voice rates stored in the system.
	 * @memberOf BillingApi#
	* @param {string} currency - Filter voice rates by currency.
	* @param {string} type - Filter voice rates by 'inboundTolled', 'inboundTollFree', 'outboundInterState', 'outboundIntraState', or 'outboundLocal'.
	*/
	function getVoiceratesInbound(currency, type){
		var apipath = '/api/v1/billing/voicerates/inbound';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(currency !== undefined && currency !== null){
			queryParameters.currency = currency;
		}

        if(currency === undefined && currency !== null){
			throw 'Missing required  parameter: currency';
        }


		if(type !== undefined && type !== null){
			queryParameters.type = type;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getVoiceratesInbound = getVoiceratesInbound;
	/**
     * @summary Get current outbound domestic billing voice rates
	 * @description Retrieve a list of current outbound domestic billing voice rates stored in the system.
	 * @memberOf BillingApi#
	* @param {string} currency - Filter voice rates by currency.
	* @param {string} type - Filter voice rates by 'inboundTolled', 'inboundTollFree', 'outboundInterState', 'outboundIntraState', or 'outboundLocal'.
	*/
	function getVoiceratesOutboundDomestic(currency, type){
		var apipath = '/api/v1/billing/voicerates/outbound/domestic';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(currency !== undefined && currency !== null){
			queryParameters.currency = currency;
		}

        if(currency === undefined && currency !== null){
			throw 'Missing required  parameter: currency';
        }


		if(type !== undefined && type !== null){
			queryParameters.type = type;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getVoiceratesOutboundDomestic = getVoiceratesOutboundDomestic;
	/**
     * @summary Get current outbound international billing voice rates
	 * @description Retrieve a list of current outbound international billing voice rates stored in the system.
	 * @memberOf BillingApi#
	* @param {string} currency - Filter voice rates by currency.
	* @param {string} origin - Filter voice rates by origin.
	* @param {string} destination - Filter voice rates by destination.
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getVoiceratesOutboundInternational(currency, origin, destination, pageSize, pageNumber){
		var apipath = '/api/v1/billing/voicerates/outbound/international';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(currency !== undefined && currency !== null){
			queryParameters.currency = currency;
		}

        if(currency === undefined && currency !== null){
			throw 'Missing required  parameter: currency';
        }


		if(origin !== undefined && origin !== null){
			queryParameters.origin = origin;
		}


		if(destination !== undefined && destination !== null){
			queryParameters.destination = destination;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getVoiceratesOutboundInternational = getVoiceratesOutboundInternational;
	/**
     * @summary Get current billing voice rates csv
	 * @description Retrieve a csv of current billing voice rates stored in the system.
	 * @memberOf BillingApi#
	*/
	function getVoiceratescsv(){
		var apipath = '/api/v1/billing/voiceratescsv';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getVoiceratescsv = getVoiceratescsv;

    return self;
};

/**
* @class
* @example
* var api = new BridgeApi(pureCloudSession);
*/
var BridgeApi = function (pureCloudSession) {
	/**
     * @summary Get user actions categories
	 * @description 
	 * @memberOf BridgeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getUseractionsCategories(pageSize, pageNumber){
		var apipath = '/api/v1/bridge/useractions/categories';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUseractionsCategories = getUseractionsCategories;
	/**
     * @summary Get user actions metadata
	 * @description 
	 * @memberOf BridgeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	* @param {string} expand - requests.inputSchema,requests.successSchema
	*/
	function getUseractionsMetadata(pageSize, pageNumber, sortBy, sortOrder, expand){
		var apipath = '/api/v1/bridge/useractions/metadata';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUseractionsMetadata = getUseractionsMetadata;
	/**
     * @summary Get user action metadata
	 * @description 
	 * @memberOf BridgeApi#
	* @param {string} name - Name
	* @param {string} expand - requests.inputSchema,requests.successSchema
	*/
	function getUseractionsMetadataName(name, expand){
		var apipath = '/api/v1/bridge/useractions/metadata/{name}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{name}', name);

        if(name === undefined && name !== null){
			throw 'Missing required  parameter: name';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUseractionsMetadataName = getUseractionsMetadataName;

    return self;
};

/**
* @class
* @example
* var api = new CarrierservicesApi(pureCloudSession);
*/
var CarrierservicesApi = function (pureCloudSession) {
	/**
     * @summary Get the list of carriers
	 * @description 
	 * @memberOf CarrierservicesApi#
	*/
	function getCarriers(){
		var apipath = '/api/v1/carrierservices/carriers';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCarriers = getCarriers;
	/**
     * @summary Create a carrier
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {} body - Carrier data
	*/
	function createCarriers(body){
		var apipath = '/api/v1/carrierservices/carriers';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createCarriers = createCarriers;
	/**
     * @summary Get specified carrier by its carrier id
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} carrierId - Carrier ID
	*/
	function getCarrier(carrierId){
		var apipath = '/api/v1/carrierservices/carriers/{carrierId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCarrier = getCarrier;
	/**
     * @summary Update a carrier.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} carrierId - Carrier ID
	* @param {} body - Carrier data
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "carrierAddress": {
      "streetAddress1": "",
      "streetAddress2": "",
      "city": "",
      "state": "",
      "zipcode": ""
   },
   "accountManager": {
      "firstName": "",
      "lastName": "",
      "phone": "",
      "email": ""
   },
   "support": {
      "phone": "",
      "email": "",
      "website": ""
   },
   "nocSupport": {
      "phone": "",
      "email": ""
   },
   "services": [],
   "selfUri": ""
}
	*/
	function updateCarrier(carrierId, body){
		var apipath = '/api/v1/carrierservices/carriers/{carrierId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateCarrier = updateCarrier;
	/**
     * @summary Retrieves all services for a given carrier (i.e. OUTBOUND, INBOUND...)
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} carrierId - Carrier ID
	* @param {array} fields - Fields
	* @param {string} filter - Filter
	*/
	function getCarrierServices(carrierId, fields, filter){
		var apipath = '/api/v1/carrierservices/carriers/{carrierId}/services';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }


		if(fields !== undefined && fields !== null){
			queryParameters.fields = fields;
		}


		if(filter !== undefined && filter !== null){
			queryParameters.filter = filter;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCarrierServices = getCarrierServices;
	/**
     * @summary Creates a carrier service of a specified type (i.e. OUTBOUND, INBOUND...)
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} carrierId - Carrier ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "status": "",
   "serviceTypes": [],
   "gateways": [],
   "dns": {
      "id": "",
      "ip": "",
      "port": 0
   },
   "vpn": {
      "type": "",
      "ip": "",
      "psk": ""
   },
   "carrier": {
      "id": "",
      "name": "",
      "carrierAddress": {},
      "accountManager": {},
      "support": {},
      "nocSupport": {},
      "services": [],
      "selfUri": ""
   },
   "selfUri": ""
}
	*/
	function createCarrierServices(carrierId, body){
		var apipath = '/api/v1/carrierservices/carriers/{carrierId}/services';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createCarrierServices = createCarrierServices;
	/**
     * @summary Retrieves a specific service for a given carrier (i.e. OUTBOUND, INBOUND...)
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} carrierId - Carrier ID
	* @param {string} serviceId - Service ID
	* @param {array} fields - Fields
	*/
	function getCarrierServicesByServiceId(carrierId, serviceId, fields){
		var apipath = '/api/v1/carrierservices/carriers/{carrierId}/services/{serviceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }

        apipath = apipath.replace('{serviceId}', serviceId);

        if(serviceId === undefined && serviceId !== null){
			throw 'Missing required  parameter: serviceId';
        }


		if(fields !== undefined && fields !== null){
			queryParameters.fields = fields;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCarrierServicesByServiceId = getCarrierServicesByServiceId;
	/**
     * @summary Updates a specific service for a given carrier (i.e. OUTBOUND, INBOUND...)
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} carrierId - Carrier ID
	* @param {string} serviceId - Service ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "status": "",
   "serviceTypes": [],
   "gateways": [],
   "dns": {
      "id": "",
      "ip": "",
      "port": 0
   },
   "vpn": {
      "type": "",
      "ip": "",
      "psk": ""
   },
   "carrier": {
      "id": "",
      "name": "",
      "carrierAddress": {},
      "accountManager": {},
      "support": {},
      "nocSupport": {},
      "services": [],
      "selfUri": ""
   },
   "selfUri": ""
}
	*/
	function updateCarrierServicesByServiceId(carrierId, serviceId, body){
		var apipath = '/api/v1/carrierservices/carriers/{carrierId}/services/{serviceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }

        apipath = apipath.replace('{serviceId}', serviceId);

        if(serviceId === undefined && serviceId !== null){
			throw 'Missing required  parameter: serviceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateCarrierServicesByServiceId = updateCarrierServicesByServiceId;
	/**
     * @summary Deletes a specific service for a given carrier (i.e. OUTBOUND, INBOUND...)
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} carrierId - Carrier ID
	* @param {string} serviceId - Service ID
	*/
	function deleteCarrierServicesByServiceId(carrierId, serviceId){
		var apipath = '/api/v1/carrierservices/carriers/{carrierId}/services/{serviceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }

        apipath = apipath.replace('{serviceId}', serviceId);

        if(serviceId === undefined && serviceId !== null){
			throw 'Missing required  parameter: serviceId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteCarrierServicesByServiceId = deleteCarrierServicesByServiceId;
	/**
     * @summary Get all CSV schemas available.
	 * @description 
	 * @memberOf CarrierservicesApi#
	*/
	function getCsvschemas(){
		var apipath = '/api/v1/carrierservices/csvschemas';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCsvschemas = getCsvschemas;
	/**
     * @summary Get all CSV schemas for a given carrier.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} carrierId - Carrier ID
	*/
	function getCsvschemasCarrier(carrierId){
		var apipath = '/api/v1/carrierservices/csvschemas/{carrierId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCsvschemasCarrier = getCsvschemasCarrier;
	/**
     * @summary Updates or creates a CSV schema for a carrier.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {} body - Schema data
	* @param {string} carrierId - Carrier ID
	 * @example
	 * Body Example:
	 * {
   "CarrierId": "",
   "HeaderRow": 0,
   "DataRow": 0,
   "HeaderMappings": {},
   "RateType": "",
   "Name": "",
   "DateFormat": ""
}
	*/
	function updateCsvschemasCarrier(body, carrierId){
		var apipath = '/api/v1/carrierservices/csvschemas/{carrierId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        apipath = apipath.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateCsvschemasCarrier = updateCsvschemasCarrier;
	/**
     * @summary Get all CSV schemas for a given carrier and name.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} carrierId - Carrier ID
	* @param {string} name - Schema name
	*/
	function getCsvschemasCarrierNameByName(carrierId, name){
		var apipath = '/api/v1/carrierservices/csvschemas/{carrierId}/name/{name}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }

        apipath = apipath.replace('{name}', name);

        if(name === undefined && name !== null){
			throw 'Missing required  parameter: name';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCsvschemasCarrierNameByName = getCsvschemasCarrierNameByName;
	/**
     * @summary Deletes a CSV schema for a carrier.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} carrierId - Carrier ID
	* @param {string} name - Schema name
	*/
	function deleteCsvschemasCarrierNameByName(carrierId, name){
		var apipath = '/api/v1/carrierservices/csvschemas/{carrierId}/name/{name}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }

        apipath = apipath.replace('{name}', name);

        if(name === undefined && name !== null){
			throw 'Missing required  parameter: name';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteCsvschemasCarrierNameByName = deleteCsvschemasCarrierNameByName;
	/**
     * @summary Search for available numbers.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} npa - The allowed number ranges for local numbers are [2-9] for the first digit and [0-9] for both the second and third digits. The allowed numbers for toll-free are 800, 888, etc.
	* @param {string} state - The two-letter abbreviation of the state the RateCenter is in.
	* @param {string} city - The name of the city.
	* @param {string} zip - A five-digit (XXXXX) or nine-digit (XXXXX-XXXX) zip-code value.
	* @param {string} lata - A maximum five digit (XXXXX) numeric format.
	* @param {string} rateCenter - The abbreviation for the Rate Center
	* @param {string} vanity - Requested vanity number. Valid range is from 4 to 7 alphanumeric characters.
	* @param {string} prefix - Prefix of the number, must be 6 or 7 digits.
	* @param {integer} quantity - The desired quantity of requested numbers. Values range from 1-5000. If no quantity is specified, the default of 5000 is returned.
	* @param {string} orderBy - The field by which the returned numbers will be sorted. Only supported if at least one of the following search criteria is specified: prefix, city, zip. Allowed values are fullNumber, npaNxxx, npaNxx, and areaCode>
	* @param {boolean} enableTNDetail - If set to true, a list of details associated with the telephone number (rate center abbreviation, rate center host city, state, and LATA) will be displayed along with the telephone number. This value is set to false by default.
	* @param {string} type - The type of phone number (eg us-domestic, toll-free, etc), to determine which third-party api(s) to use for the search.
	TOLL_FREE,
	CN_DOMESTIC,
	US_DOMESTIC,
	*/
	function getNumberpurchaseAvailable(npa, state, city, zip, lata, rateCenter, vanity, prefix, quantity, orderBy, enableTNDetail, type){
		var apipath = '/api/v1/carrierservices/numberpurchase/available';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(npa !== undefined && npa !== null){
			queryParameters.npa = npa;
		}


		if(state !== undefined && state !== null){
			queryParameters.state = state;
		}


		if(city !== undefined && city !== null){
			queryParameters.city = city;
		}


		if(zip !== undefined && zip !== null){
			queryParameters.zip = zip;
		}


		if(lata !== undefined && lata !== null){
			queryParameters.lata = lata;
		}


		if(rateCenter !== undefined && rateCenter !== null){
			queryParameters.rateCenter = rateCenter;
		}


		if(vanity !== undefined && vanity !== null){
			queryParameters.vanity = vanity;
		}


		if(prefix !== undefined && prefix !== null){
			queryParameters.prefix = prefix;
		}


		if(quantity !== undefined && quantity !== null){
			queryParameters.quantity = quantity;
		}


		if(orderBy !== undefined && orderBy !== null){
			queryParameters.orderBy = orderBy;
		}


		if(enableTNDetail !== undefined && enableTNDetail !== null){
			queryParameters.enableTNDetail = enableTNDetail;
		}


		if(type !== undefined && type !== null){
			queryParameters.type = type;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getNumberpurchaseAvailable = getNumberpurchaseAvailable;
	/**
     * @summary View all number orders for the organization.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} phoneNumberType - Phone Number Type
	TOLL_FREE,
	CN_DOMESTIC,
	US_DOMESTIC,
	*/
	function getNumberpurchaseOrders(phoneNumberType){
		var apipath = '/api/v1/carrierservices/numberpurchase/orders';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(phoneNumberType !== undefined && phoneNumberType !== null){
			queryParameters.phoneNumberType = phoneNumberType;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getNumberpurchaseOrders = getNumberpurchaseOrders;
	/**
     * @summary Purchase numbers.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} phoneNumberType - Phone Number Type
	TOLL_FREE,
	CN_DOMESTIC,
	US_DOMESTIC,
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "orderTns": [],
   "reservationIds": [],
   "orderId": "",
   "effectiveDate": "",
   "phoneNumberType": ""
}
	*/
	function createNumberpurchaseOrders(phoneNumberType, body){
		var apipath = '/api/v1/carrierservices/numberpurchase/orders';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(phoneNumberType !== undefined && phoneNumberType !== null){
			queryParameters.phoneNumberType = phoneNumberType;
		}

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createNumberpurchaseOrders = createNumberpurchaseOrders;
	/**
     * @summary View all a number order record.  Some vender apis have side effects when viewing records with pending operations.  This method also manages the side effects and updates ININ-side data stores to reflect any changes.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} orderId - Phone Number Order ID
	*/
	function getNumberpurchaseOrder(orderId){
		var apipath = '/api/v1/carrierservices/numberpurchase/orders/{orderId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{orderId}', orderId);

        if(orderId === undefined && orderId !== null){
			throw 'Missing required  parameter: orderId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getNumberpurchaseOrder = getNumberpurchaseOrder;
	/**
     * @summary Disconnect the number purchased in a particlar order.  The order record remains (in the deleted state) for record keeping.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} orderId - Phone Number Order ID
	*/
	function deleteNumberpurchaseOrder(orderId){
		var apipath = '/api/v1/carrierservices/numberpurchase/orders/{orderId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{orderId}', orderId);

        if(orderId === undefined && orderId !== null){
			throw 'Missing required  parameter: orderId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteNumberpurchaseOrder = deleteNumberpurchaseOrder;
	/**
     * @summary Reserve available numbers, making them ready for purchase and preventing other users from accessing them.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {} body - 
	*/
	function createNumberpurchaseReserved(body){
		var apipath = '/api/v1/carrierservices/numberpurchase/reserved';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createNumberpurchaseReserved = createNumberpurchaseReserved;
	/**
     * @summary View a specific reservation.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} reservationId - Phone Number Reservation ID
	* @param {string} phoneNumberType - Phone Number Type
	TOLL_FREE,
	CN_DOMESTIC,
	US_DOMESTIC,
	*/
	function getNumberpurchaseReservedReservation(reservationId, phoneNumberType){
		var apipath = '/api/v1/carrierservices/numberpurchase/reserved/{reservationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{reservationId}', reservationId);

        if(reservationId === undefined && reservationId !== null){
			throw 'Missing required  parameter: reservationId';
        }


		if(phoneNumberType !== undefined && phoneNumberType !== null){
			queryParameters.phoneNumberType = phoneNumberType;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getNumberpurchaseReservedReservation = getNumberpurchaseReservedReservation;
	/**
     * @summary Cancel a specific reservation, making the number available for other users, again.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} reservationId - Phone Number Reservation ID
	* @param {string} phoneNumberType - Phone Number Type
	TOLL_FREE,
	CN_DOMESTIC,
	US_DOMESTIC,
	*/
	function deleteNumberpurchaseReservedReservation(reservationId, phoneNumberType){
		var apipath = '/api/v1/carrierservices/numberpurchase/reserved/{reservationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{reservationId}', reservationId);

        if(reservationId === undefined && reservationId !== null){
			throw 'Missing required  parameter: reservationId';
        }


		if(phoneNumberType !== undefined && phoneNumberType !== null){
			queryParameters.phoneNumberType = phoneNumberType;
		}


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteNumberpurchaseReservedReservation = deleteNumberpurchaseReservedReservation;
	/**
     * @summary Get ratesheet upload progress for a user.
	 * @description 
	 * @memberOf CarrierservicesApi#
	*/
	function getProgress(){
		var apipath = '/api/v1/carrierservices/progress';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProgress = getProgress;
	/**
     * @summary Get LCR report.
	 * @description This method queries Druid for a Phone Number Purchase Stats database report.  Some Druid terminology is required to use it.  Each query parameter besides dimensions, _pgn, and _pgs, is a Druid dimension.  From the Druid documentation: Dimensions: Aspects or categories of data, such as languages or locations. For example, with language and country as the type of dimension, values could be "English" or "Mandarin" for language, or "USA" or "China" for country. In Druid, dimensions can serve as filters for narrowing down hits (for example, language = "English" or country = "China").  When using a dimension query parameter with a value the report will return events with granularity of that dimension where the dimension value is equal to the value you specified.  If you want to receive events with dimension based granularity with no filter, opt to use the dimensions query parameters, which is a comma  separated list of values that use the other query parameters as dimension names.  Each  parameter needs to be in the screaming snake case format, or words capitalized with underscores between words (i.e. CUSTOMER_ID).
	 * @memberOf CarrierservicesApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	* @param {string} granularity - The granularity field determines how data gets bucketed across the time dimension, or how it gets aggregated by hour, day, minute, etc. all buckets everything into a single bucket. none does not bucket data (it actually uses the granularity of the index - minimum here is none which means millisecond granularity).
	* @param {string} dimensions - Dimensions are really any other parameter specified, excluding granularity.  To specify multiple dimensions use comma separated values.
	* @param {string} startDate - Start dateTime for ISO-8601 Intervals. This defines the time ranges to run the query over.  If not set will always default to now minus 15 days.
	* @param {string} endDate - End dateTime for ISO-8601 Intervals. This defines the time ranges to run the query over. If not set will always default to startDate plus 30 days.
	* @param {boolean} regexFilterEnabled - Specifies if all dimension filters should be implemented as regexps.
	* @param {string} effectiveStartDate - Effective date number service starts
	* @param {string} effectiveEndDate - Effective date number service ends
	* @param {string} did - Number purchased (Can use with regex for npa, etc.)
	* @param {string} phoneNumberType - Type of number purchased (ie. us-domestic, tollfree...)
	TOLL_FREE,
	CN_DOMESTIC,
	US_DOMESTIC,
	* @param {string} startAuthUserId - User id for the number purchase
	* @param {string} endAuthUserId - User id for the number disconnect order
	* @param {string} status - Status of the number purchase
	COMPLETE,
	FAILED,
	BACKORDERED,
	PENDING,
	ERROR,
	DISCONNECTED,
	DISCONNECT_PENDING,
	DISCONNECT_FAILED,
	* @param {string} orgId - Organization id for the number purchase
	*/
	function getReportPurchases(pageSize, pageNumber, sortBy, expand, granularity, dimensions, startDate, endDate, regexFilterEnabled, effectiveStartDate, effectiveEndDate, did, phoneNumberType, startAuthUserId, endAuthUserId, status, orgId){
		var apipath = '/api/v1/carrierservices/report/purchases';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(granularity !== undefined && granularity !== null){
			queryParameters.granularity = granularity;
		}


		if(dimensions !== undefined && dimensions !== null){
			queryParameters.dimensions = dimensions;
		}


		if(startDate !== undefined && startDate !== null){
			queryParameters.startDate = startDate;
		}


		if(endDate !== undefined && endDate !== null){
			queryParameters.endDate = endDate;
		}


		if(regexFilterEnabled !== undefined && regexFilterEnabled !== null){
			queryParameters.regexFilterEnabled = regexFilterEnabled;
		}


		if(effectiveStartDate !== undefined && effectiveStartDate !== null){
			queryParameters.effectiveStartDate = effectiveStartDate;
		}


		if(effectiveEndDate !== undefined && effectiveEndDate !== null){
			queryParameters.effectiveEndDate = effectiveEndDate;
		}


		if(did !== undefined && did !== null){
			queryParameters.did = did;
		}


		if(phoneNumberType !== undefined && phoneNumberType !== null){
			queryParameters.phoneNumberType = phoneNumberType;
		}


		if(startAuthUserId !== undefined && startAuthUserId !== null){
			queryParameters.startAuthUserId = startAuthUserId;
		}


		if(endAuthUserId !== undefined && endAuthUserId !== null){
			queryParameters.endAuthUserId = endAuthUserId;
		}


		if(status !== undefined && status !== null){
			queryParameters.status = status;
		}


		if(orgId !== undefined && orgId !== null){
			queryParameters.orgId = orgId;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getReportPurchases = getReportPurchases;
	/**
     * @summary Get LCR report.
	 * @description This method queries Druid for a Call Stats database report.  Some Druid terminology is required to use it.  Each query parameter besides dimensions, _pgn, and _pgs, is a Druid dimension.  From the Druid documentation: Dimensions: Aspects or categories of data, such as languages or locations. For example, with language and country as the type of dimension, values could be "English" or "Mandarin" for language, or "USA" or "China" for country. In Druid, dimensions can serve as filters for narrowing down hits (for example, language = "English" or country = "China").  When using a dimension query parameter with a value the report will return events with granularity of that dimension where the dimension value is equal to the value you specified.  If you want to receive events with dimension based granularity with no filter, opt to use the dimensions query parameters, which is a comma  separated list of values that use the other query parameters as dimension names.  Each  parameter needs to be in the screaming snake case format, or words capitalized with underscores between words (i.e. CUSTOMER_ID).
	 * @memberOf CarrierservicesApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	* @param {string} granularity - The granularity field determines how data gets bucketed across the time dimension, or how it gets aggregated by hour, day, minute, etc. all buckets everything into a single bucket. none does not bucket data (it actually uses the granularity of the index - minimum here is none which means millisecond granularity).
	* @param {string} dimensions - Dimensions are really any other parameter specified, excluding granularity.  To specify multiple dimensions use comma separated values.
	* @param {string} startDate - Start dateTime for ISO-8601 Intervals. This defines the time ranges to run the query over.  If not set will always default to now minus 15 days.
	* @param {string} endDate - End dateTime for ISO-8601 Intervals. This defines the time ranges to run the query over. If not set will always default to startDate plus 30 days.
	* @param {boolean} regexFilterEnabled - Specifies if all dimension filters should be implemented as regexps.
	* @param {string} sipCallId - SIP call id
	* @param {string} sipReason - SIP human readable status reason
	* @param {string} lrn - This method queries Druid for a Call Stats database report.  Some Druid terminology is required to use it.  Each query parameter besides dimensions, _pgn, and _pgs, is a Druid dimension.  From the Druid documentation: Dimensions: Aspects or categories of data, such as languages or locations. For example, with language and country as the type of dimension, values could be "English" or "Mandarin" for language, or "USA" or "China" for country. In Druid, dimensions can serve as filters for narrowing down hits (for example, language = "English" or country = "China").  When using a dimension query parameter with a value the report will return events with granularity of that dimension where the dimension value is equal to the value you specified.  If you want to receive events with dimension based granularity with no filter, opt to use the dimensions query parameters, which is a comma  separated list of values that use the other query parameters as dimension names.  Each  parameter needs to be in the screaming snake case format, or words capitalized with underscores between words (i.e. CUSTOMER_ID).
	* @param {string} sipStatus - SIP status code
	* @param {string} dialogId - This method queries Druid for a Call Stats database report.  Some Druid terminology is required to use it.  Each query parameter besides dimensions, _pgn, and _pgs, is a Druid dimension.  From the Druid documentation: Dimensions: Aspects or categories of data, such as languages or locations. For example, with language and country as the type of dimension, values could be "English" or "Mandarin" for language, or "USA" or "China" for country. In Druid, dimensions can serve as filters for narrowing down hits (for example, language = "English" or country = "China").  When using a dimension query parameter with a value the report will return events with granularity of that dimension where the dimension value is equal to the value you specified.  If you want to receive events with dimension based granularity with no filter, opt to use the dimensions query parameters, which is a comma  separated list of values that use the other query parameters as dimension names.  Each  parameter needs to be in the screaming snake case format, or words capitalized with underscores between words (i.e. CUSTOMER_ID).
	* @param {string} orgId - Organization id for the placed call
	* @param {string} cnam - This method queries Druid for a Call Stats database report.  Some Druid terminology is required to use it.  Each query parameter besides dimensions, _pgn, and _pgs, is a Druid dimension.  From the Druid documentation: Dimensions: Aspects or categories of data, such as languages or locations. For example, with language and country as the type of dimension, values could be "English" or "Mandarin" for language, or "USA" or "China" for country. In Druid, dimensions can serve as filters for narrowing down hits (for example, language = "English" or country = "China").  When using a dimension query parameter with a value the report will return events with granularity of that dimension where the dimension value is equal to the value you specified.  If you want to receive events with dimension based granularity with no filter, opt to use the dimensions query parameters, which is a comma  separated list of values that use the other query parameters as dimension names.  Each  parameter needs to be in the screaming snake case format, or words capitalized with underscores between words (i.e. CUSTOMER_ID).
	* @param {string} from - From prefix of the number
	* @param {string} to - To prefix of the number
	* @param {string} gatewayId - This method queries Druid for a Call Stats database report.  Some Druid terminology is required to use it.  Each query parameter besides dimensions, _pgn, and _pgs, is a Druid dimension.  From the Druid documentation: Dimensions: Aspects or categories of data, such as languages or locations. For example, with language and country as the type of dimension, values could be "English" or "Mandarin" for language, or "USA" or "China" for country. In Druid, dimensions can serve as filters for narrowing down hits (for example, language = "English" or country = "China").  When using a dimension query parameter with a value the report will return events with granularity of that dimension where the dimension value is equal to the value you specified.  If you want to receive events with dimension based granularity with no filter, opt to use the dimensions query parameters, which is a comma  separated list of values that use the other query parameters as dimension names.  Each  parameter needs to be in the screaming snake case format, or words capitalized with underscores between words (i.e. CUSTOMER_ID).
	* @param {string} direction - Direction of the call (e.g. incoming/outgoing)
	* @param {string} serviceId - Purevoice service id
	* @param {string} sendTime - This method queries Druid for a Call Stats database report.  Some Druid terminology is required to use it.  Each query parameter besides dimensions, _pgn, and _pgs, is a Druid dimension.  From the Druid documentation: Dimensions: Aspects or categories of data, such as languages or locations. For example, with language and country as the type of dimension, values could be "English" or "Mandarin" for language, or "USA" or "China" for country. In Druid, dimensions can serve as filters for narrowing down hits (for example, language = "English" or country = "China").  When using a dimension query parameter with a value the report will return events with granularity of that dimension where the dimension value is equal to the value you specified.  If you want to receive events with dimension based granularity with no filter, opt to use the dimensions query parameters, which is a comma  separated list of values that use the other query parameters as dimension names.  Each  parameter needs to be in the screaming snake case format, or words capitalized with underscores between words (i.e. CUSTOMER_ID).
	* @param {string} answerTime - Time in which the call was connected end to end
	* @param {string} receiveTime - Time in which the call was retrieved by Purevoice
	* @param {string} failTime - This method queries Druid for a Call Stats database report.  Some Druid terminology is required to use it.  Each query parameter besides dimensions, _pgn, and _pgs, is a Druid dimension.  From the Druid documentation: Dimensions: Aspects or categories of data, such as languages or locations. For example, with language and country as the type of dimension, values could be "English" or "Mandarin" for language, or "USA" or "China" for country. In Druid, dimensions can serve as filters for narrowing down hits (for example, language = "English" or country = "China").  When using a dimension query parameter with a value the report will return events with granularity of that dimension where the dimension value is equal to the value you specified.  If you want to receive events with dimension based granularity with no filter, opt to use the dimensions query parameters, which is a comma  separated list of values that use the other query parameters as dimension names.  Each  parameter needs to be in the screaming snake case format, or words capitalized with underscores between words (i.e. CUSTOMER_ID).
	* @param {string} disconnectTime - This method queries Druid for a Call Stats database report.  Some Druid terminology is required to use it.  Each query parameter besides dimensions, _pgn, and _pgs, is a Druid dimension.  From the Druid documentation: Dimensions: Aspects or categories of data, such as languages or locations. For example, with language and country as the type of dimension, values could be "English" or "Mandarin" for language, or "USA" or "China" for country. In Druid, dimensions can serve as filters for narrowing down hits (for example, language = "English" or country = "China").  When using a dimension query parameter with a value the report will return events with granularity of that dimension where the dimension value is equal to the value you specified.  If you want to receive events with dimension based granularity with no filter, opt to use the dimensions query parameters, which is a comma  separated list of values that use the other query parameters as dimension names.  Each  parameter needs to be in the screaming snake case format, or words capitalized with underscores between words (i.e. CUSTOMER_ID).
	* @param {string} endTime - Time of success call ending
	* @param {string} cnamTime - This method queries Druid for a Call Stats database report.  Some Druid terminology is required to use it.  Each query parameter besides dimensions, _pgn, and _pgs, is a Druid dimension.  From the Druid documentation: Dimensions: Aspects or categories of data, such as languages or locations. For example, with language and country as the type of dimension, values could be "English" or "Mandarin" for language, or "USA" or "China" for country. In Druid, dimensions can serve as filters for narrowing down hits (for example, language = "English" or country = "China").  When using a dimension query parameter with a value the report will return events with granularity of that dimension where the dimension value is equal to the value you specified.  If you want to receive events with dimension based granularity with no filter, opt to use the dimensions query parameters, which is a comma  separated list of values that use the other query parameters as dimension names.  Each  parameter needs to be in the screaming snake case format, or words capitalized with underscores between words (i.e. CUSTOMER_ID).
	* @param {string} lnpTime - This method queries Druid for a Call Stats database report.  Some Druid terminology is required to use it.  Each query parameter besides dimensions, _pgn, and _pgs, is a Druid dimension.  From the Druid documentation: Dimensions: Aspects or categories of data, such as languages or locations. For example, with language and country as the type of dimension, values could be "English" or "Mandarin" for language, or "USA" or "China" for country. In Druid, dimensions can serve as filters for narrowing down hits (for example, language = "English" or country = "China").  When using a dimension query parameter with a value the report will return events with granularity of that dimension where the dimension value is equal to the value you specified.  If you want to receive events with dimension based granularity with no filter, opt to use the dimensions query parameters, which is a comma  separated list of values that use the other query parameters as dimension names.  Each  parameter needs to be in the screaming snake case format, or words capitalized with underscores between words (i.e. CUSTOMER_ID).
	* @param {string} rejectTime - This method queries Druid for a Call Stats database report.  Some Druid terminology is required to use it.  Each query parameter besides dimensions, _pgn, and _pgs, is a Druid dimension.  From the Druid documentation: Dimensions: Aspects or categories of data, such as languages or locations. For example, with language and country as the type of dimension, values could be "English" or "Mandarin" for language, or "USA" or "China" for country. In Druid, dimensions can serve as filters for narrowing down hits (for example, language = "English" or country = "China").  When using a dimension query parameter with a value the report will return events with granularity of that dimension where the dimension value is equal to the value you specified.  If you want to receive events with dimension based granularity with no filter, opt to use the dimensions query parameters, which is a comma  separated list of values that use the other query parameters as dimension names.  Each  parameter needs to be in the screaming snake case format, or words capitalized with underscores between words (i.e. CUSTOMER_ID).
	*/
	function getReportUsage(pageSize, pageNumber, sortBy, expand, granularity, dimensions, startDate, endDate, regexFilterEnabled, sipCallId, sipReason, lrn, sipStatus, dialogId, orgId, cnam, from, to, gatewayId, direction, serviceId, sendTime, answerTime, receiveTime, failTime, disconnectTime, endTime, cnamTime, lnpTime, rejectTime){
		var apipath = '/api/v1/carrierservices/report/usage';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(granularity !== undefined && granularity !== null){
			queryParameters.granularity = granularity;
		}


		if(dimensions !== undefined && dimensions !== null){
			queryParameters.dimensions = dimensions;
		}


		if(startDate !== undefined && startDate !== null){
			queryParameters.startDate = startDate;
		}


		if(endDate !== undefined && endDate !== null){
			queryParameters.endDate = endDate;
		}


		if(regexFilterEnabled !== undefined && regexFilterEnabled !== null){
			queryParameters.regexFilterEnabled = regexFilterEnabled;
		}


		if(sipCallId !== undefined && sipCallId !== null){
			queryParameters.sipCallId = sipCallId;
		}


		if(sipReason !== undefined && sipReason !== null){
			queryParameters.sipReason = sipReason;
		}


		if(lrn !== undefined && lrn !== null){
			queryParameters.lrn = lrn;
		}


		if(sipStatus !== undefined && sipStatus !== null){
			queryParameters.sipStatus = sipStatus;
		}


		if(dialogId !== undefined && dialogId !== null){
			queryParameters.dialogId = dialogId;
		}


		if(orgId !== undefined && orgId !== null){
			queryParameters.orgId = orgId;
		}


		if(cnam !== undefined && cnam !== null){
			queryParameters.cnam = cnam;
		}


		if(from !== undefined && from !== null){
			queryParameters.from = from;
		}


		if(to !== undefined && to !== null){
			queryParameters.to = to;
		}


		if(gatewayId !== undefined && gatewayId !== null){
			queryParameters.gatewayId = gatewayId;
		}


		if(direction !== undefined && direction !== null){
			queryParameters.direction = direction;
		}


		if(serviceId !== undefined && serviceId !== null){
			queryParameters.serviceId = serviceId;
		}


		if(sendTime !== undefined && sendTime !== null){
			queryParameters.sendTime = sendTime;
		}


		if(answerTime !== undefined && answerTime !== null){
			queryParameters.answerTime = answerTime;
		}


		if(receiveTime !== undefined && receiveTime !== null){
			queryParameters.receiveTime = receiveTime;
		}


		if(failTime !== undefined && failTime !== null){
			queryParameters.failTime = failTime;
		}


		if(disconnectTime !== undefined && disconnectTime !== null){
			queryParameters.disconnectTime = disconnectTime;
		}


		if(endTime !== undefined && endTime !== null){
			queryParameters.endTime = endTime;
		}


		if(cnamTime !== undefined && cnamTime !== null){
			queryParameters.cnamTime = cnamTime;
		}


		if(lnpTime !== undefined && lnpTime !== null){
			queryParameters.lnpTime = lnpTime;
		}


		if(rejectTime !== undefined && rejectTime !== null){
			queryParameters.rejectTime = rejectTime;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getReportUsage = getReportUsage;
	/**
     * @summary Get View Url
	 * @description Provides url of a hosted DocuSign view/document, allowing user to sign document electronically
	 * @memberOf CarrierservicesApi#
	* @param {} body - Provides url of a hosted DocuSign view/document, allowing user to sign document electronically
	 * @example
	 * Body Example:
	 * {
   "org": {
      "id": "",
      "name": "",
      "thirdPartyOrgId": "",
      "thirdPartyOrgName": "",
      "thirdPartyURI": "",
      "adminUsername": "",
      "adminPassword": "",
      "domain": "",
      "version": 0,
      "state": "",
      "defaultSiteId": "",
      "deletable": true,
      "selfUri": ""
   },
   "user": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "returnUrl": ""
}
	*/
	function createSignature(body){
		var apipath = '/api/v1/carrierservices/signature';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createSignature = createSignature;
	/**
     * @summary Get a stored transform plan for uploaded spreadsheets
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} filter - Filter
	* @param {string} pageSize - Page size
	* @param {string} lastEntry - Last entry
	*/
	function getTransformendpoints(filter, pageSize, lastEntry){
		var apipath = '/api/v1/carrierservices/transformendpoints';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(filter !== undefined && filter !== null){
			queryParameters.filter = filter;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(lastEntry !== undefined && lastEntry !== null){
			queryParameters.lastEntry = lastEntry;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getTransformendpoints = getTransformendpoints;
	/**
     * @summary Add a new transform plan for uploaded spreadsheets
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "swaggerUrl": "",
   "route": "",
   "entity": "",
   "apiFunction": "",
   "ready": true,
   "active": true,
   "batchSize": 0,
   "parallelism": 0,
   "updateProgressEvery": 0,
   "selfUri": ""
}
	*/
	function createTransformendpoints(body){
		var apipath = '/api/v1/carrierservices/transformendpoints';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createTransformendpoints = createTransformendpoints;
	/**
     * @summary Get a stored Endpoint plan for uploaded Transforms
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} id - Endpoint ID
	*/
	function getTransformendpointsId(id){
		var apipath = '/api/v1/carrierservices/transformendpoints/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getTransformendpointsId = getTransformendpointsId;
	/**
     * @summary Update an existing Endpoint plan for uploaded Transforms
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} id - Endpoint ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "swaggerUrl": "",
   "route": "",
   "entity": "",
   "apiFunction": "",
   "ready": true,
   "active": true,
   "batchSize": 0,
   "parallelism": 0,
   "updateProgressEvery": 0,
   "selfUri": ""
}
	*/
	function updateTransformendpointsId(id, body){
		var apipath = '/api/v1/carrierservices/transformendpoints/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateTransformendpointsId = updateTransformendpointsId;
	/**
     * @summary Delete an existing Endpoint plan for uploaded Transforms
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} id - Endpoint ID
	*/
	function deleteTransformendpointsId(id){
		var apipath = '/api/v1/carrierservices/transformendpoints/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteTransformendpointsId = deleteTransformendpointsId;
	/**
     * @summary Get The progress report for transforming uploaded documents
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} service - Service Name
	*/
	function getTransformprogressSearchService(service){
		var apipath = '/api/v1/carrierservices/transformprogress/search/{service}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{service}', service);

        if(service === undefined && service !== null){
			throw 'Missing required  parameter: service';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getTransformprogressSearchService = getTransformprogressSearchService;
	/**
     * @summary Get The progress report for transforming uploaded documents
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} service - Service Name
	* @param {string} modeltype - Model Type
	*/
	function getTransformprogressSearchServiceByModeltype(service, modeltype){
		var apipath = '/api/v1/carrierservices/transformprogress/search/{service}/{modeltype}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{service}', service);

        if(service === undefined && service !== null){
			throw 'Missing required  parameter: service';
        }

        apipath = apipath.replace('{modeltype}', modeltype);

        if(modeltype === undefined && modeltype !== null){
			throw 'Missing required  parameter: modeltype';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getTransformprogressSearchServiceByModeltype = getTransformprogressSearchServiceByModeltype;
	/**
     * @summary Get The progress report for transforming uploaded documents
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} service - Service Name
	* @param {string} modeltype - Model Type
	* @param {string} modelid - Model ID
	*/
	function getTransformprogressSearchServiceByModeltypeByModelid(service, modeltype, modelid){
		var apipath = '/api/v1/carrierservices/transformprogress/search/{service}/{modeltype}/{modelid}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{service}', service);

        if(service === undefined && service !== null){
			throw 'Missing required  parameter: service';
        }

        apipath = apipath.replace('{modeltype}', modeltype);

        if(modeltype === undefined && modeltype !== null){
			throw 'Missing required  parameter: modeltype';
        }

        apipath = apipath.replace('{modelid}', modelid);

        if(modelid === undefined && modelid !== null){
			throw 'Missing required  parameter: modelid';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getTransformprogressSearchServiceByModeltypeByModelid = getTransformprogressSearchServiceByModeltypeByModelid;
	/**
     * @summary The progress report for an upload
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} id - Upload Progress ID
	*/
	function getTransformprogressId(id){
		var apipath = '/api/v1/carrierservices/transformprogress/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getTransformprogressId = getTransformprogressId;
	/**
     * @summary Get a stored transform plan for uploaded spreadsheets
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} filter - Filter
	* @param {string} pageSize - Page size
	* @param {string} lastEntry - Last entry
	*/
	function getUploadtransformSpreadsheets(filter, pageSize, lastEntry){
		var apipath = '/api/v1/carrierservices/uploadtransform/spreadsheets';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(filter !== undefined && filter !== null){
			queryParameters.filter = filter;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(lastEntry !== undefined && lastEntry !== null){
			queryParameters.lastEntry = lastEntry;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUploadtransformSpreadsheets = getUploadtransformSpreadsheets;
	/**
     * @summary Add a new transform plan for uploaded spreadsheets
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "restEndpoint": {
      "id": "",
      "name": "",
      "swaggerUrl": "",
      "route": "",
      "entity": "",
      "apiFunction": "",
      "ready": true,
      "active": true,
      "batchSize": 0,
      "parallelism": 0,
      "updateProgressEvery": 0,
      "selfUri": ""
   },
   "filenameTransforms": [],
   "tags": [],
   "sheetNameTransforms": [],
   "sheets": [],
   "clientTransformModel": {
      "id": "",
      "endpointId": "",
      "filenameReplaces": [],
      "tags": [],
      "name": "",
      "sheetNameReplaces": [],
      "sheets": []
   },
   "selfUri": ""
}
	*/
	function createUploadtransformSpreadsheets(body){
		var apipath = '/api/v1/carrierservices/uploadtransform/spreadsheets';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createUploadtransformSpreadsheets = createUploadtransformSpreadsheets;
	/**
     * @summary Get a stored transform plan for uploaded spreadsheets
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} id - Transform ID
	*/
	function getUploadtransformSpreadsheetsId(id){
		var apipath = '/api/v1/carrierservices/uploadtransform/spreadsheets/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUploadtransformSpreadsheetsId = getUploadtransformSpreadsheetsId;
	/**
     * @summary Update an existing transform plan for uploaded spreadsheets
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} id - Transform ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "restEndpoint": {
      "id": "",
      "name": "",
      "swaggerUrl": "",
      "route": "",
      "entity": "",
      "apiFunction": "",
      "ready": true,
      "active": true,
      "batchSize": 0,
      "parallelism": 0,
      "updateProgressEvery": 0,
      "selfUri": ""
   },
   "filenameTransforms": [],
   "tags": [],
   "sheetNameTransforms": [],
   "sheets": [],
   "clientTransformModel": {
      "id": "",
      "endpointId": "",
      "filenameReplaces": [],
      "tags": [],
      "name": "",
      "sheetNameReplaces": [],
      "sheets": []
   },
   "selfUri": ""
}
	*/
	function updateUploadtransformSpreadsheetsId(id, body){
		var apipath = '/api/v1/carrierservices/uploadtransform/spreadsheets/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateUploadtransformSpreadsheetsId = updateUploadtransformSpreadsheetsId;
	/**
     * @summary Delete an existing transform plan for uploaded spreadsheets
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} id - Transform ID
	*/
	function deleteUploadtransformSpreadsheetsId(id){
		var apipath = '/api/v1/carrierservices/uploadtransform/spreadsheets/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteUploadtransformSpreadsheetsId = deleteUploadtransformSpreadsheetsId;
	/**
     * @summary Get a stored transform plan for uploaded delimited text tables
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} filter - Filter
	*/
	function getUploadtransformTexttables(filter){
		var apipath = '/api/v1/carrierservices/uploadtransform/texttables';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(filter !== undefined && filter !== null){
			queryParameters.filter = filter;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUploadtransformTexttables = getUploadtransformTexttables;
	/**
     * @summary Add a new transform plan for uploaded delimited text tables
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "restEndpoint": {
      "id": "",
      "name": "",
      "swaggerUrl": "",
      "route": "",
      "entity": "",
      "apiFunction": "",
      "ready": true,
      "active": true,
      "batchSize": 0,
      "parallelism": 0,
      "updateProgressEvery": 0,
      "selfUri": ""
   },
   "filenameTransforms": [],
   "tags": [],
   "commentSymbol": "",
   "delimiter": "",
   "table": {
      "headerRow": 0,
      "firstData": 0,
      "headerReplaces": [],
      "columns": [],
      "unpivots": [],
      "collapses": []
   },
   "selfUri": ""
}
	*/
	function createUploadtransformTexttables(body){
		var apipath = '/api/v1/carrierservices/uploadtransform/texttables';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createUploadtransformTexttables = createUploadtransformTexttables;
	/**
     * @summary Get a stored transform plan for uploaded delimited text tables
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} id - Transform ID
	*/
	function getUploadtransformTexttablesId(id){
		var apipath = '/api/v1/carrierservices/uploadtransform/texttables/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUploadtransformTexttablesId = getUploadtransformTexttablesId;
	/**
     * @summary Update an existing transform plan for uploaded delimited text tables
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} id - Transform ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "restEndpoint": {
      "id": "",
      "name": "",
      "swaggerUrl": "",
      "route": "",
      "entity": "",
      "apiFunction": "",
      "ready": true,
      "active": true,
      "batchSize": 0,
      "parallelism": 0,
      "updateProgressEvery": 0,
      "selfUri": ""
   },
   "filenameTransforms": [],
   "tags": [],
   "commentSymbol": "",
   "delimiter": "",
   "table": {
      "headerRow": 0,
      "firstData": 0,
      "headerReplaces": [],
      "columns": [],
      "unpivots": [],
      "collapses": []
   },
   "selfUri": ""
}
	*/
	function updateUploadtransformTexttablesId(id, body){
		var apipath = '/api/v1/carrierservices/uploadtransform/texttables/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateUploadtransformTexttablesId = updateUploadtransformTexttablesId;
	/**
     * @summary Delete an existing transform plan for uploaded delimited text tables
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} id - Transform ID
	*/
	function deleteUploadtransformTexttablesId(id){
		var apipath = '/api/v1/carrierservices/uploadtransform/texttables/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteUploadtransformTexttablesId = deleteUploadtransformTexttablesId;
	/**
     * @summary Get all available XLSX schemas.
	 * @description 
	 * @memberOf CarrierservicesApi#
	*/
	function getXlsxschemas(){
		var apipath = '/api/v1/carrierservices/xlsxschemas';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getXlsxschemas = getXlsxschemas;
	/**
     * @summary Get all XLSX schemas for a given carrier.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} carrierId - Carrier ID
	*/
	function getXlsxschemasCarrier(carrierId){
		var apipath = '/api/v1/carrierservices/xlsxschemas/{carrierId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getXlsxschemasCarrier = getXlsxschemasCarrier;
	/**
     * @summary Updates or creates a XLSX schema for a carrier.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {} body - Schema data
	* @param {string} carrierId - Carrier ID
	 * @example
	 * Body Example:
	 * {
   "SheetSchemas": [],
   "Name": "",
   "CarrierId": ""
}
	*/
	function updateXlsxschemasCarrier(body, carrierId){
		var apipath = '/api/v1/carrierservices/xlsxschemas/{carrierId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        apipath = apipath.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateXlsxschemasCarrier = updateXlsxschemasCarrier;
	/**
     * @summary Get all XLSX schemas for a given carrier and name.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} carrierId - Carrier ID
	* @param {string} name - Schema name
	*/
	function getXlsxschemasCarrierNameByName(carrierId, name){
		var apipath = '/api/v1/carrierservices/xlsxschemas/{carrierId}/name/{name}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }

        apipath = apipath.replace('{name}', name);

        if(name === undefined && name !== null){
			throw 'Missing required  parameter: name';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getXlsxschemasCarrierNameByName = getXlsxschemasCarrierNameByName;
	/**
     * @summary Deletes a XLSX schema for a carrier.
	 * @description 
	 * @memberOf CarrierservicesApi#
	* @param {string} carrierId - Carrier ID
	* @param {string} name - Schema name
	*/
	function deleteXlsxschemasCarrierNameByName(carrierId, name){
		var apipath = '/api/v1/carrierservices/xlsxschemas/{carrierId}/name/{name}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{carrierId}', carrierId);

        if(carrierId === undefined && carrierId !== null){
			throw 'Missing required  parameter: carrierId';
        }

        apipath = apipath.replace('{name}', name);

        if(name === undefined && name !== null){
			throw 'Missing required  parameter: name';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteXlsxschemasCarrierNameByName = deleteXlsxschemasCarrierNameByName;

    return self;
};

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

/**
* @class
* @example
* var api = new ComplianceApi(pureCloudSession);
*/
var ComplianceApi = function (pureCloudSession) {
	/**
     * @summary Get information about HIPAA compliance
	 * @description 
	 * @memberOf ComplianceApi#
	*/
	function getHipaa(){
		var apipath = '/api/v1/compliance/hipaa';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getHipaa = getHipaa;
	/**
     * @summary Update HIPAA compliance options
	 * @description 
	 * @memberOf ComplianceApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "enableIdleTokenTimeout": true,
   "selfUri": ""
}
	*/
	function updateHipaa(body){
		var apipath = '/api/v1/compliance/hipaa';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateHipaa = updateHipaa;

    return self;
};

/**
* @class
* @example
* var api = new ConfigurationApi(pureCloudSession);
*/
var ConfigurationApi = function (pureCloudSession) {
	/**
     * @summary Validates a street address
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "address": {
      "id": "",
      "name": "",
      "street": "",
      "city": "",
      "countryName": "",
      "stateName": "",
      "postalCode": "",
      "selfUri": ""
   }
}
	*/
	function createAddressvalidation(body){
		var apipath = '/api/v1/configuration/addressvalidation';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createAddressvalidation = createAddressvalidation;
	/**
     * @summary Get a listing of DID Pools
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	*/
	function getDidpools(pageSize, pageNumber, sortBy){
		var apipath = '/api/v1/configuration/didpools';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDidpools = getDidpools;
	/**
     * @summary Create a new DID pool
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "provider": "",
   "selfUri": ""
}
	*/
	function createDidpools(body){
		var apipath = '/api/v1/configuration/didpools';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createDidpools = createDidpools;
	/**
     * @summary Get a DID Pool by ID.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} didPoolId - DID pool ID
	*/
	function getDidpoolsDPoolId(didPoolId){
		var apipath = '/api/v1/configuration/didpools/{didPoolId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{didPoolId}', didPoolId);

        if(didPoolId === undefined && didPoolId !== null){
			throw 'Missing required  parameter: didPoolId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDidpoolsDPoolId = getDidpoolsDPoolId;
	/**
     * @summary Update a DID Pool by ID.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} didPoolId - DID pool ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "provider": "",
   "selfUri": ""
}
	*/
	function updateDidpoolsDPoolId(didPoolId, body){
		var apipath = '/api/v1/configuration/didpools/{didPoolId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{didPoolId}', didPoolId);

        if(didPoolId === undefined && didPoolId !== null){
			throw 'Missing required  parameter: didPoolId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateDidpoolsDPoolId = updateDidpoolsDPoolId;
	/**
     * @summary Delete a DID Pool by ID.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} didPoolId - DID pool ID
	*/
	function deleteDidpoolsDPoolId(didPoolId){
		var apipath = '/api/v1/configuration/didpools/{didPoolId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{didPoolId}', didPoolId);

        if(didPoolId === undefined && didPoolId !== null){
			throw 'Missing required  parameter: didPoolId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteDidpoolsDPoolId = deleteDidpoolsDPoolId;
	/**
     * @summary Get a listing of DIDs
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	* @param {string} phoneNumber - Filter by phoneNumber
	*/
	function getDids(pageSize, pageNumber, sortBy, sortOrder, phoneNumber){
		var apipath = '/api/v1/configuration/dids';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		if(phoneNumber !== undefined && phoneNumber !== null){
			queryParameters.phoneNumber = phoneNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDids = getDids;
	/**
     * @summary Get a DID by ID.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} didId - DID ID
	*/
	function getDId(didId){
		var apipath = '/api/v1/configuration/dids/{didId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{didId}', didId);

        if(didId === undefined && didId !== null){
			throw 'Missing required  parameter: didId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDId = getDId;
	/**
     * @summary Update a DID by ID.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} didId - DID ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "ownerType": "",
   "selfUri": ""
}
	*/
	function updateDId(didId, body){
		var apipath = '/api/v1/configuration/dids/{didId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{didId}', didId);

        if(didId === undefined && didId !== null){
			throw 'Missing required  parameter: didId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateDId = updateDId;
	/**
     * @summary Get the list of edge groups.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} name - Name
	* @param {string} sortBy - Sort by
	*/
	function getEdgegroups(pageSize, pageNumber, name, sortBy){
		var apipath = '/api/v1/configuration/edgegroups';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEdgegroups = getEdgegroups;
	/**
     * @summary Create an edge group.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {} body - EdgeGroup
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "selfUri": ""
}
	*/
	function createEdgegroups(body){
		var apipath = '/api/v1/configuration/edgegroups';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createEdgegroups = createEdgegroups;
	/**
     * @summary Get edge group.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} edgeGroupId - Edge group ID
	*/
	function getEdgeGroup(edgeGroupId){
		var apipath = '/api/v1/configuration/edgegroups/{edgeGroupId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeGroupId}', edgeGroupId);

        if(edgeGroupId === undefined && edgeGroupId !== null){
			throw 'Missing required  parameter: edgeGroupId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEdgeGroup = getEdgeGroup;
	/**
     * @summary Update an edge group.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} edgeGroupId - Edge group ID
	* @param {} body - EdgeGroup
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "selfUri": ""
}
	*/
	function updateEdgeGroup(edgeGroupId, body){
		var apipath = '/api/v1/configuration/edgegroups/{edgeGroupId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeGroupId}', edgeGroupId);

        if(edgeGroupId === undefined && edgeGroupId !== null){
			throw 'Missing required  parameter: edgeGroupId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateEdgeGroup = updateEdgeGroup;
	/**
     * @summary Delete an edge group.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} edgeGroupId - Edge group ID
	*/
	function deleteEdgeGroup(edgeGroupId){
		var apipath = '/api/v1/configuration/edgegroups/{edgeGroupId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeGroupId}', edgeGroupId);

        if(edgeGroupId === undefined && edgeGroupId !== null){
			throw 'Missing required  parameter: edgeGroupId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteEdgeGroup = deleteEdgeGroup;
	/**
     * @summary Get the list of edges.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} name - Name
	* @param {string} siteid - Filter by site.id
	* @param {string} edgeGroupid - Filter by edgeGroup.id
	* @param {string} sortBy - Sort by
	*/
	function getEdges(pageSize, pageNumber, name, siteid, edgeGroupid, sortBy){
		var apipath = '/api/v1/configuration/edges';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(siteid !== undefined && siteid !== null){
			queryParameters.site.id = siteid;
		}


		if(edgeGroupid !== undefined && edgeGroupid !== null){
			queryParameters.edgeGroup.id = edgeGroupid;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEdges = getEdges;
	/**
     * @summary Create a edge.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {} body - Edge
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
      "id": "",
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
      "selfUri": ""
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
   "selfUri": ""
}
	*/
	function createEdges(body){
		var apipath = '/api/v1/configuration/edges';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createEdges = createEdges;
	/**
     * @summary Get the list of certificate authorities.
	 * @description 
	 * @memberOf ConfigurationApi#
	*/
	function getEdgesCertificateauthorities(){
		var apipath = '/api/v1/configuration/edges/certificateauthorities';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEdgesCertificateauthorities = getEdgesCertificateauthorities;
	/**
     * @summary Create a certificate authority.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {} body - CertificateAuthority
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "certificateDetails": [],
   "selfUri": ""
}
	*/
	function createEdgesCertificateauthorities(body){
		var apipath = '/api/v1/configuration/edges/certificateauthorities';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createEdgesCertificateauthorities = createEdgesCertificateauthorities;
	/**
     * @summary Get a certificate authority.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} certificateId - Certificate ID
	*/
	function getEdgesCertificateauthoritiesCertificate(certificateId){
		var apipath = '/api/v1/configuration/edges/certificateauthorities/{certificateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{certificateId}', certificateId);

        if(certificateId === undefined && certificateId !== null){
			throw 'Missing required  parameter: certificateId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEdgesCertificateauthoritiesCertificate = getEdgesCertificateauthoritiesCertificate;
	/**
     * @summary Update a certificate authority.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} certificateId - Certificate ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "certificateDetails": [],
   "selfUri": ""
}
	*/
	function updateEdgesCertificateauthoritiesCertificate(certificateId, body){
		var apipath = '/api/v1/configuration/edges/certificateauthorities/{certificateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{certificateId}', certificateId);

        if(certificateId === undefined && certificateId !== null){
			throw 'Missing required  parameter: certificateId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateEdgesCertificateauthoritiesCertificate = updateEdgesCertificateauthoritiesCertificate;
	/**
     * @summary Delete a certificate authority.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} certificateId - Certificate ID
	*/
	function deleteEdgesCertificateauthoritiesCertificate(certificateId){
		var apipath = '/api/v1/configuration/edges/certificateauthorities/{certificateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{certificateId}', certificateId);

        if(certificateId === undefined && certificateId !== null){
			throw 'Missing required  parameter: certificateId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteEdgesCertificateauthoritiesCertificate = deleteEdgesCertificateauthoritiesCertificate;
	/**
     * @summary Get edge.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	*/
	function getEdge(edgeId){
		var apipath = '/api/v1/configuration/edges/{edgeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEdge = getEdge;
	/**
     * @summary Update a edge.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	* @param {} body - Edge
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
      "id": "",
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
      "selfUri": ""
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
   "selfUri": ""
}
	*/
	function updateEdge(edgeId, body){
		var apipath = '/api/v1/configuration/edges/{edgeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateEdge = updateEdge;
	/**
     * @summary Delete a edge.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	*/
	function deleteEdge(edgeId){
		var apipath = '/api/v1/configuration/edges/{edgeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteEdge = deleteEdge;
	/**
     * @summary Get the list of lines.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getEdgeLines(edgeId, pageSize, pageNumber){
		var apipath = '/api/v1/configuration/edges/{edgeId}/lines';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEdgeLines = getEdgeLines;
	/**
     * @summary Get line
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	* @param {string} lineId - Line ID
	*/
	function getEdgeLinesByLineId(edgeId, lineId){
		var apipath = '/api/v1/configuration/edges/{edgeId}/lines/{lineId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        apipath = apipath.replace('{lineId}', lineId);

        if(lineId === undefined && lineId !== null){
			throw 'Missing required  parameter: lineId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEdgeLinesByLineId = getEdgeLinesByLineId;
	/**
     * @summary Update a line.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	* @param {string} lineId - Line ID
	* @param {} body - Line
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "schema": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "properties": {},
   "edge": {
      "id": "",
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
      "selfUri": ""
   },
   "edgeGroup": {
      "id": "",
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
      "selfUri": ""
   },
   "lineType": "",
   "endpoint": {
      "id": "",
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
      "dids": [],
      "selfUri": ""
   },
   "ipAddress": "",
   "logicalInterfaceId": "",
   "selfUri": ""
}
	*/
	function updateEdgeLinesByLineId(edgeId, lineId, body){
		var apipath = '/api/v1/configuration/edges/{edgeId}/lines/{lineId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        apipath = apipath.replace('{lineId}', lineId);

        if(lineId === undefined && lineId !== null){
			throw 'Missing required  parameter: lineId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateEdgeLinesByLineId = updateEdgeLinesByLineId;
	/**
     * @summary Get edge logical interfaces.
	 * @description Retrieve a list of all configured logical interfaces from a specific edge.
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	*/
	function getEdgeLogicalinterfaces(edgeId){
		var apipath = '/api/v1/configuration/edges/{edgeId}/logicalinterfaces';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEdgeLogicalinterfaces = getEdgeLogicalinterfaces;
	/**
     * @summary Create an edge logical interface.
	 * @description Create
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	* @param {} body - Create
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "selfUri": ""
}
	*/
	function createEdgeLogicalinterfaces(edgeId, body){
		var apipath = '/api/v1/configuration/edges/{edgeId}/logicalinterfaces';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createEdgeLogicalinterfaces = createEdgeLogicalinterfaces;
	/**
     * @summary Get an edge logical interface
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	* @param {string} interfaceId - Interface ID
	*/
	function getEdgeLogicalinterfacesByInterfaceId(edgeId, interfaceId){
		var apipath = '/api/v1/configuration/edges/{edgeId}/logicalinterfaces/{interfaceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        apipath = apipath.replace('{interfaceId}', interfaceId);

        if(interfaceId === undefined && interfaceId !== null){
			throw 'Missing required  parameter: interfaceId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEdgeLogicalinterfacesByInterfaceId = getEdgeLogicalinterfacesByInterfaceId;
	/**
     * @summary Update an edge logical interface.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	* @param {string} interfaceId - Interface ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "selfUri": ""
}
	*/
	function updateEdgeLogicalinterfacesByInterfaceId(edgeId, interfaceId, body){
		var apipath = '/api/v1/configuration/edges/{edgeId}/logicalinterfaces/{interfaceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        apipath = apipath.replace('{interfaceId}', interfaceId);

        if(interfaceId === undefined && interfaceId !== null){
			throw 'Missing required  parameter: interfaceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateEdgeLogicalinterfacesByInterfaceId = updateEdgeLogicalinterfacesByInterfaceId;
	/**
     * @summary Delete an edge logical interface
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	* @param {string} interfaceId - Interface ID
	*/
	function deleteEdgeLogicalinterfacesByInterfaceId(edgeId, interfaceId){
		var apipath = '/api/v1/configuration/edges/{edgeId}/logicalinterfaces/{interfaceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        apipath = apipath.replace('{interfaceId}', interfaceId);

        if(interfaceId === undefined && interfaceId !== null){
			throw 'Missing required  parameter: interfaceId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteEdgeLogicalinterfacesByInterfaceId = deleteEdgeLogicalinterfacesByInterfaceId;
	/**
     * @summary Retrieve a list of all configured physical interfaces from a specific edge.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	*/
	function getEdgePhysicalinterfaces(edgeId){
		var apipath = '/api/v1/configuration/edges/{edgeId}/physicalinterfaces';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEdgePhysicalinterfaces = getEdgePhysicalinterfaces;
	/**
     * @summary Get edge physical interface.
	 * @description Retrieve a physical interface from a specific edge.
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	* @param {string} interfaceId - Interface ID
	*/
	function getEdgePhysicalinterfacesByInterfaceId(edgeId, interfaceId){
		var apipath = '/api/v1/configuration/edges/{edgeId}/physicalinterfaces/{interfaceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        apipath = apipath.replace('{interfaceId}', interfaceId);

        if(interfaceId === undefined && interfaceId !== null){
			throw 'Missing required  parameter: interfaceId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEdgePhysicalinterfacesByInterfaceId = getEdgePhysicalinterfacesByInterfaceId;
	/**
     * @summary Reboot an Edge
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	*/
	function createEdgeReboot(edgeId){
		var apipath = '/api/v1/configuration/edges/{edgeId}/reboot';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createEdgeReboot = createEdgeReboot;
	/**
     * @summary Gets software update status information about any edge.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	*/
	function getEdgeSoftwareupdate(edgeId){
		var apipath = '/api/v1/configuration/edges/{edgeId}/softwareupdate';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEdgeSoftwareupdate = getEdgeSoftwareupdate;
	/**
     * @summary Starts a software update for this edge.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "version": {
      "id": "",
      "name": "",
      "edgeVersion": "",
      "publishDate": "",
      "edgeUri": "",
      "current": true,
      "latestRelease": true,
      "selfUri": ""
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
	function createEdgeSoftwareupdate(edgeId, body){
		var apipath = '/api/v1/configuration/edges/{edgeId}/softwareupdate';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createEdgeSoftwareupdate = createEdgeSoftwareupdate;
	/**
     * @summary Cancels any in-progress update for this edge.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	*/
	function deleteEdgeSoftwareupdate(edgeId){
		var apipath = '/api/v1/configuration/edges/{edgeId}/softwareupdate';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteEdgeSoftwareupdate = deleteEdgeSoftwareupdate;
	/**
     * @summary Gets all the available software versions for this edge.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	*/
	function getEdgeSoftwareversions(edgeId){
		var apipath = '/api/v1/configuration/edges/{edgeId}/softwareversions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEdgeSoftwareversions = getEdgeSoftwareversions;
	/**
     * @summary Unpair an Edge
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge Id
	*/
	function createEdgeUnpair(edgeId){
		var apipath = '/api/v1/configuration/edges/{edgeId}/unpair';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createEdgeUnpair = createEdgeUnpair;
	/**
     * @summary Get the edge version report.
	 * @description The report will not have consistent data about the edge version(s) until all edges have been reset.
	 * @memberOf ConfigurationApi#
	*/
	function getEdgeversionreport(){
		var apipath = '/api/v1/configuration/edgeversionreport';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEdgeversionreport = getEdgeversionreport;
	/**
     * @summary Get endpoints
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} name - Name
	* @param {string} sortBy - Sort by
	*/
	function getEndpoints(pageSize, pageNumber, name, sortBy){
		var apipath = '/api/v1/configuration/endpoints';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEndpoints = getEndpoints;
	/**
     * @summary Create endpoint
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {} body - EndpointTemplate
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "dids": [],
   "selfUri": ""
}
	*/
	function createEndpoints(body){
		var apipath = '/api/v1/configuration/endpoints';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createEndpoints = createEndpoints;
	/**
     * @summary Get endpoint
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} endpointId - Endpoint ID
	*/
	function getEndpoint(endpointId){
		var apipath = '/api/v1/configuration/endpoints/{endpointId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{endpointId}', endpointId);

        if(endpointId === undefined && endpointId !== null){
			throw 'Missing required  parameter: endpointId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEndpoint = getEndpoint;
	/**
     * @summary Update endpoint
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} endpointId - Endpoint ID
	* @param {} body - EndpointTemplate
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "dids": [],
   "selfUri": ""
}
	*/
	function updateEndpoint(endpointId, body){
		var apipath = '/api/v1/configuration/endpoints/{endpointId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{endpointId}', endpointId);

        if(endpointId === undefined && endpointId !== null){
			throw 'Missing required  parameter: endpointId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateEndpoint = updateEndpoint;
	/**
     * @summary Delete endpoint
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} endpointId - Endpoint ID
	*/
	function deleteEndpoint(endpointId){
		var apipath = '/api/v1/configuration/endpoints/{endpointId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{endpointId}', endpointId);

        if(endpointId === undefined && endpointId !== null){
			throw 'Missing required  parameter: endpointId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteEndpoint = deleteEndpoint;
	/**
     * @summary Get a listing of extension pools
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	* @param {string} number - Number
	*/
	function getExtensionpools(pageSize, pageNumber, sortBy, number){
		var apipath = '/api/v1/configuration/extensionpools';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(number !== undefined && number !== null){
			queryParameters.number = number;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getExtensionpools = getExtensionpools;
	/**
     * @summary Create a new extension pool
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {} body - ExtensionPool
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "endNumber": "",
   "selfUri": ""
}
	*/
	function createExtensionpools(body){
		var apipath = '/api/v1/configuration/extensionpools';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createExtensionpools = createExtensionpools;
	/**
     * @summary Get an extension pool by ID
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} extensionPoolId - Extension pool ID
	*/
	function getExtensionPool(extensionPoolId){
		var apipath = '/api/v1/configuration/extensionpools/{extensionPoolId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{extensionPoolId}', extensionPoolId);

        if(extensionPoolId === undefined && extensionPoolId !== null){
			throw 'Missing required  parameter: extensionPoolId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getExtensionPool = getExtensionPool;
	/**
     * @summary Update an extension pool by ID
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} extensionPoolId - Extension pool ID
	* @param {} body - ExtensionPool
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "endNumber": "",
   "selfUri": ""
}
	*/
	function updateExtensionPool(extensionPoolId, body){
		var apipath = '/api/v1/configuration/extensionpools/{extensionPoolId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{extensionPoolId}', extensionPoolId);

        if(extensionPoolId === undefined && extensionPoolId !== null){
			throw 'Missing required  parameter: extensionPoolId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateExtensionPool = updateExtensionPool;
	/**
     * @summary Delete an extension pool by ID
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} extensionPoolId - Extension pool ID
	*/
	function deleteExtensionPool(extensionPoolId){
		var apipath = '/api/v1/configuration/extensionpools/{extensionPoolId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{extensionPoolId}', extensionPoolId);

        if(extensionPoolId === undefined && extensionPoolId !== null){
			throw 'Missing required  parameter: extensionPoolId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteExtensionPool = deleteExtensionPool;
	/**
     * @summary Get a listing of extensions
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	* @param {string} number - Filter by number
	*/
	function getExtensions(pageSize, pageNumber, sortBy, sortOrder, number){
		var apipath = '/api/v1/configuration/extensions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		if(number !== undefined && number !== null){
			queryParameters.number = number;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getExtensions = getExtensions;
	/**
     * @summary Get an extension by ID.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} extensionId - Extension ID
	*/
	function getExtension(extensionId){
		var apipath = '/api/v1/configuration/extensions/{extensionId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{extensionId}', extensionId);

        if(extensionId === undefined && extensionId !== null){
			throw 'Missing required  parameter: extensionId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getExtension = getExtension;
	/**
     * @summary Update an extension by ID.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} extensionId - Extension ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "ownerType": "",
   "selfUri": ""
}
	*/
	function updateExtension(extensionId, body){
		var apipath = '/api/v1/configuration/extensions/{extensionId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{extensionId}', extensionId);

        if(extensionId === undefined && extensionId !== null){
			throw 'Missing required  parameter: extensionId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateExtension = updateExtension;
	/**
     * @summary Get context organization.
	 * @description 
	 * @memberOf ConfigurationApi#
	*/
	function getOrganization(){
		var apipath = '/api/v1/configuration/organization';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOrganization = getOrganization;
	/**
     * @summary Update context organization.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {} body - Organization
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "thirdPartyOrgId": "",
   "thirdPartyOrgName": "",
   "thirdPartyURI": "",
   "adminUsername": "",
   "adminPassword": "",
   "domain": "",
   "version": 0,
   "state": "",
   "defaultSiteId": "",
   "deletable": true,
   "selfUri": ""
}
	*/
	function updateOrganization(body){
		var apipath = '/api/v1/configuration/organization';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateOrganization = updateOrganization;
	/**
     * @summary Create organization.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {} body - Organization
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "adminUsername": "",
   "adminPassword": "",
   "domain": "",
   "thirdPartyOrgName": "",
   "deletable": true
}
	*/
	function createOrganizations(body){
		var apipath = '/api/v1/configuration/organizations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createOrganizations = createOrganizations;
	/**
     * @summary Get organization.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} orgId - Organization ID
	*/
	function getOrganizationsOrg(orgId){
		var apipath = '/api/v1/configuration/organizations/{orgId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{orgId}', orgId);

        if(orgId === undefined && orgId !== null){
			throw 'Missing required  parameter: orgId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOrganizationsOrg = getOrganizationsOrg;
	/**
     * @summary Update organization.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} orgId - Organization ID
	* @param {} body - Organization
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "thirdPartyOrgId": "",
   "thirdPartyOrgName": "",
   "thirdPartyURI": "",
   "adminUsername": "",
   "adminPassword": "",
   "domain": "",
   "version": 0,
   "state": "",
   "defaultSiteId": "",
   "deletable": true,
   "selfUri": ""
}
	*/
	function updateOrganizationsOrg(orgId, body){
		var apipath = '/api/v1/configuration/organizations/{orgId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{orgId}', orgId);

        if(orgId === undefined && orgId !== null){
			throw 'Missing required  parameter: orgId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateOrganizationsOrg = updateOrganizationsOrg;
	/**
     * @summary Delete an organization.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} orgId - Organization ID
	*/
	function deleteOrganizationsOrg(orgId){
		var apipath = '/api/v1/configuration/organizations/{orgId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{orgId}', orgId);

        if(orgId === undefined && orgId !== null){
			throw 'Missing required  parameter: orgId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteOrganizationsOrg = deleteOrganizationsOrg;
	/**
     * @summary Get outbound routes
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} name - Name
	* @param {string} siteid - Filter by site.id
	* @param {string} sortBy - Sort by
	*/
	function getOutboundroutes(pageSize, pageNumber, name, siteid, sortBy){
		var apipath = '/api/v1/configuration/outboundroutes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(siteid !== undefined && siteid !== null){
			queryParameters.site.id = siteid;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOutboundroutes = getOutboundroutes;
	/**
     * @summary Create outbound rule
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {} body - OutboundRoute
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
      "id": "",
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
      "selfUri": ""
   },
   "classificationTypes": [],
   "enabled": true,
   "endpoints": [],
   "distribution": "",
   "selfUri": ""
}
	*/
	function createOutboundroutes(body){
		var apipath = '/api/v1/configuration/outboundroutes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createOutboundroutes = createOutboundroutes;
	/**
     * @summary Get outbound route
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} outboundRouteId - Outbound route ID
	*/
	function getOutboundRoute(outboundRouteId){
		var apipath = '/api/v1/configuration/outboundroutes/{outboundRouteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{outboundRouteId}', outboundRouteId);

        if(outboundRouteId === undefined && outboundRouteId !== null){
			throw 'Missing required  parameter: outboundRouteId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOutboundRoute = getOutboundRoute;
	/**
     * @summary Update outbound route
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} outboundRouteId - Outbound route ID
	* @param {} body - OutboundRoute
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
      "id": "",
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
      "selfUri": ""
   },
   "classificationTypes": [],
   "enabled": true,
   "endpoints": [],
   "distribution": "",
   "selfUri": ""
}
	*/
	function updateOutboundRoute(outboundRouteId, body){
		var apipath = '/api/v1/configuration/outboundroutes/{outboundRouteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{outboundRouteId}', outboundRouteId);

        if(outboundRouteId === undefined && outboundRouteId !== null){
			throw 'Missing required  parameter: outboundRouteId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateOutboundRoute = updateOutboundRoute;
	/**
     * @summary Delete Outbound Route
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} outboundRouteId - Outbound route ID
	*/
	function deleteOutboundRoute(outboundRouteId){
		var apipath = '/api/v1/configuration/outboundroutes/{outboundRouteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{outboundRouteId}', outboundRouteId);

        if(outboundRouteId === undefined && outboundRouteId !== null){
			throw 'Missing required  parameter: outboundRouteId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteOutboundRoute = deleteOutboundRoute;
	/**
     * @summary Get encryption key list
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getRecordingkeys(pageSize, pageNumber){
		var apipath = '/api/v1/configuration/recordingkeys';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRecordingkeys = getRecordingkeys;
	/**
     * @summary Create encryption key
	 * @description 
	 * @memberOf ConfigurationApi#
	*/
	function createRecordingkeys(){
		var apipath = '/api/v1/configuration/recordingkeys';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createRecordingkeys = createRecordingkeys;
	/**
     * @summary Get key rotation schedule
	 * @description 
	 * @memberOf ConfigurationApi#
	*/
	function getRecordingkeysRotationschedule(){
		var apipath = '/api/v1/configuration/recordingkeys/rotationschedule';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRecordingkeysRotationschedule = getRecordingkeysRotationschedule;
	/**
     * @summary Update key rotation schedule
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {} body - KeyRotationSchedule
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "period": "",
   "selfUri": ""
}
	*/
	function updateRecordingkeysRotationschedule(body){
		var apipath = '/api/v1/configuration/recordingkeys/rotationschedule';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateRecordingkeysRotationschedule = updateRecordingkeysRotationschedule;
	/**
     * @summary Gets retention policy list with query options to filter on name and enabled.
	 * @description for a less verbose response, add summary=true to this endpoint
	 * @memberOf ConfigurationApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	* @param {string} name - the policy name - used for filtering results in searches.
	* @param {boolean} enabled - checks to see if policy is enabled - use enabled = true or enabled = false
	* @param {boolean} summary - provides a less verbose response of policy lists.
	* @param {boolean} hasErrors - provides a way to fetch all policies with errors or policies that do not have errors
	*/
	function getRetentionpolicies(pageSize, pageNumber, sortBy, expand, name, enabled, summary, hasErrors){
		var apipath = '/api/v1/configuration/retentionpolicies';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(enabled !== undefined && enabled !== null){
			queryParameters.enabled = enabled;
		}


		if(summary !== undefined && summary !== null){
			queryParameters.summary = summary;
		}


		if(hasErrors !== undefined && hasErrors !== null){
			queryParameters.hasErrors = hasErrors;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRetentionpolicies = getRetentionpolicies;
	/**
     * @summary Create retention policy
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {} body - Policy
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "modifiedDate": "",
   "createdDate": "",
   "order": 0,
   "description": "",
   "enabled": true,
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
      "assignEvaluations": [],
      "assignMeteredEvaluations": [],
      "assignCalibrations": [],
      "retentionDuration": {}
   },
   "policyErrors": {
      "policyErrorMessages": []
   },
   "selfUri": ""
}
	*/
	function createRetentionpolicies(body){
		var apipath = '/api/v1/configuration/retentionpolicies';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createRetentionpolicies = createRetentionpolicies;
	/**
     * @summary Delete policies
	 * @description Bulk delete of Rules from specified rule set, this will only delete the rules that match the ids specified in the query param.
	 * @memberOf ConfigurationApi#
	* @param {string} ids - Bulk delete of Rules from specified rule set, this will only delete the rules that match the ids specified in the query param.
	*/
	function deleteRetentionpolicies(ids){
		var apipath = '/api/v1/configuration/retentionpolicies';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(ids !== undefined && ids !== null){
			queryParameters.ids = ids;
		}

        if(ids === undefined && ids !== null){
			throw 'Missing required  parameter: ids';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteRetentionpolicies = deleteRetentionpolicies;
	/**
     * @summary Get policy
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} policyId - Policy ID
	*/
	function getRetentionpoliciesPolicy(policyId){
		var apipath = '/api/v1/configuration/retentionpolicies/{policyId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{policyId}', policyId);

        if(policyId === undefined && policyId !== null){
			throw 'Missing required  parameter: policyId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRetentionpoliciesPolicy = getRetentionpoliciesPolicy;
	/**
     * @summary Update policy
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} policyId - Policy ID
	* @param {} body - Policy
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "modifiedDate": "",
   "createdDate": "",
   "order": 0,
   "description": "",
   "enabled": true,
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
      "assignEvaluations": [],
      "assignMeteredEvaluations": [],
      "assignCalibrations": [],
      "retentionDuration": {}
   },
   "policyErrors": {
      "policyErrorMessages": []
   },
   "selfUri": ""
}
	*/
	function updateRetentionpoliciesPolicy(policyId, body){
		var apipath = '/api/v1/configuration/retentionpolicies/{policyId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{policyId}', policyId);

        if(policyId === undefined && policyId !== null){
			throw 'Missing required  parameter: policyId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateRetentionpoliciesPolicy = updateRetentionpoliciesPolicy;
	/**
     * @summary Delete policy
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} policyId - Policy ID
	*/
	function deleteRetentionpoliciesPolicy(policyId){
		var apipath = '/api/v1/configuration/retentionpolicies/{policyId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{policyId}', policyId);

        if(policyId === undefined && policyId !== null){
			throw 'Missing required  parameter: policyId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteRetentionpoliciesPolicy = deleteRetentionpoliciesPolicy;
	/**
     * @summary Patch a retention policy
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} policyId - Policy ID
	* @param {} body - Policy
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "modifiedDate": "",
   "createdDate": "",
   "order": 0,
   "description": "",
   "enabled": true,
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
      "assignEvaluations": [],
      "assignMeteredEvaluations": [],
      "assignCalibrations": [],
      "retentionDuration": {}
   },
   "policyErrors": {
      "policyErrorMessages": []
   },
   "selfUri": ""
}
	*/
	function patchRetentionpoliciesPolicy(policyId, body){
		var apipath = '/api/v1/configuration/retentionpolicies/{policyId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{policyId}', policyId);

        if(policyId === undefined && policyId !== null){
			throw 'Missing required  parameter: policyId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchRetentionpoliciesPolicy = patchRetentionpoliciesPolicy;
	/**
     * @summary Lists available schema categories
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getSchemasEdgesVnext(pageSize, pageNumber){
		var apipath = '/api/v1/configuration/schemas/edges/vnext';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchemasEdgesVnext = getSchemasEdgesVnext;
	/**
     * @summary List schemas of a specific category
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} schemaCategory - Schema category
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getSchemasEdgesVnextSchemaCategory(schemaCategory, pageSize, pageNumber){
		var apipath = '/api/v1/configuration/schemas/edges/vnext/{schemaCategory}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{schemaCategory}', schemaCategory);

        if(schemaCategory === undefined && schemaCategory !== null){
			throw 'Missing required  parameter: schemaCategory';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchemasEdgesVnextSchemaCategory = getSchemasEdgesVnextSchemaCategory;
	/**
     * @summary List schemas of a specific category
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} schemaCategory - Schema category
	* @param {string} schemaType - Schema type
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getSchemasEdgesVnextSchemaCategoryBySchemaType(schemaCategory, schemaType, pageSize, pageNumber){
		var apipath = '/api/v1/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{schemaCategory}', schemaCategory);

        if(schemaCategory === undefined && schemaCategory !== null){
			throw 'Missing required  parameter: schemaCategory';
        }

        apipath = apipath.replace('{schemaType}', schemaType);

        if(schemaType === undefined && schemaType !== null){
			throw 'Missing required  parameter: schemaType';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchemasEdgesVnextSchemaCategoryBySchemaType = getSchemasEdgesVnextSchemaCategoryBySchemaType;
	/**
     * @summary Get a json schema
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} schemaCategory - Schema category
	* @param {string} schemaType - Schema type
	* @param {string} schemaId - Schema ID
	*/
	function getSchemasEdgesVnextSchemaCategoryBySchemaTypeBySchemaId(schemaCategory, schemaType, schemaId){
		var apipath = '/api/v1/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}/{schemaId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{schemaCategory}', schemaCategory);

        if(schemaCategory === undefined && schemaCategory !== null){
			throw 'Missing required  parameter: schemaCategory';
        }

        apipath = apipath.replace('{schemaType}', schemaType);

        if(schemaType === undefined && schemaType !== null){
			throw 'Missing required  parameter: schemaType';
        }

        apipath = apipath.replace('{schemaId}', schemaId);

        if(schemaId === undefined && schemaId !== null){
			throw 'Missing required  parameter: schemaId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchemasEdgesVnextSchemaCategoryBySchemaTypeBySchemaId = getSchemasEdgesVnextSchemaCategoryBySchemaTypeBySchemaId;
	/**
     * @summary Get metadata for a schema
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} schemaCategory - Schema category
	* @param {string} schemaType - Schema type
	* @param {string} schemaId - Schema ID
	* @param {string} extension - extension
	* @param {string} metadataId - Metadata ID
	* @param {string} type - Type
	*/
	function getSchemasEdgesVnextSchemaCategoryBySchemaTypeBySchemaIdByExtensionByMetadataId(schemaCategory, schemaType, schemaId, extension, metadataId, type){
		var apipath = '/api/v1/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}/{schemaId}/{extension}/{metadataId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{schemaCategory}', schemaCategory);

        if(schemaCategory === undefined && schemaCategory !== null){
			throw 'Missing required  parameter: schemaCategory';
        }

        apipath = apipath.replace('{schemaType}', schemaType);

        if(schemaType === undefined && schemaType !== null){
			throw 'Missing required  parameter: schemaType';
        }

        apipath = apipath.replace('{schemaId}', schemaId);

        if(schemaId === undefined && schemaId !== null){
			throw 'Missing required  parameter: schemaId';
        }

        apipath = apipath.replace('{extension}', extension);

        if(extension === undefined && extension !== null){
			throw 'Missing required  parameter: extension';
        }

        apipath = apipath.replace('{metadataId}', metadataId);

        if(metadataId === undefined && metadataId !== null){
			throw 'Missing required  parameter: metadataId';
        }


		if(type !== undefined && type !== null){
			queryParameters.type = type;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchemasEdgesVnextSchemaCategoryBySchemaTypeBySchemaIdByExtensionByMetadataId = getSchemasEdgesVnextSchemaCategoryBySchemaTypeBySchemaIdByExtensionByMetadataId;
	/**
     * @summary Get the list of sites.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	* @param {string} name - Name
	* @param {string} locationid - Location Id
	*/
	function getSites(pageSize, pageNumber, sortBy, sortOrder, name, locationid){
		var apipath = '/api/v1/configuration/sites';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(locationid !== undefined && locationid !== null){
			queryParameters.location.id = locationid;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSites = getSites;
	/**
     * @summary Create a endpoint.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {} body - Site
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
      "start": {},
      "end": {}
   },
   "location": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "selfUri": ""
}
	*/
	function createSites(body){
		var apipath = '/api/v1/configuration/sites';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createSites = createSites;
	/**
     * @summary Get endpoint.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} siteId - Site ID
	*/
	function getSite(siteId){
		var apipath = '/api/v1/configuration/sites/{siteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSite = getSite;
	/**
     * @summary Update a endpoint.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} siteId - Site ID
	* @param {} body - Site
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
      "start": {},
      "end": {}
   },
   "location": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "selfUri": ""
}
	*/
	function updateSite(siteId, body){
		var apipath = '/api/v1/configuration/sites/{siteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateSite = updateSite;
	/**
     * @summary Delete an ednpoint
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} siteId - Site ID
	*/
	function deleteSite(siteId){
		var apipath = '/api/v1/configuration/sites/{siteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteSite = deleteSite;
	/**
     * @summary Get the list of Number Plans for this Site.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} siteId - Site ID
	*/
	function getSiteNumberplans(siteId){
		var apipath = '/api/v1/configuration/sites/{siteId}/numberplans';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSiteNumberplans = getSiteNumberplans;
	/**
     * @summary Update the list of Number Plans.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} siteId - Site ID
	* @param {} body - 
	*/
	function updateSiteNumberplans(siteId, body){
		var apipath = '/api/v1/configuration/sites/{siteId}/numberplans';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateSiteNumberplans = updateSiteNumberplans;
	/**
     * @summary Get a list of Classifications for this Site
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} siteId - Site ID
	* @param {string} classification - Classification
	*/
	function getSiteNumberplansClassifications(siteId, classification){
		var apipath = '/api/v1/configuration/sites/{siteId}/numberplans/classifications';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }


		if(classification !== undefined && classification !== null){
			queryParameters.classification = classification;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSiteNumberplansClassifications = getSiteNumberplansClassifications;
	/**
     * @summary Get a Number Plan by ID.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} siteId - Site ID
	* @param {string} numberPlanId - Number Plan ID
	*/
	function getSiteNumberplansByNumberPlanId(siteId, numberPlanId){
		var apipath = '/api/v1/configuration/sites/{siteId}/numberplans/{numberPlanId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }

        apipath = apipath.replace('{numberPlanId}', numberPlanId);

        if(numberPlanId === undefined && numberPlanId !== null){
			throw 'Missing required  parameter: numberPlanId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSiteNumberplansByNumberPlanId = getSiteNumberplansByNumberPlanId;
	/**
     * @summary Triggers the rebalance operation.
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} siteId - Site ID
	*/
	function createSiteRebalance(siteId){
		var apipath = '/api/v1/configuration/sites/{siteId}/rebalance';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createSiteRebalance = createSiteRebalance;
	/**
     * @summary Get a user's voicemail policy
	 * @description 
	 * @memberOf ConfigurationApi#
	* @param {string} userId - User ID
	*/
	function getUservoicemailpoliciesUser(userId){
		var apipath = '/api/v1/configuration/uservoicemailpolicies/{userId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUservoicemailpoliciesUser = getUservoicemailpoliciesUser;
	/**
     * @summary Update a user's voicemail policy
	 * @description 
	 * @memberOf ConfigurationApi#
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
	function patchUservoicemailpoliciesUser(userId, body){
		var apipath = '/api/v1/configuration/uservoicemailpolicies/{userId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchUservoicemailpoliciesUser = patchUservoicemailpoliciesUser;
	/**
     * @summary Get a policy
	 * @description 
	 * @memberOf ConfigurationApi#
	*/
	function getVoicemailpolicy(){
		var apipath = '/api/v1/configuration/voicemailpolicy';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getVoicemailpolicy = getVoicemailpolicy;
	/**
     * @summary Update a policy
	 * @description 
	 * @memberOf ConfigurationApi#
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
	function updateVoicemailpolicy(body){
		var apipath = '/api/v1/configuration/voicemailpolicy';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateVoicemailpolicy = updateVoicemailpolicy;

    return self;
};

/**
* @class
* @example
* var api = new ContentmanagementApi(pureCloudSession);
*/
var ContentmanagementApi = function (pureCloudSession) {
	/**
     * @summary Query audits
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {} body - Allows for a filtered query returning facet information
	 * @example
	 * Body Example:
	 * {
   "queryPhrase": "",
   "pageNumber": 0,
   "pageSize": 0,
   "facetNameRequests": [],
   "sort": [],
   "filters": []
}
	*/
	function createAuditquery(body){
		var apipath = '/api/v1/contentmanagement/auditquery';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createAuditquery = createAuditquery;
	/**
     * @summary Get a list of documents.
	 * @description 
	 * @memberOf ContentmanagementApi#
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
	function getDocuments(workspaceId, name, expand, pageSize, pageNumber, sortBy, sortOrder){
		var apipath = '/api/v1/contentmanagement/documents';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(workspaceId !== undefined && workspaceId !== null){
			queryParameters.workspaceId = workspaceId;
		}

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDocuments = getDocuments;
	/**
     * @summary Add a document.
	 * @description 
	 * @memberOf ContentmanagementApi#
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
   "tagIds": [],
   "attributes": [],
   "attributeGroupInstances": []
}
	*/
	function createDocuments(body, copySource, moveSource, override){
		var apipath = '/api/v1/contentmanagement/documents';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(copySource !== undefined && copySource !== null){
			queryParameters.copySource = copySource;
		}


		if(moveSource !== undefined && moveSource !== null){
			queryParameters.moveSource = moveSource;
		}


		if(override !== undefined && override !== null){
			queryParameters.override = override;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createDocuments = createDocuments;
	/**
     * @summary Get a document.
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {string} documentId - Document ID
	* @param {string} expand - Expand some document fields
	lockInfo,
	acl,
	workspace,
	*/
	function getDocument(documentId, expand){
		var apipath = '/api/v1/contentmanagement/documents/{documentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDocument = getDocument;
	/**
     * @summary Update a document.
	 * @description 
	 * @memberOf ContentmanagementApi#
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
   "updateAttributes": [],
   "removeAttributes": [],
   "addTags": [],
   "removeTags": [],
   "addTagIds": [],
   "removeTagIds": [],
   "addAttributeGroupInstanceIds": [],
   "removeAttributeGroupInstanceIds": []
}
	*/
	function createDocument(documentId, body, expand, override){
		var apipath = '/api/v1/contentmanagement/documents/{documentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(override !== undefined && override !== null){
			queryParameters.override = override;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createDocument = createDocument;
	/**
     * @summary Delete a document.
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {string} documentId - Document ID
	* @param {boolean} override - Override any lock on the document
	*/
	function deleteDocument(documentId, override){
		var apipath = '/api/v1/contentmanagement/documents/{documentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }


		if(override !== undefined && override !== null){
			queryParameters.override = override;
		}


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteDocument = deleteDocument;
	/**
     * @summary Get a list of audits for a document.
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {string} documentId - Document ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} transactionFilter - Transaction filter
	* @param {string} level - level
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	*/
	function getDocumentAudits(documentId, pageSize, pageNumber, transactionFilter, level, sortBy, sortOrder){
		var apipath = '/api/v1/contentmanagement/documents/{documentId}/audits';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(transactionFilter !== undefined && transactionFilter !== null){
			queryParameters.transactionFilter = transactionFilter;
		}


		if(level !== undefined && level !== null){
			queryParameters.level = level;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDocumentAudits = getDocumentAudits;
	/**
     * @summary Download a document.
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {string} documentId - Document ID
	* @param {string} disposition - Request how the content will be downloaded: attached as a file or inline. Default is attachment.
	attachment,
	inline,
	*/
	function getDocumentContent(documentId, disposition){
		var apipath = '/api/v1/contentmanagement/documents/{documentId}/content';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }


		if(disposition !== undefined && disposition !== null){
			queryParameters.disposition = disposition;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDocumentContent = getDocumentContent;
	/**
     * @summary Replace the contents of a document.
	 * @description 
	 * @memberOf ContentmanagementApi#
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
	function createDocumentContent(documentId, body, override){
		var apipath = '/api/v1/contentmanagement/documents/{documentId}/content';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(override !== undefined && override !== null){
			queryParameters.override = override;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createDocumentContent = createDocumentContent;
	/**
     * @summary Query content
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - name or dateCreated
	* @param {string} sortOrder - ascending or descending
	* @param {string} queryPhrase - Phrase tokens are ANDed together over all searchable fields
	* @param {string} expand - Expand some document fields
	acl,
	workspace,
	*/
	function getQuery(pageSize, pageNumber, sortBy, sortOrder, queryPhrase, expand){
		var apipath = '/api/v1/contentmanagement/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		if(queryPhrase !== undefined && queryPhrase !== null){
			queryParameters.queryPhrase = queryPhrase;
		}

        if(queryPhrase === undefined && queryPhrase !== null){
			throw 'Missing required  parameter: queryPhrase';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQuery = getQuery;
	/**
     * @summary Query content
	 * @description 
	 * @memberOf ContentmanagementApi#
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
   "filters": []
}
	*/
	function createQuery(body, expand){
		var apipath = '/api/v1/contentmanagement/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createQuery = createQuery;
	/**
     * @summary Get a List of Security Profiles
	 * @description 
	 * @memberOf ContentmanagementApi#
	*/
	function getSecurityprofiles(){
		var apipath = '/api/v1/contentmanagement/securityprofiles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSecurityprofiles = getSecurityprofiles;
	/**
     * @summary Get a Security Profile
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {string} securityProfileId - Security Profile Id
	*/
	function getSecurityProfile(securityProfileId){
		var apipath = '/api/v1/contentmanagement/securityprofiles/{securityProfileId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{securityProfileId}', securityProfileId);

        if(securityProfileId === undefined && securityProfileId !== null){
			throw 'Missing required  parameter: securityProfileId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSecurityProfile = getSecurityProfile;
	/**
     * @summary Get shared documents. Securely download a shared document.
	 * @description This method requires the download sharing URI obtained in the get document response (downloadSharingUri). Documents may be shared between users in the same workspace. Documents may also be shared between any user by creating a content management share.
	 * @memberOf ContentmanagementApi#
	* @param {string} sharedId - Shared ID
	* @param {boolean} redirect - Turn on or off redirect
	* @param {string} disposition - Request how the share content will be downloaded: attached as a file or inline. Default is attachment.
	attachment,
	inline,
	none,
	* @param {string} expand - Expand some document fields
	document.acl,
	*/
	function getSharedShared(sharedId, redirect, disposition, expand){
		var apipath = '/api/v1/contentmanagement/shared/{sharedId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sharedId}', sharedId);

        if(sharedId === undefined && sharedId !== null){
			throw 'Missing required  parameter: sharedId';
        }


		if(redirect !== undefined && redirect !== null){
			queryParameters.redirect = redirect;
		}


		if(disposition !== undefined && disposition !== null){
			queryParameters.disposition = disposition;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSharedShared = getSharedShared;
	/**
     * @summary Gets a list of shares.  You must specify at least one filter (e.g. entityId).
	 * @description Failing to specify a filter will return 400.
	 * @memberOf ContentmanagementApi#
	* @param {string} entityId - Filters the shares returned to only the entity specified by the value of this parameter.
	* @param {string} expand - Expand share fields
	member,
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getShares(entityId, expand, pageSize, pageNumber){
		var apipath = '/api/v1/contentmanagement/shares';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(entityId !== undefined && entityId !== null){
			queryParameters.entityId = entityId;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getShares = getShares;
	/**
     * @summary Creates a new share or updates an existing share if the entity has already been shared
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {} body - CreateShareRequest - entity id and type and a single member or list of members are required
	 * @example
	 * Body Example:
	 * {
   "sharedEntityType": "",
   "sharedEntity": {
      "kind": "",
      "id": "",
      "name": ""
   },
   "memberType": "",
   "member": {
      "kind": "",
      "id": "",
      "name": ""
   },
   "members": []
}
	*/
	function createShares(body){
		var apipath = '/api/v1/contentmanagement/shares';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createShares = createShares;
	/**
     * @summary Retrieve details about an existing share.
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {string} shareId - Share ID
	* @param {string} expand - Expand share fields
	member,
	*/
	function getShare(shareId, expand){
		var apipath = '/api/v1/contentmanagement/shares/{shareId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{shareId}', shareId);

        if(shareId === undefined && shareId !== null){
			throw 'Missing required  parameter: shareId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getShare = getShare;
	/**
     * @summary Deletes an existing share.
	 * @description This revokes sharing rights specified in the share record
	 * @memberOf ContentmanagementApi#
	* @param {string} shareId - Share ID
	*/
	function deleteShare(shareId){
		var apipath = '/api/v1/contentmanagement/shares/{shareId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{shareId}', shareId);

        if(shareId === undefined && shareId !== null){
			throw 'Missing required  parameter: shareId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteShare = deleteShare;
	/**
     * @summary Get a list of statuses for pending operations
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getStatus(pageSize, pageNumber){
		var apipath = '/api/v1/contentmanagement/status';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getStatus = getStatus;
	/**
     * @summary Get a status.
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {string} statusId - Status ID
	*/
	function getStatusStatus(statusId){
		var apipath = '/api/v1/contentmanagement/status/{statusId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{statusId}', statusId);

        if(statusId === undefined && statusId !== null){
			throw 'Missing required  parameter: statusId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getStatusStatus = getStatusStatus;
	/**
     * @summary Cancel the command for this status
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {string} statusId - Status ID
	*/
	function deleteStatusStatus(statusId){
		var apipath = '/api/v1/contentmanagement/status/{statusId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{statusId}', statusId);

        if(statusId === undefined && statusId !== null){
			throw 'Missing required  parameter: statusId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteStatusStatus = deleteStatusStatus;
	/**
     * @summary Get a list of workspaces.
	 * @description Specifying 'content' access will return all workspaces the user has document access to, while 'admin' access will return all group workspaces the user has administrative rights to.
	 * @memberOf ContentmanagementApi#
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
	function getWorkspaces(pageSize, pageNumber, access, expand){
		var apipath = '/api/v1/contentmanagement/workspaces';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(access !== undefined && access !== null){
			queryParameters.access = access;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWorkspaces = getWorkspaces;
	/**
     * @summary Create a group workspace
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {} body - Workspace
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "bucket": ""
}
	*/
	function createWorkspaces(body){
		var apipath = '/api/v1/contentmanagement/workspaces';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createWorkspaces = createWorkspaces;
	/**
     * @summary Get a workspace.
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} expand - Expand some workspace fields
	summary,
	acl,
	*/
	function getWorkspace(workspaceId, expand){
		var apipath = '/api/v1/contentmanagement/workspaces/{workspaceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWorkspace = getWorkspace;
	/**
     * @summary Update a workspace
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {} body - Workspace
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
      "totalDocumentCount": 0
   },
   "acl": [],
   "selfUri": ""
}
	*/
	function updateWorkspace(workspaceId, body){
		var apipath = '/api/v1/contentmanagement/workspaces/{workspaceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateWorkspace = updateWorkspace;
	/**
     * @summary Delete a workspace
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} moveChildrenToWorkspaceId - New location for objects in deleted workspace.
	*/
	function deleteWorkspace(workspaceId, moveChildrenToWorkspaceId){
		var apipath = '/api/v1/contentmanagement/workspaces/{workspaceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }


		if(moveChildrenToWorkspaceId !== undefined && moveChildrenToWorkspaceId !== null){
			queryParameters.moveChildrenToWorkspaceId = moveChildrenToWorkspaceId;
		}


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteWorkspace = deleteWorkspace;
	/**
     * @summary Get a list of workspace attributes
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getWorkspaceAttributes(workspaceId, pageSize, pageNumber){
		var apipath = '/api/v1/contentmanagement/workspaces/{workspaceId}/attributes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWorkspaceAttributes = getWorkspaceAttributes;
	/**
     * @summary Create a workspace attribute
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {} body - workspaceAttribute
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "type": "",
   "restrictions": {
      "date": {},
      "number": {},
      "string": {},
      "list": {}
   },
   "format": "",
   "multipleValues": true,
   "inUse": true,
   "memberAttributes": [],
   "selfUri": ""
}
	*/
	function createWorkspaceAttributes(workspaceId, body){
		var apipath = '/api/v1/contentmanagement/workspaces/{workspaceId}/attributes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createWorkspaceAttributes = createWorkspaceAttributes;
	/**
     * @summary Get a workspace attribute
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} attributeId - Attribute ID
	*/
	function getWorkspaceAttributesByAttributeId(workspaceId, attributeId){
		var apipath = '/api/v1/contentmanagement/workspaces/{workspaceId}/attributes/{attributeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        apipath = apipath.replace('{attributeId}', attributeId);

        if(attributeId === undefined && attributeId !== null){
			throw 'Missing required  parameter: attributeId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWorkspaceAttributesByAttributeId = getWorkspaceAttributesByAttributeId;
	/**
     * @summary Update a workspace attribute
	 * @description Attribute value will be updated in all documents.
	 * @memberOf ContentmanagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} attributeId - Attribute ID
	* @param {} body - Workspace
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "type": "",
   "restrictions": {
      "date": {},
      "number": {},
      "string": {},
      "list": {}
   },
   "format": "",
   "multipleValues": true,
   "inUse": true,
   "memberAttributes": [],
   "selfUri": ""
}
	*/
	function updateWorkspaceAttributesByAttributeId(workspaceId, attributeId, body){
		var apipath = '/api/v1/contentmanagement/workspaces/{workspaceId}/attributes/{attributeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        apipath = apipath.replace('{attributeId}', attributeId);

        if(attributeId === undefined && attributeId !== null){
			throw 'Missing required  parameter: attributeId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateWorkspaceAttributesByAttributeId = updateWorkspaceAttributesByAttributeId;
	/**
     * @summary Delete an attribute from a workspace
	 * @description Attribute will be removed from all documents.
	 * @memberOf ContentmanagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} attributeId - Attribute ID
	*/
	function deleteWorkspaceAttributesByAttributeId(workspaceId, attributeId){
		var apipath = '/api/v1/contentmanagement/workspaces/{workspaceId}/attributes/{attributeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        apipath = apipath.replace('{attributeId}', attributeId);

        if(attributeId === undefined && attributeId !== null){
			throw 'Missing required  parameter: attributeId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteWorkspaceAttributesByAttributeId = deleteWorkspaceAttributesByAttributeId;
	/**
     * @summary Create atrribute group instance
	 * @description Create a workspace attribute group instance. A group instance represents an ordered collection of attribute values that can be associated with documents. An instance is uniquely defined by an attribute group and the attribute values that make it up. Once created, the new instance will be assigned an instance ID that can be used in further API operations. A group instance value can be assigned to one or more workspace documents.
	 * @memberOf ContentmanagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} attributeId - Attribute ID
	* @param {} body - instance
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "members": [],
   "workspace": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "attribute": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "selfUri": ""
}
	*/
	function createWorkspaceAttributesByAttributeIdInstances(workspaceId, attributeId, body){
		var apipath = '/api/v1/contentmanagement/workspaces/{workspaceId}/attributes/{attributeId}/instances';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        apipath = apipath.replace('{attributeId}', attributeId);

        if(attributeId === undefined && attributeId !== null){
			throw 'Missing required  parameter: attributeId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createWorkspaceAttributesByAttributeIdInstances = createWorkspaceAttributesByAttributeIdInstances;
	/**
     * @summary Query attribute group instances
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} attributeId - Attribute ID
	* @param {} body - Provides a way to query or locate specific attribute group instances. The query request provides the ability to broadly match all instances or filter the results based on matching specific fields defined by the attribute group.
	 * @example
	 * Body Example:
	 * {
   "pageNumber": 0,
   "pageSize": 0,
   "sort": [],
   "members": []
}
	*/
	function createWorkspaceAttributesByAttributeIdInstancesQuery(workspaceId, attributeId, body){
		var apipath = '/api/v1/contentmanagement/workspaces/{workspaceId}/attributes/{attributeId}/instances/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        apipath = apipath.replace('{attributeId}', attributeId);

        if(attributeId === undefined && attributeId !== null){
			throw 'Missing required  parameter: attributeId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createWorkspaceAttributesByAttributeIdInstancesQuery = createWorkspaceAttributesByAttributeIdInstancesQuery;
	/**
     * @summary Get an attribute group instance
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} attributeId - Attribute ID
	* @param {string} instanceId - Instance ID
	*/
	function getWorkspaceAttributesByAttributeIdInstancesByInstanceId(workspaceId, attributeId, instanceId){
		var apipath = '/api/v1/contentmanagement/workspaces/{workspaceId}/attributes/{attributeId}/instances/{instanceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        apipath = apipath.replace('{attributeId}', attributeId);

        if(attributeId === undefined && attributeId !== null){
			throw 'Missing required  parameter: attributeId';
        }

        apipath = apipath.replace('{instanceId}', instanceId);

        if(instanceId === undefined && instanceId !== null){
			throw 'Missing required  parameter: instanceId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWorkspaceAttributesByAttributeIdInstancesByInstanceId = getWorkspaceAttributesByAttributeIdInstancesByInstanceId;
	/**
     * @summary Update an attribute group instance
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} attributeId - Attribute ID
	* @param {string} instanceId - Instance ID
	* @param {} body - Workspace
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "members": [],
   "workspace": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "attribute": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "selfUri": ""
}
	*/
	function updateWorkspaceAttributesByAttributeIdInstancesByInstanceId(workspaceId, attributeId, instanceId, body){
		var apipath = '/api/v1/contentmanagement/workspaces/{workspaceId}/attributes/{attributeId}/instances/{instanceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        apipath = apipath.replace('{attributeId}', attributeId);

        if(attributeId === undefined && attributeId !== null){
			throw 'Missing required  parameter: attributeId';
        }

        apipath = apipath.replace('{instanceId}', instanceId);

        if(instanceId === undefined && instanceId !== null){
			throw 'Missing required  parameter: instanceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateWorkspaceAttributesByAttributeIdInstancesByInstanceId = updateWorkspaceAttributesByAttributeIdInstancesByInstanceId;
	/**
     * @summary Delete an instance from a workspace. The instance will be removed from all documents.
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} attributeId - Attribute ID
	* @param {string} instanceId - Instance ID
	*/
	function deleteWorkspaceAttributesByAttributeIdInstancesByInstanceId(workspaceId, attributeId, instanceId){
		var apipath = '/api/v1/contentmanagement/workspaces/{workspaceId}/attributes/{attributeId}/instances/{instanceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        apipath = apipath.replace('{attributeId}', attributeId);

        if(attributeId === undefined && attributeId !== null){
			throw 'Missing required  parameter: attributeId';
        }

        apipath = apipath.replace('{instanceId}', instanceId);

        if(instanceId === undefined && instanceId !== null){
			throw 'Missing required  parameter: instanceId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteWorkspaceAttributesByAttributeIdInstancesByInstanceId = deleteWorkspaceAttributesByAttributeIdInstancesByInstanceId;
	/**
     * @summary Retrieves a list of changes to documents in a workspace.
	 * @description Only usable on personal workspaces.
	 * @memberOf ContentmanagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {} body - DeltaRequest
	 * @example
	 * Body Example:
	 * {
   "contextToken": ""
}
	*/
	function createWorkspaceDelta(workspaceId, body){
		var apipath = '/api/v1/contentmanagement/workspaces/{workspaceId}/delta';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createWorkspaceDelta = createWorkspaceDelta;
	/**
     * @summary Get a list workspace members
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} expand - Expand workspace member fields
	member,
	*/
	function getWorkspaceMembers(workspaceId, pageSize, pageNumber, expand){
		var apipath = '/api/v1/contentmanagement/workspaces/{workspaceId}/members';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWorkspaceMembers = getWorkspaceMembers;
	/**
     * @summary Get a workspace member
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} memberId - Member ID
	* @param {string} expand - Expand workspace member fields
	member,
	*/
	function getWorkspaceMembersByMemberId(workspaceId, memberId, expand){
		var apipath = '/api/v1/contentmanagement/workspaces/{workspaceId}/members/{memberId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        apipath = apipath.replace('{memberId}', memberId);

        if(memberId === undefined && memberId !== null){
			throw 'Missing required  parameter: memberId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWorkspaceMembersByMemberId = getWorkspaceMembersByMemberId;
	/**
     * @summary Add a member to a workspace
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} memberId - Member ID
	* @param {} body - Workspace
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "group": {
      "id": "",
      "name": "",
      "description": "",
      "memberCount": 0,
      "groupType": "",
      "groupImages": {},
      "groupState": "",
      "selfUri": ""
   },
   "securityProfile": {
      "id": "",
      "name": "",
      "permissions": [],
      "selfUri": ""
   },
   "selfUri": ""
}
	*/
	function updateWorkspaceMembersByMemberId(workspaceId, memberId, body){
		var apipath = '/api/v1/contentmanagement/workspaces/{workspaceId}/members/{memberId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        apipath = apipath.replace('{memberId}', memberId);

        if(memberId === undefined && memberId !== null){
			throw 'Missing required  parameter: memberId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateWorkspaceMembersByMemberId = updateWorkspaceMembersByMemberId;
	/**
     * @summary Delete a member from a workspace
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} memberId - Member ID
	*/
	function deleteWorkspaceMembersByMemberId(workspaceId, memberId){
		var apipath = '/api/v1/contentmanagement/workspaces/{workspaceId}/members/{memberId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        apipath = apipath.replace('{memberId}', memberId);

        if(memberId === undefined && memberId !== null){
			throw 'Missing required  parameter: memberId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteWorkspaceMembersByMemberId = deleteWorkspaceMembersByMemberId;
	/**
     * @summary Get a list of workspace tags
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} value - filter the list of tags returned
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} expand - Expand some document fields
	acl,
	*/
	function getWorkspaceTagvalues(workspaceId, value, pageSize, pageNumber, expand){
		var apipath = '/api/v1/contentmanagement/workspaces/{workspaceId}/tagvalues';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }


		if(value !== undefined && value !== null){
			queryParameters.value = value;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWorkspaceTagvalues = getWorkspaceTagvalues;
	/**
     * @summary Create a workspace tag
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {} body - tag
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "inUse": true,
   "acl": [],
   "selfUri": ""
}
	*/
	function createWorkspaceTagvalues(workspaceId, body){
		var apipath = '/api/v1/contentmanagement/workspaces/{workspaceId}/tagvalues';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createWorkspaceTagvalues = createWorkspaceTagvalues;
	/**
     * @summary Perform a prefix query on tags in the workspace
	 * @description 
	 * @memberOf ContentmanagementApi#
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
	function createWorkspaceTagvaluesQuery(workspaceId, body, expand){
		var apipath = '/api/v1/contentmanagement/workspaces/{workspaceId}/tagvalues/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createWorkspaceTagvaluesQuery = createWorkspaceTagvaluesQuery;
	/**
     * @summary Get a workspace tag
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} tagId - Tag ID
	* @param {string} expand - Expand some document fields
	acl,
	*/
	function getWorkspaceTagvaluesByTagId(workspaceId, tagId, expand){
		var apipath = '/api/v1/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        apipath = apipath.replace('{tagId}', tagId);

        if(tagId === undefined && tagId !== null){
			throw 'Missing required  parameter: tagId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWorkspaceTagvaluesByTagId = getWorkspaceTagvaluesByTagId;
	/**
     * @summary Update a workspace tag. Will update all documents with the new tag value.
	 * @description 
	 * @memberOf ContentmanagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} tagId - Tag ID
	* @param {} body - Workspace
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "inUse": true,
   "acl": [],
   "selfUri": ""
}
	*/
	function updateWorkspaceTagvaluesByTagId(workspaceId, tagId, body){
		var apipath = '/api/v1/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        apipath = apipath.replace('{tagId}', tagId);

        if(tagId === undefined && tagId !== null){
			throw 'Missing required  parameter: tagId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateWorkspaceTagvaluesByTagId = updateWorkspaceTagvaluesByTagId;
	/**
     * @summary Delete workspace tag
	 * @description Delete a tag from a workspace. Will remove this tag from all documents.
	 * @memberOf ContentmanagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} tagId - Tag ID
	*/
	function deleteWorkspaceTagvaluesByTagId(workspaceId, tagId){
		var apipath = '/api/v1/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        apipath = apipath.replace('{tagId}', tagId);

        if(tagId === undefined && tagId !== null){
			throw 'Missing required  parameter: tagId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteWorkspaceTagvaluesByTagId = deleteWorkspaceTagvaluesByTagId;

    return self;
};

/**
* @class
* @example
* var api = new ConversationsApi(pureCloudSession);
*/
var ConversationsApi = function (pureCloudSession) {
	/**
     * @summary Get conversations
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} communicationType - Call or Chat communication filtering
	*/
	function get(communicationType){
		var apipath = '/api/v1/conversations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(communicationType !== undefined && communicationType !== null){
			queryParameters.communicationType = communicationType;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.get = get;
	/**
     * @summary Create conversation
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} call - Phone number to call
	* @param {string} callFrom - Queue id to place the call from
	* @param {string} callQueueId - Queue id to call
	* @param {string} callUserId - User id to call (this will call the default number)
	* @param {integer} priority - Priority level to use for routing when calling a queue
	* @param {string} languageId - Language id to use for routing when calling a queue
	* @param {array} skillIds - Skill ids to use for routing when calling a queue
	* @param {} body - 
	*/
	function create(call, callFrom, callQueueId, callUserId, priority, languageId, skillIds, body){
		var apipath = '/api/v1/conversations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(call !== undefined && call !== null){
			queryParameters.call = call;
		}


		if(callFrom !== undefined && callFrom !== null){
			queryParameters.callFrom = callFrom;
		}


		if(callQueueId !== undefined && callQueueId !== null){
			queryParameters.callQueueId = callQueueId;
		}


		if(callUserId !== undefined && callUserId !== null){
			queryParameters.callUserId = callUserId;
		}


		if(priority !== undefined && priority !== null){
			queryParameters.priority = priority;
		}


		if(languageId !== undefined && languageId !== null){
			queryParameters.languageId = languageId;
		}


		if(skillIds !== undefined && skillIds !== null){
			queryParameters.skillIds = skillIds;
		}

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.create = create;
	/**
     * @summary Get the maximum number of participants that this user can have on a conference
	 * @description 
	 * @memberOf ConversationsApi#
	*/
	function getMaximumconferenceparties(){
		var apipath = '/api/v1/conversations/maximumconferenceparties';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getMaximumconferenceparties = getMaximumconferenceparties;
	/**
     * @summary Query historical conversations
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "pageSize": 0,
   "maximum": 0,
   "filters": [],
   "facets": []
}
	*/
	function createQuery(body){
		var apipath = '/api/v1/conversations/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createQuery = createQuery;
	/**
     * @summary Query historical conversations with a date/time anchor
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} anchor - Anchor
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "pageSize": 0,
   "maximum": 0,
   "filters": [],
   "facets": []
}
	*/
	function createQueryAnchor(anchor, body){
		var apipath = '/api/v1/conversations/query/{anchor}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{anchor}', anchor);

        if(anchor === undefined && anchor !== null){
			throw 'Missing required  parameter: anchor';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createQueryAnchor = createQueryAnchor;
	/**
     * @summary Get conversation
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	*/
	function getConversation(conversationId){
		var apipath = '/api/v1/conversations/{conversationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversation = getConversation;
	/**
     * @summary Update conversation
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {} body - Conversation
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "startTime": "",
   "endTime": "",
   "participants": [],
   "conversationIds": [],
   "maxParticipants": 0,
   "recordingState": "",
   "selfUri": ""
}
	*/
	function updateConversation(conversationId, body){
		var apipath = '/api/v1/conversations/{conversationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateConversation = updateConversation;
	/**
     * @summary Get conversation messages
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	*/
	function getConversationMessages(conversationId){
		var apipath = '/api/v1/conversations/{conversationId}/messages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationMessages = getConversationMessages;
	/**
     * @summary Send an email reply
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {} body - Reply
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "time": "",
   "selfUri": ""
}
	*/
	function createConversationMessages(conversationId, body){
		var apipath = '/api/v1/conversations/{conversationId}/messages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createConversationMessages = createConversationMessages;
	/**
     * @summary Get conversation draft reply
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	*/
	function getConversationMessagesDraft(conversationId){
		var apipath = '/api/v1/conversations/{conversationId}/messages/draft';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationMessagesDraft = getConversationMessagesDraft;
	/**
     * @summary Update conversation draft reply
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {} body - Draft
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "time": "",
   "selfUri": ""
}
	*/
	function updateConversationMessagesDraft(conversationId, body){
		var apipath = '/api/v1/conversations/{conversationId}/messages/draft';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateConversationMessagesDraft = updateConversationMessagesDraft;
	/**
     * @summary Delete attachment from draft
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} attachmentId - attachment ID
	*/
	function deleteConversationMessagesDraftAttachmentsByAttachmentId(conversationId, attachmentId){
		var apipath = '/api/v1/conversations/{conversationId}/messages/draft/attachments/{attachmentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{attachmentId}', attachmentId);

        if(attachmentId === undefined && attachmentId !== null){
			throw 'Missing required  parameter: attachmentId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteConversationMessagesDraftAttachmentsByAttachmentId = deleteConversationMessagesDraftAttachmentsByAttachmentId;
	/**
     * @summary Get conversation message
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} id - message ID
	*/
	function getConversationMessagesById(conversationId, id){
		var apipath = '/api/v1/conversations/{conversationId}/messages/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationMessagesById = getConversationMessagesById;
	/**
     * @summary Add participants to a conversation
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {} body - Conversation
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "startTime": "",
   "endTime": "",
   "participants": [],
   "conversationIds": [],
   "maxParticipants": 0,
   "recordingState": "",
   "selfUri": ""
}
	*/
	function createConversationParticipants(conversationId, body){
		var apipath = '/api/v1/conversations/{conversationId}/participants';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createConversationParticipants = createConversationParticipants;
	/**
     * @summary Update a participant.
	 * @description Specify the state as CONNECTED, DISCONNECTED. You can specify a wrap-up code.
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	* @param {} body - Specify the state as CONNECTED, DISCONNECTED. You can specify a wrap-up code.
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
	function updateConversationParticipantsByParticipantId(conversationId, participantId, body){
		var apipath = '/api/v1/conversations/{conversationId}/participants/{participantId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateConversationParticipantsByParticipantId = updateConversationParticipantsByParticipantId;
	/**
     * @summary Update the attributes on a conversation participant.
	 * @description 
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
	function updateConversationParticipantsByParticipantIdAttributes(conversationId, participantId, body){
		var apipath = '/api/v1/conversations/{conversationId}/participants/{participantId}/attributes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateConversationParticipantsByParticipantIdAttributes = updateConversationParticipantsByParticipantIdAttributes;
	/**
     * @summary Initiate and update consult transfer
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - The object of the transfer
	* @param {} body - Destination address & initial speak to
	 * @example
	 * Body Example:
	 * {
   "speakTo": "",
   "destination": {
      "accountCodeDigits": "",
      "postConnectDigits": "",
      "address": "",
      "name": "",
      "userId": "",
      "queueId": ""
   }
}
	*/
	function createConversationParticipantsByParticipantIdConsult(conversationId, participantId, body){
		var apipath = '/api/v1/conversations/{conversationId}/participants/{participantId}/consult';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createConversationParticipantsByParticipantIdConsult = createConversationParticipantsByParticipantIdConsult;
	/**
     * @summary Change who can speak
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - The object of the transfer
	* @param {} body - new speak to
	 * @example
	 * Body Example:
	 * {
   "speakTo": ""
}
	*/
	function updateConversationParticipantsByParticipantIdConsult(conversationId, participantId, body){
		var apipath = '/api/v1/conversations/{conversationId}/participants/{participantId}/consult';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateConversationParticipantsByParticipantIdConsult = updateConversationParticipantsByParticipantIdConsult;
	/**
     * @summary Cancel the transfer
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - The object of the transfer
	*/
	function deleteConversationParticipantsByParticipantIdConsult(conversationId, participantId){
		var apipath = '/api/v1/conversations/{conversationId}/participants/{participantId}/consult';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteConversationParticipantsByParticipantIdConsult = deleteConversationParticipantsByParticipantIdConsult;
	/**
     * @summary Listen in on the conversation from the point of view of a given participant.
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	*/
	function createConversationParticipantsByParticipantIdMonitor(conversationId, participantId){
		var apipath = '/api/v1/conversations/{conversationId}/participants/{participantId}/monitor';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createConversationParticipantsByParticipantIdMonitor = createConversationParticipantsByParticipantIdMonitor;
	/**
     * @summary Replace this participant with the specified user and/or address
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	* @param {string} userId - The user that will replace this participant.  If address is not supplied then the user's Work address will be used.  This parameter is required when replacing a participant that has an active chat.
	* @param {string} address - The address that will be used to contact the new participant
	* @param {string} username - The username of the person that will replace this participant.  This field is only used if the userId is blank.
	* @param {string} queueId - The id of the queue that will replace this participant.
	* @param {boolean} voicemail - Indicates this participant will be replaced by the voicemail inbox of the participant.
	*/
	function createConversationParticipantsByParticipantIdReplace(conversationId, participantId, userId, address, username, queueId, voicemail){
		var apipath = '/api/v1/conversations/{conversationId}/participants/{participantId}/replace';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		if(userId !== undefined && userId !== null){
			queryParameters.userId = userId;
		}


		if(address !== undefined && address !== null){
			queryParameters.address = address;
		}


		if(username !== undefined && username !== null){
			queryParameters.username = username;
		}


		if(queueId !== undefined && queueId !== null){
			queryParameters.queueId = queueId;
		}


		if(voicemail !== undefined && voicemail !== null){
			queryParameters.voicemail = voicemail;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createConversationParticipantsByParticipantIdReplace = createConversationParticipantsByParticipantIdReplace;
	/**
     * @summary Get the wrap-up for this conversation participant. 
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	* @param {boolean} provisional - Indicates if the wrap-up code is provisional.
	*/
	function getConversationParticipantsByParticipantIdWrapup(conversationId, participantId, provisional){
		var apipath = '/api/v1/conversations/{conversationId}/participants/{participantId}/wrapup';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		if(provisional !== undefined && provisional !== null){
			queryParameters.provisional = provisional;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationParticipantsByParticipantIdWrapup = getConversationParticipantsByParticipantIdWrapup;
	/**
     * @summary Get list of wrapup codes for this conversation participant
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	*/
	function getConversationParticipantsByParticipantIdWrapupcodes(conversationId, participantId){
		var apipath = '/api/v1/conversations/{conversationId}/participants/{participantId}/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationParticipantsByParticipantIdWrapupcodes = getConversationParticipantsByParticipantIdWrapupcodes;
	/**
     * @summary Get all of a Conversation's Recordings.
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - Conversation ID
	* @param {integer} maxWaitMs - The maximum number of milliseconds to wait for the recording to be ready.
	Any integer greater than or equal to 0.,
	* @param {string} formatId - The desired format (WEBM, WAV, etc.)
	WEBM,
	WAV,
	*/
	function getConversationRecordings(conversationId, maxWaitMs, formatId){
		var apipath = '/api/v1/conversations/{conversationId}/recordings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }


		if(maxWaitMs !== undefined && maxWaitMs !== null){
			queryParameters.maxWaitMs = maxWaitMs;
		}


		if(formatId !== undefined && formatId !== null){
			queryParameters.formatId = formatId;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationRecordings = getConversationRecordings;
	/**
     * @summary Gets a specific recording.
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - Conversation ID
	* @param {string} recordingId - Recording ID
	* @param {integer} maxWaitMs - The maximum number of milliseconds to wait for completion.
	Any integer greater than or equal to 0.,
	* @param {string} formatId - The desired format (WEBM, WAV, etc.)
	WEBM,
	WAV,
	* @param {boolean} download - requesting a download format of the recording
	true,
	false,
	* @param {string} fileName - the name of the downloaded fileName
	*/
	function getConversationRecordingsByRecordingId(conversationId, recordingId, maxWaitMs, formatId, download, fileName){
		var apipath = '/api/v1/conversations/{conversationId}/recordings/{recordingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }


		if(maxWaitMs !== undefined && maxWaitMs !== null){
			queryParameters.maxWaitMs = maxWaitMs;
		}


		if(formatId !== undefined && formatId !== null){
			queryParameters.formatId = formatId;
		}


		if(download !== undefined && download !== null){
			queryParameters.download = download;
		}


		if(fileName !== undefined && fileName !== null){
			queryParameters.fileName = fileName;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationRecordingsByRecordingId = getConversationRecordingsByRecordingId;
	/**
     * @summary Sets the restore state on a recording.
	 * @description It is not currently possible to force something into long term storage, so this can only be used to request a restoration. In addition, a restoration takes some time, and so it is not guaranteed to be completed for several hours.
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - Conversation ID
	* @param {string} recordingId - Recording ID
	* @param {} body - recording
	* @param {integer} restoreDays - The number of days the recording will be available before it is re-archived.
	Any integer greater than or equal to 1.,
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "conversationId": "",
   "path": "",
   "startTime": "",
   "endTime": "",
   "media": "",
   "mediaUri": "",
   "waveUri": "",
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
   "recordingId": "",
   "selfUri": ""
}
	*/
	function updateConversationRecordingsByRecordingId(conversationId, recordingId, body, restoreDays){
		var apipath = '/api/v1/conversations/{conversationId}/recordings/{recordingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		if(restoreDays !== undefined && restoreDays !== null){
			queryParameters.restoreDays = restoreDays;
		}


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateConversationRecordingsByRecordingId = updateConversationRecordingsByRecordingId;
	/**
     * @summary Updates the recording retention durations
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - Conversation ID
	* @param {string} recordingId - Recording ID
	* @param {} body - recording
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "conversationId": "",
   "path": "",
   "startTime": "",
   "endTime": "",
   "media": "",
   "mediaUri": "",
   "waveUri": "",
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
   "recordingId": "",
   "selfUri": ""
}
	*/
	function patchConversationRecordingsByRecordingId(conversationId, recordingId, body){
		var apipath = '/api/v1/conversations/{conversationId}/recordings/{recordingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchConversationRecordingsByRecordingId = patchConversationRecordingsByRecordingId;
	/**
     * @summary Get annotations for recording
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - Conversation ID
	* @param {string} recordingId - Recording ID
	*/
	function getConversationRecordingsByRecordingIdAnnotations(conversationId, recordingId){
		var apipath = '/api/v1/conversations/{conversationId}/recordings/{recordingId}/annotations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationRecordingsByRecordingIdAnnotations = getConversationRecordingsByRecordingIdAnnotations;
	/**
     * @summary Create annotation
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - Conversation ID
	* @param {string} recordingId - Recording ID
	* @param {} body - annotation
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "type": "",
   "location": 0,
   "durationMs": 0,
   "user": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "description": "",
   "selfUri": ""
}
	*/
	function createConversationRecordingsByRecordingIdAnnotations(conversationId, recordingId, body){
		var apipath = '/api/v1/conversations/{conversationId}/recordings/{recordingId}/annotations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createConversationRecordingsByRecordingIdAnnotations = createConversationRecordingsByRecordingIdAnnotations;
	/**
     * @summary Get annotation
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - Conversation ID
	* @param {string} recordingId - Recording ID
	* @param {string} annotationId - Annotation ID
	*/
	function getConversationRecordingsByRecordingIdAnnotationsByAnnotationId(conversationId, recordingId, annotationId){
		var apipath = '/api/v1/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }

        apipath = apipath.replace('{annotationId}', annotationId);

        if(annotationId === undefined && annotationId !== null){
			throw 'Missing required  parameter: annotationId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationRecordingsByRecordingIdAnnotationsByAnnotationId = getConversationRecordingsByRecordingIdAnnotationsByAnnotationId;
	/**
     * @summary Update annotation
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - Conversation ID
	* @param {string} recordingId - Recording ID
	* @param {string} annotationId - Annotation ID
	* @param {} body - annotation
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "type": "",
   "location": 0,
   "durationMs": 0,
   "user": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "description": "",
   "selfUri": ""
}
	*/
	function updateConversationRecordingsByRecordingIdAnnotationsByAnnotationId(conversationId, recordingId, annotationId, body){
		var apipath = '/api/v1/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }

        apipath = apipath.replace('{annotationId}', annotationId);

        if(annotationId === undefined && annotationId !== null){
			throw 'Missing required  parameter: annotationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateConversationRecordingsByRecordingIdAnnotationsByAnnotationId = updateConversationRecordingsByRecordingIdAnnotationsByAnnotationId;
	/**
     * @summary Delete annotation
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - Conversation ID
	* @param {string} recordingId - Recording ID
	* @param {string} annotationId - Annotation ID
	*/
	function deleteConversationRecordingsByRecordingIdAnnotationsByAnnotationId(conversationId, recordingId, annotationId){
		var apipath = '/api/v1/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }

        apipath = apipath.replace('{annotationId}', annotationId);

        if(annotationId === undefined && annotationId !== null){
			throw 'Missing required  parameter: annotationId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteConversationRecordingsByRecordingIdAnnotationsByAnnotationId = deleteConversationRecordingsByRecordingIdAnnotationsByAnnotationId;
	/**
     * @summary Get possible tags for Conversation
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	*/
	function getConversationTags(conversationId){
		var apipath = '/api/v1/conversations/{conversationId}/tags';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationTags = getConversationTags;
	/**
     * @summary Get possible wrap-up codes for Conversation
	 * @description 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	*/
	function getConversationWrapupcodes(conversationId){
		var apipath = '/api/v1/conversations/{conversationId}/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationWrapupcodes = getConversationWrapupcodes;

    return self;
};

/**
* @class
* @example
* var api = new DateApi(pureCloudSession);
*/
var DateApi = function (pureCloudSession) {
	/**
     * @summary Get the current system date/time
	 * @description 
	 * @memberOf DateApi#
	*/
	function get(){
		var apipath = '/api/v1/date';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.get = get;

    return self;
};

/**
* @class
* @example
* var api = new DiagnosticsApi(pureCloudSession);
*/
var DiagnosticsApi = function (pureCloudSession) {
	/**
     * @summary Send an email with diagnostic information.
	 * @description 
	 * @memberOf DiagnosticsApi#
	* @param {} body - Diagnostic
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "topic": "",
   "description": "",
   "priority": "",
   "type": "",
   "data": {}
}
	*/
	function create(body){
		var apipath = '/api/v1/diagnostics';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.create = create;
	/**
     * @summary Contact support with diagnostic information.
	 * @description 
	 * @memberOf DiagnosticsApi#
	* @param {} body - Diagnostic
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "topic": "",
   "description": "",
   "priority": "",
   "type": "",
   "data": {}
}
	*/
	function createSupport(body){
		var apipath = '/api/v1/diagnostics/support';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createSupport = createSupport;
	/**
     * @summary Trace messages
	 * @description 
	 * @memberOf DiagnosticsApi#
	* @param {} body - Trace List
	 * @example
	 * Body Example:
	 * {
   "app": {
      "appId": "",
      "appVersion": ""
   },
   "traces": []
}
	*/
	function createTrace(body){
		var apipath = '/api/v1/diagnostics/trace';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createTrace = createTrace;

    return self;
};

/**
* @class
* @example
* var api = new DirectoryApi(pureCloudSession);
*/
var DirectoryApi = function (pureCloudSession) {
	/**
     * @summary Autocomplete proxy
	 * @description 
	 * @memberOf DirectoryApi#
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getDirectoryApiV2Autocomplete(expand){
		var apipath = '/directory/api/v2/autocomplete';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDirectoryApiV2Autocomplete = getDirectoryApiV2Autocomplete;
	/**
     * @summary Bulk get people
	 * @description 
	 * @memberOf DirectoryApi#
	* @param {string} ids - comma separated list of user ids
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getDirectoryApiV2PeopleBulkS(ids, expand){
		var apipath = '/directory/api/v2/people/bulk/{ids}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{ids}', ids);

        if(ids === undefined && ids !== null){
			throw 'Missing required  parameter: ids';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDirectoryApiV2PeopleBulkS = getDirectoryApiV2PeopleBulkS;
	/**
     * @summary Get Person
	 * @description 
	 * @memberOf DirectoryApi#
	* @param {string} id - 
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getDirectoryApiV2PeopleId(id, expand){
		var apipath = '/directory/api/v2/people/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDirectoryApiV2PeopleId = getDirectoryApiV2PeopleId;
	/**
     * @summary Get Person Adjacents
	 * @description 
	 * @memberOf DirectoryApi#
	* @param {string} id - 
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getDirectoryApiV2PeopleIdAdjacents(id, expand){
		var apipath = '/directory/api/v2/people/{id}/adjacents';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDirectoryApiV2PeopleIdAdjacents = getDirectoryApiV2PeopleIdAdjacents;
	/**
     * @summary Get Person Direct Reports
	 * @description 
	 * @memberOf DirectoryApi#
	* @param {string} id - 
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getDirectoryApiV2PeopleIdDirectreports(id, expand){
		var apipath = '/directory/api/v2/people/{id}/directreports';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDirectoryApiV2PeopleIdDirectreports = getDirectoryApiV2PeopleIdDirectreports;
	/**
     * @summary Get Person Favorites
	 * @description 
	 * @memberOf DirectoryApi#
	* @param {string} id - 
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getDirectoryApiV2PeopleIdFavorites(id, expand){
		var apipath = '/directory/api/v2/people/{id}/favorites';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDirectoryApiV2PeopleIdFavorites = getDirectoryApiV2PeopleIdFavorites;
	/**
     * @summary Get Person Recents
	 * @description 
	 * @memberOf DirectoryApi#
	* @param {string} id - 
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getDirectoryApiV2PeopleIdRecents(id, expand){
		var apipath = '/directory/api/v2/people/{id}/recents';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDirectoryApiV2PeopleIdRecents = getDirectoryApiV2PeopleIdRecents;
	/**
     * @summary Get Superiors
	 * @description 
	 * @memberOf DirectoryApi#
	* @param {string} id - 
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getDirectoryApiV2PeopleIdSuperiors(id, expand){
		var apipath = '/directory/api/v2/people/{id}/superiors';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDirectoryApiV2PeopleIdSuperiors = getDirectoryApiV2PeopleIdSuperiors;
	/**
     * @summary Search proxy
	 * @description 
	 * @memberOf DirectoryApi#
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getDirectoryApiV2Search(expand){
		var apipath = '/directory/api/v2/search';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDirectoryApiV2Search = getDirectoryApiV2Search;
	/**
     * @summary Search proxy
	 * @description 
	 * @memberOf DirectoryApi#
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getDirectoryApiV2SearchDirectory(expand){
		var apipath = '/directory/api/v2/search/directory';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDirectoryApiV2SearchDirectory = getDirectoryApiV2SearchDirectory;
	/**
     * @summary Search proxy
	 * @description 
	 * @memberOf DirectoryApi#
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getDirectoryApiV2SearchPeople(expand){
		var apipath = '/directory/api/v2/search/people';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDirectoryApiV2SearchPeople = getDirectoryApiV2SearchPeople;
	/**
     * @summary Suggest proxy
	 * @description 
	 * @memberOf DirectoryApi#
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getDirectoryApiV2Suggest(expand){
		var apipath = '/directory/api/v2/suggest';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDirectoryApiV2Suggest = getDirectoryApiV2Suggest;

    return self;
};

/**
* @class
* @example
* var api = new DownloadsApi(pureCloudSession);
*/
var DownloadsApi = function (pureCloudSession) {
	/**
     * @summary OAuth Callback used during code authorization grant flow.
	 * @description 
	 * @memberOf DownloadsApi#
	* @param {string} code - 
	* @param {string} state - 
	*/
	function getCallback(code, state){
		var apipath = '/api/v1/downloads/callback';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(code !== undefined && code !== null){
			queryParameters.code = code;
		}


		if(state !== undefined && state !== null){
			queryParameters.state = state;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallback = getCallback;
	/**
     * @summary Issues a redirect to a signed secure download URL for specified download
	 * @description this method will issue a redirect to the url to the content
	 * @memberOf DownloadsApi#
	* @param {string} downloadId - Download ID
	* @param {string} contentDisposition - this method will issue a redirect to the url to the content
	*/
	function getDownload(downloadId, contentDisposition){
		var apipath = '/api/v1/downloads/{downloadId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{downloadId}', downloadId);

        if(downloadId === undefined && downloadId !== null){
			throw 'Missing required  parameter: downloadId';
        }


		if(contentDisposition !== undefined && contentDisposition !== null){
			queryParameters.contentDisposition = contentDisposition;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDownload = getDownload;

    return self;
};

/**
* @class
* @example
* var api = new EvaluationsApi(pureCloudSession);
*/
var EvaluationsApi = function (pureCloudSession) {
	/**
     * @summary Get favorite templates
	 * @description 
	 * @memberOf EvaluationsApi#
	*/
	function getFavoritetemplates(){
		var apipath = '/api/v1/evaluations/favoritetemplates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFavoritetemplates = getFavoritetemplates;
	/**
     * @summary Set a favorite template
	 * @description 
	 * @memberOf EvaluationsApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "templateId": ""
}
	*/
	function createFavoritetemplates(body){
		var apipath = '/api/v1/evaluations/favoritetemplates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createFavoritetemplates = createFavoritetemplates;
	/**
     * @summary Unset favority template
	 * @description 
	 * @memberOf EvaluationsApi#
	* @param {string} templateId - 
	*/
	function deleteFavoritetemplatesTemplate(templateId){
		var apipath = '/api/v1/evaluations/favoritetemplates/{templateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{templateId}', templateId);

        if(templateId === undefined && templateId !== null){
			throw 'Missing required  parameter: templateId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteFavoritetemplatesTemplate = deleteFavoritetemplatesTemplate;
	/**
     * @summary Get the list of templates
	 * @description 
	 * @memberOf EvaluationsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} expand - Expand
	* @param {string} tags - Tags
	*/
	function getTemplates(pageSize, pageNumber, expand, tags){
		var apipath = '/api/v1/evaluations/templates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(tags !== undefined && tags !== null){
			queryParameters.tags = tags;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getTemplates = getTemplates;
	/**
     * @summary Create a template.
	 * @description 
	 * @memberOf EvaluationsApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "description": "",
   "createdDate": "",
   "modifiedDate": "",
   "version": 0,
   "level": "",
   "tags": [],
   "data": {},
   "selfUri": ""
}
	*/
	function createTemplates(body){
		var apipath = '/api/v1/evaluations/templates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createTemplates = createTemplates;
	/**
     * @summary Get a composer template
	 * @description 
	 * @memberOf EvaluationsApi#
	* @param {string} templateId - Template ID
	*/
	function getTemplate(templateId){
		var apipath = '/api/v1/evaluations/templates/{templateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{templateId}', templateId);

        if(templateId === undefined && templateId !== null){
			throw 'Missing required  parameter: templateId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getTemplate = getTemplate;
	/**
     * @summary Update a composer template
	 * @description 
	 * @memberOf EvaluationsApi#
	* @param {string} templateId - Template ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "description": "",
   "createdDate": "",
   "modifiedDate": "",
   "version": 0,
   "level": "",
   "tags": [],
   "data": {},
   "selfUri": ""
}
	*/
	function updateTemplate(templateId, body){
		var apipath = '/api/v1/evaluations/templates/{templateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{templateId}', templateId);

        if(templateId === undefined && templateId !== null){
			throw 'Missing required  parameter: templateId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateTemplate = updateTemplate;
	/**
     * @summary Delete a composer template
	 * @description 
	 * @memberOf EvaluationsApi#
	* @param {string} templateId - Template ID
	*/
	function deleteTemplate(templateId){
		var apipath = '/api/v1/evaluations/templates/{templateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{templateId}', templateId);

        if(templateId === undefined && templateId !== null){
			throw 'Missing required  parameter: templateId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteTemplate = deleteTemplate;

    return self;
};

/**
* @class
* @example
* var api = new FaxApi(pureCloudSession);
*/
var FaxApi = function (pureCloudSession) {
	/**
     * @summary Get a list of fax documents.
	 * @description 
	 * @memberOf FaxApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getDocuments(pageSize, pageNumber){
		var apipath = '/api/v1/fax/documents';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDocuments = getDocuments;
	/**
     * @summary Get a document.
	 * @description 
	 * @memberOf FaxApi#
	* @param {string} documentId - Document ID
	*/
	function getDocument(documentId){
		var apipath = '/api/v1/fax/documents/{documentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDocument = getDocument;
	/**
     * @summary Update a fax document.
	 * @description 
	 * @memberOf FaxApi#
	* @param {string} documentId - Document ID
	* @param {} body - Document
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "downloadSharingUri": "",
   "selfUri": ""
}
	*/
	function updateDocument(documentId, body){
		var apipath = '/api/v1/fax/documents/{documentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateDocument = updateDocument;
	/**
     * @summary Delete a fax document.
	 * @description 
	 * @memberOf FaxApi#
	* @param {string} documentId - Document ID
	*/
	function deleteDocument(documentId){
		var apipath = '/api/v1/fax/documents/{documentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteDocument = deleteDocument;
	/**
     * @summary Download a fax document.
	 * @description 
	 * @memberOf FaxApi#
	* @param {string} documentId - Document ID
	*/
	function getDocumentContent(documentId){
		var apipath = '/api/v1/fax/documents/{documentId}/content';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDocumentContent = getDocumentContent;
	/**
     * @summary Get fax summary
	 * @description 
	 * @memberOf FaxApi#
	*/
	function getSummary(){
		var apipath = '/api/v1/fax/summary';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSummary = getSummary;

    return self;
};

/**
* @class
* @example
* var api = new FeaturetogglesApi(pureCloudSession);
*/
var FeaturetogglesApi = function (pureCloudSession) {
	/**
     * @summary Get the features that are enabled or disabled for this user
	 * @description 
	 * @memberOf FeaturetogglesApi#
	* @param {array} feature - The features to query.
	*/
	function getFeaturetoggles(feature){
		var apipath = '/api/v1/featuretoggles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(feature !== undefined && feature !== null){
			queryParameters.feature = feature;
		}

        if(feature === undefined && feature !== null){
			throw 'Missing required  parameter: feature';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFeaturetoggles = getFeaturetoggles;

    return self;
};

/**
* @class
* @example
* var api = new FlowsApi(pureCloudSession);
*/
var FlowsApi = function (pureCloudSession) {
	/**
     * @summary Get a pageable list of flows, filtered by query parameters
	 * @description Multiple IDs can be specified, in which case all matching flows will be returned, and no other parameters will be evaluated.
	 * @memberOf FlowsApi#
	* @param {string} type - Type
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	* @param {array} id - ID
	* @param {string} name - Name
	* @param {string} description - Description
	* @param {string} nameOrDescription - Name or description
	* @param {string} publishVersionId - Publish version ID
	* @param {string} lockedBy - Locked by
	*/
	function get(type, pageNumber, pageSize, sortBy, sortOrder, id, name, description, nameOrDescription, publishVersionId, lockedBy){
		var apipath = '/api/v1/flows';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(type !== undefined && type !== null){
			queryParameters.type = type;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		if(id !== undefined && id !== null){
			queryParameters.id = id;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(description !== undefined && description !== null){
			queryParameters.description = description;
		}


		if(nameOrDescription !== undefined && nameOrDescription !== null){
			queryParameters.nameOrDescription = nameOrDescription;
		}


		if(publishVersionId !== undefined && publishVersionId !== null){
			queryParameters.publishVersionId = publishVersionId;
		}


		if(lockedBy !== undefined && lockedBy !== null){
			queryParameters.lockedBy = lockedBy;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.get = get;
	/**
     * @summary Create flow
	 * @description 
	 * @memberOf FlowsApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "description": "",
   "type": "",
   "lockedUser": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "active": true,
   "deleted": true,
   "publishedVersion": {
      "id": "",
      "name": "",
      "commitVersion": "",
      "configurationVersion": "",
      "type": "",
      "createdBy": {},
      "configurationUri": "",
      "dateCreated": 0,
      "generationId": "",
      "publishResultUri": "",
      "selfUri": ""
   },
   "checkedInVersion": {
      "id": "",
      "name": "",
      "commitVersion": "",
      "configurationVersion": "",
      "type": "",
      "createdBy": {},
      "configurationUri": "",
      "dateCreated": 0,
      "generationId": "",
      "publishResultUri": "",
      "selfUri": ""
   },
   "savedVersion": {
      "id": "",
      "name": "",
      "commitVersion": "",
      "configurationVersion": "",
      "type": "",
      "createdBy": {},
      "configurationUri": "",
      "dateCreated": 0,
      "generationId": "",
      "publishResultUri": "",
      "selfUri": ""
   },
   "system": true,
   "selfUri": ""
}
	*/
	function create(body){
		var apipath = '/api/v1/flows';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.create = create;
	/**
     * @summary Check-in flow
	 * @description 
	 * @memberOf FlowsApi#
	* @param {string} flow - Flow
	*/
	function createActionsCheckin(flow){
		var apipath = '/api/v1/flows/actions/checkin';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(flow !== undefined && flow !== null){
			queryParameters.flow = flow;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createActionsCheckin = createActionsCheckin;
	/**
     * @summary Check-out flow
	 * @description 
	 * @memberOf FlowsApi#
	* @param {string} flow - Flow
	*/
	function createActionsCheckout(flow){
		var apipath = '/api/v1/flows/actions/checkout';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(flow !== undefined && flow !== null){
			queryParameters.flow = flow;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createActionsCheckout = createActionsCheckout;
	/**
     * @summary Deactivate flow
	 * @description 
	 * @memberOf FlowsApi#
	* @param {string} flow - Flow
	*/
	function createActionsDeactivate(flow){
		var apipath = '/api/v1/flows/actions/deactivate';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(flow !== undefined && flow !== null){
			queryParameters.flow = flow;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createActionsDeactivate = createActionsDeactivate;
	/**
     * @summary Debug flow
	 * @description 
	 * @memberOf FlowsApi#
	* @param {string} flow - Flow
	* @param {string} version - 
	*/
	function createActionsDebug(flow, version){
		var apipath = '/api/v1/flows/actions/debug';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(flow !== undefined && flow !== null){
			queryParameters.flow = flow;
		}


		if(version !== undefined && version !== null){
			queryParameters.version = version;
		}

        if(version === undefined && version !== null){
			throw 'Missing required  parameter: version';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createActionsDebug = createActionsDebug;
	/**
     * @summary Publish flow
	 * @description 
	 * @memberOf FlowsApi#
	* @param {string} flow - Flow
	* @param {string} version - version
	*/
	function createActionsPublish(flow, version){
		var apipath = '/api/v1/flows/actions/publish';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(flow !== undefined && flow !== null){
			queryParameters.flow = flow;
		}


		if(version !== undefined && version !== null){
			queryParameters.version = version;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createActionsPublish = createActionsPublish;
	/**
     * @summary Revert flow
	 * @description 
	 * @memberOf FlowsApi#
	* @param {string} flow - Flow
	*/
	function createActionsRevert(flow){
		var apipath = '/api/v1/flows/actions/revert';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(flow !== undefined && flow !== null){
			queryParameters.flow = flow;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createActionsRevert = createActionsRevert;
	/**
     * @summary Get flow.
	 * @description 
	 * @memberOf FlowsApi#
	* @param {string} flowId - Flow ID
	* @param {string} doDeleted - Deleted
	*/
	function getFlow(flowId, doDeleted){
		var apipath = '/api/v1/flows/{flowId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{flowId}', flowId);

        if(flowId === undefined && flowId !== null){
			throw 'Missing required  parameter: flowId';
        }


		if(doDeleted !== undefined && doDeleted !== null){
			queryParameters.deleted = doDeleted;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFlow = getFlow;
	/**
     * @summary Update flow.
	 * @description 
	 * @memberOf FlowsApi#
	* @param {string} flowId - Flow ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "description": "",
   "type": "",
   "lockedUser": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "active": true,
   "deleted": true,
   "publishedVersion": {
      "id": "",
      "name": "",
      "commitVersion": "",
      "configurationVersion": "",
      "type": "",
      "createdBy": {},
      "configurationUri": "",
      "dateCreated": 0,
      "generationId": "",
      "publishResultUri": "",
      "selfUri": ""
   },
   "checkedInVersion": {
      "id": "",
      "name": "",
      "commitVersion": "",
      "configurationVersion": "",
      "type": "",
      "createdBy": {},
      "configurationUri": "",
      "dateCreated": 0,
      "generationId": "",
      "publishResultUri": "",
      "selfUri": ""
   },
   "savedVersion": {
      "id": "",
      "name": "",
      "commitVersion": "",
      "configurationVersion": "",
      "type": "",
      "createdBy": {},
      "configurationUri": "",
      "dateCreated": 0,
      "generationId": "",
      "publishResultUri": "",
      "selfUri": ""
   },
   "system": true,
   "selfUri": ""
}
	*/
	function updateFlow(flowId, body){
		var apipath = '/api/v1/flows/{flowId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{flowId}', flowId);

        if(flowId === undefined && flowId !== null){
			throw 'Missing required  parameter: flowId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateFlow = updateFlow;
	/**
     * @summary Delete flow.
	 * @description 
	 * @memberOf FlowsApi#
	* @param {string} flowId - Flow ID
	*/
	function deleteFlow(flowId){
		var apipath = '/api/v1/flows/{flowId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{flowId}', flowId);

        if(flowId === undefined && flowId !== null){
			throw 'Missing required  parameter: flowId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteFlow = deleteFlow;
	/**
     * @summary Get the latest configuration for flow.
	 * @description 
	 * @memberOf FlowsApi#
	* @param {string} flowId - Flow ID
	* @param {string} doDeleted - Deleted
	*/
	function getFlowLatestconfiguration(flowId, doDeleted){
		var apipath = '/api/v1/flows/{flowId}/latestconfiguration';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{flowId}', flowId);

        if(flowId === undefined && flowId !== null){
			throw 'Missing required  parameter: flowId';
        }


		if(doDeleted !== undefined && doDeleted !== null){
			queryParameters.deleted = doDeleted;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFlowLatestconfiguration = getFlowLatestconfiguration;
	/**
     * @summary Get generation result.
	 * @description 
	 * @memberOf FlowsApi#
	* @param {string} flowId - Flow ID
	* @param {string} id - Publish Result ID
	*/
	function getFlowPublishedresultsById(flowId, id){
		var apipath = '/api/v1/flows/{flowId}/publishedresults/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{flowId}', flowId);

        if(flowId === undefined && flowId !== null){
			throw 'Missing required  parameter: flowId';
        }

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFlowPublishedresultsById = getFlowPublishedresultsById;
	/**
     * @summary Get flow version list
	 * @description 
	 * @memberOf FlowsApi#
	* @param {string} flowId - Flow ID
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} doDeleted - Deleted
	*/
	function getFlowVersions(flowId, pageNumber, pageSize, doDeleted){
		var apipath = '/api/v1/flows/{flowId}/versions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{flowId}', flowId);

        if(flowId === undefined && flowId !== null){
			throw 'Missing required  parameter: flowId';
        }


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(doDeleted !== undefined && doDeleted !== null){
			queryParameters.deleted = doDeleted;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFlowVersions = getFlowVersions;
	/**
     * @summary Create flow version
	 * @description 
	 * @memberOf FlowsApi#
	* @param {string} flowId - Flow ID
	* @param {} body - 
	*/
	function createFlowVersions(flowId, body){
		var apipath = '/api/v1/flows/{flowId}/versions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{flowId}', flowId);

        if(flowId === undefined && flowId !== null){
			throw 'Missing required  parameter: flowId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createFlowVersions = createFlowVersions;
	/**
     * @summary Get flow version
	 * @description 
	 * @memberOf FlowsApi#
	* @param {string} flowId - Flow ID
	* @param {string} versionId - Version ID
	* @param {string} doDeleted - Deleted
	*/
	function getFlowVersionsByVersionId(flowId, versionId, doDeleted){
		var apipath = '/api/v1/flows/{flowId}/versions/{versionId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{flowId}', flowId);

        if(flowId === undefined && flowId !== null){
			throw 'Missing required  parameter: flowId';
        }

        apipath = apipath.replace('{versionId}', versionId);

        if(versionId === undefined && versionId !== null){
			throw 'Missing required  parameter: versionId';
        }


		if(doDeleted !== undefined && doDeleted !== null){
			queryParameters.deleted = doDeleted;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFlowVersionsByVersionId = getFlowVersionsByVersionId;
	/**
     * @summary Create flow version configuration
	 * @description 
	 * @memberOf FlowsApi#
	* @param {string} flowId - Flow ID
	* @param {string} versionId - Version ID
	* @param {string} doDeleted - Deleted
	*/
	function getFlowVersionsByVersionIdConfiguration(flowId, versionId, doDeleted){
		var apipath = '/api/v1/flows/{flowId}/versions/{versionId}/configuration';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{flowId}', flowId);

        if(flowId === undefined && flowId !== null){
			throw 'Missing required  parameter: flowId';
        }

        apipath = apipath.replace('{versionId}', versionId);

        if(versionId === undefined && versionId !== null){
			throw 'Missing required  parameter: versionId';
        }


		if(doDeleted !== undefined && doDeleted !== null){
			queryParameters.deleted = doDeleted;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFlowVersionsByVersionIdConfiguration = getFlowVersionsByVersionIdConfiguration;

    return self;
};

/**
* @class
* @example
* var api = new GreetingsApi(pureCloudSession);
*/
var GreetingsApi = function (pureCloudSession) {
	/**
     * @summary Gets an Organization's Greetings
	 * @description 
	 * @memberOf GreetingsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function get(pageSize, pageNumber){
		var apipath = '/api/v1/greetings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.get = get;
	/**
     * @summary Create a Greeting for an Organization
	 * @description 
	 * @memberOf GreetingsApi#
	* @param {} body - The Greeting to create
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "type": "",
   "ownerType": "",
   "owner": {
      "id": "",
      "name": "",
      "selfUri": ""
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
   "modifiedBy": "",
   "selfUri": ""
}
	*/
	function create(body){
		var apipath = '/api/v1/greetings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.create = create;
	/**
     * @summary Get an Organization's DefaultGreetingList
	 * @description 
	 * @memberOf GreetingsApi#
	*/
	function getDefaults(){
		var apipath = '/api/v1/greetings/defaults';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDefaults = getDefaults;
	/**
     * @summary Update an Organization's DefaultGreetingList
	 * @description 
	 * @memberOf GreetingsApi#
	* @param {} body - The updated defaultGreetingList
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "owner": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "ownerType": "",
   "greetings": {},
   "createdDate": "",
   "createdBy": "",
   "modifiedDate": "",
   "modifiedBy": "",
   "selfUri": ""
}
	*/
	function updateDefaults(body){
		var apipath = '/api/v1/greetings/defaults';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateDefaults = updateDefaults;
	/**
     * @summary Get a Greeting with the given GreetingId
	 * @description 
	 * @memberOf GreetingsApi#
	* @param {string} greetingId - Greeting ID
	*/
	function getGreeting(greetingId){
		var apipath = '/api/v1/greetings/{greetingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{greetingId}', greetingId);

        if(greetingId === undefined && greetingId !== null){
			throw 'Missing required  parameter: greetingId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getGreeting = getGreeting;
	/**
     * @summary Updates the Greeting with the given GreetingId
	 * @description 
	 * @memberOf GreetingsApi#
	* @param {string} greetingId - Greeting ID
	* @param {} body - The updated Greeting
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "type": "",
   "ownerType": "",
   "owner": {
      "id": "",
      "name": "",
      "selfUri": ""
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
   "modifiedBy": "",
   "selfUri": ""
}
	*/
	function updateGreeting(greetingId, body){
		var apipath = '/api/v1/greetings/{greetingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{greetingId}', greetingId);

        if(greetingId === undefined && greetingId !== null){
			throw 'Missing required  parameter: greetingId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateGreeting = updateGreeting;
	/**
     * @summary Deletes a Greeting with the given GreetingId
	 * @description 
	 * @memberOf GreetingsApi#
	* @param {string} greetingId - Greeting ID
	*/
	function deleteGreeting(greetingId){
		var apipath = '/api/v1/greetings/{greetingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{greetingId}', greetingId);

        if(greetingId === undefined && greetingId !== null){
			throw 'Missing required  parameter: greetingId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteGreeting = deleteGreeting;
	/**
     * @summary Get media playback URI for this greeting
	 * @description 
	 * @memberOf GreetingsApi#
	* @param {string} greetingId - Greeting ID
	* @param {string} formatId - The desired format (WAV, etc.)
	WAV,
	*/
	function getGreetingMedia(greetingId, formatId){
		var apipath = '/api/v1/greetings/{greetingId}/media';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{greetingId}', greetingId);

        if(greetingId === undefined && greetingId !== null){
			throw 'Missing required  parameter: greetingId';
        }


		if(formatId !== undefined && formatId !== null){
			queryParameters.formatId = formatId;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getGreetingMedia = getGreetingMedia;

    return self;
};

/**
* @class
* @example
* var api = new GroupsApi(pureCloudSession);
*/
var GroupsApi = function (pureCloudSession) {
	/**
     * @summary Get a group list
	 * @description 
	 * @memberOf GroupsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} name - Name
	*/
	function get(pageSize, pageNumber, name){
		var apipath = '/api/v1/groups';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.get = get;
	/**
     * @summary Get group
	 * @description 
	 * @memberOf GroupsApi#
	* @param {string} groupId - Group ID
	*/
	function getGroup(groupId){
		var apipath = '/api/v1/groups/{groupId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{groupId}', groupId);

        if(groupId === undefined && groupId !== null){
			throw 'Missing required  parameter: groupId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getGroup = getGroup;
	/**
     * @summary Get group members
	 * @description 
	 * @memberOf GroupsApi#
	* @param {string} groupId - Group ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getGroupMembers(groupId, pageSize, pageNumber){
		var apipath = '/api/v1/groups/{groupId}/members';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{groupId}', groupId);

        if(groupId === undefined && groupId !== null){
			throw 'Missing required  parameter: groupId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getGroupMembers = getGroupMembers;

    return self;
};

/**
* @class
* @example
* var api = new HealthApi(pureCloudSession);
*/
var HealthApi = function (pureCloudSession) {
	/**
     * @summary Get health.
	 * @description 
	 * @memberOf HealthApi#
	*/
	function getHealthCheck(){
		var apipath = '/health/check';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getHealthCheck = getHealthCheck;
	/**
     * @summary Health check for one or more backend services
	 * @description 
	 * @memberOf HealthApi#
	* @param {boolean} expand - 
	* @param {string} name - 
	*/
	function getHealthCheckDc5ea213b82940c8ab65b1eb2b583ff7Services(expand, name){
		var apipath = '/health/check/dc5ea213-b829-40c8-ab65-b1eb2b583ff7/services';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getHealthCheckDc5ea213b82940c8ab65b1eb2b583ff7Services = getHealthCheckDc5ea213b82940c8ab65b1eb2b583ff7Services;
	/**
     * @summary Health check for backend service
	 * @description 
	 * @memberOf HealthApi#
	* @param {string} name - 
	*/
	function getHealthCheckDc5ea213b82940c8ab65b1eb2b583ff7ServicesName(name){
		var apipath = '/health/check/dc5ea213-b829-40c8-ab65-b1eb2b583ff7/services/{name}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{name}', name);

        if(name === undefined && name !== null){
			throw 'Missing required  parameter: name';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getHealthCheckDc5ea213b82940c8ab65b1eb2b583ff7ServicesName = getHealthCheckDc5ea213b82940c8ab65b1eb2b583ff7ServicesName;

    return self;
};

/**
* @class
* @example
* var api = new IdentityprovidersApi(pureCloudSession);
*/
var IdentityprovidersApi = function (pureCloudSession) {
	/**
     * @summary The list of identity providers
	 * @description 
	 * @memberOf IdentityprovidersApi#
	*/
	function get(){
		var apipath = '/api/v1/identityproviders';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.get = get;
	/**
     * @summary Get OneLogin Identity Provider
	 * @description 
	 * @memberOf IdentityprovidersApi#
	*/
	function getOnelogin(){
		var apipath = '/api/v1/identityproviders/onelogin';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOnelogin = getOnelogin;
	/**
     * @summary Update/Create OneLogin Identity Provider
	 * @description 
	 * @memberOf IdentityprovidersApi#
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
	*/
	function updateOnelogin(body){
		var apipath = '/api/v1/identityproviders/onelogin';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateOnelogin = updateOnelogin;
	/**
     * @summary Delete OneLogin Identity Provider
	 * @description 
	 * @memberOf IdentityprovidersApi#
	*/
	function deleteOnelogin(){
		var apipath = '/api/v1/identityproviders/onelogin';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteOnelogin = deleteOnelogin;
	/**
     * @summary Get PureCloud Identity Provider
	 * @description 
	 * @memberOf IdentityprovidersApi#
	*/
	function getPurecloud(){
		var apipath = '/api/v1/identityproviders/purecloud';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPurecloud = getPurecloud;
	/**
     * @summary Update/Create PureCloud Identity Provider
	 * @description 
	 * @memberOf IdentityprovidersApi#
	* @param {} body - Provider
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "selfUri": ""
}
	*/
	function updatePurecloud(body){
		var apipath = '/api/v1/identityproviders/purecloud';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updatePurecloud = updatePurecloud;
	/**
     * @summary Delete PureCloud Identity Provider
	 * @description 
	 * @memberOf IdentityprovidersApi#
	*/
	function deletePurecloud(){
		var apipath = '/api/v1/identityproviders/purecloud';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deletePurecloud = deletePurecloud;
	/**
     * @summary Get an identity provider
	 * @description 
	 * @memberOf IdentityprovidersApi#
	*/
	function getProverId(){
		var apipath = '/api/v1/identityproviders/{providerId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProverId = getProverId;
	/**
     * @summary Update an identity provider
	 * @description 
	 * @memberOf IdentityprovidersApi#
	* @param {} body - Provider
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "selfUri": ""
}
	*/
	function updateProverId(body){
		var apipath = '/api/v1/identityproviders/{providerId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateProverId = updateProverId;
	/**
     * @summary Delete an identity provider
	 * @description 
	 * @memberOf IdentityprovidersApi#
	*/
	function deleteProverId(){
		var apipath = '/api/v1/identityproviders/{providerId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteProverId = deleteProverId;

    return self;
};

/**
* @class
* @example
* var api = new LanguagesApi(pureCloudSession);
*/
var LanguagesApi = function (pureCloudSession) {
	/**
     * @summary Get the list of supported languages.
	 * @description 
	 * @memberOf LanguagesApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function get(pageSize, pageNumber){
		var apipath = '/api/v1/languages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.get = get;
	/**
     * @summary Get language
	 * @description 
	 * @memberOf LanguagesApi#
	* @param {string} languageId - Language ID
	*/
	function getLanguage(languageId){
		var apipath = '/api/v1/languages/{languageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{languageId}', languageId);

        if(languageId === undefined && languageId !== null){
			throw 'Missing required  parameter: languageId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getLanguage = getLanguage;

    return self;
};

/**
* @class
* @example
* var api = new LicensingApi(pureCloudSession);
*/
var LicensingApi = function (pureCloudSession) {
	/**
     * @summary Get Licenses required for a set of permissions.
	 * @description 
	 * @memberOf LicensingApi#
	* @param {array} permission - Permission
	*/
	function getLicenses(permission){
		var apipath = '/api/v1/licensing/licenses';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(permission !== undefined && permission !== null){
			queryParameters.permission = permission;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getLicenses = getLicenses;
	/**
     * @summary Get org license assignments.
	 * @description 
	 * @memberOf LicensingApi#
	*/
	function getOrgassignments(){
		var apipath = '/api/v1/licensing/orgassignments';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOrgassignments = getOrgassignments;
	/**
     * @summary Get org license assignment.
	 * @description 
	 * @memberOf LicensingApi#
	* @param {string} id - ID
	*/
	function getOrgassignmentsId(id){
		var apipath = '/api/v1/licensing/orgassignments/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOrgassignmentsId = getOrgassignmentsId;
	/**
     * @summary Get Licenses required per permission.
	 * @description 
	 * @memberOf LicensingApi#
	* @param {array} id - ID
	*/
	function getPermissions(id){
		var apipath = '/api/v1/licensing/permissions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(id !== undefined && id !== null){
			queryParameters.id = id;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPermissions = getPermissions;
	/**
     * @summary Get user license assignments.
	 * @description 
	 * @memberOf LicensingApi#
	*/
	function getUserassignments(){
		var apipath = '/api/v1/licensing/userassignments';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserassignments = getUserassignments;
	/**
     * @summary Get user license assignment.
	 * @description 
	 * @memberOf LicensingApi#
	* @param {string} id - ID
	*/
	function getUserassignmentsId(id){
		var apipath = '/api/v1/licensing/userassignments/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserassignmentsId = getUserassignmentsId;

    return self;
};

/**
* @class
* @example
* var api = new LocationsApi(pureCloudSession);
*/
var LocationsApi = function (pureCloudSession) {
	/**
     * @summary Get the list of locations.
	 * @description 
	 * @memberOf LocationsApi#
	* @param {string} state - Location state
	ACTIVE,
	DELETED,
	* @param {string} name - Location name
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function get(state, name, pageSize, pageNumber){
		var apipath = '/api/v1/locations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(state !== undefined && state !== null){
			queryParameters.state = state;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.get = get;
	/**
     * @summary Get Location by ID.
	 * @description 
	 * @memberOf LocationsApi#
	* @param {string} locationId - Location ID
	*/
	function getLocation(locationId){
		var apipath = '/api/v1/locations/{locationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{locationId}', locationId);

        if(locationId === undefined && locationId !== null){
			throw 'Missing required  parameter: locationId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getLocation = getLocation;

    return self;
};

/**
* @class
* @example
* var api = new NotificationsApi(pureCloudSession);
*/
var NotificationsApi = function (pureCloudSession) {
	/**
     * @summary Get available notification topics.
	 * @description 
	 * @memberOf NotificationsApi#
	*/
	function getAvailabletopics(){
		var apipath = '/api/v1/notifications/availabletopics';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getAvailabletopics = getAvailabletopics;
	/**
     * @summary The list of existing channels
	 * @description 
	 * @memberOf NotificationsApi#
	*/
	function getChannels(){
		var apipath = '/api/v1/notifications/channels';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getChannels = getChannels;
	/**
     * @summary Create a new channel
	 * @description There is a limit of 10 channels. Creating an 11th channel will remove the channel with oldest last used date.
	 * @memberOf NotificationsApi#
	*/
	function createChannels(){
		var apipath = '/api/v1/notifications/channels';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createChannels = createChannels;
	/**
     * @summary The list of all subscriptions for this channel
	 * @description 
	 * @memberOf NotificationsApi#
	* @param {string} channelId - Channel ID
	*/
	function getChannelSubscriptions(channelId){
		var apipath = '/api/v1/notifications/channels/{channelId}/subscriptions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{channelId}', channelId);

        if(channelId === undefined && channelId !== null){
			throw 'Missing required  parameter: channelId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getChannelSubscriptions = getChannelSubscriptions;
	/**
     * @summary Add a list of subscriptions to the existing list of subscriptions
	 * @description 
	 * @memberOf NotificationsApi#
	* @param {string} channelId - Channel ID
	* @param {} body - Topic
	*/
	function createChannelSubscriptions(channelId, body){
		var apipath = '/api/v1/notifications/channels/{channelId}/subscriptions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{channelId}', channelId);

        if(channelId === undefined && channelId !== null){
			throw 'Missing required  parameter: channelId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createChannelSubscriptions = createChannelSubscriptions;
	/**
     * @summary Replace the current list of subscriptions with a new list.
	 * @description 
	 * @memberOf NotificationsApi#
	* @param {string} channelId - Channel ID
	* @param {} body - Topic
	*/
	function updateChannelSubscriptions(channelId, body){
		var apipath = '/api/v1/notifications/channels/{channelId}/subscriptions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{channelId}', channelId);

        if(channelId === undefined && channelId !== null){
			throw 'Missing required  parameter: channelId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateChannelSubscriptions = updateChannelSubscriptions;
	/**
     * @summary Remove all subscriptions
	 * @description 
	 * @memberOf NotificationsApi#
	* @param {string} channelId - Channel ID
	*/
	function deleteChannelSubscriptions(channelId){
		var apipath = '/api/v1/notifications/channels/{channelId}/subscriptions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{channelId}', channelId);

        if(channelId === undefined && channelId !== null){
			throw 'Missing required  parameter: channelId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteChannelSubscriptions = deleteChannelSubscriptions;

    return self;
};

/**
* @class
* @example
* var api = new OauthApi(pureCloudSession);
*/
var OauthApi = function (pureCloudSession) {
	/**
     * @summary The list of OAuth clients
	 * @description 
	 * @memberOf OauthApi#
	*/
	function getClients(){
		var apipath = '/api/v1/oauth/clients';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getClients = getClients;
	/**
     * @summary Create OAuth client
	 * @description The OAuth Grant/Client is required in order to create an authentication token and gain access to PureCloud. 
The preferred authorizedGrantTypes is 'CODE' which requires applications to send a client ID and client secret. This is typically a web server. 
If the client is unable to secure the client secret then the 'TOKEN' grant type aka IMPLICIT should be used. This is would be for browser or mobile apps.
	 * @memberOf OauthApi#
	* @param {} body - Client
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "accessTokenValiditySeconds": 0,
   "authorizedGrantTypes": [],
   "description": "",
   "registeredRedirectUri": [],
   "secret": "",
   "selfUri": ""
}
	*/
	function createClients(body){
		var apipath = '/api/v1/oauth/clients';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createClients = createClients;
	/**
     * @summary Get OAuth Client
	 * @description 
	 * @memberOf OauthApi#
	* @param {string} clientId - Client ID
	*/
	function getClient(clientId){
		var apipath = '/api/v1/oauth/clients/{clientId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{clientId}', clientId);

        if(clientId === undefined && clientId !== null){
			throw 'Missing required  parameter: clientId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getClient = getClient;
	/**
     * @summary Update OAuth Client
	 * @description 
	 * @memberOf OauthApi#
	* @param {string} clientId - Client ID
	* @param {} body - Client
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "accessTokenValiditySeconds": 0,
   "authorizedGrantTypes": [],
   "description": "",
   "registeredRedirectUri": [],
   "secret": "",
   "selfUri": ""
}
	*/
	function updateClient(clientId, body){
		var apipath = '/api/v1/oauth/clients/{clientId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{clientId}', clientId);

        if(clientId === undefined && clientId !== null){
			throw 'Missing required  parameter: clientId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateClient = updateClient;
	/**
     * @summary Delete OAuth Client
	 * @description 
	 * @memberOf OauthApi#
	* @param {string} clientId - Client ID
	*/
	function deleteClient(clientId){
		var apipath = '/api/v1/oauth/clients/{clientId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{clientId}', clientId);

        if(clientId === undefined && clientId !== null){
			throw 'Missing required  parameter: clientId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteClient = deleteClient;
	/**
     * @summary Regenerate Client Secret
	 * @description This operation will set the client secret to a randomly generated cryptographically random value. All clients must be updated with the new secret. This operation should be used with caution.
	 * @memberOf OauthApi#
	* @param {string} clientId - Client ID
	*/
	function createClientSecret(clientId){
		var apipath = '/api/v1/oauth/clients/{clientId}/secret';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{clientId}', clientId);

        if(clientId === undefined && clientId !== null){
			throw 'Missing required  parameter: clientId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createClientSecret = createClientSecret;

    return self;
};

/**
* @class
* @example
* var api = new OrphanrecordingsApi(pureCloudSession);
*/
var OrphanrecordingsApi = function (pureCloudSession) {
	/**
     * @summary Gets all orphan recordings
	 * @description 
	 * @memberOf OrphanrecordingsApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	*/
	function get(pageSize, pageNumber, sortBy, expand){
		var apipath = '/api/v1/orphanrecordings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.get = get;
	/**
     * @summary Gets a single orphan recording
	 * @description 
	 * @memberOf OrphanrecordingsApi#
	* @param {string} orphanId - Orphan ID
	*/
	function getOrphan(orphanId){
		var apipath = '/api/v1/orphanrecordings/{orphanId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{orphanId}', orphanId);

        if(orphanId === undefined && orphanId !== null){
			throw 'Missing required  parameter: orphanId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOrphan = getOrphan;
	/**
     * @summary  deletes a single orphan recording
	 * @description 
	 * @memberOf OrphanrecordingsApi#
	* @param {string} orphanId - Orphan ID
	*/
	function deleteOrphan(orphanId){
		var apipath = '/api/v1/orphanrecordings/{orphanId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{orphanId}', orphanId);

        if(orphanId === undefined && orphanId !== null){
			throw 'Missing required  parameter: orphanId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteOrphan = deleteOrphan;

    return self;
};

/**
* @class
* @example
* var api = new OutboundApi(pureCloudSession);
*/
var OutboundApi = function (pureCloudSession) {
	/**
     * @summary Retrieves audits for dialer.
	 * @description 
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
	function createAudits(body, pageSize, pageNumber, sortBy, sortOrder, facetsOnly){
		var apipath = '/api/v1/outbound/audits';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		if(facetsOnly !== undefined && facetsOnly !== null){
			queryParameters.facetsOnly = facetsOnly;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createAudits = createAudits;
	/**
     * @summary Query callable time set list
	 * @description 
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
	function getCallabletimesets(pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var apipath = '/api/v1/outbound/callabletimesets';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(filterType !== undefined && filterType !== null){
			queryParameters.filterType = filterType;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallabletimesets = getCallabletimesets;
	/**
     * @summary Create callable time set
	 * @description 
	 * @memberOf OutboundApi#
	* @param {} body - DialerCallableTimeSet
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "callableTimes": [],
   "selfUri": ""
}
	*/
	function createCallabletimesets(body){
		var apipath = '/api/v1/outbound/callabletimesets';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createCallabletimesets = createCallabletimesets;
	/**
     * @summary Get callable time set
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} callableTimeSetId - Callable Time Set ID
	*/
	function getCallableTimeSet(callableTimeSetId){
		var apipath = '/api/v1/outbound/callabletimesets/{callableTimeSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callableTimeSetId}', callableTimeSetId);

        if(callableTimeSetId === undefined && callableTimeSetId !== null){
			throw 'Missing required  parameter: callableTimeSetId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallableTimeSet = getCallableTimeSet;
	/**
     * @summary Update callable time set
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} callableTimeSetId - Callable Time Set ID
	* @param {} body - DialerCallableTimeSet
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "callableTimes": [],
   "selfUri": ""
}
	*/
	function updateCallableTimeSet(callableTimeSetId, body){
		var apipath = '/api/v1/outbound/callabletimesets/{callableTimeSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callableTimeSetId}', callableTimeSetId);

        if(callableTimeSetId === undefined && callableTimeSetId !== null){
			throw 'Missing required  parameter: callableTimeSetId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateCallableTimeSet = updateCallableTimeSet;
	/**
     * @summary Delete callable time set
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} callableTimeSetId - Callable Time Set ID
	*/
	function deleteCallableTimeSet(callableTimeSetId){
		var apipath = '/api/v1/outbound/callabletimesets/{callableTimeSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callableTimeSetId}', callableTimeSetId);

        if(callableTimeSetId === undefined && callableTimeSetId !== null){
			throw 'Missing required  parameter: callableTimeSetId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteCallableTimeSet = deleteCallableTimeSet;
	/**
     * @summary Query a list of dialer call analysis response sets.
	 * @description 
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
	function getCallanalysisresponsesets(pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var apipath = '/api/v1/outbound/callanalysisresponsesets';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(filterType !== undefined && filterType !== null){
			queryParameters.filterType = filterType;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallanalysisresponsesets = getCallanalysisresponsesets;
	/**
     * @summary Create a dialer call analysis response set.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {} body - ResponseSet
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "responses": {},
   "selfUri": ""
}
	*/
	function createCallanalysisresponsesets(body){
		var apipath = '/api/v1/outbound/callanalysisresponsesets';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createCallanalysisresponsesets = createCallanalysisresponsesets;
	/**
     * @summary Get a dialer call analysis response set.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} callAnalysisSetId - Call Analysis Response Set ID
	*/
	function getCallanalysisresponsesetsCallAnalysisSet(callAnalysisSetId){
		var apipath = '/api/v1/outbound/callanalysisresponsesets/{callAnalysisSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callAnalysisSetId}', callAnalysisSetId);

        if(callAnalysisSetId === undefined && callAnalysisSetId !== null){
			throw 'Missing required  parameter: callAnalysisSetId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallanalysisresponsesetsCallAnalysisSet = getCallanalysisresponsesetsCallAnalysisSet;
	/**
     * @summary Update a dialer call analysis response set.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} callAnalysisSetId - Call Analysis Response Set ID
	* @param {} body - ResponseSet
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "responses": {},
   "selfUri": ""
}
	*/
	function updateCallanalysisresponsesetsCallAnalysisSet(callAnalysisSetId, body){
		var apipath = '/api/v1/outbound/callanalysisresponsesets/{callAnalysisSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callAnalysisSetId}', callAnalysisSetId);

        if(callAnalysisSetId === undefined && callAnalysisSetId !== null){
			throw 'Missing required  parameter: callAnalysisSetId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateCallanalysisresponsesetsCallAnalysisSet = updateCallanalysisresponsesetsCallAnalysisSet;
	/**
     * @summary Delete a dialer call analysis response set.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} callAnalysisSetId - Call Analysis Response Set ID
	*/
	function deleteCallanalysisresponsesetsCallAnalysisSet(callAnalysisSetId){
		var apipath = '/api/v1/outbound/callanalysisresponsesets/{callAnalysisSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callAnalysisSetId}', callAnalysisSetId);

        if(callAnalysisSetId === undefined && callAnalysisSetId !== null){
			throw 'Missing required  parameter: callAnalysisSetId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteCallanalysisresponsesetsCallAnalysisSet = deleteCallanalysisresponsesetsCallAnalysisSet;
	/**
     * @summary Query a list of dialer campaigns.
	 * @description 
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
	function getCampaigns(pageSize, pageNumber, filterType, name, contactListId, dncListId, distributionQueueId, edgeGroupId, callAnalysisResponseSetId, sortBy, sortOrder){
		var apipath = '/api/v1/outbound/campaigns';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(filterType !== undefined && filterType !== null){
			queryParameters.filterType = filterType;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(contactListId !== undefined && contactListId !== null){
			queryParameters.contactListId = contactListId;
		}


		if(dncListId !== undefined && dncListId !== null){
			queryParameters.dncListId = dncListId;
		}


		if(distributionQueueId !== undefined && distributionQueueId !== null){
			queryParameters.distributionQueueId = distributionQueueId;
		}


		if(edgeGroupId !== undefined && edgeGroupId !== null){
			queryParameters.edgeGroupId = edgeGroupId;
		}


		if(callAnalysisResponseSetId !== undefined && callAnalysisResponseSetId !== null){
			queryParameters.callAnalysisResponseSetId = callAnalysisResponseSetId;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCampaigns = getCampaigns;
	/**
     * @summary Create a campaign.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {} body - Campaign
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
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
   "errors": [],
   "callerName": "",
   "callerAddress": "",
   "outboundLineCount": 0,
   "ruleSets": [],
   "skipPreviewDisabled": true,
   "previewTimeOutSeconds": 0,
   "singleNumberPreview": true,
   "selfUri": ""
}
	*/
	function createCampaigns(body){
		var apipath = '/api/v1/outbound/campaigns';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createCampaigns = createCampaigns;
	/**
     * @summary Get dialer campaign.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function getCampaign(campaignId){
		var apipath = '/api/v1/outbound/campaigns/{campaignId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCampaign = getCampaign;
	/**
     * @summary Update a campaign.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	* @param {} body - Campaign
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
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
   "errors": [],
   "callerName": "",
   "callerAddress": "",
   "outboundLineCount": 0,
   "ruleSets": [],
   "skipPreviewDisabled": true,
   "previewTimeOutSeconds": 0,
   "singleNumberPreview": true,
   "selfUri": ""
}
	*/
	function updateCampaign(campaignId, body){
		var apipath = '/api/v1/outbound/campaigns/{campaignId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateCampaign = updateCampaign;
	/**
     * @summary Delete a campaign.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function deleteCampaign(campaignId){
		var apipath = '/api/v1/outbound/campaigns/{campaignId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteCampaign = deleteCampaign;
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
	function updateCampaignAgentsByUserId(campaignId, userId, body){
		var apipath = '/api/v1/outbound/campaigns/{campaignId}/agents/{userId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateCampaignAgentsByUserId = updateCampaignAgentsByUserId;
	/**
     * @summary Schedule a Callback for a Dialer Campaign
	 * @description 
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
	function createCampaignCallbackSchedule(campaignId, body){
		var apipath = '/api/v1/outbound/campaigns/{campaignId}/callback/schedule';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createCampaignCallbackSchedule = createCampaignCallbackSchedule;
	/**
     * @summary Get campaign diagnostics
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function getCampaignDiagnostics(campaignId){
		var apipath = '/api/v1/outbound/campaigns/{campaignId}/diagnostics';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCampaignDiagnostics = getCampaignDiagnostics;
	/**
     * @summary Get statistics about a Dialer Campaign
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function getCampaignStats(campaignId){
		var apipath = '/api/v1/outbound/campaigns/{campaignId}/stats';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCampaignStats = getCampaignStats;
	/**
     * @summary Query a list of contact lists.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {boolean} importStatus - Import status
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
	function getContactlists(importStatus, includeSize, pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var apipath = '/api/v1/outbound/contactlists';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(importStatus !== undefined && importStatus !== null){
			queryParameters.importStatus = importStatus;
		}


		if(includeSize !== undefined && includeSize !== null){
			queryParameters.includeSize = includeSize;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(filterType !== undefined && filterType !== null){
			queryParameters.filterType = filterType;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContactlists = getContactlists;
	/**
     * @summary Create a contact List.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {} body - ContactList
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "columnNames": [],
   "phoneColumns": [],
   "importStatus": {
      "state": "",
      "totalRecords": 0,
      "completedRecords": 0,
      "percentComplete": 0,
      "failureReason": ""
   },
   "previewModeColumnName": "",
   "previewModeAcceptedValues": [],
   "size": 0,
   "selfUri": ""
}
	*/
	function createContactlists(body){
		var apipath = '/api/v1/outbound/contactlists';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createContactlists = createContactlists;
	/**
     * @summary Get penetration rates for a list of penetration rate identifiers (contact list id and qualifier id)
	 * @description 
	 * @memberOf OutboundApi#
	* @param {} body - PenetrationRateIdentifierList
	*/
	function createContactlistsPenetrationrates(body){
		var apipath = '/api/v1/outbound/contactlists/penetrationrates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createContactlistsPenetrationrates = createContactlistsPenetrationrates;
	/**
     * @summary Get dialer contactList.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	* @param {boolean} importStatus - Import status
	* @param {boolean} includeSize - Include size
	*/
	function getContactList(contactListId, importStatus, includeSize){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }


		if(importStatus !== undefined && importStatus !== null){
			queryParameters.importStatus = importStatus;
		}


		if(includeSize !== undefined && includeSize !== null){
			queryParameters.includeSize = includeSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContactList = getContactList;
	/**
     * @summary Update a contact list.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	* @param {} body - ContactList
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "columnNames": [],
   "phoneColumns": [],
   "importStatus": {
      "state": "",
      "totalRecords": 0,
      "completedRecords": 0,
      "percentComplete": 0,
      "failureReason": ""
   },
   "previewModeColumnName": "",
   "previewModeAcceptedValues": [],
   "size": 0,
   "selfUri": ""
}
	*/
	function updateContactList(contactListId, body){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateContactList = updateContactList;
	/**
     * @summary Delete a contact list.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	*/
	function deleteContactList(contactListId){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteContactList = deleteContactList;
	/**
     * @summary Add contacts to a contact list.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} contactListId - Contact List ID
	* @param {} body - Contact
	* @param {boolean} priority - 
	*/
	function createContactListContacts(contactListId, body, priority){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}/contacts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(priority !== undefined && priority !== null){
			queryParameters.priority = priority;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createContactListContacts = createContactListContacts;
	/**
     * @summary Get dialer contactList.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} contactListId - Contact List ID
	* @param {string} contactId - Contact ID
	*/
	function getContactListContactsByContactId(contactListId, contactId){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}/contacts/{contactId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContactListContactsByContactId = getContactListContactsByContactId;
	/**
     * @summary Update a contact.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} contactListId - Contact List ID
	* @param {string} contactId - Contact ID
	* @param {} body - Contact
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "contactListId": "",
   "data": {
      "nodeType": "",
      "missingNode": true,
      "object": true,
      "pojo": true,
      "number": true,
      "integralNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "float": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "boolean": true,
      "binary": true,
      "floatingPointNumber": true,
      "valueNode": true,
      "containerNode": true,
      "array": true,
      "null": true
   },
   "callRecords": {},
   "callable": true,
   "phoneNumberStatus": {},
   "selfUri": ""
}
	*/
	function updateContactListContactsByContactId(contactListId, contactId, body){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}/contacts/{contactId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateContactListContactsByContactId = updateContactListContactsByContactId;
	/**
     * @summary Delete a contact.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} contactListId - Contact List ID
	* @param {string} contactId - Contact ID
	*/
	function deleteContactListContactsByContactId(contactListId, contactId){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}/contacts/{contactId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteContactListContactsByContactId = deleteContactListContactsByContactId;
	/**
     * @summary Initiate the export of a contact list.
	 * @description Returns 200 if received OK.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	*/
	function createContactListExport(contactListId){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}/export';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createContactListExport = createContactListExport;
	/**
     * @summary Get dialer contactList import status.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	*/
	function getContactListImportstatus(contactListId){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}/importstatus';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContactListImportstatus = getContactListImportstatus;
	/**
     * @summary Get Dialer campaign's penetration rate
	 * @description Get dialer campaign's penetration rate.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	* @param {string} campaignId - Campaign ID
	*/
	function getContactListByCampaignIdPenetrationrate(contactListId, campaignId){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}/{campaignId}/penetrationrate';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContactListByCampaignIdPenetrationrate = getContactListByCampaignIdPenetrationrate;
	/**
     * @summary Add phone numbers to a Dialer DNC list.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} conversationId - Conversation ID
	*/
	function createConversationDnc(conversationId){
		var apipath = '/api/v1/outbound/conversations/{conversationId}/dnc';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createConversationDnc = createConversationDnc;
	/**
     * @summary Query dialer DNC lists
	 * @description 
	 * @memberOf OutboundApi#
	* @param {boolean} importStatus - Import status
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
	function getDnclists(importStatus, includeSize, pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var apipath = '/api/v1/outbound/dnclists';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(importStatus !== undefined && importStatus !== null){
			queryParameters.importStatus = importStatus;
		}


		if(includeSize !== undefined && includeSize !== null){
			queryParameters.includeSize = includeSize;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(filterType !== undefined && filterType !== null){
			queryParameters.filterType = filterType;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDnclists = getDnclists;
	/**
     * @summary Create dialer DNC list
	 * @description 
	 * @memberOf OutboundApi#
	* @param {} body - DncList
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "phoneNumberColumns": [],
   "importStatus": {
      "state": "",
      "totalRecords": 0,
      "completedRecords": 0,
      "percentComplete": 0,
      "failureReason": ""
   },
   "fileKey": "",
   "size": 0,
   "selfUri": ""
}
	*/
	function createDnclists(body){
		var apipath = '/api/v1/outbound/dnclists';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createDnclists = createDnclists;
	/**
     * @summary Get dialer DNC list
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	* @param {boolean} importStatus - Import status
	* @param {boolean} includeSize - Include size
	*/
	function getDncList(dncListId, importStatus, includeSize){
		var apipath = '/api/v1/outbound/dnclists/{dncListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }


		if(importStatus !== undefined && importStatus !== null){
			queryParameters.importStatus = importStatus;
		}


		if(includeSize !== undefined && includeSize !== null){
			queryParameters.includeSize = includeSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDncList = getDncList;
	/**
     * @summary Update dialer DNC list
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	* @param {} body - DncList
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "phoneNumberColumns": [],
   "importStatus": {
      "state": "",
      "totalRecords": 0,
      "completedRecords": 0,
      "percentComplete": 0,
      "failureReason": ""
   },
   "fileKey": "",
   "size": 0,
   "selfUri": ""
}
	*/
	function updateDncList(dncListId, body){
		var apipath = '/api/v1/outbound/dnclists/{dncListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateDncList = updateDncList;
	/**
     * @summary Delete dialer DNC list
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	*/
	function deleteDncList(dncListId){
		var apipath = '/api/v1/outbound/dnclists/{dncListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteDncList = deleteDncList;
	/**
     * @summary Initiate the export of a dnc list.
	 * @description Returns 200 if received OK.
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	*/
	function createDncListExport(dncListId){
		var apipath = '/api/v1/outbound/dnclists/{dncListId}/export';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createDncListExport = createDncListExport;
	/**
     * @summary Get dialer dncList import status.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	*/
	function getDncListImportstatus(dncListId){
		var apipath = '/api/v1/outbound/dnclists/{dncListId}/importstatus';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDncListImportstatus = getDncListImportstatus;
	/**
     * @summary Add phone numbers to a Dialer DNC list.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	* @param {} body - DNC Phone Numbers
	*/
	function createDncListPhonenumbers(dncListId, body){
		var apipath = '/api/v1/outbound/dnclists/{dncListId}/phonenumbers';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createDncListPhonenumbers = createDncListPhonenumbers;
	/**
     * @summary Get dialer preview for user
	 * @description 
	 * @memberOf OutboundApi#
	*/
	function getPreviews(){
		var apipath = '/api/v1/outbound/previews';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPreviews = getPreviews;
	/**
     * @summary Get dialer preview
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} previewId - preview ID
	*/
	function getPreview(previewId){
		var apipath = '/api/v1/outbound/previews/{previewId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{previewId}', previewId);

        if(previewId === undefined && previewId !== null){
			throw 'Missing required  parameter: previewId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPreview = getPreview;
	/**
     * @summary Disposition preview call
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} previewId - preview ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "callId": "",
   "wrapupCodeId": "",
   "contact": {
      "id": "",
      "name": "",
      "contactListId": "",
      "data": {},
      "callRecords": {},
      "callable": true,
      "phoneNumberStatus": {},
      "selfUri": ""
   }
}
	*/
	function createPreviewDispositioncall(previewId, body){
		var apipath = '/api/v1/outbound/previews/{previewId}/dispositioncall';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{previewId}', previewId);

        if(previewId === undefined && previewId !== null){
			throw 'Missing required  parameter: previewId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createPreviewDispositioncall = createPreviewDispositioncall;
	/**
     * @summary place preview call
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} previewId - preview ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "callId": "",
   "phoneNumber": ""
}
	*/
	function createPreviewPlacecall(previewId, body){
		var apipath = '/api/v1/outbound/previews/{previewId}/placecall';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{previewId}', previewId);

        if(previewId === undefined && previewId !== null){
			throw 'Missing required  parameter: previewId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createPreviewPlacecall = createPreviewPlacecall;
	/**
     * @summary Query a list of Rule Sets.
	 * @description 
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
	function getRulesets(pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var apipath = '/api/v1/outbound/rulesets';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(filterType !== undefined && filterType !== null){
			queryParameters.filterType = filterType;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRulesets = getRulesets;
	/**
     * @summary Create a Dialer Call Analysis Response Set.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {} body - RuleSet
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
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
   "rules": [],
   "selfUri": ""
}
	*/
	function createRulesets(body){
		var apipath = '/api/v1/outbound/rulesets';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createRulesets = createRulesets;
	/**
     * @summary Get a Rule Set by ID.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} ruleSetId - Rule Set ID
	*/
	function getRuleSet(ruleSetId){
		var apipath = '/api/v1/outbound/rulesets/{ruleSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{ruleSetId}', ruleSetId);

        if(ruleSetId === undefined && ruleSetId !== null){
			throw 'Missing required  parameter: ruleSetId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRuleSet = getRuleSet;
	/**
     * @summary Update a RuleSet.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} ruleSetId - Rule Set ID
	* @param {} body - RuleSet
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
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
   "rules": [],
   "selfUri": ""
}
	*/
	function updateRuleSet(ruleSetId, body){
		var apipath = '/api/v1/outbound/rulesets/{ruleSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{ruleSetId}', ruleSetId);

        if(ruleSetId === undefined && ruleSetId !== null){
			throw 'Missing required  parameter: ruleSetId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateRuleSet = updateRuleSet;
	/**
     * @summary Delete a Rule set.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} ruleSetId - Rule Set ID
	*/
	function deleteRuleSet(ruleSetId){
		var apipath = '/api/v1/outbound/rulesets/{ruleSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{ruleSetId}', ruleSetId);

        if(ruleSetId === undefined && ruleSetId !== null){
			throw 'Missing required  parameter: ruleSetId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteRuleSet = deleteRuleSet;
	/**
     * @summary Query for a list of dialer campaign schedules.
	 * @description 
	 * @memberOf OutboundApi#
	*/
	function getSchedulesCampaigns(){
		var apipath = '/api/v1/outbound/schedules/campaigns';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchedulesCampaigns = getSchedulesCampaigns;
	/**
     * @summary Get a dialer campaign schedule.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function getSchedulesCampaign(campaignId){
		var apipath = '/api/v1/outbound/schedules/campaigns/{campaignId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchedulesCampaign = getSchedulesCampaign;
	/**
     * @summary Update a new campaign schedule.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	* @param {} body - CampaignSchedule
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "intervals": [],
   "timeZone": "",
   "campaign": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "selfUri": ""
}
	*/
	function updateSchedulesCampaign(campaignId, body){
		var apipath = '/api/v1/outbound/schedules/campaigns/{campaignId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateSchedulesCampaign = updateSchedulesCampaign;
	/**
     * @summary Delete a dialer campaign schedule.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function deleteSchedulesCampaign(campaignId){
		var apipath = '/api/v1/outbound/schedules/campaigns/{campaignId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteSchedulesCampaign = deleteSchedulesCampaign;
	/**
     * @summary Query for a list of dialer sequence schedules.
	 * @description 
	 * @memberOf OutboundApi#
	*/
	function getSchedulesSequences(){
		var apipath = '/api/v1/outbound/schedules/sequences';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchedulesSequences = getSchedulesSequences;
	/**
     * @summary Get a dialer sequence schedule.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} sequenceId - Sequence ID
	*/
	function getSchedulesSequence(sequenceId){
		var apipath = '/api/v1/outbound/schedules/sequences/{sequenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sequenceId}', sequenceId);

        if(sequenceId === undefined && sequenceId !== null){
			throw 'Missing required  parameter: sequenceId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchedulesSequence = getSchedulesSequence;
	/**
     * @summary Update a new sequence schedule.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} sequenceId - Sequence ID
	* @param {} body - SequenceSchedule
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "intervals": [],
   "timeZone": "",
   "sequence": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "selfUri": ""
}
	*/
	function updateSchedulesSequence(sequenceId, body){
		var apipath = '/api/v1/outbound/schedules/sequences/{sequenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sequenceId}', sequenceId);

        if(sequenceId === undefined && sequenceId !== null){
			throw 'Missing required  parameter: sequenceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateSchedulesSequence = updateSchedulesSequence;
	/**
     * @summary Delete a dialer sequence schedule.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} sequenceId - Sequence ID
	*/
	function deleteSchedulesSequence(sequenceId){
		var apipath = '/api/v1/outbound/schedules/sequences/{sequenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sequenceId}', sequenceId);

        if(sequenceId === undefined && sequenceId !== null){
			throw 'Missing required  parameter: sequenceId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteSchedulesSequence = deleteSchedulesSequence;
	/**
     * @summary Query a list of dialer campaign sequences.
	 * @description 
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
	function getSequences(pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var apipath = '/api/v1/outbound/sequences';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(filterType !== undefined && filterType !== null){
			queryParameters.filterType = filterType;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSequences = getSequences;
	/**
     * @summary Create a new campaign sequence.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {} body - Organization
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "campaigns": [],
   "currentCampaign": 0,
   "status": "",
   "stopMessage": "",
   "selfUri": ""
}
	*/
	function createSequences(body){
		var apipath = '/api/v1/outbound/sequences';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createSequences = createSequences;
	/**
     * @summary Get a dialer campaign sequence.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} sequenceId - Campaign Sequence ID
	*/
	function getSequence(sequenceId){
		var apipath = '/api/v1/outbound/sequences/{sequenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sequenceId}', sequenceId);

        if(sequenceId === undefined && sequenceId !== null){
			throw 'Missing required  parameter: sequenceId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSequence = getSequence;
	/**
     * @summary Update a new campaign sequence.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} sequenceId - Campaign Sequence ID
	* @param {} body - Organization
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "campaigns": [],
   "currentCampaign": 0,
   "status": "",
   "stopMessage": "",
   "selfUri": ""
}
	*/
	function updateSequence(sequenceId, body){
		var apipath = '/api/v1/outbound/sequences/{sequenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sequenceId}', sequenceId);

        if(sequenceId === undefined && sequenceId !== null){
			throw 'Missing required  parameter: sequenceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateSequence = updateSequence;
	/**
     * @summary Delete a dialer campaign sequence.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {string} sequenceId - Campaign Sequence ID
	*/
	function deleteSequence(sequenceId){
		var apipath = '/api/v1/outbound/sequences/{sequenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sequenceId}', sequenceId);

        if(sequenceId === undefined && sequenceId !== null){
			throw 'Missing required  parameter: sequenceId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteSequence = deleteSequence;
	/**
     * @summary Get the Dialer wrap up code mapping.
	 * @description 
	 * @memberOf OutboundApi#
	*/
	function getWrapupcodemappings(){
		var apipath = '/api/v1/outbound/wrapupcodemappings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWrapupcodemappings = getWrapupcodemappings;
	/**
     * @summary Update the Dialer wrap up code mapping.
	 * @description 
	 * @memberOf OutboundApi#
	* @param {} body - wrapUpCodeMapping
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "defaultSet": [],
   "mapping": {},
   "selfUri": ""
}
	*/
	function updateWrapupcodemappings(body){
		var apipath = '/api/v1/outbound/wrapupcodemappings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateWrapupcodemappings = updateWrapupcodemappings;

    return self;
};

/**
* @class
* @example
* var api = new PresencedefinitionsApi(pureCloudSession);
*/
var PresencedefinitionsApi = function (pureCloudSession) {
	/**
     * @summary Get an Organization's list of Presences
	 * @description 
	 * @memberOf PresencedefinitionsApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	*/
	function get(pageNumber, pageSize){
		var apipath = '/api/v1/presencedefinitions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.get = get;
	/**
     * @summary Create an OrganizationPresence
	 * @description 
	 * @memberOf PresencedefinitionsApi#
	* @param {} body - The OrganizationPresence to create
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "languageLabels": {},
   "systemPresence": "",
   "deactivated": true,
   "createdBy": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "createdDate": "",
   "modifiedBy": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "modifiedDate": "",
   "selfUri": ""
}
	*/
	function create(body){
		var apipath = '/api/v1/presencedefinitions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.create = create;
	/**
     * @summary Get an OrganizationPresence
	 * @description 
	 * @memberOf PresencedefinitionsApi#
	* @param {string} presenceId - Organization Presence ID
	*/
	function getPresence(presenceId){
		var apipath = '/api/v1/presencedefinitions/{presenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{presenceId}', presenceId);

        if(presenceId === undefined && presenceId !== null){
			throw 'Missing required  parameter: presenceId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPresence = getPresence;
	/**
     * @summary Update an OrganizationPresence
	 * @description 
	 * @memberOf PresencedefinitionsApi#
	* @param {string} presenceId - Organization Presence ID
	* @param {} body - The OrganizationPresence to update
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "languageLabels": {},
   "systemPresence": "",
   "deactivated": true,
   "createdBy": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "createdDate": "",
   "modifiedBy": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "modifiedDate": "",
   "selfUri": ""
}
	*/
	function updatePresence(presenceId, body){
		var apipath = '/api/v1/presencedefinitions/{presenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{presenceId}', presenceId);

        if(presenceId === undefined && presenceId !== null){
			throw 'Missing required  parameter: presenceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updatePresence = updatePresence;
	/**
     * @summary Delete an OrganizationPresence
	 * @description 
	 * @memberOf PresencedefinitionsApi#
	* @param {string} presenceId - Organization Presence ID
	*/
	function deletePresence(presenceId){
		var apipath = '/api/v1/presencedefinitions/{presenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{presenceId}', presenceId);

        if(presenceId === undefined && presenceId !== null){
			throw 'Missing required  parameter: presenceId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deletePresence = deletePresence;

    return self;
};

/**
* @class
* @example
* var api = new ProcessautomationApi(pureCloudSession);
*/
var ProcessautomationApi = function (pureCloudSession) {
	/**
     * @summary Get flow history by Document
	 * @description Gets the flow history elements for flows that related to the given document.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - ID
	*/
	function getAssociationsDocumentsIdHistory(id){
		var apipath = '/api/v1/processautomation/associations/documents/{id}/history';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getAssociationsDocumentsIdHistory = getAssociationsDocumentsIdHistory;
	/**
     * @summary Get all base flows for an organization
	 * @description This method will get all the flows defined in your organization.<br> The method will get the flows without regard to individual versions.  So a particular flow might have many versions but only a single entry representing them all as a unit will be returned.<br><br>The method supports two kinds of filters on what data gets returned:<br><p>+  The 'typeFilter' param can be a comma-separated list of flow types that you want, or empty/omitted to get them all. Currently only the Workflow type is supported, but in the future other might be supported as well.</p><br><p>+  The 'stateFilter' param can be a comma-separated list of state types, or empty/omitted to get them all.
 So values like "Active,Inactive,Deleted" or any combination thereof are appropriate here.</p><br><p>+  The 'permissionFilter' param can be a comma-separated list of permissions you want to limit the list to, or empty/omitted to get them all.
 So a value like "Launch" is useful here to just get the flows you're permitted to launch.</p>
	 * @memberOf ProcessautomationApi#
	* @param {integer} pageSize - The number of entries to return per page, or omitted for the default.
	* @param {integer} pageNumber - The page number to return, or omitted for the first page.
	* @param {string} typeFilter - A comma-separated list of flow types that you want, or empty/omitted to get them all.
	* @param {string} stateFilter - A comma-separated list of state types, or empty/omitted to get them all.
	* @param {string} permissionFilter - A comma-separated list of permissions to restrict by, or empty/omitted to get them all.
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	workspace,
	queues,
	document,
	flowconfigid,
	workitemcache,
	* @param {array} sortFields - A list of field names of the format xxx.ASC or xxx.DESC. Declare each entry SEPARATELY on the parameter list (EG &sortFields=name.ASC&sortFields=user.DESC
	*/
	function getFlowsDefinitions(pageSize, pageNumber, typeFilter, stateFilter, permissionFilter, expand, sortFields){
		var apipath = '/api/v1/processautomation/flows/definitions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(typeFilter !== undefined && typeFilter !== null){
			queryParameters.typeFilter = typeFilter;
		}


		if(stateFilter !== undefined && stateFilter !== null){
			queryParameters.stateFilter = stateFilter;
		}


		if(permissionFilter !== undefined && permissionFilter !== null){
			queryParameters.permissionFilter = permissionFilter;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(sortFields !== undefined && sortFields !== null){
			queryParameters.sortFields = sortFields;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFlowsDefinitions = getFlowsDefinitions;
	/**
     * @summary create a new base flow object
	 * @description The base flows are the flow that don't consider the specific versions of that flow - the base flow refers to all of its versions as one unit.  So base flows have a one-to-many relationship with versioned flows.<br><br>This method will create a new base flow object, and assign it a new id.<br><br>The usual process is that you'll want to create a base flow first, giving the flow a name and description which apply to all the versions as a whole, then create one or more versioned flows that reference that base.
	 * @memberOf ProcessautomationApi#
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	workspace,
	queues,
	document,
	flowconfigid,
	workitemcache,
	* @param {} body - The base flows are the flow that don't consider the specific versions of that flow - the base flow refers to all of its versions as one unit.  So base flows have a one-to-many relationship with versioned flows.<br><br>This method will create a new base flow object, and assign it a new id.<br><br>The usual process is that you'll want to create a base flow first, giving the flow a name and description which apply to all the versions as a whole, then create one or more versioned flows that reference that base.
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "configState": "",
   "flowType": "",
   "lockedByUser": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "newestPublishedVersion": "",
   "newestVersion": "",
   "associatedWorkspaces": [],
   "description": "",
   "selfUri": ""
}
	*/
	function createFlowsDefinitions(expand, body){
		var apipath = '/api/v1/processautomation/flows/definitions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createFlowsDefinitions = createFlowsDefinitions;
	/**
     * @summary Get a specific base flow meta-data by flow id
	 * @description This returns the stuff about a given flow that is not specific to individual versions of that flow, like its name, description, activation state, and current locking owner, etc.<br>NOTE: be careful to check the Deleted state of the object you get back, and don't let the UI change it if it's marked as deleted!<br>The requesting user must have permission to view the flow information.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - ID
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	workspace,
	queues,
	document,
	flowconfigid,
	workitemcache,
	*/
	function getFlowsDefinitionsId(id, expand){
		var apipath = '/api/v1/processautomation/flows/definitions/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFlowsDefinitionsId = getFlowsDefinitionsId;
	/**
     * @summary Updates the Activation state of a flow, which in part controls whether or not it is publicly launchable
	 * @description Updates the Activation state of a flow, which in part controls whether or not it is publicly launchable
	 * @memberOf ProcessautomationApi#
	* @param {string} id - ID
	* @param {} body - activate options
	 * @example
	 * Body Example:
	 * {
   "activated": true
}
	*/
	function createFlowsDefinitionsIdCommandsActivate(id, body){
		var apipath = '/api/v1/processautomation/flows/definitions/{id}/commands/activate';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createFlowsDefinitionsIdCommandsActivate = createFlowsDefinitionsIdCommandsActivate;
	/**
     * @summary Adjusts the association between a flow and zero or more Workspaces.
	 * @description Adjusts the association between a flow and zero or more Workspaces.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - ID
	* @param {} body - activate options
	 * @example
	 * Body Example:
	 * {
   "workspaces": []
}
	*/
	function createFlowsDefinitionsIdCommandsAssociatewithworkspaces(id, body){
		var apipath = '/api/v1/processautomation/flows/definitions/{id}/commands/associatewithworkspaces';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createFlowsDefinitionsIdCommandsAssociatewithworkspaces = createFlowsDefinitionsIdCommandsAssociatewithworkspaces;
	/**
     * @summary Permanently marks the base flow as deleted.
	 * @description Permanently marks the base flow as deleted.  It is still available for historical use; the flow will no longer be launchable.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - ID
	*/
	function createFlowsDefinitionsIdCommandsDelete(id){
		var apipath = '/api/v1/processautomation/flows/definitions/{id}/commands/delete';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createFlowsDefinitionsIdCommandsDelete = createFlowsDefinitionsIdCommandsDelete;
	/**
     * @summary Updates the locked state of a flow, which affects a caller's ability to make changes to a flow
	 * @description Updates the locked state of a flow, which affects a caller's ability to make changes to a flow
	 * @memberOf ProcessautomationApi#
	* @param {string} id - ID
	* @param {} body - lock options
	 * @example
	 * Body Example:
	 * {
   "locked": true
}
	*/
	function createFlowsDefinitionsIdCommandsLock(id, body){
		var apipath = '/api/v1/processautomation/flows/definitions/{id}/commands/lock';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createFlowsDefinitionsIdCommandsLock = createFlowsDefinitionsIdCommandsLock;
	/**
     * @summary Rename a flow (both the name and the description)
	 * @description Rename a flow.  Both the name and the description should be included, as both are eligible to be changed with this endpoint.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - ID
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	workspace,
	queues,
	document,
	flowconfigid,
	workitemcache,
	* @param {} body - Rename a flow.  Both the name and the description should be included, as both are eligible to be changed with this endpoint.
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "configState": "",
   "flowType": "",
   "lockedByUser": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "newestPublishedVersion": "",
   "newestVersion": "",
   "associatedWorkspaces": [],
   "description": "",
   "selfUri": ""
}
	*/
	function createFlowsDefinitionsIdCommandsRename(id, expand, body){
		var apipath = '/api/v1/processautomation/flows/definitions/{id}/commands/rename';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createFlowsDefinitionsIdCommandsRename = createFlowsDefinitionsIdCommandsRename;
	/**
     * @summary Gets an optional cache for a given flow definition.
	 * @description Gets a user saved version of a flow definition.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - ID
	*/
	function getFlowsDefinitionsIdFlowcache(id){
		var apipath = '/api/v1/processautomation/flows/definitions/{id}/flowcache';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFlowsDefinitionsIdFlowcache = getFlowsDefinitionsIdFlowcache;
	/**
     * @summary Saves a flow definition to a temporary location for flows that are not ready to be added to a versioned flow.
	 * @description This cache is used to save a flow's definition that is still in progress and is not ready to be made official.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - ID
	* @param {} body - flow definition data
	*/
	function updateFlowsDefinitionsIdFlowcache(id, body){
		var apipath = '/api/v1/processautomation/flows/definitions/{id}/flowcache';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateFlowsDefinitionsIdFlowcache = updateFlowsDefinitionsIdFlowcache;
	/**
     * @summary Publishes what is saved in the flow definition cache.
	 * @description Publishes what is saved in the flow definition cache. The contents are first validated to ensure they constitute a legal workflow definition. The calling user must have the lock on the flow in order to call this method.  The return value will be the newly created FlowVersionConfigMetaData object.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - ID
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	*/
	function createFlowsDefinitionsIdFlowcacheCommandsPublish(id, expand){
		var apipath = '/api/v1/processautomation/flows/definitions/{id}/flowcache/commands/publish';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createFlowsDefinitionsIdFlowcacheCommandsPublish = createFlowsDefinitionsIdFlowcacheCommandsPublish;
	/**
     * @summary Get all versioned flows for one particular base flow.
	 * @description This is for getting a list of all versioned flows.  So there could potentially be a lot of data here. Like if some designer guy decides to publish one hundred versions of his workflow they might all get returned here.<br>NOTE: be careful because this API does not check to see if the base flow is marked as Deleted or not.<br>You probably won't want to call this API very often, usually for situations like where the UI has a "restore a previous version of the flow" listbox.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Flow ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	workspace,
	queues,
	document,
	flowconfigid,
	workitemcache,
	*/
	function getFlowsDefinitionsIdVersions(id, pageSize, pageNumber, expand){
		var apipath = '/api/v1/processautomation/flows/definitions/{id}/versions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFlowsDefinitionsIdVersions = getFlowsDefinitionsIdVersions;
	/**
     * @summary Create a new versioned flow
	 * @description This method requires the base flow to be already created... and then (with permission) you can create a versioned flow that references it.  This method will set the meta-data of that versioned flow you're creating, and return to you a Uri of the user-upload-service where you can supply the bits of the flow definition.<br><br>There is a Process Definition File for each version of a process.  The Process Definition File contains all of the definitions for everything used by the process.  Eventually, we may support Shared Data Types, Shared Sequences, etc. that are defined in separate files, are organization-global and useable across multiple process definitions for the same organization, but such shared objects are beyond the scope of the initial release.<br><br>The Process Definition File contains Data Type Definitions, Variable Definitions, Sequence Definitions, and Actions, Outputs and Connections.<br><br>Variable Definitions can be created in process-scope or sequence-scope.  A Variable Definition always references a Data Type Definition, regardless of whether the Variable Definition is defining a basic, simple or complex variable.  ( In IPA, basic variables did not have a separate data type definition, but simple and complex variables did.)  The Data Type Definition does not indicate whether a variable is or is not a collection; that configuration is on the Variable Definition.  Variable Definitions scoped to the Process Definition or a Task Definition may be marked as Input Parameters and/or Output Parameters, but Variable Definitions scoped to a State Sequence Definition can marked as neither Input nor Output Parameters.<br><br>An Action is the smallest unit of executable.  Actions are added to Sequence Definitions, and no Action can exist outside of a Sequence Definition.  There are currently two types of Sequence Definitions: State Sequence Definitions and Task Sequence Definitions.  They are very similar, and may generally contain the same kinds of actions, with few restrictions.  A State Sequence Definition is called via a ChangeState action, cannot have input or output parameters, does not induce any Outputs onto the ChangeState action that calls the sequence, and cannot use the ExitTask action.  A Task Sequence Definition is called via the CallTaskSync action, can have input and/or output parameters, may induce Outputs onto the CallTaskSync action that calls the sequence, and can use the ExitTask action.<br><br>An Action may have zero or more Outputs, where each Output is essentially just a pointer to another Action within the same Sequence Definition via an associated Connection object.  An Action with no Outputs is a Terminating Action because it causes the current sequence to end.  Examples of terminating actions are ChangeState, ExitTask and EndProcess.  All non-terminating actions will have at least one Output.  Some actions have a fixed set of outputs (i.e. Conditional if with true/false).  Many actions will have a Default Output that is always present.  Sometimes the Default Output may be the only Output (i.e. UpdateVariables).  Sometimes Outputs get induced into an action by something the action references (i.e. RunProcessSync has a Default Output, but may also gets induced outputs due to Process End Reasons from the referenced Process Definition).<br><br>A Connection connects a specific Output of a specific Action to another Action, or even back to the same Action.  Think of Connections as the "arrows" that the server follows while the server is executing a flow: the server runs an Action; if it is a non-terminating Action, then after the action has completed the server selects an Output on that Action; once the Output is selected, the server looks for a Connection from that Output to another Action, but if there is no Connection for that output then the server exits the sequence (i.e. ExitTask(Default) if it is a Task Sequence Definition, or EndProcess(Default) if it is a State Sequence Definition).<br><br>Note:  There is no need for a Loop action.  This is because a Connection can point from an Output of an Action back to the same action, which is itself inherently a loop.<br><br><br>Page Definition JSON Guidelines<br>The following subsections list the general guides lines to follow when creating JSON objects to be include on the Process Definition File.<br><br>Keep the JSON Shallow Instead of Deep<br>There will always be some level of nesting within JSON: JSON itself always has one root object that contains everything else.  But, as a general rule, we want to keep the JSON shallow instead of deep.  This necessarily implies that fields that reference really complex objects are preferred over fields that contain really complex objects.  For example, rather than nest actions inside of actions that are also nested inside of other actions, all actions within the same sequence are defined within a single list because they are in the scope.  Then, there is another list at sequence scope that contains all of the connections between all of the actions.  Keep things shallow generally makes it easy to find the object you are looking for given it's ID, and nesting deep does not easily allow for structures like actions that connect back to another action earlier in the flow.<br><br>Mind the Well-Known Field Names<br>This file format uses several well-known field names, such as the ones below:<br>    "_meta"<br>    "id"<br>    "refId"<br>    "designer"<br>    "config"<br><br>That list of well-known field names above is not necessarily complete at this time, and will be extended as necessary.  All of the field names within that list should be discussed in this page.
<br>The well-known field names shall only be used for their intended purposes.  Other fields may contain the well known names within a substring of their entire field names. (i.e. "designer" must conform to the rules for "designer", but "myDesigner" could be used for something else.
<br>The "_meta" Field
<br>For deserialization or interpretation purposes, some objects may need a meta section to capture information such as the version of a serialization format.  When present, the field name shall be "_meta", and it shall always be the first field within the object.
<br>There is not currently a specific set of what may or may not appear in a meta object.  Each meta object will likely have the "objectType" field, which holds a string that indicates what type of data is contained by the object with the "_meta" field.  Other possible fields that may be used are "formatType" and/or "formatVersion".  The idea is that the meta object should contain any information that may be necessary for an application to know or understand the other fields that are siblings of the "_meta" field within the same object. 
<br>Generally speaking, the fields within a JSON object are allowed to be in any order, and some serializers may choose to always write the fields in alphabetic order by default.  But, it is somewhat pointless to even have the "_meta" field if it is not first since it's information could not then be used to know what to expect while deserializing the remainder of the object.  Therefore, the meta field intentionally starts with an underscore character to force it to the top if the fields get sorted during serialization.
<br>Also, it is intended that the meta can really appear within almost any object.  Basically, if a bit of extra information is is needed to understand or parse something, a "_meta" field can be added to help interpret the other fields that are siblings of the _meta field.  All "definition" objects should have a meta object that, at a minimum, indicates "objectType".
<br><br><pre>{    // This field, if present, must always be first!<br>    "_meta":<br>    {<br>        // These are some suggest field names, but may not apply in all cases<br>        "objectType": <string><br>        "formatType": <string>,<br>        "formatRevision": <version>,<br> <br>        // Could really have just about anything else here, too<br>        ....<br>    },<br> <br>    // More fields for this specific object must come after the "_meta"<br>    ...<br>}<br> <br>// Null "_meta" is allowed<br>{<br>    "_meta": null,<br>    ...<br>}<br> <br>// Empty object "_meta" is allowed<br>{<br>    "_meta: {},<br>    ...<br>}<br>// Omitted "_meta" is allowed<br>{<br>    ...<br>}</pre><br><br><br>IDs and "id" & "refId" Fields<br><br>The process definition uses IDs!!!  Think of an ID as something that uniquely identifies an object definition.  Conceptually, they are like GUIDs.  However, in reality, something a bit less verbose than GUIDs may be used.<br><br>In an attempt to more easily figure out which object owns/defines/declares the ID vs. which objects just reference the ID, the field name of all owned IDs will be "id" and the field name for all referenced IDs will be "refId".  Additionally, the "refId" shall always be inside a container object, which is intended to<br><br>    Allow for additional information that describe the scope/context in which the ID indicated by "refId" can be found, if necessary<br>    Accommodate the need to reference multiple objects from within the same parent object<br>    Eventually support the ability to reference objects defined outside of the Process Definition, such as shared Data Type Definitins or PureCloud Composer Scripts.<br><br>The field name of the "refId" container object should generally end with "Ref".<br><pre>// Object definition that is assigning an ID to itself; The "id" field does not have to be first<br>{<br>    ...,<br>    "id": <id>,<br>    ...<br>}</pre><br> <br>// Object definition that is referencing the object above via the "refId" field<br><pre>{<br>    // Container object for the "fieldOne" reference<br>    "fieldOneRef":<br>    {<br>        ...,<br> <br>        // This field indicates the ID of that other object that is being referenced<br>        "refId": <id>,<br> <br>        // If necessary, we can add additional fields that describe the scope/context in which<br>        // the object being referenced is expected to be found.<br>        ...<br>    },<br> <br>    // Since "refId" is a well-known field name but the containing object's field names are not<br>    // (i.e. "fieldOneRef" and "fieldTwoRef" are not well-known field names) the same parent object<br>    // can easily reference multiple other objects, while keeping the "refId" field name consistent.<br>    "fieldTwoRef":<br>    {<br>        ...,<br>        "refId": <id>,<br>        ...<br>    }<br>}</pre><br><br>The "identity" Field
<br>Everything about declaring the identity of the object is stored in the "identity" field.  This includes things like the "id" field, if necessary, as well as optional "name" and "description" fields in which store information entered by the user via the designer; it is unclear at this point whether the designer will or will not actually allow the user to view and/or enter a label and/or description for every major object, but the format will at least support it wherever the designer chooses to allow it!  Other information specific to certain object types, such as the revision of the Process Definition, could potentially also be stored in this object.<br><pre>{<br>    "identity":<br>    {<br>        "id":<id>,<br>        "name":string,<br>        "description":<string><br>    }<br>}</pre><br><br>Note:  The "name" and "description" fields should generally be treated as user-mutable, display only – so don't write any code to make any decisions based on a string value in "name or description"!  For example, don't look for an output named "true" on a ConditionalIf action, because it could be localized to another language, or the user may have changed it to "yes", "on", etc.<br>The "designer" Field<br><br>Any designer-specific information shall be isolated into an object under a "designer" field.  This is a well-known field name, and is intended to better faciliate the creation of a streamlined, compiled version of the process definition, etc. should the server decide that it wants to do so.  It is assumed that anything within an object used as the value for a "designer" field is not needed at runtime by the server or by clients.<br><pre>{<br>    "designer":<br>    {<br>        ...,<br>        "notes": <string>,<br>        ...<br>    }<br>}</pre><br><br>A "designer" field can occur at many levels within the JSON, and can always be ignored by the server.  As an example of something that may be added to a designer field, consider the Connections between an Action's Output an the next Action.  The server needs to know what the connection is (i.e. Action's Output points to another Action), but does not need how the connection looks when "drawn" by the user (i.e. goes up, right, down, right, etc.)<br><br>The sample JSON above shows a "notes" field in object used as the value for the "designer" field.  The "identity" section mentioned previously had "name" and "description" fields.  The idea of adding "notes" into the designer field is to allow people designing the process to add very verbose notes about design decisions, etc.  That differs from the identity.descripion, which is intended to be more of a an end-user viewable description, such as a description that assists the user to select the correct Process Definition to launch.<br>The "config" Field<br><br>Many of the objects may have a "config" field.  The contents of this field will generally be specific to the object.  This is were details about Action configuration, Variables configuration, etc. will be located.<br>The "definitions" field and Definition Lists<br><br>Many of the JSON definition objects will themselves also contain definition lists.  For example the Process Definition objects will have a Data Type Definitions list, Variable Definitions list, Sequence Definitions list, End Process Reasons List,. etc.  The Sequence Definition will have an Action Definitions List, Connection Definitions List, Exit Reasons Definitions List, etc. <br><br>When an object definition itself needs to include one or more definition lists, the object shall have a "definitions" field, and the value of that field is an object where the field names are the names of the definition lists.  Additionally, each of those field names that contains a single definition list will generally end with "Def", and every object definition within a definition list will have an "identity" field.  If the objects with a specific definition list have identity.name fields, then each of those identity.name fields shall be unique among all of the objects within that same definition list!<br>// This is a definition object.  Generally speaking, definition lists will exist within some other definition object.<br><pre>{<br>    ...,<br> <br>    // This field contains all of the definition lists,if any<br>    "definitions":<br>    {<br>        // This is the definition list for abcDef objects<br>        "abcDefs":<br>        [<br>            // Each abcDef object has an identity.id<br>            {<br>                "identity":<br>                {<br>                    "id":<id>,<br>                    "name":<string>,<br>                }<br>            },<br> <br>            // There can be any number of definition objects within this definition list,<br>            // but each of them must have a different value for identity.name.<br>            ...<br>        ],<br> <br>        // This is the definition list of xyzDef objects<br>        "xyzDefs":<br>        [<br>            // Each xyzDef object has an identity.id<br>            {<br>                "identity":<br>                {<br>                    "id":<id>,<br> <br>                    // The value of this identity.name field could be the same as a definition<br>                    // object within the "abcDefs" definition list above because the definition<br>                    // objects exist within different definition lists.<br>                    "name":<string><br>                }<br>            },<br>            ...<br>        ]<br>    },<br> <br>    ...,<br>}</pre><br>No Back-Pointers<br><br>Generally speaking, the JSON should stay away from back-pointers.  A back-pointer is a reference back to the parent object definition that has the definitions list that contains the object doing the back-pointing.  For example, a StateSequenceDefinition exists within the ProcessDefinition.definitions.stateSequenceDefs list:<br><br>    Process Definition<br>        definitions<br>            stateSequenceDefs<br>                StateSequenceDefinition<br><br> <br><br>In the example above, the JSON for the StateSeqenceDefinition should not point back to the stateSequenceDefs definitions list, or to the definitions field that contains that definitions list, or the Process Definition that contains that definitions field.  There is no need for such back-pointers because the relationship is already implied by the structure of the JSON.  With that said, however, it is likely that applications may find it useful to create such back-pointers in memory for the purpose of navigating through and manipulating the object graph; they just don't need to serialize it into the JSON.<br>Object Definition Template<br><br>Given the guidelines above, the following is kind of a template for all JSON object definitions.  For any specific definition, however, some of the sections or fields within those sections may not apply.<br><pre>{<br>    "_meta":<br>    {<br>    },<br> <br>    "identity":<br>    {<br>    },<br> <br>    // Keep in mind that the "designer" fields can really exist anywhere,<br>    // not just at the top of a definition.<br>    "designer":<br>    {<br>    },<br> <br>    "config":<br>    {<br>    },<br> <br>    "definitions":<br>    {<br>    }<br>}</pre><br>
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Flow ID
	* @param {boolean} keepFlowCache - Keep flow definition cache
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	workspace,
	queues,
	document,
	flowconfigid,
	workitemcache,
	* @param {} body - This method requires the base flow to be already created... and then (with permission) you can create a versioned flow that references it.  This method will set the meta-data of that versioned flow you're creating, and return to you a Uri of the user-upload-service where you can supply the bits of the flow definition.<br><br>There is a Process Definition File for each version of a process.  The Process Definition File contains all of the definitions for everything used by the process.  Eventually, we may support Shared Data Types, Shared Sequences, etc. that are defined in separate files, are organization-global and useable across multiple process definitions for the same organization, but such shared objects are beyond the scope of the initial release.<br><br>The Process Definition File contains Data Type Definitions, Variable Definitions, Sequence Definitions, and Actions, Outputs and Connections.<br><br>Variable Definitions can be created in process-scope or sequence-scope.  A Variable Definition always references a Data Type Definition, regardless of whether the Variable Definition is defining a basic, simple or complex variable.  ( In IPA, basic variables did not have a separate data type definition, but simple and complex variables did.)  The Data Type Definition does not indicate whether a variable is or is not a collection; that configuration is on the Variable Definition.  Variable Definitions scoped to the Process Definition or a Task Definition may be marked as Input Parameters and/or Output Parameters, but Variable Definitions scoped to a State Sequence Definition can marked as neither Input nor Output Parameters.<br><br>An Action is the smallest unit of executable.  Actions are added to Sequence Definitions, and no Action can exist outside of a Sequence Definition.  There are currently two types of Sequence Definitions: State Sequence Definitions and Task Sequence Definitions.  They are very similar, and may generally contain the same kinds of actions, with few restrictions.  A State Sequence Definition is called via a ChangeState action, cannot have input or output parameters, does not induce any Outputs onto the ChangeState action that calls the sequence, and cannot use the ExitTask action.  A Task Sequence Definition is called via the CallTaskSync action, can have input and/or output parameters, may induce Outputs onto the CallTaskSync action that calls the sequence, and can use the ExitTask action.<br><br>An Action may have zero or more Outputs, where each Output is essentially just a pointer to another Action within the same Sequence Definition via an associated Connection object.  An Action with no Outputs is a Terminating Action because it causes the current sequence to end.  Examples of terminating actions are ChangeState, ExitTask and EndProcess.  All non-terminating actions will have at least one Output.  Some actions have a fixed set of outputs (i.e. Conditional if with true/false).  Many actions will have a Default Output that is always present.  Sometimes the Default Output may be the only Output (i.e. UpdateVariables).  Sometimes Outputs get induced into an action by something the action references (i.e. RunProcessSync has a Default Output, but may also gets induced outputs due to Process End Reasons from the referenced Process Definition).<br><br>A Connection connects a specific Output of a specific Action to another Action, or even back to the same Action.  Think of Connections as the "arrows" that the server follows while the server is executing a flow: the server runs an Action; if it is a non-terminating Action, then after the action has completed the server selects an Output on that Action; once the Output is selected, the server looks for a Connection from that Output to another Action, but if there is no Connection for that output then the server exits the sequence (i.e. ExitTask(Default) if it is a Task Sequence Definition, or EndProcess(Default) if it is a State Sequence Definition).<br><br>Note:  There is no need for a Loop action.  This is because a Connection can point from an Output of an Action back to the same action, which is itself inherently a loop.<br><br><br>Page Definition JSON Guidelines<br>The following subsections list the general guides lines to follow when creating JSON objects to be include on the Process Definition File.<br><br>Keep the JSON Shallow Instead of Deep<br>There will always be some level of nesting within JSON: JSON itself always has one root object that contains everything else.  But, as a general rule, we want to keep the JSON shallow instead of deep.  This necessarily implies that fields that reference really complex objects are preferred over fields that contain really complex objects.  For example, rather than nest actions inside of actions that are also nested inside of other actions, all actions within the same sequence are defined within a single list because they are in the scope.  Then, there is another list at sequence scope that contains all of the connections between all of the actions.  Keep things shallow generally makes it easy to find the object you are looking for given it's ID, and nesting deep does not easily allow for structures like actions that connect back to another action earlier in the flow.<br><br>Mind the Well-Known Field Names<br>This file format uses several well-known field names, such as the ones below:<br>    "_meta"<br>    "id"<br>    "refId"<br>    "designer"<br>    "config"<br><br>That list of well-known field names above is not necessarily complete at this time, and will be extended as necessary.  All of the field names within that list should be discussed in this page.
<br>The well-known field names shall only be used for their intended purposes.  Other fields may contain the well known names within a substring of their entire field names. (i.e. "designer" must conform to the rules for "designer", but "myDesigner" could be used for something else.
<br>The "_meta" Field
<br>For deserialization or interpretation purposes, some objects may need a meta section to capture information such as the version of a serialization format.  When present, the field name shall be "_meta", and it shall always be the first field within the object.
<br>There is not currently a specific set of what may or may not appear in a meta object.  Each meta object will likely have the "objectType" field, which holds a string that indicates what type of data is contained by the object with the "_meta" field.  Other possible fields that may be used are "formatType" and/or "formatVersion".  The idea is that the meta object should contain any information that may be necessary for an application to know or understand the other fields that are siblings of the "_meta" field within the same object. 
<br>Generally speaking, the fields within a JSON object are allowed to be in any order, and some serializers may choose to always write the fields in alphabetic order by default.  But, it is somewhat pointless to even have the "_meta" field if it is not first since it's information could not then be used to know what to expect while deserializing the remainder of the object.  Therefore, the meta field intentionally starts with an underscore character to force it to the top if the fields get sorted during serialization.
<br>Also, it is intended that the meta can really appear within almost any object.  Basically, if a bit of extra information is is needed to understand or parse something, a "_meta" field can be added to help interpret the other fields that are siblings of the _meta field.  All "definition" objects should have a meta object that, at a minimum, indicates "objectType".
<br><br><pre>{    // This field, if present, must always be first!<br>    "_meta":<br>    {<br>        // These are some suggest field names, but may not apply in all cases<br>        "objectType": <string><br>        "formatType": <string>,<br>        "formatRevision": <version>,<br> <br>        // Could really have just about anything else here, too<br>        ....<br>    },<br> <br>    // More fields for this specific object must come after the "_meta"<br>    ...<br>}<br> <br>// Null "_meta" is allowed<br>{<br>    "_meta": null,<br>    ...<br>}<br> <br>// Empty object "_meta" is allowed<br>{<br>    "_meta: {},<br>    ...<br>}<br>// Omitted "_meta" is allowed<br>{<br>    ...<br>}</pre><br><br><br>IDs and "id" & "refId" Fields<br><br>The process definition uses IDs!!!  Think of an ID as something that uniquely identifies an object definition.  Conceptually, they are like GUIDs.  However, in reality, something a bit less verbose than GUIDs may be used.<br><br>In an attempt to more easily figure out which object owns/defines/declares the ID vs. which objects just reference the ID, the field name of all owned IDs will be "id" and the field name for all referenced IDs will be "refId".  Additionally, the "refId" shall always be inside a container object, which is intended to<br><br>    Allow for additional information that describe the scope/context in which the ID indicated by "refId" can be found, if necessary<br>    Accommodate the need to reference multiple objects from within the same parent object<br>    Eventually support the ability to reference objects defined outside of the Process Definition, such as shared Data Type Definitins or PureCloud Composer Scripts.<br><br>The field name of the "refId" container object should generally end with "Ref".<br><pre>// Object definition that is assigning an ID to itself; The "id" field does not have to be first<br>{<br>    ...,<br>    "id": <id>,<br>    ...<br>}</pre><br> <br>// Object definition that is referencing the object above via the "refId" field<br><pre>{<br>    // Container object for the "fieldOne" reference<br>    "fieldOneRef":<br>    {<br>        ...,<br> <br>        // This field indicates the ID of that other object that is being referenced<br>        "refId": <id>,<br> <br>        // If necessary, we can add additional fields that describe the scope/context in which<br>        // the object being referenced is expected to be found.<br>        ...<br>    },<br> <br>    // Since "refId" is a well-known field name but the containing object's field names are not<br>    // (i.e. "fieldOneRef" and "fieldTwoRef" are not well-known field names) the same parent object<br>    // can easily reference multiple other objects, while keeping the "refId" field name consistent.<br>    "fieldTwoRef":<br>    {<br>        ...,<br>        "refId": <id>,<br>        ...<br>    }<br>}</pre><br><br>The "identity" Field
<br>Everything about declaring the identity of the object is stored in the "identity" field.  This includes things like the "id" field, if necessary, as well as optional "name" and "description" fields in which store information entered by the user via the designer; it is unclear at this point whether the designer will or will not actually allow the user to view and/or enter a label and/or description for every major object, but the format will at least support it wherever the designer chooses to allow it!  Other information specific to certain object types, such as the revision of the Process Definition, could potentially also be stored in this object.<br><pre>{<br>    "identity":<br>    {<br>        "id":<id>,<br>        "name":string,<br>        "description":<string><br>    }<br>}</pre><br><br>Note:  The "name" and "description" fields should generally be treated as user-mutable, display only – so don't write any code to make any decisions based on a string value in "name or description"!  For example, don't look for an output named "true" on a ConditionalIf action, because it could be localized to another language, or the user may have changed it to "yes", "on", etc.<br>The "designer" Field<br><br>Any designer-specific information shall be isolated into an object under a "designer" field.  This is a well-known field name, and is intended to better faciliate the creation of a streamlined, compiled version of the process definition, etc. should the server decide that it wants to do so.  It is assumed that anything within an object used as the value for a "designer" field is not needed at runtime by the server or by clients.<br><pre>{<br>    "designer":<br>    {<br>        ...,<br>        "notes": <string>,<br>        ...<br>    }<br>}</pre><br><br>A "designer" field can occur at many levels within the JSON, and can always be ignored by the server.  As an example of something that may be added to a designer field, consider the Connections between an Action's Output an the next Action.  The server needs to know what the connection is (i.e. Action's Output points to another Action), but does not need how the connection looks when "drawn" by the user (i.e. goes up, right, down, right, etc.)<br><br>The sample JSON above shows a "notes" field in object used as the value for the "designer" field.  The "identity" section mentioned previously had "name" and "description" fields.  The idea of adding "notes" into the designer field is to allow people designing the process to add very verbose notes about design decisions, etc.  That differs from the identity.descripion, which is intended to be more of a an end-user viewable description, such as a description that assists the user to select the correct Process Definition to launch.<br>The "config" Field<br><br>Many of the objects may have a "config" field.  The contents of this field will generally be specific to the object.  This is were details about Action configuration, Variables configuration, etc. will be located.<br>The "definitions" field and Definition Lists<br><br>Many of the JSON definition objects will themselves also contain definition lists.  For example the Process Definition objects will have a Data Type Definitions list, Variable Definitions list, Sequence Definitions list, End Process Reasons List,. etc.  The Sequence Definition will have an Action Definitions List, Connection Definitions List, Exit Reasons Definitions List, etc. <br><br>When an object definition itself needs to include one or more definition lists, the object shall have a "definitions" field, and the value of that field is an object where the field names are the names of the definition lists.  Additionally, each of those field names that contains a single definition list will generally end with "Def", and every object definition within a definition list will have an "identity" field.  If the objects with a specific definition list have identity.name fields, then each of those identity.name fields shall be unique among all of the objects within that same definition list!<br>// This is a definition object.  Generally speaking, definition lists will exist within some other definition object.<br><pre>{<br>    ...,<br> <br>    // This field contains all of the definition lists,if any<br>    "definitions":<br>    {<br>        // This is the definition list for abcDef objects<br>        "abcDefs":<br>        [<br>            // Each abcDef object has an identity.id<br>            {<br>                "identity":<br>                {<br>                    "id":<id>,<br>                    "name":<string>,<br>                }<br>            },<br> <br>            // There can be any number of definition objects within this definition list,<br>            // but each of them must have a different value for identity.name.<br>            ...<br>        ],<br> <br>        // This is the definition list of xyzDef objects<br>        "xyzDefs":<br>        [<br>            // Each xyzDef object has an identity.id<br>            {<br>                "identity":<br>                {<br>                    "id":<id>,<br> <br>                    // The value of this identity.name field could be the same as a definition<br>                    // object within the "abcDefs" definition list above because the definition<br>                    // objects exist within different definition lists.<br>                    "name":<string><br>                }<br>            },<br>            ...<br>        ]<br>    },<br> <br>    ...,<br>}</pre><br>No Back-Pointers<br><br>Generally speaking, the JSON should stay away from back-pointers.  A back-pointer is a reference back to the parent object definition that has the definitions list that contains the object doing the back-pointing.  For example, a StateSequenceDefinition exists within the ProcessDefinition.definitions.stateSequenceDefs list:<br><br>    Process Definition<br>        definitions<br>            stateSequenceDefs<br>                StateSequenceDefinition<br><br> <br><br>In the example above, the JSON for the StateSeqenceDefinition should not point back to the stateSequenceDefs definitions list, or to the definitions field that contains that definitions list, or the Process Definition that contains that definitions field.  There is no need for such back-pointers because the relationship is already implied by the structure of the JSON.  With that said, however, it is likely that applications may find it useful to create such back-pointers in memory for the purpose of navigating through and manipulating the object graph; they just don't need to serialize it into the JSON.<br>Object Definition Template<br><br>Given the guidelines above, the following is kind of a template for all JSON object definitions.  For any specific definition, however, some of the sections or fields within those sections may not apply.<br><pre>{<br>    "_meta":<br>    {<br>    },<br> <br>    "identity":<br>    {<br>    },<br> <br>    // Keep in mind that the "designer" fields can really exist anywhere,<br>    // not just at the top of a definition.<br>    "designer":<br>    {<br>    },<br> <br>    "config":<br>    {<br>    },<br> <br>    "definitions":<br>    {<br>    }<br>}</pre><br>
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "versionSpecificComment": "",
   "flowDefinitionUri": "",
   "flowDefinitionUploaded": true,
   "createdByUser": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "createdDate": "",
   "selfUri": "",
   "version": ""
}
	*/
	function createFlowsDefinitionsIdVersions(id, keepFlowCache, expand, body){
		var apipath = '/api/v1/processautomation/flows/definitions/{id}/versions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(keepFlowCache !== undefined && keepFlowCache !== null){
			queryParameters.keepFlowCache = keepFlowCache;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createFlowsDefinitionsIdVersions = createFlowsDefinitionsIdVersions;
	/**
     * @summary Get the meta-data about a versioned flow
	 * @description This will get the meta-data about a particular version of a flow.<br>Also, if you specify a query parameter of  'wantDownloadUri=true', the service will return to you an Uri of a location where you can download the flow  definition content.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Flow ID
	* @param {string} version - Flow Version
	* @param {boolean} wantDownloadUri - True if you want an Uri to download the flow definition content.
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	workspace,
	queues,
	document,
	flowconfigid,
	workitemcache,
	*/
	function getFlowsDefinitionsIdVersionsByVersion(id, version, wantDownloadUri, expand){
		var apipath = '/api/v1/processautomation/flows/definitions/{id}/versions/{version}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        apipath = apipath.replace('{version}', version);

        if(version === undefined && version !== null){
			throw 'Missing required  parameter: version';
        }


		if(wantDownloadUri !== undefined && wantDownloadUri !== null){
			queryParameters.wantDownloadUri = wantDownloadUri;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFlowsDefinitionsIdVersionsByVersion = getFlowsDefinitionsIdVersionsByVersion;
	/**
     * @summary publish a minor version of a flow to a major version
	 * @description Minor versions are not "seen" by regular agents, they're only seen by the Designer for intermediate work. <br>When a flow is considered suitable for general use, it gets promoted to a major version with this API, which then makes it visible to regular agents for use. <br>Note that there is no "unpublish" action, if you find there's a problem with your flow then you can either mark is as inactive (so nobody can launch that flow) or re-publish a prior version that you have from some export over the top of the one you don't like.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Flow ID
	* @param {string} version - Flow Version
	*/
	function createFlowsDefinitionsIdVersionsByVersionCommandsPublish(id, version){
		var apipath = '/api/v1/processautomation/flows/definitions/{id}/versions/{version}/commands/publish';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        apipath = apipath.replace('{version}', version);

        if(version === undefined && version !== null){
			throw 'Missing required  parameter: version';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createFlowsDefinitionsIdVersionsByVersionCommandsPublish = createFlowsDefinitionsIdVersionsByVersionCommandsPublish;
	/**
     * @summary Launches a flow
	 * @description Launches the most recently published version of the flow.  Accepts a FlowLaunch data object as a payload.
	 * @memberOf ProcessautomationApi#
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	workspace,
	queues,
	document,
	flowconfigid,
	workitemcache,
	* @param {} flowLaunch - Launches the most recently published version of the flow.  Accepts a FlowLaunch data object as a payload.
	 * @example
	 * Body Example:
	 * {
   "flowConfigId": {
      "id": "",
      "name": "",
      "selfUri": "",
      "version": ""
   },
   "flowInstanceName": "",
   "inputData": {
      "linkedDocumentIds": []
   },
   "launchType": ""
}
	*/
	function createFlowsInstances(expand, flowLaunch){
		var apipath = '/api/v1/processautomation/flows/instances';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}

        if(flowLaunch !== undefined && flowLaunch !== null){
            requestBody = flowLaunch;
        }

        if(flowLaunch === undefined && flowLaunch !== null){
			throw 'Missing required  parameter: flowLaunch';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createFlowsInstances = createFlowsInstances;
	/**
     * @summary Search the currently running flow instances
	 * @description Searches the pool of running flow instances given a SearchRequest object and returns the matching results. Some Search Examples:<br>Note the various filters, sort and searchPhrase options can be combined/omitted as needed.<br>Search for a specific definition id:<br>{<br>&nbsp;&nbsp;&nbsp;"filters": [<br>&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "flowConfigId.id",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "STRING",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"operator": "EQUALS",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"values": [<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"e88db9fb-aaa0-46f8-81d5-4a30e323bdfa"<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]<br>&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;]<br>}<br><br>Search for a specific execution instance and sort on the config name:<br>{<br>&nbsp;&nbsp;&nbsp;"filters": [<br>&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "flowExecId",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "STRING",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"operator": "EQUALS",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"values": [<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"99"<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]<br>&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;],<br>&nbsp;&nbsp;&nbsp;"sort" : [<br>&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name":"flowConfigName",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"sortType":"ASCENDING"<br>&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;]<br>}<br>Search for a specific phrase:<br>{<br>&nbsp;&nbsp;&nbsp;"searchPhrase" : "hi mom!" <br>}<br>
	 * @memberOf ProcessautomationApi#
	* @param {} body - SearchRequest data containing search parameters and paging response.
	 * @example
	 * Body Example:
	 * {
   "searchPhrase": "",
   "pageNumber": 0,
   "pageSize": 0,
   "searchFields": [],
   "facetRequests": [],
   "sort": [],
   "filters": []
}
	*/
	function createFlowsInstancesCommandsSearch(body){
		var apipath = '/api/v1/processautomation/flows/instances/commands/search';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createFlowsInstancesCommandsSearch = createFlowsInstancesCommandsSearch;
	/**
     * @summary Get the data for a running flow
	 * @description This will get the information about the current running state of the flow.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Flow Exec ID
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	workspace,
	queues,
	document,
	flowconfigid,
	workitemcache,
	*/
	function getFlowsInstancesId(id, expand){
		var apipath = '/api/v1/processautomation/flows/instances/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFlowsInstancesId = getFlowsInstancesId;
	/**
     * @summary Retries a flow instance
	 * @description Retries a flow instance
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Flow Exec ID
	*/
	function createFlowsInstancesIdCommandsRetry(id){
		var apipath = '/api/v1/processautomation/flows/instances/{id}/commands/retry';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createFlowsInstancesIdCommandsRetry = createFlowsInstancesIdCommandsRetry;
	/**
     * @summary Terminates a flow instance
	 * @description Terminates a flow instance
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Flow Exec ID
	* @param {} body - terminate options
	 * @example
	 * Body Example:
	 * {
   "force": true,
   "reason": ""
}
	*/
	function createFlowsInstancesIdCommandsTerminate(id, body){
		var apipath = '/api/v1/processautomation/flows/instances/{id}/commands/terminate';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createFlowsInstancesIdCommandsTerminate = createFlowsInstancesIdCommandsTerminate;
	/**
     * @summary Get the history of a flow instance
	 * @description Get the history of a flow instance
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Flow Exec ID
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	workspace,
	queues,
	document,
	flowconfigid,
	workitemcache,
	*/
	function getFlowsInstancesIdHistory(id, expand){
		var apipath = '/api/v1/processautomation/flows/instances/{id}/history';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFlowsInstancesIdHistory = getFlowsInstancesIdHistory;
	/**
     * @summary Get all queues for an organization
	 * @description This method will get all the queues defined in your organization.
	 * @memberOf ProcessautomationApi#
	* @param {integer} pageSize - The number of entries to return per page, or omitted for the default.
	* @param {integer} pageNumber - The page number to return, or omitted for the first page.
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	*/
	function getQueues(pageSize, pageNumber, expand){
		var apipath = '/api/v1/processautomation/queues';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQueues = getQueues;
	/**
     * @summary Create a new queue object
	 * @description This method will create a new queue and assign it a new id.
	 * @memberOf ProcessautomationApi#
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	* @param {} body - This method will create a new queue and assign it a new id.
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "description": "",
   "members": [],
   "selfUri": ""
}
	*/
	function createQueues(expand, body){
		var apipath = '/api/v1/processautomation/queues';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createQueues = createQueues;
	/**
     * @summary Get details about this queue
	 * @description This returns details about the queue like the name and description.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - ID
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	*/
	function getQueuesId(id, expand){
		var apipath = '/api/v1/processautomation/queues/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQueuesId = getQueuesId;
	/**
     * @summary Update a queue
	 * @description Update the name and description of a queue.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - ID
	* @param {} body - updated queue
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "description": "",
   "members": [],
   "selfUri": ""
}
	*/
	function updateQueuesId(id, body){
		var apipath = '/api/v1/processautomation/queues/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateQueuesId = updateQueuesId;
	/**
     * @summary Delete a queue
	 * @description Removes a queue for an organization.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - ID
	*/
	function deleteQueuesId(id){
		var apipath = '/api/v1/processautomation/queues/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteQueuesId = deleteQueuesId;
	/**
     * @summary Get members in a queue
	 * @description Get the list of members in a queue.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Queue ID
	* @param {integer} pageSize - The number of entries to return per page, or omitted for the default.
	* @param {integer} pageNumber - The page number to return, or omitted for the first page.
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	*/
	function getQueuesIdMembers(id, pageSize, pageNumber, expand){
		var apipath = '/api/v1/processautomation/queues/{id}/members';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQueuesIdMembers = getQueuesIdMembers;
	/**
     * @summary Edit the members in a queue
	 * @description Updates the members of the specified queue from the given list.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Queue ID
	* @param {integer} pageSize - The number of entries to return per page, or omitted for the default.
	* @param {integer} pageNumber - The page number to return, or omitted for the first page.
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	* @param {} body - Queue Member List
	*/
	function updateQueuesIdMembers(id, pageSize, pageNumber, expand, body){
		var apipath = '/api/v1/processautomation/queues/{id}/members';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateQueuesIdMembers = updateQueuesIdMembers;
	/**
     * @summary Get a member from a queue
	 * @description This will get the specified member from the queue.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Queue ID
	* @param {string} memberId - Member ID
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	*/
	function getQueuesIdMembersByMemberId(id, memberId, expand){
		var apipath = '/api/v1/processautomation/queues/{id}/members/{memberId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        apipath = apipath.replace('{memberId}', memberId);

        if(memberId === undefined && memberId !== null){
			throw 'Missing required  parameter: memberId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQueuesIdMembersByMemberId = getQueuesIdMembersByMemberId;
	/**
     * @summary Add a member to a queue
	 * @description This will add the specified member to the given queue.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Queue ID
	* @param {string} memberId - Member ID
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	* @param {} body - Queue Member
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "user": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "selfUri": ""
}
	*/
	function updateQueuesIdMembersByMemberId(id, memberId, expand, body){
		var apipath = '/api/v1/processautomation/queues/{id}/members/{memberId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        apipath = apipath.replace('{memberId}', memberId);

        if(memberId === undefined && memberId !== null){
			throw 'Missing required  parameter: memberId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateQueuesIdMembersByMemberId = updateQueuesIdMembersByMemberId;
	/**
     * @summary Delete a member from a queue
	 * @description This will delete the specified member from the given queue.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Queue ID
	* @param {string} memberId - Member ID
	*/
	function deleteQueuesIdMembersByMemberId(id, memberId){
		var apipath = '/api/v1/processautomation/queues/{id}/members/{memberId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        apipath = apipath.replace('{memberId}', memberId);

        if(memberId === undefined && memberId !== null){
			throw 'Missing required  parameter: memberId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteQueuesIdMembersByMemberId = deleteQueuesIdMembersByMemberId;
	/**
     * @summary Generates a list of active and/or completed flows based upon the specified filters and facets.
	 * @description Searches the pool of running and completed flow instances given a ReportRequest object and returns the matching results.
	 * @memberOf ProcessautomationApi#
	* @param {} body - ReportRequest data containing search parameters and paging response.
	 * @example
	 * Body Example:
	 * {
   "pageNumber": 0,
   "pageSize": 0,
   "facetRequests": [],
   "sort": [],
   "filters": [],
   "groupBy": []
}
	*/
	function createReportsFlowSearch(body){
		var apipath = '/api/v1/processautomation/reports/flow/search';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createReportsFlowSearch = createReportsFlowSearch;
	/**
     * @summary Search the currently running workitems
	 * @description Searches the pool of running workitems given a SearchRequest object and returns the results.  Some search examples:<br>Note the various filters, sort and searchPhrase options can be combined/omitted as needed.<br>Search for a specific definition id:<br>{<br>&nbsp;&nbsp;&nbsp;"filters": [<br>&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "flowConfigId.id",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "STRING",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"operator": "EQUALS",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"values": [<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"e88db9fb-aaa0-46f8-81d5-4a30e323bdfa"<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]<br>&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;]<br>}<br><br>Search for a specific execution instance and sort on the config name:<br>{<br>&nbsp;&nbsp;&nbsp;"filters": [<br>&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "flowExecId",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "STRING",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"operator": "EQUALS",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"values": [<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"99"<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]<br>&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;],<br>&nbsp;&nbsp;&nbsp;"sort" : [<br>&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name":"flowConfigName",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"sortType":"ASCENDING"<br>&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;]<br>}<br>Search for a specific phrase:<br>{<br>&nbsp;&nbsp;&nbsp;"searchPhrase" : "hi mom!" <br>}<br>
	 * @memberOf ProcessautomationApi#
	* @param {} body - SearchRequest data containing search parameters and paging response.
	 * @example
	 * Body Example:
	 * {
   "searchPhrase": "",
   "pageNumber": 0,
   "pageSize": 0,
   "searchFields": [],
   "facetRequests": [],
   "sort": [],
   "filters": []
}
	*/
	function createWorkitemsInstancesCommandsSearch(body){
		var apipath = '/api/v1/processautomation/workitems/instances/commands/search';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createWorkitemsInstancesCommandsSearch = createWorkitemsInstancesCommandsSearch;
	/**
     * @summary Get a Work Item's Details
	 * @description Gets the details of a work item including the information needed to display its simple form, if it has one.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Work Item Exec ID
	* @param {string} expand - Expand instructions for the return value.
	all,
	users,
	workspace,
	queues,
	document,
	flowconfigid,
	workitemcache,
	*/
	function getWorkitemsInstancesId(id, expand){
		var apipath = '/api/v1/processautomation/workitems/instances/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWorkitemsInstancesId = getWorkitemsInstancesId;
	/**
     * @summary Submits a work item
	 * @description <p>Signals the flow to continue executing using the specified command of the given work item.</p><p>Common error conditions to be aware of are:<dl><dd>error.workflow.flows.workItem.ownership - the given user was denied the ability to own the work item</dd><dd>error.workflow.flows.workItem.owned - the work item is already owned by somebody else</dd><dd>error.workflow.flows.workItem.notExist - the work item does not exist, possibly because it was already submitted by someone else</dd><dd>error.workflow.flows.workItem.submit - some other error submitting the work item</dd></dl></p>
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Work Item Exec ID
	* @param {} body - submit request data
	 * @example
	 * Body Example:
	 * {
   "commandId": "",
   "dataItems": []
}
	*/
	function createWorkitemsInstancesIdCommandsSubmit(id, body){
		var apipath = '/api/v1/processautomation/workitems/instances/{id}/commands/submit';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createWorkitemsInstancesIdCommandsSubmit = createWorkitemsInstancesIdCommandsSubmit;
	/**
     * @summary Attempts to take ownership of a work item
	 * @description Basically, this is called by a client to assign ownership to the currently connected user.  Only the user that has ownership can submit against a work item.  This will be rejected is someone else owns it, like if it’s in a queue and somebody grabs it at the same time.  The first guy wins the ownership. 
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Work Item Exec ID
	*/
	function createWorkitemsInstancesIdCommandsTakeownership(id){
		var apipath = '/api/v1/processautomation/workitems/instances/{id}/commands/takeownership';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createWorkitemsInstancesIdCommandsTakeownership = createWorkitemsInstancesIdCommandsTakeownership;
	/**
     * @summary Transfers a work item
	 * @description Unassigns a work item, if currently assigned, and offers a work item to another user or queue; the work item is initially unassigned (meaning un-owned).   You have to own the item to transfer it, unless you’re an admin and using a “force” flag.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Work Item Exec ID
	* @param {} body - transfer request data
	 * @example
	 * Body Example:
	 * {
   "transferTargetType": "",
   "transferTarget": ""
}
	*/
	function createWorkitemsInstancesIdCommandsTransfer(id, body){
		var apipath = '/api/v1/processautomation/workitems/instances/{id}/commands/transfer';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createWorkitemsInstancesIdCommandsTransfer = createWorkitemsInstancesIdCommandsTransfer;
	/**
     * @summary Gets an optional cache for a given workItem.
	 * @description Gets a user saved cache of workItem data.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Work Item Exec ID
	*/
	function getWorkitemsInstancesIdWorkitemcache(id){
		var apipath = '/api/v1/processautomation/workitems/instances/{id}/workitemcache';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWorkitemsInstancesIdWorkitemcache = getWorkitemsInstancesIdWorkitemcache;
	/**
     * @summary Saves workItem data to a temporary location.
	 * @description The cache is automatically deleted when a workItem is submitted.
	 * @memberOf ProcessautomationApi#
	* @param {string} id - Work Item Exec ID
	* @param {} body - workItem cache data
	 * @example
	 * Body Example:
	 * {
   "workItemExecId": "",
   "saveTime": "",
   "saveUser": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "saveComment": "",
   "dataItems": []
}
	*/
	function updateWorkitemsInstancesIdWorkitemcache(id, body){
		var apipath = '/api/v1/processautomation/workitems/instances/{id}/workitemcache';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateWorkitemsInstancesIdWorkitemcache = updateWorkitemsInstancesIdWorkitemcache;

    return self;
};

/**
* @class
* @example
* var api = new QualityApi(pureCloudSession);
*/
var QualityApi = function (pureCloudSession) {
	/**
     * @summary Gets a list of Agent Activities
	 * @description Including the number of evaluations and average evaluation score
	 * @memberOf QualityApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	* @param {string} startTime - Start time of agent activity
	* @param {string} endTime - End time of agent activity
	* @param {array} agentUserId - user id of agent requested
	* @param {string} evaluatorUserId - user id of the evaluator
	* @param {string} name - name
	*/
	function getAgentsActivity(pageSize, pageNumber, sortBy, expand, startTime, endTime, agentUserId, evaluatorUserId, name){
		var apipath = '/api/v1/quality/agents/activity';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(startTime !== undefined && startTime !== null){
			queryParameters.startTime = startTime;
		}


		if(endTime !== undefined && endTime !== null){
			queryParameters.endTime = endTime;
		}


		if(agentUserId !== undefined && agentUserId !== null){
			queryParameters.agentUserId = agentUserId;
		}


		if(evaluatorUserId !== undefined && evaluatorUserId !== null){
			queryParameters.evaluatorUserId = evaluatorUserId;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getAgentsActivity = getAgentsActivity;
	/**
     * @summary Get the list of calibrations
	 * @description 
	 * @memberOf QualityApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	* @param {string} conversationId - conversation id
	* @param {string} startTime - Beginning of the calibration query
	* @param {string} endTime - end of the calibration query
	* @param {string} calibratorId - user id of calibrator
	*/
	function getCalibrations(pageSize, pageNumber, sortBy, expand, conversationId, startTime, endTime, calibratorId){
		var apipath = '/api/v1/quality/calibrations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(conversationId !== undefined && conversationId !== null){
			queryParameters.conversationId = conversationId;
		}


		if(startTime !== undefined && startTime !== null){
			queryParameters.startTime = startTime;
		}


		if(endTime !== undefined && endTime !== null){
			queryParameters.endTime = endTime;
		}


		if(calibratorId !== undefined && calibratorId !== null){
			queryParameters.calibratorId = calibratorId;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCalibrations = getCalibrations;
	/**
     * @summary Create a calibration
	 * @description 
	 * @memberOf QualityApi#
	* @param {} body - calibration
	* @param {string} expand - calibratorId
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "calibrator": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "agent": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "conversation": {
      "id": "",
      "name": "",
      "startTime": "",
      "endTime": "",
      "participants": [],
      "conversationIds": [],
      "maxParticipants": 0,
      "recordingState": "",
      "selfUri": ""
   },
   "evaluationForm": {
      "id": "",
      "name": "",
      "type": "",
      "modifiedDate": "",
      "published": true,
      "contextId": "",
      "questionGroups": [],
      "publishedVersions": {},
      "selfUri": ""
   },
   "contextId": "",
   "averageScore": 0,
   "highScore": 0,
   "lowScore": 0,
   "createdDate": "",
   "evaluations": [],
   "evaluators": [],
   "scoringIndex": {
      "id": "",
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
      "isScoringIndex": true,
      "selfUri": ""
   },
   "expertEvaluator": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "selfUri": ""
}
	*/
	function createCalibrations(body, expand){
		var apipath = '/api/v1/quality/calibrations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createCalibrations = createCalibrations;
	/**
     * @summary Get a calibration by id.
	 * @description 
	 * @memberOf QualityApi#
	* @param {string} calibrationId - Calibration ID
	* @param {string} calibratorId - calibratorId
	*/
	function getCalibration(calibrationId, calibratorId){
		var apipath = '/api/v1/quality/calibrations/{calibrationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{calibrationId}', calibrationId);

        if(calibrationId === undefined && calibrationId !== null){
			throw 'Missing required  parameter: calibrationId';
        }


		if(calibratorId !== undefined && calibratorId !== null){
			queryParameters.calibratorId = calibratorId;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCalibration = getCalibration;
	/**
     * @summary Update a calibration to the specified calibration via PUT.  Editable fields include: evaluators, expertEvaluator, and scoringIndex
	 * @description 
	 * @memberOf QualityApi#
	* @param {string} calibrationId - Calibration ID
	* @param {} body - Calibration
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "calibrator": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "agent": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "conversation": {
      "id": "",
      "name": "",
      "startTime": "",
      "endTime": "",
      "participants": [],
      "conversationIds": [],
      "maxParticipants": 0,
      "recordingState": "",
      "selfUri": ""
   },
   "evaluationForm": {
      "id": "",
      "name": "",
      "type": "",
      "modifiedDate": "",
      "published": true,
      "contextId": "",
      "questionGroups": [],
      "publishedVersions": {},
      "selfUri": ""
   },
   "contextId": "",
   "averageScore": 0,
   "highScore": 0,
   "lowScore": 0,
   "createdDate": "",
   "evaluations": [],
   "evaluators": [],
   "scoringIndex": {
      "id": "",
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
      "isScoringIndex": true,
      "selfUri": ""
   },
   "expertEvaluator": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "selfUri": ""
}
	*/
	function updateCalibration(calibrationId, body){
		var apipath = '/api/v1/quality/calibrations/{calibrationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{calibrationId}', calibrationId);

        if(calibrationId === undefined && calibrationId !== null){
			throw 'Missing required  parameter: calibrationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateCalibration = updateCalibration;
	/**
     * @summary Delete a calibration by id.
	 * @description 
	 * @memberOf QualityApi#
	* @param {string} calibrationId - Calibration ID
	* @param {string} calibratorId - calibratorId
	*/
	function deleteCalibration(calibrationId, calibratorId){
		var apipath = '/api/v1/quality/calibrations/{calibrationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{calibrationId}', calibrationId);

        if(calibrationId === undefined && calibrationId !== null){
			throw 'Missing required  parameter: calibrationId';
        }


		if(calibratorId !== undefined && calibratorId !== null){
			queryParameters.calibratorId = calibratorId;
		}


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteCalibration = deleteCalibration;
	/**
     * @summary Get audits for conversation or recording
	 * @description 
	 * @memberOf QualityApi#
	* @param {string} conversationId - Conversation ID
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	* @param {string} recordingId - id of the recording
	* @param {string} entityType - entity type options: Recording, Calibration, Evaluation, Annotation
	*/
	function getConversationAudits(conversationId, pageSize, pageNumber, sortBy, expand, recordingId, entityType){
		var apipath = '/api/v1/quality/conversations/{conversationId}/audits';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(recordingId !== undefined && recordingId !== null){
			queryParameters.recordingId = recordingId;
		}


		if(entityType !== undefined && entityType !== null){
			queryParameters.entityType = entityType;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationAudits = getConversationAudits;
	/**
     * @summary Create an evaluation
	 * @description 
	 * @memberOf QualityApi#
	* @param {string} conversationId - 
	* @param {} body - evaluation
	* @param {string} expand - evaluatorId
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "conversation": {
      "id": "",
      "name": "",
      "startTime": "",
      "endTime": "",
      "participants": [],
      "conversationIds": [],
      "maxParticipants": 0,
      "recordingState": "",
      "selfUri": ""
   },
   "evaluationForm": {
      "id": "",
      "name": "",
      "type": "",
      "modifiedDate": "",
      "published": true,
      "contextId": "",
      "questionGroups": [],
      "publishedVersions": {},
      "selfUri": ""
   },
   "evaluator": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "agent": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "calibration": {
      "id": "",
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
      "expertEvaluator": {},
      "selfUri": ""
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
      "id": "",
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
      "wrapupCodes": [],
      "mediaSettings": {},
      "bullseye": {},
      "acwSettings": {},
      "phoneNumber": "",
      "skillEvaluationMethod": "",
      "queueFlow": {},
      "callingPartyName": "",
      "callingPartyNumber": "",
      "memberCount": 0,
      "selfUri": ""
   },
   "isScoringIndex": true,
   "selfUri": ""
}
	*/
	function createConversationEvaluations(conversationId, body, expand){
		var apipath = '/api/v1/quality/conversations/{conversationId}/evaluations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createConversationEvaluations = createConversationEvaluations;
	/**
     * @summary Get an evaluation
	 * @description 
	 * @memberOf QualityApi#
	* @param {string} conversationId - 
	* @param {string} evaluationId - 
	* @param {string} expand - agent, evaluator, evaluationForm
	*/
	function getConversationEvaluationsByEvaluationId(conversationId, evaluationId, expand){
		var apipath = '/api/v1/quality/conversations/{conversationId}/evaluations/{evaluationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{evaluationId}', evaluationId);

        if(evaluationId === undefined && evaluationId !== null){
			throw 'Missing required  parameter: evaluationId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationEvaluationsByEvaluationId = getConversationEvaluationsByEvaluationId;
	/**
     * @summary Update an evaluation
	 * @description 
	 * @memberOf QualityApi#
	* @param {string} conversationId - 
	* @param {string} evaluationId - 
	* @param {} body - evaluation
	* @param {string} expand - evaluatorId
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "conversation": {
      "id": "",
      "name": "",
      "startTime": "",
      "endTime": "",
      "participants": [],
      "conversationIds": [],
      "maxParticipants": 0,
      "recordingState": "",
      "selfUri": ""
   },
   "evaluationForm": {
      "id": "",
      "name": "",
      "type": "",
      "modifiedDate": "",
      "published": true,
      "contextId": "",
      "questionGroups": [],
      "publishedVersions": {},
      "selfUri": ""
   },
   "evaluator": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "agent": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "calibration": {
      "id": "",
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
      "expertEvaluator": {},
      "selfUri": ""
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
      "id": "",
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
      "wrapupCodes": [],
      "mediaSettings": {},
      "bullseye": {},
      "acwSettings": {},
      "phoneNumber": "",
      "skillEvaluationMethod": "",
      "queueFlow": {},
      "callingPartyName": "",
      "callingPartyNumber": "",
      "memberCount": 0,
      "selfUri": ""
   },
   "isScoringIndex": true,
   "selfUri": ""
}
	*/
	function updateConversationEvaluationsByEvaluationId(conversationId, evaluationId, body, expand){
		var apipath = '/api/v1/quality/conversations/{conversationId}/evaluations/{evaluationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{evaluationId}', evaluationId);

        if(evaluationId === undefined && evaluationId !== null){
			throw 'Missing required  parameter: evaluationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateConversationEvaluationsByEvaluationId = updateConversationEvaluationsByEvaluationId;
	/**
     * @summary Delete an evaluation
	 * @description 
	 * @memberOf QualityApi#
	* @param {string} conversationId - 
	* @param {string} evaluationId - 
	* @param {string} expand - evaluatorId
	*/
	function deleteConversationEvaluationsByEvaluationId(conversationId, evaluationId, expand){
		var apipath = '/api/v1/quality/conversations/{conversationId}/evaluations/{evaluationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{evaluationId}', evaluationId);

        if(evaluationId === undefined && evaluationId !== null){
			throw 'Missing required  parameter: evaluationId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteConversationEvaluationsByEvaluationId = deleteConversationEvaluationsByEvaluationId;
	/**
     * @summary Queries Evaluations and returns a paged list
	 * @description Query params must include one of conversationId, evaluatorUserId, or agentUserId
	 * @memberOf QualityApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
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
	function getEvaluationsQuery(pageSize, pageNumber, sortBy, expand, conversationId, agentUserId, evaluatorUserId, queueId, startTime, endTime, evaluationState, isReleased, agentHasRead, expandAnswerTotalScores, maximum){
		var apipath = '/api/v1/quality/evaluations/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(conversationId !== undefined && conversationId !== null){
			queryParameters.conversationId = conversationId;
		}


		if(agentUserId !== undefined && agentUserId !== null){
			queryParameters.agentUserId = agentUserId;
		}


		if(evaluatorUserId !== undefined && evaluatorUserId !== null){
			queryParameters.evaluatorUserId = evaluatorUserId;
		}


		if(queueId !== undefined && queueId !== null){
			queryParameters.queueId = queueId;
		}


		if(startTime !== undefined && startTime !== null){
			queryParameters.startTime = startTime;
		}


		if(endTime !== undefined && endTime !== null){
			queryParameters.endTime = endTime;
		}


		if(evaluationState !== undefined && evaluationState !== null){
			queryParameters.evaluationState = evaluationState;
		}


		if(isReleased !== undefined && isReleased !== null){
			queryParameters.isReleased = isReleased;
		}


		if(agentHasRead !== undefined && agentHasRead !== null){
			queryParameters.agentHasRead = agentHasRead;
		}


		if(expandAnswerTotalScores !== undefined && expandAnswerTotalScores !== null){
			queryParameters.expandAnswerTotalScores = expandAnswerTotalScores;
		}


		if(maximum !== undefined && maximum !== null){
			queryParameters.maximum = maximum;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEvaluationsQuery = getEvaluationsQuery;
	/**
     * @summary Query evaluations
	 * @description 
	 * @memberOf QualityApi#
	* @param {} body - query
	* @param {string} expand - evaluator,agent
	 * @example
	 * Body Example:
	 * {
   "conversationId": "",
   "userType": "",
   "currentUserId": "",
   "agentId": "",
   "queueId": "",
   "interval": "",
   "evaluationState": [],
   "isReleased": true,
   "agentHasRead": true,
   "expandAnswerTotalScores": true,
   "maximum": 0
}
	*/
	function createEvaluationsQuery(body, expand){
		var apipath = '/api/v1/quality/evaluations/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createEvaluationsQuery = createEvaluationsQuery;
	/**
     * @summary Score evaluation
	 * @description 
	 * @memberOf QualityApi#
	* @param {} body - evaluationAndScoringSet
	 * @example
	 * Body Example:
	 * {
   "evaluationForm": {
      "id": "",
      "name": "",
      "type": "",
      "modifiedDate": "",
      "published": true,
      "contextId": "",
      "questionGroups": [],
      "publishedVersions": {},
      "selfUri": ""
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
	function createEvaluationsScoring(body){
		var apipath = '/api/v1/quality/evaluations/scoring';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createEvaluationsScoring = createEvaluationsScoring;
	/**
     * @summary Get an evaluator activity
	 * @description 
	 * @memberOf QualityApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	* @param {string} startTime - The start time specified
	* @param {string} endTime - The end time specified
	* @param {string} name - Evaluator name
	* @param {array} permission - permission strings
	*/
	function getEvaluatorsActivity(pageSize, pageNumber, sortBy, expand, startTime, endTime, name, permission){
		var apipath = '/api/v1/quality/evaluators/activity';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(startTime !== undefined && startTime !== null){
			queryParameters.startTime = startTime;
		}


		if(endTime !== undefined && endTime !== null){
			queryParameters.endTime = endTime;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(permission !== undefined && permission !== null){
			queryParameters.permission = permission;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEvaluatorsActivity = getEvaluatorsActivity;
	/**
     * @summary Get the list of evaluation forms
	 * @description 
	 * @memberOf QualityApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} expand - Expand
	* @param {string} name - Name
	*/
	function getForms(pageSize, pageNumber, expand, name){
		var apipath = '/api/v1/quality/forms';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getForms = getForms;
	/**
     * @summary Create an evaluation form.
	 * @description 
	 * @memberOf QualityApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
      "previousUri": "",
      "firstUri": "",
      "nextUri": "",
      "lastUri": "",
      "pageCount": 0
   },
   "selfUri": ""
}
	*/
	function createForms(body){
		var apipath = '/api/v1/quality/forms';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createForms = createForms;
	/**
     * @summary Get an evaluation form
	 * @description 
	 * @memberOf QualityApi#
	* @param {string} formId - Form ID
	*/
	function getForm(formId){
		var apipath = '/api/v1/quality/forms/{formId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{formId}', formId);

        if(formId === undefined && formId !== null){
			throw 'Missing required  parameter: formId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getForm = getForm;
	/**
     * @summary Update an evaluation form.
	 * @description 
	 * @memberOf QualityApi#
	* @param {string} formId - Form ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
      "previousUri": "",
      "firstUri": "",
      "nextUri": "",
      "lastUri": "",
      "pageCount": 0
   },
   "selfUri": ""
}
	*/
	function updateForm(formId, body){
		var apipath = '/api/v1/quality/forms/{formId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{formId}', formId);

        if(formId === undefined && formId !== null){
			throw 'Missing required  parameter: formId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateForm = updateForm;
	/**
     * @summary Delete an evaluation form.
	 * @description 
	 * @memberOf QualityApi#
	* @param {string} formId - Form ID
	*/
	function deleteForm(formId){
		var apipath = '/api/v1/quality/forms/{formId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{formId}', formId);

        if(formId === undefined && formId !== null){
			throw 'Missing required  parameter: formId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteForm = deleteForm;
	/**
     * @summary Gets all the revisions for a specific evaluation.
	 * @description 
	 * @memberOf QualityApi#
	* @param {string} formId - Form ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getFormVersions(formId, pageSize, pageNumber){
		var apipath = '/api/v1/quality/forms/{formId}/versions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{formId}', formId);

        if(formId === undefined && formId !== null){
			throw 'Missing required  parameter: formId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFormVersions = getFormVersions;
	/**
     * @summary Get the published evaluation forms.
	 * @description 
	 * @memberOf QualityApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} name - Name
	*/
	function getPublishedforms(pageSize, pageNumber, name){
		var apipath = '/api/v1/quality/publishedforms';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPublishedforms = getPublishedforms;
	/**
     * @summary Publish an evaluation form.
	 * @description 
	 * @memberOf QualityApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
      "previousUri": "",
      "firstUri": "",
      "nextUri": "",
      "lastUri": "",
      "pageCount": 0
   },
   "selfUri": ""
}
	*/
	function createPublishedforms(body){
		var apipath = '/api/v1/quality/publishedforms';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createPublishedforms = createPublishedforms;
	/**
     * @summary Get the published evaluation forms.
	 * @description 
	 * @memberOf QualityApi#
	* @param {string} formId - Form ID
	*/
	function getPublishedformsForm(formId){
		var apipath = '/api/v1/quality/publishedforms/{formId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{formId}', formId);

        if(formId === undefined && formId !== null){
			throw 'Missing required  parameter: formId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPublishedformsForm = getPublishedformsForm;

    return self;
};

/**
* @class
* @example
* var api = new ResponsemanagementApi(pureCloudSession);
*/
var ResponsemanagementApi = function (pureCloudSession) {
	/**
     * @summary Gets a list of existing response libraries.
	 * @description 
	 * @memberOf ResponsemanagementApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	*/
	function getLibraries(pageNumber, pageSize){
		var apipath = '/api/v1/responsemanagement/libraries';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getLibraries = getLibraries;
	/**
     * @summary Create a response library.
	 * @description 
	 * @memberOf ResponsemanagementApi#
	* @param {} body - Library
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "version": 0,
   "createdBy": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "dateCreated": "",
   "selfUri": ""
}
	*/
	function createLibraries(body){
		var apipath = '/api/v1/responsemanagement/libraries';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createLibraries = createLibraries;
	/**
     * @summary Get details about an existing response library.
	 * @description 
	 * @memberOf ResponsemanagementApi#
	* @param {string} libraryId - Library ID
	*/
	function getLibrariesLibrary(libraryId){
		var apipath = '/api/v1/responsemanagement/libraries/{libraryId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{libraryId}', libraryId);

        if(libraryId === undefined && libraryId !== null){
			throw 'Missing required  parameter: libraryId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getLibrariesLibrary = getLibrariesLibrary;
	/**
     * @summary Update an existing response library.
	 * @description Fields that can be updated: name. The most recent version is required for updates.
	 * @memberOf ResponsemanagementApi#
	* @param {string} libraryId - Library ID
	* @param {} body - Library
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "version": 0,
   "createdBy": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "dateCreated": "",
   "selfUri": ""
}
	*/
	function updateLibrariesLibrary(libraryId, body){
		var apipath = '/api/v1/responsemanagement/libraries/{libraryId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{libraryId}', libraryId);

        if(libraryId === undefined && libraryId !== null){
			throw 'Missing required  parameter: libraryId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateLibrariesLibrary = updateLibrariesLibrary;
	/**
     * @summary Delete an existing response library.
	 * @description This will remove any responses associated with the library.
	 * @memberOf ResponsemanagementApi#
	* @param {string} libraryId - Library ID
	*/
	function deleteLibrariesLibrary(libraryId){
		var apipath = '/api/v1/responsemanagement/libraries/{libraryId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{libraryId}', libraryId);

        if(libraryId === undefined && libraryId !== null){
			throw 'Missing required  parameter: libraryId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteLibrariesLibrary = deleteLibrariesLibrary;
	/**
     * @summary Gets a list of existing responses.
	 * @description 
	 * @memberOf ResponsemanagementApi#
	* @param {string} libraryId - Library ID
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	*/
	function getResponses(libraryId, pageNumber, pageSize){
		var apipath = '/api/v1/responsemanagement/responses';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(libraryId !== undefined && libraryId !== null){
			queryParameters.libraryId = libraryId;
		}

        if(libraryId === undefined && libraryId !== null){
			throw 'Missing required  parameter: libraryId';
        }


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getResponses = getResponses;
	/**
     * @summary Create a response.
	 * @description 
	 * @memberOf ResponsemanagementApi#
	* @param {} body - Response
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "version": 0,
   "libraries": [],
   "texts": [],
   "createdBy": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "dateCreated": "",
   "selfUri": ""
}
	*/
	function createResponses(body){
		var apipath = '/api/v1/responsemanagement/responses';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createResponses = createResponses;
	/**
     * @summary Query responses
	 * @description 
	 * @memberOf ResponsemanagementApi#
	* @param {} body - Response
	 * @example
	 * Body Example:
	 * {
   "queryPhrase": "",
   "pageSize": 0,
   "filters": []
}
	*/
	function createResponsesQuery(body){
		var apipath = '/api/v1/responsemanagement/responses/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createResponsesQuery = createResponsesQuery;
	/**
     * @summary Get details about an existing response.
	 * @description 
	 * @memberOf ResponsemanagementApi#
	* @param {string} responseId - Response ID
	*/
	function getResponse(responseId){
		var apipath = '/api/v1/responsemanagement/responses/{responseId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{responseId}', responseId);

        if(responseId === undefined && responseId !== null){
			throw 'Missing required  parameter: responseId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getResponse = getResponse;
	/**
     * @summary Update an existing response.
	 * @description Fields that can be updated: name, libraries, and texts. The most recent version is required for updates.
	 * @memberOf ResponsemanagementApi#
	* @param {string} responseId - Response ID
	* @param {} body - Response
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "version": 0,
   "libraries": [],
   "texts": [],
   "createdBy": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "dateCreated": "",
   "selfUri": ""
}
	*/
	function updateResponse(responseId, body){
		var apipath = '/api/v1/responsemanagement/responses/{responseId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{responseId}', responseId);

        if(responseId === undefined && responseId !== null){
			throw 'Missing required  parameter: responseId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateResponse = updateResponse;
	/**
     * @summary Delete an existing response.
	 * @description This will remove the response from any libraries associated with it.
	 * @memberOf ResponsemanagementApi#
	* @param {string} responseId - Response ID
	*/
	function deleteResponse(responseId){
		var apipath = '/api/v1/responsemanagement/responses/{responseId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{responseId}', responseId);

        if(responseId === undefined && responseId !== null){
			throw 'Missing required  parameter: responseId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteResponse = deleteResponse;

    return self;
};

/**
* @class
* @example
* var api = new RoutingApi(pureCloudSession);
*/
var RoutingApi = function (pureCloudSession) {
	/**
     * @summary Get domains
	 * @description 
	 * @memberOf RoutingApi#
	*/
	function getEmailDomains(){
		var apipath = '/api/v1/routing/email/domains';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEmailDomains = getEmailDomains;
	/**
     * @summary Create a domain
	 * @description 
	 * @memberOf RoutingApi#
	* @param {} body - Domain
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "mxRecordStatus": "",
   "selfUri": ""
}
	*/
	function createEmailDomains(body){
		var apipath = '/api/v1/routing/email/domains';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createEmailDomains = createEmailDomains;
	/**
     * @summary Get routes
	 * @description 
	 * @memberOf RoutingApi#
	* @param {string} domain - email domain
	*/
	function getEmailDomainRoutes(domain){
		var apipath = '/api/v1/routing/email/domains/{domain}/routes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{domain}', domain);

        if(domain === undefined && domain !== null){
			throw 'Missing required  parameter: domain';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEmailDomainRoutes = getEmailDomainRoutes;
	/**
     * @summary Create a route
	 * @description 
	 * @memberOf RoutingApi#
	* @param {string} domain - email domain
	* @param {} body - Route
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "fromEmail": "",
   "spamThreshold": {},
   "selfUri": ""
}
	*/
	function createEmailDomainRoutes(domain, body){
		var apipath = '/api/v1/routing/email/domains/{domain}/routes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{domain}', domain);

        if(domain === undefined && domain !== null){
			throw 'Missing required  parameter: domain';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createEmailDomainRoutes = createEmailDomainRoutes;
	/**
     * @summary Get a route
	 * @description 
	 * @memberOf RoutingApi#
	* @param {string} domain - email domain
	* @param {string} id - route ID
	*/
	function getEmailDomainRoutesById(domain, id){
		var apipath = '/api/v1/routing/email/domains/{domain}/routes/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{domain}', domain);

        if(domain === undefined && domain !== null){
			throw 'Missing required  parameter: domain';
        }

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEmailDomainRoutesById = getEmailDomainRoutesById;
	/**
     * @summary Update a route
	 * @description 
	 * @memberOf RoutingApi#
	* @param {string} domain - email domain
	* @param {string} id - route ID
	* @param {} body - Route
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "fromEmail": "",
   "spamThreshold": {},
   "selfUri": ""
}
	*/
	function updateEmailDomainRoutesById(domain, id, body){
		var apipath = '/api/v1/routing/email/domains/{domain}/routes/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{domain}', domain);

        if(domain === undefined && domain !== null){
			throw 'Missing required  parameter: domain';
        }

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateEmailDomainRoutesById = updateEmailDomainRoutesById;
	/**
     * @summary Delete a route
	 * @description 
	 * @memberOf RoutingApi#
	* @param {string} domain - email domain
	* @param {string} id - route ID
	*/
	function deleteEmailDomainRoutesById(domain, id){
		var apipath = '/api/v1/routing/email/domains/{domain}/routes/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{domain}', domain);

        if(domain === undefined && domain !== null){
			throw 'Missing required  parameter: domain';
        }

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteEmailDomainRoutesById = deleteEmailDomainRoutesById;
	/**
     * @summary Delete a domain
	 * @description 
	 * @memberOf RoutingApi#
	* @param {string} id - domain ID
	*/
	function deleteEmailDomainsId(id){
		var apipath = '/api/v1/routing/email/domains/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteEmailDomainsId = deleteEmailDomainsId;
	/**
     * @summary Get email setup
	 * @description 
	 * @memberOf RoutingApi#
	*/
	function getEmailSetup(){
		var apipath = '/api/v1/routing/email/setup';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEmailSetup = getEmailSetup;
	/**
     * @summary Get list of queues.
	 * @description 
	 * @memberOf RoutingApi#
	* @param {string} QueueId - Queue ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	* @param {string} name - Name
	* @param {boolean} active - Active
	*/
	function getQueues(QueueId, pageSize, pageNumber, sortBy, name, active){
		var apipath = '/api/v1/routing/queues';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{QueueId}', QueueId);

        if(QueueId === undefined && QueueId !== null){
			throw 'Missing required  parameter: QueueId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(active !== undefined && active !== null){
			queryParameters.active = active;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQueues = getQueues;
	/**
     * @summary Create queue
	 * @description 
	 * @memberOf RoutingApi#
	* @param {string} QueueId - Queue ID
	* @param {} body - Queue
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "wrapupCodes": [],
   "mediaSettings": {},
   "bullseye": {
      "rings": []
   },
   "acwSettings": {
      "wrapupPrompt": "",
      "timeoutMs": 0
   },
   "phoneNumber": "",
   "skillEvaluationMethod": "",
   "queueFlow": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "callingPartyName": "",
   "callingPartyNumber": "",
   "memberCount": 0,
   "selfUri": ""
}
	*/
	function createQueues(QueueId, body){
		var apipath = '/api/v1/routing/queues';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{QueueId}', QueueId);

        if(QueueId === undefined && QueueId !== null){
			throw 'Missing required  parameter: QueueId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createQueues = createQueues;
	/**
     * @summary Get details about this queue.
	 * @description 
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	*/
	function getQueue(queueId){
		var apipath = '/api/v1/routing/queues/{queueId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQueue = getQueue;
	/**
     * @summary Update a queue
	 * @description 
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {} body - Queue
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "wrapupCodes": [],
   "mediaSettings": {},
   "bullseye": {
      "rings": []
   },
   "acwSettings": {
      "wrapupPrompt": "",
      "timeoutMs": 0
   },
   "phoneNumber": "",
   "skillEvaluationMethod": "",
   "queueFlow": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "callingPartyName": "",
   "callingPartyNumber": "",
   "memberCount": 0,
   "selfUri": ""
}
	*/
	function updateQueue(queueId, body){
		var apipath = '/api/v1/routing/queues/{queueId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateQueue = updateQueue;
	/**
     * @summary Delete a queue
	 * @description 
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	*/
	function deleteQueue(queueId){
		var apipath = '/api/v1/routing/queues/{queueId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteQueue = deleteQueue;
	/**
     * @summary Get members in a queue
	 * @description Get the list of members of a queue
	 * @memberOf RoutingApi#
	* @param {string} queueId - Get the list of members of a queue
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} userId - UserID
	* @param {string} statusId - Status ID
	* @param {boolean} joined - Joined
	* @param {string} expand - expand
	routingStatus,
	*/
	function getQueueMembers(queueId, pageSize, pageNumber, userId, statusId, joined, expand){
		var apipath = '/api/v1/routing/queues/{queueId}/members';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(userId !== undefined && userId !== null){
			queryParameters.userId = userId;
		}


		if(statusId !== undefined && statusId !== null){
			queryParameters.statusId = statusId;
		}


		if(joined !== undefined && joined !== null){
			queryParameters.joined = joined;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQueueMembers = getQueueMembers;
	/**
     * @summary Join or unjoin a user to the queue.
	 * @description 
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {string} memberId - Member/User ID
	* @param {} body - To join queue ~ "joined":true
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "user": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "ringNumber": 0,
   "joined": true,
   "memberBy": "",
   "routingStatus": {
      "userId": "",
      "status": "",
      "startTime": ""
   },
   "selfUri": ""
}
	*/
	function updateQueueMembersByMemberId(queueId, memberId, body){
		var apipath = '/api/v1/routing/queues/{queueId}/members/{memberId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        apipath = apipath.replace('{memberId}', memberId);

        if(memberId === undefined && memberId !== null){
			throw 'Missing required  parameter: memberId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateQueueMembersByMemberId = updateQueueMembersByMemberId;
	/**
     * @summary Get the members of this queue
	 * @description 
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	* @param {string} expand - expand
	* @param {boolean} directMembers - Only get users that are direct members of the queue
	*/
	function getQueueUsers(queueId, pageSize, pageNumber, sortBy, expand, directMembers){
		var apipath = '/api/v1/routing/queues/{queueId}/users';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(directMembers !== undefined && directMembers !== null){
			queryParameters.directMembers = directMembers;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQueueUsers = getQueueUsers;
	/**
     * @summary Bulk add or delete up to 100 queue members
	 * @description 
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {} body - Queue Members
	* @param {boolean} doDelete - True to delete queue members
	*/
	function createQueueUsers(queueId, body, doDelete){
		var apipath = '/api/v1/routing/queues/{queueId}/users';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(doDelete !== undefined && doDelete !== null){
			queryParameters.delete = doDelete;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createQueueUsers = createQueueUsers;
	/**
     * @summary Join or unjoin a set of users for a queue
	 * @description 
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {} body - Queue Members
	*/
	function patchQueueUsers(queueId, body){
		var apipath = '/api/v1/routing/queues/{queueId}/users';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchQueueUsers = patchQueueUsers;
	/**
     * @summary Delete queue member
	 * @description 
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {string} memberId - Member ID
	*/
	function deleteQueueUsersByMemberId(queueId, memberId){
		var apipath = '/api/v1/routing/queues/{queueId}/users/{memberId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        apipath = apipath.replace('{memberId}', memberId);

        if(memberId === undefined && memberId !== null){
			throw 'Missing required  parameter: memberId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteQueueUsersByMemberId = deleteQueueUsersByMemberId;
	/**
     * @summary Update the ring number of joined status for a User in a Queue
	 * @description 
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {string} memberId - Member ID
	* @param {} body - Queue Member
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "user": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "ringNumber": 0,
   "joined": true,
   "memberBy": "",
   "routingStatus": {
      "userId": "",
      "status": "",
      "startTime": ""
   },
   "selfUri": ""
}
	*/
	function patchQueueUsersByMemberId(queueId, memberId, body){
		var apipath = '/api/v1/routing/queues/{queueId}/users/{memberId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        apipath = apipath.replace('{memberId}', memberId);

        if(memberId === undefined && memberId !== null){
			throw 'Missing required  parameter: memberId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchQueueUsersByMemberId = patchQueueUsersByMemberId;
	/**
     * @summary Get the wrap-up codes for a queue
	 * @description 
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {string} codeId - Code ID
	*/
	function getQueueWrapupcodes(queueId, codeId){
		var apipath = '/api/v1/routing/queues/{queueId}/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        apipath = apipath.replace('{codeId}', codeId);

        if(codeId === undefined && codeId !== null){
			throw 'Missing required  parameter: codeId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQueueWrapupcodes = getQueueWrapupcodes;
	/**
     * @summary Add up to 100 wrap-up codes to a queue
	 * @description 
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {string} codeId - Code ID
	* @param {} body - 
	*/
	function createQueueWrapupcodes(queueId, codeId, body){
		var apipath = '/api/v1/routing/queues/{queueId}/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        apipath = apipath.replace('{codeId}', codeId);

        if(codeId === undefined && codeId !== null){
			throw 'Missing required  parameter: codeId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createQueueWrapupcodes = createQueueWrapupcodes;
	/**
     * @summary Delete a wrap-up code from a queue
	 * @description 
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {string} codeId - Code ID
	*/
	function deleteQueueWrapupcodesByCodeId(queueId, codeId){
		var apipath = '/api/v1/routing/queues/{queueId}/wrapupcodes/{codeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        apipath = apipath.replace('{codeId}', codeId);

        if(codeId === undefined && codeId !== null){
			throw 'Missing required  parameter: codeId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteQueueWrapupcodesByCodeId = deleteQueueWrapupcodesByCodeId;
	/**
     * @summary Get the list of skills.
	 * @description 
	 * @memberOf RoutingApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	* @param {string} name - Name
	*/
	function getSkills(pageSize, pageNumber, sortBy, name){
		var apipath = '/api/v1/routing/skills';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSkills = getSkills;
	/**
     * @summary Get the utilization settings.
	 * @description 
	 * @memberOf RoutingApi#
	*/
	function getUtilization(){
		var apipath = '/api/v1/routing/utilization';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUtilization = getUtilization;
	/**
     * @summary Update the utilization settings.
	 * @description 
	 * @memberOf RoutingApi#
	* @param {} body - utilization
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "utilization": {},
   "selfUri": ""
}
	*/
	function updateUtilization(body){
		var apipath = '/api/v1/routing/utilization';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateUtilization = updateUtilization;
	/**
     * @summary Delete utilization settings and revert to system defaults.
	 * @description 
	 * @memberOf RoutingApi#
	*/
	function deleteUtilization(){
		var apipath = '/api/v1/routing/utilization';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteUtilization = deleteUtilization;
	/**
     * @summary Get list of wrapup codes.
	 * @description 
	 * @memberOf RoutingApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	*/
	function getWrapupcodes(pageSize, pageNumber, sortBy){
		var apipath = '/api/v1/routing/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWrapupcodes = getWrapupcodes;
	/**
     * @summary Create a wrap-up code
	 * @description 
	 * @memberOf RoutingApi#
	* @param {} body - WrapupCode
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "code": 0,
   "label": "",
   "notes": "",
   "tags": [],
   "duration": 0
}
	*/
	function createWrapupcodes(body){
		var apipath = '/api/v1/routing/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createWrapupcodes = createWrapupcodes;
	/**
     * @summary Get details about this wrap-up code.
	 * @description 
	 * @memberOf RoutingApi#
	* @param {string} codeId - Wrapup Code ID
	*/
	function getWrapupcodesCode(codeId){
		var apipath = '/api/v1/routing/wrapupcodes/{codeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{codeId}', codeId);

        if(codeId === undefined && codeId !== null){
			throw 'Missing required  parameter: codeId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWrapupcodesCode = getWrapupcodesCode;
	/**
     * @summary Update wrap-up code
	 * @description 
	 * @memberOf RoutingApi#
	* @param {string} codeId - Wrapup Code ID
	* @param {} body - WrapupCode
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "code": 0,
   "label": "",
   "notes": "",
   "tags": [],
   "duration": 0
}
	*/
	function updateWrapupcodesCode(codeId, body){
		var apipath = '/api/v1/routing/wrapupcodes/{codeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{codeId}', codeId);

        if(codeId === undefined && codeId !== null){
			throw 'Missing required  parameter: codeId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateWrapupcodesCode = updateWrapupcodesCode;
	/**
     * @summary Delete wrap-up code
	 * @description 
	 * @memberOf RoutingApi#
	* @param {string} codeId - Wrapup Code ID
	*/
	function deleteWrapupcodesCode(codeId){
		var apipath = '/api/v1/routing/wrapupcodes/{codeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{codeId}', codeId);

        if(codeId === undefined && codeId !== null){
			throw 'Missing required  parameter: codeId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteWrapupcodesCode = deleteWrapupcodesCode;

    return self;
};

/**
* @class
* @example
* var api = new ScripterApi(pureCloudSession);
*/
var ScripterApi = function (pureCloudSession) {
	/**
     * @summary Get favorite templates
	 * @description 
	 * @memberOf ScripterApi#
	*/
	function getScripterFavoritetemplates(){
		var apipath = '/api/v1/scripter/favoritetemplates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getScripterFavoritetemplates = getScripterFavoritetemplates;
	/**
     * @summary Set a favorite template
	 * @description 
	 * @memberOf ScripterApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "templateId": ""
}
	*/
	function createScripterFavoritetemplates(body){
		var apipath = '/api/v1/scripter/favoritetemplates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createScripterFavoritetemplates = createScripterFavoritetemplates;
	/**
     * @summary Unset favority template
	 * @description 
	 * @memberOf ScripterApi#
	* @param {string} templateId - 
	*/
	function deleteScripterFavoritetemplatesTemplate(templateId){
		var apipath = '/api/v1/scripter/favoritetemplates/{templateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{templateId}', templateId);

        if(templateId === undefined && templateId !== null){
			throw 'Missing required  parameter: templateId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteScripterFavoritetemplatesTemplate = deleteScripterFavoritetemplatesTemplate;
	/**
     * @summary Get the list of templates
	 * @description 
	 * @memberOf ScripterApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} expand - Expand
	* @param {string} tags - Tags
	*/
	function getScripterTemplates(pageSize, pageNumber, expand, tags){
		var apipath = '/api/v1/scripter/templates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(tags !== undefined && tags !== null){
			queryParameters.tags = tags;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getScripterTemplates = getScripterTemplates;
	/**
     * @summary Create a template.
	 * @description 
	 * @memberOf ScripterApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "description": "",
   "createdDate": "",
   "modifiedDate": "",
   "version": 0,
   "level": "",
   "tags": [],
   "data": {},
   "selfUri": ""
}
	*/
	function createScripterTemplates(body){
		var apipath = '/api/v1/scripter/templates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createScripterTemplates = createScripterTemplates;
	/**
     * @summary Get a composer template
	 * @description 
	 * @memberOf ScripterApi#
	* @param {string} templateId - Template ID
	*/
	function getScripterTemplate(templateId){
		var apipath = '/api/v1/scripter/templates/{templateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{templateId}', templateId);

        if(templateId === undefined && templateId !== null){
			throw 'Missing required  parameter: templateId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getScripterTemplate = getScripterTemplate;
	/**
     * @summary Update a composer template
	 * @description 
	 * @memberOf ScripterApi#
	* @param {string} templateId - Template ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "description": "",
   "createdDate": "",
   "modifiedDate": "",
   "version": 0,
   "level": "",
   "tags": [],
   "data": {},
   "selfUri": ""
}
	*/
	function updateScripterTemplate(templateId, body){
		var apipath = '/api/v1/scripter/templates/{templateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{templateId}', templateId);

        if(templateId === undefined && templateId !== null){
			throw 'Missing required  parameter: templateId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateScripterTemplate = updateScripterTemplate;
	/**
     * @summary Delete a composer template
	 * @description 
	 * @memberOf ScripterApi#
	* @param {string} templateId - Template ID
	*/
	function deleteScripterTemplate(templateId){
		var apipath = '/api/v1/scripter/templates/{templateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{templateId}', templateId);

        if(templateId === undefined && templateId !== null){
			throw 'Missing required  parameter: templateId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteScripterTemplate = deleteScripterTemplate;

    return self;
};

/**
* @class
* @example
* var api = new ScriptsApi(pureCloudSession);
*/
var ScriptsApi = function (pureCloudSession) {
	/**
     * @summary Get the list of scripts
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} expand - Expand
	* @param {string} name - Name
	* @param {string} feature - Feature
	*/
	function get(pageSize, pageNumber, expand, name, feature){
		var apipath = '/api/v1/scripts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(feature !== undefined && feature !== null){
			queryParameters.feature = feature;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.get = get;
	/**
     * @summary Create a script.
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {} body - 
	*/
	function create(body){
		var apipath = '/api/v1/scripts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.create = create;
	/**
     * @summary Get the published scripts.
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} expand - Expand
	* @param {string} name - Name
	* @param {string} feature - Feature
	*/
	function getPublished(pageSize, pageNumber, expand, name, feature){
		var apipath = '/api/v1/scripts/published';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(feature !== undefined && feature !== null){
			queryParameters.feature = feature;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPublished = getPublished;
	/**
     * @summary Publish a script.
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "scriptId": "",
   "versionId": ""
}
	*/
	function createPublished(body){
		var apipath = '/api/v1/scripts/published';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createPublished = createPublished;
	/**
     * @summary Get the published script.
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {string} scriptId - Script ID
	*/
	function getPublishedScript(scriptId){
		var apipath = '/api/v1/scripts/published/{scriptId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPublishedScript = getPublishedScript;
	/**
     * @summary Get the list of published pages
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {string} scriptId - Script ID
	*/
	function getPublishedScriptPages(scriptId){
		var apipath = '/api/v1/scripts/published/{scriptId}/pages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPublishedScriptPages = getPublishedScriptPages;
	/**
     * @summary Get the published page.
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {string} scriptId - Script ID
	* @param {string} pageId - Page ID
	*/
	function getPublishedScriptPagesByPageId(scriptId, pageId){
		var apipath = '/api/v1/scripts/published/{scriptId}/pages/{pageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }

        apipath = apipath.replace('{pageId}', pageId);

        if(pageId === undefined && pageId !== null){
			throw 'Missing required  parameter: pageId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPublishedScriptPagesByPageId = getPublishedScriptPagesByPageId;
	/**
     * @summary Get the published variables
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {string} scriptId - Script ID
	*/
	function getPublishedScriptVariables(scriptId){
		var apipath = '/api/v1/scripts/published/{scriptId}/variables';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPublishedScriptVariables = getPublishedScriptVariables;
	/**
     * @summary Create a template from a script.
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "tags": [],
   "scriptId": "",
   "userId": ""
}
	*/
	function createScriptsTemplates(body){
		var apipath = '/api/v1/scripts/templates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createScriptsTemplates = createScriptsTemplates;
	/**
     * @summary Get a script
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {string} scriptId - Script ID
	*/
	function getScript(scriptId){
		var apipath = '/api/v1/scripts/{scriptId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getScript = getScript;
	/**
     * @summary Update a script.
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {string} scriptId - Script ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "versionId": "",
   "createdDate": "",
   "modifiedDate": "",
   "publishedDate": "",
   "versionDate": "",
   "startPageId": "",
   "startPageName": "",
   "features": {},
   "variables": {},
   "customActions": {},
   "selfUri": ""
}
	*/
	function updateScript(scriptId, body){
		var apipath = '/api/v1/scripts/{scriptId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateScript = updateScript;
	/**
     * @summary Delete a script.
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {string} scriptId - Script ID
	*/
	function deleteScript(scriptId){
		var apipath = '/api/v1/scripts/{scriptId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteScript = deleteScript;
	/**
     * @summary Get the list of pages
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {string} scriptId - Script ID
	*/
	function getScriptPages(scriptId){
		var apipath = '/api/v1/scripts/{scriptId}/pages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getScriptPages = getScriptPages;
	/**
     * @summary Create a page.
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {string} scriptId - Script ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "versionId": "",
   "createdDate": "",
   "modifiedDate": "",
   "rootContainer": {},
   "properties": {},
   "selfUri": ""
}
	*/
	function createScriptPages(scriptId, body){
		var apipath = '/api/v1/scripts/{scriptId}/pages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createScriptPages = createScriptPages;
	/**
     * @summary Get a page
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {string} scriptId - Script ID
	* @param {string} pageId - Page ID
	*/
	function getScriptPagesByPageId(scriptId, pageId){
		var apipath = '/api/v1/scripts/{scriptId}/pages/{pageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }

        apipath = apipath.replace('{pageId}', pageId);

        if(pageId === undefined && pageId !== null){
			throw 'Missing required  parameter: pageId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getScriptPagesByPageId = getScriptPagesByPageId;
	/**
     * @summary Update a page.
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {string} scriptId - Script ID
	* @param {string} pageId - Page ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "versionId": "",
   "createdDate": "",
   "modifiedDate": "",
   "rootContainer": {},
   "properties": {},
   "selfUri": ""
}
	*/
	function updateScriptPagesByPageId(scriptId, pageId, body){
		var apipath = '/api/v1/scripts/{scriptId}/pages/{pageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }

        apipath = apipath.replace('{pageId}', pageId);

        if(pageId === undefined && pageId !== null){
			throw 'Missing required  parameter: pageId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateScriptPagesByPageId = updateScriptPagesByPageId;
	/**
     * @summary Delete a page.
	 * @description 
	 * @memberOf ScriptsApi#
	* @param {string} scriptId - Script ID
	* @param {string} pageId - Page ID
	*/
	function deleteScriptPagesByPageId(scriptId, pageId){
		var apipath = '/api/v1/scripts/{scriptId}/pages/{pageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scriptId}', scriptId);

        if(scriptId === undefined && scriptId !== null){
			throw 'Missing required  parameter: scriptId';
        }

        apipath = apipath.replace('{pageId}', pageId);

        if(pageId === undefined && pageId !== null){
			throw 'Missing required  parameter: pageId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteScriptPagesByPageId = deleteScriptPagesByPageId;

    return self;
};

/**
* @class
* @example
* var api = new SearchApi(pureCloudSession);
*/
var SearchApi = function (pureCloudSession) {
	/**
     * @summary Search chat history
	 * @description 
	 * @memberOf SearchApi#
	* @param {} body - Search request options
	 * @example
	 * Body Example:
	 * {
   "query": "",
   "order": "",
   "targetJids": [],
   "pageSize": 0,
   "pageNumber": 0,
   "fromDate": "",
   "toDate": "",
   "expand": ""
}
	*/
	function createChats(body){
		var apipath = '/api/v1/search/chats';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createChats = createChats;

    return self;
};

/**
* @class
* @example
* var api = new SessionsApi(pureCloudSession);
*/
var SessionsApi = function (pureCloudSession) {
	/**
     * @summary Get all the sessions for your auth token.
	 * @description 
	 * @memberOf SessionsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function get(pageSize, pageNumber){
		var apipath = '/api/v1/sessions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.get = get;
	/**
     * @summary Create a new session.
	 * @description 
	 * @memberOf SessionsApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "minutesToLive": 0
}
	*/
	function create(body){
		var apipath = '/api/v1/sessions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.create = create;
	/**
     * @summary Retrieve a client session.
	 * @description 
	 * @memberOf SessionsApi#
	* @param {string} sessionId - Session ID
	*/
	function getSession(sessionId){
		var apipath = '/api/v1/sessions/{sessionId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sessionId}', sessionId);

        if(sessionId === undefined && sessionId !== null){
			throw 'Missing required  parameter: sessionId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSession = getSession;
	/**
     * @summary Remove a session.
	 * @description 
	 * @memberOf SessionsApi#
	* @param {string} sessionId - Session ID
	*/
	function deleteSession(sessionId){
		var apipath = '/api/v1/sessions/{sessionId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sessionId}', sessionId);

        if(sessionId === undefined && sessionId !== null){
			throw 'Missing required  parameter: sessionId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteSession = deleteSession;

    return self;
};

/**
* @class
* @example
* var api = new SettingsApi(pureCloudSession);
*/
var SettingsApi = function (pureCloudSession) {
	/**
     * @summary Get settings for the current user
	 * @description 
	 * @memberOf SettingsApi#
	*/
	function getSettings(){
		var apipath = '/api/v1/settings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSettings = getSettings;
	/**
     * @summary Update settings for the current user
	 * @description 
	 * @memberOf SettingsApi#
	* @param {} body - 
	*/
	function update(body){
		var apipath = '/api/v1/settings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.update = update;

    return self;
};

/**
* @class
* @example
* var api = new StationsApi(pureCloudSession);
*/
var StationsApi = function (pureCloudSession) {
	/**
     * @summary Get the list of available stations.
	 * @description 
	 * @memberOf StationsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	* @param {string} name - Name
	*/
	function get(pageSize, pageNumber, sortBy, name){
		var apipath = '/api/v1/stations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.get = get;
	/**
     * @summary Get station.
	 * @description 
	 * @memberOf StationsApi#
	* @param {string} id - Station ID
	*/
	function getId(id){
		var apipath = '/api/v1/stations/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getId = getId;
	/**
     * @summary Unassigns the user assigned to this station
	 * @description 
	 * @memberOf StationsApi#
	* @param {string} id - Station ID
	*/
	function deleteIdAssociateduser(id){
		var apipath = '/api/v1/stations/{id}/associateduser';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteIdAssociateduser = deleteIdAssociateduser;

    return self;
};

/**
* @class
* @example
* var api = new TelephonyApi(pureCloudSession);
*/
var TelephonyApi = function (pureCloudSession) {
	/**
     * @summary Redirect GET requests to proper edge
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} id - Phone's physical address AKA MAC address
	*/
	function getBootstrapPhonesId(id){
		var apipath = '/api/v1/telephony/bootstrap/phones/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getBootstrapPhonesId = getBootstrapPhonesId;
	/**
     * @summary Redirect PUT requests to proper edge
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} id - Phone's physical address AKA MAC address
	*/
	function updateBootstrapPhonesId(id){
		var apipath = '/api/v1/telephony/bootstrap/phones/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateBootstrapPhonesId = updateBootstrapPhonesId;
	/**
     * @summary Redirect GET requests to proper edge
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} id - Phone's physical address AKA MAC address
	* @param {string} file - Requested file
	*/
	function getBootstrapPhonesIdByFile(id, file){
		var apipath = '/api/v1/telephony/bootstrap/phones/{id}/{file}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        apipath = apipath.replace('{file}', file);

        if(file === undefined && file !== null){
			throw 'Missing required  parameter: file';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getBootstrapPhonesIdByFile = getBootstrapPhonesIdByFile;
	/**
     * @summary Redirect PUT requests to proper edge
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} id - Phone's physical address AKA MAC address
	* @param {string} file - Requested file
	*/
	function updateBootstrapPhonesIdByFile(id, file){
		var apipath = '/api/v1/telephony/bootstrap/phones/{id}/{file}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        apipath = apipath.replace('{file}', file);

        if(file === undefined && file !== null){
			throw 'Missing required  parameter: file';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateBootstrapPhonesIdByFile = updateBootstrapPhonesIdByFile;
	/**
     * @summary Redirect GET requests to proper edge
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} id - Phone's physical address AKA MAC address
	* @param {string} path - Requested path
	* @param {string} file - Requested file
	*/
	function getBootstrapPhonesIdByPathByFile(id, path, file){
		var apipath = '/api/v1/telephony/bootstrap/phones/{id}/{path}/{file}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        apipath = apipath.replace('{path}', path);

        if(path === undefined && path !== null){
			throw 'Missing required  parameter: path';
        }

        apipath = apipath.replace('{file}', file);

        if(file === undefined && file !== null){
			throw 'Missing required  parameter: file';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getBootstrapPhonesIdByPathByFile = getBootstrapPhonesIdByPathByFile;
	/**
     * @summary Redirect PUT requests to proper edge
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} id - Phone's physical address AKA MAC address
	* @param {string} path - Requested path
	* @param {string} file - Requested file
	*/
	function updateBootstrapPhonesIdByPathByFile(id, path, file){
		var apipath = '/api/v1/telephony/bootstrap/phones/{id}/{path}/{file}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        apipath = apipath.replace('{path}', path);

        if(path === undefined && path !== null){
			throw 'Missing required  parameter: path';
        }

        apipath = apipath.replace('{file}', file);

        if(file === undefined && file !== null){
			throw 'Missing required  parameter: file';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateBootstrapPhonesIdByPathByFile = updateBootstrapPhonesIdByPathByFile;
	/**
     * @summary Get a listing of line base settings objects
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - Value by which to sort
	* @param {string} sortOrder - Sort order
	*/
	function getProvidersEdgeLinebasesettings(pageNumber, pageSize, sortBy, sortOrder){
		var apipath = '/api/v1/telephony/providers/edge/linebasesettings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgeLinebasesettings = getProvidersEdgeLinebasesettings;
	/**
     * @summary Get a line base settings object by ID
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} lineBaseId - Line base ID
	*/
	function getProvidersEdgeLinebasesettingsLineBase(lineBaseId){
		var apipath = '/api/v1/telephony/providers/edge/linebasesettings/{lineBaseId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{lineBaseId}', lineBaseId);

        if(lineBaseId === undefined && lineBaseId !== null){
			throw 'Missing required  parameter: lineBaseId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgeLinebasesettingsLineBase = getProvidersEdgeLinebasesettingsLineBase;
	/**
     * @summary Get a list of Lines
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} name - Name
	* @param {string} sortBy - Value by which to sort
	* @param {array} expand - Fields to expand in the response, comma-separated
	*/
	function getProvidersEdgeLines(pageSize, pageNumber, name, sortBy, expand){
		var apipath = '/api/v1/telephony/providers/edge/lines';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgeLines = getProvidersEdgeLines;
	/**
     * @summary Get a Line instance template based on a Line Base Settings object. This object can then be modified and saved as a new Line instance
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} lineBaseSettingsId - The id of a Line Base Settings object upon which to base this Line
	*/
	function getProvidersEdgeLinesTemplate(lineBaseSettingsId){
		var apipath = '/api/v1/telephony/providers/edge/lines/template';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(lineBaseSettingsId !== undefined && lineBaseSettingsId !== null){
			queryParameters.lineBaseSettingsId = lineBaseSettingsId;
		}

        if(lineBaseSettingsId === undefined && lineBaseSettingsId !== null){
			throw 'Missing required  parameter: lineBaseSettingsId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgeLinesTemplate = getProvidersEdgeLinesTemplate;
	/**
     * @summary Get a Line by ID
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} lineId - Line ID
	*/
	function getProvidersEdgeLine(lineId){
		var apipath = '/api/v1/telephony/providers/edge/lines/{lineId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{lineId}', lineId);

        if(lineId === undefined && lineId !== null){
			throw 'Missing required  parameter: lineId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgeLine = getProvidersEdgeLine;
	/**
     * @summary Get a list of Phone Base Settings objects
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - Value by which to sort
	* @param {string} sortOrder - Sort order
	*/
	function getProvidersEdgePhonebasesettings(pageNumber, pageSize, sortBy, sortOrder){
		var apipath = '/api/v1/telephony/providers/edge/phonebasesettings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgePhonebasesettings = getProvidersEdgePhonebasesettings;
	/**
     * @summary Create a new Phone Base Settings object
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "phoneMetaBase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lines": [],
   "properties": {
      "nodeType": "",
      "missingNode": true,
      "object": true,
      "pojo": true,
      "number": true,
      "integralNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "float": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "boolean": true,
      "binary": true,
      "floatingPointNumber": true,
      "valueNode": true,
      "containerNode": true,
      "array": true,
      "null": true
   },
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true
   },
   "selfUri": ""
}
	*/
	function createProvidersEdgePhonebasesettings(body){
		var apipath = '/api/v1/telephony/providers/edge/phonebasesettings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createProvidersEdgePhonebasesettings = createProvidersEdgePhonebasesettings;
	/**
     * @summary Get a list of available makes and models to create a new Phone Base Settings
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getProvidersEdgePhonebasesettingsAvailablemetabases(pageSize, pageNumber){
		var apipath = '/api/v1/telephony/providers/edge/phonebasesettings/availablemetabases';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgePhonebasesettingsAvailablemetabases = getProvidersEdgePhonebasesettingsAvailablemetabases;
	/**
     * @summary Get a Phone Base Settings instance template from a given make and model. This object can then be modified and saved as a new Phone Base Settings instance
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} phoneMetabaseId - The id of a metabase object upon which to base this Phone Base Settings
	*/
	function getProvidersEdgePhonebasesettingsTemplate(phoneMetabaseId){
		var apipath = '/api/v1/telephony/providers/edge/phonebasesettings/template';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(phoneMetabaseId !== undefined && phoneMetabaseId !== null){
			queryParameters.phoneMetabaseId = phoneMetabaseId;
		}

        if(phoneMetabaseId === undefined && phoneMetabaseId !== null){
			throw 'Missing required  parameter: phoneMetabaseId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgePhonebasesettingsTemplate = getProvidersEdgePhonebasesettingsTemplate;
	/**
     * @summary Get a Phone Base Settings object by ID
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} phoneBaseId - Phone base ID
	*/
	function getProvidersEdgePhonebasesettingsPhoneBase(phoneBaseId){
		var apipath = '/api/v1/telephony/providers/edge/phonebasesettings/{phoneBaseId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{phoneBaseId}', phoneBaseId);

        if(phoneBaseId === undefined && phoneBaseId !== null){
			throw 'Missing required  parameter: phoneBaseId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgePhonebasesettingsPhoneBase = getProvidersEdgePhonebasesettingsPhoneBase;
	/**
     * @summary Update a Phone Base Settings by ID
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} phoneBaseId - Phone base ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "phoneMetaBase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lines": [],
   "properties": {
      "nodeType": "",
      "missingNode": true,
      "object": true,
      "pojo": true,
      "number": true,
      "integralNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "float": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "boolean": true,
      "binary": true,
      "floatingPointNumber": true,
      "valueNode": true,
      "containerNode": true,
      "array": true,
      "null": true
   },
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true
   },
   "selfUri": ""
}
	*/
	function updateProvidersEdgePhonebasesettingsPhoneBase(phoneBaseId, body){
		var apipath = '/api/v1/telephony/providers/edge/phonebasesettings/{phoneBaseId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{phoneBaseId}', phoneBaseId);

        if(phoneBaseId === undefined && phoneBaseId !== null){
			throw 'Missing required  parameter: phoneBaseId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateProvidersEdgePhonebasesettingsPhoneBase = updateProvidersEdgePhonebasesettingsPhoneBase;
	/**
     * @summary Delete a Phone Base Settings by ID
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} phoneBaseId - Phone base ID
	*/
	function deleteProvidersEdgePhonebasesettingsPhoneBase(phoneBaseId){
		var apipath = '/api/v1/telephony/providers/edge/phonebasesettings/{phoneBaseId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{phoneBaseId}', phoneBaseId);

        if(phoneBaseId === undefined && phoneBaseId !== null){
			throw 'Missing required  parameter: phoneBaseId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteProvidersEdgePhonebasesettingsPhoneBase = deleteProvidersEdgePhonebasesettingsPhoneBase;
	/**
     * @summary Get a list of Phone Instances
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - Value by which to sort
	* @param {string} sortOrder - Sort order
	* @param {string} siteid - Filter by site.id
	* @param {string} phoneBaseSettingsid - Filter by phoneBaseSettings.id
	* @param {string} phone_hardwareId - Filter by phone_hardwareId
	* @param {array} expand - Fields to expand in the response, comma-separated
	* @param {array} fields - Fields under properties to get, comma-separated
	*/
	function getProvidersEdgePhones(pageNumber, pageSize, sortBy, sortOrder, siteid, phoneBaseSettingsid, phone_hardwareId, expand, fields){
		var apipath = '/api/v1/telephony/providers/edge/phones';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		if(siteid !== undefined && siteid !== null){
			queryParameters.site.id = siteid;
		}


		if(phoneBaseSettingsid !== undefined && phoneBaseSettingsid !== null){
			queryParameters.phoneBaseSettings.id = phoneBaseSettingsid;
		}


		if(phone_hardwareId !== undefined && phone_hardwareId !== null){
			queryParameters.phone_hardwareId = phone_hardwareId;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(fields !== undefined && fields !== null){
			queryParameters.fields = fields;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgePhones = getProvidersEdgePhones;
	/**
     * @summary Create a new Phone
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
      "id": "",
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {},
      "selfUri": ""
   },
   "secondaryStatus": {
      "id": "",
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {},
      "selfUri": ""
   },
   "properties": {
      "nodeType": "",
      "missingNode": true,
      "object": true,
      "pojo": true,
      "number": true,
      "integralNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "float": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "boolean": true,
      "binary": true,
      "floatingPointNumber": true,
      "valueNode": true,
      "containerNode": true,
      "array": true,
      "null": true
   },
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true
   },
   "selfUri": ""
}
	*/
	function createProvidersEdgePhones(body){
		var apipath = '/api/v1/telephony/providers/edge/phones';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createProvidersEdgePhones = createProvidersEdgePhones;
	/**
     * @summary Reboot Multiple Phones
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {} body - body
	 * @example
	 * Body Example:
	 * {
   "phoneIds": []
}
	*/
	function createProvidersEdgePhonesReboot(body){
		var apipath = '/api/v1/telephony/providers/edge/phones/reboot';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createProvidersEdgePhonesReboot = createProvidersEdgePhonesReboot;
	/**
     * @summary Get a Phone instance template based on a Phone Base Settings object. This object can then be modified and saved as a new Phone instance
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} phoneBaseSettingsId - The id of a Phone Base Settings object upon which to base this Phone
	*/
	function getProvidersEdgePhonesTemplate(phoneBaseSettingsId){
		var apipath = '/api/v1/telephony/providers/edge/phones/template';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(phoneBaseSettingsId !== undefined && phoneBaseSettingsId !== null){
			queryParameters.phoneBaseSettingsId = phoneBaseSettingsId;
		}

        if(phoneBaseSettingsId === undefined && phoneBaseSettingsId !== null){
			throw 'Missing required  parameter: phoneBaseSettingsId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgePhonesTemplate = getProvidersEdgePhonesTemplate;
	/**
     * @summary Get a Phone by ID
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} phoneId - Phone ID
	*/
	function getProvidersEdgePhone(phoneId){
		var apipath = '/api/v1/telephony/providers/edge/phones/{phoneId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{phoneId}', phoneId);

        if(phoneId === undefined && phoneId !== null){
			throw 'Missing required  parameter: phoneId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgePhone = getProvidersEdgePhone;
	/**
     * @summary Update a Phone by ID
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} phoneId - Phone ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
      "id": "",
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {},
      "selfUri": ""
   },
   "secondaryStatus": {
      "id": "",
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {},
      "selfUri": ""
   },
   "properties": {
      "nodeType": "",
      "missingNode": true,
      "object": true,
      "pojo": true,
      "number": true,
      "integralNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "float": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "boolean": true,
      "binary": true,
      "floatingPointNumber": true,
      "valueNode": true,
      "containerNode": true,
      "array": true,
      "null": true
   },
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true
   },
   "selfUri": ""
}
	*/
	function updateProvidersEdgePhone(phoneId, body){
		var apipath = '/api/v1/telephony/providers/edge/phones/{phoneId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{phoneId}', phoneId);

        if(phoneId === undefined && phoneId !== null){
			throw 'Missing required  parameter: phoneId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateProvidersEdgePhone = updateProvidersEdgePhone;
	/**
     * @summary Delete a Phone by ID
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} phoneId - Phone ID
	*/
	function deleteProvidersEdgePhone(phoneId){
		var apipath = '/api/v1/telephony/providers/edge/phones/{phoneId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{phoneId}', phoneId);

        if(phoneId === undefined && phoneId !== null){
			throw 'Missing required  parameter: phoneId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteProvidersEdgePhone = deleteProvidersEdgePhone;
	/**
     * @summary Reboot a Phone
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} phoneId - Phone Id
	*/
	function createProvidersEdgePhoneReboot(phoneId){
		var apipath = '/api/v1/telephony/providers/edge/phones/{phoneId}/reboot';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{phoneId}', phoneId);

        if(phoneId === undefined && phoneId !== null){
			throw 'Missing required  parameter: phoneId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createProvidersEdgePhoneReboot = createProvidersEdgePhoneReboot;
	/**
     * @summary Get a list of Edge-compatible time zones
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getProvidersEdgeTimezones(pageSize, pageNumber){
		var apipath = '/api/v1/telephony/providers/edge/timezones';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgeTimezones = getProvidersEdgeTimezones;
	/**
     * @summary Get Trunk Base Settings listing
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - Value by which to sort
	* @param {string} sortOrder - Sort order
	*/
	function getProvidersEdgeTrunkbasesettings(pageNumber, pageSize, sortBy, sortOrder){
		var apipath = '/api/v1/telephony/providers/edge/trunkbasesettings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgeTrunkbasesettings = getProvidersEdgeTrunkbasesettings;
	/**
     * @summary Create a Trunk Base Settings object
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "trunkMetabase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "properties": {
      "nodeType": "",
      "missingNode": true,
      "object": true,
      "pojo": true,
      "number": true,
      "integralNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "float": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "boolean": true,
      "binary": true,
      "floatingPointNumber": true,
      "valueNode": true,
      "containerNode": true,
      "array": true,
      "null": true
   },
   "selfUri": ""
}
	*/
	function createProvidersEdgeTrunkbasesettings(body){
		var apipath = '/api/v1/telephony/providers/edge/trunkbasesettings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createProvidersEdgeTrunkbasesettings = createProvidersEdgeTrunkbasesettings;
	/**
     * @summary Get a list of available makes and models to create a new Trunk Base Settings
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} type - 
	EXTERNAL,
	PHONE,
	EDGE,
	* @param {integer} pageSize - 
	* @param {integer} pageNumber - 
	*/
	function getProvidersEdgeTrunkbasesettingsAvailablemetabases(type, pageSize, pageNumber){
		var apipath = '/api/v1/telephony/providers/edge/trunkbasesettings/availablemetabases';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(type !== undefined && type !== null){
			queryParameters.type = type;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgeTrunkbasesettingsAvailablemetabases = getProvidersEdgeTrunkbasesettingsAvailablemetabases;
	/**
     * @summary Get a Trunk Base Settings instance template from a given make and model. This object can then be modified and saved as a new Trunk Base Settings instance
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} trunkMetabaseId - The id of a metabase object upon which to base this Trunk Base Settings
	*/
	function getProvidersEdgeTrunkbasesettingsTemplate(trunkMetabaseId){
		var apipath = '/api/v1/telephony/providers/edge/trunkbasesettings/template';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(trunkMetabaseId !== undefined && trunkMetabaseId !== null){
			queryParameters.trunkMetabaseId = trunkMetabaseId;
		}

        if(trunkMetabaseId === undefined && trunkMetabaseId !== null){
			throw 'Missing required  parameter: trunkMetabaseId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgeTrunkbasesettingsTemplate = getProvidersEdgeTrunkbasesettingsTemplate;
	/**
     * @summary Get a Trunk Base Settings object by ID
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} trunkBaseSettingsId - Trunk Base ID
	*/
	function getProvidersEdgeTrunkbasesettingsTrunkBaseSettings(trunkBaseSettingsId){
		var apipath = '/api/v1/telephony/providers/edge/trunkbasesettings/{trunkBaseSettingsId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{trunkBaseSettingsId}', trunkBaseSettingsId);

        if(trunkBaseSettingsId === undefined && trunkBaseSettingsId !== null){
			throw 'Missing required  parameter: trunkBaseSettingsId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgeTrunkbasesettingsTrunkBaseSettings = getProvidersEdgeTrunkbasesettingsTrunkBaseSettings;
	/**
     * @summary Update a Trunk Base Settings object by ID
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} trunkBaseSettingsId - Trunk Base ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "trunkMetabase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "properties": {
      "nodeType": "",
      "missingNode": true,
      "object": true,
      "pojo": true,
      "number": true,
      "integralNumber": true,
      "short": true,
      "int": true,
      "long": true,
      "float": true,
      "double": true,
      "bigDecimal": true,
      "bigInteger": true,
      "textual": true,
      "boolean": true,
      "binary": true,
      "floatingPointNumber": true,
      "valueNode": true,
      "containerNode": true,
      "array": true,
      "null": true
   },
   "selfUri": ""
}
	*/
	function updateProvidersEdgeTrunkbasesettingsTrunkBaseSettings(trunkBaseSettingsId, body){
		var apipath = '/api/v1/telephony/providers/edge/trunkbasesettings/{trunkBaseSettingsId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{trunkBaseSettingsId}', trunkBaseSettingsId);

        if(trunkBaseSettingsId === undefined && trunkBaseSettingsId !== null){
			throw 'Missing required  parameter: trunkBaseSettingsId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateProvidersEdgeTrunkbasesettingsTrunkBaseSettings = updateProvidersEdgeTrunkbasesettingsTrunkBaseSettings;
	/**
     * @summary Delete a Trunk Base Settings object by ID
	 * @description 
	 * @memberOf TelephonyApi#
	* @param {string} trunkBaseSettingsId - Trunk Base ID
	*/
	function deleteProvidersEdgeTrunkbasesettingsTrunkBaseSettings(trunkBaseSettingsId){
		var apipath = '/api/v1/telephony/providers/edge/trunkbasesettings/{trunkBaseSettingsId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{trunkBaseSettingsId}', trunkBaseSettingsId);

        if(trunkBaseSettingsId === undefined && trunkBaseSettingsId !== null){
			throw 'Missing required  parameter: trunkBaseSettingsId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteProvidersEdgeTrunkbasesettingsTrunkBaseSettings = deleteProvidersEdgeTrunkbasesettingsTrunkBaseSettings;

    return self;
};

/**
* @class
* @example
* var api = new TimezonesApi(pureCloudSession);
*/
var TimezonesApi = function (pureCloudSession) {
	/**
     * @summary Get time zones list
	 * @description 
	 * @memberOf TimezonesApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getTimezones(pageSize, pageNumber){
		var apipath = '/api/v1/timezones';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getTimezones = getTimezones;

    return self;
};

/**
* @class
* @example
* var api = new UserrecordingsApi(pureCloudSession);
*/
var UserrecordingsApi = function (pureCloudSession) {
	/**
     * @summary Get a list of user recordings.
	 * @description 
	 * @memberOf UserrecordingsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} expand - conversation
	*/
	function get(pageSize, pageNumber, expand){
		var apipath = '/api/v1/userrecordings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.get = get;
	/**
     * @summary Get user recording summary
	 * @description 
	 * @memberOf UserrecordingsApi#
	*/
	function getSummary(){
		var apipath = '/api/v1/userrecordings/summary';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSummary = getSummary;
	/**
     * @summary Get a user recording.
	 * @description 
	 * @memberOf UserrecordingsApi#
	* @param {string} recordingId - User Recording ID
	* @param {string} expand - conversation
	*/
	function getRecording(recordingId, expand){
		var apipath = '/api/v1/userrecordings/{recordingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRecording = getRecording;
	/**
     * @summary Update a user recording.
	 * @description 
	 * @memberOf UserrecordingsApi#
	* @param {string} recordingId - User Recording ID
	* @param {} body - UserRecording
	* @param {string} expand - conversation
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
      "id": "",
      "name": "",
      "startTime": "",
      "endTime": "",
      "participants": [],
      "conversationIds": [],
      "maxParticipants": 0,
      "recordingState": "",
      "selfUri": ""
   },
   "contentLength": 0,
   "durationMilliseconds": 0,
   "thumbnails": [],
   "read": true,
   "selfUri": ""
}
	*/
	function updateRecording(recordingId, body, expand){
		var apipath = '/api/v1/userrecordings/{recordingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateRecording = updateRecording;
	/**
     * @summary Delete a user recording.
	 * @description 
	 * @memberOf UserrecordingsApi#
	* @param {string} recordingId - User Recording ID
	*/
	function deleteRecording(recordingId){
		var apipath = '/api/v1/userrecordings/{recordingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteRecording = deleteRecording;
	/**
     * @summary Download a user recording.
	 * @description 
	 * @memberOf UserrecordingsApi#
	* @param {string} recordingId - User Recording ID
	* @param {string} formatId - The desired format (WEBM, WAV, etc.)
	WEBM,
	WAV,
	*/
	function getRecordingMedia(recordingId, formatId){
		var apipath = '/api/v1/userrecordings/{recordingId}/media';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }


		if(formatId !== undefined && formatId !== null){
			queryParameters.formatId = formatId;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRecordingMedia = getRecordingMedia;

    return self;
};

/**
* @class
* @example
* var api = new UsersApi(pureCloudSession);
*/
var UsersApi = function (pureCloudSession) {
	/**
     * @summary Get the list of available users.
	 * @description 
	 * @memberOf UsersApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {array} id - id
	* @param {string} sortBy - Sort by
	* @param {string} role - Role
	* @param {string} name - Name
	* @param {string} username - Username
	* @param {array} skill - Skill
	* @param {array} expand - Which fields, if any, to expand
	*/
	function get(pageSize, pageNumber, id, sortBy, role, name, username, skill, expand){
		var apipath = '/api/v1/users';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(id !== undefined && id !== null){
			queryParameters.id = id;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(role !== undefined && role !== null){
			queryParameters.role = role;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(username !== undefined && username !== null){
			queryParameters.username = username;
		}


		if(skill !== undefined && skill !== null){
			queryParameters.skill = skill;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.get = get;
	/**
     * @summary Create a configuration service user.
	 * @description 
	 * @memberOf UsersApi#
	* @param {} body - User
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "username": "",
   "email": "",
   "displayName": "",
   "phoneNumber": "",
   "userImages": [],
   "chat": {
      "jabberId": ""
   },
   "roles": [],
   "voicemailEnabled": true,
   "department": "",
   "title": "",
   "routingStatus": {
      "userId": "",
      "status": "",
      "startTime": ""
   },
   "password": "",
   "primaryPresence": {
      "id": "",
      "name": "",
      "user": {},
      "source": "",
      "presenceDefinition": {},
      "message": "",
      "modifiedBy": {},
      "modifiedDate": "",
      "selfUri": ""
   },
   "conversations": {
      "userId": "",
      "call": {},
      "email": {},
      "chat": {},
      "socialExpression": {}
   },
   "conversationSummary": {
      "userId": "",
      "call": {},
      "email": {},
      "chat": {},
      "socialExpression": {}
   },
   "outOfOffice": {
      "id": "",
      "name": "",
      "user": {},
      "startDate": "",
      "endDate": "",
      "active": true,
      "selfUri": ""
   },
   "permissions": [],
   "selfUri": "",
   "requestedStatus": {
      "id": "",
      "name": "",
      "alertable": true,
      "dateModified": "",
      "type": "",
      "selfUri": ""
   },
   "defaultStationUri": "",
   "stationUri": "",
   "lastStationUri": ""
}
	*/
	function create(body){
		var apipath = '/api/v1/users';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.create = create;
	/**
     * @summary Get user.
	 * @description 
	 * @memberOf UsersApi#
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getMe(expand){
		var apipath = '/api/v1/users/me';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getMe = getMe;
	/**
     * @summary Get user.
	 * @description 
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getUser(userId, expand){
		var apipath = '/api/v1/users/{userId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUser = getUser;
	/**
     * @summary Set user station
	 * @description 
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {} body - stationUri
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "username": "",
   "email": "",
   "displayName": "",
   "phoneNumber": "",
   "userImages": [],
   "chat": {
      "jabberId": ""
   },
   "roles": [],
   "voicemailEnabled": true,
   "department": "",
   "title": "",
   "routingStatus": {
      "userId": "",
      "status": "",
      "startTime": ""
   },
   "password": "",
   "primaryPresence": {
      "id": "",
      "name": "",
      "user": {},
      "source": "",
      "presenceDefinition": {},
      "message": "",
      "modifiedBy": {},
      "modifiedDate": "",
      "selfUri": ""
   },
   "conversations": {
      "userId": "",
      "call": {},
      "email": {},
      "chat": {},
      "socialExpression": {}
   },
   "conversationSummary": {
      "userId": "",
      "call": {},
      "email": {},
      "chat": {},
      "socialExpression": {}
   },
   "outOfOffice": {
      "id": "",
      "name": "",
      "user": {},
      "startDate": "",
      "endDate": "",
      "active": true,
      "selfUri": ""
   },
   "permissions": [],
   "selfUri": "",
   "requestedStatus": {
      "id": "",
      "name": "",
      "alertable": true,
      "dateModified": "",
      "type": "",
      "selfUri": ""
   },
   "defaultStationUri": "",
   "stationUri": "",
   "lastStationUri": ""
}
	*/
	function updateUser(userId, body){
		var apipath = '/api/v1/users/{userId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateUser = updateUser;
	/**
     * @summary Get a user's CallForwarding
	 * @description 
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function getUserCallforwarding(userId){
		var apipath = '/api/v1/users/{userId}/callforwarding';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserCallforwarding = getUserCallforwarding;
	/**
     * @summary Update a user's CallForwarding
	 * @description 
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "user": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "enabled": true,
   "phoneNumber": "",
   "modifiedDate": "",
   "selfUri": ""
}
	*/
	function updateUserCallforwarding(userId, body){
		var apipath = '/api/v1/users/{userId}/callforwarding';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateUserCallforwarding = updateUserCallforwarding;
	/**
     * @summary Patch a user's CallForwarding
	 * @description 
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "user": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "enabled": true,
   "phoneNumber": "",
   "modifiedDate": "",
   "selfUri": ""
}
	*/
	function patchUserCallforwarding(userId, body){
		var apipath = '/api/v1/users/{userId}/callforwarding';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchUserCallforwarding = patchUserCallforwarding;
	/**
     * @summary Get a list of the User's Greetings
	 * @description 
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getUserGreetings(userId, pageSize, pageNumber){
		var apipath = '/api/v1/users/{userId}/greetings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserGreetings = getUserGreetings;
	/**
     * @summary Creates a Greeting for a User
	 * @description 
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {} body - The Greeting to create
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "type": "",
   "ownerType": "",
   "owner": {
      "id": "",
      "name": "",
      "selfUri": ""
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
   "modifiedBy": "",
   "selfUri": ""
}
	*/
	function createUserGreetings(userId, body){
		var apipath = '/api/v1/users/{userId}/greetings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createUserGreetings = createUserGreetings;
	/**
     * @summary Grabs the list of Default Greetings given a User's ID
	 * @description 
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function getUserGreetingsDefaults(userId){
		var apipath = '/api/v1/users/{userId}/greetings/defaults';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserGreetingsDefaults = getUserGreetingsDefaults;
	/**
     * @summary Updates the DefaultGreetingList of the specified User
	 * @description 
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {} body - The updated defaultGreetingList
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "owner": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "ownerType": "",
   "greetings": {},
   "createdDate": "",
   "createdBy": "",
   "modifiedDate": "",
   "modifiedBy": "",
   "selfUri": ""
}
	*/
	function updateUserGreetingsDefaults(userId, body){
		var apipath = '/api/v1/users/{userId}/greetings/defaults';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateUserGreetingsDefaults = updateUserGreetingsDefaults;
	/**
     * @summary Get a OutOfOffice
	 * @description 
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function getUserOutofoffice(userId){
		var apipath = '/api/v1/users/{userId}/outofoffice';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserOutofoffice = getUserOutofoffice;
	/**
     * @summary Update an OutOfOffice
	 * @description 
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {} body - The updated UserPresence
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "user": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "startDate": "",
   "endDate": "",
   "active": true,
   "selfUri": ""
}
	*/
	function updateUserOutofoffice(userId, body){
		var apipath = '/api/v1/users/{userId}/outofoffice';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateUserOutofoffice = updateUserOutofoffice;
	/**
     * @summary Get an User's list of Presences
	 * @description 
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	*/
	function getUserPresences(userId, pageNumber, pageSize){
		var apipath = '/api/v1/users/{userId}/presences';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserPresences = getUserPresences;
	/**
     * @summary Get a UserPresence
	 * @description 
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {string} source - Source
	*/
	function getUserPresencesBySource(userId, source){
		var apipath = '/api/v1/users/{userId}/presences/{source}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        apipath = apipath.replace('{source}', source);

        if(source === undefined && source !== null){
			throw 'Missing required  parameter: source';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserPresencesBySource = getUserPresencesBySource;
	/**
     * @summary Update a UserPresence
	 * @description 
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {string} source - Source
	* @param {} body - The updated UserPresence
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "user": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "source": "",
   "presenceDefinition": {
      "id": "",
      "name": "",
      "languageLabels": {},
      "systemPresence": "",
      "deactivated": true,
      "createdBy": {},
      "createdDate": "",
      "modifiedBy": {},
      "modifiedDate": "",
      "selfUri": ""
   },
   "message": "",
   "modifiedBy": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "modifiedDate": "",
   "selfUri": ""
}
	*/
	function updateUserPresencesBySource(userId, source, body){
		var apipath = '/api/v1/users/{userId}/presences/{source}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        apipath = apipath.replace('{source}', source);

        if(source === undefined && source !== null){
			throw 'Missing required  parameter: source';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateUserPresencesBySource = updateUserPresencesBySource;
	/**
     * @summary Patch a UserPresence
	 * @description 
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {string} source - Source
	* @param {} body - The patched UserPresence
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "user": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "source": "",
   "presenceDefinition": {
      "id": "",
      "name": "",
      "languageLabels": {},
      "systemPresence": "",
      "deactivated": true,
      "createdBy": {},
      "createdDate": "",
      "modifiedBy": {},
      "modifiedDate": "",
      "selfUri": ""
   },
   "message": "",
   "modifiedBy": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "modifiedDate": "",
   "selfUri": ""
}
	*/
	function patchUserPresencesBySource(userId, source, body){
		var apipath = '/api/v1/users/{userId}/presences/{source}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        apipath = apipath.replace('{source}', source);

        if(source === undefined && source !== null){
			throw 'Missing required  parameter: source';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchUserPresencesBySource = patchUserPresencesBySource;
	/**
     * @summary Get a user's Primary UserPresence
	 * @description 
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function getUserPrimarypresence(userId){
		var apipath = '/api/v1/users/{userId}/primarypresence';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserPrimarypresence = getUserPrimarypresence;
	/**
     * @summary Get queues for user
	 * @description 
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getUserQueues(userId, pageSize, pageNumber){
		var apipath = '/api/v1/users/{userId}/queues';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserQueues = getUserQueues;
	/**
     * @summary Join or unjoin a set of queues for a user
	 * @description 
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {} body - User Queues
	*/
	function patchUserQueues(userId, body){
		var apipath = '/api/v1/users/{userId}/queues';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchUserQueues = patchUserQueues;
	/**
     * @summary Join or unjoin a queue for a user
	 * @description 
	 * @memberOf UsersApi#
	* @param {string} queueId - Queue ID
	* @param {string} userId - User ID
	* @param {} body - Queue Member
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "wrapupCodes": [],
   "mediaSettings": {},
   "bullseye": {
      "rings": []
   },
   "acwSettings": {
      "wrapupPrompt": "",
      "timeoutMs": 0
   },
   "phoneNumber": "",
   "skillEvaluationMethod": "",
   "queueFlow": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "callingPartyName": "",
   "callingPartyNumber": "",
   "joined": true,
   "memberCount": 0,
   "selfUri": ""
}
	*/
	function patchUserQueuesByQueueId(queueId, userId, body){
		var apipath = '/api/v1/users/{userId}/queues/{queueId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchUserQueuesByQueueId = patchUserQueuesByQueueId;
	/**
     * @summary List roles for user
	 * @description 
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function getUserRoles(userId){
		var apipath = '/api/v1/users/{userId}/roles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserRoles = getUserRoles;
	/**
     * @summary Fetch the routing status of a user
	 * @description 
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function getUserRoutingstatus(userId){
		var apipath = '/api/v1/users/{userId}/routingstatus';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserRoutingstatus = getUserRoutingstatus;
	/**
     * @summary Update the routing status of a user
	 * @description 
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
	function updateUserRoutingstatus(userId, body){
		var apipath = '/api/v1/users/{userId}/routingstatus';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateUserRoutingstatus = updateUserRoutingstatus;
	/**
     * @summary List skills for user
	 * @description 
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function getUserSkills(userId){
		var apipath = '/api/v1/users/{userId}/skills';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserSkills = getUserSkills;

    return self;
};

/**
* @class
* @example
* var api = new VoicemailApi(pureCloudSession);
*/
var VoicemailApi = function (pureCloudSession) {
	/**
     * @summary Get mailbox information
	 * @description 
	 * @memberOf VoicemailApi#
	*/
	function getMailbox(){
		var apipath = '/api/v1/voicemail/mailbox';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getMailbox = getMailbox;
	/**
     * @summary List voicemail messages
	 * @description 
	 * @memberOf VoicemailApi#
	*/
	function getMessages(){
		var apipath = '/api/v1/voicemail/messages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getMessages = getMessages;
	/**
     * @summary Delete all voicemail messages
	 * @description 
	 * @memberOf VoicemailApi#
	*/
	function deleteMessages(){
		var apipath = '/api/v1/voicemail/messages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteMessages = deleteMessages;
	/**
     * @summary Get message.
	 * @description 
	 * @memberOf VoicemailApi#
	* @param {string} messageId - Message ID
	*/
	function getMessage(messageId){
		var apipath = '/api/v1/voicemail/messages/{messageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getMessage = getMessage;
	/**
     * @summary Update a message.
	 * @description 
	 * @memberOf VoicemailApi#
	* @param {string} messageId - Message ID
	* @param {} body - VoicemailMessage
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "conversation": {
      "id": "",
      "name": "",
      "startTime": "",
      "endTime": "",
      "participants": [],
      "conversationIds": [],
      "maxParticipants": 0,
      "recordingState": "",
      "selfUri": ""
   },
   "read": true,
   "audioRecordingDurationSeconds": 0,
   "audioRecordingSizeBytes": 0,
   "createdDate": "",
   "modifiedDate": "",
   "callerAddress": "",
   "callerName": "",
   "callerUser": {
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "selfUri": ""
}
	*/
	function updateMessage(messageId, body){
		var apipath = '/api/v1/voicemail/messages/{messageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateMessage = updateMessage;
	/**
     * @summary Delete a message.
	 * @description 
	 * @memberOf VoicemailApi#
	* @param {string} messageId - Message ID
	*/
	function deleteMessage(messageId){
		var apipath = '/api/v1/voicemail/messages/{messageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteMessage = deleteMessage;
	/**
     * @summary Get media playback URI for this message
	 * @description 
	 * @memberOf VoicemailApi#
	* @param {string} messageId - Message ID
	* @param {string} formatId - The desired format (WEBM, WAV, etc.)
	WEBM,
	WAV,
	*/
	function getMessageMedia(messageId, formatId){
		var apipath = '/api/v1/voicemail/messages/{messageId}/media';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }


		if(formatId !== undefined && formatId !== null){
			queryParameters.formatId = formatId;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getMessageMedia = getMessageMedia;

    return self;
};

/**
* @class
* @example
* var api = new WorkforcemanagementApi(pureCloudSession);
*/
var WorkforcemanagementApi = function (pureCloudSession) {
	/**
     * @summary Get management units
	 * @description 
	 * @memberOf WorkforcemanagementApi#
	* @param {string} selector - insert reference to nice selector description here
	* @param {integer} pageSize - 
	* @param {integer} pageNumber - 
	*/
	function getManagementunits(selector, pageSize, pageNumber){
		var apipath = '/api/v1/workforcemanagement/managementunits';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(selector !== undefined && selector !== null){
			queryParameters.selector = selector;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getManagementunits = getManagementunits;
	/**
     * @summary Add a management unit
	 * @description 
	 * @memberOf WorkforcemanagementApi#
	* @param {string} selector - insert reference to nice selector description here
	* @param {} body - body
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "startDayOfWeek": "",
   "timezone": ""
}
	*/
	function createManagementunits(selector, body){
		var apipath = '/api/v1/workforcemanagement/managementunits';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(selector !== undefined && selector !== null){
			queryParameters.selector = selector;
		}

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createManagementunits = createManagementunits;
	/**
     * @summary Get management unit
	 * @description 
	 * @memberOf WorkforcemanagementApi#
	* @param {string} id - The id of the management unit.
	* @param {string} selector - insert reference to nice selector description here
	*/
	function getManagementunitsId(id, selector){
		var apipath = '/api/v1/workforcemanagement/managementunits/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		if(selector !== undefined && selector !== null){
			queryParameters.selector = selector;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getManagementunitsId = getManagementunitsId;
	/**
     * @summary Delete management unit
	 * @description 
	 * @memberOf WorkforcemanagementApi#
	* @param {string} id - The id of the management unit.
	*/
	function deleteManagementunitsId(id){
		var apipath = '/api/v1/workforcemanagement/managementunits/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteManagementunitsId = deleteManagementunitsId;
	/**
     * @summary Execute the managment unit batch command
	 * @description 
	 * @memberOf WorkforcemanagementApi#
	* @param {string} id - The id of the management unit.
	* @param {} body - body
	 * @example
	 * Body Example:
	 * {
   "items": [],
   "commandId": ""
}
	*/
	function createManagementunitsIdBatch(id, body){
		var apipath = '/api/v1/workforcemanagement/managementunits/{id}/batch';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createManagementunitsIdBatch = createManagementunitsIdBatch;
	/**
     * @summary Set timezone for the management unit
	 * @description 
	 * @memberOf WorkforcemanagementApi#
	* @param {string} id - The id of the management unit.
	* @param {} body - body
	 * @example
	 * Body Example:
	 * {
   "timezone": ""
}
	*/
	function createManagementunitsIdTimezone(id, body){
		var apipath = '/api/v1/workforcemanagement/managementunits/{id}/timezone';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createManagementunitsIdTimezone = createManagementunitsIdTimezone;

    return self;
};

/**
* @description PureCloud API
* @class
* @param  {string} environment (Optional) The environment that this is run in.  If set should be mypurecloud.com, mypurecloud.ie, mypurecloud.au, etc.
**/
var PureCloudSession =  function (environment) {
    var _host = 'api.inindca.com';
    var _auth_url = '';
    var _environment = environment || "mypurecloud.com";

    var _token = null;
    var _state = null;
    var self = {};

    if(window.location.hash) {
        //Parse out the hash values of the URL to get the token
        var hash_array = location.hash.substring(1).split('&');
        var hash_key_val = new Array(hash_array.length);
        for (var i = 0; i < hash_array.length; i++) {
            hash_key_val[i] = hash_array[i].split('=');
        }

        hash_key_val.forEach(function (pair) {
            if (pair[0] == "access_token") {

                // Store token
                _token = pair[1];

                // Clear hash from URL
                location.hash = '';
            }

            if (pair[0] == "state") {
                // Store token
                _state = pair[1];
            }
        });
    }

    /**
	 * @description Gets the value of State that was passed into the .authorize method
     * @memberOf PureCloudSession#
     */
    function getState (){
        return _state;
    }
    self.getState = getState;

    /**
	 * Initiates a redirect to authorize the client using oauth
     * @memberof PureCloudSession#
     * @param  {string} clientId    The application's Client ID
	 * @param  {string} redirectUrl The redirect URL to return to after authentication. This must be an authorized URL for the client.
	 * @param  {string} state (Optional) State variable that is returned to the application after authentication.  This can be grabbed from the .getState() method.
     * @example pureCloudSession.authorize('XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX', 'http://localhost:8085/examples/').done(function(){
         //this method will be called once we have a valid authorization token
         // if we don't have one a redirect to login will be called and then after redirecting back here,
         // the done method will be called.
     });
     *
     * @example pureCloudSession.authorize('XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX', 'http://localhost:8085/examples/', "State Value");
     */
    function authorize(clientId, redirectUrl, state, environment){
        var _doneCallback = function(){console.error("callback not set");};

        environment = environment || _environment;
        _host = 'api.'+ environment;

        var defer = {
            done: function(callback){
                _doneCallback = callback;
            }
        };

        var existingToken = null;

        if(window && window.localStorage){
            existingToken = window.localStorage.authtoken;
        }

        if(_token){
            existingToken = _token;
        }

        function authRedirect(){
            _auth_url = 'https://login.'+environment;

            var url = _auth_url + '/authorize' +
                '?response_type=token' +
                '&client_id=' + encodeURI(clientId) +
                '&redirect_uri=' + encodeURI(redirectUrl);

            if(state !== undefined && state !== null){
                url = url + '&state=' + state;
            }

            //console.debug(url);

            // Redirect to oauth url
            //console.debug('Initiating oauth process');
            window.location.replace(url);
        }

        if(existingToken && existingToken !== ''){
            _token = existingToken;
            sendRestRequest("GET", "https://" + _host + "/api/v1/users/me").done(function(){
                //has good auth token
                _token = existingToken;

                if(window && window.localStorage){
                    window.localStorage.authtoken = _token;
                }

                _doneCallback();

            }).error(function(){
                //don't have an auth token yet
                authRedirect();
            });
        }else{
            authRedirect();
        }

        return defer;
    }
    self.authorize = authorize;

    /**
     * Sets the authorization token, this is only needed if not using .authorize(...)
     * @memberof PureCloudSession#
     * @param  {string} token Authorization token
     */
    function setAuthToken(token){
        _token = token;
    }
    self.setAuthToken = setAuthToken;

    /**
     * Gets the authorization token
     * @memberof PureCloudSession#
     */
    function getAuthToken(){
        return _token;
    }

    self.getAuthToken = getAuthToken;

    /**
     * Returns if the authorization token is set
     * @memberof PureCloudSession#
     */
    function hasAuthorizationToken(){
        return _token !== null;
    }
    self.hasAuthorizationToken=hasAuthorizationToken;

    /**
     * Clears authorization token and logs out.
     * @memberof PureCloudSession#
     */
    function logout(){
        _token = null;

        if(window && window.localStorage){
            delete window.localStorage.authtoken;
        }

		window.location.replace(_auth_url + "/logout");
    }
    self.logout = logout;

    /**
    * The environment that this is run in.  If set should be mypurecloud.com, mypurecloud.ie, mypurecloud.au, etc.
    * @memberof PureCloudSession#
    * @param  {string} environment PureCloud environment (mypurecloud.com, mypurecloud.ie, mypurecloud.au, etc)
    **/
    function setEnvironment(environment){
        _environment = environment;
        _host = 'api.'+ environment;
        _auth_url = 'https://login.'+environment;
    }
    self.setEnvironment = setEnvironment;

    function sendRestRequest(method, url, body){
        var requestParams = {
             method: method,
             url: url,
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
             },
             beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'bearer ' + _token);},
             timeout: 2000
         };

         if(body){
             requestParams.data = JSON.stringify(body);
         }

         var request = $.ajax(requestParams);

         return request;
    }

    /**
     * Executes an authenticated GET to PureCloud.  Can be used with paging URIs to get a page that has a defined full url.
     * @memberof PureCloudSession#
     * @param  {string} url The full or relative path URL to get
     * @example pureCloudSession.get("https://api.mypurecloud.com/api/v1/users/me");
     * @example pureCloudSession.get("/api/v1/users/me");
     */
    function get(url){
        if(url[0] === '/'){
            url = 'https://'+ _host + url;
        }

        return sendRestRequest("GET", url);
    }
    self.get = get;

    /**
     * Executes an authenticated request to PureCloud
     * @memberof PureCloudSession#
     * @param  {string} method The HTTP method (GET, POST, PUT, DELETE)
     * @param  {uri} path The relative uri path
     * @param  {JSON} body The body to send
     * @example pureCloudSession.makeRequest("GET", "/api/v1/users/me");
     */
    function makeRequest (method,path,body){
        return sendRestRequest(method, 'https://'+ _host + path, body);
    }
    self.makeRequest = makeRequest;

	return self;
};
