import {
	FETCH_MOVIE_DETAILS,
	FETCH_MOVIE_DETAILS_SUCCESSFUL,
	FETCH_MOVIE_DETAILS_FAILED
} from "../constants";

export const fetchMovieDetails = (payload) => {
	return {
		type: FETCH_MOVIE_DETAILS,
		payload
	};
};

export const fetchMovieDetailsSuccessful = (payload) => {
	return {
		type: FETCH_MOVIE_DETAILS_SUCCESSFUL,
		payload,
	};
};

export const fetchMovieDetailsFailed = () => {
	return {
		type: FETCH_MOVIE_DETAILS_FAILED
	};
};
