import React, { Component } from "react";
import styled from "styled-components";
import UpcomingMovies from "./UpcomingMovies/index.js";
import NowPlayingMovies from "./NowPlayingMovies/index.js";
import TopRatedMovies from "./TopRatedMovies/index.js";
import PopularMovies from "./PopularMovies/index.js";
import Header from "../../components/Header";
import { connect } from "react-redux";
import {
	fetchUpcomingMovies,
	fetchNowPlayingMovies
} from "../HomePage/actions";

const Container = styled.div`
	padding: 0 0 48px 0;
`;

class HomePage extends Component {
	render() {
		const {
			handleFetchUpcomingMovies,
			upcomingMoviesList,
			fetchingUpcomingMovies,
			handleFetchNowPlayingMovies,
			nowPlayingMoviesList,
			fetchingNowPlayingMovies
		} = this.props;
		return (
			<Container>
				<Header />
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
				<TopRatedMovies />
				<PopularMovies />
			</Container>
		);
	}
}

const mapStateToProps = ({
	homePage: {
		upcomingMoviesList,
		fetchingUpcomingMovies,
		nowPlayingMoviesList,
		fetchingNowPlayingMovies
	}
}) => {
	return {
		fetchingUpcomingMovies,
		upcomingMoviesList,
		fetchingNowPlayingMovies,
		nowPlayingMoviesList
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleFetchUpcomingMovies: () => dispatch(fetchUpcomingMovies()),
		handleFetchNowPlayingMovies: () => dispatch(fetchNowPlayingMovies())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
