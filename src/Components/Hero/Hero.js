import React from 'react';
import "./Hero.css";
import { NavLink } from 'react-router-dom';

const Hero = ({movie, switchView}) => {
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage:`url('${movie.backdrop_path}')`,
        backgroundPosition: "center center",
    }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">{movie.title}</h1>
        <NavLink to={`/movies/${movie.id}`}>
        <button className="banner-button">Watch Trailer</button>
        </NavLink>

      </div>
        <div className="fade"/>
    </div>
  )
}

export default Hero;
