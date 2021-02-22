import {makeActionCreator} from "../../../../Util";
import * as types from "./types";


/**
 * @function
 * @name getProjectStart
 * @param {Number} projectId
 * @return {Object} action
 * */
export const getProjectStart = makeActionCreator(types.GET_PROJECT_START, 'payload');

/**
 * @function
 * @name getProjectSuccess
 * @param {Object} payload project
 * @return {Object} action
 * */
export const getProjectSuccess = makeActionCreator(types.GET_PROJECT_SUCCESS, 'payload');

/**
 * @function
 * @name getProjectFailure
 * @param {Object} payload project failure response
 * @return {Object} action
 * */
export const getProjectFailure = makeActionCreator(types.GET_PROJECT_FAILURE, 'payload');

/**
 * @function
 * @name clearProject
 * @description clears project  in state
 * @return {Object} action
 */
export const clearProject = makeActionCreator(types.CLEAR_PROJECT);
