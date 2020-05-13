import { takeEvery, call, put, select } from 'redux-saga/effects';
import { FETCH_MOVIE_DETAILS, FETCH_MOVIE_REVIEWS, FETCH_MOVIE_CREDITS, FETCH_SIMILAR_MOVIES } from '../constants';
import { API_KEY, LANGUAGE } from '../../../constants';
import { fetchMovieDetailsApi, fetchMovieCreditsApi, fetchMovieReviewsApi, fetchSimilarMoviesApi } from '../../../api';
import { fetchMovieDetailsSuccessful, fetchMovieDetailsFailed, fetchMovieCreditsSuccessful, fetchMovieCreditsFailed, fetchMovieReviewsSuccessful, fetchMovieReviewsFailed, fetchSimilarMoviesSuccessful, fetchSimilarMoviesFailed } from '../actions';

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

function* fetchMovieCreditsAsync() {
    try {
        const movieId = yield select(id);
        const { data : { cast } } = yield call(fetchMovieCreditsApi, movieId, params);
        yield put(fetchMovieCreditsSuccessful(cast));
    } catch(error) {
        yield put(fetchMovieCreditsFailed());
    }
}

function* fetchMovieReviewsAsync() {
    try {
        const movieId = yield select(id);
        const { data: { results } } = yield call(fetchMovieReviewsApi, movieId, params);
        yield put(fetchMovieReviewsSuccessful(results));
    } catch(error) {
        yield put(fetchMovieReviewsFailed());
    }
}

function* fetchSimilarMoviesAsync() {
    try {
        const movieId = yield select(id);
        const { data: { results } } = yield call(fetchSimilarMoviesApi, movieId, params);
        yield put(fetchSimilarMoviesSuccessful(results));
    } catch(error) {
        yield put(fetchSimilarMoviesFailed());
    }
}


export function* movieDetailsSaga () {
    yield takeEvery(FETCH_MOVIE_DETAILS, fetchMovieDetailsAsync);
    yield takeEvery(FETCH_MOVIE_REVIEWS, fetchMovieReviewsAsync);
    yield takeEvery(FETCH_MOVIE_CREDITS, fetchMovieCreditsAsync);
    yield takeEvery(FETCH_SIMILAR_MOVIES, fetchSimilarMoviesAsync);
}