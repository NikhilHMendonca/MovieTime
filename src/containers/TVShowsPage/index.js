import React, { Component, Fragment } from "react";
import { Container, Wrapper, SectionTitle } from "../HomePage/HomePageStyles";
import Loader from "../../components/Loader";
import MovieCard from "../../components/MovieCard";
import { connect } from "react-redux";
import { fetchPopularTvShows, fetchTopRatedTvShows } from "./actions";

class TVShows extends Component {
	componentDidMount() {
		const {
			handleFetchPopularTvShows,
			handleFetchTopRatedTvShows
		} = this.props;
		handleFetchPopularTvShows();
		handleFetchTopRatedTvShows();
	}

	render() {
		const {
			popularTvShows,
			isfetchingPopularMovies,
			isfetchingTopRatedMovies,
			topRatedTvShows
		} = this.props;
		return (
			<Fragment>
				<Container>
					<SectionTitle>Popular</SectionTitle>
					{isfetchingPopularMovies ? (
						<Loader />
					) : (
						<Wrapper>
							{popularTvShows.map(movie => (
								<MovieCard movie={movie} key={movie.id} />
							))}
						</Wrapper>
					)}
				</Container>
				<Container>
					<SectionTitle>Top Rated</SectionTitle>
					{isfetchingTopRatedMovies ? (
						<Loader />
					) : (
						<Wrapper>
							{topRatedTvShows.map(movie => (
								<MovieCard movie={movie} key={movie.id} />
							))}
						</Wrapper>
					)}
				</Container>
			</Fragment>
		);
	}
}

const mapStateToProps = ({
	tvShows: {
		isfetchingPopularMovies,
		popularTvShows,
		isfetchingTopRatedMovies,
		topRatedTvShows
	}
}) => {
	return {
		isfetchingPopularMovies,
		popularTvShows,
		isfetchingTopRatedMovies,
		topRatedTvShows
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleFetchPopularTvShows: () => dispatch(fetchPopularTvShows()),
		handleFetchTopRatedTvShows: () => dispatch(fetchTopRatedTvShows())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TVShows);
