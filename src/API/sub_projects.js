
import axios from "./config";

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


export default {
    getSubProject,
}
