//API VERSION - 
/**
* @class
* @example
* var api = new ContentManagementApi(pureCloudSession);
*/
var ContentManagementApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Query audits
	 * @memberOf ContentManagementApi#
	* @param {} body - Allows for a filtered query returning facet information
	 * @example
	 * Body Example:
	 * {
   "queryPhrase": "",
   "pageNumber": 0,
   "pageSize": 0,
   "facetNameRequests": [],
   "sort": [],
   "filters": [],
   "attributeFilters": []
}
	*/
	function postAuditquery(body){
		var apipath = '/api/v2/contentmanagement/auditquery';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postAuditquery = postAuditquery;
	/**
     * @summary Get a list of documents.
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} name - Name
	* @param {string} expand - Expand some document fields
	acl,
	workspace,
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - name or dateCreated
	* @param {string} sortOrder - ascending or descending
	*/
	function getDocuments(workspaceId, name, expand, pageSize, pageNumber, sortBy, sortOrder){
		var apipath = '/api/v2/contentmanagement/documents';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(workspaceId !== undefined && workspaceId !== null){
			queryParameters.workspaceId = workspaceId;
		}

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


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


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDocuments = getDocuments;
	/**
     * @summary Add a document.
	 * @memberOf ContentManagementApi#
	* @param {} body - Document
	* @param {string} copySource - Copy a document within a workspace or to a new workspace. Provide a document ID as the copy source.
	* @param {string} moveSource - Move a document to a new workspace. Provide a document ID as the move source.
	* @param {boolean} override - Override any lock on the source document
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "workspace": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "tags": [],
   "tagIds": []
}
	*/
	function postDocuments(body, copySource, moveSource, override){
		var apipath = '/api/v2/contentmanagement/documents';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(copySource !== undefined && copySource !== null){
			queryParameters.copySource = copySource;
		}


		if(moveSource !== undefined && moveSource !== null){
			queryParameters.moveSource = moveSource;
		}


		if(override !== undefined && override !== null){
			queryParameters.override = override;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postDocuments = postDocuments;
	/**
     * @summary Get a document.
	 * @memberOf ContentManagementApi#
	* @param {string} documentId - Document ID
	* @param {string} expand - Expand some document fields
	lockInfo,
	acl,
	workspace,
	*/
	function getDocumentsDocumentId(documentId, expand){
		var apipath = '/api/v2/contentmanagement/documents/{documentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDocumentsDocumentId = getDocumentsDocumentId;
	/**
     * @summary Update a document.
	 * @memberOf ContentManagementApi#
	* @param {string} documentId - Document ID
	* @param {} body - Document
	* @param {string} expand - Expand some document fields
	acl,
	* @param {boolean} override - Override any lock on the document
	 * @example
	 * Body Example:
	 * {
   "changeNumber": 0,
   "name": "",
   "read": true,
   "addTags": [],
   "removeTags": [],
   "addTagIds": [],
   "removeTagIds": [],
   "updateAttributes": [],
   "removeAttributes": []
}
	*/
	function postDocumentsDocumentId(documentId, body, expand, override){
		var apipath = '/api/v2/contentmanagement/documents/{documentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(override !== undefined && override !== null){
			queryParameters.override = override;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postDocumentsDocumentId = postDocumentsDocumentId;
	/**
     * @summary Delete a document.
	 * @memberOf ContentManagementApi#
	* @param {string} documentId - Document ID
	* @param {boolean} override - Override any lock on the document
	*/
	function deleteDocumentsDocumentId(documentId, override){
		var apipath = '/api/v2/contentmanagement/documents/{documentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }


		if(override !== undefined && override !== null){
			queryParameters.override = override;
		}


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteDocumentsDocumentId = deleteDocumentsDocumentId;
	/**
     * @summary Get a list of audits for a document.
	 * @memberOf ContentManagementApi#
	* @param {string} documentId - Document ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} transactionFilter - Transaction filter
	* @param {string} level - level
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	*/
	function getDocumentsDocumentIdAudits(documentId, pageSize, pageNumber, transactionFilter, level, sortBy, sortOrder){
		var apipath = '/api/v2/contentmanagement/documents/{documentId}/audits';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(transactionFilter !== undefined && transactionFilter !== null){
			queryParameters.transactionFilter = transactionFilter;
		}


		if(level !== undefined && level !== null){
			queryParameters.level = level;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDocumentsDocumentIdAudits = getDocumentsDocumentIdAudits;
	/**
     * @summary Download a document.
	 * @memberOf ContentManagementApi#
	* @param {string} documentId - Document ID
	* @param {string} disposition - Request how the content will be downloaded: attached as a file or inline. Default is attachment.
	attachment,
	inline,
	* @param {string} contentType - The requested format for the specified document. If supported, the document will be returned in that format. Example contentType=audio/wav
	*/
	function getDocumentsDocumentIdContent(documentId, disposition, contentType){
		var apipath = '/api/v2/contentmanagement/documents/{documentId}/content';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }


		if(disposition !== undefined && disposition !== null){
			queryParameters.disposition = disposition;
		}


		if(contentType !== undefined && contentType !== null){
			queryParameters.contentType = contentType;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDocumentsDocumentIdContent = getDocumentsDocumentIdContent;
	/**
     * @summary Replace the contents of a document.
	 * @memberOf ContentManagementApi#
	* @param {string} documentId - Document ID
	* @param {} body - Replace Request
	* @param {boolean} override - Override any lock on the document
	 * @example
	 * Body Example:
	 * {
   "changeNumber": 0,
   "name": "",
   "authToken": ""
}
	*/
	function postDocumentsDocumentIdContent(documentId, body, override){
		var apipath = '/api/v2/contentmanagement/documents/{documentId}/content';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(override !== undefined && override !== null){
			queryParameters.override = override;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postDocumentsDocumentIdContent = postDocumentsDocumentIdContent;
	/**
     * @summary Query content
	 * @memberOf ContentManagementApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - name or dateCreated
	* @param {string} sortOrder - ascending or descending
	* @param {string} queryPhrase - Phrase tokens are ANDed together over all searchable fields
	* @param {string} expand - Expand some document fields
	acl,
	workspace,
	*/
	function getQuery(pageSize, pageNumber, sortBy, sortOrder, queryPhrase, expand){
		var apipath = '/api/v2/contentmanagement/query';
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


		if(queryPhrase !== undefined && queryPhrase !== null){
			queryParameters.queryPhrase = queryPhrase;
		}

        if(queryPhrase === undefined && queryPhrase !== null){
			throw 'Missing required  parameter: queryPhrase';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQuery = getQuery;
	/**
     * @summary Query content
	 * @memberOf ContentManagementApi#
	* @param {} body - Allows for a filtered query returning facet information
	* @param {string} expand - Expand some document fields
	acl,
	workspace,
	 * @example
	 * Body Example:
	 * {
   "queryPhrase": "",
   "pageNumber": 0,
   "pageSize": 0,
   "facetNameRequests": [],
   "sort": [],
   "filters": [],
   "attributeFilters": []
}
	*/
	function postQuery(body, expand){
		var apipath = '/api/v2/contentmanagement/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postQuery = postQuery;
	/**
     * @summary Get a List of Security Profiles
	 * @memberOf ContentManagementApi#
	*/
	function getSecurityprofiles(){
		var apipath = '/api/v2/contentmanagement/securityprofiles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSecurityprofiles = getSecurityprofiles;
	/**
     * @summary Get a Security Profile
	 * @memberOf ContentManagementApi#
	* @param {string} securityProfileId - Security Profile Id
	*/
	function getSecurityprofilesSecurityprofileId(securityProfileId){
		var apipath = '/api/v2/contentmanagement/securityprofiles/{securityProfileId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{securityProfileId}', securityProfileId);

        if(securityProfileId === undefined && securityProfileId !== null){
			throw 'Missing required  parameter: securityProfileId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSecurityprofilesSecurityprofileId = getSecurityprofilesSecurityprofileId;
	/**
     * @summary Get shared documents. Securely download a shared document.
	 * @description This method requires the download sharing URI obtained in the get document response (downloadSharingUri). Documents may be shared between users in the same workspace. Documents may also be shared between any user by creating a content management share.
	 * @memberOf ContentManagementApi#
	* @param {string} sharedId - Shared ID
	* @param {boolean} redirect - Turn on or off redirect
	* @param {string} disposition - Request how the share content will be downloaded: attached as a file or inline. Default is attachment.
	attachment,
	inline,
	none,
	* @param {string} contentType - The requested format for the specified document. If supported, the document will be returned in that format. Example contentType=audio/wav
	* @param {string} expand - Expand some document fields
	document.acl,
	*/
	function getSharedSharedId(sharedId, redirect, disposition, contentType, expand){
		var apipath = '/api/v2/contentmanagement/shared/{sharedId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sharedId}', sharedId);

        if(sharedId === undefined && sharedId !== null){
			throw 'Missing required  parameter: sharedId';
        }


		if(redirect !== undefined && redirect !== null){
			queryParameters.redirect = redirect;
		}


		if(disposition !== undefined && disposition !== null){
			queryParameters.disposition = disposition;
		}


		if(contentType !== undefined && contentType !== null){
			queryParameters.contentType = contentType;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSharedSharedId = getSharedSharedId;
	/**
     * @summary Gets a list of shares.  You must specify at least one filter (e.g. entityId).
	 * @description Failing to specify a filter will return 400.
	 * @memberOf ContentManagementApi#
	* @param {string} entityId - Filters the shares returned to only the entity specified by the value of this parameter.
	* @param {string} expand - Expand share fields
	member,
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getShares(entityId, expand, pageSize, pageNumber){
		var apipath = '/api/v2/contentmanagement/shares';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(entityId !== undefined && entityId !== null){
			queryParameters.entityId = entityId;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getShares = getShares;
	/**
     * @summary Creates a new share or updates an existing share if the entity has already been shared
	 * @memberOf ContentManagementApi#
	* @param {} body - CreateShareRequest - entity id and type and a single member or list of members are required
	 * @example
	 * Body Example:
	 * {
   "sharedEntityType": "",
   "sharedEntity": {
      "id": ""
   },
   "memberType": "",
   "member": {
      "id": ""
   },
   "members": []
}
	*/
	function postShares(body){
		var apipath = '/api/v2/contentmanagement/shares';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postShares = postShares;
	/**
     * @summary Retrieve details about an existing share.
	 * @memberOf ContentManagementApi#
	* @param {string} shareId - Share ID
	* @param {string} expand - Expand share fields
	member,
	*/
	function getSharesShareId(shareId, expand){
		var apipath = '/api/v2/contentmanagement/shares/{shareId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{shareId}', shareId);

        if(shareId === undefined && shareId !== null){
			throw 'Missing required  parameter: shareId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSharesShareId = getSharesShareId;
	/**
     * @summary Deletes an existing share.
	 * @description This revokes sharing rights specified in the share record
	 * @memberOf ContentManagementApi#
	* @param {string} shareId - Share ID
	*/
	function deleteSharesShareId(shareId){
		var apipath = '/api/v2/contentmanagement/shares/{shareId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{shareId}', shareId);

        if(shareId === undefined && shareId !== null){
			throw 'Missing required  parameter: shareId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteSharesShareId = deleteSharesShareId;
	/**
     * @summary Get a list of statuses for pending operations
	 * @memberOf ContentManagementApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getStatus(pageSize, pageNumber){
		var apipath = '/api/v2/contentmanagement/status';
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
	self.getStatus = getStatus;
	/**
     * @summary Get a status.
	 * @memberOf ContentManagementApi#
	* @param {string} statusId - Status ID
	*/
	function getStatusStatusId(statusId){
		var apipath = '/api/v2/contentmanagement/status/{statusId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{statusId}', statusId);

        if(statusId === undefined && statusId !== null){
			throw 'Missing required  parameter: statusId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getStatusStatusId = getStatusStatusId;
	/**
     * @summary Cancel the command for this status
	 * @memberOf ContentManagementApi#
	* @param {string} statusId - Status ID
	*/
	function deleteStatusStatusId(statusId){
		var apipath = '/api/v2/contentmanagement/status/{statusId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{statusId}', statusId);

        if(statusId === undefined && statusId !== null){
			throw 'Missing required  parameter: statusId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteStatusStatusId = deleteStatusStatusId;
	/**
     * @summary Get a list of workspaces.
	 * @description Specifying 'content' access will return all workspaces the user has document access to, while 'admin' access will return all group workspaces the user has administrative rights to.
	 * @memberOf ContentManagementApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} access - Requested access level
	content,
	admin,
	document:create,
	document:viewContent,
	document:viewMetadata,
	document:download,
	document:delete,
	document:update,
	document:share,
	document:shareView,
	document:email,
	document:print,
	document:auditView,
	document:replace,
	document:tag,
	tag:create,
	tag:view,
	tag:update,
	tag:apply,
	tag:remove,
	tag:delete,
	* @param {string} expand - Expand some workspace fields
	summary,
	acl,
	*/
	function getWorkspaces(pageSize, pageNumber, access, expand){
		var apipath = '/api/v2/contentmanagement/workspaces';
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


		if(access !== undefined && access !== null){
			queryParameters.access = access;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWorkspaces = getWorkspaces;
	/**
     * @summary Create a group workspace
	 * @memberOf ContentManagementApi#
	* @param {} body - Workspace
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "bucket": ""
}
	*/
	function postWorkspaces(body){
		var apipath = '/api/v2/contentmanagement/workspaces';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postWorkspaces = postWorkspaces;
	/**
     * @summary Get a workspace.
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} expand - Expand some workspace fields
	summary,
	acl,
	*/
	function getWorkspacesWorkspaceId(workspaceId, expand){
		var apipath = '/api/v2/contentmanagement/workspaces/{workspaceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWorkspacesWorkspaceId = getWorkspacesWorkspaceId;
	/**
     * @summary Update a workspace
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {} body - Workspace
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "type": "",
   "isCurrentUserWorkspace": true,
   "user": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "bucket": "",
   "dateCreated": "",
   "dateModified": "",
   "summary": {
      "totalDocumentCount": 0
   },
   "acl": []
}
	*/
	function putWorkspacesWorkspaceId(workspaceId, body){
		var apipath = '/api/v2/contentmanagement/workspaces/{workspaceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putWorkspacesWorkspaceId = putWorkspacesWorkspaceId;
	/**
     * @summary Delete a workspace
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} moveChildrenToWorkspaceId - New location for objects in deleted workspace.
	*/
	function deleteWorkspacesWorkspaceId(workspaceId, moveChildrenToWorkspaceId){
		var apipath = '/api/v2/contentmanagement/workspaces/{workspaceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }


		if(moveChildrenToWorkspaceId !== undefined && moveChildrenToWorkspaceId !== null){
			queryParameters.moveChildrenToWorkspaceId = moveChildrenToWorkspaceId;
		}


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteWorkspacesWorkspaceId = deleteWorkspacesWorkspaceId;
	/**
     * @summary Get a list workspace members
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} expand - Expand workspace member fields
	member,
	*/
	function getWorkspacesWorkspaceIdMembers(workspaceId, pageSize, pageNumber, expand){
		var apipath = '/api/v2/contentmanagement/workspaces/{workspaceId}/members';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWorkspacesWorkspaceIdMembers = getWorkspacesWorkspaceIdMembers;
	/**
     * @summary Get a workspace member
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} memberId - Member ID
	* @param {string} expand - Expand workspace member fields
	member,
	*/
	function getWorkspacesWorkspaceIdMembersMemberId(workspaceId, memberId, expand){
		var apipath = '/api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        apipath = apipath.replace('{memberId}', memberId);

        if(memberId === undefined && memberId !== null){
			throw 'Missing required  parameter: memberId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWorkspacesWorkspaceIdMembersMemberId = getWorkspacesWorkspaceIdMembersMemberId;
	/**
     * @summary Add a member to a workspace
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} memberId - Member ID
	* @param {} body - Workspace
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "workspace": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "memberType": "",
   "member": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
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
   "group": {
      "name": "",
      "description": "",
      "dateModified": "",
      "memberCount": 0,
      "state": "",
      "version": {},
      "images": [],
      "addresses": []
   },
   "securityProfile": {
      "name": "",
      "permissions": []
   }
}
	*/
	function putWorkspacesWorkspaceIdMembersMemberId(workspaceId, memberId, body){
		var apipath = '/api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        apipath = apipath.replace('{memberId}', memberId);

        if(memberId === undefined && memberId !== null){
			throw 'Missing required  parameter: memberId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putWorkspacesWorkspaceIdMembersMemberId = putWorkspacesWorkspaceIdMembersMemberId;
	/**
     * @summary Delete a member from a workspace
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} memberId - Member ID
	*/
	function deleteWorkspacesWorkspaceIdMembersMemberId(workspaceId, memberId){
		var apipath = '/api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        apipath = apipath.replace('{memberId}', memberId);

        if(memberId === undefined && memberId !== null){
			throw 'Missing required  parameter: memberId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteWorkspacesWorkspaceIdMembersMemberId = deleteWorkspacesWorkspaceIdMembersMemberId;
	/**
     * @summary Get a list of workspace tags
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} value - filter the list of tags returned
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} expand - Expand some document fields
	acl,
	*/
	function getWorkspacesWorkspaceIdTagvalues(workspaceId, value, pageSize, pageNumber, expand){
		var apipath = '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }


		if(value !== undefined && value !== null){
			queryParameters.value = value;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWorkspacesWorkspaceIdTagvalues = getWorkspacesWorkspaceIdTagvalues;
	/**
     * @summary Create a workspace tag
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {} body - tag
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "inUse": true,
   "acl": []
}
	*/
	function postWorkspacesWorkspaceIdTagvalues(workspaceId, body){
		var apipath = '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postWorkspacesWorkspaceIdTagvalues = postWorkspacesWorkspaceIdTagvalues;
	/**
     * @summary Perform a prefix query on tags in the workspace
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {} body - query
	* @param {string} expand - Expand some document fields
	acl,
	 * @example
	 * Body Example:
	 * {
   "query": "",
   "pageNumber": 0,
   "pageSize": 0
}
	*/
	function postWorkspacesWorkspaceIdTagvaluesQuery(workspaceId, body, expand){
		var apipath = '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postWorkspacesWorkspaceIdTagvaluesQuery = postWorkspacesWorkspaceIdTagvaluesQuery;
	/**
     * @summary Get a workspace tag
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} tagId - Tag ID
	* @param {string} expand - Expand some document fields
	acl,
	*/
	function getWorkspacesWorkspaceIdTagvaluesTagId(workspaceId, tagId, expand){
		var apipath = '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        apipath = apipath.replace('{tagId}', tagId);

        if(tagId === undefined && tagId !== null){
			throw 'Missing required  parameter: tagId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWorkspacesWorkspaceIdTagvaluesTagId = getWorkspacesWorkspaceIdTagvaluesTagId;
	/**
     * @summary Update a workspace tag. Will update all documents with the new tag value.
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} tagId - Tag ID
	* @param {} body - Workspace
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "inUse": true,
   "acl": []
}
	*/
	function putWorkspacesWorkspaceIdTagvaluesTagId(workspaceId, tagId, body){
		var apipath = '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        apipath = apipath.replace('{tagId}', tagId);

        if(tagId === undefined && tagId !== null){
			throw 'Missing required  parameter: tagId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putWorkspacesWorkspaceIdTagvaluesTagId = putWorkspacesWorkspaceIdTagvaluesTagId;
	/**
     * @summary Delete workspace tag
	 * @description Delete a tag from a workspace. Will remove this tag from all documents.
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} tagId - Tag ID
	*/
	function deleteWorkspacesWorkspaceIdTagvaluesTagId(workspaceId, tagId){
		var apipath = '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        apipath = apipath.replace('{tagId}', tagId);

        if(tagId === undefined && tagId !== null){
			throw 'Missing required  parameter: tagId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteWorkspacesWorkspaceIdTagvaluesTagId = deleteWorkspacesWorkspaceIdTagvaluesTagId;

    return self;
};
