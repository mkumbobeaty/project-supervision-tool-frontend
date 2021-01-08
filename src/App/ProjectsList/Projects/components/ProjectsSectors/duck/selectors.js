/**
 * @function
 * @name getSectors
 * @param {Object} state redux state
 */

export const getSectorsSelector = (state) => state.sectorsData?.sectors

/**
 * @function
 * @name getProjectsShowFormSelector
 * @param {Object} state redux state
 */
export const getShowFormSelector = (state) => state?.sectorsData?.project_sectors?.showForm;

/**
 * @function
 * @name getLoadingSelector
 * @param {Object} state redux state
 */
export const getLoadingSelector = (state) => state?.sectorsData?.project_sectors?.posting;