
import axios from "./config";

/**
 *
 * @function
 * @name getSubProjectSurveys
 * @description Get a sub project survey from the API
 * @param {Object} params
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const getSubProjectSurveys = (params = {}) => {
    return axios.get(`/sub_project_surveys/`, { params: { page: params.page, per_page: 10 } }).then((response) => response.data);
}


/**
 * @function
 * @name getSubProjectSurvey
 * @description Get a sub project from the API
 * @param {Object} id - Id of a sub project survey
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const getSubProjectSurvey = (id) => axios.get(`/sub_project_surveys/${id}`).then((response) => response.data);

/**
 *
 * @function
 * @name deleteSubProjectSurvey
 * @param {number} id
 * @version 0.1.0
 * @since 0.1.0
 */
const deleteSubProjectSurvey = (id) => {
    return axios
        .delete(`sub_project_surveys/${id}`)
        .then((response) => response.data);
};


/**
 * @function
 * @name createSubProjectSurvey
 *  @param {Object} payload
 * @version 0.1.0
 * @since 0.1.0
 */
const createSubProjectSurvey = (payload) =>
    axios
        .post(`/sub_project_surveys`, payload)
        .then((response) => response.data);


/**
 *
 * Edit a sub project item from the API
 * @function
 * @name editSubProjectSurvey
 * @param {number} id - Id of a sub project survey
 * @param {number} payload - Id of a sub project survey
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const updateSubProjectSurvey = (payload, id) => {
    return axios
        .patch(`/sub_project_surveys/${id}`, payload)
        .then((response) => response.data);
};


export default {
    getSubProjectSurveys,
    getSubProjectSurvey,
    deleteSubProjectSurvey,
    createSubProjectSurvey,
    updateSubProjectSurvey,
}
