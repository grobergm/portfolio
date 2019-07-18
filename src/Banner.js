import React from 'react';
import laptop from './img/laptop.jpg'
import forest from './img/forest.jpg'
import books from './img/books.jpg'
function Banner(){
	return (
		<div id="banner" className="carousel slide" data-ride="carousel">
		  <div className="carousel-inner">
		    <div className="carousel-item active">
		        <img src={laptop} className="d-block w-100" alt='laptop'/>
		    </div>
		    <div className="carousel-item">
		      <img src={forest} className="d-block w-100" alt='forest'/>
		    </div>
		    <div className="carousel-item">
		      <img src={books} className="d-block w-100" alt='books'/>
		    </div>
		  </div>
		</div>
	)
}

export default Banner