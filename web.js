// web.js
var express = require("express");
var logfmt = require("logfmt");
var http = require("http");
var fs = require("fs");
var app = express();
var collections = ["CFA", "Baker", "Wean", "Cyert", "Hunt"];
var db = require("mongojs").connect(process.env.MONGOHQ_URL, collections);
var CFAhtml = fs.readFileSync("CFA.html", 'utf8');

console.log(CFAhtml);

app.get('/', function(req, res) {res.send("hello world"); });

app.get('/CFA', function(req, res) {
	var d = new Date();
	db.CFA.save({name:"CFA318-SCANNER", andrew:"test", date:d});
	db.CFA.save({name:"CFA317-SCANNER", andrew:"test", date:d});
    res.send(""+CFAhtml);
});

app.get("/CFAdata", function(req, res){
	db.CFA.find(function(err, docs){
		if(err) 
			console.log("error");
		else
			res.send(docs);
	});

});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});