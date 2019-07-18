import React from 'react';
import ecosim from './img/projects/ecosim.PNG'
import reactTap from './img/projects/react-tap.PNG'
import netflix from './img/projects/netflix-clone.PNG'
import etsy from './img/projects/etsy-clone.PNG'
import unsplash from './img/projects/unsplash-clone.PNG'
import hnefatafl from './img/projects/hnefatafl.PNG'
import webDesign from './img/projects/web-design.PNG'
import space from './img/projects/space.PNG'
import haunted from './img/projects/haunted.PNG'
const projectData=[
	{
	title:'Eco-Sim',
	description:'An Ecology Based Game that uses React and Redux',
	url:'https://ecosim-f5668.firebaseapp.com/',
	repo:'https://github.com/grobergm/eco-sim',
	image:ecosim
	},
	{
	title:'React Taproom',
	description:'A digital Taproom using React and Redux, that can track multiple tabs and keg data.',
	url:'https://react-tap.firebaseapp.com/',
	repo:'https://github.com/grobergm/ReactTaproom',
	image:reactTap
	},
	{
	title:'Netflix Clone',
	description:'A front-end clone of Netflix (landing and browse), using React',
	url:'https://netflixclone-56d6e.firebaseapp.com/',
	repo:'https://github.com/grobergm/netflix-clone',
	image:netflix
	},
	{
	title:'Etsy Clone',
	description:'A front-end clone of Etsy using Angular and Firebase. Interact with that sweet navbar!',
	url:'https://etsy-clone-ae507.firebaseapp.com/',
	repo:'https://github.com/grobergm/etsy-clone',
	image:etsy
	},
	{
	title:'Hnefatafl',
	description:'A ancient Norse table top game, digitized for the modern world! Uses ',
	url:'https://grobergm.github.io/hnefatafl/',
	repo:'https://github.com/grobergm/hnefatafl',
	image:hnefatafl
	},
	{
	title:'Unsplash Clone',
	description:'A clone of Unsplash, focusing on its responsive behavior, using Sass',
	url:'https://grobergm.github.io/unsplash-clone/',
	repo:'https://github.com/grobergm/unsplash-clone',
	image:unsplash
	},
	{
	title:'Imagine Studios',
	description:'A project that shows a complete web design process given a prompt for client specifications. Uses Webpack, Sass, and Sketch.',
	url:'https://web-design-process.firebaseapp.com/',
	repo:'https://github.com/grobergm/web-design-process',
	image:webDesign
	},
	{
	title:'Space Adventure',
	description:'A text based space adventure game! Uses jQuery and JS constructor function to track stats.',
	url:'https://grobergm.github.io/spaceGame/',
	repo:'https://github.com/grobergm/spaceGame',
	image:space
	},
	{
	title:'Haunted House',
	description:'An escape room game, focusing on CSS animations, and digital artwork in Sketch. Flashlight works best with mouse...',
	url:'https://grobergm.github.io/haunted-house/',
	repo:'https://github.com/grobergm/haunted-house',
	image:haunted
	},
]
function Projects(){
	return (
		<div className="container" id="projects" style={{marginTop:'4rem'}}>
			<h1>Projects</h1>
			<div className="row">
				{
					projectData.map((project,index)=>{
						return(
							<div key={index} className="card" style={{width: '18rem', margin:'0.25rem'}}>
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