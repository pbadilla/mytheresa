import React, { useEffect, useState } from "react";
import { withRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getMovie, putMovieWishList } from '../../redux/actions';

import Layout from '../../components/common/layout';

import favourites from '../../../public/images/favourites.svg';
import './movie.scss';

const Movie = ({ match }) => {

  const id = match.params.id;

  const dispatch = useDispatch();

  const movieSelector = useSelector(state => state.movie);
  const movieSelected = movieSelector.movie;

  useEffect(() => {
    dispatch(getMovie(id));
  }, []);

  function addWishList(movie) {
    dispatch(putMovieWishList(movie));
  }

  const kindMovie = useSelector(state => state.movie.kind);
  console.log('kindMovie', kindMovie);

  return (
    <>
      { movieSelected && (
        <Layout>
          <div className="movieWrapper">
            <section className="imageMovie">
              <figure className="addWishlist">
                <img src={`http://image.tmdb.org/t/p/original${movieSelected.backdrop_path}`} alt="sample38" />
                <figcaption>
                  <h2>Add to my Wishlist</h2>
                  <img className="addWishlist-icon" src={favourites} alt="Add to my Wishlist" />
                  <a href="#" onClick={addWishList(movieSelected.id)}></a>
                </figcaption>
              </figure>
            </section>
            <section className="descriptionMovie">
              <ul>
                <li><h3>{movieSelected.original_title}</h3></li>
                <li>{movieSelected.overview}</li>
                <li>{movieSelected.popularity}</li>
                <li className="tagsMovie" >{movieSelected.genres[0].name}</li>

              </ul>
            </section>
            <section className="infoMovie">
              <ul>
                <li><p>Production company: {movieSelected.production_companies[0].name}</p></li>
                <li><p>Country: {movieSelected.production_companies[0].origin_country}</p></li>
                <li><a href={movieSelected.homepage}>Link</a></li>
              </ul>
            </section>
          </div>
        </Layout>
      )
      }
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createSession: (session) => dispatch(createSession(session)),
})

export default withRouter(Movie);