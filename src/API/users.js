import axios from "./config";

/**
 * @function
 * @name getUsers
 * @description get project sectors
 * */
const getUsers = () =>
    axios.get(`/items`).then((response) => response.data);


    export default {
        getUsers,
        
    }