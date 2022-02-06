import React, { Component } from 'react';
import './App.css';
import Movies from './Components/Movies/Movies.js';
import MovieDetail from './Components/MovieDetail/MovieDetail.js';
import { fetchAllMovies } from './apiCalls.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      view:'home',
      currentMovieId: null,
      error: ''
    }
  }
  componentDidMount(){
    fetchAllMovies()
    .then(data => this.setState({movies: data.movies}))
    .catch((error) => this.setState({view: 'error'}))
  }

  switchView = (id, views) => {
    this.setState({currentMovieId:id, view:views})
  }

  render() {
    // if (this.state.view === 'home') {
      return (
        <main className="App">
          <h1>Rotten Tomatillos</h1>
          {this.state.view === 'error' && <h1>Sorry we're having techincal difficulty. Please try again later.</h1>}
          {this.state.view === 'home' && <Movies movies={this.state.movies} switchView={this.switchView}/>}
          {this.state.view === 'movie' &&
          <div>
            <MovieDetail id={this.state.currentMovieId}/>
            <button onClick={() => this.switchView(null, 'home')}>clickme</button>
          </div>}

        </main>
      )
    // }

    // if (this.state.view === 'movie') {
    //   return (
    //     <main className="App">
    //       <MovieDetail id={this.state.currentMovieId}/>
    //       <button onClick={() => this.switchView(null, 'home')}>clickme</button>
    //     </main>
    //   )
    // }
  }
}


export default App;
