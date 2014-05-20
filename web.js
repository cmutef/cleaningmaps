// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();
var collections = ["CFA", "Baker", "Wean", "Cyert", "Hunt"];
var db = require("mongojs").connect(MONGOHQ_URL, collections);

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {

for(var i = 1; i < 21; i++){
  var n = "";
  if(i < 10) n = "0";
  var d = new Date();
  db.CFA.save({name:"CFA318-"+n+i, andrew:"test", date:d}, function(err, save){
  	if(err)
  		console.log("error");
  	else
  		console.log("saved");
  });
}

db.CFA.find(function(err, comp){
  	if(err) 
  	    console.log("error");
  	else
  		res.send(comp);
  });

});

app.get('/CFA', function(req, res) {
	res.send([{name:'CFA1'}, {name:'CFA2'}]);
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});