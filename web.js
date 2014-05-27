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
	for(var i = 1; i < 21; i++){
		var n = "";
		if(i < 10) n ="0";
		db.CFA.remove({name:"WEH5207-"+n+i});
		db.CFA.save({
			name:"WEH5207-"+n+i,
			andrew:"test",
			date:d
		});
	}
	db.CFA.remove({name:"WEH5206-CC3"});
		db.CFA.save({
			name:"WEH5206-CC3",
			andrew:"test",
			date:d
		});
		db.CFA.remove({name:"WEH5206-CC2"});
		db.CFA.save({
			name:"WEH5206-CC2",
			andrew:"test",
			date:d
		});
		db.CFA.remove({name:"WEH5206-CC1"});
		db.CFA.save({
			name:"WEH5206-CC1",
			andrew:"test",
			date:d
		});
		db.CFA.remove({name:"WEB-WEH01"});
		db.CFA.save({
			name:"WEB-WEH01",
			andrew:"test",
			date:d
		});
		db.CFA.remove({name:"WEB-WEH02"});
		db.CFA.save({
			name:"WEB-WEH02",
			andrew:"test",
			date:d
		});
		db.CFA.remove({name:"rs-cl-wean-a"});
		db.CFA.save({
			name:"rs-cl-wean-a",
			andrew:"test",
			date:d
		});
		db.CFA.remove({name:"prn-cl-wean-2"});
		db.CFA.save({
			name:"prn-cl-wean-2",
			andrew:"test",
			date:d
		});
		db.CFA.remove({name:"prn-cl-wean-1"});
		db.CFA.save({
			name:"prn-cl-wean-1",
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
	db.CFA.find(function(err, docs){
		res.send(docs);
	})
    //res.send(""+Weanhtml);
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