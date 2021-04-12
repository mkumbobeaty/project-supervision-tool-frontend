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


/**
 * @function
 * @name getSubProjectsStart
 * @param {Number} subProjectId
 * @return {Object} action
 * */
export const getSubProjectsStart = makeActionCreator(types.GET_SUB_PROJECTS_START, 'payload');

/**
 * @function
 * @name getSubProjectsSuccess
 * @param {Object} payload sub project
 * @return {Object} action
 * */
export const getSubProjectsSuccess = makeActionCreator(types.GET_SUB_PROJECTS_SUCCESS, 'payload');

/**
 * @function
 * @name getSubProjectsFailure
 * @param {Object} payload sub project failure response
 * @return {Object} action
 * */
export const getSubProjectsFailure = makeActionCreator(types.GET_SUB_PROJECTS_FAILURE, 'payload');


/**
 * @function
 * @name clearSubProjects
 * @description clears sub project  in state
 * @return {Object} action
 */
export const clearSubProjects = makeActionCreator(types.CLEAR_SUB_PROJECTS);

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
 * @name showDistrictsSubProjectsOverview
 * @param {Boolean} payload value to ether show or hide
 */
export const showDistrictsSubProjectsOverview = makeActionCreator(types.SHOW_DISTRICTS_SUB_PROJECTS_OVERVIEW, 'payload');

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

/**
 * @function
 * @name getDistrictsSubProjectsOverviewStart
 *  @param {String} payload region id
 */
export const getDistrictsSubProjectsOverviewStart = makeActionCreator(types.GET_DISRTRICTS_SUB_PROJECTS_OVERVIEW_START, 'payload');

/**
 * @function
 * @name getDistrictsSubProjectsOverviewSuccess
 * @param {Array} payload fetched projects
 */
 export const getDistrictsSubProjectsOverviewSuccess = makeActionCreator(types.GET_DISRTRICTS_SUB_PROJECTS_OVERVIEW_SUCCESS, 'payload');

/**
 * @function
 * @name clearProjectsStatistics
 */
 export const clearDistrictsPerRegion = makeActionCreator(types.CLEAR_DISRTRICTS_SUB_PROJECTS_OVERVIEW);

/**
 * @function
 * @name getDistrictsSubProjectsOverviewFailure
 * @param {Object} payload error object returned by server
 */
 export const getDistrictsSubProjectsOverviewFailure = makeActionCreator(types.GET_DISRTRICTS_SUB_PROJECTS_OVERVIEW_FAILURE, 'payload');


 export function getDistrictsStart(region_id) {
    return {
      type: types.GET_DISTRICTS_START,
      payload:region_id
    };
  }
  
  export function getDistrictsSuccess(districts) {
    return {
      type: types.GET_DISTRICTS_SUCCESS,
      payload: districts,
    };
  }
  
  export function getDistrictsFailure(error) {
    return {
      type: types.GET_DISTRICTS_FAILURE,
      payload: error,
    };
  }


/**
 * @function
 * @name getSubProjectTypesStart
 */
export const getSubProjectTypesStart = makeActionCreator(types.GET_SUB_PROJECT_TYPES_START);

/**
 * @function
 * @name getSubProjectTypesSuccess
 * @param {Array} payload fetched sub-projects types
 */
 export const getSubProjectTypesSuccess = makeActionCreator(types.GET_SUB_PROJECT_TYPES_SUCCESS, 'payload');

/**
 * @function
 * @name getSubProjectTypesFailure
 * @param {Object} payload error object returned by server
 */
 export const getSubProjectTypesFailure = makeActionCreator(types.GET_SUB_PROJECT_TYPES_FAILURE, 'payload');

/**
 * @function
 * @name getSubProjectStatusStart
 */
export const getSubProjectStatusStart = makeActionCreator(types.GET_SUB_PROJECT_STATUS_START);

/**
 * @function
 * @name getSubProjectStatusSuccess
 * @param {Array} payload fetched projects
 */
 export const getSubProjectStatusSuccess = makeActionCreator(types.GET_SUB_PROJECT_STATUS_SUCCESS, 'payload');

/**
 * @function
 * @name getSubProjectStatusFailure
 * @param {Object} payload error object returned by server
 */
 export const getSubProjectStatusFailure = makeActionCreator(types.GET_SUB_PROJECT_STATUS_FAILURE, 'payload');

 /**
 * @function
 * @name setSubProjectTypesFilter
 * @param {Object} payload 
 * @return {Object} action
 * */
export const setSubProjectTypesFilter = makeActionCreator(types.SET_SUB_PROJECT_TYPES_FILTER, 'payload');

/**
 * @function
 * @name setSubProjectStatusFilter
 * @param {Object} payload 
 * @return {Object} action
 * */
export const setSubProjectStatusFilter = makeActionCreator(types.SET_SUB_PROJECT_STATUS_FILTER, 'payload');

/**
 * @function
 * @name setSubProjectDistrictFilter
 * @param {Object} payload 
 * @return {Object} action
 * */
export const setSubProjectDistrictFilter = makeActionCreator(types.SET_SUB_PROJECT_DISTRICT_FILTER, 'payload');

/**
 * @function
 * @name setProjectRegionsFilter
 * @param {Object} payload 
 * @return {Object} action
 * */
export const setSubProjectRegionsFilter = makeActionCreator(types.SET_SUB_PROJECT_REGIONS_FILTER, 'payload');

/**
 * @function
 * @name setSubProjectComponentFilter
 * @param {Object} payload 
 * @return {Object} action
 * */
export const setSubProjectComponentFilter = makeActionCreator(types.SET_SUB_PROJECT_COMPONENT_FILTER, 'payload');

/**
 * @function
 * @name setSubProjectContractorFilter
 * @param {Object} payload 
 * @return {Object} action
 * */
export const setSubProjectContractorFilter = makeActionCreator(types.SET_SUB_PROJECT_CONTRACTOR_FILTER, 'payload');

/**
 * @function
 * @name getContractorsStart
 */
export const getContractorsStart = makeActionCreator(types.GET_CONTRACTORS_START);

/**
 * @function
 * @name getContractorsSuccess
 * @param {Array} payload fetched contractors
 */
 export const getContractorsSuccess = makeActionCreator(types.GET_CONTRACTORS_SUCCESS, 'payload');

/**
 * @function
 * @name getContractorsFailure
 * @param {Object} payload error object returned by server
 */
 export const getContractorsFailure = makeActionCreator(types.GET_CONTRACTORS_FAILURE, 'payload');
