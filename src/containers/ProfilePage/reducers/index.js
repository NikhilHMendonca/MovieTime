import {
	CREATE_SESSION,
	CREATE_SESSION_SUCCESSFUL,
	FETCH_USER_DETAILS,
	FETCH_USER_DETAILS_SUCCESSFUL,
	FETCH_USER_DETAILS_FAILED,
	FETCH_FAVOURITE_MOVIES,
	FETCH_FAVOURITE_MOVIES_SUCCESSFUL,
	FETCH_FAVOURITE_MOVIES_FAILED,
	FETCH_WATCHLIST_MOVIES,
	FETCH_WATCHLIST_MOVIES_SUCCESSFUL,
	FETCH_WATCHLIST_MOVIES_FAILED,
	DELETE_SESSION,
	DELETE_SESSION_SUCCESSFUL,
	DELETE_SESSION_FAILED,
	FETCH_WATCHLIST_TV_SHOWS,
	FETCH_WATCHLIST_TV_SHOWS_SUCCESSFUL,
	FETCH_WATCHLIST_TV_SHOWS_FAILED,
	FETCH_FAVOURITE_TV_SHOWS,
	FETCH_FAVOURITE_TV_SHOWS_SUCCESSFUL,
	FETCH_FAVOURITE_TV_SHOWS_FAILED
} from "../constants";

const initialState = {
	isFetchingToken: false,
	token: null,
	sessionId: null,
	user: {},
	isFetchingUserDetails: false,
	favouriteMovies: [],
	isFetchingFavouriteMovies: false,
	watchlistMovies: [],
	isFetchingWatchlistMovies: false,
	isFetchingWatchlistTVShows: false,
	isFetchingFavouriteTVShows: false,
	watchlistTVShows: [],
	favouriteTVShows: []
};

const profileDetails = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_SESSION: {
			return {
				...state,
				token: action.payload
			};
		}
		case CREATE_SESSION_SUCCESSFUL: {
			return {
				...state,
				sessionId: action.payload
			};
		}
		case FETCH_USER_DETAILS: {
			return {
				...state,
				isFetchingUserDetails: true
			};
		}
		case FETCH_USER_DETAILS_SUCCESSFUL: {
			return {
				...state,
				isFetchingUserDetails: false,
				user: action.payload
			};
		}
		case FETCH_USER_DETAILS_FAILED: {
			return {
				...state,
				isFetchingUserDetails: false
			};
		}
		case FETCH_WATCHLIST_MOVIES: {
			return {
				...state,
				isFetchingWatchlistMovies: true
			};
		}
		case FETCH_WATCHLIST_MOVIES_SUCCESSFUL: {
			return {
				...state,
				isFetchingWatchlistMovies: false,
				watchlistMovies: action.payload
			};
		}
		case FETCH_WATCHLIST_MOVIES_FAILED: {
			return {
				...state,
				isFetchingWatchlistMovies: false
			};
		}
		case FETCH_FAVOURITE_MOVIES: {
			return {
				...state,
				isFetchingFavouriteMovies: true
			};
		}
		case FETCH_FAVOURITE_MOVIES_SUCCESSFUL: {
			return {
				...state,
				isFetchingFavouriteMovies: false,
				favouriteMovies: action.payload
			};
		}
		case FETCH_FAVOURITE_MOVIES_FAILED: {
			return {
				...state,
				isFetchingFavouriteMovies: false
			};
		}
		case FETCH_WATCHLIST_TV_SHOWS: {
			return {
				...state,
				isFetchingWatchlistTVShows: true
			};
		}
		case FETCH_WATCHLIST_TV_SHOWS_SUCCESSFUL: {
			return {
				...state,
				isFetchingWatchlistTVShows: false,
				watchlistTVShows: action.payload
			};
		}
		case FETCH_WATCHLIST_TV_SHOWS_FAILED: {
			return {
				...state,
				isFetchingWatchlistTVShows: false
			};
		}
		case FETCH_FAVOURITE_TV_SHOWS: {
			return {
				...state,
				isFetchingFavouriteTVShows: true
			};
		}
		case FETCH_FAVOURITE_TV_SHOWS_SUCCESSFUL: {
			return {
				...state,
				isFetchingFavouriteTVShows: false,
				favouriteTVShows: action.payload
			};
		}
		case FETCH_FAVOURITE_TV_SHOWS_FAILED: {
			return {
				...state,
				isFetchingFavouriteTVShows: false
			};
		}
		case DELETE_SESSION: {
			return {
				...state
			};
		}
		case DELETE_SESSION_SUCCESSFUL: {
			return {
				...state,
				token: null,
				sessionId: null,
				watchlistMovies: [],
				favouriteMovies: [],
				user: {}
			};
		}
		case DELETE_SESSION_FAILED: {
			return {
				...state
			};
		}
		default:
			return state;
	}
};

export default profileDetails;
