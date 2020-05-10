import { takeEvery, call, put, select } from 'redux-saga/effects';
import { FETCH_MOVIE_DETAILS } from '../constants';
import { API_KEY, LANGUAGE } from '../../../constants';
import { fetchMovieDetailsApi } from '../../../api';
import { fetchMovieDetailsSuccessful, fetchMovieDetailsFailed } from '../actions';

const params = {
	params: { api_key: API_KEY, language: LANGUAGE }
};

const id = ({ movieDetails }) => movieDetails.movieId

function* fetchMovieDetailsAsync() {
    try {
        const movieId = yield select(id);
        const { data } = yield call(fetchMovieDetailsApi, movieId, params);
        yield put(fetchMovieDetailsSuccessful(data));
    } catch(error) {
        yield put(fetchMovieDetailsFailed());
    }
}


export function* movieDetailsSaga () {
    yield takeEvery(FETCH_MOVIE_DETAILS, fetchMovieDetailsAsync);
}