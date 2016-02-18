var express = require('express'),
    db = require('./models/index.js'),
    bodyParser = require('body-parser'),
    app = express();

var http = require('http').createServer(app);

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}) );

var ogs = require('open-graph-scraper');


// var cards = db.fact.findAll({attributes: ['name']})
ogs(
  { url: 'http://en.wikipedia.org/wiki/Dell' }, // Settings object first
  function(er, res) { console.log(er, res); }  // Callback 
);


// SITE FILES

app.get('/', function (req, res) {
 
});



http.listen(process.env.PORT || 4000, function(){
  console.log("server is up!");
});

module.exports = app;
