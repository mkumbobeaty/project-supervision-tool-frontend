

import axios from "./config";

/**
 * @function
 * @name createMoney
 * @description creates an instance of money
 * */
const createMoney =(payload) =>
    axios.post(`/money`, payload).then((response) => response.data);

export default {
    createMoney
}
