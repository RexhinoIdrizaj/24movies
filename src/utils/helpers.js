import { Platform } from "react-native";

/**
 * @category
 * Utils
 * @function
 * filterWantedMovies
 * @param   {object[]} result movies results contains movies, tvShows and people
 * @return  {object[]}        filtered result without people
 */

export const filterWantedMovies = (result) => {
  return result.filter(
    (el) => el.media_type === "tv" || el.media_type === "movie",
  );
};

/**
 * @category
 * Utils
 * @function
 * getGenreIds
 * @param   {object[]} genres         an array of genre objects
 * @param   {string[]} requiredGenres an array of genre names
 * @return  {number[]}                an array of genre is's
 */

export const getGenreIds = (genres, requiredGenres) => {
  let genreIds = [];
  requiredGenres.forEach((el) => {
    const genre = genres.find((genre) => genre.name === el);
    if (genre) {
      genreIds = [...genreIds, genre.id];
    }
  });
  return genreIds;
};

/**
 * @category
 * Utils
 * @function
 * getGenreName
 * @param   {object[]} genres         an array of genre objects
 * @param   {number} genreId       id
 * @return  {string}               genre name
 */

export const getGenreName = (genres, genreId) => {
  const existingGenre = genres.find((genre) => genre.id === genreId);
  return existingGenre ? existingGenre.name : "";
};

/**
 * @category
 * Utils
 * @function
 * navigate
 * @param   {object} navigation       an array of genre objects
 * @param   {string} screenToGo       Screen name
 * @param   {object} [params={}]           object of params to be used in the screen
 * @return  {void}
 */

export const navigate = (navigation, screenToGo, params = {}) => {
  Platform.isTV
    ? navigation.replace(screenToGo, params)
    : navigation.navigate(screenToGo, params);
};
