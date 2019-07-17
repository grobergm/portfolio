import React, { Component } from 'react';
import './App.css';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import river from './img/river.jpg'
class App extends Component{
	constructor(props){
		super(props)
		this.state={
			top:true
		}
		this.checkIfTop=this.checkIfTop.bind(this);
	}

	componentDidMount(){
		window.addEventListener('scroll', this.checkIfTop);
	}

	checkIfTop(){
		if(window.scrollY === 0){
			this.setState({top:true})
		} else {
			this.setState({top:false})
		}
	}

	render(){
		const heroBanner={
			background:`url(${river})`,
			backgroundSize:'cover',
			height:'500px'
		}
		return (
    <div>
    	<Nav top={this.state.top} />
    	<div style={heroBanner}></div>
      <About />
    </div>
  	);
	}
  
}

export default App;
