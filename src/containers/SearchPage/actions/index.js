import {
	FETCH_SEARCH_RESULTS,
	FETCH_SEARCH_RESULTS_SUCCESSFUL,
	FETCH_SEARCH_RESULTS_FAILED,
	FETCH_TRENDING,
	FETCH_TRENDING_SUCCESSFUL,
	FETCH_TRENDING_FAILED
} from "../constants";

export const fetchSearchResults = payload => {
	return {
		type: FETCH_SEARCH_RESULTS,
		payload
	};
};

export const fetchSearchResultsSuccessful = payload => {
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

export const fetchTrending = () => {
	return {
		type: FETCH_TRENDING
	};
};

export const fetchTrendingSuccessful = payload => {
	return {
		type: FETCH_TRENDING_SUCCESSFUL,
		payload
	};
};
export const fetchTrendingFailed = () => {
	return {
		type: FETCH_TRENDING_FAILED
	};
};
