//To run: phantomjs --ssl-protocol=any spec/phantomjs/users_me.spec.js

var url = 'http://localhost:8085/user_me.html';

function validationCallback(page){
    console.log("validation callback");
    setTimeout(function(){
        var verified = page.evaluate(function() {
                try{
                    var headerText = $("#userHeader").html();

                    console.log(headerText);
                    return headerText != "";
                }
                catch(e){
                    return false;
                }
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

var pageHandler = require('./pageHandlerModule');

pageHandler.execute(url, validationCallback);
