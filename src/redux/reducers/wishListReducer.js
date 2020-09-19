import { PUT_MOVIE_WISHLIST } from "../actions";

const initialState = {
  wishList: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PUT_MOVIE_WISHLIST:
      return {
        ...state,
        loading: true,
        wishlist: [...state.wishList, payload.movieName],
        error: null,
      };
    default:
      return state;
  }
}
