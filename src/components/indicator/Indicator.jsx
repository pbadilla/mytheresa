import React from "react";

import "./Indicator.scss";

const Indicator = ({ activeIndex, content, clickFunction }) => {
  return (
    <ul className="indicators">
      {content.map((movie, index) => (
        <li key={movie.id}>
          <a
            className={
              index == activeIndex ? "indicator indicator--active" : "indicator"
            }
            title={movie.original_title}
            onClick={clickFunction}
          />
        </li>
      ))}
    </ul>
  );
};

export default Indicator;
