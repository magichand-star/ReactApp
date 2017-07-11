import React, { Component } from 'react';
import render from 'react-dom';

import './Movie.css';

class MovieCard extends Component{
  
  render(){

    const movie = this.props.movie;

  	return (
         
     <div className="movie">
      <img src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path } className="poster" />
      <div className="title">{movie.title}</div>
      <div className="info">
        <span className="length">117 min</span>
        <span className="year">{movie.release_date}</span>
      </div>
      <div className="desc">
        {movie.overview}
      </div>
    </div>
    

  )
  }
}

export default MovieCard;