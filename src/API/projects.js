
import axios from "./config";

// projects

/**
 * @function
 * @name getProjectOverview
 * @description get project overview per region
 * */
const getProjectOverview = () =>
    axios.get(`/locations/regions/projects_overview`).then((response) => response.data);


/**
 * @function
 * @name getProjectsByRegion
 * @param {string} region_id
 * @description get projects based on region
 * */
const getProjectsByRegion = (region_id) =>
    axios.get(`/locations/regions/${region_id}/projects`).then((response) => response.data);


/**
 * @function
 * @name getRegionDetails
 * @param {string} id
 * @description get details of a region
 * */
const getRegionDetails = (id) =>
    axios.get(`/locations/region/${id}`).then((response) => response.data);


/**
 * get all items from API
 * */
const getItems = () =>
    axios.get(`/hr_types`).then((response) => response.data);

/**
 * get all agencies from API
 * */
const getAgencies = () =>
    axios.get(`/implementing_partners`).then((response) => response.data);


/**
 * get all funding organisations from API
 * */
const getFundingOrganisations = () =>
    axios.get(`/funding_organisations`).then((response) => response.data);

/**
 * get all regions from API
 * */
const getRegions = () =>
    axios.get(`/locations/regions`).then((response) => response.data);

/**
 * get all districts from API
 * */
const getDistricts = (regionId) =>
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
const createProjects = (project) =>
    axios
        .post(`/human_resources`, project)
        .then((response) => response.data);

/**
 * login focal person
 *
 * @function
 * @name login
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const login = (payload) =>
    axios
        .post(`/focal_people/login`, payload)
        .then((response) => response.data)

/**
 * Fetch all projects from API
 *
 */
const getProjects = () => {
    console.log('inside get projects');
    return axios.get(`/projects`).then((response) => response.data);
}


/**
 * edit existing human resources
 *
 * @function
 * @name updateProject
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const updateProject = (project, id) => {
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
const deleteProject = (project) => {
    return axios
        .delete(`human_resources/${project}`)
        .then((response) => response.data);
};

/**
 * Get a projects from the API
 *
 * @function
 * @name getProject
 *
 * @param {Object} id - Id of an Human resource
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function getProject(id) {
    return axios.get(`/projects/${id}`).then((response) => response.data);
}

/**
 * Search projects from the API
 *
 * @function
 * @name searchProjects
 *
 * @param {Object} id - Id of an Project
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function searchProjects(searchValue) {
    return axios.get(`/human_resources?q=${searchValue}`).then((res) => res.data);
}


/**
 * get saddaInitiative from API
 *
 */
const fetchInitiatives = (params = {}) =>
    axios.get(`/initiatives`, {params}).then((response) => response.data);

/**
 * get initiative types
 *
 */
const fetchInitiativeTypes = (params = {}) =>
    axios.get(`/initiative_types`, {params}).then((response) => response.data);

/**
 * get actor types
 *
 */
const fetchActorTypes = (params = {}) =>
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
const createInitiative = initiative =>
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
const updateInitiative = (initiative, id) => {
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
const deleteInitiative = (initiative_id) => {
    return axios.delete(`human_resources/${initiative_id}`).then(response => response.data);
}

export default {
    getProjectOverview,
    getProjectsByRegion,
    getRegionDetails,
    getItems,
    getAgencies,
    getFundingOrganisations,
    getRegions,
    getDistricts,
    createProjects,
    login,
    getProjects,
    updateProject,
    deleteProject,
    getProject,
    searchProjects,
    fetchInitiatives,
    fetchInitiativeTypes,
    fetchActorTypes,
    createInitiative,
    updateInitiative,
    deleteInitiative,
}
