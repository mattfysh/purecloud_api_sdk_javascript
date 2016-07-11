/**
* @class
* @example
* var api = new QualityApi(pureCloudSession);
*/
function QualityApi(session) {
    if(!(this instanceof QualityApi)) {
        return new QualityApi(session);
    }
    if(!(session && session.makeRequest)) {
        throw new Error('QualityApi requires a PureCloudSession');
    }
    this.session = session;
}

/**
  * @summary Query for evaluation aggregates
  * @memberOf QualityApi#
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
QualityApi.prototype.postEvaluationsAggregatesQuery = function postEvaluationsAggregatesQuery(body){
    var requestPath = '/api/v2/analytics/evaluations/aggregates/query';
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
  * @summary Gets a list of Agent Activities
  * @description Including the number of evaluations and average evaluation score
  * @memberOf QualityApi#
  * @param {integer} pageSize - The total page size requested
  * @param {integer} pageNumber - The page number requested
  * @param {string} sortBy - variable name requested to sort by
  * @param {array} expand - variable name requested by expand list
  * @param {string} nextPage - next page token
  * @param {string} previousPage - Previous page token
  * @param {string} startTime - Start time of agent activity. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
  * @param {string} endTime - End time of agent activity. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
  * @param {array} agentUserId - user id of agent requested
  * @param {string} evaluatorUserId - user id of the evaluator
  * @param {string} name - name
  * @param {string} group - group id
  */
QualityApi.prototype.getAgentsActivity = function getAgentsActivity(pageSize, pageNumber, sortBy, expand, nextPage, previousPage, startTime, endTime, agentUserId, evaluatorUserId, name, group){
    var requestPath = '/api/v2/quality/agents/activity';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.expand = expand;
    requestQuery.nextPage = nextPage;
    requestQuery.previousPage = previousPage;
    requestQuery.startTime = startTime;
    requestQuery.endTime = endTime;
    requestQuery.agentUserId = agentUserId;
    requestQuery.evaluatorUserId = evaluatorUserId;
    requestQuery.name = name;
    requestQuery.group = group;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of calibrations
  * @memberOf QualityApi#
  * @param {integer} pageSize - The total page size requested
  * @param {integer} pageNumber - The page number requested
  * @param {string} sortBy - variable name requested to sort by
  * @param {array} expand - variable name requested by expand list
  * @param {string} nextPage - next page token
  * @param {string} previousPage - Previous page token
  * @param {string} conversationId - conversation id
  * @param {string} startTime - Beginning of the calibration query. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
  * @param {string} endTime - end of the calibration query. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
  * @param {string} calibratorId - user id of calibrator
  */
QualityApi.prototype.getCalibrations = function getCalibrations(pageSize, pageNumber, sortBy, expand, nextPage, previousPage, conversationId, startTime, endTime, calibratorId){
    var requestPath = '/api/v2/quality/calibrations';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.expand = expand;
    requestQuery.nextPage = nextPage;
    requestQuery.previousPage = previousPage;
    requestQuery.conversationId = conversationId;
    requestQuery.startTime = startTime;
    requestQuery.endTime = endTime;
    if(calibratorId === undefined || calibratorId === null){
      throw new Error('Missing required  parameter: calibratorId');
    }
    requestQuery.calibratorId = calibratorId;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

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
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "agent": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
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
      "neverRelease": true,
      "resourceId": "",
      "resourceType": "",
      "redacted": true,
      "isScoringIndex": true
   },
   "expertEvaluator": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   }
}
  */
QualityApi.prototype.postCalibrations = function postCalibrations(body, expand){
    var requestPath = '/api/v2/quality/calibrations';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery.expand = expand;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a calibration by id.
  * @memberOf QualityApi#
  * @param {string} calibrationId - Calibration ID
  * @param {string} calibratorId - calibratorId
  */
QualityApi.prototype.getCalibrationsCalibrationId = function getCalibrationsCalibrationId(calibrationId, calibratorId){
    var requestPath = '/api/v2/quality/calibrations/{calibrationId}';
    var requestQuery = {};
    var requestBody;

    if(calibrationId === undefined || calibrationId === null){
      throw new Error('Missing required  parameter: calibrationId');
    }
    requestPath = requestPath.replace('{calibrationId}', calibrationId);
    if(calibratorId === undefined || calibratorId === null){
      throw new Error('Missing required  parameter: calibratorId');
    }
    requestQuery.calibratorId = calibratorId;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

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
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "agent": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
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
      "neverRelease": true,
      "resourceId": "",
      "resourceType": "",
      "redacted": true,
      "isScoringIndex": true
   },
   "expertEvaluator": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   }
}
  */
