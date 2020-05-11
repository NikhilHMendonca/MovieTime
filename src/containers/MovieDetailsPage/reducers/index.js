import {
	FETCH_MOVIE_DETAILS,
	FETCH_MOVIE_DETAILS_SUCCESSFUL,
	FETCH_MOVIE_DETAILS_FAILED,
	FETCH_MOVIE_CREDITS,
	FETCH_MOVIE_CREDITS_SUCCESSFUL,
	FETCH_MOVIE_CREDITS_FAILED,
	FETCH_MOVIE_REVIEWS,
	FETCH_MOVIE_REVIEWS_SUCCESSFUL,
	FETCH_MOVIE_REVIEWS_FAILED,
	FETCH_SIMILAR_MOVIES,
	FETCH_SIMILAR_MOVIES_SUCCESSFUL,
	FETCH_SIMILAR_MOVIES_FAILED
} from "../constants";

const initialState = {
	isFetchingMovieDetails: false,
	movieDetails: {},
	movieId: null,
	isFetchingMovieCasts: false,
	casts: [],
	isFetchingMovieReviews: false,
	reviews: [],
	isFetchingSimilarMovies: false,
	similarMovies: []
};

const movieDetails = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_MOVIE_DETAILS:
			return {
				...state,
				isFetchingMovieDetails: true,
				movieId: action.payload
			};
		case FETCH_MOVIE_DETAILS_SUCCESSFUL:
			return {
				...state,
				isFetchingMovieDetails: false,
				movieDetails: action.payload
			};
		case FETCH_MOVIE_DETAILS_FAILED:
			return {
				...state,
				isFetchingMovieDetails: false
			};
		case FETCH_MOVIE_CREDITS:
			return {
				...state,
				isFetchingMovieCasts: true
			};
		case FETCH_MOVIE_CREDITS_SUCCESSFUL:
			return {
				...state,
				isFetchingMovieCasts: false,
				casts: action.payload
			};
		case FETCH_MOVIE_CREDITS_FAILED:
			return {
				...state,
				isFetchingMovieCasts: false
			};
		case FETCH_MOVIE_REVIEWS:
			return {
				...state,
				isFetchingMovieReviews: true
			};
		case FETCH_MOVIE_REVIEWS_SUCCESSFUL:
			return {
				...state,
				isFetchingMovieReviews: false,
				reviews: action.payload
			};
		case FETCH_MOVIE_REVIEWS_FAILED:
			return {
				...state,
				isFetchingMovieReviews: false
			};
		case FETCH_SIMILAR_MOVIES:
			return {
				...state,
				isFetchingSimilarMovies: true
			};
		case FETCH_SIMILAR_MOVIES_SUCCESSFUL:
			return {
				...state,
				isFetchingSimilarMovies: false,
				similarMovies: action.payload
			};
		case FETCH_SIMILAR_MOVIES_FAILED:
			return {
				...state,
				isFetchingSimilarMovies: false
			};
		default:
			return state;
	}
};

export default movieDetails;
