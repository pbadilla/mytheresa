import {
  PUT_MOVIE_WISHLIST
} from '../actions';

const initialState = {
  movie: null
}

export default function (
  state = initialState,
  action
) {
  const { type, payload } = action;

  switch (type) {
    case PUT_MOVIE_WISHLIST:
      return {
        ...state,
        loading: true,
        movie: payload,
        error: null
      };
    default:
      return state;
  }
}