/**
 * @function
 * @name getTickets
 * @param {Object} state redux state
 */

export const getTickets = (state) => state?.ticketsResource?.tickets?.data;

/**
 * @function
 * @name loading
 * @param {Boolean} state redux state
 */
export const loading = (state) => state?.ticketsResource?.tickets?.loading;
