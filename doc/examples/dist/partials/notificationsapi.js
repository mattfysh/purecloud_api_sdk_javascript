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
