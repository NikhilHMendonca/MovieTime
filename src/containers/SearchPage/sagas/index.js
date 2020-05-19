import { call, put, takeEvery, select } from "redux-saga/effects";
import { FETCH_SEARCH_RESULTS, FETCH_TRENDING } from "../constants";
import { fetchSearchResultsApi, fetchTrendingApi } from "../../../api";
import { API_KEY, LANGUAGE } from "../../../constants";
import {
	fetchSearchResultsSuccessful,
	fetchSearchResultsFailed,
	fetchTrendingSuccessful,
	fetchTrendingFailed
} from "../actions";


const sq = ({ searches }) => searches.searchQuery;

function* fetchSearchResultsAsync() {
    try {
        const searchQuery = yield select(sq);
        const searchParams = {
            params: { api_key: API_KEY, language: LANGUAGE, query: searchQuery }
        };
		const { data: { results } } = yield call(fetchSearchResultsApi, searchParams);
		yield put(fetchSearchResultsSuccessful(results));
	} catch (error) {
		yield put(fetchSearchResultsFailed());
	}
}

function* fetchTrendingAsync() {
    try {
		const searchParams = {
            params: { api_key: API_KEY, language: LANGUAGE }
        };
        const { data: { results } } = yield call(fetchTrendingApi, searchParams);
		yield put(fetchTrendingSuccessful(results));
	} catch (error) {
		yield put(fetchTrendingFailed());
	}
}

export function* searchResultsSaga() {
	yield takeEvery(FETCH_SEARCH_RESULTS, fetchSearchResultsAsync);
	yield takeEvery(FETCH_TRENDING, fetchTrendingAsync);
}
