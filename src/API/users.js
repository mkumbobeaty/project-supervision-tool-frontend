import axios from "./config";

/**
 * @function
 * @name getUsers
 * @description get project sectors
 * */
const getUsers = () =>
    axios.get(`/users`).then((response) => response.data);


    export default {
        getUsers,
        
    }