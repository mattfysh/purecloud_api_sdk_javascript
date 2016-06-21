//API VERSION - 
/**
* @class
* @example
* var api = new RecordingApi(pureCloudSession);
*/
var RecordingApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
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
	function getConversationIdRecordings(conversationId, maxWaitMs, formatId){
		var apipath = '/api/v2/conversations/{conversationId}/recordings';
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
	self.getConversationIdRecordings = getConversationIdRecordings;
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
	function getConversationIdRecordingsRecordingId(conversationId, recordingId, formatId, download, fileName){
		var apipath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}';
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
	self.getConversationIdRecordingsRecordingId = getConversationIdRecordingsRecordingId;
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
	function putConversationIdRecordingsRecordingId(conversationId, recordingId, body){
		var apipath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}';
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


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putConversationIdRecordingsRecordingId = putConversationIdRecordingsRecordingId;
	/**
     * @summary Get annotations for recording
	 * @memberOf RecordingApi#
	* @param {string} conversationId - Conversation ID
	* @param {string} recordingId - Recording ID
	*/
	function getConversationIdRecordingsRecordingIdAnnotations(conversationId, recordingId){
		var apipath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations';
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
	self.getConversationIdRecordingsRecordingIdAnnotations = getConversationIdRecordingsRecordingIdAnnotations;
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
	function postConversationIdRecordingsRecordingIdAnnotations(conversationId, recordingId, body){
		var apipath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations';
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
	self.postConversationIdRecordingsRecordingIdAnnotations = postConversationIdRecordingsRecordingIdAnnotations;
	/**
     * @summary Get annotation
	 * @memberOf RecordingApi#
	* @param {string} conversationId - Conversation ID
	* @param {string} recordingId - Recording ID
	* @param {string} annotationId - Annotation ID
	*/
	function getConversationIdRecordingsRecordingIdAnnotationsAnnotationId(conversationId, recordingId, annotationId){
		var apipath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}';
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
	self.getConversationIdRecordingsRecordingIdAnnotationsAnnotationId = getConversationIdRecordingsRecordingIdAnnotationsAnnotationId;
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
	function putConversationIdRecordingsRecordingIdAnnotationsAnnotationId(conversationId, recordingId, annotationId, body){
		var apipath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}';
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
	self.putConversationIdRecordingsRecordingIdAnnotationsAnnotationId = putConversationIdRecordingsRecordingIdAnnotationsAnnotationId;
	/**
     * @summary Delete annotation
	 * @memberOf RecordingApi#
	* @param {string} conversationId - Conversation ID
	* @param {string} recordingId - Recording ID
	* @param {string} annotationId - Annotation ID
	*/
	function deleteConversationIdRecordingsRecordingIdAnnotationsAnnotationId(conversationId, recordingId, annotationId){
		var apipath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}';
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
	self.deleteConversationIdRecordingsRecordingIdAnnotationsAnnotationId = deleteConversationIdRecordingsRecordingIdAnnotationsAnnotationId;
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
	function getOrphanrecordings(pageSize, pageNumber, sortBy, expand, nextPage, previousPage){
		var apipath = '/api/v2/orphanrecordings';
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


		if(nextPage !== undefined && nextPage !== null){
			queryParameters.nextPage = nextPage;
		}


		if(previousPage !== undefined && previousPage !== null){
			queryParameters.previousPage = previousPage;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOrphanrecordings = getOrphanrecordings;
	/**
     * @summary Gets a single orphan recording
	 * @memberOf RecordingApi#
	* @param {string} orphanId - Orphan ID
	*/
	function getOrphanId(orphanId){
		var apipath = '/api/v2/orphanrecordings/{orphanId}';
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
	self.getOrphanId = getOrphanId;
	/**
     * @summary  deletes a single orphan recording
	 * @memberOf RecordingApi#
	* @param {string} orphanId - Orphan ID
	*/
	function deleteOrphanId(orphanId){
		var apipath = '/api/v2/orphanrecordings/{orphanId}';
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
	self.deleteOrphanId = deleteOrphanId;
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
	function getMediaretentionpolicies(pageSize, pageNumber, sortBy, expand, nextPage, previousPage, name, enabled, summary, hasErrors){
		var apipath = '/api/v2/recording/mediaretentionpolicies';
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


		if(nextPage !== undefined && nextPage !== null){
			queryParameters.nextPage = nextPage;
		}


		if(previousPage !== undefined && previousPage !== null){
			queryParameters.previousPage = previousPage;
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
	function postMediaretentionpolicies(body){
		var apipath = '/api/v2/recording/mediaretentionpolicies';
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
	 * @memberOf RecordingApi#
	* @param {string} ids - Bulk delete of media retention policies, this will only delete the polices that match the ids specified in the query param.
	*/
	function deleteMediaretentionpolicies(ids){
		var apipath = '/api/v2/recording/mediaretentionpolicies';
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
	 * @memberOf RecordingApi#
	* @param {string} policyId - Policy ID
	*/
	function getMediaretentionpoliciesPolicyId(policyId){
		var apipath = '/api/v2/recording/mediaretentionpolicies/{policyId}';
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
	self.getMediaretentionpoliciesPolicyId = getMediaretentionpoliciesPolicyId;
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
	function putMediaretentionpoliciesPolicyId(policyId, body){
		var apipath = '/api/v2/recording/mediaretentionpolicies/{policyId}';
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
	self.putMediaretentionpoliciesPolicyId = putMediaretentionpoliciesPolicyId;
	/**
     * @summary Delete a media retention policy
	 * @memberOf RecordingApi#
	* @param {string} policyId - Policy ID
	*/
	function deleteMediaretentionpoliciesPolicyId(policyId){
		var apipath = '/api/v2/recording/mediaretentionpolicies/{policyId}';
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
	self.deleteMediaretentionpoliciesPolicyId = deleteMediaretentionpoliciesPolicyId;
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
	function patchMediaretentionpoliciesPolicyId(policyId, body){
		var apipath = '/api/v2/recording/mediaretentionpolicies/{policyId}';
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
	self.patchMediaretentionpoliciesPolicyId = patchMediaretentionpoliciesPolicyId;
	/**
     * @summary Get the Recording Settings for the Organization
	 * @memberOf RecordingApi#
	* @param {boolean} createDefault - If no settings are found, a new one is created with default values
	*/
	function getSettings(createDefault){
		var apipath = '/api/v2/recording/settings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(createDefault !== undefined && createDefault !== null){
			queryParameters.createDefault = createDefault;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSettings = getSettings;
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
	function putSettings(body){
		var apipath = '/api/v2/recording/settings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putSettings = putSettings;

    return self;
};
