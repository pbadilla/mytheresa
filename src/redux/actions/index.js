export const FETCH_MOVIES_BEGIN = 'FETCH_MOVIES_BEGIN';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export const FETCH_MOVIE_BEGIN = 'FETCH_MOVIE_BEGIN';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE';
export const SET_MOVIE_WISHLIST = 'SET_MOVIE_WISHLIST';
export const PUT_MOVIE_WISHLIST = 'PUT_MOVIE_WISHLIST';

export function getMovies(genres) {
    return dispatch => {
        return fetch(`https://api.themoviedb.org/3/movie/${genres}?api_key=7006edd4690fd5f45e7b5cb6b1561357&language=en-US`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                dispatch(fetchMoviesSuccess(data.results));
            })
            .catch(function (err) {
                dispatch(fetchMoviesFailure(err))
                console.error(err);
            });
    }
}
export function getMovie(id) {
    return dispatch => {
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7006edd4690fd5f45e7b5cb6b1561357&language=en-US`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                dispatch(fetchMovieSuccess(data));
            })
            .catch(function (err) {
                dispatch(fetchMovieFailure(err))
                console.error(err);
            });
    }
}

export const fetchMoviesBegin = () => ({
    type: FETCH_MOVIES_BEGIN
});

export const fetchMoviesSuccess = movies => ({
    type: FETCH_MOVIES_SUCCESS,
    payload: { movies }
});

export const fetchMoviesFailure = error => ({
    type: FETCH_MOVIES_FAILURE,
    payload: { error }
});

export const fetchMovieBegin = () => ({
    type: FETCH_MOVIE_BEGIN
});

export const fetchMovieSuccess = (movie, kind) => ({
    type: FETCH_MOVIE_SUCCESS,
    payload: { movie, kind }
});

export const fetchMovieFailure = error => ({
    type: FETCH_MOVIE_FAILURE,
    payload: { error }
});

export const putMovieWishList = movie => ({
    type: PUT_MOVIE_WISHLIST,
    payload: { movie }
});