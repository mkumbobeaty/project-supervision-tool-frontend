

/**
 * @function
 * @name showProjectsOverviewSelector
 * @param {Object} state redux state
 * @return {Boolean} showProjectOverview status
 */
export const showProjectsOverviewSelector = (state) => state?.map?.sideNavMenu?.showProjectsOverview;

/**
 * @function
 * @name getWfsLayerDataSelector
 * @param {Object} state redux state
 * @return {Boolean} wfsLayerData
 */
export const getWfsLayerDataSelector = (state) => state?.map?.wfsLayer.data;


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
 * @name showSubProjectElementDetailsSelector
 * @param {Object} state redux state
 * @return {Boolean} showProjectDetails status
 */
export const showSubProjectElementDetailsSelector = (state) => state?.map?.sideNavMenu?.showSubProjectElementDetails;

/**
 * @function
 * @name showSubProjectDetailsSelector
 * @param {Object} state redux state
 * @return {Boolean} showProjectDetails status
 */
export const showSubProjectDetailsSelector = (state) => state?.map?.sideNavMenu?.showSubProjectDetails;

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
export const getProjectsStatistics = (state) => state?.map?.projectStatistics?.data;

/**
 * @function
 * @name getProjectsStatisticsLoading
 * @param {Object} state redux state
 */
export const getProjectsStatisticsLoading = (state) => state?.map?.projectsStatistics?.loading;

/**
 * @function
 * @name getRegionProjectsStatistics
 * @param {Object} state redux state
 */
export const getRegionProjectsStatistics = (state) => state?.map?.regionProjectsStatistics?.data;

/**
 * @function
 * @name regionProjectsStatisticsLoader
 * @param {Object} state redux state
 */
export const regionProjectsStatisticsLoader = (state) => state?.map?.regionProjectsStatistics?.loading;


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
