import { FETCH_MOVIE_DETAILS, FETCH_MOVIE_DETAILS_SUCCESSFUL, FETCH_MOVIE_DETAILS_FAILED } from "../constants";

const initialState = {
	isFetchingMovieDetails: false,
    movieDetails: {},
    movieId: null,
};

const movieDetails = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_MOVIE_DETAILS:
			return {
				...state,
                isFetchingMovieDetails: true,
                movieId: action.payload
            };
        case FETCH_MOVIE_DETAILS_SUCCESSFUL:
            return {
                ...state,
                isFetchingMovieDetails: false,
                movieDetails: action.payload
            };
        case FETCH_MOVIE_DETAILS_FAILED:
            return {
                ...state,
                isFetchingMovieDetails: false
            };
        default:
            return state;
	}
};

export default movieDetails;
