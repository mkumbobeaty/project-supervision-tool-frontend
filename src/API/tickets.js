
import axios from "./config";

/**
 * @function
 * @name getTickets
 * @description get tickets
 * */
const getTickets = () =>
    axios.get(`/tickets`).then((response) => response.data);


/**
 * Get a ticket from the API
 * @function
 * @name getTicket
 * @param {Object} id - Id of an ticket
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const getTicket = (id) => {
    return axios.get(`/tickets/${id}`).then((response) => response.data);
}

export default {
    getTickets,
    getTicket
}