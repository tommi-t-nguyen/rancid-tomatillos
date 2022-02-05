import React, { Component } from 'react';
import { fetchSingleMovie } from '../../apiCalls.js';


class MovieDetail extends Component {
  constructor({ id }) {
    super();
    this.state = {
      detail: {},
      id: id
    }
  }

  componentDidMount(){
    fetchSingleMovie(this.state.id)
    .then(data => this.setState({detail: data.movie}))
  }
  
  
  render() {
    return (
    <>
      <img src={this.state.detail.backdrop_path} alt='poster'width="90%"/>
      <p>{this.state.detail.title}</p>
    </>
    )
  }
}

export default MovieDetail;
