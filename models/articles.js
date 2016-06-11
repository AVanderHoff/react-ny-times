var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({

	url:{
		type:String,
	},
	title:{
		type:String,
		unique:true
	},
	date:{
		type:String
	}
});

var Article = mongoose.model('articles', ArticleSchema);
module.exports = Article;