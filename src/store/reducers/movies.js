import {
  LOADING,
  SAVE_GENRES,
  SAVE_POPULAR_TV_SHOWS,
  SAVE_POPULAR_MOVIES,
  SAVE_MOVIE_WITH_GENRE,
  SAVE_SEARCH_RESULT,
  SAVE_TREND_SEARCH,
} from "../actions/movies";

const initialState = {
  loading: false,
  genres: [],
  popularMovies: [],
  popularTvShows: [],
  moviesWithGenre: {},
  searchResult: [],
  trendSearch: [],
};

/**
 * @category
 * Redux
 * @description
 * reducer to handle movies state
 * @function
 * moviesReducer
 * @param {object} state  : contain initial and final state of data
 * @param {object} action :return the action object
 */

const movies = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    /**
     * Action Creator - requestData
     * This action is use to call the service to get the device info list
     */
    case LOADING:
      return {
        ...state,
        loading: payload,
      };
    case SAVE_GENRES:
      return {
        ...state,
        genres: payload,
      };
    case SAVE_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: payload,
      };
    case SAVE_POPULAR_TV_SHOWS:
      return {
        ...state,
        popularTvShows: payload,
      };
    case SAVE_MOVIE_WITH_GENRE:
      return {
        ...state,
        moviesWithGenre: {
          ...state.moviesWithGenre,
          ...payload,
        },
      };
    case SAVE_SEARCH_RESULT:
      return {
        ...state,
        searchResult: payload,
      };
    case SAVE_TREND_SEARCH:
      return {
        ...state,
        trendSearch: payload,
      };
    default:
      return state;
  }
};

export default movies;
