if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.analytics";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.analytics = (function (PureCloud) {
	/**
	* @namespace analytics/alerting/alerts
	**/
	/**
	* @namespace analytics/alerting/alerts/unread
	**/
	/**
	* @namespace analytics/alerting/rules
	**/
	/**
	* @namespace analytics/metrics/query
	**/
	/**
	* @namespace analytics/query
	**/
	/**
	* @namespace analytics/reporting/metadata
	**/
	/**
	* @namespace analytics/reporting/reportformats
	**/
	/**
	* @namespace analytics/reporting/schedules
	**/
	/**
	* @namespace analytics/reporting/schedules/history
	**/
	/**
	* @namespace analytics/reporting/schedules/history/latest
	**/
	/**
	* @namespace analytics/reporting/schedules/runreport
	**/
	/**
	* @namespace analytics/reporting/timeperiods
	**/
	/**
	* @namespace analytics/segments/query
	**/

	var self = {};
	self.alerting = self.alerting || {};
	self.alerting.alerts = self.alerting.alerts || {};

	/**
     * 
     * @method getAlerts
	 * @memberof analytics/alerting/alerts

	* @param {integer} pageNumber - Page number

	* @param {integer} pageSize - Page size

	* @param {string} sortBy - title, startTime, endTime, description or unread

	* @param {string} sortOrder - ascending or descending
	 *
     */
     self.alerting.alerts.getAlerts = function(pageNumber, pageSize, sortBy, sortOrder){
		var path = '/api/v1/analytics/alerting/alerts';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.alerting = self.alerting || {};
	self.alerting.alerts = self.alerting.alerts || {};
	self.alerting.alerts.unread = self.alerting.alerts.unread || {};

	/**
     * 
     * @method getUnreadAlertsCount
	 * @memberof analytics/alerting/alerts/unread
	 *
     */
     self.alerting.alerts.unread.getUnreadAlertsCount = function(){
		var path = '/api/v1/analytics/alerting/alerts/unread';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.alerting = self.alerting || {};
	self.alerting.alerts = self.alerting.alerts || {};

	/**
     * 
     * @method getAlert
	 * @memberof analytics/alerting/alerts

	* @param {string} alertId - Alert ID
	 *
     */
     self.alerting.alerts.getAlert = function(alertId){
		var path = '/api/v1/analytics/alerting/alerts/{alertId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{alertId}', alertId);

        if(alertId === undefined && alertId !== null){
			throw 'Missing required  parameter: alertId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.alerting = self.alerting || {};
	self.alerting.alerts = self.alerting.alerts || {};

	/**
     * 
     * @method updateAlert
	 * @memberof analytics/alerting/alerts

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
	 *
     */
     self.alerting.alerts.updateAlert = function(alertId, body){
		var path = '/api/v1/analytics/alerting/alerts/{alertId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{alertId}', alertId);

        if(alertId === undefined && alertId !== null){
			throw 'Missing required  parameter: alertId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.alerting = self.alerting || {};
	self.alerting.alerts = self.alerting.alerts || {};

	/**
     * 
     * @method deleteAlert
	 * @memberof analytics/alerting/alerts

	* @param {string} alertId - Alert ID
	 *
     */
     self.alerting.alerts.deleteAlert = function(alertId){
		var path = '/api/v1/analytics/alerting/alerts/{alertId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{alertId}', alertId);

        if(alertId === undefined && alertId !== null){
			throw 'Missing required  parameter: alertId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.alerting = self.alerting || {};
	self.alerting.rules = self.alerting.rules || {};

	/**
     * 
     * @method getRules
	 * @memberof analytics/alerting/rules

	* @param {integer} pageNumber - Page number

	* @param {integer} pageSize - Page size

	* @param {string} sortBy - title, description, inAlarm or enabled

	* @param {string} sortOrder - ascending or descending
	 *
     */
     self.alerting.rules.getRules = function(pageNumber, pageSize, sortBy, sortOrder){
		var path = '/api/v1/analytics/alerting/rules';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.alerting = self.alerting || {};
	self.alerting.rules = self.alerting.rules || {};

	/**
     * 
     * @method createAlertingRule
	 * @memberof analytics/alerting/rules

	* @param {} body - Rule
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "order": 0,
   "category": "",
   "conditions": [],
   "actions": []
}
	 *
     */
     self.alerting.rules.createAlertingRule = function(body){
		var path = '/api/v1/analytics/alerting/rules';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.alerting = self.alerting || {};
	self.alerting.rules = self.alerting.rules || {};

	/**
     * 
     * @method getAlertingRule
	 * @memberof analytics/alerting/rules

	* @param {string} ruleId - Rule ID
	 *
     */
     self.alerting.rules.getAlertingRule = function(ruleId){
		var path = '/api/v1/analytics/alerting/rules/{ruleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{ruleId}', ruleId);

        if(ruleId === undefined && ruleId !== null){
			throw 'Missing required  parameter: ruleId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.alerting = self.alerting || {};
	self.alerting.rules = self.alerting.rules || {};

	/**
     * 
     * @method updateAlertingRule
	 * @memberof analytics/alerting/rules

	* @param {string} ruleId - Rule ID

	* @param {} body - Rule
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "order": 0,
   "category": "",
   "conditions": [],
   "actions": []
}
	 *
     */
     self.alerting.rules.updateAlertingRule = function(ruleId, body){
		var path = '/api/v1/analytics/alerting/rules/{ruleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{ruleId}', ruleId);

        if(ruleId === undefined && ruleId !== null){
			throw 'Missing required  parameter: ruleId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.alerting = self.alerting || {};
	self.alerting.rules = self.alerting.rules || {};

	/**
     * 
     * @method deleteAlertingRule
	 * @memberof analytics/alerting/rules

	* @param {string} ruleId - Rule ID
	 *
     */
     self.alerting.rules.deleteAlertingRule = function(ruleId){
		var path = '/api/v1/analytics/alerting/rules/{ruleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{ruleId}', ruleId);

        if(ruleId === undefined && ruleId !== null){
			throw 'Missing required  parameter: ruleId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.metrics = self.metrics || {};
	self.metrics.query = self.metrics.query || {};

	/**
     * 
     * @method sendQuery
	 * @memberof analytics/metrics/query

	* @param {} body - queryObject
	 *
     */
     self.metrics.query.sendQuery = function(body){
		var path = '/api/v1/analytics/metrics/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.query = self.query || {};

	/**
     * 
     * @method sendQuery
	 * @memberof analytics/query

	* @param {} body - queryObject

	* @param {string} version - Version number
	 *
     */
     self.query.sendQuery = function(body, version){
		var path = '/api/v1/analytics/query';
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



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.reporting = self.reporting || {};
	self.reporting.metadata = self.reporting.metadata || {};

	/**
     * 
     * @method getReportingMetadata
	 * @memberof analytics/reporting/metadata

	* @param {integer} pageNumber - Page number

	* @param {integer} pageSize - Page size

	* @param {string} acceptLanguage - Accepted language

	* @param {string} locale - Locale
	 *
     */
     self.reporting.metadata.getReportingMetadata = function(pageNumber, pageSize, acceptLanguage, locale){
		var path = '/api/v1/analytics/reporting/metadata';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.reporting = self.reporting || {};
	self.reporting.reportformats = self.reporting.reportformats || {};

	/**
     * Get a list of report formats.
     * @method getReportFormats
	 * @memberof analytics/reporting/reportformats
	 *
     */
     self.reporting.reportformats.getReportFormats = function(){
		var path = '/api/v1/analytics/reporting/reportformats';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.reporting = self.reporting || {};
	self.reporting.schedules = self.reporting.schedules || {};

	/**
     * Get a list of scheduled report jobs.
     * @method getScheduledReportJobs
	 * @memberof analytics/reporting/schedules

	* @param {integer} pageNumber - Page number

	* @param {integer} pageSize - Page size
	 *
     */
     self.reporting.schedules.getScheduledReportJobs = function(pageNumber, pageSize){
		var path = '/api/v1/analytics/reporting/schedules';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.reporting = self.reporting || {};
	self.reporting.schedules = self.reporting.schedules || {};

	/**
     * Create a scheduled report job.
     * @method createScheduledReportJob
	 * @memberof analytics/reporting/schedules

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
      "start": "",
      "end": ""
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
	 *
     */
     self.reporting.schedules.createScheduledReportJob = function(body){
		var path = '/api/v1/analytics/reporting/schedules';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.reporting = self.reporting || {};
	self.reporting.schedules = self.reporting.schedules || {};

	/**
     * 
     * @method getScheduledReportJob
	 * @memberof analytics/reporting/schedules

	* @param {string} scheduleId - Schedule ID
	 *
     */
     self.reporting.schedules.getScheduledReportJob = function(scheduleId){
		var path = '/api/v1/analytics/reporting/schedules/{scheduleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{scheduleId}', scheduleId);

        if(scheduleId === undefined && scheduleId !== null){
			throw 'Missing required  parameter: scheduleId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.reporting = self.reporting || {};
	self.reporting.schedules = self.reporting.schedules || {};

	/**
     * 
     * @method updateScheduleReportJob
	 * @memberof analytics/reporting/schedules

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
      "start": "",
      "end": ""
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
	 *
     */
     self.reporting.schedules.updateScheduleReportJob = function(scheduleId, body){
		var path = '/api/v1/analytics/reporting/schedules/{scheduleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{scheduleId}', scheduleId);

        if(scheduleId === undefined && scheduleId !== null){
			throw 'Missing required  parameter: scheduleId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.reporting = self.reporting || {};
	self.reporting.schedules = self.reporting.schedules || {};

	/**
     * 
     * @method deleteScheduledReportJob
	 * @memberof analytics/reporting/schedules

	* @param {string} scheduleId - Schedule ID
	 *
     */
     self.reporting.schedules.deleteScheduledReportJob = function(scheduleId){
		var path = '/api/v1/analytics/reporting/schedules/{scheduleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{scheduleId}', scheduleId);

        if(scheduleId === undefined && scheduleId !== null){
			throw 'Missing required  parameter: scheduleId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.reporting = self.reporting || {};
	self.reporting.schedules = self.reporting.schedules || {};
	self.reporting.schedules.history = self.reporting.schedules.history || {};

	/**
     * 
     * @method getCompletedScheduledReportJobs
	 * @memberof analytics/reporting/schedules/history

	* @param {string} scheduleId - Schedule ID

	* @param {integer} pageNumber - 

	* @param {integer} pageSize - 
	 *
     */
     self.reporting.schedules.history.getCompletedScheduledReportJobs = function(scheduleId, pageNumber, pageSize){
		var path = '/api/v1/analytics/reporting/schedules/{scheduleId}/history';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{scheduleId}', scheduleId);

        if(scheduleId === undefined && scheduleId !== null){
			throw 'Missing required  parameter: scheduleId';
        }


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.reporting = self.reporting || {};
	self.reporting.schedules = self.reporting.schedules || {};
	self.reporting.schedules.history = self.reporting.schedules.history || {};
	self.reporting.schedules.history.latest = self.reporting.schedules.history.latest || {};

	/**
     * 
     * @method getLatestCompletedScheduledReportJob
	 * @memberof analytics/reporting/schedules/history/latest

	* @param {string} scheduleId - Schedule ID
	 *
     */
     self.reporting.schedules.history.latest.getLatestCompletedScheduledReportJob = function(scheduleId){
		var path = '/api/v1/analytics/reporting/schedules/{scheduleId}/history/latest';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{scheduleId}', scheduleId);

        if(scheduleId === undefined && scheduleId !== null){
			throw 'Missing required  parameter: scheduleId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.reporting = self.reporting || {};
	self.reporting.schedules = self.reporting.schedules || {};
	self.reporting.schedules.history = self.reporting.schedules.history || {};

	/**
     * A completed scheduled report job.
     * @method getCompletedScheduledReportJob
	 * @memberof analytics/reporting/schedules/history

	* @param {string} runId - Run ID

	* @param {string} scheduleId - Schedule ID
	 *
     */
     self.reporting.schedules.history.getCompletedScheduledReportJob = function(runId, scheduleId){
		var path = '/api/v1/analytics/reporting/schedules/{scheduleId}/history/{runId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{runId}', runId);

        if(runId === undefined && runId !== null){
			throw 'Missing required  parameter: runId';
        }

        path = path.replace('{scheduleId}', scheduleId);

        if(scheduleId === undefined && scheduleId !== null){
			throw 'Missing required  parameter: scheduleId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.reporting = self.reporting || {};
	self.reporting.schedules = self.reporting.schedules || {};
	self.reporting.schedules.runreport = self.reporting.schedules.runreport || {};

	/**
     * 
     * @method addScheduledReportToReportingQueue
	 * @memberof analytics/reporting/schedules/runreport

	* @param {string} scheduleId - Schedule ID
	 *
     */
     self.reporting.schedules.runreport.addScheduledReportToReportingQueue = function(scheduleId){
		var path = '/api/v1/analytics/reporting/schedules/{scheduleId}/runreport';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{scheduleId}', scheduleId);

        if(scheduleId === undefined && scheduleId !== null){
			throw 'Missing required  parameter: scheduleId';
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.reporting = self.reporting || {};
	self.reporting.timeperiods = self.reporting.timeperiods || {};

	/**
     * 
     * @method getTimePeriodReports
	 * @memberof analytics/reporting/timeperiods
	 *
     */
     self.reporting.timeperiods.getTimePeriodReports = function(){
		var path = '/api/v1/analytics/reporting/timeperiods';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.reporting = self.reporting || {};
	self.reporting.metadata = self.reporting.metadata || {};

	/**
     * 
     * @method getReportingMetadata
	 * @memberof analytics/reporting/metadata

	* @param {string} reportId - Report ID

	* @param {string} acceptLanguage - Accepted language

	* @param {string} locale - Locale
	 *
     */
     self.reporting.metadata.getReportingMetadata = function(reportId, acceptLanguage, locale){
		var path = '/api/v1/analytics/reporting/{reportId}/metadata';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{reportId}', reportId);

        if(reportId === undefined && reportId !== null){
			throw 'Missing required  parameter: reportId';
        }


		if(locale !== undefined && locale !== null){
			queryParameters.locale = locale;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.segments = self.segments || {};
	self.segments.query = self.segments.query || {};

	/**
     * 
     * @method sendSegmentsQuery
	 * @memberof analytics/segments/query

	* @param {} body - queryObject
	 *
     */
     self.segments.query.sendSegmentsQuery = function(body){
		var path = '/api/v1/analytics/segments/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
