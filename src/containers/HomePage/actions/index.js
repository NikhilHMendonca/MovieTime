import {
	FETCH_UPCOMING_MOVIES,
	FETCH_UPCOMING_MOVIES_SUCCESSFUL,
	FETCH_UPCOMING_MOVIES_FAILED,
	FETCH_NOW_PLAYING_MOVIES,
	FETCH_NOW_PLAYING_MOVIES_SUCCESSFUL,
	FETCH_NOW_PLAYING_MOVIES_FAILED,
	FETCH_POPULAR_MOVIES,
	FETCH_POPULAR_MOVIES_SUCCESSFUL,
	FETCH_POPULAR_MOVIES_FAILED
} from "../constants";

export const fetchUpcomingMovies = () => {
	return {
		type: FETCH_UPCOMING_MOVIES
	};
};

export const fetchUpcomingMoviesSuccessful = payload => {
	return {
		type: FETCH_UPCOMING_MOVIES_SUCCESSFUL,
		payload
	};
};

export const fetchUpcomingMoviesFailed = () => {
	return {
		type: FETCH_UPCOMING_MOVIES_FAILED
	};
};

export const fetchNowPlayingMovies = () => {
	return {
		type: FETCH_NOW_PLAYING_MOVIES
	};
};

export const fetchNowPlayingMoviesSuccessful = payload => {
	return {
		type: FETCH_NOW_PLAYING_MOVIES_SUCCESSFUL,
		payload
	};
};

export const fetchNowPlayingMoviesFailed = () => {
	return {
		type: FETCH_NOW_PLAYING_MOVIES_FAILED
	};
};

export const fetchPopularMovies = () => {
	return {
		type: FETCH_POPULAR_MOVIES
	};
};

export const fetchPopularMoviesSuccessful = payload => {
	return {
		type: FETCH_POPULAR_MOVIES_SUCCESSFUL,
		payload
	};
};

export const fetchPopularMoviesFailed = () => {
	return {
		type: FETCH_POPULAR_MOVIES_FAILED
	};
};
