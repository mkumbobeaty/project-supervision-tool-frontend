
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

export default {
    getProcuringEntities,
    deleteProcuringEntity,
    createProcuringEntity,
    updateProcuringEntity
}
