module.exports = function(app, models, mongoose){

  /**
   *  Index
   */
  app.get('/', function(req, res){

    //render the index page
    res.render('index.jade', {
          page: 'index',
          title: "Template"
    });

  });

};