import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

export default {
  getPopularMovies: () =>
    axios
      .get(`${BASE_URL}/movie/popular`, {
        params: { api_key: process.env.TMDB_API_KEY },
      })
      .then((res) => res.data)
      .catch((error) => console.error(error)),
};
