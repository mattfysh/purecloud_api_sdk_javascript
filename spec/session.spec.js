var assert = require('assert');
var purecloud = require('../dist/purecloud-api-node');

describe("PureCloudSession", function() {
  describe('constructor(options)', function() {
    it("should set the environment by default", function() {
      var session = new purecloud.PureCloudSession({});
      assert.equal(session.options.environment, 'mypurecloud.com');
    });

    it("should set the environment if specified", function() {
      var env = 'foo';
      var session = new purecloud.PureCloudSession({environment: env});
      assert.equal(session.options.environment, env);
    });
  });
});
