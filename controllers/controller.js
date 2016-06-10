

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
// var Comment = require('../models/comments.js');

module.exports = function(app){

  //display main page
  app.get('/',function(req,res){
    res.send(index.html);
  })


  app.post('/save/article',function(req,res){

    console.log(req.body);
    var article = new Article(req.body);

    article.save();

  });

  app.get('/get/articles',function(req,res){

    
    Article.find({}).exec(function(err,doc){

      var obj = {
          articles:doc
      }



      //console.log(doc);
      res.json(obj);

    })

  });

  app.post('/delete/article',function(req,res){

    console.log(req.body)
    // Article.findOneAndRemove({_id:req.body._id}).then(function(){
    //   console.log(req.body._id + " removed")
    
    // })

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


  





  // //get article by id, return entire article entry, including
  // // populated comments
  // app.get('/articles',function(req,res){
  //   var url_parts = url.parse(req.url,true);

  //      Article.findOne({_id:url_parts.query.number})
  //       .populate('comments')
  //       .exec(function(err, doc) {
         
  //         var responsedata = {
  //            article:doc
  //         }
          
  //         res.json(responsedata);

  //       });

  // });

  // //scrapes articles off of www.profootballtalk.com, first gets links then opens 
  // // those links using request. Scrapes the links for content.
  
  // //post new comment
  // app.post('/postcomments',function(req,res){
  // var url_parts = url.parse(req.url,true);

  //   var comment = new Comment(req.body);

  //   comment.save(function(err, doc) {
  //     if (err) {
  //       res.send(err);
  //     } 
  //     else {
  //       Article.findOneAndUpdate({_id:url_parts.query.number}, {$push: {'comments': doc._id}}, {new: true})
  //         .populate('comments')
  //         .exec(function(err, doc3){
  //             res.json(doc3.comments);
  //         }); 
  //     }
  //   });
  // });

  // //delete last comment in in array
  // app.get('/deletecomment',function(req,res){
  //   var url_parts = url.parse(req.url,true);
  //   Article.findOneAndUpdate({_id:url_parts.query.number}, {$pop: {'comments': 1}})
  //     .populate('comments')
  //     .exec(function(err, doc4){

  //       res.json(doc4.comments);
  //       var commentid = doc4.comments[doc4.comments.length - 1]._id;

  //       Comment.findByIdAndRemove(commentid,function(){
  //           console.log(commentid + ' deleted');
  //         })
  //     });
  // });





}