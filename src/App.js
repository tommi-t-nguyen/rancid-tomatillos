/* eslint-disable no-useless-constructor */
import React, { Component } from "react"
import './App.css';

class App extends Component() {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  render() {
    return (
      <main className="App">
        <h1>Hi!</h1>
      </main>
    )
  }
}


export default App;
