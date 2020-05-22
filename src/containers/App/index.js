import React, { Component } from "react";
import HomePage from "../HomePage";
import MovieDetails from "../MovieDetailsPage";
import TVShowsPage from "../TVShowsPage";
import WatchlistPage from "../WatchlistPage";
import ProfilePage from "../ProfilePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import SearchPage from "../SearchPage";
import TVShowDetailsPage from "../TVShowDetailsPage";
import PersonDetailsPage from "../PersonDetailsPage";
import { connect } from "react-redux";
import { saveNavbarOption } from "./actions";
import { STORED_ACTIVE_TAB } from "../../constants";
class App extends Component {
	render() {
		const { handleSaveNavbarOption } = this.props;
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
				<Navbar
					handleSaveNavbarOption={handleSaveNavbarOption}
					activeTab={STORED_ACTIVE_TAB}
				/>
			</Router>
		);
	}
}

const mapStateToProps = ({ app: { activeTab } }) => {
	return {
		activeTab
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleSaveNavbarOption: payload => dispatch(saveNavbarOption(payload))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
