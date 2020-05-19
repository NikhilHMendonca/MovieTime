import {
	FETCH_SEARCH_RESULTS,
	FETCH_SEARCH_RESULTS_SUCCESSFUL,
	FETCH_SEARCH_RESULTS_FAILED,
	FETCH_TRENDING,
	FETCH_TRENDING_SUCCESSFUL,
	FETCH_TRENDING_FAILED
} from "../constants";

const initialState = {
	isFetchingSearchResults: false,
	searchResults: [],
	searchQuery: "",
	isFetchingTrending: false,
	trending: []
};

const searches = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SEARCH_RESULTS:
			return {
				...state,
				isFetchingSearchResults: true,
				searchQuery: action.payload
			};
		case FETCH_SEARCH_RESULTS_SUCCESSFUL:
			return {
				...state,
				isFetchingSearchResults: false,
				searchResults: action.payload
			};
		case FETCH_SEARCH_RESULTS_FAILED:
			return {
				...state,
				searchQuery: "",
				isFetchingSearchResults: false
			};
		case FETCH_TRENDING:
			return {
				...state,
				isFetchingTrending: true
			};
		case FETCH_TRENDING_SUCCESSFUL:
			return {
				...state,
				isFetchingTrending: false,
				trending: action.payload
			};
		case FETCH_TRENDING_FAILED:
			return {
				...state,
				isFetchingTrending: false
			};
		default: {
			return state;
		}
	}
};

export default searches;
