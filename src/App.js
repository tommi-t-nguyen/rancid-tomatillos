import React, { Component } from 'react';
import './App.css';
import Movies from './Components/Movies/Movies.js';
import MovieDetail from './Components/MovieDetail/MovieDetail.js';
import { fetchAllMovies } from './apiCalls.js';
import { Route } from 'react-router-dom';

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

  componentDidMount() {
    fetchAllMovies()
    .then(data => this.setState({movies: data.movies}))
    .catch((error) => this.setState({view: 'error'}));
  }

  switchView = (id, views) => {
    this.setState({currentMovieId:id, view:views})
  }

  render() {
      return (
        <main className="App">
          <Route
            exact path="/"
            render={() =>
            <>
              <h1>Rotten Tomatillos</h1>
                {this.state.view === 'error' && <h1>Sorry we're having techincal difficulty. Please try again later.</h1>}
                {this.state.view === 'home' && <Movies movies={this.state.movies} switchView={this.switchView}/>}
                {this.state.view === 'movie' &&
                <div>
                  <MovieDetail id={this.state.currentMovieId}/>
                </div>}
              </>}
          />
        <Route
          path="/movies/:id"
          render={({match}) =>
            <MovieDetail id={match.params.id}/>
          }/>
        </main>
      )
  }
}


export default App;
