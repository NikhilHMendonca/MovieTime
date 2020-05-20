import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
	fetchMovieDetails,
	fetchMovieCredits,
	fetchMovieReviews,
	fetchSimilarMovies,
	saveWatchlistMovie,
	saveFavouriteMovie
} from "./actions";
import Loader from "../../components/Loader";
import MovieInfo from "./components/MovieInfo";
import Casts from "../../components/Casts";
import Reviews from "../../components/Reviews";
import SimilarContent from "../../components/SimilarContent";

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
			match: {
				params: { movieId }
			}
		} = this.props;

		handleFetchMovieDetails(movieId);
		handleFetchMovieCredits();
		handleFetchMovieReviews();
		handleFetchSimilarMovies();
		// axios
		// 	.get(`https://api.themoviedb.org/3/movie/${movieId}/images`, {
		// 		params: { api_key: "8ccc0bdb740b43b01bbfa64bd20639c0", language: "en" }
		// 	})
		// 	.then(response => {
		// 		this.setState({ images: response.data });
		// 	})
		// 	.catch(error => {
		// 		console.log({ error });
		// 	});
	}

	componentWillReceiveProps(nextProps) {
		const {
			handleFetchMovieDetails,
			handleFetchMovieCredits,
			handleFetchMovieReviews,
			handleFetchSimilarMovies,
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
		} = this.props;
		return (
			<Container>
				{!isFetchingMovieDetails && Object.keys(movie).length > 0 ? (
					<Fragment>
						<MovieInfo
							movie={movie}
							handleSaveWatchlistMovie={handleSaveWatchlistMovie}
							handleSaveFavouriteMovie={handleSaveFavouriteMovie}
						/>
						<Casts casts={casts} />
						<Reviews reviews={reviews} />
						<SimilarContent
							similarContent={similarMovies}
							title="Similar Movies"
							redirectTo="/movie"
						/>
					</Fragment>
				) : (
					<Loader />
				)}
			</Container>
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
		similarMovies
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
		similarMovies
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleFetchMovieDetails: payload => dispatch(fetchMovieDetails(payload)),
		handleFetchMovieCredits: payload => dispatch(fetchMovieCredits(payload)),
		handleFetchMovieReviews: payload => dispatch(fetchMovieReviews(payload)),
		handleFetchSimilarMovies: payload => dispatch(fetchSimilarMovies(payload)),
		handleSaveWatchlistMovie: (payload) => dispatch(saveWatchlistMovie(payload)),
		handleSaveFavouriteMovie: (payload) => dispatch(saveFavouriteMovie(payload))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPage);
