if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.configuration";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.configuration = (function (PureCloud) {
	/**
	* @namespace configuration/didpools
	**/
	/**
	* @namespace configuration/dids
	**/
	/**
	* @namespace configuration/edgegroups
	**/
	/**
	* @namespace configuration/edges
	**/
	/**
	* @namespace configuration/edges/certificateauthorities
	**/
	/**
	* @namespace configuration/edges/lines
	**/
	/**
	* @namespace configuration/edges/logicalinterfaces
	**/
	/**
	* @namespace configuration/edges/physicalinterfaces
	**/
	/**
	* @namespace configuration/edges/reboot
	**/
	/**
	* @namespace configuration/edges/softwareupdate
	**/
	/**
	* @namespace configuration/edges/softwareversions
	**/
	/**
	* @namespace configuration/edgeversionreport
	**/
	/**
	* @namespace configuration/endpoints
	**/
	/**
	* @namespace configuration/extensionpools
	**/
	/**
	* @namespace configuration/extensions
	**/
	/**
	* @namespace configuration/organization
	**/
	/**
	* @namespace configuration/organizations
	**/
	/**
	* @namespace configuration/outboundroutes
	**/
	/**
	* @namespace configuration/recordingkeys
	**/
	/**
	* @namespace configuration/recordingkeys/rotationschedule
	**/
	/**
	* @namespace configuration/retentionpolicies
	**/
	/**
	* @namespace configuration/schemas/edges/vnext
	**/
	/**
	* @namespace configuration/sites
	**/
	/**
	* @namespace configuration/sites/numberplans
	**/
	/**
	* @namespace configuration/sites/numberplans/classifications
	**/
	/**
	* @namespace configuration/sites/rebalance
	**/
	/**
	* @namespace configuration/uservoicemailpolicies
	**/
	/**
	* @namespace configuration/voicemailpolicy
	**/

	var self = {};
	self.didpools = self.didpools || {};

	/**
     * 
     * @method getDidPools
	 * @memberof configuration/didpools

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number

	* @param {string} sortBy - Sort by
	 *
     */
     self.didpools.getDidPools = function(pageSize, pageNumber, sortBy){
		var path = '/api/v1/configuration/didpools';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.didpools = self.didpools || {};

	/**
     * 
     * @method createDidPool
	 * @memberof configuration/didpools

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "provider": "",
   "selfUri": ""
}
	 *
     */
     self.didpools.createDidPool = function(body){
		var path = '/api/v1/configuration/didpools';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.didpools = self.didpools || {};

	/**
     * 
     * @method getADidPool
	 * @memberof configuration/didpools

	* @param {string} didPoolId - DID pool ID
	 *
     */
     self.didpools.getADidPool = function(didPoolId){
		var path = '/api/v1/configuration/didpools/{didPoolId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{didPoolId}', didPoolId);

        if(didPoolId === undefined && didPoolId !== null){
			throw 'Missing required  parameter: didPoolId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.didpools = self.didpools || {};

	/**
     * 
     * @method updateADidPool
	 * @memberof configuration/didpools

	* @param {string} didPoolId - DID pool ID

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "provider": "",
   "selfUri": ""
}
	 *
     */
     self.didpools.updateADidPool = function(didPoolId, body){
		var path = '/api/v1/configuration/didpools/{didPoolId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{didPoolId}', didPoolId);

        if(didPoolId === undefined && didPoolId !== null){
			throw 'Missing required  parameter: didPoolId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.didpools = self.didpools || {};

	/**
     * 
     * @method deleteADidPool
	 * @memberof configuration/didpools

	* @param {string} didPoolId - DID pool ID
	 *
     */
     self.didpools.deleteADidPool = function(didPoolId){
		var path = '/api/v1/configuration/didpools/{didPoolId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{didPoolId}', didPoolId);

        if(didPoolId === undefined && didPoolId !== null){
			throw 'Missing required  parameter: didPoolId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.dids = self.dids || {};

	/**
     * 
     * @method getDids
	 * @memberof configuration/dids

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number

	* @param {string} sortBy - Sort by

	* @param {string} sortOrder - Sort order

	* @param {string} phoneNumber - Filter by phoneNumber
	 *
     */
     self.dids.getDids = function(pageSize, pageNumber, sortBy, sortOrder, phoneNumber){
		var path = '/api/v1/configuration/dids';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.dids = self.dids || {};

	/**
     * 
     * @method getADid
	 * @memberof configuration/dids

	* @param {string} didId - DID ID
	 *
     */
     self.dids.getADid = function(didId){
		var path = '/api/v1/configuration/dids/{didId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{didId}', didId);

        if(didId === undefined && didId !== null){
			throw 'Missing required  parameter: didId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.dids = self.dids || {};

	/**
     * 
     * @method updateADid
	 * @memberof configuration/dids

	* @param {string} didId - DID ID

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "ownerType": "",
   "selfUri": ""
}
	 *
     */
     self.dids.updateADid = function(didId, body){
		var path = '/api/v1/configuration/dids/{didId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{didId}', didId);

        if(didId === undefined && didId !== null){
			throw 'Missing required  parameter: didId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edgegroups = self.edgegroups || {};

	/**
     * 
     * @method getEdgeGroups
	 * @memberof configuration/edgegroups

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number

	* @param {string} name - Name

	* @param {string} sortBy - Sort by
	 *
     */
     self.edgegroups.getEdgeGroups = function(pageSize, pageNumber, name, sortBy){
		var path = '/api/v1/configuration/edgegroups';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edgegroups = self.edgegroups || {};

	/**
     * 
     * @method createEdgeGroup
	 * @memberof configuration/edgegroups

	* @param {} body - EdgeGroup
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "selfUri": ""
}
	 *
     */
     self.edgegroups.createEdgeGroup = function(body){
		var path = '/api/v1/configuration/edgegroups';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edgegroups = self.edgegroups || {};

	/**
     * 
     * @method getEdgeGroup
	 * @memberof configuration/edgegroups

	* @param {string} edgeGroupId - Edge group ID
	 *
     */
     self.edgegroups.getEdgeGroup = function(edgeGroupId){
		var path = '/api/v1/configuration/edgegroups/{edgeGroupId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{edgeGroupId}', edgeGroupId);

        if(edgeGroupId === undefined && edgeGroupId !== null){
			throw 'Missing required  parameter: edgeGroupId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edgegroups = self.edgegroups || {};

	/**
     * 
     * @method updateEdgeGroup
	 * @memberof configuration/edgegroups

	* @param {string} edgeGroupId - Edge group ID

	* @param {} body - EdgeGroup
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "selfUri": ""
}
	 *
     */
     self.edgegroups.updateEdgeGroup = function(edgeGroupId, body){
		var path = '/api/v1/configuration/edgegroups/{edgeGroupId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{edgeGroupId}', edgeGroupId);

        if(edgeGroupId === undefined && edgeGroupId !== null){
			throw 'Missing required  parameter: edgeGroupId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edgegroups = self.edgegroups || {};

	/**
     * 
     * @method deleteEdgeGroup
	 * @memberof configuration/edgegroups

	* @param {string} edgeGroupId - Edge group ID
	 *
     */
     self.edgegroups.deleteEdgeGroup = function(edgeGroupId){
		var path = '/api/v1/configuration/edgegroups/{edgeGroupId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{edgeGroupId}', edgeGroupId);

        if(edgeGroupId === undefined && edgeGroupId !== null){
			throw 'Missing required  parameter: edgeGroupId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edges = self.edges || {};

	/**
     * 
     * @method getEdges
	 * @memberof configuration/edges

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number

	* @param {string} name - Name

	* @param {string} siteid - Filter by site.id

	* @param {string} edgeGroupid - Filter by edgeGroup.id

	* @param {string} sortBy - Sort by
	 *
     */
     self.edges.getEdges = function(pageSize, pageNumber, name, siteid, edgeGroupid, sortBy){
		var path = '/api/v1/configuration/edges';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edges = self.edges || {};

	/**
     * 
     * @method createEdge
	 * @memberof configuration/edges

	* @param {} body - Edge
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
      "id": "",
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
      "selfUri": ""
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
   "selfUri": ""
}
	 *
     */
     self.edges.createEdge = function(body){
		var path = '/api/v1/configuration/edges';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edges = self.edges || {};
	self.edges.certificateauthorities = self.edges.certificateauthorities || {};

	/**
     * 
     * @method getCertificateAuthorities
	 * @memberof configuration/edges/certificateauthorities
	 *
     */
     self.edges.certificateauthorities.getCertificateAuthorities = function(){
		var path = '/api/v1/configuration/edges/certificateauthorities';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edges = self.edges || {};
	self.edges.certificateauthorities = self.edges.certificateauthorities || {};

	/**
     * 
     * @method createCertificateAuthority
	 * @memberof configuration/edges/certificateauthorities

	* @param {} body - CertificateAuthority
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "certificateDetails": [],
   "selfUri": ""
}
	 *
     */
     self.edges.certificateauthorities.createCertificateAuthority = function(body){
		var path = '/api/v1/configuration/edges/certificateauthorities';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edges = self.edges || {};
	self.edges.certificateauthorities = self.edges.certificateauthorities || {};

	/**
     * 
     * @method getCertificateAuthority
	 * @memberof configuration/edges/certificateauthorities

	* @param {string} certificateId - Certificate ID
	 *
     */
     self.edges.certificateauthorities.getCertificateAuthority = function(certificateId){
		var path = '/api/v1/configuration/edges/certificateauthorities/{certificateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{certificateId}', certificateId);

        if(certificateId === undefined && certificateId !== null){
			throw 'Missing required  parameter: certificateId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edges = self.edges || {};
	self.edges.certificateauthorities = self.edges.certificateauthorities || {};

	/**
     * 
     * @method updateCertificateAuthority
	 * @memberof configuration/edges/certificateauthorities

	* @param {string} certificateId - Certificate ID

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "certificateDetails": [],
   "selfUri": ""
}
	 *
     */
     self.edges.certificateauthorities.updateCertificateAuthority = function(certificateId, body){
		var path = '/api/v1/configuration/edges/certificateauthorities/{certificateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{certificateId}', certificateId);

        if(certificateId === undefined && certificateId !== null){
			throw 'Missing required  parameter: certificateId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edges = self.edges || {};
	self.edges.certificateauthorities = self.edges.certificateauthorities || {};

	/**
     * 
     * @method deleteCertificateAuthority
	 * @memberof configuration/edges/certificateauthorities

	* @param {string} certificateId - Certificate ID
	 *
     */
     self.edges.certificateauthorities.deleteCertificateAuthority = function(certificateId){
		var path = '/api/v1/configuration/edges/certificateauthorities/{certificateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{certificateId}', certificateId);

        if(certificateId === undefined && certificateId !== null){
			throw 'Missing required  parameter: certificateId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edges = self.edges || {};

	/**
     * 
     * @method getEdge
	 * @memberof configuration/edges

	* @param {string} edgeId - Edge ID
	 *
     */
     self.edges.getEdge = function(edgeId){
		var path = '/api/v1/configuration/edges/{edgeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edges = self.edges || {};

	/**
     * 
     * @method updateEdge
	 * @memberof configuration/edges

	* @param {string} edgeId - Edge ID

	* @param {} body - Edge
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
      "id": "",
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
      "selfUri": ""
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
   "selfUri": ""
}
	 *
     */
     self.edges.updateEdge = function(edgeId, body){
		var path = '/api/v1/configuration/edges/{edgeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edges = self.edges || {};

	/**
     * 
     * @method deleteEdge
	 * @memberof configuration/edges

	* @param {string} edgeId - Edge ID
	 *
     */
     self.edges.deleteEdge = function(edgeId){
		var path = '/api/v1/configuration/edges/{edgeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edges = self.edges || {};
	self.edges.lines = self.edges.lines || {};

	/**
     * 
     * @method getLines
	 * @memberof configuration/edges/lines

	* @param {string} edgeId - Edge ID

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number
	 *
     */
     self.edges.lines.getLines = function(edgeId, pageSize, pageNumber){
		var path = '/api/v1/configuration/edges/{edgeId}/lines';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edges = self.edges || {};
	self.edges.lines = self.edges.lines || {};

	/**
     * 
     * @method getLine
	 * @memberof configuration/edges/lines

	* @param {string} edgeId - Edge ID

	* @param {string} lineId - Line ID
	 *
     */
     self.edges.lines.getLine = function(edgeId, lineId){
		var path = '/api/v1/configuration/edges/{edgeId}/lines/{lineId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        path = path.replace('{lineId}', lineId);

        if(lineId === undefined && lineId !== null){
			throw 'Missing required  parameter: lineId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edges = self.edges || {};
	self.edges.lines = self.edges.lines || {};

	/**
     * 
     * @method updateLine
	 * @memberof configuration/edges/lines

	* @param {string} edgeId - Edge ID

	* @param {string} lineId - Line ID

	* @param {} body - Line
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "schema": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "properties": {},
   "edge": {
      "id": "",
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
      "selfUri": ""
   },
   "edgeGroup": {
      "id": "",
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
      "selfUri": ""
   },
   "lineType": "",
   "endpoint": {
      "id": "",
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
      "dids": [],
      "selfUri": ""
   },
   "ipAddress": "",
   "logicalInterfaceId": "",
   "selfUri": ""
}
	 *
     */
     self.edges.lines.updateLine = function(edgeId, lineId, body){
		var path = '/api/v1/configuration/edges/{edgeId}/lines/{lineId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        path = path.replace('{lineId}', lineId);

        if(lineId === undefined && lineId !== null){
			throw 'Missing required  parameter: lineId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edges = self.edges || {};
	self.edges.logicalinterfaces = self.edges.logicalinterfaces || {};

	/**
     * Retrieve a list of all configured logical interfaces from a specific edge.
     * @method getEdgeLogicalInterfaces
	 * @memberof configuration/edges/logicalinterfaces

	* @param {string} edgeId - Edge ID
	 *
     */
     self.edges.logicalinterfaces.getEdgeLogicalInterfaces = function(edgeId){
		var path = '/api/v1/configuration/edges/{edgeId}/logicalinterfaces';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edges = self.edges || {};
	self.edges.logicalinterfaces = self.edges.logicalinterfaces || {};

	/**
     * Create
     * @method createEdgeLogicalInterface
	 * @memberof configuration/edges/logicalinterfaces

	* @param {string} edgeId - Edge ID

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "selfUri": ""
}
	 *
     */
     self.edges.logicalinterfaces.createEdgeLogicalInterface = function(edgeId, body){
		var path = '/api/v1/configuration/edges/{edgeId}/logicalinterfaces';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edges = self.edges || {};
	self.edges.logicalinterfaces = self.edges.logicalinterfaces || {};

	/**
     * 
     * @method getEdgeLogicalInterface
	 * @memberof configuration/edges/logicalinterfaces

	* @param {string} edgeId - Edge ID

	* @param {string} interfaceId - Interface ID
	 *
     */
     self.edges.logicalinterfaces.getEdgeLogicalInterface = function(edgeId, interfaceId){
		var path = '/api/v1/configuration/edges/{edgeId}/logicalinterfaces/{interfaceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        path = path.replace('{interfaceId}', interfaceId);

        if(interfaceId === undefined && interfaceId !== null){
			throw 'Missing required  parameter: interfaceId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edges = self.edges || {};
	self.edges.logicalinterfaces = self.edges.logicalinterfaces || {};

	/**
     * 
     * @method updateEdgeLogicalInterface
	 * @memberof configuration/edges/logicalinterfaces

	* @param {string} edgeId - Edge ID

	* @param {string} interfaceId - Interface ID

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "selfUri": ""
}
	 *
     */
     self.edges.logicalinterfaces.updateEdgeLogicalInterface = function(edgeId, interfaceId, body){
		var path = '/api/v1/configuration/edges/{edgeId}/logicalinterfaces/{interfaceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        path = path.replace('{interfaceId}', interfaceId);

        if(interfaceId === undefined && interfaceId !== null){
			throw 'Missing required  parameter: interfaceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edges = self.edges || {};
	self.edges.logicalinterfaces = self.edges.logicalinterfaces || {};

	/**
     * 
     * @method deleteEdgeLogicalInterface
	 * @memberof configuration/edges/logicalinterfaces

	* @param {string} edgeId - Edge ID

	* @param {string} interfaceId - Interface ID
	 *
     */
     self.edges.logicalinterfaces.deleteEdgeLogicalInterface = function(edgeId, interfaceId){
		var path = '/api/v1/configuration/edges/{edgeId}/logicalinterfaces/{interfaceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        path = path.replace('{interfaceId}', interfaceId);

        if(interfaceId === undefined && interfaceId !== null){
			throw 'Missing required  parameter: interfaceId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edges = self.edges || {};
	self.edges.physicalinterfaces = self.edges.physicalinterfaces || {};

	/**
     * 
     * @method getEdgePhysicalInterfaces
	 * @memberof configuration/edges/physicalinterfaces

	* @param {string} edgeId - Edge ID
	 *
     */
     self.edges.physicalinterfaces.getEdgePhysicalInterfaces = function(edgeId){
		var path = '/api/v1/configuration/edges/{edgeId}/physicalinterfaces';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edges = self.edges || {};
	self.edges.physicalinterfaces = self.edges.physicalinterfaces || {};

	/**
     * Retrieve a physical interface from a specific edge.
     * @method getEdgePhysicalInterface
	 * @memberof configuration/edges/physicalinterfaces

	* @param {string} edgeId - Edge ID

	* @param {string} interfaceId - Interface ID
	 *
     */
     self.edges.physicalinterfaces.getEdgePhysicalInterface = function(edgeId, interfaceId){
		var path = '/api/v1/configuration/edges/{edgeId}/physicalinterfaces/{interfaceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        path = path.replace('{interfaceId}', interfaceId);

        if(interfaceId === undefined && interfaceId !== null){
			throw 'Missing required  parameter: interfaceId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edges = self.edges || {};
	self.edges.reboot = self.edges.reboot || {};

	/**
     * 
     * @method rebootEdge
	 * @memberof configuration/edges/reboot

	* @param {string} edgeId - Edge ID
	 *
     */
     self.edges.reboot.rebootEdge = function(edgeId){
		var path = '/api/v1/configuration/edges/{edgeId}/reboot';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edges = self.edges || {};
	self.edges.softwareupdate = self.edges.softwareupdate || {};

	/**
     * 
     * @method getEdgeSoftwareUpdate
	 * @memberof configuration/edges/softwareupdate

	* @param {string} edgeId - Edge ID
	 *
     */
     self.edges.softwareupdate.getEdgeSoftwareUpdate = function(edgeId){
		var path = '/api/v1/configuration/edges/{edgeId}/softwareupdate';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edges = self.edges || {};
	self.edges.softwareupdate = self.edges.softwareupdate || {};

	/**
     * 
     * @method beginAnEdgeSoftwareUpdate
	 * @memberof configuration/edges/softwareupdate

	* @param {string} edgeId - Edge ID

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "version": {
      "id": "",
      "name": "",
      "edgeVersion": "",
      "publishDate": "",
      "edgeUri": "",
      "current": true,
      "latestRelease": true,
      "selfUri": ""
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
	 *
     */
     self.edges.softwareupdate.beginAnEdgeSoftwareUpdate = function(edgeId, body){
		var path = '/api/v1/configuration/edges/{edgeId}/softwareupdate';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edges = self.edges || {};
	self.edges.softwareupdate = self.edges.softwareupdate || {};

	/**
     * 
     * @method cancelAnEdgeSoftwareUpdate
	 * @memberof configuration/edges/softwareupdate

	* @param {string} edgeId - Edge ID
	 *
     */
     self.edges.softwareupdate.cancelAnEdgeSoftwareUpdate = function(edgeId){
		var path = '/api/v1/configuration/edges/{edgeId}/softwareupdate';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edges = self.edges || {};
	self.edges.softwareversions = self.edges.softwareversions || {};

	/**
     * 
     * @method getEdgeSoftwareVersions
	 * @memberof configuration/edges/softwareversions

	* @param {string} edgeId - Edge ID
	 *
     */
     self.edges.softwareversions.getEdgeSoftwareVersions = function(edgeId){
		var path = '/api/v1/configuration/edges/{edgeId}/softwareversions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.edgeversionreport = self.edgeversionreport || {};

	/**
     * The report will not have consistent data about the edge version(s) until all edges have been reset.
     * @method getEdgeVersionReport
	 * @memberof configuration/edgeversionreport
	 *
     */
     self.edgeversionreport.getEdgeVersionReport = function(){
		var path = '/api/v1/configuration/edgeversionreport';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.endpoints = self.endpoints || {};

	/**
     * 
     * @method getEndpoints
	 * @memberof configuration/endpoints

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number

	* @param {string} name - Name

	* @param {string} sortBy - Sort by
	 *
     */
     self.endpoints.getEndpoints = function(pageSize, pageNumber, name, sortBy){
		var path = '/api/v1/configuration/endpoints';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.endpoints = self.endpoints || {};

	/**
     * 
     * @method createEndpoint
	 * @memberof configuration/endpoints

	* @param {} body - EndpointTemplate
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "dids": [],
   "selfUri": ""
}
	 *
     */
     self.endpoints.createEndpoint = function(body){
		var path = '/api/v1/configuration/endpoints';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.endpoints = self.endpoints || {};

	/**
     * 
     * @method getEndpoint
	 * @memberof configuration/endpoints

	* @param {string} endpointId - Endpoint ID
	 *
     */
     self.endpoints.getEndpoint = function(endpointId){
		var path = '/api/v1/configuration/endpoints/{endpointId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{endpointId}', endpointId);

        if(endpointId === undefined && endpointId !== null){
			throw 'Missing required  parameter: endpointId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.endpoints = self.endpoints || {};

	/**
     * 
     * @method updateEndpoint
	 * @memberof configuration/endpoints

	* @param {string} endpointId - Endpoint ID

	* @param {} body - EndpointTemplate
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "dids": [],
   "selfUri": ""
}
	 *
     */
     self.endpoints.updateEndpoint = function(endpointId, body){
		var path = '/api/v1/configuration/endpoints/{endpointId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{endpointId}', endpointId);

        if(endpointId === undefined && endpointId !== null){
			throw 'Missing required  parameter: endpointId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.endpoints = self.endpoints || {};

	/**
     * 
     * @method deleteEndpoint
	 * @memberof configuration/endpoints

	* @param {string} endpointId - Endpoint ID
	 *
     */
     self.endpoints.deleteEndpoint = function(endpointId){
		var path = '/api/v1/configuration/endpoints/{endpointId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{endpointId}', endpointId);

        if(endpointId === undefined && endpointId !== null){
			throw 'Missing required  parameter: endpointId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.extensionpools = self.extensionpools || {};

	/**
     * 
     * @method getExtensionPools
	 * @memberof configuration/extensionpools

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number

	* @param {string} sortBy - Sort by

	* @param {string} number - Number
	 *
     */
     self.extensionpools.getExtensionPools = function(pageSize, pageNumber, sortBy, number){
		var path = '/api/v1/configuration/extensionpools';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.extensionpools = self.extensionpools || {};

	/**
     * 
     * @method createAnExtensionPool
	 * @memberof configuration/extensionpools

	* @param {} body - ExtensionPool
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "endNumber": "",
   "selfUri": ""
}
	 *
     */
     self.extensionpools.createAnExtensionPool = function(body){
		var path = '/api/v1/configuration/extensionpools';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.extensionpools = self.extensionpools || {};

	/**
     * 
     * @method getAnExtensionPool
	 * @memberof configuration/extensionpools

	* @param {string} extensionPoolId - Extension pool ID
	 *
     */
     self.extensionpools.getAnExtensionPool = function(extensionPoolId){
		var path = '/api/v1/configuration/extensionpools/{extensionPoolId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{extensionPoolId}', extensionPoolId);

        if(extensionPoolId === undefined && extensionPoolId !== null){
			throw 'Missing required  parameter: extensionPoolId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.extensionpools = self.extensionpools || {};

	/**
     * 
     * @method updateAnExtensionPool
	 * @memberof configuration/extensionpools

	* @param {string} extensionPoolId - Extension pool ID

	* @param {} body - ExtensionPool
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "endNumber": "",
   "selfUri": ""
}
	 *
     */
     self.extensionpools.updateAnExtensionPool = function(extensionPoolId, body){
		var path = '/api/v1/configuration/extensionpools/{extensionPoolId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{extensionPoolId}', extensionPoolId);

        if(extensionPoolId === undefined && extensionPoolId !== null){
			throw 'Missing required  parameter: extensionPoolId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.extensionpools = self.extensionpools || {};

	/**
     * 
     * @method deleteAnExtensionPool
	 * @memberof configuration/extensionpools

	* @param {string} extensionPoolId - Extension pool ID
	 *
     */
     self.extensionpools.deleteAnExtensionPool = function(extensionPoolId){
		var path = '/api/v1/configuration/extensionpools/{extensionPoolId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{extensionPoolId}', extensionPoolId);

        if(extensionPoolId === undefined && extensionPoolId !== null){
			throw 'Missing required  parameter: extensionPoolId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.extensions = self.extensions || {};

	/**
     * 
     * @method getExtensions
	 * @memberof configuration/extensions

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number

	* @param {string} sortBy - Sort by

	* @param {string} sortOrder - Sort order

	* @param {string} number - Filter by number
	 *
     */
     self.extensions.getExtensions = function(pageSize, pageNumber, sortBy, sortOrder, number){
		var path = '/api/v1/configuration/extensions';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.extensions = self.extensions || {};

	/**
     * 
     * @method getAnExtension
	 * @memberof configuration/extensions

	* @param {string} extensionId - Extension ID
	 *
     */
     self.extensions.getAnExtension = function(extensionId){
		var path = '/api/v1/configuration/extensions/{extensionId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{extensionId}', extensionId);

        if(extensionId === undefined && extensionId !== null){
			throw 'Missing required  parameter: extensionId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.extensions = self.extensions || {};

	/**
     * 
     * @method updateAnExtension
	 * @memberof configuration/extensions

	* @param {string} extensionId - Extension ID

	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "ownerType": "",
   "selfUri": ""
}
	 *
     */
     self.extensions.updateAnExtension = function(extensionId, body){
		var path = '/api/v1/configuration/extensions/{extensionId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{extensionId}', extensionId);

        if(extensionId === undefined && extensionId !== null){
			throw 'Missing required  parameter: extensionId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.organization = self.organization || {};

	/**
     * 
     * @method getContextOrganization
	 * @memberof configuration/organization
	 *
     */
     self.organization.getContextOrganization = function(){
		var path = '/api/v1/configuration/organization';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.organization = self.organization || {};

	/**
     * 
     * @method updateContextOrganization
	 * @memberof configuration/organization

	* @param {} body - Organization
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "deletable": true,
   "selfUri": ""
}
	 *
     */
     self.organization.updateContextOrganization = function(body){
		var path = '/api/v1/configuration/organization';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.organizations = self.organizations || {};

	/**
     * 
     * @method createOrganization
	 * @memberof configuration/organizations

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
	 *
     */
     self.organizations.createOrganization = function(body){
		var path = '/api/v1/configuration/organizations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.organizations = self.organizations || {};

	/**
     * 
     * @method getOrganization
	 * @memberof configuration/organizations

	* @param {string} orgId - Organization ID
	 *
     */
     self.organizations.getOrganization = function(orgId){
		var path = '/api/v1/configuration/organizations/{orgId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{orgId}', orgId);

        if(orgId === undefined && orgId !== null){
			throw 'Missing required  parameter: orgId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.organizations = self.organizations || {};

	/**
     * 
     * @method updateOrganization
	 * @memberof configuration/organizations

	* @param {string} orgId - Organization ID

	* @param {} body - Organization
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "deletable": true,
   "selfUri": ""
}
	 *
     */
     self.organizations.updateOrganization = function(orgId, body){
		var path = '/api/v1/configuration/organizations/{orgId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{orgId}', orgId);

        if(orgId === undefined && orgId !== null){
			throw 'Missing required  parameter: orgId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.organizations = self.organizations || {};

	/**
     * 
     * @method deleteOrganization
	 * @memberof configuration/organizations

	* @param {string} orgId - Organization ID
	 *
     */
     self.organizations.deleteOrganization = function(orgId){
		var path = '/api/v1/configuration/organizations/{orgId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{orgId}', orgId);

        if(orgId === undefined && orgId !== null){
			throw 'Missing required  parameter: orgId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.outboundroutes = self.outboundroutes || {};

	/**
     * 
     * @method getOutboundRoutes
	 * @memberof configuration/outboundroutes

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number

	* @param {string} name - Name

	* @param {string} siteid - Filter by site.id

	* @param {string} sortBy - Sort by
	 *
     */
     self.outboundroutes.getOutboundRoutes = function(pageSize, pageNumber, name, siteid, sortBy){
		var path = '/api/v1/configuration/outboundroutes';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.outboundroutes = self.outboundroutes || {};

	/**
     * 
     * @method createOutboundRule
	 * @memberof configuration/outboundroutes

	* @param {} body - OutboundRoute
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
      "id": "",
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
      "selfUri": ""
   },
   "classificationTypes": [],
   "enabled": true,
   "endpoints": [],
   "distribution": "",
   "selfUri": ""
}
	 *
     */
     self.outboundroutes.createOutboundRule = function(body){
		var path = '/api/v1/configuration/outboundroutes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.outboundroutes = self.outboundroutes || {};

	/**
     * 
     * @method getOutboundRoute
	 * @memberof configuration/outboundroutes

	* @param {string} outboundRouteId - Outbound route ID
	 *
     */
     self.outboundroutes.getOutboundRoute = function(outboundRouteId){
		var path = '/api/v1/configuration/outboundroutes/{outboundRouteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{outboundRouteId}', outboundRouteId);

        if(outboundRouteId === undefined && outboundRouteId !== null){
			throw 'Missing required  parameter: outboundRouteId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.outboundroutes = self.outboundroutes || {};

	/**
     * 
     * @method updateOutboundRoute
	 * @memberof configuration/outboundroutes

	* @param {string} outboundRouteId - Outbound route ID

	* @param {} body - OutboundRoute
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
      "id": "",
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
      "selfUri": ""
   },
   "classificationTypes": [],
   "enabled": true,
   "endpoints": [],
   "distribution": "",
   "selfUri": ""
}
	 *
     */
     self.outboundroutes.updateOutboundRoute = function(outboundRouteId, body){
		var path = '/api/v1/configuration/outboundroutes/{outboundRouteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{outboundRouteId}', outboundRouteId);

        if(outboundRouteId === undefined && outboundRouteId !== null){
			throw 'Missing required  parameter: outboundRouteId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.outboundroutes = self.outboundroutes || {};

	/**
     * 
     * @method deleteOutboundRoute
	 * @memberof configuration/outboundroutes

	* @param {string} outboundRouteId - Outbound route ID
	 *
     */
     self.outboundroutes.deleteOutboundRoute = function(outboundRouteId){
		var path = '/api/v1/configuration/outboundroutes/{outboundRouteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{outboundRouteId}', outboundRouteId);

        if(outboundRouteId === undefined && outboundRouteId !== null){
			throw 'Missing required  parameter: outboundRouteId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.recordingkeys = self.recordingkeys || {};

	/**
     * 
     * @method getEncryptionKeys
	 * @memberof configuration/recordingkeys

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number
	 *
     */
     self.recordingkeys.getEncryptionKeys = function(pageSize, pageNumber){
		var path = '/api/v1/configuration/recordingkeys';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.recordingkeys = self.recordingkeys || {};

	/**
     * 
     * @method createEncryptionkey
	 * @memberof configuration/recordingkeys
	 *
     */
     self.recordingkeys.createEncryptionkey = function(){
		var path = '/api/v1/configuration/recordingkeys';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.recordingkeys = self.recordingkeys || {};
	self.recordingkeys.rotationschedule = self.recordingkeys.rotationschedule || {};

	/**
     * 
     * @method getKeyRotationSchedule
	 * @memberof configuration/recordingkeys/rotationschedule
	 *
     */
     self.recordingkeys.rotationschedule.getKeyRotationSchedule = function(){
		var path = '/api/v1/configuration/recordingkeys/rotationschedule';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.recordingkeys = self.recordingkeys || {};
	self.recordingkeys.rotationschedule = self.recordingkeys.rotationschedule || {};

	/**
     * 
     * @method updateKeyRotationSchedule
	 * @memberof configuration/recordingkeys/rotationschedule

	* @param {} body - KeyRotationSchedule
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "period": "",
   "selfUri": ""
}
	 *
     */
     self.recordingkeys.rotationschedule.updateKeyRotationSchedule = function(body){
		var path = '/api/v1/configuration/recordingkeys/rotationschedule';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.retentionpolicies = self.retentionpolicies || {};

	/**
     * for a less verbose response, add summary=true to this endpoint
     * @method getRetentionPolicies
	 * @memberof configuration/retentionpolicies

	* @param {integer} pageSize - The total page size requested

	* @param {integer} pageNumber - The page number requested

	* @param {string} sortBy - variable name requested to sort by

	* @param {array} expand - variable name requested by expand list

	* @param {string} name - the policy name - used for filtering results in searches.

	* @param {boolean} enabled - checks to see if policy is enabled - use enabled = true or enabled = false

	* @param {boolean} summary - provides a less verbose response of policy lists.
	 *
     */
     self.retentionpolicies.getRetentionPolicies = function(pageSize, pageNumber, sortBy, expand, name, enabled, summary){
		var path = '/api/v1/configuration/retentionpolicies';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.retentionpolicies = self.retentionpolicies || {};

	/**
     * 
     * @method createRetentionPolicy
	 * @memberof configuration/retentionpolicies

	* @param {} body - Policy
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "modifiedDate": "",
   "createdDate": "",
   "order": 0,
   "description": "",
   "enabled": true,
   "conditions": {
      "forUsers": [],
      "directions": [],
      "dateRanges": [],
      "mediaTypes": [],
      "forQueues": [],
      "duration": {},
      "wrapupCodes": []
   },
   "actions": {
      "retainRecording": true,
      "deleteRecording": true,
      "assignEvaluations": [],
      "assignMeteredEvaluations": [],
      "assignCalibrations": [],
      "retentionDuration": {}
   },
   "selfUri": ""
}
	 *
     */
     self.retentionpolicies.createRetentionPolicy = function(body){
		var path = '/api/v1/configuration/retentionpolicies';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.retentionpolicies = self.retentionpolicies || {};

	/**
     * Bulk delete of Rules from specified rule set, this will only delete the rules that match the ids specified in the query param.
     * @method deletePolicies
	 * @memberof configuration/retentionpolicies

	* @param {string} ids - 
	 *
     */
     self.retentionpolicies.deletePolicies = function(ids){
		var path = '/api/v1/configuration/retentionpolicies';
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



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.retentionpolicies = self.retentionpolicies || {};

	/**
     * 
     * @method getPolicy
	 * @memberof configuration/retentionpolicies

	* @param {string} policyId - Policy ID
	 *
     */
     self.retentionpolicies.getPolicy = function(policyId){
		var path = '/api/v1/configuration/retentionpolicies/{policyId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{policyId}', policyId);

        if(policyId === undefined && policyId !== null){
			throw 'Missing required  parameter: policyId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.retentionpolicies = self.retentionpolicies || {};

	/**
     * 
     * @method updatePolicy
	 * @memberof configuration/retentionpolicies

	* @param {string} policyId - Policy ID

	* @param {} body - Policy
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "modifiedDate": "",
   "createdDate": "",
   "order": 0,
   "description": "",
   "enabled": true,
   "conditions": {
      "forUsers": [],
      "directions": [],
      "dateRanges": [],
      "mediaTypes": [],
      "forQueues": [],
      "duration": {},
      "wrapupCodes": []
   },
   "actions": {
      "retainRecording": true,
      "deleteRecording": true,
      "assignEvaluations": [],
      "assignMeteredEvaluations": [],
      "assignCalibrations": [],
      "retentionDuration": {}
   },
   "selfUri": ""
}
	 *
     */
     self.retentionpolicies.updatePolicy = function(policyId, body){
		var path = '/api/v1/configuration/retentionpolicies/{policyId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{policyId}', policyId);

        if(policyId === undefined && policyId !== null){
			throw 'Missing required  parameter: policyId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.retentionpolicies = self.retentionpolicies || {};

	/**
     * 
     * @method deletePolicy
	 * @memberof configuration/retentionpolicies

	* @param {string} policyId - Policy ID
	 *
     */
     self.retentionpolicies.deletePolicy = function(policyId){
		var path = '/api/v1/configuration/retentionpolicies/{policyId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{policyId}', policyId);

        if(policyId === undefined && policyId !== null){
			throw 'Missing required  parameter: policyId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.retentionpolicies = self.retentionpolicies || {};

	/**
     * 
     * @method patchPolicy
	 * @memberof configuration/retentionpolicies

	* @param {string} policyId - Policy ID

	* @param {} body - Policy
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "modifiedDate": "",
   "createdDate": "",
   "order": 0,
   "description": "",
   "enabled": true,
   "conditions": {
      "forUsers": [],
      "directions": [],
      "dateRanges": [],
      "mediaTypes": [],
      "forQueues": [],
      "duration": {},
      "wrapupCodes": []
   },
   "actions": {
      "retainRecording": true,
      "deleteRecording": true,
      "assignEvaluations": [],
      "assignMeteredEvaluations": [],
      "assignCalibrations": [],
      "retentionDuration": {}
   },
   "selfUri": ""
}
	 *
     */
     self.retentionpolicies.patchPolicy = function(policyId, body){
		var path = '/api/v1/configuration/retentionpolicies/{policyId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{policyId}', policyId);

        if(policyId === undefined && policyId !== null){
			throw 'Missing required  parameter: policyId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PATCH', path + '?' +$.param(queryParameters), requestBody);
     };
	self.schemas = self.schemas || {};
	self.schemas.edges = self.schemas.edges || {};
	self.schemas.edges.vnext = self.schemas.edges.vnext || {};

	/**
     * 
     * @method listSchemas
	 * @memberof configuration/schemas/edges/vnext

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number
	 *
     */
     self.schemas.edges.vnext.listSchemas = function(pageSize, pageNumber){
		var path = '/api/v1/configuration/schemas/edges/vnext';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.schemas = self.schemas || {};
	self.schemas.edges = self.schemas.edges || {};
	self.schemas.edges.vnext = self.schemas.edges.vnext || {};

	/**
     * 
     * @method listSchemas
	 * @memberof configuration/schemas/edges/vnext

	* @param {string} schemaCategory - Schema category

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number
	 *
     */
     self.schemas.edges.vnext.listSchemas = function(schemaCategory, pageSize, pageNumber){
		var path = '/api/v1/configuration/schemas/edges/vnext/{schemaCategory}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{schemaCategory}', schemaCategory);

        if(schemaCategory === undefined && schemaCategory !== null){
			throw 'Missing required  parameter: schemaCategory';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.schemas = self.schemas || {};
	self.schemas.edges = self.schemas.edges || {};
	self.schemas.edges.vnext = self.schemas.edges.vnext || {};

	/**
     * 
     * @method listSchemas
	 * @memberof configuration/schemas/edges/vnext

	* @param {string} schemaCategory - Schema category

	* @param {string} schemaType - Schema type

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number
	 *
     */
     self.schemas.edges.vnext.listSchemas = function(schemaCategory, schemaType, pageSize, pageNumber){
		var path = '/api/v1/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{schemaCategory}', schemaCategory);

        if(schemaCategory === undefined && schemaCategory !== null){
			throw 'Missing required  parameter: schemaCategory';
        }

        path = path.replace('{schemaType}', schemaType);

        if(schemaType === undefined && schemaType !== null){
			throw 'Missing required  parameter: schemaType';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.schemas = self.schemas || {};
	self.schemas.edges = self.schemas.edges || {};
	self.schemas.edges.vnext = self.schemas.edges.vnext || {};

	/**
     * 
     * @method getSchema
	 * @memberof configuration/schemas/edges/vnext

	* @param {string} schemaCategory - Schema category

	* @param {string} schemaType - Schema type

	* @param {string} schemaId - Schema ID
	 *
     */
     self.schemas.edges.vnext.getSchema = function(schemaCategory, schemaType, schemaId){
		var path = '/api/v1/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}/{schemaId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{schemaCategory}', schemaCategory);

        if(schemaCategory === undefined && schemaCategory !== null){
			throw 'Missing required  parameter: schemaCategory';
        }

        path = path.replace('{schemaType}', schemaType);

        if(schemaType === undefined && schemaType !== null){
			throw 'Missing required  parameter: schemaType';
        }

        path = path.replace('{schemaId}', schemaId);

        if(schemaId === undefined && schemaId !== null){
			throw 'Missing required  parameter: schemaId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.schemas = self.schemas || {};
	self.schemas.edges = self.schemas.edges || {};
	self.schemas.edges.vnext = self.schemas.edges.vnext || {};

	/**
     * 
     * @method getMetadata
	 * @memberof configuration/schemas/edges/vnext

	* @param {string} schemaCategory - Schema category

	* @param {string} schemaType - Schema type

	* @param {string} schemaId - Schema ID

	* @param {string} extension - extension

	* @param {string} metadataId - Metadata ID

	* @param {string} type - Type
	 *
     */
     self.schemas.edges.vnext.getMetadata = function(schemaCategory, schemaType, schemaId, extension, metadataId, type){
		var path = '/api/v1/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}/{schemaId}/{extension}/{metadataId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{schemaCategory}', schemaCategory);

        if(schemaCategory === undefined && schemaCategory !== null){
			throw 'Missing required  parameter: schemaCategory';
        }

        path = path.replace('{schemaType}', schemaType);

        if(schemaType === undefined && schemaType !== null){
			throw 'Missing required  parameter: schemaType';
        }

        path = path.replace('{schemaId}', schemaId);

        if(schemaId === undefined && schemaId !== null){
			throw 'Missing required  parameter: schemaId';
        }

        path = path.replace('{extension}', extension);

        if(extension === undefined && extension !== null){
			throw 'Missing required  parameter: extension';
        }

        path = path.replace('{metadataId}', metadataId);

        if(metadataId === undefined && metadataId !== null){
			throw 'Missing required  parameter: metadataId';
        }


		if(type !== undefined && type !== null){
			queryParameters.type = type;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.sites = self.sites || {};

	/**
     * 
     * @method getSites
	 * @memberof configuration/sites

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number

	* @param {string} name - Name

	* @param {string} sortBy - Sort by
	 *
     */
     self.sites.getSites = function(pageSize, pageNumber, name, sortBy){
		var path = '/api/v1/configuration/sites';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.sites = self.sites || {};

	/**
     * 
     * @method createSite
	 * @memberof configuration/sites

	* @param {} body - Site
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
      "start": {},
      "end": {}
   },
   "location": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "selfUri": ""
}
	 *
     */
     self.sites.createSite = function(body){
		var path = '/api/v1/configuration/sites';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.sites = self.sites || {};

	/**
     * 
     * @method getSite
	 * @memberof configuration/sites

	* @param {string} siteId - Site ID
	 *
     */
     self.sites.getSite = function(siteId){
		var path = '/api/v1/configuration/sites/{siteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.sites = self.sites || {};

	/**
     * 
     * @method updateSiteInstance
	 * @memberof configuration/sites

	* @param {string} siteId - Site ID

	* @param {} body - Site
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
      "start": {},
      "end": {}
   },
   "location": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "selfUri": ""
}
	 *
     */
     self.sites.updateSiteInstance = function(siteId, body){
		var path = '/api/v1/configuration/sites/{siteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.sites = self.sites || {};

	/**
     * 
     * @method deleteSite
	 * @memberof configuration/sites

	* @param {string} siteId - Site ID
	 *
     */
     self.sites.deleteSite = function(siteId){
		var path = '/api/v1/configuration/sites/{siteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.sites = self.sites || {};
	self.sites.numberplans = self.sites.numberplans || {};

	/**
     * 
     * @method getNumberPlans
	 * @memberof configuration/sites/numberplans

	* @param {string} siteId - Site ID
	 *
     */
     self.sites.numberplans.getNumberPlans = function(siteId){
		var path = '/api/v1/configuration/sites/{siteId}/numberplans';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.sites = self.sites || {};
	self.sites.numberplans = self.sites.numberplans || {};

	/**
     * 
     * @method updateNumberPlans
	 * @memberof configuration/sites/numberplans

	* @param {string} siteId - Site ID

	* @param {} body - 
	 *
     */
     self.sites.numberplans.updateNumberPlans = function(siteId, body){
		var path = '/api/v1/configuration/sites/{siteId}/numberplans';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.sites = self.sites || {};
	self.sites.numberplans = self.sites.numberplans || {};
	self.sites.numberplans.classifications = self.sites.numberplans.classifications || {};

	/**
     * 
     * @method getNumberPlanClassificationList
	 * @memberof configuration/sites/numberplans/classifications

	* @param {string} siteId - Site ID

	* @param {string} classification - Classification
	 *
     */
     self.sites.numberplans.classifications.getNumberPlanClassificationList = function(siteId, classification){
		var path = '/api/v1/configuration/sites/{siteId}/numberplans/classifications';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }


		if(classification !== undefined && classification !== null){
			queryParameters.classification = classification;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.sites = self.sites || {};
	self.sites.numberplans = self.sites.numberplans || {};

	/**
     * 
     * @method getANumberPlan
	 * @memberof configuration/sites/numberplans

	* @param {string} siteId - Site ID

	* @param {string} numberPlanId - Number Plan ID
	 *
     */
     self.sites.numberplans.getANumberPlan = function(siteId, numberPlanId){
		var path = '/api/v1/configuration/sites/{siteId}/numberplans/{numberPlanId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }

        path = path.replace('{numberPlanId}', numberPlanId);

        if(numberPlanId === undefined && numberPlanId !== null){
			throw 'Missing required  parameter: numberPlanId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.sites = self.sites || {};
	self.sites.rebalance = self.sites.rebalance || {};

	/**
     * 
     * @method rebalanceSite
	 * @memberof configuration/sites/rebalance

	* @param {string} siteId - Site ID
	 *
     */
     self.sites.rebalance.rebalanceSite = function(siteId){
		var path = '/api/v1/configuration/sites/{siteId}/rebalance';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.uservoicemailpolicies = self.uservoicemailpolicies || {};

	/**
     * 
     * @method getVoicemailuserpolicy
	 * @memberof configuration/uservoicemailpolicies

	* @param {string} userId - User ID
	 *
     */
     self.uservoicemailpolicies.getVoicemailuserpolicy = function(userId){
		var path = '/api/v1/configuration/uservoicemailpolicies/{userId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.uservoicemailpolicies = self.uservoicemailpolicies || {};

	/**
     * 
     * @method updateVoicemailuserpolicy
	 * @memberof configuration/uservoicemailpolicies

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
	 *
     */
     self.uservoicemailpolicies.updateVoicemailuserpolicy = function(userId, body){
		var path = '/api/v1/configuration/uservoicemailpolicies/{userId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }



		return PureCloud.makeRequest('PATCH', path + '?' +$.param(queryParameters), requestBody);
     };
	self.voicemailpolicy = self.voicemailpolicy || {};

	/**
     * 
     * @method getPolicy
	 * @memberof configuration/voicemailpolicy
	 *
     */
     self.voicemailpolicy.getPolicy = function(){
		var path = '/api/v1/configuration/voicemailpolicy';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.voicemailpolicy = self.voicemailpolicy || {};

	/**
     * 
     * @method updatePolicy
	 * @memberof configuration/voicemailpolicy

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
	 *
     */
     self.voicemailpolicy.updatePolicy = function(body){
		var path = '/api/v1/configuration/voicemailpolicy';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
