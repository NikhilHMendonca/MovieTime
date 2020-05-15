import { combineReducers } from 'redux';
import homePage from '../containers/HomePage/reducers';
import movieDetails from '../containers/MovieDetailsPage/reducers';
import tvShows from '../containers/TVShowsPage/reducers';
import searches from '../containers/SearchPage/reducers';
import tvShowDetails from '../containers/TVShowDetailsPage/reducers';

const rootReducers = combineReducers({
    homePage,
    movieDetails,
    tvShows,
    searches,
    tvShowDetails,
})

export default rootReducers;