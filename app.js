var express = require('express'),
    db = require('./models/index.js'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    flash = require('connect-flash'),
    app = express();

var http = require('http').createServer(app);

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}) );

app.use(cookieParser('secret'));
app.use(session({cookie: { maxAge: 60000 }}));

app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});


app.get('/', function(req,res){
  db.movie.findAll()
  .then(function(movies){
    res.render('index', {
      movies: movies,
      message: ''    
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

app.get('/search', function (req, res) {
  
  var search = req.query.searchterm;
  console.log("searched for: " + search);

  db.movie.findMovie(search,

    function(err){
      req.flash('info', 'Whoops, Something went wrong');
      res.redirect('/');
    },
    function(success){
      req.flash('info', movie);
      res.redirect('/');
    }
  );

});


app.get('/*', function (req, res) {
  res.render('404');
});


http.listen(process.env.PORT || 4000, function(){
  console.log("Success! View this page on localhost:4000");
});

module.exports = app;
