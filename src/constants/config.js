import axios from "axios";

/**
 * @category
 * Config
 * @type {string} Api key used to make TMBD calls
 */
export const TMDB_API_KEY = "bf7a9dfbe2ac4f237b1a35e7796e9c4b";

/**
 * @category
 * Config
 * @type {string} Main url used to make TMBD calls
 */
export const MAIN_URL = "https://api.themoviedb.org/3";

/**
 * @category
 * Config
 * @type {string} Constant to display images
 */
export const IMAGE_URL = "https://image.tmdb.org/t/p/w780";

/**
 * @category
 * Config
 * @description
 * Used to save main url as axios default
 * @function
 * @returns {void}
 */
export const initializeAxios = () => {
  axios.defaults.baseURL = MAIN_URL;
};
