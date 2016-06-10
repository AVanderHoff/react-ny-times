var React = require('react');
var axios = require('axios');
var helpers = require('../utils/helpers');
var currentURL = window.location.origin;
var Router = require('react-router');

var Results = React.createClass({
//	mixins: [Router.History],
	getInitialState: function(){
		return {
			article:{	
				url:this.props.data.web_url,
				title:this.props.data.headline.main,
				//date:this.props.data.pub_data
			}
		}
 	},
 	saveArticle:function(){

 		console.log(currentURL)
 		console.log(this.state.article)

 		//put into helpers, use return statements, maybe get rid of current url


 		helpers.saveArticle(this.state.article);

  	
 

 	},


	render:function(){


	return(



			 <li className="list-group-item">
						
							<h3>
							  	<span><em>{this.props.data.headline.main}</em></span>
								<span className="btn-group pull-right" >
									<a href={this.props.data.web_url} target="_blank" className="btn btn-primary"  type="submit" role="button">View Article</a>
									<button className="btn btn-primary" onClick={this.saveArticle}>Save</button>
								</span> 
							</h3>
							<p>{this.props.data.pub_date}</p>
							
						  </li>



		)







}
});

module.exports = Results;