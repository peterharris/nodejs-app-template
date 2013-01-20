module.exports = function(app, express, mongoose){

  var config = this;
  
  var path = require('path');

  /**
   * Module dependencies.
   */

  app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('your secret here'));
    app.use(express.session());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
  });

   //env specific config
  app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    //change 'example' to whatever you want to name your database
    app.mongoose.connect('mongodb://localhost/example');
  });

  app.configure('production', function(){
    app.use(express.errorHandler());
    //change 'example' to whatever you want to name your database
    app.mongoose.connect('mongodb://localhost/example');
  });

  return config;

};