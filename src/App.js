import React from "react";
import HomePage from "./containers/HomePage/index.js";
import MovieDetails from './containers/MovieDetailsPage/index.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:movieId" component={MovieDetails} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
