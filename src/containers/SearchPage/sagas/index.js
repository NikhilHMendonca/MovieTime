import { call, put, takeEvery, select } from "redux-saga/effects";
import { FETCH_SEARCH_RESULTS } from "../constants";
import { fetchSearchResultsApi } from "../../../api";
import { API_KEY, LANGUAGE } from "../../../constants";
import {
	fetchSearchResultsSuccessful,
	fetchSearchResultsFailed
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

export function* searchResultsSaga() {
	yield takeEvery(FETCH_SEARCH_RESULTS, fetchSearchResultsAsync);
}
