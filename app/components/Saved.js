var React = require('react');
var helpers = require('../utils/helpers');
var ResultsData = require('./ResultsData');

var Saved = React.createClass({
  getInitialState: function(){
		return {
			articles:[],
		}
 },
 	

componentDidMount: function(){
		console.log("MOUNTED");

		helpers.getArticles().then(function(data){

 				this.setState({
					articles: data.articles,
				})

 				console.log(this.state.articles)
	
	}.bind(this))

},









 render: function(){
   return (
     
   				<div className="col-lg-12">

				<div className="panel panel-primary">
					<div className="panel-heading">
						<h1 className="panel-title"><strong><i className="fa fa-list-alt"></i>  Results</strong></h1>
					</div>
					<div className="panel-body">
						<ul className="list-group">
						 {this.state.articles.map(function(result) {
           				return <ResultsData key={result._id} data={result}/>;
        					})}

						  					  
						</ul>					
					</div>
				</div>

			</div>
   






   )
 }
});

module.exports = Saved;