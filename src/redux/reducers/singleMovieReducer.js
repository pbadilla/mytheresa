import {
  FETCH_MOVIE_BEGIN,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
} from "../actions";

const initialState = {
  movie: null,
  kind: null,
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_MOVIE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_MOVIE_SUCCESS:
      return {
        loading: false,
        kind: payload.kind,
        movie: payload.movie,
      };
    case FETCH_MOVIE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        movie: {},
      };
    default:
      return state;
  }
}
