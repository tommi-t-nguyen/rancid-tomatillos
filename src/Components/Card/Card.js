import React from 'react';
import './Card.css';
import { NavLink } from 'react-router-dom';

const Card = ({id, poster_path, title, switchView}) => {
  return (
    <div className='card' id={id}>
      <h3>{title}</h3>
      <NavLink to={`/movies/${id}`}>
      <img src={poster_path} alt="movie poster" width="70%" height="70%"/>
      </NavLink>
      <button onClick={() => switchView(id, 'movie')}>clickme</button>
    </div>
  )
}

export default Card;
