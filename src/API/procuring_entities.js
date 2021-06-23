
import axios from "./config";

/**
 * @function
 * @name getProcuringEntities
 * @description get Procuring Entities
 * */
const getProcuringEntities = () =>
    axios.get(`/procuring_entities`).then((response) => response.data);


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

export default {
    getProcuringEntities,
    deleteProcuringEntity
}