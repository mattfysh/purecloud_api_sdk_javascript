//To run: phantomjs --ssl-protocol=any spec/phantomjs/users_me.spec.js

var url = 'http://localhost:8085/user_me.html';

//this method is called in the context of the page and should return true if the page is valid
function validationCallback() {
    try{
        var headerText = $("#userHeader").html();
        return (typeof headerText != 'undefined') && headerText != "";
    }
    catch(e){
        console.log(e);
        return false;
    }
}


var pageHandler = require('./pageHandlerModule');

pageHandler.execute(url, validationCallback);
