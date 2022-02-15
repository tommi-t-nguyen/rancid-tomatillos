import React from 'react';
import './Movies.css';
import Card from '../Card/Card.js';


const Movies = ( {movies} ) => {
    const movieCards = movies.map(movie => {
      return (
        <Card
        key={movie.id}
        id={movie.id}
        poster_path={movie.poster_path}
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
