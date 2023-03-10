import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=939f46f8e67634ae915c756cc4f73b14';

//get trending movies
export const getMovieData = async () => {
  const response = await axios.get(`${BASE_URL}/movie/popular?${API_KEY}`);
  //console.log("Movie Response:  " + JSON.stringify(response.data, null, 2))
  return response.data.results;
};

//upcoming movies
export const getUpComingMovie = async () => {
  const response = await axios.get(`${BASE_URL}/movie/upcoming?${API_KEY}`);
  // console.log('UpcomingMovie:' + JSON.stringify(response.data.) )
  return response.data.results;
};

//popular tv
export const getPopularTV = async () => {
  const response = await axios.get(`${BASE_URL}/tv/popular?${API_KEY}`);
  return response.data.results;
};

//get family movies
export const getFamilyMovies = async () => {
  const response = await axios.get(`${BASE_URL}/discover/movie?${API_KEY}&with_genres=10751`);
  return response.data.results
}

//top rated movies
export const getTopRatedMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/top_rated?${API_KEY}`);
  return response.data.results;
}

//get documentary
export const getDocumentary = async () => {
  const response = await axios.get(`${BASE_URL}/discover/movie?${API_KEY}&with_genres=99`);
  return response.data.results;
}

//getmovie details for detailsScreen
export const getMovieDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}?${API_KEY}`);
  return response.data;
}

//search Movie or tv
export const searchMovie = async (query,type) => {
  const response = await axios.get(`${BASE_URL}/search/${type}?${API_KEY}&query=${query}`);
  return response.data.results;
}
