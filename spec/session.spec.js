var assert = require('assert');
var purecloud = require('../dist/purecloud-api-node');

describe("PureCloudSession", function() {
  describe('constructor(options)', function() {
    it("should set the environment by default", function() {
      var session = new purecloud.PureCloudSession({});
      assert.equal(session.options.environment, 'mypurecloud.com');
      assert.equal(session.options.timeout, 2000);
    });

    it("should set the environment if specified", function() {
      var env = 'foo';
      var session = new purecloud.PureCloudSession({environment: env});
      assert.equal(session.options.environment, env);
    });
  });

  describe("unauthenticated requests", function(){
      let handlerCalled=false;
      beforeEach(function(done) {
          var session = new purecloud.PureCloudSession({timeout:20000});

        //  session.debugLog = console.log;

          session.setUnauthenticatedErrorHandler(function(err){
              handlerCalled=true;
              done();
          });

          const Auth = purecloud.AuthorizationApi(session);
          Auth.getRoles().catch(function(ex){done()});

    });


     it("should call global error handler", function (){
         expect(handlerCalled).toBeTruthy();
     }) ;
  });
});
