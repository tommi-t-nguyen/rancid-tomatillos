import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav.js';
import Hero from './Components/Hero/Hero.js';
import Movies from './Components/Movies/Movies.js';
import MovieDetail from './Components/MovieDetail/MovieDetail.js';
import { fetchAllMovies } from './apiCalls.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      view:'loading',
      currentMovieId: null,
      error: ''
    }
  }
  componentDidMount(){
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
        <main className="App">
          <Nav />
          {this.state.view === 'error' && <h1>Sorry we're having techincal difficulty. Please try again later.</h1>}
          {this.state.view === 'loading' && <h1>loading</h1>}
          {this.state.view === 'home' &&
          <div>
            <Hero movie={this.state.movies[this.getRandomIndex(this.state.movies)]} switchView={this.switchView}/>
            <Movies movies={this.state.movies} switchView={this.switchView}/>
          </div>}
          {this.state.view === 'movie' &&
          <div>
            <MovieDetail id={this.state.currentMovieId}/>
            <button onClick={() => this.switchView(null, 'home')}>clickme</button>
          </div>}

        </main>
      )
  }
}


export default App;
