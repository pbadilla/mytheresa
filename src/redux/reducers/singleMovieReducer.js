import {
  FETCH_MOVIE_INITIATED,
  FETCH_MOVIE_FAILED,
  FETCH_MOVIE_SUCCEEDED,
  MOVIE_CLICKED
} from "../actions";

const INITIAL_STATE = {
  movie: null,
  credits: null,
  videos: null,
  images: null,
  clickedMovieId: "",
  isError: false,
  isLoading: false
};

export function movieReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_MOVIE_INITIATED:
      return {
        ...state,
        isError: false,
        isLoading: true
      };

    case FETCH_MOVIE_FAILED:
      return {
        ...state,
        isError: true,
        isLoading: false
      };

    case FETCH_MOVIE_SUCCEEDED:
      return {
        ...state,
        movie: action.payload,
        credits: { ...action.payload.credits },
        videos: { ...action.payload.videos },
        images: { ...action.payload.images },
        isError: false,
        isLoading: false
      };

    case MOVIE_CLICKED:
      return {
        ...state,
        clickedMovieId: action.payload
      };

    default:
      return state;
  }
};

export const getMovie = state => state.movies;
export const getMoviePending = state => state.pending;
export const getMovieError = state => state.error;