#!/usr/bin/env node

var environment = "mypurecloud.com";

if (process.argv.length >= 2){
    environment = process.argv[2];
}


var pureCloud = require("../dist/purecloud-api-node.js");

var secret = process.env.PURECLOUD_SECRET;
var id = process.env.PURECLOUD_CLIENT_ID;

var pureCloudSession = new pureCloud.PureCloudSession(environment);
pureCloudSession.debug(true);

console.log(" RUNNING TEST SCRIPT ")

function assert(condition, message){
    if(condition === false){
        console.log(message);
        console.log("UNIT TESTS FAILED ASSERT")
        process.exit(1);
    }
}

function fail(message){
    console.log(message);
    console.log("UNIT TESTS DID NOT PASS")
    process.exit(1);
}

function test_roles(){
    console.log("test_roles");
    var authApi = new pureCloud.AuthorizationApi(pureCloudSession);
    roleCount = 0;
    authApi.getRoles().done(function(roles){
        assert(roles.total > 0, "Roles not > 0");
    }).fail(fail);
}

function test_oauth(){
    console.log("test_oauth");
    var oauthApi = new pureCloud.OAuthApi(pureCloudSession);

    oauthApi.getClients().done(function(clients){
        assert(clients.total > 0, "clients not > 0");
    }).fail(fail);
}

function test_users_and_status(){
    console.log("test_users_and_status");
    var usersApi = new pureCloud.UsersApi(pureCloudSession);
    var presenceApi = new pureCloud.PresenceApi(pureCloudSession);
    var presenceNameToIdMap = {};
    var presenceIdToNameMap = {};

    usersApi.getUsers().done(function(users){
        var user = users.entities[0];
        var userId = user.id;

        presenceApi.getPresencedefinitions().done(function(presenceData){
            for (var x=0; x< Object.keys(presenceData.entities).length; x++){
                var presence = presenceData.entities[x];
                presenceNameToIdMap[presence.systemPresence] = presence.id;
                presenceIdToNameMap[presence.id] = presence.systemPresence;
            }

            console.log(presenceData)
            presenceApi.getUserIdPresencesSource(userId, "PURECLOUD").done(function(presence){
                var userStatusName = presenceIdToNameMap[presence.presenceDefinition.id];
                var newStatus = (userStatusName == "OFFLINE" || userStatusName == "AVAILABLE") ? "AWAY" : "AVAILABLE"

                var setPresence ={
                    "presenceDefinition" : {
                        "id": presenceNameToIdMap[newStatus]
                    }
                };

                console.log("updating status to " + newStatus);

                presenceApi.patchUserIdPresencesSource(userId, "PURECLOUD", setPresence).done(function(){
                    setTimeout(function(){
                        presenceApi.getUserIdPresencesSource(userId, "PURECLOUD").done(function(updatedPresence){

                            var newUserStatusName = presenceIdToNameMap[updatedPresence.presenceDefinition.id];

                            if(newUserStatusName === userStatusName){
                                fail("ERROR: STATUS NOT UPDATED");
                            }

                        }).fail(fail);
                    }, 500);
                }).fail(fail);

            })
            /*
            */
        }).fail(fail);
    });
}

function test_invalid_session(){
    console.log("test_invalid_session");
    try{
        var authApi = new pureCloud.AuthorizationApi();
        fail("exception should have been thrown");
    }
    catch(ex)
    {

    }
}

function test_fail(){
    console.log("test_fail");
    var nonSession = new pureCloud.PureCloudSession();
    var authApi = new pureCloud.AuthorizationApi(nonSession);

    authApi.getRoles().done(fail).fail(function(){
        console.log("fail successfully called");
    });
}

function test_invalid_client_credentials(){
    console.log("test_invalid_client_credentials");
    var session =  new pureCloud.PureCloudSession();
    session.authorizeWithClientCredentialsGrant("id", "secret").done(fail).error(function(err){
        console.log("invalid client credentials handled");
    });
}

function runTests(){
    test_invalid_client_credentials();
    test_fail();
    test_roles();
    test_oauth();
    //test_users_and_status();
}

pureCloudSession.authorizeWithClientCredentialsGrant(id, secret).done(runTests).error(fail);
