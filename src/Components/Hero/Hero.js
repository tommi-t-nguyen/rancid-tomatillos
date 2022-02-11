import React from 'react';
import "./Hero.css";

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
        <button className="banner-button" onClick={() => switchView(`${movie.id}`, 'movie')}>Watch Trailer</button>
      </div>
    </div>
  )
}

export default Hero;