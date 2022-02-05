import React from 'react';
import './Movies.css';
import Card from './Card.js';

const Movies = ( {movies, switchView} ) => {
    const movieCards = movies.map(movie => {
      return (
        <Card
        key={movie.id}
        id={movie.id}
        poster_path={movie.poster_path}
        title={movie.title}
        switchView={switchView}
      />
      )
    })

  return (
    <div className="movies-container">
      {movieCards}
    </div>
  )
}

export default Movies;
