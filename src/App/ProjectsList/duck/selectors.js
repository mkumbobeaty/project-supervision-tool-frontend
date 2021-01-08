


/**
 * @function
 * @name getProjectSelector
 * @param {Object} state redux state
 */
export const getProjectSelector = (state) => state?.resources?.project?.data;

/**
 * @function
 * @name getSubProjectSeslector
 * @param {Object} state redux state
 * @return {Object} sub project
 */
export const getSubProjectsSelector = (state) => state?.resources?.sub_projects?.data;


/**
 * @function
 * @name getSubProjectSelector
 * @param {Object} state redux state
 * @return {Object} sub project
 */
export const getSubProjectSelector = (state) => state?.resources?.subProject?.data;

/**
 * @function
 * @name getSubProjectSelector
 * @param {Object} state redux state
 * @return {Object} sub project element
 */
export const getSubProjectElementSelector = (state) => state?.resources?.subProjectElement?.data;

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
export const getLocationsSelector = (state) => state?.resources?.locations;

/**
 * @function
 * @name getProjectLocation
 * @param {Object} state redux state
 */
export const getProjectLocationSelector = (state) => state?.resources?.locations?.project_location?.data;
/**
 * @function
 * @name getRegionsSelector
 * @param {Object} state redux state
 */
export const getRegionsSelector = (state) => state?.resources?.regions;

/**
 * @function
 * @name getDistrictsSelector
 * @param {Object} state redux state
 */

 export const getDistrictsSelector = (state) => state?.resources?.districts

 /**
 * @function
 * @name isLoadingSelector
 * @param {Object} state redux state
 * @return {boolean} isLoading
 * */
export const isLoadingSelector = (state) => state.resources.locations.isLoading;
