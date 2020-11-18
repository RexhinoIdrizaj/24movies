import axios from "axios";
import { MAIN_URL, TMDB_API_KEY } from "../../constants/config";
import { filterWantedMovies } from "../../utils/helpers";

export const LOADING = "LOADING";
export const SAVE_GENRES = "SAVE_GENRES";
export const SAVE_POPULAR_MOVIES = "SAVE_POPULAR_MOVIES";
export const SAVE_POPULAR_TV_SHOWS = "SAVE_POPULAR_TV_SHOWS";
export const SAVE_MOVIE_WITH_GENRE = "SAVE_MOVIE_WITH_GENRE";
export const SAVE_SEARCH_RESULT = "SAVE_SEARCH_RESULT";
export const SAVE_TREND_SEARCH = "SAVE_TREND_SEARCH";

export const loading = (payload) => {
  return {
    type: LOADING,
    payload,
  };
};

export const saveGenres = (payload) => {
  return {
    type: SAVE_GENRES,
    payload,
  };
};
export const savePopularMovies = (payload) => {
  return {
    type: SAVE_POPULAR_MOVIES,
    payload,
  };
};
export const savePopularTvShows = (payload) => {
  return {
    type: SAVE_POPULAR_TV_SHOWS,
    payload,
  };
};
export const saveMoviesWithGenre = (payload) => {
  return {
    type: SAVE_MOVIE_WITH_GENRE,
    payload,
  };
};
export const saveSearchResult = (payload) => {
  return {
    type: SAVE_SEARCH_RESULT,
    payload,
  };
};
export const saveTrendSearch = (payload) => {
  return {
    type: SAVE_TREND_SEARCH,
    payload,
  };
};

export const getGenres = (callback) => {
  return async (dispatch) => {
    try {
      let response = await axios.get(
        `${MAIN_URL}/genre/movie/list?api_key=${TMDB_API_KEY}`,
      );
      dispatch(saveGenres(response.data.genres));
    } catch (err) {
      console.log("err gettingGenres: ", err);
    } finally {
      callback();
    }
  };
};

export const getPopularMovies = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get(
        `${MAIN_URL}/movie/popular?api_key=${TMDB_API_KEY}`,
      );
      dispatch(savePopularMovies(response.data.results));
    } catch (err) {
      console.log("err getPopularMovies: ", err);
      dispatch(savePopularMovies(null));
    }
  };
};

export const getPopularTvShows = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get(
        `${MAIN_URL}/tv/popular?api_key=${TMDB_API_KEY}`,
      );
      dispatch(savePopularTvShows(response.data.results));
    } catch (err) {
      dispatch(savePopularTvShows(null));
    }
  };
};

export const getMoviesWithGenre = (genreId) => {
  return async (dispatch) => {
    try {
      let response = await axios.get(
        `${MAIN_URL}/discover/movie?api_key=${TMDB_API_KEY}&include_adult=false&with_genres=${genreId}`,
      );
      // save all movies with genre as an object genreId for each entry.
      const movieWithGenre = {
        [genreId]: {
          id: genreId,
          results: response.data.results,
        },
      };
      dispatch(saveMoviesWithGenre(movieWithGenre));
    } catch (err) {
      console.log("err getMoviesWithGenre: ", err);
    }
  };
};

export const search = (query) => {
  return async (dispatch) => {
    dispatch(loading(true));
    try {
      let response = await axios.get(
        `${MAIN_URL}/search/multi?api_key=${TMDB_API_KEY}&query=${query}`,
      );
      const wantedResult = filterWantedMovies(response.data.results);
      dispatch(saveSearchResult(wantedResult));
    } catch (err) {
      console.log("err getPopularTvShows: ", err);
    } finally {
      dispatch(loading(false));
    }
  };
};

export const getTrendSearch = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get(
        `${MAIN_URL}/trending/all/day?api_key=${TMDB_API_KEY}`,
      );
      const wantedResult = filterWantedMovies(response.data.results);
      dispatch(saveTrendSearch(wantedResult));
    } catch (err) {
      console.log("err getTrendSearch: ", err);
    }
  };
};
