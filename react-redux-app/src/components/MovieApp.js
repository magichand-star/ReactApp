import React, { Component } from 'react';
import render from 'react-dom';
import { connect } from 'react-redux';
import { getMovies, getMoviesSuccess, getMoviesFailure } from '../actions/movieAction';


class MovieApp extends Component {


    componentWillMount() {
        console.log("component");
        console.log(this.props);
        this.props.getMovies();
    }

    render() {
         console.log("render");
         console.log(this.props);
         const { movies, loading, error } = this.props.movieList;
        return (
           
     <div className="container">
        <h1>Posts</h1>
        <ul className="list-group">
          {movies}
        </ul>
      </div>
            

        )
    }
}


const mapStateToProps = (state) => {
  alert("container");
  console.log("container");
  console.log(state); 
  return { 
    movieList: state.movies.moviesList
  };
}

const mapDispatchToProps = (dispatch) => {
   console.log("inside dispatch");
   console.log(dispatch);
  return {
    getMovies: () => {
      dispatch(getMovies()).then((response) => {
           console.log(response);
            !response.error ? dispatch(getMoviesSuccess(response.payload)) : dispatch(getMoviesFailure(response.payload));
          });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieApp);

