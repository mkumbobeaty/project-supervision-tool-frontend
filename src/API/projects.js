
import axios from "./config";

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
        .post(`/projects`, project)
        .then((response) => response.data);


/**
 * Fetch all projects from API
 *
 */
const getProjects = () => {
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
 * @function
 * @name getProject
 *
 * @param {Object} id - Id of an Human resource
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const getProject = (id) => {
    return axios.get(`/projects/${id}`).then((response) => response.data);
}

/**
 * @function
 * @name getProjectsStatistics
 * @description returns statistic of a project when project id is provided
 * otherwise returns statistics  of specified project
 * @param {Object} id - Id of project
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const getProjectsStatistics = (id ='') => {
    return axios.get(`/projects/statistics${id}`, {params: {id}}).then((response) => response.data);
}

/**
 * Fetch all projects from API
 *
 */
const getCurrencies = () => {
    return axios.get(`/currencies`).then((response) => response.data);
}


export default {
    createProjects,
    getProjects,
    updateProject,
    deleteProject,
    getProject,
    getProjectsStatistics,
    getCurrencies,
}
