var http = require("http");

var express = require('express');
var app = express();

app.use(express.static(__dirname));
app.use('/dist', express.static(__dirname + '/../dist'));
app.use('/gen', express.static(__dirname + '/../gen'));

app.get("/", function(req, res){
    res.redirect("/implicit.html")
})

app.get("/oauth2/callback", function(req,res){
    res.redirect("/authredirect.html")
});

var httpServer = http.createServer(app);
httpServer.listen('8085');
