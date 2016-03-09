//API VERSION - 
/**
* @class
* @example
* var api = new AnalyticsApi(pureCloudSession);
*/
var AnalyticsApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
	}

	var self = this;
	/**
     * @summary Get a list of alerts.
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
	 * @memberOf AnalyticsApi#
	* @param {string} alertId - Alert ID
	*/
	function getAlertingAlertsAlertId(alertId){
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
	self.getAlertingAlertsAlertId = getAlertingAlertsAlertId;
	/**
     * @summary Update an alerts unread status.
	 * @memberOf AnalyticsApi#
	* @param {string} alertId - Alert ID
	* @param {} body - Alert
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "title": "",
   "description": "",
   "unread": true,
   "entity": {
      "type": "",
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "metric": "",
   "metricThresholds": [],
   "metricValue": {},
   "startTime": "",
   "endTime": "",
   "mediaType": "",
   "statistic": "",
   "ruleUri": ""
}
	*/
	function putAlertingAlertsAlertId(alertId, body){
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
	self.putAlertingAlertsAlertId = putAlertingAlertsAlertId;
	/**
     * @summary Delete an alert.
	 * @memberOf AnalyticsApi#
	* @param {string} alertId - Alert ID
	*/
	function deleteAlertingAlertsAlertId(alertId){
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
	self.deleteAlertingAlertsAlertId = deleteAlertingAlertsAlertId;
	/**
     * @summary Get a list of rules.
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
	 * @memberOf AnalyticsApi#
	* @param {} body - Rule
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "title": "",
   "description": "",
   "enabled": true,
   "metric": "",
   "entity": {
      "type": "",
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "metricThresholds": [],
   "inAlarm": true,
   "occurrence": {
      "limit": 0,
      "type": ""
   },
   "mediaType": "",
   "statistic": ""
}
	*/
	function postAlertingRules(body){
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
	self.postAlertingRules = postAlertingRules;
	/**
     * @summary Get an alerting rule.
	 * @memberOf AnalyticsApi#
	* @param {string} ruleId - Rule ID
	*/
	function getAlertingRulesRuleId(ruleId){
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
	self.getAlertingRulesRuleId = getAlertingRulesRuleId;
	/**
     * @summary Update an alerting rule.
	 * @memberOf AnalyticsApi#
	* @param {string} ruleId - Rule ID
	* @param {} body - Rule
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "title": "",
   "description": "",
   "enabled": true,
   "metric": "",
   "entity": {
      "type": "",
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "metricThresholds": [],
   "inAlarm": true,
   "occurrence": {
      "limit": 0,
      "type": ""
   },
   "mediaType": "",
   "statistic": ""
}
	*/
	function putAlertingRulesRuleId(ruleId, body){
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
	self.putAlertingRulesRuleId = putAlertingRulesRuleId;
	/**
     * @summary Delete an alerting rule.
	 * @memberOf AnalyticsApi#
	* @param {string} ruleId - Rule ID
	*/
	function deleteAlertingRulesRuleId(ruleId){
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
	self.deleteAlertingRulesRuleId = deleteAlertingRulesRuleId;
	/**
     * @summary Executes a metrics query against the analytics service
	 * @memberOf AnalyticsApi#
	* @param {} body - queryObject
	*/
	function postMetricsQuery(body){
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
	self.postMetricsQuery = postMetricsQuery;
	/**
     * @summary Get list of reporting metadata.
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
   "name": "",
   "quartzCronExpression": "",
   "nextFireTime": "",
   "dateCreated": "",
   "dateModified": "",
   "description": "",
   "timeZone": "",
   "timePeriod": "",
   "interval": {},
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
	function postReportingSchedules(body){
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
	self.postReportingSchedules = postReportingSchedules;
	/**
     * @summary Get a scheduled report job.
	 * @memberOf AnalyticsApi#
	* @param {string} scheduleId - Schedule ID
	*/
	function getReportingSchedulesScheduleId(scheduleId){
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
	self.getReportingSchedulesScheduleId = getReportingSchedulesScheduleId;
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
   "interval": {},
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
	function putReportingSchedulesScheduleId(scheduleId, body){
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
	self.putReportingSchedulesScheduleId = putReportingSchedulesScheduleId;
	/**
     * @summary Delete a scheduled report job.
	 * @memberOf AnalyticsApi#
	* @param {string} scheduleId - Schedule ID
	*/
	function deleteReportingSchedulesScheduleId(scheduleId){
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
	self.deleteReportingSchedulesScheduleId = deleteReportingSchedulesScheduleId;
	/**
     * @summary Get list of completed scheduled report jobs.
	 * @memberOf AnalyticsApi#
	* @param {string} scheduleId - Schedule ID
	* @param {integer} pageNumber - 
	* @param {integer} pageSize - 
	*/
	function getReportingSchedulesScheduleIdHistory(scheduleId, pageNumber, pageSize){
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
	self.getReportingSchedulesScheduleIdHistory = getReportingSchedulesScheduleIdHistory;
	/**
     * @summary Get most recently completed scheduled report job.
	 * @memberOf AnalyticsApi#
	* @param {string} scheduleId - Schedule ID
	*/
	function getReportingSchedulesScheduleIdHistoryLatest(scheduleId){
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
	self.getReportingSchedulesScheduleIdHistoryLatest = getReportingSchedulesScheduleIdHistoryLatest;
	/**
     * @summary A completed scheduled report job
	 * @description A completed scheduled report job.
	 * @memberOf AnalyticsApi#
	* @param {string} runId - Run ID
	* @param {string} scheduleId - Schedule ID
	*/
	function getReportingSchedulesScheduleIdHistoryRunId(runId, scheduleId){
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
	self.getReportingSchedulesScheduleIdHistoryRunId = getReportingSchedulesScheduleIdHistoryRunId;
	/**
     * @summary Place a scheduled report immediately into the reporting queue
	 * @memberOf AnalyticsApi#
	* @param {string} scheduleId - Schedule ID
	*/
	function postReportingSchedulesScheduleIdRunreport(scheduleId){
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
	self.postReportingSchedulesScheduleIdRunreport = postReportingSchedulesScheduleIdRunreport;
	/**
     * @summary Get a list of report time periods.
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
	 * @memberOf AnalyticsApi#
	* @param {string} reportId - Report ID
	* @param {string} acceptLanguage - Accepted language
	* @param {string} locale - Locale
	*/
	function getReportingReportIdMetadata(reportId, acceptLanguage, locale){
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
	self.getReportingReportIdMetadata = getReportingReportIdMetadata;
	/**
     * @summary Executes a segments query against the analytics service
	 * @memberOf AnalyticsApi#
	* @param {} body - queryObject
	*/
	function postSegmentsQuery(body){
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
	self.postSegmentsQuery = postSegmentsQuery;

    return self;
};
