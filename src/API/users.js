import axios from "./config";

/**
 * @function
 * @name getUsers
 * @description get Users
 * */
const getUsers = () =>
    axios.get(`/users`).then((response) => response.data);

/**
 * create new User
 *
 * @function
 * @name createUser
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const createUsers = (user) => {
    console.log(user)
    axios.post(`/users`, user ).then((response) => console.log(response.data));
}
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
    createUsers,
    deleteUser,
}