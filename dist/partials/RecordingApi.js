/**
* @class
* @example
* var api = new RecordingApi(pureCloudSession);
*/
function RecordingApi(session) {
    if(!(this instanceof RecordingApi)) {
        return new RecordingApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('RecordingApi requires a PureCloudSession');
    }
    this.session = session;
}

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
RecordingApi.prototype.getConversationIdRecordings = function getConversationIdRecordings(conversationId, maxWaitMs, formatId){
    var requestPath = '/api/v2/conversations/{conversationId}/recordings';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    requestQuery.maxWaitMs = maxWaitMs;
    requestQuery.formatId = formatId;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

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
RecordingApi.prototype.getConversationIdRecordingsRecordingId = function getConversationIdRecordingsRecordingId(conversationId, recordingId, formatId, download, fileName){
    var requestPath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    requestQuery.formatId = formatId;
    requestQuery.download = download;
    requestQuery.fileName = fileName;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

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
RecordingApi.prototype.putConversationIdRecordingsRecordingId = function putConversationIdRecordingsRecordingId(conversationId, recordingId, body){
    var requestPath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get annotations for recording
  * @memberOf RecordingApi#
  * @param {string} conversationId - Conversation ID
  * @param {string} recordingId - Recording ID
  */
RecordingApi.prototype.getConversationIdRecordingsRecordingIdAnnotations = function getConversationIdRecordingsRecordingIdAnnotations(conversationId, recordingId){
    var requestPath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

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
RecordingApi.prototype.postConversationIdRecordingsRecordingIdAnnotations = function postConversationIdRecordingsRecordingIdAnnotations(conversationId, recordingId, body){
    var requestPath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get annotation
  * @memberOf RecordingApi#
  * @param {string} conversationId - Conversation ID
  * @param {string} recordingId - Recording ID
  * @param {string} annotationId - Annotation ID
  */
RecordingApi.prototype.getConversationIdRecordingsRecordingIdAnnotationsAnnotationId = function getConversationIdRecordingsRecordingIdAnnotationsAnnotationId(conversationId, recordingId, annotationId){
    var requestPath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    if(annotationId === undefined || annotationId === null){
      throw new Error('Missing required  parameter: annotationId');
    }
    requestPath = requestPath.replace('{annotationId}', annotationId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

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
RecordingApi.prototype.putConversationIdRecordingsRecordingIdAnnotationsAnnotationId = function putConversationIdRecordingsRecordingIdAnnotationsAnnotationId(conversationId, recordingId, annotationId, body){
    var requestPath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    if(annotationId === undefined || annotationId === null){
      throw new Error('Missing required  parameter: annotationId');
    }
    requestPath = requestPath.replace('{annotationId}', annotationId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete annotation
  * @memberOf RecordingApi#
  * @param {string} conversationId - Conversation ID
  * @param {string} recordingId - Recording ID
  * @param {string} annotationId - Annotation ID
  */
RecordingApi.prototype.deleteConversationIdRecordingsRecordingIdAnnotationsAnnotationId = function deleteConversationIdRecordingsRecordingIdAnnotationsAnnotationId(conversationId, recordingId, annotationId){
    var requestPath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(recordingId === undefined || recordingId === null){
      throw new Error('Missing required  parameter: recordingId');
    }
    requestPath = requestPath.replace('{recordingId}', recordingId);
    if(annotationId === undefined || annotationId === null){
      throw new Error('Missing required  parameter: annotationId');
    }
    requestPath = requestPath.replace('{annotationId}', annotationId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

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
RecordingApi.prototype.getOrphanrecordings = function getOrphanrecordings(pageSize, pageNumber, sortBy, expand, nextPage, previousPage){
    var requestPath = '/api/v2/orphanrecordings';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.expand = expand;
    requestQuery.nextPage = nextPage;
    requestQuery.previousPage = previousPage;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Gets a single orphan recording
  * @memberOf RecordingApi#
  * @param {string} orphanId - Orphan ID
  */
RecordingApi.prototype.getOrphanId = function getOrphanId(orphanId){
    var requestPath = '/api/v2/orphanrecordings/{orphanId}';
    var requestQuery = {};
    var requestBody;

    if(orphanId === undefined || orphanId === null){
      throw new Error('Missing required  parameter: orphanId');
    }
    requestPath = requestPath.replace('{orphanId}', orphanId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary  deletes a single orphan recording
  * @memberOf RecordingApi#
  * @param {string} orphanId - Orphan ID
  */
RecordingApi.prototype.deleteOrphanId = function deleteOrphanId(orphanId){
    var requestPath = '/api/v2/orphanrecordings/{orphanId}';
    var requestQuery = {};
    var requestBody;

    if(orphanId === undefined || orphanId === null){
      throw new Error('Missing required  parameter: orphanId');
    }
    requestPath = requestPath.replace('{orphanId}', orphanId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

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
RecordingApi.prototype.getMediaretentionpolicies = function getMediaretentionpolicies(pageSize, pageNumber, sortBy, expand, nextPage, previousPage, name, enabled, summary, hasErrors){
    var requestPath = '/api/v2/recording/mediaretentionpolicies';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.expand = expand;
    requestQuery.nextPage = nextPage;
    requestQuery.previousPage = previousPage;
    requestQuery.name = name;
    requestQuery.enabled = enabled;
    requestQuery.summary = summary;
    requestQuery.hasErrors = hasErrors;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

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
RecordingApi.prototype.postMediaretentionpolicies = function postMediaretentionpolicies(body){
    var requestPath = '/api/v2/recording/mediaretentionpolicies';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete media retention policies
  * @description Bulk delete of media retention policies, this will only delete the polices that match the ids specified in the query param.
  * @memberOf RecordingApi#
  * @param {string} ids - Bulk delete of media retention policies, this will only delete the polices that match the ids specified in the query param.
  */
RecordingApi.prototype.deleteMediaretentionpolicies = function deleteMediaretentionpolicies(ids){
    var requestPath = '/api/v2/recording/mediaretentionpolicies';
    var requestQuery = {};
    var requestBody;

    if(ids === undefined || ids === null){
      throw new Error('Missing required  parameter: ids');
    }
    requestQuery.ids = ids;
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a media retention policy
  * @memberOf RecordingApi#
  * @param {string} policyId - Policy ID
  */
RecordingApi.prototype.getMediaretentionpoliciesPolicyId = function getMediaretentionpoliciesPolicyId(policyId){
    var requestPath = '/api/v2/recording/mediaretentionpolicies/{policyId}';
    var requestQuery = {};
    var requestBody;

    if(policyId === undefined || policyId === null){
      throw new Error('Missing required  parameter: policyId');
    }
    requestPath = requestPath.replace('{policyId}', policyId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

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
RecordingApi.prototype.putMediaretentionpoliciesPolicyId = function putMediaretentionpoliciesPolicyId(policyId, body){
    var requestPath = '/api/v2/recording/mediaretentionpolicies/{policyId}';
    var requestQuery = {};
    var requestBody;

    if(policyId === undefined || policyId === null){
      throw new Error('Missing required  parameter: policyId');
    }
    requestPath = requestPath.replace('{policyId}', policyId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a media retention policy
  * @memberOf RecordingApi#
  * @param {string} policyId - Policy ID
  */
RecordingApi.prototype.deleteMediaretentionpoliciesPolicyId = function deleteMediaretentionpoliciesPolicyId(policyId){
    var requestPath = '/api/v2/recording/mediaretentionpolicies/{policyId}';
    var requestQuery = {};
    var requestBody;

    if(policyId === undefined || policyId === null){
      throw new Error('Missing required  parameter: policyId');
    }
    requestPath = requestPath.replace('{policyId}', policyId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

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
RecordingApi.prototype.patchMediaretentionpoliciesPolicyId = function patchMediaretentionpoliciesPolicyId(policyId, body){
    var requestPath = '/api/v2/recording/mediaretentionpolicies/{policyId}';
    var requestQuery = {};
    var requestBody;

    if(policyId === undefined || policyId === null){
      throw new Error('Missing required  parameter: policyId');
    }
    requestPath = requestPath.replace('{policyId}', policyId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PATCH', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the Recording Settings for the Organization
  * @memberOf RecordingApi#
  * @param {boolean} createDefault - If no settings are found, a new one is created with default values
  */
RecordingApi.prototype.getSettings = function getSettings(createDefault){
    var requestPath = '/api/v2/recording/settings';
    var requestQuery = {};
    var requestBody;

    requestQuery.createDefault = createDefault;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update the Recording Settings for the Organization
  * @memberOf RecordingApi#
  * @param {} body - Recording settings
  * @example
  * Body Example:
  * {
   "maxSimultaneousStreams": 0
}
  */
RecordingApi.prototype.putSettings = function putSettings(body){
    var requestPath = '/api/v2/recording/settings';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};


module.exports = RecordingApi;
