if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.notifications";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.notifications = (function (PureCloud) {
	/**
	* @namespace notifications/availabletopics
	**/
	/**
	* @namespace notifications/channels
	**/
	/**
	* @namespace notifications/channels/subscriptions
	**/

	var self = {};
	self.availabletopics = self.availabletopics || {};

	/**
     * 
     * @method getAvailableNotificationTopics
	 * @memberof notifications/availabletopics
	 *
     */
     self.availabletopics.getAvailableNotificationTopics = function(){
		var path = '/api/v1/notifications/availabletopics';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.channels = self.channels || {};

	/**
     * 
     * @method getChannels
	 * @memberof notifications/channels
	 *
     */
     self.channels.getChannels = function(){
		var path = '/api/v1/notifications/channels';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.channels = self.channels || {};

	/**
     * There is a limit of 10 channels. Creating an 11th channel will remove the channel with oldest last used date.
     * @method createChannel
	 * @memberof notifications/channels
	 *
     */
     self.channels.createChannel = function(){
		var path = '/api/v1/notifications/channels';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.channels = self.channels || {};
	self.channels.subscriptions = self.channels.subscriptions || {};

	/**
     * 
     * @method getSubscriptions
	 * @memberof notifications/channels/subscriptions

	* @param {string} channelId - Channel ID
	 *
     */
     self.channels.subscriptions.getSubscriptions = function(channelId){
		var path = '/api/v1/notifications/channels/{channelId}/subscriptions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{channelId}', channelId);

        if(channelId === undefined && channelId !== null){
			throw 'Missing required  parameter: channelId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.channels = self.channels || {};
	self.channels.subscriptions = self.channels.subscriptions || {};

	/**
     * 
     * @method addSubscription
	 * @memberof notifications/channels/subscriptions

	* @param {string} channelId - Channel ID

	* @param {} body - Topic
	 *
     */
     self.channels.subscriptions.addSubscription = function(channelId, body){
		var path = '/api/v1/notifications/channels/{channelId}/subscriptions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{channelId}', channelId);

        if(channelId === undefined && channelId !== null){
			throw 'Missing required  parameter: channelId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.channels = self.channels || {};
	self.channels.subscriptions = self.channels.subscriptions || {};

	/**
     * 
     * @method replaceSubscriptions
	 * @memberof notifications/channels/subscriptions

	* @param {string} channelId - Channel ID

	* @param {} body - Topic
	 *
     */
     self.channels.subscriptions.replaceSubscriptions = function(channelId, body){
		var path = '/api/v1/notifications/channels/{channelId}/subscriptions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{channelId}', channelId);

        if(channelId === undefined && channelId !== null){
			throw 'Missing required  parameter: channelId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.channels = self.channels || {};
	self.channels.subscriptions = self.channels.subscriptions || {};

	/**
     * 
     * @method removeAllSubscriptions
	 * @memberof notifications/channels/subscriptions

	* @param {string} channelId - Channel ID
	 *
     */
     self.channels.subscriptions.removeAllSubscriptions = function(channelId){
		var path = '/api/v1/notifications/channels/{channelId}/subscriptions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{channelId}', channelId);

        if(channelId === undefined && channelId !== null){
			throw 'Missing required  parameter: channelId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
