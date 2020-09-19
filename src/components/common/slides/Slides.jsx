import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Slides.scss";

const Slides = ({ activeIndex, content, kindMovie }) => {
  return (
    <ul className="slide-container">
      {content.map((movie, index) => (
        <Link
          to={`/movie/${kindMovie}/${movie.id}`}
          key={movie.id}
          title={movie.original_title}
        >
          <li
            key={movie.id}
            id={movie.id}
            className={index == activeIndex ? "slide slide-active" : "slide"}
          >
            <img
              src={`http://image.tmdb.org/t/p/w185/${movie.backdrop_path}`}
            />
            <small className="slide-content">{movie.original_title}</small>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Slides;
