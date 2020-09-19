import React from "react";

import { useSelector } from "react-redux";

import Layout from "../../components/common/layout";

import "./wishList.scss";

import favourites from "../../../public/images/favourites.svg";

const WishList = () => {
  const movieSelector = useSelector((state) => state.movie);
  const moviesWishList = movieSelector.movie;

  console.log("movieSelected wishList", moviesWishList);

  return (
    <Layout>
      <ul className="wishListWrapper">
        <li>
          <img
            src={`http://image.tmdb.org/t/p/w92${moviesWishList.backdrop_path}`}
          />
          <span>{moviesWishList.original_title}</span>
        </li>
      </ul>
    </Layout>
  );
};

export default WishList;
