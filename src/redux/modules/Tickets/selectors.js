/**
 * @function
 * @name getTickets
 * @param {Object} state redux state
 */

export const getTickets = (state) => state?.ticketsResource?.tickets?.data;
