import React from 'react';
import matt from '../../img/matt.jpg'
function About(){
	const grid={
		display:'grid',
		gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))'
	}
	return (
		<div>
			<div style={grid}>
				<div>
					<img style={{width:'100%'}} src={matt}/>
				</div>
				<div>
					<h2>My Story</h2>
				</div>
				<div>
					<h2>Focus Areas</h2>
				</div>
				<div>
					<h2>Career Goals</h2>
				</div>
			</div>
		</div>
	)
}

export default About;