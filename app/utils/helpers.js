var axios = require('axios');


//Here's your API Key for the Article Search API: f925611cdfbe465fa76f5d7082c467e1

var helpers ={

findArticles:function(query){
	
	var baseQuery = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=f925611cdfbe465fa76f5d7082c467e1&q="
	var finalQuery = baseQuery + query ;

	return axios.get(finalQuery).then(function(arr){
		return {
			articles:arr.data.response.docs
		}


	});


}

}

module.exports = helpers;