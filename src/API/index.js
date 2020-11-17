// const url = process.env.REACT_APP_API_URL;
import Axios from "axios";

const API_BASE_URL ="https://pamoja-backend.herokuapp.com";
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
 * get all funding organisations from API
 * */
export const getFundingOrganisations = () =>
    axios.get(`/funding_organisations`).then((response) => response.data);

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
 * create new Project
 *
 * @function
 * @name createProject
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export const createProjects = (project) =>
    axios
        .post(`/human_resources`, project)
        .then((response) => response.data);

/**
 * login focal person
 *
 * @function
 * @name createProjects
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export const login = (payload) =>
    axios
        .post(`/focal_people/login`, payload)
        .then((response) => response.data)
        .catch(err => err)

/**
 * Fetch all projects from API
 *
 */
export const getProjects = () =>
axios.get(`https://api.github.com/repos/octocat/Hello-World/issues`).then((response) => response.data);


/**
 * edit existing human resources
 *
 * @function
 * @name edit Projects
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export const updateProject = (project, id) => {
    return axios
        .patch(`/human_resources/${id}`, project)
        .then((response) => response.data);
};

/**
 * detaches a project from list
 *
 * @function
 * @name deleteProject
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export const deleteProject = (project) => {
    return axios
        .delete(`human_resources/${project}`)
        .then((response) => response.data);
};

/**
 * Get a projects from the API
 *
 * @function
 * @name getProjects
 *
 * @param {Object} id - Id of an Human resource
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function getProject(id) {
    return Axios.get(`/human_resources/${id}`).then((response) => response.data);
}

/**
 * Search projects from the API
 *
 * @function
 * @name getProjects
 *
 * @param {Object} id - Id of an Project
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function searchProjects(searchValue) {
    return Axios.get(`/human_resources?q=${searchValue}`).then((res) => res.data);
}


/**
 * get saddaInitiative from API
 *
 */
export const fetchInitiatives = (params = {}) =>
    axios.get(`/initiatives`, {params}).then((response) => response.data);

/**
 * get initiative types
 *
 */
export const fetchInitiativeTypes = (params = {}) =>
    axios.get(`/initiative_types`, {params}).then((response) => response.data);

/**
 * get actor types
 *
 */
export const fetchActorTypes = (params = {}) =>
    axios.get(`/actor_types`, {params}).then((response) => response.data);

/**
 * create new Initiative
 *
 * @function
 * @name createInitiative
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export const createInitiative = initiative =>
    axios.post(`/initiatives`, initiative).then(response => response.data);


/**
 * edit existing Initiatives
 *
 * @function
 * @name editProjectss
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
