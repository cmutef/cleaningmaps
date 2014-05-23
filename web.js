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
    	db.CFA.save({
			name:"prn-cl-cfa-a",
			andrew:"test",
			date:d
		});
    
    res.send(""+CFAhtml);
});

app.get('/BH', function(req, res) {
	var d = new Date();

		db.CFA.save({
			name:"BH140D-A1",
			andrew:"test",
			date:d
		});
		db.CFA.save({
			name:"BH140D-A2",
			andrew:"test",
			date:d
		});
		db.CFA.save({
			name:"BH140D-A3",
			andrew:"test",
			date:d
		});
		db.CFA.save({
			name:"BH140D-A4",
			andrew:"test",
			date:d
		});

		db.CFA.save({
			name:"BH140D-B1",
			andrew:"test",
			date:d
		});
		db.CFA.save({
			name:"BH140D-B2",
			andrew:"test",
			date:d
		});
		db.CFA.save({
			name:"BH140D-B3",
			andrew:"test",
			date:d
		});
		db.CFA.save({
			name:"BH140D-B4",
			andrew:"test",
			date:d
		});

		db.CFA.save({
			name:"BH140D-C1",
			andrew:"test",
			date:d
		});
		db.CFA.save({
			name:"BH140D-C2",
			andrew:"test",
			date:d
		});
		db.CFA.save({
			name:"BH140D-C3",
			andrew:"test",
			date:d
		});
		db.CFA.save({
			name:"BH140D-C4",
			andrew:"test",
			date:d
		});
		db.CFA.save({
			name:"BH140D-C5",
			andrew:"test",
			date:d
		});

		db.CFA.save({
			name:"BH140D-I1M",
			andrew:"test",
			date:d
		});

		db.CFA.save({
			name:"BH140D-I1W",
			andrew:"test",
			date:d
		});

		for(var i = 1; i < 21; i++){
			var n="";
			if(i<10)n="0";
			db.CFA.save({
			name:"BH140C-"+n+i,
			andrew:"test",
			date:d
		});
		}

		db.CFA.save({
			name:"BH140C-I1",
			andrew:"test",
			date:d
		});



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