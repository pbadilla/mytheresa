import React from "react";
import { useHistory } from "react-router-dom";

import arrowLeft from "../../../../../public/images/left_arrow.svg";

import "./backbutton.scss";

export const Buttonback = () => {
  let history = useHistory();
  return (
    <>
      <a className="backbuttonWrapper" onClick={() => history.goBack()}>
        <img src={arrowLeft} alt="Go previous" />
        <span>Return</span>
      </a>
    </>
  );
};
