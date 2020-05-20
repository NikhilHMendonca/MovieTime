import { combineReducers } from 'redux';
import homePage from '../containers/HomePage/reducers';
import movieDetails from '../containers/MovieDetailsPage/reducers';
import tvShows from '../containers/TVShowsPage/reducers';
import searches from '../containers/SearchPage/reducers';
import tvShowDetails from '../containers/TVShowDetailsPage/reducers';
import personDetails from '../containers/PersonDetailsPage/reducers';
import profileDetails from '../containers/ProfilePage/reducers';

const rootReducers = combineReducers({
    homePage,
    movieDetails,
    tvShows,
    searches,
    tvShowDetails,
    personDetails,
    profileDetails,
})

export default rootReducers;