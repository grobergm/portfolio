import React from 'react';
import matt from '../../img/matt.jpg'
function About(){
	const grid={
		display:'grid',
		gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',
		gridAutoFlow:'row dense',
		gridGap:'1rem'
	}
	return (
		<div>
			<h1 style={{padding:'1rem 0 0 1rem'}}>Hi there!</h1>
			<div style={{padding:'0 0 2rem 2rem'}}>
				<p>Welcome to my personal website!</p>
				<p>I started my career in Ecology, earning a <strong>Master of Science degree</strong> when I was 25.</p>
				<p>After working in various roles I realized that I had a passion for developing software.</p>
				<p>I started teaching myself, then went to Epicodus (a six month, full time web development training).</p>
				<p>I live in Eugene, OR, and am looking for a front-end developer position.</p>
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
						<li>Writing about Coding</li>
						<li>Integration with APIs</li>
						<li>Responsive Web Design</li>
					</ul>
				</div>
				<div>
					<h2>Career Goals</h2>
					<p>Discover, apply, and write about exciting new tech</p>
					<p>Create amazing user interfaces</p>
					<p>Work with a team focused on quality over quantity</p>
				</div>
			</div>
		</div>
	)
}

export default About;