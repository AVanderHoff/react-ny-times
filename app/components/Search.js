var React = require('react');
var helpers = require('../utils/helpers')
var Results = require('./Results');

var Search = React.createClass({
	 
	getInitialState: function(){
			
			return {
				articles:[],
				topic:"",
				start:"",
				end:"",
			}
	 },

	 // creates query and sends to api
	 handleSubmit:function(){

	 	
	 	var topic = this.state.topic;
	 	var start = this.state.start;
	 	var end = this.state.end;

	 	var query = topic + "&begin_date=" + start +"0101" + "&end_date=" + end + "1231";
	 
	 		helpers.findArticles(query).then(function(data){

	 				this.setState({
						articles: data.articles

					})

	 				this.clearTextBoxes()

	 		}.bind(this))	 
	 },

	 // gets topic on change
	  changeTopic: function(event) {
	    this.setState({topic: event.target.value});
	  },

	  //gets start on change
	  changeStart:function(event){
	  	this.setState({start:event.target.value});
	  },

	  //gets end on change
	  changeEnd:function(event){
	  	this.setState({end:event.target.value})
	  },

	  // clears text boxes
	  clearTextBoxes:function(){
	  	this.setState({
	  		topic:'',
	  		start:'',
	  		end:''
	  	})
	  },

	 render: function(){
	   return (
	     		<div className="row">
	    				<div className="col-lg-12">

					<div className="panel panel-primary">
						<div className="panel-heading">
							<h1 className="panel-title"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i>  Query</strong></h1>
						</div>
						<div className="panel-body">


							<form >
								<div className="form-group">
									<h4 className=""><strong>Topic</strong></h4>
									<input type="text" className="form-control " value={this.state.topic} onChange={this.changeTopic} ref="topic_input" />

									<h4 className=""><strong>Start Year</strong></h4>
									<input type="text" className="form-control " value={this.state.start}  onChange={this.changeStart}  ref="start_input" />

									<h4 className=""><strong>End Year</strong></h4>
									<input type="text" className="form-control " value={this.state.end} onChange={this.changeEnd} ref="end_input" />

								</div>

								
								<div className="pull-right">
									<button type="submit" className="btn btn-danger" onClick={this.handleSubmit}><h4>Submit</h4></button>
								</div>
							</form>

						</div>
					</div>


				</div> 

				<div className="col-lg-12">
		  			<div className="panel panel-primary">
							<div className="panel-heading">
								<h1 className="panel-title"><strong><i className="fa fa-list-alt"></i>  Results</strong></h1>
							</div>
						<div className="panel-body">

							{/*maps articles to child element*/}
					  		<ul className="list-group">
					        {this.state.articles.map(function(result) {
					           return <Results key={result._id} data={result}/>;
					        })}
					      </ul>
		 	  
						</div>
		 	  		</div>
				</div>
	     
	     	</div>
	    
	   )
	 }
});

module.exports = Search;