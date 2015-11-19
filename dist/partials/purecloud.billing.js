if(!window.PureCloud){
	var errorMsg = "PureCloud core is not defined, make sure you reference PureCloud.core before you include PureCloud.billing";
	if(console && console.error){
		console.error(errorMsg);
	}else {
		console.log(errorMsg);
	}
}

PureCloud.billing = (function (PureCloud) {
	/**
	* @namespace billing/account
	**/
	/**
	* @namespace billing/accounts
	**/
	/**
	* @namespace billing/accounts/overview
	**/
	/**
	* @namespace billing/accounts/status
	**/
	/**
	* @namespace billing/additionalservices
	**/
	/**
	* @namespace billing/addresses
	**/
	/**
	* @namespace billing/basicproducts
	**/
	/**
	* @namespace billing/carrierservices/usage/calls
	**/
	/**
	* @namespace billing/carrierservices/usage/calls/csv
	**/
	/**
	* @namespace billing/contactsales
	**/
	/**
	* @namespace billing/contracts
	**/
	/**
	* @namespace billing/currencies
	**/
	/**
	* @namespace billing/hardwarerates
	**/
	/**
	* @namespace billing/historicalvoicerates/inbound
	**/
	/**
	* @namespace billing/historicalvoicerates/outbound/domestic
	**/
	/**
	* @namespace billing/historicalvoicerates/outbound/international
	**/
	/**
	* @namespace billing/invoices
	**/
	/**
	* @namespace billing/invoices/pdf
	**/
	/**
	* @namespace billing/orders
	**/
	/**
	* @namespace billing/periods
	**/
	/**
	* @namespace billing/products
	**/
	/**
	* @namespace billing/quotes
	**/
	/**
	* @namespace billing/rates
	**/
	/**
	* @namespace billing/reports/billableusagedata/csv
	**/
	/**
	* @namespace billing/snapshots
	**/
	/**
	* @namespace billing/thirdpartyaccounts
	**/
	/**
	* @namespace billing/thirdpartyaccounts/subscriptions
	**/
	/**
	* @namespace billing/voicerate
	**/
	/**
	* @namespace billing/voicerates/inbound
	**/
	/**
	* @namespace billing/voicerates/outbound/domestic
	**/
	/**
	* @namespace billing/voicerates/outbound/international
	**/
	/**
	* @namespace billing/voiceratescsv
	**/

	var self = {};
	self.account = self.account || {};

	/**
     * 
     * @method getCustomerAccount
	 * @memberof billing/account
	 *
     */
     self.account.getCustomerAccount = function(){
		var path = '/api/v1/billing/account';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.account = self.account || {};

	/**
     * 
     * @method updateCustomerAccount
	 * @memberof billing/account

	* @param {} body - The account to be updated
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "orgLegalName": "",
   "orgPhone": "",
   "isTaxExempt": true,
   "billingAddress": {
      "streetAddress1": "",
      "streetAddress2": "",
      "city": "",
      "state": "",
      "zipcode": ""
   },
   "selfUri": ""
}
	 *
     */
     self.account.updateCustomerAccount = function(body){
		var path = '/api/v1/billing/account';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.accounts = self.accounts || {};

	/**
     * 
     * @method createBillingAccount
	 * @memberof billing/accounts

	* @param {} body - The account to be created
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "orgLegalName": "",
   "billingAddressLine1": "",
   "billingAddressLine2": "",
   "billingAddressCity": "",
   "billingAddressState": "",
   "billingAddressZipCode": "",
   "billingAddressCountry": "",
   "legalAddressLine1": "",
   "legalAddressLine2": "",
   "legalAddressCity": "",
   "legalAddressState": "",
   "legalAddressZipCode": "",
   "legalAddressCountry": "",
   "billingContactFirstName": "",
   "billingContactLastName": "",
   "billingContactEmail": "",
   "billingContactPhone": "",
   "purchaseOrderNumber": "",
   "isTaxExempt": true,
   "currency": "",
   "paymentTerm": "",
   "contractTerm": 0,
   "autoRenew": true,
   "enabled": true,
   "minCommitQuantities": {},
   "estimatedQuantities": {},
   "oneTimeCharges": [],
   "selfUri": ""
}
	 *
     */
     self.accounts.createBillingAccount = function(body){
		var path = '/api/v1/billing/accounts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.accounts = self.accounts || {};

	/**
     * 
     * @method getBillingAccount
	 * @memberof billing/accounts

	* @param {string} accountId - Identifies the account to be retrieved

	* @param {string} fields - Fields needed
	 *
     */
     self.accounts.getBillingAccount = function(accountId, fields){
		var path = '/api/v1/billing/accounts/{accountId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{accountId}', accountId);

        if(accountId === undefined && accountId !== null){
			throw 'Missing required  parameter: accountId';
        }


		if(fields !== undefined && fields !== null){
			queryParameters.fields = fields;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.accounts = self.accounts || {};

	/**
     * 
     * @method updatesTheBillingAccount
	 * @memberof billing/accounts

	* @param {string} accountId - Identifies the account to be updated

	* @param {} body - The account to be updated
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "orgLegalName": "",
   "billingAddressLine1": "",
   "billingAddressLine2": "",
   "billingAddressCity": "",
   "billingAddressState": "",
   "billingAddressZipCode": "",
   "billingAddressCountry": "",
   "legalAddressLine1": "",
   "legalAddressLine2": "",
   "legalAddressCity": "",
   "legalAddressState": "",
   "legalAddressZipCode": "",
   "legalAddressCountry": "",
   "billingContactFirstName": "",
   "billingContactLastName": "",
   "billingContactEmail": "",
   "billingContactPhone": "",
   "purchaseOrderNumber": "",
   "isTaxExempt": true,
   "currency": "",
   "paymentTerm": "",
   "contractTerm": 0,
   "autoRenew": true,
   "enabled": true,
   "minCommitQuantities": {},
   "estimatedQuantities": {},
   "oneTimeCharges": [],
   "selfUri": ""
}
	 *
     */
     self.accounts.updatesTheBillingAccount = function(accountId, body){
		var path = '/api/v1/billing/accounts/{accountId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{accountId}', accountId);

        if(accountId === undefined && accountId !== null){
			throw 'Missing required  parameter: accountId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.accounts = self.accounts || {};

	/**
     * 
     * @method terminatesTheBillingAccountOfTheOrg
	 * @memberof billing/accounts

	* @param {string} accountId - Identifies the account to be terminated
	 *
     */
     self.accounts.terminatesTheBillingAccountOfTheOrg = function(accountId){
		var path = '/api/v1/billing/accounts/{accountId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{accountId}', accountId);

        if(accountId === undefined && accountId !== null){
			throw 'Missing required  parameter: accountId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.accounts = self.accounts || {};
	self.accounts.overview = self.accounts.overview || {};

	/**
     * 
     * @method getAccountOverview
	 * @memberof billing/accounts/overview

	* @param {string} accountId - Identifies the account whose status should be retrieved
	 *
     */
     self.accounts.overview.getAccountOverview = function(accountId){
		var path = '/api/v1/billing/accounts/{accountId}/overview';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{accountId}', accountId);

        if(accountId === undefined && accountId !== null){
			throw 'Missing required  parameter: accountId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.accounts = self.accounts || {};
	self.accounts.status = self.accounts.status || {};

	/**
     * 
     * @method getAccountStatus
	 * @memberof billing/accounts/status

	* @param {string} accountId - Identifies the account whose status should be retrieved
	 *
     */
     self.accounts.status.getAccountStatus = function(accountId){
		var path = '/api/v1/billing/accounts/{accountId}/status';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{accountId}', accountId);

        if(accountId === undefined && accountId !== null){
			throw 'Missing required  parameter: accountId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.accounts = self.accounts || {};
	self.accounts.status = self.accounts.status || {};

	/**
     * 
     * @method updateAccountStatus
	 * @memberof billing/accounts/status

	* @param {string} accountId - Identifies the account whose status should be updated

	* @param {} body - The account status to be updated
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "orgName": "",
   "configured": true,
   "adminUIURL": "",
   "thirdPartyAccountId": "",
   "thirdPartySubscriptionId": "",
   "thirdPartySubscriptionNonAcbId": "",
   "selfUri": ""
}
	 *
     */
     self.accounts.status.updateAccountStatus = function(accountId, body){
		var path = '/api/v1/billing/accounts/{accountId}/status';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{accountId}', accountId);

        if(accountId === undefined && accountId !== null){
			throw 'Missing required  parameter: accountId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.additionalservices = self.additionalservices || {};

	/**
     * 
     * @method getAvailableAdditionalServices
	 * @memberof billing/additionalservices
	 *
     */
     self.additionalservices.getAvailableAdditionalServices = function(){
		var path = '/api/v1/billing/additionalservices';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.addresses = self.addresses || {};

	/**
     * 
     * @method getBillingAddresses
	 * @memberof billing/addresses
	 *
     */
     self.addresses.getBillingAddresses = function(){
		var path = '/api/v1/billing/addresses';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.addresses = self.addresses || {};

	/**
     * 
     * @method createBillingAddress
	 * @memberof billing/addresses

	* @param {} body - The address to be created
	 * @example
	 * Body Example:
	 * {
   "streetAddress1": "",
   "streetAddress2": "",
   "city": "",
   "state": "",
   "zipcode": ""
}
	 *
     */
     self.addresses.createBillingAddress = function(body){
		var path = '/api/v1/billing/addresses';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.addresses = self.addresses || {};

	/**
     * 
     * @method getABillingAddress
	 * @memberof billing/addresses

	* @param {string} addressId - The ID of the address
	 *
     */
     self.addresses.getABillingAddress = function(addressId){
		var path = '/api/v1/billing/addresses/{addressId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{addressId}', addressId);

        if(addressId === undefined && addressId !== null){
			throw 'Missing required  parameter: addressId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.addresses = self.addresses || {};

	/**
     * 
     * @method updateBillingAddress
	 * @memberof billing/addresses

	* @param {string} addressId - The ID of the address

	* @param {} body - The address to be updated
	 * @example
	 * Body Example:
	 * {
   "streetAddress1": "",
   "streetAddress2": "",
   "city": "",
   "state": "",
   "zipcode": ""
}
	 *
     */
     self.addresses.updateBillingAddress = function(addressId, body){
		var path = '/api/v1/billing/addresses/{addressId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{addressId}', addressId);

        if(addressId === undefined && addressId !== null){
			throw 'Missing required  parameter: addressId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.basicproducts = self.basicproducts || {};

	/**
     * 
     * @method getBasicProducts
	 * @memberof billing/basicproducts
	 *
     */
     self.basicproducts.getBasicProducts = function(){
		var path = '/api/v1/billing/basicproducts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.carrierservices = self.carrierservices || {};
	self.carrierservices.usage = self.carrierservices.usage || {};
	self.carrierservices.usage.calls = self.carrierservices.usage.calls || {};

	/**
     * 
     * @method getCarrierServicesUsageData
	 * @memberof billing/carrierservices/usage/calls

	* @param {string} from - startDateTime

	* @param {string} to - endDateTime

	* @param {integer} limit - Limit the number of results
	 *
     */
     self.carrierservices.usage.calls.getCarrierServicesUsageData = function(from, to, limit){
		var path = '/api/v1/billing/carrierservices/usage/calls';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(from !== undefined && from !== null){
			queryParameters.from = from;
		}


		if(to !== undefined && to !== null){
			queryParameters.to = to;
		}


		if(limit !== undefined && limit !== null){
			queryParameters.limit = limit;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.carrierservices = self.carrierservices || {};
	self.carrierservices.usage = self.carrierservices.usage || {};
	self.carrierservices.usage.calls = self.carrierservices.usage.calls || {};
	self.carrierservices.usage.calls.csv = self.carrierservices.usage.calls.csv || {};

	/**
     * 
     * @method getCarrierServicesUsageDataCsv
	 * @memberof billing/carrierservices/usage/calls/csv

	* @param {string} from - startDateTime

	* @param {string} to - endDateTime

	* @param {integer} limit - Limit the number of results
	 *
     */
     self.carrierservices.usage.calls.csv.getCarrierServicesUsageDataCsv = function(from, to, limit){
		var path = '/api/v1/billing/carrierservices/usage/calls/csv';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(from !== undefined && from !== null){
			queryParameters.from = from;
		}


		if(to !== undefined && to !== null){
			queryParameters.to = to;
		}


		if(limit !== undefined && limit !== null){
			queryParameters.limit = limit;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.contactsales = self.contactsales || {};

	/**
     * 
     * @method contactSales
	 * @memberof billing/contactsales

	* @param {} body - The contact sales details
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "email": "",
   "firstName": "",
   "lastName": "",
   "contactPhone": "",
   "country": "",
   "title": "",
   "message": "",
   "language": "",
   "productName": "",
   "industry": "",
   "estimatedUsers": "",
   "selfUri": ""
}
	 *
     */
     self.contactsales.contactSales = function(body){
		var path = '/api/v1/billing/contactsales';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.contracts = self.contracts || {};

	/**
     * 
     * @method createContractAndSignerViewUrl
	 * @memberof billing/contracts

	* @param {string} quoteId - The quote ID
	 *
     */
     self.contracts.createContractAndSignerViewUrl = function(quoteId){
		var path = '/api/v1/billing/contracts/{quoteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{quoteId}', quoteId);

        if(quoteId === undefined && quoteId !== null){
			throw 'Missing required  parameter: quoteId';
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.currencies = self.currencies || {};

	/**
     * 
     * @method getAvailableCurrencies
	 * @memberof billing/currencies
	 *
     */
     self.currencies.getAvailableCurrencies = function(){
		var path = '/api/v1/billing/currencies';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.hardwarerates = self.hardwarerates || {};

	/**
     * 
     * @method getHardwareRates
	 * @memberof billing/hardwarerates

	* @param {string} productSubCategory - Filter rates by product subcategory. Examples are 'Phones' or 'PowerCords'.
	 *
     */
     self.hardwarerates.getHardwareRates = function(productSubCategory){
		var path = '/api/v1/billing/hardwarerates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(productSubCategory !== undefined && productSubCategory !== null){
			queryParameters.productSubCategory = productSubCategory;
		}

        if(productSubCategory === undefined && productSubCategory !== null){
			throw 'Missing required  parameter: productSubCategory';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.historicalvoicerates = self.historicalvoicerates || {};
	self.historicalvoicerates.inbound = self.historicalvoicerates.inbound || {};

	/**
     * Retrieve a list of historical inbound billing voice rates stored in the system.
     * @method getHistoricalInboundBillingVoiceRates
	 * @memberof billing/historicalvoicerates/inbound

	* @param {string} currency - Filter voice rates by currency.

	* @param {string} effectiveDateStart - Filter voice rates by effective start date.

	* @param {string} effectiveDateEnd - Filter voice rates by effective end date.

	* @param {string} type - Filter voice rates by 'inboundTolled', 'inboundTollFree', 'outboundInterState', 'outboundIntraState', or 'outboundLocal'.

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number
	 *
     */
     self.historicalvoicerates.inbound.getHistoricalInboundBillingVoiceRates = function(currency, effectiveDateStart, effectiveDateEnd, type, pageSize, pageNumber){
		var path = '/api/v1/billing/historicalvoicerates/inbound';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(currency !== undefined && currency !== null){
			queryParameters.currency = currency;
		}

        if(currency === undefined && currency !== null){
			throw 'Missing required  parameter: currency';
        }


		if(effectiveDateStart !== undefined && effectiveDateStart !== null){
			queryParameters.effectiveDateStart = effectiveDateStart;
		}


		if(effectiveDateEnd !== undefined && effectiveDateEnd !== null){
			queryParameters.effectiveDateEnd = effectiveDateEnd;
		}


		if(type !== undefined && type !== null){
			queryParameters.type = type;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.historicalvoicerates = self.historicalvoicerates || {};
	self.historicalvoicerates.outbound = self.historicalvoicerates.outbound || {};
	self.historicalvoicerates.outbound.domestic = self.historicalvoicerates.outbound.domestic || {};

	/**
     * Retrieve a list of historical outbound domestic billing voice rates stored in the system.
     * @method getHistoricalOutboundDomesticBillingVoiceRates
	 * @memberof billing/historicalvoicerates/outbound/domestic

	* @param {string} currency - Filter voice rates by currency.

	* @param {string} effectiveDateStart - Filter voice rates by effective start date.

	* @param {string} effectiveDateEnd - Filter voice rates by effective end date.

	* @param {string} type - Filter voice rates by 'inboundTolled', 'inboundTollFree', 'outboundInterState', 'outboundIntraState', or 'outboundLocal'.

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number
	 *
     */
     self.historicalvoicerates.outbound.domestic.getHistoricalOutboundDomesticBillingVoiceRates = function(currency, effectiveDateStart, effectiveDateEnd, type, pageSize, pageNumber){
		var path = '/api/v1/billing/historicalvoicerates/outbound/domestic';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(currency !== undefined && currency !== null){
			queryParameters.currency = currency;
		}

        if(currency === undefined && currency !== null){
			throw 'Missing required  parameter: currency';
        }


		if(effectiveDateStart !== undefined && effectiveDateStart !== null){
			queryParameters.effectiveDateStart = effectiveDateStart;
		}


		if(effectiveDateEnd !== undefined && effectiveDateEnd !== null){
			queryParameters.effectiveDateEnd = effectiveDateEnd;
		}


		if(type !== undefined && type !== null){
			queryParameters.type = type;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.historicalvoicerates = self.historicalvoicerates || {};
	self.historicalvoicerates.outbound = self.historicalvoicerates.outbound || {};
	self.historicalvoicerates.outbound.international = self.historicalvoicerates.outbound.international || {};

	/**
     * Retrieve a list of historical outbound international billing voice rates stored in the system.
     * @method getHistoricalOutboundInternationalBillingVoiceRates
	 * @memberof billing/historicalvoicerates/outbound/international

	* @param {string} currency - Filter voice rates by currency.

	* @param {string} effectiveDateStart - Filter voice rates by effective start date.

	* @param {string} effectiveDateEnd - Filter voice rates by effective end date.

	* @param {string} origin - Filter voice rates by origin.

	* @param {string} destination - Filter voice rates by destination.

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number
	 *
     */
     self.historicalvoicerates.outbound.international.getHistoricalOutboundInternationalBillingVoiceRates = function(currency, effectiveDateStart, effectiveDateEnd, origin, destination, pageSize, pageNumber){
		var path = '/api/v1/billing/historicalvoicerates/outbound/international';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(currency !== undefined && currency !== null){
			queryParameters.currency = currency;
		}

        if(currency === undefined && currency !== null){
			throw 'Missing required  parameter: currency';
        }


		if(effectiveDateStart !== undefined && effectiveDateStart !== null){
			queryParameters.effectiveDateStart = effectiveDateStart;
		}


		if(effectiveDateEnd !== undefined && effectiveDateEnd !== null){
			queryParameters.effectiveDateEnd = effectiveDateEnd;
		}


		if(origin !== undefined && origin !== null){
			queryParameters.origin = origin;
		}


		if(destination !== undefined && destination !== null){
			queryParameters.destination = destination;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.invoices = self.invoices || {};

	/**
     * Retrieve a list of invoices stored in the system.
     * @method getInvoices
	 * @memberof billing/invoices

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number
	 *
     */
     self.invoices.getInvoices = function(pageSize, pageNumber){
		var path = '/api/v1/billing/invoices';
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
	self.invoices = self.invoices || {};

	/**
     * 
     * @method getInvoice
	 * @memberof billing/invoices

	* @param {string} invoiceId - Identifies the invoice to be retrieved
	 *
     */
     self.invoices.getInvoice = function(invoiceId){
		var path = '/api/v1/billing/invoices/{invoiceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{invoiceId}', invoiceId);

        if(invoiceId === undefined && invoiceId !== null){
			throw 'Missing required  parameter: invoiceId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.invoices = self.invoices || {};
	self.invoices.pdf = self.invoices.pdf || {};

	/**
     * 
     * @method getInvoicePdf
	 * @memberof billing/invoices/pdf

	* @param {string} invoiceId - Identifies the invoice PDF to be retrieved
	 *
     */
     self.invoices.pdf.getInvoicePdf = function(invoiceId){
		var path = '/api/v1/billing/invoices/{invoiceId}/pdf';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{invoiceId}', invoiceId);

        if(invoiceId === undefined && invoiceId !== null){
			throw 'Missing required  parameter: invoiceId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.orders = self.orders || {};

	/**
     * 
     * @method createBillingOrder
	 * @memberof billing/orders

	* @param {} body - The order to be created
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "quote": {
      "id": "",
      "name": "",
      "purchaseOrder": "",
      "isSubmitted": true,
      "isPending": true,
      "currency": "",
      "billingContactEmail": "",
      "billingContactFirstName": "",
      "billingContactLastName": "",
      "billingContactPhone": "",
      "includePureVoiceCharges": true,
      "charges": [],
      "edgeControlModel": "",
      "referralCodes": [],
      "discountCodes": [],
      "salesPartnerCode": "",
      "selfUri": ""
   },
   "selfUri": ""
}
	 *
     */
     self.orders.createBillingOrder = function(body){
		var path = '/api/v1/billing/orders';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.periods = self.periods || {};

	/**
     * Retrieve a list of billing periods stored in the system.
     * @method getBillingPeriods
	 * @memberof billing/periods

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number
	 *
     */
     self.periods.getBillingPeriods = function(pageSize, pageNumber){
		var path = '/api/v1/billing/periods';
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
	self.products = self.products || {};

	/**
     * 
     * @method getProducts
	 * @memberof billing/products
	 *
     */
     self.products.getProducts = function(){
		var path = '/api/v1/billing/products';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.products = self.products || {};

	/**
     * 
     * @method updateProducts
	 * @memberof billing/products

	* @param {} body - The products to activate
	 *
     */
     self.products.updateProducts = function(body){
		var path = '/api/v1/billing/products';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.quotes = self.quotes || {};

	/**
     * 
     * @method getBillingQuotes
	 * @memberof billing/quotes
	 *
     */
     self.quotes.getBillingQuotes = function(){
		var path = '/api/v1/billing/quotes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.quotes = self.quotes || {};

	/**
     * 
     * @method createBillingQuote
	 * @memberof billing/quotes

	* @param {} body - The quote to be created
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "purchaseOrder": "",
   "isSubmitted": true,
   "isPending": true,
   "currency": "",
   "billingContactEmail": "",
   "billingContactFirstName": "",
   "billingContactLastName": "",
   "billingContactPhone": "",
   "includePureVoiceCharges": true,
   "charges": [],
   "edgeControlModel": "",
   "referralCodes": [],
   "discountCodes": [],
   "salesPartnerCode": "",
   "selfUri": ""
}
	 *
     */
     self.quotes.createBillingQuote = function(body){
		var path = '/api/v1/billing/quotes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.quotes = self.quotes || {};

	/**
     * 
     * @method getABillingQuote
	 * @memberof billing/quotes

	* @param {string} quoteId - The ID of the quote
	 *
     */
     self.quotes.getABillingQuote = function(quoteId){
		var path = '/api/v1/billing/quotes/{quoteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{quoteId}', quoteId);

        if(quoteId === undefined && quoteId !== null){
			throw 'Missing required  parameter: quoteId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.quotes = self.quotes || {};

	/**
     * 
     * @method updateBillingQuote
	 * @memberof billing/quotes

	* @param {string} quoteId - The ID of the quote

	* @param {} body - The quote to be updated
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "purchaseOrder": "",
   "isSubmitted": true,
   "isPending": true,
   "currency": "",
   "billingContactEmail": "",
   "billingContactFirstName": "",
   "billingContactLastName": "",
   "billingContactPhone": "",
   "includePureVoiceCharges": true,
   "charges": [],
   "edgeControlModel": "",
   "referralCodes": [],
   "discountCodes": [],
   "salesPartnerCode": "",
   "selfUri": ""
}
	 *
     */
     self.quotes.updateBillingQuote = function(quoteId, body){
		var path = '/api/v1/billing/quotes/{quoteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{quoteId}', quoteId);

        if(quoteId === undefined && quoteId !== null){
			throw 'Missing required  parameter: quoteId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.quotes = self.quotes || {};

	/**
     * 
     * @method deleteBillingQuote
	 * @memberof billing/quotes

	* @param {string} quoteId - The ID of the quote
	 *
     */
     self.quotes.deleteBillingQuote = function(quoteId){
		var path = '/api/v1/billing/quotes/{quoteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{quoteId}', quoteId);

        if(quoteId === undefined && quoteId !== null){
			throw 'Missing required  parameter: quoteId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.rates = self.rates || {};

	/**
     * Retrieve a list of billing rates stored in the system.
     * @method getBillingRates
	 * @memberof billing/rates

	* @param {string} chargeType - Filter rates by charge type. Examples are Usage, Recurring, or OneTime.
	 *
     */
     self.rates.getBillingRates = function(chargeType){
		var path = '/api/v1/billing/rates';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(chargeType !== undefined && chargeType !== null){
			queryParameters.chargeType = chargeType;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.rates = self.rates || {};

	/**
     * 
     * @method getRate
	 * @memberof billing/rates

	* @param {string} rateId - Identifies the rate to be retrieved
	 *
     */
     self.rates.getRate = function(rateId){
		var path = '/api/v1/billing/rates/{rateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{rateId}', rateId);

        if(rateId === undefined && rateId !== null){
			throw 'Missing required  parameter: rateId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.reports = self.reports || {};
	self.reports.billableusagedata = self.reports.billableusagedata || {};
	self.reports.billableusagedata.csv = self.reports.billableusagedata.csv || {};

	/**
     * 
     * @method getBillableUsageDataReportCsv
	 * @memberof billing/reports/billableusagedata/csv

	* @param {string} reportId - Identifies the report CSV to be retrieved
	 *
     */
     self.reports.billableusagedata.csv.getBillableUsageDataReportCsv = function(reportId){
		var path = '/api/v1/billing/reports/billableusagedata/{reportId}/csv';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{reportId}', reportId);

        if(reportId === undefined && reportId !== null){
			throw 'Missing required  parameter: reportId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.snapshots = self.snapshots || {};

	/**
     * Creates a billing snapshot which is used to determine usage counts for a billing period.
     * @method createsABillingSnapshot
	 * @memberof billing/snapshots
	 *
     */
     self.snapshots.createsABillingSnapshot = function(){
		var path = '/api/v1/billing/snapshots';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('POST', path + '?' +$.param(queryParameters), requestBody);
     };
	self.thirdpartyaccounts = self.thirdpartyaccounts || {};

	/**
     * Retrieve a list of third party accounts stored in the back-end system.
     * @method getThirdPartyAccounts
	 * @memberof billing/thirdpartyaccounts

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number

	* @param {string} search - Search for accounts with this text
	 *
     */
     self.thirdpartyaccounts.getThirdPartyAccounts = function(pageSize, pageNumber, search){
		var path = '/api/v1/billing/thirdpartyaccounts';
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


		if(search !== undefined && search !== null){
			queryParameters.search = search;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.thirdpartyaccounts = self.thirdpartyaccounts || {};

	/**
     * 
     * @method getThirdPartyBillingAccount
	 * @memberof billing/thirdpartyaccounts

	* @param {string} accountId - Identifies the third party account to be retrieved
	 *
     */
     self.thirdpartyaccounts.getThirdPartyBillingAccount = function(accountId){
		var path = '/api/v1/billing/thirdpartyaccounts/{accountId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{accountId}', accountId);

        if(accountId === undefined && accountId !== null){
			throw 'Missing required  parameter: accountId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.thirdpartyaccounts = self.thirdpartyaccounts || {};
	self.thirdpartyaccounts.subscriptions = self.thirdpartyaccounts.subscriptions || {};

	/**
     * Retrieve a list of third party subscriptions stored in the back-end system.
     * @method getThirdPartySubscriptions
	 * @memberof billing/thirdpartyaccounts/subscriptions

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number

	* @param {string} accountId - Identifies the third party account to be retrieved
	 *
     */
     self.thirdpartyaccounts.subscriptions.getThirdPartySubscriptions = function(pageSize, pageNumber, accountId){
		var path = '/api/v1/billing/thirdpartyaccounts/{accountId}/subscriptions';
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

        path = path.replace('{accountId}', accountId);

        if(accountId === undefined && accountId !== null){
			throw 'Missing required  parameter: accountId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.thirdpartyaccounts = self.thirdpartyaccounts || {};
	self.thirdpartyaccounts.subscriptions = self.thirdpartyaccounts.subscriptions || {};

	/**
     * 
     * @method getThirdPartyBillingSubscription
	 * @memberof billing/thirdpartyaccounts/subscriptions

	* @param {string} accountId - Identifies the third party account to be retrieved

	* @param {string} subscriptionId - Identifies the third party subscription to be retrieved
	 *
     */
     self.thirdpartyaccounts.subscriptions.getThirdPartyBillingSubscription = function(accountId, subscriptionId){
		var path = '/api/v1/billing/thirdpartyaccounts/{accountId}/subscriptions/{subscriptionId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{accountId}', accountId);

        if(accountId === undefined && accountId !== null){
			throw 'Missing required  parameter: accountId';
        }

        path = path.replace('{subscriptionId}', subscriptionId);

        if(subscriptionId === undefined && subscriptionId !== null){
			throw 'Missing required  parameter: subscriptionId';
        }



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.voicerate = self.voicerate || {};

	/**
     * Update a billing voice rate currently stored in the system.
     * @method updateBillingVoiceRate
	 * @memberof billing/voicerate

	* @param {} body - The voice rate to be created
	 * @example
	 * Body Example:
	 * {
   "id": "",
   "name": "",
   "currency": "",
   "inboundTollFree": "",
   "inboundTolled": "",
   "outboundLocal": "",
   "outboundIntraState": "",
   "outboundInterState": "",
   "outboundInternational": [],
   "amendmentDate": "",
   "effectiveDate": "",
   "selfUri": ""
}
	 *
     */
     self.voicerate.updateBillingVoiceRate = function(body){
		var path = '/api/v1/billing/voicerate';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }



		return PureCloud.makeRequest('PUT', path + '?' +$.param(queryParameters), requestBody);
     };
	self.voicerate = self.voicerate || {};

	/**
     * Delete a pending billing voice rate currently stored in the system.
     * @method deleteBillingVoiceRate
	 * @memberof billing/voicerate

	* @param {string} currency - The currency of the voice rate

	* @param {string} amendmentId - The amendment Id of the voice rate
	 *
     */
     self.voicerate.deleteBillingVoiceRate = function(currency, amendmentId){
		var path = '/api/v1/billing/voicerate/{currency}/{amendmentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        path = path.replace('{currency}', currency);

        if(currency === undefined && currency !== null){
			throw 'Missing required  parameter: currency';
        }

        path = path.replace('{amendmentId}', amendmentId);

        if(amendmentId === undefined && amendmentId !== null){
			throw 'Missing required  parameter: amendmentId';
        }



		return PureCloud.makeRequest('DELETE', path + '?' +$.param(queryParameters), requestBody);
     };
	self.voicerates = self.voicerates || {};
	self.voicerates.inbound = self.voicerates.inbound || {};

	/**
     * Retrieve a list of current inbound billing voice rates stored in the system.
     * @method getCurrentInboundBillingVoiceRates
	 * @memberof billing/voicerates/inbound

	* @param {string} currency - Filter voice rates by currency.

	* @param {string} type - Filter voice rates by 'inboundTolled', 'inboundTollFree', 'outboundInterState', 'outboundIntraState', or 'outboundLocal'.
	 *
     */
     self.voicerates.inbound.getCurrentInboundBillingVoiceRates = function(currency, type){
		var path = '/api/v1/billing/voicerates/inbound';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(currency !== undefined && currency !== null){
			queryParameters.currency = currency;
		}

        if(currency === undefined && currency !== null){
			throw 'Missing required  parameter: currency';
        }


		if(type !== undefined && type !== null){
			queryParameters.type = type;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.voicerates = self.voicerates || {};
	self.voicerates.outbound = self.voicerates.outbound || {};
	self.voicerates.outbound.domestic = self.voicerates.outbound.domestic || {};

	/**
     * Retrieve a list of current outbound domestic billing voice rates stored in the system.
     * @method getCurrentOutboundDomesticBillingVoiceRates
	 * @memberof billing/voicerates/outbound/domestic

	* @param {string} currency - Filter voice rates by currency.

	* @param {string} type - Filter voice rates by 'inboundTolled', 'inboundTollFree', 'outboundInterState', 'outboundIntraState', or 'outboundLocal'.
	 *
     */
     self.voicerates.outbound.domestic.getCurrentOutboundDomesticBillingVoiceRates = function(currency, type){
		var path = '/api/v1/billing/voicerates/outbound/domestic';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(currency !== undefined && currency !== null){
			queryParameters.currency = currency;
		}

        if(currency === undefined && currency !== null){
			throw 'Missing required  parameter: currency';
        }


		if(type !== undefined && type !== null){
			queryParameters.type = type;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.voicerates = self.voicerates || {};
	self.voicerates.outbound = self.voicerates.outbound || {};
	self.voicerates.outbound.international = self.voicerates.outbound.international || {};

	/**
     * Retrieve a list of current outbound international billing voice rates stored in the system.
     * @method getCurrentOutboundInternationalBillingVoiceRates
	 * @memberof billing/voicerates/outbound/international

	* @param {string} currency - Filter voice rates by currency.

	* @param {string} origin - Filter voice rates by origin.

	* @param {string} destination - Filter voice rates by destination.

	* @param {integer} pageSize - Page size

	* @param {integer} pageNumber - Page number
	 *
     */
     self.voicerates.outbound.international.getCurrentOutboundInternationalBillingVoiceRates = function(currency, origin, destination, pageSize, pageNumber){
		var path = '/api/v1/billing/voicerates/outbound/international';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(currency !== undefined && currency !== null){
			queryParameters.currency = currency;
		}

        if(currency === undefined && currency !== null){
			throw 'Missing required  parameter: currency';
        }


		if(origin !== undefined && origin !== null){
			queryParameters.origin = origin;
		}


		if(destination !== undefined && destination !== null){
			queryParameters.destination = destination;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };
	self.voiceratescsv = self.voiceratescsv || {};

	/**
     * Retrieve a csv of current billing voice rates stored in the system.
     * @method getCurrentBillingVoiceRatesCsv
	 * @memberof billing/voiceratescsv
	 *
     */
     self.voiceratescsv.getCurrentBillingVoiceRatesCsv = function(){
		var path = '/api/v1/billing/voiceratescsv';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};



		return PureCloud.makeRequest('GET', path + '?' +$.param(queryParameters), requestBody);
     };

	return self;
}(PureCloud));
