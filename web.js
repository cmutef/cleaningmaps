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
var Cyerthtml = fs.readFileSync("Cyert.html", 'utf8');

app.use(bodyParser());

app.get('/', function(req, res) {res.send("hello world"); });

app.get('/CFA', function(req, res) {

    res.send(""+CFAhtml);
});

app.get('/BH', function(req, res) {
	var d = new Date();
db.CFA.save({
			name:"BH140C-18",
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

app.get('/Cyert', function(req, res) {
	var d = new Date();

    db.CFA.save({
			name:"CYH100-SCANNER",
			andrew:"test",
			date:d
        });
     db.CFA.save({
			name:"MORE-C7",
			andrew:"test",
			date:d
        });
     db.CFA.save({
			name:"MORE-C6",
			andrew:"test",
			date:d
        });
     db.CFA.save({
			name:"MORE-C5",
			andrew:"test",
			date:d
        });
     db.CFA.save({
			name:"MORE-C4",
			andrew:"test",
			date:d
        });
     db.CFA.save({
			name:"MORE-C3",
			andrew:"test",
			date:d
        });
     db.CFA.save({
			name:"MORE-C2",
			andrew:"test",
			date:d
        });
     db.CFA.save({
			name:"MORE-C1",
			andrew:"test",
			date:d
        });

db.CFA.save({
			name:"MORE-B5",
			andrew:"test",
			date:d
        });
     db.CFA.save({
			name:"MORE-B4",
			andrew:"test",
			date:d
        });
     db.CFA.save({
			name:"MORE-B3",
			andrew:"test",
			date:d
        });
     db.CFA.save({
			name:"MORE-B2",
			andrew:"test",
			date:d
        });
     db.CFA.save({
			name:"MORE-B1",
			andrew:"test",
			date:d
        });
     db.CFA.save({
			name:"MORE-A4",
			andrew:"test",
			date:d
        });
     db.CFA.save({
			name:"MORE-A3",
			andrew:"test",
			date:d
        });
     db.CFA.save({
			name:"MORE-A2",
			andrew:"test",
			date:d
        });
     db.CFA.save({
			name:"MORE-A1",
			andrew:"test",
			date:d
        });

     db.CFA.save({
			name:"MORE-SCANNER",
			andrew:"test",
			date:d
        });

     db.CFA.save({
			name:"prn-cl-more-1",
			andrew:"test",
			date:d
        });
     db.CFA.save({
			name:"rs-cl-more-a",
			andrew:"test",
			date:d
        });

     db.CFA.save({
			name:"UC-WEB05",
			andrew:"test",
			date:d
        });
     db.CFA.save({
			name:"UC-WEB04",
			andrew:"test",
			date:d
        });
     db.CFA.save({
			name:"UC-WEB03",
			andrew:"test",
			date:d
        });
     db.CFA.save({
			name:"UC-WEB02",
			andrew:"test",
			date:d
        });
     db.CFA.save({
			name:"UC-WEB01",
			andrew:"test",
			date:d
        });
     db.CFA.save({
			name:"rs-cl-uc-a",
			andrew:"test",
			date:d
        });
     db.CFA.save({
			name:"prn-cl-uc-1",
			andrew:"test",
			date:d
        });


    
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

db.CFA.update({name:req.body.name}, {$set:{date:d}}, function() {
    res.send("update complete");
});
	
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});