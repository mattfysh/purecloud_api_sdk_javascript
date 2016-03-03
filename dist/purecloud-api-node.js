(function () {
    var $ = null;
    var jsdom = require("jsdom").jsdom;
    var doc = jsdom("<div></div>");
    var window = doc.defaultView;
    $ = require('jquery')(window);

/**
* @class
* @example
* var api = new AnalyticsApi(pureCloudSession);
*/
var AnalyticsApi = function (pureCloudSession) {
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
	function putAlertingAlert(alertId, body){
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
	self.putAlertingAlert = putAlertingAlert;
	/**
     * @summary Delete an alert.
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
	function putAlertingRule(ruleId, body){
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
	self.putAlertingRule = putAlertingRule;
	/**
     * @summary Delete an alerting rule.
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
	function putReportingSchedule(scheduleId, body){
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
	self.putReportingSchedule = putReportingSchedule;
	/**
     * @summary Delete a scheduled report job.
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
	function getReportingScheduleHistory(runId, scheduleId){
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
	self.getReportingScheduleHistory = getReportingScheduleHistory;
	/**
     * @summary Place a scheduled report immediately into the reporting queue
	 * @memberOf AnalyticsApi#
	* @param {string} scheduleId - Schedule ID
	*/
	function postReportingScheduleRunreport(scheduleId){
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
	self.postReportingScheduleRunreport = postReportingScheduleRunreport;
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
	function getReportingMetadata(reportId, acceptLanguage, locale){
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
	self.getReportingMetadata = getReportingMetadata;
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

/**
* @class
* @example
* var api = new ArchitectApi(pureCloudSession);
*/
var ArchitectApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Gets architect-data-service audit entries.
	 * @memberOf ArchitectApi#
	* @param {} body - AuditSearchRequest
	 * @example
	 * Body Example:
	 * {
   "pageNumber": 0,
   "pageSize": 0,
   "sortBy": [],
   "queryPhrase": "",
   "queryFields": [],
   "facets": [],
   "filters": []
}
	*/
	function postAudits(body){
		var apipath = '/api/v1/architect/audits';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postAudits = postAudits;
	/**
     * @summary Get IVR configs.
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
	 * @memberOf ArchitectApi#
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
   }
}
	*/
	function postIvrs(body){
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
	self.postIvrs = postIvrs;
	/**
     * @summary Publish an IVR config.
	 * @memberOf ArchitectApi#
	* @param {string} id - 
	*/
	function postIvrsActionsPublish(id){
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
	self.postIvrsActionsPublish = postIvrsActionsPublish;
	/**
     * @summary Get an IVR config.
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
	 * @memberOf ArchitectApi#
	* @param {string} ivrId - IVR id
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
   }
}
	*/
	function putIvr(ivrId, body){
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
	self.putIvr = putIvr;
	/**
     * @summary Delete an IVR Config.
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
	 * @memberOf ArchitectApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "resources": []
}
	*/
	function postPrompts(body){
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
	self.postPrompts = postPrompts;
	/**
     * @summary Batch-delete a list of prompts
	 * @description Multiple IDs can be specified, in which case all specified prompts will be deleted.
	 * @memberOf ArchitectApi#
	* @param {array} id - List of Prompt IDs
	* @param {boolean} ignoreDependencies - Ignore Dependencies
	*/
	function deletePrompts(id, ignoreDependencies){
		var apipath = '/api/v1/architect/prompts';
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


		if(ignoreDependencies !== undefined && ignoreDependencies !== null){
			queryParameters.ignoreDependencies = ignoreDependencies;
		}


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deletePrompts = deletePrompts;
	/**
     * @summary Get specified user prompt
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
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "resources": []
}
	*/
	function putPrompt(promptId, body){
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
	self.putPrompt = putPrompt;
	/**
     * @summary Delete specified user prompt
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
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "promptId": "",
   "language": "",
   "mediaUri": "",
   "ttsString": "",
   "uploadStatus": "",
   "uploadUri": "",
   "durationSeconds": {}
}
	*/
	function postPromptResources(promptId, body){
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
	self.postPromptResources = postPromptResources;
	/**
     * @summary Get specified user prompt resource
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {string} language - Language
	*/
	function getPromptResources(promptId, language){
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
	self.getPromptResources = getPromptResources;
	/**
     * @summary Update specified user prompt resource
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {string} language - Language
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "promptId": "",
   "language": "",
   "mediaUri": "",
   "ttsString": "",
   "uploadStatus": "",
   "uploadUri": "",
   "durationSeconds": {}
}
	*/
	function putPromptResources(promptId, language, body){
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
	self.putPromptResources = putPromptResources;
	/**
     * @summary Delete specified user prompt resource
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {string} language - Language
	*/
	function deletePromptResources(promptId, language){
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
	self.deletePromptResources = deletePromptResources;
	/**
     * @summary Get a list of schedule groups.
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
	 * @memberOf ArchitectApi#
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
   "timeZone": "",
   "openSchedules": [],
   "closedSchedules": []
}
	*/
	function postSchedulegroups(body){
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
	self.postSchedulegroups = postSchedulegroups;
	/**
     * @summary Gets a schedule group by ID
	 * @memberOf ArchitectApi#
	* @param {string} scheduleGroupId - Schedule group ID
	*/
	function getSchedulegroup(scheduleGroupId){
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
	self.getSchedulegroup = getSchedulegroup;
	/**
     * @summary Updates a schedule group by ID
	 * @memberOf ArchitectApi#
	* @param {string} scheduleGroupId - Schedule group ID
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
   "timeZone": "",
   "openSchedules": [],
   "closedSchedules": []
}
	*/
	function putSchedulegroup(scheduleGroupId, body){
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
	self.putSchedulegroup = putSchedulegroup;
	/**
     * @summary Deletes a schedule group by ID
	 * @memberOf ArchitectApi#
	* @param {string} scheduleGroupId - Schedule group ID
	*/
	function deleteSchedulegroup(scheduleGroupId){
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
	self.deleteSchedulegroup = deleteSchedulegroup;
	/**
     * @summary Get a list of schedules.
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
	 * @memberOf ArchitectApi#
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
   "start": "",
   "end": "",
   "rrule": "",
   "keywords": []
}
	*/
	function postSchedules(body){
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
	self.postSchedules = postSchedules;
	/**
     * @summary Get a schedule by ID
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
	 * @memberOf ArchitectApi#
	* @param {string} scheduleId - Schedule ID
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
   "start": "",
   "end": "",
   "rrule": "",
   "keywords": []
}
	*/
	function putSchedule(scheduleId, body){
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
	self.putSchedule = putSchedule;
	/**
     * @summary Delete a schedule by id
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
	 * @memberOf ArchitectApi#
	* @param {string} promptId - 
	*/
	function getSystemprompt(promptId){
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
	self.getSystemprompt = getSystemprompt;
	/**
     * @summary Get IVR System Prompt resources.
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	*/
	function getSystempromptResources(promptId, pageNumber, pageSize, sortBy, sortOrder){
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
	self.getSystempromptResources = getSystempromptResources;
	/**
     * @summary Create system prompt resource override.
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "promptId": "",
   "language": "",
   "durationSeconds": {},
   "mediaUri": "",
   "ttsString": "",
   "uploadUri": "",
   "uploadStatus": "",
   "hasDefault": true
}
	*/
	function postSystempromptResources(promptId, body){
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
	self.postSystempromptResources = postSystempromptResources;
	/**
     * @summary Get a system prompt resource.
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {string} language - Language
	*/
	function getSystempromptResources(promptId, language){
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
	self.getSystempromptResources = getSystempromptResources;
	/**
     * @summary Delete a system prompt resource override.
	 * @memberOf ArchitectApi#
	* @param {string} promptId - Prompt ID
	* @param {string} language - Language
	*/
	function deleteSystempromptResources(promptId, language){
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
	self.deleteSystempromptResources = deleteSystempromptResources;
	/**
     * @summary Get a pageable list of flows, filtered by query parameters
	 * @description Multiple IDs can be specified, in which case all matching flows will be returned, and no other parameters will be evaluated.
	 * @memberOf ArchitectApi#
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
	* @param {string} editableBy - Editable by
	* @param {string} lockedBy - Locked by
	* @param {boolean} doDeleted - Include deleted
	*/
	function getFlows(type, pageNumber, pageSize, sortBy, sortOrder, id, name, description, nameOrDescription, publishVersionId, editableBy, lockedBy, doDeleted){
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


		if(editableBy !== undefined && editableBy !== null){
			queryParameters.editableBy = editableBy;
		}


		if(lockedBy !== undefined && lockedBy !== null){
			queryParameters.lockedBy = lockedBy;
		}


		if(doDeleted !== undefined && doDeleted !== null){
			queryParameters.deleted = doDeleted;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFlows = getFlows;
	/**
     * @summary Create flow
	 * @memberOf ArchitectApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
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
      "name": "",
      "commitVersion": "",
      "configurationVersion": "",
      "type": "",
      "createdBy": {},
      "configurationUri": "",
      "dateCreated": 0,
      "generationId": "",
      "publishResultUri": ""
   },
   "checkedInVersion": {
      "name": "",
      "commitVersion": "",
      "configurationVersion": "",
      "type": "",
      "createdBy": {},
      "configurationUri": "",
      "dateCreated": 0,
      "generationId": "",
      "publishResultUri": ""
   },
   "savedVersion": {
      "name": "",
      "commitVersion": "",
      "configurationVersion": "",
      "type": "",
      "createdBy": {},
      "configurationUri": "",
      "dateCreated": 0,
      "generationId": "",
      "publishResultUri": ""
   },
   "system": true
}
	*/
	function postFlows(body){
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
	self.postFlows = postFlows;
	/**
     * @summary Batch-delete a list of flows
	 * @description Multiple IDs can be specified, in which case all specified flows will be deleted.
	 * @memberOf ArchitectApi#
	* @param {array} id - List of Flow IDs
	* @param {boolean} ignoreDependencies - Ignore Dependencies
	*/
	function deleteFlows(id, ignoreDependencies){
		var apipath = '/api/v1/flows';
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


		if(ignoreDependencies !== undefined && ignoreDependencies !== null){
			queryParameters.ignoreDependencies = ignoreDependencies;
		}


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteFlows = deleteFlows;
	/**
     * @summary Check-in flow
	 * @memberOf ArchitectApi#
	* @param {string} flow - Flow
	*/
	function postFlowsActionsCheckin(flow){
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
	self.postFlowsActionsCheckin = postFlowsActionsCheckin;
	/**
     * @summary Check-out flow
	 * @memberOf ArchitectApi#
	* @param {string} flow - Flow
	*/
	function postFlowsActionsCheckout(flow){
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
	self.postFlowsActionsCheckout = postFlowsActionsCheckout;
	/**
     * @summary Deactivate flow
	 * @memberOf ArchitectApi#
	* @param {string} flow - Flow
	*/
	function postFlowsActionsDeactivate(flow){
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
	self.postFlowsActionsDeactivate = postFlowsActionsDeactivate;
	/**
     * @summary Debug flow
	 * @memberOf ArchitectApi#
	* @param {string} flow - Flow
	* @param {string} version - 
	*/
	function postFlowsActionsDebug(flow, version){
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
	self.postFlowsActionsDebug = postFlowsActionsDebug;
	/**
     * @summary Revert flow
	 * @memberOf ArchitectApi#
	* @param {string} flow - Flow
	*/
	function postFlowsActionsRevert(flow){
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
	self.postFlowsActionsRevert = postFlowsActionsRevert;
	/**
     * @summary Get flow.
	 * @memberOf ArchitectApi#
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
	 * @memberOf ArchitectApi#
	* @param {string} flowId - Flow ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
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
      "name": "",
      "commitVersion": "",
      "configurationVersion": "",
      "type": "",
      "createdBy": {},
      "configurationUri": "",
      "dateCreated": 0,
      "generationId": "",
      "publishResultUri": ""
   },
   "checkedInVersion": {
      "name": "",
      "commitVersion": "",
      "configurationVersion": "",
      "type": "",
      "createdBy": {},
      "configurationUri": "",
      "dateCreated": 0,
      "generationId": "",
      "publishResultUri": ""
   },
   "savedVersion": {
      "name": "",
      "commitVersion": "",
      "configurationVersion": "",
      "type": "",
      "createdBy": {},
      "configurationUri": "",
      "dateCreated": 0,
      "generationId": "",
      "publishResultUri": ""
   },
   "system": true
}
	*/
	function putFlow(flowId, body){
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
	self.putFlow = putFlow;
	/**
     * @summary Delete flow.
	 * @memberOf ArchitectApi#
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
	 * @memberOf ArchitectApi#
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
	 * @memberOf ArchitectApi#
	* @param {string} flowId - Flow ID
	* @param {string} id - Publish Result ID
	*/
	function getFlowPublishedresults(flowId, id){
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
	self.getFlowPublishedresults = getFlowPublishedresults;
	/**
     * @summary Get flow version list
	 * @memberOf ArchitectApi#
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
	 * @memberOf ArchitectApi#
	* @param {string} flowId - Flow ID
	* @param {} body - 
	*/
	function postFlowVersions(flowId, body){
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
	self.postFlowVersions = postFlowVersions;
	/**
     * @summary Get flow version
	 * @memberOf ArchitectApi#
	* @param {string} flowId - Flow ID
	* @param {string} versionId - Version ID
	* @param {string} doDeleted - Deleted
	*/
	function getFlowVersion(flowId, versionId, doDeleted){
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
	self.getFlowVersion = getFlowVersion;
	/**
     * @summary Create flow version configuration
	 * @memberOf ArchitectApi#
	* @param {string} flowId - Flow ID
	* @param {string} versionId - Version ID
	* @param {string} doDeleted - Deleted
	*/
	function getFlowVersionConfiguration(flowId, versionId, doDeleted){
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
	self.getFlowVersionConfiguration = getFlowVersionConfiguration;

    return self;
};

/**
* @class
* @example
* var api = new AttributesApi(pureCloudSession);
*/
var AttributesApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Gets a list of existing attributes.
	 * @memberOf AttributesApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	*/
	function getAttributes(pageNumber, pageSize){
		var apipath = '/api/v1/attributes';
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
	self.getAttributes = getAttributes;
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
	function postAttributes(body){
		var apipath = '/api/v1/attributes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postAttributes = postAttributes;
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
	function postQuery(body){
		var apipath = '/api/v1/attributes/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postQuery = postQuery;
	/**
     * @summary Get details about an existing attribute.
	 * @memberOf AttributesApi#
	* @param {string} attributeId - Attribute ID
	*/
	function get(attributeId){
		var apipath = '/api/v1/attributes/{attributeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{attributeId}', attributeId);

        if(attributeId === undefined && attributeId !== null){
			throw 'Missing required  parameter: attributeId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.get = get;
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
	function put(attributeId, body){
		var apipath = '/api/v1/attributes/{attributeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{attributeId}', attributeId);

        if(attributeId === undefined && attributeId !== null){
			throw 'Missing required  parameter: attributeId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.put = put;
	/**
     * @summary Delete an existing Attribute.
	 * @description This will remove attribute.
	 * @memberOf AttributesApi#
	* @param {string} attributeId - Attribute ID
	*/
	function performDelete(attributeId){
		var apipath = '/api/v1/attributes/{attributeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{attributeId}', attributeId);

        if(attributeId === undefined && attributeId !== null){
			throw 'Missing required  parameter: attributeId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.performDelete = performDelete;

    return self;
};

/**
* @class
* @example
* var api = new AuthorizationApi(pureCloudSession);
*/
var AuthorizationApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Retrieve a list of all licenses defined in the system
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
     * @summary Get the list of enabled products
	 * @description Gets the list of enabled products. Some example product names are: collaborateFree, collaboratePro, communicate, and engage.
	 * @memberOf AuthorizationApi#
	*/
	function getProducts(){
		var apipath = '/api/v1/authorization/products';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProducts = getProducts;
	/**
     * @summary Retrieve a list of all roles defined for the organization
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
	 * @memberOf AuthorizationApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "defaultRoleId": "",
   "permissions": [],
   "licenses": [],
   "permissionPolicies": [],
   "code": "",
   "userCount": 0,
   "roleNeedsUpdate": true,
   "default": true
}
	*/
	function postRoles(body){
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
	self.postRoles = postRoles;
	/**
     * @summary Restores all default roles
	 * @description This endpoint serves several purposes. 1. It provides the org with default roles. This is important for default roles that will be added after go-live (they can retroactively add the new default-role). Note: When not using a query param of force=true, it only adds the default roles not configured for the org; it does not overwrite roles. 2. Using the query param force=true, you can restore all default roles. Note: This does not have an effect on custom roles.
	 * @memberOf AuthorizationApi#
	* @param {boolean} force - Restore default roles
	*/
	function postRolesDefault(force){
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
	self.postRolesDefault = postRolesDefault;
	/**
     * @summary Restore specified default roles
	 * @memberOf AuthorizationApi#
	* @param {} body - 
	*/
	function putRolesDefault(body){
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
	self.putRolesDefault = putRolesDefault;
	/**
     * @summary Get an org role to default role comparison comparison
	 * @description Compares any organization role to a default role id and show differences
	 * @memberOf AuthorizationApi#
	* @param {string} leftRoleId - Left Role ID
	* @param {string} rightRoleId - Right Role id
	*/
	function getRoleComparedefault(leftRoleId, rightRoleId){
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
	self.getRoleComparedefault = getRoleComparedefault;
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
   "licenses": [],
   "permissionPolicies": [],
   "code": "",
   "userCount": 0,
   "roleNeedsUpdate": true,
   "default": true
}
	*/
	function postRoleComparedefault(leftRoleId, rightRoleId, body){
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
	self.postRoleComparedefault = postRoleComparedefault;
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
   "name": "",
   "description": "",
   "defaultRoleId": "",
   "permissions": [],
   "licenses": [],
   "permissionPolicies": [],
   "code": "",
   "userCount": 0,
   "roleNeedsUpdate": true,
   "default": true
}
	*/
	function putRole(roleId, body){
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
	self.putRole = putRole;
	/**
     * @summary Delete an organization role.
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
   "name": "",
   "description": "",
   "defaultRoleId": "",
   "permissions": [],
   "licenses": [],
   "permissionPolicies": [],
   "code": "",
   "userCount": 0,
   "roleNeedsUpdate": true,
   "default": true
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
	 * @memberOf AuthorizationApi#
	* @param {string} roleId - Role ID
	* @param {} body - 
	*/
	function putRoleUsersAdd(roleId, body){
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
	self.putRoleUsersAdd = putRoleUsersAdd;
	/**
     * @summary Removes the users from the role
	 * @memberOf AuthorizationApi#
	* @param {string} roleId - Role ID
	* @param {} body - 
	*/
	function putRoleUsersRemove(roleId, body){
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
	self.putRoleUsersRemove = putRoleUsersRemove;
	/**
     * @summary Get the list of roles for a user.
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
	 * @memberOf AuthorizationApi#
	* @param {string} userId - User ID
	* @param {} body - 
	*/
	function putUserRoles(userId, body){
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
	self.putUserRoles = putUserRoles;
	/**
     * @summary Removes all the roles from the user.
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
* var api = new ComplianceApi(pureCloudSession);
*/
var ComplianceApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Get information about HIPAA compliance
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
	 * @memberOf ComplianceApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "enableIdleTokenTimeout": true
}
	*/
	function putHipaa(body){
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
	self.putHipaa = putHipaa;

    return self;
};

/**
* @class
* @example
* var api = new ConfigurationApi(pureCloudSession);
*/
var ConfigurationApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Get a listing of DID Pools
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
	 * @memberOf ConfigurationApi#
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
	function postDidpools(body){
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
	self.postDidpools = postDidpools;
	/**
     * @summary Get a DID Pool by ID.
	 * @memberOf ConfigurationApi#
	* @param {string} didPoolId - DID pool ID
	*/
	function getDidpool(didPoolId){
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
	self.getDidpool = getDidpool;
	/**
     * @summary Update a DID Pool by ID.
	 * @memberOf ConfigurationApi#
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
	function putDidpool(didPoolId, body){
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
	self.putDidpool = putDidpool;
	/**
     * @summary Delete a DID Pool by ID.
	 * @memberOf ConfigurationApi#
	* @param {string} didPoolId - DID pool ID
	*/
	function deleteDidpool(didPoolId){
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
	self.deleteDidpool = deleteDidpool;
	/**
     * @summary Get a listing of DIDs
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
	 * @memberOf ConfigurationApi#
	* @param {string} didId - DID ID
	*/
	function getDid(didId){
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
	self.getDid = getDid;
	/**
     * @summary Update a DID by ID.
	 * @memberOf ConfigurationApi#
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
	function putDid(didId, body){
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
	self.putDid = putDid;
	/**
     * @summary Get the list of edges.
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
	 * @memberOf ConfigurationApi#
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
      "phoneTrunkBaseAssignments": []
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
	function postEdges(body){
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
	self.postEdges = postEdges;
	/**
     * @summary Get the list of certificate authorities.
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
	 * @memberOf ConfigurationApi#
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
	function postEdgesCertificateauthorities(body){
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
	self.postEdgesCertificateauthorities = postEdgesCertificateauthorities;
	/**
     * @summary Get a certificate authority.
	 * @memberOf ConfigurationApi#
	* @param {string} certificateId - Certificate ID
	*/
	function getEdgesCertificateauthoritie(certificateId){
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
	self.getEdgesCertificateauthoritie = getEdgesCertificateauthoritie;
	/**
     * @summary Update a certificate authority.
	 * @memberOf ConfigurationApi#
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
	function putEdgesCertificateauthoritie(certificateId, body){
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
	self.putEdgesCertificateauthoritie = putEdgesCertificateauthoritie;
	/**
     * @summary Delete a certificate authority.
	 * @memberOf ConfigurationApi#
	* @param {string} certificateId - Certificate ID
	*/
	function deleteEdgesCertificateauthoritie(certificateId){
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
	self.deleteEdgesCertificateauthoritie = deleteEdgesCertificateauthoritie;
	/**
     * @summary Get edge.
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
	 * @memberOf ConfigurationApi#
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
      "phoneTrunkBaseAssignments": []
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
	function putEdge(edgeId, body){
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
	self.putEdge = putEdge;
	/**
     * @summary Delete a edge.
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
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	* @param {string} lineId - Line ID
	*/
	function getEdgeLine(edgeId, lineId){
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
	self.getEdgeLine = getEdgeLine;
	/**
     * @summary Update a line.
	 * @memberOf ConfigurationApi#
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
      "phoneTrunkBaseAssignments": []
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
	function putEdgeLine(edgeId, lineId, body){
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
	self.putEdgeLine = putEdgeLine;
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
   "useForInternalEdgeCommunication": true,
   "externalTrunkBaseAssignments": [],
   "phoneTrunkBaseAssignments": []
}
	*/
	function postEdgeLogicalinterfaces(edgeId, body){
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
	self.postEdgeLogicalinterfaces = postEdgeLogicalinterfaces;
	/**
     * @summary Get an edge logical interface
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	* @param {string} interfaceId - Interface ID
	*/
	function getEdgeLogicalinterface(edgeId, interfaceId){
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
	self.getEdgeLogicalinterface = getEdgeLogicalinterface;
	/**
     * @summary Update an edge logical interface.
	 * @memberOf ConfigurationApi#
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
   "useForInternalEdgeCommunication": true,
   "externalTrunkBaseAssignments": [],
   "phoneTrunkBaseAssignments": []
}
	*/
	function putEdgeLogicalinterface(edgeId, interfaceId, body){
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
	self.putEdgeLogicalinterface = putEdgeLogicalinterface;
	/**
     * @summary Delete an edge logical interface
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	* @param {string} interfaceId - Interface ID
	*/
	function deleteEdgeLogicalinterface(edgeId, interfaceId){
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
	self.deleteEdgeLogicalinterface = deleteEdgeLogicalinterface;
	/**
     * @summary Create a job to upload a list of Edge logs.
	 * @memberOf ConfigurationApi#
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
	function postEdgeLogsJobs(edgeId, body){
		var apipath = '/api/v1/configuration/edges/{edgeId}/logs/jobs';
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
	self.postEdgeLogsJobs = postEdgeLogsJobs;
	/**
     * @summary Get an Edge logs job.
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	* @param {string} jobId - 
	*/
	function getEdgeLogsJob(edgeId, jobId){
		var apipath = '/api/v1/configuration/edges/{edgeId}/logs/jobs/{jobId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        apipath = apipath.replace('{jobId}', jobId);

        if(jobId === undefined && jobId !== null){
			throw 'Missing required  parameter: jobId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEdgeLogsJob = getEdgeLogsJob;
	/**
     * @summary Request that the specified fileIds be uploaded from the Edge.
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	* @param {string} jobId - 
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "fileIds": []
}
	*/
	function postEdgeLogsJobUpload(edgeId, jobId, body){
		var apipath = '/api/v1/configuration/edges/{edgeId}/logs/jobs/{jobId}/upload';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        apipath = apipath.replace('{jobId}', jobId);

        if(jobId === undefined && jobId !== null){
			throw 'Missing required  parameter: jobId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postEdgeLogsJobUpload = postEdgeLogsJobUpload;
	/**
     * @summary Retrieve a list of all configured physical interfaces from a specific edge.
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
	function getEdgePhysicalinterface(edgeId, interfaceId){
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
	self.getEdgePhysicalinterface = getEdgePhysicalinterface;
	/**
     * @summary Reboot an Edge
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	*/
	function postEdgeReboot(edgeId){
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
	self.postEdgeReboot = postEdgeReboot;
	/**
     * @summary Gets software update status information about any edge.
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
	 * @memberOf ConfigurationApi#
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
	function postEdgeSoftwareupdate(edgeId, body){
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
	self.postEdgeSoftwareupdate = postEdgeSoftwareupdate;
	/**
     * @summary Cancels any in-progress update for this edge.
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
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge Id
	*/
	function postEdgeUnpair(edgeId){
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
	self.postEdgeUnpair = postEdgeUnpair;
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
	 * @memberOf ConfigurationApi#
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
	function postEndpoints(body){
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
	self.postEndpoints = postEndpoints;
	/**
     * @summary Get endpoint
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
	 * @memberOf ConfigurationApi#
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
	function putEndpoint(endpointId, body){
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
	self.putEndpoint = putEndpoint;
	/**
     * @summary Delete endpoint
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
	 * @memberOf ConfigurationApi#
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
	function postExtensionpools(body){
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
	self.postExtensionpools = postExtensionpools;
	/**
     * @summary Get an extension pool by ID
	 * @memberOf ConfigurationApi#
	* @param {string} extensionPoolId - Extension pool ID
	*/
	function getExtensionpool(extensionPoolId){
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
	self.getExtensionpool = getExtensionpool;
	/**
     * @summary Update an extension pool by ID
	 * @memberOf ConfigurationApi#
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
	function putExtensionpool(extensionPoolId, body){
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
	self.putExtensionpool = putExtensionpool;
	/**
     * @summary Delete an extension pool by ID
	 * @memberOf ConfigurationApi#
	* @param {string} extensionPoolId - Extension pool ID
	*/
	function deleteExtensionpool(extensionPoolId){
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
	self.deleteExtensionpool = deleteExtensionpool;
	/**
     * @summary Get a listing of extensions
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
	 * @memberOf ConfigurationApi#
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
	function putExtension(extensionId, body){
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
	self.putExtension = putExtension;
	/**
     * @summary Gets media retention policy list with query options to filter on name and enabled.
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
	function getMediaretentionpolicies(pageSize, pageNumber, sortBy, expand, name, enabled, summary, hasErrors){
		var apipath = '/api/v1/configuration/mediaretentionpolicies';
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
	self.getMediaretentionpolicies = getMediaretentionpolicies;
	/**
     * @summary Create media retention policy
	 * @memberOf ConfigurationApi#
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
      "assignEvaluations": [],
      "assignMeteredEvaluations": [],
      "assignCalibrations": [],
      "retentionDuration": {}
   },
   "policyErrors": {
      "policyErrorMessages": []
   }
}
	*/
	function postMediaretentionpolicies(body){
		var apipath = '/api/v1/configuration/mediaretentionpolicies';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postMediaretentionpolicies = postMediaretentionpolicies;
	/**
     * @summary Delete media retention policies
	 * @description Bulk delete of media retention policies, this will only delete the polices that match the ids specified in the query param.
	 * @memberOf ConfigurationApi#
	* @param {string} ids - Bulk delete of media retention policies, this will only delete the polices that match the ids specified in the query param.
	*/
	function deleteMediaretentionpolicies(ids){
		var apipath = '/api/v1/configuration/mediaretentionpolicies';
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
	self.deleteMediaretentionpolicies = deleteMediaretentionpolicies;
	/**
     * @summary Get a media retention policy
	 * @memberOf ConfigurationApi#
	* @param {string} policyId - Policy ID
	*/
	function getMediaretentionpolicie(policyId){
		var apipath = '/api/v1/configuration/mediaretentionpolicies/{policyId}';
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
	self.getMediaretentionpolicie = getMediaretentionpolicie;
	/**
     * @summary Update a media retention policy
	 * @memberOf ConfigurationApi#
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
      "assignEvaluations": [],
      "assignMeteredEvaluations": [],
      "assignCalibrations": [],
      "retentionDuration": {}
   },
   "policyErrors": {
      "policyErrorMessages": []
   }
}
	*/
	function putMediaretentionpolicie(policyId, body){
		var apipath = '/api/v1/configuration/mediaretentionpolicies/{policyId}';
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
	self.putMediaretentionpolicie = putMediaretentionpolicie;
	/**
     * @summary Delete a media retention policy
	 * @memberOf ConfigurationApi#
	* @param {string} policyId - Policy ID
	*/
	function deleteMediaretentionpolicie(policyId){
		var apipath = '/api/v1/configuration/mediaretentionpolicies/{policyId}';
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
	self.deleteMediaretentionpolicie = deleteMediaretentionpolicie;
	/**
     * @summary Patch a media retention policy
	 * @memberOf ConfigurationApi#
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
      "assignEvaluations": [],
      "assignMeteredEvaluations": [],
      "assignCalibrations": [],
      "retentionDuration": {}
   },
   "policyErrors": {
      "policyErrorMessages": []
   }
}
	*/
	function patchMediaretentionpolicie(policyId, body){
		var apipath = '/api/v1/configuration/mediaretentionpolicies/{policyId}';
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
	self.patchMediaretentionpolicie = patchMediaretentionpolicie;
	/**
     * @summary Get context organization.
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
	 * @memberOf ConfigurationApi#
	* @param {} body - Organization
	 * @example
	 * Body Example:
	 * {
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
   "deletable": true
}
	*/
	function putOrganization(body){
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
	self.putOrganization = putOrganization;
	/**
     * @summary Create organization.
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
	function postOrganizations(body){
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
	self.postOrganizations = postOrganizations;
	/**
     * @summary Get organization.
	 * @memberOf ConfigurationApi#
	* @param {string} orgId - Organization ID
	*/
	function getOrganization(orgId){
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
	self.getOrganization = getOrganization;
	/**
     * @summary Update organization.
	 * @memberOf ConfigurationApi#
	* @param {string} orgId - Organization ID
	* @param {} body - Organization
	 * @example
	 * Body Example:
	 * {
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
   "deletable": true
}
	*/
	function putOrganization(orgId, body){
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
	self.putOrganization = putOrganization;
	/**
     * @summary Delete an organization.
	 * @memberOf ConfigurationApi#
	* @param {string} orgId - Organization ID
	*/
	function deleteOrganization(orgId){
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
	self.deleteOrganization = deleteOrganization;
	/**
     * @summary Get encryption key list
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
	 * @memberOf ConfigurationApi#
	*/
	function postRecordingkeys(){
		var apipath = '/api/v1/configuration/recordingkeys';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postRecordingkeys = postRecordingkeys;
	/**
     * @summary Get key rotation schedule
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
	 * @memberOf ConfigurationApi#
	* @param {} body - KeyRotationSchedule
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "period": ""
}
	*/
	function putRecordingkeysRotationschedule(body){
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
	self.putRecordingkeysRotationschedule = putRecordingkeysRotationschedule;
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
	 * @memberOf ConfigurationApi#
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
      "assignEvaluations": [],
      "assignMeteredEvaluations": [],
      "assignCalibrations": [],
      "retentionDuration": {}
   },
   "policyErrors": {
      "policyErrorMessages": []
   }
}
	*/
	function postRetentionpolicies(body){
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
	self.postRetentionpolicies = postRetentionpolicies;
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
	 * @memberOf ConfigurationApi#
	* @param {string} policyId - Policy ID
	*/
	function getRetentionpolicie(policyId){
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
	self.getRetentionpolicie = getRetentionpolicie;
	/**
     * @summary Update policy
	 * @memberOf ConfigurationApi#
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
      "assignEvaluations": [],
      "assignMeteredEvaluations": [],
      "assignCalibrations": [],
      "retentionDuration": {}
   },
   "policyErrors": {
      "policyErrorMessages": []
   }
}
	*/
	function putRetentionpolicie(policyId, body){
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
	self.putRetentionpolicie = putRetentionpolicie;
	/**
     * @summary Delete policy
	 * @memberOf ConfigurationApi#
	* @param {string} policyId - Policy ID
	*/
	function deleteRetentionpolicie(policyId){
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
	self.deleteRetentionpolicie = deleteRetentionpolicie;
	/**
     * @summary Patch a retention policy
	 * @memberOf ConfigurationApi#
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
      "assignEvaluations": [],
      "assignMeteredEvaluations": [],
      "assignCalibrations": [],
      "retentionDuration": {}
   },
   "policyErrors": {
      "policyErrorMessages": []
   }
}
	*/
	function patchRetentionpolicie(policyId, body){
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
	self.patchRetentionpolicie = patchRetentionpolicie;
	/**
     * @summary Lists available schema categories
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
	 * @memberOf ConfigurationApi#
	* @param {string} schemaCategory - Schema category
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getSchemasEdgesVnext(schemaCategory, pageSize, pageNumber){
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
	self.getSchemasEdgesVnext = getSchemasEdgesVnext;
	/**
     * @summary List schemas of a specific category
	 * @memberOf ConfigurationApi#
	* @param {string} schemaCategory - Schema category
	* @param {string} schemaType - Schema type
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getSchemasEdgesVnext(schemaCategory, schemaType, pageSize, pageNumber){
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
	self.getSchemasEdgesVnext = getSchemasEdgesVnext;
	/**
     * @summary Get a json schema
	 * @memberOf ConfigurationApi#
	* @param {string} schemaCategory - Schema category
	* @param {string} schemaType - Schema type
	* @param {string} schemaId - Schema ID
	*/
	function getSchemasEdgesVnext(schemaCategory, schemaType, schemaId){
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
	self.getSchemasEdgesVnext = getSchemasEdgesVnext;
	/**
     * @summary Get metadata for a schema
	 * @memberOf ConfigurationApi#
	* @param {string} schemaCategory - Schema category
	* @param {string} schemaType - Schema type
	* @param {string} schemaId - Schema ID
	* @param {string} extension - extension
	* @param {string} metadataId - Metadata ID
	* @param {string} type - Type
	*/
	function getSchemasEdgesVnext(schemaCategory, schemaType, schemaId, extension, metadataId, type){
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
	self.getSchemasEdgesVnext = getSchemasEdgesVnext;
	/**
     * @summary Get the list of sites.
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
	 * @memberOf ConfigurationApi#
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
	function postSites(body){
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
	self.postSites = postSites;
	/**
     * @summary Get endpoint.
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
	 * @memberOf ConfigurationApi#
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
	function putSite(siteId, body){
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
	self.putSite = putSite;
	/**
     * @summary Delete an ednpoint
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
	 * @memberOf ConfigurationApi#
	* @param {string} siteId - Site ID
	* @param {} body - 
	*/
	function putSiteNumberplans(siteId, body){
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
	self.putSiteNumberplans = putSiteNumberplans;
	/**
     * @summary Get a list of Classifications for this Site
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
	 * @memberOf ConfigurationApi#
	* @param {string} siteId - Site ID
	* @param {string} numberPlanId - Number Plan ID
	*/
	function getSiteNumberplan(siteId, numberPlanId){
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
	self.getSiteNumberplan = getSiteNumberplan;
	/**
     * @summary Triggers the rebalance operation.
	 * @memberOf ConfigurationApi#
	* @param {string} siteId - Site ID
	*/
	function postSiteRebalance(siteId){
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
	self.postSiteRebalance = postSiteRebalance;

    return self;
};

/**
* @class
* @example
* var api = new ContentManagementApi(pureCloudSession);
*/
var ContentManagementApi = function (pureCloudSession) {
	var self = this;
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
   "attributeFilters": []
}
	*/
	function postContentmanagementAuditquery(body){
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
	self.postContentmanagementAuditquery = postContentmanagementAuditquery;
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
	function getContentmanagementDocuments(workspaceId, name, expand, pageSize, pageNumber, sortBy, sortOrder){
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
	self.getContentmanagementDocuments = getContentmanagementDocuments;
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
	function postContentmanagementDocuments(body, copySource, moveSource, override){
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
	self.postContentmanagementDocuments = postContentmanagementDocuments;
	/**
     * @summary Get a document.
	 * @memberOf ContentManagementApi#
	* @param {string} documentId - Document ID
	* @param {string} expand - Expand some document fields
	lockInfo,
	acl,
	workspace,
	*/
	function getContentmanagementDocument(documentId, expand){
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
	self.getContentmanagementDocument = getContentmanagementDocument;
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
	function postContentmanagementDocument(documentId, body, expand, override){
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
	self.postContentmanagementDocument = postContentmanagementDocument;
	/**
     * @summary Delete a document.
	 * @memberOf ContentManagementApi#
	* @param {string} documentId - Document ID
	* @param {boolean} override - Override any lock on the document
	*/
	function deleteContentmanagementDocument(documentId, override){
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
	self.deleteContentmanagementDocument = deleteContentmanagementDocument;
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
	function getContentmanagementDocumentAudits(documentId, pageSize, pageNumber, transactionFilter, level, sortBy, sortOrder){
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
	self.getContentmanagementDocumentAudits = getContentmanagementDocumentAudits;
	/**
     * @summary Download a document.
	 * @memberOf ContentManagementApi#
	* @param {string} documentId - Document ID
	* @param {string} disposition - Request how the content will be downloaded: attached as a file or inline. Default is attachment.
	attachment,
	inline,
	* @param {string} contentType - The requested format for the specified document. If supported, the document will be returned in that format. Example contentType=audio/wav
	*/
	function getContentmanagementDocumentContent(documentId, disposition, contentType){
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


		if(contentType !== undefined && contentType !== null){
			queryParameters.contentType = contentType;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContentmanagementDocumentContent = getContentmanagementDocumentContent;
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
	function postContentmanagementDocumentContent(documentId, body, override){
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
	self.postContentmanagementDocumentContent = postContentmanagementDocumentContent;
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
	function getContentmanagementQuery(pageSize, pageNumber, sortBy, sortOrder, queryPhrase, expand){
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
	self.getContentmanagementQuery = getContentmanagementQuery;
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
   "attributeFilters": []
}
	*/
	function postContentmanagementQuery(body, expand){
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
	self.postContentmanagementQuery = postContentmanagementQuery;
	/**
     * @summary Get a List of Security Profiles
	 * @memberOf ContentManagementApi#
	*/
	function getContentmanagementSecurityprofiles(){
		var apipath = '/api/v1/contentmanagement/securityprofiles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContentmanagementSecurityprofiles = getContentmanagementSecurityprofiles;
	/**
     * @summary Get a Security Profile
	 * @memberOf ContentManagementApi#
	* @param {string} securityProfileId - Security Profile Id
	*/
	function getContentmanagementSecurityprofile(securityProfileId){
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
	self.getContentmanagementSecurityprofile = getContentmanagementSecurityprofile;
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
	function getContentmanagementShared(sharedId, redirect, disposition, contentType, expand){
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


		if(contentType !== undefined && contentType !== null){
			queryParameters.contentType = contentType;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContentmanagementShared = getContentmanagementShared;
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
	function getContentmanagementShares(entityId, expand, pageSize, pageNumber){
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
	self.getContentmanagementShares = getContentmanagementShares;
	/**
     * @summary Creates a new share or updates an existing share if the entity has already been shared
	 * @memberOf ContentManagementApi#
	* @param {} body - CreateShareRequest - entity id and type and a single member or list of members are required
	 * @example
	 * Body Example:
	 * {
   "sharedEntityType": "",
   "sharedEntity": {
      "type": "",
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "memberType": "",
   "member": {
      "type": "",
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "members": []
}
	*/
	function postContentmanagementShares(body){
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
	self.postContentmanagementShares = postContentmanagementShares;
	/**
     * @summary Retrieve details about an existing share.
	 * @memberOf ContentManagementApi#
	* @param {string} shareId - Share ID
	* @param {string} expand - Expand share fields
	member,
	*/
	function getContentmanagementShare(shareId, expand){
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
	self.getContentmanagementShare = getContentmanagementShare;
	/**
     * @summary Deletes an existing share.
	 * @description This revokes sharing rights specified in the share record
	 * @memberOf ContentManagementApi#
	* @param {string} shareId - Share ID
	*/
	function deleteContentmanagementShare(shareId){
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
	self.deleteContentmanagementShare = deleteContentmanagementShare;
	/**
     * @summary Get a list of statuses for pending operations
	 * @memberOf ContentManagementApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getContentmanagementStatus(pageSize, pageNumber){
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
	self.getContentmanagementStatus = getContentmanagementStatus;
	/**
     * @summary Get a status.
	 * @memberOf ContentManagementApi#
	* @param {string} statusId - Status ID
	*/
	function getContentmanagementStatu(statusId){
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
	self.getContentmanagementStatu = getContentmanagementStatu;
	/**
     * @summary Cancel the command for this status
	 * @memberOf ContentManagementApi#
	* @param {string} statusId - Status ID
	*/
	function deleteContentmanagementStatu(statusId){
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
	self.deleteContentmanagementStatu = deleteContentmanagementStatu;
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
	function getContentmanagementWorkspaces(pageSize, pageNumber, access, expand){
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
	self.getContentmanagementWorkspaces = getContentmanagementWorkspaces;
	/**
     * @summary Create a group workspace
	 * @memberOf ContentManagementApi#
	* @param {} body - Workspace
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "bucket": ""
}
	*/
	function postContentmanagementWorkspaces(body){
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
	self.postContentmanagementWorkspaces = postContentmanagementWorkspaces;
	/**
     * @summary Get a workspace.
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} expand - Expand some workspace fields
	summary,
	acl,
	*/
	function getContentmanagementWorkspace(workspaceId, expand){
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
	self.getContentmanagementWorkspace = getContentmanagementWorkspace;
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
      "totalDocumentCount": 0
   },
   "acl": []
}
	*/
	function putContentmanagementWorkspace(workspaceId, body){
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
	self.putContentmanagementWorkspace = putContentmanagementWorkspace;
	/**
     * @summary Delete a workspace
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} moveChildrenToWorkspaceId - New location for objects in deleted workspace.
	*/
	function deleteContentmanagementWorkspace(workspaceId, moveChildrenToWorkspaceId){
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
	self.deleteContentmanagementWorkspace = deleteContentmanagementWorkspace;
	/**
     * @summary Get a list workspace members
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} expand - Expand workspace member fields
	member,
	*/
	function getContentmanagementWorkspaceMembers(workspaceId, pageSize, pageNumber, expand){
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
	self.getContentmanagementWorkspaceMembers = getContentmanagementWorkspaceMembers;
	/**
     * @summary Get a workspace member
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} memberId - Member ID
	* @param {string} expand - Expand workspace member fields
	member,
	*/
	function getContentmanagementWorkspaceMember(workspaceId, memberId, expand){
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
	self.getContentmanagementWorkspaceMember = getContentmanagementWorkspaceMember;
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
   },
   "group": {
      "name": "",
      "description": "",
      "memberCount": 0,
      "groupType": "",
      "groupImages": {},
      "groupState": ""
   },
   "securityProfile": {
      "name": "",
      "permissions": []
   }
}
	*/
	function putContentmanagementWorkspaceMember(workspaceId, memberId, body){
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
	self.putContentmanagementWorkspaceMember = putContentmanagementWorkspaceMember;
	/**
     * @summary Delete a member from a workspace
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} memberId - Member ID
	*/
	function deleteContentmanagementWorkspaceMember(workspaceId, memberId){
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
	self.deleteContentmanagementWorkspaceMember = deleteContentmanagementWorkspaceMember;
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
	function getContentmanagementWorkspaceTagvalues(workspaceId, value, pageSize, pageNumber, expand){
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
	self.getContentmanagementWorkspaceTagvalues = getContentmanagementWorkspaceTagvalues;
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
	function postContentmanagementWorkspaceTagvalues(workspaceId, body){
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
	self.postContentmanagementWorkspaceTagvalues = postContentmanagementWorkspaceTagvalues;
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
	function postContentmanagementWorkspaceTagvaluesQuery(workspaceId, body, expand){
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
	self.postContentmanagementWorkspaceTagvaluesQuery = postContentmanagementWorkspaceTagvaluesQuery;
	/**
     * @summary Get a workspace tag
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} tagId - Tag ID
	* @param {string} expand - Expand some document fields
	acl,
	*/
	function getContentmanagementWorkspaceTagvalue(workspaceId, tagId, expand){
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
	self.getContentmanagementWorkspaceTagvalue = getContentmanagementWorkspaceTagvalue;
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
	function putContentmanagementWorkspaceTagvalue(workspaceId, tagId, body){
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
	self.putContentmanagementWorkspaceTagvalue = putContentmanagementWorkspaceTagvalue;
	/**
     * @summary Delete workspace tag
	 * @description Delete a tag from a workspace. Will remove this tag from all documents.
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} tagId - Tag ID
	*/
	function deleteContentmanagementWorkspaceTagvalue(workspaceId, tagId){
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
	self.deleteContentmanagementWorkspaceTagvalue = deleteContentmanagementWorkspaceTagvalue;

    return self;
};

/**
* @class
* @example
* var api = new ConversationsApi(pureCloudSession);
*/
var ConversationsApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Get conversations
	 * @memberOf ConversationsApi#
	* @param {string} communicationType - Call or Chat communication filtering
	*/
	function getConversations(communicationType){
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
	self.getConversations = getConversations;
	/**
     * @summary Create conversation
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
	function postConversations(call, callFrom, callQueueId, callUserId, priority, languageId, skillIds, body){
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
	self.postConversations = postConversations;
	/**
     * @summary Create Fax Conversation
	 * @memberOf ConversationsApi#
	* @param {} body - Fax
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "addresses": [],
   "originalFilename": "",
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
      "acl": []
   },
   "coverSheet": {
      "notes": "",
      "locale": ""
   }
}
	*/
	function postFax(body){
		var apipath = '/api/v1/conversations/fax';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postFax = postFax;
	/**
     * @summary Get the maximum number of participants that this user can have on a conference
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
	 * @memberOf ConversationsApi#
	* @param {} body - Query parameters
	 * @example
	 * Body Example:
	 * {
   "pageSize": 0,
   "maximum": 0,
   "filters": [],
   "facets": []
}
	*/
	function postQuery(body){
		var apipath = '/api/v1/conversations/query';
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
	self.postQuery = postQuery;
	/**
     * @summary Query historical conversations with a date/time anchor
	 * @memberOf ConversationsApi#
	* @param {string} anchor - A point in time within the interval for the query that bounds the query. In the form of YYYYMMDDHHmmssSSSZX where YYYY is the 4-digit year, MM is the 2-digit month, DD is the 2-digit day-of-month, HH is the 2-digit hour-of-day (00-23), mm is the 2-digit minute, ss is the 2-digit second, SSS is the 3-digit millisecond, Z is the UTC offset expressed as 'Z', '+nnnn', '-nnnn', '+nn:nn', '-nn:nn', and X is either 'A' (for the anchor point being at the earliest point in the query) or 'D' (for the anchor point being the latest point in the query
	* @param {} body - Query parameters
	 * @example
	 * Body Example:
	 * {
   "pageSize": 0,
   "maximum": 0,
   "filters": [],
   "facets": []
}
	*/
	function postQuery(anchor, body){
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

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postQuery = postQuery;
	/**
     * @summary Get conversation
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	*/
	function get(conversationId){
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
	self.get = get;
	/**
     * @summary Update conversation
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
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
	function put(conversationId, body){
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
	self.put = put;
	/**
     * @summary Get conversation messages
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	*/
	function getMessages(conversationId){
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
	self.getMessages = getMessages;
	/**
     * @summary Send an email reply
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {} body - Reply
	 * @example
	 * Body Example:
	 * {
   "htmlBody": "",
   "textBody": "",
   "id": "",
   "to": [],
   "cc": [],
   "bcc": [],
   "from": {
      "email": "",
      "name": ""
   },
   "subject": "",
   "attachments": [],
   "time": ""
}
	*/
	function postMessages(conversationId, body){
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
	self.postMessages = postMessages;
	/**
     * @summary Get conversation draft reply
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	*/
	function getMessagesDraft(conversationId){
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
	self.getMessagesDraft = getMessagesDraft;
	/**
     * @summary Update conversation draft reply
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {} body - Draft
	 * @example
	 * Body Example:
	 * {
   "htmlBody": "",
   "textBody": "",
   "id": "",
   "to": [],
   "cc": [],
   "bcc": [],
   "from": {
      "email": "",
      "name": ""
   },
   "subject": "",
   "attachments": [],
   "time": ""
}
	*/
	function putMessagesDraft(conversationId, body){
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
	self.putMessagesDraft = putMessagesDraft;
	/**
     * @summary Delete attachment from draft
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} attachmentId - attachment ID
	*/
	function deleteMessagesDraftAttachment(conversationId, attachmentId){
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
	self.deleteMessagesDraftAttachment = deleteMessagesDraftAttachment;
	/**
     * @summary Get conversation message
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} id - message ID
	*/
	function getMessages(conversationId, id){
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
	self.getMessages = getMessages;
	/**
     * @summary Add participants to a conversation
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
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
	function postParticipants(conversationId, body){
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
	self.postParticipants = postParticipants;
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
	function putParticipant(conversationId, participantId, body){
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
	self.putParticipant = putParticipant;
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
	function putParticipantAttributes(conversationId, participantId, body){
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
	self.putParticipantAttributes = putParticipantAttributes;
	/**
     * @summary Initiate and update consult transfer
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
	function postParticipantConsult(conversationId, participantId, body){
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
	self.postParticipantConsult = postParticipantConsult;
	/**
     * @summary Change who can speak
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
	function putParticipantConsult(conversationId, participantId, body){
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
	self.putParticipantConsult = putParticipantConsult;
	/**
     * @summary Cancel the transfer
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - The object of the transfer
	*/
	function deleteParticipantConsult(conversationId, participantId){
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
	self.deleteParticipantConsult = deleteParticipantConsult;
	/**
     * @summary Listen in on the conversation from the point of view of a given participant.
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	*/
	function postParticipantMonitor(conversationId, participantId){
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
	self.postParticipantMonitor = postParticipantMonitor;
	/**
     * @summary Replace this participant with the specified user and/or address
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	* @param {string} userId - The user that will replace this participant.  If address is not supplied then the user's Work address will be used.  This parameter is required when replacing a participant that has an active chat.
	* @param {string} address - The address that will be used to contact the new participant
	* @param {string} username - The username of the person that will replace this participant.  This field is only used if the userId is blank.
	* @param {string} queueId - The id of the queue that will replace this participant.
	* @param {boolean} voicemail - Indicates this participant will be replaced by the voicemail inbox of the participant.
	*/
	function postParticipantReplace(conversationId, participantId, userId, address, username, queueId, voicemail){
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
	self.postParticipantReplace = postParticipantReplace;
	/**
     * @summary Get the wrap-up for this conversation participant. 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	* @param {boolean} provisional - Indicates if the wrap-up code is provisional.
	*/
	function getParticipantWrapup(conversationId, participantId, provisional){
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
	self.getParticipantWrapup = getParticipantWrapup;
	/**
     * @summary Get list of wrapup codes for this conversation participant
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	*/
	function getParticipantWrapupcodes(conversationId, participantId){
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
	self.getParticipantWrapupcodes = getParticipantWrapupcodes;
	/**
     * @summary Get possible tags for Conversation
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	*/
	function getTags(conversationId){
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
	self.getTags = getTags;
	/**
     * @summary Get possible wrap-up codes for Conversation
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	*/
	function getWrapupcodes(conversationId){
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
	self.getWrapupcodes = getWrapupcodes;

    return self;
};

/**
* @class
* @example
* var api = new DownloadsApi(pureCloudSession);
*/
var DownloadsApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary OAuth Callback used during code authorization grant flow.
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
	function get(downloadId, contentDisposition){
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
	self.get = get;

    return self;
};

/**
* @class
* @example
* var api = new ExternalContactsApi(pureCloudSession);
*/
var ExternalContactsApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Search for External Contacts
	 * @memberOf ExternalContactsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} q - User supplied search keywords (no special syntax is currently supported)
	* @param {string} sortOrder - Sort order
	*/
	function getExternalcontactsContacts(pageSize, pageNumber, q, sortOrder){
		var apipath = '/api/v1/externalcontacts/contacts';
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


		if(q !== undefined && q !== null){
			queryParameters.q = q;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getExternalcontactsContacts = getExternalcontactsContacts;
	/**
     * @summary Create an ExternalContact
	 * @memberOf ExternalContactsApi#
	* @param {} body - ExternalContact
	 * @example
	 * Body Example:
	 * {
   "firstName": "",
   "middleName": "",
   "lastName": "",
   "salutation": "",
   "title": "",
   "workPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "cellPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "homePhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "otherPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "workEmail": "",
   "personalEmail": "",
   "otherEmail": "",
   "address": {
      "name": "",
      "street": "",
      "city": "",
      "countryName": "",
      "stateName": "",
      "postalCode": ""
   },
   "modifyDate": "",
   "createDate": "",
   "externalOrganization": {
      "name": "",
      "companyType": "",
      "industry": "",
      "primaryContactId": "",
      "address": {},
      "phoneNumber": {},
      "faxNumber": {},
      "employeeCount": 0,
      "revenue": 0,
      "tags": [],
      "websites": [],
      "tickers": [],
      "modifyDate": "",
      "createDate": ""
   }
}
	*/
	function postExternalcontactsContacts(body){
		var apipath = '/api/v1/externalcontacts/contacts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postExternalcontactsContacts = postExternalcontactsContacts;
	/**
     * @summary Fetch a ExternalContact
	 * @memberOf ExternalContactsApi#
	* @param {string} contactId - ExternalContact ID
	*/
	function getExternalcontactsContact(contactId){
		var apipath = '/api/v1/externalcontacts/contacts/{contactId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getExternalcontactsContact = getExternalcontactsContact;
	/**
     * @summary Update a externalContact
	 * @memberOf ExternalContactsApi#
	* @param {string} contactId - ExternalContact ID
	* @param {} body - ExternalContact
	 * @example
	 * Body Example:
	 * {
   "firstName": "",
   "middleName": "",
   "lastName": "",
   "salutation": "",
   "title": "",
   "workPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "cellPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "homePhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "otherPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "workEmail": "",
   "personalEmail": "",
   "otherEmail": "",
   "address": {
      "name": "",
      "street": "",
      "city": "",
      "countryName": "",
      "stateName": "",
      "postalCode": ""
   },
   "modifyDate": "",
   "createDate": "",
   "externalOrganization": {
      "name": "",
      "companyType": "",
      "industry": "",
      "primaryContactId": "",
      "address": {},
      "phoneNumber": {},
      "faxNumber": {},
      "employeeCount": 0,
      "revenue": 0,
      "tags": [],
      "websites": [],
      "tickers": [],
      "modifyDate": "",
      "createDate": ""
   }
}
	*/
	function putExternalcontactsContact(contactId, body){
		var apipath = '/api/v1/externalcontacts/contacts/{contactId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putExternalcontactsContact = putExternalcontactsContact;
	/**
     * @summary Delete a contact
	 * @memberOf ExternalContactsApi#
	* @param {string} contactId - ExternalContact ID
	*/
	function deleteExternalcontactsContact(contactId){
		var apipath = '/api/v1/externalcontacts/contacts/{contactId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteExternalcontactsContact = deleteExternalcontactsContact;
	/**
     * @summary List Notes for an ExternalContact
	 * @memberOf ExternalContactsApi#
	* @param {string} contactId - ExternalContact Id
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortOrder - Sort order
	*/
	function getExternalcontactsContactNotes(contactId, pageSize, pageNumber, sortOrder){
		var apipath = '/api/v1/externalcontacts/contacts/{contactId}/notes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getExternalcontactsContactNotes = getExternalcontactsContactNotes;
	/**
     * @summary Create a Note for an ExternalContact
	 * @memberOf ExternalContactsApi#
	* @param {string} contactId - ExternalContact Id
	* @param {} body - ExternalContact
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "noteText": "",
   "modifyDate": "",
   "createDate": ""
}
	*/
	function postExternalcontactsContactNotes(contactId, body){
		var apipath = '/api/v1/externalcontacts/contacts/{contactId}/notes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postExternalcontactsContactNotes = postExternalcontactsContactNotes;
	/**
     * @summary Fetch a note for a contact
	 * @memberOf ExternalContactsApi#
	* @param {string} contactId - ExternalContact Id
	* @param {string} noteId - Note Id
	*/
	function getExternalcontactsContactNote(contactId, noteId){
		var apipath = '/api/v1/externalcontacts/contacts/{contactId}/notes/{noteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }

        apipath = apipath.replace('{noteId}', noteId);

        if(noteId === undefined && noteId !== null){
			throw 'Missing required  parameter: noteId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getExternalcontactsContactNote = getExternalcontactsContactNote;
	/**
     * @summary Update a note for a contact
	 * @memberOf ExternalContactsApi#
	* @param {string} contactId - ExternalContact Id
	* @param {string} noteId - Note Id
	* @param {} body - Note
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "noteText": "",
   "modifyDate": "",
   "createDate": ""
}
	*/
	function putExternalcontactsContactNote(contactId, noteId, body){
		var apipath = '/api/v1/externalcontacts/contacts/{contactId}/notes/{noteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }

        apipath = apipath.replace('{noteId}', noteId);

        if(noteId === undefined && noteId !== null){
			throw 'Missing required  parameter: noteId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putExternalcontactsContactNote = putExternalcontactsContactNote;
	/**
     * @summary Delete a note for a contact
	 * @memberOf ExternalContactsApi#
	* @param {string} contactId - ExternalContact Id
	* @param {string} noteId - Note Id
	*/
	function deleteExternalcontactsContactNote(contactId, noteId){
		var apipath = '/api/v1/externalcontacts/contacts/{contactId}/notes/{noteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }

        apipath = apipath.replace('{noteId}', noteId);

        if(noteId === undefined && noteId !== null){
			throw 'Missing required  parameter: noteId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteExternalcontactsContactNote = deleteExternalcontactsContactNote;
	/**
     * @summary Search for External Organizations
	 * @memberOf ExternalContactsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} q - Search query
	* @param {string} sortOrder - Sort order
	*/
	function getExternalcontactsOrganizations(pageSize, pageNumber, q, sortOrder){
		var apipath = '/api/v1/externalcontacts/organizations';
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


		if(q !== undefined && q !== null){
			queryParameters.q = q;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getExternalcontactsOrganizations = getExternalcontactsOrganizations;
	/**
     * @summary Create an External Organization
	 * @memberOf ExternalContactsApi#
	* @param {} body - ExternalOrganization
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "companyType": "",
   "industry": "",
   "primaryContactId": "",
   "address": {
      "name": "",
      "street": "",
      "city": "",
      "countryName": "",
      "stateName": "",
      "postalCode": ""
   },
   "phoneNumber": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "faxNumber": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "employeeCount": 0,
   "revenue": 0,
   "tags": [],
   "websites": [],
   "tickers": [],
   "modifyDate": "",
   "createDate": ""
}
	*/
	function postExternalcontactsOrganizations(body){
		var apipath = '/api/v1/externalcontacts/organizations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postExternalcontactsOrganizations = postExternalcontactsOrganizations;
	/**
     * @summary Fetch an External Organization
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization ID
	*/
	function getExternalcontactsOrganization(externalOrganizationId){
		var apipath = '/api/v1/externalcontacts/organizations/{externalOrganizationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{externalOrganizationId}', externalOrganizationId);

        if(externalOrganizationId === undefined && externalOrganizationId !== null){
			throw 'Missing required  parameter: externalOrganizationId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getExternalcontactsOrganization = getExternalcontactsOrganization;
	/**
     * @summary Update an External Organization
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization ID
	* @param {} body - ExternalOrganization
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "companyType": "",
   "industry": "",
   "primaryContactId": "",
   "address": {
      "name": "",
      "street": "",
      "city": "",
      "countryName": "",
      "stateName": "",
      "postalCode": ""
   },
   "phoneNumber": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "faxNumber": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "employeeCount": 0,
   "revenue": 0,
   "tags": [],
   "websites": [],
   "tickers": [],
   "modifyDate": "",
   "createDate": ""
}
	*/
	function putExternalcontactsOrganization(externalOrganizationId, body){
		var apipath = '/api/v1/externalcontacts/organizations/{externalOrganizationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{externalOrganizationId}', externalOrganizationId);

        if(externalOrganizationId === undefined && externalOrganizationId !== null){
			throw 'Missing required  parameter: externalOrganizationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putExternalcontactsOrganization = putExternalcontactsOrganization;
	/**
     * @summary Delete an External Organization
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization ID
	*/
	function deleteExternalcontactsOrganization(externalOrganizationId){
		var apipath = '/api/v1/externalcontacts/organizations/{externalOrganizationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{externalOrganizationId}', externalOrganizationId);

        if(externalOrganizationId === undefined && externalOrganizationId !== null){
			throw 'Missing required  parameter: externalOrganizationId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteExternalcontactsOrganization = deleteExternalcontactsOrganization;
	/**
     * @summary Search for External Contacts
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} q - User supplied search keywords (no special syntax is currently supported)
	* @param {string} sortOrder - Sort order
	*/
	function getExternalcontactsOrganizationContacts(externalOrganizationId, pageSize, pageNumber, q, sortOrder){
		var apipath = '/api/v1/externalcontacts/organizations/{externalOrganizationId}/contacts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{externalOrganizationId}', externalOrganizationId);

        if(externalOrganizationId === undefined && externalOrganizationId !== null){
			throw 'Missing required  parameter: externalOrganizationId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(q !== undefined && q !== null){
			queryParameters.q = q;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getExternalcontactsOrganizationContacts = getExternalcontactsOrganizationContacts;
	/**
     * @summary List Notes for an External Organization
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization Id
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortOrder - Sort order
	*/
	function getExternalcontactsOrganizationNotes(externalOrganizationId, pageSize, pageNumber, sortOrder){
		var apipath = '/api/v1/externalcontacts/organizations/{externalOrganizationId}/notes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{externalOrganizationId}', externalOrganizationId);

        if(externalOrganizationId === undefined && externalOrganizationId !== null){
			throw 'Missing required  parameter: externalOrganizationId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getExternalcontactsOrganizationNotes = getExternalcontactsOrganizationNotes;
	/**
     * @summary Create a Note for an External Organization
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization Id
	* @param {} body - ExternalContact
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "noteText": "",
   "modifyDate": "",
   "createDate": ""
}
	*/
	function postExternalcontactsOrganizationNotes(externalOrganizationId, body){
		var apipath = '/api/v1/externalcontacts/organizations/{externalOrganizationId}/notes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{externalOrganizationId}', externalOrganizationId);

        if(externalOrganizationId === undefined && externalOrganizationId !== null){
			throw 'Missing required  parameter: externalOrganizationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postExternalcontactsOrganizationNotes = postExternalcontactsOrganizationNotes;
	/**
     * @summary Fetch a note
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization Id
	* @param {string} noteId - Note Id
	*/
	function getExternalcontactsOrganizationNote(externalOrganizationId, noteId){
		var apipath = '/api/v1/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{externalOrganizationId}', externalOrganizationId);

        if(externalOrganizationId === undefined && externalOrganizationId !== null){
			throw 'Missing required  parameter: externalOrganizationId';
        }

        apipath = apipath.replace('{noteId}', noteId);

        if(noteId === undefined && noteId !== null){
			throw 'Missing required  parameter: noteId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getExternalcontactsOrganizationNote = getExternalcontactsOrganizationNote;
	/**
     * @summary Update a note
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization Id
	* @param {string} noteId - Note Id
	* @param {} body - Note
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "noteText": "",
   "modifyDate": "",
   "createDate": ""
}
	*/
	function putExternalcontactsOrganizationNote(externalOrganizationId, noteId, body){
		var apipath = '/api/v1/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{externalOrganizationId}', externalOrganizationId);

        if(externalOrganizationId === undefined && externalOrganizationId !== null){
			throw 'Missing required  parameter: externalOrganizationId';
        }

        apipath = apipath.replace('{noteId}', noteId);

        if(noteId === undefined && noteId !== null){
			throw 'Missing required  parameter: noteId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putExternalcontactsOrganizationNote = putExternalcontactsOrganizationNote;
	/**
     * @summary Delete a note
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization Id
	* @param {string} noteId - Note Id
	*/
	function deleteExternalcontactsOrganizationNote(externalOrganizationId, noteId){
		var apipath = '/api/v1/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{externalOrganizationId}', externalOrganizationId);

        if(externalOrganizationId === undefined && externalOrganizationId !== null){
			throw 'Missing required  parameter: externalOrganizationId';
        }

        apipath = apipath.replace('{noteId}', noteId);

        if(noteId === undefined && noteId !== null){
			throw 'Missing required  parameter: noteId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteExternalcontactsOrganizationNote = deleteExternalcontactsOrganizationNote;
	/**
     * @summary Fetch an External Organization
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortOrder - Sort order
	*/
	function getExternalcontactsOrganizationRelationships(externalOrganizationId, pageSize, pageNumber, sortOrder){
		var apipath = '/api/v1/externalcontacts/organizations/{externalOrganizationId}/relationships';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{externalOrganizationId}', externalOrganizationId);

        if(externalOrganizationId === undefined && externalOrganizationId !== null){
			throw 'Missing required  parameter: externalOrganizationId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getExternalcontactsOrganizationRelationships = getExternalcontactsOrganizationRelationships;
	/**
     * @summary Create a relationship
	 * @memberOf ExternalContactsApi#
	* @param {} body - Relationship
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "user": {
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
   },
   "externalOrganization": {
      "name": "",
      "companyType": "",
      "industry": "",
      "primaryContactId": "",
      "address": {},
      "phoneNumber": {},
      "faxNumber": {},
      "employeeCount": 0,
      "revenue": 0,
      "tags": [],
      "websites": [],
      "tickers": [],
      "modifyDate": "",
      "createDate": ""
   },
   "relationship": ""
}
	*/
	function postExternalcontactsRelationships(body){
		var apipath = '/api/v1/externalcontacts/relationships';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postExternalcontactsRelationships = postExternalcontactsRelationships;
	/**
     * @summary Fetch a relationship
	 * @memberOf ExternalContactsApi#
	* @param {string} relationshipId - Relationship Id
	*/
	function getExternalcontactsRelationship(relationshipId){
		var apipath = '/api/v1/externalcontacts/relationships/{relationshipId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{relationshipId}', relationshipId);

        if(relationshipId === undefined && relationshipId !== null){
			throw 'Missing required  parameter: relationshipId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getExternalcontactsRelationship = getExternalcontactsRelationship;
	/**
     * @summary Fetch a relationship
	 * @memberOf ExternalContactsApi#
	* @param {string} relationshipId - Relationship Id
	* @param {} body - Relationship
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "user": {
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
   },
   "externalOrganization": {
      "name": "",
      "companyType": "",
      "industry": "",
      "primaryContactId": "",
      "address": {},
      "phoneNumber": {},
      "faxNumber": {},
      "employeeCount": 0,
      "revenue": 0,
      "tags": [],
      "websites": [],
      "tickers": [],
      "modifyDate": "",
      "createDate": ""
   },
   "relationship": ""
}
	*/
	function putExternalcontactsRelationship(relationshipId, body){
		var apipath = '/api/v1/externalcontacts/relationships/{relationshipId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{relationshipId}', relationshipId);

        if(relationshipId === undefined && relationshipId !== null){
			throw 'Missing required  parameter: relationshipId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putExternalcontactsRelationship = putExternalcontactsRelationship;
	/**
     * @summary Delete a relationship
	 * @memberOf ExternalContactsApi#
	* @param {string} relationshipId - Relationship Id
	*/
	function deleteExternalcontactsRelationship(relationshipId){
		var apipath = '/api/v1/externalcontacts/relationships/{relationshipId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{relationshipId}', relationshipId);

        if(relationshipId === undefined && relationshipId !== null){
			throw 'Missing required  parameter: relationshipId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteExternalcontactsRelationship = deleteExternalcontactsRelationship;

    return self;
};

/**
* @class
* @example
* var api = new FaxApi(pureCloudSession);
*/
var FaxApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Get a list of fax documents.
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
	function putDocument(documentId, body){
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
	self.putDocument = putDocument;
	/**
     * @summary Delete a fax document.
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
* var api = new GeolocationApi(pureCloudSession);
*/
var GeolocationApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Get a organization's GeolocationSettings
	 * @memberOf GeolocationApi#
	*/
	function getGeolocationsSettings(){
		var apipath = '/api/v1/geolocations/settings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getGeolocationsSettings = getGeolocationsSettings;
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
	function patchGeolocationsSettings(body){
		var apipath = '/api/v1/geolocations/settings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchGeolocationsSettings = patchGeolocationsSettings;
	/**
     * @summary Get a user's Geolocation
	 * @memberOf GeolocationApi#
	* @param {string} userId - user Id
	* @param {string} clientId - client Id
	*/
	function getGeolocation(userId, clientId){
		var apipath = '/api/v1/users/{userId}/geolocations/{clientId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        apipath = apipath.replace('{clientId}', clientId);

        if(clientId === undefined && clientId !== null){
			throw 'Missing required  parameter: clientId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getGeolocation = getGeolocation;
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
	function patchGeolocation(userId, clientId, body){
		var apipath = '/api/v1/users/{userId}/geolocations/{clientId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        apipath = apipath.replace('{clientId}', clientId);

        if(clientId === undefined && clientId !== null){
			throw 'Missing required  parameter: clientId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchGeolocation = patchGeolocation;

    return self;
};

/**
* @class
* @example
* var api = new GreetingsApi(pureCloudSession);
*/
var GreetingsApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Gets an Organization's Greetings
	 * @memberOf GreetingsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getGreetings(pageSize, pageNumber){
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
	self.getGreetings = getGreetings;
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
	function postGreetings(body){
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
	self.postGreetings = postGreetings;
	/**
     * @summary Get an Organization's DefaultGreetingList
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
	function putDefaults(body){
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
	self.putDefaults = putDefaults;
	/**
     * @summary Get a Greeting with the given GreetingId
	 * @memberOf GreetingsApi#
	* @param {string} greetingId - Greeting ID
	*/
	function get(greetingId){
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
	self.get = get;
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
	function put(greetingId, body){
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
	self.put = put;
	/**
     * @summary Deletes a Greeting with the given GreetingId
	 * @memberOf GreetingsApi#
	* @param {string} greetingId - Greeting ID
	*/
	function performDelete(greetingId){
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
	self.performDelete = performDelete;
	/**
     * @summary Get media playback URI for this greeting
	 * @memberOf GreetingsApi#
	* @param {string} greetingId - Greeting ID
	* @param {string} formatId - The desired format (WAV, etc.)
	WAV,
	*/
	function getMedia(greetingId, formatId){
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
	self.getMedia = getMedia;
	/**
     * @summary Get a list of the User's Greetings
	 * @memberOf GreetingsApi#
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
	function postUserGreetings(userId, body){
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
	self.postUserGreetings = postUserGreetings;
	/**
     * @summary Grabs the list of Default Greetings given a User's ID
	 * @memberOf GreetingsApi#
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
	function putUserGreetingsDefaults(userId, body){
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
	self.putUserGreetingsDefaults = putUserGreetingsDefaults;

    return self;
};

/**
* @class
* @example
* var api = new GroupsApi(pureCloudSession);
*/
var GroupsApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Get a group list
	 * @memberOf GroupsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} name - Name
	*/
	function getGroups(pageSize, pageNumber, name){
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
	self.getGroups = getGroups;
	/**
     * @summary Get group
	 * @memberOf GroupsApi#
	* @param {string} groupId - Group ID
	*/
	function get(groupId){
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
	self.get = get;
	/**
     * @summary Get group members
	 * @memberOf GroupsApi#
	* @param {string} groupId - Group ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getMembers(groupId, pageSize, pageNumber){
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
	self.getMembers = getMembers;

    return self;
};

/**
* @class
* @example
* var api = new LanguagesApi(pureCloudSession);
*/
var LanguagesApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Get the list of supported languages.
	 * @memberOf LanguagesApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getLanguages(pageSize, pageNumber){
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
	self.getLanguages = getLanguages;
	/**
     * @summary Get language
	 * @memberOf LanguagesApi#
	* @param {string} languageId - Language ID
	*/
	function get(languageId){
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
	self.get = get;

    return self;
};

/**
* @class
* @example
* var api = new LicensingApi(pureCloudSession);
*/
var LicensingApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Get Licenses required for a set of permissions.
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
	 * @memberOf LicensingApi#
	* @param {string} id - ID
	*/
	function getOrgassignments(id){
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
	self.getOrgassignments = getOrgassignments;
	/**
     * @summary Get Licenses required per permission.
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
     * @summary Get Licenses required per permission.
	 * @memberOf LicensingApi#
	* @param {array} id - ID
	* @param {} body - The permissions details
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "ids": []
}
	*/
	function postPermissions(id, body){
		var apipath = '/api/v1/licensing/permissions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(id !== undefined && id !== null){
			queryParameters.id = id;
		}

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postPermissions = postPermissions;
	/**
     * @summary Get user license assignments.
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
	 * @memberOf LicensingApi#
	* @param {string} id - ID
	*/
	function getUserassignments(id){
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
	self.getUserassignments = getUserassignments;

    return self;
};

/**
* @class
* @example
* var api = new LocationsApi(pureCloudSession);
*/
var LocationsApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Get the list of locations.
	 * @memberOf LocationsApi#
	* @param {string} state - Location state
	ACTIVE,
	DELETED,
	* @param {string} name - Location name
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getLocations(state, name, pageSize, pageNumber){
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
	self.getLocations = getLocations;
	/**
     * @summary Get Location by ID.
	 * @memberOf LocationsApi#
	* @param {string} locationId - Location ID
	*/
	function get(locationId){
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
	self.get = get;

    return self;
};

/**
* @class
* @example
* var api = new NotificationsApi(pureCloudSession);
*/
var NotificationsApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Get available notification topics.
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
	function postChannels(){
		var apipath = '/api/v1/notifications/channels';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postChannels = postChannels;
	/**
     * @summary The list of all subscriptions for this channel
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
	 * @memberOf NotificationsApi#
	* @param {string} channelId - Channel ID
	* @param {} body - Topic
	*/
	function postChannelSubscriptions(channelId, body){
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
	self.postChannelSubscriptions = postChannelSubscriptions;
	/**
     * @summary Replace the current list of subscriptions with a new list.
	 * @memberOf NotificationsApi#
	* @param {string} channelId - Channel ID
	* @param {} body - Topic
	*/
	function putChannelSubscriptions(channelId, body){
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
	self.putChannelSubscriptions = putChannelSubscriptions;
	/**
     * @summary Remove all subscriptions
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
* var api = new OAuthApi(pureCloudSession);
*/
var OAuthApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary The list of identity providers
	 * @memberOf OAuthApi#
	*/
	function getIdentityproviders(){
		var apipath = '/api/v1/identityproviders';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getIdentityproviders = getIdentityproviders;
	/**
     * @summary Get Okta Identity Provider
	 * @memberOf OAuthApi#
	*/
	function getIdentityprovidersOkta(){
		var apipath = '/api/v1/identityproviders/okta';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getIdentityprovidersOkta = getIdentityprovidersOkta;
	/**
     * @summary Update/Create Okta Identity Provider
	 * @memberOf OAuthApi#
	* @param {} body - Provider
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": ""
}
	*/
	function putIdentityprovidersOkta(body){
		var apipath = '/api/v1/identityproviders/okta';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putIdentityprovidersOkta = putIdentityprovidersOkta;
	/**
     * @summary Delete Okta Identity Provider
	 * @memberOf OAuthApi#
	*/
	function deleteIdentityprovidersOkta(){
		var apipath = '/api/v1/identityproviders/okta';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteIdentityprovidersOkta = deleteIdentityprovidersOkta;
	/**
     * @summary Get OneLogin Identity Provider
	 * @memberOf OAuthApi#
	*/
	function getIdentityprovidersOnelogin(){
		var apipath = '/api/v1/identityproviders/onelogin';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getIdentityprovidersOnelogin = getIdentityprovidersOnelogin;
	/**
     * @summary Update/Create OneLogin Identity Provider
	 * @memberOf OAuthApi#
	* @param {} body - Provider
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": ""
}
	*/
	function putIdentityprovidersOnelogin(body){
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
	self.putIdentityprovidersOnelogin = putIdentityprovidersOnelogin;
	/**
     * @summary Delete OneLogin Identity Provider
	 * @memberOf OAuthApi#
	*/
	function deleteIdentityprovidersOnelogin(){
		var apipath = '/api/v1/identityproviders/onelogin';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteIdentityprovidersOnelogin = deleteIdentityprovidersOnelogin;
	/**
     * @summary Get PureCloud Identity Provider
	 * @memberOf OAuthApi#
	*/
	function getIdentityprovidersPurecloud(){
		var apipath = '/api/v1/identityproviders/purecloud';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getIdentityprovidersPurecloud = getIdentityprovidersPurecloud;
	/**
     * @summary Update/Create PureCloud Identity Provider
	 * @memberOf OAuthApi#
	* @param {} body - Provider
	 * @example
	 * Body Example:
	 * {
   "name": ""
}
	*/
	function putIdentityprovidersPurecloud(body){
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
	self.putIdentityprovidersPurecloud = putIdentityprovidersPurecloud;
	/**
     * @summary Delete PureCloud Identity Provider
	 * @memberOf OAuthApi#
	*/
	function deleteIdentityprovidersPurecloud(){
		var apipath = '/api/v1/identityproviders/purecloud';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteIdentityprovidersPurecloud = deleteIdentityprovidersPurecloud;
	/**
     * @summary Get Salesforce Identity Provider
	 * @memberOf OAuthApi#
	*/
	function getIdentityprovidersSalesforce(){
		var apipath = '/api/v1/identityproviders/salesforce';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getIdentityprovidersSalesforce = getIdentityprovidersSalesforce;
	/**
     * @summary Update/Create Salesforce Identity Provider
	 * @memberOf OAuthApi#
	* @param {} body - Provider
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": ""
}
	*/
	function putIdentityprovidersSalesforce(body){
		var apipath = '/api/v1/identityproviders/salesforce';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putIdentityprovidersSalesforce = putIdentityprovidersSalesforce;
	/**
     * @summary Delete Salesforce Identity Provider
	 * @memberOf OAuthApi#
	*/
	function deleteIdentityprovidersSalesforce(){
		var apipath = '/api/v1/identityproviders/salesforce';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteIdentityprovidersSalesforce = deleteIdentityprovidersSalesforce;
	/**
     * @summary Get an identity provider
	 * @memberOf OAuthApi#
	*/
	function getIdentityprovider(){
		var apipath = '/api/v1/identityproviders/{providerId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getIdentityprovider = getIdentityprovider;
	/**
     * @summary Update an identity provider
	 * @memberOf OAuthApi#
	* @param {} body - Provider
	 * @example
	 * Body Example:
	 * {
   "name": ""
}
	*/
	function putIdentityprovider(body){
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
	self.putIdentityprovider = putIdentityprovider;
	/**
     * @summary Delete an identity provider
	 * @memberOf OAuthApi#
	*/
	function deleteIdentityprovider(){
		var apipath = '/api/v1/identityproviders/{providerId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteIdentityprovider = deleteIdentityprovider;
	/**
     * @summary The list of OAuth clients
	 * @memberOf OAuthApi#
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
If a client is to be used outside of the context of a user then the 'CLIENT-CREDENTIALS' grant may be used. In this case the client must be granted roles 
via the 'roleIds' field.
	 * @memberOf OAuthApi#
	* @param {} body - Client
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "accessTokenValiditySeconds": 0,
   "authorizedGrantTypes": [],
   "description": "",
   "registeredRedirectUri": [],
   "secret": "",
   "roleIds": []
}
	*/
	function postClients(body){
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
	self.postClients = postClients;
	/**
     * @summary Get OAuth Client
	 * @memberOf OAuthApi#
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
	 * @memberOf OAuthApi#
	* @param {string} clientId - Client ID
	* @param {} body - Client
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "accessTokenValiditySeconds": 0,
   "authorizedGrantTypes": [],
   "description": "",
   "registeredRedirectUri": [],
   "secret": "",
   "roleIds": []
}
	*/
	function putClient(clientId, body){
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
	self.putClient = putClient;
	/**
     * @summary Delete OAuth Client
	 * @memberOf OAuthApi#
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
	 * @memberOf OAuthApi#
	* @param {string} clientId - Client ID
	*/
	function postClientSecret(clientId){
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
	self.postClientSecret = postClientSecret;

    return self;
};

/**
* @class
* @example
* var api = new OrphanedRecordingsApi(pureCloudSession);
*/
var OrphanedRecordingsApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Gets all orphan recordings
	 * @memberOf OrphanedRecordingsApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	*/
	function getOrphanrecordings(pageSize, pageNumber, sortBy, expand){
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
	self.getOrphanrecordings = getOrphanrecordings;
	/**
     * @summary Gets a single orphan recording
	 * @memberOf OrphanedRecordingsApi#
	* @param {string} orphanId - Orphan ID
	*/
	function getOrphanrecording(orphanId){
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
	self.getOrphanrecording = getOrphanrecording;
	/**
     * @summary  deletes a single orphan recording
	 * @memberOf OrphanedRecordingsApi#
	* @param {string} orphanId - Orphan ID
	*/
	function deleteOrphanrecording(orphanId){
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
	self.deleteOrphanrecording = deleteOrphanrecording;

    return self;
};

/**
* @class
* @example
* var api = new OutboundApi(pureCloudSession);
*/
var OutboundApi = function (pureCloudSession) {
	var self = this;
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
	function postAudits(body, pageSize, pageNumber, sortBy, sortOrder, facetsOnly){
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
	self.postAudits = postAudits;
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
	 * @memberOf OutboundApi#
	* @param {} body - DialerCallableTimeSet
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "callableTimes": []
}
	*/
	function postCallabletimesets(body){
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
	self.postCallabletimesets = postCallabletimesets;
	/**
     * @summary Get callable time set
	 * @memberOf OutboundApi#
	* @param {string} callableTimeSetId - Callable Time Set ID
	*/
	function getCallabletimeset(callableTimeSetId){
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
	self.getCallabletimeset = getCallabletimeset;
	/**
     * @summary Update callable time set
	 * @memberOf OutboundApi#
	* @param {string} callableTimeSetId - Callable Time Set ID
	* @param {} body - DialerCallableTimeSet
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "callableTimes": []
}
	*/
	function putCallabletimeset(callableTimeSetId, body){
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
	self.putCallabletimeset = putCallabletimeset;
	/**
     * @summary Delete callable time set
	 * @memberOf OutboundApi#
	* @param {string} callableTimeSetId - Callable Time Set ID
	*/
	function deleteCallabletimeset(callableTimeSetId){
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
	self.deleteCallabletimeset = deleteCallabletimeset;
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
	 * @memberOf OutboundApi#
	* @param {} body - ResponseSet
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "responses": {}
}
	*/
	function postCallanalysisresponsesets(body){
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
	self.postCallanalysisresponsesets = postCallanalysisresponsesets;
	/**
     * @summary Get a dialer call analysis response set.
	 * @memberOf OutboundApi#
	* @param {string} callAnalysisSetId - Call Analysis Response Set ID
	*/
	function getCallanalysisresponseset(callAnalysisSetId){
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
	self.getCallanalysisresponseset = getCallanalysisresponseset;
	/**
     * @summary Update a dialer call analysis response set.
	 * @memberOf OutboundApi#
	* @param {string} callAnalysisSetId - Call Analysis Response Set ID
	* @param {} body - ResponseSet
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "responses": {}
}
	*/
	function putCallanalysisresponseset(callAnalysisSetId, body){
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
	self.putCallanalysisresponseset = putCallanalysisresponseset;
	/**
     * @summary Delete a dialer call analysis response set.
	 * @memberOf OutboundApi#
	* @param {string} callAnalysisSetId - Call Analysis Response Set ID
	*/
	function deleteCallanalysisresponseset(callAnalysisSetId){
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
	self.deleteCallanalysisresponseset = deleteCallanalysisresponseset;
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
	 * @memberOf OutboundApi#
	* @param {} body - Campaign
	 * @example
	 * Body Example:
	 * {
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
   "singleNumberPreview": true
}
	*/
	function postCampaigns(body){
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
	self.postCampaigns = postCampaigns;
	/**
     * @summary Get dialer campaign.
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
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	* @param {} body - Campaign
	 * @example
	 * Body Example:
	 * {
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
   "singleNumberPreview": true
}
	*/
	function putCampaign(campaignId, body){
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
	self.putCampaign = putCampaign;
	/**
     * @summary Delete a campaign.
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
	function putCampaignAgent(campaignId, userId, body){
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
	self.putCampaignAgent = putCampaignAgent;
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
	function postCampaignCallbackSchedule(campaignId, body){
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
	self.postCampaignCallbackSchedule = postCampaignCallbackSchedule;
	/**
     * @summary Get campaign diagnostics
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
	 * @memberOf OutboundApi#
	* @param {boolean} includeImportStatus - Include import status
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
	function getContactlists(includeImportStatus, importStatus, includeSize, pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var apipath = '/api/v1/outbound/contactlists';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(includeImportStatus !== undefined && includeImportStatus !== null){
			queryParameters.includeImportStatus = includeImportStatus;
		}


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
	 * @memberOf OutboundApi#
	* @param {} body - ContactList
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "selfUri": ""
}
	*/
	function postContactlists(body){
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
	self.postContactlists = postContactlists;
	/**
     * @summary Get penetration rates for a list of penetration rate identifiers (contact list id and qualifier id)
	 * @memberOf OutboundApi#
	* @param {} body - PenetrationRateIdentifierList
	*/
	function postContactlistsPenetrationrates(body){
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
	self.postContactlistsPenetrationrates = postContactlistsPenetrationrates;
	/**
     * @summary Get dialer contactList.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	* @param {boolean} includeImportStatus - Import status
	* @param {boolean} importStatus - Import status
	* @param {boolean} includeSize - Include size
	*/
	function getContactlist(contactListId, includeImportStatus, importStatus, includeSize){
		var apipath = '/api/v1/outbound/contactlists/{contactListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }


		if(includeImportStatus !== undefined && includeImportStatus !== null){
			queryParameters.includeImportStatus = includeImportStatus;
		}


		if(importStatus !== undefined && importStatus !== null){
			queryParameters.importStatus = importStatus;
		}


		if(includeSize !== undefined && includeSize !== null){
			queryParameters.includeSize = includeSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContactlist = getContactlist;
	/**
     * @summary Update a contact list.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	* @param {} body - ContactList
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "selfUri": ""
}
	*/
	function putContactlist(contactListId, body){
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
	self.putContactlist = putContactlist;
	/**
     * @summary Delete a contact list.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	*/
	function deleteContactlist(contactListId){
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
	self.deleteContactlist = deleteContactlist;
	/**
     * @summary Add contacts to a contact list.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - Contact List ID
	* @param {} body - Contact
	* @param {boolean} priority - 
	*/
	function postContactlistContacts(contactListId, body, priority){
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
	self.postContactlistContacts = postContactlistContacts;
	/**
     * @summary Get dialer contactList.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - Contact List ID
	* @param {string} contactId - Contact ID
	*/
	function getContactlistContact(contactListId, contactId){
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
	self.getContactlistContact = getContactlistContact;
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
   "callRecords": {},
   "callable": true,
   "phoneNumberStatus": {}
}
	*/
	function putContactlistContact(contactListId, contactId, body){
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
	self.putContactlistContact = putContactlistContact;
	/**
     * @summary Delete a contact.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - Contact List ID
	* @param {string} contactId - Contact ID
	*/
	function deleteContactlistContact(contactListId, contactId){
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
	self.deleteContactlistContact = deleteContactlistContact;
	/**
     * @summary Initiate the export of a contact list.
	 * @description Returns 200 if received OK.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	*/
	function postContactlistExport(contactListId){
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
	self.postContactlistExport = postContactlistExport;
	/**
     * @summary Get dialer contactList import status.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	*/
	function getContactlistImportstatus(contactListId){
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
	self.getContactlistImportstatus = getContactlistImportstatus;
	/**
     * @summary Get Dialer campaign's penetration rate
	 * @description Get dialer campaign's penetration rate.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	* @param {string} campaignId - Campaign ID
	*/
	function getContactlistPenetrationrate(contactListId, campaignId){
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
	self.getContactlistPenetrationrate = getContactlistPenetrationrate;
	/**
     * @summary Add phone numbers to a Dialer DNC list.
	 * @memberOf OutboundApi#
	* @param {string} conversationId - Conversation ID
	*/
	function postConversationDnc(conversationId){
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
	self.postConversationDnc = postConversationDnc;
	/**
     * @summary Query dialer DNC lists
	 * @memberOf OutboundApi#
	* @param {boolean} includeImportStatus - Import status
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
	function getDnclists(includeImportStatus, importStatus, includeSize, pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var apipath = '/api/v1/outbound/dnclists';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(includeImportStatus !== undefined && includeImportStatus !== null){
			queryParameters.includeImportStatus = includeImportStatus;
		}


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
	 * @memberOf OutboundApi#
	* @param {} body - DncList
	 * @example
	 * Body Example:
	 * {
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
   "size": 0
}
	*/
	function postDnclists(body){
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
	self.postDnclists = postDnclists;
	/**
     * @summary Get dialer DNC list
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	* @param {boolean} includeImportStatus - Import status
	* @param {boolean} importStatus - Import status
	* @param {boolean} includeSize - Include size
	*/
	function getDnclist(dncListId, includeImportStatus, importStatus, includeSize){
		var apipath = '/api/v1/outbound/dnclists/{dncListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }


		if(includeImportStatus !== undefined && includeImportStatus !== null){
			queryParameters.includeImportStatus = includeImportStatus;
		}


		if(importStatus !== undefined && importStatus !== null){
			queryParameters.importStatus = importStatus;
		}


		if(includeSize !== undefined && includeSize !== null){
			queryParameters.includeSize = includeSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDnclist = getDnclist;
	/**
     * @summary Update dialer DNC list
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	* @param {} body - DncList
	 * @example
	 * Body Example:
	 * {
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
   "size": 0
}
	*/
	function putDnclist(dncListId, body){
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
	self.putDnclist = putDnclist;
	/**
     * @summary Delete dialer DNC list
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	*/
	function deleteDnclist(dncListId){
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
	self.deleteDnclist = deleteDnclist;
	/**
     * @summary Initiate the export of a dnc list.
	 * @description Returns 200 if received OK.
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	*/
	function postDnclistExport(dncListId){
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
	self.postDnclistExport = postDnclistExport;
	/**
     * @summary Get dialer dncList import status.
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	*/
	function getDnclistImportstatus(dncListId){
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
	self.getDnclistImportstatus = getDnclistImportstatus;
	/**
     * @summary Add phone numbers to a Dialer DNC list.
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	* @param {} body - DNC Phone Numbers
	*/
	function postDnclistPhonenumbers(dncListId, body){
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
	self.postDnclistPhonenumbers = postDnclistPhonenumbers;
	/**
     * @summary Get dialer preview for user
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
	 * @memberOf OutboundApi#
	* @param {string} previewId - preview ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "callId": "",
   "wrapupCodeId": "",
   "contact": {
      "name": "",
      "contactListId": "",
      "data": {},
      "callRecords": {},
      "callable": true,
      "phoneNumberStatus": {}
   }
}
	*/
	function postPreviewDispositioncall(previewId, body){
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
	self.postPreviewDispositioncall = postPreviewDispositioncall;
	/**
     * @summary place preview call
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
	function postPreviewPlacecall(previewId, body){
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
	self.postPreviewPlacecall = postPreviewPlacecall;
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
	 * @memberOf OutboundApi#
	* @param {} body - RuleSet
	 * @example
	 * Body Example:
	 * {
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
   "rules": []
}
	*/
	function postRulesets(body){
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
	self.postRulesets = postRulesets;
	/**
     * @summary Get a Rule Set by ID.
	 * @memberOf OutboundApi#
	* @param {string} ruleSetId - Rule Set ID
	*/
	function getRuleset(ruleSetId){
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
	self.getRuleset = getRuleset;
	/**
     * @summary Update a RuleSet.
	 * @memberOf OutboundApi#
	* @param {string} ruleSetId - Rule Set ID
	* @param {} body - RuleSet
	 * @example
	 * Body Example:
	 * {
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
   "rules": []
}
	*/
	function putRuleset(ruleSetId, body){
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
	self.putRuleset = putRuleset;
	/**
     * @summary Delete a Rule set.
	 * @memberOf OutboundApi#
	* @param {string} ruleSetId - Rule Set ID
	*/
	function deleteRuleset(ruleSetId){
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
	self.deleteRuleset = deleteRuleset;
	/**
     * @summary Query for a list of dialer campaign schedules.
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
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	* @param {} body - CampaignSchedule
	 * @example
	 * Body Example:
	 * {
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
   }
}
	*/
	function putSchedulesCampaign(campaignId, body){
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
	self.putSchedulesCampaign = putSchedulesCampaign;
	/**
     * @summary Delete a dialer campaign schedule.
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
	 * @memberOf OutboundApi#
	* @param {string} sequenceId - Sequence ID
	* @param {} body - SequenceSchedule
	 * @example
	 * Body Example:
	 * {
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
   }
}
	*/
	function putSchedulesSequence(sequenceId, body){
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
	self.putSchedulesSequence = putSchedulesSequence;
	/**
     * @summary Delete a dialer sequence schedule.
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
	 * @memberOf OutboundApi#
	* @param {} body - Organization
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "campaigns": [],
   "currentCampaign": 0,
   "status": "",
   "stopMessage": "",
   "repeat": true
}
	*/
	function postSequences(body){
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
	self.postSequences = postSequences;
	/**
     * @summary Get a dialer campaign sequence.
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
	 * @memberOf OutboundApi#
	* @param {string} sequenceId - Campaign Sequence ID
	* @param {} body - Organization
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "campaigns": [],
   "currentCampaign": 0,
   "status": "",
   "stopMessage": "",
   "repeat": true
}
	*/
	function putSequence(sequenceId, body){
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
	self.putSequence = putSequence;
	/**
     * @summary Delete a dialer campaign sequence.
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
	 * @memberOf OutboundApi#
	* @param {} body - wrapUpCodeMapping
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "defaultSet": [],
   "mapping": {}
}
	*/
	function putWrapupcodemappings(body){
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
	self.putWrapupcodemappings = putWrapupcodemappings;

    return self;
};

/**
* @class
* @example
* var api = new PresenceApi(pureCloudSession);
*/
var PresenceApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Get an Organization's list of Presences
	 * @memberOf PresenceApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	*/
	function getPresencedefinitions(pageNumber, pageSize){
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
	self.getPresencedefinitions = getPresencedefinitions;
	/**
     * @summary Create an OrganizationPresence
	 * @memberOf PresenceApi#
	* @param {} body - The OrganizationPresence to create
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "languageLabels": {},
   "systemPresence": "",
   "deactivated": true,
   "createdBy": {
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
   },
   "createdDate": "",
   "modifiedBy": {
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
   },
   "modifiedDate": ""
}
	*/
	function postPresencedefinitions(body){
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
	self.postPresencedefinitions = postPresencedefinitions;
	/**
     * @summary Get an OrganizationPresence
	 * @memberOf PresenceApi#
	* @param {string} presenceId - Organization Presence ID
	*/
	function getPresencedefinition(presenceId){
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
	self.getPresencedefinition = getPresencedefinition;
	/**
     * @summary Update an OrganizationPresence
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
   },
   "createdDate": "",
   "modifiedBy": {
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
   },
   "modifiedDate": ""
}
	*/
	function putPresencedefinition(presenceId, body){
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
	self.putPresencedefinition = putPresencedefinition;
	/**
     * @summary Delete an OrganizationPresence
	 * @memberOf PresenceApi#
	* @param {string} presenceId - Organization Presence ID
	*/
	function deletePresencedefinition(presenceId){
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
	self.deletePresencedefinition = deletePresencedefinition;
	/**
     * @summary Get an User's list of Presences
	 * @memberOf PresenceApi#
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
	 * @memberOf PresenceApi#
	* @param {string} userId - User ID
	* @param {string} source - Source
	*/
	function getUserPresences(userId, source){
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
	self.getUserPresences = getUserPresences;
	/**
     * @summary Update a UserPresence
	 * @memberOf PresenceApi#
	* @param {string} userId - User ID
	* @param {string} source - Source
	* @param {} body - The updated UserPresence
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "user": {
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
   },
   "source": "",
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
   "modifiedBy": {
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
   },
   "modifiedDate": ""
}
	*/
	function putUserPresences(userId, source, body){
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
	self.putUserPresences = putUserPresences;
	/**
     * @summary Patch a UserPresence
	 * @memberOf PresenceApi#
	* @param {string} userId - User ID
	* @param {string} source - Source
	* @param {} body - The patched UserPresence
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "user": {
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
   },
   "source": "",
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
   "modifiedBy": {
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
   },
   "modifiedDate": ""
}
	*/
	function patchUserPresences(userId, source, body){
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
	self.patchUserPresences = patchUserPresences;
	/**
     * @summary Get a user's Primary UserPresence
	 * @memberOf PresenceApi#
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

    return self;
};

/**
* @class
* @example
* var api = new QualityApi(pureCloudSession);
*/
var QualityApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Get all of a Conversation's Recordings.
	 * @memberOf QualityApi#
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
	 * @memberOf QualityApi#
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
	function getConversationRecording(conversationId, recordingId, maxWaitMs, formatId, download, fileName){
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
	self.getConversationRecording = getConversationRecording;
	/**
     * @summary Updates the retention records on a recording.
	 * @description Currently supports updating and removing both archive and delete dates for eligible recordings. A request to change the archival date of an archived recording will result in a restoration of the recording until the new date set. Use of the query parameter 'restoreDays' is deprecated and will be removed in the next major version release. If 'restoreDays' is provided, no attempt at updating other retention data will be made. To migrate to the new usage, issuing a request with restoreDays=10 would instead set the archiveDate's time stamp in the PUT body to 10 days in the future.
	 * @memberOf QualityApi#
	* @param {string} conversationId - Conversation ID
	* @param {string} recordingId - Recording ID
	* @param {} body - recording
	* @param {integer} restoreDays - The number of days the recording will be available before it is re-archived. Deprecated.
	Any integer greater than or equal to 1.,
	 * @example
	 * Body Example:
	 * {
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
   "recordingId": ""
}
	*/
	function putConversationRecording(conversationId, recordingId, body, restoreDays){
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
	self.putConversationRecording = putConversationRecording;
	/**
     * @summary Get annotations for recording
	 * @memberOf QualityApi#
	* @param {string} conversationId - Conversation ID
	* @param {string} recordingId - Recording ID
	*/
	function getConversationRecordingAnnotations(conversationId, recordingId){
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
	self.getConversationRecordingAnnotations = getConversationRecordingAnnotations;
	/**
     * @summary Create annotation
	 * @memberOf QualityApi#
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
   },
   "description": ""
}
	*/
	function postConversationRecordingAnnotations(conversationId, recordingId, body){
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
	self.postConversationRecordingAnnotations = postConversationRecordingAnnotations;
	/**
     * @summary Get annotation
	 * @memberOf QualityApi#
	* @param {string} conversationId - Conversation ID
	* @param {string} recordingId - Recording ID
	* @param {string} annotationId - Annotation ID
	*/
	function getConversationRecordingAnnotation(conversationId, recordingId, annotationId){
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
	self.getConversationRecordingAnnotation = getConversationRecordingAnnotation;
	/**
     * @summary Update annotation
	 * @memberOf QualityApi#
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
   },
   "description": ""
}
	*/
	function putConversationRecordingAnnotation(conversationId, recordingId, annotationId, body){
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
	self.putConversationRecordingAnnotation = putConversationRecordingAnnotation;
	/**
     * @summary Delete annotation
	 * @memberOf QualityApi#
	* @param {string} conversationId - Conversation ID
	* @param {string} recordingId - Recording ID
	* @param {string} annotationId - Annotation ID
	*/
	function deleteConversationRecordingAnnotation(conversationId, recordingId, annotationId){
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
	self.deleteConversationRecordingAnnotation = deleteConversationRecordingAnnotation;
	/**
     * @summary Gets a list of Agent Activities
	 * @description Including the number of evaluations and average evaluation score
	 * @memberOf QualityApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	* @param {string} startTime - Start time of agent activity. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
	* @param {string} endTime - End time of agent activity. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
	* @param {array} agentUserId - user id of agent requested
	* @param {string} evaluatorUserId - user id of the evaluator
	* @param {string} name - name
	* @param {string} group - group id
	*/
	function getAgentsActivity(pageSize, pageNumber, sortBy, expand, startTime, endTime, agentUserId, evaluatorUserId, name, group){
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


		if(group !== undefined && group !== null){
			queryParameters.group = group;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getAgentsActivity = getAgentsActivity;
	/**
     * @summary Get the list of calibrations
	 * @memberOf QualityApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	* @param {string} conversationId - conversation id
	* @param {string} startTime - Beginning of the calibration query. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
	* @param {string} endTime - end of the calibration query. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
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
	 * @memberOf QualityApi#
	* @param {} body - calibration
	* @param {string} expand - calibratorId
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "calibrator": {
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
   },
   "agent": {
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
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
      "resourceId": "",
      "resourceType": "",
      "redacted": true,
      "isScoringIndex": true
   },
   "expertEvaluator": {
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
   }
}
	*/
	function postCalibrations(body, expand){
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
	self.postCalibrations = postCalibrations;
	/**
     * @summary Get a calibration by id.
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
	 * @memberOf QualityApi#
	* @param {string} calibrationId - Calibration ID
	* @param {} body - Calibration
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "calibrator": {
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
   },
   "agent": {
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
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
      "resourceId": "",
      "resourceType": "",
      "redacted": true,
      "isScoringIndex": true
   },
   "expertEvaluator": {
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
   }
}
	*/
	function putCalibration(calibrationId, body){
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
	self.putCalibration = putCalibration;
	/**
     * @summary Delete a calibration by id.
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
   },
   "agent": {
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
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
      "wrapupCodes": [],
      "mediaSettings": {},
      "bullseye": {},
      "acwSettings": {},
      "phoneNumber": "",
      "skillEvaluationMethod": "",
      "queueFlow": {},
      "callingPartyName": "",
      "callingPartyNumber": "",
      "memberCount": 0
   },
   "resourceId": "",
   "resourceType": "",
   "redacted": true,
   "isScoringIndex": true
}
	*/
	function postConversationEvaluations(conversationId, body, expand){
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
	self.postConversationEvaluations = postConversationEvaluations;
	/**
     * @summary Get an evaluation
	 * @memberOf QualityApi#
	* @param {string} conversationId - 
	* @param {string} evaluationId - 
	* @param {string} expand - agent, evaluator, evaluationForm
	*/
	function getConversationEvaluation(conversationId, evaluationId, expand){
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
	self.getConversationEvaluation = getConversationEvaluation;
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
   },
   "agent": {
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
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
      "wrapupCodes": [],
      "mediaSettings": {},
      "bullseye": {},
      "acwSettings": {},
      "phoneNumber": "",
      "skillEvaluationMethod": "",
      "queueFlow": {},
      "callingPartyName": "",
      "callingPartyNumber": "",
      "memberCount": 0
   },
   "resourceId": "",
   "resourceType": "",
   "redacted": true,
   "isScoringIndex": true
}
	*/
	function putConversationEvaluation(conversationId, evaluationId, body, expand){
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
	self.putConversationEvaluation = putConversationEvaluation;
	/**
     * @summary Delete an evaluation
	 * @memberOf QualityApi#
	* @param {string} conversationId - 
	* @param {string} evaluationId - 
	* @param {string} expand - evaluatorId
	*/
	function deleteConversationEvaluation(conversationId, evaluationId, expand){
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
	self.deleteConversationEvaluation = deleteConversationEvaluation;
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
	function postEvaluationsQuery(body, expand){
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
	self.postEvaluationsQuery = postEvaluationsQuery;
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
	function postEvaluationsScoring(body){
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
	self.postEvaluationsScoring = postEvaluationsScoring;
	/**
     * @summary Get an evaluator activity
	 * @memberOf QualityApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	* @param {string} startTime - The start time specified. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
	* @param {string} endTime - The end time specified. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
	* @param {string} name - Evaluator name
	* @param {array} permission - permission strings
	* @param {string} group - group id
	*/
	function getEvaluatorsActivity(pageSize, pageNumber, sortBy, expand, startTime, endTime, name, permission, group){
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


		if(group !== undefined && group !== null){
			queryParameters.group = group;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEvaluatorsActivity = getEvaluatorsActivity;

    return self;
};

/**
* @class
* @example
* var api = new RoutingApi(pureCloudSession);
*/
var RoutingApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Get domains
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
	function postEmailDomains(body){
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
	self.postEmailDomains = postEmailDomains;
	/**
     * @summary Get routes
	 * @memberOf RoutingApi#
	* @param {string} domain - email domain
	*/
	function getEmailDomainsRoutes(domain){
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
	self.getEmailDomainsRoutes = getEmailDomainsRoutes;
	/**
     * @summary Create a route
	 * @memberOf RoutingApi#
	* @param {string} domain - email domain
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
	function postEmailDomainsRoutes(domain, body){
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
	self.postEmailDomainsRoutes = postEmailDomainsRoutes;
	/**
     * @summary Get a route
	 * @memberOf RoutingApi#
	* @param {string} domain - email domain
	* @param {string} id - route ID
	*/
	function getEmailDomainsRoutes(domain, id){
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
	self.getEmailDomainsRoutes = getEmailDomainsRoutes;
	/**
     * @summary Update a route
	 * @memberOf RoutingApi#
	* @param {string} domain - email domain
	* @param {string} id - route ID
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
	function putEmailDomainsRoutes(domain, id, body){
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
	self.putEmailDomainsRoutes = putEmailDomainsRoutes;
	/**
     * @summary Delete a route
	 * @memberOf RoutingApi#
	* @param {string} domain - email domain
	* @param {string} id - route ID
	*/
	function deleteEmailDomainsRoutes(domain, id){
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
	self.deleteEmailDomainsRoutes = deleteEmailDomainsRoutes;
	/**
     * @summary Delete a domain
	 * @memberOf RoutingApi#
	* @param {string} id - domain ID
	*/
	function deleteEmailDomains(id){
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
	self.deleteEmailDomains = deleteEmailDomains;
	/**
     * @summary Get email setup
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
	 * @memberOf RoutingApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	* @param {string} name - Name
	* @param {boolean} active - Active
	*/
	function getQueues(pageSize, pageNumber, sortBy, name, active){
		var apipath = '/api/v1/routing/queues';
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


		if(active !== undefined && active !== null){
			queryParameters.active = active;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQueues = getQueues;
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
   "memberCount": 0
}
	*/
	function postQueues(body){
		var apipath = '/api/v1/routing/queues';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postQueues = postQueues;
	/**
     * @summary Get details about this queue.
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
   "memberCount": 0
}
	*/
	function putQueue(queueId, body){
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
	self.putQueue = putQueue;
	/**
     * @summary Delete a queue
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {boolean} forceDelete - 
	*/
	function deleteQueue(queueId, forceDelete){
		var apipath = '/api/v1/routing/queues/{queueId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }


		if(forceDelete !== undefined && forceDelete !== null){
			queryParameters.forceDelete = forceDelete;
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
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {string} memberId - Member/User ID
	* @param {} body - To join queue ~ "joined":true
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "user": {
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
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
	function putQueueMember(queueId, memberId, body){
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
	self.putQueueMember = putQueueMember;
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
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {} body - Queue Members
	* @param {boolean} doDelete - True to delete queue members
	*/
	function postQueueUsers(queueId, body, doDelete){
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
	self.postQueueUsers = postQueueUsers;
	/**
     * @summary Join or unjoin a set of users for a queue
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
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {string} memberId - Member ID
	*/
	function deleteQueueUser(queueId, memberId){
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
	self.deleteQueueUser = deleteQueueUser;
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
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
	function patchQueueUser(queueId, memberId, body){
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
	self.patchQueueUser = patchQueueUser;
	/**
     * @summary Get the wrap-up codes for a queue
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
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {string} codeId - Code ID
	* @param {} body - 
	*/
	function postQueueWrapupcodes(queueId, codeId, body){
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
	self.postQueueWrapupcodes = postQueueWrapupcodes;
	/**
     * @summary Delete a wrap-up code from a queue
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {string} codeId - Code ID
	*/
	function deleteQueueWrapupcode(queueId, codeId){
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
	self.deleteQueueWrapupcode = deleteQueueWrapupcode;
	/**
     * @summary Get the list of skills.
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
	 * @memberOf RoutingApi#
	* @param {} body - utilization
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "utilization": {}
}
	*/
	function putUtilization(body){
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
	self.putUtilization = putUtilization;
	/**
     * @summary Delete utilization settings and revert to system defaults.
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
	function postWrapupcodes(body){
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
	self.postWrapupcodes = postWrapupcodes;
	/**
     * @summary Get details about this wrap-up code.
	 * @memberOf RoutingApi#
	* @param {string} codeId - Wrapup Code ID
	*/
	function getWrapupcode(codeId){
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
	self.getWrapupcode = getWrapupcode;
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
	function putWrapupcode(codeId, body){
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
	self.putWrapupcode = putWrapupcode;
	/**
     * @summary Delete wrap-up code
	 * @memberOf RoutingApi#
	* @param {string} codeId - Wrapup Code ID
	*/
	function deleteWrapupcode(codeId){
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
	self.deleteWrapupcode = deleteWrapupcode;

    return self;
};

/**
* @class
* @example
* var api = new ScriptsApi(pureCloudSession);
*/
var ScriptsApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Get the list of evaluation forms
	 * @memberOf ScriptsApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	* @param {string} expand - Expand
	* @param {string} name - Name
	*/
	function getQualityForms(pageSize, pageNumber, sortBy, expand, expand, name){
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


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQualityForms = getQualityForms;
	/**
     * @summary Create an evaluation form.
	 * @memberOf ScriptsApi#
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
      "previousUri": "",
      "nextUri": "",
      "lastUri": "",
      "pageCount": 0
   }
}
	*/
	function postQualityForms(body){
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
	self.postQualityForms = postQualityForms;
	/**
     * @summary Get an evaluation form
	 * @memberOf ScriptsApi#
	* @param {string} formId - Form ID
	*/
	function getQualityForm(formId){
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
	self.getQualityForm = getQualityForm;
	/**
     * @summary Update an evaluation form.
	 * @memberOf ScriptsApi#
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
      "previousUri": "",
      "nextUri": "",
      "lastUri": "",
      "pageCount": 0
   }
}
	*/
	function putQualityForm(formId, body){
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
	self.putQualityForm = putQualityForm;
	/**
     * @summary Delete an evaluation form.
	 * @memberOf ScriptsApi#
	* @param {string} formId - Form ID
	*/
	function deleteQualityForm(formId){
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
	self.deleteQualityForm = deleteQualityForm;
	/**
     * @summary Gets all the revisions for a specific evaluation.
	 * @memberOf ScriptsApi#
	* @param {string} formId - Form ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getQualityFormVersions(formId, pageSize, pageNumber){
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
	self.getQualityFormVersions = getQualityFormVersions;
	/**
     * @summary Get the published evaluation forms.
	 * @memberOf ScriptsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} name - Name
	*/
	function getQualityPublishedforms(pageSize, pageNumber, name){
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
	self.getQualityPublishedforms = getQualityPublishedforms;
	/**
     * @summary Publish an evaluation form.
	 * @memberOf ScriptsApi#
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
      "previousUri": "",
      "nextUri": "",
      "lastUri": "",
      "pageCount": 0
   }
}
	*/
	function postQualityPublishedforms(body){
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
	self.postQualityPublishedforms = postQualityPublishedforms;
	/**
     * @summary Get the published evaluation forms.
	 * @memberOf ScriptsApi#
	* @param {string} formId - Form ID
	*/
	function getQualityPublishedform(formId){
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
	self.getQualityPublishedform = getQualityPublishedform;
	/**
     * @summary Get the list of scripts
	 * @memberOf ScriptsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} expand - Expand
	* @param {string} name - Name
	* @param {string} feature - Feature
	*/
	function getScripts(pageSize, pageNumber, expand, name, feature){
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
	self.getScripts = getScripts;
	/**
     * @summary Create a script.
	 * @memberOf ScriptsApi#
	* @param {} body - 
	*/
	function postScripts(body){
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
	self.postScripts = postScripts;

    return self;
};

/**
* @class
* @example
* var api = new SearchApi(pureCloudSession);
*/
var SearchApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Search chat history
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
	function postChats(body){
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
	self.postChats = postChats;

    return self;
};

/**
* @class
* @example
* var api = new StationsApi(pureCloudSession);
*/
var StationsApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Get the list of available stations.
	 * @memberOf StationsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	* @param {string} name - Name
	*/
	function getStations(pageSize, pageNumber, sortBy, name){
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
	self.getStations = getStations;
	/**
     * @summary Get station.
	 * @memberOf StationsApi#
	* @param {string} id - Station ID
	*/
	function get(id){
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
	self.get = get;
	/**
     * @summary Unassigns the user assigned to this station
	 * @memberOf StationsApi#
	* @param {string} id - Station ID
	*/
	function deleteAssociateduser(id){
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
	self.deleteAssociateduser = deleteAssociateduser;

    return self;
};

/**
* @class
* @example
* var api = new TelephonyProvidersEdgeApi(pureCloudSession);
*/
var TelephonyProvidersEdgeApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Get the list of edge groups.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} name - Name
	* @param {string} sortBy - Sort by
	*/
	function getTelephonyProvidersEdgeEdgegroups(pageSize, pageNumber, name, sortBy){
		var apipath = '/api/v1/telephony/providers/edge/edgegroups';
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
	self.getTelephonyProvidersEdgeEdgegroups = getTelephonyProvidersEdgeEdgegroups;
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
   "phoneTrunkBaseAssignments": []
}
	*/
	function postTelephonyProvidersEdgeEdgegroups(body){
		var apipath = '/api/v1/telephony/providers/edge/edgegroups';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postTelephonyProvidersEdgeEdgegroups = postTelephonyProvidersEdgeEdgegroups;
	/**
     * @summary Get edge group.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} edgeGroupId - Edge group ID
	*/
	function getTelephonyProvidersEdgeEdgegroup(edgeGroupId){
		var apipath = '/api/v1/telephony/providers/edge/edgegroups/{edgeGroupId}';
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
	self.getTelephonyProvidersEdgeEdgegroup = getTelephonyProvidersEdgeEdgegroup;
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
   "phoneTrunkBaseAssignments": []
}
	*/
	function putTelephonyProvidersEdgeEdgegroup(edgeGroupId, body){
		var apipath = '/api/v1/telephony/providers/edge/edgegroups/{edgeGroupId}';
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
	self.putTelephonyProvidersEdgeEdgegroup = putTelephonyProvidersEdgeEdgegroup;
	/**
     * @summary Delete an edge group.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} edgeGroupId - Edge group ID
	*/
	function deleteTelephonyProvidersEdgeEdgegroup(edgeGroupId){
		var apipath = '/api/v1/telephony/providers/edge/edgegroups/{edgeGroupId}';
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
	self.deleteTelephonyProvidersEdgeEdgegroup = deleteTelephonyProvidersEdgeEdgegroup;
	/**
     * @summary Get a listing of line base settings objects
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - Value by which to sort
	* @param {string} sortOrder - Sort order
	*/
	function getTelephonyProvidersEdgeLinebasesettings(pageNumber, pageSize, sortBy, sortOrder){
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
	self.getTelephonyProvidersEdgeLinebasesettings = getTelephonyProvidersEdgeLinebasesettings;
	/**
     * @summary Get a line base settings object by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} lineBaseId - Line base ID
	*/
	function getTelephonyProvidersEdgeLinebasesetting(lineBaseId){
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
	self.getTelephonyProvidersEdgeLinebasesetting = getTelephonyProvidersEdgeLinebasesetting;
	/**
     * @summary Get a list of Lines
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} name - Name
	* @param {string} sortBy - Value by which to sort
	* @param {array} expand - Fields to expand in the response, comma-separated
	*/
	function getTelephonyProvidersEdgeLines(pageSize, pageNumber, name, sortBy, expand){
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
	self.getTelephonyProvidersEdgeLines = getTelephonyProvidersEdgeLines;
	/**
     * @summary Get a Line instance template based on a Line Base Settings object. This object can then be modified and saved as a new Line instance
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} lineBaseSettingsId - The id of a Line Base Settings object upon which to base this Line
	*/
	function getTelephonyProvidersEdgeLinesTemplate(lineBaseSettingsId){
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
	self.getTelephonyProvidersEdgeLinesTemplate = getTelephonyProvidersEdgeLinesTemplate;
	/**
     * @summary Get a Line by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} lineId - Line ID
	*/
	function getTelephonyProvidersEdgeLine(lineId){
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
	self.getTelephonyProvidersEdgeLine = getTelephonyProvidersEdgeLine;
	/**
     * @summary Get outbound routes
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} name - Name
	* @param {string} siteid - Filter by site.id
	* @param {string} sortBy - Sort by
	*/
	function getTelephonyProvidersEdgeOutboundroutes(pageSize, pageNumber, name, siteid, sortBy){
		var apipath = '/api/v1/telephony/providers/edge/outboundroutes';
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
	self.getTelephonyProvidersEdgeOutboundroutes = getTelephonyProvidersEdgeOutboundroutes;
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
	function postTelephonyProvidersEdgeOutboundroutes(body){
		var apipath = '/api/v1/telephony/providers/edge/outboundroutes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postTelephonyProvidersEdgeOutboundroutes = postTelephonyProvidersEdgeOutboundroutes;
	/**
     * @summary Get outbound route
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} outboundRouteId - Outbound route ID
	*/
	function getTelephonyProvidersEdgeOutboundroute(outboundRouteId){
		var apipath = '/api/v1/telephony/providers/edge/outboundroutes/{outboundRouteId}';
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
	self.getTelephonyProvidersEdgeOutboundroute = getTelephonyProvidersEdgeOutboundroute;
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
	function putTelephonyProvidersEdgeOutboundroute(outboundRouteId, body){
		var apipath = '/api/v1/telephony/providers/edge/outboundroutes/{outboundRouteId}';
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
	self.putTelephonyProvidersEdgeOutboundroute = putTelephonyProvidersEdgeOutboundroute;
	/**
     * @summary Delete Outbound Route
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} outboundRouteId - Outbound route ID
	*/
	function deleteTelephonyProvidersEdgeOutboundroute(outboundRouteId){
		var apipath = '/api/v1/telephony/providers/edge/outboundroutes/{outboundRouteId}';
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
	self.deleteTelephonyProvidersEdgeOutboundroute = deleteTelephonyProvidersEdgeOutboundroute;
	/**
     * @summary Get a list of Phone Base Settings objects
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - Value by which to sort
	* @param {string} sortOrder - Sort order
	*/
	function getTelephonyProvidersEdgePhonebasesettings(pageNumber, pageSize, sortBy, sortOrder){
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
	self.getTelephonyProvidersEdgePhonebasesettings = getTelephonyProvidersEdgePhonebasesettings;
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
	function postTelephonyProvidersEdgePhonebasesettings(body){
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
	self.postTelephonyProvidersEdgePhonebasesettings = postTelephonyProvidersEdgePhonebasesettings;
	/**
     * @summary Get a list of available makes and models to create a new Phone Base Settings
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getTelephonyProvidersEdgePhonebasesettingsAvailablemetabases(pageSize, pageNumber){
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
	self.getTelephonyProvidersEdgePhonebasesettingsAvailablemetabases = getTelephonyProvidersEdgePhonebasesettingsAvailablemetabases;
	/**
     * @summary Get a Phone Base Settings instance template from a given make and model. This object can then be modified and saved as a new Phone Base Settings instance
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} phoneMetabaseId - The id of a metabase object upon which to base this Phone Base Settings
	*/
	function getTelephonyProvidersEdgePhonebasesettingsTemplate(phoneMetabaseId){
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
	self.getTelephonyProvidersEdgePhonebasesettingsTemplate = getTelephonyProvidersEdgePhonebasesettingsTemplate;
	/**
     * @summary Get a Phone Base Settings object by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} phoneBaseId - Phone base ID
	*/
	function getTelephonyProvidersEdgePhonebasesetting(phoneBaseId){
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
	self.getTelephonyProvidersEdgePhonebasesetting = getTelephonyProvidersEdgePhonebasesetting;
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
	function putTelephonyProvidersEdgePhonebasesetting(phoneBaseId, body){
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
	self.putTelephonyProvidersEdgePhonebasesetting = putTelephonyProvidersEdgePhonebasesetting;
	/**
     * @summary Delete a Phone Base Settings by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} phoneBaseId - Phone base ID
	*/
	function deleteTelephonyProvidersEdgePhonebasesetting(phoneBaseId){
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
	self.deleteTelephonyProvidersEdgePhonebasesetting = deleteTelephonyProvidersEdgePhonebasesetting;
	/**
     * @summary Get a list of Phone Instances
	 * @memberOf TelephonyProvidersEdgeApi#
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
	function getTelephonyProvidersEdgePhones(pageNumber, pageSize, sortBy, sortOrder, siteid, phoneBaseSettingsid, phone_hardwareId, expand, fields){
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
	self.getTelephonyProvidersEdgePhones = getTelephonyProvidersEdgePhones;
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
   }
}
	*/
	function postTelephonyProvidersEdgePhones(body){
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
	self.postTelephonyProvidersEdgePhones = postTelephonyProvidersEdgePhones;
	/**
     * @summary Reboot Multiple Phones
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {} body - body
	 * @example
	 * Body Example:
	 * {
   "phoneIds": []
}
	*/
	function postTelephonyProvidersEdgePhonesReboot(body){
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
	self.postTelephonyProvidersEdgePhonesReboot = postTelephonyProvidersEdgePhonesReboot;
	/**
     * @summary Get a Phone instance template based on a Phone Base Settings object. This object can then be modified and saved as a new Phone instance
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} phoneBaseSettingsId - The id of a Phone Base Settings object upon which to base this Phone
	*/
	function getTelephonyProvidersEdgePhonesTemplate(phoneBaseSettingsId){
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
	self.getTelephonyProvidersEdgePhonesTemplate = getTelephonyProvidersEdgePhonesTemplate;
	/**
     * @summary Get a Phone by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} phoneId - Phone ID
	*/
	function getTelephonyProvidersEdgePhone(phoneId){
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
	self.getTelephonyProvidersEdgePhone = getTelephonyProvidersEdgePhone;
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
   }
}
	*/
	function putTelephonyProvidersEdgePhone(phoneId, body){
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
	self.putTelephonyProvidersEdgePhone = putTelephonyProvidersEdgePhone;
	/**
     * @summary Delete a Phone by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} phoneId - Phone ID
	*/
	function deleteTelephonyProvidersEdgePhone(phoneId){
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
	self.deleteTelephonyProvidersEdgePhone = deleteTelephonyProvidersEdgePhone;
	/**
     * @summary Reboot a Phone
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} phoneId - Phone Id
	*/
	function postTelephonyProvidersEdgePhoneReboot(phoneId){
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
	self.postTelephonyProvidersEdgePhoneReboot = postTelephonyProvidersEdgePhoneReboot;
	/**
     * @summary Get a list of Edge-compatible time zones
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getTelephonyProvidersEdgeTimezones(pageSize, pageNumber){
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
	self.getTelephonyProvidersEdgeTimezones = getTelephonyProvidersEdgeTimezones;
	/**
     * @summary Get Trunk Base Settings listing
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - Value by which to sort
	* @param {string} sortOrder - Sort order
	*/
	function getTelephonyProvidersEdgeTrunkbasesettings(pageNumber, pageSize, sortBy, sortOrder){
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
	self.getTelephonyProvidersEdgeTrunkbasesettings = getTelephonyProvidersEdgeTrunkbasesettings;
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
	function postTelephonyProvidersEdgeTrunkbasesettings(body){
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
	self.postTelephonyProvidersEdgeTrunkbasesettings = postTelephonyProvidersEdgeTrunkbasesettings;
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
	function getTelephonyProvidersEdgeTrunkbasesettingsAvailablemetabases(type, pageSize, pageNumber){
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
	self.getTelephonyProvidersEdgeTrunkbasesettingsAvailablemetabases = getTelephonyProvidersEdgeTrunkbasesettingsAvailablemetabases;
	/**
     * @summary Get a Trunk Base Settings instance template from a given make and model. This object can then be modified and saved as a new Trunk Base Settings instance
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} trunkMetabaseId - The id of a metabase object upon which to base this Trunk Base Settings
	*/
	function getTelephonyProvidersEdgeTrunkbasesettingsTemplate(trunkMetabaseId){
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
	self.getTelephonyProvidersEdgeTrunkbasesettingsTemplate = getTelephonyProvidersEdgeTrunkbasesettingsTemplate;
	/**
     * @summary Get a Trunk Base Settings object by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} trunkBaseSettingsId - Trunk Base ID
	*/
	function getTelephonyProvidersEdgeTrunkbasesetting(trunkBaseSettingsId){
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
	self.getTelephonyProvidersEdgeTrunkbasesetting = getTelephonyProvidersEdgeTrunkbasesetting;
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
	function putTelephonyProvidersEdgeTrunkbasesetting(trunkBaseSettingsId, body){
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
	self.putTelephonyProvidersEdgeTrunkbasesetting = putTelephonyProvidersEdgeTrunkbasesetting;
	/**
     * @summary Delete a Trunk Base Settings object by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} trunkBaseSettingsId - Trunk Base ID
	*/
	function deleteTelephonyProvidersEdgeTrunkbasesetting(trunkBaseSettingsId){
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
	self.deleteTelephonyProvidersEdgeTrunkbasesetting = deleteTelephonyProvidersEdgeTrunkbasesetting;

    return self;
};

/**
* @class
* @example
* var api = new TokensApi(pureCloudSession);
*/
var TokensApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Delete  auth token used to make the request.
	 * @memberOf TokensApi#
	*/
	function deleteMe(){
		var apipath = '/api/v1/tokens/me';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteMe = deleteMe;

    return self;
};

/**
* @class
* @example
* var api = new UserRecordingsApi(pureCloudSession);
*/
var UserRecordingsApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Get a list of user recordings.
	 * @memberOf UserRecordingsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} expand - conversation
	*/
	function getUserrecordings(pageSize, pageNumber, expand){
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
	self.getUserrecordings = getUserrecordings;
	/**
     * @summary Get user recording summary
	 * @memberOf UserRecordingsApi#
	*/
	function getUserrecordingsSummary(){
		var apipath = '/api/v1/userrecordings/summary';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserrecordingsSummary = getUserrecordingsSummary;
	/**
     * @summary Get a user recording.
	 * @memberOf UserRecordingsApi#
	* @param {string} recordingId - User Recording ID
	* @param {string} expand - conversation
	*/
	function getUserrecording(recordingId, expand){
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
	self.getUserrecording = getUserrecording;
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
	function putUserrecording(recordingId, body, expand){
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
	self.putUserrecording = putUserrecording;
	/**
     * @summary Delete a user recording.
	 * @memberOf UserRecordingsApi#
	* @param {string} recordingId - User Recording ID
	*/
	function deleteUserrecording(recordingId){
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
	self.deleteUserrecording = deleteUserrecording;
	/**
     * @summary Download a user recording.
	 * @memberOf UserRecordingsApi#
	* @param {string} recordingId - User Recording ID
	* @param {string} formatId - The desired format (WEBM, WAV, etc.)
	WEBM,
	WAV,
	*/
	function getUserrecordingMedia(recordingId, formatId){
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
	self.getUserrecordingMedia = getUserrecordingMedia;

    return self;
};

/**
* @class
* @example
* var api = new UsersApi(pureCloudSession);
*/
var UsersApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Get the list of available users.
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
	function getUsers(pageSize, pageNumber, id, sortBy, role, name, username, skill, expand){
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
	self.getUsers = getUsers;
	/**
     * @summary Create a configuration service user.
	 * @memberOf UsersApi#
	* @param {} body - User
	 * @example
	 * Body Example:
	 * {
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
      "name": "",
      "user": {},
      "source": "",
      "presenceDefinition": {},
      "message": "",
      "modifiedBy": {},
      "modifiedDate": ""
   },
   "conversations": {
      "userId": "",
      "call": {},
      "callback": {},
      "email": {},
      "chat": {},
      "socialExpression": {},
      "video": {}
   },
   "conversationSummary": {
      "userId": "",
      "call": {},
      "callback": {},
      "email": {},
      "chat": {},
      "socialExpression": {},
      "video": {}
   },
   "outOfOffice": {
      "name": "",
      "user": {},
      "startDate": "",
      "endDate": "",
      "active": true
   },
   "geolocation": {
      "name": "",
      "type": "",
      "primary": true,
      "latitude": {},
      "longitude": {},
      "country": "",
      "region": "",
      "city": ""
   },
   "permissions": [],
   "requestedStatus": {
      "name": "",
      "alertable": true,
      "dateModified": "",
      "type": ""
   },
   "defaultStationUri": "",
   "stationUri": ""
}
	*/
	function postUsers(body){
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
	self.postUsers = postUsers;
	/**
     * @summary Get user.
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
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {array} expand - Which fields, if any, to expand
	*/
	function get(userId, expand){
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
	self.get = get;
	/**
     * @summary Set user station
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {} body - stationUri
	 * @example
	 * Body Example:
	 * {
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
      "name": "",
      "user": {},
      "source": "",
      "presenceDefinition": {},
      "message": "",
      "modifiedBy": {},
      "modifiedDate": ""
   },
   "conversations": {
      "userId": "",
      "call": {},
      "callback": {},
      "email": {},
      "chat": {},
      "socialExpression": {},
      "video": {}
   },
   "conversationSummary": {
      "userId": "",
      "call": {},
      "callback": {},
      "email": {},
      "chat": {},
      "socialExpression": {},
      "video": {}
   },
   "outOfOffice": {
      "name": "",
      "user": {},
      "startDate": "",
      "endDate": "",
      "active": true
   },
   "geolocation": {
      "name": "",
      "type": "",
      "primary": true,
      "latitude": {},
      "longitude": {},
      "country": "",
      "region": "",
      "city": ""
   },
   "permissions": [],
   "requestedStatus": {
      "name": "",
      "alertable": true,
      "dateModified": "",
      "type": ""
   },
   "defaultStationUri": "",
   "stationUri": ""
}
	*/
	function put(userId, body){
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
	self.put = put;
	/**
     * @summary Get a user's CallForwarding
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function getCallforwarding(userId){
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
	self.getCallforwarding = getCallforwarding;
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
   },
   "enabled": true,
   "phoneNumber": "",
   "modifiedDate": ""
}
	*/
	function putCallforwarding(userId, body){
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
	self.putCallforwarding = putCallforwarding;
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
   },
   "enabled": true,
   "phoneNumber": "",
   "modifiedDate": ""
}
	*/
	function patchCallforwarding(userId, body){
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
	self.patchCallforwarding = patchCallforwarding;
	/**
     * @summary Get a user's Geolocation
	 * @memberOf UsersApi#
	* @param {string} userId - user Id
	* @param {string} clientId - client Id
	*/
	function getGeolocation(userId, clientId){
		var apipath = '/api/v1/users/{userId}/geolocations/{clientId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        apipath = apipath.replace('{clientId}', clientId);

        if(clientId === undefined && clientId !== null){
			throw 'Missing required  parameter: clientId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getGeolocation = getGeolocation;
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
	function patchGeolocation(userId, clientId, body){
		var apipath = '/api/v1/users/{userId}/geolocations/{clientId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        apipath = apipath.replace('{clientId}', clientId);

        if(clientId === undefined && clientId !== null){
			throw 'Missing required  parameter: clientId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchGeolocation = patchGeolocation;
	/**
     * @summary Get a OutOfOffice
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function getOutofoffice(userId){
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
	self.getOutofoffice = getOutofoffice;
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
   },
   "startDate": "",
   "endDate": "",
   "active": true
}
	*/
	function putOutofoffice(userId, body){
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
	self.putOutofoffice = putOutofoffice;
	/**
     * @summary Get a user's PrimaryUserPresenceSource
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function getPrimarypresencesource(userId){
		var apipath = '/api/v1/users/{userId}/primarypresencesource';
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
	self.getPrimarypresencesource = getPrimarypresencesource;
	/**
     * @summary Update a user's PrimaryUserPresenceSource
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "user": {
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
   },
   "primarySource": ""
}
	*/
	function putPrimarypresencesource(userId, body){
		var apipath = '/api/v1/users/{userId}/primarypresencesource';
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
	self.putPrimarypresencesource = putPrimarypresencesource;
	/**
     * @summary Get queues for user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getQueues(userId, pageSize, pageNumber){
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
	self.getQueues = getQueues;
	/**
     * @summary Join or unjoin a set of queues for a user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {} body - User Queues
	*/
	function patchQueues(userId, body){
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
	self.patchQueues = patchQueues;
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
   "memberCount": 0
}
	*/
	function patchQueue(queueId, userId, body){
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
	self.patchQueue = patchQueue;
	/**
     * @summary List roles for user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function getRoles(userId){
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
	self.getRoles = getRoles;
	/**
     * @summary Fetch the routing status of a user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function getRoutingstatus(userId){
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
	self.getRoutingstatus = getRoutingstatus;
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
	function putRoutingstatus(userId, body){
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
	self.putRoutingstatus = putRoutingstatus;
	/**
     * @summary List skills for user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function getSkills(userId){
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
	self.getSkills = getSkills;

    return self;
};

/**
* @class
* @example
* var api = new UtilitiesApi(pureCloudSession);
*/
var UtilitiesApi = function (pureCloudSession) {
	var self = this;
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
	function postCertificateDetails(body){
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
	self.postCertificateDetails = postCertificateDetails;
	/**
     * @summary Validates a street address
	 * @memberOf UtilitiesApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "address": {
      "name": "",
      "street": "",
      "city": "",
      "countryName": "",
      "stateName": "",
      "postalCode": ""
   }
}
	*/
	function postConfigurationAddressvalidation(body){
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
	self.postConfigurationAddressvalidation = postConfigurationAddressvalidation;
	/**
     * @summary Get the current system date/time
	 * @memberOf UtilitiesApi#
	*/
	function getDate(){
		var apipath = '/api/v1/date';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDate = getDate;
	/**
     * @summary Get time zones list
	 * @memberOf UtilitiesApi#
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
* var api = new VoicemailApi(pureCloudSession);
*/
var VoicemailApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Get a user's voicemail policy
	 * @memberOf VoicemailApi#
	* @param {string} userId - User ID
	*/
	function getConfigurationUservoicemailpolicie(userId){
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
	self.getConfigurationUservoicemailpolicie = getConfigurationUservoicemailpolicie;
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
	function patchConfigurationUservoicemailpolicie(userId, body){
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
	self.patchConfigurationUservoicemailpolicie = patchConfigurationUservoicemailpolicie;
	/**
     * @summary Get a policy
	 * @memberOf VoicemailApi#
	*/
	function getConfigurationVoicemailpolicy(){
		var apipath = '/api/v1/configuration/voicemailpolicy';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConfigurationVoicemailpolicy = getConfigurationVoicemailpolicy;
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
	function putConfigurationVoicemailpolicy(body){
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
	self.putConfigurationVoicemailpolicy = putConfigurationVoicemailpolicy;
	/**
     * @summary Get mailbox information
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
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
   }
}
	*/
	function putMessage(messageId, body){
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
	self.putMessage = putMessage;
	/**
     * @summary Delete a message.
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
* @description PureCloud API
* @class
* @param  {string} environment (Optional) The environment that this is run in.  If set should be mypurecloud.com, mypurecloud.ie, mypurecloud.com.au, etc.
**/
var PureCloudSession =  function (purecloudEnvironment) {

    var _environment = purecloudEnvironment || "mypurecloud.com";
    var _host = 'api.'+ _environment;
    var _auth_url = '';

    var _token = null;
    var _state = null;
    var self = {};
    var _debug = false;

    if((typeof window !== 'undefined') && window.location.hash) {
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
     * @description Gets or sets the debugging flag.  When debugging is on, Ajax requests are logged to the console.
     * @param {boolean} debugOn Should debug or not.
     * @memberOf PureCloudSession#
     */
    function debug (debugOn){
        if(typeof debugOn !== 'undefined') {
            _debug = debugOn === true;
        }

        return _debug;
    }
    self.debug = debug;

    /**
	 * @description Gets the value of State that was passed into the .authorize method
     * @memberOf PureCloudSession#
     */
    function getState (){
        return _state;
    }
    self.getState = getState;

    /**
	 * Initiates a redirect to authorize the client using oauth.  This is not a valid operation in NodeJS usage.
     * @memberof PureCloudSession#
     * @param  {string} clientId    The application's Client ID
	 * @param  {string} redirectUrl The redirect URL to return to after authentication. This must be an authorized URL for the client.
	 * @example pureCloudSession.authorize('XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX', 'http://localhost:8085/examples/').done(function(){
         //this method will be called once we have a valid authorization token
         // if we don't have one a redirect to login will be called and then after redirecting back here,
         // the done method will be called.
     });
     *
     * @example pureCloudSession.authorize('XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX', 'http://localhost:8085/examples/', "State Value");
     */
    function authorize(clientId, redirectUrl, state){
        var _doneCallback = function(){console.error("callback not set");};

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
            _auth_url = 'https://login.'+_environment;

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
	 * Gets an authentication token for a client credentials grant.
     * @memberof PureCloudSession#
     * @param  {string} clientId    The application's Client ID
	 * @param  {string} clientSecret The application's Client Secret
     * @example pureCloudSession.authorize('XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX', 'SECRET').done(function(){
         //this method will be called once we have a valid authorization token
     }).error(function(err){
         //This method is called if there is an error getting the authorization token.
     });
     */
    function authorizeWithClientCredentialsGrant(clientId, clientSecret){
        var _doneCallback = function(){console.error("callback not set");};
        var _errorCallback = function(){console.error("callback not set");};

        var defer = {
            done: function(callback){
                _doneCallback = callback;
                return this;
            },
            error: function(callback){
                _errorCallback = callback;
                return this;
            }
        };

        _auth_url = 'https://login.'+_environment;
        setTimeout(function(){
            $.ajax
                ({
                  type: "POST",
                  url: _auth_url +"/token",
                  async: false,
                  username:clientId,
                  password: clientSecret,
                  data: {grant_type:'client_credentials'}
                }).fail(function(err){
                    _errorCallback(err);
                } ).done(function(data){
                    _token = data.access_token;
                    _doneCallback();
                });
        },10);
        return defer;
    }
    self.authorizeWithClientCredentialsGrant = authorizeWithClientCredentialsGrant;

    /**
     * Gets or sets the authorization token.  Setting is only needed if not using .authorize(...)
     * @memberof PureCloudSession#
     * @param  {string} token Authorization token
     * @example
     * var token = pureCloudSession.authToken();
     * @example
     * pureCloudSession.authToken(token);
     */
    function authToken(token){
        if(token){
            _token = token;
        }
        return _token;
    }
    self.authToken = authToken;

    /**
     * Returns true if the authorization token is set
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
    * Gets or Sets environment that this is run in.  If set should be mypurecloud.com, mypurecloud.ie, mypurecloud.com.au, etc.
    * @memberof PureCloudSession#
    * @param  {string} environment PureCloud environment (mypurecloud.com, mypurecloud.ie, mypurecloud.au, etc)
    * @example
    * var environment = pureCloudSession.environment();
    * @example
    * pureCloudSession.authToken("mypurecloud.ie");
    **/
    function environment(environment){
        if(environment){
            _environment = environment;
            _host = 'api.'+ environment;
            _auth_url = 'https://login.'+environment;
        }

        return _environment;
    }
    self.environment = environment;

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

         if(_debug){
             console.log(method + " " + url);
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



    module.exports = {
        AnalyticsApi : AnalyticsApi,
        ArchitectApi : ArchitectApi,
        AttributesApi : AttributesApi,
        AuthorizationApi : AuthorizationApi,
        UtilitiesApi : UtilitiesApi,
        ComplianceApi : ComplianceApi,
        ConfigurationApi : ConfigurationApi,
        VoicemailApi : VoicemailApi,
        ContentManagementApi : ContentManagementApi,
        ConversationsApi : ConversationsApi,
        QualityApi : QualityApi,
        DownloadsApi : DownloadsApi,
        ExternalContactsApi : ExternalContactsApi,
        FaxApi : FaxApi,
        GeolocationApi : GeolocationApi,
        GreetingsApi : GreetingsApi,
        GroupsApi : GroupsApi,
        OAuthApi : OAuthApi,
        LanguagesApi : LanguagesApi,
        LicensingApi : LicensingApi,
        LocationsApi : LocationsApi,
        NotificationsApi : NotificationsApi,
        OrphanedRecordingsApi : OrphanedRecordingsApi,
        OutboundApi : OutboundApi,
        PresenceApi : PresenceApi,
        ScriptsApi : ScriptsApi,
        RoutingApi : RoutingApi,
        SearchApi : SearchApi,
        StationsApi : StationsApi,
        TelephonyProvidersEdgeApi : TelephonyProvidersEdgeApi,
        TokensApi : TokensApi,
        UserRecordingsApi : UserRecordingsApi,
        UsersApi : UsersApi,
        PureCloudSession: PureCloudSession
    };
}());
