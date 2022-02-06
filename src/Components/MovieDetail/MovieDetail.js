import React, { Component } from 'react';
import { fetchSingleMovie } from '../../apiCalls.js';


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
<>
    {this.state.error && <h1>Sorry we're having techincal difficulty. Please try again later.</h1>}
    {!this.state.error && <><img src={this.state.detail.backdrop_path} alt='poster'width="90%"/>
  <p>{this.state.detail.title}</p></>}
</>
    )
  }
}

export default MovieDetail;
