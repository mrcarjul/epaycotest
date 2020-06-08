import axios from "axios";

const API_URL = `https://restcountries.eu`;
/**
 * Manages the api calls and returns the available endpoints
 * @param {string} baseURL Url to be used for api calls
 */
const create = (baseURL = API_URL) => {
  const api = axios.create({
    baseURL,
    timeout: 25000,
  });

  /**
   * @description Retrieve countries information
   */
  const getCountries = () => api.get(`/rest/v2/all`);

  return {
    getCountries,
  };
};

const API = create();

export default API;
