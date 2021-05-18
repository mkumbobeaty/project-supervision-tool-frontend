/**
 * @function
 * @name getProjectSelector
 * @param {Object} state redux state
 */
export const getProjectSelector = (state) => state.map.projects.selected?.data;


/**
 * @function
 * @name getProjectSelector
 * @param {Object} state redux state
 */
export const getProjectsSelector = (state) => state.map.projects.all?.data?.data || [];

/**
 * @function
 * @name getProjectsLoadingSelector
 * @param {Object} state redux state
 */
export const getProjectsLoadingSelector = (state) => state?.map?.projects?.all.loading;

/**
 * @function
 * @name getProjectLoadingSelector
 * @param {Object} state redux state
 */
export const getProjectLoadingSelector = (state) => state.map.projects.selected?.loading;
