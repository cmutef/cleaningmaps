// web.js
var express = require("express");
var logfmt = require("logfmt");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();
var collections = ["CFA", "Baker", "Wean", "Cyert", "Hunt"];
var db = require("mongojs").connect(process.env.MONGOLAB_URI, collections);
var indexhtml = fs.readFileSync("index.html", 'utf8');
var CFAhtml = fs.readFileSync("CFA.html", 'utf8');
var BHhtml = fs.readFileSync("BH.html", 'utf8');
var Hunthtml = fs.readFileSync("Hunt.html", 'utf8');
var Weanhtml = fs.readFileSync("Wean.html", 'utf8');
var Cyerthtml = fs.readFileSync("Cyert.html", 'utf8');

app.use(bodyParser());

app.get('/', function(req, res) {
	var d = new Date();
	db.CFA.remove({name:"WW109-C6"});
	db.CFA.remove({name:"WW109-C1"});
	db.CFA.remove({name:"WW109-C11"});
	db.CFA.remove({name:"WW109-A4"});
	db.CFA.remove({name:"BH140C-18"});

	db.CFA.save({
		name:"WW109-C6",
		andrew:"test",
		date:d
	});
	db.CFA.save({
		name:"WW109-C1",
		andrew:"test",
		date:d
	});
	db.CFA.save({
		name:"WW109-C11",
		andrew:"test",
		date:d
	});
	db.CFA.save({
		name:"WW109-A4",
		andrew:"test",
		date:d
	});
	db.CFA.save({
		name:"BH140C-18",
		andrew:"test",
		date:d
	});
	for(var i = 1; i < 7; i++){
		db.CFA.remove({name:"WEH5202-A"+i});
		db.CFA.remove({name:"WEH5202-B"+i});
		db.CFA.remove({name:"WEH5202-C"+i});
		db.CFA.remove({name:"WEH5202-D"+i});
		db.CFA.remove({name:"WEH5202-E"+i});

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
	db.CFA.remove({name:"WEH5202-I1"});
	db.CFA.save({
		name:"WEH5202-I1",
		andrew:"test",
		date:d
	    });
	res.send(""+indexhtml); 
});

app.get('/CFA', function(req, res) {
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

app.get('/Cyert', function(req, res) {
	var d = new Date();
     
    res.send(""+Cyerthtml);
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

db.CFA.find({name:"ANDREW"}, function(err, docs){
	db.CFA.update({name:req.body.name}, {$set:{date:d, andrew:docs[0].andrew}}, function() {
        res.send("update complete");
    });
});


	
});

app.post("/andrew", function(req,res){
var d = new Date();
console.log("POST: "+req.body.andrew);
db.CFA.update({name:"ANDREW"}, {$set:{date:d, andrew:req.body.andrew}}, function() {
    res.send("update complete");
});
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});