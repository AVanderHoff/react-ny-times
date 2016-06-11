

var bodyParser = require('body-parser');
var mongoose = require('mongoose');


//mongoose.connect('mongodb://localhost/profootballtalk');
mongoose.connect("mongodb://andrew:password@ds025603.mlab.com:25603/newyorktimes", function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
});

var db = mongoose.connection;


db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});
db.once('open', function() {
  console.log('Mongoose connection successful.');
});

var Article = require('../models/articles.js');


module.exports = function(app){

  //display main page
  app.get('/',function(req,res){
    res.send(index.html);
  })

  // save new article
  app.post('/save/article',function(req,res){

    var article = new Article(req.body);

    article.save();

  });

  // find all articles
  app.get('/get/articles',function(req,res){
 
    Article.find({}).exec(function(err,doc){

      var obj = {
          articles:doc
      }

      res.json(obj);

    })

  });

  // deletes article then returns all remaining articles
  app.post('/delete/article',function(req,res){


    Article.findOneAndRemove({_id:req.body._id},function(err,arr){
        
        if (err) return handleError(err);
        
        Article.find({}).exec(function(err,doc){

              var obj = {
                articles:doc
              }

              res.json(obj);
      })

    
    })

  })

}