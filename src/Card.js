import React from 'react';
import './Card.css';

const Card = ({id, poster_path, title}) => {
  return (
    <div className='card' id={id}>
      <h3>{title}</h3>
      <img src={poster_path} alt="movie poster" width="80%" height="80%"/>
    </div>
  )
}

export default Card;