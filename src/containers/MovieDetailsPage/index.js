import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
	fetchMovieDetails,
	fetchMovieCredits,
	fetchMovieReviews,
	fetchSimilarMovies,
	saveWatchlistMovie,
	saveFavouriteMovie,
	fetchIsMovieSaved
} from "./actions";
import MovieInfo from "./components/MovieInfo";
import Casts from "../../components/Casts";
import Reviews from "../../components/Reviews";
import SimilarContent from "../../components/SimilarContent";
import { STORED_SESSION_ID } from "../../constants";
import CircularLoader from "../../components/CircularLoader";

const Container = styled.div`
	border: 1px solid #38c3a3;
	padding: 8px;
	border-radius: 4px;
	position: relative;
	margin: 190px 0 72px 0;
`;

class MovieDetailsPage extends Component {
	componentDidMount() {
		const {
			handleFetchMovieDetails,
			handleFetchMovieCredits,
			handleFetchMovieReviews,
			handleFetchSimilarMovies,
			handleFetchIsMovieSaved,
			match: {
				params: { movieId }
			}
		} = this.props;

		handleFetchMovieDetails(movieId);
		handleFetchMovieCredits();
		handleFetchMovieReviews();
		handleFetchSimilarMovies();
		if (STORED_SESSION_ID) handleFetchIsMovieSaved();
	}

	componentWillReceiveProps(nextProps) {
		const {
			handleFetchMovieDetails,
			handleFetchMovieCredits,
			handleFetchMovieReviews,
			handleFetchSimilarMovies,
			handleFetchIsMovieSaved,
			match: {
				params: { movieId }
			}
		} = this.props;
		const {
			match: {
				params: { movieId: updatedMovieId }
			}
		} = nextProps;

		if (updatedMovieId !== movieId) {
			handleFetchMovieDetails(updatedMovieId);
			handleFetchMovieCredits();
			handleFetchMovieReviews();
			handleFetchSimilarMovies();
			if (STORED_SESSION_ID) handleFetchIsMovieSaved();
		}
	}

	render() {
		const {
			movie,
			casts,
			reviews,
			similarMovies,
			isFetchingMovieDetails,
			handleSaveFavouriteMovie,
			handleSaveWatchlistMovie,
			savedMovie
		} = this.props;
		return (
			<Fragment>
				{!isFetchingMovieDetails && Object.keys(movie).length > 0 ? (
					<Container>
						<MovieInfo
							movie={movie}
							handleSaveWatchlistMovie={handleSaveWatchlistMovie}
							handleSaveFavouriteMovie={handleSaveFavouriteMovie}
							savedMovie={savedMovie}
						/>
						<Casts casts={casts} />
						<Reviews reviews={reviews} />
						<SimilarContent
							similarContent={similarMovies}
							title="Similar Movies"
							redirectTo="/movie"
						/>
					</Container>
				) : (
					<CircularLoader centered />
				)}
			</Fragment>
		);
	}
}

const mapStateToProps = ({
	movieDetails: {
		isFetchingMovieDetails,
		movie,
		isFetchingMovieCredits,
		casts,
		isFetchingMovieReviews,
		reviews,
		isFetchingSimilarMovies,
		similarMovies,
		savedMovie
	}
}) => {
	return {
		isFetchingMovieDetails,
		movie,
		isFetchingMovieCredits,
		casts,
		isFetchingMovieReviews,
		reviews,
		isFetchingSimilarMovies,
		similarMovies,
		savedMovie
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleFetchMovieDetails: payload => dispatch(fetchMovieDetails(payload)),
		handleFetchMovieCredits: payload => dispatch(fetchMovieCredits(payload)),
		handleFetchMovieReviews: payload => dispatch(fetchMovieReviews(payload)),
		handleFetchSimilarMovies: payload => dispatch(fetchSimilarMovies(payload)),
		handleSaveWatchlistMovie: payload => dispatch(saveWatchlistMovie(payload)),
		handleSaveFavouriteMovie: payload => dispatch(saveFavouriteMovie(payload)),
		handleFetchIsMovieSaved: () => dispatch(fetchIsMovieSaved())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPage);
