import { all } from "redux-saga/effects";
import { requestUpcomingMovies } from '../containers/HomePage/sagas';

export default function* rootSaga() {
	yield all([
		requestUpcomingMovies(),
	])
	// code after all-effect
  }
