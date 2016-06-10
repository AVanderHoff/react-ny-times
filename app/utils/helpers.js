var axios = require('axios');
var react = require('react');


//Here's your API Key for the Article Search API: f925611cdfbe465fa76f5d7082c467e1

// var mongoose = require('mongoose');


// //mongoose.connect('mongodb://localhost/profootballtalk');
// mongoose.connect("mongodb://andrew:password@ds043324.mlab.com:43324/profootballtalk", function (error) {
//     if (error) console.error(error);
//     else console.log('mongo connected');
// });

// var db = mongoose.connection;


// db.on('error', function(err) {
//   console.log('Mongoose Error: ', err);
// });
// db.once('open', function() {
//   console.log('Mongoose connection successful.');
// });


//  var Article = require('../../models/articles.js');








var currentURL = window.location.origin;



var helpers ={

findArticles:function(query){
	
	var baseQuery = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=f925611cdfbe465fa76f5d7082c467e1&q="
	var finalQuery = baseQuery + query ;

	return axios.get(finalQuery).then(function(arr){
		return {
			articles:arr.data.response.docs
		}


	});


},

saveArticle:function(obj){

return axios.post('/save/article', obj)

},

getArticles:function(){

return	axios.get('/get/articles')
  .then(function (response) {
    console.log(response.data.articles);
  	return {
  		articles:response.data.articles}
  })


},

deleteArticle:function(obj){

return axios.post('/delete/article', obj)


},



}

module.exports = helpers;