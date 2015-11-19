if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.contentmanagement";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.contentmanagement = (function (PureCloud) {
	/**
	* @namespace contentmanagement/auditquery
	**/
	/**
	* @namespace contentmanagement/documents
	**/
	/**
	* @namespace contentmanagement/documents/audits
	**/
	/**
	* @namespace contentmanagement/documents/content
	**/
	/**
	* @namespace contentmanagement/query
	**/
	/**
	* @namespace contentmanagement/securityprofiles
	**/
	/**
	* @namespace contentmanagement/shared
	**/
	/**
	* @namespace contentmanagement/shares
	**/
	/**
	* @namespace contentmanagement/status
	**/
	/**
	* @namespace contentmanagement/workspaces
	**/
	/**
	* @namespace contentmanagement/workspaces/attributes
	**/
	/**
	* @namespace contentmanagement/workspaces/attributes/instances
	**/
	/**
	* @namespace contentmanagement/workspaces/attributes/instances/query
	**/
	/**
	* @namespace contentmanagement/workspaces/delta
	**/
	/**
	* @namespace contentmanagement/workspaces/members
	**/
	/**
	* @namespace contentmanagement/workspaces/tagvalues
	**/
	/**
	* @namespace contentmanagement/workspaces/tagvalues/query
	**/

	var self = {};
	self.auditquery = self.auditquery || {};

	/**
     * 
     * @method queryAudits
	 * @memberof contentmanagement/auditquery

	* @param {} body - Allows for a filtered query returning facet information
	 * @example
	 * Body Example:
	 * {
   "queryPhrase": "",
   "pageNumber": 0,
   "pageSize": 0,
   "facetNameRequests": [],
   "sort": [],
   "filters": []
}
	 *
     */
     self.auditquery.queryAudits = function(body){
		var path = '/api/v1/contentmanagement/auditquery';
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



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.documents = self.documents || {};

	/**
     * 
     * @method getDocuments
	 * @memberof contentmanagement/documents

	* @param {string} workspaceId - Workspace ID

	* @param {string} name - Name

	* @param {string} expand - Expand some document fields
	acl,
	workspace,

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number

	* @param {string} sortBy - name or dateCreated

	* @param {string} sortOrder - ascending or descending
	 *
     */
     self.documents.getDocuments = function(workspaceId, name, expand, pageSize, pageNumber, sortBy, sortOrder){
		var path = '/api/v1/contentmanagement/documents';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.documents = self.documents || {};

	/**
     * 
     * @method addDocument
	 * @memberof contentmanagement/documents

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
   "tagIds": [],
   "attributes": [],
   "attributeGroupInstances": []
}
	 *
     */
     self.documents.addDocument = function(body, copySource, moveSource, override){
		var path = '/api/v1/contentmanagement/documents';
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



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.documents = self.documents || {};

	/**
     * 
     * @method getDocument
	 * @memberof contentmanagement/documents

	* @param {string} documentId - Document ID

	* @param {string} expand - Expand some document fields
	lockInfo,
	acl,
	workspace,
	 *
     */
     self.documents.getDocument = function(documentId, expand){
		var path = '/api/v1/contentmanagement/documents/{documentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.documents = self.documents || {};

	/**
     * 
     * @method updateDocument
	 * @memberof contentmanagement/documents

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
   "updateAttributes": [],
   "removeAttributes": [],
   "addTags": [],
   "removeTags": [],
   "addTagIds": [],
   "removeTagIds": [],
   "addAttributeGroupInstanceIds": [],
   "removeAttributeGroupInstanceIds": []
}
	 *
     */
     self.documents.updateDocument = function(documentId, body, expand, override){
		var path = '/api/v1/contentmanagement/documents/{documentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{documentId}', documentId);

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



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.documents = self.documents || {};

	/**
     * 
     * @method deleteDocument
	 * @memberof contentmanagement/documents

	* @param {string} documentId - Document ID

	* @param {boolean} override - Override any lock on the document
	 *
     */
     self.documents.deleteDocument = function(documentId, override){
		var path = '/api/v1/contentmanagement/documents/{documentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }


		if(override !== undefined && override !== null){
			queryParameters.override = override;
		}



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.documents = self.documents || {};
	self.documents.audits = self.documents.audits || {};

	/**
     * 
     * @method getAudits
	 * @memberof contentmanagement/documents/audits

	* @param {string} documentId - Document ID

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number

	* @param {string} transactionFilter - Transaction filter

	* @param {string} level - level

	* @param {string} sortBy - Sort by

	* @param {string} sortOrder - Sort order
	 *
     */
     self.documents.audits.getAudits = function(documentId, pageSize, pageNumber, transactionFilter, level, sortBy, sortOrder){
		var path = '/api/v1/contentmanagement/documents/{documentId}/audits';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{documentId}', documentId);

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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.documents = self.documents || {};
	self.documents.content = self.documents.content || {};

	/**
     * 
     * @method downloadDocumentContent
	 * @memberof contentmanagement/documents/content

	* @param {string} documentId - Document ID

	* @param {string} disposition - Request how the content will be downloaded: attached as a file or inline. Default is attachment.
	attachment,
	inline,
	 *
     */
     self.documents.content.downloadDocumentContent = function(documentId, disposition){
		var path = '/api/v1/contentmanagement/documents/{documentId}/content';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }


		if(disposition !== undefined && disposition !== null){
			queryParameters.disposition = disposition;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.documents = self.documents || {};
	self.documents.content = self.documents.content || {};

	/**
     * 
     * @method replaceDocumentContent
	 * @memberof contentmanagement/documents/content

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
	 *
     */
     self.documents.content.replaceDocumentContent = function(documentId, body, override){
		var path = '/api/v1/contentmanagement/documents/{documentId}/content';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(override !== undefined && override !== null){
			queryParameters.override = override;
		}



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.query = self.query || {};

	/**
     * 
     * @method queryContent
	 * @memberof contentmanagement/query

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number

	* @param {string} sortBy - name or dateCreated

	* @param {string} sortOrder - ascending or descending

	* @param {string} queryPhrase - Phrase tokens are ANDed together over all searchable fields

	* @param {string} expand - Expand some document fields
	acl,
	workspace,
	 *
     */
     self.query.queryContent = function(pageSize, pageNumber, sortBy, sortOrder, queryPhrase, expand){
		var path = '/api/v1/contentmanagement/query';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.query = self.query || {};

	/**
     * 
     * @method queryContent
	 * @memberof contentmanagement/query

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
   "filters": []
}
	 *
     */
     self.query.queryContent = function(body, expand){
		var path = '/api/v1/contentmanagement/query';
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



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.securityprofiles = self.securityprofiles || {};

	/**
     * 
     * @method getSecurityProfiles
	 * @memberof contentmanagement/securityprofiles
	 *
     */
     self.securityprofiles.getSecurityProfiles = function(){
		var path = '/api/v1/contentmanagement/securityprofiles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.securityprofiles = self.securityprofiles || {};

	/**
     * 
     * @method getSecurityProfile
	 * @memberof contentmanagement/securityprofiles

	* @param {string} securityProfileId - Security Profile Id
	 *
     */
     self.securityprofiles.getSecurityProfile = function(securityProfileId){
		var path = '/api/v1/contentmanagement/securityprofiles/{securityProfileId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{securityProfileId}', securityProfileId);

        if(securityProfileId === undefined && securityProfileId !== null){
			throw 'Missing required  parameter: securityProfileId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.shared = self.shared || {};

	/**
     * This method requires the download sharing URI obtained in the get document response (downloadSharingUri). Documents may be shared between users in the same workspace. Documents may also be shared between any user by creating a content management share.
     * @method getSharedDocuments
	 * @memberof contentmanagement/shared

	* @param {string} sharedId - Shared ID

	* @param {boolean} redirect - Turn on or off redirect

	* @param {string} disposition - Request how the share content will be downloaded: attached as a file or inline. Default is attachment.
	attachment,
	inline,
	none,

	* @param {string} expand - Expand some document fields
	document.acl,
	 *
     */
     self.shared.getSharedDocuments = function(sharedId, redirect, disposition, expand){
		var path = '/api/v1/contentmanagement/shared/{sharedId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{sharedId}', sharedId);

        if(sharedId === undefined && sharedId !== null){
			throw 'Missing required  parameter: sharedId';
        }


		if(redirect !== undefined && redirect !== null){
			queryParameters.redirect = redirect;
		}


		if(disposition !== undefined && disposition !== null){
			queryParameters.disposition = disposition;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.shares = self.shares || {};

	/**
     * Failing to specify a filter will return 400.
     * @method getAListOfShares
	 * @memberof contentmanagement/shares

	* @param {string} entityId - Filters the shares returned to only the entity specified by the value of this parameter.

	* @param {string} expand - Expand share fields
	member,

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number
	 *
     */
     self.shares.getAListOfShares = function(entityId, expand, pageSize, pageNumber){
		var path = '/api/v1/contentmanagement/shares';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.shares = self.shares || {};

	/**
     * 
     * @method createAShare
	 * @memberof contentmanagement/shares

	* @param {} body - CreateShareRequest - entity id and type and a single member or list of members are required
	 * @example
	 * Body Example:
	 * {
   "sharedEntityType": "",
   "sharedEntity": {
      "kind": "",
      "id": "",
      "name": ""
   },
   "memberType": "",
   "member": {
      "kind": "",
      "id": "",
      "name": ""
   },
   "members": []
}
	 *
     */
     self.shares.createAShare = function(body){
		var path = '/api/v1/contentmanagement/shares';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.shares = self.shares || {};

	/**
     * 
     * @method getAShare
	 * @memberof contentmanagement/shares

	* @param {string} shareId - Share ID

	* @param {string} expand - Expand share fields
	member,
	 *
     */
     self.shares.getAShare = function(shareId, expand){
		var path = '/api/v1/contentmanagement/shares/{shareId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{shareId}', shareId);

        if(shareId === undefined && shareId !== null){
			throw 'Missing required  parameter: shareId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.shares = self.shares || {};

	/**
     * This revokes sharing rights specified in the share record
     * @method deleteAShare
	 * @memberof contentmanagement/shares

	* @param {string} shareId - Share ID
	 *
     */
     self.shares.deleteAShare = function(shareId){
		var path = '/api/v1/contentmanagement/shares/{shareId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{shareId}', shareId);

        if(shareId === undefined && shareId !== null){
			throw 'Missing required  parameter: shareId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.status = self.status || {};

	/**
     * 
     * @method getStatuses
	 * @memberof contentmanagement/status

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number
	 *
     */
     self.status.getStatuses = function(pageSize, pageNumber){
		var path = '/api/v1/contentmanagement/status';
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
	self.status = self.status || {};

	/**
     * 
     * @method getStatus
	 * @memberof contentmanagement/status

	* @param {string} statusId - Status ID
	 *
     */
     self.status.getStatus = function(statusId){
		var path = '/api/v1/contentmanagement/status/{statusId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{statusId}', statusId);

        if(statusId === undefined && statusId !== null){
			throw 'Missing required  parameter: statusId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.status = self.status || {};

	/**
     * 
     * @method cancelStatusCommand
	 * @memberof contentmanagement/status

	* @param {string} statusId - Status ID
	 *
     */
     self.status.cancelStatusCommand = function(statusId){
		var path = '/api/v1/contentmanagement/status/{statusId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{statusId}', statusId);

        if(statusId === undefined && statusId !== null){
			throw 'Missing required  parameter: statusId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.workspaces = self.workspaces || {};

	/**
     * Specifying 'content' access will return all workspaces the user has document access to, while 'admin' access will return all group workspaces the user has administrative rights to.
     * @method getWorkspaces
	 * @memberof contentmanagement/workspaces

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
	 *
     */
     self.workspaces.getWorkspaces = function(pageSize, pageNumber, access, expand){
		var path = '/api/v1/contentmanagement/workspaces';
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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.workspaces = self.workspaces || {};

	/**
     * 
     * @method createGroupWorkspace
	 * @memberof contentmanagement/workspaces

	* @param {} body - Workspace
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "bucket": ""
}
	 *
     */
     self.workspaces.createGroupWorkspace = function(body){
		var path = '/api/v1/contentmanagement/workspaces';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.workspaces = self.workspaces || {};

	/**
     * 
     * @method getWorkspace
	 * @memberof contentmanagement/workspaces

	* @param {string} workspaceId - Workspace ID

	* @param {string} expand - Expand some workspace fields
	summary,
	acl,
	 *
     */
     self.workspaces.getWorkspace = function(workspaceId, expand){
		var path = '/api/v1/contentmanagement/workspaces/{workspaceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.workspaces = self.workspaces || {};

	/**
     * 
     * @method updateWorkspace
	 * @memberof contentmanagement/workspaces

	* @param {string} workspaceId - Workspace ID

	* @param {} body - Workspace
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
   "acl": [],
   "selfUri": ""
}
	 *
     */
     self.workspaces.updateWorkspace = function(workspaceId, body){
		var path = '/api/v1/contentmanagement/workspaces/{workspaceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.workspaces = self.workspaces || {};

	/**
     * 
     * @method deleteWorkspace
	 * @memberof contentmanagement/workspaces

	* @param {string} workspaceId - Workspace ID

	* @param {string} moveChildrenToWorkspaceId - 
	 *
     */
     self.workspaces.deleteWorkspace = function(workspaceId, moveChildrenToWorkspaceId){
		var path = '/api/v1/contentmanagement/workspaces/{workspaceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }


		if(moveChildrenToWorkspaceId !== undefined && moveChildrenToWorkspaceId !== null){
			queryParameters.moveChildrenToWorkspaceId = moveChildrenToWorkspaceId;
		}



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.workspaces = self.workspaces || {};
	self.workspaces.attributes = self.workspaces.attributes || {};

	/**
     * 
     * @method getWorkspaceAttributes
	 * @memberof contentmanagement/workspaces/attributes

	* @param {string} workspaceId - Workspace ID

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number
	 *
     */
     self.workspaces.attributes.getWorkspaceAttributes = function(workspaceId, pageSize, pageNumber){
		var path = '/api/v1/contentmanagement/workspaces/{workspaceId}/attributes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.workspaces = self.workspaces || {};
	self.workspaces.attributes = self.workspaces.attributes || {};

	/**
     * 
     * @method createWorkspaceAttribute
	 * @memberof contentmanagement/workspaces/attributes

	* @param {string} workspaceId - Workspace ID

	* @param {} body - workspaceAttribute
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "type": "",
   "restrictions": {
      "date": {},
      "number": {},
      "string": {},
      "list": {}
   },
   "format": "",
   "multipleValues": true,
   "inUse": true,
   "memberAttributes": [],
   "selfUri": ""
}
	 *
     */
     self.workspaces.attributes.createWorkspaceAttribute = function(workspaceId, body){
		var path = '/api/v1/contentmanagement/workspaces/{workspaceId}/attributes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.workspaces = self.workspaces || {};
	self.workspaces.attributes = self.workspaces.attributes || {};

	/**
     * 
     * @method getWorkspaceAttribute
	 * @memberof contentmanagement/workspaces/attributes

	* @param {string} workspaceId - Workspace ID

	* @param {string} attributeId - Attribute ID
	 *
     */
     self.workspaces.attributes.getWorkspaceAttribute = function(workspaceId, attributeId){
		var path = '/api/v1/contentmanagement/workspaces/{workspaceId}/attributes/{attributeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        path = path.replace('{attributeId}', attributeId);

        if(attributeId === undefined && attributeId !== null){
			throw 'Missing required  parameter: attributeId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.workspaces = self.workspaces || {};
	self.workspaces.attributes = self.workspaces.attributes || {};

	/**
     * Attribute value will be updated in all documents.
     * @method updateWorkspaceAttribute
	 * @memberof contentmanagement/workspaces/attributes

	* @param {string} workspaceId - Workspace ID

	* @param {string} attributeId - Attribute ID

	* @param {} body - Workspace
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "type": "",
   "restrictions": {
      "date": {},
      "number": {},
      "string": {},
      "list": {}
   },
   "format": "",
   "multipleValues": true,
   "inUse": true,
   "memberAttributes": [],
   "selfUri": ""
}
	 *
     */
     self.workspaces.attributes.updateWorkspaceAttribute = function(workspaceId, attributeId, body){
		var path = '/api/v1/contentmanagement/workspaces/{workspaceId}/attributes/{attributeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        path = path.replace('{attributeId}', attributeId);

        if(attributeId === undefined && attributeId !== null){
			throw 'Missing required  parameter: attributeId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.workspaces = self.workspaces || {};
	self.workspaces.attributes = self.workspaces.attributes || {};

	/**
     * Attribute will be removed from all documents.
     * @method deleteWorkspaceAttribute
	 * @memberof contentmanagement/workspaces/attributes

	* @param {string} workspaceId - Workspace ID

	* @param {string} attributeId - Attribute ID
	 *
     */
     self.workspaces.attributes.deleteWorkspaceAttribute = function(workspaceId, attributeId){
		var path = '/api/v1/contentmanagement/workspaces/{workspaceId}/attributes/{attributeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        path = path.replace('{attributeId}', attributeId);

        if(attributeId === undefined && attributeId !== null){
			throw 'Missing required  parameter: attributeId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.workspaces = self.workspaces || {};
	self.workspaces.attributes = self.workspaces.attributes || {};
	self.workspaces.attributes.instances = self.workspaces.attributes.instances || {};

	/**
     * Create a workspace attribute group instance. A group instance represents an ordered collection of attribute values that can be associated with documents. An instance is uniquely defined by an attribute group and the attribute values that make it up. Once created, the new instance will be assigned an instance ID that can be used in further API operations. A group instance value can be assigned to one or more workspace documents.
     * @method createAttributeGroupInstance
	 * @memberof contentmanagement/workspaces/attributes/instances

	* @param {string} workspaceId - Workspace ID

	* @param {string} attributeId - Attribute ID

	* @param {} body - instance
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "members": [],
   "workspace": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "attribute": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "selfUri": ""
}
	 *
     */
     self.workspaces.attributes.instances.createAttributeGroupInstance = function(workspaceId, attributeId, body){
		var path = '/api/v1/contentmanagement/workspaces/{workspaceId}/attributes/{attributeId}/instances';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        path = path.replace('{attributeId}', attributeId);

        if(attributeId === undefined && attributeId !== null){
			throw 'Missing required  parameter: attributeId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.workspaces = self.workspaces || {};
	self.workspaces.attributes = self.workspaces.attributes || {};
	self.workspaces.attributes.instances = self.workspaces.attributes.instances || {};
	self.workspaces.attributes.instances.query = self.workspaces.attributes.instances.query || {};

	/**
     * 
     * @method queryAttributeGroupInstance
	 * @memberof contentmanagement/workspaces/attributes/instances/query

	* @param {string} workspaceId - Workspace ID

	* @param {string} attributeId - Attribute ID

	* @param {} body - Provides a way to query or locate specific attribute group instances. The query request provides the ability to broadly match all instances or filter the results based on matching specific fields defined by the attribute group.
	 * @example
	 * Body Example:
	 * {
   "pageNumber": 0,
   "pageSize": 0,
   "sort": [],
   "members": []
}
	 *
     */
     self.workspaces.attributes.instances.query.queryAttributeGroupInstance = function(workspaceId, attributeId, body){
		var path = '/api/v1/contentmanagement/workspaces/{workspaceId}/attributes/{attributeId}/instances/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        path = path.replace('{attributeId}', attributeId);

        if(attributeId === undefined && attributeId !== null){
			throw 'Missing required  parameter: attributeId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.workspaces = self.workspaces || {};
	self.workspaces.attributes = self.workspaces.attributes || {};
	self.workspaces.attributes.instances = self.workspaces.attributes.instances || {};

	/**
     * 
     * @method getAttributeGroupInstance
	 * @memberof contentmanagement/workspaces/attributes/instances

	* @param {string} workspaceId - Workspace ID

	* @param {string} attributeId - Attribute ID

	* @param {string} instanceId - Instance ID
	 *
     */
     self.workspaces.attributes.instances.getAttributeGroupInstance = function(workspaceId, attributeId, instanceId){
		var path = '/api/v1/contentmanagement/workspaces/{workspaceId}/attributes/{attributeId}/instances/{instanceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        path = path.replace('{attributeId}', attributeId);

        if(attributeId === undefined && attributeId !== null){
			throw 'Missing required  parameter: attributeId';
        }

        path = path.replace('{instanceId}', instanceId);

        if(instanceId === undefined && instanceId !== null){
			throw 'Missing required  parameter: instanceId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.workspaces = self.workspaces || {};
	self.workspaces.attributes = self.workspaces.attributes || {};
	self.workspaces.attributes.instances = self.workspaces.attributes.instances || {};

	/**
     * 
     * @method updateAttributeGroupInstance
	 * @memberof contentmanagement/workspaces/attributes/instances

	* @param {string} workspaceId - Workspace ID

	* @param {string} attributeId - Attribute ID

	* @param {string} instanceId - Instance ID

	* @param {} body - Workspace
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "members": [],
   "workspace": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "attribute": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "selfUri": ""
}
	 *
     */
     self.workspaces.attributes.instances.updateAttributeGroupInstance = function(workspaceId, attributeId, instanceId, body){
		var path = '/api/v1/contentmanagement/workspaces/{workspaceId}/attributes/{attributeId}/instances/{instanceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        path = path.replace('{attributeId}', attributeId);

        if(attributeId === undefined && attributeId !== null){
			throw 'Missing required  parameter: attributeId';
        }

        path = path.replace('{instanceId}', instanceId);

        if(instanceId === undefined && instanceId !== null){
			throw 'Missing required  parameter: instanceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.workspaces = self.workspaces || {};
	self.workspaces.attributes = self.workspaces.attributes || {};
	self.workspaces.attributes.instances = self.workspaces.attributes.instances || {};

	/**
     * 
     * @method deleteAttributeGroupInstance
	 * @memberof contentmanagement/workspaces/attributes/instances

	* @param {string} workspaceId - Workspace ID

	* @param {string} attributeId - Attribute ID

	* @param {string} instanceId - Instance ID
	 *
     */
     self.workspaces.attributes.instances.deleteAttributeGroupInstance = function(workspaceId, attributeId, instanceId){
		var path = '/api/v1/contentmanagement/workspaces/{workspaceId}/attributes/{attributeId}/instances/{instanceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        path = path.replace('{attributeId}', attributeId);

        if(attributeId === undefined && attributeId !== null){
			throw 'Missing required  parameter: attributeId';
        }

        path = path.replace('{instanceId}', instanceId);

        if(instanceId === undefined && instanceId !== null){
			throw 'Missing required  parameter: instanceId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.workspaces = self.workspaces || {};
	self.workspaces.delta = self.workspaces.delta || {};

	/**
     * Only usable on personal workspaces.
     * @method retrieveDelta
	 * @memberof contentmanagement/workspaces/delta

	* @param {string} workspaceId - Workspace ID

	* @param {} body - DeltaRequest
	 * @example
	 * Body Example:
	 * {
   "contextToken": ""
}
	 *
     */
     self.workspaces.delta.retrieveDelta = function(workspaceId, body){
		var path = '/api/v1/contentmanagement/workspaces/{workspaceId}/delta';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.workspaces = self.workspaces || {};
	self.workspaces.members = self.workspaces.members || {};

	/**
     * 
     * @method getWorkspaceMembers
	 * @memberof contentmanagement/workspaces/members

	* @param {string} workspaceId - Workspace ID

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number

	* @param {string} expand - Expand workspace member fields
	member,
	 *
     */
     self.workspaces.members.getWorkspaceMembers = function(workspaceId, pageSize, pageNumber, expand){
		var path = '/api/v1/contentmanagement/workspaces/{workspaceId}/members';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{workspaceId}', workspaceId);

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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.workspaces = self.workspaces || {};
	self.workspaces.members = self.workspaces.members || {};

	/**
     * 
     * @method getWorkspaceMember
	 * @memberof contentmanagement/workspaces/members

	* @param {string} workspaceId - Workspace ID

	* @param {string} memberId - Member ID

	* @param {string} expand - Expand workspace member fields
	member,
	 *
     */
     self.workspaces.members.getWorkspaceMember = function(workspaceId, memberId, expand){
		var path = '/api/v1/contentmanagement/workspaces/{workspaceId}/members/{memberId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        path = path.replace('{memberId}', memberId);

        if(memberId === undefined && memberId !== null){
			throw 'Missing required  parameter: memberId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.workspaces = self.workspaces || {};
	self.workspaces.members = self.workspaces.members || {};

	/**
     * 
     * @method addWorkspaceMember
	 * @memberof contentmanagement/workspaces/members

	* @param {string} workspaceId - Workspace ID

	* @param {string} memberId - Member ID

	* @param {} body - Workspace
	 * @example
	 * Body Example:
	 * {
   "id": "",
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
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "status": {},
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "outOfOffice": {},
      "permissions": [],
      "selfUri": "",
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": "",
      "lastStationUri": ""
   },
   "group": {
      "id": "",
      "name": "",
      "description": "",
      "memberCount": 0,
      "groupType": "",
      "groupImages": {},
      "groupState": "",
      "selfUri": ""
   },
   "securityProfile": {
      "id": "",
      "name": "",
      "permissions": [],
      "selfUri": ""
   },
   "selfUri": ""
}
	 *
     */
     self.workspaces.members.addWorkspaceMember = function(workspaceId, memberId, body){
		var path = '/api/v1/contentmanagement/workspaces/{workspaceId}/members/{memberId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        path = path.replace('{memberId}', memberId);

        if(memberId === undefined && memberId !== null){
			throw 'Missing required  parameter: memberId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.workspaces = self.workspaces || {};
	self.workspaces.members = self.workspaces.members || {};

	/**
     * 
     * @method deleteWorkspaceMember
	 * @memberof contentmanagement/workspaces/members

	* @param {string} workspaceId - Workspace ID

	* @param {string} memberId - Member ID
	 *
     */
     self.workspaces.members.deleteWorkspaceMember = function(workspaceId, memberId){
		var path = '/api/v1/contentmanagement/workspaces/{workspaceId}/members/{memberId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        path = path.replace('{memberId}', memberId);

        if(memberId === undefined && memberId !== null){
			throw 'Missing required  parameter: memberId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.workspaces = self.workspaces || {};
	self.workspaces.tagvalues = self.workspaces.tagvalues || {};

	/**
     * 
     * @method getWorkspaceTags
	 * @memberof contentmanagement/workspaces/tagvalues

	* @param {string} workspaceId - Workspace ID

	* @param {string} value - filter the list of tags returned

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number

	* @param {string} expand - Expand some document fields
	acl,
	 *
     */
     self.workspaces.tagvalues.getWorkspaceTags = function(workspaceId, value, pageSize, pageNumber, expand){
		var path = '/api/v1/contentmanagement/workspaces/{workspaceId}/tagvalues';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{workspaceId}', workspaceId);

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



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.workspaces = self.workspaces || {};
	self.workspaces.tagvalues = self.workspaces.tagvalues || {};

	/**
     * 
     * @method createWorkspaceTag
	 * @memberof contentmanagement/workspaces/tagvalues

	* @param {string} workspaceId - Workspace ID

	* @param {} body - tag
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "inUse": true,
   "acl": [],
   "selfUri": ""
}
	 *
     */
     self.workspaces.tagvalues.createWorkspaceTag = function(workspaceId, body){
		var path = '/api/v1/contentmanagement/workspaces/{workspaceId}/tagvalues';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.workspaces = self.workspaces || {};
	self.workspaces.tagvalues = self.workspaces.tagvalues || {};
	self.workspaces.tagvalues.query = self.workspaces.tagvalues.query || {};

	/**
     * 
     * @method queryWorkspaceTags
	 * @memberof contentmanagement/workspaces/tagvalues/query

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
	 *
     */
     self.workspaces.tagvalues.query.queryWorkspaceTags = function(workspaceId, body, expand){
		var path = '/api/v1/contentmanagement/workspaces/{workspaceId}/tagvalues/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.workspaces = self.workspaces || {};
	self.workspaces.tagvalues = self.workspaces.tagvalues || {};

	/**
     * 
     * @method getWorkspaceTag
	 * @memberof contentmanagement/workspaces/tagvalues

	* @param {string} workspaceId - Workspace ID

	* @param {string} tagId - Tag ID

	* @param {string} expand - Expand some document fields
	acl,
	 *
     */
     self.workspaces.tagvalues.getWorkspaceTag = function(workspaceId, tagId, expand){
		var path = '/api/v1/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        path = path.replace('{tagId}', tagId);

        if(tagId === undefined && tagId !== null){
			throw 'Missing required  parameter: tagId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.workspaces = self.workspaces || {};
	self.workspaces.tagvalues = self.workspaces.tagvalues || {};

	/**
     * 
     * @method updateWorkspaceTag
	 * @memberof contentmanagement/workspaces/tagvalues

	* @param {string} workspaceId - Workspace ID

	* @param {string} tagId - Tag ID

	* @param {} body - Workspace
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "inUse": true,
   "acl": [],
   "selfUri": ""
}
	 *
     */
     self.workspaces.tagvalues.updateWorkspaceTag = function(workspaceId, tagId, body){
		var path = '/api/v1/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        path = path.replace('{tagId}', tagId);

        if(tagId === undefined && tagId !== null){
			throw 'Missing required  parameter: tagId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.workspaces = self.workspaces || {};
	self.workspaces.tagvalues = self.workspaces.tagvalues || {};

	/**
     * Delete a tag from a workspace. Will remove this tag from all documents.
     * @method deleteWorkspaceTag
	 * @memberof contentmanagement/workspaces/tagvalues

	* @param {string} workspaceId - Workspace ID

	* @param {string} tagId - Tag ID
	 *
     */
     self.workspaces.tagvalues.deleteWorkspaceTag = function(workspaceId, tagId){
		var path = '/api/v1/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        path = path.replace('{tagId}', tagId);

        if(tagId === undefined && tagId !== null){
			throw 'Missing required  parameter: tagId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
