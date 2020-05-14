import axios from "axios";

// Homepage API's
export const fetchUpcomingMoviesApi = params =>
	axios.get("https://api.themoviedb.org/3/movie/upcoming", params);

export const fetchNowPlayingMoviesApi = params =>
	axios.get("https://api.themoviedb.org/3/movie/now_playing", params);

export const fetchPopularMoviesApi = params =>
	axios.get("https://api.themoviedb.org/3/movie/popular", params);

export const fetchTopRatedMoviesApi = params =>
	axios.get("https://api.themoviedb.org/3/movie/top_rated", params);

// Movie Details page API's
export const fetchMovieDetailsApi = (movieId, params) =>
	axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, params);

export const fetchMovieCreditsApi = (movieId, params) =>
	axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, params);

export const fetchMovieReviewsApi = (movieId, params) =>
	axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, params);

export const fetchSimilarMoviesApi = (movieId, params) =>
	axios.get(`https://api.themoviedb.org/3/movie/${movieId}/similar`, params);

// TV Shows API's
export const fetchPopularTVShowsApi = params =>
	axios.get("https://api.themoviedb.org/3/tv/popular", params);

export const fetchTopRatedTVShowsApi = params =>
	axios.get("https://api.themoviedb.org/3/tv/top_rated", params);
	
// TV Show Details API's
export const fetchTVShowDetailsApi = (tvShowId, params) =>
	axios.get(`https://api.themoviedb.org/3/tv/${tvShowId}`, params);

export const fetchTVShowCreditsApi = (movieId, params) =>
axios.get(`https://api.themoviedb.org/3/tv/${movieId}/credits`, params);

export const ffetchTVShowReviewsApi = (movieId, params) =>
	axios.get(`https://api.themoviedb.org/3/tv/${movieId}/reviews`, params);

export const fetchSimilarTVShowsApi = (movieId, params) =>
	axios.get(`https://api.themoviedb.org/3/tv/${movieId}/similar`, params);

// Search API's
export const fetchSearchResultsApi = params =>
	axios.get("https://api.themoviedb.org/3/search/multi", params);
