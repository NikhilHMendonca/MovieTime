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
	FETCH_SIMILAR_TV_SHOWS_FAILED
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
				isFetchingTVShowCredits: true,
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
				isFetchingTVShowCredits: true,
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
				isFetchingTVShowCredits: true,
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
		default: {
			return state;
		}
	}
};

export default tvShowDetails;