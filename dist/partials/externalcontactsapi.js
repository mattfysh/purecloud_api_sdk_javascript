//API VERSION - 
/**
* @class
* @example
* var api = new ExternalContactsApi(pureCloudSession);
*/
var ExternalContactsApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Search for External Contacts
	 * @memberOf ExternalContactsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} q - User supplied search keywords (no special syntax is currently supported)
	* @param {string} sortOrder - Sort order
	* @param {array} expand - which fields, if any, to expand
	*/
	function getContacts(pageSize, pageNumber, q, sortOrder, expand){
		var apipath = '/api/v2/externalcontacts/contacts';
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


		if(q !== undefined && q !== null){
			queryParameters.q = q;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContacts = getContacts;
	/**
     * @summary Create an ExternalContact
	 * @memberOf ExternalContactsApi#
	* @param {} body - ExternalContact
	 * @example
	 * Body Example:
	 * {
   "firstName": "",
   "middleName": "",
   "lastName": "",
   "salutation": "",
   "title": "",
   "workPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "cellPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "homePhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "otherPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "workEmail": "",
   "personalEmail": "",
   "otherEmail": "",
   "address": {
      "address1": "",
      "address2": "",
      "city": "",
      "state": "",
      "postalCode": "",
      "countryCode": ""
   },
   "modifyDate": "",
   "createDate": "",
   "externalOrganization": {
      "name": "",
      "companyType": "",
      "industry": "",
      "primaryContactId": "",
      "address": {},
      "phoneNumber": {},
      "faxNumber": {},
      "employeeCount": 0,
      "revenue": 0,
      "tags": [],
      "websites": [],
      "tickers": [],
      "modifyDate": "",
      "createDate": ""
   }
}
	*/
	function postContacts(body){
		var apipath = '/api/v2/externalcontacts/contacts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postContacts = postContacts;
	/**
     * @summary Fetch a ExternalContact
	 * @memberOf ExternalContactsApi#
	* @param {string} contactId - ExternalContact ID
	* @param {array} expand - which fields, if any, to expand
	*/
	function getContactsContactId(contactId, expand){
		var apipath = '/api/v2/externalcontacts/contacts/{contactId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContactsContactId = getContactsContactId;
	/**
     * @summary Update a externalContact
	 * @memberOf ExternalContactsApi#
	* @param {string} contactId - ExternalContact ID
	* @param {} body - ExternalContact
	 * @example
	 * Body Example:
	 * {
   "firstName": "",
   "middleName": "",
   "lastName": "",
   "salutation": "",
   "title": "",
   "workPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "cellPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "homePhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "otherPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "workEmail": "",
   "personalEmail": "",
   "otherEmail": "",
   "address": {
      "address1": "",
      "address2": "",
      "city": "",
      "state": "",
      "postalCode": "",
      "countryCode": ""
   },
   "modifyDate": "",
   "createDate": "",
   "externalOrganization": {
      "name": "",
      "companyType": "",
      "industry": "",
      "primaryContactId": "",
      "address": {},
      "phoneNumber": {},
      "faxNumber": {},
      "employeeCount": 0,
      "revenue": 0,
      "tags": [],
      "websites": [],
      "tickers": [],
      "modifyDate": "",
      "createDate": ""
   }
}
	*/
	function putContactsContactId(contactId, body){
		var apipath = '/api/v2/externalcontacts/contacts/{contactId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putContactsContactId = putContactsContactId;
	/**
     * @summary Delete a contact
	 * @memberOf ExternalContactsApi#
	* @param {string} contactId - ExternalContact ID
	*/
	function deleteContactsContactId(contactId){
		var apipath = '/api/v2/externalcontacts/contacts/{contactId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteContactsContactId = deleteContactsContactId;
	/**
     * @summary List Notes for an ExternalContact
	 * @memberOf ExternalContactsApi#
	* @param {string} contactId - ExternalContact Id
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortOrder - Sort order
	*/
	function getContactsContactIdNotes(contactId, pageSize, pageNumber, sortOrder){
		var apipath = '/api/v2/externalcontacts/contacts/{contactId}/notes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContactsContactIdNotes = getContactsContactIdNotes;
	/**
     * @summary Create a Note for an ExternalContact
	 * @memberOf ExternalContactsApi#
	* @param {string} contactId - ExternalContact Id
	* @param {} body - ExternalContact
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "noteText": "",
   "modifyDate": "",
   "createDate": ""
}
	*/
	function postContactsContactIdNotes(contactId, body){
		var apipath = '/api/v2/externalcontacts/contacts/{contactId}/notes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postContactsContactIdNotes = postContactsContactIdNotes;
	/**
     * @summary Fetch a note for a contact
	 * @memberOf ExternalContactsApi#
	* @param {string} contactId - ExternalContact Id
	* @param {string} noteId - Note Id
	*/
	function getContactsContactIdNotesNoteId(contactId, noteId){
		var apipath = '/api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }

        apipath = apipath.replace('{noteId}', noteId);

        if(noteId === undefined && noteId !== null){
			throw 'Missing required  parameter: noteId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContactsContactIdNotesNoteId = getContactsContactIdNotesNoteId;
	/**
     * @summary Update a note for a contact
	 * @memberOf ExternalContactsApi#
	* @param {string} contactId - ExternalContact Id
	* @param {string} noteId - Note Id
	* @param {} body - Note
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "noteText": "",
   "modifyDate": "",
   "createDate": ""
}
	*/
	function putContactsContactIdNotesNoteId(contactId, noteId, body){
		var apipath = '/api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }

        apipath = apipath.replace('{noteId}', noteId);

        if(noteId === undefined && noteId !== null){
			throw 'Missing required  parameter: noteId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putContactsContactIdNotesNoteId = putContactsContactIdNotesNoteId;
	/**
     * @summary Delete a note for a contact
	 * @memberOf ExternalContactsApi#
	* @param {string} contactId - ExternalContact Id
	* @param {string} noteId - Note Id
	*/
	function deleteContactsContactIdNotesNoteId(contactId, noteId){
		var apipath = '/api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }

        apipath = apipath.replace('{noteId}', noteId);

        if(noteId === undefined && noteId !== null){
			throw 'Missing required  parameter: noteId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteContactsContactIdNotesNoteId = deleteContactsContactIdNotesNoteId;
	/**
     * @summary Search for External Organizations
	 * @memberOf ExternalContactsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} q - Search query
	* @param {string} sortOrder - Sort order
	*/
	function getOrganizations(pageSize, pageNumber, q, sortOrder){
		var apipath = '/api/v2/externalcontacts/organizations';
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


		if(q !== undefined && q !== null){
			queryParameters.q = q;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOrganizations = getOrganizations;
	/**
     * @summary Create an External Organization
	 * @memberOf ExternalContactsApi#
	* @param {} body - ExternalOrganization
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "companyType": "",
   "industry": "",
   "primaryContactId": "",
   "address": {
      "address1": "",
      "address2": "",
      "city": "",
      "state": "",
      "postalCode": "",
      "countryCode": ""
   },
   "phoneNumber": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "faxNumber": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "employeeCount": 0,
   "revenue": 0,
   "tags": [],
   "websites": [],
   "tickers": [],
   "modifyDate": "",
   "createDate": ""
}
	*/
	function postOrganizations(body){
		var apipath = '/api/v2/externalcontacts/organizations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postOrganizations = postOrganizations;
	/**
     * @summary Fetch an External Organization
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization ID
	*/
	function getOrganizationsExternalorganizationId(externalOrganizationId){
		var apipath = '/api/v2/externalcontacts/organizations/{externalOrganizationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{externalOrganizationId}', externalOrganizationId);

        if(externalOrganizationId === undefined && externalOrganizationId !== null){
			throw 'Missing required  parameter: externalOrganizationId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOrganizationsExternalorganizationId = getOrganizationsExternalorganizationId;
	/**
     * @summary Update an External Organization
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization ID
	* @param {} body - ExternalOrganization
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "companyType": "",
   "industry": "",
   "primaryContactId": "",
   "address": {
      "address1": "",
      "address2": "",
      "city": "",
      "state": "",
      "postalCode": "",
      "countryCode": ""
   },
   "phoneNumber": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "faxNumber": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "employeeCount": 0,
   "revenue": 0,
   "tags": [],
   "websites": [],
   "tickers": [],
   "modifyDate": "",
   "createDate": ""
}
	*/
	function putOrganizationsExternalorganizationId(externalOrganizationId, body){
		var apipath = '/api/v2/externalcontacts/organizations/{externalOrganizationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{externalOrganizationId}', externalOrganizationId);

        if(externalOrganizationId === undefined && externalOrganizationId !== null){
			throw 'Missing required  parameter: externalOrganizationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putOrganizationsExternalorganizationId = putOrganizationsExternalorganizationId;
	/**
     * @summary Delete an External Organization
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization ID
	*/
	function deleteOrganizationsExternalorganizationId(externalOrganizationId){
		var apipath = '/api/v2/externalcontacts/organizations/{externalOrganizationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{externalOrganizationId}', externalOrganizationId);

        if(externalOrganizationId === undefined && externalOrganizationId !== null){
			throw 'Missing required  parameter: externalOrganizationId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteOrganizationsExternalorganizationId = deleteOrganizationsExternalorganizationId;
	/**
     * @summary Search for External Contacts
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} q - User supplied search keywords (no special syntax is currently supported)
	* @param {string} sortOrder - Sort order
	* @param {array} expand - which fields, if any, to expand
	*/
	function getOrganizationsExternalorganizationIdContacts(externalOrganizationId, pageSize, pageNumber, q, sortOrder, expand){
		var apipath = '/api/v2/externalcontacts/organizations/{externalOrganizationId}/contacts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{externalOrganizationId}', externalOrganizationId);

        if(externalOrganizationId === undefined && externalOrganizationId !== null){
			throw 'Missing required  parameter: externalOrganizationId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(q !== undefined && q !== null){
			queryParameters.q = q;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOrganizationsExternalorganizationIdContacts = getOrganizationsExternalorganizationIdContacts;
	/**
     * @summary List Notes for an External Organization
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization Id
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortOrder - Sort order
	*/
	function getOrganizationsExternalorganizationIdNotes(externalOrganizationId, pageSize, pageNumber, sortOrder){
		var apipath = '/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{externalOrganizationId}', externalOrganizationId);

        if(externalOrganizationId === undefined && externalOrganizationId !== null){
			throw 'Missing required  parameter: externalOrganizationId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOrganizationsExternalorganizationIdNotes = getOrganizationsExternalorganizationIdNotes;
	/**
     * @summary Create a Note for an External Organization
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization Id
	* @param {} body - ExternalContact
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "noteText": "",
   "modifyDate": "",
   "createDate": ""
}
	*/
	function postOrganizationsExternalorganizationIdNotes(externalOrganizationId, body){
		var apipath = '/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{externalOrganizationId}', externalOrganizationId);

        if(externalOrganizationId === undefined && externalOrganizationId !== null){
			throw 'Missing required  parameter: externalOrganizationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postOrganizationsExternalorganizationIdNotes = postOrganizationsExternalorganizationIdNotes;
	/**
     * @summary Fetch a note
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization Id
	* @param {string} noteId - Note Id
	*/
	function getOrganizationsExternalorganizationIdNotesNoteId(externalOrganizationId, noteId){
		var apipath = '/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{externalOrganizationId}', externalOrganizationId);

        if(externalOrganizationId === undefined && externalOrganizationId !== null){
			throw 'Missing required  parameter: externalOrganizationId';
        }

        apipath = apipath.replace('{noteId}', noteId);

        if(noteId === undefined && noteId !== null){
			throw 'Missing required  parameter: noteId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOrganizationsExternalorganizationIdNotesNoteId = getOrganizationsExternalorganizationIdNotesNoteId;
	/**
     * @summary Update a note
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization Id
	* @param {string} noteId - Note Id
	* @param {} body - Note
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "noteText": "",
   "modifyDate": "",
   "createDate": ""
}
	*/
	function putOrganizationsExternalorganizationIdNotesNoteId(externalOrganizationId, noteId, body){
		var apipath = '/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{externalOrganizationId}', externalOrganizationId);

        if(externalOrganizationId === undefined && externalOrganizationId !== null){
			throw 'Missing required  parameter: externalOrganizationId';
        }

        apipath = apipath.replace('{noteId}', noteId);

        if(noteId === undefined && noteId !== null){
			throw 'Missing required  parameter: noteId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putOrganizationsExternalorganizationIdNotesNoteId = putOrganizationsExternalorganizationIdNotesNoteId;
	/**
     * @summary Delete a note
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization Id
	* @param {string} noteId - Note Id
	*/
	function deleteOrganizationsExternalorganizationIdNotesNoteId(externalOrganizationId, noteId){
		var apipath = '/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{externalOrganizationId}', externalOrganizationId);

        if(externalOrganizationId === undefined && externalOrganizationId !== null){
			throw 'Missing required  parameter: externalOrganizationId';
        }

        apipath = apipath.replace('{noteId}', noteId);

        if(noteId === undefined && noteId !== null){
			throw 'Missing required  parameter: noteId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteOrganizationsExternalorganizationIdNotesNoteId = deleteOrganizationsExternalorganizationIdNotesNoteId;
	/**
     * @summary Fetch an External Organization
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortOrder - Sort order
	*/
	function getOrganizationsExternalorganizationIdRelationships(externalOrganizationId, pageSize, pageNumber, sortOrder){
		var apipath = '/api/v2/externalcontacts/organizations/{externalOrganizationId}/relationships';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{externalOrganizationId}', externalOrganizationId);

        if(externalOrganizationId === undefined && externalOrganizationId !== null){
			throw 'Missing required  parameter: externalOrganizationId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOrganizationsExternalorganizationIdRelationships = getOrganizationsExternalorganizationIdRelationships;
	/**
     * @summary Create a relationship
	 * @memberOf ExternalContactsApi#
	* @param {} body - Relationship
	 * @example
	 * Body Example:
	 * {
   "name": "",
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
   "externalOrganization": {
      "name": "",
      "companyType": "",
      "industry": "",
      "primaryContactId": "",
      "address": {},
      "phoneNumber": {},
      "faxNumber": {},
      "employeeCount": 0,
      "revenue": 0,
      "tags": [],
      "websites": [],
      "tickers": [],
      "modifyDate": "",
      "createDate": ""
   },
   "relationship": ""
}
	*/
	function postRelationships(body){
		var apipath = '/api/v2/externalcontacts/relationships';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postRelationships = postRelationships;
	/**
     * @summary Fetch a relationship
	 * @memberOf ExternalContactsApi#
	* @param {string} relationshipId - Relationship Id
	*/
	function getRelationshipsRelationshipId(relationshipId){
		var apipath = '/api/v2/externalcontacts/relationships/{relationshipId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{relationshipId}', relationshipId);

        if(relationshipId === undefined && relationshipId !== null){
			throw 'Missing required  parameter: relationshipId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRelationshipsRelationshipId = getRelationshipsRelationshipId;
	/**
     * @summary Update a relationship
	 * @memberOf ExternalContactsApi#
	* @param {string} relationshipId - Relationship Id
	* @param {} body - Relationship
	 * @example
	 * Body Example:
	 * {
   "name": "",
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
   "externalOrganization": {
      "name": "",
      "companyType": "",
      "industry": "",
      "primaryContactId": "",
      "address": {},
      "phoneNumber": {},
      "faxNumber": {},
      "employeeCount": 0,
      "revenue": 0,
      "tags": [],
      "websites": [],
      "tickers": [],
      "modifyDate": "",
      "createDate": ""
   },
   "relationship": ""
}
	*/
	function putRelationshipsRelationshipId(relationshipId, body){
		var apipath = '/api/v2/externalcontacts/relationships/{relationshipId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{relationshipId}', relationshipId);

        if(relationshipId === undefined && relationshipId !== null){
			throw 'Missing required  parameter: relationshipId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putRelationshipsRelationshipId = putRelationshipsRelationshipId;
	/**
     * @summary Delete a relationship
	 * @memberOf ExternalContactsApi#
	* @param {string} relationshipId - Relationship Id
	*/
	function deleteRelationshipsRelationshipId(relationshipId){
		var apipath = '/api/v2/externalcontacts/relationships/{relationshipId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{relationshipId}', relationshipId);

        if(relationshipId === undefined && relationshipId !== null){
			throw 'Missing required  parameter: relationshipId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteRelationshipsRelationshipId = deleteRelationshipsRelationshipId;

    return self;
};
