// web.js
var express = require("express");
var logfmt = require("logfmt");
var querystring = require("querystring");
var http = require("http");
var url = require("url");
var fs = require("fs");
var path = require("path");
var app = express();
var collections = ["CFA", "Baker", "Wean", "Cyert", "Hunt"];
var db = require("mongojs").connect(process.env.MONGOHQ_URL, collections);

app.use(logfmt.requestLogger());

app.register(".html", require("jade"));

app.get('/', function(req, res) {res.send("hello world"); });

app.get('/CFA', function(req, res) {
	res.render("CFA.html");
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});