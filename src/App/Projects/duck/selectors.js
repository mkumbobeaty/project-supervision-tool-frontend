


/**
 * @function
 * @name getProjectSelector
 * @param {Object} state redux state
 */
export const getProjectSelector = (state) => state?.resources?.project?.data;

/**
 * @function
 * @name getProjectsSelector
 * @param {Object} state redux state
 */
export const getProjectsSelector = (state) => state?.resources?.Projects?.data;

/**
 * @function
 * @name getCreatedProjectSelector
 * @param {Object} state redux state
 */
export const getCreatedProjectSelector = (state) => state?.resources?.Projects?.project?.data;

/**
 * @function
 * @name getProjectsLoadingSelector
 * @param {Object} state redux state
 */
export const getProjectsLoadingSelector = (state) => state?.resources?.Projects?.loading;

/**
 * @function
 * @name getProjectsPageSelector
 * @param {Object} state redux state
 */
export const getProjectsPageSelector = (state) => state?.resources?.Projects?.page;

/**
 * @function
 * @name getProjectsTotalSelector
 * @param {Object} state redux state
 */
export const getProjectsTotalSelector = (state) => state?.resources?.Projects?.total;

/**
 * @function
 * @name getProjectsShowFormSelector
 * @param {Object} state redux state
 */
export const getProjectsShowFormSelector = (state) => state?.resources?.Projects?.showForm;

/**
 * @function
 * @name getLocations
 * @param {Object} state redux state
 */
export const getLocations = (state) => state?.resources?.locations;

/**
 * @function
 * @name getProjectLocation
 * @param {Object} state redux state
 */
export const getProjectLocation = (state) => state?.resources?.locations?.project_location?.data;
/**
 * @function
 * @name getRegions
 * @param {Object} state redux state
 */
export const getRegions = (state) => state?.resources?.regions;

/**
 * @function
 * @name getDistricts
 * @param {Object} state redux state
 */

 export const getDistricts = (state) => state?.resources?.districts

 /**
 * @function
 * @name isLoadingSelector
 * @param {Object} state redux state
 * @return {boolean} isLoading
 * */
export const isLoadingSelector = (state) => state.resources.locations.isLoading;