QualityApi.prototype.putCalibrationsCalibrationId = function putCalibrationsCalibrationId(calibrationId, body){
    var requestPath = '/api/v2/quality/calibrations/{calibrationId}';
    var requestQuery = {};
    var requestBody;

    if(calibrationId === undefined || calibrationId === null){
      throw new Error('Missing required  parameter: calibrationId');
    }
    requestPath = requestPath.replace('{calibrationId}', calibrationId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a calibration by id.
  * @memberOf QualityApi#
  * @param {string} calibrationId - Calibration ID
  * @param {string} calibratorId - calibratorId
  */
QualityApi.prototype.deleteCalibrationsCalibrationId = function deleteCalibrationsCalibrationId(calibrationId, calibratorId){
    var requestPath = '/api/v2/quality/calibrations/{calibrationId}';
    var requestQuery = {};
    var requestBody;

    if(calibrationId === undefined || calibrationId === null){
      throw new Error('Missing required  parameter: calibrationId');
    }
    requestPath = requestPath.replace('{calibrationId}', calibrationId);
    if(calibratorId === undefined || calibratorId === null){
      throw new Error('Missing required  parameter: calibratorId');
    }
    requestQuery.calibratorId = calibratorId;
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get audits for conversation or recording
  * @memberOf QualityApi#
  * @param {string} conversationId - Conversation ID
  * @param {integer} pageSize - The total page size requested
  * @param {integer} pageNumber - The page number requested
  * @param {string} sortBy - variable name requested to sort by
  * @param {array} expand - variable name requested by expand list
  * @param {string} nextPage - next page token
  * @param {string} previousPage - Previous page token
  * @param {string} recordingId - id of the recording
  * @param {string} entityType - entity type options: Recording, Calibration, Evaluation, Annotation
  */
QualityApi.prototype.getConversationsConversationIdAudits = function getConversationsConversationIdAudits(conversationId, pageSize, pageNumber, sortBy, expand, nextPage, previousPage, recordingId, entityType){
    var requestPath = '/api/v2/quality/conversations/{conversationId}/audits';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.expand = expand;
    requestQuery.nextPage = nextPage;
    requestQuery.previousPage = previousPage;
    requestQuery.recordingId = recordingId;
    requestQuery.entityType = entityType;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

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
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "agent": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
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
      "mediaSettings": {},
      "bullseye": {},
      "acwSettings": {},
      "skillEvaluationMethod": "",
      "queueFlow": {},
      "callingPartyName": "",
      "callingPartyNumber": "",
      "memberCount": 0
   },
   "neverRelease": true,
   "resourceId": "",
   "resourceType": "",
   "redacted": true,
   "isScoringIndex": true
}
  */
QualityApi.prototype.postConversationsConversationIdEvaluations = function postConversationsConversationIdEvaluations(conversationId, body, expand){
    var requestPath = '/api/v2/quality/conversations/{conversationId}/evaluations';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery.expand = expand;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get an evaluation
  * @memberOf QualityApi#
  * @param {string} conversationId - 
  * @param {string} evaluationId - 
  * @param {string} expand - agent, evaluator, evaluationForm
  */
QualityApi.prototype.getConversationsConversationIdEvaluationsEvaluationId = function getConversationsConversationIdEvaluationsEvaluationId(conversationId, evaluationId, expand){
    var requestPath = '/api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(evaluationId === undefined || evaluationId === null){
      throw new Error('Missing required  parameter: evaluationId');
    }
    requestPath = requestPath.replace('{evaluationId}', evaluationId);
    requestQuery.expand = expand;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

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
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "agent": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
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
      "mediaSettings": {},
      "bullseye": {},
      "acwSettings": {},
      "skillEvaluationMethod": "",
      "queueFlow": {},
      "callingPartyName": "",
      "callingPartyNumber": "",
      "memberCount": 0
   },
   "neverRelease": true,
   "resourceId": "",
   "resourceType": "",
   "redacted": true,
   "isScoringIndex": true
}
  */
QualityApi.prototype.putConversationsConversationIdEvaluationsEvaluationId = function putConversationsConversationIdEvaluationsEvaluationId(conversationId, evaluationId, body, expand){
    var requestPath = '/api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(evaluationId === undefined || evaluationId === null){
      throw new Error('Missing required  parameter: evaluationId');
    }
    requestPath = requestPath.replace('{evaluationId}', evaluationId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery.expand = expand;
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete an evaluation
  * @memberOf QualityApi#
  * @param {string} conversationId - 
  * @param {string} evaluationId - 
  * @param {string} expand - evaluatorId
  */
QualityApi.prototype.deleteConversationsConversationIdEvaluationsEvaluationId = function deleteConversationsConversationIdEvaluationsEvaluationId(conversationId, evaluationId, expand){
    var requestPath = '/api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}';
    var requestQuery = {};
    var requestBody;

    if(conversationId === undefined || conversationId === null){
      throw new Error('Missing required  parameter: conversationId');
    }
    requestPath = requestPath.replace('{conversationId}', conversationId);
    if(evaluationId === undefined || evaluationId === null){
      throw new Error('Missing required  parameter: evaluationId');
    }
    requestPath = requestPath.replace('{evaluationId}', evaluationId);
    requestQuery.expand = expand;
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Queries Evaluations and returns a paged list
  * @description Query params must include one of conversationId, evaluatorUserId, or agentUserId
  * @memberOf QualityApi#
  * @param {integer} pageSize - The total page size requested
  * @param {integer} pageNumber - The page number requested
  * @param {string} sortBy - variable name requested to sort by
  * @param {array} expand - variable name requested by expand list
  * @param {string} nextPage - next page token
  * @param {string} previousPage - Previous page token
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
QualityApi.prototype.getEvaluationsQuery = function getEvaluationsQuery(pageSize, pageNumber, sortBy, expand, nextPage, previousPage, conversationId, agentUserId, evaluatorUserId, queueId, startTime, endTime, evaluationState, isReleased, agentHasRead, expandAnswerTotalScores, maximum){
    var requestPath = '/api/v2/quality/evaluations/query';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.expand = expand;
    requestQuery.nextPage = nextPage;
    requestQuery.previousPage = previousPage;
    requestQuery.conversationId = conversationId;
    requestQuery.agentUserId = agentUserId;
    requestQuery.evaluatorUserId = evaluatorUserId;
    requestQuery.queueId = queueId;
    requestQuery.startTime = startTime;
    requestQuery.endTime = endTime;
    requestQuery.evaluationState = evaluationState;
    requestQuery.isReleased = isReleased;
    requestQuery.agentHasRead = agentHasRead;
    requestQuery.expandAnswerTotalScores = expandAnswerTotalScores;
    requestQuery.maximum = maximum;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

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
QualityApi.prototype.postEvaluationsScoring = function postEvaluationsScoring(body){
    var requestPath = '/api/v2/quality/evaluations/scoring';
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
  * @summary Get an evaluator activity
  * @memberOf QualityApi#
  * @param {integer} pageSize - The total page size requested
  * @param {integer} pageNumber - The page number requested
  * @param {string} sortBy - variable name requested to sort by
  * @param {array} expand - variable name requested by expand list
  * @param {string} nextPage - next page token
  * @param {string} previousPage - Previous page token
  * @param {string} startTime - The start time specified. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
  * @param {string} endTime - The end time specified. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
  * @param {string} name - Evaluator name
  * @param {array} permission - permission strings
  * @param {string} group - group id
  */
QualityApi.prototype.getEvaluatorsActivity = function getEvaluatorsActivity(pageSize, pageNumber, sortBy, expand, nextPage, previousPage, startTime, endTime, name, permission, group){
    var requestPath = '/api/v2/quality/evaluators/activity';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.expand = expand;
    requestQuery.nextPage = nextPage;
    requestQuery.previousPage = previousPage;
    requestQuery.startTime = startTime;
    requestQuery.endTime = endTime;
    requestQuery.name = name;
    requestQuery.permission = permission;
    requestQuery.group = group;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of evaluation forms
  * @memberOf QualityApi#
  * @param {integer} pageSize - The total page size requested
  * @param {integer} pageNumber - The page number requested
  * @param {string} sortBy - variable name requested to sort by
  * @param {string} nextPage - next page token
  * @param {string} previousPage - Previous page token
  * @param {string} expand - Expand
  * @param {string} name - Name
  */
QualityApi.prototype.getForms = function getForms(pageSize, pageNumber, sortBy, nextPage, previousPage, expand, name){
    var requestPath = '/api/v2/quality/forms';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.nextPage = nextPage;
    requestQuery.previousPage = previousPage;
    requestQuery.expand = expand;
    requestQuery.name = name;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create an evaluation form.
  * @memberOf QualityApi#
  * @param {} body - Evaluation form
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
      "nextUri": "",
      "previousUri": "",
      "lastUri": "",
      "firstUri": "",
      "pageCount": 0
   }
}
  */
QualityApi.prototype.postForms = function postForms(body){
    var requestPath = '/api/v2/quality/forms';
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
  * @summary Get an evaluation form
  * @memberOf QualityApi#
  * @param {string} formId - Form ID
  */
QualityApi.prototype.getFormsFormId = function getFormsFormId(formId){
    var requestPath = '/api/v2/quality/forms/{formId}';
    var requestQuery = {};
    var requestBody;

    if(formId === undefined || formId === null){
      throw new Error('Missing required  parameter: formId');
    }
    requestPath = requestPath.replace('{formId}', formId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update an evaluation form.
  * @memberOf QualityApi#
  * @param {string} formId - Form ID
  * @param {} body - Evaluation form
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
      "nextUri": "",
      "previousUri": "",
      "lastUri": "",
      "firstUri": "",
      "pageCount": 0
   }
}
  */
QualityApi.prototype.putFormsFormId = function putFormsFormId(formId, body){
    var requestPath = '/api/v2/quality/forms/{formId}';
    var requestQuery = {};
    var requestBody;

    if(formId === undefined || formId === null){
      throw new Error('Missing required  parameter: formId');
    }
    requestPath = requestPath.replace('{formId}', formId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete an evaluation form.
  * @memberOf QualityApi#
  * @param {string} formId - Form ID
  */
QualityApi.prototype.deleteFormsFormId = function deleteFormsFormId(formId){
    var requestPath = '/api/v2/quality/forms/{formId}';
    var requestQuery = {};
    var requestBody;

    if(formId === undefined || formId === null){
      throw new Error('Missing required  parameter: formId');
    }
    requestPath = requestPath.replace('{formId}', formId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Gets all the revisions for a specific evaluation.
  * @memberOf QualityApi#
  * @param {string} formId - Form ID
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  */
QualityApi.prototype.getFormsFormIdVersions = function getFormsFormIdVersions(formId, pageSize, pageNumber){
    var requestPath = '/api/v2/quality/forms/{formId}/versions';
    var requestQuery = {};
    var requestBody;

    if(formId === undefined || formId === null){
      throw new Error('Missing required  parameter: formId');
    }
    requestPath = requestPath.replace('{formId}', formId);
    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the list of keyword sets
  * @memberOf QualityApi#
  * @param {integer} pageSize - The total page size requested
  * @param {integer} pageNumber - The page number requested
  * @param {string} sortBy - variable name requested to sort by
  * @param {array} expand - variable name requested by expand list
  * @param {string} nextPage - next page token
  * @param {string} previousPage - Previous page token
  * @param {string} name - the keyword set name - used for filtering results in searches.
  */
QualityApi.prototype.getKeywordsets = function getKeywordsets(pageSize, pageNumber, sortBy, expand, nextPage, previousPage, name){
    var requestPath = '/api/v2/quality/keywordsets';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.sortBy = sortBy;
    requestQuery.expand = expand;
    requestQuery.nextPage = nextPage;
    requestQuery.previousPage = previousPage;
    requestQuery.name = name;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Create a Keyword Set
  * @memberOf QualityApi#
  * @param {} body - keywordSet
  * @param {string} expand - queueId
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
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
      "mediaSettings": {},
      "bullseye": {},
      "acwSettings": {},
      "skillEvaluationMethod": "",
      "queueFlow": {},
      "callingPartyName": "",
      "callingPartyNumber": "",
      "memberCount": 0
   },
   "queues": [],
   "language": "",
   "agents": [],
   "keywords": [],
   "participantPurposes": []
}
  */
QualityApi.prototype.postKeywordsets = function postKeywordsets(body, expand){
    var requestPath = '/api/v2/quality/keywordsets';
    var requestQuery = {};
    var requestBody;

    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    requestQuery.expand = expand;
    return this.session.makeRequest('POST', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete keyword sets
  * @description Bulk delete of keyword sets; this will only delete the keyword sets that match the ids specified in the query param.
  * @memberOf QualityApi#
  * @param {string} ids - A comma-delimited list of valid KeywordSet ids
  */
QualityApi.prototype.deleteKeywordsets = function deleteKeywordsets(ids){
    var requestPath = '/api/v2/quality/keywordsets';
    var requestQuery = {};
    var requestBody;

    if(ids === undefined || ids === null){
      throw new Error('Missing required  parameter: ids');
    }
    requestQuery.ids = ids;
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get a keywordSet by id.
  * @memberOf QualityApi#
  * @param {string} keywordSetId - KeywordSet ID
  */
QualityApi.prototype.getKeywordsetsKeywordsetId = function getKeywordsetsKeywordsetId(keywordSetId){
    var requestPath = '/api/v2/quality/keywordsets/{keywordSetId}';
    var requestQuery = {};
    var requestBody;

    if(keywordSetId === undefined || keywordSetId === null){
      throw new Error('Missing required  parameter: keywordSetId');
    }
    requestPath = requestPath.replace('{keywordSetId}', keywordSetId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Update a keywordSet to the specified keywordSet via PUT.
  * @memberOf QualityApi#
  * @param {string} keywordSetId - KeywordSet ID
  * @param {} body - keywordSet
  * @example
  * Body Example:
  * {
   "name": "",
   "description": "",
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
      "mediaSettings": {},
      "bullseye": {},
      "acwSettings": {},
      "skillEvaluationMethod": "",
      "queueFlow": {},
      "callingPartyName": "",
      "callingPartyNumber": "",
      "memberCount": 0
   },
   "queues": [],
   "language": "",
   "agents": [],
   "keywords": [],
   "participantPurposes": []
}
  */
QualityApi.prototype.putKeywordsetsKeywordsetId = function putKeywordsetsKeywordsetId(keywordSetId, body){
    var requestPath = '/api/v2/quality/keywordsets/{keywordSetId}';
    var requestQuery = {};
    var requestBody;

    if(keywordSetId === undefined || keywordSetId === null){
      throw new Error('Missing required  parameter: keywordSetId');
    }
    requestPath = requestPath.replace('{keywordSetId}', keywordSetId);
    if(body === undefined || body === null){
      throw new Error('Missing required  parameter: body');
    }
    if(body !== undefined && body !== null){
      requestBody = body;
    }
    return this.session.makeRequest('PUT', requestPath, requestQuery, requestBody);
};

/**
  * @summary Delete a keywordSet by id.
  * @memberOf QualityApi#
  * @param {string} keywordSetId - KeywordSet ID
  */
QualityApi.prototype.deleteKeywordsetsKeywordsetId = function deleteKeywordsetsKeywordsetId(keywordSetId){
    var requestPath = '/api/v2/quality/keywordsets/{keywordSetId}';
    var requestQuery = {};
    var requestBody;

    if(keywordSetId === undefined || keywordSetId === null){
      throw new Error('Missing required  parameter: keywordSetId');
    }
    requestPath = requestPath.replace('{keywordSetId}', keywordSetId);
    return this.session.makeRequest('DELETE', requestPath, requestQuery, requestBody);
};

/**
  * @summary Get the published evaluation forms.
  * @memberOf QualityApi#
  * @param {integer} pageSize - Page size
  * @param {integer} pageNumber - Page number
  * @param {string} name - Name
  */
QualityApi.prototype.getPublishedforms = function getPublishedforms(pageSize, pageNumber, name){
    var requestPath = '/api/v2/quality/publishedforms';
    var requestQuery = {};
    var requestBody;

    requestQuery.pageSize = pageSize;
    requestQuery.pageNumber = pageNumber;
    requestQuery.name = name;
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};

/**
  * @summary Publish an evaluation form.
  * @memberOf QualityApi#
  * @param {} body - Evaluation form
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
      "nextUri": "",
      "previousUri": "",
      "lastUri": "",
      "firstUri": "",
      "pageCount": 0
   }
}
  */
QualityApi.prototype.postPublishedforms = function postPublishedforms(body){
    var requestPath = '/api/v2/quality/publishedforms';
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
  * @summary Get the published evaluation forms.
  * @memberOf QualityApi#
  * @param {string} formId - Form ID
  */
QualityApi.prototype.getPublishedformsFormId = function getPublishedformsFormId(formId){
    var requestPath = '/api/v2/quality/publishedforms/{formId}';
    var requestQuery = {};
    var requestBody;

    if(formId === undefined || formId === null){
      throw new Error('Missing required  parameter: formId');
    }
    requestPath = requestPath.replace('{formId}', formId);
    return this.session.makeRequest('GET', requestPath, requestQuery, requestBody);
};


module.exports = QualityApi;
