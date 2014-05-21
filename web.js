// web.js
var express = require("express");
var logfmt = require("logfmt");
var http = require("http");
var fs = require("fs");
var app = express();
var collections = ["CFA", "Baker", "Wean", "Cyert", "Hunt"];
var db = require("mongojs").connect(process.env.MONGOHQ_URL, collections);
var connect = require("connect");
var CFAhtml = "<html><head></head><body></body></html>"


connect().use(connect.static(__dirname));
app.use(logfmt.requestLogger());

app.get('/', function(req, res) {res.send("hello world"); });

app.get('/CFA', function(req, res) {
    res.send(CFAhtml);
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});