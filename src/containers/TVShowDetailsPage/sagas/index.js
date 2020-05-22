import { call, takeEvery, put, select } from "redux-saga/effects";
import {
	FETCH_TV_SHOW_DETAILS,
	FETCH_TV_SHOW_CREDITS,
	FETCH_TV_SHOW_REVIEWS,
	FETCH_SIMILAR_TV_SHOWS
} from "../constants";
import {
	fetchTVShowDetailsApi,
	fetchTVShowCreditsApi,
	ffetchTVShowReviewsApi,
	fetchSimilarTVShowsApi
} from "../../../api";
import { API_KEY, LANGUAGE } from "../../../constants";
import {
	fetchTVShowDetailsSuccessful,
	fetchTVShowDetailsFailed,
	fetchTVShowCreditsSuccessful,
	fetchTVShowCreditsFailed,
	fetchTVShowReviewsSuccessful,
	fetchTVShowReviewsFailed,
	fetchSimilarTVShowsSuccessful,
	fetchSimilarTVShowsFailed
} from "../actions";
import { TV_SHOW_ID } from "../selectors";

const params = {
	params: { api_key: API_KEY, language: LANGUAGE }
};

function* fetchTVShowDetailsAsync() {
	try {
		const tvShowId = yield select(TV_SHOW_ID);
		const { data } = yield call(fetchTVShowDetailsApi, tvShowId, params);
		yield put(fetchTVShowDetailsSuccessful(data));
	} catch (error) {
		yield put(fetchTVShowDetailsFailed());
	}
}

function* fetchTVShowCreditsAsync() {
	try {
		const tvShowId = yield select(TV_SHOW_ID);
		const {
			data: { cast }
		} = yield call(fetchTVShowCreditsApi, tvShowId, params);
		yield put(fetchTVShowCreditsSuccessful(cast));
	} catch (error) {
		yield put(fetchTVShowCreditsFailed());
	}
}

function* fetchTVShowReviewsAsync() {
	try {
		const tvShowId = yield select(TV_SHOW_ID);
		const {
			data: { results }
		} = yield call(ffetchTVShowReviewsApi, tvShowId, params);
		yield put(fetchTVShowReviewsSuccessful(results));
	} catch (error) {
		yield put(fetchTVShowReviewsFailed());
	}
}

function* fetchSimilarTVShowsAsync() {
	try {
		const tvShowId = yield select(TV_SHOW_ID);
		const {
			data: { results }
		} = yield call(fetchSimilarTVShowsApi, tvShowId, params);
		yield put(fetchSimilarTVShowsSuccessful(results));
	} catch (error) {
		yield put(fetchSimilarTVShowsFailed());
	}
}

export function* tvShowDetailsSaga() {
	yield takeEvery(FETCH_TV_SHOW_DETAILS, fetchTVShowDetailsAsync);
	yield takeEvery(FETCH_TV_SHOW_CREDITS, fetchTVShowCreditsAsync);
	yield takeEvery(FETCH_TV_SHOW_REVIEWS, fetchTVShowReviewsAsync);
	yield takeEvery(FETCH_SIMILAR_TV_SHOWS, fetchSimilarTVShowsAsync);
}
