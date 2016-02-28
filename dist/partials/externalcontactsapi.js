/**
* @class
* @example
* var api = new ExternalContactsApi(pureCloudSession);
*/
var ExternalContactsApi = function (pureCloudSession) {
	var self = this;
	/**
     * @summary Search for External Contacts
	 * @memberOf ExternalContactsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} q - User supplied search keywords (no special syntax is currently supported)
	* @param {string} sortOrder - Sort order
	*/
	function getExternalcontactsContacts(pageSize, pageNumber, q, sortOrder){
		var apipath = '/api/v1/externalcontacts/contacts';
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
	self.getExternalcontactsContacts = getExternalcontactsContacts;
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
      "name": "",
      "street": "",
      "city": "",
      "countryName": "",
      "stateName": "",
      "postalCode": ""
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
	function postExternalcontactsContacts(body){
		var apipath = '/api/v1/externalcontacts/contacts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postExternalcontactsContacts = postExternalcontactsContacts;
	/**
     * @summary Fetch a ExternalContact
	 * @memberOf ExternalContactsApi#
	* @param {string} contactId - ExternalContact ID
	*/
	function getExternalcontactsContact(contactId){
		var apipath = '/api/v1/externalcontacts/contacts/{contactId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getExternalcontactsContact = getExternalcontactsContact;
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
      "name": "",
      "street": "",
      "city": "",
      "countryName": "",
      "stateName": "",
      "postalCode": ""
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
	function putExternalcontactsContact(contactId, body){
		var apipath = '/api/v1/externalcontacts/contacts/{contactId}';
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
	self.putExternalcontactsContact = putExternalcontactsContact;
	/**
     * @summary Delete a contact
	 * @memberOf ExternalContactsApi#
	* @param {string} contactId - ExternalContact ID
	*/
	function deleteExternalcontactsContact(contactId){
		var apipath = '/api/v1/externalcontacts/contacts/{contactId}';
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
	self.deleteExternalcontactsContact = deleteExternalcontactsContact;
	/**
     * @summary List Notes for an ExternalContact
	 * @memberOf ExternalContactsApi#
	* @param {string} contactId - ExternalContact Id
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortOrder - Sort order
	*/
	function getExternalcontactsContactNotes(contactId, pageSize, pageNumber, sortOrder){
		var apipath = '/api/v1/externalcontacts/contacts/{contactId}/notes';
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
	self.getExternalcontactsContactNotes = getExternalcontactsContactNotes;
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
	function postExternalcontactsContactNotes(contactId, body){
		var apipath = '/api/v1/externalcontacts/contacts/{contactId}/notes';
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
	self.postExternalcontactsContactNotes = postExternalcontactsContactNotes;
	/**
     * @summary Fetch a note for a contact
	 * @memberOf ExternalContactsApi#
	* @param {string} contactId - ExternalContact Id
	* @param {string} noteId - Note Id
	*/
	function getExternalcontactsContactNote(contactId, noteId){
		var apipath = '/api/v1/externalcontacts/contacts/{contactId}/notes/{noteId}';
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
	self.getExternalcontactsContactNote = getExternalcontactsContactNote;
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
	function putExternalcontactsContactNote(contactId, noteId, body){
		var apipath = '/api/v1/externalcontacts/contacts/{contactId}/notes/{noteId}';
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
	self.putExternalcontactsContactNote = putExternalcontactsContactNote;
	/**
     * @summary Delete a note for a contact
	 * @memberOf ExternalContactsApi#
	* @param {string} contactId - ExternalContact Id
	* @param {string} noteId - Note Id
	*/
	function deleteExternalcontactsContactNote(contactId, noteId){
		var apipath = '/api/v1/externalcontacts/contacts/{contactId}/notes/{noteId}';
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
	self.deleteExternalcontactsContactNote = deleteExternalcontactsContactNote;
	/**
     * @summary Search for External Organizations
	 * @memberOf ExternalContactsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} q - Search query
	* @param {string} sortOrder - Sort order
	*/
	function getExternalcontactsOrganizations(pageSize, pageNumber, q, sortOrder){
		var apipath = '/api/v1/externalcontacts/organizations';
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
	self.getExternalcontactsOrganizations = getExternalcontactsOrganizations;
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
      "name": "",
      "street": "",
      "city": "",
      "countryName": "",
      "stateName": "",
      "postalCode": ""
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
	function postExternalcontactsOrganizations(body){
		var apipath = '/api/v1/externalcontacts/organizations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postExternalcontactsOrganizations = postExternalcontactsOrganizations;
	/**
     * @summary Fetch an External Organization
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization ID
	*/
	function getExternalcontactsOrganization(externalOrganizationId){
		var apipath = '/api/v1/externalcontacts/organizations/{externalOrganizationId}';
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
	self.getExternalcontactsOrganization = getExternalcontactsOrganization;
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
      "name": "",
      "street": "",
      "city": "",
      "countryName": "",
      "stateName": "",
      "postalCode": ""
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
	function putExternalcontactsOrganization(externalOrganizationId, body){
		var apipath = '/api/v1/externalcontacts/organizations/{externalOrganizationId}';
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
	self.putExternalcontactsOrganization = putExternalcontactsOrganization;
	/**
     * @summary Delete an External Organization
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization ID
	*/
	function deleteExternalcontactsOrganization(externalOrganizationId){
		var apipath = '/api/v1/externalcontacts/organizations/{externalOrganizationId}';
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
	self.deleteExternalcontactsOrganization = deleteExternalcontactsOrganization;
	/**
     * @summary Search for External Contacts
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} q - User supplied search keywords (no special syntax is currently supported)
	* @param {string} sortOrder - Sort order
	*/
	function getExternalcontactsOrganizationContacts(externalOrganizationId, pageSize, pageNumber, q, sortOrder){
		var apipath = '/api/v1/externalcontacts/organizations/{externalOrganizationId}/contacts';
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


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getExternalcontactsOrganizationContacts = getExternalcontactsOrganizationContacts;
	/**
     * @summary List Notes for an External Organization
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization Id
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortOrder - Sort order
	*/
	function getExternalcontactsOrganizationNotes(externalOrganizationId, pageSize, pageNumber, sortOrder){
		var apipath = '/api/v1/externalcontacts/organizations/{externalOrganizationId}/notes';
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
	self.getExternalcontactsOrganizationNotes = getExternalcontactsOrganizationNotes;
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
	function postExternalcontactsOrganizationNotes(externalOrganizationId, body){
		var apipath = '/api/v1/externalcontacts/organizations/{externalOrganizationId}/notes';
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
	self.postExternalcontactsOrganizationNotes = postExternalcontactsOrganizationNotes;
	/**
     * @summary Fetch a note
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization Id
	* @param {string} noteId - Note Id
	*/
	function getExternalcontactsOrganizationNote(externalOrganizationId, noteId){
		var apipath = '/api/v1/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}';
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
	self.getExternalcontactsOrganizationNote = getExternalcontactsOrganizationNote;
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
	function putExternalcontactsOrganizationNote(externalOrganizationId, noteId, body){
		var apipath = '/api/v1/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}';
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
	self.putExternalcontactsOrganizationNote = putExternalcontactsOrganizationNote;
	/**
     * @summary Delete a note
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization Id
	* @param {string} noteId - Note Id
	*/
	function deleteExternalcontactsOrganizationNote(externalOrganizationId, noteId){
		var apipath = '/api/v1/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}';
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
	self.deleteExternalcontactsOrganizationNote = deleteExternalcontactsOrganizationNote;
	/**
     * @summary Fetch an External Organization
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortOrder - Sort order
	*/
	function getExternalcontactsOrganizationRelationships(externalOrganizationId, pageSize, pageNumber, sortOrder){
		var apipath = '/api/v1/externalcontacts/organizations/{externalOrganizationId}/relationships';
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
	self.getExternalcontactsOrganizationRelationships = getExternalcontactsOrganizationRelationships;
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
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
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
	function postExternalcontactsRelationships(body){
		var apipath = '/api/v1/externalcontacts/relationships';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postExternalcontactsRelationships = postExternalcontactsRelationships;
	/**
     * @summary Fetch a relationship
	 * @memberOf ExternalContactsApi#
	* @param {string} relationshipId - Relationship Id
	*/
	function getExternalcontactsRelationship(relationshipId){
		var apipath = '/api/v1/externalcontacts/relationships/{relationshipId}';
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
	self.getExternalcontactsRelationship = getExternalcontactsRelationship;
	/**
     * @summary Fetch a relationship
	 * @memberOf ExternalContactsApi#
	* @param {string} relationshipId - Relationship Id
	* @param {} body - Relationship
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "user": {
      "name": "",
      "username": "",
      "email": "",
      "displayName": "",
      "phoneNumber": "",
      "userImages": [],
      "chat": {},
      "roles": [],
      "voicemailEnabled": true,
      "department": "",
      "title": "",
      "routingStatus": {},
      "password": "",
      "primaryPresence": {},
      "conversations": {},
      "conversationSummary": {},
      "outOfOffice": {},
      "geolocation": {},
      "permissions": [],
      "requestedStatus": {},
      "defaultStationUri": "",
      "stationUri": ""
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
	function putExternalcontactsRelationship(relationshipId, body){
		var apipath = '/api/v1/externalcontacts/relationships/{relationshipId}';
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
	self.putExternalcontactsRelationship = putExternalcontactsRelationship;
	/**
     * @summary Delete a relationship
	 * @memberOf ExternalContactsApi#
	* @param {string} relationshipId - Relationship Id
	*/
	function deleteExternalcontactsRelationship(relationshipId){
		var apipath = '/api/v1/externalcontacts/relationships/{relationshipId}';
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
	self.deleteExternalcontactsRelationship = deleteExternalcontactsRelationship;

    return self;
};
