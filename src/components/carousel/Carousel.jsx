import React, { useEffect, useState } from "react";

import { connect, useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/actions";

import Arrow from "../common/arrows";
import Indicator from "../indicator";
import Loader from "../loading";
import Slides from "../slides";

import "./Carousel.scss";

const Carousel = ({ kind, indexCarousel }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies(kind));
  }, []);

  const moviesList = useSelector(
    (state) => state.movies.listMovies[indexCarousel]
  );
  const slides = moviesList;

  const LoadedList = useSelector((state) => state.movies.loading);

  function goToSlide(index) {
    setActiveIndex(index);
  }

  function goToPrevSlide(e) {
    e.preventDefault();
    let index = activeIndex;
    let slidesLength = slides.length;
    if (index < 1) {
      index = slidesLength;
    }
    --index;
    setActiveIndex(index);
  }

  function goToNextSlide(e) {
    e.preventDefault();

    let index = activeIndex;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }
    ++index;
    setActiveIndex(index);
  }

  return (
    <>
      <section className={`carousel-container carousel-kind-${indexCarousel}`}>
        <h2>{kind}</h2>
        <section className="carousel-container-slider">
          <Arrow
            direction="left"
            onClickFunction={(event) => goToPrevSlide(event)}
          />
          <section className="carousel-images">
            {slides ? (
              <Slides
                activeIndex={activeIndex}
                content={moviesList}
                index={imageIndex}
                kindMovie={kind}
              />
            ) : (
              <Loader />
            )}

            {slides && (
              <Indicator
                activeIndex={activeIndex}
                content={moviesList}
                index={imageIndex}
                onClickFunction={(event) => goToSlide(event)}
              />
            )}
          </section>
          <Arrow
            direction="right"
            onClickFunction={(event) => goToNextSlide(event)}
          />
        </section>
      </section>
    </>
  );
};

export default Carousel;
