import * as types from "./types";
import {makeActionCreator} from '../../../Util';


/**
 * @function
 * @name setProjectsSpatialData
 * @param {Array} payload transformed projects with spatial data
 */
export const setProjectsSpatialData = makeActionCreator(types.SET_PROJECTS_SPATIAL_DATA, 'payload');


// get projects by region
/**
 * @function
 * @name getProjectsByRegionStart
 * @param {String} payload region id
 */
 export const getProjectsByRegionStart = makeActionCreator(types.GET_PROJECTS_BY_REGION_START, 'payload');

/**
 * @function
 * @name getProjectsByRegionSuccess
 * @param {Array} payload fetched projects
 */
 export const getProjectsByRegionSuccess = makeActionCreator(types.GET_PROJECTS_BY_REGION_SUCCESS, 'payload');

/**
 * @function
 * @name getProjectsByRegionFailure
 * @param {Object} payload error object returned by server
 */
 export const getProjectsByRegionFailures = makeActionCreator(types.GET_PROJECTS_BY_REGION_FAILURE, 'payload');


// get region details
/**
 * @function
 * @name getRegionStart
 *  @param {String} payload region id
 */
 export const getRegionStart = makeActionCreator(types.GET_REGION_START, 'payload');

/**
 * @function
 * @name getRegionSuccess
 * @param {Array} payload fetched projects
 */
 export const getRegionSuccess = makeActionCreator(types.GET_REGION_SUCCESS, 'payload');

/**
 * @function
 * @name clearRegionDetails
 */
 export const clearRegionDetails = makeActionCreator(types.CLEAR_REGION_DETAILS);

/**
 * @function
 * @name getRegionFailure
 * @param {Object} payload error object returned by server
 */
 export const getRegionFailure = makeActionCreator(types.GET_REGION_FAILURE, 'payload');

// get region project statistics
/**
 * @function
 * @name getRegionProjectStatisticsStart
 *  @param {String} payload region id
 */
 export const getRegionProjectStatisticsStart = makeActionCreator(types.GET_REGION_PROJECT_STATISTICS_START, 'payload');

/**
 * @function
 * @name getRegionProjectStatisticsSuccess
 * @param {Array} payload fetched projects
 */
 export const getRegionProjectStatisticsSuccess = makeActionCreator(types.GET_REGION_PROJECT_STATISTICS_SUCCESS, 'payload');

/**
 * @function
 * @name getRegionProjectStatisticsFailure
 * @param {Object} payload error object returned by server
 */
 export const getRegionProjectStatisticsFailure = makeActionCreator(types.GET_REGION_PROJECT_STATISTICS_FAILURE, 'payload');


/**
 * @function
 * @name clearRegionProjectsStatistics
 */
export const clearRegionProjectsStatistics = makeActionCreator(types.CLEAR_REGION_PROJECTS_STATISTICS);



// get region project statistics
/**
 * @function
 * @name getProjectStatisticsStart
 *  @param {String} payload region id
 */
 export const getProjectStatisticsStart = makeActionCreator(types.GET_PROJECT_STATISTICS_START, 'payload');

/**
 * @function
 * @name getProjectStatisticsSuccess
 * @param {Array} payload fetched projects
 */
 export const getProjectStatisticsSuccess = makeActionCreator(types.GET_PROJECT_STATISTICS_SUCCESS, 'payload');

/**
 * @function
 * @name getProjectStatisticsFailure
 * @param {Object} payload error object returned by server
 */
 export const getProjectStatisticsFailure = makeActionCreator(types.GET_PROJECT_STATISTICS_FAILURE, 'payload');




// get region project statistics
/**
 * @function
 * @name getProjectStatisticsStart
 *  @param {String} payload region id
 */
 export const getProjectsStatisticsStart = makeActionCreator(types.GET_PROJECTS_STATISTICS_START, 'payload');

/**
 * @function
 * @name getProjectStatisticsSuccess
 * @param {Array} payload fetched projects
 */
 export const getProjectsStatisticsSuccess = makeActionCreator(types.GET_PROJECTS_STATISTICS_SUCCESS, 'payload');

/**
 * @function
 * @name clearProjectsStatistics
 */
 export const clearProjectsStatistics = makeActionCreator(types.CLEAR_PROJECTS_STATISTICS);

/**
 * @function
 * @name getProjectStatisticsFailure
 * @param {Object} payload error object returned by server
 */
 export const getProjectsStatisticsFailure = makeActionCreator(types.GET_PROJECTS_STATISTICS_FAILURE, 'payload');


// get project overview

/**
 * @function
 * @name getProjectsOverviewStart
 */
export const getProjectsOverviewStart = makeActionCreator(types.GET_PROJECTS_OVERVIEW_START);


/**
 * @function
 * @name clearProjectsOverview
 */
export const clearProjectsOverview = makeActionCreator(types.CLEAR_PROJECTS_OVERVIEW);



/**
 * @function
 * @name clearRegionProjects
 */
export const clearRegionProjects = makeActionCreator(types.CLEAR_REGION_PROJECTS);

/**
 * @function
 * @name getProjectsOverviewSuccess
 */
export const getProjectsOverviewSuccess = makeActionCreator(types.GET_PROJECTS_OVERVIEW_SUCCESS, 'payload');

/**
 * @function
 * @name getProjectsOverviewFailure
 */
export const getProjectsOverviewFailure = makeActionCreator(types.GET_PROJECTS_OVERVIEW_FAILURE, 'payload');

/**
 * @function
 * @name showMapLoader
 * @description initiate/stops map loader
 * @param {boolean} loaderStatus loader status
 */
export const showMapLoader = makeActionCreator(types.SHOW_MAP_LOADER, 'payload');


export function setInitiativesGeoJson(initiativesGeoJson) {
    return {
        type: types.SET_INITIATIVES_GEO_JSON,
        payload: initiativesGeoJson,
    };
}

export function setHumanResourceGeoJson(humanResourcesGeoJson) {
    return {
        type: types.SET_HUMAN_RESOURCES_GEO_JSON,
        payload: humanResourcesGeoJson,
    };
}

export function setShowFeatureDetails(bool = true) {
    return {
        type: types.SET_SHOW_FEATURE_DETAILS,
        payload: bool,
    };
}

export function setActiveMapSideMenuItem(active) {
    return {
        type: types.SET_ACTIVE_MAP_SIDE_MENU_ITEM,
        payload: active,
    };
}
