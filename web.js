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

app.get('/', function(req, res) {res.send("hello world"); });

app.get('/CFA', function(req, res) {
	fs.readFile("./CFA.html", function(err, html){
		console.log("*****");
		if (err)
			console.log("error");
		else
		{
			console.log("else");
			http.createServer(function(htmlReq, htmlRes){
				console.log("http");
				htmlRes.writeHeader(200, {"Content-Type": "text/html"});
				htmlRes.write(html);
				htmlRes.end();
			});
		}
	});
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});