import React from 'react';
import './Card.css';
import { NavLink } from 'react-router-dom';

const Card = ({id, poster_path, title, switchView}) => {
  return (
    <div className='card grow' id={id}>
      <NavLink to={`/movies/${id}`}>
      <img className='movie-poster-img' src={poster_path} alt='movie poster'/>
      </NavLink>
    </div>
  )
}

export default Card;
