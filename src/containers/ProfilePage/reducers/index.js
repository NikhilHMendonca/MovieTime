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
	DELETE_SESSION_FAILED
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
	isFetchingWatchlistMovies: false
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
