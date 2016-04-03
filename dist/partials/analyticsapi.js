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
	function postConversationsAggregatesQuery(body){
		var apipath = '/api/v2/analytics/conversations/aggregates/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postConversationsAggregatesQuery = postConversationsAggregatesQuery;
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
	function postConversationsDetailsQuery(body){
		var apipath = '/api/v2/analytics/conversations/details/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postConversationsDetailsQuery = postConversationsDetailsQuery;
	/**
     * @summary Get a conversation by id
	 * @memberOf AnalyticsApi#
	* @param {string} conversationId - conversationId
	*/
	function getConversationsConversationIdDetails(conversationId){
		var apipath = '/api/v2/analytics/conversations/{conversationId}/details';
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
	self.getConversationsConversationIdDetails = getConversationsConversationIdDetails;
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
	function postConversationsConversationIdDetailsProperties(conversationId, body){
		var apipath = '/api/v2/analytics/conversations/{conversationId}/details/properties';
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
	self.postConversationsConversationIdDetailsProperties = postConversationsConversationIdDetailsProperties;
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
	function postEvaluationsAggregatesQuery(body){
		var apipath = '/api/v2/analytics/evaluations/aggregates/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postEvaluationsAggregatesQuery = postEvaluationsAggregatesQuery;
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
	function postQueuesObservationsQuery(body){
		var apipath = '/api/v2/analytics/queues/observations/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postQueuesObservationsQuery = postQueuesObservationsQuery;
	/**
     * @summary Get list of reporting metadata.
	 * @memberOf AnalyticsApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} locale - Locale
	*/
	function getReportingMetadata(pageNumber, pageSize, locale){
		var apipath = '/api/v2/analytics/reporting/metadata';
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
		var apipath = '/api/v2/analytics/reporting/reportformats';
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
		var apipath = '/api/v2/analytics/reporting/schedules';
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
	function postReportingSchedules(body){
		var apipath = '/api/v2/analytics/reporting/schedules';
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
		var apipath = '/api/v2/analytics/reporting/schedules/{scheduleId}';
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
	function putReportingSchedulesScheduleId(scheduleId, body){
		var apipath = '/api/v2/analytics/reporting/schedules/{scheduleId}';
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
		var apipath = '/api/v2/analytics/reporting/schedules/{scheduleId}';
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
		var apipath = '/api/v2/analytics/reporting/schedules/{scheduleId}/history';
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
		var apipath = '/api/v2/analytics/reporting/schedules/{scheduleId}/history/latest';
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
		var apipath = '/api/v2/analytics/reporting/schedules/{scheduleId}/history/{runId}';
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
		var apipath = '/api/v2/analytics/reporting/schedules/{scheduleId}/runreport';
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
		var apipath = '/api/v2/analytics/reporting/timeperiods';
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
	* @param {string} locale - Locale
	*/
	function getReportingReportIdMetadata(reportId, locale){
		var apipath = '/api/v2/analytics/reporting/{reportId}/metadata';
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
	function postUsersAggregatesQuery(body){
		var apipath = '/api/v2/analytics/users/aggregates/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postUsersAggregatesQuery = postUsersAggregatesQuery;
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
	function postUsersObservationsQuery(body){
		var apipath = '/api/v2/analytics/users/observations/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postUsersObservationsQuery = postUsersObservationsQuery;

    return self;
};
