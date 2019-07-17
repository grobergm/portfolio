import React from 'react';

function Nav(props){
const navStyle={
	display:'flex',
	justifyContent:'space-around',
	padding:'1rem',
	backgroundColor: props.top ? 'rgba(0,0,0,0.3)':'rgba(0,0,0,0.9)',
	transition: 'background-color 1s',
	color:'white',
	position: 'fixed',
	width:'100%',
	zIndex:'2'
}
const logo={
	transform: props.top ? 'scale(1)':'scale(0.5)',
	transition: 'transform 1s',
}
return(
<div style={navStyle}>
  <h1 style={logo}>Matt Groberg</h1>
  <a><p>About</p></a>
  <a><p>Projects</p></a>
  <a><p>Blog</p></a>
  <a><p>Contact</p></a>
</div>
)
}

export default Nav