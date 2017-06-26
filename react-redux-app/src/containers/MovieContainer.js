import { connect } from 'react-redux'
import { getMovies, getMoviesSuccess, getMoviesFailure } from '../actions/movieAction';
import MovieApp from '../components/MovieApp';


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
  return {
    getMovies: () => {
      dispatch(getMovies()).then((response) => {
            console.log(response);
            !response.error ? dispatch(getMoviesSuccess(response.value.data)) : dispatch(getMoviesFailure(response.value.data));
          });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieApp);