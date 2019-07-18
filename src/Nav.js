import React from 'react';

function Nav(props){
const logo={
  color:'white',
	transform: props.top ? 'scale(1)':'scale(0.75)',
	transition: 'transform 1s',
}

return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
	<div>
		<a className="navbar-brand" href="#"><h1 id="logo" style={logo}>Matt Groberg</h1></a>
  </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="#about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#projects">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#connect">Connect</a>
      </li>
    </ul>
    
  </div>
</nav>
)
}

export default Nav