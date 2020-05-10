import { combineReducers } from 'redux';
import homePage from '../containers/HomePage/reducers';
import movieDetails from '../containers/MovieDetailsPage/reducers';

const rootReducers = combineReducers({
    homePage,
    movieDetails,
})

export default rootReducers;