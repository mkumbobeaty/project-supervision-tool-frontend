

import axios from "./config";

/**
 * Get a sub project element from the API
 * @function
 * @name getSubProjectElement
 *
 * @param {Object} id - Id of sub project element
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const getSubProjectElement = (id) => axios.get(`/sub_project_items/${id}`).then((response) => response.data);


export default {
    getSubProjectElement,
}
