
import { makeActionCreator } from '../../../Util';
import * as types from './types'

//  SubProjects
export function getSubProjectsStart(params) {
  return {
    type: types.GET_SUB_PROJECTS_START,
    payload:params
  };
}

export function getSubProjectsSuccess(sub_projects) {
  return {
    type: types.GET_SUB_PROJECTS_SUCCESS,
    payload:sub_projects,
  };
}

export function getSubProjectsFailure(message) {
  return {
    type: types.GET_SUB_PROJECTS_FAILURE,
    message,
  };
}

/**
 * @function
 * @name getSubProjectItemsStart
 * @return {Object} action
 * */
export const getSubProjectItemsStart = makeActionCreator(types.GET_SUB_PROJECT_ITEMS_START);

/**
 * @function
 * @name getSubProjectItemsSuccess
 * @param {Object} payload sub project Items
 * @return {Object} action
 * */
export const getSubProjectItemsSuccess = makeActionCreator(types.GET_SUB_PROJECT_ITEMS_SUCCESS, 'payload');

/**
 * @function
 * @name getSubProjectItemsFailure
 * @param {Object} payload sub project Items failure response
 * @return {Object} action
 * */
export const getSubProjectItemsFailure = makeActionCreator(types.GET_SUB_PROJECT_ITEMS_FAILURE, 'payload');

/**
 * @function
 * @name createSubProjectItemStart
 * @param {*} item 
 */
export function createSubProjectItemStart(item) {
  return {
    type: types.CREATE_SUB_PROJECT_ITEM_START,
    payload: item
  };
}

/**
 * @function
 * @name createSubProjectItemSuccess
 * @param {*} item 
 */
export function createSubProjectItemSuccess(item) {
  return {
    type: types.CREATE_SUB_PROJECT_ITEM_SUCCESS,
    payload: item,
  };
}

/**
 * @function
 * @name createSubProjectItemFailure
 * @param {*} error 
 */
export function createSubProjectItemFailure(error) {
  return {
    type: types.CREATE_SUB_PROJECT_ITEM_FAILURE,
    payload: error,
  };
}


/**
 * @function
 * @name getSubProjectEquipmentsStart
 * @return {Object} action
 * */
export const getSubProjectEquipmentsStart = makeActionCreator(types.GET_SUB_PROJECT_EQUIPMENTS_START);

/**
 * @function
 * @name getSubProjectEquipmentsSuccess
 * @param {Object} payload sub project Equipments
 * @return {Object} action
 * */
export const getSubProjectEquipmentsSuccess = makeActionCreator(types.GET_SUB_PROJECT_EQUIPMENTS_SUCCESS, 'payload');

/**
 * @function
 * @name getSubProjectEquipmentsFailure
 * @param {Object} payload sub project Equipments failure response
 * @return {Object} action
 * */
export const getSubProjectEquipmentsFailure = makeActionCreator(types.GET_SUB_PROJECT_EQUIPMENTS_FAILURE, 'payload');

/**
 * @function
 * @name openForm
 * @return {Object} action
 * */
export const openForm = makeActionCreator(types.OPEN_FORM);

/**
 * @function
 * @name closeForm
 * @return {Object} action
 * */
export const closeForm = makeActionCreator(types.CLOSE_FORM);


/**
 * @function
 * @name selectedSubProject
 * @returns {Object} action
 */
export const selectedSubProject = makeActionCreator(types.SELECTED_SUB_PROJECT, 'payload');

/**
 * @function
 * @name updateSubProjectStart
 * @param {*} subproject 
 */
export function updateSubProjectStart(subproject) {
  return {
    type: types.UPDATE_SUB_PROJECT_START,
    payload: subproject
  };
}

/**
 * @function
 * @name updateSubProjectSuccess
 * @param {*} subproject 
 */
export function updateSubProjectSuccess(subproject) {
  return {
    type: types.UPDATE_SUB_PROJECT_SUCCESS,
    payload: subproject,
  };
}

/**
 * @function
 * @name updateSubProjectFailure
 * @param {*} error 
 */
export function updateSubProjectFailure(error) {
  return {
    type: types.UPDATE_SUB_PROJECT_FAILURE,
    payload: error,
  };
}