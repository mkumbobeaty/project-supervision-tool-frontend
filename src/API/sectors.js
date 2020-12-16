
import axios from "./config";

/**
 * @function
 * @name getSectors
 * @description get project sectors
 * */
const getSectors = () =>
    axios.get(`/sectors`).then((response) => response.data);

/**
 * @function
 * @name getSectors
 * @description get project sectors
 * */
const createProjectSectors =(project_sector) => 
axios.post(`/project_sectors`, project_sector).then((response) => response.data);


export default {
    getSectors,
    createProjectSectors
}