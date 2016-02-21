var express = require('express'),
    db = require('./models/index.js'),
    bodyParser = require('body-parser'),
    app = express();

var http = require('http').createServer(app);

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}) );


app.get('/', function(req,res){
  db.movie.findAll()
  .then(function(movies){
    res.render('index', {
      movies: movies, 

      message:''
    })
  })
});

app.post('/create', function(req,res){
  // have to call my create new user functions
  db.movie.createNewMovie(req.body.title, req.body.review,req.body.image, req.body.rating,
    function(err){
      console.log('NOO')
    },
    function(success){
      res.redirect('/');
    }
  );

});




http.listen(process.env.PORT || 4000, function(){
  console.log("Success! View this page on localhost:4000");
});

module.exports = app;
