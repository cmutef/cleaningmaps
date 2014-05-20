// web.js
var express = require("express");
var logfmt = require("logfmt");
var http = require("http");
var fs = require("fs");
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
			http.createServer(function(request, response){
				request.on("data", function(){});
				response.writeHeader(200, {"Content-Type": "text/html"});
				response.write(html);
				response.end();
			});
		}
	});
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});