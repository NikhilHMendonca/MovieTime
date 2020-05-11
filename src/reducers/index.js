import { combineReducers } from 'redux';
import homePage from '../containers/HomePage/reducers';
import movieDetails from '../containers/MovieDetailsPage/reducers';
import tvShows from '../containers/TVShowsPage/reducers';

const rootReducers = combineReducers({
    homePage,
    movieDetails,
    tvShows
})

export default rootReducers;