var axios = require('axios');
var react = require('react');


var helpers ={
	// finds articles using NY Times API
	findArticles:function(query){
		
		var baseQuery = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=f925611cdfbe465fa76f5d7082c467e1&q="
		var finalQuery = baseQuery + query ;
		
		return axios.get(finalQuery).then(function(arr){
			return {
				articles:arr.data.response.docs
			}
		
		});

	},

	// saves article to database
	saveArticle:function(obj){
		return axios.post('/save/article', obj)
	},

	// finds all articles from database
	getArticles:function(){
		
		return	axios.get('/get/articles')
	  		.then(function (response) {
	  		
	  		return {
	  		articles:response.data.articles}
	  		})

	},

	// deletes article, obj is object with mongoose id
	deleteArticle:function(obj){
		
		return axios.post('/delete/article', obj).then(function(response){
			
			return {
	  		articles:response.data.articles
	  		}
		
		});
	},

}

module.exports = helpers;