

import axios from "./config";

/**
 * @function
 * @name createMoney
 * @description creates an instance of money
 * */
const createMoney =(payload) =>
    axios.post(`/money`, payload).then((response) => response.data);

  /**
 * @function
 * @name updateMoney
 * @description creates an instance of money
 * */

const updateMoney = (payload, id) => {
    debugger
    return axios
        .patch(`/money/${id}`, payload)
        .then((response) => response.data);
};

export default {
    createMoney,
    updateMoney
}
