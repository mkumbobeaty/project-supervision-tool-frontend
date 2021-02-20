/**
 * @function
 * @name getSubProjectSelector
 * @param {Object} state redux state
 */
export const getSubProjectSelector = (state) => state.map.subProjects.selected?.data;
