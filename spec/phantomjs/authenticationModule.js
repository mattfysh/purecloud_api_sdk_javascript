function hasPureCloudAccessToken(page){
    var hasToken = page.evaluate(function() {
     return pureCloudSession.hasAuthorizationToken();
   });

   return hasToken;
}

function setupLoginHandler(page, username, password, orgid){

    function fillInUserAndPassword(){
        page.evaluate(function(username, password) {
            console.log("logging in");
            $('#email').val(username);
            $('#password').val(password);
            $(".btn-login").prop("disabled", false);
            $('#password').change();
            $('#email').change();
            console.log($(".btn-login"));
            $(".btn-login").click();
            console.log("done");

        }, username, password);
    }

    page.onNavigationRequested = function(url, type, willNavigate, main) {
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

              page.render("login.png");
          }, 500);
      }
  };
}

module.exports = {
    setupLoginHandler: setupLoginHandler,
    hasPureCloudAccessToken: hasPureCloudAccessToken
};
