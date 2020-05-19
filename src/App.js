import React from "react";
import HomePage from "./containers/HomePage";
import MovieDetails from "./containers/MovieDetailsPage";
import TVShowsPage from "./containers/TVShowsPage";
import WatchlistPage from "./containers/WatchlistPage";
import ProfilePage from "./containers/ProfilePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchPage from "./containers/SearchPage";
import TVShowDetailsPage from "./containers/TVShowDetailsPage";
import PersonDetailsPage from "./containers/PersonDetailsPage";

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/movie/:movieId" component={MovieDetails} />
				<Route path="/tvshows" component={TVShowsPage} />
				<Route path="/tv-show/:tvShowId" component={TVShowDetailsPage} />
				<Route path="/person/:personId" component={PersonDetailsPage} />
				<Route path="/watchlist" component={WatchlistPage} />
				<Route path="/profile" component={ProfilePage} />
				<Route path="/search" component={SearchPage} />
				<Route path="/" component={HomePage} />
			</Switch>
			<Navbar />
		</Router>
	);
}

export default App;
