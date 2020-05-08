import { FETCH_UPCOMING_MOVIES, FETCH_UPCOMING_MOVIES_SUCCESSFUL, FETCH_UPCOMING_MOVIES_FAILED } from '../constants';

export const fetchUpcomingMovies = () => {
    return {
        type: FETCH_UPCOMING_MOVIES,
    }
}

export const fetchUpcomingMoviesSuccessful = (payload) => {
    return {
        type: FETCH_UPCOMING_MOVIES_SUCCESSFUL,
        payload
    }
}

export const fetchUpcomingMoviesFailed = () => {
    return {
        type: FETCH_UPCOMING_MOVIES_FAILED
    }
}