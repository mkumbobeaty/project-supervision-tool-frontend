/**
 * @function
 * @name getSectors
 * @param {Object} state redux state
 */

export const getSectors = (state) => state.sectorsData?.sectors

/**
 * @function
 * @name getProjectsShowFormSelector
 * @param {Object} state redux state
 */
export const getShowFormSelector = (state) => state?.sectorsData.project_sectors.showForm;
