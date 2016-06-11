var React = require('react');
var helpers = require('../utils/helpers');
var ResultsData = require('./ResultsData');

var Saved = React.createClass({

	getInitialState: function(){
			
			return {
				articles:[],
			}
	 },

	// on page load database is queried for all articles, then is displayed.
	componentDidMount: function(){
		
		helpers.getArticles().then(function(data){
			this.setState({
						articles: data.articles,
					})
		}.bind(this))

	},

	// used in transfer of all articles minus deleted article from child(ResultsData) to parent
	handleTransfer: function(articles) {
	    
	    this.setState({
	      articles: articles,
	      
	    });
	  },

	 render: function(){
	   return (
	     		<div className="col-lg-12">
	   				<div className="panel panel-primary">
						<div className="panel-heading">
							<h1 className="panel-title"><strong><i className="fa fa-list-alt"></i>  Results</strong></h1>
						</div>
						<div className="panel-body">
							{/*maps each article into child element*/}
							
							<ul className="list-group">
							 {this.state.articles.map(function(result) {
	           				return <ResultsData  key={result._id} data={result} callback={this.handleTransfer} />;
	        					}.bind(this))}
							</ul>					
						
						</div>
					</div>

				</div>
	   )
	 }
});

module.exports = Saved;