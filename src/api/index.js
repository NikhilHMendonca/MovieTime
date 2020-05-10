import axios from 'axios';
 
// Homepage API's
export const fetchUpcomingMoviesApi = (params) => axios.get('https://api.themoviedb.org/3/movie/upcoming', params);

export const fetchNowPlayingMoviesApi = (params) => axios.get('https://api.themoviedb.org/3/movie/now_playing', params);

export const fetchPopularMoviesApi = (params) => axios.get('https://api.themoviedb.org/3/movie/popular', params);

export const fetchTopRatedMoviesApi = (params) => axios.get('https://api.themoviedb.org/3/movie/top_rated', params);

// Movie Details page API's
export const fetchMovieDetailsApi = (movieId, params) => axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, params);