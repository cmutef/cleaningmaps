// web.js
var express = require("express");
var logfmt = require("logfmt");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();
var collections = ["CFA", "Baker", "Wean", "Cyert", "Hunt"];
var db = require("mongojs").connect(process.env.MONGOHQ_URL, collections);
var CFAhtml = fs.readFileSync("CFA.html", 'utf8');
var BHhtml = fs.readFileSync("BH.html", 'utf8');
var Hunthtml = fs.readFileSync("Hunt.html", 'utf8');
var Weanhtml = fs.readFileSync("Wean.html", 'utf8');

app.use(bodyParser());

app.get('/', function(req, res) {res.send("hello world"); });

app.get('/CFA', function(req, res) {

    res.send(""+CFAhtml);
});

app.get('/BH', function(req, res) {
    res.send(""+BHhtml);
});

app.get('/Wean', function(req, res) {
	var d = new Date();
	for(var i = 1; i < 7; i++){
		db.CFA.save({
			name:"WEH5202-A"+i,
			andrew:"test",
			date:d
		});

		db.CFA.save({
			name:"WEH5202-B"+i,
			andrew:"test",
			date:d
		});

		db.CFA.save({
			name:"WEH5202-C"+i,
			andrew:"test",
			date:d
		});

		db.CFA.save({
			name:"WEH5202-D"+i,
			andrew:"test",
			date:d
		});

		db.CFA.save({
			name:"WEH5202-E"+i,
			andrew:"test",
			date:d
		});
	}
	db.CFA.save({
			name:"WEH5202-I1",
			andrew:"test",
			date:d
		});
    res.send(""+Weanhtml);
});

app.get('/Hunt', function(req, res) {

    res.send(""+Hunthtml);
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

var d = new Date();

db.CFA.update({name:req.body.name}, {$set:{date:d}}, function() {
    res.send("update complete");
});
	
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});