var React = require('react');
var helpers = require('../utils/helpers');

var ResultsData = React.createClass({
getInitialState:function(){
	return{
		_id:this.props.data._id,
		articles:[]
	}


},
deleteArticle:function(){
	console.log('deleted ' + this.state._id)

	var obj = {
		_id:this.state._id
	}

	helpers.deleteArticle(obj).then(function(data){

 				this.setState({
					articles: data.articles,
				})
 			
 					
 					console.log(this.state.articles)
 					this.handleChange();
 		}.bind(this))

	


},

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
							<p>date</p>
							
						  </li>


)
}






});

module.exports= ResultsData;

 // <li className="list-group-item">
						
	// 						<h3>
	// 						  	<span><em>Aliens Invade Paris</em></span>
	// 							<span className="btn-group pull-right" >
	// 								<button className="btn btn-default ">View Article</button>
	// 								<button className="btn btn-primary">Save</button>
	// 							</span> 
	// 						</h3>
	// 						<p>Date Published: 03/15/16</p>
							
	// 					  </li>