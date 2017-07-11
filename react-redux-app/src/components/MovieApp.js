import React, { Component } from 'react';
import render from 'react-dom';
import { connect } from 'react-redux';
import { getMovies, getMoviesSuccess, getMoviesFailure } from '../actions/movieAction';

import MovieCard from './MovieCard';
import './Movie.css';


class MovieApp extends Component {


    componentWillMount() {
        this.props.getMovies();
    }

    render() {
    console.log("render");
    console.log(this.props);
    //const { movies, loading, error } = this.props.movieList;
    return (
           
     <div className="container">
        <h1>Posts</h1>
        <section className="movies">
          
         { this.props.movieList.map(singleMovie => (

             <MovieCard movie={singleMovie} />
         )) 
       }
        </section>
      </div>
            

        )
    }
}


const mapStateToProps = (state) => {
  
  if(state.movies.moviesList.movies.length > 0){
  return { 
    movieList: state.movies.moviesList.movies
  }}else{
     return { 
    movieList: []
  }
  };
}

const mapDispatchToProps = (dispatch) => {
   console.log("inside dispatch");
   console.log(dispatch);
  return {
    getMovies: () => {
      dispatch(getMovies()).then((response) => {
           console.log(response);
            !response.error ? dispatch(getMoviesSuccess(response.value)) : dispatch(getMoviesFailure(response.payload));
          });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieApp);

