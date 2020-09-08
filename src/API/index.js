// const url = process.env.REACT_APP_API_URL;
import Axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_URL || "https://pamoja-backend.herokuapp.com";
Axios.defaults.baseURL = `${API_BASE_URL}/api/v1`;

/**
 * Axios public instance
 */
const axios = Axios.create({
  headers: {
    Accept: "application/json",
  },
});

/**
 * Fetch all Human resource from API
 *
 */
export const fetchHumanResources = (params = {}) =>
  axios.get(`/human_resources`, { params }).then((response) => response.data);

/**
 * get all items from API
 * */
export const getItems = () =>
  axios.get(`/hr_types`).then((response) => response.data);

/**
 * get all agencies from API
 * */
export const getAgencies = () =>
  axios.get(`/implementing_partners`).then((response) => response.data);

/**
 * get all regions from API
 * */
export const getRegions = () =>
  axios.get(`/locations/regions`).then((response) => response.data);

/**
 * get all districts from API
 * */
export const getDistricts = (regionId) =>
  axios.get(`/locations/districts/${regionId}`).then((response) => response.data);

/**
 * create new human resource
 *
 * @function
 * @name createHumanResource
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export const createHumanResource = (humanResource) =>
  axios
    .post(`/human_resources`, humanResource)
    .then((response) => response.data);

/**
 * login focal person
 *
 * @function
 * @name createHumanResource
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export const login = (payload) =>
  axios
    .post(`/focal_people/login`, payload)
    .then((response) => response.data);

/**
 * edit existing human resources
 *
 * @function
 * @name editHumanResources
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export const updateHumanResource = (humanResource, id) => {
  return axios
    .patch(`/human_resources/${id}`, humanResource)
    .then((response) => response.data);
};

/**
 * detaches a human resource from list
 *
 * @function
 * @name deleteHumanResource
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export const deleteHumanResource = (humanResource_id) => {
  return axios
    .delete(`human_resources/${humanResource_id}`)
    .then((response) => response.data);
};

/**
 * Get a human resource from the API
 *
 * @function
 * @name getHumanResource
 *
 * @param {Object} id - Id of an Human resource
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getHumanResource(id) {
  return Axios.get(`/human_resources/${id}`).then((response) => response.data);
}

/**
 * Search human resource from the API
 *
 * @function
 * @name getHumanResource
 *
 * @param {Object} id - Id of an Human resource
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function searchHumanResource(searchValue) {
  return Axios.get(`/human_resources?q=${searchValue}`).then((res) => res.data);
}


/**
 * get saddaInitiative from API
 *
 */
 export const fetchInitiatives = (params = {}) =>
    axios.get(`/initiatives`, { params }).then((response) => response.data);

/**
 * create new Initiative
 *
 * @function
 * @name createInitiative
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export const createInitiative= initiative =>
    axios.post(`/initiatives`, initiative).then(response => response.data);


/**
 * edit existing Initiatives
 *
 * @function
 * @name editHumanResources
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export const updateInitiative = (initiative, id) => {
  return axios.patch(`/human_resources/${id}`, initiative).then(response => response.data);
}

/**
* detaches a Initiative from list
*
* @function
* @name deleteInitiative
*
* @version 0.1.0
* @since 0.1.0
*/
export const deleteInitiative = (initiative_id) => {
  return axios.delete(`human_resources/${initiative_id}`).then(response => response.data);
}
