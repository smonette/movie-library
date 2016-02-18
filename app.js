var express = require('express'),
    app = express();

var http = require('http').createServer(app);

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function(req,res){
  res.render('index');
});



http.listen(process.env.PORT || 4000, function(){
  console.log("Success! View this page on localhost:4000");
});

module.exports = app;
