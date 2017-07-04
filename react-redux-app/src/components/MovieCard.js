import React, { Component } from 'react';
import render from 'react-dom';

class MovieCard extends Component{
  
  render(){
  	return (
         
     <div className="movie">
      <img src="" alt="" className="poster" />
      <div className="title"></div>
      <div className="info">
        <span className="length">117 min</span>
        <span className="year">2015</span>
      </div>
      <div className="desc">
        Jack is a young boy of 5 years old who has lived all his life in one room. He believes everything within it are the only real things in the world. But what will happen when his Ma suddenly tells him that there are other things outside of Room?
      </div>
    </div>
    

  )
  }
}

export default MovieCard;