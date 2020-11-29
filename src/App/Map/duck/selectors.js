

/**
 * @function
 * @name getActiveMapSideMenuItem
 * @param {Object} state redux state
 */
export const getActiveMapSideMenuItem = (state) => state?.map?.config?.activeMapSideMenuItem;

/**
 * @function
 * @name getMapLoadingSelector
 * @param {Object} state redux state
 */
export const getMapLoadingSelector = (state) => state?.map?.mapLoading;

/**
 * @function
 * @name getProjectsOverview
 * @param {Object} state redux state
 */
export const getProjectsOverview = (state) => state?.map?.projectOverview?.data;

/**
 * @function
 * @name getProjectsStatistics
 * @param {Object} state redux state
 */
export const getProjectsStatistics = (state) => state?.map?.projectsStatistics?.data;

/**
 * @function
 * @name getRegionProjectsSelector
 * @param {Object} state redux state
 */
export const getRegionProjectsSelector = (state) => state?.map?.regionProjects?.data;


/**
 * @function
 * @name getRegionDetailsSelector
 * @param {Object} state redux state
 */
export const getRegionDetailsSelector = (state) => state?.map?.regionDetails?.data;
