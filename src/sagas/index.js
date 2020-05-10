import { all } from "redux-saga/effects";
import { homePageSaga } from '../containers/HomePage/sagas';
import { movieDetailsSaga } from '../containers/MovieDetailsPage/sagas';

export default function* rootSaga() {
	yield all([
		homePageSaga(),
		movieDetailsSaga(),
	])
	// code after all-effect
  }
