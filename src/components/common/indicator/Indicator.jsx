
import React from "react";

import './Indicator.scss';

const Indicator = ({activeIndex,index}) => {
    return (
    <ul className='carousel__indicators'>
      <li>
          <a
          className={
              index == activeIndex
              ? "carousel__indicator carousel__indicator--active"
              : "carousel__indicator"
          }
          />
      </li>
    </ul>
  )
};

export default Indicator;