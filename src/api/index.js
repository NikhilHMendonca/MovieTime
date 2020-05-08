import axios from 'axios';
        
export const fetchUpcomingMoviesApi = (params) => axios.get('https://api.themoviedb.org/3/movie/upcoming', params);