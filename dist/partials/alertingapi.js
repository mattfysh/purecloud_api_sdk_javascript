//API VERSION - 
/**
* @class
* @example
* var api = new AlertingApi(pureCloudSession);
*/
var AlertingApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Get interaction stats alert list.
	 * @memberOf AlertingApi#
	*/
	function getInteractionstatsAlerts(){
		var apipath = '/api/v2/alerting/interactionstats/alerts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getInteractionstatsAlerts = getInteractionstatsAlerts;
	/**
     * @summary Gets user unread count of interaction stats alerts.
	 * @memberOf AlertingApi#
	*/
	function getInteractionstatsAlertsUnread(){
		var apipath = '/api/v2/alerting/interactionstats/alerts/unread';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getInteractionstatsAlertsUnread = getInteractionstatsAlertsUnread;
	/**
     * @summary Get an interaction stats alert
	 * @memberOf AlertingApi#
	* @param {string} alertId - Alert ID
	*/
	function getInteractionstatsAlertsAlertId(alertId){
		var apipath = '/api/v2/alerting/interactionstats/alerts/{alertId}';
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
	self.getInteractionstatsAlertsAlertId = getInteractionstatsAlertsAlertId;
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
	function putInteractionstatsAlertsAlertId(alertId, body){
		var apipath = '/api/v2/alerting/interactionstats/alerts/{alertId}';
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
	self.putInteractionstatsAlertsAlertId = putInteractionstatsAlertsAlertId;
	/**
     * @summary Delete an interaction stats alert
	 * @memberOf AlertingApi#
	* @param {string} alertId - Alert ID
	*/
	function deleteInteractionstatsAlertsAlertId(alertId){
		var apipath = '/api/v2/alerting/interactionstats/alerts/{alertId}';
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
	self.deleteInteractionstatsAlertsAlertId = deleteInteractionstatsAlertsAlertId;
	/**
     * @summary Get an interaction stats rule list.
	 * @memberOf AlertingApi#
	*/
	function getInteractionstatsRules(){
		var apipath = '/api/v2/alerting/interactionstats/rules';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getInteractionstatsRules = getInteractionstatsRules;
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
	function postInteractionstatsRules(body){
		var apipath = '/api/v2/alerting/interactionstats/rules';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postInteractionstatsRules = postInteractionstatsRules;
	/**
     * @summary Get an interaction stats rule.
	 * @memberOf AlertingApi#
	* @param {string} ruleId - Rule ID
	*/
	function getInteractionstatsRulesRuleId(ruleId){
		var apipath = '/api/v2/alerting/interactionstats/rules/{ruleId}';
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
	self.getInteractionstatsRulesRuleId = getInteractionstatsRulesRuleId;
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
	function putInteractionstatsRulesRuleId(ruleId, body){
		var apipath = '/api/v2/alerting/interactionstats/rules/{ruleId}';
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
	self.putInteractionstatsRulesRuleId = putInteractionstatsRulesRuleId;
	/**
     * @summary Delete an interaction stats rule.
	 * @memberOf AlertingApi#
	* @param {string} ruleId - Rule ID
	*/
	function deleteInteractionstatsRulesRuleId(ruleId){
		var apipath = '/api/v2/alerting/interactionstats/rules/{ruleId}';
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
	self.deleteInteractionstatsRulesRuleId = deleteInteractionstatsRulesRuleId;

    return self;
};
