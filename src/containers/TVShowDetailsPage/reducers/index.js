import {
	FETCH_TV_SHOW_DETAILS,
	FETCH_TV_SHOW_DETAILS_SUCCESSFUL,
	FETCH_TV_SHOW_DETAILS_FAILED,
	FETCH_TV_SHOW_CREDITS,
	FETCH_TV_SHOW_CREDITS_SUCCESSFUL,
	FETCH_TV_SHOW_CREDITS_FAILED,
	FETCH_TV_SHOW_REVIEWS,
	FETCH_TV_SHOW_REVIEWS_SUCCESSFUL,
	FETCH_TV_SHOW_REVIEWS_FAILED,
	FETCH_SIMILAR_TV_SHOWS,
	FETCH_SIMILAR_TV_SHOWS_SUCCESSFUL,
	FETCH_SIMILAR_TV_SHOWS_FAILED,
	SAVE_FAVOURITE_TV_SHOW,
	SAVE_FAVOURITE_TV_SHOW_SUCCESSFUL,
	SAVE_FAVOURITE_TV_SHOW_FAILED,
	SAVE_WATCHLIST_TV_SHOW,
	SAVE_WATCHLIST_TV_SHOW_FAILED,
	SAVE_WATCHLIST_TV_SHOW_SUCCESSFUL,
	FETCH_IS_TV_SHOW_SAVED,
	FETCH_IS_TV_SHOW_SAVED_SUCCESSFUL,
	FETCH_IS_TV_SHOW_SAVED_FAILED
} from "../constants";

const initialState = {
	isFetchingTVShowDetails: false,
	tvShow: {},
	tvShowId: null,
	isFetchingTVShowCredits: false,
	tvShowCredits: [],
	isFetchingTVShowReviews: false,
	tvShowReviews: [],
	isFetchingSimilarTVShows: false,
	similarTvShows: [],
	savedTVShow: {},
	isSavingFavouriteTVShow: false,
	isSavingWatchlistTVShow: false,
	isFetchingTVShowSaved: false
};

const tvShowDetails = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_TV_SHOW_DETAILS:
			return {
				...state,
				isFetchingTVShowDetails: true,
				tvShowId: action.payload
			};
		case FETCH_TV_SHOW_DETAILS_SUCCESSFUL:
			return {
				...state,
				tvShow: action.payload,
				isFetchingTVShowDetails: false
			};
		case FETCH_TV_SHOW_DETAILS_FAILED:
			return {
				...state,
				isFetchingTVShowDetails: false
			};
		case FETCH_TV_SHOW_CREDITS:
			return {
				...state,
				isFetchingTVShowCredits: true
			};
		case FETCH_TV_SHOW_CREDITS_SUCCESSFUL:
			return {
				...state,
				tvShowCredits: action.payload,
				isFetchingTVShowCredits: false
			};
		case FETCH_TV_SHOW_CREDITS_FAILED:
			return {
				...state,
				isFetchingTVShowCredits: false
			};
		case FETCH_TV_SHOW_REVIEWS:
			return {
				...state,
				isFetchingTVShowCredits: true
			};
		case FETCH_TV_SHOW_REVIEWS_SUCCESSFUL:
			return {
				...state,
				tvShowReviews: action.payload,
				isFetchingTVShowCredits: false
			};
		case FETCH_TV_SHOW_REVIEWS_FAILED:
			return {
				...state,
				isFetchingTVShowCredits: false
			};
		case FETCH_SIMILAR_TV_SHOWS:
			return {
				...state,
				isFetchingTVShowCredits: true
			};
		case FETCH_SIMILAR_TV_SHOWS_SUCCESSFUL:
			return {
				...state,
				similarTvShows: action.payload,
				isFetchingSimilarTVShows: false
			};
		case FETCH_SIMILAR_TV_SHOWS_FAILED:
			return {
				...state,
				isFetchingTVShowCredits: false
			};
		case SAVE_FAVOURITE_TV_SHOW:
			return {
				...state,
				isSavingFavouriteTVShow: true
			};
		case SAVE_FAVOURITE_TV_SHOW_SUCCESSFUL:
			return {
				...state,
				isSavingFavouriteTVShow: false
			};
		case SAVE_FAVOURITE_TV_SHOW_FAILED:
			return {
				...state,
				isSavingFavouriteTVShow: false
			};
		case SAVE_WATCHLIST_TV_SHOW:
			return {
				...state,
				isSavingWatchlistTVShow: true
			};
		case SAVE_WATCHLIST_TV_SHOW_SUCCESSFUL:
			return {
				...state,
				isSavingWatchlistTVShow: false
			};
		case SAVE_WATCHLIST_TV_SHOW_FAILED:
			return {
				...state,
				isSavingWatchlistTVShow: false
			};
		case FETCH_IS_TV_SHOW_SAVED:
			return {
				...state,
				isFetchingTVShowSaved: true
			};
		case FETCH_IS_TV_SHOW_SAVED_SUCCESSFUL:
			return {
				...state,
				isFetchingTVShowSaved: false,
				savedTVShow: action.payload
			};
		case FETCH_IS_TV_SHOW_SAVED_FAILED:
			return {
				...state,
				isFetchingTVShowSaved: false
			};
		default: {
			return state;
		}
	}
};

export default tvShowDetails;
