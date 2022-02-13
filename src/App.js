import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home.js';
import MovieDetail from './Components/MovieDetail/MovieDetail.js';
import { Route } from 'react-router-dom';

const App =() => {
  return (
    <main className="App">
      <Route
        exact path="/"
        render={() => <Home />}
      />
      <Route
        path="/movies/:id"
        render={({match}) =>
        <MovieDetail id={match.params.id}/>}
      />
    </main>
    )
  }

export default App;
