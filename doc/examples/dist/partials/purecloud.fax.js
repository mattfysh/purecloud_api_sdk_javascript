if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.fax";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.fax = (function (PureCloud) {
	/**
	* @namespace fax/documents
	**/
	/**
	* @namespace fax/documents/content
	**/
	/**
	* @namespace fax/summary
	**/

	var self = {};
	self.documents = self.documents || {};

	/**
     * 
     * @method listFaxDocuments
	 * @memberof fax/documents

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number
	 *
     */
     self.documents.listFaxDocuments = function(pageSize, pageNumber){
		var path = '/api/v1/fax/documents';
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
	self.documents = self.documents || {};

	/**
     * 
     * @method getDocument
	 * @memberof fax/documents

	* @param {string} documentId - Document ID
	 *
     */
     self.documents.getDocument = function(documentId){
		var path = '/api/v1/fax/documents/{documentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.documents = self.documents || {};

	/**
     * 
     * @method updateFaxDocument
	 * @memberof fax/documents

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
	 *
     */
     self.documents.updateFaxDocument = function(documentId, body){
		var path = '/api/v1/fax/documents/{documentId}';
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



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.documents = self.documents || {};

	/**
     * 
     * @method deleteFaxDocument
	 * @memberof fax/documents

	* @param {string} documentId - Document ID
	 *
     */
     self.documents.deleteFaxDocument = function(documentId){
		var path = '/api/v1/fax/documents/{documentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.documents = self.documents || {};
	self.documents.content = self.documents.content || {};

	/**
     * 
     * @method downloadFaxDocument
	 * @memberof fax/documents/content

	* @param {string} documentId - Document ID
	 *
     */
     self.documents.content.downloadFaxDocument = function(documentId){
		var path = '/api/v1/fax/documents/{documentId}/content';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.summary = self.summary || {};

	/**
     * 
     * @method getFaxSummary
	 * @memberof fax/summary
	 *
     */
     self.summary.getFaxSummary = function(){
		var path = '/api/v1/fax/summary';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
