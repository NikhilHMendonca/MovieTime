import { put, call, takeEvery, select } from "redux-saga/effects";
import {
	FETCH_TOKEN,
	CREATE_SESSION,
	FETCH_USER_DETAILS,
	FETCH_FAVOURITE_MOVIES,
	FETCH_WATCHLIST_MOVIES,
	DELETE_SESSION,
	FETCH_FAVOURITE_TV_SHOWS,
	FETCH_WATCHLIST_TV_SHOWS
} from "../constants";
import {
	fetchTokenApi,
	createSessionApi,
	fetchUserDetailsApi,
	fetchFavouriteMoviesApi,
	fetchWatchlistMoviesApi,
	deleteSessionApi,
	fetchFavouriteTVShowsApi,
	fetchWatchlistTVShowsApi
} from "../../../api";
import { API_KEY } from "../../../constants";
import {
	fetchTokenFailed,
	fetchTokenSuccessful,
	createSessionSuccessful,
	fetchUserDetailsSuccessful,
	fetchUserDetails,
	fetchUserDetailsFailed,
	createSessionFailed,
	fetchFavouriteMoviesSuccessful,
	fetchFavouriteMoviesFailed,
	fetchWatchlistMoviesSuccessful,
	fetchWatchlistMoviesFailed,
	fetchFavouriteMovies,
	fetchWatchlistMovies,
	deleteSessionSuccessful,
	deleteSessionFailed,
	fetchWatchlistTVShowsSuccessful,
	fetchWatchlistTVShowsFailed,
	fetchFavouriteTVShowsSuccessful,
	fetchFavouriteTVShowsFailed,
	fetchFavouriteTVShows,
	fetchWatchlistTVShows
} from "../actions";
import qs from "qs";
import { TOKEN, ACCOUNT_ID, SESSION_ID } from "../selectors";
import { fetchSessionId } from "../../../utils";

const params = {
	params: { api_key: API_KEY }
};

function* fetchTokenAsync() {
	try {
		const {
			data: { request_token }
		} = yield call(fetchTokenApi, params);
		yield put(fetchTokenSuccessful());
		yield (window.location.href = `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=https://movietimeapp.netlify.app/`);
	} catch (error) {
		yield put(fetchTokenFailed());
	}
}

function* createSessionAsync() {
	try {
		const rToken = yield select(TOKEN);
		const data = { request_token: rToken };
		const {
			data: { session_id }
		} = yield call(createSessionApi, qs.stringify(data), {
			params: { api_key: API_KEY }
		});
		yield localStorage.setItem("sessionId", session_id);
		yield put(createSessionSuccessful(session_id));
		yield put(fetchUserDetails());
	} catch (error) {
		localStorage.removeItem("sessionId");
		yield put(createSessionFailed());
	}
}

function* fetchUserDetailsAsync() {
	try {
		const uparams = {
			params: { api_key: API_KEY, session_id: fetchSessionId() }
		};
		const { data } = yield call(fetchUserDetailsApi, uparams);
		yield put(fetchUserDetailsSuccessful(data));
		yield put(fetchWatchlistMovies());
		yield put(fetchFavouriteMovies());
		yield put(fetchWatchlistTVShows());
		yield put(fetchFavouriteTVShows());
	} catch (error) {
		yield put(fetchUserDetailsFailed());
	}
}

function* fetchFavouriteMoviesAsync() {
	try {
		const accountId = yield select(ACCOUNT_ID);
		const {
			data: { results }
		} = yield call(fetchFavouriteMoviesApi, accountId, {
			params: { api_key: API_KEY, session_id: fetchSessionId() }
		});
		yield put(fetchFavouriteMoviesSuccessful(results));
	} catch (error) {
		yield put(fetchFavouriteMoviesFailed());
	}
}

function* fetchWatchlistMoviesAsync() {
	try {
		const accountId = yield select(ACCOUNT_ID);
		const {
			data: { results }
		} = yield call(fetchWatchlistMoviesApi, accountId, {
			params: { api_key: API_KEY, session_id: fetchSessionId() }
		});
		yield put(fetchWatchlistMoviesSuccessful(results));
	} catch (error) {
		yield put(fetchWatchlistMoviesFailed());
	}
}

function* fetchFavouriteTVShowsAsync() {
	try {
		const accountId = yield select(ACCOUNT_ID);
		const {
			data: { results }
		} = yield call(fetchFavouriteTVShowsApi, accountId, {
			params: { api_key: API_KEY, session_id: fetchSessionId() }
		});
		yield put(fetchFavouriteTVShowsSuccessful(results));
	} catch (error) {
		yield put(fetchFavouriteTVShowsFailed());
	}
}

function* fetchWatchlistTVShowsAsync() {
	try {
		const accountId = yield select(ACCOUNT_ID);
		const {
			data: { results }
		} = yield call(fetchWatchlistTVShowsApi, accountId, {
			params: { api_key: API_KEY, session_id: fetchSessionId() }
		});
		yield put(fetchWatchlistTVShowsSuccessful(results));
	} catch (error) {
		yield put(fetchWatchlistTVShowsFailed());
	}
}

function* deleteSessionAsync() {
	try {
		yield call(deleteSessionApi, {
			params: { api_key: API_KEY, session_id: fetchSessionId() }
		});
		yield put(deleteSessionSuccessful());
		localStorage.removeItem("sessionId");
	} catch (error) {
		yield put(deleteSessionFailed());
	}
}

export function* profileSaga() {
	yield takeEvery(FETCH_TOKEN, fetchTokenAsync);
	yield takeEvery(CREATE_SESSION, createSessionAsync);
	yield takeEvery(FETCH_USER_DETAILS, fetchUserDetailsAsync);
	yield takeEvery(FETCH_FAVOURITE_MOVIES, fetchFavouriteMoviesAsync);
	yield takeEvery(FETCH_WATCHLIST_MOVIES, fetchWatchlistMoviesAsync);
	yield takeEvery(FETCH_FAVOURITE_TV_SHOWS, fetchFavouriteTVShowsAsync);
	yield takeEvery(FETCH_WATCHLIST_TV_SHOWS, fetchWatchlistTVShowsAsync);
	yield takeEvery(DELETE_SESSION, deleteSessionAsync);
}
