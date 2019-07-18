import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Banner from './Banner';
import About from './About';
import Projects from './Projects';
import Connect from './Connect';


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
		return (
    <div>
    	<Nav top={this.state.top} />
    	<Banner />
      <About />
      <Projects />
      <Connect />
    </div>
  	)
	}
  
}

export default App;
