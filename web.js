// web.js
var express = require("express");
var logfmt = require("logfmt");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();
var collections = ["CFA", "Baker", "Wean", "Cyert", "Hunt"];
var db = require("mongojs").connect(process.env.MONGOLAB_URI, collections);
var CFAhtml = fs.readFileSync("CFA.html", 'utf8');
var BHhtml = fs.readFileSync("BH.html", 'utf8');
var Hunthtml = fs.readFileSync("Hunt.html", 'utf8');
var Weanhtml = fs.readFileSync("Wean.html", 'utf8');

app.use(bodyParser());

app.get('/', function(req, res) {res.send("hello world"); });

app.get('/CFA', function(req, res) {
	var d = new Date();
    for(var i = 1; i < 11; i++)
    {
    	var n =""
    	if(i<10)n="0";
    	db.CFA.save({
			name:"CFA323-"+n+i,
			andrew:"test",
			date:d
		});
    }
    for(var i = 1; i < 21; i++)
    {
    	var n =""
    	if(i<10)n="0";
    	db.CFA.save({
			name:"CFA317-"+n+i,
			andrew:"test",
			date:d
		});
    }
    db.CFA.save({
			name:"CFA318-SCANNER",
			andrew:"test",
			date:d
		});
    db.CFA.save({
			name:"CFA317-SCANNER",
			andrew:"test",
			date:d
		});
    db.CFA.save({
			name:"CFA-WEB02",
			andrew:"test",
			date:d
		});
    db.CFA.save({
			name:"CFA-WEB01",
			andrew:"test",
			date:d
		});
    db.CFA.save({
			name:"rs-cl-cfa-a",
			andrew:"test",
			date:d
		});
     db.CFA.save({
			name:"prn-cl-cfa-1",
			andrew:"test",
			date:d
		});
      db.CFA.save({
			name:"CFA322-CC1",
			andrew:"test",
			date:d
		});
      db.CFA.save({
			name:"CFA321-01",
			andrew:"test",
			date:d
		});
      db.CFA.save({
			name:"CFA320-CC1",
			andrew:"test",
			date:d
		});
      db.CFA.save({
			name:"CFA320-CC2",
			andrew:"test",
			date:d
		});
    res.send(""+CFAhtml);
});

app.get('/BH', function(req, res) {
    res.send(""+BHhtml);
});

app.get('/Wean', function(req, res) {
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