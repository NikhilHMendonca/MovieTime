import { FETCH_POPULAR_TV_SHOWS, FETCH_POPULAR_TV_SHOWS_SUCCESSFUL, FETCH_POPULAR_TV_SHOWS_FAILED, FETCH_TOP_RATED_TV_SHOWS, FETCH_TOP_RATED_TV_SHOWS_SUCCESSFUL, FETCH_TOP_RATED_TV_SHOWS_FAILED } from "../constants";

const initialState = {
    popularTvShows: [],
    isFetchingPopularTvShows: false,
    topRatedTvShows: [],
    isFetchingTopRatedTvShows: false,
};

const tvShows = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POPULAR_TV_SHOWS: return {
            ...state,
            isFetchingPopularTvShows: true,
        }
        case FETCH_POPULAR_TV_SHOWS_SUCCESSFUL: return {
            ...state,
            isFetchingPopularTvShows: false,
            popularTvShows: action.payload
        }
        case FETCH_POPULAR_TV_SHOWS_FAILED: return {
            ...state,
            isFetchingPopularTvShows: false,
        }
        case FETCH_TOP_RATED_TV_SHOWS: return {
            ...state,
            isFetchingTopRatedTvShows: true,
        }
        case FETCH_TOP_RATED_TV_SHOWS_SUCCESSFUL: return {
            ...state,
            isFetchingTopRatedTvShows: false,
            topRatedTvShows: action.payload
        }
        case FETCH_TOP_RATED_TV_SHOWS_FAILED: return {
            ...state,
            isFetchingTopRatedTvShows: false,
        }
        default: return state; 
    }
}

export default tvShows;

