//API VERSION - 
/**
* @class
* @example
* var api = new ObjectsApi(pureCloudSession);
*/
var ObjectsApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Returns a permission-protected object, showing the permission contexts it belongs to.
	 * @memberOf ObjectsApi#
	* @param {string} objectId - Object ID
	*/
	function getObjectsObjectId(objectId){
		var apipath = '/api/v2/authorization/objects/{objectId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{objectId}', objectId);

        if(objectId === undefined && objectId !== null){
			throw 'Missing required  parameter: objectId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getObjectsObjectId = getObjectsObjectId;

    return self;
};
