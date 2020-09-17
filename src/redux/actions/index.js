export const FETCH_MOVIES_BEGIN = 'FETCH_MOVIES_BEGIN';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export function fetchProducts() {
    return dispatch => {
        dispatch(fetchMoviesBegin());
        return fakeGetProducts()
            .then(json => {
                dispatch(fetchProductsSuccess(json.products));
                return json.products;
            })
            .catch(error =>
                dispatch(fetchProductsFailure(error))
            );
    };
}
export function getMovies(genres) {
    return dispatch => {
        return fetch(`https://api.themoviedb.org/3/movie/${genres}?api_key=7006edd4690fd5f45e7b5cb6b1561357&language=en-US`)
            .then(function (response) {
                console.log('response =', response);
                return response.json();
            })
            .then(function (data) {
                dispatch(fetchMoviesSuccess(data.results));
                console.log('Movies Actions = ', data.results);
            })
            .catch(function (err) {
                dispatch(fetchProductsFailure(error))
                console.error(err);
            });
    }
}
export function getMovie(id) {

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