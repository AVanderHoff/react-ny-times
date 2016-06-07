var React = require('react');

var Results = React.createClass({
	render:function(){


	return(



			 <li className="list-group-item">
						
							<h3>
							  	<span><em>{this.props.data.headline.main}</em></span>
								<span className="btn-group pull-right" >
									<a href={this.props.data.web_url} target="_blank" className="btn btn-primary"  type="submit" role="button">View Article</a>
									<button className="btn btn-primary">Save</button>
								</span> 
							</h3>
							<p>{this.props.data.pub_date}</p>
							
						  </li>



		)







}
});

module.exports = Results;