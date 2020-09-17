import React from "react";

import './Arrows.scss';

const Arrow = ({direction}) => {
  function onClick() {
    console.log('Clicka');
  }
  
  return (
    <a
        href="#"
        className="carousel__arrow carousel__arrow--left"
        onClick={onClick}
      >
        <span className={direction} />
      </a>
  );
};

export default Arrow;
