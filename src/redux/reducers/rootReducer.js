import { combineReducers } from 'redux';
import movies from './ListtOfMoviesReducer';

const rootReducer = combineReducers({
    movies
});

export default rootReducer;