import { FETCH_UPCOMING_MOVIES, FETCH_UPCOMING_MOVIES_SUCCESSFUL, FETCH_UPCOMING_MOVIES_FAILED } from '../constants';

const initialState = {
    fetchingUpcomingMovies: false,
    upcomingMoviesList: [],
}

const homePage = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_UPCOMING_MOVIES:
            return {
                ...state,
                fetchingUpcomingMovies: true
            }
        case FETCH_UPCOMING_MOVIES_SUCCESSFUL: 
            return {
                ...state,
                upcomingMoviesList: action.payload,
                fetchingUpcomingMovies: false
            }
        case FETCH_UPCOMING_MOVIES_FAILED: 
            return {
                ...state,
                fetchingUpcomingMovies: false 
            }
        default: 
            return state
    }
};

export default homePage;