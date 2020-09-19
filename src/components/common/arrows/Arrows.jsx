import React from "react";

import "./Arrows.scss";
import arrowRight from "../../../../public/images/right_arrow.svg";
import arrowLeft from "../../../../public/images/left_arrow.svg";

const Arrow = ({ direction, onClickFunction }) => {
  return (
    <a
      href="#"
      className={`arrow arrow-${direction}`}
      onClick={onClickFunction}
    >
      {direction === "left" ? (
        <img src={arrowLeft} alt="Go previous" />
      ) : (
        <img src={arrowRight} alt="Go next" />
      )}
    </a>
  );
};

export default Arrow;
