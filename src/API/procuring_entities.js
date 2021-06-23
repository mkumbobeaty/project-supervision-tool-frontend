
import axios from "./config";

/**
 * @function
 * @name getProcuringEntities
 * @description get Procuring Entities
 * */
const getProcuringEntities = () =>
    axios.get(`/procuring_entities`).then((response) => response.data);


export default {
    getProcuringEntities,
}