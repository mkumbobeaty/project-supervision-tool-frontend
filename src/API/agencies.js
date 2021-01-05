
import axios from "./config";

/**
 * @function
 * @name getBorrower
 * @description get project borrower
 * */
const getBorrowers = () =>
    axios.get(`/borrowers`).then((response) => response.data);

export default {
    getBorrowers,
}