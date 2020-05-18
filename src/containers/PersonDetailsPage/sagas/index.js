import { takeEvery, put, call, select } from 'redux-saga/effects';
import { FETCH_PERSON_DETAILS, FETCH_PERSON_MOVIES } from '../constants';
import { fetchPersonDetailsApi, fetchPersonMoviesApi } from '../../../api';
import { API_KEY, LANGUAGE } from '../../../constants';
import { fetchPersonDetailsSuccessful, fetchPersonDetailsFailed, fetchPersonMoviesSuccessful, fetchPersonMoviesFailed } from '../actions';

const params = {
    params: { api_key: API_KEY, language: LANGUAGE }
}

const id = ({ personDetails }) => personDetails.personId;

function* fetchPersonDetailsAsync() {
    try {
        const personId = yield select(id);
        const { data } = yield call(fetchPersonDetailsApi, personId, params);
        yield put(fetchPersonDetailsSuccessful(data));
    } catch(error) {
        yield put(fetchPersonDetailsFailed());
    }
}

function* fetchPersonMoviesAsync() {
    try {
        const personId = yield select(id);
        const { data } = yield call(fetchPersonMoviesApi, personId, params);
        yield put(fetchPersonMoviesSuccessful(data));
    } catch(error) {
        yield put(fetchPersonMoviesFailed());
    }
}

export function* personDetailsSaga() {
    yield takeEvery(FETCH_PERSON_DETAILS, fetchPersonDetailsAsync);
    yield takeEvery(FETCH_PERSON_MOVIES, fetchPersonMoviesAsync);
}