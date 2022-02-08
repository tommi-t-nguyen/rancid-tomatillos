import React, { Component } from 'react';
import { fetchSingleMovie } from '../../apiCalls.js';
import './MovieDetail.css';


class MovieDetail extends Component {
  constructor({ id }) {
    super();
    this.state = {
      detail: {},
      id: id,
      error:false
    }
  }

  componentDidMount(){
    fetchSingleMovie(this.state.id)
    .then(data => this.setState({detail: data.movie}))
    .catch((error) => this.setState({error: true}))
  }


  render() {
    return (
      <div className='movie-details-container'>
          {this.state.error && <h1>Sorry we're having techincal difficulty. Please try again later.</h1>}
          {!this.state.error && <div className='movie-details'>
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
          <button className='return-btn'>Return Home</button>
        </div>
        </div>
          }
      </div>
    )
  }
}

export default MovieDetail;
