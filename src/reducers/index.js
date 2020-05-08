import { combineReducers } from 'redux';
import homePage from '../containers/HomePage/reducers';

const rootReducers = combineReducers({
    homePage,
})

export default rootReducers;