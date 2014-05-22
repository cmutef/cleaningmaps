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

app.use(bodyParser());

app.get('/', function(req, res) {res.send("hello world"); });

app.get('/CFA', function(req, res) {

    res.send(""+CFAhtml);
});

app.get('/BH', function(req, res) {
	var d = new Date();

db.CFA.save({
	name:"HUNT-I1",
	andrew:"test",
	date:d
});

db.CFA.save({
	name:"HUNT-B15",
	andrew:"test",
	date:d
});
db.CFA.save({
	name:"HUNT-B14",
	andrew:"test",
	date:d
});
db.CFA.save({
	name:"HUNT-B13",
	andrew:"test",
	date:d
});
db.CFA.save({
	name:"HUNT-B12",
	andrew:"test",
	date:d
});
db.CFA.save({
	name:"HUNT-B11",
	andrew:"test",
	date:d
});

db.CFA.save({
	name:"HUNT-B25",
	andrew:"test",
	date:d
});
db.CFA.save({
	name:"HUNT-B24",
	andrew:"test",
	date:d
});
db.CFA.save({
	name:"HUNT-B23",
	andrew:"test",
	date:d
});
db.CFA.save({
	name:"HUNT-B22",
	andrew:"test",
	date:d
});
db.CFA.save({
	name:"HUNT-B21",
	andrew:"test",
	date:d
});

db.CFA.save({
	name:"HUNT-B35",
	andrew:"test",
	date:d
});
db.CFA.save({
	name:"HUNT-B34",
	andrew:"test",
	date:d
});
db.CFA.save({
	name:"HUNT-B33",
	andrew:"test",
	date:d
});
db.CFA.save({
	name:"HUNT-B32",
	andrew:"test",
	date:d
});
db.CFA.save({
	name:"HUNT-B31",
	andrew:"test",
	date:d
});


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


    res.send(""+BHhtml);
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