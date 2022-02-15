import React, { Component } from 'react';
import { fetchSingleMovie } from '../../apiCalls.js';
import './MovieDetail.css';
import Error from '../Error/Error.js';
import Loading from '../Loading/Loading.js';
import { NavLink } from 'react-router-dom';


class MovieDetail extends Component {
  constructor({ id }) {
    super();
    this.state = {
      detail: {},
      id: id,
      view:'loading'
    }
  }

  componentDidMount(){
    fetchSingleMovie(this.state.id)
    .then(response => {
      if(!response.ok){
        this.setState({view:'error'});
      }else{
        return response.json()
    }})
    .then(data => this.setState({detail: data.movie, view: 'movie'}))
    .catch((error) => this.setState({view: 'error'}));
  }


  render() {
    return (
      <div className='movie-details-container'>
          {this.state.view === 'error' && <Error />}
          {this.state.view === 'loading' && <div className="loader"><Loading/></div>}
          {this.state.view === 'movie' && <div className='movie-details'>
          <div className='left-details'>
          <img className='movie-img' src={this.state.detail.backdrop_path} alt={'movie poster'}/>
        <div className='details-bottom-left'>
          <p className='rating'>Rating: {this.state.detail.average_rating} ⭐️</p>
          <p className='runtime'>Runtime: {this.state.detail.runtime} minutes</p>
          <p className='release-date'>Release Date: {this.state.detail.release_date}</p>
        </div>
        </div>
        <div className='right-details'>
          <h1 className='title'>{this.state.detail.title}</h1>
          <p className='tagline'>{this.state.detail.tagline}</p>
          <h2 className='overview'>{this.state.detail.overview}</h2>
          <NavLink className='return-home' to="/">Home ↩</NavLink>
        </div>
        </div>

          }
      </div>
    )
  }
}

export default MovieDetail;
