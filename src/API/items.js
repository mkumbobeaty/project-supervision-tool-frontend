
import axios from "./config";

/**
 * @function
 * @name getItems
 * @description get project sectors
 * */
const getItems = () =>
    axios.get(`/items`).then((response) => response.data);

/**
 * @function
 * @name createItems
 * */
const createItems =(details) => 
axios.post(`/sub_project_items`, details).then((response) => response.data);

export default {
    getItems,
    createItems
}