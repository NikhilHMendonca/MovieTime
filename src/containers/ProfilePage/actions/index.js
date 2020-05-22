import {
	FETCH_TOKEN,
	FETCH_TOKEN_SUCCESSFUL,
	FETCH_TOKEN_FAILED,
	CREATE_SESSION,
	CREATE_SESSION_SUCCESSFUL,
	CREATE_SESSION_FAILED,
	FETCH_USER_DETAILS,
	FETCH_USER_DETAILS_SUCCESSFUL,
	FETCH_USER_DETAILS_FAILED,
	FETCH_WATCHLIST_MOVIES,
	FETCH_WATCHLIST_MOVIES_SUCCESSFUL,
	FETCH_WATCHLIST_MOVIES_FAILED,
	FETCH_FAVOURITE_MOVIES,
	FETCH_FAVOURITE_MOVIES_SUCCESSFUL,
	FETCH_FAVOURITE_MOVIES_FAILED,
	DELETE_SESSION,
	DELETE_SESSION_FAILED,
	DELETE_SESSION_SUCCESSFUL,
	FETCH_WATCHLIST_TV_SHOWS,
	FETCH_WATCHLIST_TV_SHOWS_SUCCESSFUL,
	FETCH_WATCHLIST_TV_SHOWS_FAILED,
	FETCH_FAVOURITE_TV_SHOWS,
	FETCH_FAVOURITE_TV_SHOWS_SUCCESSFUL,
	FETCH_FAVOURITE_TV_SHOWS_FAILED
} from "../constants";

export const fetchToken = () => {
	return {
		type: FETCH_TOKEN
	};
};

export const fetchTokenSuccessful = payload => {
	return {
		type: FETCH_TOKEN_SUCCESSFUL,
		payload
	};
};

export const fetchTokenFailed = () => {
	return {
		type: FETCH_TOKEN_FAILED
	};
};

export const createSession = payload => {
	return {
		type: CREATE_SESSION,
		payload
	};
};

export const createSessionSuccessful = payload => {
	return {
		type: CREATE_SESSION_SUCCESSFUL,
		payload
	};
};

export const createSessionFailed = () => {
	return {
		type: CREATE_SESSION_FAILED
	};
};

export const fetchUserDetails = () => {
	return {
		type: FETCH_USER_DETAILS
	};
};

export const fetchUserDetailsSuccessful = payload => {
	return {
		type: FETCH_USER_DETAILS_SUCCESSFUL,
		payload
	};
};

export const fetchUserDetailsFailed = () => {
	return {
		type: FETCH_USER_DETAILS_FAILED
	};
};

export const fetchWatchlistMovies = () => {
	return {
		type: FETCH_WATCHLIST_MOVIES
	};
};

export const fetchWatchlistMoviesSuccessful = payload => {
	return {
		type: FETCH_WATCHLIST_MOVIES_SUCCESSFUL,
		payload
	};
};

export const fetchWatchlistMoviesFailed = () => {
	return {
		type: FETCH_WATCHLIST_MOVIES_FAILED
	};
};

export const fetchFavouriteMovies = () => {
	return {
		type: FETCH_FAVOURITE_MOVIES
	};
};

export const fetchFavouriteMoviesSuccessful = payload => {
	return {
		type: FETCH_FAVOURITE_MOVIES_SUCCESSFUL,
		payload
	};
};

export const fetchFavouriteMoviesFailed = () => {
	return {
		type: FETCH_FAVOURITE_MOVIES_FAILED
	};
};

export const fetchWatchlistTVShows = () => {
	return {
		type: FETCH_WATCHLIST_TV_SHOWS
	};
};

export const fetchWatchlistTVShowsSuccessful = payload => {
	return {
		type: FETCH_WATCHLIST_TV_SHOWS_SUCCESSFUL,
		payload
	};
};

export const fetchWatchlistTVShowsFailed = () => {
	return {
		type: FETCH_WATCHLIST_TV_SHOWS_FAILED
	};
};

export const fetchFavouriteTVShows = () => {
	return {
		type: FETCH_FAVOURITE_TV_SHOWS
	};
};

export const fetchFavouriteTVShowsSuccessful = payload => {
	return {
		type: FETCH_FAVOURITE_TV_SHOWS_SUCCESSFUL,
		payload
	};
};

export const fetchFavouriteTVShowsFailed = () => {
	return {
		type: FETCH_FAVOURITE_TV_SHOWS_FAILED
	};
};

export const deleteSession = () => {
	return {
		type: DELETE_SESSION
	};
};

export const deleteSessionSuccessful = () => {
	return {
		type: DELETE_SESSION_SUCCESSFUL
	};
};

export const deleteSessionFailed = () => {
	return {
		type: DELETE_SESSION_FAILED
	};
};
