import React, { useEffect, useState } from "react";

import { connect, useDispatch } from 'react-redux';
import { getMovies } from '../../redux/actions';

import Arrow from '../common/arrows';
import Indicator from '../common/indicator';
import Slides from '../common/slides';

import './Carousel.scss';

const Carousel = ({ kind }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setMovies(dispatch(getMovies(kind)));
  }, []);



  function goToSlide(index) {
    setActiveIndex(index);
  };

  function goToPrevSlide(e) {
    e.preventDefault();

    let index = activeIndex;
    let { slides } = this.props;
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
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    setActiveIndex(index);
  }


  return (
    <>
      <div className="carousel">
        <h2>{kind}</h2>
        <Arrow />

        <Slides
          activeIndex={1}
          index={1} />

        <Indicator
          activeIndex={activeIndex}
          index={1}
        />

        <Arrow />
      </div>
    </>
  )
}

export default Carousel;