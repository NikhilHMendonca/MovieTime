import { all } from "redux-saga/effects";
import { homePageSaga } from '../containers/HomePage/sagas';
import { movieDetailsSaga } from '../containers/MovieDetailsPage/sagas';
import { tvShowsSaga } from '../containers/TVShowsPage/sagas';

export default function* rootSaga() {
	yield all([
		homePageSaga(),
		movieDetailsSaga(),
		tvShowsSaga(),
	])
	// code after all-effect
  }
