import React from "react";
import HomePage from "./containers/HomePage/index.js";
import MovieDetails from './containers/MovieDetailsPage/index.js';
import TVShowsPage from './containers/TVShowsPage/index.js';
import WatchlistPage from './containers/WatchlistPage/index.js';
import ProfilePage from './containers/ProfilePage/index.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Navbar from "./components/Navbar/index.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:movieId" component={MovieDetails} />
        <Route path="/tvshows" component={TVShowsPage} />
        <Route path="/watchlist" component={WatchlistPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/" component={HomePage} />
      </Switch>
      <Navbar />
    </Router>
  );
}

export default App;
