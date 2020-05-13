import { takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_POPULAR_TV_SHOWS, FETCH_TOP_RATED_TV_SHOWS } from '../constants';
import { fetchPopularTVShowsApi, fetchTopRatedTVShowsApi } from '../../../api';
import { API_KEY, LANGUAGE } from '../../../constants';
import { fetchPopularTvShowsSuccessful, fetchPopularTvShowsFailed, fetchTopRatedTvShowsSuccessful, fetchTopRatedTvShowsFailed } from '../actions';
// import { fetchLatestTvShow } from '../actions';

const params = {
	params: { api_key: API_KEY, language: LANGUAGE }
};

function* fetchPopularTvShowsAsync() {
    try{
        const { data } = yield call(fetchPopularTVShowsApi, params);
        yield put(fetchPopularTvShowsSuccessful(data.results));
    } catch(error){
        yield put(fetchPopularTvShowsFailed());
    }
 }

function* fetchTopRatedTvShowsAsync() {
    try{
        const { data } = yield call(fetchTopRatedTVShowsApi, params);
        yield put(fetchTopRatedTvShowsSuccessful(data.results));
    } catch(error){
        yield put(fetchTopRatedTvShowsFailed());
    }
 }

export function* tvShowsSaga() {
    yield takeEvery(FETCH_POPULAR_TV_SHOWS, fetchPopularTvShowsAsync);
    yield takeEvery(FETCH_TOP_RATED_TV_SHOWS, fetchTopRatedTvShowsAsync);
}