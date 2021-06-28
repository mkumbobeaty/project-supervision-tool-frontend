
import axios from "./config";

/**
 * Get a sub project from the API
 * @function
 * @name getSubProjects
 *
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 * @param filter
 */
const getSubProjects = (filter = {}) => {
    return axios.get(`/sub_projects/`, {params: filter}).then((response) => response.data);
}


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
 * detaches a sub projects from list
 * @function
 * @name deleteSubProject
 * @version 0.1.0
 * @since 0.1.0
 */
const deleteSubProject = (sub_project_is) => {
    return axios
        .delete(`sub_projects/${sub_project_is}`)
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


/**
 * @function
 * @name createSubProjectDetails
 * @version 0.1.0
 * @since 0.1.0
 */
const createSubProjectDetails = (subProjectDetails) =>
    axios
        .post(`/sub_project_details`, subProjectDetails)
        .then((response) => response.data);


const getSubProjectItems = () => axios.get('/sub_project_items').then(response => response.data);

/**
 * creating  sub project item
 * @function
 * @name createSubProjectItem
 * @param {Object} id
 * @returns {Promise}
 */
const createSubProjectItem = (values) => { axios.post('/sub_project_items', values).then((response) => response.data) };

/**
 * 
 * Get a sub project item from the API
 * @function
 * @name getSubProjectEquipments
 * @param {Object} id - Id of a sub project equipment
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const getSubProjectEquipments = () => axios.get(`/sub_project_equipments`).then((response) => response.data);

/**
 * 
 * Edit a sub project item from the API
 * @function
 * @name editSubProject
 * @param {Object} id - Id of a sub project
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const updateSubProject = (subProject, id) => {
    return axios
        .patch(`/sub_projects/${id}`, subProject)
        .then((response) => response.data);
};


/**
 * @function
 * @name uploadPhotos
 * @version 0.1.0
 * @since 0.1.0
 */
const uploadPhotos = (sub_project_id, payload) =>  {
    return   axios
    .post(`/sub_projects/${sub_project_id}/upload_photo`, payload)
    .then((response) => response.data);
}

const getSubProjectsStatistics = () => axios.get('/sub_projects/statistics').then((response)=> response.data);

/**
 * 
 * Get a sub project types from the API
 * @function
 * @name getSubProjectTypes
 * @param {Object} id - Id of a sub project type
 * @returns {Promise}
 * @version 0.1.0
 * @since 0.1.0
 */
const getSubProjectTypes = () => axios.get(`/sub_project_types`).then((response) => response.data);

/**
 * 
 * Get a sub project status from the API
 * @function
 * @name getSubProjectStatus
 * @param {Object} id - Id of a sub project status
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const getSubProjectStatus = () => axios.get(`/sub_project_status`).then((response) => response.data);

/**
 * 
 * Get a sub project procuring entity packages from the API
 * @function
 * @name getProcuringEntity
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const getProcuringEntity = (id) => axios.get(`/procuring_entities/${id}`).then((response) => response.data);

export default {
    getSubProjects,
    getSubProject,
    deleteSubProject,
    createSubProject,
    createSubProjectDetails,
    getSubProjectItems,
    getSubProjectEquipments,
    createSubProjectItem,
    updateSubProject,
    getSubProjectsStatistics,
    uploadPhotos,
    getSubProjectStatus,
    getSubProjectTypes,
    getProcuringEntity
}
