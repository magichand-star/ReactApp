import { combineReducers } from 'redux';

import user from './userReducer';
import movies from './moviesReducer';

export default combineReducers({
	user,
	movies
})