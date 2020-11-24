
import axios from "./config";

/**
 * login focal person
 *
 * @function
 * @name login
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const login = (payload) =>
    axios
        .post(`/focal_people/login`, payload)
        .then((response) => response.data)


export default {
    login,
}
