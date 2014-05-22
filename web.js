// web.js
var express = require("express");
var logfmt = require("logfmt");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();
var collections = ["CFA", "Baker", "Wean", "Cyert", "Hunt"];
var db = require("mongojs").connect(process.env.MONGOHQ_URL, collections);
var CFAhtml = fs.readFileSync("CFA.html", 'utf8');

app.use(bodyParser());

app.get('/', function(req, res) {res.send("hello world"); });

app.get('/CFA', function(req, res) {
	res.send(db.CFA.find(function(err, docs){}));
    //res.send(""+CFAhtml);
});

app.get("/CFAdata", function(req, res){
	db.CFA.find(function(err, docs){
		if(err) 
			console.log("error");
		else
			res.send(docs);
	});

});

app.post("/CFAdata", function(req,res){

db.mycollection.findAndModify({
    query: { name: req.body.name },
    update: { $set: { date:new Date() } },
    new: true
}, function(err, doc, lastErrorObject) {
    
});

	
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});