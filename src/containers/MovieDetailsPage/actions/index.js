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
	FETCH_SIMILAR_MOVIES_FAILED,
	SAVE_WATCHLIST_MOVIE,
	SAVE_WATCHLIST_MOVIE_SUCCESSFUL,
	SAVE_WATCHLIST_MOVIE_FAILED,
	SAVE_FAVOURITE_MOVIE,
	SAVE_FAVOURITE_MOVIE_SUCCESSFUL,
	SAVE_FAVOURITE_MOVIE_FAILED
} from "../constants";

export const fetchMovieDetails = payload => {
	return {
		type: FETCH_MOVIE_DETAILS,
		payload
	};
};

export const fetchMovieDetailsSuccessful = payload => {
	return {
		type: FETCH_MOVIE_DETAILS_SUCCESSFUL,
		payload
	};
};

export const fetchMovieDetailsFailed = () => {
	return {
		type: FETCH_MOVIE_DETAILS_FAILED
	};
};

export const fetchMovieCredits = payload => {
	return {
		type: FETCH_MOVIE_CREDITS,
		payload
	};
};

export const fetchMovieCreditsSuccessful = payload => {
	return {
		type: FETCH_MOVIE_CREDITS_SUCCESSFUL,
		payload
	};
};

export const fetchMovieCreditsFailed = () => {
	return {
		type: FETCH_MOVIE_CREDITS_FAILED
	};
};

export const fetchMovieReviews = payload => {
	return {
		type: FETCH_MOVIE_REVIEWS,
		payload
	};
};

export const fetchMovieReviewsSuccessful = payload => {
	return {
		type: FETCH_MOVIE_REVIEWS_SUCCESSFUL,
		payload
	};
};

export const fetchMovieReviewsFailed = () => {
	return {
		type: FETCH_MOVIE_REVIEWS_FAILED
	};
};

export const fetchSimilarMovies = payload => {
	return {
		type: FETCH_SIMILAR_MOVIES,
		payload
	};
};

export const fetchSimilarMoviesSuccessful = payload => {
	return {
		type: FETCH_SIMILAR_MOVIES_SUCCESSFUL,
		payload
	};
};

export const fetchSimilarMoviesFailed = () => {
	return {
		type: FETCH_SIMILAR_MOVIES_FAILED
	};
};

export const saveWatchlistMovie = payload => {
	return {
		type: SAVE_WATCHLIST_MOVIE,
		payload
	};
};

export const saveWatchlistMovieSuccessful = () => {
	return {
		type: SAVE_WATCHLIST_MOVIE_SUCCESSFUL
	};
};

export const saveWatchlistMovieFailed = () => {
	return {
		type: SAVE_WATCHLIST_MOVIE_FAILED
	};
};

export const saveFavouriteMovie = () => {
	return {
		type: SAVE_FAVOURITE_MOVIE
	};
};

export const saveFavouriteMovieSuccessful = payload => {
	return {
		type: SAVE_FAVOURITE_MOVIE_SUCCESSFUL,
		payload
	};
};

export const saveFavouriteMovieFailed = () => {
	return {
		type: SAVE_FAVOURITE_MOVIE_FAILED
	};
};
