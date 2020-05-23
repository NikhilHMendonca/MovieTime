import { put, call, takeEvery, select } from "redux-saga/effects";
import {
	FETCH_TOKEN,
	CREATE_SESSION,
	FETCH_USER_DETAILS,
	FETCH_FAVOURITE_MOVIES,
	FETCH_WATCHLIST_MOVIES,
	DELETE_SESSION
} from "../constants";
import {
	fetchTokenApi,
	createSessionApi,
	fetchUserDetailsApi,
	fetchFavouriteMoviesApi,
	fetchWatchlistMoviesApi,
	deleteSessionApi
} from "../../../api";
import { API_KEY, STORED_SESSION_ID } from "../../../constants";
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
	deleteSessionFailed
} from "../actions";
import qs from "qs";
import { TOKEN, ACCOUNT_ID, SESSION_ID } from "../selectors";

const params = {
	params: { api_key: API_KEY }
};

function* fetchTokenAsync() {
	try {
		const {
			data: { request_token }
		} = yield call(fetchTokenApi, params);
		yield put(fetchTokenSuccessful());
		yield (window.location.href = `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=http://localhost:3000/profile`);
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
		const sessionId = yield select(SESSION_ID);
		const uparams = {
			params: { api_key: API_KEY, session_id: sessionId }
		};
		const { data } = yield call(fetchUserDetailsApi, uparams);
		yield put(fetchUserDetailsSuccessful(data));
		yield put(fetchWatchlistMovies());
		yield put(fetchFavouriteMovies());
	} catch (error) {
		yield put(fetchUserDetailsFailed());
	}
}

function* fetchFavouriteMoviesAsync() {
	try {
		const accountId = yield select(ACCOUNT_ID);
		const sessionId = yield select(SESSION_ID);
		const {
			data: { results }
		} = yield call(fetchFavouriteMoviesApi, accountId, {
			params: { api_key: API_KEY, session_id: sessionId }
		});
		yield put(fetchFavouriteMoviesSuccessful(results));
	} catch (error) {
		yield put(fetchFavouriteMoviesFailed());
	}
}

function* fetchWatchlistMoviesAsync() {
	try {
		const accountId = yield select(ACCOUNT_ID);
		const sessionId = yield select(SESSION_ID);
		const {
			data: { results }
		} = yield call(fetchWatchlistMoviesApi, accountId, {
			params: { api_key: API_KEY, session_id: sessionId }
		});
		yield put(fetchWatchlistMoviesSuccessful(results));
	} catch (error) {
		yield put(fetchWatchlistMoviesFailed());
	}
}

function* deleteSessionAsync() {
	try {
		const sessionId = yield select(SESSION_ID);
		yield call(deleteSessionApi, {
			params: { api_key: API_KEY, session_id: sessionId }
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
	yield takeEvery(DELETE_SESSION, deleteSessionAsync);
}
