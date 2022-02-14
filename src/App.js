import React from 'react';
import Home from './Components/Home/Home.js';
import Error from './Components/Error/Error.js';
import MovieDetail from './Components/MovieDetail/MovieDetail.js';
import { Route, Switch, Redirect } from 'react-router-dom';

const App =() => {
  return (
    <main className="App">
      <Switch>
        <Route
          exact path="/"
          render={() => <Home />}
        />
        <Route
          path="/movies/:id"
          render={({match}) =>
          <MovieDetail id={match.params.id}/>}
        />
        <Route path="/error" component={Error}/>
        <Redirect to="/error"/>
      </Switch>
    </main>
    )
  }

export default App;
