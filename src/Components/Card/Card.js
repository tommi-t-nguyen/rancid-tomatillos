import React from 'react';
import './Card.css';

const Card = ({id, poster_path, title, switchView}) => {
  return (
    <div className='card' id={id}>
      <img src={poster_path} alt="movie poster" width="70%" height="70%"/>
      <button onClick={() => switchView(id, 'movie')}>clickme</button>
    </div>
  )
}

export default Card;
