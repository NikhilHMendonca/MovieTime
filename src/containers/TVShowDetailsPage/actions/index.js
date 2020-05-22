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
	SAVE_WATCHLIST_TV_SHOW,
	SAVE_WATCHLIST_TV_SHOW_SUCCESSFUL,
	SAVE_WATCHLIST_TV_SHOW_FAILED,
	SAVE_FAVOURITE_TV_SHOW,
	SAVE_FAVOURITE_TV_SHOW_SUCCESSFUL,
	SAVE_FAVOURITE_TV_SHOW_FAILED,
	FETCH_IS_TV_SHOW_SAVED,
	FETCH_IS_TV_SHOW_SAVED_SUCCESSFUL,
	FETCH_IS_TV_SHOW_SAVED_FAILED
} from "../constants";

export const fetchTVShowDetails = payload => {
	return {
		type: FETCH_TV_SHOW_DETAILS,
		payload
	};
};

export const fetchTVShowDetailsSuccessful = payload => {
	return {
		type: FETCH_TV_SHOW_DETAILS_SUCCESSFUL,
		payload
	};
};

export const fetchTVShowDetailsFailed = () => {
	return {
		type: FETCH_TV_SHOW_DETAILS_FAILED
	};
};

export const fetchTVShowCredits = () => {
	return {
		type: FETCH_TV_SHOW_CREDITS
	};
};

export const fetchTVShowCreditsSuccessful = payload => {
	return {
		type: FETCH_TV_SHOW_CREDITS_SUCCESSFUL,
		payload
	};
};

export const fetchTVShowCreditsFailed = () => {
	return {
		type: FETCH_TV_SHOW_CREDITS_FAILED
	};
};

export const fetchTVShowReviews = () => {
	return {
		type: FETCH_TV_SHOW_REVIEWS
	};
};

export const fetchTVShowReviewsSuccessful = payload => {
	return {
		type: FETCH_TV_SHOW_REVIEWS_SUCCESSFUL,
		payload
	};
};

export const fetchTVShowReviewsFailed = () => {
	return {
		type: FETCH_TV_SHOW_REVIEWS_FAILED
	};
};

export const fetchSimilarTVShows = () => {
	return {
		type: FETCH_SIMILAR_TV_SHOWS
	};
};

export const fetchSimilarTVShowsSuccessful = payload => {
	return {
		type: FETCH_SIMILAR_TV_SHOWS_SUCCESSFUL,
		payload
	};
};

export const fetchSimilarTVShowsFailed = () => {
	return {
		type: FETCH_SIMILAR_TV_SHOWS_FAILED
	};
};

export const saveWatchlistTVShow = () => {
	return {
		type: SAVE_WATCHLIST_TV_SHOW
	};
};

export const saveWatchlistTVShowSuccessful = payload => {
	return {
		type: SAVE_WATCHLIST_TV_SHOW_SUCCESSFUL,
		payload
	};
};

export const saveWatchlistTVShowFailed = () => {
	return {
		type: SAVE_WATCHLIST_TV_SHOW_FAILED
	};
};

export const saveFavouriteTVShow = () => {
	return {
		type: SAVE_FAVOURITE_TV_SHOW
	};
};

export const saveFavouriteTVShowSuccessful = payload => {
	return {
		type: SAVE_FAVOURITE_TV_SHOW_SUCCESSFUL,
		payload
	};
};

export const saveFavouriteTVShowFailed = () => {
	return {
		type: SAVE_FAVOURITE_TV_SHOW_FAILED
	};
};

export const fetchIsTVShowSaved = () => {
	return {
		type: FETCH_IS_TV_SHOW_SAVED
	};
};

export const fetchIsTVShowSavedSuccessful = payload => {
	return {
		type: FETCH_IS_TV_SHOW_SAVED_SUCCESSFUL,
		payload
	};
};

export const fetchIsTVShowSavedFailed = () => {
	return {
		type: FETCH_IS_TV_SHOW_SAVED_FAILED
	};
};
