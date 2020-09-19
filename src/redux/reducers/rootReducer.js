import { combineReducers } from 'redux';
import movies from './ListtOfMoviesReducer';
import movie from './singleMovieReducer';
import wishlist from './wishListReducer';

const rootReducer = combineReducers({
    movies,
    movie,
    wishlist
});

export default rootReducer;