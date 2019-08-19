import React from 'react';
import matt from './img/matt.jpg'
function About(){
	const grid={
		display:'grid',
		gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',
		gridAutoFlow:'row dense',
		gridGap:'1rem'
	}
	return (
		<div id="about">
			<h1 style={{padding:'1rem 0 0 1rem'}}>Hi there!</h1>
			<div style={{padding:'0 0 2rem 2rem'}}>
				<p>Welcome to my personal website!</p>
				<p>I am a front-end focused developer, specializing in JavaScript</p>
				<p>I started my career in Ecology, earning a <strong>Master of Science degree</strong> when I was 25.</p>
				<p>After working in various positions, I realized that I had a passion for programming.</p>
				<p>I started teaching myself how to make websites, then went to Epicodus (a six month, full time web development training).</p>
				<p>I live in Eugene, OR, and am looking for a web development position (in Oregon or remote; contract or salary).</p>
			</div>
			<div style={grid}>
				<div style={{gridRow:'span 2'}}>
					<img style={{width:'100%'}} src={matt}/>
				</div>
				<div>
					<h2>Main Skills</h2>
					<ul>
						<li>JavaScript (ES6), HTML5, CSS3</li>
						<li>React and Angular</li>
						<li>Unit Testing: Jest, Karma/Jasmine</li>
						<li>Writing about Coding</li>
						<li>Integration with APIs</li>
						<li>Responsive Web Design</li>
					</ul>
				</div>
				<div>
					<h2>Dream Job</h2>
					<p>I love to teach myself new skills. A position that involves researching and applying new tech would be awesome!</p>
					<p>I enjoy creating intuitive user interfaces, which are interactive and dynamic.</p>
					<p>Writing unit tests is oddly satisfying for me.🤷‍♂️</p>
					<p>I would excel in a position where I could integrate skills from my former career (especially biology, statistics, or technical writing).</p>
				</div>
			</div>
		</div>
	)
}

export default About;