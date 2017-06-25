const INITIAL_STATE = {
    moviesList: { movies: [], error: null, loading: false },
    newMovies: { post: null, error: null, loading: false },
    searchMovies: { post: null, error: null, loading: false },
};

export default function(state = INITIAL_STATE, action){
    
    console.log("reducer");
    console.log(action);
    return state;
}	