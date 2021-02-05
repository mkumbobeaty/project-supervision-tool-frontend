
import axios from "./config";

/**
 * @function
 * @name getItems
 * @description get project sectors
 * */
const getItems = () =>
    axios.get(`/items`).then((response) => response.data);


export default {
    getItems,
    
}