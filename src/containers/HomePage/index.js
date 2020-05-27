import React, { Component } from "react";
import styled from "styled-components";
import UpcomingMovies from "./UpcomingMovies/index.js";
import NowPlayingMovies from "./NowPlayingMovies/index.js";
import TopRatedMovies from "./TopRatedMovies/index.js";
import PopularMovies from "./PopularMovies/index.js";
import { connect } from "react-redux";
import {
	fetchUpcomingMovies,
	fetchNowPlayingMovies,
	fetchPopularMovies,
	fetchTopRatedMovies
} from "../HomePage/actions";
import { createSession, fetchUserDetails } from "../ProfilePage/actions/index.js";

const Container = styled.div`
	padding: 0 0 48px 0;
`;

class HomePage extends Component {
	componentDidMount(){
		const {
			handleCreateSession,
			handleFetchUserDetails,
			user
		} = this.props;
		const requestToken = this.getUrlParameter("request_token");
		const sessionId = localStorage.getItem('sessionId');
		if (!sessionId && requestToken) {
			handleCreateSession(requestToken);
		} else if (sessionId && Object.keys(user).length < 1) {
			localStorage.setItem('activeTab', 'homePage');
			handleFetchUserDetails();
		}
	}

	getUrlParameter = name => {
		// eslint-disable-next-line
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
		var results = regex.exec(window.location.search);
		return results === null
			? false
			: decodeURIComponent(results[1].replace(/\+/g, " "));
	};

	render() {
		const {
			handleFetchUpcomingMovies,
			upcomingMoviesList,
			fetchingUpcomingMovies,
			handleFetchNowPlayingMovies,
			nowPlayingMoviesList,
			fetchingNowPlayingMovies,
			handleFetchPopularMovies,
			popularMoviesList,
			fetchingPopularMovies,
			handleFetchTopRatedMovies,
			fetchingTopRatedMovies,
			topRatedMoviesList,
		} = this.props;
		return (
			<Container>
				<UpcomingMovies
					fetchUpcomingMovies={handleFetchUpcomingMovies}
					upcomingMoviesList={upcomingMoviesList}
					fetchingUpcomingMovies={fetchingUpcomingMovies}
				/>
				<NowPlayingMovies
					fetchNowPlayingMovies={handleFetchNowPlayingMovies}
					nowPlayingMoviesList={nowPlayingMoviesList}
					fetchingNowPlayingMovies={fetchingNowPlayingMovies}
				/>
				<TopRatedMovies
					fetchTopRatedMovies={handleFetchTopRatedMovies}
					fetchingTopRatedMovies={fetchingTopRatedMovies}
					topRatedMoviesList={topRatedMoviesList}
				/>
				<PopularMovies
					fetchPopularMovies={handleFetchPopularMovies}
					popularMoviesList={popularMoviesList}
					fetchingPopularMovies={fetchingPopularMovies}
				/>
				{/* <div>Icons made by <a href="https://www.flaticon.com/free-icon/camera_860321" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
			</Container>
		);
	}
}

const mapStateToProps = ({
	homePage: {
		upcomingMoviesList,
		fetchingUpcomingMovies,
		nowPlayingMoviesList,
		fetchingNowPlayingMovies,
		popularMoviesList,
		fetchingPopularMovies,
		topRatedMoviesList,
		fetchingTopRatedMovies
	},
	profileDetails: {
		user
	}
}) => {
	return {
		fetchingUpcomingMovies,
		upcomingMoviesList,
		fetchingNowPlayingMovies,
		nowPlayingMoviesList,
		popularMoviesList,
		fetchingPopularMovies,
		topRatedMoviesList,
		fetchingTopRatedMovies,
		user
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleFetchUpcomingMovies: () => dispatch(fetchUpcomingMovies()),
		handleFetchNowPlayingMovies: () => dispatch(fetchNowPlayingMovies()),
		handleFetchPopularMovies: () => dispatch(fetchPopularMovies()),
		handleFetchTopRatedMovies: () => dispatch(fetchTopRatedMovies()),
		handleCreateSession: payload => dispatch(createSession(payload)),
		handleFetchUserDetails: payload => dispatch(fetchUserDetails(payload)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
