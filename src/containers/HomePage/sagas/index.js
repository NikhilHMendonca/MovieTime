import { put, takeLatest, call } from "redux-saga/effects";
import { FETCH_UPCOMING_MOVIES, FETCH_NOW_PLAYING_MOVIES } from "../constants";
import {
	fetchUpcomingMoviesSuccessful,
	fetchUpcomingMoviesFailed,
	fetchNowPlayingMoviesSuccessful,
	fetchNowPlayingMoviesFailed
} from "../actions";
import { fetchUpcomingMoviesApi, fetchNowPlayingMoviesApi } from "../../../api";

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

function* fetchNowPlayingMoviesAsync() {
	try {
		const params = {
			params: { api_key: "8ccc0bdb740b43b01bbfa64bd20639c0", language: "en" }
		};
		const response = yield call(fetchNowPlayingMoviesApi, params);
		yield put(fetchNowPlayingMoviesSuccessful(response.data.results));
	} catch (error) {
		yield put(fetchNowPlayingMoviesFailed());
	}
}

export function* homePageSaga() {
	yield takeLatest(FETCH_UPCOMING_MOVIES, fetchUpcomingMoviesAsync);
	yield takeLatest(FETCH_NOW_PLAYING_MOVIES, fetchNowPlayingMoviesAsync);
}