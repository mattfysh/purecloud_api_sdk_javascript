function hasPureCloudAccessToken(page){
    var hasToken = page.evaluate(function() {
        console.log("checking token on " +  pureCloudSession);
        console.log("has token? " +  pureCloudSession.hasAuthorizationToken());
     return pureCloudSession && pureCloudSession.hasAuthorizationToken();
   });

   return hasToken;
}

function setupLoginHandler(page, username, password, orgid){

    function fillInUserAndPassword(){
        page.evaluate(function(username, password) {
            $('#email').val(username);
            $('#password').val(password);
            $(".btn-login").prop("disabled", false);
            $('#password').change();
            $('#email').change();
            $(".btn-login").click();

        }, username, password);
    }

    page.onNavigationRequested = function(url, type, willNavigate, main) {
        var tokenRegex = /access_token.*/;

        if(tokenRegex.test(url)){
            //make sure not to trace out access tokens
            console.log("Navigation requested " + url.replace(tokenRegex,'<TOKENHIDDEN>'));
        }else{
            console.log("Navigation requested " + url );
        }


      if(url === "https://login.mypurecloud.com/#/authenticate"){
          setTimeout(function(){
                  if(orgid){
                      page.evaluate(function() {
                          console.log("selecting org");
                          $(".auth-form-footer a")[0].click();
                      });
                  }else{
                      page.evaluate(function() {
                          fillInUserAndPassword();
                      });
                  }
              },500);
      }
      else if(url === 'https://login.mypurecloud.com/#/authenticate-adv/org'){
          setTimeout(function(){
              page.evaluate(function(orgid) {
                  console.log("setting org + " + orgid);
                  $("#org").val(orgid);
                   $('#org').change();
                   console.log("clicking org");
                  $("form button")[0].click();

              }, orgid);
          },500);
      }
      else if(url === 'https://login.mypurecloud.com/#/authenticate-adv/org/' + orgid){
          setTimeout(function(){
              fillInUserAndPassword();
          }, 500);
      }
  };
}

module.exports = {
    setupLoginHandler: setupLoginHandler,
    hasPureCloudAccessToken: hasPureCloudAccessToken
};
