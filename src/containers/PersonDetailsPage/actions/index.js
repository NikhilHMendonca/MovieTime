import {
	FETCH_PERSON_DETAILS,
	FETCH_PERSON_DETAILS_SUCCESSFUL,
	FETCH_PERSON_DETAILS_FAILED,
	FETCH_PERSON_MOVIES,
	FETCH_PERSON_MOVIES_SUCCESSFUL,
	FETCH_PERSON_MOVIES_FAILED
} from "../constants";

export const fetchPersonDetails = payload => {
	return {
		type: FETCH_PERSON_DETAILS,
		payload
	};
};
export const fetchPersonDetailsSuccessful = payload => {
	return {
		type: FETCH_PERSON_DETAILS_SUCCESSFUL,
		payload
	};
};
export const fetchPersonDetailsFailed = () => {
	return {
		type: FETCH_PERSON_DETAILS_FAILED
	};
};

export const fetchPersonMovies = () => {
	return {
		type: FETCH_PERSON_MOVIES,
	};
};
export const fetchPersonMoviesSuccessful = payload => {
	return {
		type: FETCH_PERSON_MOVIES_SUCCESSFUL,
		payload
	};
};
export const fetchPersonMoviesFailed = () => {
	return {
		type: FETCH_PERSON_MOVIES_FAILED
	};
};
