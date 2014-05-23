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
			name:"CYH100-D1",
			andrew:"test",
			date:d
        });
    db.CFA.save({
			name:"CYH100-D2",
			andrew:"test",
			date:d
        });
    db.CFA.save({
			name:"CYH100-D3",
			andrew:"test",
			date:d
        });
    db.CFA.save({
			name:"CYH100-D4",
			andrew:"test",
			date:d
        });
    db.CFA.save({
			name:"CYH100-D5",
			andrew:"test",
			date:d
        });
    db.CFA.save({
			name:"CYH100-D6",
			andrew:"test",
			date:d
        });
    db.CFA.save({
			name:"CYH100-D7",
			andrew:"test",
			date:d
        });
    db.CFA.save({
			name:"CYH100-D8",
			andrew:"test",
			date:d
        });

    db.CFA.save({
			name:"CYH100-C1",
			andrew:"test",
			date:d
        });
    db.CFA.save({
			name:"CYH100-C2",
			andrew:"test",
			date:d
        });
    db.CFA.save({
			name:"CYH100-C3",
			andrew:"test",
			date:d
        });
    db.CFA.save({
			name:"CYH100-C4",
			andrew:"test",
			date:d
        });
    db.CFA.save({
			name:"CYH100-C5",
			andrew:"test",
			date:d
        });
    db.CFA.save({
			name:"CYH100-C6",
			andrew:"test",
			date:d
        });

    db.CFA.save({
			name:"CYH100-B1",
			andrew:"test",
			date:d
        });
    db.CFA.save({
			name:"CYH100-B2",
			andrew:"test",
			date:d
        });
    db.CFA.save({
			name:"CYH100-B3",
			andrew:"test",
			date:d
        });
    db.CFA.save({
			name:"CYH100-B4",
			andrew:"test",
			date:d
        });
    db.CFA.save({
			name:"CYH100-B5",
			andrew:"test",
			date:d
        });
    db.CFA.save({
			name:"CYH100-B6",
			andrew:"test",
			date:d
        });
    db.CFA.save({
			name:"CYH100-B7",
			andrew:"test",
			date:d
        });
    db.CFA.save({
			name:"CYH100-B8",
			andrew:"test",
			date:d
        });

    db.CFA.save({
			name:"CYH100-A1",
			andrew:"test",
			date:d
        });
    db.CFA.save({
			name:"CYH100-A2",
			andrew:"test",
			date:d
        });
    db.CFA.save({
			name:"CYH100-A3",
			andrew:"test",
			date:d
        });
    db.CFA.save({
			name:"CYH100-A4",
			andrew:"test",
			date:d
        });
    db.CFA.save({
			name:"CYH100-A5",
			andrew:"test",
			date:d
        });
    db.CFA.save({
			name:"CYH100-A6",
			andrew:"test",
			date:d
        });
    db.CFA.save({
			name:"CYH100-A7",
			andrew:"test",
			date:d
        });
    db.CFA.save({
			name:"CYH100-A8",
			andrew:"test",
			date:d
        });

    db.CFA.save({
			name:"CYH100-T1",
			andrew:"test",
			date:d
        });

    db.CFA.save({
			name:"WEB-CYH01",
			andrew:"test",
			date:d
        });

    db.CFA.save({
			name:"WEB-CYH02",
			andrew:"test",
			date:d
        });

    db.CFA.save({
			name:"rs-cl-cyert-b",
			andrew:"test",
			date:d
        });

    db.CFA.save({
			name:"prn-cl-cyert-2",
			andrew:"test",
			date:d
        });
    db.CFA.save({
			name:"CYH100-CC2",
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