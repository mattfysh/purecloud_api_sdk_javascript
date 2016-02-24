var pureCloud = require("../dist/purecloud-api-node.js");

var secret = process.env.PURECLOUD_SECRET;
var id = process.env.PURECLOUD_CLIENT_ID;

var pureCloudSession = new pureCloud.PureCloudSession();
pureCloudSession.debug(true);

console.log(" starting login ")

function assert(condition, message){
    if(condition === false){
        console.log(message);
        process.exit(1);
    }
}

function fail(message){
    console.log(message);
    process.exit(1);
}

function test_roles(){
    var authApi = new pureCloud.AuthorizationApi(pureCloudSession);
    roleCount = 0;
    authApi.getRoles().done(function(roles){
        assert(roles.total > 0, "Roles not > 0");
    }).fail(fail);
}

function test_oauth(){
    var oauthApi = new pureCloud.OAuthApi(pureCloudSession);

    oauthApi.getClients().done(function(clients){
        assert(clients.total > 0, "clients not > 0");
    }).fail(fail);
}

function runTests(){
    test_roles();
    test_oauth();
}

pureCloudSession.authorizeWithClientCredentialsGrant(id, secret).done(runTests);
