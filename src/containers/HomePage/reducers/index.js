import {
	FETCH_UPCOMING_MOVIES,
	FETCH_UPCOMING_MOVIES_SUCCESSFUL,
	FETCH_UPCOMING_MOVIES_FAILED,
	FETCH_NOW_PLAYING_MOVIES,
	FETCH_NOW_PLAYING_MOVIES_SUCCESSFUL,
	FETCH_NOW_PLAYING_MOVIES_FAILED
} from "../constants";

const initialState = {
	fetchingUpcomingMovies: false,
	upcomingMoviesList: [],
	fetchingNowPlayingMovies: false,
	nowPlayingMoviesList: []
};

const homePage = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_UPCOMING_MOVIES:
			return {
				...state,
				fetchingUpcomingMovies: true
			};
		case FETCH_UPCOMING_MOVIES_SUCCESSFUL:
			return {
				...state,
				upcomingMoviesList: action.payload,
				fetchingUpcomingMovies: false
			};
		case FETCH_UPCOMING_MOVIES_FAILED:
			return {
				...state,
				fetchingUpcomingMovies: false
			};
		case FETCH_NOW_PLAYING_MOVIES:
			return {
				...state,
				fetchingNowPlayingMovies: true
			};
		case FETCH_NOW_PLAYING_MOVIES_SUCCESSFUL:
			return {
				...state,
				nowPlayingMoviesList: action.payload,
				fetchingNowPlayingMovies: false
			};
		case FETCH_NOW_PLAYING_MOVIES_FAILED:
			return {
				...state,
				fetchingNowPlayingMovies: false
			};
		default:
			return state;
	}
};

export default homePage;
