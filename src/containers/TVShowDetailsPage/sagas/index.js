import { call, takeEvery, put, select } from "redux-saga/effects";
import {
	FETCH_TV_SHOW_DETAILS,
	FETCH_TV_SHOW_CREDITS,
	FETCH_TV_SHOW_REVIEWS,
	FETCH_SIMILAR_TV_SHOWS,
	SAVE_WATCHLIST_TV_SHOW,
	SAVE_FAVOURITE_TV_SHOW,
	FETCH_IS_TV_SHOW_SAVED
} from "../constants";
import {
	fetchTVShowDetailsApi,
	fetchTVShowCreditsApi,
	ffetchTVShowReviewsApi,
	fetchSimilarTVShowsApi,
	saveWatchlistTVShowApi,
	saveFavouriteTVShowApi,
	fetchIsTVShowSavedApi
} from "../../../api";
import { API_KEY, LANGUAGE, STORED_SESSION_ID } from "../../../constants";
import {
	fetchTVShowDetailsSuccessful,
	fetchTVShowDetailsFailed,
	fetchTVShowCreditsSuccessful,
	fetchTVShowCreditsFailed,
	fetchTVShowReviewsSuccessful,
	fetchTVShowReviewsFailed,
	fetchSimilarTVShowsSuccessful,
	fetchSimilarTVShowsFailed,
	saveWatchlistTVShowSuccessful,
	fetchIsTVShowSaved,
	saveWatchlistTVShowFailed,
	saveFavouriteTVShowSuccessful,
	saveFavouriteTVShowFailed,
	fetchIsTVShowSavedSuccessful,
	fetchIsTVShowSavedFailed
} from "../actions";
import {
	TV_SHOW_ID,
	ACCOUNT_ID,
	TV_SHOW,
	SAVED_TV_SHOW,
	// SESSION_ID
} from "../selectors";

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

function* savingWatchlistTVShowAsync() {
	try {
		const accountId = yield select(ACCOUNT_ID);
		const tvShowDetails = yield select(TV_SHOW);
		const savedTVShow = yield select(SAVED_TV_SHOW);
		// const sessionId = yield select(SESSION_ID);
		yield call(
			saveWatchlistTVShowApi,
			accountId,
			{
				media_type: "tv",
				media_id: tvShowDetails.id,
				watchlist: !savedTVShow.watchlist
			},
			{ params: { api_key: API_KEY, session_id: STORED_SESSION_ID } }
		);
		yield put(saveWatchlistTVShowSuccessful());
		yield put(fetchIsTVShowSaved());
	} catch (error) {
		yield put(saveWatchlistTVShowFailed());
	}
}
function* savingFavouriteTVShowAsync() {
	try {
		const accountId = yield select(ACCOUNT_ID);
		const tvShowDetails = yield select(TV_SHOW);
		const savedTVShow = yield select(SAVED_TV_SHOW);
		// const sessionId = yield select(SESSION_ID);
		yield call(
			saveFavouriteTVShowApi,
			accountId,
			{
				media_type: "tv",
				media_id: tvShowDetails.id,
				favorite: !savedTVShow.favorite
			},
			{ params: { api_key: API_KEY, session_id: STORED_SESSION_ID } }
		);
		yield put(saveFavouriteTVShowSuccessful());
		yield put(fetchIsTVShowSaved());
	} catch (error) {
		yield put(saveFavouriteTVShowFailed());
	}
}

function* fetchIsTVShowSavedAsync() {
	try {
		const tvShowId = yield select(TV_SHOW_ID);
		// const sessionId = yield select(SESSION_ID);
		const params = {
			params: {
				api_key: API_KEY,
				session_id: STORED_SESSION_ID
			}
		};
		const { data } = yield call(fetchIsTVShowSavedApi, tvShowId, params);
		yield put(fetchIsTVShowSavedSuccessful(data));
	} catch (error) {
		yield put(fetchIsTVShowSavedFailed());
	}
}

export function* tvShowDetailsSaga() {
	yield takeEvery(FETCH_TV_SHOW_DETAILS, fetchTVShowDetailsAsync);
	yield takeEvery(FETCH_TV_SHOW_CREDITS, fetchTVShowCreditsAsync);
	yield takeEvery(FETCH_TV_SHOW_REVIEWS, fetchTVShowReviewsAsync);
	yield takeEvery(FETCH_SIMILAR_TV_SHOWS, fetchSimilarTVShowsAsync);
	yield takeEvery(SAVE_WATCHLIST_TV_SHOW, savingWatchlistTVShowAsync);
	yield takeEvery(SAVE_FAVOURITE_TV_SHOW, savingFavouriteTVShowAsync);
	yield takeEvery(FETCH_IS_TV_SHOW_SAVED, fetchIsTVShowSavedAsync);
}
