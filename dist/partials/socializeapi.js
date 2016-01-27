/**
* @class
* @example
* var api = new SocializeApi(pureCloudSession);
*/
var SocializeApi = function (pureCloudSession) {
	/**
     * @summary Get all published expressions.
	 * @memberOf SocializeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getExpressionsPublished(pageSize, pageNumber){
		var apipath = '/api/v1/socialize/expressions/published';
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
	self.getExpressionsPublished = getExpressionsPublished;
	/**
     * @summary Create published expression.
	 * @memberOf SocializeApi#
	* @param {} body - PublishedExpression
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "socialHub": "",
   "twitterExpression": {
      "name": "",
      "dateCreated": "",
      "dateModified": "",
      "isDispositioned": true,
      "isNoise": true,
      "gistener": {},
      "tweetId": "",
      "text": "",
      "tweetCreated": "",
      "isReply": true,
      "isRetweet": true,
      "retweetParentId": "",
      "retweetCount": 0,
      "isQuotedTweet": true,
      "quotedParentId": "",
      "userId": "",
      "userName": "",
      "userScreenName": "",
      "userTweetCount": 0,
      "userFollowersCount": 0,
      "groupTags": [],
      "routed": true
   },
   "publicationParentId": "",
   "scheduleDate": "",
   "publishedDate": "",
   "socialAccount": {
      "name": "",
      "dateCreated": "",
      "dateModified": "",
      "enabled": true,
      "authorized": true,
      "socialHub": "",
      "access_token": "",
      "access_token_secret": "",
      "twitterId": "",
      "streamingEnabled": true
   },
   "twitterId": "",
   "retweets": 0,
   "replies": []
}
	*/
	function createExpressionsPublished(body){
		var apipath = '/api/v1/socialize/expressions/published';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createExpressionsPublished = createExpressionsPublished;
	/**
     * @summary Get published expression
	 * @memberOf SocializeApi#
	* @param {string} publishedExpressionId - Published TwitterExpression ID
	*/
	function getExpressionsPublishedPublishedExpression(publishedExpressionId){
		var apipath = '/api/v1/socialize/expressions/published/{publishedExpressionId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{publishedExpressionId}', publishedExpressionId);

        if(publishedExpressionId === undefined && publishedExpressionId !== null){
			throw 'Missing required  parameter: publishedExpressionId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getExpressionsPublishedPublishedExpression = getExpressionsPublishedPublishedExpression;
	/**
     * @summary Update published expression.
	 * @memberOf SocializeApi#
	* @param {string} publishedExpressionId - Published TwitterExpression ID
	* @param {} body - PublishedExpression
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "socialHub": "",
   "twitterExpression": {
      "name": "",
      "dateCreated": "",
      "dateModified": "",
      "isDispositioned": true,
      "isNoise": true,
      "gistener": {},
      "tweetId": "",
      "text": "",
      "tweetCreated": "",
      "isReply": true,
      "isRetweet": true,
      "retweetParentId": "",
      "retweetCount": 0,
      "isQuotedTweet": true,
      "quotedParentId": "",
      "userId": "",
      "userName": "",
      "userScreenName": "",
      "userTweetCount": 0,
      "userFollowersCount": 0,
      "groupTags": [],
      "routed": true
   },
   "publicationParentId": "",
   "scheduleDate": "",
   "publishedDate": "",
   "socialAccount": {
      "name": "",
      "dateCreated": "",
      "dateModified": "",
      "enabled": true,
      "authorized": true,
      "socialHub": "",
      "access_token": "",
      "access_token_secret": "",
      "twitterId": "",
      "streamingEnabled": true
   },
   "twitterId": "",
   "retweets": 0,
   "replies": []
}
	*/
	function updateExpressionsPublishedPublishedExpression(publishedExpressionId, body){
		var apipath = '/api/v1/socialize/expressions/published/{publishedExpressionId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{publishedExpressionId}', publishedExpressionId);

        if(publishedExpressionId === undefined && publishedExpressionId !== null){
			throw 'Missing required  parameter: publishedExpressionId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateExpressionsPublishedPublishedExpression = updateExpressionsPublishedPublishedExpression;
	/**
     * @summary Delete published expression.
	 * @memberOf SocializeApi#
	* @param {string} publishedExpressionId - Published TwitterExpression ID
	*/
	function deleteExpressionsPublishedPublishedExpression(publishedExpressionId){
		var apipath = '/api/v1/socialize/expressions/published/{publishedExpressionId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{publishedExpressionId}', publishedExpressionId);

        if(publishedExpressionId === undefined && publishedExpressionId !== null){
			throw 'Missing required  parameter: publishedExpressionId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteExpressionsPublishedPublishedExpression = deleteExpressionsPublishedPublishedExpression;
	/**
     * @summary Get all configured expressions.
	 * @memberOf SocializeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getExpressionsTwitter(pageSize, pageNumber){
		var apipath = '/api/v1/socialize/expressions/twitter';
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
	self.getExpressionsTwitter = getExpressionsTwitter;
	/**
     * @summary Create twitter expression.
	 * @memberOf SocializeApi#
	* @param {} body - TwitterExpression
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "isDispositioned": true,
   "isNoise": true,
   "gistener": {
      "name": "",
      "dateCreated": "",
      "dateModified": "",
      "enabled": true,
      "anyWords": "",
      "allWords": "",
      "excludeWords": "",
      "exactPhrase": "",
      "groupTags": [],
      "socialAccount": {}
   },
   "tweetId": "",
   "text": "",
   "tweetCreated": "",
   "isReply": true,
   "isRetweet": true,
   "retweetParentId": "",
   "retweetCount": 0,
   "isQuotedTweet": true,
   "quotedParentId": "",
   "userId": "",
   "userName": "",
   "userScreenName": "",
   "userTweetCount": 0,
   "userFollowersCount": 0,
   "groupTags": [],
   "routed": true
}
	*/
	function createExpressionsTwitter(body){
		var apipath = '/api/v1/socialize/expressions/twitter';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createExpressionsTwitter = createExpressionsTwitter;
	/**
     * @summary Get TwitterExpression.
	 * @memberOf SocializeApi#
	* @param {string} expressionId - TwitterExpression ID
	*/
	function getExpressionsTwitterExpression(expressionId){
		var apipath = '/api/v1/socialize/expressions/twitter/{expressionId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{expressionId}', expressionId);

        if(expressionId === undefined && expressionId !== null){
			throw 'Missing required  parameter: expressionId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getExpressionsTwitterExpression = getExpressionsTwitterExpression;
	/**
     * @summary Update TwitterExpression.
	 * @memberOf SocializeApi#
	* @param {string} expressionId - TwitterExpression ID
	* @param {} body - TwitterExpression
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "isDispositioned": true,
   "isNoise": true,
   "gistener": {
      "name": "",
      "dateCreated": "",
      "dateModified": "",
      "enabled": true,
      "anyWords": "",
      "allWords": "",
      "excludeWords": "",
      "exactPhrase": "",
      "groupTags": [],
      "socialAccount": {}
   },
   "tweetId": "",
   "text": "",
   "tweetCreated": "",
   "isReply": true,
   "isRetweet": true,
   "retweetParentId": "",
   "retweetCount": 0,
   "isQuotedTweet": true,
   "quotedParentId": "",
   "userId": "",
   "userName": "",
   "userScreenName": "",
   "userTweetCount": 0,
   "userFollowersCount": 0,
   "groupTags": [],
   "routed": true
}
	*/
	function updateExpressionsTwitterExpression(expressionId, body){
		var apipath = '/api/v1/socialize/expressions/twitter/{expressionId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{expressionId}', expressionId);

        if(expressionId === undefined && expressionId !== null){
			throw 'Missing required  parameter: expressionId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateExpressionsTwitterExpression = updateExpressionsTwitterExpression;
	/**
     * @summary Delete TwitterExpression.
	 * @memberOf SocializeApi#
	* @param {string} expressionId - TwitterExpression ID
	*/
	function deleteExpressionsTwitterExpression(expressionId){
		var apipath = '/api/v1/socialize/expressions/twitter/{expressionId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{expressionId}', expressionId);

        if(expressionId === undefined && expressionId !== null){
			throw 'Missing required  parameter: expressionId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteExpressionsTwitterExpression = deleteExpressionsTwitterExpression;
	/**
     * @summary Get all configured gisteners.
	 * @memberOf SocializeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {boolean} enabled - Enabled Only
	*/
	function getGisteners(pageSize, pageNumber, enabled){
		var apipath = '/api/v1/socialize/gisteners';
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


		if(enabled !== undefined && enabled !== null){
			queryParameters.enabled = enabled;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getGisteners = getGisteners;
	/**
     * @summary Create gistener.
	 * @memberOf SocializeApi#
	* @param {} body - Gistener
	* @param {boolean} preview - Preview Only
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "enabled": true,
   "anyWords": "",
   "allWords": "",
   "excludeWords": "",
   "exactPhrase": "",
   "groupTags": [],
   "socialAccount": {
      "name": "",
      "dateCreated": "",
      "dateModified": "",
      "enabled": true,
      "authorized": true,
      "socialHub": "",
      "access_token": "",
      "access_token_secret": "",
      "twitterId": "",
      "streamingEnabled": true
   }
}
	*/
	function createGisteners(body, preview){
		var apipath = '/api/v1/socialize/gisteners';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(preview !== undefined && preview !== null){
			queryParameters.preview = preview;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createGisteners = createGisteners;
	/**
     * @summary Get gistener.
	 * @memberOf SocializeApi#
	* @param {string} gistenerId - Gistener ID
	*/
	function getGistener(gistenerId){
		var apipath = '/api/v1/socialize/gisteners/{gistenerId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{gistenerId}', gistenerId);

        if(gistenerId === undefined && gistenerId !== null){
			throw 'Missing required  parameter: gistenerId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getGistener = getGistener;
	/**
     * @summary Update gistener.
	 * @memberOf SocializeApi#
	* @param {string} gistenerId - Gistener ID
	* @param {} body - Gistener
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "enabled": true,
   "anyWords": "",
   "allWords": "",
   "excludeWords": "",
   "exactPhrase": "",
   "groupTags": [],
   "socialAccount": {
      "name": "",
      "dateCreated": "",
      "dateModified": "",
      "enabled": true,
      "authorized": true,
      "socialHub": "",
      "access_token": "",
      "access_token_secret": "",
      "twitterId": "",
      "streamingEnabled": true
   }
}
	*/
	function updateGistener(gistenerId, body){
		var apipath = '/api/v1/socialize/gisteners/{gistenerId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{gistenerId}', gistenerId);

        if(gistenerId === undefined && gistenerId !== null){
			throw 'Missing required  parameter: gistenerId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateGistener = updateGistener;
	/**
     * @summary Delete gistener.
	 * @memberOf SocializeApi#
	* @param {string} gistenerId - Gistener ID
	*/
	function deleteGistener(gistenerId){
		var apipath = '/api/v1/socialize/gisteners/{gistenerId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{gistenerId}', gistenerId);

        if(gistenerId === undefined && gistenerId !== null){
			throw 'Missing required  parameter: gistenerId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteGistener = deleteGistener;
	/**
     * @summary Get all configured groupTags.
	 * @memberOf SocializeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {boolean} enabled - Enabled Only
	*/
	function getGrouptags(pageSize, pageNumber, enabled){
		var apipath = '/api/v1/socialize/grouptags';
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


		if(enabled !== undefined && enabled !== null){
			queryParameters.enabled = enabled;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getGrouptags = getGrouptags;
	/**
     * @summary Create grouptag.
	 * @memberOf SocializeApi#
	* @param {} body - grouptag
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "type": "",
   "enabled": true
}
	*/
	function createGrouptags(body){
		var apipath = '/api/v1/socialize/grouptags';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createGrouptags = createGrouptags;
	/**
     * @summary Get grouptag.
	 * @memberOf SocializeApi#
	* @param {string} groupTagId - grouptag ID
	*/
	function getGroupTag(groupTagId){
		var apipath = '/api/v1/socialize/grouptags/{groupTagId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{groupTagId}', groupTagId);

        if(groupTagId === undefined && groupTagId !== null){
			throw 'Missing required  parameter: groupTagId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getGroupTag = getGroupTag;
	/**
     * @summary Update grouptag.
	 * @memberOf SocializeApi#
	* @param {string} groupTagId - grouptag ID
	* @param {} body - grouptag
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "type": "",
   "enabled": true
}
	*/
	function updateGroupTag(groupTagId, body){
		var apipath = '/api/v1/socialize/grouptags/{groupTagId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{groupTagId}', groupTagId);

        if(groupTagId === undefined && groupTagId !== null){
			throw 'Missing required  parameter: groupTagId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateGroupTag = updateGroupTag;
	/**
     * @summary Delete grouptag.
	 * @memberOf SocializeApi#
	* @param {string} groupTagId - grouptag ID
	*/
	function deleteGroupTag(groupTagId){
		var apipath = '/api/v1/socialize/grouptags/{groupTagId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{groupTagId}', groupTagId);

        if(groupTagId === undefined && groupTagId !== null){
			throw 'Missing required  parameter: groupTagId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteGroupTag = deleteGroupTag;
	/**
     * @summary Get all configured publications.
	 * @memberOf SocializeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getPublications(pageSize, pageNumber){
		var apipath = '/api/v1/socialize/publications';
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
	self.getPublications = getPublications;
	/**
     * @summary Create publication.
	 * @memberOf SocializeApi#
	* @param {} body - Publication
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "tweetText": "",
   "rawTweetText": "",
   "approved": true
}
	*/
	function createPublications(body){
		var apipath = '/api/v1/socialize/publications';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createPublications = createPublications;
	/**
     * @summary Get publication.
	 * @memberOf SocializeApi#
	* @param {string} publicationId - Publication ID
	*/
	function getPublication(publicationId){
		var apipath = '/api/v1/socialize/publications/{publicationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{publicationId}', publicationId);

        if(publicationId === undefined && publicationId !== null){
			throw 'Missing required  parameter: publicationId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPublication = getPublication;
	/**
     * @summary Update publication.
	 * @memberOf SocializeApi#
	* @param {string} publicationId - Publication ID
	* @param {} body - Publication
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "tweetText": "",
   "rawTweetText": "",
   "approved": true
}
	*/
	function updatePublication(publicationId, body){
		var apipath = '/api/v1/socialize/publications/{publicationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{publicationId}', publicationId);

        if(publicationId === undefined && publicationId !== null){
			throw 'Missing required  parameter: publicationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updatePublication = updatePublication;
	/**
     * @summary Delete publication.
	 * @memberOf SocializeApi#
	* @param {string} publicationId - Publication ID
	*/
	function deletePublication(publicationId){
		var apipath = '/api/v1/socialize/publications/{publicationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{publicationId}', publicationId);

        if(publicationId === undefined && publicationId !== null){
			throw 'Missing required  parameter: publicationId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deletePublication = deletePublication;
	/**
     * @summary Get all social accounts.
	 * @memberOf SocializeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {boolean} enabled - Enabled Only
	*/
	function getSocialaccounts(pageSize, pageNumber, enabled){
		var apipath = '/api/v1/socialize/socialaccounts';
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


		if(enabled !== undefined && enabled !== null){
			queryParameters.enabled = enabled;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSocialaccounts = getSocialaccounts;
	/**
     * @summary Create social account.
	 * @memberOf SocializeApi#
	* @param {} body - SocialAccount
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "enabled": true,
   "authorized": true,
   "socialHub": "",
   "access_token": "",
   "access_token_secret": "",
   "twitterId": "",
   "streamingEnabled": true
}
	*/
	function createSocialaccounts(body){
		var apipath = '/api/v1/socialize/socialaccounts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createSocialaccounts = createSocialaccounts;
	/**
     * @summary Get social account
	 * @memberOf SocializeApi#
	* @param {string} socialAccountId - Social Account ID
	* @param {boolean} enabled - Streaming Enabled
	*/
	function getSocialAccount(socialAccountId, enabled){
		var apipath = '/api/v1/socialize/socialaccounts/{socialAccountId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{socialAccountId}', socialAccountId);

        if(socialAccountId === undefined && socialAccountId !== null){
			throw 'Missing required  parameter: socialAccountId';
        }


		if(enabled !== undefined && enabled !== null){
			queryParameters.enabled = enabled;
		}

        if(enabled === undefined && enabled !== null){
			throw 'Missing required  parameter: enabled';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSocialAccount = getSocialAccount;
	/**
     * @summary Update social account.
	 * @memberOf SocializeApi#
	* @param {string} socialAccountId - Social Account ID
	* @param {boolean} enabled - Streaming Enabled
	* @param {} body - SocialAccount
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "enabled": true,
   "authorized": true,
   "socialHub": "",
   "access_token": "",
   "access_token_secret": "",
   "twitterId": "",
   "streamingEnabled": true
}
	*/
	function updateSocialAccount(socialAccountId, enabled, body){
		var apipath = '/api/v1/socialize/socialaccounts/{socialAccountId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{socialAccountId}', socialAccountId);

        if(socialAccountId === undefined && socialAccountId !== null){
			throw 'Missing required  parameter: socialAccountId';
        }


		if(enabled !== undefined && enabled !== null){
			queryParameters.enabled = enabled;
		}

        if(enabled === undefined && enabled !== null){
			throw 'Missing required  parameter: enabled';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateSocialAccount = updateSocialAccount;
	/**
     * @summary Delete social account.
	 * @memberOf SocializeApi#
	* @param {string} socialAccountId - Social Account ID
	* @param {boolean} enabled - Streaming Enabled
	*/
	function deleteSocialAccount(socialAccountId, enabled){
		var apipath = '/api/v1/socialize/socialaccounts/{socialAccountId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{socialAccountId}', socialAccountId);

        if(socialAccountId === undefined && socialAccountId !== null){
			throw 'Missing required  parameter: socialAccountId';
        }


		if(enabled !== undefined && enabled !== null){
			queryParameters.enabled = enabled;
		}

        if(enabled === undefined && enabled !== null){
			throw 'Missing required  parameter: enabled';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteSocialAccount = deleteSocialAccount;
	/**
     * @summary Enabled/Disable feed for social account.
	 * @memberOf SocializeApi#
	* @param {string} socialAccountId - Social Account ID
	* @param {boolean} enabled - Streaming Enabled
	*/
	function patchSocialAccount(socialAccountId, enabled){
		var apipath = '/api/v1/socialize/socialaccounts/{socialAccountId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{socialAccountId}', socialAccountId);

        if(socialAccountId === undefined && socialAccountId !== null){
			throw 'Missing required  parameter: socialAccountId';
        }


		if(enabled !== undefined && enabled !== null){
			queryParameters.enabled = enabled;
		}

        if(enabled === undefined && enabled !== null){
			throw 'Missing required  parameter: enabled';
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchSocialAccount = patchSocialAccount;

    return self;
};
