
import axios from "./config";

/**
 * Get a sub project from the API
 * @function
 * @name getSubProjects
 *
 * @param {Object} id - Id of a sub project
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const getSubProjects = () => axios.get(`/sub_projects/`).then((response) => response.data);

/**
 * Get a sub project from the API
 * @function
 * @name getSubProject
 *
 * @param {Object} id - Id of a sub project
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const getSubProject = (id) => axios.get(`/sub_projects/${id}`).then((response) => response.data);


/**
 * @function
 * @name deleteSubProject
 *@param {Number} id
 * @version 0.1.0
 * @since 0.1.0
 */
const deleteSubProject = (id) => {
    return axios
        .delete(`sub_projects/${id}`)
        .then((response) => response.data);
};



/**
 * @function
 * @name createSubProject
 * @version 0.1.0
 * @since 0.1.0
 */
const createSubProject = (subProject) =>
    axios
        .post(`/sub_projects`, subProject)
        .then((response) => response.data);


export default {
    getSubProjects,
    getSubProject,
    deleteSubProject,
    createSubProject
}
