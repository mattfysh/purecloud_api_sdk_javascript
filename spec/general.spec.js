
const unitTestOnly = process.env.UNIT_ONLY;
if(unitTestOnly) return;

const assert = require('assert');
const purecloud = require("../dist/purecloud-api-node.js");

const clientId = process.env.PURECLOUD_CLIENT_ID;
const clientSecret = process.env.PURECLOUD_SECRET;
const environment = process.env.PURECLOUD_ENV;

describe('Environment variables', () => {
  it('should have PURECLOUD_CLIENT_ID and PURECLOUD_SECRET set', () => {
    assert(clientId);
    assert(clientSecret);
  });
});

function session() {
  return purecloud.PureCloudSession({
    strategy: 'client-credentials',
    clientId: clientId,
    clientSecret: clientSecret,
    environment: environment
  });
}

describe('AuthorizationApi', () => {
  it('should return authorization roles', (done) => {
    const Auth = purecloud.AuthorizationApi(session());
    Auth.getRoles()
      .then((roles) => {
        assert(roles && roles.total > 0);
        done();
      })
      .catch(done.fail);
  });
});

describe('OAuthApi', () => {
  it('should return oauth clients', (done) => {
    const Oauth = purecloud.OAuthApi(session());
    Oauth.getClients()
      .then((clients) => {
        assert(clients.total > 0);
        done();
      })
      .catch(done.fail);
  });
});

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

describe('Use Case: Update user status', () => {
  it('should work', (done) => {
    const sharedSession = session();
    const Users = purecloud.UsersApi(sharedSession);
    const Presence = purecloud.PresenceApi(sharedSession);

    const users = Users.getUsers();
    const presenceDefs = Presence.getPresencedefinitions();
    const tag = 'purecloud'.toUpperCase();

    let i = 0;
    let userId;
    let defs;
    let nextPresence;
    Promise.all([users, presenceDefs])
      .then(([users, presenceDefs]) => {
        userId = users.entities[0].id;
        defs = presenceDefs.entities;
        return Presence.getUserIdPresencesSourceId(userId, tag);
      })
      .then(presence => {
        nextPresence = changePresence(presence);
        return Presence.patchUserIdPresencesSourceId(userId, tag, nextPresence);
      })
      .then(() => {
        return Presence.getUserIdPresencesSourceId(userId, tag);
      })
      .then(presence => {
        assert.deepEqual(
          presence.presenceDefinition.id,
          nextPresence.presenceDefinition.id);
        done();
      })
      .catch(done.fail);

    function changePresence(presence) {
      const oldStatus = defs
        .find(def => def.id === presence.presenceDefinition.id)
        .systemPresence;
      const newStatus = oldStatus === 'OFFLINE' || oldStatus === 'AVAILABLE'
        ? 'AWAY'
        : 'AVAILABLE';
      const id = defs
        .find(def => def.systemPresence.toUpperCase() === newStatus)
        .id;
      return {presenceDefinition: {id}};
    }

  });
});

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

describe('Modules', () => {
  it('should throw if no session is passed to the constructor', () => {
    assert.throws(() => {
      const Auth = purecloud.AuthorizationApi();
    });
  });

  it('should reject if session client credentials are bad', (done) => {
    const badSession = purecloud.PureCloudSession({
      strategy: 'client-credentials',
      clientId: 'clientId',
      clientSecret: 'clientSecret'
    });
    const Auth = purecloud.AuthorizationApi(badSession);
    Auth.getRoles()
      .then(done.fail)
      .catch(done);
  });
});

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

