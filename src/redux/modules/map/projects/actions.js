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


/**
 * @function
 * @name getProjectsStart
 * @param {Number} projectId
 * @return {Object} action
 * */
export const getProjectsStart = makeActionCreator(types.GET_PROJECTS_START, 'payload');

/**
 * @function
 * @name getProjectsSuccess
 * @param {Object} payload project
 * @return {Object} action
 * */
export const getProjectsSuccess = makeActionCreator(types.GET_PROJECTS_SUCCESS, 'payload');

/**
 * @function
 * @name getProjectsFailure
 * @param {Object} payload project failure response
 * @return {Object} action
 * */
export const getProjectsFailure = makeActionCreator(types.GET_PROJECTS_FAILURE, 'payload');

/**
 * @function
 * @name clearProjects
 * @description clears project  in state
 * @return {Object} action
 */
export const clearProjects = makeActionCreator(types.CLEAR_PROJECTS);
