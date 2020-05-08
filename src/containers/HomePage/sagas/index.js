import { put, takeLatest, call } from "redux-saga/effects";
import { FETCH_UPCOMING_MOVIES } from "../constants";
import {
	fetchUpcomingMoviesSuccessful,
	fetchUpcomingMoviesFailed
} from "../actions";
import { fetchUpcomingMoviesApi } from "../../../api";

function* fetchUpcomingMoviesAsync() {
	try {
		const params = {
			params: { api_key: "8ccc0bdb740b43b01bbfa64bd20639c0", language: "en" }
		};
		const response = yield call(fetchUpcomingMoviesApi, params);
		yield put(fetchUpcomingMoviesSuccessful(response.data.results));
	} catch (error) {
		yield put(fetchUpcomingMoviesFailed());
	}
}

export function* requestUpcomingMovies() {
	yield takeLatest(FETCH_UPCOMING_MOVIES, fetchUpcomingMoviesAsync);
}