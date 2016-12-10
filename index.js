var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var config = require('./config.js');
var mainCtrl = require('./server/mainCtrl.js')
var corsOptions = {
  origin: 'http://localhost:'+config.port
};
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors(corsOptions));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: config.sessionSecret,
  currentUser: null,
  resave: false,
  saveUninitialized: true
}));
app.get('/api/profiles',mainCtrl.getProfiles);
app.post('/api/login',mainCtrl.postLogin);


app.listen(config.port, function(){
  console.log("listening to port ",config.port);
});
