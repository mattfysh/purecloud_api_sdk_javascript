(function () {
    var $ = null;
    var jsdom = require("jsdom").jsdom;
    var doc = jsdom("<div></div>");
    var window = doc.defaultView;
    $ = require('jquery')(window);
