import axios from 'axios';

// To get all the movies
export function getMovies(){
 /* const request = axios({
    method: 'get',
    url: '',
    headers: []
  });*/

   return {
    type: GET_MOVIES,
    payload: {
    	name : "shawshank redemption",
    	year : 2010
    }
  };
}