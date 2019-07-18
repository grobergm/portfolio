import React from 'react';

function Connect(){
	return (
	<div id="connect" className="jumbotron jumbotron-fluid">
	  <div className="container">
	    <h2>Find me on the Web!</h2>
	    <ul className="nav nav-tabs" id="myTab" role="tablist">
			  <li className="nav-item">
			    <a className="nav-link active" id="github-tab" data-toggle="tab" href="#github" role="tab" aria-controls="github" aria-selected="true">Github</a>
			  </li>
			  <li className="nav-item">
			    <a className="nav-link" id="medium-tab" data-toggle="tab" href="#medium" role="tab" aria-controls="medium" aria-selected="false">Medium</a>
			  </li>
			  <li className="nav-item">
			    <a className="nav-link" id="linkedIn-tab" data-toggle="tab" href="#linkedIn" role="tab" aria-controls="linkedIn" aria-selected="false">LinkedIn</a>
			  </li>
			  <li className="nav-item">
			    <a className="nav-link" id="email-tab" data-toggle="tab" href="#email" role="tab" aria-controls="email" aria-selected="false">Email</a>
			  </li>
			</ul>

			<div className="tab-content" id="myTabContent">
			  <div className="tab-pane fade show active" id="github" role="tabpanel" aria-labelledby="github-tab">
			  	<p>If you want to see more examples of code I have written, follow me on Github!</p>
			  	<a className="btn btn-primary" href="https://github.com/grobergm">Go to Profile</a>
			  </div>
			  <div className="tab-pane fade" id="medium" role="tabpanel" aria-labelledby="medium-tab">
			  	<p>I write a web developmet blog on Medium!</p>
			  	<p>Follow me for some sweet tips.</p>
			  	<a className="btn btn-primary" href="https://medium.com/@grobergmg">Go to Profile</a>
			  </div>
			  <div className="tab-pane fade" id="linkedIn" role="tabpanel" aria-labelledby="linkedIn-tab">
			  	<p>If you are interested my professional background, connect with me on LinkedIn</p>
			  	<a className="btn btn-primary" href="https://www.linkedin.com/in/grobergm/">Go to Profile</a>
			  </div>
			  <div className="tab-pane fade" id="email" role="tabpanel" aria-labelledby="email-tab">
			  	<p>You can write me an email at: grobergmg@gmail.com</p>
			  	<a className="btn btn-primary" href="mailto:grobergmg@gmail.com">Start Email</a>
			  </div>
			</div>

	  </div>
	</div>
	)
}

export default Connect