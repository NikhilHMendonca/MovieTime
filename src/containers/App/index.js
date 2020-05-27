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
import Snackbar from "../../components/Snackbar";
class App extends Component {
	render() {
		const activeTab = localStorage.getItem("activeTab");
		const {
			handleSaveNavbarOption,
			user,
			showSnackbar,
			snackbarMessage
		} = this.props;
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
					activeTab={activeTab}
					user={user}
				/>
				{showSnackbar && <Snackbar message={snackbarMessage} />}
			</Router>
		);
	}
}

const mapStateToProps = ({
	app: { activeTab, showSnackbar, snackbarMessage },
	profileDetails: { user }
}) => {
	return {
		activeTab,
		user,
		showSnackbar,
		snackbarMessage
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleSaveNavbarOption: payload => dispatch(saveNavbarOption(payload))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
