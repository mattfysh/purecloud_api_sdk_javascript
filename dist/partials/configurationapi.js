/**
* @class
* @example
* var api = new ConfigurationApi(pureCloudSession);
*/
var ConfigurationApi = function (pureCloudSession) {
	/**
     * @summary Get a listing of DID Pools
	 * @memberOf ConfigurationApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	*/
	function getDidpools(pageSize, pageNumber, sortBy){
		var apipath = '/api/v1/configuration/didpools';
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


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDidpools = getDidpools;
	/**
     * @summary Create a new DID pool
	 * @memberOf ConfigurationApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
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
   "provider": ""
}
	*/
	function createDidpools(body){
		var apipath = '/api/v1/configuration/didpools';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createDidpools = createDidpools;
	/**
     * @summary Get a DID Pool by ID.
	 * @memberOf ConfigurationApi#
	* @param {string} didPoolId - DID pool ID
	*/
	function getDidpoolsDPoolId(didPoolId){
		var apipath = '/api/v1/configuration/didpools/{didPoolId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{didPoolId}', didPoolId);

        if(didPoolId === undefined && didPoolId !== null){
			throw 'Missing required  parameter: didPoolId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDidpoolsDPoolId = getDidpoolsDPoolId;
	/**
     * @summary Update a DID Pool by ID.
	 * @memberOf ConfigurationApi#
	* @param {string} didPoolId - DID pool ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
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
   "provider": ""
}
	*/
	function updateDidpoolsDPoolId(didPoolId, body){
		var apipath = '/api/v1/configuration/didpools/{didPoolId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{didPoolId}', didPoolId);

        if(didPoolId === undefined && didPoolId !== null){
			throw 'Missing required  parameter: didPoolId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateDidpoolsDPoolId = updateDidpoolsDPoolId;
	/**
     * @summary Delete a DID Pool by ID.
	 * @memberOf ConfigurationApi#
	* @param {string} didPoolId - DID pool ID
	*/
	function deleteDidpoolsDPoolId(didPoolId){
		var apipath = '/api/v1/configuration/didpools/{didPoolId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{didPoolId}', didPoolId);

        if(didPoolId === undefined && didPoolId !== null){
			throw 'Missing required  parameter: didPoolId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteDidpoolsDPoolId = deleteDidpoolsDPoolId;
	/**
     * @summary Get a listing of DIDs
	 * @memberOf ConfigurationApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	* @param {string} phoneNumber - Filter by phoneNumber
	*/
	function getDids(pageSize, pageNumber, sortBy, sortOrder, phoneNumber){
		var apipath = '/api/v1/configuration/dids';
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


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDids = getDids;
	/**
     * @summary Get a DID by ID.
	 * @memberOf ConfigurationApi#
	* @param {string} didId - DID ID
	*/
	function getDId(didId){
		var apipath = '/api/v1/configuration/dids/{didId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{didId}', didId);

        if(didId === undefined && didId !== null){
			throw 'Missing required  parameter: didId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDId = getDId;
	/**
     * @summary Update a DID by ID.
	 * @memberOf ConfigurationApi#
	* @param {string} didId - DID ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
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
   "ownerType": ""
}
	*/
	function updateDId(didId, body){
		var apipath = '/api/v1/configuration/dids/{didId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{didId}', didId);

        if(didId === undefined && didId !== null){
			throw 'Missing required  parameter: didId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateDId = updateDId;
	/**
     * @summary Get the list of edges.
	 * @memberOf ConfigurationApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} name - Name
	* @param {string} siteid - Filter by site.id
	* @param {string} edgeGroupid - Filter by edgeGroup.id
	* @param {string} sortBy - Sort by
	*/
	function getEdges(pageSize, pageNumber, name, siteid, edgeGroupid, sortBy){
		var apipath = '/api/v1/configuration/edges';
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


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEdges = getEdges;
	/**
     * @summary Create a edge.
	 * @memberOf ConfigurationApi#
	* @param {} body - Edge
	 * @example
	 * Body Example:
	 * {
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
      "managed": true,
      "edgeTrunkBaseAssignment": {},
      "phoneTrunkBaseAssignments": []
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
   "managed": true
}
	*/
	function createEdges(body){
		var apipath = '/api/v1/configuration/edges';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createEdges = createEdges;
	/**
     * @summary Get the list of certificate authorities.
	 * @memberOf ConfigurationApi#
	*/
	function getEdgesCertificateauthorities(){
		var apipath = '/api/v1/configuration/edges/certificateauthorities';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEdgesCertificateauthorities = getEdgesCertificateauthorities;
	/**
     * @summary Create a certificate authority.
	 * @memberOf ConfigurationApi#
	* @param {} body - CertificateAuthority
	 * @example
	 * Body Example:
	 * {
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
   "certificateDetails": []
}
	*/
	function createEdgesCertificateauthorities(body){
		var apipath = '/api/v1/configuration/edges/certificateauthorities';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createEdgesCertificateauthorities = createEdgesCertificateauthorities;
	/**
     * @summary Get a certificate authority.
	 * @memberOf ConfigurationApi#
	* @param {string} certificateId - Certificate ID
	*/
	function getEdgesCertificateauthoritiesCertificate(certificateId){
		var apipath = '/api/v1/configuration/edges/certificateauthorities/{certificateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{certificateId}', certificateId);

        if(certificateId === undefined && certificateId !== null){
			throw 'Missing required  parameter: certificateId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEdgesCertificateauthoritiesCertificate = getEdgesCertificateauthoritiesCertificate;
	/**
     * @summary Update a certificate authority.
	 * @memberOf ConfigurationApi#
	* @param {string} certificateId - Certificate ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
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
   "certificateDetails": []
}
	*/
	function updateEdgesCertificateauthoritiesCertificate(certificateId, body){
		var apipath = '/api/v1/configuration/edges/certificateauthorities/{certificateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{certificateId}', certificateId);

        if(certificateId === undefined && certificateId !== null){
			throw 'Missing required  parameter: certificateId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateEdgesCertificateauthoritiesCertificate = updateEdgesCertificateauthoritiesCertificate;
	/**
     * @summary Delete a certificate authority.
	 * @memberOf ConfigurationApi#
	* @param {string} certificateId - Certificate ID
	*/
	function deleteEdgesCertificateauthoritiesCertificate(certificateId){
		var apipath = '/api/v1/configuration/edges/certificateauthorities/{certificateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{certificateId}', certificateId);

        if(certificateId === undefined && certificateId !== null){
			throw 'Missing required  parameter: certificateId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteEdgesCertificateauthoritiesCertificate = deleteEdgesCertificateauthoritiesCertificate;
	/**
     * @summary Get edge.
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	*/
	function getEdge(edgeId){
		var apipath = '/api/v1/configuration/edges/{edgeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEdge = getEdge;
	/**
     * @summary Update a edge.
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	* @param {} body - Edge
	 * @example
	 * Body Example:
	 * {
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
      "managed": true,
      "edgeTrunkBaseAssignment": {},
      "phoneTrunkBaseAssignments": []
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
   "managed": true
}
	*/
	function updateEdge(edgeId, body){
		var apipath = '/api/v1/configuration/edges/{edgeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateEdge = updateEdge;
	/**
     * @summary Delete a edge.
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	*/
	function deleteEdge(edgeId){
		var apipath = '/api/v1/configuration/edges/{edgeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteEdge = deleteEdge;
	/**
     * @summary Get the list of lines.
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getEdgeLines(edgeId, pageSize, pageNumber){
		var apipath = '/api/v1/configuration/edges/{edgeId}/lines';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEdgeLines = getEdgeLines;
	/**
     * @summary Get line
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	* @param {string} lineId - Line ID
	*/
	function getEdgeLinesByLineId(edgeId, lineId){
		var apipath = '/api/v1/configuration/edges/{edgeId}/lines/{lineId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        apipath = apipath.replace('{lineId}', lineId);

        if(lineId === undefined && lineId !== null){
			throw 'Missing required  parameter: lineId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEdgeLinesByLineId = getEdgeLinesByLineId;
	/**
     * @summary Update a line.
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	* @param {string} lineId - Line ID
	* @param {} body - Line
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "schema": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "properties": {},
   "edge": {
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
      "managed": true
   },
   "edgeGroup": {
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
      "managed": true,
      "edgeTrunkBaseAssignment": {},
      "phoneTrunkBaseAssignments": []
   },
   "lineType": "",
   "endpoint": {
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
      "dids": []
   },
   "ipAddress": "",
   "logicalInterfaceId": ""
}
	*/
	function updateEdgeLinesByLineId(edgeId, lineId, body){
		var apipath = '/api/v1/configuration/edges/{edgeId}/lines/{lineId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        apipath = apipath.replace('{lineId}', lineId);

        if(lineId === undefined && lineId !== null){
			throw 'Missing required  parameter: lineId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateEdgeLinesByLineId = updateEdgeLinesByLineId;
	/**
     * @summary Get edge logical interfaces.
	 * @description Retrieve a list of all configured logical interfaces from a specific edge.
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	*/
	function getEdgeLogicalinterfaces(edgeId){
		var apipath = '/api/v1/configuration/edges/{edgeId}/logicalinterfaces';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEdgeLogicalinterfaces = getEdgeLogicalinterfaces;
	/**
     * @summary Create an edge logical interface.
	 * @description Create
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	* @param {} body - Create
	 * @example
	 * Body Example:
	 * {
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
   "commandResponses": []
}
	*/
	function createEdgeLogicalinterfaces(edgeId, body){
		var apipath = '/api/v1/configuration/edges/{edgeId}/logicalinterfaces';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createEdgeLogicalinterfaces = createEdgeLogicalinterfaces;
	/**
     * @summary Get an edge logical interface
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	* @param {string} interfaceId - Interface ID
	*/
	function getEdgeLogicalinterfacesByInterfaceId(edgeId, interfaceId){
		var apipath = '/api/v1/configuration/edges/{edgeId}/logicalinterfaces/{interfaceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        apipath = apipath.replace('{interfaceId}', interfaceId);

        if(interfaceId === undefined && interfaceId !== null){
			throw 'Missing required  parameter: interfaceId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEdgeLogicalinterfacesByInterfaceId = getEdgeLogicalinterfacesByInterfaceId;
	/**
     * @summary Update an edge logical interface.
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	* @param {string} interfaceId - Interface ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
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
   "commandResponses": []
}
	*/
	function updateEdgeLogicalinterfacesByInterfaceId(edgeId, interfaceId, body){
		var apipath = '/api/v1/configuration/edges/{edgeId}/logicalinterfaces/{interfaceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        apipath = apipath.replace('{interfaceId}', interfaceId);

        if(interfaceId === undefined && interfaceId !== null){
			throw 'Missing required  parameter: interfaceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateEdgeLogicalinterfacesByInterfaceId = updateEdgeLogicalinterfacesByInterfaceId;
	/**
     * @summary Delete an edge logical interface
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	* @param {string} interfaceId - Interface ID
	*/
	function deleteEdgeLogicalinterfacesByInterfaceId(edgeId, interfaceId){
		var apipath = '/api/v1/configuration/edges/{edgeId}/logicalinterfaces/{interfaceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        apipath = apipath.replace('{interfaceId}', interfaceId);

        if(interfaceId === undefined && interfaceId !== null){
			throw 'Missing required  parameter: interfaceId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteEdgeLogicalinterfacesByInterfaceId = deleteEdgeLogicalinterfacesByInterfaceId;
	/**
     * @summary Retrieve a list of all configured physical interfaces from a specific edge.
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	*/
	function getEdgePhysicalinterfaces(edgeId){
		var apipath = '/api/v1/configuration/edges/{edgeId}/physicalinterfaces';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEdgePhysicalinterfaces = getEdgePhysicalinterfaces;
	/**
     * @summary Get edge physical interface.
	 * @description Retrieve a physical interface from a specific edge.
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	* @param {string} interfaceId - Interface ID
	*/
	function getEdgePhysicalinterfacesByInterfaceId(edgeId, interfaceId){
		var apipath = '/api/v1/configuration/edges/{edgeId}/physicalinterfaces/{interfaceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        apipath = apipath.replace('{interfaceId}', interfaceId);

        if(interfaceId === undefined && interfaceId !== null){
			throw 'Missing required  parameter: interfaceId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEdgePhysicalinterfacesByInterfaceId = getEdgePhysicalinterfacesByInterfaceId;
	/**
     * @summary Reboot an Edge
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	*/
	function createEdgeReboot(edgeId){
		var apipath = '/api/v1/configuration/edges/{edgeId}/reboot';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createEdgeReboot = createEdgeReboot;
	/**
     * @summary Gets software update status information about any edge.
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	*/
	function getEdgeSoftwareupdate(edgeId){
		var apipath = '/api/v1/configuration/edges/{edgeId}/softwareupdate';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEdgeSoftwareupdate = getEdgeSoftwareupdate;
	/**
     * @summary Starts a software update for this edge.
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "version": {
      "name": "",
      "edgeVersion": "",
      "publishDate": "",
      "edgeUri": "",
      "current": true,
      "latestRelease": true
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
	*/
	function createEdgeSoftwareupdate(edgeId, body){
		var apipath = '/api/v1/configuration/edges/{edgeId}/softwareupdate';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createEdgeSoftwareupdate = createEdgeSoftwareupdate;
	/**
     * @summary Cancels any in-progress update for this edge.
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	*/
	function deleteEdgeSoftwareupdate(edgeId){
		var apipath = '/api/v1/configuration/edges/{edgeId}/softwareupdate';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteEdgeSoftwareupdate = deleteEdgeSoftwareupdate;
	/**
     * @summary Gets all the available software versions for this edge.
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge ID
	*/
	function getEdgeSoftwareversions(edgeId){
		var apipath = '/api/v1/configuration/edges/{edgeId}/softwareversions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEdgeSoftwareversions = getEdgeSoftwareversions;
	/**
     * @summary Unpair an Edge
	 * @memberOf ConfigurationApi#
	* @param {string} edgeId - Edge Id
	*/
	function createEdgeUnpair(edgeId){
		var apipath = '/api/v1/configuration/edges/{edgeId}/unpair';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createEdgeUnpair = createEdgeUnpair;
	/**
     * @summary Get the edge version report.
	 * @description The report will not have consistent data about the edge version(s) until all edges have been reset.
	 * @memberOf ConfigurationApi#
	*/
	function getEdgeversionreport(){
		var apipath = '/api/v1/configuration/edgeversionreport';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEdgeversionreport = getEdgeversionreport;
	/**
     * @summary Get endpoints
	 * @memberOf ConfigurationApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} name - Name
	* @param {string} sortBy - Sort by
	*/
	function getEndpoints(pageSize, pageNumber, name, sortBy){
		var apipath = '/api/v1/configuration/endpoints';
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


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEndpoints = getEndpoints;
	/**
     * @summary Create endpoint
	 * @memberOf ConfigurationApi#
	* @param {} body - EndpointTemplate
	 * @example
	 * Body Example:
	 * {
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
   "dids": []
}
	*/
	function createEndpoints(body){
		var apipath = '/api/v1/configuration/endpoints';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createEndpoints = createEndpoints;
	/**
     * @summary Get endpoint
	 * @memberOf ConfigurationApi#
	* @param {string} endpointId - Endpoint ID
	*/
	function getEndpoint(endpointId){
		var apipath = '/api/v1/configuration/endpoints/{endpointId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{endpointId}', endpointId);

        if(endpointId === undefined && endpointId !== null){
			throw 'Missing required  parameter: endpointId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEndpoint = getEndpoint;
	/**
     * @summary Update endpoint
	 * @memberOf ConfigurationApi#
	* @param {string} endpointId - Endpoint ID
	* @param {} body - EndpointTemplate
	 * @example
	 * Body Example:
	 * {
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
   "dids": []
}
	*/
	function updateEndpoint(endpointId, body){
		var apipath = '/api/v1/configuration/endpoints/{endpointId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{endpointId}', endpointId);

        if(endpointId === undefined && endpointId !== null){
			throw 'Missing required  parameter: endpointId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateEndpoint = updateEndpoint;
	/**
     * @summary Delete endpoint
	 * @memberOf ConfigurationApi#
	* @param {string} endpointId - Endpoint ID
	*/
	function deleteEndpoint(endpointId){
		var apipath = '/api/v1/configuration/endpoints/{endpointId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{endpointId}', endpointId);

        if(endpointId === undefined && endpointId !== null){
			throw 'Missing required  parameter: endpointId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteEndpoint = deleteEndpoint;
	/**
     * @summary Get a listing of extension pools
	 * @memberOf ConfigurationApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	* @param {string} number - Number
	*/
	function getExtensionpools(pageSize, pageNumber, sortBy, number){
		var apipath = '/api/v1/configuration/extensionpools';
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


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getExtensionpools = getExtensionpools;
	/**
     * @summary Create a new extension pool
	 * @memberOf ConfigurationApi#
	* @param {} body - ExtensionPool
	 * @example
	 * Body Example:
	 * {
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
   "endNumber": ""
}
	*/
	function createExtensionpools(body){
		var apipath = '/api/v1/configuration/extensionpools';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createExtensionpools = createExtensionpools;
	/**
     * @summary Get an extension pool by ID
	 * @memberOf ConfigurationApi#
	* @param {string} extensionPoolId - Extension pool ID
	*/
	function getExtensionPool(extensionPoolId){
		var apipath = '/api/v1/configuration/extensionpools/{extensionPoolId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{extensionPoolId}', extensionPoolId);

        if(extensionPoolId === undefined && extensionPoolId !== null){
			throw 'Missing required  parameter: extensionPoolId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getExtensionPool = getExtensionPool;
	/**
     * @summary Update an extension pool by ID
	 * @memberOf ConfigurationApi#
	* @param {string} extensionPoolId - Extension pool ID
	* @param {} body - ExtensionPool
	 * @example
	 * Body Example:
	 * {
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
   "endNumber": ""
}
	*/
	function updateExtensionPool(extensionPoolId, body){
		var apipath = '/api/v1/configuration/extensionpools/{extensionPoolId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{extensionPoolId}', extensionPoolId);

        if(extensionPoolId === undefined && extensionPoolId !== null){
			throw 'Missing required  parameter: extensionPoolId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateExtensionPool = updateExtensionPool;
	/**
     * @summary Delete an extension pool by ID
	 * @memberOf ConfigurationApi#
	* @param {string} extensionPoolId - Extension pool ID
	*/
	function deleteExtensionPool(extensionPoolId){
		var apipath = '/api/v1/configuration/extensionpools/{extensionPoolId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{extensionPoolId}', extensionPoolId);

        if(extensionPoolId === undefined && extensionPoolId !== null){
			throw 'Missing required  parameter: extensionPoolId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteExtensionPool = deleteExtensionPool;
	/**
     * @summary Get a listing of extensions
	 * @memberOf ConfigurationApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	* @param {string} number - Filter by number
	*/
	function getExtensions(pageSize, pageNumber, sortBy, sortOrder, number){
		var apipath = '/api/v1/configuration/extensions';
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


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getExtensions = getExtensions;
	/**
     * @summary Get an extension by ID.
	 * @memberOf ConfigurationApi#
	* @param {string} extensionId - Extension ID
	*/
	function getExtension(extensionId){
		var apipath = '/api/v1/configuration/extensions/{extensionId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{extensionId}', extensionId);

        if(extensionId === undefined && extensionId !== null){
			throw 'Missing required  parameter: extensionId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getExtension = getExtension;
	/**
     * @summary Update an extension by ID.
	 * @memberOf ConfigurationApi#
	* @param {string} extensionId - Extension ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
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
   "ownerType": ""
}
	*/
	function updateExtension(extensionId, body){
		var apipath = '/api/v1/configuration/extensions/{extensionId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{extensionId}', extensionId);

        if(extensionId === undefined && extensionId !== null){
			throw 'Missing required  parameter: extensionId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateExtension = updateExtension;
	/**
     * @summary Get context organization.
	 * @memberOf ConfigurationApi#
	*/
	function getOrganization(){
		var apipath = '/api/v1/configuration/organization';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOrganization = getOrganization;
	/**
     * @summary Update context organization.
	 * @memberOf ConfigurationApi#
	* @param {} body - Organization
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "id": "",
   "maxIdleToken": 0
}
	*/
	function updateOrganization(body){
		var apipath = '/api/v1/configuration/organization';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateOrganization = updateOrganization;
	/**
     * @summary Create organization.
	 * @memberOf ConfigurationApi#
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
	*/
	function createOrganizations(body){
		var apipath = '/api/v1/configuration/organizations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createOrganizations = createOrganizations;
	/**
     * @summary Get organization.
	 * @memberOf ConfigurationApi#
	* @param {string} orgId - Organization ID
	*/
	function getOrganizationsOrg(orgId){
		var apipath = '/api/v1/configuration/organizations/{orgId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{orgId}', orgId);

        if(orgId === undefined && orgId !== null){
			throw 'Missing required  parameter: orgId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOrganizationsOrg = getOrganizationsOrg;
	/**
     * @summary Update organization.
	 * @memberOf ConfigurationApi#
	* @param {string} orgId - Organization ID
	* @param {} body - Organization
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "id": "",
   "maxIdleToken": 0
}
	*/
	function updateOrganizationsOrg(orgId, body){
		var apipath = '/api/v1/configuration/organizations/{orgId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{orgId}', orgId);

        if(orgId === undefined && orgId !== null){
			throw 'Missing required  parameter: orgId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateOrganizationsOrg = updateOrganizationsOrg;
	/**
     * @summary Delete an organization.
	 * @memberOf ConfigurationApi#
	* @param {string} orgId - Organization ID
	*/
	function deleteOrganizationsOrg(orgId){
		var apipath = '/api/v1/configuration/organizations/{orgId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{orgId}', orgId);

        if(orgId === undefined && orgId !== null){
			throw 'Missing required  parameter: orgId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteOrganizationsOrg = deleteOrganizationsOrg;
	/**
     * @summary Get encryption key list
	 * @memberOf ConfigurationApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getRecordingkeys(pageSize, pageNumber){
		var apipath = '/api/v1/configuration/recordingkeys';
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
	self.getRecordingkeys = getRecordingkeys;
	/**
     * @summary Create encryption key
	 * @memberOf ConfigurationApi#
	*/
	function createRecordingkeys(){
		var apipath = '/api/v1/configuration/recordingkeys';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createRecordingkeys = createRecordingkeys;
	/**
     * @summary Get key rotation schedule
	 * @memberOf ConfigurationApi#
	*/
	function getRecordingkeysRotationschedule(){
		var apipath = '/api/v1/configuration/recordingkeys/rotationschedule';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRecordingkeysRotationschedule = getRecordingkeysRotationschedule;
	/**
     * @summary Update key rotation schedule
	 * @memberOf ConfigurationApi#
	* @param {} body - KeyRotationSchedule
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "period": ""
}
	*/
	function updateRecordingkeysRotationschedule(body){
		var apipath = '/api/v1/configuration/recordingkeys/rotationschedule';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateRecordingkeysRotationschedule = updateRecordingkeysRotationschedule;
	/**
     * @summary Gets retention policy list with query options to filter on name and enabled.
	 * @description for a less verbose response, add summary=true to this endpoint
	 * @memberOf ConfigurationApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	* @param {string} name - the policy name - used for filtering results in searches.
	* @param {boolean} enabled - checks to see if policy is enabled - use enabled = true or enabled = false
	* @param {boolean} summary - provides a less verbose response of policy lists.
	* @param {boolean} hasErrors - provides a way to fetch all policies with errors or policies that do not have errors
	*/
	function getRetentionpolicies(pageSize, pageNumber, sortBy, expand, name, enabled, summary, hasErrors){
		var apipath = '/api/v1/configuration/retentionpolicies';
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


		if(hasErrors !== undefined && hasErrors !== null){
			queryParameters.hasErrors = hasErrors;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRetentionpolicies = getRetentionpolicies;
	/**
     * @summary Create retention policy
	 * @memberOf ConfigurationApi#
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
      "assignEvaluations": [],
      "assignMeteredEvaluations": [],
      "assignCalibrations": [],
      "retentionDuration": {}
   },
   "policyErrors": {
      "policyErrorMessages": []
   }
}
	*/
	function createRetentionpolicies(body){
		var apipath = '/api/v1/configuration/retentionpolicies';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createRetentionpolicies = createRetentionpolicies;
	/**
     * @summary Delete policies
	 * @description Bulk delete of Rules from specified rule set, this will only delete the rules that match the ids specified in the query param.
	 * @memberOf ConfigurationApi#
	* @param {string} ids - Bulk delete of Rules from specified rule set, this will only delete the rules that match the ids specified in the query param.
	*/
	function deleteRetentionpolicies(ids){
		var apipath = '/api/v1/configuration/retentionpolicies';
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
	self.deleteRetentionpolicies = deleteRetentionpolicies;
	/**
     * @summary Get policy
	 * @memberOf ConfigurationApi#
	* @param {string} policyId - Policy ID
	*/
	function getRetentionpoliciesPolicy(policyId){
		var apipath = '/api/v1/configuration/retentionpolicies/{policyId}';
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
	self.getRetentionpoliciesPolicy = getRetentionpoliciesPolicy;
	/**
     * @summary Update policy
	 * @memberOf ConfigurationApi#
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
      "assignEvaluations": [],
      "assignMeteredEvaluations": [],
      "assignCalibrations": [],
      "retentionDuration": {}
   },
   "policyErrors": {
      "policyErrorMessages": []
   }
}
	*/
	function updateRetentionpoliciesPolicy(policyId, body){
		var apipath = '/api/v1/configuration/retentionpolicies/{policyId}';
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
	self.updateRetentionpoliciesPolicy = updateRetentionpoliciesPolicy;
	/**
     * @summary Delete policy
	 * @memberOf ConfigurationApi#
	* @param {string} policyId - Policy ID
	*/
	function deleteRetentionpoliciesPolicy(policyId){
		var apipath = '/api/v1/configuration/retentionpolicies/{policyId}';
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
	self.deleteRetentionpoliciesPolicy = deleteRetentionpoliciesPolicy;
	/**
     * @summary Patch a retention policy
	 * @memberOf ConfigurationApi#
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
      "assignEvaluations": [],
      "assignMeteredEvaluations": [],
      "assignCalibrations": [],
      "retentionDuration": {}
   },
   "policyErrors": {
      "policyErrorMessages": []
   }
}
	*/
	function patchRetentionpoliciesPolicy(policyId, body){
		var apipath = '/api/v1/configuration/retentionpolicies/{policyId}';
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
	self.patchRetentionpoliciesPolicy = patchRetentionpoliciesPolicy;
	/**
     * @summary Lists available schema categories
	 * @memberOf ConfigurationApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getSchemasEdgesVnext(pageSize, pageNumber){
		var apipath = '/api/v1/configuration/schemas/edges/vnext';
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
	self.getSchemasEdgesVnext = getSchemasEdgesVnext;
	/**
     * @summary List schemas of a specific category
	 * @memberOf ConfigurationApi#
	* @param {string} schemaCategory - Schema category
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getSchemasEdgesVnextSchemaCategory(schemaCategory, pageSize, pageNumber){
		var apipath = '/api/v1/configuration/schemas/edges/vnext/{schemaCategory}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{schemaCategory}', schemaCategory);

        if(schemaCategory === undefined && schemaCategory !== null){
			throw 'Missing required  parameter: schemaCategory';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchemasEdgesVnextSchemaCategory = getSchemasEdgesVnextSchemaCategory;
	/**
     * @summary List schemas of a specific category
	 * @memberOf ConfigurationApi#
	* @param {string} schemaCategory - Schema category
	* @param {string} schemaType - Schema type
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getSchemasEdgesVnextSchemaCategoryBySchemaType(schemaCategory, schemaType, pageSize, pageNumber){
		var apipath = '/api/v1/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{schemaCategory}', schemaCategory);

        if(schemaCategory === undefined && schemaCategory !== null){
			throw 'Missing required  parameter: schemaCategory';
        }

        apipath = apipath.replace('{schemaType}', schemaType);

        if(schemaType === undefined && schemaType !== null){
			throw 'Missing required  parameter: schemaType';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchemasEdgesVnextSchemaCategoryBySchemaType = getSchemasEdgesVnextSchemaCategoryBySchemaType;
	/**
     * @summary Get a json schema
	 * @memberOf ConfigurationApi#
	* @param {string} schemaCategory - Schema category
	* @param {string} schemaType - Schema type
	* @param {string} schemaId - Schema ID
	*/
	function getSchemasEdgesVnextSchemaCategoryBySchemaTypeBySchemaId(schemaCategory, schemaType, schemaId){
		var apipath = '/api/v1/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}/{schemaId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{schemaCategory}', schemaCategory);

        if(schemaCategory === undefined && schemaCategory !== null){
			throw 'Missing required  parameter: schemaCategory';
        }

        apipath = apipath.replace('{schemaType}', schemaType);

        if(schemaType === undefined && schemaType !== null){
			throw 'Missing required  parameter: schemaType';
        }

        apipath = apipath.replace('{schemaId}', schemaId);

        if(schemaId === undefined && schemaId !== null){
			throw 'Missing required  parameter: schemaId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchemasEdgesVnextSchemaCategoryBySchemaTypeBySchemaId = getSchemasEdgesVnextSchemaCategoryBySchemaTypeBySchemaId;
	/**
     * @summary Get metadata for a schema
	 * @memberOf ConfigurationApi#
	* @param {string} schemaCategory - Schema category
	* @param {string} schemaType - Schema type
	* @param {string} schemaId - Schema ID
	* @param {string} extension - extension
	* @param {string} metadataId - Metadata ID
	* @param {string} type - Type
	*/
	function getSchemasEdgesVnextSchemaCategoryBySchemaTypeBySchemaIdByExtensionByMetadataId(schemaCategory, schemaType, schemaId, extension, metadataId, type){
		var apipath = '/api/v1/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}/{schemaId}/{extension}/{metadataId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{schemaCategory}', schemaCategory);

        if(schemaCategory === undefined && schemaCategory !== null){
			throw 'Missing required  parameter: schemaCategory';
        }

        apipath = apipath.replace('{schemaType}', schemaType);

        if(schemaType === undefined && schemaType !== null){
			throw 'Missing required  parameter: schemaType';
        }

        apipath = apipath.replace('{schemaId}', schemaId);

        if(schemaId === undefined && schemaId !== null){
			throw 'Missing required  parameter: schemaId';
        }

        apipath = apipath.replace('{extension}', extension);

        if(extension === undefined && extension !== null){
			throw 'Missing required  parameter: extension';
        }

        apipath = apipath.replace('{metadataId}', metadataId);

        if(metadataId === undefined && metadataId !== null){
			throw 'Missing required  parameter: metadataId';
        }


		if(type !== undefined && type !== null){
			queryParameters.type = type;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchemasEdgesVnextSchemaCategoryBySchemaTypeBySchemaIdByExtensionByMetadataId = getSchemasEdgesVnextSchemaCategoryBySchemaTypeBySchemaIdByExtensionByMetadataId;
	/**
     * @summary Get the list of sites.
	 * @memberOf ConfigurationApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	* @param {string} name - Name
	* @param {string} locationid - Location Id
	*/
	function getSites(pageSize, pageNumber, sortBy, sortOrder, name, locationid){
		var apipath = '/api/v1/configuration/sites';
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


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(locationid !== undefined && locationid !== null){
			queryParameters.location.id = locationid;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSites = getSites;
	/**
     * @summary Create a endpoint.
	 * @memberOf ConfigurationApi#
	* @param {} body - Site
	 * @example
	 * Body Example:
	 * {
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
      "start": "",
      "end": ""
   },
   "location": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "managed": true
}
	*/
	function createSites(body){
		var apipath = '/api/v1/configuration/sites';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createSites = createSites;
	/**
     * @summary Get endpoint.
	 * @memberOf ConfigurationApi#
	* @param {string} siteId - Site ID
	*/
	function getSite(siteId){
		var apipath = '/api/v1/configuration/sites/{siteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSite = getSite;
	/**
     * @summary Update a endpoint.
	 * @memberOf ConfigurationApi#
	* @param {string} siteId - Site ID
	* @param {} body - Site
	 * @example
	 * Body Example:
	 * {
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
      "start": "",
      "end": ""
   },
   "location": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "managed": true
}
	*/
	function updateSite(siteId, body){
		var apipath = '/api/v1/configuration/sites/{siteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateSite = updateSite;
	/**
     * @summary Delete an ednpoint
	 * @memberOf ConfigurationApi#
	* @param {string} siteId - Site ID
	*/
	function deleteSite(siteId){
		var apipath = '/api/v1/configuration/sites/{siteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteSite = deleteSite;
	/**
     * @summary Get the list of Number Plans for this Site.
	 * @memberOf ConfigurationApi#
	* @param {string} siteId - Site ID
	*/
	function getSiteNumberplans(siteId){
		var apipath = '/api/v1/configuration/sites/{siteId}/numberplans';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSiteNumberplans = getSiteNumberplans;
	/**
     * @summary Update the list of Number Plans.
	 * @memberOf ConfigurationApi#
	* @param {string} siteId - Site ID
	* @param {} body - 
	*/
	function updateSiteNumberplans(siteId, body){
		var apipath = '/api/v1/configuration/sites/{siteId}/numberplans';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateSiteNumberplans = updateSiteNumberplans;
	/**
     * @summary Get a list of Classifications for this Site
	 * @memberOf ConfigurationApi#
	* @param {string} siteId - Site ID
	* @param {string} classification - Classification
	*/
	function getSiteNumberplansClassifications(siteId, classification){
		var apipath = '/api/v1/configuration/sites/{siteId}/numberplans/classifications';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }


		if(classification !== undefined && classification !== null){
			queryParameters.classification = classification;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSiteNumberplansClassifications = getSiteNumberplansClassifications;
	/**
     * @summary Get a Number Plan by ID.
	 * @memberOf ConfigurationApi#
	* @param {string} siteId - Site ID
	* @param {string} numberPlanId - Number Plan ID
	*/
	function getSiteNumberplansByNumberPlanId(siteId, numberPlanId){
		var apipath = '/api/v1/configuration/sites/{siteId}/numberplans/{numberPlanId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }

        apipath = apipath.replace('{numberPlanId}', numberPlanId);

        if(numberPlanId === undefined && numberPlanId !== null){
			throw 'Missing required  parameter: numberPlanId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSiteNumberplansByNumberPlanId = getSiteNumberplansByNumberPlanId;
	/**
     * @summary Triggers the rebalance operation.
	 * @memberOf ConfigurationApi#
	* @param {string} siteId - Site ID
	*/
	function createSiteRebalance(siteId){
		var apipath = '/api/v1/configuration/sites/{siteId}/rebalance';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.createSiteRebalance = createSiteRebalance;

    return self;
};
