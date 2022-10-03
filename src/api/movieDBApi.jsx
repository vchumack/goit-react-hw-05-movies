import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = 'b97b15a6557134236e51fc0964baa8bb';

export function getTrendingMovies() {

   return axios.get(`/trending/movie/week?api_key=${KEY}`)

}

export function getMoviesByQuery(query) {
   return axios.get(`/search/movie?api_key=${KEY}&query=${query}&page=1&include_adult=false`)
}

export function getMovieById(id) {
   return axios.get(`/movie/${id}?api_key=${KEY}`)
}