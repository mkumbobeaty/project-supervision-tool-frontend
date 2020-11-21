

/**
 * @function
 * @name getActiveMapSideMenuItem
 * @param {Object} state redux state
 */
export const getActiveMapSideMenuItem = (state) => state?.map?.config?.activeMapSideMenuItem;

/**
 * @function
 * @name getProjectsOverview
 * @param {Object} state redux state
 */
export const getProjectsOverview = (state) => state?.map?.projectOverview?.data;
