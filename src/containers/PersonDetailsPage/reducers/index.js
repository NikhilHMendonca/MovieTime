import {
	FETCH_PERSON_DETAILS,
	FETCH_PERSON_DETAILS_SUCCESSFUL,
	FETCH_PERSON_DETAILS_FAILED,
	FETCH_PERSON_MOVIES,
	FETCH_PERSON_MOVIES_SUCCESSFUL,
	FETCH_PERSON_MOVIES_FAILED
} from "../constants";

const initialState = {
	isFetchingPersonDetails: false,
	person: {},
	personId: null,
	isFetchingPersonMovies: false,
	personMovies: {},
};

const personDetails = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PERSON_DETAILS:
			return {
				...state,
				isFetchingPersonDetails: true,
				personId: action.payload
			};
		case FETCH_PERSON_DETAILS_SUCCESSFUL:
			return {
				...state,
				isFetchingPersonDetails: false,
				person: action.payload
			};
		case FETCH_PERSON_DETAILS_FAILED:
			return {
				...state,
				isFetchingPersonDetails: false
			};
		case FETCH_PERSON_MOVIES:
			return {
				...state,
				isFetchingPersonMovies: true,
			};
		case FETCH_PERSON_MOVIES_SUCCESSFUL:
			return {
				...state,
				isFetchingPersonMovies: false,
				personMovies: action.payload
			};
		case FETCH_PERSON_MOVIES_FAILED:
			return {
				...state,
				isFetchingPersonMovies: false
			};
		default: {
			return state;
		}
	}
};

export default personDetails;
