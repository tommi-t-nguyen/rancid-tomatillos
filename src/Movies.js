import React from 'react';
import './Movies.css';
import Card from './Card.js';

const Movies = ( {movies} ) => {
    const movieCards = movies.map(movie => {
      return (
        <Card
        id={movie.id}
        poster_path={movie.poster_path}
        title={movie.title}
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

