import { GET_MOVIES, GET_MOVIES_FULFILLED, GET_MOVIES_REJECTED } from '../constants/ActionTypes';
const INITIAL_STATE = {
    moviesList: { movies: [], error: null, loading: false },
    newMovies: { post: null, error: null, loading: false },
    searchMovies: { post: null, error: null, loading: false },
};

export default function(state = INITIAL_STATE, action) {
   let error;
    switch (action.type) {

        case GET_MOVIES: // get movie list and loading true
            return {...state, moviesList: { movies: [], error: null, loading: true } };

        case GET_MOVIES_FULFILLED: // successfully get movie list and make loading false
            return {...state, moviesList: { movies: action.payload, error: null, loading: false } };

        case GET_MOVIES_REJECTED: // throw error message
            error = action.payload || { message: action.payload.message };
            return { ...state, moviesList: {movies: [], error: error, loading: false} };

        default:
            return state;

    }

}
