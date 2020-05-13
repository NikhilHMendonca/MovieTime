import {
	FETCH_SEARCH_RESULTS,
	FETCH_SEARCH_RESULTS_SUCCESSFUL,
    FETCH_SEARCH_RESULTS_FAILED
} from "../constants";

const initialState = {
	isFetchingSearchResults: false,
	searchResults: [],
	searchQuery: "",
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
		default: {
			return state;
		}
	}
};

export default searches;
