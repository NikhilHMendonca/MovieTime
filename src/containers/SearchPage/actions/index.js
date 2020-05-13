import {
	FETCH_SEARCH_RESULTS,
	FETCH_SEARCH_RESULTS_SUCCESSFUL,
	FETCH_SEARCH_RESULTS_FAILED
} from "../constants";

export const fetchSearchResults = (payload) => {
	return {
		type: FETCH_SEARCH_RESULTS,
		payload
	};
};

export const fetchSearchResultsSuccessful = (payload) => {
	return {
		type: FETCH_SEARCH_RESULTS_SUCCESSFUL,
		payload
	};
};
export const fetchSearchResultsFailed = () => {
	return {
		type: FETCH_SEARCH_RESULTS_FAILED
	};
};
