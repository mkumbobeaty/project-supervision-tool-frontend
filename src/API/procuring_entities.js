
import axios from "./config";

/**
 * @function
 * @name getProcuringEntities
 * @description get Procuring Entities
 * */
const getProcuringEntities = (filter = {}) =>
    axios.get(`/procuring_entities`, {params: filter}).then((response) => response.data);

/**
 * detaches a project from list
 *
 * @function
 * @name deleteProcuringEntity
 * @version 0.1.0
 * @since 0.1.0
 */
const deleteProcuringEntity = (procuring_entity) => {
    return axios
        .delete(`procuring_entities/${procuring_entity}`)
        .then((response) => response.data);
};

/**
 * @function
 * @name createProcuringEntity
 * */
const createProcuringEntity = (details) =>
    axios.post(`/procuring_entities`, details).then((response) => response.data);

/**
 * edit existing procuring entity
 *
 * @function
 * @name updateProject
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const updateProcuringEntity = (project, id) => {
    return axios
        .patch(`/procuring_entities/${id}`, project)
        .then((response) => response.data);
};

/**
 * @function
 * @name getPackages
 * @description get getPackage
 * */
const getPackages = (filter = {}) =>
    axios.get(`/procuring_entity_packages`, {params: filter}).then((response) => response.data);

/**
 * @function
 * @name getPackage
 * @description get getPackage
 * */
const getPackage = (id) =>
    axios.get(`/procuring_entity_packages/${id}`).then((response) => response.data);
/**
 * detaches a project from list
 * @function
 * @name deletePackage
 * @version 0.1.0
 * @since 0.1.0
 */
const deletePackage = (package_id) => {
    return axios
        .delete(`procuring_entity_packages/${package_id}`)
        .then((response) => response.data);
};

/**
 * @function
 * @name createPackage
 * */
const createPackage = (details) =>
    axios.post(`/procuring_entity_packages`, details).then((response) => response.data);

/**
 * edit existing procuring entity
 *
 * @function
 * @name updatePackage
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const updatePackage = (project, id) => {
    return axios
        .patch(`/procuring_entity_packages/${id}`, project)
        .then((response) => response.data);
};

export default {
    getProcuringEntities,
    deleteProcuringEntity,
    createProcuringEntity,
    updateProcuringEntity,
    getPackage,
    getPackages,
    deletePackage,
    createPackage,
    updatePackage
}
