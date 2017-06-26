import axios from 'axios';
import { GET_MOVIES, GET_MOVIES_FULFILLED, GET_MOVIES_REJECTED } from '../constants/ActionTypes';

// To get all the movies
export function getMovies(){
 console.log("inside get movies action");
 const request = axios({
    method: 'get',
    url: 'https://api.themoviedb.org/3/movie/550?api_key=59240ac36bf8f025628e925b3d690f9f',
    headers: []
  });
   return {
    type: GET_MOVIES,
    payload: request
  };
}

export function getMoviesSuccess(movies) {
  console.log("success");
  console.log(movies);
  return {
    type: GET_MOVIES_FULFILLED,
    payload: movies
  };
}

export function getMoviesFailure(error) {
  console.log("Error")
  console.log(error)
  return {
    type: GET_MOVIES_REJECTED,
    payload: error
  };
}

