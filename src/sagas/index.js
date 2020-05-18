import { all } from "redux-saga/effects";
import { homePageSaga } from '../containers/HomePage/sagas';
import { movieDetailsSaga } from '../containers/MovieDetailsPage/sagas';
import { tvShowsSaga } from '../containers/TVShowsPage/sagas';
import { searchResultsSaga } from "../containers/SearchPage/sagas";
import { tvShowDetailsSaga } from "../containers/TVShowDetailsPage/sagas";
import { personDetailsSaga } from "../containers/PersonDetailsPage/sagas";

export default function* rootSaga() {
	yield all([
		homePageSaga(),
		movieDetailsSaga(),
		tvShowsSaga(),
		searchResultsSaga(),
		tvShowDetailsSaga(),
		personDetailsSaga()
	])
	// code after all-effect
  }
