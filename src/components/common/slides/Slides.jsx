import React, { useState } from "react";

import './Slides.scss';

const Slides = ({activeIndex, index}) => {
  return (
    <ul className='carousel__slides'>
      <li
        className={
          index == activeIndex
            ? "carousel__slide carousel__slide--active"
            : "carousel__slide"
        }
      >
        <p className="carousel-slide__content">content</p>
      </li>
    </ul>
    );
 };

export default Slides;