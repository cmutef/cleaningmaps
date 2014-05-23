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

    res.send(""+CFAhtml);
});

app.get('/BH', function(req, res) {

    res.send(""+BHhtml);
});

app.get('/Wean', function(req, res) {
    res.send(""+Weanhtml);
});

app.get('/Hunt', function(req, res) {
	var d = new Date();

	for(var i = 1; i < 4; i++)
	{
		db.CFA.save({
			name:"HUNT-B"+1+"5",
			andrew:"test",
			date:d
		});
		db.CFA.save({
			name:"HUNT-B"+1+"4",
			andrew:"test",
			date:d
		});
		db.CFA.save({
			name:"HUNT-B"+1+"3",
			andrew:"test",
			date:d
		});
		db.CFA.save({
			name:"HUNT-B"+1+"2",
			andrew:"test",
			date:d
		});
		db.CFA.save({
			name:"HUNT-B"+1+"1",
			andrew:"test",
			date:d
		});
	}

	db.CFA.save({
			name:"HUNT-A14",
			andrew:"test",
			date:d
		});
	db.CFA.save({
			name:"HUNT-A13",
			andrew:"test",
			date:d
		});
	db.CFA.save({
			name:"HUNT-A12",
			andrew:"test",
			date:d
		});
	db.CFA.save({
			name:"HUNT-A11",
			andrew:"test",
			date:d
		});
  	db.CFA.save({
			name:"HUNT-A24",
			andrew:"test",
			date:d
		});
	db.CFA.save({
			name:"HUNT-A23",
			andrew:"test",
			date:d
		});
	db.CFA.save({
			name:"HUNT-A22",
			andrew:"test",
			date:d
		});
	db.CFA.save({
			name:"HUNT-A21",
			andrew:"test",
			date:d
		});
	db.CFA.save({
			name:"HUNT-A32",
			andrew:"test",
			date:d
		});
	db.CFA.save({
			name:"HUNT-A31",
			andrew:"test",
			date:d
		});
    	
    	db.CFA.save({
			name:"HUNT-I1",
			andrew:"test",
			date:d
		});
    
db.CFA.save({
			name:"HUNT-D14",
			andrew:"test",
			date:d
		});
	db.CFA.save({
			name:"HUNT-D13",
			andrew:"test",
			date:d
		});
	db.CFA.save({
			name:"HUNT-D12",
			andrew:"test",
			date:d
		});
	db.CFA.save({
			name:"HUNT-D11",
			andrew:"test",
			date:d
		});

	db.CFA.save({
			name:"HUNT-D24",
			andrew:"test",
			date:d
		});
	db.CFA.save({
			name:"HUNT-D23",
			andrew:"test",
			date:d
		});
	db.CFA.save({
			name:"HUNT-D22",
			andrew:"test",
			date:d
		});
	db.CFA.save({
			name:"HUNT-D21",
			andrew:"test",
			date:d
		});
	db.CFA.save({
			name:"HUNT-D33",
			andrew:"test",
			date:d
		});
	db.CFA.save({
			name:"HUNT-D32",
			andrew:"test",
			date:d
		});
	db.CFA.save({
			name:"HUNT-D31",
			andrew:"test",
			date:d
		});

db.CFA.save({
			name:"HUNT-C15",
			andrew:"test",
			date:d
		});
	db.CFA.save({
			name:"HUNT-C14",
			andrew:"test",
			date:d
		});
	db.CFA.save({
			name:"HUNT-C13",
			andrew:"test",
			date:d
		});
	db.CFA.save({
			name:"HUNT-C12",
			andrew:"test",
			date:d
		});
	db.CFA.save({
			name:"HUNT-C11",
			andrew:"test",
			date:d
		});
	db.CFA.save({
			name:"HUNT-C25",
			andrew:"test",
			date:d
		});
	db.CFA.save({
			name:"HUNT-C24",
			andrew:"test",
			date:d
		});
	db.CFA.save({
			name:"HUNT-C23",
			andrew:"test",
			date:d
		});
	db.CFA.save({
			name:"HUNT-C22",
			andrew:"test",
			date:d
		});
	db.CFA.save({
			name:"HUNT-C21",
			andrew:"test",
			date:d
		});
		db.CFA.save({
			name:"HUNT-C34",
			andrew:"test",
			date:d
		});
	db.CFA.save({
			name:"HUNT-C33",
			andrew:"test",
			date:d
		});
	db.CFA.save({
			name:"HUNT-C32",
			andrew:"test",
			date:d
		});
	db.CFA.save({
			name:"HUNT-C31",
			andrew:"test",
			date:d
		});

	for(var i=1; i<11; i++)
	{
		db.CFA.save({
			name:"HUNTUNIX-"+i,
			andrew:"test",
			date:d
		});
	}

	db.CFA.save({
			name:"prn-cl-hunt-1",
			andrew:"test",
			date:d
		});

	db.CFA.save({
			name:"rs-cl-hunt-a",
			andrew:"test",
			date:d
		});
	db.CFA.save({
			name:"HUNT-CC1",
			andrew:"test",
			date:d
		});

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