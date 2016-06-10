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


 getTopic:function(topic){
 	 this.topic = topic;
 },
 getStart:function(start){
 	this.start = start;
 },
 getEnd:function(end){
 	this.end = end;
 },
 handleSubmit:function(){

 	console.log(this.topic.value)
 	console.log(this.start.value)
 	console.log(this.end.value)
 	var topic = this.topic.value;
 	
 	var start = this.start.value;
 	var end = this.end.value;


 	var query = topic + "&begin_date=" + start +"0101" + "&end_date=" + end + "1231";
 
 		helpers.findArticles(query).then(function(data){

 				this.setState({
					articles: data.articles,
				})
 			
 					console.log(data.articles)
 					console.log(this.state.articles)
 		}.bind(this))

 	// $('#search_topic').value('');
 	// $('#search_start').value('');
 	// $('#search_end').value('');
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


						<form onSubmit={this.handleSubmit}>
							<div className="form-group">
								<h4 className=""><strong>Topic</strong></h4>
								<input type="text" className="form-control " id="search_topic" ref={this.getTopic} />

								<h4 className=""><strong>Start Year</strong></h4>
								<input type="text" className="form-control " id="search_start" ref={this.getStart} />

								<h4 className=""><strong>End Year</strong></h4>
								<input type="text" className="form-control " id="search_end" ref={this.getEnd} />

							</div>

							
							<div className="pull-right">
								<button type="submit" className="btn btn-danger"><h4>Submit</h4></button>
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