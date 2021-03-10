import axios from "./config";

/**
 * @function
 * @name getUsers
 * @description get Users
 * */
const getUsers = () =>
    axios.get(`/users`).then((response) => response.data);


/**
 * detaches a User from list
 *
 * @function
 * @name deleteUser
 *
 * @version 0.1.0
 * @since 0.1.0
 */
 const deleteUser = (User) => {
    return axios
        .delete(`users/${User}`)
        .then((response) => response.data);
};

export default {
    getUsers,
    deleteUser,
}