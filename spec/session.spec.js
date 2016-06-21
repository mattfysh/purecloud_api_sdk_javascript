var purecloud = require('../dist/purecloud-api-node')

describe("Session tests", function() {
  it("should set the environment by default", function() {
    var session = new purecloud.PureCloudSession();
    expect(session.environment()).toBe("mypurecloud.com");
  });

  it("should set the environment from the constructor", function() {
      var environment = "foo";
      var session = new purecloud.PureCloudSession(environment);
      session.authToken("bar")
      expect(session.environment()).toBe(environment);
  });
});
