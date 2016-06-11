var React = require('react');
var helpers = require('../utils/helpers');


var ResultsData = React.createClass({

	getInitialState:function(){
		return{
			_id:this.props.data._id,
			articles:[]
		}
	},

	// delete article, mongoose id is used as _id
	deleteArticle:function(){
		console.log('deleted ' + this.state._id)

		var obj = {
			_id:this.state._id
		}

		helpers.deleteArticle(obj).then(function(data){

	 				this.setState({
						articles: data.articles,
					})
	 			
	 				this.handleChange();
	 		
	 		}.bind(this))

	},

	// sends articles minus deleted article to parent(Saved) element
	handleChange:function() {
	    
	    this.props.callback(
	      this.state.articles
	    );
	 
	 },

	render:function(){

		return(

				<li className="list-group-item">
							
					<h3>
						<span><em>{this.props.data.title}</em></span>
							<span className="btn-group pull-right" >
								<a href={this.props.data.url} target="_blank" className="btn btn-primary"  type="submit" role="button">View Article</a>
									<button className="btn btn-primary" onClick={this.deleteArticle}>Delete</button>
							</span> 
					</h3>
						<p>{this.props.data.date}</p>
								
				</li>

	)
	}

});

module.exports= ResultsData;

