import React from 'react';
import './Card.css';

const Card = ({id, poster_path, title, switchView}) => {
  return (
    <div className='card' id={id}>
      <h3>{title}</h3>
      <img src={poster_path} alt="movie poster" width="70%" height="70%"/>
      <button onClick={() => switchView('movie')}>clickme</button>
    </div>
  )
}

export default Card;
