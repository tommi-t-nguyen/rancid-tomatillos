import React, { Component } from 'react';
import Nav from '../Nav/Nav.js';
import Hero from '../Hero/Hero.js';
import Movies from '../Movies/Movies.js';
import { fetchAllMovies } from '../../apiCalls.js';



class Home extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      view:'loading',
      currentMovieId: null,
      error: ''
    }
  }

  componentDidMount() {
    fetchAllMovies()
    .then(data => this.setState({movies: data.movies, view: 'home'}))
    .catch((error) => this.setState({view: 'error'}))
  }
  switchView = (id, views) => {
    this.setState({currentMovieId:id, view:views})
  }
  getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

render() {
    return (
      <div className="Home">
        <Nav />
        {this.state.view === 'error' && <h1>Sorry we're having techincal difficulty. Please try again later.</h1>}
        {this.state.view === 'loading' && <h1> loading</h1>}
        {this.state.view === 'home' &&
        <>
        <Hero movie={this.state.movies[this.getRandomIndex(this.state.movies)]}/>
        <Movies movies={this.state.movies} switchView={this.switchView}/>
        </>}
      </div>
    )
}
}


export default Home;
