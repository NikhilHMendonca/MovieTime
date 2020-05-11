import {
	FETCH_POPULAR_TV_SHOWS,
	FETCH_POPULAR_TV_SHOWS_SUCCESSFUL,
	FETCH_POPULAR_TV_SHOWS_FAILED,
	FETCH_TOP_RATED_TV_SHOWS,
	FETCH_TOP_RATED_TV_SHOWS_SUCCESSFUL,
	FETCH_TOP_RATED_TV_SHOWS_FAILED
} from "../constants";

export const fetchPopularTvShows = () => {
	return {
		type: FETCH_POPULAR_TV_SHOWS
	};
};

export const fetchPopularTvShowsSuccessful = payload => {
	return {
		type: FETCH_POPULAR_TV_SHOWS_SUCCESSFUL,
		payload
	};
};

export const fetchPopularTvShowsFailed = () => {
	return {
		type: FETCH_POPULAR_TV_SHOWS_FAILED
	};
};

export const fetchTopRatedTvShows = () => {
	return {
		type: FETCH_TOP_RATED_TV_SHOWS
	};
};

export const fetchTopRatedTvShowsSuccessful = payload => {
	return {
		type: FETCH_TOP_RATED_TV_SHOWS_SUCCESSFUL,
		payload
	};
};

export const fetchTopRatedTvShowsFailed = () => {
	return {
		type: FETCH_TOP_RATED_TV_SHOWS_FAILED
	};
};
