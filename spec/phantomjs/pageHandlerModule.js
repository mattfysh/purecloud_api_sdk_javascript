function execute(url, validationCallback){

    function executeValidationCallback(page){
        console.log("validation callback");
        setTimeout(function(){
            var verified = page.evaluate(validationCallback);

            page.evaluate(function(){
                localStorage.clear();
            });
            if(verified === true){
                console.log("passed");
                phantom.exit();
            }else{
                console.log("unable to validate page");
                phantom.exit(1);
            }


        },2000);
    }

    var page = new WebPage();

    var system = require('system');
    var env = system.env;

    var email = env['EMAIL'];
    var password = env['PASSWORD'];

    var orgId = env['ORGID'];

    if(!email || !password){
        console.log("Environment variables EMAIL and PASSWORD must be set");
        console.log("Environment variable ORGID may be set");
        phantom.exit(1);
        return;

    }

    page.viewportSize = {
      width: 480,
      height: 800
    };

    var authentication = require('./authenticationModule');

    authentication.setupLoginHandler(page, email, password, orgId);

    page.onConsoleMessage = function (msg, line, source) {
        console.log('console> ' + msg);
    };

    page.onLoadFinished = function(status) {
      if(page.url.indexOf(url) > -1){
          if(authentication.hasPureCloudAccessToken(page)){
              console.log("hasToken")
              executeValidationCallback(page);
          }
      }
    };

    // Callback is executed each time a page is loaded...
    page.open(url, function (status) {
        console.log("Page open ("+ status+"): " + url);
        try{
            setTimeout(function(){
                if(authentication.hasPureCloudAccessToken(page)){
                    executeValidationCallback(page);
                }
            }, 2000);

        }
        catch(e){
            console.log(e);
        }
    });
}

module.exports = {
    execute: execute
};
