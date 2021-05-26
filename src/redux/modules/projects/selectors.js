
/**
 * @function
 * @name getProjectsSelector
 * @param {Object} state redux state
 */
export const getProjectsSelector = (state) => state?.resources?.Projects?.data?.data || [];

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
 * @name getProjectSelector
 * @param {Object} state redux state
 */
export const getProjectSelector = (state) => state?.resources?.project?.data;

/**
 * @function
 * @name getProjectLoadingSelector
 * @param {Object} state redux state
 */
export const getProjectLoadingSelector = (state) => state?.resources?.project?.loading;
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

// /**
//  * @function
//  * @name getProjectsPageSelector
//  * @param {Object} state redux state
//  */
// export const getProjectsPageSelector = (state) => state?.resources?.Projects?.data?.current_page;

// /**
//  * @function
//  * @name getProjectsTotalSelector
//  * @param {Object} state redux state
//  */
// export const getProjectsTotalSelector = (state) => state?.resources?.Projects?.data?.total;

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
 * @return {Array} regions
 */
export const getRegionsSelector = (state) => state?.resources?.regions;


/**
 * @function
 * @name getEnvironmentalCategoriesSelector
 * @param {Object} state redux state
 * @return {Array} environmentalCategories
 */
export const getEnvironmentalCategoriesSelector = (state) => state?.resources?.environmentalCategories.data;


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


/**
 * @function
 * @name getSubProjectsSelector
 * @param {Object} state redux state
 * @return {Object} sub project
 */
export const getSubProjectsSelector = (state) => state?.resources?.sub_projects?.data;

/**
 * @function
 * @name getSubProjectsLoadingSelector
 * @param {Object} state redux state
 */
export const getSubProjectsLoadingSelector = (state) => state?.resources?.sub_projects?.loading;

/**
 * @function
 * @name getSubProjectSelector
 * @param {Object} state redux state
 * @return {Object} sub project
 */
export const getSubProjectSelector = (state) => state?.resources?.subProject?.data;

/**
 * @function
 * @name getSubProjectLoadingSelector
 * @param {Object} state redux state
 */
export const getSubProjectLoadingSelector = (state) => state?.resources?.subProject?.loading;

/**
 * @function
 * @name getSubProjectShowFormSelector
 * @param {Object} state redux state
 * @return {Object} sub project
 */
export const getSubProjectShowFormSelector = (state) => state?.resources?.subProject?.showForm;

/**
 * @function
 * @name getShowSurveyFormSelector
 * @param {Object} state redux state
 * @return {Object} sub project
 */
export const getShowSurveyFormSelector = (state) => state?.resources?.subProject?.showSurveyForm;

/**
 * @function
 * @name getShowCreateSurveyFormSelector
 * @param {Object} state redux state
 * @return {Object} sub project
 */
export const getShowCreateSurveyFormSelector = (state) => state?.resources?.subProject?.showCreateSurveyForm;

/**
 * @function
 * @name getSubProjectSelector
 * @param {Object} state redux state
 * @return {Object} sub project element
 */
export const getSubProjectElementSelector = (state) => state?.resources?.subProjectElement?.data;

/**
 * @function
 * @name getItemsSelector
 * @param {Object} state redux state
 * @return {Object} item
 */
export const getItemsSelector = (state) => state?.resources?.items?.data;

/**
 * @function
 * @name getProgressSelector
 * @param {Object} state redux state
 * @return {Object} progress
 */
export const getProgressSelector = (state) => state?.resources?.progress?.data;

/**
 * @function
 * @name selectedProject
 * @param {Object} state redux state
 */
export const selectedProject = (state) => state?.resources?.selectedProject

/**
 * @function
 * @name getProjectStatusSelector
 * @param {Object} state redux state
 * @return {Object} progress
 */
export const getProjectStatusSelector = (state) => state?.resources?.projectStatus?.data;

/**
 * @function
 * @name getProjectsFilterSelector
 * @param {Object} state redux state
 * @return {Object} progress
 */
export const getProjectsFilterSelector = (state) => state?.resources?.projectsFilter?.data?.data || [];


/**
 * @function
 * @name searchQuery
 * @param {Object} state redux state
 * @return {Object} progress
 */
export const searchQuery = (state) => state?.resources?.search.data;
