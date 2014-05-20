// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();
var http = require('http');
var fs = require('fs');
var collections = ["CFA", "Baker", "Wean", "Cyert", "Hunt"];
var db = require("mongojs").connect(process.env.MONGOHQ_URL, collections);

app.use(logfmt.requestLogger());

app.get('/', function(req, res) { });

app.get('/CFA', function(req, res) {
	fs.readFile('CFA.html', function(err, html){
		if(err){
			console.log("error");
		}
		else {
			res.send(html);
		}
	});
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});