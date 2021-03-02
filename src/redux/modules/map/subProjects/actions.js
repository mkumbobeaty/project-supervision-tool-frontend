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


