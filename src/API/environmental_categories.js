

import axios from "./config";

/**
 * Get a sub project element from the API
 * @function
 * @name getEnvironmentalCategories
 *
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const getEnvironmentalCategories = () => axios.get(`/environmental_categories`).then((response) => response.data);


export default {
    getEnvironmentalCategories,
}
