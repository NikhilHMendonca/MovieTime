import { all } from "redux-saga/effects";
import { homePageSaga } from '../containers/HomePage/sagas';

export default function* rootSaga() {
	yield all([
		homePageSaga(),
	])
	// code after all-effect
  }
