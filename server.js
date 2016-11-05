// Server Dependencies
var express= require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Create instance of express===========
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));


// ROUTES=================================

// Main Route. This route will redirect to our rendered React application
app.get('/', function(req, res){
  res.sendFile('./public/index.html');
})

//========================================

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});