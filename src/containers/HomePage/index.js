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
	fetchNowPlayingMovies,
	fetchPopularMovies,
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
			fetchingNowPlayingMovies,
			handleFetchPopularMovies,
			popularMoviesList,
			fetchingPopularMovies,
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
				<PopularMovies
					fetchPopularMovies={handleFetchPopularMovies}
					popularMoviesList={popularMoviesList}
					fetchingPopularMovies={fetchingPopularMovies}
				/>
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
	}
}) => {
	return {
		fetchingUpcomingMovies,
		upcomingMoviesList,
		fetchingNowPlayingMovies,
		nowPlayingMoviesList,
		popularMoviesList,
		fetchingPopularMovies,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleFetchUpcomingMovies: () => dispatch(fetchUpcomingMovies()),
		handleFetchNowPlayingMovies: () => dispatch(fetchNowPlayingMovies()),
		handleFetchPopularMovies: () => dispatch(fetchPopularMovies()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
