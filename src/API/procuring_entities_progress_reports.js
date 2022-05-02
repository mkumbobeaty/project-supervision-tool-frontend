
import axios from "./config";

/**
 * @function
 * @name getProcuringEntities
 * @description get Procuring Entities
 * */
 const getProcuringEntitiesProgressReports = (filter = {}) =>
 axios.get(`/procuring_entity_reports`, {params: filter}).then((response) => response.data);

 export default {
        getProcuringEntitiesProgressReports
 }
