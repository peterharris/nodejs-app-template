var express = require('express');
var app = module.exports = express();
app.mongoose = require('mongoose');

var http = require('http');

var config = require('./config.js')(app, express);

var models = {};
//change 'example' to whatever you named your database in config.js
models.example = require('./models/template')(app.mongoose);

require('./routes')(app, models, app.mongoose);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});