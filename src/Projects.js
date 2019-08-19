import React from 'react';
import projectData from './projectData'
function Projects(){
	const cardStyle={
		width: '18rem',
		margin:'0.25rem',
	}
	return (
		<div className="container" id="projects" style={{marginTop:'4rem'}}>
			<h1>Projects</h1>
			<div className="row">
				{
					projectData.map((project,index)=>{
						return(
							<div key={index} className="card" style={cardStyle}>
							  <img src={project.image} className="card-img-top" alt={project.title}/>
							  <div className="card-body">
							    <h5 className="card-title">{project.title}</h5>
							    <p className="card-text">{project.description}</p>
							    <a href={project.url} className="btn btn-primary">Go to Site</a>
							    <a href={project.repo} className="btn btn-secondary">View Code</a>
							  </div>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default Projects