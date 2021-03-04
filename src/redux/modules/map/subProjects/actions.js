import {makeActionCreator} from "../../../../Util";
import * as types from "./types";


// retrieve a single sub project

/**
 * @function
 * @name getSubProjectStart
 * @param {Number} subProjectId
 * @return {Object} action
 * */
export const getSubProjectStart = makeActionCreator(types.GET_SUB_PROJECT_START, 'payload');

/**
 * @function
 * @name getSubProjectSuccess
 * @param {Object} payload sub project
 * @return {Object} action
 * */
export const getSubProjectSuccess = makeActionCreator(types.GET_SUB_PROJECT_SUCCESS, 'payload');

/**
 * @function
 * @name getSubProjectFailure
 * @param {Object} payload sub project failure response
 * @return {Object} action
 * */
export const getSubProjectFailure = makeActionCreator(types.GET_SUB_PROJECT_FAILURE, 'payload');


/**
 * @function
 * @name clearSubProject
 * @description clears sub project  in state
 * @return {Object} action
 */
export const clearSubProject = makeActionCreator(types.CLEAR_SUB_PROJECT);

// get region project statistics
/**
 * @function
 * @name getSubProjectStatisticsStart
 *  @param {String} payload region id
 */
export const getSubProjectStatisticsStart = makeActionCreator(types.GET_SUB_PROJECT_STATISTICS_START, 'payload');

/**
 * @function
 * @name getSubProjectStatisticsSuccess
 * @param {Array} payload fetched sub projects 
 */
 export const getSubProjectStatisticsSuccess = makeActionCreator(types.GET_SUB_PROJECT_STATISTICS_SUCCESS, 'payload');

/**
 * @function
 * @name getSubProjectStatisticsFailure
 * @param {Object} payload error object returned by server
 */
 export const getSubProjectStatisticsFailure = makeActionCreator(types.GET_SUB_PROJECT_STATISTICS_FAILURE, 'payload');

 /**
 * @function
 * @name clearSubProjectStatistics
 * @description clears sub project  in state
 * @return {Object} action
 */
export const clearSubProjectStatistics = makeActionCreator(types.CLEAR_SUB_PROJECTS_STATISTICS);

/**
 * @function
 * @name showNationalSubProjectsOverview
 * @param {Boolean} payload value to ether show or hide
 */
export const showNationalSubProjectsOverview = makeActionCreator(types.SHOW_NATIONAL_SUB_PROJECTS_OVERVIEW, 'payload');

/**
 * @function
 * @name showSubProjectsOverview
 * @param {Boolean} payload value to ether show or hide
 */
export const showSubProjectsOverview = makeActionCreator(types.SHOW_SUB_PROJECTS_OVERVIEW, 'payload');

/**
 * @function
 * @name showSubProjectsByRegion
 * @param {Boolean} payload value to ether show or hide
 */
export const showSubProjectsByRegion = makeActionCreator(types.SHOW_REGIONAL_SUB_PROJECTS_OVERVIEW, 'payload');

/**
 * @function
 * @name showRegionSubProjectsOverview
 * @param {Boolean} payload value to ether show or hide
 */
export const showRegionSubProjectsOverview = makeActionCreator(types.SHOW_REGIONAL_SUB_PROJECTS_OVERVIEW, 'payload');

/**
 * @function
 * @name getSubProjectOverviewStart
 *  @param {String} payload region id
 */
export const getSubProjectOverviewStart = makeActionCreator(types.GET_SUB_PROJECTS_OVERVIEW_START, 'payload');

/**
 * @function
 * @name getSubProjectOverviewSuccess
 */
export const getSubProjectOverviewSuccess = makeActionCreator(types.GET_SUB_PROJECTS_OVERVIEW_SUCCESS, 'payload');

/**
 * @function
 * @name getSubProjectOverviewFailure
 */
export const getSubProjectOverviewFailure = makeActionCreator(types.GET_SUB_PROJECTS_OVERVIEW_FAILURE, 'payload');


/**
 * @function
 * @name clearSubProjectOverview
 * @description clears sub project  in state
 * @return {Object} action
 */
export const clearSubProjectOverview = makeActionCreator(types.CLEAR_SUB_PROJECTS_OVERVIEW);

// get sub projects by region
/**
 * @function
 * @name getSubProjectsByRegionStart
 * @param {String} payload region id
 */
export const getSubProjectsByRegionStart = makeActionCreator(types.GET_SUB_PROJECTS_REGIONS_OVERVIEW_START, 'payload');

/**
 * @function
 * @name getSubProjectsByRegionSuccess
 * @param {Array} payload fetched projects
 */
 export const getSubProjectsByRegionSuccess = makeActionCreator(types.GET_SUB_PROJECTS_REGIONS_OVERVIEW_SUCCESS, 'payload');

/**
 * @function
 * @name getSubProjectsByRegionFailure
 * @param {Object} payload error object returned by server
 */
 export const getSubProjectsByRegionFailures = makeActionCreator(types.GET_SUB_PROJECTS_REGIONS_OVERVIEW_FAILURE, 'payload');

 /**
 * @function
 * @name clearRegionProjects
 */
export const clearRegionSubProjects = makeActionCreator(types.CLEAR_SUB_PROJECTS_REGIONS_OVERVIEW);

/**
 * @function
 * @name getRegionSubProjectStatisticsStart
 * @description trigger get region subproject statics api
 * that returns statistics of that region
 *  @param {String} payload region id
 */
 export const getRegionSubProjectStatisticsStart = makeActionCreator(types.GET_REGION_SUB_PROJECT_STATISTICS_START, 'payload');

/**
 * @function
 * @name getRegionSubProjectStatisticsSuccess
 * @description returns subproject statistics based on that region
 * @param {Array} payload fetched sub projects
 */
 export const getRegionSubProjectStatisticsSuccess = makeActionCreator(types.GET_REGION_SUB_PROJECT_STATISTICS_SUCCESS, 'payload');

/**
 * @function
 * @name getRegionSubProjectStatisticsFailure
 * @param {Object} payload error object returned by server
 */
 export const getRegionSubProjectStatisticsFailure = makeActionCreator(types.GET_REGION_SUB_PROJECT_STATISTICS_FAILURE, 'payload');
