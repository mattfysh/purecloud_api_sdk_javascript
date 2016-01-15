var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs')
var binPath = phantomjs.path;

var http = require("http");

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/examples'));
app.use('/dist', express.static(__dirname + '/dist'));
app.use('/gen', express.static(__dirname + '/gen'));

var httpServer = http.createServer(app);

console.log("starting server on port 8085")
httpServer.listen('8085');



var childArgs = [
  path.join(__dirname, 'spec/phantomjs/users_me.spec.js'),
  '--ssl-protocol=any'
]

console.log('Starting tests');
childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {

    console.log(stderr)
    console.log(stdout)

    if(err != null){
        console.log(err);
        httpServer.close();
        process.exit(1)
    }



    httpServer.close();
})
