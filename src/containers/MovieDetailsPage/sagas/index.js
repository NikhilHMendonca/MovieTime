import { takeEvery, call, put, select } from "redux-saga/effects";
import {
	FETCH_MOVIE_DETAILS,
	FETCH_MOVIE_REVIEWS,
	FETCH_MOVIE_CREDITS,
	FETCH_SIMILAR_MOVIES,
	SAVE_WATCHLIST_MOVIE,
	SAVE_FAVOURITE_MOVIE,
	FETCH_IS_MOVIE_SAVED
} from "../constants";
import { API_KEY, LANGUAGE } from "../../../constants";
import {
	fetchMovieDetailsApi,
	fetchMovieCreditsApi,
	fetchMovieReviewsApi,
	fetchSimilarMoviesApi,
	saveWatchlistMovieApi,
	saveFavouriteMovieApi,
	fetchIsMovieSavedApi
} from "../../../api";
import {
	fetchMovieDetailsSuccessful,
	fetchMovieDetailsFailed,
	fetchMovieCreditsSuccessful,
	fetchMovieCreditsFailed,
	fetchMovieReviewsSuccessful,
	fetchMovieReviewsFailed,
	fetchSimilarMoviesSuccessful,
	fetchSimilarMoviesFailed,
	saveWatchlistMovieSuccessful,
	saveWatchlistMovieFailed,
	saveFavouriteMovieSuccessful,
	saveFavouriteMovieFailed,
	fetchIsMovieSavedFailed,
	fetchIsMovieSaved,
	fetchIsMovieSavedSuccessful
} from "../actions";

const params = {
	params: { api_key: API_KEY, language: LANGUAGE }
};

const id = ({ movieDetails }) => movieDetails.movieId;
const aId = ({ profileDetails }) => profileDetails.user.id;
// const sId = ({ profileDetails }) => profileDetails.sessionId;
const movie = ({ movieDetails }) => movieDetails.movie;
const mId = ({ movieDetails }) => movieDetails.movieId;
const sMovie = ({ movieDetails }) => movieDetails.savedMovie;

function* fetchMovieDetailsAsync() {
	try {
		const movieId = yield select(id);
		const { data } = yield call(fetchMovieDetailsApi, movieId, params);
		yield put(fetchMovieDetailsSuccessful(data));
	} catch (error) {
		yield put(fetchMovieDetailsFailed());
	}
}

function* fetchMovieCreditsAsync() {
	try {
		const movieId = yield select(id);
		const {
			data: { cast }
		} = yield call(fetchMovieCreditsApi, movieId, params);
		yield put(fetchMovieCreditsSuccessful(cast));
	} catch (error) {
		yield put(fetchMovieCreditsFailed());
	}
}

function* fetchMovieReviewsAsync() {
	try {
		const movieId = yield select(id);
		const {
			data: { results }
		} = yield call(fetchMovieReviewsApi, movieId, params);
		yield put(fetchMovieReviewsSuccessful(results));
	} catch (error) {
		yield put(fetchMovieReviewsFailed());
	}
}

function* fetchSimilarMoviesAsync() {
	try {
		const movieId = yield select(id);
		const {
			data: { results }
		} = yield call(fetchSimilarMoviesApi, movieId, params);
		yield put(fetchSimilarMoviesSuccessful(results));
	} catch (error) {
		yield put(fetchSimilarMoviesFailed());
	}
}

function* savingWatchlistMovieAsync() {
	try {
		const accountId = yield select(aId);
		const sessionId = localStorage.getItem("sessionId");
		const movieDetails = yield select(movie);
		const savedMovie = yield select(sMovie);
		yield call(
			saveWatchlistMovieApi,
			accountId,
			{
				media_type: "movie",
				media_id: movieDetails.id,
				watchlist: !savedMovie.watchlist
			},
			{ params: { api_key: API_KEY, session_id: sessionId } }
		);
		yield put(saveWatchlistMovieSuccessful());
		yield put(fetchIsMovieSaved(movieDetails.id));
	} catch (error) {
		yield put(saveWatchlistMovieFailed());
	}
}
function* savingFavouriteMovieAsync() {
	try {
		const accountId = yield select(aId);
		const sessionId = localStorage.getItem("sessionId");
		const movieDetails = yield select(movie);
		const savedMovie = yield select(sMovie);
		yield call(
			saveFavouriteMovieApi,
			accountId,
			{
				media_type: "movie",
				media_id: movieDetails.id,
				favorite: !savedMovie.favorite
			},
			{ params: { api_key: API_KEY, session_id: sessionId } }
		);
		yield put(saveFavouriteMovieSuccessful());
		yield put(fetchIsMovieSaved());
	} catch (error) {
		yield put(saveFavouriteMovieFailed());
	}
}

function* fetchIsMovieSavedAsync() {
	try {
		const sessionId = localStorage.getItem("sessionId");
		const movieId = yield select(mId);
		const params = {
			params: {
				api_key: API_KEY,
				session_id: sessionId
			}
		};
		const { data } = yield call(fetchIsMovieSavedApi, movieId, params);
		yield put(fetchIsMovieSavedSuccessful(data));
	} catch (error) {
		yield put(fetchIsMovieSavedFailed());
	}
}

export function* movieDetailsSaga() {
	yield takeEvery(FETCH_MOVIE_DETAILS, fetchMovieDetailsAsync);
	yield takeEvery(FETCH_MOVIE_REVIEWS, fetchMovieReviewsAsync);
	yield takeEvery(FETCH_MOVIE_CREDITS, fetchMovieCreditsAsync);
	yield takeEvery(FETCH_SIMILAR_MOVIES, fetchSimilarMoviesAsync);
	yield takeEvery(SAVE_WATCHLIST_MOVIE, savingWatchlistMovieAsync);
	yield takeEvery(SAVE_FAVOURITE_MOVIE, savingFavouriteMovieAsync);
	yield takeEvery(FETCH_IS_MOVIE_SAVED, fetchIsMovieSavedAsync);
}
