
import axios from "./config";

/**
 * @function
 * @name getSectors
 * @description get project sectors
 * */
const getSectors = () =>
    axios.get(`/sectors`).then((response) => response.data);


export default {
    getSectors
}