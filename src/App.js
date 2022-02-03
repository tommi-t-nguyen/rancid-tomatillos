import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  render() {
    return(
      <main className='App'>
        <h1>Rotten Tomatillos</h1>
        <p>Movies</p>
      </main>
    )
  }
}

export default App;