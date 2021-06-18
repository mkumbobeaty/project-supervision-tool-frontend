
import axios from "./config";

/**
 * @function
 * @name getTickets
 * @description get tickets
 * */
const getTickets = () =>
    axios.get(`/tickets`).then((response) => response.data);

export default {
    getTickets,
}