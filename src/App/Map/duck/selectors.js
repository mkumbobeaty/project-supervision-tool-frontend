

/**
 * @function
 * @name showProjectsOverviewSelector
 * @param {Object} state redux state
 * @return {Boolean} showProjectOverview status
 */
export const showProjectsOverviewSelector = (state) => state?.map?.sideNavMenu?.showProjectsOverview;


/**
 * @function
 * @name showNationalOverviewSelector
 * @param {Object} state redux state
 * @return {Boolean} showProjectOverview status
 */
export const showNationalOverviewSelector = (state) => state?.map?.sideNavMenu?.showNationalOverview;

/**
 * @function
 * @name showRegionalOverviewSelector
 * @param {Object} state redux state
 * @return {Boolean} showProjectOverview status
 */
export const showRegionalOverviewSelector = (state) => state?.map?.sideNavMenu?.showRegionalOverview;

/**
 * @function
 * @name getActiveMapSideMenuItem
 * @param {Object} state redux state
 */
export const getActiveMapSideMenuItem = (state) => state?.map?.sideNavMenu?.activeSideNavMenuItem;

/**
 * @function
 * @name showProjectDetailsSelector
 * @param {Object} state redux state
 * @return {Boolean} showProjectDetails status
 */
export const showProjectDetailsSelector = (state) => state?.map?.sideNavMenu?.showProjectDetails;

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
 * @name getRegionProjectsStatistics
 * @param {Object} state redux state
 */
export const getRegionProjectsStatistics = (state) => state?.map?.regionProjectsStatistics?.data;

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


/**
 * @function
 * @name selectedRegionIdSelector
 * @param {Object} state redux state
 */
export const selectedRegionIdSelector = (state) => state?.map?.regionDetails?.selectedRegionId;
