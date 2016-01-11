/**
* @class
* @example
* var api = new FaxApi(pureCloudSession);
*/
var FaxApi = function (pureCloudSession) {
	/**
     * @summary Get a list of fax documents.
	 * @description 
	 * @memberOf FaxApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getDocuments(pageSize, pageNumber){
		var apipath = '/api/v1/fax/documents';
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
	self.getDocuments = getDocuments;
	/**
     * @summary Get a document.
	 * @description 
	 * @memberOf FaxApi#
	* @param {string} documentId - Document ID
	*/
	function getDocument(documentId){
		var apipath = '/api/v1/fax/documents/{documentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDocument = getDocument;
	/**
     * @summary Update a fax document.
	 * @description 
	 * @memberOf FaxApi#
	* @param {string} documentId - Document ID
	* @param {} body - Document
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "contentUri": "",
   "workspace": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "createdBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "contentType": "",
   "contentLength": 0,
   "filename": "",
   "read": true,
   "pageCount": 0,
   "callerAddress": "",
   "receiverAddress": "",
   "thumbnails": [],
   "sharingUri": "",
   "downloadSharingUri": "",
   "selfUri": ""
}
	*/
	function updateDocument(documentId, body){
		var apipath = '/api/v1/fax/documents/{documentId}';
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


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.updateDocument = updateDocument;
	/**
     * @summary Delete a fax document.
	 * @description 
	 * @memberOf FaxApi#
	* @param {string} documentId - Document ID
	*/
	function deleteDocument(documentId){
		var apipath = '/api/v1/fax/documents/{documentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteDocument = deleteDocument;
	/**
     * @summary Download a fax document.
	 * @description 
	 * @memberOf FaxApi#
	* @param {string} documentId - Document ID
	*/
	function getDocumentContent(documentId){
		var apipath = '/api/v1/fax/documents/{documentId}/content';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDocumentContent = getDocumentContent;
	/**
     * @summary Get fax summary
	 * @description 
	 * @memberOf FaxApi#
	*/
	function getSummary(){
		var apipath = '/api/v1/fax/summary';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSummary = getSummary;

    return self;
};
