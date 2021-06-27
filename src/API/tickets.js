
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

/**
 * @function
 * @name getTicketsByProject
 * @param {string} id
 * @description get projects statistics based on region
 * */
const getTicketsByProject= (id) =>
    axios.get(`/projects/${id}/tickets`).then((response) => response.data);

    /**
 * @function
 * @name getTicketsBySubProjectId
 * @param {string} id
 * @description get projects statistics based on region
 * */
const getTicketsBySubProjectId= (id) =>
axios.get(`/sub_projects/${id}/tickets`).then((response) => response.data);

/**
 * @function
 * @name openSubProjectTicket
 * */
const openSubProjectTicket =(details) => 
axios.post(`/sub_projects/create_ticket`, details).then((response) => response.data);

export default {
    getTickets,
    getTicket,
    getTicketsByProject,
    getTicketsBySubProjectId,
    openSubProjectTicket
}